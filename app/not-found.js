import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export const metadata = {
  title: "Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-darkBackground flex items-center justify-center relative overflow-hidden">
      {/* Premium editorial glow */}
      <div className="absolute inset-0 editorial-glow opacity-60 pointer-events-none" />

      <div className="relative z-10 text-center px-6 max-w-lg mx-auto">
        {/* 404 number */}
        <div
          className="text-[8rem] lg:text-[12rem] font-black leading-none text-gradient-yellow mb-0 select-none font-montserrat"
          aria-hidden="true"
        >
          404
        </div>

        <h1
          className="text-2xl lg:text-4xl font-extrabold text-darkForeground mb-4 -mt-4 font-montserrat"
        >
          Page Not Found
        </h1>
        <p
          className="text-darkSecondaryForeground mb-10 leading-relaxed font-josefin font-light"
        >
          The page you&apos;re looking for doesn&apos;t exist — it may have been moved, renamed, or is still under construction.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            id="not-found-home-btn"
            className="flex items-center justify-center gap-2 px-8 py-4 bg-accent text-on-primary text-sm font-bold uppercase tracking-[0.12em] rounded-sm hover:bg-accentDark transition-colors duration-200 cursor-pointer font-montserrat"
          >
            <Home size={16} />
            Go Home
          </Link>
          <Link
            href="/gallery"
            id="not-found-gallery-btn"
            className="flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white/70 text-sm uppercase tracking-[0.12em] rounded-sm hover:border-white hover:text-white transition-colors duration-200 cursor-pointer font-montserrat"
          >
            <ArrowLeft size={16} />
            View Gallery
          </Link>
        </div>
      </div>
    </div>
  );
}
