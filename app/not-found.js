import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export const metadata = {
  title: "Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] flex items-center justify-center relative overflow-hidden">
      {/* Architectural grid */}
      <div className="absolute inset-0 architectural-grid opacity-40 pointer-events-none" />

      {/* Decorative corners */}
      <div className="absolute top-12 left-12 w-16 h-16 border-t-2 border-l-2 border-[#F5C518]/30" aria-hidden="true" />
      <div className="absolute top-12 right-12 w-16 h-16 border-t-2 border-r-2 border-[#F5C518]/30" aria-hidden="true" />
      <div className="absolute bottom-12 left-12 w-16 h-16 border-b-2 border-l-2 border-[#F5C518]/30" aria-hidden="true" />
      <div className="absolute bottom-12 right-12 w-16 h-16 border-b-2 border-r-2 border-[#F5C518]/30" aria-hidden="true" />

      <div className="relative z-10 text-center px-6 max-w-lg mx-auto">
        {/* 404 number */}
        <div
          className="text-[8rem] lg:text-[12rem] font-900 leading-none text-gradient-yellow mb-0 select-none"
          style={{ fontFamily: "var(--font-cinzel)", fontWeight: 900 }}
          aria-hidden="true"
        >
          404
        </div>

        <h1
          className="text-2xl lg:text-4xl font-700 text-white mb-4 -mt-4"
          style={{ fontFamily: "var(--font-cinzel)" }}
        >
          Blueprint Not Found
        </h1>
        <p
          className="text-[#6B7280] mb-10 leading-relaxed"
          style={{ fontFamily: "var(--font-josefin)", fontWeight: 300 }}
        >
          The page you&apos;re looking for doesn&apos;t exist — it may have been moved, renamed, or is still under construction.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            id="not-found-home-btn"
            className="flex items-center gap-2 px-8 py-4 bg-[#F5C518] text-[#0D0D0D] text-sm font-700 uppercase tracking-[0.12em] rounded-sm hover:bg-[#E0A800] transition-colors duration-200 cursor-pointer"
            style={{ fontFamily: "var(--font-montserrat)", fontWeight: 700 }}
          >
            <Home size={16} />
            Go Home
          </Link>
          <Link
            href="/gallery"
            id="not-found-gallery-btn"
            className="flex items-center gap-2 px-8 py-4 border border-white/20 text-white/70 text-sm uppercase tracking-[0.12em] rounded-sm hover:border-white hover:text-white transition-colors duration-200 cursor-pointer"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            <ArrowLeft size={16} />
            View Gallery
          </Link>
        </div>
      </div>
    </div>
  );
}
