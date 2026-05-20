import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import GalleryViewer from "@/components/sections/gallery/GalleryViewer";

export const metadata = {
  title: "Category Gallery | YUNGOLA",
  description: "Explore our category gallery.",
};

export default async function CategoryGalleryPage({ params }) {
  const { category } = await params;
  const { getDynamicCategories } = require("@/lib/media/getMediaWithDimensions");
  const dynamicCategories = getDynamicCategories();
  const currentCategory = dynamicCategories.find(c => c.id === category);

  if (!currentCategory) {
    notFound();
  }

  const categoryTitle = currentCategory.title;
  const images = [];
  const pdfs = [];

  try {
    const { getMediaWithDimensions, splitByOrientation } = require("@/lib/media/getMediaWithDimensions");
    const media = getMediaWithDimensions(category);
    const split = splitByOrientation(media);
    
    // For Masonry grids and gallery cards, prioritize portrait and square.
    // If not enough, we can include some landscape, but portrait/square is preferred.
    const masonryImages = [...split.portrait, ...split.square, ...split.landscape];
    images.push(...masonryImages);

    const pdfsDir = path.join(process.cwd(), "public", "media", category, "pdfs");
    if (fs.existsSync(pdfsDir)) {
      const files = fs
        .readdirSync(pdfsDir)
        .filter((file) => file.endsWith(".pdf"));
      pdfs.push(...files.map((f) => `/media/${category}/pdfs/${f}`));
    }
  } catch (error) {
    console.error("Error reading directory for category:", category, error);
  }

  return (
    <main className="bg-surface-bright/40 text-darkForeground min-h-screen pt-32 font-montserrat antialiased">
      <GalleryViewer
        categoryTitle={categoryTitle}
        images={images}
        pdfs={pdfs}
      />
    </main>
  );
}
