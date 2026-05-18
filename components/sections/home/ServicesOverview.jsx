"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Building, Lamp, Home, Armchair, Flower, Layers } from "lucide-react";
import { homeContent } from "@/lib/data/siteContent";

const iconMap = {
  building: <Building size={48} className="mx-auto text-accent" strokeWidth={1} />,
  lamp: <Lamp size={48} className="mx-auto text-accent" strokeWidth={1} />,
  home: <Home size={48} className="mx-auto text-accent" strokeWidth={1} />,
  armchair: <Armchair size={48} className="mx-auto text-accent" strokeWidth={1} />,
  flower: <Flower size={48} className="mx-auto text-accent" strokeWidth={1} />,
  layers: <Layers size={48} className="mx-auto text-accent" strokeWidth={1} />,
};

export default function ServicesOverview() {
  const servicesData = homeContent.services;
  const [activeIndex, setActiveIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? servicesData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === servicesData.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      ref={ref}
      id="services"
      className="py-24 bg-darkBackground border-b border-outline-variant relative overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 transform ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase mb-4 block font-montserrat">
            Yungola
          </span>
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-wider text-darkForeground font-montserrat">
            Our Services
          </h2>
        </div>

        {/* Services Grid with Carousel Controls */}
        <div className="relative group">
          
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 md:-ml-12 z-20 w-10 h-10 rounded-full bg-[#201f1f]/50 hover:bg-accent text-darkForeground hover:text-on-primary flex items-center justify-center transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent cursor-pointer border border-outline-variant/30 md:hidden"
            aria-label="Previous service"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
          </button>

          {/* Desktop & Mobile Responsive container */}
          <div
            className={`transition-all duration-1000 transform ${
              visible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            {/* Desktop layout: Grid */}
            <div className="hidden md:grid grid-cols-3 gap-6 relative z-10">
              {servicesData.map((service) => (
                <div
                  key={service.id}
                  className="service-card bg-surface-container p-10 text-center border border-outline-variant hover:border-accent/40 flex flex-col items-center group/card cursor-pointer relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl min-h-[400px] rounded-sm"
                >
                  {/* Background Image - Fades in and zooms slightly on card hover */}
                  {service.image && (
                    <>
                      <Image
                        alt={service.title}
                        className="absolute inset-0 w-full h-full object-cover z-0 opacity-0 group-hover/card:opacity-25 transition-all duration-700 ease-out scale-100 group-hover/card:scale-110 pointer-events-none"
                        src={service.image}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      {/* Premium Dark Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-darkBackground via-darkBackground/70 to-transparent z-10 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    </>
                  )}

                  {/* Card Content */}
                  <div className="relative z-20 flex flex-col h-full items-center justify-between flex-grow w-full">
                    <div className="text-accent mb-6 transition-transform duration-300 group-hover/card:scale-110 group-hover/card:-translate-y-1">
                      {iconMap[service.icon]}
                    </div>
                    
                    <h3 className="text-lg font-bold uppercase tracking-widest mb-4 text-darkForeground font-montserrat group-hover/card:text-accent transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-on-surface-variant text-sm leading-relaxed mb-8 font-light flex-grow font-hanken">
                      {service.description}
                    </p>
                    
                    <Link
                      className="inline-flex items-center text-on-surface-variant group-hover/card:text-accent text-xs font-bold tracking-[0.2em] uppercase transition-colors duration-300 mt-auto font-montserrat"
                      href="/showroom"
                    >
                      Read More
                      <svg
                        className="w-3 h-3 ml-2 transition-transform duration-300 group-hover/card:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile layout: Slider */}
            <div className="md:hidden relative z-10 w-full overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {servicesData.map((service) => (
                  <div key={service.id} className="w-full flex-shrink-0 px-2">
                    <div className="service-card bg-surface-container p-10 text-center border border-outline-variant hover:border-accent/40 flex flex-col items-center group/card cursor-pointer relative overflow-hidden transition-all duration-500 hover:shadow-2xl min-h-[400px] rounded-sm">
                      {/* Background Image - Fades in and zooms slightly on card hover */}
                      {service.image && (
                        <>
                          <Image
                            alt={service.title}
                            className="absolute inset-0 w-full h-full object-cover z-0 opacity-0 group-hover/card:opacity-25 transition-all duration-700 ease-out scale-100 group-hover/card:scale-110 pointer-events-none"
                            src={service.image}
                            fill
                            sizes="100vw"
                          />
                          {/* Premium Dark Gradient Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-darkBackground via-darkBackground/70 to-transparent z-10 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none" />
                        </>
                      )}

                      {/* Card Content */}
                      <div className="relative z-20 flex flex-col h-full items-center justify-between flex-grow w-full">
                        <div className="text-accent mb-6 transition-transform duration-300 group-hover/card:scale-110 group-hover/card:-translate-y-1">
                          {iconMap[service.icon]}
                        </div>
                        
                        <h3 className="text-lg font-bold uppercase tracking-widest mb-4 text-darkForeground font-montserrat group-hover/card:text-accent transition-colors duration-300">
                          {service.title}
                        </h3>
                        
                        <p className="text-on-surface-variant text-sm leading-relaxed mb-8 font-light flex-grow font-hanken">
                          {service.description}
                        </p>
                        
                        <Link
                          className="inline-flex items-center text-on-surface-variant group-hover/card:text-accent text-xs font-bold tracking-[0.2em] uppercase transition-colors duration-300 mt-auto font-montserrat"
                          href="/showroom"
                        >
                          Read More
                          <svg
                            className="w-3 h-3 ml-2 transition-transform duration-300 group-hover/card:translate-x-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M14 5l7 7m0 0l-7 7m7-7H3"
                            ></path>
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 md:-mr-12 z-20 w-10 h-10 rounded-full bg-[#201f1f]/50 hover:bg-accent text-darkForeground hover:text-on-primary flex items-center justify-center transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent cursor-pointer border border-outline-variant/30 md:hidden"
            aria-label="Next service"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex md:hidden justify-center mt-12 space-x-2">
          {servicesData.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`h-1 transition-all duration-300 cursor-pointer ${
                activeIndex === i ? "w-8 bg-accent" : "w-8 bg-on-surface-variant/20 hover:bg-on-surface-variant/40"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            ></button>
          ))}
        </div>

      </div>
    </section>
  );
}
