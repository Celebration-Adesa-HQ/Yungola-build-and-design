import ContactHero from "@/components/sections/contact/ContactHero";
import ContactForm from "@/components/sections/contact/ContactForm";
import OfficeDirectory from "@/components/sections/contact/OfficeDirectory";
import SchemaMarkup from "@/components/seo/SchemaMarkup";
import { generatePageMetadata } from "@/lib/seo/metadata";
import {
  webPageSchema,
  breadcrumbSchema,
  professionalServiceSchema,
} from "@/lib/seo/structured-data";
import { BASE_URL } from "@/lib/seo/metadata";

export const metadata = generatePageMetadata("contact", {
  alternates: {
    canonical: `${BASE_URL}/contact`,
  },
});

export default function ContactPage() {
  return (
    <>
      <SchemaMarkup
        schemas={[
          webPageSchema({
            url: `${BASE_URL}/contact`,
            name: "Contact Us | Consult with Yungola Build and Design | Lagos Nigeria",
            description:
              "Ready to build your vision? Contact Yungola Build and Design for a free consultation. Our principal architects are available Mon–Fri to discuss your residential or commercial project. Located in Ogba, Lagos.",
            image: `${BASE_URL}/og/yungola-og-contact.jpg`,
          }),
          breadcrumbSchema([
            { name: "Home", url: BASE_URL },
            { name: "Contact", url: `${BASE_URL}/contact` },
          ]),
          professionalServiceSchema(),
        ]}
      />
      <div className="bg-surface-bright/40 text-darkForeground min-h-screen pt-24 font-montserrat antialiased">
        {/* Cinematic Animated Hero Section */}
        <ContactHero />

        {/* Main Contact Section (Split Screen Noir Layout) */}
        <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto border-x border-outline-variant">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-start">
            <ContactForm />
            <OfficeDirectory /> 
          </div>
        </section>
      </div>
    </>
  );
}
