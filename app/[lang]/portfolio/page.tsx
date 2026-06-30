'use client'
import Link from 'next/link'
import Image from 'next/image'
import SkeletonImage from '@/components/SkeletonImage'
import { AnimateIn, StaggerContainer } from '@/components/AnimateIn'
import { ArrowRightIcon } from '@/components/Icons'
import Breadcrumb from '@/components/Breadcrumb'
import { projects } from '@/lib/portfolio-data'

export default function PortfolioPage({ params }: { params: { lang: string } }) {
  const lang = params.lang === 'en' ? 'en' : 'id'
  const projectList = projects[lang as keyof typeof projects]

  const t = {
    title: lang === 'id' ? 'Portofolio Proyek' : 'Project Portfolio',
    subtitle: lang === 'id' ? 'Bukti nyata implementasi solusi energi kami di berbagai sektor industri.' : 'Real proof of our energy solutions across various industrial sectors.',
    viewDetail: lang === 'id' ? 'Lihat Detail' : 'View Details',
  }

  return (
    <div>
      {/* ═══════════════════════════════════════
          HERO — Dark + green glow ambiance
          ═══════════════════════════════════════ */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
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
        </div>
        <div className="absolute inset-0 grid-pattern opacity-20" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 w-full pt-28 pb-20 md:pt-32 md:pb-28">
          <Breadcrumb items={[{ label: t.title }]} lang={lang} />
          <div className="max-w-3xl mt-6">
            <AnimateIn>
              <p className="eyebrow text-[var(--brand-bright)] mb-4">
                {lang === 'id' ? 'Proyek Kami' : 'Our Projects'}
              </p>
            </AnimateIn>
            <AnimateIn delay={100}>
              <h1 className="font-outfit text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-[1.08]">
                {t.title}
              </h1>
            </AnimateIn>
            <AnimateIn delay={200}>
              <p className="text-base sm:text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed">
                {t.subtitle}
              </p>
            </AnimateIn>
          </div>
        </div>

        {/* Bottom fade into surface */}
        <div className="absolute bottom-0 left-0 right-0 h-32 md:h-48 z-10 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, transparent 0%, var(--surface) 100%)',
          }} />
      </section>

      {/* ═══════════════════════════════════════
          PROJECT GRID — Masonry
          ═══════════════════════════════════════ */}
      <section className="bg-[var(--surface)] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

          {/* Quick stats strip */}
          <AnimateIn>
            <div className="flex flex-wrap gap-4 mb-12 pb-8 border-b border-[var(--border)]">
              <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-[var(--brand-pale)]">
                <span className="font-outfit text-xl font-bold text-[var(--brand)]">{projectList.length}</span>
                <span className="text-sm text-[var(--ink-muted)]">
                  {lang === 'id' ? 'Proyek Selesai' : 'Completed Projects'}
                </span>
              </div>
              <div className="flex items-center gap-2">
                {Array.from(new Set(projectList.map(p => p.category))).map(cat => (
                  <span key={cat} className="px-3 py-1.5 rounded-full text-xs font-medium bg-[var(--surface-alt)] text-[var(--ink-muted)]">
                    {cat}
                  </span>
                ))}
              </div>
            </div>
          </AnimateIn>

          <StaggerContainer className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6" staggerDelay={80}>
            {projectList.map((project, i) => {
              const isLarge = i % 5 === 0
              return (
                <div key={project.slug} className="break-inside-avoid">
                  <Link href={`/${lang}/portfolio/${project.slug}`} className="block group card-corporate !p-0 overflow-hidden">
                    {/* Image */}
                    <div className={`overflow-hidden relative ${isLarge ? 'h-72 sm:h-80' : 'h-56 sm:h-64'}`}>
                      <SkeletonImage
                        src={project.img}
                        alt={project.title}
                        fill
                        wrapperClass="absolute inset-0"
                        imgClass="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      {/* Category badge */}
                      <div className="absolute top-4 left-4">
                        <span className="badge badge-dark !text-[10px]">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 sm:p-7">
                      <h3 className="font-outfit text-xl sm:text-[22px] font-bold text-[var(--ink)] mb-3 group-hover:text-[var(--brand)] transition-colors leading-snug">
                        {project.title}
                      </h3>
                      <p className="text-[var(--ink-secondary)] text-sm leading-relaxed mb-5 line-clamp-3">
                        {project.desc}
                      </p>

                      {/* Key result pills */}
                      <div className="flex flex-wrap gap-2 mb-5">
                        {project.results.slice(0, 2).map((r, ri) => (
                          <span
                            key={ri}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-[var(--brand-pale)] text-[var(--brand)]"
                          >
                            <span className="font-bold">{r.value}</span>
                            <span className="text-[var(--ink-muted)]">{r.metric}</span>
                          </span>
                        ))}
                      </div>

                      {/* CTA */}
                      <span className="inline-flex items-center gap-2 text-[var(--brand)] font-semibold text-sm group-hover:gap-3 transition-all">
                        {t.viewDetail}
                        <ArrowRightIcon size={15} className="transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </Link>
                </div>
              )
            })}
          </StaggerContainer>
        </div>
      </section>
    </div>
  )
}
