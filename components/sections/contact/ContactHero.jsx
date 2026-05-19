"use client";

import React from "react";
import { motion } from "framer-motion";
import { contactContent } from "@/lib/data/siteContent";

export default function ContactHero() {
  const { hero } = contactContent;

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
        ease: [0.16, 1, 0.3, 1], // Premium easeOutExpo curve
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
    <section className="relative min-h-[50vh] flex items-center overflow-hidden border-b border-outline-variant bg-[#131313]">
      {/* Background Grid Lines */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--color-surface-container) 1px, transparent 1px)",
          backgroundSize: "25% 100%",
        }}
      />

      {/* Immersive Background Image */}
      <motion.div
        variants={bgVariants}
        initial="hidden"
        animate="visible"
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url('${hero.bgImage}')` }}
        role="img"
        aria-label="Company building exterior"
      />

      {/* Dark Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#131313]/95 via-[#131313]/70 to-[#131313]/40 z-10"
        aria-hidden="true"
      />

      {/* Animated Text Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-16 w-full"
      >
        <motion.p
          variants={itemVariants}
          className="text-xs text-accent uppercase tracking-[0.25em] mb-4 font-montserrat font-bold"
        >
          {hero.badge}
        </motion.p>
        
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-darkForeground uppercase tracking-tight font-montserrat mb-6 leading-none"
        >
          {hero.title}
        </motion.h1>
        
        <motion.p
          variants={itemVariants}
          className="text-base md:text-lg text-darkSecondaryForeground max-w-3xl leading-relaxed font-hanken font-light"
        >
          {hero.desc}
        </motion.p>
      </motion.div>
    </section>
  );
}
