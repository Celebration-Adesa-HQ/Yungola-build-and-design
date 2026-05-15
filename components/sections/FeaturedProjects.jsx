"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "The Belgravia Residence",
    type: "Residential",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    alt: "Modern luxury residential building exterior",
  },
  {
    id: 2,
    title: "Meridian Office Complex",
    type: "Commercial",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
    alt: "Contemporary commercial office complex",
  },
  {
    id: 3,
    title: "Azure Villa Renovation",
    type: "Renovation",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
    alt: "Beautiful villa renovation with pool",
  },
];

export default function FeaturedProjects() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="section-pad bg-[#F9F9F7]"
      aria-labelledby="projects-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <p
              className="text-xs text-[#F5C518] uppercase tracking-[0.2em] mb-3"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Portfolio
            </p>
            <h2
              id="projects-heading"
              className={`text-4xl lg:text-6xl font-700 text-[#0D0D0D] yellow-underline transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ fontFamily: "var(--font-cinzel)" }}
            >
              Our Work
            </h2>
          </div>
          <Link
            href="/gallery"
            id="featured-see-gallery-btn"
            className="group flex items-center gap-2 text-sm text-[#0D0D0D] font-600 uppercase tracking-[0.12em] hover:text-[#F5C518] transition-colors duration-200 cursor-pointer flex-shrink-0"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            See Full Gallery
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(({ id, title, type, image, alt }, i) => (
            <Link
              href="/gallery"
              key={id}
              className={`group relative overflow-hidden rounded-sm cursor-pointer img-zoom block transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
              aria-label={`View project: ${title}`}
            >
              {/* Image */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={image}
                  alt={alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-600 group-hover:scale-[1.06]"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/90 via-[#0D0D0D]/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

                {/* Yellow border on hover */}
                <div className="absolute inset-0 border-2 border-[#F5C518] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <span
                    className="inline-block text-[10px] text-[#0D0D0D] bg-[#F5C518] uppercase tracking-[0.15em] px-3 py-1 rounded-full mb-3 font-600"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    {type}
                  </span>
                  <h3
                    className="text-lg font-600 text-white"
                    style={{ fontFamily: "var(--font-cinzel)" }}
                  >
                    {title}
                  </h3>
                </div>

                {/* External icon */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 bg-[#F5C518] rounded-sm flex items-center justify-center">
                    <ExternalLink size={14} className="text-[#0D0D0D]" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
