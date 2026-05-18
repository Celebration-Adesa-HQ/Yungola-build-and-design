import { MapPin, Phone, Mail, Clock, MessageSquare } from "lucide-react";
import { contactContent } from "@/lib/data/siteContent";

const icons = [MapPin, Phone, Mail, Clock];

export default function StudioDirectory() {
  const { directory } = contactContent;

  return (
    <div className="lg:col-span-5 space-y-12">
      <div>
        <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase block mb-3 font-montserrat">
          {directory.badge}
        </span>
        <h2 className="text-3xl font-bold uppercase text-darkForeground mb-8 font-montserrat tracking-wide border-b border-outline-variant pb-4">
          {directory.title}
        </h2>

        <div className="space-y-8">
          {directory.list.map(({ label, value, href }, index) => {
            const Icon = icons[index] || MapPin;
            return (
              <div key={label} className="flex items-start gap-5 group">
                <div className="w-12 h-12 bg-surface-container rounded-sm flex items-center justify-center flex-shrink-0 border border-outline-variant group-hover:border-accent transition-colors shadow-lg">
                  <Icon size={20} className="text-accent group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-[11px] text-accent uppercase tracking-[0.15em] mb-1 font-montserrat font-bold">
                    {label}
                  </p>
                  {href ? (
                    <a href={href} className="text-sm md:text-base text-darkForeground hover:text-accent transition-colors font-hanken font-semibold block">
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm md:text-base text-darkSecondaryForeground font-hanken leading-relaxed">
                      {value}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Google Map Embed */}
      <div className="relative h-72 rounded-sm overflow-hidden bg-surface-container border border-outline-variant shadow-2xl group">
        <iframe
          title="Yungola Build and Design Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253682.63739698!2d3.1585992!3d6.548055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1"
          width="100%"
          height="100%"
          style={{ border: 0, filter: "grayscale(90%) contrast(1.2)" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="transition-all duration-500 group-hover:filter-none"
        />
        <div className="absolute bottom-3 left-3 bg-darkBackground/90 backdrop-blur-sm px-3 py-1.5 rounded-sm border border-outline-variant pointer-events-none z-10">
          <span className="text-[10px] text-accent uppercase tracking-widest font-montserrat font-bold block">
            Lagos Studio
          </span>
        </div>
      </div>

      {/* Direct Social Triggers */}
      <div className="space-y-4 pt-4 border-t border-outline-variant">
        <span className="text-accent text-[11px] font-bold tracking-[0.2em] uppercase block mb-3 font-montserrat">
          Instant Communication
        </span>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="https://wa.me/2348000000000"
            target="_blank"
            rel="noopener noreferrer"
            id="contact-whatsapp-btn"
            className="flex-1 flex items-center justify-center gap-3 py-4 bg-[#25D366] text-[#1f2226] text-xs font-bold uppercase tracking-[0.15em] rounded-sm hover:bg-[#20bc5a] transition-all duration-300 shadow-lg cursor-pointer font-montserrat hover:translate-y-[-2px]"
          >
            <MessageSquare size={18} /> {directory.whatsappLabel}
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            id="contact-instagram-btn"
            className="flex-1 flex items-center justify-center gap-3 py-4 bg-surface-container border border-outline-variant text-darkForeground text-xs font-bold uppercase tracking-[0.15em] rounded-sm hover:border-accent hover:text-accent transition-all duration-300 shadow-lg cursor-pointer font-montserrat hover:translate-y-[-2px]"
          >
            {directory.instagramLabel}
          </a>
        </div>
      </div>
    </div>
  );
}
