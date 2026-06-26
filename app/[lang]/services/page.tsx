'use client'
import { AnimateIn } from '@/components/AnimateIn'
import { ShieldCheckIcon, BarChartIcon, SettingsIcon, SparklesIcon, SearchIcon, WrenchIcon, HardHatIcon, ArrowRightIcon, HomeIcon, ChevronRightIcon } from '@/components/Icons'
import Link from 'next/link'
import Image from 'next/image'

const servicesData = [
  {
    slug: 'warranty-replacement',
    icon: ShieldCheckIcon,
    nameId: 'Warranty Replacement',
    nameEn: 'Warranty Replacement',
    descId: 'Layanan penggantian garansi untuk semua produk dan sistem yang terdaftar.',
    descEn: 'Warranty replacement service for all registered products and systems.',
  },
  {
    slug: 'energy-audit',
    icon: BarChartIcon,
    nameId: 'Energy Audit',
    nameEn: 'Energy Audit',
    descId: 'Audit energi komprehensif untuk mengidentifikasi potensi penghematan biaya operasional.',
    descEn: 'Comprehensive energy audit to identify operational cost-saving opportunities.',
  },
  {
    slug: 'commissioning',
    icon: SettingsIcon,
    nameId: 'Commissioning',
    nameEn: 'Commissioning',
    descId: 'Pengujian dan verifikasi sistem baru untuk memastikan kinerja sesuai spesifikasi.',
    descEn: 'New system testing and verification to ensure performance meets specifications.',
  },
  {
    slug: 'cleaning-optimization',
    icon: SparklesIcon,
    nameId: 'Cleaning & Optimization',
    nameEn: 'Cleaning & Optimization',
    descId: 'Pembersihan dan optimasi sistem HVAC & Chiller untuk efisiensi puncak.',
    descEn: 'HVAC & Chiller system cleaning and optimization for peak efficiency.',
  },
  {
    slug: 'diagnostics',
    icon: SearchIcon,
    nameId: 'Diagnostics',
    nameEn: 'Diagnostics',
    descId: 'Diagnostik lanjutan menggunakan peralatan modern untuk deteksi dini masalah.',
    descEn: 'Advanced diagnostics using modern equipment for early problem detection.',
  },
  {
    slug: 'repair-maintenance',
    icon: WrenchIcon,
    nameId: 'Repair & Maintenance',
    nameEn: 'Repair & Maintenance',
    descId: 'Perbaikan dan pemeliharaan rutin untuk memperpanjang umur peralatan.',
    descEn: 'Routine repair and maintenance to extend equipment lifespan.',
  },
]

const installationData = {
  icon: HardHatIcon,
  descId: 'Jasa instalasi profesional untuk semua sistem HVAC, Chiller, dan panel surya.',
  descEn: 'Professional installation services for all HVAC, Chiller, and solar panel systems.',
}

function ServiceCard({ service, lang, delay }: { service: typeof servicesData[0]; lang: string; delay: number }) {
  const IconComp = service.icon
  return (
    <AnimateIn delay={delay}>
      <Link href={`/${lang}/services/${service.slug}`} className="group block h-full">
        <div className="card-corporate h-full flex flex-col">
          <div className="w-12 h-12 rounded-xl bg-[var(--brand-pale)] text-[var(--brand)] flex items-center justify-center mb-5 group-hover:bg-[var(--brand)] group-hover:text-white transition-all duration-300">
            <IconComp size={22} />
          </div>
          <h3 className="font-outfit text-lg font-bold text-[var(--ink)] mb-2">
            {lang === 'id' ? service.nameId : service.nameEn}
          </h3>
          <p className="text-[var(--ink-muted)] text-sm leading-relaxed flex-1">
            {lang === 'id' ? service.descId : service.descEn}
          </p>
          <span className="text-[var(--brand)] font-semibold text-sm flex items-center gap-2 mt-5 group-hover:gap-3 transition-all duration-300">
            {lang === 'id' ? 'Pelajari Lebih Lanjut' : 'Learn More'}
            <ArrowRightIcon size={14} />
          </span>
        </div>
      </Link>
    </AnimateIn>
  )
}

export default function ServicesPage({ params }: { params: { lang: string } }) {
  const lang = params.lang === 'en' ? 'en' : 'id'
  const InstallationIcon = installationData.icon

  return (
    <div className="page-enter">

      {/* SECTION 1: HERO */}
      <section className="section-dark grid-overlay relative min-h-[50vh] flex items-end pb-20 pt-28 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(ellipse 600px 400px at 70% 30%, rgba(64,145,108,0.15) 0%, transparent 70%)',
        }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 w-full">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-sm text-white/40 mb-8">
            <Link href={`/${lang}`} className="hover:text-white/70 transition-colors">
              <HomeIcon size={14} />
            </Link>
            <ChevronRightIcon size={12} />
            <span className="text-white/70">{lang === 'id' ? 'Layanan' : 'Services'}</span>
          </nav>

          <AnimateIn>
            <p className="eyebrow text-[var(--brand-bright)] mb-4">
              {lang === 'id' ? 'Layanan Kami' : 'Our Services'}
            </p>
            <h1 className="font-outfit text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              {lang === 'id'
                ? 'Solusi Energi Komprehensif'
                : 'Comprehensive Energy Solutions'}
            </h1>
            <p className="text-white/50 text-lg max-w-2xl">
              {lang === 'id'
                ? 'Dari instalasi hingga pemeliharaan, kami menyediakan layanan lengkap untuk efisiensi energi Anda.'
                : 'From installation to maintenance, we provide complete services for your energy efficiency.'}
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* SECTION 2: FEATURED SERVICE - Installation */}
      <section className="white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
            <AnimateIn className="lg:col-span-3" delay={0}>
              <div className="relative aspect-[16/10] rounded-[var(--radius-card)] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&h=500&q=80"
                  alt="Professional HVAC Installation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
              </div>
            </AnimateIn>

            <AnimateIn className="lg:col-span-2" delay={100}>
              <div>
                <p className="eyebrow mb-4">{lang === 'id' ? 'Layanan Utama' : 'Featured Service'}</p>
                <h2 className="font-outfit text-2xl sm:text-3xl font-bold text-[var(--ink)] mb-4 tracking-tight">
                  {lang === 'id' ? 'Instalasi Profesional' : 'Professional Installation'}
                </h2>
                <p className="text-[var(--ink-secondary)] leading-relaxed mb-6">
                  {lang === 'id' ? installationData.descId : installationData.descEn}
                </p>
                <ul className="space-y-3 mb-8">
                  {(lang === 'id'
                    ? ['Instalasi HVAC & Chiller', 'Panel Surya & Inverter', 'BMS & Monitoring System']
                    : ['HVAC & Chiller Installation', 'Solar Panels & Inverters', 'BMS & Monitoring System']
                  ).map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-[var(--ink-secondary)]">
                      <div className="w-5 h-5 rounded-full bg-[var(--brand-pale)] text-[var(--brand)] flex items-center justify-center shrink-0">
                        <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href={`/${lang}/contact`} className="btn-primary">
                  {lang === 'id' ? 'Konsultasi Gratis' : 'Free Consultation'}
                  <ArrowRightIcon size={16} />
                </Link>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* SECTION 3: SERVICE GRID */}
      <section className="section-surface py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <AnimateIn>
            <p className="eyebrow mb-3">
              {lang === 'id' ? 'Semua Layanan' : 'All Services'}
            </p>
            <h2 className="font-outfit text-2xl sm:text-3xl font-bold text-[var(--ink)] mb-3 tracking-tight">
              {lang === 'id' ? 'Layanan Lainnya' : 'Additional Services'}
            </h2>
            <p className="text-[var(--ink-muted)] text-base mb-12 max-w-2xl">
              {lang === 'id'
                ? 'Kami menyediakan berbagai layanan untuk memastikan sistem energi Anda beroperasi pada kinerja optimal.'
                : 'We provide a range of services to ensure your energy systems operate at peak performance.'}
            </p>
          </AnimateIn>

          {/* Row 1: 2 columns */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-6">
            <div className="md:col-span-3">
              <ServiceCard service={servicesData[0]} lang={lang} delay={0} />
            </div>
            <div className="md:col-span-2">
              <ServiceCard service={servicesData[1]} lang={lang} delay={80} />
            </div>
          </div>

          {/* Row 2: 3 equal columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {servicesData.slice(2, 5).map((service, i) => (
              <ServiceCard key={service.slug} service={service} lang={lang} delay={i * 80} />
            ))}
          </div>

          {/* Repair & Maintenance - full width */}
          <div className="mt-6">
            <AnimateIn delay={100}>
              <Link href={`/${lang}/services/${servicesData[5].slug}`} className="group block">
                <div className="card-corporate flex flex-col sm:flex-row items-start sm:items-center gap-5">
                  <div className="w-12 h-12 rounded-xl bg-[var(--brand)] text-white flex items-center justify-center shrink-0">
                    <WrenchIcon size={22} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-outfit text-lg font-bold text-[var(--ink)] mb-1">
                      {lang === 'id' ? servicesData[5].nameId : servicesData[5].nameEn}
                    </h3>
                    <p className="text-[var(--ink-muted)] text-sm">
                      {lang === 'id' ? servicesData[5].descId : servicesData[5].descEn}
                    </p>
                  </div>
                  <ArrowRightIcon size={18} className="text-[var(--brand)] group-hover:translate-x-1 transition-transform shrink-0" />
                </div>
              </Link>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* SECTION 4: CTA */}
      <section className="section-dark grid-overlay py-16 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(ellipse 500px 400px at 50% 50%, rgba(82,183,136,0.08) 0%, transparent 70%)',
        }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 text-center">
          <AnimateIn>
            <p className="eyebrow text-[var(--brand-bright)] mb-4">
              {lang === 'id' ? 'Siap Memulai?' : 'Ready to Get Started?'}
            </p>
            <h2 className="font-outfit text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
              {lang === 'id'
                ? 'Hubungi Tim Teknis Kami Sekarang'
                : 'Contact Our Technical Team Now'}
            </h2>
            <p className="text-white/50 text-lg mb-8 max-w-xl mx-auto">
              {lang === 'id'
                ? 'Tim kami siap membantu dari konsultasi hingga eksekusi.'
                : 'Our team is ready to help from consultation to execution.'}
            </p>
            <Link href={`/${lang}/contact`} className="btn-primary">
              <span>{lang === 'id' ? 'Hubungi Kami' : 'Contact Us'}</span>
              <ArrowRightIcon size={16} />
            </Link>
          </AnimateIn>
        </div>
      </section>
    </div>
  )
}
