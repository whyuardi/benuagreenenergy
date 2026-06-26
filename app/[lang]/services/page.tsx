'use client'
import { ShieldCheckIcon, BarChartIcon, SettingsIcon, SparklesIcon, SearchIcon, WrenchIcon, HardHatIcon, ArrowRightIcon } from '@/components/Icons'
import Link from 'next/link'
import { AnimateIn } from '@/components/AnimateIn'
import Breadcrumb from '@/components/Breadcrumb'

const services = [
  { slug: 'warranty-replacement', icon: ShieldCheckIcon },
  { slug: 'energy-audit', icon: BarChartIcon },
  { slug: 'commissioning', icon: SettingsIcon },
  { slug: 'cleaning-optimization', icon: SparklesIcon },
  { slug: 'diagnostics', icon: SearchIcon },
  { slug: 'repair-maintenance', icon: WrenchIcon },
  { slug: 'installation', icon: HardHatIcon },
]

const content: Record<string, any> = {
  id: {
    title: 'Layanan Kami',
    subtitle: 'Solusi menyeluruh dari instalasi hingga pemeliharaan untuk efisiensi energi maksimal.',
    list: [
      { name: 'Warranty Replacement', desc: 'Layanan penggantian garansi untuk semua produk dan sistem yang terdaftar.', highlight: false },
      { name: 'Energy Audit', desc: 'Audit energi komprehensif untuk mengidentifikasi potensi penghematan biaya operasional.', highlight: false },
      { name: 'Commissioning', desc: 'Pengujian dan verifikasi sistem baru untuk memastikan kinerja sesuai spesifikasi.', highlight: false },
      { name: 'Cleaning & Optimization', desc: 'Pembersihan dan optimasi sistem HVAC & Chiller untuk efisiensi puncak.', highlight: false },
      { name: 'Diagnostics', desc: 'Diagnostik lanjutan menggunakan peralatan modern untuk deteksi dini masalah.', highlight: false },
      { name: 'Repair & Maintenance', desc: 'Perbaikan dan pemeliharaan rutin untuk memperpanjang umur peralatan.', highlight: false },
      { name: 'Installation', desc: 'Jasa instalasi profesional untuk semua sistem HVAC, Chiller, dan panel surya.', highlight: true },
    ],
    cta: 'Detail Layanan'
  },
  en: {
    title: 'Our Services',
    subtitle: 'Comprehensive solutions from installation to maintenance for maximum energy efficiency.',
    list: [
      { name: 'Warranty Replacement', desc: 'Warranty replacement service for all registered products and systems.', highlight: false },
      { name: 'Energy Audit', desc: 'Comprehensive energy audit to identify operational cost-saving opportunities.', highlight: false },
      { name: 'Commissioning', desc: 'New system testing and verification to ensure performance meets specifications.', highlight: false },
      { name: 'Cleaning & Optimization', desc: 'HVAC & Chiller system cleaning and optimization for peak efficiency.', highlight: false },
      { name: 'Diagnostics', desc: 'Advanced diagnostics using modern equipment for early problem detection.', highlight: false },
      { name: 'Repair & Maintenance', desc: 'Routine repair and maintenance to extend equipment lifespan.', highlight: false },
      { name: 'Installation', desc: 'Professional installation services for all HVAC, Chiller, and solar panel systems.', highlight: true },
    ],
    cta: 'View Details'
  }
}

const icons = [ShieldCheckIcon, BarChartIcon, SettingsIcon, SparklesIcon, SearchIcon, WrenchIcon, HardHatIcon]

export default function ServicesPage({ params }: { params: { lang: string } }) {
  const lang = params.lang === 'en' ? 'en' : 'id'
  const t = content[lang]

  return (
    <div className="page-enter">
      {/* Hero Banner */}
      <section className="relative min-h-[50vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(145deg, #0a1628 0%, #0D1B2A 25%, #132637 50%, #1a3348 75%, #0D1B2A 100%)',
          }} />
          <div className="absolute inset-0 opacity-15 hero-zoom" style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=2000)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }} />
          <div className="absolute inset-0 grid-pattern opacity-40" />
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(180deg, rgba(10,22,40,0.3) 0%, rgba(13,27,42,0.6) 40%, rgba(13,27,42,0.85) 70%, rgba(13,27,42,1) 100%)',
          }} />
          {/* Ambient glow orbs */}
          <div className="absolute inset-0 pointer-events-none" style={{
            background: 'radial-gradient(ellipse 600px 400px at 20% 30%, rgba(45,90,39,0.12) 0%, transparent 70%), radial-gradient(ellipse 500px 500px at 80% 60%, rgba(26,55,122,0.08) 0%, transparent 60%)',
          }} />
          <div className="absolute top-1/4 right-[15%] w-72 h-72 rounded-full opacity-[0.04] subtle-float pointer-events-none"
            style={{ background: 'radial-gradient(circle, #4CAF50 0%, transparent 70%)' }} />
          <div className="absolute bottom-1/3 left-[10%] w-48 h-48 rounded-full opacity-[0.03] subtle-float pointer-events-none"
            style={{ background: 'radial-gradient(circle, #81C784 0%, transparent 70%)', animationDelay: '2s' }} />
          <div className="absolute inset-0 noise-texture opacity-50 pointer-events-none mix-blend-overlay" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 w-full pb-24 md:pb-32">
          <div className="max-w-3xl">
            <Breadcrumb items={[{ label: lang === 'id' ? 'Layanan' : 'Services' }]} lang={lang} />
            <AnimateIn>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white mb-6 mt-8">{t.title}</h1>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 max-w-2xl">{t.subtitle}</p>
            </AnimateIn>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 md:h-48 z-10 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, rgba(13,27,42,0.85) 0%, rgba(13,27,42,0.5) 30%, rgba(253,251,247,0.3) 60%, #FDFBF7 100%)',
          }}
        />
      </section>

      {/* Services Grid - Bento Layout */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 px-6 max-w-7xl mx-auto bg-[#FDFBF7] relative">
        <div className="absolute inset-0 noise-texture opacity-50 pointer-events-none mix-blend-overlay" />

        {/* Featured: Installation - full-width hero card */}
        <div className="max-w-5xl mx-auto mb-12">
          <AnimateIn delay={0.1}>
            <Link href={`/${lang}/services/installation`}
              className="group relative block rounded-3xl overflow-hidden border border-[#1A252F]/5 shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-[#2D5A27]/90 to-[#1A252F]/95 z-10" />
              {/* Shimmer overlay on hover */}
              <div className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{
                  background: 'linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.06) 40%, rgba(255,255,255,0.12) 50%, rgba(255,255,255,0.06) 60%, transparent 80%)',
                  animation: 'shimmer 2s ease-in-out infinite',
                }} />
              <div className="absolute inset-0 z-10"><img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200" alt="Installation" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" /></div>
              <div className="relative z-30 p-6 sm:p-10 md:p-16 flex flex-col justify-end min-h-[250px] sm:min-h-[320px] lg:min-h-[400px]">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 text-white text-xs font-bold uppercase tracking-wider mb-4 w-fit backdrop-blur-sm border border-white/10">
                  <HardHatIcon size={12} /> {lang === 'id' ? 'Layanan Unggulan' : 'Featured Service'}
                </div>
                <h3 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-4">Installation</h3>
                <p className="text-white/70 text-lg mb-6 max-w-2xl">{t.list[6].desc}</p>
                <span className="text-white font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">{t.cta} <ArrowRightIcon size={16} /></span>
              </div>
            </Link>
          </AnimateIn>
        </div>

        <div className="section-divider" />

        {/* Regular service cards - 3 cols with glassmorphism */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.list.slice(0, 6).map((s: any, i: number) => {
              const Icon = icons[i]
              return (
                <AnimateIn key={i} delay={0.1 + i * 0.05}>
                  <Link href={`/${lang}/services/${services[i].slug}`}
                    className="group block bg-white/70 backdrop-blur-xl p-5 sm:p-6 md:p-8 rounded-2xl border border-white/20 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 h-full hover-glow">
                    <div className="w-12 h-12 bg-[#2D5A27]/10 text-[#2D5A27] rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#2D5A27] group-hover:text-white transition-all duration-300">
                      <Icon size={24} />
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-[#1A252F]">{s.name}</h3>
                    <p className="text-[#2C3E50]/70 text-sm leading-relaxed mb-5">{s.desc}</p>
                    <span className="text-[#2D5A27] font-semibold flex items-center gap-2 text-sm group-hover:gap-3 transition-all">
                      {t.cta} <ArrowRightIcon size={14} />
                    </span>
                  </Link>
                </AnimateIn>
              )
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 px-6 bg-[#0D1B2A] relative overflow-hidden">
        <div className="absolute inset-0 noise-texture opacity-50 pointer-events-none mix-blend-overlay" />
        {/* Ambient orbs in CTA */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(ellipse 400px 300px at 30% 50%, rgba(45,90,39,0.08) 0%, transparent 70%)',
        }} />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2D5A27]/50 to-transparent" />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-6">{lang === 'id' ? 'Butuh Solusi Layanan?' : 'Need a Service Solution?'}</h2>
          <p className="text-white/50 text-lg mb-8">{lang === 'id' ? 'Tim teknis kami siap membantu dari konsultasi hingga eksekusi.' : 'Our technical team is ready to help from consultation to execution.'}</p>
          <Link href={`/${lang}/contact`} className="bg-white text-[#1A252F] px-8 sm:px-10 py-3 sm:py-4 rounded-full text-sm sm:text-base font-bold hover:bg-[#2D5A27] hover:text-white transition-all inline-block shadow-2xl">{lang === 'id' ? 'Hubungi Kami' : 'Contact Us'}</Link>
        </div>
      </section>
    </div>
  )
}
