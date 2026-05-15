"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ShowroomTeaser() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
      aria-labelledby="showroom-heading"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&q=80')`,
        }}
        role="img"
        aria-label="Luxury interior design showroom"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0D0D0D]/80" />

      {/* Content */}
      <div
        className={`relative z-10 text-center max-w-3xl mx-auto px-6 transition-all duration-800 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <p
          className="text-xs text-[#F5C518] uppercase tracking-[0.25em] mb-4"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          Virtual Experience
        </p>
        <h2
          id="showroom-heading"
          className="text-4xl lg:text-7xl font-700 text-white mb-6 leading-tight"
          style={{ fontFamily: "var(--font-cinzel)" }}
        >
          Visit Our <span className="text-gradient-yellow">Showroom</span>
        </h2>
        <p
          className="text-lg text-white/60 mb-10 leading-relaxed"
          style={{ fontFamily: "var(--font-josefin)", fontWeight: 300 }}
        >
          See designs up close. Explore material choices, interior styles, and completed room setups that will inspire your next build.
        </p>
        <Link
          href="/showroom"
          id="showroom-teaser-btn"
          className="group inline-flex items-center gap-3 px-10 py-4 bg-[#F5C518] text-[#0D0D0D] text-sm font-700 uppercase tracking-[0.12em] rounded-sm hover:bg-[#E0A800] transition-all duration-200 cursor-pointer shadow-[0_4px_32px_rgba(245,197,24,0.35)]"
          style={{ fontFamily: "var(--font-montserrat)", fontWeight: 700 }}
        >
          Explore Showroom
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
        </Link>
      </div>

      {/* Decorative corners */}
      <div className="absolute top-8 left-8 w-12 h-12 border-t-2 border-l-2 border-[#F5C518]/40" aria-hidden="true" />
      <div className="absolute top-8 right-8 w-12 h-12 border-t-2 border-r-2 border-[#F5C518]/40" aria-hidden="true" />
      <div className="absolute bottom-8 left-8 w-12 h-12 border-b-2 border-l-2 border-[#F5C518]/40" aria-hidden="true" />
      <div className="absolute bottom-8 right-8 w-12 h-12 border-b-2 border-r-2 border-[#F5C518]/40" aria-hidden="true" />
    </section>
  );
}
