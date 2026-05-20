import fs from "fs";
import path from "path";
import sizeOf from "image-size";

/**
 * Classify image orientation based on width/height ratio.
 * @param {number} width
 * @param {number} height
 * @returns {"landscape"|"portrait"|"square"}
 */
function classifyOrientation(width, height) {
  const ratio = width / height;
  if (ratio >= 1.2) return "landscape";
  if (ratio <= 0.85) return "portrait";
  return "square";
}

/**
 * Compute a quality score for image selection priority.
 * Larger files tend to be higher resolution/quality.
 * @param {number} sizeBytes
 * @param {number} width
 * @param {number} height
 * @returns {number}
 */
function computeQualityScore(sizeBytes, width, height) {
  const pixels = width * height;
  return pixels + sizeBytes * 0.01;
}

/**
 * Read all images in a category folder and return them with dimension metadata.
 * @param {string} category - e.g. "3d-design", "construction", "drawing"
 * @returns {{ src: string, width: number, height: number, orientation: "landscape"|"portrait"|"square", qualityScore: number }[]}
 */
export function getMediaWithDimensions(category) {
  const imagesDir = path.join(
    process.cwd(),
    "public",
    "media",
    category,
    "images",
  );

  if (!fs.existsSync(imagesDir)) return [];

  const files = fs
    .readdirSync(imagesDir)
    .filter((f) => /\.(jpe?g|png|gif|webp)$/i.test(f));

  const results = [];

  for (const file of files) {
    const filePath = path.join(imagesDir, file);
    try {
      const stats = fs.statSync(filePath);
      const dimensions = sizeOf(filePath);
      const { width, height } = dimensions;

      if (!width || !height) continue;

      const orientation = classifyOrientation(width, height);
      const qualityScore = computeQualityScore(stats.size, width, height);

      results.push({
        src: `/media/${category}/images/${file}`,
        width,
        height,
        orientation,
        qualityScore,
        sizeBytes: stats.size,
      });
    } catch {
      // Skip unreadable files silently
    }
  }

  // Sort by quality score descending (best images first)
  return results.sort((a, b) => b.qualityScore - a.qualityScore);
}

/**
 * Get the single best landscape cover image for a category.
 * Falls back to portrait/square if no landscape available.
 * @param {string} category
 * @returns {string|null} public URL
 */
export function getBestCoverImage(category) {
  const images = getMediaWithDimensions(category);
  if (!images.length) return null;

  const landscape = images.find((img) => img.orientation === "landscape");
  return (landscape ?? images[0]).src;
}

/**
 * Split images into orientation buckets for smart layout placement.
 * @param {{ src: string, orientation: string }[]} images
 * @returns {{ landscape: string[], portrait: string[], square: string[] }}
 */
export function splitByOrientation(images) {
  return {
    landscape: images
      .filter((i) => i.orientation === "landscape")
      .map((i) => i.src),
    portrait: images
      .filter((i) => i.orientation === "portrait")
      .map((i) => i.src),
    square: images.filter((i) => i.orientation === "square").map((i) => i.src),
  };
}
