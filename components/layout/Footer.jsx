import Link from "next/link";
import { Globe, Share2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant w-full" role="contentinfo">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-section-gap grid grid-cols-1 md:grid-cols-4 gap-gutter">
        {/* Col 1: Brand details */}
        <div className="flex flex-col gap-4 md:col-span-1">
          <h2 className="font-headline-md text-headline-md text-primary-fixed font-bold tracking-tighter uppercase">
            YUNGOLA
          </h2>
          <p className="font-body-md text-on-surface-variant text-sm leading-relaxed">
            Cinematic Architectural Design. Building the exceptional, designing your future.
          </p>
        </div>

        {/* Col 2: Navigation */}
        <div className="flex flex-col gap-4">
          <h4 className="font-label-caps text-label-caps text-white">
            NAVIGATION
          </h4>
          <Link href="/" className="font-body-md text-on-surface-variant hover:text-primary-fixed transition-colors duration-200 text-sm">
            Home
          </Link>
          <Link href="/about" className="font-body-md text-on-surface-variant hover:text-primary-fixed transition-colors duration-200 text-sm">
            About Us
          </Link>
          <Link href="/showroom" className="font-body-md text-on-surface-variant hover:text-primary-fixed transition-colors duration-200 text-sm">
            Services
          </Link>
          <Link href="/gallery" className="font-body-md text-on-surface-variant hover:text-primary-fixed transition-colors duration-200 text-sm">
            Projects
          </Link>
        </div>

        {/* Col 3: Social & Connect */}
        <div className="flex flex-col gap-4">
          <h4 className="font-label-caps text-label-caps text-white">
            CONNECT
          </h4>
          <Link href="/contact" className="font-body-md text-on-surface-variant hover:text-primary-fixed transition-colors duration-200 text-sm">
            Contact
          </Link>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="font-body-md text-on-surface-variant hover:text-primary-fixed transition-colors duration-200 text-sm">
            Instagram
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="font-body-md text-on-surface-variant hover:text-primary-fixed transition-colors duration-200 text-sm">
            LinkedIn
          </a>
        </div>

        {/* Col 4: Contact details */}
        <div className="flex flex-col gap-4">
          <h4 className="font-label-caps text-label-caps text-white">
            CONTACT
          </h4>
          <a href="mailto:info@yungola.com" className="font-body-md text-on-surface-variant hover:text-primary-fixed transition-colors duration-200 text-sm">
            info@yungola.com
          </a>
          <a href="tel:+15551234567" className="font-body-md text-on-surface-variant hover:text-primary-fixed transition-colors duration-200 text-sm">
            +1 (555) 123-4567
          </a>
        </div>
      </div>

      {/* Footer base bar */}
      <div className="border-t border-outline-variant py-gutter px-margin-mobile md:px-margin-desktop text-center md:text-left flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto">
        <p className="font-label-caps text-[10px] text-on-surface-variant mb-4 md:mb-0">
          © {new Date().getFullYear()} YUNGOLA BUILD AND DESIGN. ALL RIGHTS RESERVED.
        </p>
        <div className="flex gap-4">
          <Globe size={18} className="text-on-surface-variant hover:text-primary-fixed cursor-pointer transition-all duration-300 hover:scale-125" />
          <Share2 size={18} className="text-on-surface-variant hover:text-primary-fixed cursor-pointer transition-all duration-300 hover:scale-125" />
        </div>
      </div>
    </footer>
  );
}
