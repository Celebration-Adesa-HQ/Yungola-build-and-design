"use client";

import Image from "next/image";
import Link from "next/link";
import { Building, Lamp, Home, Armchair, Flower, Layers } from "lucide-react";
import { showroomContent } from "@/lib/data/siteContent";

const iconMap = {
  building: <Building className="w-10 h-10 text-accent service-icon" strokeWidth={1.5} />,
  lamp: <Lamp className="w-10 h-10 text-accent service-icon" strokeWidth={1.5} />,
  home: <Home className="w-10 h-10 text-accent service-icon" strokeWidth={1.5} />,
  armchair: <Armchair className="w-10 h-10 text-accent service-icon" strokeWidth={1.5} />,
  flower: <Flower className="w-10 h-10 text-accent service-icon" strokeWidth={1.5} />,
  layers: <Layers className="w-10 h-10 text-accent service-icon" strokeWidth={1.5} />,
};

export default function ServicesGrid() {
  const services = showroomContent.servicesGrid;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
      {services.map((svc) => (
        <div
          key={svc.id}
          id={svc.id}
          className={`service-card ${
            svc.bgImage ? "relative overflow-hidden" : "bg-surface-container"
          } p-10 text-center flex flex-col items-center justify-center group shadow-xl border border-outline-variant/40 hover:border-accent transition-all duration-300 rounded-sm`}
        >
          {svc.bgImage && (
            <div className="absolute inset-0 z-0">
              <Image
                alt={svc.title}
                className="w-full h-full object-cover opacity-30 mix-blend-overlay group-hover:opacity-40 transition-opacity duration-300"
                src={svc.bgImage}
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-darkBackground/60 group-hover:bg-darkBackground/50 transition-colors duration-300"></div>
            </div>
          )}
          <div className="relative z-10 flex flex-col items-center">
            <div className="mb-6 w-14 h-14 flex items-center justify-center rounded-full bg-darkBackground/80 border border-accent/30 group-hover:border-accent transition-colors duration-300">
              {iconMap[svc.icon]}
            </div>
            <h3 className="text-xl font-bold uppercase tracking-wider mb-4 text-darkForeground group-hover:text-accent transition-colors font-montserrat">
              {svc.title}
            </h3>
            <p className="text-xs text-darkSecondaryForeground leading-relaxed mb-6 font-hanken">
              {svc.desc}
            </p>
            <Link
              href={svc.link}
              className="text-accent text-xs font-bold tracking-widest uppercase inline-flex items-center hover:text-darkForeground transition-colors"
            >
              Read More
              <svg className="w-3 h-3 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
