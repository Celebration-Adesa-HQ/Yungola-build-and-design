import React from "react";
import { Shield, Clock, Star, Award, Users, Zap } from "lucide-react";

const reasons = [
  {
    Icon: Shield,
    title: "NIA Certified Authority",
    desc: "Fully accredited professionals with global architectural design training and deep local execution expertise in Nigeria.",
  },
  {
    Icon: Clock,
    title: "Uncompromising Punctuality",
    desc: "We respect your capital and timeline. Every milestone is transparently tracked and delivered on schedule, every time.",
  },
  {
    Icon: Star,
    title: "Elite Material Curation",
    desc: "Sourcing only the finest marble, dark oak, and bespoke brass from vetted global artisans. We never compromise on quality.",
  },
  {
    Icon: Award,
    title: "Cinematic Aesthetics",
    desc: "Our designs transcend engineering blueprints to feel like premium digital showrooms with bold negative space and striking facades.",
  },
  {
    Icon: Users,
    title: "Client-Centered Blueprinting",
    desc: "Your lifestyle and investment goals drive every spatial decision. We listen intently before drafting the first concept.",
  },
  {
    Icon: Zap,
    title: "Rapid Mobilization",
    desc: "Seamless transition from 3D photorealistic walkthroughs to immediate site preparation and master construction.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-surface-container-lowest border-t border-outline-variant" aria-labelledby="why-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-xs text-darkSecondaryForeground uppercase tracking-[0.2em] mb-3 font-montserrat font-bold">
            Our Edge
          </p>
          <h2 id="why-heading" className="text-3xl md:text-5xl font-bold uppercase text-darkForeground mb-6 font-oswald tracking-wide">
            Why Choose Us
          </h2>
          <p className="text-sm md:text-base text-on-surface-variant font-hanken leading-relaxed">
            We stand at the intersection of elite engineering and editorial design authority. Here is why luxury homeowners and commercial developers trust Yungola.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map(({ Icon, title, desc }) => (
            <div
              key={title}
              className="bg-surface-container p-8 rounded-sm border border-outline-variant hover:border-accent hover:translate-y-[-5px] transition-all duration-300 shadow-xl group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-[2px] bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              <div className="w-14 h-14 bg-surface-container-lowest rounded-full flex items-center justify-center mb-6 border border-outline/30 group-hover:border-accent transition-colors duration-300 shadow-inner">
                <Icon size={24} className="text-accent group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold uppercase text-darkForeground mb-3 font-oswald tracking-wider group-hover:text-accent transition-colors">
                {title}
              </h3>
              <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed font-hanken">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
