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
  }, [animating]);

  const handlePrev = () => {
    if (animating) return;
    setAnimating(true);
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setTimeout(() => setAnimating(false), 800);
  };

  const handleNext = () => {
    if (animating) return;
    setAnimating(true);
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    setTimeout(() => setAnimating(false), 800);
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-background">
      {/* Slides Background Images */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-0" : "opacity-0 -z-10"
          }`}
        >
          <Image
            alt={slide.headline}
            className="object-cover scale-100 transition-transform duration-[6000ms] ease-out select-none"
            src={slide.bgImage}
            fill
            priority={index === 0}
            sizes="100vw"
            style={{
              transform: index === current ? "scale(1.05)" : "scale(1)",
            }}
          />
          {/* Subtle overlay for text readability */}
          <div className="absolute inset-0 bg-black/45"></div>
        </div>
      ))}

      {/* Hero Content */}
      <main className="absolute inset-0 flex flex-col justify-center items-center z-10 px-4 text-center mt-12 select-none">
        {slides.map((slide, index) => {
          if (index !== current) return null;
          return (
            <div key={slide.id} className="flex flex-col items-center">
              {/* Sub-headline */}
              <h2 className="uppercase tracking-widest-xl text-sm md:text-base font-semibold mb-4 text-gray-100 shadow-sm animate-fade-up opacity-0 font-montserrat">
                {slide.subHeadline}
              </h2>
              {/* Main Headline */}
              <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold uppercase tracking-tight mb-8 leading-none drop-shadow-lg text-white font-montserrat animate-fade-up opacity-0 delay-75">
                {slide.headline}
              </h1>
              {/* Call to Action Button */}
              <Link
                className="bg-bronze hover:bg-opacity-90 transition-all text-white px-8 py-4 uppercase tracking-[0.2em] text-sm font-semibold flex items-center gap-3 animate-fade-up opacity-0 delay-150 font-montserrat"
                href={slide.link}
              >
                See Project
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  ></path>
                </svg>
              </Link>
            </div>
          );
        })}
      </main>

      {/* Carousel Controls */}
      {/* Left Arrow */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 text-white/50 hover:text-white transition-colors p-4 cursor-pointer focus:outline-none"
        aria-label="Previous slide"
      >
        <svg
          className="h-10 w-10"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          ></path>
        </svg>
      </button>

      {/* Right Arrow */}
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 text-white/50 hover:text-white transition-colors p-4 cursor-pointer focus:outline-none"
        aria-label="Next slide"
      >
        <svg
          className="h-10 w-10"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 5l7 7-7 7"
          ></path>
        </svg>
      </button>

      {/* Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex space-x-2 items-center">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
            className={`h-1 transition-all duration-300 cursor-pointer ${
              current === i ? "w-10 bg-white" : "w-6 bg-white/40 hover:bg-white/70"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
}
