'use client'
import { useEffect } from 'react'
import { ArrowLeftIcon, ExternalLinkIcon, CheckCircleIcon, PackageIcon, ChevronLeftIcon, ShieldIcon, ZapIcon, ThermometerIcon, DropletsIcon, CpuIcon, GaugeIcon, LeafIcon } from '@/components/Icons'
import Link from 'next/link'
import Image from 'next/image'
import SkeletonImage from '@/components/SkeletonImage'
import { AnimateIn } from '@/components/AnimateIn'
import { LazyBg } from '@/lib/lazy-bg'
import { productCatalog, slugify, getProductBySlug, categoryDefaultImages } from '@/lib/products-data'

export default function ProductDetailPage({ params }: { params: { lang: string; slug: string } }) {
  const lang = params.lang === 'en' ? 'en' : 'id'
  const result = getProductBySlug(params.slug)

  const t = lang === 'id' ? {
    back: 'Kembali ke Produk',
    category: 'Kategori',
    specs: 'Spesifikasi',
    features: 'Fitur Unggulan',
    benefits: 'Manfaat',
    detail: 'Lihat Detail',
    notFound: 'Produk tidak ditemukan',
    notFoundDesc: 'Produk yang Anda cari tidak tersedia atau telah dihapus.',
    viewAll: 'Lihat Semua Produk',
    related: 'Produk Terkait',
    getQuote: 'Dapatkan Penawaran',
    needThis: 'Tertarik dengan Produk Ini?',
    needThisDesc: 'Hubungi tim kami untuk informasi lebih lanjut, konsultasi teknis, atau penawaran harga terbaik.',
    contactUs: 'Hubungi Kami',
    allProducts: 'Semua Produk',
    overview: 'Gambaran Umum',
  } : {
    back: 'Back to Products',
    category: 'Category',
    specs: 'Specifications',
    features: 'Key Features',
    benefits: 'Benefits',
    detail: 'View Details',
    notFound: 'Product not found',
    notFoundDesc: 'The product you are looking for is not available or has been removed.',
    viewAll: 'View All Products',
    related: 'Related Products',
    getQuote: 'Get a Quote',
    needThis: 'Interested in This Product?',
    needThisDesc: 'Contact our team for more information, technical consultation, or the best pricing.',
    contactUs: 'Contact Us',
    allProducts: 'All Products',
    overview: 'Overview',
  }

  if (!result) {
    return (
      <div className="page-enter">
        <section className="relative min-h-[70vh] flex items-center pt-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0" style={{
              background: 'linear-gradient(145deg, var(--dark) 0%, #112A1A 30%, #1B4332 60%, #0B1D13 100%)',
            }} />
            <div className="absolute inset-0" style={{
              background: 'radial-gradient(ellipse 600px 400px at 30% 35%, rgba(82,183,136,0.08) 0%, transparent 70%), radial-gradient(ellipse 500px 500px at 70% 65%, rgba(64,145,108,0.06) 0%, transparent 60%)',
            }} />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center w-full">
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-white/[0.06] flex items-center justify-center">
              <PackageIcon size={40} className="text-white/20" />
            </div>
            <h1 className="font-outfit text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">{t.notFound}</h1>
            <p className="text-base sm:text-lg text-white/50 mb-8">{t.notFoundDesc}</p>
            <Link href={`/${lang}/products`} className="btn-primary inline-flex">
              {t.viewAll} <ArrowLeftIcon size={16} />
            </Link>
          </div>
          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-32 md:h-48 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to bottom, transparent 0%, var(--surface) 100%)' }} />
        </section>
      </div>
    )
  }

  const { item, category } = result
  const productImg = item.img || categoryDefaultImages[category.slug] || '/images/hero/bg.jpg'

  useEffect(() => {
    document.title = `${item.name} | Benua Green Energy`
  }, [item.name])

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: item.name,
    image: [productImg],
    description: item.desc || '',
    brand: { '@type': 'Brand', name: category.name || 'Benua Green Energy' },
  }

  const related = category.items.filter(r => r.name !== item.name).slice(0, 4)
  const specIcons = [ZapIcon, ThermometerIcon, DropletsIcon, CpuIcon, GaugeIcon, ShieldIcon, LeafIcon]

  return (
    <div className="page-enter">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />

      {/* ═══════════════════════════════════════
          HERO — Dark + green gradient
          ═══════════════════════════════════════ */}
      <section className="relative min-h-[50vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(145deg, var(--dark) 0%, #112A1A 30%, #1B4332 60%, #0B1D13 100%)',
          }} />
          <div className="absolute inset-0" style={{
            background: 'radial-gradient(ellipse 600px 400px at 30% 35%, rgba(82,183,136,0.08) 0%, transparent 70%), radial-gradient(ellipse 500px 500px at 70% 65%, rgba(64,145,108,0.06) 0%, transparent 60%)',
          }} />
          <div className="absolute top-1/4 right-[12%] w-72 h-72 rounded-full opacity-[0.05] pointer-events-none"
            style={{ background: 'radial-gradient(circle, #52B788 0%, transparent 70%)' }} />
          <div className="absolute bottom-1/3 left-[10%] w-52 h-52 rounded-full opacity-[0.06] pointer-events-none"
            style={{ background: 'radial-gradient(circle, #40916C 0%, transparent 70%)' }} />
          {/* Product image bg blend */}
          <div className="absolute inset-0 opacity-[0.12]">
            <LazyBg
              src={productImg}
              style={{ backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: 'overlay' }}
              fallbackClass=""
            />
          </div>
        </div>
        <div className="absolute inset-0 grid-pattern opacity-20" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 w-full pb-24 md:pb-32">
          <div className="max-w-3xl">
            <AnimateIn>
              <Link
                href={`/${lang}/products`}
                className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white/90 transition-colors mb-6"
              >
                <ArrowLeftIcon size={14} />
                <span>{t.back}</span>
              </Link>
            </AnimateIn>
            <AnimateIn delay={0.05}>
              <span className="badge badge-green mb-4">
                {category.name}
              </span>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <h1 className="font-outfit text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight leading-[1.08]">{item.name}</h1>
            </AnimateIn>
            {item.desc && (
              <AnimateIn delay={0.2}>
                <p className="text-base sm:text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed">{item.desc}</p>
              </AnimateIn>
            )}
          </div>
        </div>

        {/* Bottom fade into surface */}
        <div className="absolute bottom-0 left-0 right-0 h-32 md:h-48 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, transparent 0%, var(--surface) 100%)' }} />
      </section>

      {/* ═══════════════════════════════════════
          CONTENT
          ═══════════════════════════════════════ */}
      <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-[var(--surface)] relative">
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Product Image + Details Grid */}
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 mb-20">
            {/* Image */}
            <AnimateIn delay={0.1}>
              <div className="bg-white rounded-[var(--radius-card)] border border-[var(--border)] shadow-sm flex items-center justify-center min-h-[320px] sm:min-h-[400px] relative overflow-hidden group">
                <div className="absolute inset-4 sm:inset-6">
                  <SkeletonImage
                    src={productImg}
                    alt={item.name}
                    fill
                    wrapperClass="absolute inset-0"
                    imgClass="object-contain transition-transform duration-500 group-hover:scale-105"
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </AnimateIn>

            {/* Details */}
            <AnimateIn delay={0.2}>
              <div className="lg:sticky lg:top-28">
                {item.desc && (
                  <div className="mb-8">
                    <p className="eyebrow text-[var(--brand)] mb-3">{t.overview}</p>
                    <h2 className="font-outfit text-2xl sm:text-3xl font-bold text-[var(--ink)] mb-4 tracking-tight">{item.name}</h2>
                    <p className="text-base sm:text-lg text-[var(--ink-secondary)] leading-relaxed">{item.desc}</p>
                  </div>
                )}

                {/* Specs */}
                {item.specs && item.specs.length > 0 && (
                  <div className="mb-8">
                    <h3 className="font-outfit font-bold text-sm text-[var(--ink)] mb-5 uppercase tracking-wider flex items-center gap-2">
                      <CpuIcon size={16} className="text-[var(--brand)]" />
                      {t.specs}
                    </h3>
                    <div className="space-y-3">
                      {item.specs.map((spec, i) => {
                        const SpecIcon = specIcons[i % specIcons.length]
                        return (
                          <div key={i} className="flex items-center gap-3 px-5 py-3.5 bg-white rounded-[var(--radius-card)] border border-[var(--border)] shadow-sm hover:shadow-md hover:border-[var(--brand)]/30 transition-all">
                            <SpecIcon size={16} className="text-[var(--brand)] shrink-0" />
                            <span className="text-sm text-[var(--ink-secondary)] font-medium">{spec}</span>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )}

                {/* Features */}
                {item.specs && item.specs.length >= 3 && (
                  <div className="mb-8">
                    <h3 className="font-outfit font-bold text-sm text-[var(--ink)] mb-5 uppercase tracking-wider flex items-center gap-2">
                      <ShieldIcon size={16} className="text-[var(--brand)]" />
                      {t.features}
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      {item.specs.slice(0, 6).map((spec, i) => (
                        <div key={i} className="flex items-center gap-2 px-4 py-3 bg-[var(--brand-pale)] rounded-xl border border-[var(--border-green)]">
                          <CheckCircleIcon size={14} className="text-[var(--brand)] shrink-0" />
                          <span className="text-xs text-[var(--ink-secondary)] font-medium leading-snug">{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA Button */}
                <Link
                  href={`/${lang}/contact?source=${encodeURIComponent(item.name)}`}
                  className="btn-primary w-full sm:w-auto sm:inline-flex"
                >
                  {t.getQuote}
                  <ExternalLinkIcon size={16} />
                </Link>
              </div>
            </AnimateIn>
          </div>

          {/* Related Products */}
          {related.length > 0 && (
            <AnimateIn delay={0.3}>
              <div className="border-t border-[var(--border)] pt-12 mb-20">
                <p className="eyebrow text-[var(--brand)] mb-3">{t.related}</p>
                <h2 className="font-outfit text-2xl sm:text-3xl font-bold text-[var(--ink)] mb-8 tracking-tight">{t.related}</h2>
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
                  {related.map((r, i) => {
                    const itemSlug = slugify(r.name)
                    const itemImg = r.img || categoryDefaultImages[category.slug] || '/images/hero/bg.jpg'
                    return (
                      <Link
                        key={i}
                        href={`/${lang}/products/${itemSlug}`}
                        className="group card-corporate !p-0 overflow-hidden"
                      >
                        <div className="aspect-[4/3] bg-[var(--surface-alt)] flex items-center justify-center relative overflow-hidden">
                          <div className="absolute inset-2">
                            <SkeletonImage src={itemImg} alt={r.name} fill wrapperClass="absolute inset-0" imgClass="object-contain transition-transform duration-300 group-hover:scale-105" sizes="(max-width: 640px) 50vw, 25vw" loading="lazy" />
                          </div>
                        </div>
                        <div className="p-4">
                          <h3 className="font-outfit font-semibold text-xs text-[var(--ink)] mb-2 line-clamp-2">{r.name}</h3>
                          <span className="text-[var(--brand)] text-[10px] font-semibold flex items-center gap-1">
                            {t.detail} <ArrowLeftIcon size={10} className="rotate-180" />
                          </span>
                        </div>
                      </Link>
                    )
                  })}
                </div>
              </div>
            </AnimateIn>
          )}

          {/* ─── BOTTOM CTA ─── */}
          <AnimateIn delay={0.2}>
            <div className="section-dark rounded-[var(--radius-card)] p-8 sm:p-10 md:p-14 text-center relative overflow-hidden border border-white/5">
              <div className="green-glow top-[-80px] right-[-60px] opacity-30" />
              <div className="relative z-10">
                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-white/[0.06] flex items-center justify-center">
                  <LeafIcon size={28} className="text-white/30" />
                </div>
                <h3 className="font-outfit text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">{t.needThis}</h3>
                <p className="text-white/50 mb-8 max-w-lg mx-auto leading-relaxed">{t.needThisDesc}</p>
                <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                  <Link
                    href={`/${lang}/contact?source=${encodeURIComponent(item.name)}`}
                    className="btn-accent"
                  >
                    {t.contactUs}
                  </Link>
                  <Link
                    href={`/${lang}/products`}
                    className="btn-outline"
                  >
                    <ChevronLeftIcon size={16} /> {t.allProducts}
                  </Link>
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>
    </div>
  )
}