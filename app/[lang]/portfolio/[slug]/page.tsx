import Link from 'next/link'
import Image from 'next/image'
import SkeletonImage from '@/components/SkeletonImage'
import { notFound } from 'next/navigation'
import { ArrowLeftIcon, MapPinIcon, ClockIcon, Building2Icon, CheckCircle2Icon } from '@/components/Icons'
import { getProject } from '@/lib/portfolio-data'
import { AnimateIn } from '@/components/AnimateIn'
import { LazyBg } from '@/lib/lazy-bg'
export function generateStaticParams() {
  return []
}

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>
}) {
  const { lang, slug } = await params
  const project = getProject(lang, slug)

  if (!project) {
    notFound()
  }

  const t = lang === 'en' ? 'en' : 'id'

  return (
    <div className="page-enter">
      {/* Hero Banner */}
      <section className="relative min-h-[50vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(145deg, #0a1628 0%, #0D1B2A 25%, #132637 50%, #1a3348 75%, #0D1B2A 100%)',
          }} />
          <div className="absolute inset-0 opacity-15 hero-zoom">
            <LazyBg
              src="/images/services/office.jpg"
              style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
              fallbackClass=""
            />
          </div>
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
            <Link
              href={`/${lang}/portfolio`}
              className="inline-flex items-center gap-2 text-white/70 hover:text-white font-semibold hover:gap-3 transition-all mb-6"
            >
              <ArrowLeftIcon size={18} />
              {t === 'id' ? 'Kembali ke Portofolio' : 'Back to Portfolio'}
            </Link>
            <AnimateIn>
              <span className="inline-block px-3 py-1 rounded-full bg-[#2D5A27] text-white text-xs font-bold uppercase tracking-wider mb-4">
                {project.category}
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white mb-6">
                {project.title}
              </h1>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 max-w-2xl">{project.client} - {project.location}</p>
            </AnimateIn>
          </div>
        </div>
        {/* Smooth transition blend */}
        <div className="absolute bottom-0 left-0 right-0 h-32 md:h-48 z-10 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, rgba(13,27,42,0.85) 0%, rgba(13,27,42,0.5) 30%, rgba(253,251,247,0.3) 60%, #FDFBF7 100%)',
          }}
        />
      </section>

      <div className="section-divider" />

      {/* Content */}
      <div className="py-12 sm:py-16 md:py-20 lg:py-28 px-4 sm:px-6 md:px-8 bg-[#FDFBF7] relative min-h-screen">
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{
          backgroundImage: 'url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJmIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc0IiBudW1PY3RhdmVzPSIzIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI2YpIiBvcGFjaXR5PSIwIi8+PC9zdmc+)',
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 200px',
        }} />
        <div className="max-w-4xl sm:max-w-5xl lg:max-w-6xl mx-auto relative z-10">
          {/* Hero image */}
          <AnimateIn delay={0.1}>
            <div className="relative h-72 md:h-96 rounded-3xl overflow-hidden mb-10 shadow-lg"
              style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.1)' }}>
              <SkeletonImage
                src={project.img}
                alt={project.title}
                fill
                wrapperClass="absolute inset-0"
                imgClass="object-cover"
                priority
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </AnimateIn>

          {/* Meta info - Glassmorphism */}
          <AnimateIn delay={0.15}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {[
                { icon: Building2Icon, label: t === 'id' ? 'Klien' : 'Client', value: project.client },
                { icon: MapPinIcon, label: t === 'id' ? 'Lokasi' : 'Location', value: project.location },
                { icon: ClockIcon, label: 'Tahun', value: project.year },
                { icon: ClockIcon, label: t === 'id' ? 'Durasi' : 'Duration', value: project.duration },
              ].map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="bg-white/70 backdrop-blur-xl rounded-2xl p-4 border border-white/20 transition-all duration-300 hover:shadow-md"
                  style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.6)' }}
                >
                  <div className="flex items-center gap-2 text-[#2D5A27] mb-1">
                    <Icon size={14} />
                    <span className="text-xs font-bold uppercase tracking-wider">
                      {label}
                    </span>
                  </div>
                  <p className="text-[#1A252F] text-sm font-medium">{value}</p>
                </div>
              ))}
            </div>
          </AnimateIn>

          {/* Description */}
          <AnimateIn delay={0.2}>
            <section className="mb-12">
              <p className="text-[#2C3E50]/70 text-lg leading-relaxed italic border-l-4 border-[#2D5A27] pl-6">
                {project.desc}
              </p>
            </section>
          </AnimateIn>

          {/* Problem */}
          <AnimateIn delay={0.2}>
            <section className="mb-12">
              <h2 className="font-serif text-2xl text-[#1A252F] mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-red-50 text-red-600 flex items-center justify-center text-sm font-bold">
                  1
                </span>
                {t === 'id' ? 'Tantangan' : 'The Challenge'}
              </h2>
              <p className="text-[#2C3E50]/80 leading-relaxed text-lg">
                {project.problem}
              </p>
            </section>
          </AnimateIn>

          {/* Solution */}
          <AnimateIn delay={0.25}>
            <section className="mb-12">
              <h2 className="font-serif text-2xl text-[#1A252F] mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-sm font-bold">
                  2
                </span>
                {t === 'id' ? 'Solusi Kami' : 'Our Solution'}
              </h2>
              <p className="text-[#2C3E50]/80 leading-relaxed text-lg">
                {project.solution}
              </p>
            </section>
          </AnimateIn>

          {/* Results - Premium number display */}
          <AnimateIn delay={0.3}>
            <section className="mb-12">
              <h2 className="font-serif text-2xl text-[#1A252F] mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-green-50 text-green-600 flex items-center justify-center text-sm font-bold">
                  3
                </span>
                {t === 'id' ? 'Hasil' : 'Results'}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {project.results.map((r: any) => (
                  <div
                    key={r.metric}
                    className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 border border-white/20 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                    style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.6)' }}
                  >
                    <p className="text-3xl font-serif font-bold mb-2"
                      style={{
                        background: 'linear-gradient(135deg, #2D5A27 0%, #1A252F 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}>
                      {r.value}
                    </p>
                    <p className="text-xs text-[#2C3E50]/60 uppercase tracking-wider font-medium">
                      {r.metric}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </AnimateIn>

          {/* Testimonial - Glassmorphism with gradient */}
          {project.testimonial && (
            <AnimateIn delay={0.35}>
              <section className="mb-12 rounded-3xl p-8 md:p-12 relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #1A252F 0%, #0D1B2A 100%)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
                }}>
                <div className="absolute inset-0 bg-white/5 backdrop-blur-sm" />
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2D5A27]/50 to-transparent" />
                <div className="relative z-10">
                  <div className="flex items-center gap-2 text-[#2D5A27] mb-4">
                    <CheckCircle2Icon size={18} />
                    <span className="text-sm font-bold uppercase tracking-wider">
                      {t === 'id' ? 'Testimoni Klien' : 'Client Testimonial'}
                    </span>
                  </div>
                  <blockquote className="font-serif text-xl md:text-2xl text-white/90 mb-6 leading-relaxed">
                    &ldquo;{project.testimonial.quote}&rdquo;
                  </blockquote>
                  <div>
                    <p className="text-white font-semibold">
                      {project.testimonial.author}
                    </p>
                    <p className="text-white/50 text-sm">{project.testimonial.role}</p>
                  </div>
                </div>
              </section>
            </AnimateIn>
          )}

          {/* CTA */}
          <AnimateIn delay={0.4}>
            <section className="text-center relative rounded-3xl p-10 md:p-14 overflow-hidden group"
              style={{
                background: 'linear-gradient(135deg, #2D5A27 0%, #1A252F 100%)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
              }}>
              {/* Shimmer overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{
                  background: 'linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.06) 40%, rgba(255,255,255,0.12) 50%, rgba(255,255,255,0.06) 60%, transparent 80%)',
                  animation: 'shimmer 2s ease-in-out infinite',
                }} />
              <div className="relative z-10">
                <h2 className="font-serif text-3xl text-white mb-4">
                  {t === 'id' ? 'Butuh Solusi Serupa?' : 'Need a Similar Solution?'}
                </h2>
                <p className="text-white/70 mb-8 max-w-lg mx-auto">
                  {t === 'id'
                    ? 'Konsultasikan kebutuhan energi industri Anda dengan tim ahli kami.'
                    : 'Consult your industrial energy needs with our expert team.'}
                </p>
                <Link
                  href={`/${lang}/contact`}
                  className="bg-white text-[#1A252F] px-10 py-4 rounded-full text-lg font-bold hover:bg-[#FDFBF7] transition-all inline-block shadow-2xl"
                >
                  {t === 'id' ? 'Konsultasi Gratis' : 'Free Consultation'}
                </Link>
              </div>
            </section>
          </AnimateIn>
        </div>
      </div>
    </div>
  )
}
