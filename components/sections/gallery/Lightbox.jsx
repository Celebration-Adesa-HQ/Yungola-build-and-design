"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function Lightbox({ items, index, onClose, onPrev, onNext }) {
  const item = items[index];
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") {
        setZoom(1);
        onPrev();
      }
      if (e.key === "ArrowRight") {
        setZoom(1);
        onNext();
      }
    };

    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center backdrop-blur-lg select-none"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Image: ${item.title}`}
    >
      {/* Image layer */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.35 }}
            className="w-full h-full flex items-center justify-center"
            onClick={onClose}
          >
            <div
              className="relative w-full h-full flex items-center justify-center"
              style={{
                transform: `scale(${zoom})`,
                transformOrigin: "center center",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="100vw"
                className="object-contain pointer-events-none"
                priority
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* UI layer */}
      <div className="absolute inset-0 z-50 pointer-events-none p-4 md:p-8">
        {/* Close */}
        <div className="absolute top-0 right-0 pointer-events-auto">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClose}
            className="w-12 h-12 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-white"
            aria-label="Close"
          >
            <X size={24} />
          </motion.button>
        </div>

        {/* Zoom */}
        <div className="absolute top-0 left-0 pointer-events-auto flex gap-2">
          <button
            onClick={() => setZoom((z) => Math.max(z - 0.25, 1))}
            className="w-10 h-10 rounded-full bg-black/60 border border-white/10 text-white"
          >
            -
          </button>

          <button
            onClick={() => setZoom((z) => Math.min(z + 0.25, 5))}
            className="w-10 h-10 rounded-full bg-black/60 border border-white/10 text-white"
          >
            +
          </button>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 pointer-events-auto">
          <button
            onClick={() => {
              setZoom(1);
              onPrev();
            }}
            className="w-14 h-14 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-white"
          >
            <ChevronLeft size={28} />
          </button>
        </div>

        <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 pointer-events-auto">
          <button
            onClick={() => {
              setZoom(1);
              onNext();
            }}
            className="w-14 h-14 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-white"
          >
            <ChevronRight size={28} />
          </button>
        </div>

        {/* Bottom bar */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl pointer-events-auto bg-black/70 border border-white/10 p-4 md:p-6 flex flex-col md:flex-row justify-between gap-4"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex-1">
            <span className="text-[10px] text-accent uppercase tracking-widest block mb-1">
              {item.type}
            </span>
            <h3 className="text-white text-xl md:text-2xl font-bold">
              {item.title}
            </h3>
            <p className="text-white/70 text-sm mb-4">{item.desc}</p>
            <Link 
              href={`/projects/${item.id}`}
              onClick={onClose}
              className="inline-flex items-center gap-2 text-xs text-accent uppercase tracking-widest font-bold hover:text-white transition-colors group"
            >
              View Full Case Study 
              <ChevronRight size={14} className="transform group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                setZoom(1);
                onPrev();
              }}
              className="w-12 h-12 border border-white/20 text-white"
            >
              <ChevronLeft size={20} />
            </button>

            <span className="text-white/60 text-xs">
              {index + 1} / {items.length}
            </span>

            <button
              onClick={() => {
                setZoom(1);
                onNext();
              }}
              className="w-12 h-12 border border-white/20 text-white"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
