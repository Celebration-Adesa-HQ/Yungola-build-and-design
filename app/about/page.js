import Image from "next/image";
import { Shield, Clock, Star, Award, Users, Zap } from "lucide-react";

export const metadata = {
  title: "About Us",
  description: "Learn about Yungola Build and Design — our story, team, and mission to deliver premium architecture and construction across Nigeria.",
};

const team = [
  { name: "Yungola Adeyemi", role: "Principal Architect", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80", alt: "Principal Architect headshot" },
  { name: "Amaka Obi", role: "Lead Interior Designer", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80", alt: "Lead Interior Designer headshot" },
  { name: "Emeka Nwosu", role: "Project Manager", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80", alt: "Project Manager headshot" },
];

const reasons = [
  { Icon: Shield, title: "Certified Architects", desc: "NIA-certified professionals with global design training and local expertise." },
  { Icon: Clock, title: "On-Time Delivery", desc: "We respect your timeline. Projects delivered on schedule, every time." },
  { Icon: Star, title: "Premium Materials", desc: "Only the finest materials from vetted suppliers. No shortcuts, ever." },
  { Icon: Award, title: "Award-Winning Designs", desc: "Recognized for architectural excellence across West Africa." },
  { Icon: Users, title: "Client-Centered", desc: "Your vision drives every decision. We listen before we design." },
  { Icon: Zap, title: "Fast Project Start", desc: "We mobilize quickly. No waiting months to see your project begin." },
];

const milestones = [
  { year: "2014", title: "Company Founded", desc: "Yungola Build and Design established in Lagos, Nigeria." },
  { year: "2016", title: "First Major Project", desc: "Completed the Belgravia Estate development in Lekki." },
  { year: "2018", title: "NIA Certification", desc: "Received full certification from the Nigerian Institute of Architects." },
  { year: "2020", title: "Commercial Expansion", desc: "Expanded into large-scale commercial and mixed-use developments." },
  { year: "2023", title: "50+ Projects", desc: "Celebrated milestone of over 50 completed projects nationwide." },
  { year: "2024", title: "Digital Showroom", desc: "Launched virtual design experience and online consultation services." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[65vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=80')` }} role="img" aria-label="Company building exterior" />
        <div className="absolute inset-0 bg-[#0D0D0D]/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-20">
          <p className="text-xs text-[#F5C518] uppercase tracking-[0.25em] mb-4" style={{ fontFamily: "var(--font-montserrat)" }}>Our Story</p>
          <h1 className="text-5xl lg:text-8xl font-900 text-white max-w-3xl" style={{ fontFamily: "var(--font-montserrat)", fontWeight: 900 }}>About Yungola</h1>
          <p className="text-lg text-white/60 mt-6 max-w-2xl leading-relaxed" style={{ fontFamily: "var(--font-josefin)", fontWeight: 300 }}>
            For over a decade, we have been transforming spaces and lives across Nigeria with bold architectural vision and meticulous craftsmanship.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-pad bg-[#F9F9F7] relative overflow-hidden">
        <div className="absolute inset-0 editorial-glow opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <p className="text-xs text-[#F5C518] uppercase tracking-[0.2em] mb-3" style={{ fontFamily: "var(--font-montserrat)" }}>Our Foundation</p>
            <h2 className="text-4xl lg:text-6xl font-800 text-[#0D0D0D] mb-8 yellow-underline" style={{ fontFamily: "var(--font-montserrat)", fontWeight: 800 }}>Mission & Vision</h2>
            <div className="space-y-6">
              <div className="border-l-2 border-[#F5C518] pl-6">
                <h3 className="text-sm font-700 text-[#0D0D0D] uppercase tracking-[0.15em] mb-2" style={{ fontFamily: "var(--font-montserrat)" }}>Our Mission</h3>
                <p className="text-[#2C2C2C] leading-relaxed" style={{ fontFamily: "var(--font-josefin)" }}>To design and build exceptional spaces that reflect our clients' highest aspirations — combining architectural precision, premium materials, and uncompromising quality at every stage of construction.</p>
              </div>
              <div className="border-l-2 border-[#F5C518] pl-6">
                <h3 className="text-sm font-700 text-[#0D0D0D] uppercase tracking-[0.15em] mb-2" style={{ fontFamily: "var(--font-montserrat)" }}>Our Vision</h3>
                <p className="text-[#2C2C2C] leading-relaxed" style={{ fontFamily: "var(--font-josefin)" }}>To be Africa's most trusted premium design-build company — known for transforming the built landscape of Nigeria with bold, sustainable, and human-centered architecture.</p>
              </div>
            </div>
          </div>
          <div className="relative h-[480px] rounded-sm overflow-hidden">
            <Image src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80" alt="Yungola Build and Design team at work" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            <div className="absolute inset-0 border-2 border-[#F5C518]/20" />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-pad bg-[#0D0D0D] relative overflow-hidden" aria-labelledby="why-heading">
        <div className="absolute inset-0 editorial-glow opacity-50 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <p className="text-xs text-[#F5C518] uppercase tracking-[0.2em] mb-3" style={{ fontFamily: "var(--font-montserrat)" }}>Our Edge</p>
          <h2 id="why-heading" className="text-4xl lg:text-6xl font-800 text-white mb-14" style={{ fontFamily: "var(--font-montserrat)", fontWeight: 800 }}>Why Choose Us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map(({ Icon, title, desc }) => (
              <div key={title} className="group p-6 border border-white/8 rounded-sm hover:border-[#F5C518]/40 transition-colors duration-300 relative">
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#F5C518] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-l-sm" />
                <div className="w-10 h-10 bg-[#F5C518]/10 rounded-sm flex items-center justify-center mb-4 group-hover:bg-[#F5C518] transition-colors duration-300">
                  <Icon size={18} className="text-[#F5C518] group-hover:text-[#0D0D0D] transition-colors duration-300" aria-hidden="true" />
                </div>
                <h3 className="text-base font-700 text-white mb-2" style={{ fontFamily: "var(--font-montserrat)", fontWeight: 700 }}>{title}</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed" style={{ fontFamily: "var(--font-josefin)" }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-pad bg-[#F9F9F7]" aria-labelledby="team-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="text-xs text-[#F5C518] uppercase tracking-[0.2em] mb-3" style={{ fontFamily: "var(--font-montserrat)" }}>The People</p>
          <h2 id="team-heading" className="text-4xl lg:text-6xl font-800 text-[#0D0D0D] mb-14 yellow-underline" style={{ fontFamily: "var(--font-montserrat)", fontWeight: 800 }}>Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {team.map(({ name, role, image, alt }) => (
              <div key={name} className="group text-center">
                <div className="relative w-48 h-48 mx-auto rounded-sm overflow-hidden mb-5">
                  <Image src={image} alt={alt} fill sizes="192px" className="object-cover transition-transform duration-500 group-hover:scale-[1.05]" />
                  <div className="absolute inset-0 border-2 border-[#F5C518] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-lg font-700 text-[#0D0D0D]" style={{ fontFamily: "var(--font-montserrat)", fontWeight: 700 }}>{name}</h3>
                <p className="text-xs text-[#F5C518] uppercase tracking-[0.15em] mt-1" style={{ fontFamily: "var(--font-montserrat)" }}>{role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-pad bg-[#1A1A1A]" aria-labelledby="timeline-heading">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <p className="text-xs text-[#F5C518] uppercase tracking-[0.2em] mb-3" style={{ fontFamily: "var(--font-montserrat)" }}>Our Journey</p>
          <h2 id="timeline-heading" className="text-4xl lg:text-5xl font-800 text-white mb-14" style={{ fontFamily: "var(--font-montserrat)", fontWeight: 800 }}>Milestones</h2>
          <div className="relative">
            <div className="absolute left-16 top-0 bottom-0 w-[2px] bg-[#F5C518]/20" aria-hidden="true" />
            <div className="space-y-10">
              {milestones.map(({ year, title, desc }) => (
                <div key={year} className="flex items-start gap-6">
                  <div className="w-16 flex-shrink-0 text-right">
                    <span className="text-[#F5C518] text-sm font-700" style={{ fontFamily: "var(--font-montserrat)", fontWeight: 700 }}>{year}</span>
                  </div>
                  <div className="relative flex-shrink-0 mt-1">
                    <div className="w-3 h-3 rounded-full bg-[#F5C518]" />
                  </div>
                  <div className="pb-2">
                    <h3 className="text-base font-700 text-white mb-1" style={{ fontFamily: "var(--font-montserrat)", fontWeight: 700 }}>{title}</h3>
                    <p className="text-sm text-[#6B7280]" style={{ fontFamily: "var(--font-josefin)" }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
