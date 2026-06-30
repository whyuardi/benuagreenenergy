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
        <section className="relative min-h-[70vh] flex items-center pt-20 overflow-hidden bg-[#FDFBF7]">
          <div className="max-w-4xl mx-auto px-6 text-center w-full">
            <PackageIcon size={64} className="mx-auto text-[#2C3E50]/20 mb-6" />
            <h1 className="font-serif text-4xl text-[#1A252F] mb-4">{t.notFound}</h1>
            <p className="text-lg text-[#2C3E50]/60 mb-8">{t.notFoundDesc}</p>
            <Link href={`/${lang}/products`} className="inline-flex items-center gap-2 px-6 py-3 bg-[#2D5A27] text-white rounded-xl hover:bg-[#1A3A1A] transition-all">
              {t.viewAll} <ArrowLeftIcon size={16} />
            </Link>
          </div>
        </section>
      </div>
    )
  }

  const { item, category } = result
  const productImg = item.img || categoryDefaultImages[category.slug] || '/images/hero/bg.jpg'

  // Dynamic page title
  useEffect(() => {
    document.title = `${item.name} | Benua Green Energy`
  }, [item.name])

  // Product JSON-LD
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: item.name,
    image: [productImg],
    description: item.desc || '',
    brand: { '@type': 'Brand', name: category.name || 'Benua Green Energy' },
  }

  // Related products from the same category
  const related = category.items.filter(item => item.name !== item.name).slice(0, 4)

  // Derived features from specs for richer display
  const specIcons = [ZapIcon, ThermometerIcon, DropletsIcon, CpuIcon, GaugeIcon, ShieldIcon, LeafIcon]

  return (
    <div className="page-enter">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />

      <section className="relative min-h-[50vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={{ background: 'var(--dark)' }} />
          <div className="absolute inset-0 opacity-[0.12]">
            <LazyBg
              src={productImg}
              style={{ backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: 'overlay' }}
              fallbackClass=""
            />
          </div>
          <div className="absolute inset-0 grid-pattern opacity-20" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pb-24 md:pb-32">
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
              <span className="inline-block px-3 py-1 bg-white/10 text-white text-xs font-bold rounded-full mb-4 border border-white/10">
                {category.name}
              </span>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <h1 className="font-serif text-4xl md:text-6xl text-white mb-4 leading-tight">{item.name}</h1>
            </AnimateIn>
            {item.desc && (
              <AnimateIn delay={0.2}>
                <p className="text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed">{item.desc}</p>
              </AnimateIn>
            )}
          </div>
        </div>
        {/* Bottom border separator */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10 z-10" />
      </section>

      {/* ─── CONTENT ─── */}
      <section className="py-20 md:py-28 px-6 bg-[#FDFBF7] relative">
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Product Image + Details Grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {/* Image */}
            <AnimateIn delay={0.1}>
              <div className="bg-white rounded-3xl border border-[var(--border)] shadow-md flex items-center justify-center min-h-[400px] relative overflow-hidden group">
                <div className="absolute inset-6">
              <SkeletonImage
                src={productImg}
                alt={item.name}
                fill
                wrapperClass="absolute inset-0"
                imgClass="object-contain"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
                </div>
              </div>
            </AnimateIn>

            {/* Details */}
            <AnimateIn delay={0.2}>
              <div className="sticky top-28">
                {item.desc && (
                  <div className="mb-8">
                    <h2 className="font-serif text-2xl text-[#1A252F] mb-4">{t.overview}</h2>
                    <p className="text-lg text-[#2C3E50]/70 leading-relaxed">{item.desc}</p>
                  </div>
                )}

                {/* Specs */}
                {item.specs && item.specs.length > 0 && (
                  <div className="mb-8">
                    <h3 className="font-bold text-sm text-[#1A252F] mb-5 uppercase tracking-wider flex items-center gap-2">
                      <CpuIcon size={16} className="text-[#2D5A27]" />
                      {t.specs}
                    </h3>
                    <div className="space-y-3">
                      {item.specs.map((spec, i) => {
                        const SpecIcon = specIcons[i % specIcons.length]
                        return (
                          <div key={i} className="flex items-center gap-3 px-5 py-3.5 bg-white/70 backdrop-blur-xl rounded-xl border border-white/20 shadow-lg hover:shadow-xl hover:border-[#2D5A27]/30 transition-all">
                            <SpecIcon size={16} className="text-[#2D5A27] shrink-0" />
                            <span className="text-sm text-[#2C3E50]/80 font-medium">{spec}</span>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )}

                {/* Features derived from specs */}
                {item.specs && item.specs.length > 0 && item.specs.length >= 3 && (
                  <div className="mb-8">
                    <h3 className="font-bold text-sm text-[#1A252F] mb-5 uppercase tracking-wider flex items-center gap-2">
                      <ShieldIcon size={16} className="text-[#2D5A27]" />
                      {t.features}
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      {item.specs.slice(0, 6).map((spec, i) => (
                        <div key={i} className="flex items-center gap-2 px-4 py-3 bg-[#2D5A27]/5 rounded-xl border border-[#2D5A27]/10">
                          <CheckCircleIcon size={14} className="text-[#2D5A27] shrink-0" />
                          <span className="text-xs text-[#2C3E50]/70 font-medium">{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA Button */}
                <Link
                  href={`/${lang}/contact?source=${encodeURIComponent(item.name)}`}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-[#2D5A27] text-white rounded-xl font-semibold hover:bg-[#1A3A1A] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  {t.getQuote}
                  <ExternalLinkIcon size={18} />
                </Link>
              </div>
            </AnimateIn>
          </div>

          {/* Related Products */}
          {related.length > 0 && (
            <AnimateIn delay={0.3}>
              <div className="border-t border-[#2C3E50]/10 pt-12 mb-20">
                <h2 className="font-serif text-2xl text-[#1A252F] mb-8">{t.related}</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                  {related.map((item, i) => {
                    const itemSlug = slugify(item.name)
                    const itemImg = item.img || categoryDefaultImages[category.slug] || '/images/hero/bg.jpg'
                    return (
                      <Link
                        key={i}
                        href={`/${lang}/products/${itemSlug}`}
                        className="group bg-white/70 backdrop-blur-xl rounded-xl overflow-hidden border border-white/20 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
                      >
                        <div className="aspect-[4/3] bg-[#FAFAFA] flex items-center justify-center relative overflow-hidden">
                          <div className="absolute inset-2">
                            <SkeletonImage src={itemImg} alt={item.name} fill wrapperClass="absolute inset-0" imgClass="object-contain transition-transform duration-300 group-hover:scale-105" sizes="(max-width: 640px) 50vw, 25vw" loading="lazy" />
                          </div>
                        </div>
                        <div className="p-4">
                          <h3 className="font-semibold text-xs text-[#1A252F] mb-2 line-clamp-2">{item.name}</h3>
                          <span className="text-[#2D5A27] text-[10px] font-semibold flex items-center gap-1">
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
            <div className="bg-[var(--dark)] p-10 md:p-14 rounded-3xl text-center relative overflow-hidden border border-white/5">
              <div className="relative z-10">
                <LeafIcon size={40} className="mx-auto text-white/20 mb-4" />
                <h3 className="font-serif text-2xl md:text-3xl text-white mb-4">{t.needThis}</h3>
                <p className="text-white/60 mb-8 max-w-lg mx-auto leading-relaxed">{t.needThisDesc}</p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Link
                    href={`/${lang}/contact?source=${encodeURIComponent(item.name)}`}
                    className="bg-white text-[#1A252F] px-8 py-4 rounded-xl font-bold hover:bg-[var(--brand)] hover:text-white transition-all shadow-md"
                  >
                    {t.contactUs}
                  </Link>
                  <Link
                    href={`/${lang}/products`}
                    className="text-white/80 hover:text-white px-6 py-4 rounded-xl font-semibold border border-white/20 hover:border-white/40 transition-all flex items-center gap-2"
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
