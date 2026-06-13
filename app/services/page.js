import ServicesHero from "@/components/sections/services/ServicesHero";
import ServicesGrid from "@/components/sections/services/ServicesGrid";
import CoreCapabilities from "@/components/sections/services/CoreCapabilities";
import InteriorStyles from "@/components/sections/services/InteriorStyles";
import MaterialSamples from "@/components/sections/services/MaterialSamples";
import ShowHero from "@/components/sections/services/ShowHero";
import SchemaMarkup from "@/components/seo/SchemaMarkup";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { webPageSchema, breadcrumbSchema, serviceSchema, faqSchema } from "@/lib/seo/structured-data";
import { BASE_URL } from "@/lib/seo/metadata";

export const metadata = generatePageMetadata("services");

const SERVICES_FAQS = [
  {
    question: "What does Yungola's 3D architectural design service include?",
    answer:
      "Our 3D design service produces hyper-realistic photorealistic architectural visualizations and immersive virtual walkthroughs. You can explore, review, and perfect every detail of your space before construction begins, saving time and money.",
  },
  {
    question: "What is included in Yungola's turnkey construction service?",
    answer:
      "Our turnkey service covers the full project lifecycle — from conceptual blueprinting and 3D visualization through to master construction, luxury interior curation, bespoke furniture sourcing, and final key handover. You receive a completely finished, move-in-ready property.",
  },
  {
    question: "Do you handle both residential and commercial construction?",
    answer:
      "Yes. Yungola Build and Design executes both high-end residential projects (luxury villas, estates) and commercial developments (corporate headquarters, retail, mixed-use). We have completed over 50 projects across Nigeria.",
  },
  {
    question: "What architectural drawing services does Yungola offer?",
    answer:
      "Our architectural drawing service covers site analysis, spatial planning, structural drawings, MEP (mechanical, electrical, plumbing) coordination, regulatory compliance drawings, and detailed construction documentation.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <SchemaMarkup
        schemas={[
          webPageSchema({
            url: `${BASE_URL}/services`,
            name: "Our Services | 3D Design, Construction & Architecture | Yungola",
            description:
              "Explore Yungola's full suite of luxury services: hyper-realistic 3D architectural visualization, master construction, conceptual blueprinting, luxury interior curation, and full turnkey project management across Nigeria.",
            image: `${BASE_URL}/og/yungola-og-services.jpg`,
          }),
          breadcrumbSchema([
            { name: "Home", url: BASE_URL },
            { name: "Services", url: `${BASE_URL}/services` },
          ]),
          serviceSchema({
            name: "3D Architectural Design & Visualization",
            description:
              "Hyper-realistic photorealistic architectural visualizations and immersive walkthroughs, allowing you to explore and perfect your space before construction begins.",
            url: `${BASE_URL}/gallery/3d-design`,
            image: `${BASE_URL}/media/3d-design/images/3.JPEG`,
          }),
          serviceSchema({
            name: "Master Construction",
            description:
              "Executing complex architectural designs requires elite craftsmanship and uncompromising engineering standards. We manage the entire build lifecycle with absolute precision.",
            url: `${BASE_URL}/gallery/construction`,
            image: `${BASE_URL}/media/construction/images/7a1d6f84-98f3-4b8f-b7d8-df8b610452ce.JPEG`,
          }),
          serviceSchema({
            name: "Architectural Drawing & Blueprinting",
            description:
              "Rigorous site analysis, spatial planning, and conceptual development. Our blueprinting phase marries structural integrity with your lifestyle aspirations.",
            url: `${BASE_URL}/gallery/drawing`,
            image: `${BASE_URL}/media/drawing/images/IMG_0866.JPG`,
          }),
          faqSchema(SERVICES_FAQS),
        ]}
      />
      <div className="bg-surface-bright/40 text-darkForeground min-h-screen pt-24 font-montserrat antialiased">
        {/* Page Header */}
        <ShowHero />

        {/* Services Section - Bordered Container */}
        <section className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto border-x border-outline-variant/40 bg-surface-container/30 backdrop-blur-sm">
          <ServicesHero />
          <ServicesGrid />
          <CoreCapabilities />
        </section>

        {/* Optional: Subtle bottom accent bar */}
        <div className="h-1 bg-linear-to-r from-accent via-secondary to-tertiary" />
      </div>
    </>
  );
}
