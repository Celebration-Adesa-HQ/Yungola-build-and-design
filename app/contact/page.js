import ContactHero from "@/components/sections/contact/ContactHero";
import ContactForm from "@/components/sections/contact/ContactForm";
import OfficeDirectory from "@/components/sections/contact/OfficeDirectory";
import { contactContent } from "@/lib/data/siteContent";

export const metadata = {
  title: "Contact Us | YUNGOLA",
  description:
    "Get in touch with Yungola Build and Design to discuss your architectural and construction needs.",
};

export default function ContactPage() {
  const { hero } = contactContent;

  return (
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
  );
}
