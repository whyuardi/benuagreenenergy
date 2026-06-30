'use client'
import { useState, useEffect, useRef, useCallback, Suspense } from 'react'
import { ExternalLinkIcon, SearchIcon, XIcon, LayoutGridIcon, ChevronLeftIcon, ChevronRightIcon, MessageCircleIcon, ArrowRightIcon } from '@/components/Icons'
import Image from 'next/image'
import SkeletonImage from '@/components/SkeletonImage'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { productCatalog, slugify, categoryDefaultImages } from '@/lib/products-data'
import { AnimateIn, SectionHeading } from '@/components/AnimateIn'
import Breadcrumb from '@/components/Breadcrumb'
import { LazyBg } from '@/lib/lazy-bg'

const ITEMS_PER_PAGE = 12

function ProductSkeleton() {
  return (
    <div className="card-corporate overflow-hidden !p-0">
      <div className="h-48 skeleton-shimmer aspect-[4/3]" />
      <div className="p-5 space-y-3">
        <div className="h-4 skeleton-shimmer rounded w-3/4" />
        <div className="h-3 skeleton-shimmer rounded w-1/3" />
      </div>
    </div>
  )
}

function SkeletonGrid({ count }: { count: number }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 min-w-0">
      {Array.from({ length: Math.min(count, ITEMS_PER_PAGE) }).map((_, i) => (
        <ProductSkeleton key={i} />
      ))}
    </div>
  )
}

function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  lang,
}: {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  lang: string
}) {
  if (totalPages <= 1) return null

  const pages: (number | '...')[] = []
  if (totalPages <= 7) {
    for (let i = 1; i <= totalPages; i++) pages.push(i)
  } else {
    pages.push(1)
    if (currentPage > 3) pages.push('...')
    for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
      pages.push(i)
    }
    if (currentPage < totalPages - 2) pages.push('...')
    pages.push(totalPages)
  }

  return (
    <div className="flex items-center justify-center gap-1 sm:gap-2 mt-10 flex-wrap">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex items-center gap-1 px-2 sm:px-3 py-2 rounded-xl text-sm font-medium transition-all disabled:opacity-30 disabled:cursor-not-allowed text-[var(--ink-muted)] hover:text-[var(--ink)] hover:bg-white border border-transparent hover:border-[var(--border)]"
      >
        <ChevronLeftIcon size={16} />
        <span className="hidden sm:inline">{lang === 'id' ? 'Sebelumnya' : 'Prev'}</span>
      </button>

      <div className="flex gap-1">
        {pages.map((page, i) =>
          page === '...' ? (
            <span key={`ellipsis-${i}`} className="px-1 sm:px-2 py-2 text-sm text-[var(--ink-subtle)]">...</span>
          ) : (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl text-sm font-medium transition-all ${
                page === currentPage
                  ? 'bg-[var(--brand)] text-white shadow-md'
                  : 'text-[var(--ink-muted)] hover:bg-white hover:text-[var(--ink)] border border-transparent hover:border-[var(--border)]'
              }`}
            >
              {page}
            </button>
          )
        )}
      </div>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex items-center gap-1 px-2 sm:px-3 py-2 rounded-xl text-sm font-medium transition-all disabled:opacity-30 disabled:cursor-not-allowed text-[var(--ink-muted)] hover:text-[var(--ink)] hover:bg-white border border-transparent hover:border-[var(--border)]"
      >
        <span className="hidden sm:inline">{lang === 'id' ? 'Selanjutnya' : 'Next'}</span>
        <ChevronRightIcon size={16} />
      </button>
    </div>
  )
}

function ProductsPageContent({ lang, params }: { lang: string, params: { lang: string } }) {
  const searchParams = useSearchParams()
  const [search, setSearch] = useState('')
  const [activeTab, setActiveTab] = useState(searchParams.get('tab') || 'all')
  const [currentPage, setCurrentPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const tabsRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tab = searchParams.get('tab')
    if (tab && tab !== 'all') {
      const exists = productCatalog.some(c => c.slug === tab)
      if (exists) setActiveTab(tab)
    }
  }, [searchParams])

  const totalProducts = productCatalog.reduce((sum, cat) => sum + cat.items.length, 0)

  const allProducts = productCatalog.flatMap(cat =>
    cat.items.map(item => ({ ...item, categoryName: cat.name, categorySlug: cat.slug }))
  )

  const t = lang === 'id' ? {
    title: 'Katalog Produk',
    subtitle: 'produk teknologi HVAC, energi, dan industri.',
    search: 'Cari produk...',
    allCategories: 'Semua Kategori',
    items: 'produk',
    detail: 'Lihat Detail',
    categories: 'Kategori',
    showing: 'Menampilkan',
    of: 'dari',
  } : {
    title: 'Product Catalog',
    subtitle: 'world-class HVAC, energy, and industrial products.',
    search: 'Search products...',
    allCategories: 'All Categories',
    items: 'products',
    detail: 'View Details',
    categories: 'Categories',
    showing: 'Showing',
    of: 'of',
  }

  const filteredCatalog = productCatalog.map(cat => ({
    ...cat,
    items: search.trim()
      ? cat.items.filter(item =>
          item.name.toLowerCase().includes(search.toLowerCase()) ||
          cat.name.toLowerCase().includes(search.toLowerCase())
        )
      : cat.items
  }))

  const filteredAllProducts = search.trim()
    ? allProducts.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.categoryName.toLowerCase().includes(search.toLowerCase())
      )
    : allProducts

  const allTabDisplay = { slug: 'all', name: t.allCategories, items: filteredAllProducts }

  const activeCategory = activeTab === 'all'
    ? allTabDisplay
    : (filteredCatalog.find(c => c.slug === activeTab) || productCatalog.find(c => c.slug === activeTab) || filteredCatalog[0])

  const visibleCount = activeCategory?.items.length || 0
  const totalPages = Math.ceil(visibleCount / ITEMS_PER_PAGE)
  const paginatedItems = (activeCategory?.items || []).slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  )
  const startItem = (currentPage - 1) * ITEMS_PER_PAGE + 1
  const endItem = Math.min(currentPage * ITEMS_PER_PAGE, visibleCount)

  useEffect(() => {
    if (tabsRef.current) {
      const activeEl = tabsRef.current.querySelector(`[data-tab="${activeTab}"]`)
      activeEl?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
    }
  }, [activeTab])

  useEffect(() => {
    setActiveTab('all')
  }, [search])

  useEffect(() => {
    setCurrentPage(1)
    setIsLoading(true)
    const timer = setTimeout(() => setIsLoading(false), 250)
    return () => clearTimeout(timer)
  }, [activeTab, search])

  useEffect(() => {
    if (currentPage > 1 && gridRef.current) {
      gridRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [currentPage])

  const handleTabClick = useCallback((slug: string) => {
    setActiveTab(slug)
    if (slug !== 'all') setSearch('')
  }, [])

  const handlePageChange = useCallback((page: number) => {
    setIsLoading(true)
    setCurrentPage(page)
    setTimeout(() => setIsLoading(false), 150)
  }, [])

  return (
    <div className="page-enter">
      {/* ═══════════════════════════════════════
          HERO — Dark with grid + green glow
          ═══════════════════════════════════════ */}
      <section className="section-dark relative min-h-[50vh] flex items-center pt-20 overflow-hidden">
        {/* Green glow */}
        <div className="green-glow top-[-150px] right-[-100px] opacity-40" />
        <div className="green-glow bottom-[-200px] left-[-150px] opacity-30" />

        <div className="absolute inset-0 grid-pattern opacity-20" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 w-full pb-24 md:pb-32">
          <div className="max-w-3xl">
            <Breadcrumb items={[{ label: lang === 'id' ? 'Produk' : 'Products' }]} lang={lang} />
            <AnimateIn>
              <p className="eyebrow text-[var(--brand-bright)] mb-4 mt-6">
                {lang === 'id' ? 'Katalog Lengkap' : 'Complete Catalog'}
              </p>
            </AnimateIn>
            <AnimateIn delay={100}>
              <h1 className="font-outfit text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-[1.08]">
                {t.title}
              </h1>
            </AnimateIn>
            <AnimateIn delay={200}>
              <p className="text-base sm:text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed">
                {totalProducts}+ {t.subtitle}
              </p>
            </AnimateIn>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10 z-10" />
      </section>

      {/* ═══════════════════════════════════════
          PRODUCTS CONTENT
          ═══════════════════════════════════════ */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto bg-[var(--surface)] relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="min-w-0">

            {/* ── Header ── */}
            <div className="text-center mb-8">
              <p className="eyebrow text-[var(--brand)] mb-3">
                {lang === 'id' ? 'Produk & Solusi' : 'Products & Solutions'}
              </p>
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="badge badge-green">
                  <span className="font-bold">{totalProducts}</span>
                  <span className="opacity-70">{t.items}</span>
                </div>
              </div>
            </div>

            {/* ── Search Bar ── */}
            <div className="relative max-w-md mx-auto mb-6 w-full">
              <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--ink-subtle)]" size={18} />
              <input
                type="text"
                placeholder={t.search}
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full pl-12 pr-10 py-3 bg-white rounded-xl border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-[var(--brand)]/30 focus:border-[var(--brand)] transition-all text-sm text-[var(--ink)] placeholder:text-[var(--ink-subtle)]"
              />
              {search && (
                <button
                  onClick={() => setSearch('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--ink-subtle)] hover:text-[var(--ink)]"
                >
                  <XIcon size={16} />
                </button>
              )}
            </div>

            {/* ── Category Tabs ── */}
            <div className="mb-4">
              <div ref={tabsRef} className="overflow-x-auto flex gap-3 pb-2 scrollbar-hide bg-white glass-panel p-2">
                <button
                  data-tab="all"
                  onClick={() => handleTabClick('all')}
                  className={`whitespace-nowrap px-5 py-2.5 rounded-xl text-sm font-medium transition-all shrink-0 flex items-center gap-2 ${
                    activeTab === 'all'
                      ? 'bg-[var(--brand)] text-white shadow-md'
                      : 'text-[var(--ink-muted)] hover:bg-[var(--surface-alt)] hover:text-[var(--ink)]'
                  }`}
                >
                  <LayoutGridIcon size={14} />
                  <span>{t.allCategories}</span>
                  <span className="ml-0.5 text-xs opacity-60">{filteredAllProducts.length}</span>
                </button>

                {filteredCatalog.filter(cat => cat.items.length > 0).map(cat => (
                  <button
                    key={cat.slug}
                    data-tab={cat.slug}
                    onClick={() => handleTabClick(cat.slug)}
                    className={`whitespace-nowrap px-5 py-2.5 rounded-xl text-sm font-medium transition-all shrink-0 ${
                      activeTab === cat.slug
                        ? 'bg-[var(--brand)] text-white shadow-md'
                        : 'text-[var(--ink-muted)] hover:bg-[var(--surface-alt)] hover:text-[var(--ink)]'
                    }`}
                  >
                    {cat.name}
                    <span className="ml-2 text-xs opacity-60">{cat.items.length}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* ── Filter status ── */}
            <div className="flex items-center justify-between mb-6 min-h-[20px]">
              {visibleCount < totalProducts ? (
                <p className="text-sm text-[var(--ink-subtle)]">
                  {t.showing} {visibleCount} {t.of} {totalProducts} {t.items}
                </p>
              ) : (
                <span />
              )}
              {totalPages > 1 && !isLoading && (
                <p className="text-xs text-[var(--ink-subtle)]">
                  {startItem}&ndash;{endItem} {t.of} {visibleCount}
                </p>
              )}
            </div>

            {/* ── Products Grid — Bento Layout ── */}
            <div ref={gridRef} className="relative min-h-[400px]">
              <div>
                {isLoading ? (
                  <div key="skeleton" className="animate-in fade-in duration-300">
                    <SkeletonGrid count={ITEMS_PER_PAGE} />
                  </div>
                ) : paginatedItems.length > 0 ? (
                  <div
                    key={`${activeTab}-${currentPage}`}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 min-w-0 animate-in fade-in slide-in-from-bottom-4 duration-500"
                  >
                    {paginatedItems.map((item, i) => {
                      const catSlug = (item as any).categorySlug || activeCategory.slug
                      const itemImg = item.img || categoryDefaultImages[catSlug] || '/images/hero/bg.jpg'
                      const itemSlug = item.slug || slugify(item.name)
                      const hasSpecs = item.specs && item.specs.length > 0
                      const hasImage = !!item.img

                      // Bento pattern: every 5th card is wide
                      const isWide = i % 5 === 0

                      return (
                        <div
                          key={`${catSlug}-${itemSlug}`}
                          className={`${isWide ? 'md:col-span-2' : ''} animate-in fade-in slide-in-from-bottom-4 duration-500`}
                          style={{ animationDelay: `${i * 30}ms`, animationFillMode: 'both' }}
                        >
                          {isWide ? (
                            /* ── WIDE BENTO CARD ── */
                            <Link
                              href={`/${lang}/products/${itemSlug}`}
                              className="group card-corporate !p-0 overflow-hidden h-full flex flex-col md:flex-row"
                            >
                              <div className="md:w-2/5 aspect-[4/3] md:aspect-auto bg-[var(--surface-alt)] relative overflow-hidden">
                                {activeTab === 'all' && (item as any).categoryName && (
                                  <span className="badge badge-green absolute top-3 right-3 z-10 !text-[10px]">
                                    {(item as any).categoryName}
                                  </span>
                                )}
                                <div className="absolute inset-3">
                                  <SkeletonImage src={itemImg} alt={item.name} fill wrapperClass="absolute inset-0" imgClass="object-contain group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 40vw" loading="lazy" />
                                </div>
                                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white/60 to-transparent md:hidden" />
                              </div>
                              <div className="p-5 md:p-6 flex-1 flex flex-col justify-center">
                                <div className="badge badge-green !text-[10px] mb-3 w-fit">
                                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand)]" />
                                  {lang === 'id' ? 'Produk Unggulan' : 'Featured Product'}
                                </div>
                                <h3 className="font-outfit font-bold text-base md:text-lg text-[var(--ink)] mb-2 line-clamp-2">{item.name}</h3>
                                {hasSpecs && (
                                  <div className="flex flex-wrap gap-1.5 mb-3">
                                    {item.specs!.slice(0, 4).map((s, si) => (
                                      <span key={si} className="px-2.5 py-0.5 bg-[var(--brand-pale)] text-[var(--brand)] text-[10px] font-medium rounded-full border border-[var(--border-green)]">
                                        {s}
                                      </span>
                                    ))}
                                    {item.specs!.length > 4 && (
                                      <span className="px-2.5 py-0.5 text-[var(--ink-subtle)] text-[10px] font-medium">
                                        +{item.specs!.length - 4}
                                      </span>
                                    )}
                                  </div>
                                )}
                                <span className="text-[var(--brand)] text-xs font-semibold flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                                  {t.detail} <ExternalLinkIcon size={12} />
                                </span>
                              </div>
                            </Link>
                          ) : (
                            /* ── STANDARD BENTO CARD ── */
                            <Link
                              href={`/${lang}/products/${itemSlug}`}
                              className="group card-corporate !p-0 overflow-hidden h-full"
                            >
                              <div className="aspect-[4/3] bg-[var(--surface-alt)] flex items-center justify-center relative overflow-hidden">
                                {activeTab === 'all' && (item as any).categoryName && (
                                  <span className="badge badge-green absolute top-3 right-3 z-10 !text-[10px]">
                                    {(item as any).categoryName}
                                  </span>
                                )}
                                {/* Specs pills overlay for cards without native image */}
                                {!hasImage && hasSpecs && (
                                  <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center px-4">
                                      <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-[var(--brand-pale)] flex items-center justify-center">
                                        <LayoutGridIcon size={20} className="text-[var(--brand)]/40" />
                                      </div>
                                      <div className="flex flex-wrap justify-center gap-1.5 max-w-[200px]">
                                        {item.specs!.slice(0, 3).map((s, si) => (
                                          <span key={si} className="px-2 py-0.5 bg-[var(--brand-pale)] text-[var(--brand)] text-[9px] font-medium rounded-full border border-[var(--border-green)]">
                                            {s}
                                          </span>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                )}
                                {hasImage && (
                                  <div className="absolute inset-3">
                                    <SkeletonImage src={itemImg} alt={item.name} fill wrapperClass="absolute inset-0" imgClass="object-contain group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw" loading="lazy" />
                                  </div>
                                )}
                                {i % 4 === 1 && hasSpecs && (
                                  <span className="absolute bottom-2 left-2 z-10 px-2 py-0.5 bg-[var(--brand)]/90 text-white text-[8px] font-bold rounded-full">
                                    {item.specs!.length} {lang === 'id' ? 'spesifikasi' : 'specs'}
                                  </span>
                                )}
                              </div>
                              <div className="p-5">
                                {i % 4 === 2 && hasSpecs && (
                                  <div className="flex flex-wrap gap-1 mb-2">
                                    {item.specs!.slice(0, 2).map((s, si) => (
                                      <span key={si} className="px-2 py-0.5 bg-[var(--brand-pale)] text-[var(--brand)] text-[9px] font-medium rounded-full border border-[var(--border-green)]">
                                        {s}
                                      </span>
                                    ))}
                                  </div>
                                )}
                                <h3 className="font-outfit font-semibold text-sm text-[var(--ink)] mb-3 line-clamp-2">{item.name}</h3>
                                <div className="flex items-center gap-1.5 text-[var(--brand)] text-xs font-semibold">
                                  {t.detail}
                                  <ExternalLinkIcon size={12} />
                                </div>
                              </div>
                            </Link>
                          )}
                        </div>
                      )
                    })}
                  </div>
                ) : (
                  <div key="empty" className="text-center py-16 animate-in fade-in duration-300">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-[var(--surface-alt)] flex items-center justify-center">
                      <SearchIcon size={32} className="text-[var(--ink-subtle)]" />
                    </div>
                    <p className="text-lg font-outfit font-bold text-[var(--ink)]">{lang === 'id' ? 'Produk tidak ditemukan' : 'No products found'}</p>
                    <p className="text-sm text-[var(--ink-muted)] mt-1 mb-6">{lang === 'id' ? 'Coba kata kunci atau kategori lain.' : 'Try a different search or category.'}</p>
                    <div className="flex flex-wrap justify-center gap-2 mb-6">
                      {['Chiller','Cooling Tower','Solar Panel','Heat Pump','Boiler'].map(cat => (
                        <button key={cat} onClick={() => { setSearch(''); setActiveTab(cat.toLowerCase().replace(/\s+/g, '-')) }}
                          className="px-4 py-2 rounded-full bg-[var(--surface-alt)] text-sm text-[var(--ink-muted)] hover:bg-[var(--brand-pale)] hover:text-[var(--brand)] transition-all font-medium"
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                    <Link href={`/${lang}/contact`} className="btn-primary">
                      <MessageCircleIcon size={16} />
                      {lang === 'id' ? 'Hubungi Kami untuk produk lain' : 'Contact Us for other products'}
                    </Link>
                  </div>
                )}
              </div>
            </div>

            {/* ── Pagination ── */}
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
              lang={lang}
            />

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          BOTTOM CTA — Green section
          ═══════════════════════════════════════ */}
      <section className="section-green py-16 md:py-20 relative overflow-hidden">
        <div className="green-glow top-[-200px] right-[-100px] opacity-30" />
        <div className="green-glow bottom-[-150px] left-[-150px] opacity-20" />
        <div className="absolute inset-0 grid-pattern opacity-[0.04]" />

        <div className="relative z-10 max-w-3xl mx-auto text-center px-4 sm:px-6">
          <AnimateIn>
            <p className="eyebrow text-[var(--brand-bright)]/80 mb-4">
              {lang === 'id' ? 'Butuh Bantuan?' : 'Need Help?'}
            </p>
          </AnimateIn>
          <AnimateIn delay={100}>
            <h2 className="font-outfit text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              {lang === 'id' ? 'Tidak Menemukan Produk?' : "Can't Find a Product?"}
            </h2>
          </AnimateIn>
          <AnimateIn delay={150}>
            <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
              {lang === 'id' ? 'Hubungi tim kami untuk informasi produk dan ketersediaan.' : 'Contact our team for product information and availability.'}
            </p>
          </AnimateIn>
          <AnimateIn delay={200}>
            <Link href={`/${lang}/contact`} className="btn-accent inline-flex">
              {lang === 'id' ? 'Hubungi Kami' : 'Contact Us'}
              <ArrowRightIcon size={16} />
            </Link>
          </AnimateIn>
        </div>
      </section>
    </div>
  )
}

export default function ProductsPage({ params }: { params: { lang: string } }) {
  return (
    <Suspense fallback={
      <div className="section-dark min-h-screen flex items-center justify-center">
        <div className="premium-spinner w-8 h-8">
          <svg viewBox="0 0 50 50" className="w-full h-full">
            <circle cx="25" cy="25" r="20" fill="none" stroke="currentColor" strokeWidth="4" className="text-white/30" />
          </svg>
        </div>
      </div>
    }>
      <ProductsPageContent params={params} lang={params.lang} />
    </Suspense>
  )
}
