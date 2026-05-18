import Image from "next/image";
import Link from "next/link";

const services = [
  {
    id: "architecture",
    title: "Architectural Design",
    desc: "Transforming ambitious visions into structural masterpieces. We specialize in cinematic residential and commercial architecture with uncompromising geometric precision.",
    icon: (
      <svg className="w-10 h-10 text-accent service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-5h6v5M12 11h.01" strokeLinecap="round" strokeLinejoin="round"></path></svg>
    ),
    link: "/gallery#architecture"
  },
  {
    id: "interior",
    title: "Interior Design",
    desc: "Curating immersive digital-showroom aesthetics for living and working spaces. Every texture, lighting angle, and negative space is meticulously planned.",
    icon: (
      <svg className="w-10 h-10 text-accent service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 19h16M4 15l2-6h12l2 6v4H4v-4zM8 9V5a2 2 0 012-2h4a2 2 0 012 2v4" strokeLinecap="round" strokeLinejoin="round"></path></svg>
    ),
    link: "/gallery#interior"
  },
  {
    id: "exterior",
    title: "Exterior Design",
    desc: "Sculpting striking building facades, secluded balconies, and seamless indoor-outdoor transitions that command absolute design authority at first glance.",
    icon: (
      <svg className="w-10 h-10 text-accent service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 21l2-7h10l2 7M3 10h18M7 3l5 4 5-4M12 14v7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
    ),
    bgImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDcB3-LyfoCIyWswo5TiXoS1LgF6rNmj49SrjkFvqb9OopvB1SmMHSGUkkYQn5mMjEY90sHWeEMZ_tZqNTr2UEGLktoUdDH1bU6tAlhx6KloMMnv6guO_wN1Rabkdds3AeNnDtk-jnRPBk-QBO5LSw8G78rNpyYVoal6ZNn5hDwuZV1dohsYiaZAUdXtY-JdJ9Duk-s-q7_dTZk8TuQzeO_PA4rObpWnfM12oE0hTd2ylNX84KbCakAYWJ5N_ehijGGxHTlkN9Qjfes", link: "/gallery#exterior"
  },
  {
    id: "furniture",
    title: "Furniture Design",
    desc: "Bespoke furniture pieces designed and crafted specifically for your architectural layout, ensuring complete harmony between form, comfort, and premium materials.",
    icon: (
      <svg className="w-10 h-10 text-accent service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 18v3M20 18v3M5 8h14v10H5zM8 5h8v3H8z" strokeLinecap="round" strokeLinejoin="round"></path></svg>
    ), link: "/gallery#furniture"
  },
  {
    id: "decor",
    title: "Decor Plan",
    desc: "Comprehensive styling curation including custom art selection, sophisticated lighting fixtures, and accent materials that bring warmth and character to your home.",
    icon: (
      <svg className="w-10 h-10 text-accent service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" strokeLinecap="round" strokeLinejoin="round"></path></svg>
    ), link: "/gallery#decor"
  },
  {
    id: "modelling",
    title: "3D Modelling",
    desc: "Hyper-realistic photorealistic architectural visualizations and immersive walkthroughs, allowing you to explore and perfect your space before construction begins.",
    icon: (
      <svg className="w-10 h-10 text-accent service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16zM12 22V12M12 12L3 7M12 12l9-5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
    ), link: "/gallery#modelling"
  }
];

export default function ServicesGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
      {services.map((svc) => (
        <div
          key={svc.id}
          id={svc.id}
          className={`service-card ${
            svc.bgImage ? "relative overflow-hidden" : "bg-surface-container"
          } p-10 text-center flex flex-col items-center justify-center group shadow-xl border border-outline-variant/40 hover:border-accent transition-all duration-300 rounded-sm`}
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
              <div className="absolute inset-0 bg-darkBackground/60 group-hover:bg-darkBackground/50 transition-colors duration-300"></div>
            </div>
          )}
          <div className="relative z-10 flex flex-col items-center">
            <div className="mb-6 w-14 h-14 flex items-center justify-center rounded-full bg-darkBackground/80 border border-accent/30 group-hover:border-accent transition-colors duration-300">
              {svc.icon}
            </div>
            <h3 className="text-xl font-bold uppercase tracking-wider mb-4 text-darkForeground group-hover:text-accent transition-colors font-oswald">
              {svc.title}
            </h3>
            <p className="text-xs text-darkSecondaryForeground leading-relaxed mb-6 font-hanken">
              {svc.desc}
            </p>
            <Link
              href={svc.link}
              className="text-accent text-xs font-bold tracking-widest uppercase inline-flex items-center hover:text-darkForeground transition-colors"
            >
              Read More
              <svg className="w-3 h-3 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
