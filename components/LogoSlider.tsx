'use client'

export function LogoSlider({ partners }: { partners: string[] }) {
  const doubled = [...partners, ...partners]
  return (
    <div className="overflow-hidden bg-[#FDFBF7] py-12 border-y border-[#1A252F]/5">
      <div className="flex w-max gap-8 sm:gap-16 animate-scroll-logo hover:[animation-play-state:paused]">
        {doubled.map((p, i) => (
          <div key={i} className="text-xl font-bold text-ink/30 hover:text-brand transition-colors uppercase tracking-widest">
            {p}
          </div>
        ))}
      </div>
    </div>
  )
}
