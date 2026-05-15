import Image from "next/image";
import Link from "next/link";
import { Calendar, Phone } from "lucide-react";

export const metadata = {
  title: "Showroom",
  description: "Explore our virtual design showroom — interior styles, materials, finishes and 3D previews.",
};

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
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&q=80')`,
          }}
          role="img"
          aria-label="Luxury showroom interior"
        />
        <div className="absolute inset-0 bg-[#0D0D0D]/75" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-20">
          <p className="text-xs text-[#F5C518] uppercase tracking-[0.25em] mb-4" style={{ fontFamily: "var(--font-montserrat)" }}>
            Virtual Experience
          </p>
          <h1 className="text-5xl lg:text-8xl font-900 text-white" style={{ fontFamily: "var(--font-cinzel)", fontWeight: 900 }}>
            Design Showroom
          </h1>
          <p className="text-lg text-white/60 mt-4 max-w-xl" style={{ fontFamily: "var(--font-josefin)", fontWeight: 300 }}>
            Explore design styles, material samples, and finished spaces that inspire your dream build.
          </p>
        </div>
      </section>

      {/* Interior Styles */}
      <section className="section-pad bg-[#F9F9F7]" aria-labelledby="styles-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="text-xs text-[#F5C518] uppercase tracking-[0.2em] mb-3" style={{ fontFamily: "var(--font-montserrat)" }}>
            Aesthetic Directions
          </p>
          <h2 id="styles-heading" className="text-4xl lg:text-6xl font-700 text-[#0D0D0D] mb-14 yellow-underline" style={{ fontFamily: "var(--font-cinzel)" }}>
            Interior Styles
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {styles.map(({ id, title, desc, image, alt }) => (
              <div key={id} className="group relative overflow-hidden rounded-sm cursor-default">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={image}
                    alt={alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-600 group-hover:scale-[1.07]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/90 via-[#0D0D0D]/20 to-transparent" />
                  <div className="absolute inset-0 border-2 border-[#F5C518] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="text-base font-600 text-white mb-1" style={{ fontFamily: "var(--font-cinzel)" }}>{title}</h3>
                    <p className="text-xs text-white/60 leading-relaxed" style={{ fontFamily: "var(--font-josefin)" }}>{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Material Samples */}
      <section className="section-pad bg-[#0D0D0D]" aria-labelledby="materials-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="text-xs text-[#F5C518] uppercase tracking-[0.2em] mb-3" style={{ fontFamily: "var(--font-montserrat)" }}>
            Finishes & Textures
          </p>
          <h2 id="materials-heading" className="text-4xl lg:text-6xl font-700 text-white mb-14" style={{ fontFamily: "var(--font-cinzel)" }}>
            Material Samples
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {materials.map(({ name, color, hex }) => (
              <div key={name} className="group flex flex-col items-center gap-3 cursor-default">
                <div
                  className="w-full aspect-square rounded-sm border border-white/10 group-hover:border-[#F5C518] transition-colors duration-300 shadow-lg"
                  style={{ backgroundColor: hex }}
                  aria-label={`${name} color swatch`}
                />
                <span className="text-xs text-[#6B7280] text-center leading-tight group-hover:text-white transition-colors duration-200" style={{ fontFamily: "var(--font-josefin)" }}>
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Book a Visit */}
      <section className="section-pad bg-[#F9F9F7]" aria-labelledby="book-heading">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs text-[#F5C518] uppercase tracking-[0.2em] mb-3" style={{ fontFamily: "var(--font-montserrat)" }}>
            Come See Us
          </p>
          <h2 id="book-heading" className="text-4xl lg:text-5xl font-700 text-[#0D0D0D] mb-6" style={{ fontFamily: "var(--font-cinzel)" }}>
            Book a Showroom Visit
          </h2>
          <p className="text-[#6B7280] mb-10 max-w-xl mx-auto" style={{ fontFamily: "var(--font-josefin)" }}>
            Experience our designs in person. Walk through completed room setups, touch real materials, and meet our design consultants.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+2348000000000"
              id="showroom-call-btn"
              className="flex items-center gap-2 px-8 py-4 bg-[#F5C518] text-[#0D0D0D] text-sm font-700 uppercase tracking-[0.1em] rounded-sm hover:bg-[#E0A800] transition-colors duration-200 cursor-pointer"
              style={{ fontFamily: "var(--font-montserrat)", fontWeight: 700 }}
            >
              <Phone size={16} />
              Call to Schedule
            </a>
            <Link
              href="/quote"
              id="showroom-quote-link"
              className="flex items-center gap-2 px-8 py-4 border border-[#0D0D0D]/30 text-[#0D0D0D] text-sm uppercase tracking-[0.1em] rounded-sm hover:border-[#0D0D0D] transition-colors duration-200 cursor-pointer"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              <Calendar size={16} />
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
