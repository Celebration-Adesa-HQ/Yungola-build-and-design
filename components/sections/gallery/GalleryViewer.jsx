"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import { ZoomIn, FileText, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// Configure PDF worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function GalleryViewer({ categoryTitle, images, pdfs }) {
  const [lightboxIndex, setLightboxIndex] = useState(-1);
  const [activeTab, setActiveTab] = useState("images");
  const [numPages, setNumPages] = useState({});

  const onDocumentLoadSuccess = (pdfId, { numPages }) => {
    setNumPages(prev => ({ ...prev, [pdfId]: numPages }));
  };

  const slides = images.map(img => ({ src: img }));

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

        {/* Tabs */}
        {(images.length > 0 && pdfs.length > 0) && (
          <div className="flex bg-surface-container rounded-sm border border-outline-variant p-1">
            <button
              onClick={() => setActiveTab("images")}
              className={`px-6 py-2.5 text-xs font-semibold uppercase tracking-widest rounded-sm transition-all ${
                activeTab === "images" ? "bg-accent text-[#131313] shadow-md" : "text-darkSecondaryForeground hover:text-darkForeground"
              }`}
            >
              Images ({images.length})
            </button>
            <button
              onClick={() => setActiveTab("pdfs")}
              className={`px-6 py-2.5 text-xs font-semibold uppercase tracking-widest rounded-sm transition-all ${
                activeTab === "pdfs" ? "bg-accent text-[#131313] shadow-md" : "text-darkSecondaryForeground hover:text-darkForeground"
              }`}
            >
              Documents ({pdfs.length})
            </button>
          </div>
        )}
      </div>

      <AnimatePresence mode="wait">
        {/* Images Grid */}
        {activeTab === "images" && images.length > 0 && (
          <motion.div
            key="images"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
          >
            {images.map((src, idx) => (
              <div
                key={src}
                className="relative break-inside-avoid group overflow-hidden rounded-sm border border-outline-variant cursor-zoom-in shadow-xl"
                onClick={() => setLightboxIndex(idx)}
              >
                <div className="relative w-full overflow-hidden">
                  {/* Using standard img for masonry aspect ratio ease, but next/image works with unoptimized or specific layout */}
                  <img
                    src={src}
                    alt={`Gallery item ${idx + 1}`}
                    className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
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
            ))}
          </motion.div>
        )}

        {/* PDFs Grid */}
        {activeTab === "pdfs" && pdfs.length > 0 && (
          <motion.div
            key="pdfs"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {pdfs.map((pdf, idx) => (
              <div key={pdf} className="bg-surface-container border border-outline-variant p-6 rounded-sm flex flex-col group hover:border-accent transition-colors">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-darkBackground border border-outline-variant rounded-sm flex items-center justify-center text-accent shrink-0 group-hover:bg-accent group-hover:text-darkBackground transition-colors">
                    <FileText size={24} />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-bold text-darkForeground break-words uppercase text-sm tracking-wide">
                      {pdf.split('/').pop().replace('.pdf', '')}
                    </h3>
                    <p className="text-xs text-darkSecondaryForeground font-hanken mt-1">
                      {numPages[pdf] ? `${numPages[pdf]} Pages` : "Loading..."}
                    </p>
                  </div>
                </div>
                
                {/* PDF Preview Thumbnail (Page 1) */}
                <a href={pdf} target="_blank" rel="noopener noreferrer" className="block relative w-full aspect-[1/1.4] overflow-hidden border border-outline-variant/30 bg-white/5 group-hover:opacity-80 transition-opacity">
                  <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
                    <Document
                      file={pdf}
                      onLoadSuccess={(data) => onDocumentLoadSuccess(pdf, data)}
                      loading={<span className="text-xs text-darkSecondaryForeground">Loading preview...</span>}
                      className="w-full h-full flex items-start justify-center"
                    >
                      <Page 
                        pageNumber={1} 
                        renderTextLayer={false} 
                        renderAnnotationLayer={false}
                        width={300}
                        className="shadow-2xl"
                      />
                    </Document>
                  </div>
                </a>
                
                <a 
                  href={pdf} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-6 w-full py-3 text-center text-xs font-bold uppercase tracking-widest bg-darkBackground text-darkForeground border border-outline-variant hover:border-accent hover:text-accent transition-all rounded-sm"
                >
                  View Full PDF
                </a>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {(images.length === 0 && pdfs.length === 0) && (
        <div className="text-center py-24 bg-surface-container rounded-sm border border-outline-variant">
          <p className="text-darkSecondaryForeground font-hanken text-lg">
            No media found for this category.
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
