export default function LangLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: '#FDFBF7' }}>
      <div className="flex flex-col items-center gap-5">
        {/* Premium SVG spinner */}
        <svg className="premium-spinner" width="44" height="44" viewBox="0 0 50 50">
          <circle cx="25" cy="25" r="20" fill="none" stroke="#e8e4dd" strokeWidth="3" />
          <circle cx="25" cy="25" r="20" fill="none" stroke="url(#loaderGrad)" strokeWidth="3" />
          <defs>
            <linearGradient id="loaderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1a6b4a" />
              <stop offset="100%" stopColor="#5fe0a0" />
            </linearGradient>
          </defs>
        </svg>

        {/* Brand text */}
        <div className="flex flex-col items-center gap-1.5">
          <span className="font-outfit text-xs font-bold text-[#1a6b4a] uppercase tracking-[0.2em]">
            Benua Green Energy
          </span>
          <div className="flex gap-1">
            {[0, 1, 2].map(i => (
              <div
                key={i}
                className="w-1 h-1 rounded-full bg-[#3daf7a]"
                style={{
                  animation: 'pulse 1.2s ease-in-out infinite',
                  animationDelay: `${i * 0.2}s`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Skeleton preview */}
        <div className="mt-8 w-full max-w-sm px-6 space-y-4 opacity-40">
          <div className="h-3 rounded-full bg-[#e8e4dd] overflow-hidden">
            <div className="h-full w-full bg-gradient-to-r from-[#e8e4dd] via-[#f5f2ec] to-[#e8e4dd] animate-shimmer" />
          </div>
          <div className="h-3 rounded-full bg-[#e8e4dd] w-3/4 overflow-hidden">
            <div className="h-full w-full bg-gradient-to-r from-[#e8e4dd] via-[#f5f2ec] to-[#e8e4dd] animate-shimmer" style={{ animationDelay: '0.15s' }} />
          </div>
          <div className="h-3 rounded-full bg-[#e8e4dd] w-1/2 overflow-hidden">
            <div className="h-full w-full bg-gradient-to-r from-[#e8e4dd] via-[#f5f2ec] to-[#e8e4dd] animate-shimmer" style={{ animationDelay: '0.3s' }} />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.2); }
        }
      `}</style>
    </div>
  )
}
