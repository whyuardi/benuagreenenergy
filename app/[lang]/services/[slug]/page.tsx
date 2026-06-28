'use client'
import { ChevronLeftIcon, ShieldCheckIcon, BarChartIcon, SettingsIcon, SparklesIcon, SearchIcon, WrenchIcon, HardHatIcon, CheckCircleIcon, ArrowRightIcon, ClockIcon, UsersIcon, AwardIcon } from '@/components/Icons'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { AnimateIn } from '@/components/AnimateIn'
import Breadcrumb from '@/components/Breadcrumb'
import { LazyBg } from '@/lib/lazy-bg'

const serviceDetail: Record<string, any> = {
  'warranty-replacement': { icon: ShieldCheckIcon }, 'energy-audit': { icon: BarChartIcon },
  'commissioning': { icon: SettingsIcon }, 'cleaning-optimization': { icon: SparklesIcon },
  'diagnostics': { icon: SearchIcon }, 'repair-maintenance': { icon: WrenchIcon },
  'installation': { icon: HardHatIcon },
}

const processSteps: Record<string, any> = {
  'warranty-replacement': ['Lapor & Verifikasi', 'Dokumentasi', 'Klaim pabrik', 'Penggantian unit'],
  'energy-audit': ['Survey awal', 'Pengumpulan data', 'Analisis & simulasi', 'Laporan rekomendasi'],
  'commissioning': ['Perencanaan', 'Inspeksi komponen', 'Uji fungsi', 'Serah terima'],
  'cleaning-optimization': ['Inspeksi awal', 'Pembersihan', 'Optimasi set point', 'Laporan akhir'],
  'diagnostics': ['Pengambilan sampel', 'Analisis lab', 'Diagnostik sistem', 'Laporan prediktif'],
  'repair-maintenance': ['Diagnosa masalah', 'Persetujuan', 'Perbaikan', 'Uji fungsi'],
  'installation': ['Site survey', 'Persiapan lokasi', 'Instalasi', 'Handover & training'],
}

const content: Record<string, any> = {
  id: {
    'warranty-replacement': { title: 'Warranty Replacement', desc: 'Layanan penggantian garansi resmi untuk semua produk dan sistem PT. Benua Green Energy. Proses cepat, produk original, tenang tanpa biaya tambahan selama masa garansi.', benefits: ['Proses klaim cepat dan mudah', 'Produk original 100%', 'Garansi 1-5 tahun sesuai produk', 'Service nasional coverage'], img: '/images/hero/bg.jpg' },
    'energy-audit': { title: 'Energy Audit', desc: 'Audit energi komprehensif untuk mengidentifikasi inefisiensi sistem HVAC Anda. Kami memberikan rekomendasi solusi spesifik yang bisa menghemat biaya operasional hingga 40%.', benefits: ['Audit awal gratis tanpa komitmen', 'Laporan detail dengan data real-time', 'Rekomendasi solusi spesifik', 'ROI analysis & payback projection'], img: '/images/hero/tech-bg.jpg' },
    'commissioning': { title: 'Commissioning', desc: 'Pengujian dan verifikasi sistem baru secara menyeluruh sesuai standar operasional internasional. Memastikan kinerja optimal sejak hari pertama operasi.', benefits: ['Verifikasi standar ISO', 'Dokumentasi teknis lengkap', 'Pelatihan operator terjadwal', 'Sertifikasi kelayakan operasi'], img: '/images/hero/bg.jpg' },
    'cleaning-optimization': { title: 'Cleaning & Optimization', desc: 'Layanan pembersihan dan optimasi sistem HVAC & Chiller secara berkala. Meningkatkan efisiensi, memperpanjang umur pakai, dan menurunkan konsumsi energi.', benefits: ['Chemical pembersih profesional', 'Optimasi set point sistem', 'Hemat energi 15-25%', 'Jadwal perawatan fleksibel'], img: '/images/hero/bg.jpg' },
    'diagnostics': { title: 'Diagnostics', desc: 'Diagnostik lanjutan menggunakan peralatan modern untuk deteksi dini potensi masalah sebelum menyebabkan kerusakan dan downtime yang mahal.', benefits: ['Thermal imaging & infrared scan', 'Vibration analysis', 'Oil & refrigerant analysis', 'Predictive maintenance report'], img: '/images/hero/bg.jpg' },
    'repair-maintenance': { title: 'Repair & Maintenance', desc: 'Perbaikan dan pemeliharaan rutin 24/7 oleh teknisi bersertifikasi. Coverage nasional dengan respon cepat dan spare part original.', benefits: ['Layanan darurat 24/7', 'Teknisi tersertifikasi', 'Spare part original', 'Kontrak preventive tersedia'], img: '/images/hero/bg.jpg' },
    'installation': { title: 'Installation', desc: 'Jasa instalasi profesional untuk HVAC, Chiller, Cooling Tower, dan Panel Surya oleh tim engineer berpengalaman dengan standar kualitas tertinggi.', benefits: ['Site survey & feasibility study', 'Instalasi standar pabrikan', 'Integrasi dengan sistem existing', 'Handover & training untuk operator'], img: '/images/hero/bg.jpg' },
  },
  en: {
    'warranty-replacement': { title: 'Warranty Replacement', desc: 'Official warranty replacement service for all registered products and systems. Fast claim process, 100% original products, worry-free.', benefits: ['Fast & easy claim process', '100% original products', '1-5 year warranty coverage', 'Nationwide service'], img: '/images/hero/bg.jpg' },
    'energy-audit': { title: 'Energy Audit', desc: 'Comprehensive energy audit to identify HVAC system inefficiencies. We provide specific solution recommendations that can save up to 40% in operational costs.', benefits: ['Free initial audit', 'Real-time data report', 'Specific solution roadmaps', 'ROI & payback analysis'], img: '/images/hero/tech-bg.jpg' },
    'commissioning': { title: 'Commissioning', desc: 'Thorough testing and verification of new systems according to international operational standards. Ensuring optimal performance from day one.', benefits: ['ISO standard verification', 'Full technical documentation', 'Scheduled operator training', 'Operational certification'], img: '/images/hero/bg.jpg' },
    'cleaning-optimization': { title: 'Cleaning & Optimization', desc: 'Periodic cleaning and optimization for peak HVAC performance. Extends equipment life and reduces energy consumption.', benefits: ['Professional chemical cleaning', 'System set point optimization', '15-25% energy savings', 'Flexible maintenance schedule'], img: '/images/hero/bg.jpg' },
    'diagnostics': { title: 'Diagnostics', desc: 'Advanced diagnostics using modern equipment for early detection of potential problems before they cause costly downtime.', benefits: ['Thermal imaging & IR scan', 'Vibration analysis', 'Oil & refrigerant analysis', 'Predictive maintenance report'], img: '/images/hero/bg.jpg' },
    'repair-maintenance': { title: 'Repair & Maintenance', desc: '24/7 repair and maintenance by certified technicians with nationwide coverage. Fast response and original spare parts.', benefits: ['24/7 emergency service', 'Certified technicians', 'Original spare parts', 'Preventive contracts available'], img: '/images/hero/bg.jpg' },
    'installation': { title: 'Installation', desc: 'Professional installation for HVAC, Chiller, Cooling Tower, and Solar Panels by experienced engineers with highest quality standards.', benefits: ['Site survey & feasibility', 'Manufacturer standards', 'System integration', 'Operator handover & training'], img: '/images/hero/bg.jpg' },
  }
}

export default function ServiceDetailPage() {
  const params = useParams()
  const lang = (params.lang as string) === 'en' ? 'en' : 'id'
  const slug = params.slug as string
  const svc = serviceDetail[slug]
  const data = content[lang]?.[slug] || content['id']?.[slug]
  const steps = processSteps[slug] || []

  if (!data || !svc) {
    return <div className="pt-40 text-center text-2xl text-[#2C3E50]/60">Service not found</div>
  }

  const Icon = svc.icon
  const label = lang === 'id' ? 'Layanan' : 'Services'

  return (
    <div className="page-enter">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={{ background: 'linear-gradient(145deg, #0a1628 0%, #0D1B2A 25%, #132637 50%, #1a3348 75%, #0D1B2A 100%)' }} />
          <div className="absolute inset-0 opacity-15 hero-zoom">
            <LazyBg
              src={data.img}
              style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
              fallbackClass=""
            />
          </div>
          <div className="absolute inset-0 grid-pattern opacity-40" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(10,22,40,0.3) 0%, rgba(13,27,42,0.6) 40%, rgba(13,27,42,0.85) 70%, rgba(13,27,42,1) 100%)' }} />
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
            <Breadcrumb items={[{ label, href: `/${lang}/services` }, { label: data.title }]} lang={lang} />
            <div className="flex items-center gap-5 mt-8 mb-4">
              <div className="w-14 h-14 bg-white/15 text-white rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/10"><Icon size={28} /></div>
              <AnimateIn><h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white">{data.title}</h1></AnimateIn>
            </div>
            <AnimateIn delay={0.2}><p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 max-w-2xl leading-relaxed">{data.desc}</p></AnimateIn>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 md:h-48 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, rgba(13,27,42,0.85) 0%, rgba(13,27,42,0.5) 30%, rgba(253,251,247,0.3) 60%, #FDFBF7 100%)' }}
        />
      </section>

      <div className="section-divider" />

      {/* Content */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 px-4 sm:px-6 md:px-8 bg-[#FDFBF7] relative">
        <div className="absolute inset-0 noise-texture opacity-50 pointer-events-none mix-blend-overlay" />
        <div className="max-w-4xl sm:max-w-5xl lg:max-w-6xl mx-auto relative z-10">

          {/* Benefits - Glassmorphism */}
          <div className="mb-16">
            <AnimateIn><h2 className="font-serif text-3xl text-[#1A252F] mb-8">{lang === 'id' ? 'Keunggulan Layanan' : 'Service Benefits'}</h2></AnimateIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {data.benefits.map((b: string, i: number) => (
                <AnimateIn key={i} delay={0.1 + i * 0.08}>
                  <div className="flex items-start gap-4 bg-white/70 backdrop-blur-xl p-6 rounded-2xl border border-white/20 shadow-sm hover:shadow-md transition-all duration-500"
                    style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.6)' }}>
                    <CheckCircleIcon size={22} className="text-[#2D5A27] shrink-0 mt-0.5" />
                    <span className="text-[#2C3E50]/80 leading-relaxed">{b}</span>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>

          {/* Process Steps - Premium numbered circles */}
          {steps.length > 0 && (
            <div className="mb-16">
              <AnimateIn><h2 className="font-serif text-3xl text-[#1A252F] mb-8">{lang === 'id' ? 'Tahapan Layanan' : 'Service Process'}</h2></AnimateIn>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {steps.map((step: string, i: number) => (
                  <AnimateIn key={i} delay={0.1 + i * 0.08}>
                    <div className="bg-white/70 backdrop-blur-xl p-5 rounded-2xl border border-white/20 shadow-sm text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-500"
                      style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.6)' }}>
                      <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-sm font-bold text-white"
                        style={{ background: 'linear-gradient(135deg, #2D5A27 0%, #1A252F 100%)', boxShadow: '0 4px 12px rgba(45,90,39,0.3)' }}>
                        {i + 1}
                      </div>
                      <p className="text-sm font-medium text-[#1A252F]">{step}</p>
                    </div>
                  </AnimateIn>
                ))}
              </div>
            </div>
          )}

          {/* CTA - Gradient shimmer */}
          <div className="relative bg-gradient-to-br from-[#2D5A27] to-[#1A252F] p-6 sm:p-8 md:p-10 lg:p-14 rounded-3xl text-center overflow-hidden group"
            style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.15)' }}>
            {/* Shimmer effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
              style={{
                background: 'linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.06) 40%, rgba(255,255,255,0.12) 50%, rgba(255,255,255,0.06) 60%, transparent 80%)',
                animation: 'shimmer 2s ease-in-out infinite',
              }} />
            <div className="relative z-10">
              <h3 className="font-serif text-2xl md:text-3xl text-white mb-4">{lang === 'id' ? 'Butuh Layanan Ini?' : 'Need This Service?'}</h3>
              <p className="text-white/60 mb-8 max-w-lg mx-auto">{lang === 'id' ? 'Hubungi tim kami untuk konsultasi gratis dan penawaran terbaik.' : 'Contact our team for a free consultation and best quote.'}</p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link href={`/${lang}/contact`} className="bg-white text-[#1A252F] px-8 py-4 rounded-full font-bold hover:bg-[#2D5A27] hover:text-white transition-all">{lang === 'id' ? 'Hubungi Kami' : 'Contact Us'}</Link>
                <Link href={`/${lang}/services`} className="text-white/80 hover:text-white px-6 py-4 rounded-full font-semibold border border-white/20 hover:border-white/40 transition-all flex items-center gap-2"><ChevronLeftIcon size={16} /> {lang === 'id' ? 'Semua Layanan' : 'All Services'}</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
