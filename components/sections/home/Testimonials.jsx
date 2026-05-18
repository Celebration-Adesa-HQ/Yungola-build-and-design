"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { homeContent } from "@/lib/data/siteContent";

export default function Testimonials() {
  const testimonials = homeContent.testimonials;
  const [activeIndex, setActiveIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const current = testimonials[activeIndex];

  return (
    <section
      ref={sectionRef}
      className="relative w-full mx-auto py-20 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[800px] flex items-center justify-center bg-darkBackground font-montserrat antialiased border-b border-outline-variant"
    >
      <div
        className={`relative w-full h-[600px] flex items-center transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        {/* Left side: Background Image */}
        <div className="absolute left-0 top-0 w-full lg:w-[70%] h-full z-0 overflow-hidden shadow-2xl">
          <Image
            alt={current.name}
            className="w-full h-full object-cover transition-all duration-1000 scale-100 hover:scale-105"
            src={current.image}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 70vw"
          />
          <div className="absolute inset-0 bg-darkBackground/30 lg:hidden z-10"></div>
        </div>

        {/* Right side: Content Block */}
        <div className="absolute right-0 lg:right-[5%] xl:right-[10%] z-10 w-full md:w-[600px] bg-surface-container shadow-2xl p-8 md:p-12 lg:p-16 flex flex-col justify-center border-t-2 border-accent transition-all duration-700 backdrop-blur-sm bg-opacity-95 rounded-sm">
          {/* Label */}
          <p className="text-accent uppercase tracking-widest text-xs font-semibold mb-4 font-montserrat">
            Testimonials
          </p>
          {/* Heading */}
          <h2 className="text-darkForeground text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-wider mb-8 font-montserrat">
            Our Clients Say
          </h2>
          {/* Quote */}
          <div className="min-h-[140px] flex items-center mb-10">
            <p className="text-on-surface-variant italic leading-relaxed text-base md:text-lg transition-opacity duration-500 font-hanken">
              "{current.quote}"
            </p>
          </div>
          {/* User Info */}
          <div className="flex items-center mb-10 transition-all duration-500">
            <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4 flex-shrink-0 border border-accent/40">
              <Image
                alt={current.name}
                className="object-cover"
                src={current.avatar}
                fill
                sizes="48px"
              />
            </div>
            <div>
              <div className="flex items-center">
                <span className="w-4 h-[1px] bg-outline-variant mr-2"></span>
                <p className="text-darkForeground font-semibold text-sm font-montserrat tracking-wider">{current.name}</p>
              </div>
              <p className="text-darkSecondaryForeground text-xs mt-1 ml-6 font-hanken tracking-wide">{current.title}</p>
            </div>
          </div>
          {/* Pagination Controls */}
          <div className="flex items-center space-x-3">
            {testimonials.map((_, index) => (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-1 cursor-pointer transition-all duration-300 ${
                  activeIndex === index
                    ? "w-12 bg-accent box-content"
                    : "w-6 bg-on-surface-variant/30 hover:bg-on-surface-variant/60"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
