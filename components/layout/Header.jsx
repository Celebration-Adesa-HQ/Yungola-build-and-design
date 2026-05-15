"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/gallery", label: "Gallery" },
  { href: "/showroom", label: "Showroom" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0D0D0D] shadow-[0_2px_24px_rgba(0,0,0,0.5)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
            aria-label="Yungola Build and Design Home"
          >
            <div className="flex items-center justify-center w-10 h-10 bg-[#F5C518] rounded-sm">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                <polygon points="11,2 20,18 2,18" fill="#0D0D0D" />
              </svg>
            </div>
            <div className="flex flex-col leading-none">
              <span
                className="font-[family-name:var(--font-cinzel)] text-sm font-700 text-white tracking-wide uppercase"
                style={{ fontFamily: "var(--font-cinzel)" }}
              >
                Yungola
              </span>
              <span
                className="text-[10px] text-[#F5C518] uppercase tracking-[0.18em]"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                Build &amp; Design
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`relative text-sm uppercase tracking-[0.12em] transition-colors duration-200 pb-1 ${
                  pathname === href
                    ? "text-[#F5C518]"
                    : "text-white/80 hover:text-white"
                }`}
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                {label}
                {pathname === href && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#F5C518] rounded-full" />
                )}
              </Link>
            ))}
            <Link
              href="/quote"
              id="nav-quote-btn"
              className="ml-4 px-6 py-2.5 bg-[#F5C518] text-[#0D0D0D] text-sm font-700 uppercase tracking-[0.1em] rounded-sm hover:bg-[#E0A800] transition-colors duration-200 cursor-pointer"
              style={{ fontFamily: "var(--font-montserrat)", fontWeight: 700 }}
            >
              Get a Quote
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white p-2 rounded-sm hover:bg-white/10 transition-colors cursor-pointer"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#0D0D0D] flex flex-col transition-all duration-400 lg:hidden ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex items-center justify-between px-6 h-20">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 bg-[#F5C518] rounded-sm">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                <polygon points="11,2 20,18 2,18" fill="#0D0D0D" />
              </svg>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-sm font-700 text-white tracking-wide uppercase" style={{ fontFamily: "var(--font-cinzel)" }}>
                Yungola
              </span>
              <span className="text-[10px] text-[#F5C518] uppercase tracking-[0.18em]" style={{ fontFamily: "var(--font-montserrat)" }}>
                Build &amp; Design
              </span>
            </div>
          </Link>
          <button
            onClick={() => setMobileOpen(false)}
            className="text-white p-2 cursor-pointer"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="flex flex-col items-center justify-center flex-1 gap-10" aria-label="Mobile navigation">
          {navLinks.map(({ href, label }, i) => (
            <Link
              key={href}
              href={href}
              className={`text-3xl uppercase tracking-[0.15em] font-300 transition-colors duration-200 ${
                pathname === href ? "text-[#F5C518]" : "text-white hover:text-[#F5C518]"
              }`}
              style={{
                fontFamily: "var(--font-cinzel)",
                animationDelay: `${i * 80}ms`,
              }}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/quote"
            className="mt-6 px-10 py-4 bg-[#F5C518] text-[#0D0D0D] text-lg font-700 uppercase tracking-[0.1em] rounded-sm hover:bg-[#E0A800] transition-colors duration-200 cursor-pointer"
            style={{ fontFamily: "var(--font-montserrat)", fontWeight: 700 }}
          >
            Get a Quote
          </Link>
        </nav>
      </div>
    </>
  );
}
