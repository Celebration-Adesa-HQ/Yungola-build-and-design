"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";

import { navigation } from "@/lib/data/siteContent";
const navLinks = navigation.navLinks;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMobileOpen(false);
      setOpenDropdown(null);
    }, 0);
    return () => clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 flex justify-between items-center px-6 md:px-12 py-6 ${
          scrolled
            ? "bg-foreground/95 backdrop-blur-md border-b border-outline-variant/30 shadow-lg"
            : "bg-transparent"
        } animate-fade-up`}
      >
        {/* ✅ Brand Identity - Fixed & Consistent */}
        <Link
          href="/"
          className="flex items-center gap-3 select-none group"
          aria-label="YUNGOLA - Home"
        >
          <Image
            src="/logo.png"
            alt="YUNGOLA Architecture & Design Logo"
            width={48}
            height={48}
            priority
            className="w-10 h-10 md:w-12 md:h-12 object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <div className="flex flex-col leading-tight">
            <h1 className="font-montserrat text-xl md:text-2xl font-bold tracking-widest text-accent uppercase group-hover:text-accent transition-colors duration-300">
              YUNGOLA
            </h1>
            <span className="font-hanken text-[10px] tracking-widest text-darkSecondaryForeground uppercase">
              Build and Design
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map(({ href, label, hasDropdown, dropdownItems }) => {
            const isActive = pathname === href;
            return (
              <div key={label} className="relative group cursor-pointer py-2">
                <Link
                  href={href}
                  className={`font-hanken text-xs uppercase tracking-[0.15em] transition-colors duration-300 flex items-center gap-1 ${
                    isActive
                      ? "text-accent font-bold"
                      : "text-darkForeground hover:text-accent"
                  }`}
                >
                  {label}
                  {hasDropdown && (
                    <ChevronDown
                      size={14}
                      className="text-current opacity-70 transition-transform duration-300 group-hover:rotate-180"
                    />
                  )}
                </Link>

                {/* Dropdown Menu */}
                {hasDropdown && dropdownItems && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-surface-container border-t-2 border-accent shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 rounded-b-sm">
                    <ul className="flex flex-col py-2">
                      {dropdownItems.map((item) => (
                        <li key={item.label}>
                          <Link
                            href={item.href}
                            className="block px-6 py-3 font-hanken text-xs text-on-surface-variant hover:bg-surface-container-high hover:text-accent transition-colors duration-200 uppercase tracking-widest"
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Mobile Hamburger toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-darkForeground hover:text-accent transition-colors p-2 cursor-pointer"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-surface-container flex flex-col transition-all duration-500 md:hidden ${
          mobileOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-6 border-b border-outline-variant/30">
          <div className="flex flex-col">
            <h1 className="font-montserrat text-2xl font-bold tracking-widest text-darkForeground uppercase leading-none">
              YUNGOLA
            </h1>
            <span className="font-hanken text-[10px] tracking-widest text-darkSecondaryForeground uppercase mt-1">
              Architecture
            </span>
          </div>
          <button
            onClick={() => setMobileOpen(false)}
            className="text-darkForeground hover:text-accent p-2 cursor-pointer"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <nav
          className="flex flex-col items-center justify-center flex-1 gap-6 w-full px-8 overflow-y-auto py-8"
          aria-label="Mobile navigation"
        >
          {navLinks.map(({ href, label, hasDropdown, dropdownItems }) => {
            const isActive = pathname === href;
            const isDropdownOpen = openDropdown === label;
            return (
              <div key={label} className="flex flex-col items-center w-full">
                <div className="flex items-center gap-2">
                  <Link
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    className={`text-2xl uppercase tracking-[0.15em] font-bold transition-colors duration-300 font-montserrat ${
                      isActive
                        ? "text-accent"
                        : "text-darkForeground hover:text-accent"
                    }`}
                  >
                    {label}
                  </Link>
                  {hasDropdown && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setOpenDropdown(isDropdownOpen ? null : label);
                      }}
                      className="p-1 text-darkForeground hover:text-accent transition-colors cursor-pointer"
                      aria-label="Toggle submenu"
                    >
                      <ChevronDown
                        size={20}
                        className={`transition-transform duration-300 ${isDropdownOpen ? "rotate-180 text-accent" : ""}`}
                      />
                    </button>
                  )}
                </div>

                {hasDropdown && dropdownItems && (
                  <div
                    className={`flex flex-col items-center gap-3 overflow-hidden transition-all duration-300 ${isDropdownOpen ? "max-h-64 mt-4 opacity-100" : "max-h-0 opacity-0"}`}
                  >
                    {dropdownItems.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="font-hanken text-sm text-on-surface-variant hover:text-accent transition-colors uppercase tracking-widest"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="mt-6 px-10 py-5 bg-accent text-on-primary text-sm font-bold uppercase tracking-widest btn-glow whitespace-nowrap animate-fade-up rounded-sm font-montserrat shadow-lg"
          >
            START YOUR PROJECT
          </Link>
        </nav>
      </div>
    </>
  );
}
