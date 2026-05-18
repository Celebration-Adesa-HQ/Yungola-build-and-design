"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ZoomIn } from "lucide-react";
import Lightbox from "./Lightbox";

import { projectFilters as filters, projectsData as projects } from "@/lib/data/projects";

export default function GalleryProjects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [lightboxIdx, setLightboxIdx] = useState(null);
  const itemsPerPage = 6;

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
      {/* Filter Bar */}
      <div className="mb-16 border-b border-outline-variant pb-6">
        <div className="flex items-center gap-3 overflow-x-auto custom-scrollbar py-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`flex-shrink-0 px-6 py-3 text-xs uppercase tracking-[0.2em] rounded-sm transition-all duration-300 cursor-pointer font-semibold border ${
                activeFilter === f
                  ? "bg-accent text-on-primary border-accent shadow-lg"
                  : "bg-surface-container text-darkSecondaryForeground border-outline-variant hover:border-accent hover:text-darkForeground"
              }`}
              aria-pressed={activeFilter === f}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 mb-20" data-purpose="projects-grid">
        {paginatedProjects.map((project) => {
          const actualIdx = filteredProjects.findIndex((p) => p.id === project.id);
          return (
            <article
              key={project.id}
              onClick={() => setLightboxIdx(actualIdx)}
              className="relative flex flex-col group cursor-pointer"
              data-purpose="project-card"
            >
              {/* Image Container */}
              <div className="w-full aspect-[4/3] overflow-hidden mb-[-4rem] z-0 shadow-2xl border border-outline-variant">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
                {/* Zoom Icon Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none">
                  <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center shadow-2xl transform scale-50 group-hover:scale-100 transition-transform duration-300">
                    <ZoomIn size={24} className="text-on-primary" />
                  </div>
                </div>
              </div>

              {/* Content Overlay */}
              <div
                className={`${
                  project.highlight ? "bg-accent text-on-primary" : "bg-surface-container text-darkForeground"
                } mx-4 p-8 lg:p-10 text-center relative z-20 shadow-2xl border border-outline-variant/30 group-hover:border-accent transition-all duration-300 rounded-sm`}
              >
                <p
                  className={`${
                    project.highlight ? "text-on-primary opacity-90" : "text-accent"
                  } text-[10px] font-semibold uppercase tracking-widest mb-3 font-montserrat`}
                >
                  {project.type}
                </p>
                <h3 className="text-xl md:text-2xl font-bold uppercase mb-6 tracking-wide font-montserrat">
                  {project.title}
                </h3>
                <span
                  className={`inline-flex items-center text-xs font-medium uppercase tracking-widest transition-colors duration-300 ${
                    project.highlight
                      ? "text-on-primary hover:opacity-80 opacity-90"
                      : "text-darkSecondaryForeground group-hover:text-darkForeground"
                  }`}
                >
                  Details <span className="ml-2 text-lg leading-none">+</span>
                </span>
              </div>
            </article>
          );
        })}
      </div>

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
                    ? "bg-accent text-on-primary border-accent shadow-lg"
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
    </>
  );
}
