'use client'

export function LogoSlider({ partners }: { partners: string[] }) {
  const doubled = [...partners, ...partners]
  return (
    <div className="overflow-hidden">
      <div className="flex w-max gap-12 sm:gap-20 animate-scroll-logo hover:[animation-play-state:paused]">
        {doubled.map((p, i) => (
          <div key={i} className="text-lg font-bold text-white/[0.08] hover:text-emerald-400/60 transition-colors uppercase tracking-[0.15em] whitespace-nowrap">
            {p}
          </div>
        ))}
      </div>
    </div>
  )
}