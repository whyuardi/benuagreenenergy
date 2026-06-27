'use client'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ShieldIcon, AwardIcon, ClockIcon, ArrowRightIcon, ZapIcon, Building2Icon, LeafIcon, BarChartIcon, StarIcon } from '@/components/Icons'
import { LogoSlider } from '@/components/LogoSlider'

/* ─── Scroll Reveal Hook ─── */
function useReveal(threshold = 0.08) {
  const ref = useRef<HTMLDivElement>(null)
  const [v, setV] = useState(false)
  useEffect(() => {
    const el = ref.current; if (!el) return
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setV(true); io.disconnect() } }, { threshold })
      io.observe(el); return () => io.disconnect()
    } else { setV(true) }
  }, [threshold])
  return { ref, v }
}

function R({ children, d = 0, c = '' }: { children: React.ReactNode; d?: number; c?: string }) {
  const { ref, v } = useReveal()
  return (
    <div ref={ref} className={c} style={{
      opacity: v ? 1 : 0, transform: v ? 'none' : 'translateY(48px) blur(8px)',
      filter: v ? 'none' : 'blur(8px)',
      transition: `opacity 1000ms cubic-bezier(0.16,1,0.3,1) ${d}ms, transform 1000ms cubic-bezier(0.16,1,0.3,1) ${d}ms, filter 1000ms cubic-bezier(0.16,1,0.3,1) ${d}ms`,
      willChange: 'opacity, transform',
    }}>{children}</div>
  )
}

export default function HomePage({ params }: { params: { lang: string } }) {
  const lang = params.lang === 'en' ? 'en' : 'id'

  return (
    <div>

      {/* ═══════ HERO — Editorial Dark ═══════ */}
      <section className="section-dark min-h-screen relative overflow-hidden flex items-center">
        {/* Ambient Orbs */}
        <div className="absolute top-[8%] left-[3%] w-[600px] h-[600px] rounded-full opacity-[0.08] blur-3xl" style={{background:'radial-gradient(circle, var(--brand-bright), transparent 70%)', animation:'orb-drift 16s ease-in-out infinite'}} />
        <div className="absolute bottom-[2%] right-[8%] w-[450px] h-[450px] rounded-full opacity-[0.06] blur-3xl" style={{background:'radial-gradient(circle, var(--brand-light), transparent 70%)', animation:'orb-drift 20s ease-in-out infinite 5s'}} />

        {/* Grid + Noise */}
        <div className="absolute inset-0 grid-overlay opacity-[0.25]" />
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,backgroundRepeat:'repeat'}} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-44 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left — Content */}
            <div className="lg:col-span-6 xl:col-span-5">
              <R>
                <span className="eyebrow mb-8 inline-flex">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-bright)] animate-pulse mr-1" />
                  {lang === 'id' ? 'Solusi Energi Terpercaya Sejak 1998' : 'Trusted Energy Solutions Since 1998'}
                </span>
              </R>
              <R d={120}>
                <h1 className="font-outfit text-[2.8rem] sm:text-[4rem] lg:text-[4.8rem] font-bold text-white mb-6 tracking-[-0.03em] leading-[1.02]">
                  {lang === 'id' ? 'Solusi Energi Hijau untuk Industri Masa Depan' : 'Green Energy Solutions for Future Industry'}
                </h1>
              </R>
              <R d={240}>
                <p className="text-white/40 text-lg sm:text-xl max-w-md leading-relaxed mb-10">
                  {lang === 'id' ? 'Mengoptimalkan efisiensi energi industri Anda melalui sistem HVAC, EMS, dan Solar Panel terintegrasi.' : 'Optimizing your industrial energy efficiency through integrated HVAC, EMS, and Solar Panel systems.'}
                </p>
              </R>
              <R d={360}>
                <div className="flex flex-wrap gap-4">
                  <Link href={`/${lang}/contact`} className="btn-primary">
                    {lang === 'id' ? 'Konsultasi Gratis' : 'Free Consultation'}
                    <span className="btn-icon"><ArrowRightIcon size={15} /></span>
                  </Link>
                  <Link href={`/${lang}/portfolio`} className="btn-secondary">
                    {lang === 'id' ? 'Lihat Proyek Kami' : 'See Our Projects'}
                  </Link>
                </div>
              </R>
            </div>

            {/* Right — Double-Bezel Hero Image */}
            <R d={480} c="hidden lg:block lg:col-span-6 xl:col-span-7 lg:pl-8">
              <div className="relative">
                {/* Double Bezel */}
                <div className="rounded-[2.5rem] p-2 bg-white/[0.03] border border-white/[0.08]">
                  <div className="relative aspect-[4/5] rounded-[calc(2.5rem-0.25rem)] overflow-hidden">
                    <Image src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=600&q=80" alt="Solar panels" fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--dark)] via-transparent to-transparent opacity-60" />
                  </div>
                </div>
                {/* Floating Stat */}
                <div className="absolute -bottom-6 -left-6 rounded-2xl bg-white/[0.06] backdrop-blur-2xl border border-white/[0.1] px-6 py-4 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[var(--brand-bright)]/15 flex items-center justify-center">
                    <ZapIcon size={22} className="text-[var(--brand-bright)]" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-xl leading-none">40%</p>
                    <p className="text-white/40 text-[13px] mt-0.5">{lang === 'id' ? 'Penghematan Energi' : 'Energy Savings'}</p>
                  </div>
                </div>
              </div>
            </R>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2.5 text-white/15">
          <span className="text-[9px] tracking-[0.25em] uppercase font-medium">{lang === 'id' ? 'Gulir' : 'Scroll'}</span>
          <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-bounce">
            <rect x="0.5" y="0.5" width="15" height="23" rx="7.5" stroke="currentColor" strokeOpacity="0.3"/>
            <circle cx="8" cy="8" r="2" fill="currentColor" fillOpacity="0.4"/>
          </svg>
        </div>
      </section>

      {/* ═══════ TRUSTED BY — Marquee ═══════ */}
      <section className="py-16 lg:py-20 bg-white border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <R>
            <p className="text-center text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--ink-muted)]/50 mb-10">
              {lang === 'id' ? 'Dipercaya Oleh' : 'Trusted By'}
            </p>
          </R>
          <R d={100}>
            <div className="overflow-hidden">
              <div className="flex w-max gap-12 sm:gap-20 animate-scroll-logo">
                {['GarudaFood','Suntory Garuda','Kalbe Farma','Mayora Indah','Indofood','Unilever Indonesia',
                  'GarudaFood','Suntory Garuda','Kalbe Farma','Mayora Indah','Indofood','Unilever Indonesia',
                  'GarudaFood','Suntory Garuda','Kalbe Farma','Mayora Indah','Indofood','Unilever Indonesia',
                ].map((name, i) => (
                  <span key={i} className="text-lg sm:text-xl font-bold text-[var(--ink-subtle)]/30 hover:text-[var(--brand)]/40 transition-colors duration-500 uppercase tracking-widest whitespace-nowrap">
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </R>
        </div>
      </section>

      {/* ═══════ STATS ═══════ */}
      <section className="section-surface py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-[0.3]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16">
            {[
              { value: '150+', label: lang === 'id' ? 'Klien Industri' : 'Industrial Clients', icon: <Building2Icon size={20} /> },
              { value: '500+', label: lang === 'id' ? 'Proyek Selesai' : 'Projects Completed', icon: <StarIcon size={20} /> },
              { value: '25+', label: lang === 'id' ? 'Tahun Pengalaman' : 'Years Experience', icon: <ClockIcon size={20} /> },
              { value: '40%', label: lang === 'id' ? 'Penghematan Energi' : 'Energy Savings', icon: <ZapIcon size={20} /> },
            ].map((stat, i) => (
              <R key={i} d={i * 80}>
                <div className="text-center group">
                  <div className="inline-flex w-12 h-12 rounded-2xl bg-[var(--brand)]/10 text-[var(--brand)] items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-[var(--brand)]/15 transition-all duration-500">
                    {stat.icon}
                  </div>
                  <p className="font-outfit text-[2.8rem] sm:text-[3.5rem] font-bold text-[var(--brand)] mb-2 tracking-[-0.03em] leading-none">{stat.value}</p>
                  <p className="text-[var(--ink-muted)] text-sm font-medium">{stat.label}</p>
                </div>
              </R>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ WHY BGE — Asymmetric Editorial Split ═══════ */}
      <section className="py-28 lg:py-40 bg-white relative overflow-hidden">
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[var(--border)] to-transparent opacity-40" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
            {/* Sticky Text Panel */}
            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <R>
                <span className="eyebrow mb-6">{lang === 'id' ? 'Mengapa Kami' : 'Why Us'}</span>
                <h2 className="font-outfit text-[2.2rem] sm:text-[3rem] lg:text-[3.5rem] font-bold text-[var(--ink)] mb-6 tracking-[-0.03em] leading-[1.08]">
                  {lang === 'id' ? 'Mengapa BGE?' : 'Why BGE?'}
                </h2>
                <p className="text-[var(--ink-secondary)] text-lg leading-relaxed mb-5">
                  {lang === 'id' ? 'Dengan pengalaman lebih dari 25 tahun, kami memberikan solusi energi yang terbukti menghemat biaya operasional hingga 40%.' : 'With over 25 years of experience, we deliver proven energy solutions that save up to 40% in operational costs.'}
                </p>
                <p className="text-[var(--ink-muted)] leading-relaxed">
                  {lang === 'id' ? 'Kami adalah mitra terpercaya untuk industri-industri besar di Indonesia. Dari audit energi hingga instalasi sistem terintegrasi, BGE hadir untuk membantu Anda mencapai efisiensi maksimal.' : 'We are a trusted partner for major industries in Indonesia. From energy audits to integrated system installations, BGE is here to help you achieve maximum efficiency.'}
                </p>
              </R>
            </div>

            {/* Cards — Double Bezel */}
            <div className="lg:col-span-7 space-y-6">
              {[
                { icon: <Building2Icon size={24} />, title: lang === 'id' ? 'Partner Resmi YORK' : 'Official YORK Partner', desc: lang === 'id' ? 'Dealer resmi dengan garansi pabrik dan teknisi bersertifikat.' : 'Authorized dealer with factory warranty and certified technicians.' },
                { icon: <ShieldIcon size={24} />, title: 'ISO 9001 Certified', desc: lang === 'id' ? 'Sistem manajemen mutu internasional untuk jaminan kualitas.' : 'International quality management system for guaranteed quality.' },
                { icon: <AwardIcon size={24} />, title: lang === 'id' ? 'Garansi 5 Tahun' : '5-Year Warranty', desc: lang === 'id' ? 'Perlindungan jangka panjang untuk setiap instalasi kami.' : 'Long-term protection for every installation we deliver.' },
                { icon: <ClockIcon size={24} />, title: lang === 'id' ? 'Dukungan 24/7' : '24/7 Support', desc: lang === 'id' ? 'Tim teknisi siap membantu kapan saja, di mana saja.' : 'Technical team ready to assist anytime, anywhere.' },
              ].map((item, i) => (
                <R key={i} d={i * 60}>
                  <div className="card-shell group">
                    <div className="card-core p-7 sm:p-8">
                      <div className="flex items-start gap-5">
                        <div className="w-14 h-14 rounded-2xl bg-[var(--brand-pale)] text-[var(--brand)] flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[var(--brand-bright)]/15 transition-all duration-500">
                          {item.icon}
                        </div>
                        <div className="pt-1">
                          <h3 className="font-outfit font-bold text-[var(--ink)] text-base mb-1.5">{item.title}</h3>
                          <p className="text-[var(--ink-muted)] text-sm leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </R>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ SERVICES — Dark Bento Grid ═══════ */}
      <section className="section-dark py-28 lg:py-40 relative overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-[0.15]" />
        <div className="absolute inset-0" style={{background:'radial-gradient(ellipse 800px 500px at 25% 50%, rgba(93,163,131,0.06) 0%, transparent 70%)'}} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <R>
            <span className="eyebrow mb-6">{lang === 'id' ? 'Layanan Kami' : 'Our Services'}</span>
            <h2 className="font-outfit text-[2.2rem] sm:text-[3rem] lg:text-[3.5rem] font-bold text-white mb-4 tracking-[-0.03em] leading-[1.08]">
              {lang === 'id' ? 'Solusi Energi Terintegrasi' : 'Integrated Energy Solutions'}
            </h2>
            <p className="text-white/40 text-lg mb-16 max-w-xl">
              {lang === 'id' ? 'Solusi lengkap untuk efisiensi energi industri Anda.' : 'Complete solutions for your industrial energy efficiency.'}
            </p>
          </R>

          {/* Asymmetric Bento Grid — 3 cards with varying sizes */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 mb-12">
            {[
              { icon: <ZapIcon size={28} />, title: lang === 'id' ? 'Sistem HVAC' : 'HVAC System', desc: lang === 'id' ? 'Sistem pendingin skala industri dengan efisiensi tinggi untuk pabrik dan gedung komersial.' : 'High-efficiency industrial cooling for factories and commercial buildings.' },
              { icon: <BarChartIcon size={28} />, title: lang === 'id' ? 'Manajemen Energi' : 'Energy Management', desc: lang === 'id' ? 'Audit energi, monitoring real-time, dan strategi optimasi untuk mengurangi biaya operasional.' : 'Energy audits, real-time monitoring, and optimization strategies to reduce costs.' },
              { icon: <LeafIcon size={28} />, title: lang === 'id' ? 'Sistem Solar' : 'Solar System', desc: lang === 'id' ? 'Instalasi panel surya industri untuk kemandirian energi dan pengurangan emisi karbon.' : 'Industrial solar panel installation for energy independence and carbon reduction.' },
            ].map((svc, i) => {
              const span = i === 1 ? 'md:col-span-5' : 'md:col-span-3'
              return (
                <R key={i} d={i * 100} c={span}>
                  <Link href={`/${lang}/services`} className="group block h-full">
                    <div className="card-shell-dark group h-full">
                      <div className="card-core-dark p-8 h-full flex flex-col">
                        <div className="w-14 h-14 rounded-2xl bg-[var(--brand-bright)]/12 text-[var(--brand-bright)] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[var(--brand-bright)]/20 transition-all duration-500">
                          {svc.icon}
                        </div>
                        <h3 className="font-outfit text-xl font-bold text-white mb-3">{svc.title}</h3>
                        <p className="text-white/35 text-sm leading-relaxed mb-8 flex-1">{svc.desc}</p>
                        <span className="inline-flex items-center gap-2 text-[var(--brand-bright)] text-sm font-semibold group-hover:gap-3 transition-all duration-300">
                          {lang === 'id' ? 'Selengkapnya' : 'Learn More'}
                          <span className="w-7 h-7 rounded-full bg-[var(--brand-bright)]/10 flex items-center justify-center group-hover:translate-x-1 group-hover:scale-105 transition-all duration-300">
                            <ArrowRightIcon size={13} />
                          </span>
                        </span>
                      </div>
                    </div>
                  </Link>
                </R>
              )
            })}
          </div>

          <R d={300}>
            <div className="text-center">
              <Link href={`/${lang}/services`} className="btn-secondary">
                {lang === 'id' ? 'Semua Layanan' : 'All Services'}
                <span className="btn-icon"><ArrowRightIcon size={15} /></span>
              </Link>
            </div>
          </R>
        </div>
      </section>

      {/* ═══════ CTA — Editorial Callout ═══════ */}
      <section className="py-28 lg:py-40 bg-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{background:'radial-gradient(ellipse 600px 400px at 50% 50%, rgba(74,124,111,0.04) 0%, transparent 70%)'}} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <R>
            <span className="eyebrow mb-6">{lang === 'id' ? 'Siap Memulai?' : 'Ready to Get Started?'}</span>
            <h2 className="font-outfit text-[2.2rem] sm:text-[3rem] lg:text-[3.5rem] font-bold text-[var(--ink)] mb-5 tracking-[-0.03em] leading-[1.08]">
              {lang === 'id' ? 'Siap Menghemat Energi?' : 'Ready to Save Energy?'}
            </h2>
            <p className="text-[var(--ink-muted)] text-lg mb-10 max-w-lg mx-auto">
              {lang === 'id' ? 'Hubungi kami untuk konsultasi gratis dan temukan solusi energi terbaik untuk bisnis Anda.' : 'Contact us for a free consultation and find the best energy solution for your business.'}
            </p>
          </R>
          <R d={120}>
            <Link href={`/${lang}/contact`} className="btn-primary">
              {lang === 'id' ? 'Hubungi Kami' : 'Contact Us'}
              <span className="btn-icon"><ArrowRightIcon size={15} /></span>
            </Link>
          </R>
        </div>
      </section>

    </div>
  )
}
