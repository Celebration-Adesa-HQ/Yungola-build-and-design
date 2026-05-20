"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, FileText, Image as ImageIcon } from "lucide-react";

export default function GalleryCategories({ categories }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 mb-20" data-purpose="categories-grid">
      {categories.map((category) => (
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          key={category.id}
          className="relative flex flex-col group"
        >
          {/* Image Container */}
          <Link href={`/gallery/${category.id}`} className="block w-full aspect-[4/5] overflow-hidden mb-[-4rem] z-0 shadow-2xl border border-outline-variant rounded-sm relative">
            <Image
              src={category.coverImage}
              alt={category.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-darkBackground/20 group-hover:bg-darkBackground/0 transition-colors duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-darkBackground via-darkBackground/50 to-transparent opacity-80" />
            
            {/* Overlay Counts */}
            <div className="absolute top-6 right-6 flex flex-col gap-2 z-10 text-on-primary">
              {category.imagesCount > 0 && (
                <div className="flex items-center gap-2 bg-darkBackground/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-outline-variant text-xs font-semibold">
                  <ImageIcon size={14} className="text-accent" />
                  <span>{category.imagesCount}</span>
                </div>
              )}
              {category.pdfsCount > 0 && (
                <div className="flex items-center gap-2 bg-darkBackground/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-outline-variant text-xs font-semibold">
                  <FileText size={14} className="text-accent" />
                  <span>{category.pdfsCount}</span>
                </div>
              )}
            </div>
          </Link>

          {/* Content Box */}
          <Link href={`/gallery/${category.id}`} className="mx-6 relative z-20 block">
            <motion.div
              whileHover={{ y: -6, borderColor: "#ffe08b" }}
              transition={{ duration: 0.4 }}
              className="bg-surface-container text-darkForeground hover:border-accent p-8 text-center shadow-2xl border border-outline-variant/30 transition-all duration-300 rounded-sm flex flex-col items-center justify-center gap-4"
            >
              <h3 className="text-2xl font-bold uppercase tracking-wide font-montserrat">
                {category.title}
              </h3>
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-outline-variant group-hover:bg-accent group-hover:text-darkBackground group-hover:border-accent transition-all duration-300">
                <ArrowUpRight size={18} />
              </span>
            </motion.div>
          </Link>
        </motion.article>
      ))}
    </div>
  );
}
