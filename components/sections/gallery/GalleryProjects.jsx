"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ZoomIn } from "lucide-react";
import Lightbox from "./Lightbox";

import { projectFilters as filters, projectsData as projects } from "@/lib/data/projects";

export default function GalleryProjects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [lightboxIdx, setLightboxIdx] = useState(null);
  const itemsPerPage = 6;

  // Parse hash on load or on hashchange to set initial filter
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash) {
        const matchingFilter = filters.find((f) => {
          // e.g. "Architectural Design" -> matches "#architecture" or "#architectural-design"
          const simplifiedFilter = f
            .toLowerCase()
            .replace(" design", "")
            .replace(" plan", "")
            .replace(" modelling", "modelling");
          return hash.includes(simplifiedFilter);
        });
        if (matchingFilter) {
          setActiveFilter(matchingFilter);
        }
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Filter projects
  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.type === activeFilter);

  // Reset to page 1 on filter change
  useEffect(() => {
    setCurrentPage(1);
  }, [activeFilter]);

  // Paginate projects
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProjects = filteredProjects.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <>
      {/* Filter Bar with layoutId animated background pill */}
      <div className="mb-16 border-b border-outline-variant pb-6">
        <div className="flex items-center gap-3 overflow-x-auto custom-scrollbar py-2">
          {filters.map((f) => {
            const isActive = activeFilter === f;
            return (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`relative px-6 py-3 text-xs uppercase tracking-[0.2em] rounded-sm transition-colors duration-300 cursor-pointer font-semibold border ${
                  isActive
                    ? "text-[#131313]"
                    : "text-darkSecondaryForeground border-outline-variant hover:border-accent hover:text-darkForeground"
                }`}
                style={{
                  borderColor: isActive ? "transparent" : undefined,
                }}
                aria-pressed={isActive}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeFilterPill"
                    className="absolute inset-0 bg-accent rounded-sm z-0"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{f}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid with AnimatePresence layout animations */}
      <motion.div 
        layout 
        className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 mb-20" 
        data-purpose="projects-grid"
      >
        <AnimatePresence mode="popLayout">
          {paginatedProjects.map((project) => {
            const actualIdx = filteredProjects.findIndex((p) => p.id === project.id);
            return (
              <motion.article
                layout
                initial={{ opacity: 0, scale: 0.92, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: 20 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                key={project.id}
                className="relative flex flex-col group"
                data-purpose="project-card"
              >
                {/* Image Container with premium scale effects - Click to Open Lightbox */}
                <div 
                  onClick={() => setLightboxIdx(actualIdx)}
                  className="w-full aspect-[4/3] overflow-hidden mb-[-4rem] z-0 shadow-2xl border border-outline-variant rounded-sm relative cursor-zoom-in"
                >
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-108"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
                  
                  {/* Zoom Icon Overlay using Framer Motion spring */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none">
                    <motion.div 
                      whileHover={{ scale: 1.1 }}
                      className="w-14 h-14 bg-accent rounded-full flex items-center justify-center shadow-2xl"
                    >
                      <ZoomIn size={24} className="text-[#131313]" />
                    </motion.div>
                  </div>
                </div>

                {/* Content Overlay - Link to Case Study Details Page */}
                <Link
                  href={`/projects/${project.id}`}
                  className="mx-4 relative z-20 select-none block"
                >
                  <motion.div
                    whileHover={{ y: -6, borderColor: "#ffe08b" }}
                    transition={{ duration: 0.4 }}
                    className={`${
                      project.highlight ? "bg-accent text-on-primary border-[#ffe08b]" : "bg-surface-container text-darkForeground hover:border-accent"
                    } p-8 lg:p-10 text-center shadow-2xl border border-outline-variant/30 transition-all duration-300 rounded-sm`}
                  >
                    <p
                      className={`${
                        project.highlight ? "text-[#131313] font-bold" : "text-accent"
                      } text-[10px] font-semibold uppercase tracking-widest mb-3 font-montserrat`}
                    >
                      {project.type}
                    </p>
                    <h3 className={`text-xl md:text-2xl font-bold uppercase mb-6 tracking-wide font-montserrat ${
                      project.highlight ? "text-[#131313]" : "text-white"
                    }`}>
                      {project.title}
                    </h3>
                    <span
                      className={`inline-flex items-center text-xs font-semibold uppercase tracking-widest transition-colors duration-300 ${
                        project.highlight
                          ? "text-[#131313] hover:opacity-80"
                          : "text-darkSecondaryForeground group-hover:text-[#ffe08b]"
                      }`}
                    >
                      Details <span className="ml-2 text-lg leading-none">+</span>
                    </span>
                  </motion.div>
                </Link>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Empty State */}
      {paginatedProjects.length === 0 && (
        <div className="text-center py-20 bg-surface-container rounded-sm border border-outline-variant">
          <p className="text-darkSecondaryForeground font-hanken text-base">
            No projects found for the selected service filter.
          </p>
        </div>
      )}

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-3 pt-8 border-t border-outline-variant">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className={`px-5 py-3 text-xs uppercase tracking-[0.15em] font-bold rounded-sm transition-colors border ${
              currentPage === 1
                ? "bg-surface-container/50 text-darkSecondaryForeground/50 cursor-not-allowed border-outline-variant/50"
                : "bg-surface-container text-darkForeground hover:border-accent border-outline-variant cursor-pointer"
            }`}
          >
            Previous
          </button>
          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-11 h-11 text-xs uppercase tracking-widest font-bold rounded-sm transition-all duration-300 flex items-center justify-center cursor-pointer border ${
                  currentPage === page
                    ? "bg-accent text-[#131313] border-accent shadow-lg"
                    : "bg-surface-container text-darkSecondaryForeground border-outline-variant hover:border-accent hover:text-darkForeground"
                }`}
              >
                {page}
              </button>
            ))}
          </div>
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className={`px-5 py-3 text-xs uppercase tracking-[0.15em] font-bold rounded-sm transition-colors border ${
              currentPage === totalPages
                ? "bg-surface-container/50 text-darkSecondaryForeground/50 cursor-not-allowed border-outline-variant/50"
                : "bg-surface-container text-darkForeground hover:border-accent border-outline-variant cursor-pointer"
            }`}
          >
            Next
          </button>
        </div>
      )}

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIdx !== null && (
          <Lightbox
            items={filteredProjects}
            index={lightboxIdx}
            onClose={() => setLightboxIdx(null)}
            onPrev={() =>
              setLightboxIdx(
                (prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length
              )
            }
            onNext={() => setLightboxIdx((prev) => (prev + 1) % filteredProjects.length)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
