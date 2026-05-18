import ContactForm from "@/components/sections/contact/ContactForm";
import StudioDirectory from "@/components/sections/contact/StudioDirectory";

export const metadata = {
  title: "Contact Us | YUNGOLA",
  description: "Get in touch with Yungola Build and Design to discuss your architectural and construction needs.",
};

export default function ContactPage() {
  return (
    <div className="bg-darkBackground text-darkForeground min-h-screen pt-24 font-montserrat antialiased">
      {/* Cinematic Hero Section */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden border-b border-outline-variant">
        {/* Background Grid Lines */}
        <div
          className="absolute inset-0 pointer-events-none z-0 opacity-40"
          style={{
            backgroundImage: "linear-gradient(to right, var(--color-surface-container) 1px, transparent 1px)",
            backgroundSize: "25% 100%",
          }}
        ></div>
        <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1920&q=80')` }} role="img" aria-label="Company building exterior" />
        <div className="absolute inset-0 bg-darkBackground/85 z-10" />

        <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-16 w-full">
          <p className="text-xs text-accent uppercase tracking-[0.25em] mb-4 font-montserrat font-bold">
            YUNGOLA | ACRINO
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-darkForeground uppercase tracking-tight font-oswald mb-6">
            Contact Studio
          </h1>
          <p className="text-base md:text-lg text-darkSecondaryForeground max-w-3xl leading-relaxed font-hanken">
            Whether you are planning a landmark residential monolith, a commercial high-rise, or a bespoke interior curation, our master architects and engineers are ready to bring your vision to life.
          </p>
        </div>
      </section>

      {/* Main Contact Section (Split Screen Noir Layout) */}
      <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto border-x border-outline-variant">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-start">
          <ContactForm />
          <StudioDirectory />
        </div>
      </section>
    </div>
  );
}
