import React from "react";

export default function GalleryHero() {
  return (
    <section
      className="relative min-h-[60vh] flex items-center overflow-hidden mb-16"
      aria-labelledby="gallery-hero-heading"
    >
      {/* Background Grid Lines */}
      <div
        className="absolute inset-0 pointer-events-none z-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--color-outline-variant, #514532) 1px, transparent 1px)",
          backgroundSize: "25% 100%",
        }}
        aria-hidden="true"
      />

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1920&q=80')`,
        }}
        aria-hidden="true"
      />

      {/* Dark Overlay */}
      <div
        className="absolute inset-0 bg-darkBackground/85 z-10"
        aria-hidden="true"
      />

      {/* Content Layer */}
      <div className="relative z-20 w-full max-w-4xl px-6">
        <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-4 font-montserrat">
          YUNGOLA | ACRINO
        </p>
        <h1
          id="gallery-hero-heading"
          className="text-4xl md:text-6xl font-bold uppercase text-darkForeground mb-6 tracking-tight font-oswald"
        >
          Our Projects
        </h1>
        <p className="text-darkSecondaryForeground text-sm leading-relaxed max-w-3xl font-hanken">
          Explore our cinematic architectural portfolio. Each project
          exemplifies our commitment to structural precision, bespoke furniture
          design, and immersive digital showroom aesthetics. Filter by our core
          service disciplines below.
        </p>
      </div>
    </section>
  );
}
