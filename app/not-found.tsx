'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function NotFound() {
  const [lang, setLang] = useState<string>('id')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const path = window.location.pathname
    const detectedLang = path.startsWith('/en') ? 'en' : 'id'
    setLang(detectedLang)
    document.title = detectedLang === 'id' ? '404 - Halaman Tidak Ditemukan | BGE' : '404 - Page Not Found | BGE'
    setMounted(true)
  }, [])

  const t = lang === 'id' ? {
    title: 'Halaman Tidak Ditemukan',
    desc: 'Halaman yang Anda cari mungkin telah dipindahkan, dihapus, atau tidak tersedia.',
    btn: 'Kembali ke Beranda',
    alt: 'Produk Kami',
    brand: 'Benua Green Energy'
  } : {
    title: 'Page Not Found',
    desc: 'The page you are looking for may have been moved, deleted, or is unavailable.',
    btn: 'Back to Home',
    alt: 'Our Products',
    brand: 'Benua Green Energy'
  }

  return (
    <div
      className="min-h-screen relative flex items-center justify-center px-6 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0D1B2A 0%, #1B2838 30%, #2C3E50 60%, #1A237E 100%)' }}
    >
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.04] grid-pattern pointer-events-none" />

      {/* Ambient floating orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-[#2D5A27]/15 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-[#1A237E]/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-[30%] right-[10%] w-72 h-72 bg-[#4CAF50]/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      <div className="absolute bottom-[20%] left-[15%] w-80 h-80 bg-[#2D5A27]/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />

      {/* Centered glassmorphism card */}
      <div
        className={`relative z-10 text-center max-w-lg w-full bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-12 transition-all duration-700 ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* 404 large text */}
        <h1 className="text-8xl font-bold mb-6 bg-gradient-to-r from-[#2D5A27] to-[#4CAF50] bg-clip-text text-transparent leading-none">
          404
        </h1>

        {/* Brand name */}
        <p className="text-white/80 text-sm font-medium tracking-widest uppercase mb-2">
          {t.brand}
        </p>

        {/* Title */}
        <h2 className="text-2xl font-bold text-white mb-4">
          {t.title}
        </h2>

        {/* Description */}
        <p className="text-white/60 mb-10 leading-relaxed">
          {t.desc}
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href={`/${lang}`}
            className="inline-block bg-[#2D5A27] text-white px-8 py-3 rounded-full font-bold hover:bg-[#3a7a33] transition-all shadow-lg shadow-[#2D5A27]/30 hover:shadow-[#2D5A27]/50"
          >
            {t.btn}
          </Link>
          <Link
            href={`/${lang}/products`}
            className="inline-block border border-white/30 text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition-all"
          >
            {t.alt}
          </Link>
        </div>
      </div>
    </div>
  )
}
