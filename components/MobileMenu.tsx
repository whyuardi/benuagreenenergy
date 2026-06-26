'use client'
import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { XIcon } from '@/components/Icons'

interface MobileMenuProps {
  menuOpen: boolean
  setMenuOpen: (v: boolean) => void
  t: any
  lang: string
  switchLang: (l: string) => void
}

export default function MobileMenu({ menuOpen, setMenuOpen, t, lang, switchLang }: MobileMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!menuOpen) return
    const panel = panelRef.current
    if (!panel) return

    const focusable = panel.querySelectorAll<HTMLElement>('a, button')
    const first = focusable[0]
    const last = focusable[focusable.length - 1]

    requestAnimationFrame(() => first?.focus())

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { setMenuOpen(false); return }
      if (e.key !== 'Tab') return
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last?.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first?.focus()
      }
    }
    panel.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      panel.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [menuOpen, setMenuOpen])

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[90] bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Panel */}
      <div
        ref={panelRef}
        className={`fixed inset-y-0 right-0 z-[100] w-full max-w-sm bg-[#1A252F]/95 backdrop-blur-2xl shadow-2xl flex flex-col transition-transform duration-300 ease-out ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-end px-5 pt-5 pb-2">
          <button
            onClick={() => setMenuOpen(false)}
            className="p-2"
            aria-label="Close menu"
          >
            <XIcon size={28} className="text-white" />
          </button>
        </div>

        <div className="flex-1 flex flex-col justify-center px-8">
          <nav className="w-full max-w-sm mx-auto">
            {t.links.map((l: any, i: number) => (
              <div key={l.href}>
                <Link
                  href={`/${lang}${l.href}`}
                  onClick={() => setMenuOpen(false)}
                  className="relative block py-5 text-2xl font-serif font-bold text-white hover:text-[#4CAF50] transition-colors after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-[#2D5A27] after:to-[#4CAF50] hover:after:w-full after:transition-all after:duration-300"
                >
                  {l.label}
                </Link>
                {i < t.links.length - 1 && (
                  <div className="border-b border-white/10" />
                )}
              </div>
            ))}
          </nav>

          <div className="flex gap-3 mt-10 w-full max-w-sm mx-auto">
            <button
              onClick={() => { switchLang('id'); setMenuOpen(false) }}
              className={`flex-1 py-3 rounded-full text-sm font-bold transition-all ${
                lang === 'id'
                  ? 'bg-[#2D5A27] text-white'
                  : 'bg-white/10 text-white/60'
              }`}
            >
              Bahasa Indonesia
            </button>
            <button
              onClick={() => { switchLang('en'); setMenuOpen(false) }}
              className={`flex-1 py-3 rounded-full text-sm font-bold transition-all ${
                lang === 'en'
                  ? 'bg-[#2D5A27] text-white'
                  : 'bg-white/10 text-white/60'
              }`}
            >
              English
            </button>
          </div>

          <Link
            href={`/${lang}/contact`}
            onClick={() => setMenuOpen(false)}
            className="block w-full bg-[#2D5A27] hover:bg-[#3a7a33] text-white text-center py-4 rounded-full font-bold text-lg mt-6 max-w-sm mx-auto transition-colors"
          >
            {t.cta}
          </Link>
        </div>
      </div>
    </>
  )
}
