import React from "react";

export default function AboutHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center overflow-hidden border-b border-outline-variant">
      {/* Background Grid Lines */}
      <div
        className="absolute inset-0 pointer-events-none z-0 opacity-40"
        style={{
          backgroundImage: "linear-gradient(to right, var(--color-outline-variant, #514532) 1px, transparent 1px)",
          backgroundSize: "25% 100%",
        }}
      ></div>
      <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1920&q=80')` }} role="img" aria-label="Company building exterior" />
      <div className="absolute inset-0 bg-darkBackground/85 z-10" />

      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12 pt-20 pb-20 w-full">
        <p className="text-xs text-darkSecondaryForeground uppercase tracking-[0.25em] mb-4 font-montserrat font-bold">
          YUNGOLA | ACRINO
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-darkForeground uppercase tracking-tight font-oswald mb-6">
          About Yungola
        </h1>
        <p className="text-base md:text-lg text-on-surface-variant max-w-3xl leading-relaxed font-hanken">
          For over a decade, Yungola Build and Design has transformed visions into high-end built realities across Nigeria and globally. We merge structural precision with cinematic aesthetics to create residences and commercial spaces that command absolute design authority.
        </p>
      </div>
    </section>
  );
}
