import Image from "next/image";

export default function Loading() {
  return (
    <div className="min-h-screen bg-darkBackground flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        {/* Animated logo mark */}
        <div className="relative w-20 h-20 mb-2">
          <div className="absolute inset-0 border border-outline-variant/30 rounded-full" />
          <div
            className="absolute inset-0 border border-t-accent border-r-transparent border-b-transparent border-l-transparent rounded-full"
            style={{ animation: "spin 1.2s cubic-bezier(0.4, 0, 0.2, 1) infinite" }}
          />
          <div className="absolute inset-1.5 flex items-center justify-center rounded-full bg-darkBackground overflow-hidden">
            <Image
              src="/logo.png"
              alt="Yungola Logo"
              width={56}
              height={56}
              className="object-contain"
              priority
            />
          </div>
        </div>
        <span
          className="text-[10px] text-accent uppercase tracking-[0.3em] font-montserrat font-semibold"
        >
          Yungola
        </span>
      </div>
      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}
