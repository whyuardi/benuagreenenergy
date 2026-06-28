'use client'
import { useState, useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

const navData: Record<string, any> = {
  id: {
    links: [
      { href: '/', label: 'Beranda' },
      { href: '/about', label: 'Tentang' },
      { href: '/services', label: 'Layanan' },
      { href: '/products', label: 'Produk' },
      { href: '/portfolio', label: 'Proyek' },
    ],
    extraLinks: [
      { href: '/faq', label: 'FAQ' },
      { href: '/contact', label: 'Kontak' },
    ],
    cta: 'Konsultasi Gratis',
    ctaWhatsapp: 'https://wa.me/628176779719',
    footerDesc: 'BG Group, didirikan tahun 2000 dengan HQ di Singapore dan Jakarta, adalah pelopor investasi energi hijau dan keberlanjutan. 10% dari pendapatan tahunan dialokasikan untuk R&D.',
    navTitle: 'Navigasi',
    contactTitle: 'Kontak',
    productTitle: 'Produk',
    rights: 'All rights reserved.',
    products: [
      { name: 'Chiller / HVAC', slug: 'absorption-chiller' },
      { name: 'Cooling Tower', slug: 'cooling-tower' },
      { name: 'Steam Accessories', slug: 'steam-accessories' },
      { name: 'Solar Panel', slug: 'solar-panel' },
      { name: 'Building Management System', slug: 'bms' },
      { name: 'Green Solution', slug: 'green-solution' },
      { name: 'High Efficiency Pump', slug: 'high-efficiency-pump' },
      { name: 'PPR Pipe & Fittings', slug: 'ppr-pipe' },
      { name: 'Solar Inverter Optimizer', slug: 'solar-panel' },
      { name: 'Alkaline Water Ionizer', slug: 'alkaline-water-ionizer' },
    ],
    contact: {
      phone: '(62-21) 5573 1123',
      phone2: '+62 815-8816-259',
      phone3: '+62 817-6779-719',
      email: 'jakarta@benuagreen.com',
      email2: 'sales@benuagreen.com',
      location: 'Jl. Trocadero Office Park, Ruko Piazza De Europe Garnier No. 82, Lippo Karawaci, Tangerang 15139',
      hours_weekday: 'Sen - Jum: 08:00 - 17:00',
      hours_sat: 'Sabtu: 08:00 - 13:00'
    }
  },
  en: {
    links: [
      { href: '/', label: 'Home' },
      { href: '/about', label: 'About' },
      { href: '/services', label: 'Services' },
      { href: '/products', label: 'Products' },
      { href: '/portfolio', label: 'Portfolio' },
      { href: '/ems', label: 'EMS' },
    ],
    extraLinks: [
      { href: '/faq', label: 'FAQ' },
      { href: '/contact', label: 'Contact' },
    ],
    cta: 'Free Consultation',
    ctaWhatsapp: 'https://wa.me/628176779719',
    footerDesc: 'BG Group, established in 2000 with HQ in Singapore and Jakarta, is a leading advocate for green energy investment and sustainability.',
    navTitle: 'Navigation',
    contactTitle: 'Contact',
    productTitle: 'Products',
    rights: 'All rights reserved.',
    products: [
      { name: 'Chiller / HVAC', slug: 'absorption-chiller' },
      { name: 'Cooling Tower', slug: 'cooling-tower' },
      { name: 'Steam Accessories', slug: 'steam-accessories' },
      { name: 'Solar Panel', slug: 'solar-panel' },
      { name: 'Building Management System', slug: 'bms' },
      { name: 'Green Solution', slug: 'green-solution' },
      { name: 'High Efficiency Pump', slug: 'high-efficiency-pump' },
      { name: 'PPR Pipe & Fittings', slug: 'ppr-pipe' },
      { name: 'Solar Inverter Optimizer', slug: 'solar-panel' },
      { name: 'Alkaline Water Ionizer', slug: 'alkaline-water-ionizer' },
    ],
    contact: {
      phone: '(62-21) 5573 1123',
      phone2: '+62 815-8816-259',
      phone3: '+62 817-6779-719',
      email: 'jakarta@benuagreen.com',
      email2: 'sales@benuagreen.com',
      location: 'Jl. Trocadero Office Park, Ruko Piazza De Europe Garnier No. 82, Lippo Karawaci, Tangerang 15139',
      hours_weekday: 'Mon - Fri: 08:00 - 17:00',
      hours_sat: 'Sat: 08:00 - 13:00'
    }
  }
}

export default function LangLayout({ children, params }: { children: React.ReactNode; params: { lang: string } }) {
  const pathname = usePathname()
  const router = useRouter()
  const lang = params.lang === 'en' ? 'en' : 'id'
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const t = navData[lang]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { document.title = lang === 'en' ? 'Benua Green Energy - Green Energy Industrial Solutions' : 'Benua Green Energy - Solusi Energi Hijau Industri' }, [lang])

  const switchLang = (l: string) => router.push(pathname.replace(/^\/(en|id)/, `/${l}`))
  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="min-h-screen flex flex-col" style={{ background: '#FDFBF7', color: '#1a1a1a' }}>
      {/* ═══ NAVBAR ═══ */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#e8e4dd]' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 sm:h-[72px] flex items-center justify-between gap-4">
          <Link href={`/${lang}`} className="flex items-center shrink-0">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden bg-white">
              <Image
                src="/images/bge-logo-nav.png"
                alt="BGE"
                width={44}
                height={44}
                className="object-contain w-full h-full"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {t.links.slice(0, 5).map((l: any) => (
              <Link key={l.href} href={`/${lang}${l.href}`}
                className={`px-3 py-1.5 text-sm font-medium transition-colors rounded-lg ${scrolled ? 'text-[#6b6b6b] hover:text-[#1a1a1a] hover:bg-[#f5f2ec]' : 'text-white/80 hover:text-white hover:bg-white/10'}`}>
                {l.label}
              </Link>
            ))}
            <button onClick={() => switchLang(lang === 'id' ? 'en' : 'id')}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-sm font-medium transition-colors ${scrolled ? 'text-[#6b6b6b] hover:text-[#1a1a1a] hover:bg-[#f5f2ec]' : 'text-white/70 hover:text-white hover:bg-white/10'}`}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              {lang === 'id' ? 'EN' : 'ID'}
            </button>
            <Link href={`/${lang}/contact`}
              className={`ml-2 text-sm font-semibold px-5 py-2 rounded-lg transition-all ${scrolled ? 'bg-[#2d5a4a] text-white hover:bg-[#4a7c6f]' : 'bg-white text-[#1a1a1a] hover:bg-white/90'}`}>
              {t.cta}
            </Link>
          </nav>

          {/* Mobile: hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <Link href={`/${lang}/contact`}
              className={`text-xs font-semibold px-3 py-1.5 rounded-lg ${scrolled ? 'bg-[#2d5a4a] text-white' : 'bg-white/90 text-[#1a1a1a]'}`}>
              {t.cta}
            </Link>
            <button onClick={() => setMenuOpen(!menuOpen)}
              className={`p-2 rounded-lg transition-colors ${scrolled ? 'text-[#1a1a1a] hover:bg-[#f5f2ec]' : 'text-white hover:bg-white/10'}`}>
              {menuOpen ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* ═══ MOBILE MENU ═══ */}
      {menuOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={closeMenu} />
          <div className="absolute top-0 right-0 bottom-0 w-72 max-w-[80vw] bg-white p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-8">
              <span className="font-outfit font-bold text-lg">Menu</span>
              <button onClick={closeMenu} className="p-2 rounded-lg hover:bg-[#f5f2ec] transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
              </button>
            </div>
            <nav className="space-y-1">
              {[...t.links, ...t.extraLinks].map((l: any) => (
                <Link key={l.href} href={`/${lang}${l.href}`} onClick={closeMenu}
                  className="block px-4 py-3 text-[#6b6b6b] hover:text-[#1a1a1a] hover:bg-[#f5f2ec] rounded-xl font-medium text-sm transition-colors">
                  {l.label}
                </Link>
              ))}
            </nav>
            <div className="mt-8 pt-6 border-t border-[#e8e4dd] space-y-3">
              <button onClick={() => { switchLang(lang === 'id' ? 'en' : 'id'); closeMenu() }}
                className="w-full flex items-center gap-2 px-4 py-3 text-[#6b6b6b] hover:text-[#1a1a1a] hover:bg-[#f5f2ec] rounded-xl text-sm font-medium transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                {lang === 'id' ? 'English' : 'Bahasa Indonesia'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ═══ MAIN ═══ */}
      <main className="flex-1">{children}</main>

      {/* ═══ FOOTER ═══ */}
      <footer style={{ background: '#1a1a1a' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">
            {/* Brand */}
            <div className="sm:col-span-2 lg:col-span-4">
              <div className="flex items-center gap-3 mb-5">
                <div className="relative w-10 h-10 shrink-0">
                  <Image src="/logo-bge.jpg" alt="BGE" fill sizes="40px" className="object-contain rounded-full" loading="lazy" />
                </div>
                <div className="flex flex-col leading-none">
                  <span className="font-outfit font-bold text-sm text-white">Benua Green</span>
                  <span className="font-outfit font-bold text-[11px] text-[#5da383]">Energy</span>
                </div>
              </div>
              <p className="text-white/40 text-sm leading-relaxed max-w-xs mb-6">{t.footerDesc}</p>
              <div className="flex gap-2">
                {['FB', 'IG', 'TW', 'YT'].map(s => (
                  <a key={s} href="#" className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 border border-white/[0.06] flex items-center justify-center text-white/30 hover:text-white transition-colors text-[9px] font-bold">{s}</a>
                ))}
              </div>
            </div>

            {/* Nav */}
            <div className="lg:col-span-2">
              <h3 className="font-outfit text-white text-[11px] uppercase tracking-[0.15em] font-bold mb-5">{t.navTitle}</h3>
              <ul className="space-y-3">
                {[...t.links, ...t.extraLinks].filter((l: any) => l.href !== '/ems').map((l: any) => (
                  <li key={l.href}><Link href={`/${lang}${l.href}`} className="text-white/40 hover:text-white text-sm transition-colors">{l.label}</Link></li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div className="lg:col-span-3">
              <h3 className="font-outfit text-white text-[11px] uppercase tracking-[0.15em] font-bold mb-5">{t.productTitle}</h3>
              <ul className="space-y-3">
                {t.products.map((p: { name: string; slug: string }) => (
                  <li key={p.slug}><Link href={`/${lang}/products?tab=${p.slug}`} className="text-white/40 hover:text-white text-sm transition-colors">{p.name}</Link></li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="lg:col-span-3">
              <h3 className="font-outfit text-white text-[11px] uppercase tracking-[0.15em] font-bold mb-5">{t.contactTitle}</h3>
              <ul className="space-y-3">
                <li className="text-white/40 text-sm leading-relaxed">{t.contact.location}</li>
                <li><a href={`tel:${t.contact.phone}`} className="text-white/40 hover:text-white text-sm transition-colors">{t.contact.phone}</a></li>
                <li><a href={`tel:${t.contact.phone2}`} className="text-white/40 hover:text-white text-sm transition-colors">{t.contact.phone2}</a></li>
                <li><a href={`mailto:${t.contact.email}`} className="text-white/40 hover:text-white text-sm transition-colors">{t.contact.email}</a></li>
                <li><a href={`mailto:${t.contact.email2}`} className="text-white/40 hover:text-white text-sm transition-colors">{t.contact.email2}</a></li>
                <li className="text-white/30 text-xs leading-relaxed">
                  {t.contact.hours_weekday}<br />
                  {t.contact.hours_sat}<br />
                  {lang === 'id' ? 'Minggu: Libur' : 'Sunday: Closed'}
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-white/[0.06] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/20 text-xs">© {new Date().getFullYear()} PT. Benua Green Energy. {t.rights}</p>
            <div className="flex gap-6">
              <Link href={`/${lang}/privacy`} className="text-white/20 hover:text-white/40 text-xs transition-colors">Privacy</Link>
              <Link href={`/${lang}/terms`} className="text-white/20 hover:text-white/40 text-xs transition-colors">Terms</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* ═══ WA FAB ═══ */}
      <a href="https://wa.me/628158816259" target="_blank" rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] shadow-lg flex items-center justify-center transition-all hover:scale-110 active:scale-95"
        aria-label="Chat via WhatsApp">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      </a>
    </div>
  )
}
