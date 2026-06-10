import fs from "fs";
import path from "path";
import GalleryHero from "@/components/sections/gallery/GalleryHero";
import GalleryCategories from "@/components/sections/gallery/GalleryCategories";
import SchemaMarkup from "@/components/seo/SchemaMarkup";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { webPageSchema, breadcrumbSchema, imageGallerySchema } from "@/lib/seo/structured-data";
import { BASE_URL } from "@/lib/seo/metadata";

export const metadata = generatePageMetadata("gallery");

export default function GalleryPage() {
  const categories = [
    { id: "3d-design", title: "3D Design" },
    { id: "construction", title: "Construction" },
    { id: "drawing", title: "Drawing" },
  ];

  const categoryData = categories.map((cat) => {
    let imagesCount = 0;
    let coverImage = null;

    try {
      const mediaDir = path.join(process.cwd(), "public", "media", cat.id);

      const imagesDir = path.join(mediaDir, "images");
      if (fs.existsSync(imagesDir)) {
        const files = fs
          .readdirSync(imagesDir)
          .filter((file) => file.match(/\.(jpg|jpeg|png|gif|webp)$/i));
        imagesCount = files.length;
        if (files.length > 0) {
          coverImage = `/media/${cat.id}/images/${files[0]}`;
        }
      }
    } catch (error) {
      console.error("Error reading directory for category:", cat.id, error);
    }

    return {
      ...cat,
      imagesCount,
      coverImage:
        coverImage ||
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    };
  });

  // Build gallery schema images from available categories
  const gallerySchemaImages = categoryData
    .filter((cat) => cat.coverImage && !cat.coverImage.startsWith("https://"))
    .map((cat) => ({
      url: `${BASE_URL}${cat.coverImage}`,
      name: `Yungola ${cat.title} — Portfolio Cover`,
      description: `Representative image from Yungola's ${cat.title} portfolio.`,
    }));

  return (
    <>
      <SchemaMarkup
        schemas={[
          webPageSchema({
            url: `${BASE_URL}/gallery`,
            name: "Portfolio | Cinematic Architecture & Construction Projects | Yungola",
            description:
              "Browse Yungola's exclusive portfolio of completed residential and commercial projects. Featuring signature 3D visualizations, master construction masterpieces, and precision architectural drawings across Nigeria.",
            image: `${BASE_URL}/og/yungola-og-gallery.jpg`,
          }),
          breadcrumbSchema([
            { name: "Home", url: BASE_URL },
            { name: "Portfolio", url: `${BASE_URL}/gallery` },
          ]),
          ...(gallerySchemaImages.length > 0
            ? [imageGallerySchema(gallerySchemaImages)]
            : []),
        ]}
      />
      <main className="bg-surface-bright/40 text-darkForeground min-h-screen font-montserrat antialiased">
        {/* Projects Section */}
        <section
          className="py-24 relative overflow-hidden"
          aria-labelledby="projects-heading"
          data-purpose="projects-section"
        >
          {/* Background Grid Lines */}
          <div
            className="absolute inset-0 pointer-events-none z-0 opacity-30"
            style={{
              backgroundImage:
                "linear-gradient(to right, var(--color-outline-variant, #514532) 1px, transparent 1px)",
              backgroundSize: "25% 100%",
            }}
            aria-hidden="true"
          />

          <div className="container relative z-10">
            <GalleryHero />
          </div>
          <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-7xl">
            <GalleryCategories categories={categoryData} />
          </div>
        </section>
      </main>
    </>
  );
}
