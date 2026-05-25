"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { showroomContent } from "@/lib/data/siteContent";

export default function ServicesHero() {
  const { spatial } = showroomContent;

  return (
    <div className="relative mb-24 lg:mb-32">
      {/* Background Image */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="w-full lg:w-3/4 ml-auto h-[400px] md:h-[500px] lg:h-[600px] relative z-0 overflow-hidden shadow-2xl"
      >
        <Image
          alt="Modern villa with pool"
          className="w-full h-full object-cover"
          src={spatial.imageUrl}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 75vw"
        />
        <div className="absolute inset-0 bg-[#131313]/10" />
      </motion.div>

      {/* Overlapping Content Card */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="bg-[#201f1f] w-[92%] lg:absolute top-1/2 lg:-translate-y-1/2 left-0 z-10 shadow-2xl -mt-16 lg:mt-0 mx-auto lg:mx-0 lg:w-[50%] xl:w-[45%] lg:translate-x-12 p-8 md:p-12 lg:p-14 border-t-2 border-[#ffe08b]"
      >
        <span className="text-[#ffe08b] text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase block mb-4 md:mb-6 font-montserrat">
          {spatial.badge}
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-wider mb-6 font-montserrat text-white leading-tight">
          {spatial.title}
        </h2>
        <p className="text-sm md:text-base text-[#d1c5ac] leading-relaxed font-light mb-6 font-hanken">
          {spatial.desc1}
        </p>
        <p className="text-sm md:text-base text-[#d1c5ac] leading-relaxed font-light mb-10 font-hanken">
          {spatial.desc2}
        </p>
        <Link
          href={spatial.ctaLink}
          className="group inline-flex items-center bg-[#ffe08b] hover:bg-white text-black text-xs font-bold tracking-[0.15em] uppercase px-8 py-4 transition-all duration-300"
        >
          {spatial.ctaLabel}
          <svg
            className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="square"
              strokeLinejoin="miter"
              strokeWidth="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            ></path>
          </svg>
        </Link>
      </motion.div>
    </div>
  );
}
