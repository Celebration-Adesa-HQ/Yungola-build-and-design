/**
 * @file app/sitemap.js
 * @description Next.js XML sitemap generator.
 * Produces a fully-structured sitemap with accurate priorities and frequencies.
 * Ref: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap
 */

import { showroomContent } from "@/lib/data/siteContent";

const BASE_URL = "https://www.yungolabuildanddesign.com";

/**
 * Build date anchors. Using a fixed recent date per segment avoids noisy
 * "always-changing" lastModified values that confuse crawlers.
 * Update these when you ship significant page content changes.
 */
const DATES = {
  home: "2024-12-01",
  gallery: "2024-11-15",
  services: "2024-10-20",
  about: "2024-09-10",
  contact: "2024-08-01",
  category: "2024-11-01",
};

export default function sitemap() {
  // ── Core static pages ────────────────────────────────────────────────────
  const corePages = [
    {
      url: BASE_URL,
      lastModified: DATES.home,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/gallery`,
      lastModified: DATES.gallery,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: DATES.services,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: DATES.about,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: DATES.contact,
      changeFrequency: "yearly",
      priority: 0.75,
    },
  ];

  // ── Dynamic gallery/category pages ───────────────────────────────────────
  const categoryPages = showroomContent.servicesGrid.map((service) => ({
    url: `${BASE_URL}/gallery/${service.id}`,
    lastModified: DATES.category,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...corePages, ...categoryPages];
}
