import React from "react";
import Image from "next/image";

export default function MissionVision() {
  return (
    <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto border-x border-outline-variant">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left side: Overlapping Dark Card */}
        <div className="lg:col-span-7 bg-surface-container p-8 md:p-12 lg:p-16 shadow-2xl border-t-2 border-accent relative z-10 rounded-sm">
          <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase block mb-4 font-montserrat">
            Our Foundation
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase text-darkForeground mb-10 font-oswald tracking-wide">
            Mission & Vision
          </h2>

          <div className="space-y-10">
            <div className="border-l-4 border-outline pl-6 py-1 bg-surface-container-high p-4 rounded-r-sm shadow-inner">
              <h3 className="text-lg font-bold text-darkForeground uppercase tracking-wider mb-3 font-oswald">
                Our Mission
              </h3>
              <p className="text-sm md:text-base text-on-surface-variant leading-relaxed font-hanken">
                To design and build exceptional spaces that reflect our clients' highest aspirations — combining architectural precision, elite material curation, and uncompromising quality at every stage of master construction.
              </p>
            </div>

            <div className="border-l-4 border-accent pl-6 py-1 bg-surface-container-high p-4 rounded-r-sm shadow-inner">
              <h3 className="text-lg font-bold text-darkForeground uppercase tracking-wider mb-3 font-oswald">
                Our Vision
              </h3>
              <p className="text-sm md:text-base text-on-surface-variant leading-relaxed font-hanken">
                To be Africa's most trusted premium design-build studio — known for transforming the built landscape of Nigeria with bold, sustainable, and cinematic architecture that feels like a digital showroom.
              </p>
            </div>
          </div>
        </div>

        {/* Right side: Architectural/Team Imagery */}
        <div className="lg:col-span-5 relative h-[450px] md:h-[550px] w-full rounded-sm overflow-hidden shadow-2xl border border-outline-variant group">
          <Image
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80"
            alt="Yungola Build and Design team at work"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-darkBackground via-transparent to-transparent opacity-60" />
          <div className="absolute inset-0 border-2 border-accent/20 group-hover:border-accent transition-colors duration-300 pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
