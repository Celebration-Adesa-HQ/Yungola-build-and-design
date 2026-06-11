import { notFound } from "next/navigation";
import GalleryViewer from "@/components/sections/gallery/GalleryViewer";
import SchemaMarkup from "@/components/seo/SchemaMarkup";
import {
  getDynamicCategories,
  getMediaWithDimensions,
  splitByOrientation,
} from "@/lib/media/getMediaWithDimensions";
import { webPageSchema, breadcrumbSchema, imageGallerySchema } from "@/lib/seo/structured-data";
import { BASE_URL, GLOBAL_KEYWORDS } from "@/lib/seo/metadata";

// ─── Per-category SEO copy ────────────────────────────────────────────────────
const CATEGORY_SEO = {
  "3d-design": {
    title: "3D Architectural Design Portfolio",
    description:
      "Explore Yungola's hyper-realistic 3D architectural visualization portfolio. Photorealistic renders and immersive walkthroughs of residential and commercial projects across Nigeria.",
    keywords: [
      "3D architectural visualization Nigeria",
      "photorealistic render Nigeria",
      "architectural walkthrough Lagos",
      "3D house design Nigeria",
      "3D render architecture",
    ],
  },
  construction: {
    title: "Construction Portfolio",
    description:
      "View Yungola's completed luxury construction portfolio. Master-crafted residential estates and commercial builds executed with uncompromising engineering standards across Lagos and Nigeria.",
    keywords: [
      "luxury construction portfolio Nigeria",
      "completed construction projects Lagos",
      "residential construction Nigeria",
      "commercial construction portfolio",
      "construction company Lagos portfolio",
    ],
  },
  drawing: {
    title: "Architectural Drawing Portfolio",
    description:
      "Discover Yungola's architectural drawing and blueprinting portfolio. Precision spatial planning, structural drawings, and conceptual development for luxury homes and commercial spaces.",
    keywords: [
      "architectural drawings Nigeria",
      "architectural blueprints Lagos",
      "building plans Nigeria",
      "structural drawings Lagos",
      "architectural drafting Nigeria",
    ],
  },
};

/**
 * Generates static page metadata per category — called by Next.js at build time.
 */
export async function generateMetadata({ params }) {
  const { category } = await params;
  const seo = CATEGORY_SEO[category];

  if (!seo) {
    return {
      title: "Category Portfolio",
      description: "Explore our architectural and construction portfolio.",
    };
  }

  const canonicalUrl = `${BASE_URL}/gallery/${category}`;

  return {
    metadataBase: new URL(BASE_URL),
    title: seo.title,
    description: seo.description,
    keywords: [...new Set([...seo.keywords, ...GLOBAL_KEYWORDS])],
    alternates: { canonical: canonicalUrl },
    openGraph: {
      type: "website",
      url: canonicalUrl,
      title: seo.title,
      description: seo.description,
      siteName: "Yungola Build and Design",
      locale: "en_NG",
      images: [
        {
          url: `${BASE_URL}/og/yungola-og-${category}.jpg`,
          width: 1200,
          height: 630,
          alt: `Yungola ${seo.title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [`${BASE_URL}/og/yungola-og-${category}.jpg`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default async function CategoryGalleryPage({ params }) {
  const { category } = await params;
  const dynamicCategories = getDynamicCategories();
  const currentCategory = dynamicCategories.find((c) => c.id === category);

  if (!currentCategory) {
    notFound();
  }

  const categoryTitle = currentCategory.title;
  const images = [];

  try {
    const media = await getMediaWithDimensions(category);
    const split = splitByOrientation(media);

    // For Masonry grids and gallery cards, prioritize portrait and square.
    const masonryImages = [...split.portrait, ...split.square, ...split.landscape];
    images.push(...masonryImages);
  } catch (error) {
    console.error("Error reading directory for category:", category, error);
  }

  const canonicalUrl = `${BASE_URL}/gallery/${category}`;
  const seo = CATEGORY_SEO[category] ?? {};

  // Build image schema objects from actual media
  const schemaImages = images.slice(0, 20).map((img, idx) => ({
    url: img.src?.startsWith("http") ? img.src : `${BASE_URL}${img.src}`,
    name: `Yungola ${categoryTitle} — Project Image ${idx + 1}`,
    description: `${categoryTitle} project by Yungola Build and Design.`,
    ...(img.width && { width: img.width }),
    ...(img.height && { height: img.height }),
  }));

  return (
    <>
      <SchemaMarkup
        schemas={[
          webPageSchema({
            url: canonicalUrl,
            name: seo.title ?? `${categoryTitle} Portfolio | Yungola`,
            description:
              seo.description ??
              `Explore Yungola Build and Design's ${categoryTitle} portfolio.`,
            image: `${BASE_URL}/og/yungola-og-${category}.jpg`,
          }),
          breadcrumbSchema([
            { name: "Home", url: BASE_URL },
            { name: "Portfolio", url: `${BASE_URL}/gallery` },
            { name: categoryTitle, url: canonicalUrl },
          ]),
          ...(schemaImages.length > 0 ? [imageGallerySchema(schemaImages)] : []),
        ]}
      />
      <main className="bg-surface-bright/40 text-darkForeground min-h-screen pt-32 font-montserrat antialiased">
        <GalleryViewer categoryTitle={categoryTitle} images={images} />
      </main>
    </>
  );
}
