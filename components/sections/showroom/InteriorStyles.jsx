import Image from "next/image";
import Link from "next/link";

const styles = [
  {
    name: "Architectural Noir",
    desc: "Dark velvets, matte charcoal finishes, striking yellow gold accents, and dramatic lighting. For those who command absolute authority.",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80",
  },
  {
    name: "Brutalist Warmth",
    desc: "Exposed concrete and striking structural lines softened by rich walnut, warm amber lighting, and organic linen textures.",
    image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=800&q=80",
  },
  {
    name: "Minimalist Luxe",
    desc: "Expansive negative space, monolithic marble islands, concealed storage, and floor-to-ceiling glass allowing nature to serve as art.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
  },
];

export default function InteriorStyles() {
  return (
    <section className="py-24 bg-surface-container-lowest border-y border-outline-variant" aria-labelledby="styles-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase block mb-3 font-montserrat">
            Virtual Showroom
          </span>
          <h2 id="styles-heading" className="text-3xl md:text-5xl font-bold uppercase tracking-wide text-darkForeground font-oswald">
            Signature Interior Styles
          </h2>
          <p className="text-sm md:text-base text-on-surface-variant max-w-2xl mx-auto mt-4 font-hanken">
            Explore our curated design languages. Each style represents a distinct philosophy of living, engineered for maximum aesthetic impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {styles.map((style) => (
            <div
              key={style.name}
              className="group cursor-pointer relative rounded-sm overflow-hidden border border-outline-variant/30 shadow-2xl"
            >
              <div className="relative h-[400px] w-full">
                <Image
                  src={style.image}
                  alt={style.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-darkBackground via-darkBackground/40 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-300" />
              </div>
              <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-2xl font-bold text-darkForeground uppercase tracking-wide mb-2 font-oswald group-hover:text-accent transition-colors">
                  {style.name}
                </h3>
                <p className="text-xs text-on-surface-variant leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 font-hanken">
                  {style.desc}
                </p>
                <div className="mt-4 pt-4 border-t border-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                  <span className="text-[10px] uppercase tracking-widest text-accent font-bold font-montserrat flex items-center">
                    View Gallery <span className="ml-2">→</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center text-xs font-bold tracking-widest uppercase bg-transparent border border-accent text-accent hover:bg-accent hover:text-on-primary px-8 py-4 transition-all duration-300 rounded-sm font-montserrat"
          >
            Book a Showroom Visit
          </Link>
        </div>
      </div>
    </section>
  );
}
