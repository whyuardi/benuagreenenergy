'use client'
import { useState } from 'react'
import { ChevronDownIcon, MessageCircleIcon } from '@/components/Icons'
import Link from 'next/link'
import { SectionHeading } from '@/components/AnimateIn'
import Breadcrumb from '@/components/Breadcrumb'

const faqData = {
  id: {
    categories: [
      {
        name: 'Umum', slug: 'umum',
        items: [
          { q: 'Apakah BGE melayani seluruh Indonesia?', a: 'Ya, tim BGE melayani proyek di seluruh Indonesia. Kami memiliki teknisi bersertifikasi yang siap mobile ke lokasi proyek di Jawa, Sumatera, Kalimantan, Sulawesi, dan Papua.' },
          { q: 'Apakah BGE menerima tender proyek pemerintah?', a: 'Ya, BGE memiliki pengalaman dalam proyek pemerintah dan BUMN. Kami dapat membantu penyusunan dokumen tender, spesifikasi teknis, dan RAB sesuai ketentuan pengadaan.' },
          { q: 'Apakah BGE bisa membantu pengajuan pembiayaan?', a: 'Ya, BGE memiliki mitra pembiayaan untuk proyek energi terbarukan dan efisiensi energi. Kami bisa membantu menyusun proposal bisnis dan kelengkapan dokumen untuk pengajuan kredit investasi.' },
        ],
      },
      {
        name: 'Produk & Teknis', slug: 'teknis',
        items: [
          { q: 'Apa perbedaan Chiller Air-Cooled dan Water-Cooled?', a: 'Air-Cooled Chiller lebih mudah instalasi dan perawatan, cocok untuk area dengan keterbatasan air. Water-Cooled Chiller lebih efisien (COP lebih tinggi) dan lebih awet, ideal untuk proyek skala besar dengan kebutuhan pendinginan 24/7.' },
          { q: 'Berapa kapasitas maksimal chiller yang bisa disediakan?', a: 'BGE menyediakan chiller dari kapasitas 5 TR hingga 2.000 TR untuk aplikasi komersial dan industri. Kami juga dapat merancang sistem multi-chiller untuk kebutuhan beban yang sangat besar.' },
          { q: 'Apakah BGE menyediakan produk selain YORK?', a: 'Ya, selain YORK (chiller, AHU, FCU), BGE juga menyediakan Shakti Solar (panel surya, pompa DC), Cooling Tower, Boiler, Steam Accessories, PPR Pipe & Fittings, dan High Efficiency Pump dari berbagai merek terpercaya.' },
          { q: 'Bagaimana sistem monitoring Energy Management System BGE?', a: 'EMS BGE menyediakan dashboard real-time yang bisa diakses via web dan mobile. Fitur meliputi monitoring konsumsi per zona, alarm otomatis, laporan bulanan, dan rekomendasi optimasi berbasis data.' },
        ],
      },
      {
        name: 'Investasi & Penghematan', slug: 'investasi',
        items: [
          { q: 'Berapa lama waktu pengembalian investasi (ROI) untuk panel surya?', a: 'Rata-rata ROI untuk skala industri adalah 3-5 tahun tergantung pada konsumsi energi, kapasitas panel, dan insentif pemerintah. Tim BGE akan menghitung proyeksi ROI spesifik untuk kebutuhan Anda.' },
          { q: 'Berapa besar penghematan energi yang bisa dicapai?', a: 'Dengan Energy Management System (EMS) dan optimasi HVAC, klien rata-rata mencapai penghematan 20-40% pada tagihan listrik. Beberapa proyek bahkan mencapai 50% setelah rekomisioning sistem.' },
          { q: 'Apakah ada konsultasi gratis sebelum pembelian?', a: 'Ya, BGE menyediakan konsultasi teknis gratis termasuk site survey, analisis kebutuhan beban pendingin/energi, dan rekomendasi sistem yang sesuai.' },
        ],
      },
      {
        name: 'Layanan & Garansi', slug: 'layanan',
        items: [
          { q: 'Apakah BGE menyediakan jasa pemeliharaan rutin?', a: 'Ya, kami menyediakan kontrak pemeliharaan preventif untuk HVAC, Chiller, Cooling Tower, dan Panel Surya. Jadwal pemeliharaan bisa mingguan, bulanan, atau kwartal sesuai kebutuhan.' },
          { q: 'Bagaimana cara memulai audit energi?', a: 'Hubungi kami melalui form kontak atau telepon. Tim teknis kami akan melakukan survei awal lokasi, mengumpulkan data konsumsi energi, dan memberikan laporan audit lengkap beserta rekomendasi.' },
          { q: 'Berapa lama waktu pemasangan HVAC industri?', a: 'Waktu pemasangan bervariasi tergantung skala dan kompleksitas sistem. Untuk chiller skala menengah (50-200 TR), estimasi 2-4 minggu termasuk commissioning dan handover.' },
          { q: 'Berapa garansi yang diberikan?', a: 'Garansi standar 1-5 tahun tergantung jenis peralatan. Untuk produk YORK, garansi kompresor hingga 5 tahun tersedia dengan kontrak pemeliharaan.' },
          { q: 'Bagaimana cara mengajukan klaim garansi?', a: 'Hubungi tim support BGE via telepon atau email. Kami akan memproses klaim dalam 1x24 jam dan menjadwalkan kunjungan teknisi ke lokasi.' },
        ],
      },
    ],
  },
  en: {
    categories: [
      {
        name: 'General', slug: 'general',
        items: [
          { q: 'Does BGE serve all of Indonesia?', a: 'Yes, BGE serves projects throughout Indonesia. We have certified technicians ready for mobile deployment across Java, Sumatra, Kalimantan, Sulawesi, and Papua.' },
          { q: 'Does BGE participate in government project tenders?', a: 'Yes, BGE has experience with government and SOE projects. We assist with tender document preparation, technical specifications, and budget planning per procurement regulations.' },
          { q: 'Can BGE help with financing applications?', a: 'Yes, BGE has financing partners for renewable energy and energy efficiency projects. We can help prepare business proposals and documentation for investment credit applications.' },
        ],
      },
      {
        name: 'Products & Technical', slug: 'technical',
        items: [
          { q: 'What is the difference between Air-Cooled and Water-Cooled Chiller?', a: 'Air-Cooled Chillers are easier to install and maintain, suitable for areas with water limitations. Water-Cooled Chillers are more efficient (higher COP) and durable, ideal for 24/7 large-scale cooling.' },
          { q: 'What is the maximum chiller capacity available?', a: 'BGE provides chillers from 5 TR up to 2,000 TR for commercial and industrial applications. We also design multi-chiller systems for very large load requirements.' },
          { q: 'Does BGE provide products other than YORK?', a: 'Yes, besides YORK (chiller, AHU, FCU), BGE also provides Shakti Solar (solar panels, DC pumps), Cooling Tower, Boilers, Steam Accessories, PPR Pipe & Fittings, and High Efficiency Pumps.' },
          { q: 'How does the BGE Energy Management System monitoring work?', a: 'EMS BGE provides a real-time dashboard accessible via web and mobile. Features include per-zone consumption monitoring, automatic alarms, monthly reports, and data-driven optimization recommendations.' },
        ],
      },
      {
        name: 'Investment & Savings', slug: 'investment',
        items: [
          { q: 'How long is the ROI for solar panels?', a: 'The average ROI for industrial scale is 3-5 years depending on energy consumption, panel capacity, and government incentives. BGE can calculate specific ROI projections for your needs.' },
          { q: 'How much energy savings can be achieved?', a: 'With Energy Management System and HVAC optimization, clients average 20-40% savings on electricity bills. Some projects achieve up to 50% after system recommissioning.' },
          { q: 'Is there free consultation before purchase?', a: 'Yes, BGE provides free technical consultation including site survey, cooling/energy load analysis, and system recommendations.' },
        ],
      },
      {
        name: 'Service & Warranty', slug: 'service',
        items: [
          { q: 'Does BGE provide routine maintenance services?', a: 'Yes, we provide preventive maintenance contracts for HVAC, Chiller, Cooling Tower, and Solar Panels. Maintenance schedules can be weekly, monthly, or quarterly.' },
          { q: 'How do I start an energy audit?', a: 'Contact us via the contact form or phone. Our technical team will conduct an initial site survey, collect energy consumption data, and provide a complete audit report with recommendations.' },
          { q: 'How long does industrial HVAC installation take?', a: 'Installation time varies by scale and complexity. For medium-sized chillers (50-200 TR), estimate 2-4 weeks including commissioning and handover.' },
          { q: 'What warranty is provided?', a: 'Standard warranty is 1-5 years depending on equipment type. For YORK products, compressor warranty up to 5 years is available with maintenance contracts.' },
          { q: 'How do I file a warranty claim?', a: 'Contact BGE support via phone or email. We process claims within 24 hours and schedule a technician visit to your location.' },
        ],
      },
    ],
  },
}

export default function FAQPage({ params }: { params: { lang: string } }) {
  const lang = params.lang === 'en' ? 'en' : 'id'
  const [open, setOpen] = useState<{ catIdx: number; itemIdx: number } | null>(null)
  const [activeCategory, setActiveCategory] = useState(0)
  const [search, setSearch] = useState('')

  const data = faqData[lang]
  const categories = data.categories

  const t = {
    title: lang === 'id' ? 'Pertanyaan Umum' : 'Frequently Asked Questions',
    subtitle: lang === 'id' ? 'Jawaban atas pertanyaan yang paling sering diajukan.' : 'Answers to frequently asked questions about BGE solutions.',
    ctaTitle: lang === 'id' ? 'Masih Punya Pertanyaan?' : 'Still Have Questions?',
    ctaDesc: lang === 'id' ? 'Tim ahli kami siap membantu. Hubungi kami sekarang untuk konsultasi gratis.' : 'Our expert team is ready to help. Contact us now for a free consultation.',
    ctaBtn: lang === 'id' ? 'Hubungi Kami' : 'Contact Us',
  }

  const toggleFAQ = (catIdx: number, itemIdx: number) => {
    if (open?.catIdx === catIdx && open?.itemIdx === itemIdx) {
      setOpen(null)
    } else {
      setOpen({ catIdx, itemIdx })
    }
  }

  // Search filtering
  const filteredCategories = search
    ? categories.map(cat => ({
        ...cat,
        items: cat.items.filter(
          item => item.q.toLowerCase().includes(search.toLowerCase()) ||
                  item.a.toLowerCase().includes(search.toLowerCase())
        ),
      })).filter(cat => cat.items.length > 0)
    : categories

  const displayCategories = filteredCategories
  const hasResults = displayCategories.some(c => c.items.length > 0)

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative min-h-[50vh] flex items-center justify-center overflow-hidden"
        style={{
          background: 'linear-gradient(145deg, #0a1628 0%, #0D1B2A 25%, #132637 50%, #1a3348 75%, #0D1B2A 100%)',
        }}
      >
        {/* Noise texture overlay */}
        <div className="noise-texture opacity-50 pointer-events-none mix-blend-overlay" />

        <div className="relative z-10 text-center px-4 sm:px-6 md:px-8 py-20 sm:py-24 md:py-32 max-w-5xl mx-auto">
          <Breadcrumb
            items={[{ label: lang === 'id' ? 'FAQ' : 'FAQ' }]}
            lang={lang}
          />
          <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white mb-6 mt-6">
            {t.title}
          </h1>
          <p className="text-white/70 text-base sm:text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>
        </div>
      </section>

      {/* Section Divider */}
      <div className="section-divider" />

      {/* Main Content */}
      <div className="py-12 sm:py-16 md:py-20 lg:py-28 px-4 sm:px-6 md:px-8 max-w-4xl mx-auto page-enter">

        {/* Search Bar */}
        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <svg className="w-5 h-5 text-[#2C3E50]/40" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </div>
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder={lang === 'id' ? 'Cari pertanyaan...' : 'Search questions...'}
            className="w-full pl-12 pr-4 py-4 bg-white rounded-2xl border border-[#2C3E50]/10 focus:border-[#2D5A27]/40 focus:outline-none focus:ring-4 focus:ring-[#2D5A27]/5 text-[#1A252F] placeholder:text-[#2C3E50]/30 transition-all shadow-sm"
          />
          {search && (
            <button onClick={() => setSearch('')} className="absolute inset-y-0 right-0 pr-4 flex items-center text-[#2C3E50]/40 hover:text-[#2C3E50]/70">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          )}
        </div>

        {/* Category Tabs */}
        <div className="overflow-x-auto flex gap-3 pb-2 mb-8">
          {displayCategories.map((cat, i) => (
            <button
              key={cat.slug}
              onClick={() => { setActiveCategory(i); setOpen(null) }}
              className={`whitespace-nowrap px-5 py-2.5 rounded-xl text-sm font-medium transition-all shrink-0 ${
                activeCategory === i
                  ? 'bg-[#2D5A27] text-white shadow-md'
                  : 'bg-white text-[#2C3E50]/60 border border-[#2C3E50]/10 hover:bg-[#F1F5F9] hover:text-[#2C3E50]'
              }`}
            >
              {cat.name}
              <span className="ml-2 text-xs opacity-60">{cat.items.length}</span>
            </button>
          ))}
        </div>

        {/* FAQ Items per Category */}
        <div className="space-y-4">
          {hasResults ? (
            displayCategories[activeCategory]?.items.map((f, i) => {
              const isOpen = open?.catIdx === activeCategory && open?.itemIdx === i
              return (
                <div
                  key={i}
                  className="hover-glow bg-white/70 backdrop-blur-xl rounded-2xl border border-white/20 overflow-hidden transition-shadow duration-300"
                  style={{ boxShadow: isOpen ? '0 8px 30px rgba(45, 90, 39, 0.08)' : 'none' }}
                >
                  <button
                    onClick={() => toggleFAQ(activeCategory, i)}
                    className="w-full p-4 sm:p-6 text-left flex justify-between items-center font-bold text-[#1A252F] cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="pr-4">{f.q}</span>
                    <ChevronDownIcon size={20} className={`shrink-0 transition-all duration-300 text-[#2D5A27] ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                    role="region"
                  >
                    <div className="px-4 sm:px-6 pb-4 sm:pb-6 text-[#2C3E50]/70 leading-relaxed text-sm sm:text-base lg:text-lg">{f.a}</div>
                  </div>
                </div>
              )
            })
          ) : (
            <div className="text-center py-16 text-[#2C3E50]/50">
              <svg className="w-12 h-12 mx-auto mb-4 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              <p className="text-lg font-medium">{lang === 'id' ? 'Tidak ada hasil' : 'No results found'}</p>
              <p className="text-sm mt-1">{lang === 'id' ? 'Coba kata kunci lain' : 'Try different keywords'}</p>
            </div>
          )}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 bg-gradient-to-br from-[#2D5A27] to-[#1A252F] p-8 sm:p-10 md:p-14 rounded-3xl text-center shadow-xl">
          <div className="w-16 h-16 bg-white/15 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-white/10">
            <MessageCircleIcon size={32} className="text-white" />
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-4">{t.ctaTitle}</h3>
          <p className="text-white/70 mb-8 max-w-lg mx-auto text-sm sm:text-base lg:text-lg">{t.ctaDesc}</p>
          <Link
            href={`/${lang}/contact`}
            className="inline-flex items-center gap-3 bg-white text-[#1A252F] px-8 py-4 rounded-full font-bold hover:bg-[#2D5A27] hover:text-white transition-all shadow-lg"
          >
            <MessageCircleIcon size={20} />
            {t.ctaBtn}
          </Link>
        </div>
      </div>
    </>
  )
}
