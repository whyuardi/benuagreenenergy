'use client'
import { useEffect } from 'react'
import { ArrowLeftIcon, ExternalLinkIcon, CheckCircleIcon, PackageIcon, ChevronLeftIcon, ShieldIcon, ZapIcon, ThermometerIcon, DropletsIcon, CpuIcon, GaugeIcon, LeafIcon } from '@/components/Icons'
import Link from 'next/link'
import Image from 'next/image'
import { AnimateIn } from '@/components/AnimateIn'
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

  const { product, category } = result
  const productImg = product.img || categoryDefaultImages[category.slug] || 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800'

  // Dynamic page title
  useEffect(() => {
    document.title = `${product.name} | Benua Green Energy`
  }, [product.name])

  // Product JSON-LD
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    image: [productImg],
    description: product.desc || '',
    brand: { '@type': 'Brand', name: category.name || 'Benua Green Energy' },
  }

  // Related products from the same category
  const related = category.items.filter(item => item.name !== product.name).slice(0, 4)

  // Derived features from specs for richer display
  const specIcons = [ZapIcon, ThermometerIcon, DropletsIcon, CpuIcon, GaugeIcon, ShieldIcon, LeafIcon]

  return (
    <div className="page-enter">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />

      {/* ─── HERO ─── */}
      <section className="relative min-h-[50vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #0D1B2A 0%, #1B2838 30%, #2C3E50 60%, #1A237E 100%)' }} />
          <div className="absolute inset-0 opacity-[0.12]" style={{ backgroundImage: `url(${productImg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: 'overlay' }} />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0D1B2A]/40 to-[#0D1B2A]" />
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" style={{backgroundImage:'url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJmIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc0IiBudW1PY3RhdmVzPSI0Ii8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI2YpIiBvcGFjaXR5PSIwIi8+PC9zdmc+)', backgroundRepeat:'repeat', backgroundSize:'200px 200px'}} />
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{backgroundImage:'linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px)', backgroundSize:'60px 60px'}} />
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#2D5A27]/15 rounded-full blur-3xl animate-float pointer-events-none" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#1A237E]/10 rounded-full blur-3xl animate-float pointer-events-none" style={{animationDelay:'2s'}} />
          <div className="absolute top-40 right-1/4 w-64 h-64 bg-[#4CAF50]/10 rounded-full blur-3xl animate-float pointer-events-none" style={{animationDelay:'4s'}} />
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
              <span className="inline-block px-3 py-1 bg-white/15 text-white text-xs font-bold rounded-full mb-4 backdrop-blur-sm border border-white/10">
                {category.name}
              </span>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <h1 className="font-serif text-4xl md:text-6xl text-white mb-4 leading-tight">{product.name}</h1>
            </AnimateIn>
            {product.desc && (
              <AnimateIn delay={0.2}>
                <p className="text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed">{product.desc}</p>
              </AnimateIn>
            )}
          </div>
        </div>
        {/* Transition Bridge */}
        <div className="absolute bottom-0 left-0 right-0 h-32 md:h-48 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, transparent 0%, rgba(13,27,42,0.3) 30%, rgba(253,251,247,0.6) 70%, #FDFBF7 100%)' }}
        />
      </section>

      {/* ─── CONTENT ─── */}
      <section className="py-20 md:py-28 px-6 bg-[#FDFBF7] relative">
        {/* Noise overlay on content */}
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{backgroundImage:'url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJmIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc0IiBudW1PY3RhdmVzPSIzIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI2YpIiBvcGFjaXR5PSIwIi8+PC9zdmc+)', backgroundRepeat:'repeat', backgroundSize:'200px 200px'}} />

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Product Image + Details Grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {/* Image */}
            <AnimateIn delay={0.1}>
              <div className="bg-white/70 backdrop-blur-xl rounded-3xl border border-white/20 shadow-lg flex items-center justify-center min-h-[400px] relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#2D5A27]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-6">
                  <Image
                    src={productImg}
                    alt={product.name}
                    fill
                    className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </AnimateIn>

            {/* Details */}
            <AnimateIn delay={0.2}>
              <div className="sticky top-28">
                {product.desc && (
                  <div className="mb-8">
                    <h2 className="font-serif text-2xl text-[#1A252F] mb-4">{t.overview}</h2>
                    <p className="text-lg text-[#2C3E50]/70 leading-relaxed">{product.desc}</p>
                  </div>
                )}

                {/* Specs */}
                {product.specs && product.specs.length > 0 && (
                  <div className="mb-8">
                    <h3 className="font-bold text-sm text-[#1A252F] mb-5 uppercase tracking-wider flex items-center gap-2">
                      <CpuIcon size={16} className="text-[#2D5A27]" />
                      {t.specs}
                    </h3>
                    <div className="space-y-3">
                      {product.specs.map((spec, i) => {
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
                {product.specs && product.specs.length > 0 && product.specs.length >= 3 && (
                  <div className="mb-8">
                    <h3 className="font-bold text-sm text-[#1A252F] mb-5 uppercase tracking-wider flex items-center gap-2">
                      <ShieldIcon size={16} className="text-[#2D5A27]" />
                      {t.features}
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      {product.specs.slice(0, 6).map((spec, i) => (
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
                  href={`/${lang}/contact?source=${encodeURIComponent(product.name)}`}
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
                    const itemImg = item.img || categoryDefaultImages[category.slug] || 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=600'
                    return (
                      <Link
                        key={i}
                        href={`/${lang}/products/${itemSlug}`}
                        className="group bg-white/70 backdrop-blur-xl rounded-xl overflow-hidden border border-white/20 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
                      >
                        <div className="aspect-[4/3] bg-[#FAFAFA] flex items-center justify-center relative overflow-hidden">
                          <div className="absolute inset-2">
                            <Image src={itemImg} alt={item.name} fill className="object-contain transition-transform duration-300 group-hover:scale-105" sizes="(max-width: 640px) 50vw, 25vw" />
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
            <div className="bg-gradient-to-br from-[#2D5A27] to-[#1A252F] p-10 md:p-14 rounded-3xl text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" style={{backgroundImage:'url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJmIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc0IiBudW1PY3RhdmVzPSI0Ii8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI2YpIiBvcGFjaXR5PSIwIi8+PC9zdmc+)', backgroundRepeat:'repeat', backgroundSize:'200px 200px'}} />
              <div className="relative z-10">
                <LeafIcon size={40} className="mx-auto text-white/20 mb-4" />
                <h3 className="font-serif text-2xl md:text-3xl text-white mb-4">{t.needThis}</h3>
                <p className="text-white/60 mb-8 max-w-lg mx-auto leading-relaxed">{t.needThisDesc}</p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Link
                    href={`/${lang}/contact?source=${encodeURIComponent(product.name)}`}
                    className="bg-white text-[#1A252F] px-8 py-4 rounded-full font-bold hover:bg-[#2D5A27] hover:text-white transition-all shadow-lg hover:shadow-xl"
                  >
                    {t.contactUs}
                  </Link>
                  <Link
                    href={`/${lang}/products`}
                    className="text-white/80 hover:text-white px-6 py-4 rounded-full font-semibold border border-white/20 hover:border-white/40 transition-all flex items-center gap-2"
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
