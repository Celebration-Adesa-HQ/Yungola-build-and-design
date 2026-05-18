import Link from "next/link";

const capabilities = [
  {
    id: "blueprinting",
    title: "Conceptual Blueprinting",
    desc: "We begin every project with rigorous site analysis, spatial planning, and conceptual development. Our blueprinting phase marries structural integrity with your lifestyle aspirations.",
  },
  {
    id: "construction",
    title: "Master Construction",
    desc: "Executing complex architectural designs requires elite craftsmanship and uncompromising engineering standards. We manage the entire build lifecycle with absolute precision.",
  },
  {
    id: "curation",
    title: "Luxury Curation",
    desc: "Sourcing premium materials, custom fixtures, and exclusive finishes from top global artisans to ensure your property feels distinct, rare, and world-class.",
  },
  {
    id: "management",
    title: "Project Management",
    desc: "Dedicated end-to-end oversight ensuring clear communication, transparent milestone tracking, and seamless coordination between architects, engineers, and interior designers.",
  },
  {
    id: "turnkey",
    title: "Turnkey Solutions",
    desc: "From the initial sketch to the final interior styling and key handover, our turnkey service provides a completely stress-free experience for luxury homeowners and investors.",
  },
];

export default function CoreCapabilities() {
  return (
    <div className="mb-24 pt-12 border-t border-outline-variant">
      <div className="text-center mb-16">
        <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase block mb-3 font-montserrat">
          End-to-End Execution
        </span>
        <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-wide text-darkForeground font-oswald">
          Core Capabilities
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {capabilities.map((cap) => (
          <div
            key={cap.id}
            id={cap.id}
            className="bg-surface-container p-8 border-l-4 border-accent shadow-lg hover:translate-y-[-4px] transition-transform duration-300 flex flex-col justify-between rounded-r-sm border-y border-r border-outline-variant/30"
          >
            <div>
              <h3 className="text-lg font-bold uppercase tracking-wider text-darkForeground mb-3 font-oswald">
                {cap.title}
              </h3>
              <p className="text-xs text-darkSecondaryForeground leading-relaxed font-hanken">
                {cap.desc}
              </p>
            </div>
            <Link
              href="/quote"
              className="mt-6 inline-flex items-center text-xs font-bold tracking-widest uppercase text-accent hover:text-darkForeground transition-colors"
            >
              Request Service <span className="ml-2">→</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
