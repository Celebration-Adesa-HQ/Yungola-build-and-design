/**
 * @file app/robots.js
 * @description Next.js robots.txt generator.
 * Controls how search engine crawlers index and traverse the site.
 * Ref: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots
 */

export default function robots() {
  const baseUrl = "https://www.yungolabuildanddesign.com";

  return {
    rules: [
      {
        // Allow all major search engines full access
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",       // API route handlers — never expose
          "/_next/",     // Next.js internals
          "/admin/",     // Admin routes (if added in future)
          "/*.json$",    // Raw JSON files
        ],
      },
      {
        // Prevent AI scrapers from training on site content
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "Google-Extended",
          "CCBot",
          "anthropic-ai",
          "Claude-Web",
          "Omgilibot",
        ],
        disallow: "/",
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
