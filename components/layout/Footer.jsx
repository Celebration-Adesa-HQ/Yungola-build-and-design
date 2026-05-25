import Link from "next/link";
import { Globe, Share2 } from "lucide-react";
import { navigation } from "@/lib/data/siteContent";
import Image from "next/image";

export default function Footer() {
  const { footer } = navigation;

  return (
    <footer
      className="bg-surface-container-lowest border-t border-outline-variant w-full"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="flex flex-col gap-4 md:col-span-1">
          <Link
            href="/"
            className="group flex items-center gap-3 select-none"
            aria-label="YUNGOLA - Home"
          >
            <Image
              src="/logo.png"
              alt="YUNGOLA Architecture & Design Logo"
              width={48}
              height={48}
              priority
              className="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-105 md:h-12 md:w-12"
            />

            <div className="flex flex-col leading-tight">
              <h2 className="font-montserrat text-xl font-bold uppercase tracking-[0.25em] text-accent transition-colors duration-300 group-hover:text-accent md:text-2xl">
                YUNGOLA
              </h2>

              <span className="font-hanken text-[10px] uppercase tracking-[0.3em] text-on-surface-variant">
                Build and Design
              </span>
            </div>
          </Link>

          <p className="max-w-sm font-hanken text-sm leading-relaxed text-on-surface-variant">
            {footer.aboutText}
          </p>
        </div>

        {/* Col 2: Navigation */}
        <div className="flex flex-col gap-4">
          <h4 className="font-montserrat text-xs tracking-[0.2em] uppercase text-darkForeground font-bold">
            NAVIGATION
          </h4>
          <Link
            href="/"
            className="font-hanken text-on-surface-variant hover:text-accent transition-colors duration-200 text-sm"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="font-hanken text-on-surface-variant hover:text-accent transition-colors duration-200 text-sm"
          >
            About Us
          </Link>
          <Link
            href="/services"
            className="font-hanken text-on-surface-variant hover:text-accent transition-colors duration-200 text-sm"
          >
            Services
          </Link>
          <Link
            href="/gallery"
            className="font-hanken text-on-surface-variant hover:text-accent transition-colors duration-200 text-sm"
          >
            Projects
          </Link>
        </div>

        {/* Col 3: Social & Connect */}
        <div className="flex flex-col gap-4">
          <h4 className="font-montserrat text-xs tracking-[0.2em] uppercase text-darkForeground font-bold">
            CONNECT
          </h4>
          <Link
            href="/contact"
            className="font-hanken text-on-surface-variant hover:text-accent transition-colors duration-200 text-sm"
          >
            Contact
          </Link>
          <a
            href={footer.instagramHref}
            target="_blank"
            rel="noopener noreferrer"
            className="font-hanken text-on-surface-variant hover:text-accent transition-colors duration-200 text-sm"
          >
            Instagram
          </a>
          <a
            href={footer.linkedinHref}
            target="_blank"
            rel="noopener noreferrer"
            className="font-hanken text-on-surface-variant hover:text-accent transition-colors duration-200 text-sm"
          >
            LinkedIn
          </a>
        </div>

        {/* Col 4: Contact details */}
        <div className="flex flex-col gap-4">
          <h4 className="font-montserrat text-xs tracking-[0.2em] uppercase text-darkForeground font-bold">
            CONTACT
          </h4>
          <a
            href={footer.emailHref}
            className="font-hanken text-on-surface-variant hover:text-accent transition-colors duration-200 text-sm"
          >
            {footer.email}
          </a>
          <a
            href={footer.phoneHref}
            className="font-hanken text-on-surface-variant hover:text-accent transition-colors duration-200 text-sm"
          >
            {footer.phone}
          </a>
        </div>
      </div>

      {/* Footer base bar */}
      <div className="border-t border-outline-variant py-8 px-6 md:px-12 text-center md:text-left flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto">
        <p className="font-hanken text-[10px] tracking-widest text-on-surface-variant mb-4 md:mb-0 uppercase font-semibold">
          © {new Date().getFullYear()} {navigation.logo.toUpperCase()} BUILD AND
          DESIGN. ALL RIGHTS RESERVED.
        </p>
        <div className="flex gap-4">
          <Globe
            size={18}
            className="text-on-surface-variant hover:text-accent cursor-pointer transition-all duration-300 hover:scale-125"
          />
          <Share2
            size={18}
            className="text-on-surface-variant hover:text-accent cursor-pointer transition-all duration-300 hover:scale-125"
          />
        </div>
      </div>
    </footer>
  );
}
