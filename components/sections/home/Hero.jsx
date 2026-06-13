"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { homeContent } from "@/lib/data/siteContent";
const slides = homeContent.hero.slides;

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    // Removed 'current' from dependency array to prevent the timer from resetting on every slide change
    const timer = setInterval(() => {
      setCurrent((p) => (p === slides.length - 1 ? 0 : p + 1));
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    if (animating) return;
    setAnimating(true);
    setCurrent((p) => (p === 0 ? slides.length - 1 : p - 1));
    setTimeout(() => setAnimating(false), 800);
  };

  const handleNext = () => {
    if (animating) return;
    setAnimating(true);
    setCurrent((p) => (p === slides.length - 1 ? 0 : p + 1));
    setTimeout(() => setAnimating(false), 800);
  };

  const currentSlide = slides[current];

  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#131313]">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100 z-0" : "opacity-0 -z-10"
          }`}
        >
          <Image
            src={slide.bgImage}
            alt={`Hero background ${index + 1}`}
            fill
            priority={index === 0}
            sizes="100vw"
            className="object-cover scale-105 transition-transform duration-2000"
            style={{
              transform: index === current ? "scale(1.08)" : "scale(1)",
            }}
          />

          {/* Glass Backdrop Overlay */}
          <div className="absolute inset-0 bg-black/50" />
        </div>
      ))}

      {/* Content */}
      <main className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4 select-none">
        <div className="flex flex-col items-center max-w-5xl mx-auto">
          {/* Dynamic Headline with Static "We" and "it" */}
          <h1 className="text-4xl md:text-6xl flex-col lg:text-6xl xl:text-7xl font-bold uppercase tracking-wider mb-6 leading-tight font-montserrat flex flex-wrap justify-center items-center gap-x-3 md:gap-x-6">
            <span className="text-white animate-fade-up">
              {currentSlide.headlinePrefix}
            </span>
            {/* Key prop forces React to re-mount this span, triggering the fade-up animation cleanly */}
            <span
              key={currentSlide.headlineAction}
              className="text-accent-dark inline-block min-w-section-gap md:min-w-[280px] animate-fade-up"
            >
              {currentSlide.headlineAction}
            </span>
            <span className="text-white animate-fade-up">
              {currentSlide.headlineSuffix}
            </span>
          </h1>

          {/* Static Subheadline at the bottom */}
          <p className="text-lg md:text-xl text-gray-200 font-medium tracking-wide mb-10 leading-relaxed max-w-3xl mx-auto animate-fade-up delay-100">
            {currentSlide.subHeadline}
          </p>

          <Link
            href={currentSlide.link}
            className="group bg-accent text-foreground hover:bg-accent/80 px-8 py-4 uppercase tracking-[0.2em] text-xs font-bold flex items-center gap-3 rounded-sm shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 animate-fade-up delay-200"
          >
            Explore Gallery
            <svg
              className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </main>

      {/* Controls */}
      <button
        onClick={handlePrev}
        className="absolute left-6 max-sm:left-1 top-1/2 max-sm:top-2/5 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-[#ffe08b]/20 bg-[#131313]/60 text-[#ffe08b] hover:bg-[#ffe08b] hover:text-[#131313] flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-[#ffe08b] cursor-pointer backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            d="M15 19l-7-7 7-7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <button
        onClick={handleNext}
        className="absolute right-6 max-sm:right-1 top-1/2 max-sm:top-2/5 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-[#ffe08b]/20 bg-[#131313]/60 text-[#ffe08b] hover:bg-[#ffe08b] hover:text-[#131313] flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-[#ffe08b] cursor-pointer backdrop-blur-sm"
        aria-label="Next slide"
      >
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              if (animating) return;
              setAnimating(true);
              setCurrent(i);
              setTimeout(() => setAnimating(false), 800);
            }}
            className={`h-1.5 transition-all duration-500 cursor-pointer rounded-full ${
              current === i
                ? "w-12 bg-accent"
                : "w-6 bg-accent/20 hover:bg-accent/40"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}