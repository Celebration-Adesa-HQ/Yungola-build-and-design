import fs from "fs";
import path from "path";

// We will dynamically import image-size to avoid Turbopack interop issues

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
 * Get dynamic categories from the media directory.
 * @returns {{ id: string, title: string }[]}
 */
export function getDynamicCategories() {
  const mediaDir = path.join(process.cwd(), "public", "media");
  if (!fs.existsSync(mediaDir)) return [];

  const folders = fs.readdirSync(mediaDir).filter(f => {
    try {
      return fs.statSync(path.join(mediaDir, f)).isDirectory();
    } catch {
      return false;
    }
  });

  return folders.map(folder => {
    const title = folder
      .split("-")
      .map(w => w.toLowerCase() === "3d" ? "3D" : w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");

    return {
      id: folder,
      title: title
    };
  });
}

/**
 * Read all images in a category folder and return them with dimension metadata.
 * @param {string} category - e.g. "3d-design", "construction", "drawing"
 * @returns {{ src: string, width: number, height: number, orientation: "landscape"|"portrait"|"square", qualityScore: number }[]}
 */
export async function getMediaWithDimensions(category) {
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

  let getImageSize;
  try {
    const pkg = await import("image-size");
    getImageSize = typeof pkg.default === "function" ? pkg.default : (pkg.imageSize || pkg);
  } catch (e) {
    console.error("Failed to import image-size:", e);
    return [];
  }

  for (const file of files) {
    const filePath = path.join(imagesDir, file);
    try {
      const stats = fs.statSync(filePath);
      const fileBuffer = fs.readFileSync(filePath);
      const dimensions = getImageSize(fileBuffer);
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
    } catch (e) {
      console.error(`Error reading image ${file}:`, e.message);
    }
  }

  console.log(`Loaded ${results.length} images for category: ${category}`);

  // Sort by quality score descending (best images first)
  return results.sort((a, b) => b.qualityScore - a.qualityScore);
}

/**
 * Get the single best landscape cover image for a category.
 * Falls back to portrait/square if no landscape available.
 * @param {string} category
 * @returns {string|null} public URL
 */
export async function getBestCoverImage(category) {
  const images = await getMediaWithDimensions(category);
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
    landscape: images.filter((i) => i.orientation === "landscape"),
    portrait: images.filter((i) => i.orientation === "portrait"),
    square: images.filter((i) => i.orientation === "square"),
  };
}
