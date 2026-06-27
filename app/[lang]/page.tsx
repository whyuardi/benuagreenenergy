'use client'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

/* ─── Icon SVGs (inline, no component imports) ─── */
function IconBuilding() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2d5a4a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/></svg>
}
function IconStar() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2d5a4a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
}
function IconClock() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2d5a4a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
}
function IconZap() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2d5a4a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
}
function IconArrowRight({ className = '' }: { className?: string }) {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
}

function IntersectionReveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(true)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); io.disconnect() } }, { threshold: 0.1 })
      io.observe(el)
      return () => io.disconnect()
    } else { setVisible(true) }
  }, [])
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(24px)',
      transition: `opacity 700ms cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 700ms cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
    }}>{children}</div>
  )
}

const stats = [
  { value: '150+', label: 'Klien Industri', id: 'stat-1' },
  { value: '500+', label: 'Proyek Selesai', id: 'stat-2' },
  { value: '25+', label: 'Tahun Pengalaman', id: 'stat-3' },
  { value: '40%', label: 'Penghematan Energi', id: 'stat-4' },
]
const statIcons = [IconBuilding, IconStar, IconClock, IconZap]

const whyCards = [
  { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2d5a4a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/></svg>, title: 'Partner Resmi YORK', desc: 'Dealer resmi dengan garansi pabrik dan teknisi bersertifikat.' },
  { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2d5a4a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>, title: 'ISO 9001 Certified', desc: 'Sistem manajemen mutu internasional untuk jaminan kualitas.' },
  { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2d5a4a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>, title: 'Garansi 5 Tahun', desc: 'Perlindungan jangka panjang untuk setiap instalasi kami.' },
  { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2d5a4a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>, title: 'Dukungan 24/7', desc: 'Tim teknisi siap membantu kapan saja, di mana saja.' },
]

const services = [
  { id: 's1', icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#5da383" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>, title: 'Sistem HVAC', desc: 'Sistem pendingin skala industri dengan efisiensi tinggi untuk pabrik dan gedung komersial.' },
  { id: 's2', icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#5da383" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" x2="12" y1="20" y2="10"/><line x1="18" x2="18" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="16"/></svg>, title: 'Manajemen Energi', desc: 'Audit energi, monitoring real-time, dan strategi optimasi untuk mengurangi biaya operasional.' },
  { id: 's3', icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#5da383" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.9C15.5 4.9 17 3.5 19 2c1 2 2 4.5 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>, title: 'Sistem Solar', desc: 'Instalasi panel surya industri untuk kemandirian energi dan pengurangan emisi karbon.' },
]

export default function HomePage({ params }: { params: { lang: string } }) {
  const lang = params.lang === 'en' ? 'en' : 'id'

  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: '#1a1a1a' }}>
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-[0.08]" style={{backgroundImage:'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize:'60px 60px'}} />
        {/* Gradient orb */}
        <div className="absolute top-[15%] left-[5%] w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] rounded-full opacity-[0.08] blur-3xl pointer-events-none" style={{background:'radial-gradient(circle, #5da383, transparent 70%)'}} />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-28 sm:py-32 lg:py-40 w-full">
          <div className="max-w-3xl">
            <IntersectionReveal>
              <span className="inline-flex items-center gap-1.5 text-[#5da383] text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.18em] mb-6 px-3 py-1.5 rounded-full border border-[#5da383]/30" style={{background:'rgba(93,163,131,0.1)'}}>
                <span className="w-1.5 h-1.5 rounded-full bg-[#5da383] animate-pulse" />
                Solusi Energi Terpercaya Sejak 1998
              </span>
            </IntersectionReveal>

            <IntersectionReveal delay={80}>
              <h1 className="font-outfit text-[2.2rem] sm:text-[3.5rem] lg:text-[4.5rem] font-bold text-white leading-[1.05] tracking-[-0.02em] mb-5">
                Solusi Energi Hijau untuk Industri Masa Depan
              </h1>
            </IntersectionReveal>

            <IntersectionReveal delay={160}>
              <p className="text-white/40 text-base sm:text-lg max-w-xl leading-relaxed mb-10">
                Mengoptimalkan efisiensi energi industri Anda melalui sistem HVAC, EMS, dan Solar Panel terintegrasi.
              </p>
            </IntersectionReveal>

            <IntersectionReveal delay={240}>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                <Link href={`/${lang}/contact`}
                  className="inline-flex items-center gap-2.5 px-6 py-3 sm:px-8 sm:py-3.5 rounded-full text-sm sm:text-[15px] font-semibold transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98]"
                  style={{background:'#2d5a4a', color:'white', boxShadow:'0 4px 20px rgba(45,90,74,0.3)'}}>
                  Konsultasi Gratis
                  <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center" style={{background:'rgba(0,0,0,0.15)'}}>
                    <IconArrowRight />
                  </span>
                </Link>
                <Link href={`/${lang}/portfolio`}
                  className="inline-flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-3.5 rounded-full text-sm sm:text-[15px] font-semibold transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98]"
                  style={{border:'1px solid rgba(255,255,255,0.12)', color:'white'}}>
                  Lihat Proyek Kami
                </Link>
              </div>
            </IntersectionReveal>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/15">
          <span className="text-[8px] tracking-[0.25em] uppercase font-medium">Gulir</span>
          <svg width="14" height="22" viewBox="0 0 16 24" fill="none" className="animate-bounce">
            <rect x="0.5" y="0.5" width="15" height="23" rx="7.5" stroke="currentColor" strokeOpacity="0.3"/>
            <circle cx="8" cy="8" r="2" fill="currentColor" fillOpacity="0.4"/>
          </svg>
        </div>
      </section>

      {/* ═══ TRUSTED BY ═══ */}
      <section className="py-12 sm:py-16 bg-white border-b border-[#e8e4dd]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <IntersectionReveal>
            <p className="text-center text-[10px] font-bold uppercase tracking-[0.25em] text-[#9b9b9b] mb-8">Dipercaya Oleh</p>
          </IntersectionReveal>
          <IntersectionReveal delay={80}>
            <div className="overflow-hidden">
              <div className="flex w-max animate-marquee">
                {Array(3).fill(['GarudaFood','Suntory Garuda','Kalbe Farma','Mayora Indah','Indofood','Unilever Indonesia']).flat().map((name, i) => (
                  <span key={i} className="text-base sm:text-lg font-bold text-[#9b9b9b]/30 hover:text-[#2d5a4a]/40 transition-colors whitespace-nowrap mx-8 sm:mx-14 uppercase tracking-widest">{name}</span>
                ))}
              </div>
            </div>
          </IntersectionReveal>
        </div>
      </section>

      {/* ═══ STATS ═══ */}
      <section className="py-16 sm:py-24" style={{background:'#F5F2EC'}}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12">
            {stats.map((s, i) => {
              const StatIcon = statIcons[i]
              return (
                <IntersectionReveal key={s.id} delay={i * 60}>
                  <div className="text-center group">
                    <div className="inline-flex w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#2d5a4a]/10 text-[#2d5a4a] items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#2d5a4a]/15 transition-all duration-500">
                      <StatIcon />
                    </div>
                    <p className="font-outfit text-[2.2rem] sm:text-[2.8rem] font-bold text-[#2d5a4a] mb-1.5 leading-none tracking-[-0.02em]">{s.value}</p>
                    <p className="text-[#6b6b6b] text-xs sm:text-sm font-medium">{s.label}</p>
                  </div>
                </IntersectionReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══ WHY BGE ═══ */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <IntersectionReveal>
            <span className="inline-flex items-center text-[#2d5a4a] text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.18em] mb-4 px-3 py-1.5 rounded-full border border-[#2d5a4a]/30 bg-[#e8f3ee]">Mengapa Kami</span>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
              <div className="lg:col-span-5 lg:sticky lg:top-24 self-start">
                <h2 className="font-outfit text-[2rem] sm:text-[2.8rem] lg:text-[3.2rem] font-bold text-[#1a1a1a] mb-5 tracking-[-0.02em] leading-[1.08]">Mengapa BGE?</h2>
                <p className="text-[#3d3d3d] text-base sm:text-lg leading-relaxed mb-4">Dengan pengalaman lebih dari 25 tahun, kami memberikan solusi energi yang terbukti menghemat biaya operasional hingga 40%.</p>
                <p className="text-[#6b6b6b] leading-relaxed text-sm sm:text-base">Kami adalah mitra terpercaya untuk industri-industri besar di Indonesia. Dari audit energi hingga instalasi sistem terintegrasi, BGE hadir untuk membantu Anda mencapai efisiensi maksimal.</p>
              </div>
              <div className="lg:col-span-7 space-y-4">
                {whyCards.map((card, i) => (
                  <IntersectionReveal key={i} delay={i * 60}>
                    <div className="p-5 sm:p-6 rounded-2xl border border-[#e8e4dd] bg-white hover:border-[#5da383]/30 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-start gap-4 sm:gap-5">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#e8f3ee] text-[#2d5a4a] flex items-center justify-center shrink-0">{card.icon}</div>
                        <div className="pt-1">
                          <h3 className="font-outfit font-bold text-sm sm:text-base text-[#1a1a1a] mb-1">{card.title}</h3>
                          <p className="text-[#6b6b6b] text-xs sm:text-sm leading-relaxed">{card.desc}</p>
                        </div>
                      </div>
                    </div>
                  </IntersectionReveal>
                ))}
              </div>
            </div>
          </IntersectionReveal>
        </div>
      </section>

      {/* ═══ SERVICES ═══ */}
      <section className="py-16 sm:py-24" style={{background:'#1a1a1a'}}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <IntersectionReveal>
            <span className="inline-flex items-center text-[#5da383] text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.18em] mb-4 px-3 py-1.5 rounded-full border border-[#5da383]/30" style={{background:'rgba(93,163,131,0.1)'}}>Layanan Kami</span>
            <h2 className="font-outfit text-[2rem] sm:text-[2.8rem] font-bold text-white mb-6 tracking-[-0.02em] leading-[1.08]">Solusi Energi Terintegrasi</h2>
            <p className="text-white/40 text-base sm:text-lg mb-12 max-w-lg">Solusi lengkap untuk efisiensi energi industri Anda.</p>
          </IntersectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 mb-10">
            {services.map((svc, i) => (
              <IntersectionReveal key={svc.id} delay={i * 80}>
                <Link href={`/${lang}/services`} className="group block h-full">
                  <div className="p-6 sm:p-8 rounded-2xl h-full transition-all duration-300 hover:-translate-y-1" style={{border:'1px solid rgba(255,255,255,0.06)', background:'rgba(255,255,255,0.03)'}}>
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#5da383]/12 text-[#5da383] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-[#5da383]/20 transition-all duration-500">
                      {svc.icon}
                    </div>
                    <h3 className="font-outfit text-lg sm:text-xl font-bold text-white mb-3">{svc.title}</h3>
                    <p className="text-white/35 text-sm leading-relaxed mb-6">{svc.desc}</p>
                    <span className="inline-flex items-center gap-2 text-[#5da383] text-xs font-semibold group-hover:gap-3 transition-all duration-300">
                      Selengkapnya
                      <span className="w-6 h-6 rounded-full bg-[#5da383]/10 flex items-center justify-center group-hover:translate-x-1 transition-all duration-300">
                        <IconArrowRight />
                      </span>
                    </span>
                  </div>
                </Link>
              </IntersectionReveal>
            ))}
          </div>

          <IntersectionReveal delay={240}>
            <div className="text-center">
              <Link href={`/${lang}/services`}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5"
                style={{border:'1px solid rgba(255,255,255,0.12)', color:'white'}}>
                Semua Layanan
                <span className="w-7 h-7 rounded-full flex items-center justify-center" style={{background:'rgba(255,255,255,0.06)'}}>
                  <IconArrowRight />
                </span>
              </Link>
            </div>
          </IntersectionReveal>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <IntersectionReveal>
            <span className="inline-flex items-center text-[#2d5a4a] text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.18em] mb-4 px-3 py-1.5 rounded-full border border-[#2d5a4a]/30 bg-[#e8f3ee]">Siap Memulai?</span>
            <h2 className="font-outfit text-[2rem] sm:text-[2.8rem] lg:text-[3.2rem] font-bold text-[#1a1a1a] mb-4 tracking-[-0.02em] leading-[1.08]">Siap Menghemat Energi?</h2>
            <p className="text-[#6b6b6b] text-base sm:text-lg mb-10 max-w-md mx-auto">Hubungi kami untuk konsultasi gratis dan temukan solusi energi terbaik untuk bisnis Anda.</p>
          </IntersectionReveal>
          <IntersectionReveal delay={100}>
            <Link href={`/${lang}/contact`}
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-[15px] font-semibold transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98]"
              style={{background:'#2d5a4a', color:'white', boxShadow:'0 4px 20px rgba(45,90,74,0.3)'}}>
              Hubungi Kami
              <span className="w-8 h-8 rounded-full flex items-center justify-center" style={{background:'rgba(0,0,0,0.15)'}}>
                <IconArrowRight />
              </span>
            </Link>
          </IntersectionReveal>
        </div>
      </section>
    </>
  )
}
