import React from "react";
import { aboutContent } from "@/lib/data/siteContent";

export default function AboutHero() {
  const { hero } = aboutContent;

  return (
    <section className="relative min-h-[60vh] flex items-center overflow-hidden border-b border-outline-variant">
      {/* Background Grid Lines */}
      <div
        className="absolute inset-0 pointer-events-none z-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--color-outline-variant, #514532) 1px, transparent 1px)",
          backgroundSize: "25% 100%",
        }}
      ></div>
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url('${hero.bgImage}')`,
        }}
        role="img"
        aria-label="Company building exterior"
      />
      {/* Dark Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#131313]/90 via-[#131313]/70 to-[#131313]/40 z-10"
        aria-hidden="true"
      />

      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12 pt-20 pb-20 w-full">
        <p className="text-xs text-accent uppercase tracking-[0.25em] mb-4 font-montserrat font-bold">
          {hero.badge}
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-darkForeground uppercase tracking-tight font-montserrat mb-6">
          {hero.title}
        </h1>
        <p className="text-base md:text-lg text-on-surface-variant max-w-3xl leading-relaxed font-hanken">
          {hero.desc}
        </p>
      </div>
    </section>
  );
}
