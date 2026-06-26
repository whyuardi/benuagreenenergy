'use client'
import { useState, useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

const navData: Record<string, any> = {
  id: {
    links: [
      { href: '/', label: 'Beranda' },
      { href: '/about', label: 'Tentang Kami' },
      { href: '/services', label: 'Layanan' },
      { href: '/products', label: 'Produk' },
      { href: '/portfolio', label: 'Proyek' },
    ],
    extraLinks: [
      { href: '/faq', label: 'FAQ' },
      { href: '/contact', label: 'Hubungi Kami' },
    ],
    cta: 'Konsultasi Gratis',
    footerDesc: 'Pemimpin dalam solusi energi hijau dan efisiensi industri di Indonesia sejak 1998.',
    navTitle: 'Navigasi',
    contactTitle: 'Kontak',
    productTitle: 'Produk',
    rights: 'All rights reserved.',
    products: ['Chiller / HVAC', 'Cooling Tower', 'Steam Accessories', 'Solar Panel', 'BMS', 'Green Solution', 'High Efficiency Pump', 'PPR Pipe & Fittings'],
    contact: { phone: '(62-21) 5573 1123', email: 'jakarta@benuagreen.com', location: 'Jl. Trocadero Office Park, Ruko Piazza De Europe Garnier No. 82, Lippo Karawaci, Tangerang 15139' }
  },
  en: {
    links: [
      { href: '/', label: 'Home' },
      { href: '/about', label: 'About' },
      { href: '/services', label: 'Services' },
      { href: '/products', label: 'Products' },
      { href: '/portfolio', label: 'Portfolio' },
    ],
    extraLinks: [
      { href: '/faq', label: 'FAQ' },
      { href: '/contact', label: 'Contact' },
    ],
    cta: 'Free Consultation',
    footerDesc: 'Leader in green energy solutions and industrial efficiency in Indonesia since 1998.',
    navTitle: 'Navigation',
    contactTitle: 'Contact',
    productTitle: 'Products',
    rights: 'All rights reserved.',
    products: ['Chiller / HVAC', 'Cooling Tower', 'Steam Accessories', 'Solar Panel', 'BMS', 'Green Solution', 'High Efficiency Pump', 'PPR Pipe & Fittings'],
    contact: { phone: '(62-21) 5573 1123', email: 'jakarta@benuagreen.com', location: 'Jl. Trocadero Office Park, Ruko Piazza De Europe Garnier No. 82, Lippo Karawaci, Tangerang 15139' }
  }
}

export default function LangLayout({ children, params }: { children: React.ReactNode, params: { lang: string } }) {
  const pathname = usePathname()
  const router = useRouter()
  const lang = params.lang === 'en' ? 'en' : 'id'
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const t = navData[lang]
  const isHome = pathname === `/${lang}` || pathname === `/${lang}/`

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.title = lang === 'en'
      ? 'Benua Green Energy — Green Energy Industrial Solutions'
      : 'Benua Green Energy — Solusi Energi Hijau Industri'
  }, [lang])

  const switchLang = (l: string) => {
    router.push(pathname.replace(/^\/(en|id)/, `/${l}`))
  }

  return (
    <div className="min-h-screen flex flex-col" style={{ background: 'var(--surface)', color: 'var(--ink)' }}>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://images.unsplash.com" />

      {/* ═══════ HEADER ═══════ */}
      <header className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
        isHome && !scrolled ? 'bg-transparent' : 'bg-white border-b border-[var(--border)]'
      }`} style={{ height: 72 }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          {/* Logo */}
          <Link href={`/${lang}`} className="flex items-center gap-2.5 hover:opacity-90 transition-opacity shrink-0">
            <div className="relative shrink-0 w-9 h-9">
              <Image src="/logo-bge.jpg" alt="PT. Benua Green Energy" fill className="object-contain rounded-full" priority />
            </div>
            <div className="flex flex-col tracking-tight leading-none">
              <span className={`font-bold text-[10px] lg:text-xs uppercase ${isHome && !scrolled ? 'text-white' : 'text-[var(--ink)]'}`}>Benua Green</span>
              <span className={`font-bold text-[10px] lg:text-xs uppercase ${isHome && !scrolled ? 'text-white/70' : 'text-[var(--brand-bright)]'}`}>Energy</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-7">
            {t.links.map((l: any) => (
              <Link key={l.href} href={`/${lang}${l.href}`}
                className={`text-sm font-medium transition-colors ${
                  isHome && !scrolled ? 'text-white/80 hover:text-white' : 'text-[var(--ink-muted)] hover:text-[var(--ink)]'
                }`}>
                {l.label}
              </Link>
            ))}
            <button onClick={() => switchLang(lang === 'id' ? 'en' : 'id')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                isHome && !scrolled ? 'text-white/70 hover:text-white hover:bg-white/10' : 'text-[var(--ink-muted)] hover:text-[var(--ink)] hover:bg-[var(--surface-alt)]'
              }`}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
              <span>{lang === 'id' ? 'EN' : 'ID'}</span>
            </button>
            <Link href={`/${lang}/contact`}
              className={`text-sm py-2 px-5 rounded-lg font-semibold transition-all ${
                isHome && !scrolled
                  ? 'bg-[var(--brand-bright)] text-[var(--dark)] hover:bg-[#6fcf97]'
                  : 'bg-[var(--brand)] text-white hover:bg-[var(--brand-light)]'
              }`}>
              {t.cta}
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={() => setMenuOpen(!menuOpen)}
            className={`lg:hidden p-2 rounded-md transition-colors ${
              isHome && !scrolled ? 'text-white/80 hover:bg-white/10' : 'text-[var(--ink-muted)] hover:bg-[var(--surface-alt)]'
            }`} aria-label="Buka menu">
            {menuOpen ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
            )}
          </button>
        </div>
      </header>

      {/* ═══════ MOBILE MENU ═══════ */}
      {menuOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setMenuOpen(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-80 max-w-[85vw] bg-white shadow-2xl p-8 overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <span className="font-outfit font-bold text-lg text-[var(--ink)]">Menu</span>
              <button onClick={() => setMenuOpen(false)} className="p-2 rounded-md hover:bg-[var(--surface-alt)] text-[var(--ink-muted)]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
              </button>
            </div>
            <nav className="space-y-1">
              {[...t.links, ...t.extraLinks].map((l: any) => (
                <Link key={l.href} href={`/${lang}${l.href}`} onClick={() => setMenuOpen(false)}
                  className="block px-4 py-3 text-[var(--ink-muted)] hover:text-[var(--ink)] hover:bg-[var(--surface-alt)] rounded-lg font-medium transition-colors text-sm">
                  {l.label}
                </Link>
              ))}
            </nav>
            <div className="mt-6 pt-6 border-t border-[var(--border)] space-y-3">
              <button onClick={() => { switchLang(lang === 'id' ? 'en' : 'id'); setMenuOpen(false) }}
                className="w-full flex items-center gap-2 px-4 py-3 text-[var(--ink-muted)] hover:text-[var(--ink)] hover:bg-[var(--surface-alt)] rounded-lg font-medium text-sm transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                {lang === 'id' ? 'English' : 'Bahasa Indonesia'}
              </button>
              <Link href={`/${lang}/contact`} onClick={() => setMenuOpen(false)}
                className="block w-full text-center px-4 py-3 bg-[var(--brand)] text-white rounded-lg font-semibold text-sm hover:bg-[var(--brand-light)] transition-colors">
                {t.cta}
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* MAIN */}
      <main className="flex-1">{children}</main>

      {/* ═══════ FOOTER ═══════ */}
      <footer className="text-white" style={{ background: 'var(--dark)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="relative w-8 h-8">
                  <Image src="/logo-bge.jpg" alt="BGE" fill className="object-contain rounded-full" />
                </div>
                <div className="flex flex-col leading-none">
                  <span className="font-bold text-[9px] uppercase text-white">Benua Green</span>
                  <span className="font-bold text-[9px] uppercase text-[var(--brand-bright)]">Energy</span>
                </div>
              </div>
              <p className="text-white/50 text-sm leading-relaxed mb-4">{t.footerDesc}</p>
              <div className="flex gap-2">
                {['FB', 'IG', 'TW', 'YT'].map((s) => (
                  <a key={s} href="#" className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/40 hover:text-white transition-colors text-xs font-bold">
                    {s}
                  </a>
                ))}
              </div>
            </div>

            {/* Nav */}
            <div>
              <h3 className="font-bold text-sm uppercase tracking-wider mb-4">{t.navTitle}</h3>
              <ul className="space-y-2.5">
                {[...t.links, ...t.extraLinks].map((l: any) => (
                  <li key={l.href}><Link href={`/${lang}${l.href}`} className="text-white/50 hover:text-white text-sm transition-colors">{l.label}</Link></li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div>
              <h3 className="font-bold text-sm uppercase tracking-wider mb-4">{t.productTitle}</h3>
              <ul className="space-y-2.5">
                {t.products.slice(0, 5).map((p: string) => (
                  <li key={p}><Link href={`/${lang}/products`} className="text-white/50 hover:text-white text-sm transition-colors">{p}</Link></li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-bold text-sm uppercase tracking-wider mb-4">{t.contactTitle}</h3>
              <ul className="space-y-3">
                <li className="text-white/50 text-sm leading-relaxed">{t.contact.location}</li>
                <li><a href={`tel:${t.contact.phone}`} className="text-white/50 hover:text-white text-sm transition-colors">{t.contact.phone}</a></li>
                <li><a href={`mailto:${t.contact.email}`} className="text-white/50 hover:text-white text-sm transition-colors">{t.contact.email}</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/30 text-xs">© {new Date().getFullYear()} PT. Benua Green Energy. {t.rights}</p>
            <div className="flex gap-6">
              <Link href={`/${lang}/privacy`} className="text-white/30 hover:text-white text-xs transition-colors">Privacy</Link>
              <Link href={`/${lang}/terms`} className="text-white/30 hover:text-white text-xs transition-colors">Terms</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* WHATSAPP FAB */}
      <a href="https://wa.me/628158816259" target="_blank" rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
        style={{ background: '#25D366', boxShadow: '0 4px 20px rgba(37,211,102,0.3)' }}
        aria-label="Chat via WhatsApp">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      </a>

      {/* NOISE */}
      <div className="noise-overlay" aria-hidden="true" />
    </div>
  )
}
