'use client'
import Link from 'next/link'
import { FileTextIcon, MailIcon, PhoneIcon, MapPinIcon, ArrowLeftIcon, CheckCircleIcon } from '@/components/Icons'
import { AnimateIn } from '@/components/AnimateIn'
import Breadcrumb from '@/components/Breadcrumb'

export default function TermsPage({ params }: { params: { lang: string } }) {
  const lang = params.lang === 'en' ? 'en' : 'id'

  const t = lang === 'id' ? {
    title: 'Ketentuan Layanan',
    subtitle: 'Syarat dan ketentuan yang mengatur penggunaan layanan dan situs web PT. Benua Green Energy.',
    lastUpdated: 'Terakhir diperbarui: 1 Januari 2025',
    sections: [
      {
        title: '1. Penerimaan Ketentuan',
        content: 'Dengan mengakses dan menggunakan situs web PT. Benua Green Energy ("BGE", "kami", "milik kami"), Anda menyetujui untuk terikat oleh Ketentuan Layanan ini. Jika Anda tidak setuju dengan salah satu bagian dari ketentuan ini, Anda tidak diperbolehkan menggunakan situs web atau layanan kami. Ketentuan ini berlaku untuk semua pengunjung, pengguna, dan pihak lain yang mengakses atau menggunakan layanan kami.'
      },
      {
        title: '2. Definisi',
        content: '• "Perusahaan" merujuk pada PT. Benua Green Energy, berkedudukan hukum di Tangerang, Banten, Indonesia.\n• "Layanan" mencakup semua jasa konsultasi energi, instalasi HVAC, solusi energi terbarukan, audit energi, pemeliharaan, dan layanan terkait yang ditawarkan oleh BGE.\n• "Pengguna" merujuk pada setiap individu atau entitas yang mengakses situs web atau menggunakan layanan BGE.\n• "Konten" mencakup semua teks, gambar, video, dokumen, dan materi lain yang terdapat di situs web BGE.\n• "Perjanjian" merujuk pada kontrak formal terpisah yang ditandatangani antara BGE dan klien untuk layanan tertentu.'
      },
      {
        title: '3. Layanan',
        content: 'BGE menyediakan berbagai layanan konsultasi energi dan solusi teknis, termasuk namun tidak terbatas pada:\n\n• Sistem HVAC dan pendingin industri (Chiller, Cooling Tower, dll.)\n• Solusi energi terbarukan (panel surya, boiler biomassa)\n• Audit energi dan manajemen energi\n• Instalasi, commissioning, dan pengujian sistem\n• Perbaikan, pemeliharaan, dan optimalisasi\n• Konsultasi efisiensi energi\n\nSemua layanan diberikan sesuai dengan spesifikasi yang disepakati dalam Perjanjian terpisah antara BGE dan klien. Informasi yang disajikan di situs web ini bersifat informatif dan tidak merupakan penawaran yang mengikat secara hukum.'
      },
      {
        title: '4. Kekayaan Intelektual',
        content: 'Seluruh konten yang terdapat di situs web BGE, termasuk namun tidak terbatas pada teks, grafik, logo, ikon, gambar, klip audio, unduhan digital, kompilasi data, dan perangkat lunak, adalah milik BGE atau penyedia kontennya dan dilindungi oleh undang-undang hak cipta, merek dagang, dan kekayaan intelektual lainnya yang berlaku di Indonesia dan internasional.\n\nAnda tidak diperbolehkan untuk mereproduksi, mendistribusikan, memodifikasi, menampilkan secara publik, atau membuat karya turunan dari konten kami tanpa izin tertulis sebelumnya dari BGE.'
      },
      {
        title: '5. Penggunaan yang Diizinkan',
        content: 'Anda setuju untuk menggunakan situs web dan layanan kami hanya untuk tujuan yang sah dan sesuai dengan ketentuan ini. Anda tidak diperbolehkan:\n\n• Menggunakan situs web dengan cara yang dapat merusak, menonaktifkan, membebani, atau mengganggu situs web.\n• Mencoba mendapatkan akses tidak sah ke sistem atau jaringan kami.\n• Menggunakan robot, spider, scraper, atau alat otomatis lainnya untuk mengakses atau mengumpulkan data dari situs web.\n• Mengirimkan konten yang melanggar hukum, berbahaya, mengancam, melecehkan, atau diskriminatif.\n• Menyamar sebagai orang lain atau entitas lain.\n• Melanggar hak kekayaan intelektual BGE atau pihak ketiga.'
      },
      {
        title: '6. Informasi dan Penawaran',
        content: 'Informasi produk dan layanan yang ditampilkan di situs web ini disediakan untuk tujuan informasi umum. BGE berusaha untuk memastikan keakuratan informasi, namun tidak menjamin bahwa deskripsi produk, spesifikasi teknis, atau konten lainnya bebas dari kesalahan. Harga, spesifikasi, dan ketersediaan dapat berubah tanpa pemberitahuan sebelumnya.\n\nPenawaran resmi dan kontrak hanya mengikat setelah Perjanjian ditandatangani oleh kedua belah pihak. Setiap kutipan harga atau proposal yang diberikan melalui situs web atau email bersifat indikatif dan dapat berubah hingga konfirmasi tertulis diberikan.'
      },
      {
        title: '7. Batasan Tanggung Jawab',
        content: 'Sejauh diizinkan oleh hukum yang berlaku, BGE tidak bertanggung jawab atas kerusakan langsung, tidak langsung, insidental, konsekuensial, atau hukuman yang timbul dari atau terkait dengan penggunaan situs web atau layanan kami. Ini termasuk namun tidak terbatas pada:\n\n• Kehilangan keuntungan atau pendapatan.\n• Kehilangan data atau gangguan bisnis.\n• Kerusakan peralatan atau properti.\n• Klaim pihak ketiga terhadap Anda.\n\nBGE tidak bertanggung jawab atas konten situs web pihak ketiga yang ditautkan dari situs web kami. Tanggung jawab total BGE kepada pengguna tidak melebihi jumlah yang dibayarkan oleh pengguna untuk layanan spesifik yang menjadi dasar klaim.'
      },
      {
        title: '8. Garansi',
        content: 'BGE memberikan garansi untuk produk dan layanan yang disediakan sesuai dengan ketentuan yang tercantum dalam Perjanjian terpisah. Garansi terbatas ini mencakup cacat material dan pengerjaan untuk periode yang ditentukan dalam dokumen garansi masing-masing.\n\nGaransi tidak mencakup:\n• Kerusakan akibat penyalahgunaan, kecelakaan, atau modifikasi yang tidak sah.\n• Keausan normal.\n• Kerusakan akibat force majeure.\n• Produk atau komponen yang masa garansinya telah kedaluwarsa.\n\nKLAIM GARANSI HARUS DIAJUKAN SECARA TERTULIS KEPADA BGE DALAM WAKTU 30 HARI SETELAH PENEMUAN CACAT.'
      },
      {
        title: '9. Force Majeure',
        content: 'BGE tidak bertanggung jawab atas kegagalan atau keterlambatan dalam pelaksanaan kewajibannya yang disebabkan oleh peristiwa di luar kendali wajar kami, termasuk namun tidak terbatas pada: bencana alam, perang, kerusuhan, epidemi, kebijakan pemerintah, pemogokan, gangguan pasokan listrik atau internet, dan peristiwa lain yang secara signifikan mempengaruhi kemampuan kami untuk menyediakan layanan. Dalam situasi force majeure, kewajiban BGE akan ditangguhkan untuk durasi peristiwa tersebut.'
      },
      {
        title: '10. Hukum yang Berlaku',
        content: 'Ketentuan Layanan ini diatur oleh dan ditafsirkan sesuai dengan hukum Republik Indonesia. Setiap sengketa yang timbul dari atau terkait dengan ketentuan ini akan diselesaikan melalui musyawarah untuk mencapai mufakat. Jika tidak tercapai kesepakatan, sengketa akan diselesaikan di Pengadilan Negeri Tangerang, Indonesia.'
      },
      {
        title: '11. Perubahan Ketentuan',
        content: 'BGE berhak untuk mengubah Ketentuan Layanan ini kapan saja. Perubahan akan efektif segera setelah dipublikasikan di halaman ini. Penggunaan situs web atau layanan kami secara berkelanjutan setelah perubahan tersebut merupakan penerimaan Anda terhadap ketentuan yang telah diubah. Kami mendorong Anda untuk meninjau halaman ini secara berkala.'
      },
      {
        title: '12. Hubungi Kami',
        content: ''
      }
    ],
    contactInfo: [
      { icon: MailIcon, label: 'Email', value: 'jakarta@benuagreen.com' },
      { icon: PhoneIcon, label: 'Telepon', value: '(62-21) 5573 1123' },
      { icon: MapPinIcon, label: 'Alamat', value: 'Jl. Trocadero Office Park, Ruko Piazza De Europe Garnier No. 82, Lippo Karawaci, Tangerang 15139' },
    ],
    backLink: 'Kembali ke Beranda'
  } : {
    title: 'Terms of Service',
    subtitle: 'Terms and conditions governing the use of PT. Benua Green Energy\'s services and website.',
    lastUpdated: 'Last updated: January 1, 2025',
    sections: [
      {
        title: '1. Acceptance of Terms',
        content: 'By accessing and using the PT. Benua Green Energy ("BGE", "we", "us", "our") website, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you are not authorized to use our website or services. These terms apply to all visitors, users, and others who access or use our services.'
      },
      {
        title: '2. Definitions',
        content: '• "Company" refers to PT. Benua Green Energy, domiciled in Tangerang, Banten, Indonesia.\n• "Services" includes all energy consulting services, HVAC installation, renewable energy solutions, energy audits, maintenance, and related services offered by BGE.\n• "User" refers to any individual or entity accessing the website or using BGE services.\n• "Content" includes all text, images, videos, documents, and other materials on the BGE website.\n• "Agreement" refers to a separate formal contract signed between BGE and a client for specific services.'
      },
      {
        title: '3. Services',
        content: 'BGE provides various energy consulting and technical solution services, including but not limited to:\n\n• HVAC and industrial cooling systems (Chillers, Cooling Towers, etc.)\n• Renewable energy solutions (solar panels, biomass boilers)\n• Energy audits and energy management\n• System installation, commissioning, and testing\n• Repair, maintenance, and optimization\n• Energy efficiency consulting\n\nAll services are provided in accordance with specifications agreed upon in a separate Agreement between BGE and the client. Information presented on this website is for informational purposes and does not constitute a legally binding offer.'
      },
      {
        title: '4. Intellectual Property',
        content: 'All content on the BGE website, including but not limited to text, graphics, logos, icons, images, audio clips, digital downloads, data compilations, and software, is the property of BGE or its content suppliers and is protected by copyright, trademark, and other intellectual property laws applicable in Indonesia and internationally.\n\nYou may not reproduce, distribute, modify, publicly display, or create derivative works from our content without prior written permission from BGE.'
      },
      {
        title: '5. Permitted Use',
        content: 'You agree to use our website and services only for lawful purposes and in accordance with these terms. You are prohibited from:\n\n• Using the website in any way that could damage, disable, overburden, or impair the website.\n• Attempting to gain unauthorized access to our systems or networks.\n• Using robots, spiders, scrapers, or other automated tools to access or collect data from the website.\n• Submitting content that is unlawful, harmful, threatening, harassing, or discriminatory.\n• Impersonating another person or entity.\n• Violating the intellectual property rights of BGE or third parties.'
      },
      {
        title: '6. Information and Offers',
        content: 'Product and service information displayed on this website is provided for general informational purposes. BGE strives to ensure the accuracy of information but does not guarantee that product descriptions, technical specifications, or other content is error-free. Prices, specifications, and availability may change without prior notice.\n\nOfficial offers and contracts are binding only after an Agreement is signed by both parties. Any price quotes or proposals provided through the website or email are indicative and subject to change until written confirmation is provided.'
      },
      {
        title: '7. Limitation of Liability',
        content: 'To the extent permitted by applicable law, BGE shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from or related to the use of our website or services. This includes but is not limited to:\n\n• Loss of profits or revenue.\n• Loss of data or business interruption.\n• Damage to equipment or property.\n• Third-party claims against you.\n\nBGE is not responsible for the content of third-party websites linked from our website. BGE\'s total liability to a user shall not exceed the amount paid by the user for the specific service giving rise to the claim.'
      },
      {
        title: '8. Warranty',
        content: 'BGE provides warranties for products and services as specified in the separate Agreement. This limited warranty covers material defects and workmanship for the period specified in the respective warranty documents.\n\nWarranties do not cover:\n• Damage from misuse, accident, or unauthorized modification.\n• Normal wear and tear.\n• Force majeure damage.\n• Products or components with expired warranties.\n\nWARRANTY CLAIMS MUST BE SUBMITTED IN WRITING TO BGE WITHIN 30 DAYS OF DISCOVERY OF THE DEFECT.'
      },
      {
        title: '9. Force Majeure',
        content: 'BGE shall not be liable for any failure or delay in performing its obligations caused by events beyond our reasonable control, including but not limited to: natural disasters, war, civil unrest, epidemics, government policies, strikes, power or internet disruptions, and other events that significantly affect our ability to provide services. In force majeure situations, BGE\'s obligations shall be suspended for the duration of the event.'
      },
      {
        title: '10. Governing Law',
        content: 'These Terms of Service are governed by and construed in accordance with the laws of the Republic of Indonesia. Any disputes arising from or related to these terms shall first be resolved through deliberation to reach consensus. If no agreement is reached, the dispute shall be settled at the District Court of Tangerang, Indonesia.'
      },
      {
        title: '11. Changes to Terms',
        content: 'BGE reserves the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting on this page. Continued use of our website or services after such changes constitutes your acceptance of the modified terms. We encourage you to review this page periodically.'
      },
      {
        title: '12. Contact Us',
        content: ''
      }
    ],
    contactInfo: [
      { icon: MailIcon, label: 'Email', value: 'jakarta@benuagreen.com' },
      { icon: PhoneIcon, label: 'Phone', value: '(62-21) 5573 1123' },
      { icon: MapPinIcon, label: 'Address', value: 'Jl. Trocadero Office Park, Ruko Piazza De Europe Garnier No. 82, Lippo Karawaci, Tangerang 15139' },
    ],
    backLink: 'Back to Home'
  }

  return (
    <div className="page-enter">
      {/* Hero Banner */}
      <section className="relative min-h-[40vh] md:min-h-[50vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(135deg, #0D1B2A 0%, #1B2838 30%, #2C3E50 60%, #1A237E 100%)',
          }} />
          <div className="noise-texture opacity-50 pointer-events-none mix-blend-overlay absolute inset-0" />
        </div>
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{backgroundImage:'linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px)', backgroundSize:'60px 60px'}} />

        <div className="absolute top-20 left-10 w-72 h-72 bg-[#2D5A27]/15 rounded-full blur-3xl animate-float pointer-events-none" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#1A237E]/10 rounded-full blur-3xl animate-float pointer-events-none" style={{animationDelay:'2s'}} />
        <div className="absolute top-40 right-1/4 w-64 h-64 bg-[#4CAF50]/10 rounded-full blur-3xl animate-float pointer-events-none" style={{animationDelay:'4s'}} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 w-full pb-24 md:pb-32">
          <div className="max-w-3xl">
            <Breadcrumb items={[{ label: lang === 'id' ? 'Ketentuan Layanan' : 'Terms of Service' }]} lang={lang} />
            <AnimateIn>
              <div className="flex items-center gap-3 mb-4 mt-8">
                <FileTextIcon size={28} className="text-[#2D5A27]" />
                <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white">{t.title}</h1>
              </div>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 max-w-2xl">{t.subtitle}</p>
              <p className="text-sm text-white/50 mt-3">{t.lastUpdated}</p>
            </AnimateIn>
          </div>
        </div>
        {/* Smooth transition blend */}
        <div className="absolute bottom-0 left-0 right-0 h-32 md:h-48 z-10 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, transparent 0%, rgba(13,27,42,0.3) 30%, rgba(253,251,247,0.6) 70%, #FDFBF7 100%)',
          }}
        />
      </section>

      {/* Section Divider */}
      <div className="section-divider" />

      {/* Content */}
      <div className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 bg-[#FDFBF7] relative">
        <div className="noise-texture opacity-50 pointer-events-none mix-blend-overlay absolute inset-0" />
        <div className="max-w-4xl sm:max-w-5xl lg:max-w-6xl mx-auto relative z-10">
          {/* Sections */}
          <div className="space-y-12">
            {t.sections.map((section, i) => (
              <AnimateIn key={i} delay={i * 0.05}>
                <section>
                  <h2 className="font-serif text-xl sm:text-2xl md:text-3xl text-[#1A252F] mb-4 heading-line inline-block">{section.title}</h2>
                  {section.content ? (
                    <div className="text-sm sm:text-base lg:text-lg text-[#2C3E50]/80 leading-relaxed whitespace-pre-line mt-4">
                      {section.content}
                    </div>
                  ) : (
                    <div className="mt-4 space-y-3">
                      {t.contactInfo.map((item, j) => {
                        const Icon = item.icon
                        return (
                          <div key={j} className="flex items-center gap-3 text-sm sm:text-base lg:text-lg text-[#2C3E50]/80">
                            <Icon size={16} className="text-[#2D5A27] shrink-0" />
                            <span>
                              <strong>{item.label}:</strong> {item.value}
                            </span>
                          </div>
                        )
                      })}
                    </div>
                  )}
                </section>
              </AnimateIn>
            ))}
          </div>

          {/* Back link */}
          <AnimateIn delay={0.5}>
            <div className="mt-16 pt-8 border-t border-[#2C3E50]/10">
              <Link href={`/${lang}`} className="inline-flex items-center gap-2 text-[#2D5A27] font-semibold hover:gap-3 hover:text-[#4CAF50] hover:underline transition-all duration-300">
                <ArrowLeftIcon size={16} />
                {t.backLink}
              </Link>
            </div>
          </AnimateIn>
        </div>
      </div>
    </div>
  )
}
