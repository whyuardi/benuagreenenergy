'use client'
import Link from 'next/link'
import { ShieldIcon, MailIcon, PhoneIcon, MapPinIcon, ArrowLeftIcon } from '@/components/Icons'
import { AnimateIn } from '@/components/AnimateIn'
import Breadcrumb from '@/components/Breadcrumb'

export default function PrivacyPage({ params }: { params: { lang: string } }) {
  const lang = params.lang === 'en' ? 'en' : 'id'

  const t = lang === 'id' ? {
    title: 'Kebijakan Privasi',
    subtitle: 'Komitmen kami terhadap perlindungan data pribadi Anda sesuai dengan peraturan perundang-undangan yang berlaku.',
    lastUpdated: 'Terakhir diperbarui: 1 Januari 2025',
    sections: [
      {
        title: '1. Pendahuluan',
        content: 'PT. Benua Green Energy ("BGE", "kami", "milik kami") berkomitmen untuk melindungi privasi data pribadi Anda. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, mengungkapkan, dan melindungi informasi pribadi Anda ketika Anda mengunjungi situs web kami, menggunakan layanan kami, atau berinteraksi dengan kami melalui saluran komunikasi lainnya. Mohon baca kebijakan ini dengan saksama untuk memahami praktik kami mengenai data pribadi Anda.'
      },
      {
        title: '2. Data yang Kami Kumpulkan',
        content: 'Kami dapat mengumpulkan jenis informasi pribadi berikut:\n\n• Informasi Identitas: Nama lengkap, jabatan, nama perusahaan, alamat kantor.\n• Informasi Kontak: Alamat email, nomor telepon, alamat fisik.\n• Informasi Teknis: Alamat IP, jenis browser, informasi perangkat, data cookie, dan data analitik penggunaan situs web.\n• Informasi Komunikasi: Catatan korespondensi ketika Anda menghubungi kami melalui email, formulir kontak, atau saluran lainnya.\n• Informasi Transaksi: Detail tentang permintaan penawaran, kontrak, faktur, dan riwayat pembelian.\n\nKami hanya mengumpulkan informasi yang Anda berikan secara sukarela atau yang diperlukan untuk menyediakan layanan kami kepada Anda.'
      },
      {
        title: '3. Penggunaan Data',
        content: 'Kami menggunakan data pribadi Anda untuk tujuan:\n\n• Menyediakan, memelihara, dan meningkatkan layanan konsultasi energi, HVAC, dan solusi energi terbarukan kami.\n• Memproses permintaan penawaran, proposal, dan kontrak.\n• Berkomunikasi dengan Anda mengenai layanan, pembaruan, dan informasi teknis.\n• Mematuhi kewajiban hukum dan peraturan yang berlaku.\n• Menganalisis penggunaan situs web untuk meningkatkan pengalaman pengguna.\n• Melindungi hak, properti, dan keamanan BGE serta pengguna layanan kami.\n\nKami tidak akan menggunakan data pribadi Anda untuk tujuan pemasaran tanpa persetujuan eksplisit Anda.'
      },
      {
        title: '4. Dasar Hukum Pemrosesan',
        content: 'Kami memproses data pribadi Anda berdasarkan dasar hukum berikut:\n\n• Pelaksanaan Kontrak: Pemrosesan diperlukan untuk melaksanakan kontrak dengan Anda atau untuk mengambil langkah-langkah sebelum masuk ke dalam kontrak.\n• Kepentingan Sah: Pemrosesan diperlukan untuk kepentingan sah kami dalam menjalankan bisnis, termasuk komunikasi dengan klien, pemasaran langsung, dan keamanan sistem.\n• Kewajiban Hukum: Pemrosesan diperlukan untuk mematuhi kewajiban hukum yang berlaku.\n• Persetujuan: Dalam situasi tertentu, kami akan meminta persetujuan eksplisit Anda sebelum memproses data pribadi Anda.'
      },
      {
        title: '5. Penyimpanan dan Keamanan Data',
        content: 'Kami menyimpan data pribadi Anda selama diperlukan untuk memenuhi tujuan pengumpulannya, termasuk untuk memenuhi persyaratan hukum, akuntansi, dan pelaporan. Kami menerapkan langkah-langkah keamanan teknis dan organisasi yang sesuai untuk melindungi data pribadi Anda dari akses tidak sah, perubahan, pengungkapan, atau penghancuran, termasuk:\n\n• Enkripsi data dalam transit dan penyimpanan.\n• Kontrol akses berbasis peran.\n• Firewall dan sistem deteksi intrusi.\n• Audit keamanan rutin.\n• Pelatihan kesadaran privasi untuk karyawan.'
      },
      {
        title: '6. Pengungkapan Data kepada Pihak Ketiga',
        content: 'Kami dapat mengungkapkan data pribadi Anda kepada:\n\n• Afiliasi dan anak perusahaan BGE Group.\n• Penyedia layanan pihak ketiga yang membantu operasi bisnis kami (hosting web, layanan IT, pemrosesan pembayaran).\n• Mitra bisnis yang bekerja sama dengan kami dalam proyek energi.\n• Otoritas regulator atau penegak hukum jika diwajibkan oleh hukum.\n\nKami tidak akan menjual, menyewakan, atau memperdagangkan data pribadi Anda kepada pihak ketiga untuk tujuan pemasaran mereka sendiri.'
      },
      {
        title: '7. Hak-Hak Anda',
        content: 'Anda memiliki hak-hak berikut terkait data pribadi Anda:\n\n• Hak Akses: Meminta salinan data pribadi yang kami simpan.\n• Hak Koreksi: Meminta perbaikan data yang tidak akurat atau tidak lengkap.\n• Hak Penghapusan: Meminta penghapusan data pribadi Anda dalam kondisi tertentu.\n• Hak Pembatasan: Meminta pembatasan pemrosesan data Anda.\n• Hak Portabilitas: Meminta transfer data Anda ke pihak lain.\n• Hak Keberatan: Menolak pemrosesan data Anda untuk tujuan tertentu.\n\nUntuk menggunakan hak-hak Anda, silakan hubungi kami melalui informasi kontak di bawah ini.'
      },
      {
        title: '8. Cookie',
        content: 'Situs web kami menggunakan cookie dan teknologi pelacakan serupa untuk meningkatkan pengalaman pengguna, menganalisis lalu lintas, dan untuk tujuan keamanan. Anda dapat mengontrol preferensi cookie melalui pengaturan browser Anda. Cookie yang kami gunakan meliputi:\n\n• Cookie Penting: Diperlukan untuk fungsi dasar situs web.\n• Cookie Analitik: Membantu kami memahami bagaimana pengunjung berinteraksi dengan situs web.\n• Cookie Fungsional: Mengingat preferensi Anda untuk pengalaman yang lebih personal.\n\nDengan melanjutkan menggunakan situs web kami, Anda menyetujui penggunaan cookie sesuai dengan kebijakan ini.'
      },
      {
        title: '9. Perubahan Kebijakan',
        content: 'Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Setiap perubahan akan dipublikasikan di halaman ini dengan tanggal "Terakhir diperbarui" yang direvisi. Kami mendorong Anda untuk meninjau halaman ini secara berkala untuk mendapatkan informasi terbaru tentang praktik privasi kami. Perubahan signifikan akan diberitahukan melalui pemberitahuan di situs web kami atau melalui email jika relevan.'
      },
      {
        title: '10. Hubungi Kami',
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
    title: 'Privacy Policy',
    subtitle: 'Our commitment to protecting your personal data in accordance with applicable laws and regulations.',
    lastUpdated: 'Last updated: January 1, 2025',
    sections: [
      {
        title: '1. Introduction',
        content: 'PT. Benua Green Energy ("BGE", "we", "us", "our") is committed to protecting your personal data privacy. This Privacy Policy explains how we collect, use, disclose, and protect your personal information when you visit our website, use our services, or interact with us through other communication channels. Please read this policy carefully to understand our practices regarding your personal data.'
      },
      {
        title: '2. Data We Collect',
        content: 'We may collect the following types of personal information:\n\n• Identity Information: Full name, job title, company name, office address.\n• Contact Information: Email address, phone number, physical address.\n• Technical Information: IP address, browser type, device information, cookie data, and website usage analytics.\n• Communication Information: Correspondence records when you contact us via email, contact forms, or other channels.\n• Transaction Information: Details about quotation requests, contracts, invoices, and purchase history.\n\nWe only collect information that you voluntarily provide or that is necessary to provide our services to you.'
      },
      {
        title: '3. Use of Data',
        content: 'We use your personal data for the following purposes:\n\n• Providing, maintaining, and improving our energy consulting, HVAC, and renewable energy solutions.\n• Processing quotation requests, proposals, and contracts.\n• Communicating with you regarding services, updates, and technical information.\n• Complying with applicable legal and regulatory obligations.\n• Analyzing website usage to improve user experience.\n• Protecting the rights, property, and safety of BGE and our service users.\n\nWe will not use your personal data for marketing purposes without your explicit consent.'
      },
      {
        title: '4. Legal Basis for Processing',
        content: 'We process your personal data based on the following legal bases:\n\n• Contractual Performance: Processing is necessary to perform a contract with you or to take steps before entering into a contract.\n• Legitimate Interests: Processing is necessary for our legitimate interests in running our business, including client communications, direct marketing, and system security.\n• Legal Obligation: Processing is necessary to comply with applicable legal obligations.\n• Consent: In certain situations, we will seek your explicit consent before processing your personal data.'
      },
      {
        title: '5. Data Retention and Security',
        content: 'We retain your personal data for as long as necessary to fulfill the purposes for which it was collected, including to meet legal, accounting, and reporting requirements. We implement appropriate technical and organizational security measures to protect your personal data from unauthorized access, alteration, disclosure, or destruction, including:\n\n• Encryption of data in transit and at rest.\n• Role-based access controls.\n• Firewalls and intrusion detection systems.\n• Regular security audits.\n• Privacy awareness training for employees.'
      },
      {
        title: '6. Disclosure to Third Parties',
        content: 'We may disclose your personal data to:\n\n• BGE Group affiliates and subsidiaries.\n• Third-party service providers who assist our business operations (web hosting, IT services, payment processing).\n• Business partners with whom we collaborate on energy projects.\n• Regulatory authorities or law enforcement if required by law.\n\nWe will not sell, rent, or trade your personal data to third parties for their own marketing purposes.'
      },
      {
        title: '7. Your Rights',
        content: 'You have the following rights regarding your personal data:\n\n• Right of Access: Request a copy of the personal data we hold.\n• Right to Rectification: Request correction of inaccurate or incomplete data.\n• Right to Erasure: Request deletion of your personal data under certain conditions.\n• Right to Restriction: Request restriction of processing your data.\n• Right to Portability: Request transfer of your data to another party.\n• Right to Object: Object to processing of your data for certain purposes.\n\nTo exercise your rights, please contact us using the information below.'
      },
      {
        title: '8. Cookies',
        content: 'Our website uses cookies and similar tracking technologies to enhance user experience, analyze traffic, and for security purposes. You can control cookie preferences through your browser settings. The cookies we use include:\n\n• Essential Cookies: Required for basic website functionality.\n• Analytics Cookies: Help us understand how visitors interact with our website.\n• Functional Cookies: Remember your preferences for a more personalized experience.\n\nBy continuing to use our website, you consent to the use of cookies in accordance with this policy.'
      },
      {
        title: '9. Policy Changes',
        content: 'We may update this Privacy Policy from time to time. Any changes will be posted on this page with a revised "Last updated" date. We encourage you to review this page periodically for the latest information on our privacy practices. Significant changes will be notified through our website or via email where relevant.'
      },
      {
        title: '10. Contact Us',
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
            <Breadcrumb items={[{ label: lang === 'id' ? 'Kebijakan Privasi' : 'Privacy Policy' }]} lang={lang} />
            <AnimateIn>
              <div className="flex items-center gap-3 mb-4 mt-8">
                <ShieldIcon size={28} className="text-[#2D5A27]" />
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
