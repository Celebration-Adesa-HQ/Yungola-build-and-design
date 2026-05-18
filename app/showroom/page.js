import Image from "next/image";
import Link from "next/link";
import { Calendar, Phone } from "lucide-react";

export const metadata = {
  title: "Services & Showroom | YUNGOLA",
  description: "Explore Yungola's cinematic architectural services, core capabilities, interior styles, materials, finishes, and 3D previews.",
};

const services = [
  {
    id: "architecture",
    title: "Architectural Design",
    desc: "Transforming ambitious visions into structural masterpieces. We specialize in cinematic residential and commercial architecture with uncompromising geometric precision.",
    icon: (
      <svg className="w-10 h-10 text-[#a68a68] service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-5h6v5M12 11h.01" strokeLinecap="round" strokeLinejoin="round"></path></svg>
    ),
    link: "/gallery#architecture"
  },
  {
    id: "interior",
    title: "Interior Design",
    desc: "Curating immersive digital-showroom aesthetics for living and working spaces. Every texture, lighting angle, and negative space is meticulously planned.",
    icon: (
      <svg className="w-10 h-10 text-[#a68a68] service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 19h16M4 15l2-6h12l2 6v4H4v-4zM8 9V5a2 2 0 012-2h4a2 2 0 012 2v4" strokeLinecap="round" strokeLinejoin="round"></path></svg>
    ),
    link: "/gallery#interior"
  },
  {
    id: "exterior",
    title: "Exterior Design",
    desc: "Sculpting striking building facades, secluded balconies, and seamless indoor-outdoor transitions that command absolute design authority at first glance.",
    icon: (
      <svg className="w-10 h-10 text-[#a68a68] service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 21l2-7h10l2 7M3 10h18M7 3l5 4 5-4M12 14v7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
    ),
    bgImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDcB3-LyfoCIyWswo5TiXoS1LgF6rNmj49SrjkFvqb9OopvB1SmMHSGUkkYQn5mMjEY90sHWeEMZ_tZqNTr2UEGLktoUdDH1bU6tAlhx6KloMMnv6guO_wN1Rabkdds3AeNnDtk-jnRPBk-QBO5LSw8G78rNpyYVoal6ZNn5hDwuZV1dohsYiaZAUdXtY-JdJ9Duk-s-q7_dTZk8TuQzeO_PA4rObpWnfM12oE0hTd2ylNX84KbCakAYWJ5N_ehijGGxHTlkN9Qjfes", link: "/gallery#exterior"
  },
  {
    id: "furniture",
    title: "Furniture Design",
    desc: "Bespoke furniture pieces designed and crafted specifically for your architectural layout, ensuring complete harmony between form, comfort, and premium materials.",
    icon: (
      <svg className="w-10 h-10 text-[#a68a68] service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 18v3M20 18v3M5 8h14v10H5zM8 5h8v3H8z" strokeLinecap="round" strokeLinejoin="round"></path></svg>
    ), link: "/gallery#furniture"
  },
  {
    id: "decor",
    title: "Decor Plan",
    desc: "Comprehensive styling curation including custom art selection, sophisticated lighting fixtures, and accent materials that bring warmth and character to your home.",
    icon: (
      <svg className="w-10 h-10 text-[#a68a68] service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" strokeLinecap="round" strokeLinejoin="round"></path></svg>
    ), link: "/gallery#decor"
  },
  {
    id: "modelling",
    title: "3D Modelling",
    desc: "Hyper-realistic photorealistic architectural visualizations and immersive walkthroughs, allowing you to explore and perfect your space before construction begins.",
    icon: (
      <svg className="w-10 h-10 text-[#a68a68] service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16zM12 22V12M12 12L3 7M12 12l9-5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
    ), link: "/gallery#modelling"
  }
];

const capabilities = [
  {
    id: "blueprinting",
    title: "Conceptual Blueprinting",
    desc: "We begin every project with rigorous site analysis, spatial planning, and conceptual development. Our blueprinting phase marries structural integrity with your lifestyle aspirations.",
  },
  {
    id: "construction",
    title: "Master Construction",
    desc: "Executing complex architectural designs requires elite craftsmanship and uncompromising engineering standards. We manage the entire build lifecycle with absolute precision.",
  },
  {
    id: "curation",
    title: "Luxury Curation",
    desc: "Sourcing premium materials, custom fixtures, and exclusive finishes from top global artisans to ensure your property feels distinct, rare, and world-class.",
  },
  {
    id: "management",
    title: "Project Management",
    desc: "Dedicated end-to-end oversight ensuring clear communication, transparent milestone tracking, and seamless coordination between architects, engineers, and interior designers.",
  },
  {
    id: "turnkey",
    title: "Turnkey Solutions",
    desc: "From the initial sketch to the final interior styling and key handover, our turnkey service provides a completely stress-free experience for luxury homeowners and investors.",
  },
];

const styles = [
  {
    id: "modern",
    title: "Modern Minimalist",
    desc: "Clean lines, neutral tones, and purposeful negative space.",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&q=80",
    alt: "Modern minimalist interior",
  },
  {
    id: "industrial",
    title: "Industrial Chic",
    desc: "Raw concrete, exposed metals, and warm wood accents.",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80",
    alt: "Industrial chic interior",
  },
  {
    id: "traditional",
    title: "Contemporary African",
    desc: "Rich earthy tones, local artistry, and warm textures.",
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=600&q=80",
    alt: "Contemporary African interior style",
  },
  {
    id: "luxury",
    title: "Luxury Classic",
    desc: "Ornate detailing, premium materials, and timeless elegance.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80",
    alt: "Luxury classic interior",
  },
];

const materials = [
  { name: "Marble Flooring", color: "#E8E0D5", hex: "#E8E0D5" },
  { name: "Dark Oak Wood", color: "#4A3728", hex: "#4A3728" },
  { name: "Warm White Paint", color: "#F5F2EB", hex: "#F5F2EB" },
  { name: "Charcoal Concrete", color: "#3D3D3D", hex: "#3D3D3D" },
  { name: "Brass Accents", color: "#B5943A", hex: "#B5943A" },
  { name: "Slate Grey Tile", color: "#6B7280", hex: "#6B7280" },
  { name: "Ivory Limestone", color: "#DDD5C4", hex: "#DDD5C4" },
  { name: "Midnight Glass", color: "#1A1A2E", hex: "#1A1A2E" },
];

export default function ShowroomPage() {
  return (
    <div className="bg-[#1d1f22] text-white min-h-screen pt-24 font-montserrat antialiased">
      {/* BEGIN: Our Services Section (from HTML snippet) */}
      <section className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto border-x border-gray-800/60">
        {/* Hero Section */}
        <div className="relative mb-24">
          {/* Background Image */}
          <div className="w-full md:w-3/4 ml-auto h-[400px] md:h-[500px] relative z-0 overflow-hidden shadow-2xl">
            <Image
              alt="Modern villa with pool"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAT6NWLbKgtSFKjJKcejd6qFq1kjIQS2FlnTTr83TT76G6NvZqb31MLsG_WPq_GK-dDfhx3HumAm4a8iP34Mt6CZIXTxsN7GaAqZ6NVhz9Qx0octCHTZWMX81rx890dKRoP1ZM7X1GZtRBajj_jPlBLkJoWC3hXL_cxNBdzBK7KMgdYScrUg_iau3dGf6AeRsZc6q9SbvoSMp9RX2ok_zeiwTniXhanc5RQRAr6WE0hJAF3mCMGDnEU3ksldUEfqXxubbbF7Wo03ukV"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 75vw"
            />
          </div>
          {/* Overlapping Content Card */}
          <div className="bg-[#27292d] w-[90%] md:absolute top-1/2 md:-translate-y-1/2 left-0 z-10 shadow-2xl -mt-20 md:mt-0 mx-auto md:mx-0 md:w-[45%] md:translate-x-12 p-8 md:p-12 border-t-2 border-[#a68a68]">
            <span className="text-[#a68a68] text-xs font-bold tracking-[0.2em] uppercase block mb-4 font-montserrat">
              YUNGOLA | ACRINO
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-wide mb-6 font-oswald">
              Our Services
            </h2>
            <p className="text-sm text-gray-300 leading-relaxed font-medium mb-4 font-hanken">
              Yungola Build and Design merges structural precision with cinematic aesthetics to create residences and commercial spaces that transcend mere living environments.
            </p>
            <p className="text-sm text-gray-300 leading-relaxed font-medium mb-8 font-hanken">
              Every project is treated as a premium digital showroom — curated with generous whitespace, sleek borders, smooth hover animations, and absolute design authority.
            </p>
            <Link
              href="/gallery"
              className="inline-flex items-center bg-[#a68a68] hover:bg-opacity-90 text-white text-xs font-bold tracking-widest uppercase px-8 py-4 transition-colors shadow-lg"
            >
              Explore Projects
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
            </Link>
          </div>
        </div>

        {/* Services Grid (from HTML snippet) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {services.map((svc) => (
            <div
              key={svc.id}
              id={svc.id}
              className={`service-card ${
                svc.bgImage ? "relative overflow-hidden" : "bg-[#27292d]"
              } p-10 text-center flex flex-col items-center justify-center group shadow-xl border border-gray-800/40 hover:border-[#a68a68] transition-all duration-300`}
            >
              {svc.bgImage && (
                <div className="absolute inset-0 z-0">
                  <Image
                    alt={svc.title}
                    className="w-full h-full object-cover opacity-30 mix-blend-overlay group-hover:opacity-40 transition-opacity duration-300"
                    src={svc.bgImage}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-300"></div>
                </div>
              )}
              <div className="relative z-10 flex flex-col items-center">
                <div className="mb-6 w-14 h-14 flex items-center justify-center rounded-full bg-[#1d1f22]/80 border border-[#a68a68]/30 group-hover:border-[#a68a68] transition-colors duration-300">
                  {svc.icon}
                </div>
                <h3 className="text-xl font-bold uppercase tracking-wider mb-4 text-white group-hover:text-[#a68a68] transition-colors font-oswald">
                  {svc.title}
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed mb-6 font-hanken">
                  {svc.desc}
                </p>
                <Link
                  href={svc.link}
                  className="text-[#a68a68] text-xs font-bold tracking-widest uppercase inline-flex items-center hover:text-white transition-colors"
                >
                  Read More
                  <svg className="w-3 h-3 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Core Capabilities Section (Syncing Header dropdowns) */}
        <div className="mb-24 pt-12 border-t border-gray-800">
          <div className="text-center mb-16">
            <span className="text-[#a68a68] text-xs font-bold tracking-[0.2em] uppercase block mb-3 font-montserrat">
              End-to-End Execution
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-wide text-white font-oswald">
              Core Capabilities
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((cap) => (
              <div
                key={cap.id}
                id={cap.id}
                className="bg-[#27292d] p-8 border-l-4 border-[#a68a68] shadow-lg hover:translate-y-[-4px] transition-transform duration-300 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg font-bold uppercase tracking-wider text-white mb-3 font-oswald">
                    {cap.title}
                  </h3>
                  <p className="text-xs text-gray-300 leading-relaxed font-hanken">
                    {cap.desc}
                  </p>
                </div>
                <Link
                  href="/quote"
                  className="mt-6 inline-flex items-center text-xs font-bold tracking-widest uppercase text-[#a68a68] hover:text-white transition-colors"
                >
                  Request Service <span className="ml-2">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* END: Our Services Section */}

      {/* Interior Styles (from original Showroom) */}
      <section className="py-20 bg-[#161719] border-t border-gray-800/80" aria-labelledby="styles-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="text-xs text-[#a68a68] uppercase tracking-[0.2em] mb-3 font-montserrat">
            Virtual Experience
          </p>
          <h2 id="styles-heading" className="text-3xl lg:text-5xl font-bold uppercase tracking-wide text-white mb-14 font-oswald">
            Interior Styles Showroom
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {styles.map(({ id, title, desc, image, alt }) => (
              <div key={id} className="group relative overflow-hidden rounded-sm cursor-default shadow-2xl border border-gray-800">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={image}
                    alt={alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1d1f22] via-[#1d1f22]/30 to-transparent" />
                  <div className="absolute inset-0 border-2 border-[#a68a68] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-lg font-bold uppercase tracking-wider text-white mb-2 font-oswald">{title}</h3>
                    <p className="text-xs text-gray-300 leading-relaxed font-hanken">{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Material Samples (from original Showroom) */}
      <section className="py-20 bg-[#1d1f22] border-t border-gray-800/80" aria-labelledby="materials-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="text-xs text-[#a68a68] uppercase tracking-[0.2em] mb-3 font-montserrat">
            Finishes & Textures
          </p>
          <h2 id="materials-heading" className="text-3xl lg:text-5xl font-bold uppercase tracking-wide text-white mb-14 font-oswald">
            Material Samples
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6">
            {materials.map(({ name, color, hex }) => (
              <div key={name} className="group flex flex-col items-center gap-3 cursor-default bg-[#27292d] p-4 rounded-sm border border-gray-800 hover:border-[#a68a68] transition-all duration-300 shadow-lg">
                <div
                  className="w-full aspect-square rounded-sm border border-white/10 group-hover:border-[#a68a68] transition-colors duration-300 shadow-inner"
                  style={{ backgroundColor: hex }}
                  aria-label={`${name} color swatch`}
                />
                <span className="text-xs text-gray-300 text-center leading-tight group-hover:text-white transition-colors duration-200 font-hanken">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
