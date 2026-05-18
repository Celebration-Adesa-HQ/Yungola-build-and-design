"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    title: "The Monolith House",
    category: "Architecture Design",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAS4dDnihoPhbQoIip4ND1QZ6mLo-Pk0jN1U490AvcTFq-d6EEnYh27U63ntBw3JtbE7t1LvN0Cbv4uiTpsHYrFw2CQcs-ZTPa7hQ4D18zxvN97mUhjESjk9XBapScKFZJeKZqlVoLekkmzc0EAo2RmqP3VdGG6AePzrjaiWRlTUjNaYYyPZBPetPH8vt2NJFn4uHx7zXHinqrSQG1gaJ0MrOgYDGvvyQDNgNr2FguHSUg-3yOlG4m-PpzLc-JiclSXpMK0NPgHFGH-",
    href: "/gallery#monolith",
  },
  {
    title: "Interior Craftsmanship",
    category: "Interior Design",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCARifno18pMLgFeDsrqkfslvAL2I_M6I-mJeRH7KSX7rGaI-FBUDTW4OtPpEEHMXH9WX5N4mlgVW1WvSow6ma4TIfQogMwbXPhgEZF4Ogj3LJIwLPL30Vmxnqs2tIjes4h7dNyt-i2xQ1LmMqEvr4BxCWSBSavqt9lv0u_dYsw9kMV3gw6_0sBnhMcrP9XvVxkxm-2NdoO7AufCRlgNnj23_Fa3VTDBbfa8KXj81ujUaPf3u4iE6GIhp1eKaYWb3ajDeUTylfSoBXj",
    href: "/gallery#interior",
  },
  {
    title: "Philosophy",
    category: "Exterior Design",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDGtBoV6dSiKqkUgrgoqSWKoGM7kUuuEvSen5tfKjC6KfK0dH8Lg2Z-OvUZY28MVdA38h34o-L5W97SEv5ceESYsqc4s5nQ5wqhI4-WMyoAN2LkBZKq7EzLynII7zer8rIaLXEgoNlujxk5o_QauMI7AmuRdIBG1OnAQ28v3j7ijYNMLOLqtoGIlkTYkE1Li7_MdexFya5iIJshga-P869U3N6ByvrAMTAEj2CWs0MJQmJBHO1t1WW999wu_dF1gyhvAySGGvwRDdLx",
    href: "/gallery#philosophy",
  },
  {
    title: "Horizon Estate",
    category: "Landscape Architecture",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCq0yQflHWTDTSzXWi9NDgUzW8hJjx4jTGrCX-nP3nvZOcQNtSV5MuWzuTkH30uldmsj6-Kcuc8BHSaogagqBWtKWc_oWL3m5ClfrN6r642Lz2esTRhpIZHohH2LJKAuVIYCYrvtSHnGo2f-LaMrZQHq42pN3YRECEcdx5CoFASfariiuKdaL4kFvgbGU-Tzl9Dd_KNvxBtpCDe3ithrnYukLfZ5qDlB_w7zR6lrvZPAzitiXT9kPtj5ddH6I9nb_DV3ArR6jAezmus",
    href: "/gallery#horizon",
  },
];

export default function FeaturedProjects() {
  const [visible, setVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const carouselRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.children[0]?.offsetWidth || 400;
      const scrollAmount = direction === "left" ? -cardWidth - 24 : cardWidth + 24;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const scrollToIndex = (index) => {
    setActiveIndex(index);
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.children[0]?.offsetWidth || 400;
      carouselRef.current.scrollTo({ left: index * (cardWidth + 24), behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const scrollLeft = carouselRef.current.scrollLeft;
      const cardWidth = carouselRef.current.children[0]?.offsetWidth || 400;
      const newIndex = Math.round(scrollLeft / (cardWidth + 24));
      if (newIndex !== activeIndex && newIndex >= 0 && newIndex < projects.length) {
        setActiveIndex(newIndex);
      }
    }
  };

  return (
    <section
      ref={sectionRef}
      id="featured-projects"
      className="py-20 relative overflow-hidden bg-noir text-noir-text antialiased"
    >
      {/* Section Header */}
      <div
        className={`text-center mb-16 transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <p className="text-noir-accent text-sm tracking-[0.2em] uppercase font-semibold mb-2 font-montserrat">
          Selected Works
        </p>
        <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-wide text-white font-oswald">
          Featured Projects
        </h2>
      </div>

      {/* Carousel Container */}
      <div className="relative w-full max-w-[1800px] mx-auto px-4 md:px-8">
        {/* Navigation Arrow Left */}
        <button
          aria-label="Previous project"
          onClick={() => scroll("left")}
          className="absolute left-4 top-1/3 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center transition-colors border border-white/30 backdrop-blur-sm cursor-pointer"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
        </button>

        {/* Navigation Arrow Right */}
        <button
          aria-label="Next project"
          onClick={() => scroll("right")}
          className="absolute right-4 top-1/3 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center transition-colors border border-white/30 backdrop-blur-sm cursor-pointer"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </button>

        {/* Cards Wrapper */}
        <div
          ref={carouselRef}
          onScroll={handleScroll}
          className="flex gap-6 overflow-x-auto scrollbar-none pt-4 pb-20 scroll-smooth"
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className={`flex-none w-full min-w-[320px] max-w-[420px] group relative transition-all duration-1000 transform ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative h-[400px] overflow-hidden mb-[-80px] z-0">
                <Image
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src={project.image}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                />
              </div>
              <div className="bg-noir-card p-8 mx-6 relative z-10 transition-colors duration-300 group-hover:bg-noir-accent flex flex-col items-center text-center shadow-lg font-montserrat">
                <span className="text-xs tracking-[0.2em] text-noir-accent group-hover:text-white uppercase mb-3 block transition-colors">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold uppercase tracking-wider mb-6 text-white transition-colors font-oswald">
                  {project.title}
                </h3>
                <Link
                  href={project.href}
                  className="inline-flex items-center text-sm tracking-widest uppercase hover:text-white text-gray-300 group-hover:text-white transition-colors"
                >
                  Details <span className="ml-2 text-lg leading-none">+</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center items-center gap-2 mt-8 pb-8">
          {projects.map((_, index) => (
            <span
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`h-1 block transition-all duration-300 cursor-pointer ${
                activeIndex === index
                  ? "w-12 bg-noir-accent"
                  : "w-8 bg-gray-600 hover:bg-gray-400"
              }`}
            ></span>
          ))}
        </div>
      </div>

      {/* Decorative background lines */}
      <div className="absolute inset-0 pointer-events-none border-x border-white/[0.03] w-[80%] mx-auto z-[-1]"></div>
      <div className="absolute inset-0 pointer-events-none border-x border-white/[0.03] w-[40%] mx-auto z-[-1]"></div>
    </section>
  );
}
