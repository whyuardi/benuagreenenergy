'use client'
import Link from 'next/link'
import Image from 'next/image'
import { AnimateIn } from '@/components/AnimateIn'
import Breadcrumb from '@/components/Breadcrumb'
import {
  AwardIcon,
  TargetIcon,
  EyeIcon,
  BarChartIcon,
  ThermometerIcon,
  ShieldIcon,
  UsersIcon,
  LeafIcon,
  ShieldCheckIcon,
  SparklesIcon,
  ArrowRightIcon,
} from '@/components/Icons'

export default function AboutPage({ params }: { params: { lang: string } }) {
  const lang = params.lang === 'en' ? 'en' : 'id'

  const t = lang === 'id' ? {
    title: 'Tentang Kami',
    subtitle: 'Mitra strategis Anda dalam transisi energi hijau di Indonesia dan Asia Tenggara.',
    historyTitle: 'Perjalanan Kami',
    historyLabel: 'Sejak 2000',
    history_1: 'BGE Group, didirikan pada tahun 2000 dengan kantor pusat di Singapura dan Jakarta, adalah pelopor investasi energi hijau dan keberlanjutan. PT. Benua Green Energy hadir sebagai bagian dari grup ini untuk melayani kebutuhan industri Indonesia dalam sistem HVAC, manajemen energi, dan solusi energi terbarukan.',
    history_2: 'Dengan pengalaman lebih dari 25 tahun, kami berkomitmen untuk terus berinovasi dan mengalokasikan 10% dari pendapatan penjualan tahunan untuk Research & Development. Kami menghadirkan sistem pendingin non-listrik (LiBr Absorption Chiller) dan refrigerant rendah GWP yang ramah lingkungan.',
    historyStat1Num: '2000',
    historyStat1Label: 'Tahun Berdiri',
    historyStat2Num: '2',
    historyStat2Label: 'Kantor Regional',
    historyStat3Num: '500+',
    historyStat3Label: 'Proyek Selesai',
    visionTitle: 'Visi',
    missionTitle: 'Misi',
    vision: 'Menjadi mitra strategis utama bagi industri dalam transisi energi hijau di Asia Tenggara.',
    mission: 'Menyediakan solusi HVAC dan Energy Management System yang efisien, andal, dan terjangkau untuk skala industri besar.',
    certsTitle: 'Sertifikasi & Keanggotaan',
    certsSubtitle: 'Standar internasional yang kami pertahankan untuk menjamin kualitas layanan.',
    exp: '25+ Tahun',
    expLabel: 'Pengalaman',
    expDesc: 'Telah dipercaya oleh berbagai sektor industri di seluruh Indonesia sejak tahun 2000.',
    rnd: '10%',
    rndLabel: 'Investasi R&D',
    rndDesc: 'Komitmen kami terhadap inovasi teknologi energi berkelanjutan.',
    engineers: '50+',
    engineersLabel: 'Insinyur Ahli',
    engineersDesc: 'Tim teknis profesional yang siap memberikan solusi terbaik.',
    certs: [
      { name: 'ISO 9001:2015', desc: 'Sistem Manajemen Mutu untuk layanan HVAC & energi' },
      { name: 'Mitra Resmi YORK', desc: 'Authorized distributor & service center untuk produk YORK' },
      { name: 'Anggota ASHRAE', desc: 'American Society of Heating, Refrigerating and Air-Conditioning Engineers' },
      { name: 'IUJASMI', desc: 'Ikatan Ahli Utama Jasa & Sistem Mekanikal Indonesia' },
    ],
  } : {
    title: 'About Us',
    subtitle: 'Your strategic partner in the green energy transition across Indonesia and Southeast Asia.',
    historyTitle: 'Our Journey',
    historyLabel: 'Since 2000',
    history_1: 'BGE Group, established in 2000 with headquarters in Singapore and Jakarta, is a leading advocate for green energy investment and sustainability. PT. Benua Green Energy was established as part of this group to serve Indonesian industries in HVAC systems, energy management, and renewable energy solutions.',
    history_2: 'With over 25 years of experience, we are committed to continuous innovation, allocating 10% of annual sales revenue to Research & Development. We proudly present non-electric cooling systems (LiBr Absorption Chiller) and low-GWP refrigerants that are environmentally friendly.',
    historyStat1Num: '2000',
    historyStat1Label: 'Founded',
    historyStat2Num: '2',
    historyStat2Label: 'Regional Offices',
    historyStat3Num: '500+',
    historyStat3Label: 'Projects Completed',
    visionTitle: 'Vision',
    missionTitle: 'Mission',
    vision: 'To be the primary strategic partner for industries in the green energy transition across Southeast Asia.',
    mission: 'Providing efficient, reliable, and affordable HVAC and Energy Management System solutions for large-scale industrial needs.',
    certsTitle: 'Certifications & Memberships',
    certsSubtitle: 'International standards we uphold to guarantee service quality.',
    exp: '25+ Years',
    expLabel: 'Experience',
    expDesc: 'Trusted by various industrial sectors across Indonesia since 2000.',
    rnd: '10%',
    rndLabel: 'R&D Investment',
    rndDesc: 'Our commitment to sustainable energy technology innovation.',
    engineers: '50+',
    engineersLabel: 'Expert Engineers',
    engineersDesc: 'Professional technical team ready to deliver the best solutions.',
    certs: [
      { name: 'ISO 9001:2015', desc: 'Quality Management System for HVAC & energy services' },
      { name: 'Official YORK Partner', desc: 'Authorized distributor & service center for YORK products' },
      { name: 'ASHRAE Member', desc: 'American Society of Heating, Refrigerating and Air-Conditioning Engineers' },
      { name: 'GBCI Member', desc: 'Green Building Council Indonesia member' },
    ],
  }

  return (
    <div>
      {/* ============================================
          HERO SECTION
          ============================================ */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={{
            background: 'var(--dark)',
          }} />
          <div className="absolute inset-0 grid-overlay opacity-20" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 w-full pt-28 pb-20 md:pt-32 md:pb-28">
          <Breadcrumb items={[{ label: t.title }]} lang={lang} />
          <div className="max-w-3xl mt-6">
            <AnimateIn>
              <p className="eyebrow mb-4">{lang === 'id' ? 'Profil Perusahaan' : 'Company Profile'}</p>
            </AnimateIn>
            <AnimateIn delay={100}>
              <h1 className="font-outfit text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-[1.08]">
                {t.title}
              </h1>
            </AnimateIn>
            <AnimateIn delay={200}>
              <p className="text-base sm:text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed">
                {t.subtitle}
              </p>
            </AnimateIn>
          </div>
        </div>

        {/* Bottom border separator */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10 z-10" />
      </section>

      {/* ============================================
          HISTORY SECTION - Asymmetric 2-col
          ============================================ */}
      <section className="bg-[var(--surface)] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left: Story text (7 cols) */}
            <div className="lg:col-span-7">
              <AnimateIn>
                <p className="eyebrow mb-4">{t.historyLabel}</p>
              </AnimateIn>
              <AnimateIn delay={100}>
                <h2 className="font-outfit text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--ink)] mb-8 tracking-tight">
                  {t.historyTitle}
                </h2>
              </AnimateIn>
              <div className="space-y-5">
                <AnimateIn delay={150}>
                  <p className="text-[var(--ink-secondary)] leading-relaxed text-base sm:text-lg">
                    {t.history_1}
                  </p>
                </AnimateIn>
                <AnimateIn delay={200}>
                  <p className="text-[var(--ink-secondary)] leading-relaxed text-base sm:text-lg">
                    {t.history_2}
                  </p>
                </AnimateIn>
              </div>
            </div>

            {/* Right: Stat cards (5 cols) */}
            <div className="lg:col-span-5 space-y-5">
              {[
                { num: t.historyStat1Num, label: t.historyStat1Label, icon: AwardIcon, delay: 150 },
                { num: t.historyStat2Num, label: t.historyStat2Label, icon: Building2Icon, delay: 200 },
                { num: t.historyStat3Num, label: t.historyStat3Label, icon: BarChartIcon, delay: 250 },
              ].map((stat, i) => (
                <AnimateIn key={i} delay={stat.delay} direction="right">
                  <div className="card-corporate flex items-center gap-5">
                    <div className="w-12 h-12 rounded-xl bg-[var(--brand)]/8 flex items-center justify-center shrink-0">
                      <stat.icon size={22} className="text-[var(--brand)]" />
                    </div>
                    <div>
                      <p className="font-outfit text-2xl sm:text-3xl font-bold text-[var(--ink)] tracking-tight">{stat.num}</p>
                      <p className="text-sm text-[var(--ink-muted)] font-medium">{stat.label}</p>
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          STATS ROW - Dark bg with glass panels
          ============================================ */}
      <section className="section-dark py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-20" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
            {[
              { num: t.exp, label: t.expLabel, desc: t.expDesc, icon: AwardIcon, delay: 0 },
              { num: t.rnd, label: t.rndLabel, desc: t.rndDesc, icon: TargetIcon, delay: 100 },
              { num: t.engineers, label: t.engineersLabel, desc: t.engineersDesc, icon: UsersIcon, delay: 200 },
            ].map((stat, i) => (
              <AnimateIn key={i} delay={stat.delay}>
                <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-7 sm:p-8 h-full hover:border-white/20 transition-colors duration-200">
                  <div className="w-11 h-11 rounded-lg bg-white/[0.06] flex items-center justify-center mb-5">
                    <stat.icon size={22} className="text-[var(--brand-bright)]" />
                  </div>
                  <p className="font-outfit text-3xl sm:text-4xl font-bold text-white tracking-tight mb-1">
                    {stat.num}
                  </p>
                  <p className="text-xs font-semibold uppercase tracking-widest text-[var(--brand-bright)] mb-3">
                    {stat.label}
                  </p>
                  <p className="text-sm text-white/50 leading-relaxed">
                    {stat.desc}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          CERTIFICATIONS - Asymmetric grid
          ============================================ */}
      <section className="bg-[var(--surface)] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="mb-14">
            <AnimateIn>
              <p className="eyebrow mb-4">{lang === 'id' ? 'Standar Kualitas' : 'Quality Standards'}</p>
            </AnimateIn>
            <AnimateIn delay={100}>
              <h2 className="font-outfit text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--ink)] tracking-tight">
                {t.certsTitle}
              </h2>
            </AnimateIn>
            <AnimateIn delay={150}>
              <p className="text-[var(--ink-muted)] mt-4 max-w-xl text-base sm:text-lg leading-relaxed">
                {t.certsSubtitle}
              </p>
            </AnimateIn>
          </div>

          {/* Asymmetric 4-col grid: 2+2 with varied heights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {t.certs.map((c: any, i: number) => {
              const certIcons = [ShieldCheckIcon, ShieldIcon, AwardIcon, SparklesIcon]
              const CertIcon = certIcons[i]
              const isFeatured = i === 0 || i === 3
              return (
                <AnimateIn key={i} delay={100 + i * 80}>
                  <div className={`card-corporate h-full ${isFeatured ? 'sm:row-span-1' : ''}`}>
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 ${
                      i === 0 ? 'bg-[var(--brand)] text-white' :
                      i === 1 ? 'bg-[var(--brand)]/10 text-[var(--brand)]' :
                      i === 2 ? 'bg-[var(--surface-alt)] text-[var(--brand-light)]' :
                      'bg-[var(--brand)] text-white'
                    }`}>
                      <CertIcon size={20} />
                    </div>
                    <h3 className="font-outfit font-bold text-[var(--ink)] text-base mb-2">
                      {c.name}
                    </h3>
                    <p className="text-sm text-[var(--ink-muted)] leading-relaxed">
                      {c.desc}
                    </p>
                  </div>
                </AnimateIn>
              )
            })}
          </div>
        </div>
      </section>

      {/* ============================================
          VISION & MISSION
          ============================================ */}
      <section className="bg-[var(--surface-alt)] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="mb-14">
            <AnimateIn>
              <p className="eyebrow mb-4">{lang === 'id' ? 'Arah Strategis' : 'Strategic Direction'}</p>
            </AnimateIn>
            <AnimateIn delay={100}>
              <h2 className="font-outfit text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--ink)] tracking-tight">
                {lang === 'id' ? 'Visi & Misi' : 'Vision & Mission'}
              </h2>
            </AnimateIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <AnimateIn delay={100}>
              <div className="relative overflow-hidden rounded-2xl bg-[var(--dark)] p-8 sm:p-10 h-full border border-white/5">
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.06] flex items-center justify-center mb-6">
                    <EyeIcon size={22} className="text-[var(--brand-bright)]" />
                  </div>
                  <p className="eyebrow text-[var(--brand-bright)] mb-3">{t.visionTitle}</p>
                  <p className="font-outfit text-xl sm:text-2xl font-semibold text-white leading-snug tracking-tight">
                    {t.vision}
                  </p>
                </div>
              </div>
            </AnimateIn>

            <AnimateIn delay={200}>
              <div className="relative overflow-hidden rounded-2xl bg-[var(--brand)] p-8 sm:p-10 h-full border border-white/10">
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.12] flex items-center justify-center mb-6">
                    <TargetIcon size={22} className="text-white" />
                  </div>
                  <p className="eyebrow text-white/60 mb-3">{t.missionTitle}</p>
                  <p className="font-outfit text-xl sm:text-2xl font-semibold text-white leading-snug tracking-tight">
                    {t.mission}
                  </p>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>
    </div>
  )
}

/* Inline icon to avoid extra import - Building outline for stat cards */
function Building2Icon({ size = 24, className = '' }: { size?: number; className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
      <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
      <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
      <path d="M10 6h4" /><path d="M10 10h4" /><path d="M10 14h4" /><path d="M10 18h4" />
    </svg>
  )
}
