'use client'

export function LogoSlider({ partners }: { partners: string[] }) {
  const doubled = [...partners, ...partners]
  return (
    <div className="overflow-hidden bg-[#FDFBF7] py-12 border-y border-[#1A252F]/5">
      <div className="logo-slider gap-8 sm:gap-16">
        {doubled.map((p, i) => (
          <div key={i} className="text-xl font-bold text-[#1A252F]/30 hover:text-[#2D5A27] transition-colors uppercase tracking-widest">
            {p}
          </div>
        ))}
      </div>
    </div>
  )
}
