"use client";

import React from "react";
import { motion } from "framer-motion";
import { galleryContent } from "@/lib/data/siteContent";

export default function GalleryHero() {
  const { hero } = galleryContent;

  return (
    <section
      className="relative min-h-[50vh] md:min-h-[60vh] flex items-center overflow-hidden mb-16 border-b border-[#4e4633]/50 bg-[#131313]"
      aria-labelledby="gallery-hero-heading"
    >
      {/* Background Grid Lines */}
      <div
        className="absolute inset-0 pointer-events-none z-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(to right, #4e4633 1px, transparent 1px)",
          backgroundSize: "25% 100%",
        }}
        aria-hidden="true"
      />

      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url('${hero.bgImage}')`,
        }}
        aria-hidden="true"
      />

      {/* Dark Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#131313]/90 via-[#131313]/70 to-[#131313]/40 z-10"
        aria-hidden="true"
      />

      {/* Content Layer */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 mt-12 md:mt-16">
        <motion.p 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-[#ffe08b] text-xs font-bold uppercase tracking-[0.2em] mb-4 font-montserrat"
        >
          {hero.badge}
        </motion.p>
        <motion.h1
          id="gallery-hero-heading"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase text-white mb-6 tracking-wide font-montserrat"
        >
          {hero.title}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-[#d1c5ac] text-sm md:text-base leading-relaxed max-w-2xl font-hanken font-light"
        >
          {hero.desc}
        </motion.p>
      </div>
    </section>
  );
}
