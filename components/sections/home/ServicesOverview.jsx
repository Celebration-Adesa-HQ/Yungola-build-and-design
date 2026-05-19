"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { 
  Building, 
  Lamp, 
  Home, 
  Armchair, 
  Flower, 
  Layers,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
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
  const [visibleCards, setVisibleCards] = useState(3);
  const [visible, setVisible] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const ref = useRef(null);

  // Intersection Observer for fade-in
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

  // Responsive visible cards count
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, servicesData.length - visibleCards);

  // Auto-boundary correction when resizing
  useEffect(() => {
    if (activeIndex > maxIndex) {
      setActiveIndex(maxIndex);
    }
  }, [visibleCards, maxIndex, activeIndex]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
  };

  const handleTouchStart = (e) => {
    setDragStartX(e.touches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const diff = dragStartX - e.touches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
      setIsDragging(false);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <section
      ref={ref}
      id="services"
      className="py-24 bg-darkBackground border-b border-outline-variant relative overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
        
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 transform ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="text-accent text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase block mb-3 font-montserrat">
            Yungola
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-wider font-montserrat text-darkForeground leading-tight">
            Our Services
          </h2>
        </div>

        {/* Carousel Container */}
        <div
          className={`relative group/carousel px-0 transition-all duration-1000 transform ${
            visible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute -left-4 md:-left-8 lg:-left-12 xl:-left-16 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full border border-outline-variant hover:border-accent flex items-center justify-center text-darkForeground hover:text-accent transition-all bg-surface-container/80 backdrop-blur-md hover:bg-surface-container shadow-2xl group cursor-pointer"
            aria-label="Previous service"
          >
            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute -right-4 md:-right-8 lg:-right-12 xl:-right-16 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full border border-outline-variant hover:border-accent flex items-center justify-center text-darkForeground hover:text-accent transition-all bg-surface-container/80 backdrop-blur-md hover:bg-surface-container shadow-2xl group cursor-pointer"
            aria-label="Next service"
          >
            <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
          </button>

          {/* Sliding Viewport */}
          <div 
            className="overflow-hidden relative z-10 w-full"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="flex gap-6 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{ 
                transform: `translateX(calc(-${activeIndex} * (100% / ${visibleCards} + ${24 / visibleCards}px)))` 
              }}
            >
              {servicesData.map((service) => {
                const widthClass = visibleCards === 1 
                  ? "w-full shrink-0" 
                  : visibleCards === 2 
                    ? "w-[calc(50%-12px)] shrink-0" 
                    : "w-[calc(33.333%-16px)] shrink-0";

                return (
                  <div
                    key={service.id}
                    className={`${widthClass} service-card bg-surface-container p-10 text-center border border-outline-variant hover:border-accent/40 flex flex-col items-center group/card cursor-pointer relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl rounded-sm`}
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
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex justify-center mt-12 space-x-2">
          {Array.from({ length: servicesData.length }).map((_, i) => {
            const isValidDot = i <= maxIndex;
            const isActive = i === activeIndex;

            return (
              <button
                key={i}
                onClick={() => isValidDot && setActiveIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  isActive 
                    ? "w-8 bg-accent" 
                    : isValidDot 
                      ? "w-2 bg-outline-variant hover:bg-accent/40" 
                      : "w-2 bg-outline-variant/30 cursor-default"
                }`}
                disabled={!isValidDot}
                aria-label={`Go to slide ${i + 1}`}
              ></button>
            );
          })}
        </div>

      </div>
    </section>
  );
}
