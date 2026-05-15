"use client";

import { useEffect, useRef, useState } from "react";
import { PenTool, HardHat, Wrench } from "lucide-react";

const services = [
  {
    id: "architecture",
    Icon: PenTool,
    title: "Architecture & Design",
    description:
      "From initial concept sketches to detailed architectural drawings, we create spaces that inspire. Our designs blend aesthetics with functionality for lasting impact.",
  },
  {
    id: "construction",
    Icon: HardHat,
    title: "Construction & Building",
    description:
      "Full-cycle construction management with premium materials and certified craftsmen. We deliver on time, within budget, and beyond expectations.",
  },
  {
    id: "renovation",
    Icon: Wrench,
    title: "Renovations & Upgrades",
    description:
      "Transform existing spaces into modern masterpieces. From kitchen remodels to complete structural overhauls — we reimagine what your space can become.",
  },
];

export default function ServicesOverview() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="section-pad bg-[#0D0D0D] relative overflow-hidden"
      aria-labelledby="services-heading"
    >
      {/* Grid overlay */}
      <div className="absolute inset-0 architectural-grid opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="max-w-xl mb-14">
          <p
            className="text-xs text-[#F5C518] uppercase tracking-[0.2em] mb-3"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            What We Do
          </p>
          <h2
            id="services-heading"
            className={`text-4xl lg:text-6xl font-700 text-white transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ fontFamily: "var(--font-cinzel)" }}
          >
            Our Services
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map(({ id, Icon, title, description }, i) => (
            <div
              key={id}
              className={`group relative p-8 border border-white/8 rounded-sm hover:border-[#F5C518]/50 transition-all duration-400 cursor-default ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Yellow left border on hover */}
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#F5C518] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-l-sm" />

              {/* Icon */}
              <div className="w-12 h-12 bg-[#F5C518]/10 rounded-sm flex items-center justify-center mb-6 group-hover:bg-[#F5C518] transition-colors duration-300">
                <Icon
                  size={22}
                  className="text-[#F5C518] group-hover:text-[#0D0D0D] transition-colors duration-300"
                  aria-hidden="true"
                />
              </div>

              <h3
                className="text-xl font-600 text-white mb-4"
                style={{ fontFamily: "var(--font-cinzel)" }}
              >
                {title}
              </h3>
              <p
                className="text-sm text-[#6B7280] leading-relaxed"
                style={{ fontFamily: "var(--font-josefin)" }}
              >
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
