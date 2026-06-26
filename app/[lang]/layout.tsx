'use client'
import { useState, useEffect, useRef } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import MobileMenu from '@/components/MobileMenu'
import RouteLoader from '@/components/RouteLoader'
import { MenuIcon, XIcon, FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon, GlobeIcon, PhoneIcon, MailIcon, MapPinIcon, ChevronUpIcon, MessageCircleIcon } from '@/components/Icons'

function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://benuagreenenergy.com/#organization",
        "name": "PT Benua Green Energy",
        "url": "https://benuagreenenergy.com",
        "logo": "https://benuagreenenergy.com/logo.png",
        "description": "Pemimpin dalam solusi energi hijau dan efisiensi industri di Indonesia.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Jl. Trocadero Office Park, Ruko Piazza De Europe Garnier No. 82",
          "addressLocality": "Lippo Karawaci, Tangerang",
          "addressRegion": "Banten",
          "postalCode": "15139",
          "addressCountry": "ID"
        },
        "contactPoint": [
          { "@type": "ContactPoint", "telephone": "+62-21-5573-1123", "contactType": "sales" },
          { "@type": "ContactPoint", "telephone": "+62-815-8816-259", "contactType": "customer service" }
        ],
        "sameAs": [
          "https://facebook.com/benuagreenenergy",
          "https://instagram.com/benuagreenenergy",
          "https://twitter.com/benuagreenenergy",
          "https://youtube.com/@benuagreenenergy"
        ]
      }
    ]
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

const navData: Record<string, any> = {
  id: {
    brand: 'BENUA GREEN ENERGY',
    links: [
      { href: '/', label: 'Beranda' },
      { href: '/about', label: 'Tentang Kami' },
      { href: '/services', label: 'Layanan' },
      { href: '/products', label: 'Produk' },
      { href: '/portfolio', label: 'Proyek' },
      { href: '/faq', label: 'FAQ' },
      { href: '/contact', label: 'Hubungi Kami' },
    ],
    cta: 'Konsultasi Gratis',
    footerDesc: 'Pemimpin dalam solusi energi hijau dan efisiensi industri di Indonesia.',
    navTitle: 'Navigasi',
    contactTitle: 'Kontak',
    productTitle: 'Produk',
    rights: 'All rights reserved.',
    products: [
      'Chiller / HVAC', 'Cooling Tower', 'Steam Accessories',
      'Solar Panel', 'Building Management System', 'Green Solution',
      'High Efficiency Pump', 'PPR Pipe & Fittings',
      'Solar Inverter Optimizer', 'Alkaline Water Ionizer'
    ],
    services: [
      'Warranty Replacement', 'Energy Audit', 'Commissioning',
      'Cleaning & Optimization', 'Diagnostics',
      'Repair & Maintenance', 'Installation'
    ],
    contact: {
      phone: '(62-21) 5573 1123',
      email: 'jakarta@benuagreen.com',
      location: 'Jl. Trocadero Office Park, Ruko Piazza De Europe Garnier No. 82, Lippo Karawaci, Tangerang 15139'
    }
  },
  en: {
    brand: 'BENUA GREEN ENERGY',
    links: [
      { href: '/', label: 'Home' },
      { href: '/about', label: 'About Us' },
      { href: '/services', label: 'Services' },
      { href: '/products', label: 'Products' },
      { href: '/portfolio', label: 'Portfolio' },
      { href: '/faq', label: 'FAQ' },
      { href: '/contact', label: 'Contact' },
    ],
    cta: 'Free Consultation',
    footerDesc: 'Leader in green energy solutions and industrial efficiency in Indonesia.',
    navTitle: 'Navigation',
    contactTitle: 'Contact',
    productTitle: 'Products',
    rights: 'All rights reserved.',
    products: [
      'Chiller / HVAC', 'Cooling Tower', 'Steam Accessories',
      'Solar Panel', 'Building Management System', 'Green Solution',
      'High Efficiency Pump', 'PPR Pipe & Fittings',
      'Solar Inverter Optimizer', 'Alkaline Water Ionizer'
    ],
    services: [
      'Warranty Replacement', 'Energy Audit', 'Commissioning',
      'Cleaning & Optimization', 'Diagnostics',
      'Repair & Maintenance', 'Installation'
    ],
    contact: {
      phone: '(62-21) 5573 1123',
      email: 'jakarta@benuagreen.com',
      location: 'Jl. Trocadero Office Park, Ruko Piazza De Europe Garnier No. 82, Lippo Karawaci, Tangerang 15139'
    }
  }
}

const Logo = ({ scrolled, isHome, invert = false, compact = false }: { scrolled: boolean, isHome: boolean, invert?: boolean, compact?: boolean }) => (
  <div className={`flex items-center gap-2.5 ${compact ? 'gap-2' : 'gap-2.5'}`}>
    <div className={`relative shrink-0 ${compact ? 'w-8 h-8' : 'w-9 h-9'}`}>
      <Image
        src="/logo-bge.jpg"
        alt="PT. Benua Green Energy"
        fill
        className="object-contain rounded-full"
        priority
      />
    </div>
    <div className={`flex flex-col tracking-tight leading-none ${invert ? 'text-white' : (scrolled || !isHome ? 'text-[var(--ink)]' : 'text-white')}`}>
      <span className={`font-bold leading-none uppercase ${compact ? 'text-[9px]' : 'text-[10px] lg:text-xs'}`}>Benua Green</span>
      <span className={`font-bold leading-tight uppercase ${invert ? 'text-white/70' : 'text-[var(--brand)]'} ${compact ? 'text-[9px]' : 'text-[10px] lg:text-xs'}`}>Energy</span>
    </div>
  </div>
)

export default function LangLayout({ children, params }: { children: React.ReactNode, params: { lang: string } }) {
  const pathname = usePathname()
  const router = useRouter()
  const lang = params.lang === 'en' ? 'en' : 'id'
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [headerVisible, setHeaderVisible] = useState(true)
  const [showBackToTop, setShowBackToTop] = useState(false)
  const t = navData[lang]
  const lastScrollY = useRef(0)

  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const sy = window.scrollY
          const isScrolled = sy > 24
          setScrolled(isScrolled)
          if (sy > 80) {
            if (sy > lastScrollY.current + 5) {
              setHeaderVisible(false)
            } else if (sy < lastScrollY.current - 5) {
              setHeaderVisible(true)
            }
          } else {
            setHeaderVisible(true)
          }
          setShowBackToTop(sy > 300)
          lastScrollY.current = sy
          ticking = false
        })
        ticking = true
      }
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.title = lang === 'en'
      ? 'Benua Green Energy | Green Energy Industrial Solutions'
      : 'Benua Green Energy | Solusi Energi Hijau Industri'
  }, [lang])

  const switchLang = (l: string) => {
    const path = pathname.replace(/^\/(en|id)/, `/${l}`)
    router.push(path)
  }

  const isHome = pathname === `/${lang}` || pathname === `/${lang}/`

  const socialIcons = [
    { label: 'Facebook', href: 'https://facebook.com/benuagreenenergy' },
    { label: 'Instagram', href: 'https://instagram.com/benuagreenenergy' },
    { label: 'Twitter', href: 'https://twitter.com/benuagreenenergy' },
    { label: 'YouTube', href: 'https://youtube.com/@benuagreenenergy' },
  ]

  const headerBg = (isHome && !scrolled) ? 'bg-transparent' : 'bg-white/95 backdrop-blur-md border-b border-[var(--border)]'
  const headerH = (isHome && !scrolled) ? 'h-16 lg:h-20' : 'h-14 lg:h-16'
  const textWhite = isHome && !scrolled

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-white text-[var(--ink)]">
      <RouteLoader />
      <JsonLd />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://images.unsplash.com" />

      {/* Header */}
      <header className={`fixed left-0 right-0 z-50 transition-all duration-300 ease-out ${headerVisible ? 'translate-y-0' : '-translate-y-full'} ${headerBg} ${headerH}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          <Link href={`/${lang}`} prefetch={true} className="hover:opacity-90 transition-opacity">
            <Logo scrolled={scrolled} isHome={isHome} compact={scrolled || !headerVisible} />
          </Link>

          <nav className="hidden lg:flex items-center space-x-7">
            {t.links.slice(0, 5).map((l: any) => (
              <Link key={l.href} href={`/${lang}${l.href}`} prefetch={true}
                className={`text-sm font-medium transition-colors ${textWhite ? 'text-white/80 hover:text-white' : 'text-[var(--ink-secondary)] hover:text-[var(--ink)]'}`}>
                {l.label}
              </Link>
            ))}
            <button onClick={() => switchLang(lang === 'id' ? 'en' : 'id')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                textWhite ? 'text-white/70 hover:text-white hover:bg-white/10' : 'text-[var(--ink-muted)] hover:text-[var(--ink)] hover:bg-[var(--surface-alt)]'
              }`}>
              <GlobeIcon size={14} />
              <span>{lang === 'id' ? 'EN' : 'ID'}</span>
            </button>
            <Link href={`/${lang}/contact`} prefetch={true}
              className="btn-primary text-sm py-2 px-5">
              {t.cta}
            </Link>
          </nav>

          <button onClick={() => setMenuOpen(!menuOpen)}
            className={`lg:hidden p-2 rounded-md transition-colors ${
              textWhite ? 'text-white/80 hover:bg-white/10' : 'text-[var(--ink-secondary)] hover:bg-[var(--surface-alt)]'
            }`}
            aria-label={menuOpen ? 'Tutup menu' : 'Buka menu'}>
            {menuOpen ? <XIcon size={22} /> : <MenuIcon size={22} />}
          </button>
        </div>
      </header>

      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} t={t} lang={lang} switchLang={switchLang} />

      <main className="flex-1 animate-page-in" key={pathname}>
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[var(--ink)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
            {/* Brand */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="mb-5"><Logo scrolled={true} isHome={false} invert={true} /></div>
              <p className="text-white/40 text-sm leading-relaxed mb-6">{t.footerDesc}</p>
              <div className="flex gap-2">
                {socialIcons.map((s, i) => (
                  <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 bg-white/5 hover:bg-[var(--brand)]/20 hover:text-[var(--brand)]"
                    aria-label={s.label}>
                    {s.label === 'Facebook' ? <FacebookIcon size={15} /> :
                     s.label === 'Instagram' ? <InstagramIcon size={15} /> :
                     s.label === 'Twitter' ? <TwitterIcon size={15} /> :
                     <YoutubeIcon size={15} />}
                  </a>
                ))}
              </div>
            </div>

            {/* Nav */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-white/30 mb-5">{t.navTitle}</h3>
              <ul className="space-y-3">
                {t.links.map((l: any) => (
                  <li key={l.href}><Link href={`/${lang}${l.href}`} prefetch={true} className="text-sm text-white/50 hover:text-white transition-colors duration-200">{l.label}</Link></li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-white/30 mb-5">{t.productTitle}</h3>
              <ul className="space-y-3">
                {(() => {
                  const productHref: Record<string, string> = {
                    'Chiller / HVAC': `/${lang}/products?tab=mini-chiller-ycae`,
                    'Cooling Tower': `/${lang}/products?tab=cooling-tower`,
                    'Steam Accessories': `/${lang}/products?tab=steam-accessories`,
                    'Solar Panel': `/${lang}/products?tab=solar-panel`,
                    'Building Management System': `/${lang}/products?tab=bms`,
                    'Green Solution': `/${lang}/products?tab=green-solution`,
                    'High Efficiency Pump': `/${lang}/products?tab=high-efficiency-pump`,
                    'PPR Pipe & Fittings': `/${lang}/products?tab=ppr-pipe`,
                    'Solar Inverter Optimizer': `/${lang}/products/solar-inverter-optimizer`,
                    'Alkaline Water Ionizer': `/${lang}/products?tab=alkaline-water-ionizer`,
                  }
                  return t.products.map((p: string, i: number) => (
                    <li key={i}><Link href={productHref[p] || `/${lang}/products`} prefetch={true} className="text-sm text-white/50 hover:text-white transition-colors duration-200">{p}</Link></li>
                  ))
                })()}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-white/30 mb-5">{t.contactTitle}</h3>
              <ul className="space-y-3.5 text-sm text-white/50">
                <li className="flex gap-3"><MapPinIcon size={15} className="text-[var(--brand)] shrink-0 mt-0.5" /> <span className="leading-relaxed">{t.contact.location}</span></li>
                <li className="flex gap-3"><PhoneIcon size={15} className="text-[var(--brand)] shrink-0 mt-0.5" /> <a href={`tel:${t.contact.phone.replace(/[^0-9]/g,'')}`} className='hover:text-white transition-colors duration-200'>{t.contact.phone}</a></li>
                <li className="flex gap-3"><MailIcon size={15} className="text-[var(--brand)] shrink-0 mt-0.5" /> <a href={`mailto:${t.contact.email}`} className='hover:text-white transition-colors duration-200'>{t.contact.email}</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/30">
            <p>&copy; {new Date().getFullYear()} Benua Green Energy. {t.rights}</p>
            <div className="flex gap-6">
              <Link href={`/${lang}/privacy`} prefetch={true} className="hover:text-white/60 transition-colors duration-200">Privacy Policy</Link>
              <Link href={`/${lang}/terms`} prefetch={true} className="hover:text-white/60 transition-colors duration-200">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a href="https://wa.me/628158816259?text=Halo%20Benua%20Green%20Energy%2C%20saya%20ingin%20konsultasi"
        target="_blank" rel="noopener noreferrer"
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-12 h-12 sm:w-13 sm:h-13 bg-[#25D366] text-white rounded-full shadow-lg flex items-center justify-center hover:scale-105 transition-all duration-200"
        aria-label="Chat via WhatsApp">
        <MessageCircleIcon size={20} />
      </a>
    </div>
  )
}
