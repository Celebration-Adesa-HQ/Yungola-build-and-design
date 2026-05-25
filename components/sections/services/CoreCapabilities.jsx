"use client";

import Link from "next/link";
import { showroomContent } from "@/lib/data/siteContent";

export default function CoreCapabilities() {
  const { capabilities } = showroomContent;

  return (
    <div className="mb-24 pt-12 border-t border-outline-variant">
      <div className="text-center mb-16">
        <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase block mb-3 font-montserrat">
          {capabilities.badge}
        </span>
        <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-wide text-darkForeground font-montserrat">
          {capabilities.title}
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {capabilities.list.map((cap) => (
          <div
            key={cap.id}
            id={cap.id}
            className="bg-surface-container p-8 border-l-4 border-accent shadow-lg hover:translate-y-[-4px] transition-transform duration-300 flex flex-col justify-between rounded-r-sm border-y border-r border-outline-variant/30"
          >
            <div>
              <h3 className="text-lg font-bold uppercase tracking-wider text-darkForeground mb-3 font-montserrat">
                {cap.title}
              </h3>
              <p className="text-xs text-darkSecondaryForeground leading-relaxed font-hanken">
                {cap.desc}
              </p>
            </div>
            <Link
              href="/contact"
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
