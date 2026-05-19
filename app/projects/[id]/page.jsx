"use client";

import React, { use, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronLeft, 
  ChevronRight,
  X,
  MapPin, 
  User, 
  Calendar, 
  Maximize2, 
  CheckCircle, 
  Building, 
  ArrowRight,
  ShieldAlert,
  Sparkles,
  Layers,
  FileText
} from "lucide-react";
import { projectsData, getProjectDetails } from "@/lib/data/projects";

export default function ProjectDetailPage({ params: paramsPromise }) {
  // Safe extraction of params in Next.js 14/15
  const params = use(paramsPromise);
  const projectId = parseInt(params.id);
  
  // Find project based on ID
  const project = projectsData.find((p) => p.id === projectId);

  // Retrieve detailed rich specs or generate realistic fallback safely before hook registration
  const details = getProjectDetails(project);
  
  // Setup next/prev project IDs for circular traversal
  const prevId = projectId === 1 ? projectsData.length : projectId - 1;
  const nextId = projectId === projectsData.length ? 1 : projectId + 1;
  const prevProject = projectsData.find((p) => p.id === prevId);
  const nextProject = projectsData.find((p) => p.id === nextId);

  // Active picture in secondary gallery
  const [activeGalleryImage, setActiveGalleryImage] = useState("");
  // Index of image in fullscreen gallery modal (null means closed)
  const [fullscreenSlideIdx, setFullscreenSlideIdx] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  // Keyboard controls for fullscreen slideshow modal
  useEffect(() => {
    if (fullscreenSlideIdx === null || !details || !details.additionalImages) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setFullscreenSlideIdx(null);
      } else if (e.key === "ArrowLeft") {
        setFullscreenSlideIdx((prev) => 
          prev === 0 ? details.additionalImages.length - 1 : prev - 1
        );
      } else if (e.key === "ArrowRight") {
        setFullscreenSlideIdx((prev) => 
          prev === details.additionalImages.length - 1 ? 0 : prev + 1
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [fullscreenSlideIdx, details]);

  if (!project) {
    return (
      <div className="bg-surface-container-lowest text-darkForeground min-h-screen pt-36 flex flex-col items-center justify-center font-montserrat">
        <ShieldAlert size={64} className="text-accent mb-6 animate-pulse" />
        <h1 className="text-3xl font-bold uppercase tracking-wider mb-3">Project Not Found</h1>
        <p className="text-darkSecondaryForeground mb-8 font-hanken">The architectural record you requested does not exist or has been archived.</p>
        <Link 
          href="/gallery" 
          className="px-8 py-4 bg-accent text-[#131313] uppercase tracking-widest font-bold text-xs rounded-sm hover:opacity-90 transition-opacity flex items-center gap-2"
        >
          <ChevronLeft size={16} /> Return to Portfolio
        </Link>
      </div>
    );
  }

  // Initialize the gallery image highlight when project loads
  useEffect(() => {
    if (details && details.additionalImages) {
      setActiveGalleryImage(details.additionalImages[0]);
    }
  }, [project.id]);

  return (
    <div className="bg-[#131313] text-darkForeground min-h-screen antialiased overflow-x-hidden selection:bg-accent selection:text-[#131313]">
      
      {/* 1. Cinematic Full-Bleed Hero */}
      <section className="relative h-[85vh] md:h-screen w-full flex items-end overflow-hidden border-b border-outline-variant/30">
        <div className="absolute inset-0 z-0">
          <Image
            src={project.image}
            alt={project.alt || project.title}
            fill
            priority
            sizes="100vw"
            className="object-cover scale-102 transition-transform duration-[6000ms] ease-out brightness-90"
          />
          {/* Brand Signature Luxury Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-[#131313]/40 to-black/20" />
        </div>

        <div className="container mx-auto px-6 lg:px-12 pb-16 md:pb-24 relative z-10 max-w-7xl w-full">
          <Link 
            href="/gallery"
            className="inline-flex items-center gap-2 text-xs tracking-widest uppercase font-semibold text-accent mb-8 hover:text-white transition-colors group"
          >
            <ChevronLeft size={16} className="transform group-hover:-translate-x-1 transition-transform" />
            Back to Works
          </Link>
          
          <div className="max-w-4xl">
            <span className="text-xs md:text-sm font-semibold text-accent uppercase tracking-[0.25em] font-montserrat mb-4 block">
              {project.type}
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-wider mb-6 text-white leading-tight font-montserrat font-oswald">
              {project.title}
            </h1>
            <p className="text-base md:text-lg text-[#d1c5ac] max-w-2xl font-hanken leading-relaxed">
              {project.desc}
            </p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-12 hidden lg:flex items-center gap-3 text-xs tracking-widest uppercase text-darkSecondaryForeground z-10">
          <div className="h-12 w-[1px] bg-outline-variant relative overflow-hidden">
            <motion.div 
              animate={{ y: ["-100%", "100%"] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="absolute left-0 top-0 w-full h-1/2 bg-accent"
            />
          </div>
          Scroll details
        </div>
      </section>

      {/* 2. Project Specifications Bar */}
      <section className="bg-surface-container-lowest border-b border-outline-variant py-10 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 text-center md:text-left">
          
          <div className="border-r border-outline-variant/30 pr-4 last:border-0">
            <span className="text-[10px] uppercase tracking-widest text-accent font-semibold block mb-2 font-montserrat">Location</span>
            <span className="text-sm font-semibold text-white flex items-center justify-center md:justify-start gap-1 font-hanken">
              <MapPin size={14} className="text-accent inline-block shrink-0" />
              {details.location}
            </span>
          </div>

          <div className="border-r border-outline-variant/30 pr-4 last:border-0">
            <span className="text-[10px] uppercase tracking-widest text-accent font-semibold block mb-2 font-montserrat">Client</span>
            <span className="text-sm font-semibold text-white flex items-center justify-center md:justify-start gap-1 font-hanken">
              <User size={14} className="text-accent inline-block shrink-0" />
              {details.client}
            </span>
          </div>

          <div className="border-r border-outline-variant/30 pr-4 last:border-0">
            <span className="text-[10px] uppercase tracking-widest text-accent font-semibold block mb-2 font-montserrat">Year</span>
            <span className="text-sm font-semibold text-white flex items-center justify-center md:justify-start gap-1 font-hanken">
              <Calendar size={14} className="text-accent inline-block shrink-0" />
              {details.year}
            </span>
          </div>

          <div className="border-r border-outline-variant/30 pr-4 lg:last:border-0">
            <span className="text-[10px] uppercase tracking-widest text-accent font-semibold block mb-2 font-montserrat">Area Capacity</span>
            <span className="text-sm font-semibold text-white flex items-center justify-center md:justify-start gap-1 font-hanken">
              <Maximize2 size={14} className="text-accent inline-block shrink-0" />
              {details.area}
            </span>
          </div>

          <div className="border-r border-outline-variant/30 pr-4 last:border-0 hidden lg:block">
            <span className="text-[10px] uppercase tracking-widest text-accent font-semibold block mb-2 font-montserrat">Status</span>
            <span className="text-sm font-semibold text-white flex items-center gap-1 font-hanken">
              <CheckCircle size={14} className="text-green-400 inline-block shrink-0" />
              {details.status}
            </span>
          </div>

          <div className="hidden lg:block">
            <span className="text-[10px] uppercase tracking-widest text-accent font-semibold block mb-2 font-montserrat">Discipline</span>
            <span className="text-sm font-semibold text-white flex items-center gap-1 font-hanken">
              <Building size={14} className="text-accent inline-block shrink-0" />
              {project.type}
            </span>
          </div>

        </div>
      </section>

      {/* 3. Narrative & Philosophy */}
      <section className="py-20 md:py-28 px-6 lg:px-12 max-w-7xl mx-auto border-x border-outline-variant/40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Column A: Title & Label */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles size={16} className="text-accent animate-spin-slow" />
              <span className="text-xs uppercase tracking-widest text-accent font-bold font-montserrat">
                Studio Philosophy
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wide text-white leading-tight font-montserrat">
              Sculpting Space <br />With Design Authority
            </h2>
            <div className="h-[2px] w-24 bg-accent mt-6" />
            
            <div className="mt-8 bg-surface-container/50 border border-outline-variant/40 p-6 rounded-sm">
              <h3 className="text-xs uppercase tracking-widest text-white font-bold mb-3 font-montserrat flex items-center gap-2">
                <FileText size={14} className="text-accent" /> Scope of Work
              </h3>
              <p className="text-xs text-[#d1c5ac] leading-relaxed font-hanken">
                {details.scope}
              </p>
            </div>
          </div>

          {/* Column B: Philosophy Details */}
          <div className="lg:col-span-7">
            <p className="text-lg md:text-xl text-white font-medium font-hanken leading-relaxed mb-6">
              &ldquo;{details.philosophy.slice(0, 100)}...&rdquo;
            </p>
            <p className="text-base text-[#d1c5ac] font-hanken leading-relaxed space-y-6">
              {details.philosophy}
            </p>
            
            {/* Quick Quote block */}
            <div className="border-l-4 border-accent pl-6 py-2 mt-8 italic text-white/95 font-hanken">
              &ldquo;Luxury is not in the excessive ornament, but in the uncompromising alignment of structural precision and spatial harmony.&rdquo;
              <span className="block text-xs uppercase tracking-widest text-accent font-semibold font-montserrat mt-2 not-italic">— Yungola Adeyemi, Founder</span>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Interactive Immersive Showcase */}
      {details.additionalImages && details.additionalImages.length > 0 && (
        <section className="bg-surface-container-lowest py-20 px-6 lg:px-12 border-y border-outline-variant">
          <div className="max-w-7xl mx-auto">
            
            <div className="text-center mb-12">
              <span className="text-xs uppercase tracking-widest text-accent font-bold mb-2 block font-montserrat">
                Visual Showcase
              </span>
              <h2 className="text-3xl font-bold uppercase tracking-wide text-white font-montserrat">
                Immersive Captures
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              {/* Highlight main preview image (Click opens slideshow starting at active gallery image index) */}
              <div 
                onClick={() => {
                  const idx = details.additionalImages.indexOf(activeGalleryImage || details.additionalImages[0]);
                  setFullscreenSlideIdx(idx !== -1 ? idx : 0);
                }}
                className="lg:col-span-8 relative aspect-[16/10] overflow-hidden border border-outline-variant/60 rounded-sm cursor-zoom-in group shadow-2xl"
              >
                <Image
                  src={activeGalleryImage || project.image}
                  alt={`${project.title} highlight`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 850px"
                  className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-103 brightness-95"
                />
                
                {/* Fullscreen hover overlay indicator */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/35 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center gap-2">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center shadow-2xl">
                      <Maximize2 size={20} className="text-[#131313]" />
                    </div>
                    <span className="text-[10px] tracking-[0.2em] font-semibold text-accent uppercase font-montserrat">
                      Expand Gallery
                    </span>
                  </div>
                </div>
              </div>

              {/* Grid of other gallery items */}
              <div className="lg:col-span-4 grid grid-cols-2 gap-4 auto-rows-fr">
                {details.additionalImages.length <= 4 ? (
                  // If 4 or fewer, show all
                  details.additionalImages.map((img, i) => (
                    <div
                      key={i}
                      onClick={() => setActiveGalleryImage(img)}
                      className={`relative w-full aspect-[4/3] cursor-pointer overflow-hidden border transition-all duration-300 rounded-sm ${
                        activeGalleryImage === img
                          ? "border-accent scale-[1.02] shadow-xl"
                          : "border-outline-variant/40 hover:border-accent/60 opacity-70 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`${project.title} detail capture ${i + 1}`}
                        fill
                        sizes="(max-width: 1024px) 50vw, 200px"
                        className="object-cover"
                      />
                      <div className="absolute top-2 left-2 bg-[#131313]/80 px-2 py-1 text-[8px] tracking-widest text-accent font-semibold uppercase rounded-xs">
                        View {i + 1}
                      </div>
                    </div>
                  ))
                ) : (
                  // If more than 4, show 3 thumbnails and a "+X More" card
                  <>
                    {details.additionalImages.slice(0, 3).map((img, i) => (
                      <div
                        key={i}
                        onClick={() => setActiveGalleryImage(img)}
                        className={`relative w-full aspect-[4/3] cursor-pointer overflow-hidden border transition-all duration-300 rounded-sm ${
                          activeGalleryImage === img
                            ? "border-accent scale-[1.02] shadow-xl"
                            : "border-outline-variant/40 hover:border-accent/60 opacity-70 hover:opacity-100"
                        }`}
                      >
                        <Image
                          src={img}
                          alt={`${project.title} detail capture ${i + 1}`}
                          fill
                          sizes="(max-width: 1024px) 50vw, 200px"
                          className="object-cover"
                        />
                        <div className="absolute top-2 left-2 bg-[#131313]/80 px-2 py-1 text-[8px] tracking-widest text-accent font-semibold uppercase rounded-xs">
                          View {i + 1}
                        </div>
                      </div>
                    ))}

                    {/* "+X More" card */}
                    <div
                      onClick={() => setFullscreenSlideIdx(3)}
                      className="relative w-full aspect-[4/3] cursor-pointer overflow-hidden border border-outline-variant/40 hover:border-accent rounded-sm group shadow-lg"
                    >
                      <Image
                        src={details.additionalImages[3]}
                        alt="More images preview"
                        fill
                        sizes="(max-width: 1024px) 50vw, 200px"
                        className="object-cover blur-[1px] brightness-50"
                      />
                      <div className="absolute inset-0 bg-[#0e0e0edb]/85 flex flex-col items-center justify-center text-center p-2 group-hover:bg-[#0e0e0ee8]/75 transition-colors">
                        <span className="text-xl md:text-2xl font-bold text-accent font-montserrat">
                          +{details.additionalImages.length - 3}
                        </span>
                        <span className="text-[9px] uppercase tracking-widest text-white/95 font-semibold mt-1 font-montserrat">
                          More Shots
                        </span>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>

          </div>
        </section>
      )}

      {/* 5. Key Design Solutions / Features */}
      <section className="py-20 px-6 lg:px-12 max-w-7xl mx-auto border-x border-outline-variant/40">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-widest text-accent font-bold mb-2 block font-montserrat">
            Bespoke Engineering
          </span>
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wide text-white font-montserrat">
            Key Design Details
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {details.features.map((feat, idx) => (
            <motion.div
              whileHover={{ y: -4, borderColor: "#ffe08b" }}
              transition={{ duration: 0.3 }}
              key={idx}
              className="bg-surface-container border border-outline-variant/40 p-8 rounded-sm transition-all duration-300 flex items-start gap-5 group"
            >
              <span className="text-2xl font-bold text-accent/50 group-hover:text-accent font-montserrat tracking-widest">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-lg font-bold uppercase text-white tracking-wider mb-3 group-hover:text-accent transition-colors font-montserrat">
                  {feat.title}
                </h3>
                <p className="text-sm text-[#d1c5ac] leading-relaxed font-hanken">
                  {feat.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 6. Material Board Showcase */}
      <section className="bg-surface-container-lowest border-t border-outline-variant py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-widest text-accent font-bold mb-2 block font-montserrat">
              Palette & Textures
            </span>
            <h2 className="text-3xl font-bold uppercase tracking-wide text-white font-montserrat">
              Elite Material Board
            </h2>
            <p className="text-sm text-darkSecondaryForeground max-w-xl mx-auto mt-4 font-hanken">
              Bespoke materials selected specifically for this site to ensure complete structural resonance and visual harmony.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {details.materials.map((mat, i) => (
              <div 
                key={i}
                className="bg-surface-container border border-outline-variant/30 p-6 rounded-sm flex flex-col items-center text-center group hover:border-accent/40 transition-colors"
              >
                {/* Material color chip representation */}
                <div 
                  className={`w-16 h-16 rounded-full ${mat.color} border ${mat.border} mb-6 shadow-2xl relative overflow-hidden group-hover:scale-105 transition-transform duration-300`}
                >
                  {/* Subtle sheen layer */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                
                <span className="text-[10px] text-accent uppercase tracking-widest font-semibold block mb-1 font-montserrat">
                  {mat.type}
                </span>
                
                <h4 className="text-sm font-bold uppercase tracking-wider text-white font-montserrat">
                  {mat.name}
                </h4>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. Next/Prev Case Studies Traversal */}
      <section className="border-y border-outline-variant bg-[#0e0e0e] py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
          
          {prevProject && (
            <Link 
              href={`/projects/${prevId}`} 
              className="flex items-center gap-4 group w-full md:w-auto text-left mr-auto hover:text-accent transition-colors"
            >
              <div className="w-12 h-12 rounded-full border border-outline-variant/30 flex items-center justify-center group-hover:border-accent text-white group-hover:text-accent transition-colors shrink-0">
                <ChevronLeft size={20} />
              </div>
              <div>
                <span className="text-[9px] uppercase tracking-widest text-darkSecondaryForeground block font-montserrat">Previous Study</span>
                <span className="text-sm font-bold uppercase tracking-wider text-white group-hover:text-accent transition-colors font-montserrat block mt-1">
                  {prevProject.title}
                </span>
              </div>
            </Link>
          )}

          <div className="hidden md:block h-12 w-[1px] bg-outline-variant/40" />

          {nextProject && (
            <Link 
              href={`/projects/${nextId}`} 
              className="flex items-center gap-4 group w-full md:w-auto text-right ml-auto hover:text-accent transition-colors"
            >
              <div className="order-1 md:order-2">
                <span className="text-[9px] uppercase tracking-widest text-darkSecondaryForeground block font-montserrat">Next Study</span>
                <span className="text-sm font-bold uppercase tracking-wider text-white group-hover:text-accent transition-colors font-montserrat block mt-1">
                  {nextProject.title}
                </span>
              </div>
              <div className="order-2 md:order-1 w-12 h-12 rounded-full border border-outline-variant/30 flex items-center justify-center group-hover:border-accent text-white group-hover:text-accent transition-colors shrink-0">
                <ArrowRight size={20} className="transform group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Link>
          )}

        </div>
      </section>

      {/* 8. Call To Action Footer Band */}
      <section className="py-24 px-6 lg:px-12 text-center max-w-5xl mx-auto">
        <span className="text-xs uppercase tracking-widest text-accent font-bold mb-4 block font-montserrat">
          Start Your Case Study
        </span>
        <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-wide text-white mb-8 leading-tight font-montserrat">
          Ready to Build Your Monumental Vision? <br />Let&apos;s Design It Together.
        </h2>
        <p className="text-base text-[#d1c5ac] max-w-2xl mx-auto mb-10 font-hanken leading-relaxed">
          From concept drawings to final turnkey master construction, Yungola's certified NIA team handles your project with absolute design authority.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/contact"
            className="px-10 py-5 bg-accent text-[#131313] text-xs font-bold uppercase tracking-widest btn-glow rounded-sm font-montserrat shadow-lg"
          >
            Start Your Project
          </Link>
          <Link
            href="/gallery"
            className="px-10 py-5 border border-outline-variant hover:border-accent text-white text-xs font-bold uppercase tracking-widest rounded-sm font-montserrat transition-colors"
          >
            View More Works
          </Link>
        </div>
      </section>

      {/* Immersive Fullscreen Slideshow Modal */}
      <AnimatePresence>
        {fullscreenSlideIdx !== null && details.additionalImages && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-[#0a0a0a]/98 backdrop-blur-md z-[9999] flex flex-col justify-between p-4 md:p-8 select-none"
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between w-full z-10">
              <div className="text-white/80 font-hanken text-xs md:text-sm">
                <span className="font-bold text-accent font-montserrat">
                  {fullscreenSlideIdx + 1}
                </span>{" "}
                / {details.additionalImages.length} — {project.title}
              </div>
              <button
                onClick={() => setFullscreenSlideIdx(null)}
                className="w-12 h-12 rounded-full border border-white/10 hover:border-accent text-white hover:text-accent flex items-center justify-center transition-all bg-black/40 backdrop-blur-sm cursor-pointer"
                aria-label="Close Gallery"
              >
                <X size={20} />
              </button>
            </div>

            {/* Main Image Slider Area */}
            <div className="relative flex-1 flex items-center justify-center py-6 px-12">
              {/* Left Arrow Button */}
              <button
                onClick={() =>
                  setFullscreenSlideIdx((prev) =>
                    prev === 0 ? details.additionalImages.length - 1 : prev - 1
                  )
                }
                className="absolute left-4 w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/10 hover:border-accent text-white hover:text-accent flex items-center justify-center transition-all bg-black/40 backdrop-blur-sm z-10 cursor-pointer"
                aria-label="Previous Slide"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Central Image Container with Slide Transition */}
              <div className="relative w-full h-full max-w-5xl max-h-[70vh] flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={fullscreenSlideIdx}
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={details.additionalImages[fullscreenSlideIdx]}
                      alt={`${project.title} slide ${fullscreenSlideIdx + 1}`}
                      fill
                      className="object-contain"
                      sizes="(max-width: 1024px) 100vw, 1200px"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Right Arrow Button */}
              <button
                onClick={() =>
                  setFullscreenSlideIdx((prev) =>
                    prev === details.additionalImages.length - 1 ? 0 : prev + 1
                  )
                }
                className="absolute right-4 w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/10 hover:border-accent text-white hover:text-accent flex items-center justify-center transition-all bg-black/40 backdrop-blur-sm z-10 cursor-pointer"
                aria-label="Next Slide"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Bottom Thumbnail Bar (Horizontal Scroll List) */}
            <div className="w-full flex justify-center z-10">
              <div className="flex items-center gap-3 overflow-x-auto py-3 px-4 max-w-4xl custom-scrollbar-thin bg-black/40 border border-white/5 rounded-md backdrop-blur-xs">
                {details.additionalImages.map((img, i) => (
                  <div
                    key={i}
                    onClick={() => setFullscreenSlideIdx(i)}
                    className={`relative w-16 md:w-20 aspect-[16/10] cursor-pointer overflow-hidden border rounded-sm transition-all duration-300 shrink-0 ${
                      fullscreenSlideIdx === i
                        ? "border-accent scale-[1.08] opacity-100"
                        : "border-white/20 opacity-50 hover:opacity-90"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`Thumb ${i + 1}`}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
