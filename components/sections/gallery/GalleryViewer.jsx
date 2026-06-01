"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import { ZoomIn, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function GalleryViewer({ categoryTitle, images }) {
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const slides = images.map(img => ({ src: typeof img === 'string' ? img : img.src }));

  return (
    <div className="container mx-auto px-6 lg:px-12 max-w-7xl pb-24">
      {/* Header and Back button */}
      <div className="mb-12 border-b border-outline-variant pb-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <Link href="/gallery" className="inline-flex items-center text-xs uppercase tracking-widest text-darkSecondaryForeground hover:text-accent transition-colors mb-4 font-semibold">
            <ArrowLeft size={16} className="mr-2" /> Back to Categories
          </Link>
          <h1 className="text-3xl md:text-5xl font-bold uppercase tracking-wide font-montserrat text-darkForeground">
            {categoryTitle}
          </h1>
        </div>
      </div>

      {/* Images Grid */}
      {images.length > 0 ? (
        <motion.div
          key="images"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          {images.map((img, idx) => {
            const src = typeof img === 'string' ? img : img.src;
            const width = typeof img === 'string' ? 800 : (img.width || 800);
            const height = typeof img === 'string' ? 800 : (img.height || 800);

            return (
              <div
                key={src}
                className="relative break-inside-avoid group overflow-hidden rounded-sm border border-outline-variant cursor-zoom-in shadow-xl"
                onClick={() => setLightboxIndex(idx)}
              >
                <div className="relative w-full overflow-hidden">
                  <Image
                    src={src}
                    alt={`Gallery item ${idx + 1}`}
                    width={width}
                    height={height}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    priority={idx < 2}
                  />
                  <div className="absolute inset-0 bg-darkBackground/20 group-hover:bg-transparent transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none">
                    <motion.div 
                      whileHover={{ scale: 1.1 }}
                      className="w-14 h-14 bg-accent rounded-full flex items-center justify-center shadow-2xl"
                    >
                      <ZoomIn size={24} className="text-[#131313]" />
                    </motion.div>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      ) : (
        <div className="text-center py-24 bg-surface-container rounded-sm border border-outline-variant">
          <p className="text-darkSecondaryForeground font-hanken text-lg">
            No images found for this category.
          </p>
        </div>
      )}

      {/* Lightbox Modal */}
      <Lightbox
        open={lightboxIndex >= 0}
        index={lightboxIndex}
        close={() => setLightboxIndex(-1)}
        slides={slides}
        plugins={[Zoom]}
      />
    </div>
  );
}
