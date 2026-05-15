import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/gallery", label: "Gallery" },
  { href: "/showroom", label: "Showroom" },
  { href: "/quote", label: "Get a Quote" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

// const socials = [
//   { href: "https://instagram.com", Icon: Instagram, label: "Instagram" },
//   { href: "https://facebook.com", Icon: Facebook, label: "Facebook" },
//   { href: "https://linkedin.com", Icon: Linkedin, label: "LinkedIn" },
// ];

export default function Footer() {
  return (
    <footer className="bg-[#0D0D0D] text-white" role="contentinfo">
      {/* Yellow accent line */}
      <div className="h-[3px] bg-[#F5C518] w-full" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {/* Col 1: Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-6" aria-label="Home">
              <div className="flex items-center justify-center w-12 h-12 bg-[#F5C518] rounded-sm flex-shrink-0">
                <svg width="24" height="24" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                  <polygon points="11,2 20,18 2,18" fill="#0D0D0D" />
                </svg>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-base font-700 text-white uppercase tracking-wide" style={{ fontFamily: "var(--font-cinzel)" }}>
                  Yungola
                </span>
                <span className="text-[10px] text-[#F5C518] uppercase tracking-[0.18em]" style={{ fontFamily: "var(--font-montserrat)" }}>
                  Build &amp; Design
                </span>
              </div>
            </Link>
            <p className="text-[#6B7280] text-sm leading-relaxed max-w-xs" style={{ fontFamily: "var(--font-josefin)" }}>
              Transforming ideas into built realities — from concept drawings to completed homes and commercial spaces across Nigeria.
            </p>
            {/* <div className="flex items-center gap-4 mt-6">
              {socials.map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-sm border border-white/10 flex items-center justify-center text-[#6B7280] hover:border-[#F5C518] hover:text-[#F5C518] transition-colors duration-200 cursor-pointer"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div> */}
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3
              className="text-xs uppercase tracking-[0.2em] text-[#F5C518] mb-6 font-600"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-[#6B7280] hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                    style={{ fontFamily: "var(--font-josefin)" }}
                  >
                    <span className="w-3 h-[1px] bg-[#F5C518] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div>
            <h3
              className="text-xs uppercase tracking-[0.2em] text-[#F5C518] mb-6 font-600"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#F5C518] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-[#6B7280] leading-relaxed" style={{ fontFamily: "var(--font-josefin)" }}>
                  Lagos, Nigeria
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-[#F5C518] flex-shrink-0" />
                <a
                  href="tel:+2348000000000"
                  className="text-sm text-[#6B7280] hover:text-white transition-colors duration-200"
                  style={{ fontFamily: "var(--font-josefin)" }}
                >
                  +234 800 000 0000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-[#F5C518] flex-shrink-0" />
                <a
                  href="mailto:hello@yungolabuildanddesign.com"
                  className="text-sm text-[#6B7280] hover:text-white transition-colors duration-200"
                  style={{ fontFamily: "var(--font-josefin)" }}
                >
                  hello@yungolabuildanddesign.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#6B7280]" style={{ fontFamily: "var(--font-josefin)" }}>
            © {new Date().getFullYear()} Yungola Build and Design. All rights reserved.
          </p>
          <a
            href="https://www.yungolabuildanddesign.com"
            className="text-xs text-[#F5C518] hover:text-[#E0A800] transition-colors duration-200"
            style={{ fontFamily: "var(--font-josefin)" }}
          >
            www.yungolabuildanddesign.com
          </a>
        </div>
      </div>
    </footer>
  );
}
