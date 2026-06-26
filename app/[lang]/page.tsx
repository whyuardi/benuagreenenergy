import { ArrowRightIcon, LeafIcon, ShieldIcon, CheckCircleIcon } from '@/components/Icons'
import Link from 'next/link'
import Image from 'next/image'
import { AnimateIn, StaggerContainer, SectionHeading } from '@/components/AnimateIn'
import { LogoSlider } from '@/components/LogoSlider'

export function generateStaticParams() {
  return [{ lang: 'id' }, { lang: 'en' }]
}

const content = {
  id: {
    badge: 'Energi Berkelanjutan',
    tagline: 'Cooling, Hot Water & Power',
    title: 'Solusi Energi Hijau untuk Industri Masa Depan',
    subtitle: 'Membantu industri di Indonesia mengoptimalkan konsumsi energi melalui sistem HVAC dan Energy Management System kelas dunia.',
    cta: 'Konsultasi Gratis',
    serviceTitle: 'Layanan Kami',
    serviceSub: 'Solusi terintegrasi untuk efisiensi energi dan keberlanjutan operasional Anda.',
    stats: [
      { value: '150+', label: 'Klien Industri' },
      { value: '500+', label: 'Proyek Selesai' },
      { value: '25+', label: 'Tahun Pengalaman' },
      { value: '40%', label: 'Hemat Energi' },
    ],
    partners: ['GarudaFood', 'Suntory Garuda', 'Kalbe Farma', 'Mayora Indah', 'Indofood', 'Unilever Indonesia'],
    services: [
      { title: 'Sistem HVAC & Chiller', desc: 'Sistem pendingin skala industri dengan efisiensi tinggi untuk pabrik, gedung, dan fasilitas komersial.', img: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800' },
      { title: 'Manajemen Energi', desc: 'Audit energi, monitoring real-time, dan strategi optimasi untuk mengurangi biaya operasional.', img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800' },
      { title: 'Solusi Tenaga Surya', desc: 'Instalasi panel surya industri untuk kemandirian energi dan pengurangan emisi karbon.', img: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800' },
    ],
    whyUs: [
      { title: 'Mitra Resmi YORK', desc: 'Dealer resmi dengan garansi pabrik dan teknisi bersertifikat.' },
      { title: 'ISO 9001 Certified', desc: 'Sistem manajemen mutu internasional untuk jaminan kualitas.' },
      { title: 'Garansi 5 Tahun', desc: 'Perlindungan jangka panjang untuk setiap instalasi kami.' },
      { title: '24/7 Support', desc: 'Tim teknisi siap membantu kapan saja, di mana saja.' },
    ],
  },
  en: {
    badge: 'Sustainable Energy',
    tagline: 'Cooling, Hot Water & Power',
    title: 'Green Energy Solutions for Industrial Future',
    subtitle: 'Helping Indonesian industries optimize energy consumption through world-class HVAC and Energy Management Systems.',
    cta: 'Free Consultation',
    serviceTitle: 'Our Services',
    serviceSub: 'Integrated solutions for your industrial energy efficiency and sustainability.',
    stats: [
      { value: '150+', label: 'Industrial Clients' },
      { value: '500+', label: 'Projects Completed' },
      { value: '25+', label: 'Years Experience' },
      { value: '40%', label: 'Energy Savings' },
    ],
    partners: ['GarudaFood', 'Suntory Garuda', 'Kalbe Farma', 'Mayora Indah', 'Indofood', 'Unilever Indonesia'],
    services: [
      { title: 'HVAC & Chiller Systems', desc: 'High-efficiency industrial cooling systems for factories, buildings, and commercial facilities.', img: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800' },
      { title: 'Energy Management', desc: 'Energy audits, real-time monitoring, and optimization strategies to reduce operational costs.', img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800' },
      { title: 'Solar Solutions', desc: 'Industrial solar panel installation for energy independence and carbon emission reduction.', img: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800' },
    ],
    whyUs: [
      { title: 'Official YORK Partner', desc: 'Authorized dealer with factory warranty and certified technicians.' },
      { title: 'ISO 9001 Certified', desc: 'International quality management system for guaranteed quality.' },
      { title: '5-Year Warranty', desc: 'Long-term protection for every installation we deliver.' },
      { title: '24/7 Support', desc: 'Technical team ready to assist anytime, anywhere.' },
    ],
  },
}

export default function HomePage({ params }: { params: { lang: string } }) {
  const t = params.lang === 'en' ? 'en' : 'id'
  const s = content[t as keyof typeof content]

  return (
    <div className="page-enter">

      {/* ========== HERO ========== */}
      <section className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-24 pb-16 sm:pb-20 lg:pb-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Content */}
            <div>
              <AnimateIn delay={100}>
                <span className="eyebrow mb-4 inline-block">{s.badge}</span>
              </AnimateIn>
              <AnimateIn delay={200}>
                <p className="text-sm font-semibold uppercase tracking-widest text-[var(--ink-muted)] mb-4">{s.tagline}</p>
              </AnimateIn>
              <AnimateIn delay={300}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--ink)] leading-[1.1] tracking-tight mb-6">
                  {s.title}
                </h1>
              </AnimateIn>
              <AnimateIn delay={400}>
                <p className="text-lg text-[var(--ink-secondary)] leading-relaxed max-w-xl mb-8">
                  {s.subtitle}
                </p>
              </AnimateIn>
              <AnimateIn delay={500}>
                <div className="flex flex-col sm:flex-row items-start gap-3">
                  <Link href={`/${t}/contact`} className="btn-primary">
                    {s.cta}
                    <ArrowRightIcon size={16} />
                  </Link>
                  <Link href={`/${t}/portfolio`} className="btn-secondary">
                    {t === 'id' ? 'Lihat Proyek Kami' : 'View Our Projects'}
                  </Link>
                </div>
              </AnimateIn>
            </div>

            {/* Right: Image */}
            <AnimateIn delay={400} direction="right">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[var(--surface-dim)]">
                <Image
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200"
                  alt="Modern office building"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ========== STATS ========== */}
      <section className="bg-[var(--surface-alt)] border-y border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
            {s.stats.map((stat, idx) => (
              <div key={idx} className={`text-center ${idx < s.stats.length - 1 ? 'lg:border-r lg:border-[var(--border)]' : ''}`}>
                <p className="text-3xl sm:text-4xl font-bold text-[var(--brand)] tracking-tight">{stat.value}</p>
                <p className="text-sm text-[var(--ink-muted)] mt-1 font-medium">{stat.label}</p>
              </div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ========== WHY US ========== */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <AnimateIn>
                <span className="eyebrow mb-3 inline-block">Mengapa BGE</span>
                <h2 className="text-3xl sm:text-4xl font-bold text-[var(--ink)] tracking-tight mb-4">
                  {t === 'id' ? 'Mitra Terpercaya untuk Efisiensi Energi' : 'Trusted Partner for Energy Efficiency'}
                </h2>
                <p className="text-[var(--ink-secondary)] leading-relaxed max-w-lg">
                  {t === 'id'
                    ? 'Dengan pengalaman lebih dari 25 tahun, kami memberikan solusi energi yang terbukti menghemat biaya operasional hingga 40%.'
                    : 'With over 25 years of experience, we deliver proven energy solutions that save up to 40% in operational costs.'}
                </p>
              </AnimateIn>
            </div>
            <div>
              <StaggerContainer className="grid sm:grid-cols-2 gap-6">
                {s.whyUs.map((item, idx) => (
                  <div key={idx} className="p-5 rounded-xl border border-[var(--border)] hover:border-[var(--border-strong)] transition-colors duration-200">
                    <h3 className="font-semibold text-[var(--ink)] mb-1.5">{item.title}</h3>
                    <p className="text-sm text-[var(--ink-muted)] leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </div>
      </section>

      {/* ========== PARTNERS ========== */}
      <section className="bg-[var(--surface-alt)] border-y border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <AnimateIn>
            <p className="text-center text-sm font-semibold uppercase tracking-widest text-[var(--ink-muted)] mb-8">
              {t === 'id' ? 'Dipercaya Oleh Perusahaan Terkemuka' : 'Trusted by Leading Companies'}
            </p>
          </AnimateIn>
          <AnimateIn delay={100}>
            <LogoSlider partners={s.partners} />
          </AnimateIn>
        </div>
      </section>

      {/* ========== SERVICES ========== */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center mb-12 sm:mb-16">
            <AnimateIn>
              <span className="eyebrow mb-3 inline-block">{t === 'id' ? 'Layanan' : 'Services'}</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--ink)] tracking-tight mb-4">{s.serviceTitle}</h2>
              <p className="text-[var(--ink-secondary)] max-w-2xl mx-auto">{s.serviceSub}</p>
            </AnimateIn>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {s.services.map((service, idx) => (
              <AnimateIn key={idx} delay={100 + idx * 100}>
                <Link href={`/${t}/services/${idx === 0 ? 'installation' : idx === 1 ? 'energy-audit' : 'solar'}`}
                  className="group block rounded-xl overflow-hidden border border-[var(--border)] hover:border-[var(--border-strong)] transition-all duration-300 hover:shadow-lg">
                  <div className="aspect-[16/10] overflow-hidden relative bg-[var(--surface-dim)]">
                    <Image src={service.img} alt={service.title} fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-5 sm:p-6">
                    <h3 className="font-semibold text-[var(--ink)] mb-2 group-hover:text-[var(--brand)] transition-colors duration-200">
                      {service.title}
                    </h3>
                    <p className="text-sm text-[var(--ink-muted)] leading-relaxed mb-4">{service.desc}</p>
                    <span className="text-sm font-semibold text-[var(--brand)] flex items-center gap-1.5 group-hover:gap-2.5 transition-all duration-200">
                      {t === 'id' ? 'Selengkapnya' : 'Learn More'} <ArrowRightIcon size={14} />
                    </span>
                  </div>
                </Link>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA ========== */}
      <section className="bg-[var(--ink)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
          <AnimateIn>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
              {t === 'id' ? 'Siap Menghemat Energi?' : 'Ready to Save Energy?'}
            </h2>
          </AnimateIn>
          <AnimateIn delay={100}>
            <p className="text-white/50 max-w-xl mx-auto mb-8">
              {t === 'id'
                ? 'Diskusikan kebutuhan energi Anda dengan tim ahli kami. Konsultasi gratis tanpa komitmen.'
                : 'Discuss your energy needs with our expert team. Free consultation with no commitment.'}
            </p>
          </AnimateIn>
          <AnimateIn delay={200}>
            <Link href={`/${t}/contact`} className="btn-primary bg-white text-[var(--ink)] hover:bg-white/90">
              {t === 'id' ? 'Hubungi Kami' : 'Contact Us'}
              <ArrowRightIcon size={16} />
            </Link>
          </AnimateIn>
        </div>
      </section>

    </div>
  )
}
