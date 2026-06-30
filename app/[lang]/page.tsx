'use client'
import { useEffect, useRef, useState, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import SkeletonImage from '@/components/SkeletonImage'

/* ─── Inline SVG Icons ─── */
function IconArrowRight({ className = '' }: { className?: string }) {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
}
function IconCheck() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
}

/* ─── Intersection Reveal (multiple directions) ─── */
function Reveal({ children, delay = 0, className = '', direction = 'up' }: {
  children: React.ReactNode; delay?: number; className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale'
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    // Start hidden, reveal on intersection
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); io.disconnect() }
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' })
    io.observe(el)
    // Fallback for SSR/headless
    const fallback = setTimeout(() => { setVisible(true); io.disconnect() }, 2000 + delay)
    return () => { io.disconnect(); clearTimeout(fallback) }
  }, [delay])

  const getTransform = () => {
    switch (direction) {
      case 'up': return 'translateY(32px)'
      case 'down': return 'translateY(-32px)'
      case 'left': return 'translateX(-40px)'
      case 'right': return 'translateX(40px)'
      case 'scale': return 'scale(0.92)'
      default: return 'translateY(32px)'
    }
  }

  return (
    <div ref={ref} className={className} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? 'none' : getTransform(),
      transition: `opacity 700ms cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 700ms cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
    }}>{children}</div>
  )
}

/* ─── Animated Counter ─── */
function AnimCounter({ value, suffix = '', duration = 2000 }: { value: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const animated = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !animated.current) {
        animated.current = true
        const start = performance.now()
        const step = (now: number) => {
          const progress = Math.min((now - start) / duration, 1)
          // Ease out cubic
          const eased = 1 - Math.pow(1 - progress, 3)
          setCount(Math.floor(eased * value))
          if (progress < 1) requestAnimationFrame(step)
          else setCount(value)
        }
        requestAnimationFrame(step)
        io.disconnect()
      }
    }, { threshold: 0.5 })
    io.observe(el)
    return () => io.disconnect()
  }, [value, duration])

  return <span ref={ref}>{count}{suffix}</span>
}

/* ─── Parallax Orbs (scroll-based movement) ─── */
function ParallaxOrb({ className, speed = 0.3, style }: { className: string; speed?: number; style?: React.CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (ref.current) {
            const y = window.scrollY * speed
            ref.current.style.transform = `translateY(${y}px)`
          }
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [speed])

  return <div ref={ref} className={className} style={{ ...style, willChange: 'transform', transition: 'transform 0.1s linear' }} />
}

/* ─── Data ─── */
const stats = [
  { value: 150, suffix: '+', label: 'Klien Industri' },
  { value: 500, suffix: '+', label: 'Proyek Selesai' },
  { value: 25, suffix: '+', label: 'Tahun Pengalaman' },
  { value: 40, suffix: '%', label: 'Penghematan Energi' },
]

const whyFeatures = [
  { title: 'Partner Resmi YORK', desc: 'Dealer resmi dengan garansi pabrik dan teknisi bersertifikat internasional.', icon: '🏆' },
  { title: 'ISO 9001 Certified', desc: 'Sistem manajemen mutu terstandar global untuk jaminan kualitas setiap proyek.', icon: '✓' },
  { title: 'Garansi 5 Tahun', desc: 'Perlindungan jangka panjang untuk setiap instalasi yang kami kerjakan.', icon: '🛡' },
  { title: 'Dukungan 24/7', desc: 'Tim teknisi siaga - kapan pun Anda butuh, kami siap.', icon: '⚡' },
]

export default function HomePage({ params }: { params: { lang: string } }) {
  const lang = params.lang === 'en' ? 'en' : 'id'
  const content = lang === 'en' ? CONTENT.en : CONTENT.id

  return (
    <>
      {/* ════════════════════════════════════════════
           HERO — Split Layout with Background Image
           ════════════════════════════════════════════ */}
      <section className="section-dark relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <SkeletonImage
          src="/images/hero/bg.jpg"
          alt=""
          fill
          priority
          wrapperClass="absolute inset-0"
          imgClass="object-cover"
          sizes="100vw"
          quality={80}
        />
        <div className="hero-image-overlay" />

        {/* Green glow ambiance */}
        <div className="green-glow -top-20 -right-40 opacity-60" />
        <div className="green-glow -bottom-40 -left-40 opacity-30" />

        {/* Grid */}
        <div className="absolute inset-0 grid-pattern opacity-20" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 w-full py-28 sm:py-32 lg:py-36">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left: Headline */}
            <div className="lg:col-span-7">
              <Reveal delay={100}>
                <span className="badge badge-dark mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5fe0a0] animate-pulse" />
                  {content.hero.badge}
                </span>
              </Reveal>

              <Reveal delay={200}>
                <h1 className="font-outfit text-[2.6rem] sm:text-[4rem] lg:text-[5rem] font-bold leading-[1.02] tracking-[-0.03em] text-white mb-5">
                  {content.hero.title.split('\\n').map((line: string, i: number) => (
                    <span key={i}>{line}{i === 0 && <br />}</span>
                  ))}
                </h1>
              </Reveal>

              <Reveal delay={350}>
                <p className="text-white/65 text-base sm:text-lg max-w-xl leading-relaxed mb-10">
                  {content.hero.sub}
                </p>
              </Reveal>

              <Reveal delay={500}>
                <div className="flex flex-wrap gap-3 sm:gap-4">
                  <Link href={`/${lang}/contact`} className="btn-primary text-sm sm:text-[15px] px-7 py-3 sm:px-8 sm:py-3.5 group">
                    {content.hero.cta}
                    <span className="w-7 h-7 rounded-full flex items-center justify-center bg-black/15 group-hover:translate-x-0.5 transition-transform duration-300">
                      <IconArrowRight />
                    </span>
                  </Link>
                  <Link href={`/${lang}/portfolio`} className="btn-outline text-sm sm:text-[15px] px-7 py-3 sm:px-8 sm:py-3.5 hover:bg-white/5 transition-all duration-300">
                    {content.hero.cta2}
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* Right: Solid dark metrics cards */}
            <div className="lg:col-span-5 hidden lg:block">
              <div className="relative">
                <Reveal delay={300} direction="right">
                  <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 sm:p-7 mb-4 max-w-xs ml-auto hover:border-[#3daf7a]/30 transition-all duration-500 group">
                    <p className="font-outfit text-4xl font-bold text-white mb-1">
                      <AnimCounter value={stats[2].value} suffix={stats[2].suffix} />
                    </p>
                    <p className="text-white/60 text-sm">{stats[2].label}</p>
                    <div className="mt-4 w-full h-[2px] bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full w-3/4 bg-[var(--brand-light)] rounded-full group-hover:w-full transition-all duration-700" />
                    </div>
                  </div>
                </Reveal>
                <Reveal delay={450} direction="right">
                  <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 sm:p-7 max-w-xs ml-12 hover:border-[#3daf7a]/30 transition-all duration-500 group">
                    <p className="font-outfit text-4xl font-bold text-white mb-1">
                      <AnimCounter value={stats[3].value} suffix={stats[3].suffix} duration={1500} />
                    </p>
                    <p className="text-white/60 text-sm">{stats[3].label}</p>
                    <div className="mt-4 w-full h-[2px] bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full w-[40%] bg-[var(--accent)] rounded-full group-hover:w-[60%] transition-all duration-700" />
                    </div>
                  </div>
                </Reveal>
                {/* Small badge */}
                <Reveal delay={600} direction="scale">
                  <div className="absolute -bottom-4 -left-4 bg-[#3daf7a]/10 border border-[#3daf7a]/20 p-3 rounded-xl flex items-center gap-2 backdrop-blur-sm">
                    <span className="w-6 h-6 rounded-full bg-[#3daf7a]/30 flex items-center justify-center"><IconCheck /></span>
                    <span className="text-white/70 text-xs font-medium whitespace-nowrap">{content.hero.trustBadge}</span>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/15">
          <span className="text-[7px] tracking-[0.3em] uppercase font-medium">{content.scroll}</span>
          <div className="w-5 h-8 rounded-full border border-white/15 flex items-start justify-center p-1.5">
            <div className="w-1 h-1.5 rounded-full bg-white/40 animate-bounce" />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
           MARQUEE — Trusted By (with edge fades)
           ════════════════════════════════════════════ */}
      <section className="py-12 sm:py-14 bg-white border-b border-[var(--border)] relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <Reveal>
            <p className="text-center text-[9px] font-bold uppercase tracking-[0.3em] text-[var(--ink-subtle)] mb-8">{content.trusted.title}</p>
          </Reveal>
          <Reveal delay={60}>
            <div className="marquee-container">
              <div className="flex w-max animate-marquee items-center">
                {Array(3).fill([
                  { name: 'GarudaFood', img: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://garudafood.com&size=128' },
                  { name: 'Suntory Garuda', img: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://suntory.com&size=128' },
                  { name: 'Kalbe Farma', img: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://kalbe.co.id&size=128' },
                  { name: 'Mayora Indah', img: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://mayora.com&size=128' },
                  { name: 'Indofood', img: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Indofood_logo-id.svg' },
                  { name: 'Unilever Indonesia', img: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://unilever.co.id&size=128' }
                ]).flat().map((partner, i) => (
                  <div key={i} className="flex items-center gap-4 mx-10 sm:mx-16 text-[var(--ink-subtle)]/40 hover:text-[var(--brand)]/80 transition-all duration-400 group cursor-default grayscale hover:grayscale-0">
                    <div className="shrink-0 w-8 h-8 rounded-full overflow-hidden bg-white/10 flex items-center justify-center p-0.5 shadow-sm group-hover:scale-110 group-hover:shadow-md transition-all duration-400">
                      <img src={partner.img} alt={partner.name} className="w-full h-full object-contain" loading="lazy" />
                    </div>
                    <span className="text-[13px] sm:text-[15px] font-bold uppercase tracking-[0.2em] whitespace-nowrap">
                      {partner.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ════════════════════════════════════════════
           STATS — Horizontal Ribbon with Animated Counters
           ════════════════════════════════════════════ */}
      <section className="section-surface py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x-0 md:divide-x divide-[var(--border)] border-y border-[var(--border)]">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 100}>
                <div className="py-8 sm:py-10 px-4 sm:px-6 text-center md:text-left group">
                  <p className="font-outfit text-[2.8rem] sm:text-[3.5rem] font-bold text-[var(--brand)] leading-none tracking-[-0.03em] mb-1.5 group-hover:text-[var(--brand-light)] transition-colors duration-500">
                    <AnimCounter value={s.value} suffix={s.suffix} duration={2000 + i * 300} />
                  </p>
                  <p className="text-[var(--ink-muted)] text-xs sm:text-sm font-medium tracking-wide uppercase">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
           SUSTAINABILITY IMPACT — Green Stats Block
           ════════════════════════════════════════════ */}
      <section className="section-green py-16 sm:py-20 relative overflow-hidden">
        <div className="green-glow -top-40 -right-40 opacity-40" />
        <div className="green-glow -bottom-40 -left-40 opacity-20" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <Reveal direction="left">
              <div>
                <span className="badge badge-dark bg-white/10 border-white/10 text-white/80 mb-5">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                  Dampak Lingkungan
                </span>
                <h2 className="font-outfit text-[2rem] sm:text-[2.8rem] font-bold text-white mb-4 tracking-[-0.02em] leading-[1.08] text-balance">
                  Komitmen Kami pada <span className="text-[var(--brand-bright)]">Keberlanjutan</span>
                </h2>
                <p className="text-white/60 text-base sm:text-lg leading-relaxed max-w-lg mb-6">
                  Setiap proyek yang kami kerjakan berkontribusi langsung pada pengurangan emisi karbon dan efisiensi energi industri di Indonesia.
                </p>
                <Link href={`/${lang}/about`} className="inline-flex items-center gap-2 text-[var(--brand-bright)] text-sm font-semibold hover:gap-3 transition-all duration-300 group">
                  Pelajari Lebih Lanjut
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-0.5 transition-transform duration-300"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </Link>
              </div>
            </Reveal>
            <Reveal direction="right" className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-2xl p-6 border border-white/10 backdrop-blur-sm">
                  <p className="stat-number-light text-3xl sm:text-4xl">112M+</p>
                  <p className="text-white/60 text-xs sm:text-sm mt-1">Pounds CO2 Terhindarkan</p>
                </div>
                <div className="bg-white/10 rounded-2xl p-6 border border-white/10 backdrop-blur-sm">
                  <p className="stat-number-light text-3xl sm:text-4xl">500+</p>
                  <p className="text-white/60 text-xs sm:text-sm mt-1">Proyek Green Energy</p>
                </div>
                <div className="bg-white/10 rounded-2xl p-6 border border-white/10 backdrop-blur-sm">
                  <p className="stat-number-light text-3xl sm:text-4xl">25+</p>
                  <p className="text-white/60 text-xs sm:text-sm mt-1">Tahun Inovasi Hijau</p>
                </div>
                <div className="bg-white/10 rounded-2xl p-6 border border-white/10 backdrop-blur-sm">
                  <p className="stat-number-light text-3xl sm:text-4xl">40%</p>
                  <p className="text-white/60 text-xs sm:text-sm mt-1">Efisiensi Energi Rata-Rata</p>
                </div>
              </div>
            </Reveal>
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
              <Reveal direction="left">
                <span className="badge badge-green mb-5">{content.why.badge}</span>
              </Reveal>
              <Reveal delay={80} direction="left">
                <h2 className="font-outfit text-[2.4rem] sm:text-[3rem] lg:text-[3.2rem] font-bold text-[var(--ink)] tracking-[-0.03em] leading-[1.06] mb-5">
                  {content.why.title}
                </h2>
              </Reveal>
              <Reveal delay={120} direction="left">
                <div className="accent-bar mb-6" />
              </Reveal>
              <Reveal delay={160} direction="left">
                <p className="text-[var(--ink-secondary)] text-base sm:text-lg leading-relaxed mb-3">
                  {content.why.desc1}
                </p>
                <p className="text-[var(--ink-muted)] text-sm sm:text-base leading-relaxed">
                  {content.why.desc2}
                </p>
              </Reveal>

              {/* Pull quote */}
              <Reveal delay={250} direction="left">
                <div className="mt-10 p-5 border-l-2 border-[var(--brand-light)] bg-[var(--brand-pale)]/30 rounded-r-xl">
                  <p className="font-outfit text-sm sm:text-base font-semibold text-[var(--brand-dark)] italic leading-relaxed">
                    &ldquo;{content.why.quote}&rdquo;
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Right: Features as editorial list */}
            <div className="lg:col-span-7 space-y-4">
              {whyFeatures.map((f, i) => (
                <Reveal key={f.title} delay={100 + i * 100} direction="right">
                  <div className="group flex items-start gap-5 p-5 -mx-5 rounded-2xl hover:bg-[var(--brand-pale)]/30 transition-all duration-400 cursor-default">
                    <div className="w-11 h-11 rounded-xl bg-[var(--brand-pale)] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[var(--brand)]/15 group-hover:scale-110 transition-all duration-400">
                      <div className="w-2.5 h-2.5 rounded-full bg-[var(--brand-light)] group-hover:bg-[var(--brand)] transition-colors duration-400" />
                    </div>
                    <div>
                      <h3 className="font-outfit font-bold text-[var(--ink)] text-sm sm:text-base mb-1 group-hover:text-[var(--brand)] transition-colors duration-300">{f.title}</h3>
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
           SERVICES — Staggered 1+2
           ════════════════════════════════════════════ */}
      <section className="section-dark-alt py-20 sm:py-28 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <Reveal>
            <div className="flex items-center gap-4 mb-4">
              <span className="badge badge-dark">{content.services.badge}</span>
              <div className="h-px flex-1 bg-white/5" />
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-outfit text-[2rem] sm:text-[2.8rem] font-bold text-white mb-3 tracking-[-0.02em] leading-[1.08]">
              {content.services.title}
            </h2>
            <p className="text-white/50 text-base sm:text-lg mb-14 max-w-lg">
              {content.services.sub}
            </p>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5">
            {/* Featured: HVAC — spans 2 cols */}
            <Reveal delay={120} className="lg:col-span-2">
              <Link href={`/${lang}/services`} className="group block h-full">
                <div className="relative h-full p-7 sm:p-9 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_8px_40px_rgba(61,175,122,0.12)]"
                  style={{ background: 'linear-gradient(135deg, rgba(26,107,74,0.15), rgba(26,107,74,0.04))', border: '1px solid rgba(255,255,255,0.06)' }}>
                  {/* Decorative gradient blob */}
                  <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#3daf7a]/10 blur-[60px] pointer-events-none group-hover:bg-[#3daf7a]/20 transition-all duration-700" />
                  <div className="relative z-10">
                    <div className="flex items-start gap-5">
                      <div className="w-14 h-14 rounded-xl bg-[#3daf7a]/15 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#3daf7a]/25 group-hover:rotate-3 transition-all duration-500">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#5fe0a0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                      </div>
                      <div className="pt-1">
                        <h3 className="font-outfit text-xl sm:text-2xl font-bold text-white mb-2">{content.services.featured.title}</h3>
                        <p className="text-white/55 text-sm sm:text-base leading-relaxed max-w-lg">{content.services.featured.desc}</p>
                      </div>
                    </div>
                    <div className="mt-6 flex items-center gap-2 text-[#5fe0a0] text-xs font-semibold group-hover:gap-3 transition-all duration-300">
                      {content.services.featured.cta}
                      <span className="w-5 h-5 rounded-full bg-[#5fe0a0]/10 flex items-center justify-center group-hover:translate-x-1 group-hover:bg-[#5fe0a0]/20 transition-all duration-300">
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
                <Reveal key={svc.title} delay={200 + i * 100} className="flex-1" direction={i === 0 ? 'right' : 'right'}>
                  <Link href={`/${lang}/services`} className="group block h-full">
                    <div className="h-full p-6 sm:p-7 rounded-2xl transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_4px_24px_rgba(61,175,122,0.08)]"
                      style={{ border: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.02)' }}>
                      <div className="w-10 h-10 rounded-lg bg-[#3daf7a]/12 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#3daf7a]/20 transition-all duration-500">
                        {i === 0
                          ? <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5fe0a0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" x2="12" y1="20" y2="10"/><line x1="18" x2="18" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="16"/></svg>
                          : <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5fe0a0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.9C15.5 4.9 17 3.5 19 2c1 2 2 4.5 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>
                        }
                      </div>
                      <h3 className="font-outfit font-bold text-white text-base sm:text-lg mb-2 group-hover:text-[#5fe0a0] transition-colors duration-300">{svc.title}</h3>
                      <p className="text-white/50 text-xs sm:text-sm leading-relaxed">{svc.desc}</p>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Bottom CTA link */}
          <Reveal delay={400}>
            <div className="mt-10 text-center">
              <Link href={`/${lang}/services`} className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold btn-outline group">
                {content.services.allLink}
                <span className="group-hover:translate-x-1 transition-transform duration-300"><IconArrowRight /></span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative py-24 sm:py-32 overflow-hidden bg-[var(--dark)] border-t border-white/5">
        {/* Pattern */}
        <div className="absolute inset-0 grid-pattern opacity-10" />

        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <Reveal>
            <span className="badge badge-warm mb-6">{content.cta.badge}</span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-outfit text-[2.4rem] sm:text-[3.2rem] lg:text-[3.8rem] font-bold text-white tracking-[-0.03em] leading-[1.06] mb-4">
              {content.cta.title}
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-white/65 text-base sm:text-lg mb-10 max-w-md mx-auto">
              {content.cta.sub}
            </p>
          </Reveal>
          <Reveal delay={300}>
            <Link href={`/${lang}/contact`} className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl text-[15px] font-semibold transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98] group bg-[var(--brand)] hover:bg-[var(--brand-dark)] text-white border border-white/10 shadow-md">
              {content.cta.button}
              <span className="w-8 h-8 rounded-full flex items-center justify-center bg-black/15 group-hover:translate-x-0.5 transition-transform duration-300">
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
      title: 'Menghubungkan Masa Depan\\nEnergi Hijau',
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
