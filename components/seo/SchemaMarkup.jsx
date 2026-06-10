"use client";

/**
 * @file components/seo/SchemaMarkup.jsx
 * @description Reusable client component that injects one or more JSON-LD
 * structured-data schemas as <script type="application/ld+json"> tags.
 *
 * Usage:
 *   import SchemaMarkup from "@/components/seo/SchemaMarkup";
 *   import { breadcrumbSchema, webPageSchema } from "@/lib/seo/structured-data";
 *
 *   <SchemaMarkup schemas={[
 *     breadcrumbSchema([{ name: "Home", url: "..." }, { name: "About", url: "..." }]),
 *     webPageSchema({ url: "...", name: "...", description: "..." }),
 *   ]} />
 */

export default function SchemaMarkup({ schemas = [] }) {
  if (!schemas || schemas.length === 0) return null;

  return (
    <>
      {schemas.map((schema, idx) => (
        <script
          key={idx}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema, null, 0),
          }}
        />
      ))}
    </>
  );
}
