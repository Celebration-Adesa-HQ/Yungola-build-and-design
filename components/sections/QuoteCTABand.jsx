"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function QuoteCTABand() {
  return (
    <section
      className="bg-[#F5C518] py-20 lg:py-24 relative overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Decorative geometric shapes */}
      <div
        className="absolute top-0 right-0 w-64 h-64 border border-[#0D0D0D]/10 rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-16 w-32 h-32 border border-[#0D0D0D]/10 rounded-sm pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center relative z-10">
        <p
          className="text-xs text-[#0D0D0D]/60 uppercase tracking-[0.25em] mb-4"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          Let&apos;s Work Together
        </p>
        <h2
          id="cta-heading"
          className="text-4xl lg:text-7xl font-900 text-[#0D0D0D] mb-6 leading-tight"
          style={{ fontFamily: "var(--font-cinzel)", fontWeight: 900 }}
        >
          Ready to Build?
          <br />
          Let&apos;s Talk.
        </h2>
        <p
          className="text-lg text-[#0D0D0D]/70 max-w-lg mx-auto mb-10"
          style={{ fontFamily: "var(--font-josefin)", fontWeight: 300 }}
        >
          Get a free consultation and discover what Yungola Build and Design can create for you.
        </p>
        <Link
          href="/quote"
          id="cta-band-quote-btn"
          className="group inline-flex items-center gap-3 px-10 py-4 bg-[#0D0D0D] text-white text-sm font-700 uppercase tracking-[0.12em] rounded-sm hover:bg-[#1A1A1A] transition-all duration-200 cursor-pointer shadow-[0_4px_24px_rgba(0,0,0,0.2)]"
          style={{ fontFamily: "var(--font-montserrat)", fontWeight: 700 }}
        >
          Request a Free Quote
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
        </Link>
      </div>
    </section>
  );
}
