"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const servicesData = [
  {
    id: 1,
    title: "Architectural Design",
    description:
      "Lorem ipsum dolor sit amet, congue doctus vix eu. At molestie conceptam qui, dicam explicari ea nec. Vix ad lorem debet.",
    icon: (
      <svg
        className="w-12 h-12 mx-auto"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1"
        ></path>
      </svg>
    ),
  },
  {
    id: 2,
    title: "Interior Design",
    description:
      "Lorem ipsum dolor sit amet, congue doctus vix eu. At molestie conceptam qui, dicam explicari ea nec. Vix ad lorem debet.",
    icon: (
      <svg
        className="w-12 h-12 mx-auto"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1"
        ></path>
      </svg>
    ),
  },
  {
    id: 3,
    title: "Exterior Design",
    description:
      "Lorem ipsum dolor sit amet, congue doctus vix eu. At molestie conceptam qui, dicam explicari ea nec. Vix ad lorem debet.",
    image:
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80",
    icon: (
      <svg
        className="w-12 h-12 mx-auto"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1"
        ></path>
        <path
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1"
        ></path>
      </svg>
    ),
  },
];

export default function ServicesOverview() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? servicesData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === servicesData.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      ref={ref}
      id="services"
      className="py-24 bg-acrino-dark border-b border-acrino-border relative overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 transform ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="text-acrino-gold text-xs font-bold tracking-[0.2em] uppercase mb-4 block font-montserrat">
            Yungola
          </span>
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-wider text-white font-oswald">
            Our Services
          </h2>
        </div>

        {/* Services Grid with Carousel Controls */}
        <div className="relative group">
          
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 md:-ml-12 z-20 w-10 h-10 rounded-full bg-white/10 hover:bg-acrino-gold text-white flex items-center justify-center transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-acrino-gold cursor-pointer"
            aria-label="Previous service"
          >
            <svg
              className="w-5 h-5"
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

          {/* Desktop & Mobile Responsive container */}
          <div
            className={`transition-all duration-1000 transform ${
              visible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            {/* Desktop layout: Grid */}
            <div className="hidden md:grid grid-cols-3 gap-6 relative z-10">
              {servicesData.map((service, index) => {
                const isImageBg = !!service.image;
                return (
                  <div
                    key={service.id}
                    className={`service-card bg-[#2d3136] p-10 text-center border border-transparent hover:border-acrino-gold/30 flex flex-col items-center group/card cursor-pointer relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl min-h-[400px] ${
                      isImageBg ? "relative" : ""
                    }`}
                  >
                    {isImageBg ? (
                      <>
                        <Image
                          alt={service.title}
                          className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-700 scale-100 group-hover/card:scale-110"
                          src={service.image}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-black/60 z-10 transition-opacity duration-300 group-hover/card:bg-black/75"></div>
                        <div className="relative z-20 flex flex-col h-full items-center justify-between flex-grow w-full">
                          <div className="text-acrino-gold mb-6 transition-transform duration-300 group-hover/card:scale-110">
                            {service.icon}
                          </div>
                          <h3 className="text-lg font-bold uppercase tracking-widest mb-4 text-white font-oswald">
                            {service.title}
                          </h3>
                          <p className="text-white/80 text-sm leading-relaxed mb-8 font-light flex-grow font-montserrat">
                            {service.description}
                          </p>
                          <a
                            className="inline-flex items-center text-white/80 group-hover/card:text-acrino-gold text-xs font-bold tracking-[0.2em] uppercase transition-colors duration-300 mt-auto font-montserrat"
                            href="/showroom"
                          >
                            Read More
                            <svg
                              className="w-3 h-3 ml-2 transition-transform duration-300 group-hover/card:translate-x-1"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                              ></path>
                            </svg>
                          </a>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="text-acrino-gold mb-6 transition-transform duration-300 group-hover/card:scale-110">
                          {service.icon}
                        </div>
                        <h3 className="text-lg font-bold uppercase tracking-widest mb-4 text-white font-oswald">
                          {service.title}
                        </h3>
                        <p className="text-acrino-gray text-sm leading-relaxed mb-8 font-light flex-grow font-montserrat">
                          {service.description}
                        </p>
                        <a
                          className="inline-flex items-center text-acrino-gray group-hover/card:text-acrino-gold text-xs font-bold tracking-[0.2em] uppercase transition-colors duration-300 mt-auto font-montserrat"
                          href="/showroom"
                        >
                          Read More
                          <svg
                            className="w-3 h-3 ml-2 transition-transform duration-300 group-hover/card:translate-x-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M14 5l7 7m0 0l-7 7m7-7H3"
                            ></path>
                          </svg>
                        </a>
                      </>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Mobile layout: Slider */}
            <div className="md:hidden relative z-10 w-full overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {servicesData.map((service) => {
                  const isImageBg = !!service.image;
                  return (
                    <div key={service.id} className="w-full flex-shrink-0 px-2">
                      <div
                        className={`service-card bg-[#2d3136] p-10 text-center border border-transparent hover:border-acrino-gold/30 flex flex-col items-center group/card cursor-pointer relative overflow-hidden transition-all duration-300 hover:shadow-2xl min-h-[400px]`}
                      >
                        {isImageBg ? (
                          <>
                            <Image
                              alt={service.title}
                              className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-700 scale-100 group-hover/card:scale-110"
                              src={service.image}
                              fill
                              sizes="100vw"
                            />
                            <div className="absolute inset-0 bg-black/60 z-10 transition-opacity duration-300 group-hover/card:bg-black/75"></div>
                            <div className="relative z-20 flex flex-col h-full items-center justify-between flex-grow w-full">
                              <div className="text-acrino-gold mb-6 transition-transform duration-300 group-hover/card:scale-110">
                                {service.icon}
                              </div>
                              <h3 className="text-lg font-bold uppercase tracking-widest mb-4 text-white font-oswald">
                                {service.title}
                              </h3>
                              <p className="text-white/80 text-sm leading-relaxed mb-8 font-light flex-grow font-montserrat">
                                {service.description}
                              </p>
                              <a
                                className="inline-flex items-center text-white/80 group-hover/card:text-acrino-gold text-xs font-bold tracking-[0.2em] uppercase transition-colors duration-300 mt-auto font-montserrat"
                                href="/showroom"
                              >
                                Read More
                                <svg
                                  className="w-3 h-3 ml-2 transition-transform duration-300 group-hover/card:translate-x-1"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                  ></path>
                                </svg>
                              </a>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="text-acrino-gold mb-6 transition-transform duration-300 group-hover/card:scale-110">
                              {service.icon}
                            </div>
                            <h3 className="text-lg font-bold uppercase tracking-widest mb-4 text-white font-oswald">
                              {service.title}
                            </h3>
                            <p className="text-acrino-gray text-sm leading-relaxed mb-8 font-light flex-grow font-montserrat">
                              {service.description}
                            </p>
                            <a
                              className="inline-flex items-center text-acrino-gray group-hover/card:text-acrino-gold text-xs font-bold tracking-[0.2em] uppercase transition-colors duration-300 mt-auto font-montserrat"
                              href="/showroom"
                            >
                              Read More
                              <svg
                                  className="w-3 h-3 ml-2 transition-transform duration-300 group-hover/card:translate-x-1"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                  ></path>
                                </svg>
                            </a>
                          </>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 md:-mr-12 z-20 w-10 h-10 rounded-full bg-white/10 hover:bg-acrino-gold text-white flex items-center justify-center transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-acrino-gold cursor-pointer"
            aria-label="Next service"
          >
            <svg
              className="w-5 h-5"
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
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex justify-center mt-12 space-x-2">
          {servicesData.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`h-1 transition-all duration-300 cursor-pointer ${
                activeIndex === i ? "w-8 bg-acrino-gold" : "w-8 bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            ></button>
          ))}
        </div>

      </div>
    </section>
  );
}
