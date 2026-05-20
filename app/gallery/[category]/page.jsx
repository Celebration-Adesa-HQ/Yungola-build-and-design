import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import GalleryViewer from "@/components/sections/gallery/GalleryViewer";

export const metadata = {
  title: "Category Gallery | YUNGOLA",
  description: "Explore our category gallery.",
};

const CATEGORIES = {
  "3d-design": "3D Design",
  "construction": "Construction",
  "drawing": "Drawing",
};

export default async function CategoryGalleryPage({ params }) {
  const { category } = await params;

  if (!CATEGORIES[category]) {
    notFound();
  }

  const categoryTitle = CATEGORIES[category];
  const images = [];
  const pdfs = [];

  try {
    const mediaDir = path.join(process.cwd(), "public", "media", category);
    
    const imagesDir = path.join(mediaDir, "images");
    if (fs.existsSync(imagesDir)) {
      const files = fs.readdirSync(imagesDir).filter(file => file.match(/\.(jpg|jpeg|png|gif|webp)$/i));
      images.push(...files.map(f => `/media/${category}/images/${f}`));
    }

    const pdfsDir = path.join(mediaDir, "pdfs");
    if (fs.existsSync(pdfsDir)) {
      const files = fs.readdirSync(pdfsDir).filter(file => file.endsWith(".pdf"));
      pdfs.push(...files.map(f => `/media/${category}/pdfs/${f}`));
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
