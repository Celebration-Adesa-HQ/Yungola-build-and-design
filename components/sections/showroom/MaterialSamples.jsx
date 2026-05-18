"use client";

import { showroomContent } from "@/lib/data/siteContent";

export default function MaterialSamples() {
  const { materials } = showroomContent;

  return (
    <section className="py-24 bg-darkBackground border-b border-outline-variant" aria-labelledby="materials-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase block mb-3 font-montserrat">
              {materials.badge}
            </span>
            <h2 id="materials-heading" className="text-3xl md:text-5xl font-bold uppercase tracking-wide text-darkForeground font-montserrat">
              {materials.title}
            </h2>
            <p className="text-sm md:text-base text-on-surface-variant mt-4 font-hanken">
              {materials.desc}
            </p>
          </div>
          <div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-darkSecondaryForeground font-bold border-b border-accent pb-1 font-montserrat inline-block">
              Available in Showroom
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {materials.list.map((mat) => (
            <div key={mat.name} className="group">
              <div className={`w-full aspect-square ${mat.color} border-2 ${mat.border} rounded-full shadow-lg mb-4 relative overflow-hidden transform group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(245,196,0,0.2)] transition-all duration-300`}>
                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent mix-blend-overlay"></div>
              </div>
              <div className="text-center">
                <h4 className="text-xs font-bold text-darkForeground uppercase tracking-wider font-montserrat group-hover:text-accent transition-colors">
                  {mat.name}
                </h4>
                <p className="text-[10px] text-on-surface-variant uppercase tracking-widest font-montserrat mt-1">
                  {mat.type}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
