import React from "react";
import Image from "next/image";

const team = [
  {
    name: "Yungola Adeyemi",
    role: "Principal Architect & Founder",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80",
    alt: "Yungola Adeyemi - Principal Architect",
    bio: "NIA-certified visionary with over 15 years of experience designing luxury residential and commercial monoliths across West Africa.",
  },
  {
    name: "Amaka Obi",
    role: "Lead Interior Designer",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80",
    alt: "Amaka Obi - Lead Interior Designer",
    bio: "Curator of immersive digital-showroom aesthetics, specializing in bespoke furniture harmony, lighting angles, and premium material finishes.",
  },
  {
    name: "Emeka Nwosu",
    role: "Head of Master Construction",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
    alt: "Emeka Nwosu - Head of Construction",
    bio: "Expert structural engineer overseeing elite on-site craftsmanship, rigorous safety protocols, and uncompromising engineering precision.",
  },
];

export default function LeadershipTeam() {
  return (
    <section className="py-24 bg-darkBackground border-t border-outline-variant" aria-labelledby="team-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-xs text-darkSecondaryForeground uppercase tracking-[0.2em] mb-3 font-montserrat font-bold">
            The People
          </p>
          <h2 id="team-heading" className="text-3xl md:text-5xl font-bold uppercase text-darkForeground mb-6 font-oswald tracking-wide">
            Our Leadership Team
          </h2>
          <p className="text-sm md:text-base text-on-surface-variant font-hanken leading-relaxed">
            Meet the principal architects, interior designers, and master engineers driving Yungola's uncompromising commitment to architectural excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {team.map(({ name, role, image, alt, bio }) => (
            <div
              key={name}
              className="bg-surface-container rounded-sm overflow-hidden border border-outline-variant hover:border-outline transition-all duration-300 shadow-2xl group flex flex-col"
            >
              <div className="relative w-full aspect-[4/5] overflow-hidden bg-surface-container-lowest">
                <Image
                  src={image}
                  alt={alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4 z-10 text-center">
                  <span className="inline-block px-3 py-1 bg-accent text-on-primary text-[10px] font-bold uppercase tracking-widest rounded-full font-montserrat shadow-lg">
                    Leadership
                  </span>
                </div>
              </div>

              <div className="p-8 text-center flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold uppercase text-darkForeground mb-1 font-oswald tracking-wide group-hover:text-darkSecondaryForeground transition-colors">
                    {name}
                  </h3>
                  <p className="text-xs text-accent uppercase tracking-[0.15em] mb-4 font-montserrat font-semibold">
                    {role}
                  </p>
                  <p className="text-xs text-on-surface-variant leading-relaxed font-hanken">
                    {bio}
                  </p>
                </div>
                <div className="mt-6 pt-6 border-t border-outline-variant/30">
                  <span className="text-[11px] text-darkSecondaryForeground uppercase tracking-widest font-montserrat font-bold hover:text-darkForeground transition-colors cursor-pointer inline-flex items-center">
                    Connect on LinkedIn <span className="ml-2 text-base leading-none">→</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
