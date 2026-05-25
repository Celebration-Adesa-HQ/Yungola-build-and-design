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
    const timer = setInterval(() => {
      handleNext();
    }, 6000);

    return () => clearInterval(timer);
  }, [current, animating]);

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
            alt={slide.headline}
            fill
            priority={index === 0}
            sizes="100vw"
            className="object-cover scale-105 transition-transform duration-[6000ms]"
            style={{
              transform: index === current ? "scale(1.08)" : "scale(1)",
            }}
          />

          {/* Glass Backdrop Overlay */}
          <div className="absolute inset-0 bg-black/40 " />
        </div>
      ))}

      {/* Content */}
      <main className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4 select-none">
        {slides.map((slide, index) => {
          if (index !== current) return null;

          return (
            <div
              key={slide.id}
              className="flex flex-col items-center max-w-4xl mx-auto"
            >
              <h2 className="uppercase tracking-[0.25em] text-xs md:text-sm font-bold mb-4 text-accent font-montserrat animate-fade-up">
                {slide.subHeadline}
              </h2>

              <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold uppercase tracking-wider mb-8 leading-tight text-white font-montserrat animate-fade-up">
                {slide.headline}{" "}<br/>
                <span className="text-accent-dark">{slide.highlight}</span>
              </h1>

              {/* <h2 className="text-xl text-accent md:text-2xl lg:text-3xl xl:text-4xl font-bold uppercase tracking-wider mb-8 leading-tight font-montserrat animate-fade-up">
                {slide.bottomText}
              </h2> */}

              <Link
                href={slide.link}
                className="group bg-accent text-foreground hover:bg-accent/80 px-8 py-4 uppercase tracking-[0.2em] text-xs font-bold flex items-center gap-3 rounded-sm shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
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
          );
        })}
      </main>

      {/* Controls */}
      <button
        onClick={handlePrev}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-[#ffe08b]/20 bg-[#131313]/60 text-[#ffe08b] hover:bg-[#ffe08b] hover:text-[#131313] flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-[#ffe08b] cursor-pointer"
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
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-[#ffe08b]/20 bg-[#131313]/60 text-[#ffe08b] hover:bg-[#ffe08b] hover:text-[#131313] flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-[#ffe08b] cursor-pointer"
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
            onClick={() => setCurrent(i)}
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
