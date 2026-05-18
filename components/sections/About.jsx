"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function About() {
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

  return (
    <section
      ref={ref}
      id="about"
      className="relative py-24 bg-darkBackground border-y border-outline-variant overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row relative items-center">
          {/* Image Container */}
          <div
            className={`w-full lg:w-3/4 lg:ml-auto relative z-0 h-[400px] md:h-[550px] lg:h-[600px] transition-all duration-1000 transform ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <Image
              alt="Modern house exterior at dusk"
              className="object-cover"
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1920&q=80"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 75vw"
            />
          </div>

          {/* Text Box Overlay */}
          <div
            className={`w-full lg:w-1/2 lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:left-0 z-10 mt-[-100px] lg:mt-0 p-8 md:p-12 bg-surface-container shadow-2xl transition-all duration-1000 delay-300 transform relative border-t-2 border-accent rounded-sm ${
              visible
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-8 scale-95"
            }`}
          >
            <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase mb-4 block font-montserrat">
              Get To Know Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-wider mb-6 text-darkForeground font-oswald">
              About Yungola
            </h2>
            <div className="text-on-surface-variant text-sm md:text-base leading-relaxed space-y-6 font-hanken font-light">
              <p>
                Yungola Build and Design is a luxury boutique cinematic
                architectural design and construction studio. We transform
                visions into high-end built realities — from concept drawings to
                completed homes and commercial spaces globally.
              </p>
              <p>
                We believe that premium architecture should feel like a premium
                digital showroom, not engineering blueprints. Every space is
                curated with generous whitespace, sleek borders, smooth hover
                animations, and absolute design authority.
              </p>
            </div>
            <a
              className="inline-flex items-center mt-10 px-8 py-3 bg-accent hover:bg-accentDark text-on-primary text-xs font-bold tracking-[0.1em] uppercase transition-all duration-300 transform hover:scale-105 active:scale-95 font-montserrat group rounded-sm shadow-md"
              href="/about"
            >
              Read More
              <svg
                className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
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
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
