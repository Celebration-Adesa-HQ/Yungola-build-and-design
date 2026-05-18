"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

const filters = ["All", "Residential", "Commercial", "Renovation", "Ongoing"];

const projects = [
  {
    id: 1,
    title: "The Belgravia Residence",
    type: "Residential",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    alt: "Luxury residential home exterior",
  },
  {
    id: 2,
    title: "Meridian Office Complex",
    type: "Commercial",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
    alt: "Modern office complex",
  },
  {
    id: 3,
    title: "Azure Villa Renovation",
    type: "Renovation",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
    alt: "Villa renovation with pool",
  },
  {
    id: 4,
    title: "Lakeview Apartments",
    type: "Residential",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
    alt: "Lakeview apartment complex",
  },
  {
    id: 5,
    title: "Sunrise Mall",
    type: "Commercial",
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80",
    alt: "Modern shopping mall exterior",
  },
  {
    id: 6,
    title: "Greenfield Estate",
    type: "Ongoing",
    image: "https://images.unsplash.com/photo-1503174971373-b1f69850bded?w=800&q=80",
    alt: "Estate development in progress",
  },
  {
    id: 7,
    title: "Lagos Penthouse Suite",
    type: "Residential",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    alt: "Luxury penthouse interior",
  },
  {
    id: 8,
    title: "Corporate HQ Abuja",
    type: "Commercial",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
    alt: "Corporate headquarters building",
  },
  {
    id: 9,
    title: "Heritage Home Upgrade",
    type: "Renovation",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    alt: "Heritage home kitchen renovation",
  },
];

function Lightbox({ items, index, onClose, onPrev, onNext }) {
  const item = items[index];

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
      className="fixed inset-0 z-[100] bg-[#0D0D0D]/95 flex items-center justify-center"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Image: ${item.title}`}
    >
      <div
        className="relative max-w-5xl w-full mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white/70 hover:text-white cursor-pointer transition-colors"
          aria-label="Close lightbox"
        >
          <X size={28} />
        </button>

        {/* Image */}
        <div className="relative aspect-[16/9] rounded-sm overflow-hidden">
          <Image
            src={item.image}
            alt={item.alt}
            fill
            sizes="(max-width: 1200px) 100vw, 80vw"
            className="object-cover"
            priority
          />
        </div>

        {/* Info panel */}
        <div className="flex items-center justify-between mt-4 px-2">
          <div>
            <span
              className="text-[10px] text-[#F5C518] uppercase tracking-[0.2em]"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              {item.type}
            </span>
            <h3
              className="text-lg text-white mt-1 font-700"
              style={{ fontFamily: "var(--font-montserrat)", fontWeight: 700 }}
            >
              {item.title}
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={onPrev}
              className="w-10 h-10 rounded-sm border border-white/20 flex items-center justify-center text-white hover:border-[#F5C518] hover:text-[#F5C518] transition-colors cursor-pointer"
              aria-label="Previous image"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={onNext}
              className="w-10 h-10 rounded-sm border border-white/20 flex items-center justify-center text-white hover:border-[#F5C518] hover:text-[#F5C518] transition-colors cursor-pointer"
              aria-label="Next image"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightboxIdx, setLightboxIdx] = useState(null);

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.type === activeFilter);

  return (
    <>
      {/* Page Hero */}
      <section className="bg-[#0D0D0D] pt-40 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 editorial-glow opacity-50 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <p
            className="text-xs text-[#F5C518] uppercase tracking-[0.25em] mb-4"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Our Portfolio
          </p>
          <h1
            className="text-5xl lg:text-8xl font-900 text-white"
            style={{ fontFamily: "var(--font-montserrat)", fontWeight: 900 }}
          >
            Project Gallery
          </h1>
        </div>
      </section>

      {/* Filters */}
      <div className="bg-[#1A1A1A] sticky top-20 z-30">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex items-center gap-3 overflow-x-auto scrollbar-hide">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`flex-shrink-0 px-5 py-2 text-xs uppercase tracking-[0.15em] rounded-sm transition-all duration-200 cursor-pointer ${
                activeFilter === f
                  ? "bg-[#F5C518] text-[#0D0D0D] font-700"
                  : "border border-white/20 text-white/60 hover:border-white/50 hover:text-white"
              }`}
              style={{ fontFamily: "var(--font-montserrat)" }}
              aria-pressed={activeFilter === f}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <section className="bg-[#F9F9F7] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((project, i) => (
              <button
                key={project.id}
                onClick={() => setLightboxIdx(i)}
                className="group relative overflow-hidden rounded-sm cursor-pointer text-left"
                aria-label={`View ${project.title}`}
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-600 group-hover:scale-[1.08]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/85 via-[#0D0D0D]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 border-2 border-[#F5C518] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Zoom icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 bg-[#F5C518] rounded-sm flex items-center justify-center">
                      <ZoomIn size={20} className="text-[#0D0D0D]" />
                    </div>
                  </div>

                  {/* Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <span
                      className="inline-block text-[10px] text-[#0D0D0D] bg-[#F5C518] uppercase tracking-[0.15em] px-3 py-1 rounded-full mb-2 font-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                      {project.type}
                    </span>
                    <h3
                      className="text-base font-700 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ fontFamily: "var(--font-montserrat)", fontWeight: 700 }}
                    >
                      {project.title}
                    </h3>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-[#6B7280]" style={{ fontFamily: "var(--font-josefin)" }}>
                No projects found for this filter.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIdx !== null && (
        <Lightbox
          items={filtered}
          index={lightboxIdx}
          onClose={() => setLightboxIdx(null)}
          onPrev={() => setLightboxIdx((prev) => (prev - 1 + filtered.length) % filtered.length)}
          onNext={() => setLightboxIdx((prev) => (prev + 1) % filtered.length)}
        />
      )}
    </>
  );
}
