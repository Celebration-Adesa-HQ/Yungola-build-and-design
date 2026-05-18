"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    id: 1,
    subHeadline: "Architectural Design",
    headline: "Secluded Bali Villas",
    bgImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80",
    link: "/gallery",
  },
  {
    id: 2,
    subHeadline: "Residential Curation",
    headline: "The Monolith House",
    bgImage:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1920&q=80",
    link: "/gallery",
  },
  {
    id: 3,
    subHeadline: "Master Construction",
    headline: "Horizon Estate",
    bgImage:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1920&q=80",
    link: "/gallery",
  },
];

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
    <section className="relative w-full h-screen overflow-hidden bg-black">
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
            <div key={slide.id} className="flex flex-col items-center">
              <h2 className="uppercase tracking-widest text-sm md:text-base font-semibold mb-4 text-white/70 font-montserrat animate-fade-up">
                {slide.subHeadline}
              </h2>

              <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold uppercase tracking-tight mb-8 leading-none text-white font-montserrat animate-fade-up">
                {slide.headline}
              </h1>

              <Link
                href={slide.link}
                className="bg-[#f5c518] text-black px-8 py-4 uppercase tracking-[0.2em] text-sm font-semibold flex items-center gap-3 rounded-sm shadow-lg hover:bg-yellow-400 transition"
              >
                See Project
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
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
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 text-white/50 hover:text-white p-4"
      >
        <svg
          className="h-10 w-10"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
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
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 text-white/50 hover:text-white p-4"
      >
        <svg
          className="h-10 w-10"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
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
            className={`h-1 transition-all duration-300 ${
              current === i ? "w-10 bg-[#f5c518]" : "w-6 bg-white/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
