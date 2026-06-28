'use client'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

/* ─── Inline SVG Icons ─── */
function IconArrowRight({ className = '' }: { className?: string }) {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
}
function IconX() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
}
function IconCheck() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
}

/* ─── Intersection Reveal ─── */
function Reveal({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(true)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); io.disconnect() } }, { threshold: 0.08 })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return (
    <div ref={ref} className={className} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(24px)',
      transition: `opacity 700ms cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 700ms cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
    }}>{children}</div>
  )
}

/* ─── Data ─── */
const stats = [
  { value: '150+', label: 'Klien Industri' },
  { value: '500+', label: 'Proyek Selesai' },
  { value: '25+', label: 'Tahun Pengalaman' },
  { value: '40%', label: 'Penghematan Energi' },
]

const whyFeatures = [
  { title: 'Partner Resmi YORK', desc: 'Dealer resmi dengan garansi pabrik dan teknisi bersertifikat internasional.' },
  { title: 'ISO 9001 Certified', desc: 'Sistem manajemen mutu terstandar global untuk jaminan kualitas setiap proyek.' },
  { title: 'Garansi 5 Tahun', desc: 'Perlindungan jangka panjang untuk setiap instalasi yang kami kerjakan.' },
  { title: 'Dukungan 24/7', desc: 'Tim teknisi siaga - kapan pun Anda butuh, kami siap.' },
]

export default function HomePage({ params }: { params: { lang: string } }) {
  const lang = params.lang === 'en' ? 'en' : 'id'
  const content = lang === 'en' ? CONTENT.en : CONTENT.id

  return (
    <>
      {/* ════════════════════════════════════════════
           HERO — Split Layout
           ════════════════════════════════════════════ */}
      <section className="section-dark relative min-h-screen flex items-center overflow-hidden">
        {/* Grid + Orbs */}
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="orb bg-[#1a6b4a]/20 w-[500px] h-[500px] top-[-10%] left-[-5%] animate-float-slow" />
        <div className="orb bg-[#3daf7a]/10 w-[400px] h-[400px] bottom-[-8%] right-[-5%] animate-float" style={{ animationDelay: '3s' }} />
        <div className="orb bg-[#c89b3c]/6 w-[300px] h-[300px] top-[40%] right-[10%] animate-float-slow" style={{ animationDelay: '6s' }} />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 w-full py-28 sm:py-32 lg:py-36">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left: Headline */}
            <div className="lg:col-span-7">
              <Reveal>
                <span className="badge badge-dark mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5fe0a0] animate-pulse" />
                  {content.hero.badge}
                </span>
              </Reveal>

              <Reveal delay={80}>
                <h1 className="font-outfit text-[2.6rem] sm:text-[4rem] lg:text-[5rem] font-bold leading-[1.02] tracking-[-0.03em] text-white mb-5">
                  {content.hero.title.split('\\n').map((line: string, i: number) => (
                    <span key={i}>{line}{i === 0 && <br />}</span>
                  ))}
                </h1>
              </Reveal>

              <Reveal delay={160}>
                <p className="text-white/35 text-base sm:text-lg max-w-xl leading-relaxed mb-10">
                  {content.hero.sub}
                </p>
              </Reveal>

              <Reveal delay={240}>
                <div className="flex flex-wrap gap-3 sm:gap-4">
                  <Link href={`/${lang}/contact`} className="btn-primary text-sm sm:text-[15px] px-7 py-3 sm:px-8 sm:py-3.5">
                    {content.hero.cta}
                    <span className="w-7 h-7 rounded-full flex items-center justify-center bg-black/15">
                      <IconArrowRight />
                    </span>
                  </Link>
                  <Link href={`/${lang}/portfolio`} className="btn-outline text-sm sm:text-[15px] px-7 py-3 sm:px-8 sm:py-3.5">
                    {content.hero.cta2}
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* Right: Floating stat cards */}
            <div className="lg:col-span-5 hidden lg:block">
              <div className="relative">
                <Reveal delay={120}>
                  <div className="glass-panel-strong p-6 sm:p-7 mb-4 max-w-xs ml-auto">
                    <p className="font-outfit text-4xl font-bold text-white mb-1">{stats[2].value}</p>
                    <p className="text-white/40 text-sm">{stats[2].label}</p>
                    <div className="mt-4 w-full h-[2px] bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full w-3/4 bg-gradient-to-r from-[#3daf7a] to-[#5fe0a0] rounded-full" />
                    </div>
                  </div>
                </Reveal>
                <Reveal delay={200}>
                  <div className="glass-panel-strong p-6 sm:p-7 max-w-xs ml-12">
                    <p className="font-outfit text-4xl font-bold text-white mb-1">{stats[3].value}</p>
                    <p className="text-white/40 text-sm">{stats[3].label}</p>
                    <div className="mt-4 w-full h-[2px] bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full w-[40%] bg-gradient-to-r from-[#c89b3c] to-[#e2c070] rounded-full" />
                    </div>
                  </div>
                </Reveal>
                {/* Small badge */}
                <Reveal delay={280}>
                  <div className="absolute -bottom-4 -left-4 glass-panel p-3 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#3daf7a]/20 flex items-center justify-center"><IconCheck /></span>
                    <span className="text-white/60 text-xs font-medium whitespace-nowrap">{content.hero.trustBadge}</span>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/10">
          <span className="text-[7px] tracking-[0.3em] uppercase font-medium">{content.scroll}</span>
          <svg width="12" height="20" viewBox="0 0 16 24" fill="none" className="animate-bounce">
            <rect x="0.5" y="0.5" width="15" height="23" rx="7.5" stroke="currentColor" strokeOpacity="0.3"/>
            <circle cx="8" cy="8" r="2" fill="currentColor" fillOpacity="0.3"/>
          </svg>
        </div>
      </section>

      {/* ════════════════════════════════════════════
           MARQUEE — Trusted By (same, fine)
           ════════════════════════════════════════════ */}
      <section className="py-12 sm:py-14 bg-white border-b border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <Reveal>
            <p className="text-center text-[9px] font-bold uppercase tracking-[0.3em] text-[var(--ink-subtle)] mb-7">{content.trusted.title}</p>
          </Reveal>
          <Reveal delay={60}>
            <div className="overflow-hidden">
              <div className="flex w-max animate-marquee">
                {Array(3).fill(['GarudaFood','Suntory Garuda','Kalbe Farma','Mayora Indah','Indofood','Unilever Indonesia']).flat().map((name, i) => (
                  <span key={i} className="text-sm sm:text-base font-bold text-[var(--ink-subtle)]/30 hover:text-[var(--brand)]/30 transition-colors whitespace-nowrap mx-10 sm:mx-16 uppercase tracking-widest">{name}</span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ════════════════════════════════════════════
           STATS — Horizontal Ribbon
           ════════════════════════════════════════════ */}
      <section className="section-surface py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x-0 md:divide-x divide-[var(--border)] border-y border-[var(--border)]">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 60}>
                <div className="py-8 sm:py-10 px-4 sm:px-6 text-center md:text-left">
                  <p className="font-outfit text-[2.8rem] sm:text-[3.5rem] font-bold text-[var(--brand)] leading-none tracking-[-0.03em] mb-1.5">
                    {s.value}
                  </p>
                  <p className="text-[var(--ink-muted)] text-xs sm:text-sm font-medium tracking-wide uppercase">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
           WHY BGE — Editorial Magazine Layout
           ════════════════════════════════════════════ */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Left: Editorial column */}
            <div className="lg:col-span-5">
              <Reveal>
                <span className="badge badge-green mb-5">{content.why.badge}</span>
              </Reveal>
              <Reveal delay={60}>
                <h2 className="font-outfit text-[2.4rem] sm:text-[3rem] lg:text-[3.2rem] font-bold text-[var(--ink)] tracking-[-0.03em] leading-[1.06] mb-5">
                  {content.why.title}
                </h2>
              </Reveal>
              <Reveal delay={120}>
                <div className="accent-bar mb-6" />
              </Reveal>
              <Reveal delay={140}>
                <p className="text-[var(--ink-secondary)] text-base sm:text-lg leading-relaxed mb-3">
                  {content.why.desc1}
                </p>
                <p className="text-[var(--ink-muted)] text-sm sm:text-base leading-relaxed">
                  {content.why.desc2}
                </p>
              </Reveal>

              {/* Pull quote */}
              <Reveal delay={200}>
                <div className="mt-10 p-5 border-l-2 border-[var(--brand-light)] bg-[var(--brand-pale)]/30 rounded-r-xl">
                  <p className="font-outfit text-sm sm:text-base font-semibold text-[var(--brand-dark)] italic leading-relaxed">
                    &ldquo;{content.why.quote}&rdquo;
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Right: Features as editorial list */}
            <div className="lg:col-span-7 space-y-5">
              {whyFeatures.map((f, i) => (
                <Reveal key={f.title} delay={80 + i * 60}>
                  <div className="group flex items-start gap-5 p-5 -mx-5 rounded-2xl hover:bg-[var(--brand-pale)]/20 transition-all duration-300">
                    <div className="w-10 h-10 rounded-full bg-[var(--brand-pale)] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[var(--brand)]/10 transition-colors duration-300">
                      <div className="w-2 h-2 rounded-full bg-[var(--brand-light)]" />
                    </div>
                    <div>
                      <h3 className="font-outfit font-bold text-[var(--ink)] text-sm sm:text-base mb-1">{f.title}</h3>
                      <p className="text-[var(--ink-muted)] text-xs sm:text-sm leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
           SERVICES — Staggered 1+2 (NO 3 identical cards)
           ════════════════════════════════════════════ */}
      <section className="section-dark-alt py-20 sm:py-28 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <Reveal>
            <div className="flex items-center gap-4 mb-4">
              <span className="badge badge-dark">{content.services.badge}</span>
              <div className="h-px flex-1 bg-white/5" />
            </div>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="font-outfit text-[2rem] sm:text-[2.8rem] font-bold text-white mb-3 tracking-[-0.02em] leading-[1.08]">
              {content.services.title}
            </h2>
            <p className="text-white/30 text-base sm:text-lg mb-14 max-w-lg">
              {content.services.sub}
            </p>
          </Reveal>

          {/* Services grid: 1 featured + 2 compact */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5">
            {/* Featured: HVAC — spans 2 cols */}
            <Reveal delay={80} className="lg:col-span-2">
              <Link href={`/${lang}/services`} className="group block h-full">
                <div className="relative h-full p-7 sm:p-9 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1"
                  style={{ background: 'linear-gradient(135deg, rgba(26,107,74,0.15), rgba(26,107,74,0.04))', border: '1px solid rgba(255,255,255,0.06)' }}>
                  {/* Decorative gradient blob */}
                  <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#3daf7a]/10 blur-[60px] pointer-events-none" />
                  <div className="relative z-10">
                    <div className="flex items-start gap-5">
                      <div className="w-14 h-14 rounded-xl bg-[#3daf7a]/15 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#3daf7a]/25 transition-all duration-500">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#5fe0a0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                      </div>
                      <div className="pt-1">
                        <h3 className="font-outfit text-xl sm:text-2xl font-bold text-white mb-2">{content.services.featured.title}</h3>
                        <p className="text-white/35 text-sm sm:text-base leading-relaxed max-w-lg">{content.services.featured.desc}</p>
                      </div>
                    </div>
                    <div className="mt-6 flex items-center gap-2 text-[#5fe0a0] text-xs font-semibold group-hover:gap-3 transition-all duration-300">
                      {content.services.featured.cta}
                      <span className="w-5 h-5 rounded-full bg-[#5fe0a0]/10 flex items-center justify-center group-hover:translate-x-1 transition-all duration-300">
                        <IconArrowRight />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </Reveal>

            {/* Right column: 2 stacked */}
            <div className="flex flex-col gap-4 sm:gap-5 lg:col-span-1">
              {[content.services.secondary[0], content.services.secondary[1]].map((svc: any, i: number) => (
                <Reveal key={svc.title} delay={120 + i * 60} className="flex-1">
                  <Link href={`/${lang}/services`} className="group block h-full">
                    <div className="h-full p-6 sm:p-7 rounded-2xl transition-all duration-300 hover:-translate-y-1"
                      style={{ border: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.02)' }}>
                      <div className="w-10 h-10 rounded-lg bg-[#3daf7a]/12 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#3daf7a]/20 transition-all duration-500">
                        {i === 0
                          ? <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5fe0a0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" x2="12" y1="20" y2="10"/><line x1="18" x2="18" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="16"/></svg>
                          : <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5fe0a0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.9C15.5 4.9 17 3.5 19 2c1 2 2 4.5 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>
                        }
                      </div>
                      <h3 className="font-outfit font-bold text-white text-base sm:text-lg mb-2">{svc.title}</h3>
                      <p className="text-white/30 text-xs sm:text-sm leading-relaxed">{svc.desc}</p>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Bottom CTA link */}
          <Reveal delay={240}>
            <div className="mt-10 text-center">
              <Link href={`/${lang}/services`} className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold btn-outline">
                {content.services.allLink}
                <IconArrowRight />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ════════════════════════════════════════════
           CTA — Full-width Dramatic Banner
           ════════════════════════════════════════════ */}
      <section className="relative py-24 sm:py-32 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0a0f16 0%, #0f3d2a 50%, #1a6b4a 100%)' }}>
        {/* Pattern */}
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="orb bg-[#3daf7a]/15 w-[600px] h-[600px] top-[-20%] right-[-10%] animate-float-slow" />
        <div className="orb bg-[#c89b3c]/8 w-[300px] h-[300px] bottom-[-10%] left-[10%] animate-float" style={{ animationDelay: '4s' }} />

        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <Reveal>
            <span className="badge badge-warm mb-6">{content.cta.badge}</span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-outfit text-[2.4rem] sm:text-[3.2rem] lg:text-[3.8rem] font-bold text-white tracking-[-0.03em] leading-[1.06] mb-4">
              {content.cta.title}
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="text-white/40 text-base sm:text-lg mb-10 max-w-md mx-auto">
              {content.cta.sub}
            </p>
          </Reveal>
          <Reveal delay={240}>
            <Link href={`/${lang}/contact`} className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-[15px] font-semibold transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98] animate-glow"
              style={{ background: '#1a6b4a', color: 'white', boxShadow: '0 4px 25px rgba(26,107,74,0.4)' }}>
              {content.cta.button}
              <span className="w-8 h-8 rounded-full flex items-center justify-center bg-black/15">
                <IconArrowRight />
              </span>
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}

/* ═══ CONTENT ═══ */
const CONTENT = {
  id: {
    scroll: 'Gulir',
    hero: {
      badge: 'BG Group - Solusi Energi Hijau',
      title: 'Menghubungkan Masa Depan\nEnergi Hijau',
      sub: 'Kami menyediakan spektrum penuh layanan energi - dari konsultasi, instalasi, hingga perawatan - memastikan kebutuhan energi Anda terpenuhi secara efisien dan berkelanjutan.',
      cta: 'Jelajahi Layanan',
      cta2: 'Lihat Produk',
      trustBadge: 'Berdiri Sejak 2000',
    },
    trusted: {
      title: 'Dipercaya Oleh',
    },
    why: {
      badge: 'Tentang Kami',
      title: 'BG Group - Mitra Energi Hijau Anda',
      desc1: 'BG Group, didirikan tahun 2000 dengan HQ di Singapore dan Jakarta, adalah pelopor investasi energi hijau dan keberlanjutan. 10% dari pendapatan tahunan dialokasikan untuk R&D.',
      desc2: 'Kami menyediakan sistem pendingin non-listrik (LiBr Absorption Chiller) bertenaga energi bersih dan terbarukan, serta refrigerant non-polutan.',
      quote: 'Membantu pemerintah mengembangkan keberlanjutan ekonomi, energi, dan lingkungan melalui solusi energi inovatif.',
    },
    services: {
      badge: 'Layanan Kami',
      title: 'Solusi Energi Terintegrasi',
      sub: 'Spektrum penuh layanan energi - dari konsultasi hingga perawatan.',
      featured: {
        title: 'Jasa Instalasi & Komisioning',
        desc: 'Solusi CCHP (Combined Cooling, Heat & Power) komprehensif - rekayasa, konsultasi, desain, instalasi, dan komisioning. Ditangani teknisi bersertifikat.',
        cta: 'Pelajari Lebih Lanjut',
      },
      secondary: [
        { title: 'Perawatan & Pemeliharaan', desc: 'Program perawatan preventif & korektif untuk memastikan performa optimal, keandalan, dan umur panjang peralatan Anda.' },
        { title: 'EMS - Manajemen Energi', desc: 'Sistem manajemen energi canggih untuk memonitor, mengoptimalkan, dan mengontrol performa peralatan CCHP secara real-time.' },
      ],
      allLink: 'Semua Layanan',
    },
    cta: {
      badge: 'Siap Memulai?',
      title: 'Siap Menghemat Energi?',
      sub: 'Hubungi tim ahli kami untuk konsultasi gratis dan temukan solusi energi terbaik untuk bisnis Anda. Didukung garansi resmi YORK dan sertifikasi ISO 9001.',
      button: 'Hubungi Kami',
    },
  },
  en: {
    scroll: 'Scroll',
    hero: {
      badge: 'BG Group — Green Energy Solutions',
      title: 'Connecting The\\nGreen Energy Future',
      sub: 'We provide a full spectrum of energy services — from consulting, installation, to maintenance — ensuring your energy needs are met efficiently and sustainably.',
      cta: 'Explore Services',
      cta2: 'View Products',
      trustBadge: 'BG Group — Established 2000',
    },
    trusted: {
      title: 'Trusted By',
    },
    why: {
      badge: 'About Us',
      title: 'BG Group — Your Green Energy Partner',
      desc1: 'BG Group, established in 2000 with HQ in Singapore and Jakarta, is a leading advocate for green energy investment and sustainability. 10% of annual revenue is allocated to R&D.',
      desc2: 'We provide non-electric air conditioning systems (LiBr Absorption Chiller) powered by clean and recyclable energies, using non-polluting refrigerants.',
      quote: 'Helping governments develop economic, energy, and environmental sustainability through innovative energy solutions.',
    },
    services: {
      badge: 'Our Services',
      title: 'Integrated Energy Solutions',
      sub: 'Full spectrum of energy services — from consulting to maintenance.',
      featured: {
        title: 'Installation & Commissioning',
        desc: 'Comprehensive CCHP (Combined Cooling, Heat & Power) solutions — engineering, consulting, design, installation, and commissioning. Handled by certified technicians.',
        cta: 'Learn More',
      },
      secondary: [
        { title: 'Maintenance & Repair', desc: 'Preventive & corrective maintenance programs ensuring optimal performance, reliability, and longevity of your equipment.' },
        { title: 'EMS — Energy Management', desc: 'Advanced energy management systems for monitoring, optimizing, and controlling CCHP equipment performance in real-time.' },
      ],
      allLink: 'All Services',
    },
    cta: {
      badge: 'Get Started',
      title: 'Ready to Save Energy?',
      sub: 'Contact our expert team for a free consultation and find the best energy solution for your business. Backed by YORK official warranty and ISO 9001 certification.',
      button: 'Contact Us',
    },
  },
}
