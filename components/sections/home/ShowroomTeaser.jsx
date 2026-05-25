"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { homeContent } from "@/lib/data/siteContent";

export default function ShowroomTeaser() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);
  const { showroomTeaser } = homeContent;

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
      className="relative min-h-[70vh] flex items-center justify-center overflow-hidden border-b border-outline-variant"
      aria-labelledby="services-heading"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&q=80')`,
        }}
        role="img"
        aria-label="Luxury interior design and architectural services"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-darkBackground/80" />

      {/* Content */}
      <div
        className={`relative z-10 text-center max-w-3xl mx-auto px-6 transition-all duration-800 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <p
          className="text-xs text-accent uppercase tracking-[0.25em] mb-4 font-montserrat font-bold"
        >
          {showroomTeaser.badge}
        </p>
        <h2
          id="services-heading"
          className="text-4xl lg:text-7xl font-bold text-darkForeground mb-6 leading-tight font-montserrat uppercase tracking-wide"
        >
          {showroomTeaser.title.split(" ").map((word, i, arr) => (
            <span key={word}>
              {word === "Services" ? <span className="text-accent">{word}</span> : word}
              {i < arr.length - 1 ? " " : ""}
            </span>
          ))}
        </h2>
        <p
          className="text-lg text-on-surface-variant mb-10 leading-relaxed font-hanken font-light"
        >
          {showroomTeaser.desc}
        </p>
        <Link
          href={showroomTeaser.ctaLink}
          id="services-teaser-btn"
          className="group inline-flex items-center gap-3 px-10 py-4 bg-accent text-on-primary text-sm font-bold uppercase tracking-[0.12em] rounded-sm hover:bg-accentDark transition-all duration-200 cursor-pointer shadow-[0_4px_32px_rgba(245,196,0,0.35)] font-montserrat"
        >
          {showroomTeaser.ctaLabel}
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
        </Link>
      </div>
    </section>
  );
}
