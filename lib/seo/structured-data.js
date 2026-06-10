/**
 * @file lib/seo/structured-data.js
 * @description Reusable JSON-LD structured-data schema generators.
 * Each function returns a plain JS object (Schema.org graph node) ready to be
 * serialised with JSON.stringify and injected via <SchemaMarkup />.
 *
 * All schemas follow Schema.org + Google's Rich Results guidelines:
 * https://developers.google.com/search/docs/appearance/structured-data
 */

import { BASE_URL, BRAND } from "./metadata";

// ─────────────────────────────────────────────────────────────────────────────
// 1. ORGANIZATION / LOCAL BUSINESS  (used in root layout)
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Full ArchitectureFirm + LocalBusiness schema for the root layout.
 * Qualifies for Google's Knowledge Panel enrichment.
 */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["ArchitectureFirm", "LocalBusiness"],
    "@id": `${BASE_URL}/#organization`,
    name: BRAND.name,
    alternateName: "YUNGOLA",
    url: BASE_URL,
    logo: {
      "@type": "ImageObject",
      url: BRAND.logoUrl,
      width: 512,
      height: 512,
    },
    image: [
      `${BASE_URL}/og/yungola-og-default.jpg`,
      `${BASE_URL}/og/yungola-og-home.jpg`,
    ],
    description:
      "Premium cinematic architectural design and construction studio. We transform visions into high-end built realities — from concept drawings to completed luxury homes and commercial spaces across Nigeria.",
    foundingDate: "2014",
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      minValue: 15,
      maxValue: 50,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "5, Ayanleye Street, Ogba",
      addressLocality: "Lagos",
      addressRegion: "Lagos State",
      postalCode: "234",
      addressCountry: "NG",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 6.6018,
      longitude: 3.3515,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+2349071518988",
        contactType: "customer service",
        contactOption: "TollFree",
        areaServed: "NG",
        availableLanguage: ["English"],
      },
      {
        "@type": "ContactPoint",
        telephone: "+2348054170858",
        contactType: "sales",
        areaServed: "NG",
        availableLanguage: ["English"],
      },
    ],
    email: "info@yungolabuildanddesign.com",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00",
      },
    ],
    sameAs: [
      "https://instagram.com/yungolabuildanddesign",
      "https://linkedin.com/company/yungola-build-and-design",
      "https://wa.me/23480541708584",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Architectural & Construction Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "3D Architectural Design",
            url: `${BASE_URL}/gallery/3d-design`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Master Construction",
            url: `${BASE_URL}/gallery/construction`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Architectural Drawing",
            url: `${BASE_URL}/gallery/drawing`,
          },
        },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "47",
      bestRating: "5",
    },
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// 2. WEBSITE  (used in root layout — enables Sitelinks Search Box)
// ─────────────────────────────────────────────────────────────────────────────

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    url: BASE_URL,
    name: BRAND.name,
    description: BRAND.tagline,
    publisher: {
      "@id": `${BASE_URL}/#organization`,
    },
    inLanguage: "en-NG",
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// 3. WEBPAGE  (used per-page for Google's WebPage entity)
// ─────────────────────────────────────────────────────────────────────────────

/**
 * @param {object} opts
 * @param {string} opts.url         — Canonical URL of this page
 * @param {string} opts.name        — Page title
 * @param {string} opts.description — Page meta description
 * @param {string} [opts.image]     — OG image URL
 */
export function webPageSchema({ url, name, description, image }) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    isPartOf: { "@id": `${BASE_URL}/#website` },
    about: { "@id": `${BASE_URL}/#organization` },
    inLanguage: "en-NG",
    ...(image && {
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: image,
        width: 1200,
        height: 630,
      },
    }),
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// 4. BREADCRUMB LIST  (improves SERP path display)
// ─────────────────────────────────────────────────────────────────────────────

/**
 * @param {Array<{name: string, url: string}>} crumbs
 *   Ordered array of breadcrumb items (include the home page as first item).
 *
 * @example
 * breadcrumbSchema([
 *   { name: "Home",     url: BASE_URL },
 *   { name: "Services", url: `${BASE_URL}/services` },
 * ])
 */
export function breadcrumbSchema(crumbs) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// 5. SERVICE  (used on the Services page for each service offering)
// ─────────────────────────────────────────────────────────────────────────────

/**
 * @param {object} opts
 * @param {string} opts.name        — Service name (e.g. "3D Architectural Design")
 * @param {string} opts.description — Service description
 * @param {string} opts.url         — Canonical URL for this service
 * @param {string} [opts.image]     — Representative image URL
 */
export function serviceSchema({ name, description, url, image }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    provider: {
      "@id": `${BASE_URL}/#organization`,
    },
    areaServed: {
      "@type": "Country",
      name: "Nigeria",
    },
    serviceType: "Architectural & Construction Services",
    ...(image && {
      image: {
        "@type": "ImageObject",
        url: image,
      },
    }),
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// 6. FAQ PAGE  (unlocks FAQ rich results in SERP)
// ─────────────────────────────────────────────────────────────────────────────

/**
 * @param {Array<{question: string, answer: string}>} faqs
 */
export function faqSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// 7. REVIEW / AGGREGATE RATING  (rich star snippet in SERP)
// ─────────────────────────────────────────────────────────────────────────────

/**
 * @param {Array<{author: string, reviewBody: string, ratingValue?: number, datePublished?: string}>} reviews
 */
export function reviewSchema(reviews) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: BRAND.name,
    description:
      "Premium cinematic architectural design and construction studio in Lagos, Nigeria.",
    brand: {
      "@type": "Brand",
      name: BRAND.name,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: String(reviews.length || 47),
      bestRating: "5",
    },
    review: reviews.map(({ author, reviewBody, ratingValue = 5, datePublished }) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: author,
      },
      reviewBody,
      reviewRating: {
        "@type": "Rating",
        ratingValue: String(ratingValue),
        bestRating: "5",
      },
      ...(datePublished && { datePublished }),
      itemReviewed: {
        "@id": `${BASE_URL}/#organization`,
      },
    })),
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// 8. PROFESSIONAL SERVICE  (ContactPage — Local Business search enrichment)
// ─────────────────────────────────────────────────────────────────────────────

export function professionalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${BASE_URL}/contact#professionalservice`,
    name: BRAND.name,
    url: `${BASE_URL}/contact`,
    telephone: "+2349071518988",
    email: "info@yungolabuildanddesign.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "5, Ayanleye Street, Ogba",
      addressLocality: "Lagos",
      addressRegion: "Lagos State",
      addressCountry: "NG",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00",
      },
    ],
    priceRange: "₦₦₦₦",
    currenciesAccepted: "NGN",
    paymentAccepted: "Cash, Bank Transfer",
    areaServed: "Nigeria",
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// 9. IMAGE OBJECT  (for gallery pages — image SEO)
// ─────────────────────────────────────────────────────────────────────────────

/**
 * @param {Array<{url: string, name: string, description?: string, width?: number, height?: number}>} images
 */
export function imageGallerySchema(images) {
  return {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: `${BRAND.name} Project Portfolio`,
    description:
      "Cinematic architectural portfolio showcasing completed residential and commercial projects across Nigeria.",
    url: `${BASE_URL}/gallery`,
    author: {
      "@id": `${BASE_URL}/#organization`,
    },
    image: images.map(({ url, name, description, width, height }) => ({
      "@type": "ImageObject",
      url,
      name,
      ...(description && { description }),
      ...(width && { width }),
      ...(height && { height }),
      author: { "@id": `${BASE_URL}/#organization` },
      copyrightHolder: { "@id": `${BASE_URL}/#organization` },
    })),
  };
}
