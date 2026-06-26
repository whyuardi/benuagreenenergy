'use client'
import { useState } from 'react'
import Link from 'next/link'
import { AnimateIn, StaggerContainer } from '@/components/AnimateIn'
import { ChevronDownIcon, SearchIcon, MessageCircleIcon } from '@/components/Icons'
import Breadcrumb from '@/components/Breadcrumb'

/* ============================================
   FAQ DATA
   ============================================ */
type FAQCategory = {
  name: string
  slug: string
  items: { q: string; a: string }[]
}

const faqCategories: Record<string, FAQCategory[]> = {
  id: [
    {
      name: 'Umum',
      slug: 'umum',
      items: [
        {
          q: 'Apakah BGE melayani proyek di seluruh Indonesia?',
          a: 'Ya, BGE melayani proyek di seluruh Indonesia. Tim teknisi bersertifikasi kami siap ditempatkan di lokasi proyek di Jawa, Sumatera, Kalimantan, Sulawesi, hingga Papua. Kami memiliki jaringan mitra logistik untuk mendukung pengiriman equipment ke berbagai wilayah.',
        },
        {
          q: 'Apakah BGE menerima tender proyek pemerintah dan BUMN?',
          a: 'Ya, BGE memiliki pengalaman panjang dalam menangani proyek pemerintah dan BUMN. Kami membantu penyusunan dokumen tender, spesifikasi teknis, RAB, hingga presentasi technical. Silakan hubungi tim bisnis kami untuk diskusi lebih lanjut.',
        },
        {
          q: 'Bagaimana cara memulai konsultasi dengan BGE?',
          a: 'Anda bisa menghubungi kami melalui form kontak di website, email, atau telepon langsung. Konsultasi awal dan site survey gratis untuk proyek di area Jabodetabek. Untuk proyek di luar Jabodetabek, biaya transportasi teknisi akan dikomunikasikan sebelumnya.',
        },
      ],
    },
    {
      name: 'Teknis',
      slug: 'teknis',
      items: [
        {
          q: 'Apa perbedaan Chiller Air-Cooled dan Water-Cooled?',
          a: 'Air-Cooled Chiller lebih mudah instalasi dan perawatan karena tidak membutuhkan cooling tower. Cocok untuk area dengan keterbatasan air. Water-Cooled Chiller memiliki COP lebih tinggi (lebih efisien) dan umur lebih panjang, ideal untuk proyek skala besar dengan kebutuhan pendinginan 24/7.',
        },
        {
          q: 'Berapa kapasitas maksimal chiller yang bisa disediakan BGE?',
          a: 'BGE menyediakan chiller dari kapasitas 5 TR hingga 2.000 TR untuk aplikasi komersial dan industri. Kami juga mampu merancang sistem multi-chiller paralel untuk kebutuhan beban pendinginan yang sangat besar, termasuk desain distribusi air pendingin dan控制系统.',
        },
        {
          q: 'Apakah BGE menyediakan produk selain YORK?',
          a: 'Ya, selain lini lengkap YORK (chiller, AHU, FCU, control system), BGE juga menyediakan Shakti Solar (panel surya, pompa DC), Cooling Tower merek terkemuka, Boiler industri, Steam Accessories, PPR Pipe & Fittings, dan High Efficiency Pump dari berbagai brand terpercaya.',
        },
        {
          q: 'Bagaimana cara kerja Energy Management System (EMS) dari BGE?',
          a: 'EMS BGE menyediakan dashboard real-time yang bisa diakses via web dan mobile. Fitur meliputi monitoring konsumsi energi per zona, alarm otomatis untuk anomali konsumsi, laporan bulanan otomatis, dan rekomendasi optimasi berbasis data analytics. Semua data tersimpan cloud dengan enkripsi.',
        },
      ],
    },
    {
      name: 'Garansi',
      slug: 'garansi',
      items: [
        {
          q: 'Berapa lama garansi yang diberikan untuk produk BGE?',
          a: 'Garansi standar bervariasi berdasarkan jenis peralatan. Untuk chiller YORK, garansi kompresor hingga 5 tahun tersedia dengan kontrak pemeliharaan. Panel surya mendapat garansi performa 25 tahun dan garansi produk 12 tahun. Garansi layanan BGE mencakup 1 tahun untuk instalasi dan commissioning.',
        },
        {
          q: 'Bagaimana cara mengajukan klaim garansi?',
          a: 'Hubungi tim support BGE via telepon atau email. Sertakan nomor kontrak dan deskripsi masalah. Tim kami akan merespons dalam 1x24 jam dan menjadwalkan kunjungan teknisi ke lokasi. Untuk keadaan darurat (system down), kami menerapkan SLA respons 4 jam di area Jabodetabek.',
        },
      ],
    },
    {
      name: 'Instalasi',
      slug: 'instalasi',
      items: [
        {
          q: 'Berapa lama waktu pemasangan sistem HVAC industri?',
          a: 'Waktu pemasangan bervariasi tergantung skala dan kompleksitas. Untuk chiller skala menengah (50-200 TR), estimasi 2-4 minggu termasuk commissioning dan handover. Proyek skala besar dengan multiple chillers dan distribusi pipa bisa memakan waktu 3-6 bulan. Timeline detail akan disampaikan dalam proposal.',
        },
        {
          q: 'Apakah BGE menyediakan layanan pemeliharaan rutin?',
          a: 'Ya, kami menyediakan kontrak pemeliharaan preventif (preventive maintenance) untuk seluruh sistem HVAC, Chiller, Cooling Tower, dan Panel Surya. Jadwal bisa mingguan, bulanan, atau kwartal sesuai kebutuhan. Layanan meliputi inspeksi rutin, penggantian parts, kalibrasi sensor, dan laporan kondisi sistem.',
        },
        {
          q: 'Bagaimana proses commissioning dan handover sistem?',
          a: 'Proses commissioning meliputi verifikasi performa setiap komponen, testing beban penuh, tuning kontroler, dan pelatihan operatior. Kami menyerahkan dokumen as-built, manual operasi, spare parts list, dan training certificate. Masa pemantauan 30 hari pasca-handover disertakan untuk memastikan stabilitas operasi.',
        },
      ],
    },
  ],
  en: [
    {
      name: 'General',
      slug: 'general',
      items: [
        {
          q: 'Does BGE serve projects across all of Indonesia?',
          a: 'Yes, BGE serves projects throughout Indonesia. Our certified technicians are ready for deployment across Java, Sumatra, Kalimantan, Sulawesi, and Papua. We maintain a logistics partner network to support equipment delivery to all regions.',
        },
        {
          q: 'Does BGE accept government and SOE project tenders?',
          a: 'Yes, BGE has extensive experience handling government and SOE projects. We assist with tender document preparation, technical specifications, budget planning, and technical presentations. Contact our business team to discuss further.',
        },
        {
          q: 'How do I start a consultation with BGE?',
          a: 'You can reach us through the website contact form, email, or direct phone call. Initial consultation and site survey are free for projects in the Jabodetabek area. For projects outside Jabodetabek, technician travel costs will be communicated in advance.',
        },
      ],
    },
    {
      name: 'Technical',
      slug: 'technical',
      items: [
        {
          q: 'What is the difference between Air-Cooled and Water-Cooled Chiller?',
          a: 'Air-Cooled Chillers are easier to install and maintain as they do not require a cooling tower. Suitable for areas with water limitations. Water-Cooled Chillers offer higher COP (more efficient) and longer lifespan, ideal for large-scale 24/7 cooling applications.',
        },
        {
          q: 'What is the maximum chiller capacity available from BGE?',
          a: 'BGE provides chillers ranging from 5 TR to 2,000 TR for commercial and industrial applications. We also design parallel multi-chiller systems for very large cooling load requirements, including chilled water distribution and control system engineering.',
        },
        {
          q: 'Does BGE provide products other than YORK?',
          a: 'Yes, besides the complete YORK lineup (chiller, AHU, FCU, control systems), BGE also provides Shakti Solar (solar panels, DC pumps), Cooling Towers from leading brands, industrial Boilers, Steam Accessories, PPR Pipe & Fittings, and High Efficiency Pumps.',
        },
        {
          q: 'How does the BGE Energy Management System (EMS) work?',
          a: 'BGE EMS provides a real-time dashboard accessible via web and mobile. Features include per-zone energy consumption monitoring, automatic anomaly alarms, automated monthly reports, and data analytics-based optimization recommendations. All data is cloud-stored with encryption.',
        },
      ],
    },
    {
      name: 'Warranty',
      slug: 'warranty',
      items: [
        {
          q: 'What warranty period does BGE provide for its products?',
          a: 'Standard warranties vary by equipment type. For YORK chillers, compressor warranty up to 5 years is available with maintenance contracts. Solar panels come with 25-year performance warranty and 12-year product warranty. BGE service warranty covers 1 year for installation and commissioning.',
        },
        {
          q: 'How do I file a warranty claim?',
          a: 'Contact BGE support via phone or email with your contract number and problem description. Our team responds within 24 hours and schedules a technician visit. For emergencies (system down), we maintain a 4-hour response SLA in the Jabodetabek area.',
        },
      ],
    },
    {
      name: 'Installation',
      slug: 'installation',
      items: [
        {
          q: 'How long does industrial HVAC system installation take?',
          a: 'Installation time varies by scale and complexity. For medium-sized chillers (50-200 TR), expect 2-4 weeks including commissioning and handover. Large-scale projects with multiple chillers and piping distribution may take 3-6 months. A detailed timeline is included in every proposal.',
        },
        {
          q: 'Does BGE provide routine maintenance services?',
          a: 'Yes, we provide preventive maintenance contracts for all HVAC systems, Chillers, Cooling Towers, and Solar Panels. Schedules can be weekly, monthly, or quarterly. Services include routine inspections, parts replacement, sensor calibration, and system condition reports.',
        },
        {
          q: 'What is the commissioning and handover process?',
          a: 'Commissioning includes verifying each component\'s performance, full load testing, controller tuning, and operator training. We deliver as-built documentation, operation manuals, spare parts lists, and training certificates. A 30-day post-handover monitoring period is included to ensure operational stability.',
        },
      ],
    },
  ],
}

/* ============================================
   COMPONENT
   ============================================ */
export default function FAQPage({ params }: { params: { lang: string } }) {
  const lang = params.lang === 'en' ? 'en' : 'id'
  const [activeTab, setActiveTab] = useState(0)
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [search, setSearch] = useState('')

  const categories = faqCategories[lang]
  const allItems = categories.flatMap((cat) =>
    cat.items.map((item) => ({ ...item, category: cat.name, categorySlug: cat.slug }))
  )

  const t = {
    title: lang === 'id' ? 'Pertanyaan Umum' : 'Frequently Asked Questions',
    subtitle: lang === 'id' ? 'Temukan jawaban atas pertanyaan yang paling sering diajukan tentang solusi HVAC dan energi hijau kami.' : 'Find answers to frequently asked questions about our HVAC and green energy solutions.',
    searchPlaceholder: lang === 'id' ? 'Cari pertanyaan...' : 'Search questions...',
    allLabel: lang === 'id' ? 'Semua' : 'All',
    ctaTitle: lang === 'id' ? 'Masih Punya Pertanyaan?' : 'Still Have Questions?',
    ctaDesc: lang === 'id' ? 'Tim ahli kami siap membantu Anda. Hubungi kami sekarang untuk konsultasi gratis.' : 'Our expert team is ready to help. Contact us now for a free consultation.',
    ctaBtn: lang === 'id' ? 'Hubungi Kami' : 'Contact Us',
    noResults: lang === 'id' ? 'Tidak ada hasil ditemukan' : 'No results found',
    noResultsHint: lang === 'id' ? 'Coba kata kunci yang berbeda' : 'Try different keywords',
  }

  /* Filter items by active tab and search */
  const activeSlug = activeTab === 0 ? null : categories[activeTab - 1]?.slug
  const filteredItems = allItems.filter((item) => {
    const matchesTab = activeSlug === null || item.categorySlug === activeSlug
    const matchesSearch =
      search === '' ||
      item.q.toLowerCase().includes(search.toLowerCase()) ||
      item.a.toLowerCase().includes(search.toLowerCase())
    return matchesTab && matchesSearch
  })

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  return (
    <div>
      {/* ============================================
          HERO SECTION
          ============================================ */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(145deg, var(--dark) 0%, #112A1A 30%, #1B4332 60%, #0B1D13 100%)',
          }} />
          <div className="absolute inset-0 grid-overlay opacity-40" />
          <div className="absolute inset-0 pointer-events-none" style={{
            background: 'radial-gradient(ellipse 600px 400px at 25% 40%, rgba(82,183,136,0.08) 0%, transparent 70%), radial-gradient(ellipse 500px 500px at 75% 60%, rgba(64,145,108,0.06) 0%, transparent 60%)',
          }} />
          <div className="absolute top-1/3 right-[15%] w-80 h-80 rounded-full opacity-[0.03] pointer-events-none"
            style={{ background: 'radial-gradient(circle, #52B788 0%, transparent 70%)' }} />
          <div className="absolute bottom-1/4 left-[8%] w-56 h-56 rounded-full opacity-[0.04] pointer-events-none"
            style={{ background: 'radial-gradient(circle, #40916C 0%, transparent 70%)' }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 w-full pt-28 pb-20 md:pt-32 md:pb-28">
          <Breadcrumb items={[{ label: t.title }]} lang={lang} />
          <div className="max-w-3xl mt-6">
            <AnimateIn>
              <p className="eyebrow mb-4">{lang === 'id' ? 'Bantuan & Dukungan' : 'Help & Support'}</p>
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

        <div className="absolute bottom-0 left-0 right-0 h-32 md:h-48 z-10 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, transparent 0%, var(--surface) 100%)',
          }} />
      </section>

      {/* ============================================
          FAQ CONTENT
          ============================================ */}
      <section className="bg-[var(--surface)] py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8">

          {/* Search Bar */}
          <AnimateIn>
            <div className="relative mb-6">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <SearchIcon size={20} className="text-[var(--ink-muted)]" />
              </div>
              <input
                type="text"
                value={search}
                onChange={(e) => { setSearch(e.target.value); setOpenIndex(null) }}
                placeholder={t.searchPlaceholder}
                className="w-full pl-12 pr-4 py-4 bg-white rounded-[var(--radius-card)] border border-[var(--border)] focus:border-[var(--brand-light)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-bright)]/20 text-[var(--ink)] placeholder:text-[var(--ink-muted)] transition-all shadow-sm font-[var(--font-dm-sans)]"
              />
              {search && (
                <button
                  onClick={() => setSearch('')}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-[var(--ink-muted)] hover:text-[var(--ink)] transition-colors"
                  aria-label="Clear search"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          </AnimateIn>

          {/* Category Filter Tabs */}
          <AnimateIn delay={100}>
            <div className="flex flex-wrap gap-2 mb-10">
              {/* "Semua / All" tab */}
              <button
                onClick={() => { setActiveTab(0); setOpenIndex(null) }}
                className={`px-5 py-2.5 rounded-[var(--radius-btn)] text-sm font-semibold transition-all ${
                  activeTab === 0
                    ? 'bg-[var(--brand)] text-white shadow-sm'
                    : 'bg-white text-[var(--ink-muted)] border border-[var(--border)] hover:border-[var(--brand-light)] hover:text-[var(--brand)]'
                }`}
              >
                {t.allLabel}
                <span className="ml-1.5 text-xs opacity-60">{allItems.length}</span>
              </button>
              {categories.map((cat, i) => (
                <button
                  key={cat.slug}
                  onClick={() => { setActiveTab(i + 1); setOpenIndex(null) }}
                  className={`px-5 py-2.5 rounded-[var(--radius-btn)] text-sm font-semibold transition-all ${
                    activeTab === i + 1
                      ? 'bg-[var(--brand)] text-white shadow-sm'
                      : 'bg-white text-[var(--ink-muted)] border border-[var(--border)] hover:border-[var(--brand-light)] hover:text-[var(--brand)]'
                  }`}
                >
                  {cat.name}
                  <span className="ml-1.5 text-xs opacity-60">{cat.items.length}</span>
                </button>
              ))}
            </div>
          </AnimateIn>

          {/* FAQ Accordion Items */}
          <div className="space-y-3">
            {filteredItems.length > 0 ? (
              <StaggerContainer className="space-y-3" staggerDelay={60}>
                {filteredItems.map((item, i) => {
                  const isOpen = openIndex === i
                  return (
                    <div key={i} className="card-corporate !p-0 overflow-hidden">
                      <button
                        onClick={() => toggleItem(i)}
                        className="w-full text-left px-6 py-5 flex justify-between items-center gap-4 cursor-pointer"
                        aria-expanded={isOpen}
                      >
                        <span className="font-semibold text-[var(--ink)] text-[15px] sm:text-base leading-snug">
                          {item.q}
                        </span>
                        <ChevronDownIcon
                          size={18}
                          className={`shrink-0 text-[var(--brand)] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                        />
                      </button>
                      <div
                        className="overflow-hidden transition-all duration-300 ease-in-out"
                        style={{ maxHeight: isOpen ? '500px' : '0px' }}
                        role="region"
                      >
                        <div className="px-6 pb-5 pt-0 text-[var(--ink-secondary)] leading-relaxed text-sm sm:text-[15px] border-t border-[var(--border)] pt-4">
                          {item.a}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </StaggerContainer>
            ) : (
              <div className="text-center py-16">
                <SearchIcon size={40} className="mx-auto mb-4 text-[var(--ink-muted)] opacity-30" />
                <p className="text-lg font-semibold text-[var(--ink)]">{t.noResults}</p>
                <p className="text-sm text-[var(--ink-muted)] mt-1">{t.noResultsHint}</p>
              </div>
            )}
          </div>

          {/* Bottom CTA */}
          <AnimateIn className="mt-16">
            <div className="section-dark rounded-[var(--radius-card)] p-8 sm:p-10 md:p-14 text-center relative overflow-hidden">
              <div className="absolute inset-0 grid-overlay opacity-30 pointer-events-none" />
              <div className="relative z-10">
                <div className="w-14 h-14 bg-[var(--brand-bright)]/15 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MessageCircleIcon size={28} className="text-[var(--brand-bright)]" />
                </div>
                <h3 className="font-outfit text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                  {t.ctaTitle}
                </h3>
                <p className="text-white/60 mb-8 max-w-lg mx-auto text-sm sm:text-base">
                  {t.ctaDesc}
                </p>
                <Link href={`/${lang}/contact`} className="btn-primary">
                  <MessageCircleIcon size={18} />
                  {t.ctaBtn}
                </Link>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>
    </div>
  )
}
