"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Building,
  Lamp,
  Home,
  Armchair,
  Flower,
  Layers,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { showroomContent } from "@/lib/data/siteContent";

const iconMap = {
  building: (
    <Building
      className="w-10 h-10 text-accent service-icon"
      strokeWidth={1.5}
    />
  ),
  lamp: (
    <Lamp className="w-10 h-10 text-accent service-icon" strokeWidth={1.5} />
  ),
  home: (
    <Home className="w-10 h-10 text-accent service-icon" strokeWidth={1.5} />
  ),
  armchair: (
    <Armchair
      className="w-10 h-10 text-accent service-icon"
      strokeWidth={1.5}
    />
  ),
  flower: (
    <Flower className="w-10 h-10 text-accent service-icon" strokeWidth={1.5} />
  ),
  layers: (
    <Layers className="w-10 h-10 text-accent service-icon" strokeWidth={1.5} />
  ),
};

export default function ServicesGrid() {
  const services = showroomContent.servicesGrid;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const [dragStartX, setDragStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

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

  const maxIndex = Math.max(0, services.length - visibleCards);

  // Auto-boundary correction when resizing
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [visibleCards, maxIndex, currentIndex]);

  // Navigation handlers
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
  };

  const handleDotClick = (index) => {
    setCurrentIndex(Math.min(index, maxIndex));
  };

  // Touch swipe support for mobile and tablets
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
    <div className="mb-24 relative select-none">
      {/* 1. Sleek Editorial Header */}
      <div className="mb-12 border-b border-outline-variant/30 pb-8">
        <span className="text-accent text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase block mb-3 font-montserrat">
          STUDIO OFFERINGS
        </span>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-wider font-montserrat text-darkForeground leading-tight">
          OUR DESIGN & BUILD CAPABILITIES
        </h2>
      </div>

      {/* 2. Slider Viewport Container with Side Controls */}
      <div className="relative group/carousel px-0">
        {/* Left Side Control Arrow */}
        {maxIndex > 0 && (
          <button
            onClick={handlePrev}
            className="absolute -left-4 md:-left-8 lg:-left-12 xl:-left-16 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full border border-outline-variant hover:border-accent flex items-center justify-center text-darkForeground hover:text-accent transition-all bg-surface-container/80 backdrop-blur-md hover:bg-surface-container shadow-2xl group cursor-pointer"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
          </button>
        )}

        {/* Right Side Control Arrow */}
        {maxIndex > 0 && (
          <button
            onClick={handleNext}
            className="absolute -right-4 md:-right-8 lg:-right-12 xl:-right-16 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full border border-outline-variant hover:border-accent flex items-center justify-center text-darkForeground hover:text-accent transition-all bg-surface-container/80 backdrop-blur-md hover:bg-surface-container shadow-2xl group cursor-pointer"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        )}

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
              transform: `translateX(calc(-${currentIndex} * (100% / ${visibleCards} + ${24 / visibleCards}px)))`,
            }}
          >
            {services.map((svc) => {
              // Dynamic width style based on visible cards
              const widthClass =
                visibleCards === 1
                  ? "w-full shrink-0"
                  : visibleCards === 2
                    ? "w-[calc(50%-12px)] shrink-0"
                    : "w-[calc(33.333%-16px)] shrink-0";

              return (
                <div
                  key={svc.id}
                  id={svc.id}
                  className={`${widthClass} service-card bg-surface-container p-10 text-center flex flex-col items-center justify-between group shadow-xl border border-outline-variant/40 hover:border-accent/40 relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl rounded-sm`}
                >
                  {/* Background Image - Fades in and zooms slightly on card hover */}
                  {svc.bgImage && (
                    <>
                      <Image
                        alt={svc.title}
                        className="absolute inset-0 w-full h-full object-cover z-0 opacity-0 group-hover:opacity-25 transition-all duration-700 ease-out scale-100 group-hover:scale-110 pointer-events-none"
                        src={svc.bgImage}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      {/* Premium Dark Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-darkBackground via-darkBackground/75 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
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
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* 3. Slider Indicators (Bottom Dots/Bars) */}
      {maxIndex > 0 && (
        <div className="flex items-center justify-center gap-3 mt-10">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => {
            const isActive = idx === currentIndex;

            return (
              <button
                key={idx}
                onClick={() => handleDotClick(idx)}
                className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                  isActive
                    ? "w-8 bg-accent"
                    : "w-2 bg-outline-variant hover:bg-accent/40"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
