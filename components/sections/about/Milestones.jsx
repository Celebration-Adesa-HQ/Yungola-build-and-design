import React from "react";

const milestones = [
  {
    year: "2014",
    title: "Studio Foundation",
    desc: "Yungola Build and Design established in Lagos, Nigeria, with a vision to redefine boutique luxury architecture.",
  },
  {
    year: "2016",
    title: "The Belgravia Monolith",
    desc: "Completed our first landmark residential estate in Lekki, setting a new benchmark for contemporary geometric design.",
  },
  {
    year: "2018",
    title: "Full NIA Accreditation",
    desc: "Received formal corporate certification from the Nigerian Institute of Architects, solidifying our design authority.",
  },
  {
    year: "2020",
    title: "Commercial Skyline Expansion",
    desc: "Expanded into high-rise corporate headquarters, luxury retail malls, and advanced mixed-use developments across Abuja and Lagos.",
  },
  {
    year: "2023",
    title: "50+ Masterpieces Delivered",
    desc: "Celebrated a major milestone of over 50 bespoke turnkey projects completed nationwide with zero structural failures.",
  },
  {
    year: "2024",
    title: "Cinematic Digital Showroom",
    desc: "Launched our immersive virtual design experience, complete with 3D spatial previews and elite material curation.",
  },
];

export default function Milestones() {
  return (
    <section className="py-24 bg-surface-container-lowest border-t border-outline-variant" aria-labelledby="timeline-heading">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <p className="text-xs text-darkSecondaryForeground uppercase tracking-[0.2em] mb-3 font-montserrat font-bold">
            Our Journey
          </p>
          <h2 id="timeline-heading" className="text-3xl md:text-5xl font-bold uppercase text-darkForeground mb-6 font-oswald tracking-wide">
            Milestones & Legacy
          </h2>
          <p className="text-sm md:text-base text-on-surface-variant font-hanken leading-relaxed">
            A decade of pioneering geometric monoliths, luxury interior curation, and master construction across West Africa.
          </p>
        </div>

        <div className="relative pl-6 md:pl-16 border-l-2 border-outline-variant space-y-16">
          {milestones.map(({ year, title, desc }) => (
            <div key={year} className="relative group">
              {/* Glowing Dot */}
              <div className="absolute -left-[31px] md:-left-[71px] top-1.5 w-4 h-4 rounded-full bg-accent border-4 border-surface-container-lowest group-hover:scale-125 transition-transform duration-300 shadow-[0_0_10px_rgba(245,197,24,0.5)]" />

              <div className="bg-surface-container p-8 rounded-sm border border-outline-variant group-hover:border-accent transition-all duration-300 shadow-xl">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2 border-b border-outline-variant/30 pb-4">
                  <h3 className="text-xl md:text-2xl font-bold uppercase text-darkForeground font-oswald tracking-wide group-hover:text-accent transition-colors">
                    {title}
                  </h3>
                  <span className="inline-block px-4 py-1 bg-surface-container-lowest text-accent text-sm font-bold tracking-widest rounded-sm font-montserrat border border-outline-variant">
                    {year}
                  </span>
                </div>
                <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed font-hanken">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
