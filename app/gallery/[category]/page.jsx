import { notFound } from "next/navigation";
import GalleryViewer from "@/components/sections/gallery/GalleryViewer";
import { getDynamicCategories, getMediaWithDimensions, splitByOrientation } from "@/lib/media/getMediaWithDimensions";

export const metadata = {
  title: "Category Gallery | YUNGOLA",
  description: "Explore our category gallery.",
};

export default async function CategoryGalleryPage({ params }) {
  const { category } = await params;
  const dynamicCategories = getDynamicCategories();
  const currentCategory = dynamicCategories.find(c => c.id === category);

  if (!currentCategory) {
    notFound();
  }

  const categoryTitle = currentCategory.title;
  const images = [];

  try {
    const media = await getMediaWithDimensions(category);
    const split = splitByOrientation(media);
    
    // For Masonry grids and gallery cards, prioritize portrait and square.
    // If not enough, we can include some landscape, but portrait/square is preferred.
    const masonryImages = [...split.portrait, ...split.square, ...split.landscape];
    images.push(...masonryImages);
  } catch (error) {
    console.error("Error reading directory for category:", category, error);
  }

  return (
    <main className="bg-surface-bright/40 text-darkForeground min-h-screen pt-32 font-montserrat antialiased">
      <GalleryViewer
        categoryTitle={categoryTitle}
        images={images}
      />
    </main>
  );
}
