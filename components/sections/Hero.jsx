"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowDown, ChevronRight } from "lucide-react";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const parallaxRef = useRef(null);

  useEffect(() => {
    setLoaded(true);
    const handleScroll = () => {
      if (parallaxRef.current) {
        const y = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${y * 0.35}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0" ref={parallaxRef}>
        <div
          className="w-full h-[115%] bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1920&q=85')`,
          }}
          role="img"
          aria-label="Modern architectural building exterior"
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#0D0D0D]/70 via-[#0D0D0D]/55 to-[#0D0D0D]/75" />

      {/* Architectural grid */}
      <div className="absolute inset-0 z-10 architectural-grid opacity-30" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12 text-center pt-24">
        {/* Badge */}
        <div
          className={`inline-flex items-center gap-2 px-4 py-2 border border-[#F5C518]/40 rounded-full mb-8 transition-all duration-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "100ms" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#F5C518] animate-pulse" />
          <span
            className="text-xs text-[#F5C518] uppercase tracking-[0.2em]"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Premium Architecture &amp; Construction
          </span>
        </div>

        {/* Headline */}
        <h1
          className={`text-4xl sm:text-6xl lg:text-8xl font-900 text-white leading-[0.95] tracking-tight mb-6 max-w-5xl mx-auto transition-all duration-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{
            fontFamily: "var(--font-cinzel)",
            fontWeight: 900,
            transitionDelay: "200ms",
          }}
        >
          Building Your{" "}
          <span className="text-gradient-yellow">Vision.</span>
          <br />
          Designing Your{" "}
          <span className="text-gradient-yellow">Future.</span>
        </h1>

        {/* Subheadline */}
        <p
          className={`text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed transition-all duration-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{
            fontFamily: "var(--font-josefin)",
            fontWeight: 300,
            transitionDelay: "350ms",
          }}
        >
          From concept drawings to completed homes and commercial spaces —
          transforming ideas into extraordinary built realities across Nigeria.
        </p>

        {/* CTAs */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "480ms" }}
        >
          <Link
            href="/gallery"
            id="hero-view-work-btn"
            className="group flex items-center gap-2 px-8 py-4 bg-[#F5C518] text-[#0D0D0D] text-sm font-700 uppercase tracking-[0.12em] rounded-sm hover:bg-[#E0A800] transition-all duration-200 cursor-pointer shadow-[0_4px_24px_rgba(245,197,24,0.3)]"
            style={{ fontFamily: "var(--font-montserrat)", fontWeight: 700 }}
          >
            View Our Work
            <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
          <Link
            href="/quote"
            id="hero-quote-btn"
            className="flex items-center gap-2 px-8 py-4 border border-white/40 text-white text-sm font-500 uppercase tracking-[0.12em] rounded-sm hover:border-white hover:bg-white/5 transition-all duration-200 cursor-pointer"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Get a Quote
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <span className="text-[10px] text-white/40 uppercase tracking-[0.2em]" style={{ fontFamily: "var(--font-montserrat)" }}>
          Scroll
        </span>
        <ArrowDown size={16} className="text-[#F5C518] animate-scroll" aria-hidden="true" />
      </div>
    </section>
  );
}
