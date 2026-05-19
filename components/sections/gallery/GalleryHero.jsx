"use client";

import React from "react";
import { motion } from "framer-motion";
import { galleryContent } from "@/lib/data/siteContent";

export default function GalleryHero() {
  const { hero } = galleryContent;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1], // Custom premium easeOutExpo curve
      },
    },
  };

  const bgVariants = {
    hidden: { scale: 1.1, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section
      className="relative min-h-[50vh] md:min-h-[60vh] flex items-center overflow-hidden mb-16 border-b border-[#4e4633]/50 bg-[#131313]"
      aria-labelledby="gallery-hero-heading"
    >
      {/* Background Grid Lines */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, #4e4633 1px, transparent 1px)",
          backgroundSize: "25% 100%",
        }}
        aria-hidden="true"
      />

      {/* Background Image */}
      <motion.div
        variants={bgVariants}
        initial="hidden"
        animate="visible"
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
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 mt-12 md:mt-16"
      >
        <motion.p 
          variants={itemVariants}
          className="text-accent text-xs font-bold uppercase tracking-[0.2em] mb-4 font-montserrat"
        >
          {hero.badge}
        </motion.p>
        <motion.h1
          id="gallery-hero-heading"
          variants={itemVariants}
          className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase text-white mb-6 tracking-wide font-montserrat leading-none"
        >
          {hero.title}
        </motion.h1>
        <motion.p 
          variants={itemVariants}
          className="text-on-surface-variant text-sm md:text-base leading-relaxed max-w-2xl font-hanken font-light"
        >
          {hero.desc}
        </motion.p>
      </motion.div>
    </section>
  );
}
