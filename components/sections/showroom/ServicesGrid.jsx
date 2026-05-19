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
          className="service-card bg-surface-container p-10 text-center flex flex-col items-center justify-between group shadow-xl border border-outline-variant/40 hover:border-accent/40 relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl min-h-[420px] rounded-sm"
        >
          {/* Background Image - Fades in and zooms slightly on card hover */}
          {svc.bgImage && (
            <>
              <Image
                alt={svc.title}
                className="absolute inset-0 w-full h-full object-cover z-0 opacity-0 group-hover:opacity-25 transition-all duration-700 ease-out scale-100 group-hover:scale-110 pointer-events-none"
                src={svc.bgImage}
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
              {/* Premium Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-darkBackground via-darkBackground/70 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </>
          )}

          {/* Card Content */}
          <div className="relative z-20 flex flex-col h-full items-center justify-between flex-grow w-full">
            <div className="mb-6 w-14 h-14 flex items-center justify-center rounded-full bg-darkBackground/80 border border-accent/30 group-hover:border-accent group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300">
              {iconMap[svc.icon]}
            </div>
            
            <h3 className="text-xl font-bold uppercase tracking-wider mb-4 text-darkForeground group-hover:text-accent transition-colors duration-300 font-montserrat">
              {svc.title}
            </h3>
            
            <p className="text-xs text-darkSecondaryForeground leading-relaxed mb-8 font-light flex-grow font-hanken">
              {svc.desc}
            </p>
            
            <Link
              href={svc.link}
              className="text-accent group-hover:text-accent/90 text-xs font-bold tracking-widest uppercase inline-flex items-center mt-auto transition-colors font-montserrat"
            >
              Read More
              <svg
                className="w-3.5 h-3.5 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
