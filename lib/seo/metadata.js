/**
 * @file lib/seo/metadata.js
 * @description Central SEO configuration and reusable metadata generator for
 * Yungola Build and Design. Import `generatePageMetadata` in any page to get
 * fully-hydrated, opengraph-ready Next.js Metadata objects.
 */

/** Canonical base URL (no trailing slash) */
export const BASE_URL = "https://www.yungolabuildanddesign.com";

/** Shared brand identity tokens */
export const BRAND = {
  name: "Yungola Build and Design",
  shortName: "YUNGOLA",
  tagline: "Building Your Vision. Designing Your Future.",
  locale: "en_NG",
  twitterHandle: "@yungolabuild",
  ogImage: `${BASE_URL}/og/yungola-og-default.jpg`,
  logoUrl: `${BASE_URL}/logo.png`,
  themeColor: "#ffe08b",
};

/**
 * Global keyword pool — combined with page-specific keywords at the page level.
 * Ordered by estimated search volume relevance for the Nigerian luxury market.
 */
export const GLOBAL_KEYWORDS = [
  // Brand
  "Yungola Build and Design",
  "Yungola architecture",
  "Yungola construction",
  "Yungola Nigeria",
  // Core Services
  "architecture firm Nigeria",
  "construction company Lagos",
  "luxury construction Nigeria",
  "architectural design Nigeria",
  "building design Lagos",
  "architectural firm Lagos",
  // High-intent buyer queries
  "build a house Nigeria",
  "house construction company Nigeria",
  "residential construction Lagos",
  "commercial construction Nigeria",
  "luxury home builder Nigeria",
  "turnkey construction Nigeria",
  "certified architects Nigeria",
  "NIA certified architect",
  // 3D / Design
  "3D architectural visualization Nigeria",
  "photorealistic render Nigeria",
  "building visualization Lagos",
  // Interior / Curation
  "interior design Nigeria",
  "luxury interior Lagos",
  "bespoke furniture Nigeria",
  // Location
  "Ojodu Lagos architect",
  "Lekki construction firm",
  "Abuja construction company",
];

/**
 * Per-page SEO configs.
 * Each entry maps a route key → { title, description, keywords[], ogImage? }
 */
export const PAGE_SEO = {
  home: {
    title: "Yungola Build and Design | Architecture & Luxury Construction Nigeria",
    description:
      "Yungola Build and Design is Nigeria's premium architectural design and construction studio. We transform visions into breathtaking built realities — from photorealistic 3D designs to luxury turnkey construction in Lagos, Abuja, and beyond.",
    keywords: [
      "luxury architecture Nigeria",
      "cinematic architectural design",
      "premium construction Nigeria",
      "architectural studio Lagos",
      "house design and build Nigeria",
    ],
    ogImage: `${BASE_URL}/og/yungola-og-home.jpg`,
  },
  about: {
    title: "About Yungola Build and Design",
    description:
      "Meet the Yungola Build and Design team — NIA-certified architects and master builders with 10+ years delivering luxury residential and commercial masterpieces across Nigeria. Learn about our mission and design philosophy.",
    keywords: [
      "about Yungola Build and Design",
      "NIA certified architect Nigeria",
      "architectural firm history Nigeria",
      "Lagos architecture company",
      "luxury design firm Nigeria",
      "master builders Nigeria",
    ],
    ogImage: `${BASE_URL}/og/yungola-og-about.jpg`,
  },
  services: {
    title: "Our Services | 3D Design, Construction & Architecture",
    description:
      "Explore Yungola's full suite of luxury services: hyper-realistic 3D architectural visualization, master construction, conceptual blueprinting, luxury interior curation, and full turnkey project management across Nigeria.",
    keywords: [
      "architectural services Nigeria",
      "3D architectural rendering Nigeria",
      "turnkey construction Lagos",
      "interior design services Lagos",
      "conceptual blueprinting Nigeria",
      "construction management Nigeria",
      "building services Nigeria",
      "architectural visualization Lagos",
    ],
    ogImage: `${BASE_URL}/og/yungola-og-services.jpg`,
  },
  gallery: {
    title: "Portfolio | Architecture & Construction Projects",
    description:
      "Browse Yungola's exclusive portfolio of completed residential and commercial projects. Featuring signature 3D visualizations, master construction masterpieces, and precision architectural drawings across Nigeria.",
    keywords: [
      "architecture portfolio Nigeria",
      "luxury construction projects Lagos",
      "residential projects Nigeria",
      "commercial projects Nigeria",
      "architectural renders Nigeria",
      "construction portfolio Lagos",
    ],
    ogImage: `${BASE_URL}/og/yungola-og-gallery.jpg`,
  },
  contact: {
    title: "Contact Us | Consult with Yungola Build and Design",
    description:
      "Ready to build your vision? Contact Yungola Build and Design for a free consultation. Our principal architects are available Mon–Fri to discuss your residential or commercial project. Located in Ojodu, Lagos.",
    keywords: [
      "contact Yungola",
      "architecture consultation Lagos",
      "free consultation architect Nigeria",
      "hire architect Nigeria",
      "construction quote Nigeria",
      "contact architectural firm Lagos",
    ],
    ogImage: `${BASE_URL}/og/yungola-og-contact.jpg`,
  },
};

/**
 * Generates a fully-hydrated Next.js Metadata object for a given page.
 *
 * @param {keyof typeof PAGE_SEO} pageKey  — One of the keys in PAGE_SEO.
 * @param {object}  [overrides]            — Optional field-level overrides.
 * @returns {import("next").Metadata}
 *
 * @example
 * // In app/about/page.js
 * export const metadata = generatePageMetadata("about");
 */
export function generatePageMetadata(pageKey, overrides = {}) {
  const page = PAGE_SEO[pageKey] ?? PAGE_SEO.home;

  const mergedKeywords = [
    ...new Set([...(page.keywords ?? []), ...GLOBAL_KEYWORDS]),
  ];

  return {
    metadataBase: new URL(BASE_URL),

    // ── Title ──────────────────────────────────────────────────────────────
    title: overrides.title ?? page.title,

    // ── Description ────────────────────────────────────────────────────────
    description: overrides.description ?? page.description,

    // ── Keywords ───────────────────────────────────────────────────────────
    keywords: overrides.keywords ?? mergedKeywords,

    // ── Authorship ─────────────────────────────────────────────────────────
    authors: [{ name: BRAND.name, url: BASE_URL }],
    creator: BRAND.name,
    publisher: BRAND.name,

    // ── Canonical ──────────────────────────────────────────────────────────
    alternates: overrides.alternates ?? undefined,

    // ── Open Graph ─────────────────────────────────────────────────────────
    openGraph: {
      type: "website",
      locale: BRAND.locale,
      url: overrides.url ?? BASE_URL,
      siteName: BRAND.name,
      title: overrides.title ?? page.title,
      description: overrides.description ?? page.description,
      images: [
        {
          url: overrides.ogImage ?? page.ogImage ?? BRAND.ogImage,
          width: 1200,
          height: 630,
          alt: `${BRAND.name} — ${overrides.title ?? page.title}`,
        },
      ],
      ...overrides.openGraph,
    },

    // ── Twitter / X ────────────────────────────────────────────────────────
    twitter: {
      card: "summary_large_image",
      site: BRAND.twitterHandle,
      creator: BRAND.twitterHandle,
      title: overrides.title ?? page.title,
      description: overrides.description ?? page.description,
      images: [overrides.ogImage ?? page.ogImage ?? BRAND.ogImage],
      ...overrides.twitter,
    },

    // ── Robots ─────────────────────────────────────────────────────────────
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
      ...overrides.robots,
    },

    // ── Verification (add when DNS tokens are ready) ───────────────────────
    // verification: {
    //   google: "YOUR_GOOGLE_SEARCH_CONSOLE_TOKEN",
    //   yandex: "YOUR_YANDEX_TOKEN",
    // },

    ...overrides,
  };
}
