'use client'
import { useState, useEffect, useRef, useCallback } from 'react'
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

/* ─── ScrollReveal for IntersectionObserver entries ─── */
function useReveal(threshold = 0.08) {
  const ref = useRef<HTMLDivElement>(null)
  const [v, setV] = useState(false)
  useEffect(() => {
    const el = ref.current; if (!el) return
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver(([e]) => {
        if (e.isIntersecting) { setV(true); io.disconnect() }
      }, { threshold })
      io.observe(el); return () => io.disconnect()
    } else { setV(true) }
  }, [threshold])
  return { ref, v }
}

function R({ children, d = 0, c = '' }: { children: React.ReactNode; d?: number; c?: string }) {
  const { ref, v } = useReveal()
  return (
    <div ref={ref} className={c} style={{
      opacity: v ? 1 : 0,
      transform: v ? 'none' : 'translateY(48px) blur(8px)',
      filter: v ? 'none' : 'blur(8px)',
      transition: `opacity 900ms cubic-bezier(0.16,1,0.3,1) ${d}ms, transform 900ms cubic-bezier(0.16,1,0.3,1) ${d}ms, filter 900ms cubic-bezier(0.16,1,0.3,1) ${d}ms`,
      willChange: 'opacity, transform',
    }}>{children}</div>
  )
}

export default function LangLayout({ children, params }: { children: React.ReactNode; params: { lang: string } }) {
  const pathname = usePathname()
  const router = useRouter()
  const lang = params.lang === 'en' ? 'en' : 'id'
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const t = navData[lang]
  const isHome = pathname === `/${lang}` || pathname === `/${lang}/`

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.title = lang === 'en'
      ? 'Benua Green Energy — Green Energy Industrial Solutions'
      : 'Benua Green Energy — Solusi Energi Hijau Industri'
  }, [lang])

  const switchLang = useCallback((l: string) => {
    router.push(pathname.replace(/^\/(en|id)/, `/${l}`))
  }, [pathname, router])

  return (
    <div className="min-h-screen flex flex-col" style={{ background: 'var(--surface)', color: 'var(--ink)' }}>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://images.unsplash.com" />

      {/* ═══════ FLOATING GLASS PILL NAV ═══════ */}
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 sm:pt-5 pointer-events-none">
        <nav className={`pointer-events-auto flex items-center gap-1 px-2.5 py-2 rounded-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isHome && !scrolled
            ? 'bg-white/8 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/10'
            : scrolled
              ? 'bg-white/95 backdrop-blur-xl border border-[var(--border)] shadow-xl shadow-black/[0.04]'
              : 'bg-white/95 backdrop-blur-xl border border-[var(--border)] shadow-xl shadow-black/[0.04]'
        }`}>
          {/* Logo */}
          <Link href={`/${lang}`} className="flex items-center gap-2 pl-3 pr-4 hover:opacity-80 transition-opacity shrink-0">
            <div className="relative w-7 h-7">
              <Image src="/logo-bge.jpg" alt="BGE" fill className="object-contain rounded-full" priority />
            </div>
            <span className={`font-outfit text-[13px] font-bold tracking-tight hidden sm:block ${isHome && !scrolled ? 'text-white' : 'text-[var(--ink)]'}`}>BGE</span>
          </Link>

          {/* Nav Links */}
          <div className="hidden lg:flex items-center gap-0.5">
            {t.links.map((l: any) => (
              <Link key={l.href} href={`/${lang}${l.href}`}
                className={`px-3.5 py-1.5 rounded-full text-[13px] font-medium transition-all duration-300 ${
                  isHome && !scrolled
                    ? 'text-white/70 hover:text-white hover:bg-white/10'
                    : 'text-[var(--ink-muted)] hover:text-[var(--ink)] hover:bg-[var(--surface-alt)]'
                }`}>
                {l.label}
              </Link>
            ))}
          </div>

          {/* Divider */}
          <div className={`w-px h-5 mx-1 hidden lg:block ${isHome && !scrolled ? 'bg-white/10' : 'bg-[var(--border)]'}`} />

          {/* Lang Toggle */}
          <button onClick={() => switchLang(lang === 'id' ? 'en' : 'id')}
            className={`hidden lg:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[13px] font-medium transition-all duration-300 ${
              isHome && !scrolled
                ? 'text-white/70 hover:text-white hover:bg-white/10'
                : 'text-[var(--ink-muted)] hover:text-[var(--ink)] hover:bg-[var(--surface-alt)]'
            }`}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
            {lang === 'id' ? 'EN' : 'ID'}
          </button>

          {/* CTA */}
          <Link href={`/${lang}/contact`}
            className={`hidden sm:inline-flex items-center gap-2 px-5 py-2 rounded-full text-[13px] font-semibold transition-all duration-300 ${
              isHome && !scrolled
                ? 'bg-white text-[var(--dark)] hover:bg-white/90 shadow-lg shadow-white/10'
                : 'bg-[var(--brand)] text-white hover:bg-[var(--brand-light)] shadow-lg shadow-[var(--brand)]/15'
            }`}>
            {t.cta}
          </Link>

          {/* Mobile Hamburger */}
          <button onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Tutup menu' : 'Buka menu'}
            className={`lg:hidden relative w-9 h-9 rounded-full transition-all duration-300 focus-visible:outline-2 focus-visible:outline-[var(--brand-bright)] ${
              isHome && !scrolled ? 'hover:bg-white/10 text-white' : 'hover:bg-[var(--surface-alt)] text-[var(--ink)]'
            }`}>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-4 h-4">
                <span className={`absolute left-0 top-[2px] w-4 h-[1.5px] rounded-full transition-all duration-300 ${isHome && !scrolled ? 'bg-white' : 'bg-current'} ${menuOpen ? 'rotate-45 top-[7px]' : ''}`} />
                <span className={`absolute left-0 top-[7px] w-4 h-[1.5px] rounded-full transition-all duration-300 ${isHome && !scrolled ? 'bg-white' : 'bg-current'} ${menuOpen ? 'opacity-0' : ''}`} />
                <span className={`absolute left-0 top-[12px] w-4 h-[1.5px] rounded-full transition-all duration-300 ${isHome && !scrolled ? 'bg-white' : 'bg-current'} ${menuOpen ? '-rotate-45 top-[7px]' : ''}`} />
              </div>
            </div>
          </button>
        </nav>
      </header>

      {/* ═══════ MOBILE MENU — Fullscreen Glass Overlay ═══════ */}
      {menuOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div className="absolute inset-0 backdrop-blur-3xl" style={{background: 'rgba(26,26,26,0.9)'}} onClick={() => setMenuOpen(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-80 max-w-[85vw] bg-white/5 backdrop-blur-2xl border-l border-white/10 p-10 overflow-y-auto"
            style={{animation: 'slideInRight 400ms cubic-bezier(0.16,1,0.3,1)'}}>
            <div className="flex items-center justify-between mb-12">
              <span className="font-outfit font-bold text-white text-lg tracking-tight">Menu</span>
              <button onClick={() => setMenuOpen(false)} className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
              </button>
            </div>
            <nav className="space-y-1.5">
              {[...t.links, ...t.extraLinks].map((l: any, i: number) => (
                <Link key={l.href} href={`/${lang}${l.href}`} onClick={() => setMenuOpen(false)}
                  className="block px-4 py-4 text-white/60 hover:text-white hover:bg-white/5 rounded-xl font-medium transition-all duration-300 text-sm"
                  style={{animation: `fadeSlideUp 400ms cubic-bezier(0.16,1,0.3,1) ${i * 50}ms both`}}>
                  {l.label}
                </Link>
              ))}
            </nav>
            <div className="mt-10 pt-8 border-t border-white/10 space-y-3">
              <button onClick={() => { switchLang(lang === 'id' ? 'en' : 'id'); setMenuOpen(false) }}
                className="w-full flex items-center gap-2.5 px-4 py-3.5 text-white/40 hover:text-white hover:bg-white/5 rounded-xl font-medium text-sm transition-all duration-300">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                {lang === 'id' ? 'English' : 'Bahasa Indonesia'}
              </button>
              <Link href={`/${lang}/contact`} onClick={() => setMenuOpen(false)}
                className="block w-full text-center px-4 py-3.5 bg-[var(--brand-bright)] text-[var(--dark)] rounded-xl font-semibold text-sm hover:bg-[#6fcf97] transition-all duration-300">
                {t.cta}
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* MAIN */}
      <main className="flex-1">{children}</main>

      {/* ═══════ PREMIUM FOOTER ═══════ */}
      <footer className="relative overflow-hidden" style={{ background: 'var(--dark)' }}>
        <div className="absolute inset-0 grid-overlay opacity-[0.15]" />
        <div className="absolute inset-0 pointer-events-none opacity-[0.025]" style={{backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,backgroundRepeat:'repeat'}} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
          {/* Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
            <div className="lg:col-span-5">
              <R>
                <div className="flex items-center gap-3 mb-6">
                  <div className="relative w-10 h-10">
                    <Image src="/logo-bge.jpg" alt="BGE" fill className="object-contain rounded-full" />
                  </div>
                  <div className="flex flex-col leading-none">
                    <span className="font-outfit font-bold text-sm text-white tracking-tight">Benua Green</span>
                    <span className="font-outfit font-bold text-xs text-[var(--brand-bright)] tracking-tight">Energy</span>
                  </div>
                </div>
                <p className="text-white/40 text-sm leading-relaxed max-w-sm mb-6">{t.footerDesc}</p>
                <div className="flex gap-2">
                  {['FB','IG','TW','YT'].map(s => (
                    <a key={s} href="#" className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/[0.06] flex items-center justify-center text-white/30 hover:text-white transition-all duration-300 text-[10px] font-bold">
                      {s}
                    </a>
                  ))}
                </div>
              </R>
            </div>

            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
              <R d={100}>
                <div>
                  <h3 className="font-outfit text-white text-xs uppercase tracking-[0.15em] font-bold mb-5">{t.navTitle}</h3>
                  <ul className="space-y-3">
                    {[...t.links, ...t.extraLinks].map((l: any) => (
                      <li key={l.href}><Link href={`/${lang}${l.href}`} className="text-white/40 hover:text-white text-sm transition-colors duration-300">{l.label}</Link></li>
                    ))}
                  </ul>
                </div>
              </R>
              <R d={200}>
                <div>
                  <h3 className="font-outfit text-white text-xs uppercase tracking-[0.15em] font-bold mb-5">{t.productTitle}</h3>
                  <ul className="space-y-3">
                    {t.products.slice(0,5).map((p: string) => (
                      <li key={p}><Link href={`/${lang}/products`} className="text-white/40 hover:text-white text-sm transition-colors duration-300">{p}</Link></li>
                    ))}
                  </ul>
                </div>
              </R>
              <R d={300}>
                <div>
                  <h3 className="font-outfit text-white text-xs uppercase tracking-[0.15em] font-bold mb-5">{t.contactTitle}</h3>
                  <ul className="space-y-3">
                    <li className="text-white/40 text-sm leading-relaxed">{t.contact.location}</li>
                    <li><a href={`tel:${t.contact.phone}`} className="text-white/40 hover:text-white text-sm transition-colors">{t.contact.phone}</a></li>
                    <li><a href={`mailto:${t.contact.email}`} className="text-white/40 hover:text-white text-sm transition-colors">{t.contact.email}</a></li>
                  </ul>
                </div>
              </R>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/[0.06] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/20 text-xs">© {new Date().getFullYear()} PT. Benua Green Energy. {t.rights}</p>
            <div className="flex gap-6">
              <Link href={`/${lang}/privacy`} className="text-white/20 hover:text-white/50 text-xs transition-colors">Privacy</Link>
              <Link href={`/${lang}/terms`} className="text-white/20 hover:text-white/50 text-xs transition-colors">Terms</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* WHATSAPP FAB */}
      <a href="https://wa.me/628158816259" target="_blank" rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-500 hover:scale-110 active:scale-95"
        style={{background:'linear-gradient(135deg,#25D366,#128C7E)', boxShadow:'0 4px 24px rgba(37,211,102,0.35)'}}
        aria-label="Chat via WhatsApp">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      </a>

      <style jsx global>{`
        @keyframes slideInRight { from { transform: translateX(100%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
        @keyframes fadeSlideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: none; } }
        @keyframes scrollDown { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(6px); } }
      `}</style>
    </div>
  )
}
