import React from "react";
import ShowroomHero from "@/components/sections/showroom/ShowroomHero";
import ServicesGrid from "@/components/sections/showroom/ServicesGrid";
import CoreCapabilities from "@/components/sections/showroom/CoreCapabilities";
import InteriorStyles from "@/components/sections/showroom/InteriorStyles";
import MaterialSamples from "@/components/sections/showroom/MaterialSamples";
import ShowHero from "@/components/sections/showroom/ShowHero";

export const metadata = {
  title: "Services & Showroom | YUNGOLA",
  description:
    "Explore our core capabilities, interior design styles, and premium material palette.",
};

export default function ShowroomPage() {
  return (
    <div className="bg-surface-container text-darkForeground min-h-screen pt-24 font-montserrat antialiased">
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
      <div className="h-1 bg-gradient-to-r from-accent via-secondary to-tertiary" />
    </div>
  );
}
