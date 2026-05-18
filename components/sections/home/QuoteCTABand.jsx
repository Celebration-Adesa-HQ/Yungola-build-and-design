"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { homeContent } from "@/lib/data/siteContent";

export default function QuoteCTABand() {
  const { quoteBand } = homeContent;

  return (
    <section
      className="bg-accent py-20 lg:py-24 relative overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Decorative geometric shapes */}
      <div
        className="absolute top-0 right-0 w-64 h-64 border border-darkBackground/10 rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-16 w-32 h-32 border border-darkBackground/10 rounded-sm pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center relative z-10">
        <p
          className="text-xs text-darkBackground/60 uppercase tracking-[0.25em] mb-4 font-montserrat font-bold"
        >
          {quoteBand.badge}
        </p>
        <h2
          id="cta-heading"
          className="text-4xl lg:text-7xl font-bold text-darkBackground mb-6 leading-tight font-montserrat uppercase tracking-wide whitespace-pre-line"
        >
          {quoteBand.title}
        </h2>
        <p
          className="text-lg text-darkBackground/70 max-w-lg mx-auto mb-10 font-hanken font-light"
        >
          {quoteBand.desc}
        </p>
        <Link
          href={quoteBand.ctaLink}
          id="cta-band-quote-btn"
          className="group inline-flex items-center gap-3 px-10 py-4 bg-darkBackground text-darkForeground text-sm font-bold uppercase tracking-[0.12em] rounded-sm hover:bg-surface-container transition-all duration-200 cursor-pointer shadow-[0_4px_24px_rgba(0,0,0,0.2)] font-montserrat"
        >
          {quoteBand.ctaLabel}
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
        </Link>
      </div>
    </section>
  );
}
