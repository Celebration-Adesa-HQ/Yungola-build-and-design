import ShowroomHero from "@/components/sections/showroom/ShowroomHero";
import ServicesGrid from "@/components/sections/showroom/ServicesGrid";
import CoreCapabilities from "@/components/sections/showroom/CoreCapabilities";
import InteriorStyles from "@/components/sections/showroom/InteriorStyles";
import MaterialSamples from "@/components/sections/showroom/MaterialSamples";
import ShowHero from "@/components/sections/showroom/ShowHero";

export const metadata = {
  title: "Our Services | YUNGOLA",
  description:
    "Explore our core capabilities, signature design styles, and premium material palette.",
};

export default function ServicesPage() {
  return (
    <div className="bg-surface-bright/40 text-darkForeground min-h-screen pt-24 font-montserrat antialiased">
      {/* Page Header */}
      <ShowHero />

      {/* Services Section - Bordered Container */}
      <section className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto border-x border-outline-variant/40 bg-surface-container/30 backdrop-blur-sm">
        <ShowroomHero />
        <ServicesGrid />
        <CoreCapabilities />
      </section>

      {/* Full-Width Sections */}
      <div className="bg-surface-container-low/50">
        <InteriorStyles />
        <MaterialSamples />
      </div>

      {/* Optional: Subtle bottom accent bar */}
      <div className="h-1 bg-linear-to-r from-accent via-secondary to-tertiary" />
    </div>
  );
}
