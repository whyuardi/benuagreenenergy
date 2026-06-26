import Link from 'next/link'
import Image from 'next/image'
import { ArrowRightIcon } from '@/components/Icons'
import { projects } from '@/lib/portfolio-data'
import { AnimateIn, SectionHeading, StaggerContainer } from '@/components/AnimateIn'
import Breadcrumb from '@/components/Breadcrumb'

export function generateStaticParams() {
  return [{ lang: 'id' }, { lang: 'en' }]
}

export default function Portfolio({ params }: { params: { lang: string } }) {
  const t = params.lang === 'en' ? 'en' : 'id'
  const projectsList = projects[t as keyof typeof projects]

  return (
    <div className="page-enter">
      {/* Hero Banner */}
      <section className="relative min-h-[50vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(145deg, #0a1628 0%, #0D1B2A 25%, #132637 50%, #1a3348 75%, #0D1B2A 100%)',
          }} />
          <div className="absolute inset-0 opacity-15 hero-zoom" style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }} />
          <div className="absolute inset-0 grid-pattern opacity-40" />
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(180deg, rgba(10,22,40,0.3) 0%, rgba(13,27,42,0.6) 40%, rgba(13,27,42,0.85) 70%, rgba(13,27,42,1) 100%)',
          }} />
          {/* Ambient glow orbs */}
          <div className="absolute inset-0 pointer-events-none" style={{
            background: 'radial-gradient(ellipse 600px 400px at 20% 30%, rgba(45,90,39,0.12) 0%, transparent 70%), radial-gradient(ellipse 500px 500px at 80% 60%, rgba(26,55,122,0.08) 0%, transparent 60%)',
          }} />
          <div className="absolute top-1/4 right-[15%] w-72 h-72 rounded-full opacity-[0.04] subtle-float pointer-events-none"
            style={{ background: 'radial-gradient(circle, #4CAF50 0%, transparent 70%)' }} />
          <div className="absolute bottom-1/3 left-[10%] w-48 h-48 rounded-full opacity-[0.03] subtle-float pointer-events-none"
            style={{ background: 'radial-gradient(circle, #81C784 0%, transparent 70%)', animationDelay: '2s' }} />
          <div className="absolute inset-0 noise-texture opacity-50 pointer-events-none mix-blend-overlay" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 w-full pb-24 md:pb-32">
          <div className="max-w-3xl">
            <Breadcrumb items={[{ label: t === 'id' ? 'Proyek' : 'Portfolio' }]} lang={t} />
            <AnimateIn>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white mb-6 mt-8">{t === 'id' ? 'Portofolio Proyek' : 'Project Portfolio'}</h1>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 max-w-2xl">{t === 'id' ? 'Bukti nyata implementasi solusi energi kami di berbagai sektor industri.' : 'Real proof of our energy solutions across various industrial sectors.'}</p>
            </AnimateIn>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 md:h-48 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, rgba(13,27,42,0.85) 0%, rgba(13,27,42,0.5) 30%, rgba(253,251,247,0.3) 60%, #FDFBF7 100%)' }}
        />
      </section>

      <div className="section-divider" />

      {/* Projects Grid */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 px-4 sm:px-6 md:px-8 bg-[#FDFBF7] relative">
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{backgroundImage:'url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJmIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc0IiBudW1PY3RhdmVzPSIzIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI2YpIiBvcGFjaXR5PSIwIi8+PC9zdmc+)', backgroundRepeat:'repeat', backgroundSize:'200px 200px'}} />
      <div className="max-w-7xl mx-auto relative z-10">

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 min-w-0">
          {projectsList.map((project: any) => (
            <div key={project.slug} className="group bg-white/70 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/20 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 hover-glow"
              style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.6)' }}>
              <div className="h-64 overflow-hidden relative">
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-6 sm:p-8">
                <span className="text-xs font-bold uppercase tracking-widest text-[#2D5A27] mb-3 block">
                  {project.category}
                </span>
                <h3 className="font-serif text-2xl text-[#1A252F] mb-4">{project.title}</h3>
                <p className="text-[#2C3E50]/70 mb-4 leading-relaxed">
                  {project.desc}
                </p>
                {/* Key metrics on card - gradient pills */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.results.slice(0, 3).map((r: any, i: number) => (
                    <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold text-white"
                      style={{ background: 'linear-gradient(135deg, #2D5A27 0%, #1A252F 100%)' }}>
                      <span>{r.value}</span>
                      <span className="text-white/60 font-normal mx-0.5">|</span>
                      <span className="text-white/80 font-medium">{r.metric}</span>
                    </span>
                  ))}
                </div>
                <Link
                  href={`/${t}/portfolio/${project.slug}`}
                  className="text-[#2D5A27] font-semibold flex items-center gap-2 group-hover:gap-3 transition-all"
                >
                  {t === 'id' ? 'Lihat Detail' : 'View Details'}
                  <ArrowRightIcon size={16} />
                </Link>
              </div>
            </div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  </div>
  )
}
