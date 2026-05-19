import { aboutContent } from "@/lib/data/siteContent";

export default function Milestones() {
  const { milestones } = aboutContent;

  return (
    <section
      className="py-24 bg-surface-container-lowest border-t border-outline-variant"
      aria-labelledby="timeline-heading"
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <p className="text-xs text-darkSecondaryForeground uppercase tracking-[0.2em] mb-3 font-montserrat font-bold">
            {milestones.badge}
          </p>
          <h2
            id="timeline-heading"
            className="text-3xl md:text-5xl font-bold uppercase text-darkForeground mb-6 font-montserrat tracking-wide"
          >
            {milestones.title}
          </h2>
          <p className="text-sm md:text-base text-on-surface-variant font-hanken leading-relaxed">
            {milestones.desc}
          </p>
        </div>

        <div className="relative pl-6 md:pl-16 border-l-2 border-outline-variant space-y-16">
          {milestones.timeline.map(({ year, title, desc }) => (
            <div key={year} className="relative group">
              {/* Glowing Dot */}
              <div className="absolute -left-[31px] md:-left-[71px] top-1.5 w-4 h-4 rounded-full bg-accent border-4 border-surface-container-lowest group-hover:scale-125 transition-transform duration-300 shadow-[0_0_10px_rgba(245,197,24,0.5)]" />

              <div className="bg-surface-container p-8 rounded-sm border border-outline-variant group-hover:border-accent transition-all duration-300 shadow-xl">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2 border-b border-outline-variant/30 pb-4">
                  <h3 className="text-xl md:text-2xl font-bold uppercase text-darkForeground font-montserrat tracking-wide group-hover:text-accent transition-colors">
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
