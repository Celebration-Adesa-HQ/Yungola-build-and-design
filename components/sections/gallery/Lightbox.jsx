"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function Lightbox({ items, index, onClose, onPrev, onNext }) {
  const item = items[index];
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div
      className="fixed inset-0 z-[100] bg-darkBackground/95 flex items-center justify-center backdrop-blur-md"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Image: ${item.title}`}
    >
      <div
        className="relative w-screen h-screen px-4 md:px-10 py-6 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 w-12 h-12 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-black/70 transition-all cursor-pointer"
          aria-label="Close lightbox"
        >
          <X size={24} />
        </button>

        {/* Image Container */}
        <div className="relative flex-1 w-full overflow-auto rounded-sm border border-white/10 shadow-2xl bg-black">
          {/* Zoom Controls */}
          <div className="absolute top-4 left-4 z-50 flex items-center gap-2">
            <button
              onClick={() => setZoom((prev) => Math.max(prev - 0.25, 1))}
              className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white flex items-center justify-center hover:bg-black/70 transition-all"
            >
              -
            </button>

            <button
              onClick={() => setZoom((prev) => Math.min(prev + 0.25, 5))}
              className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white flex items-center justify-center hover:bg-black/70 transition-all"
            >
              +
            </button>
          </div>

          {/* Zoomable Image */}
          <div className="relative w-full h-full flex items-center justify-center overflow-auto">
            <div
              className="relative transition-transform duration-300 ease-out"
              style={{
                width: `${100 * zoom}%`,
                height: `${100 * zoom}%`,
                minWidth: "100%",
                minHeight: "100%",
              }}
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="100vw"
                className="object-contain select-none pointer-events-none"
                priority
              />
            </div>
          </div>
        </div>

        {/* Info panel */}
        <div className="flex items-center justify-between mt-6 px-2">
          <div>
            <span className="text-[10px] text-accent uppercase tracking-[0.2em] font-montserrat font-bold">
              {item.type}
            </span>
            <h3 className="text-2xl text-darkForeground mt-1 font-oswald font-bold uppercase tracking-wide">
              {item.title}
            </h3>
            <p className="text-sm text-darkSecondaryForeground mt-1 font-hanken max-w-2xl">
              {item.desc}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onPrev}
              className="w-12 h-12 rounded-sm border border-white/20 flex items-center justify-center text-white hover:border-accent hover:text-accent transition-colors cursor-pointer"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={onNext}
              className="w-12 h-12 rounded-sm border border-white/20 flex items-center justify-center text-white hover:border-accent hover:text-accent transition-colors cursor-pointer"
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
