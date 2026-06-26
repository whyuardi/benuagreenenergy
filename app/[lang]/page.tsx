'use client'
import Link from 'next/link'
import Image from 'next/image'
import { ShieldIcon, AwardIcon, ClockIcon, ArrowRightIcon, ZapIcon, Building2Icon, LeafIcon, BarChartIcon, StarIcon } from '@/components/Icons'
import { LogoSlider } from '@/components/LogoSlider'

export default function HomePage({ params }: { params: { lang: string } }) {
  const lang = params.lang === 'en' ? 'en' : 'id'
  const partners = ['GarudaFood', 'Suntory Garuda', 'Kalbe Farma', 'Mayora Indah', 'Indofood', 'Unilever Indonesia']

  return (
    <div className="page-enter">

      {/* ═══════ HERO ═══════ */}
      <section className="section-dark min-h-screen relative overflow-hidden flex items-center">
        <div className="absolute inset-0 grid-overlay opacity-40" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="eyebrow mb-4">{lang === 'id' ? 'Solusi Energi Terpercaya Sejak 1998' : 'Trusted Energy Solutions Since 1998'}</p>
              <h1 className="font-outfit text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.05]">
                {lang === 'id' ? 'Solusi Energi Hijau untuk Industri Masa Depan' : 'Green Energy Solutions for Future Industry'}
              </h1>
              <p className="text-white/50 text-lg mb-10 max-w-lg leading-relaxed">
                {lang === 'id' ? 'Mengoptimalkan efisiensi energi industri Anda melalui sistem HVAC, EMS, dan Solar Panel terintegrasi.' : 'Optimizing your industrial energy efficiency through integrated HVAC, EMS, and Solar Panel systems.'}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href={`/${lang}/contact`} className="btn-primary">
                  {lang === 'id' ? 'Konsultasi Gratis' : 'Free Consultation'}
                  <ArrowRightIcon size={16} />
                </Link>
                <Link href={`/${lang}/portfolio`} className="btn-secondary">
                  {lang === 'id' ? 'Lihat Proyek Kami' : 'See Our Projects'}
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative aspect-square max-w-md ml-auto">
                <div className="absolute inset-0 rounded-3xl overflow-hidden border border-white/10">
                  <Image src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=600&q=80" alt="Solar panels" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--dark)] via-transparent to-transparent opacity-60" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white/10 backdrop-blur-xl border border-white/10 px-5 py-3 rounded-2xl flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[var(--brand-bright)]/20 flex items-center justify-center">
                    <ZapIcon size={20} className="text-[var(--brand-bright)]" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">40%</p>
                    <p className="text-white/40 text-xs">{lang === 'id' ? 'Penghematan Energi' : 'Energy Savings'}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
          <span className="text-xs tracking-widest uppercase">{lang === 'id' ? 'Gulir' : 'Scroll'}</span>
          <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center pt-1.5">
            <div className="w-1 h-2 rounded-full bg-white/40 animate-bounce" />
          </div>
        </div>
      </section>

      {/* ═══════ TRUSTED BY ═══════ */}
      <section className="py-12 bg-white border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center eyebrow text-[var(--ink-muted)] mb-8">
            {lang === 'id' ? 'Dipercaya Oleh' : 'Trusted By'}
          </p>
          <div className="overflow-hidden">
            <LogoSlider partners={partners} />
          </div>
        </div>
      </section>

      {/* ═══════ STATS ═══════ */}
      <section className="section-surface py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: '150+', label: lang === 'id' ? 'Klien Industri' : 'Industrial Clients', icon: <Building2Icon size={18} /> },
              { value: '500+', label: lang === 'id' ? 'Proyek Selesai' : 'Projects Completed', icon: <StarIcon size={18} /> },
              { value: '25+', label: lang === 'id' ? 'Tahun Pengalaman' : 'Years Experience', icon: <ClockIcon size={18} /> },
              { value: '40%', label: lang === 'id' ? 'Penghematan Energi' : 'Energy Savings', icon: <ZapIcon size={18} /> },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="inline-flex w-10 h-10 rounded-xl bg-[var(--brand)]/5 text-[var(--brand)] items-center justify-center mb-4">
                  {stat.icon}
                </div>
                <p className="font-outfit text-4xl sm:text-5xl font-bold text-[var(--brand)] mb-2 tracking-tight">{stat.value}</p>
                <p className="text-[var(--ink-muted)] text-sm font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ WHY BGE ═══════ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="max-w-lg">
              <p className="eyebrow mb-4">{lang === 'id' ? 'Mengapa Kami' : 'Why Us'}</p>
              <h2 className="font-outfit text-3xl sm:text-4xl font-bold text-[var(--ink)] mb-6 tracking-tight">
                {lang === 'id' ? 'Mengapa BGE?' : 'Why BGE?'}
              </h2>
              <p className="text-[var(--ink-secondary)] text-lg leading-relaxed mb-4">
                {lang === 'id' ? 'Dengan pengalaman lebih dari 25 tahun, kami memberikan solusi energi yang terbukti menghemat biaya operasional hingga 40%.' : 'With over 25 years of experience, we deliver proven energy solutions that save up to 40% in operational costs.'}
              </p>
              <p className="text-[var(--ink-muted)] leading-relaxed">
                {lang === 'id' ? 'Kami adalah mitra terpercaya untuk industri-industri besar di Indonesia.' : 'We are a trusted partner for major industries in Indonesia.'}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                { icon: <Building2Icon size={22} />, title: lang === 'id' ? 'Partner Resmi YORK' : 'Official YORK Partner', desc: lang === 'id' ? 'Dealer resmi dengan garansi pabrik dan teknisi bersertifikat.' : 'Authorized dealer with factory warranty and certified technicians.' },
                { icon: <ShieldIcon size={22} />, title: 'ISO 9001 Certified', desc: lang === 'id' ? 'Sistem manajemen mutu internasional untuk jaminan kualitas.' : 'International quality management system for guaranteed quality.' },
                { icon: <AwardIcon size={22} />, title: lang === 'id' ? 'Garansi 5 Tahun' : '5-Year Warranty', desc: lang === 'id' ? 'Perlindungan jangka panjang untuk setiap instalasi kami.' : 'Long-term protection for every installation we deliver.' },
                { icon: <ClockIcon size={22} />, title: lang === 'id' ? 'Dukungan 24/7' : '24/7 Support', desc: lang === 'id' ? 'Tim teknisi siap membantu kapan saja, di mana saja.' : 'Technical team ready to assist anytime, anywhere.' },
              ].map((item, i) => (
                <div key={i} className="card-corporate h-full">
                  <div className="w-11 h-11 rounded-xl bg-[var(--brand-pale)] text-[var(--brand)] flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-outfit font-bold text-[var(--ink)] mb-2 text-[15px]">{item.title}</h3>
                  <p className="text-[var(--ink-muted)] text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ SERVICES ═══════ */}
      <section className="section-dark py-24 relative overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="eyebrow text-[var(--brand-bright)] mb-4">{lang === 'id' ? 'Layanan Kami' : 'Our Services'}</p>
          <h2 className="font-outfit text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
            {lang === 'id' ? 'Solusi Energi Terintegrasi' : 'Integrated Energy Solutions'}
          </h2>
          <p className="text-white/50 text-lg mb-14 max-w-xl">
            {lang === 'id' ? 'Solusi lengkap untuk efisiensi energi industri Anda.' : 'Complete solutions for your industrial energy efficiency.'}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              { icon: <ZapIcon size={26} />, title: lang === 'id' ? 'Sistem HVAC' : 'HVAC System', desc: lang === 'id' ? 'Sistem pendingin skala industri dengan efisiensi tinggi untuk pabrik dan gedung komersial.' : 'High-efficiency industrial cooling systems for factories and commercial buildings.' },
              { icon: <BarChartIcon size={26} />, title: lang === 'id' ? 'Manajemen Energi' : 'Energy Management', desc: lang === 'id' ? 'Audit energi, monitoring real-time, dan strategi optimasi untuk mengurangi biaya operasional.' : 'Energy audits, real-time monitoring, and optimization strategies to reduce costs.' },
              { icon: <LeafIcon size={26} />, title: lang === 'id' ? 'Sistem Solar' : 'Solar System', desc: lang === 'id' ? 'Instalasi panel surya industri untuk kemandirian energi dan pengurangan emisi karbon.' : 'Industrial solar panel installation for energy independence and carbon reduction.' },
            ].map((svc, i) => (
              <Link key={i} href={`/${lang}/services`} className="group block">
                <div className="card-glass h-full">
                  <div className="w-12 h-12 rounded-xl bg-[var(--brand-bright)]/15 text-[var(--brand-bright)] flex items-center justify-center mb-5">
                    {svc.icon}
                  </div>
                  <h3 className="font-outfit text-lg font-bold text-white mb-3">{svc.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed mb-6">{svc.desc}</p>
                  <span className="text-[var(--brand-bright)] text-sm font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                    {lang === 'id' ? 'Selengkapnya' : 'Learn More'}
                    <ArrowRightIcon size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link href={`/${lang}/services`} className="btn-secondary">
              {lang === 'id' ? 'Semua Layanan' : 'All Services'}
              <ArrowRightIcon size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════ CTA ═══════ */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="eyebrow mb-4">{lang === 'id' ? 'Siap Memulai?' : 'Ready to Get Started?'}</p>
          <h2 className="font-outfit text-3xl sm:text-4xl font-bold text-[var(--ink)] mb-4 tracking-tight">
            {lang === 'id' ? 'Siap Menghemat Energi?' : 'Ready to Save Energy?'}
          </h2>
          <p className="text-[var(--ink-muted)] text-lg mb-8 max-w-xl mx-auto">
            {lang === 'id' ? 'Hubungi kami untuk konsultasi gratis dan temukan solusi energi terbaik untuk bisnis Anda.' : 'Contact us for a free consultation and find the best energy solution for your business.'}
          </p>
          <Link href={`/${lang}/contact`} className="btn-primary">
            {lang === 'id' ? 'Hubungi Kami' : 'Contact Us'}
            <ArrowRightIcon size={16} />
          </Link>
        </div>
      </section>

    </div>
  )
}
