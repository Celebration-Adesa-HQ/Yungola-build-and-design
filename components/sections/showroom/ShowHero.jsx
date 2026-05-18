"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ShowHero() {
  return (
    <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-center overflow-hidden border-b border-[#4e4633]/50 bg-[#131313]">
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
          backgroundImage: `url('https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1920&q=80')`,
        }}
        aria-hidden="true"
      />

      {/* Dark Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#131313]/70 via-[#131313]/85 to-[#131313] z-10"
        aria-hidden="true"
      />

      {/* Content Layer */}
      <div className="relative z-20 text-center py-20 px-6 max-w-4xl mx-auto flex flex-col items-center justify-center mt-12 md:mt-16">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-[0.1em] font-montserrat mb-6 text-white"
        >
          Showroom <span className="text-[#ffe08b]">&</span> Services
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-sm md:text-lg text-[#d1c5ac] font-light font-hanken max-w-2xl mx-auto leading-relaxed"
        >
          Discover our comprehensive architectural capabilities and immerse
          yourself in our curated interior styles and material palettes.
        </motion.p>
      </div>
    </section>
  );
}
