export default function Loading() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        {/* Animated logo mark */}
        <div className="relative w-14 h-14">
          <div className="absolute inset-0 border-2 border-[#F5C518]/20 rounded-sm" />
          <div
            className="absolute inset-0 border-2 border-t-[#F5C518] border-r-transparent border-b-transparent border-l-transparent rounded-sm"
            style={{ animation: "spin 1s linear infinite" }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
              <polygon points="11,3 19,17 3,17" fill="#F5C518" opacity="0.8" />
            </svg>
          </div>
        </div>
        <span
          className="text-xs text-[#6B7280] uppercase tracking-[0.25em]"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          Loading...
        </span>
      </div>
      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}
