import React from "react";
import { Shield, Clock, Star, Award, Users, Zap } from "lucide-react";
import { aboutContent } from "@/lib/data/siteContent";

const iconMap = {
  Shield: Shield,
  Clock: Clock,
  Star: Star,
  Award: Award,
  Users: Users,
  Zap: Zap,
};

export default function WhyChooseUs() {
  const { edge } = aboutContent;

  return (
    <section className="py-24 bg-surface-container-lowest border-t border-outline-variant" aria-labelledby="why-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-xs text-darkSecondaryForeground uppercase tracking-[0.2em] mb-3 font-montserrat font-bold">
            {edge.badge}
          </p>
          <h2 id="why-heading" className="text-3xl md:text-5xl font-bold uppercase text-darkForeground mb-6 font-montserrat tracking-wide">
            {edge.title}
          </h2>
          <p className="text-sm md:text-base text-on-surface-variant font-hanken leading-relaxed">
            {edge.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {edge.reasons.map(({ icon, title, desc }) => {
            const Icon = iconMap[icon] || Shield;
            return (
              <div
                key={title}
                className="bg-surface-container p-8 rounded-sm border border-outline-variant hover:border-accent hover:translate-y-[-5px] transition-all duration-300 shadow-xl group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-[2px] bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <div className="w-14 h-14 bg-surface-container-lowest rounded-full flex items-center justify-center mb-6 border border-outline/30 group-hover:border-accent transition-colors duration-300 shadow-inner">
                  <Icon size={24} className="text-accent group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold uppercase text-darkForeground mb-3 font-montserrat tracking-wider group-hover:text-accent transition-colors">
                  {title}
                </h3>
                <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed font-hanken">
                  {desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
