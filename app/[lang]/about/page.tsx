'use client'
import { AwardIcon, TargetIcon, EyeIcon, BarChartIcon, ThermometerIcon, ShieldIcon, UsersIcon, LeafIcon } from '@/components/Icons'
import { AnimateIn } from '@/components/AnimateIn'
import Breadcrumb from '@/components/Breadcrumb'

export default function AboutPage({ params }: { params: { lang: string } }) {
  const lang = params.lang === 'en' ? 'en' : 'id'

  const t = lang === 'id' ? {
    title: 'Tentang Kami', subtitle: 'Mitra strategis Anda dalam transisi energi hijau di Indonesia dan Asia Tenggara.',
    historyTitle: 'Perjalanan Kami',
    history_1: 'BGE Group, didirikan pada tahun 2000 dengan kantor pusat di Singapura dan Jakarta, adalah pelopor investasi energi hijau dan keberlanjutan. PT. Benua Green Energy hadir sebagai bagian dari grup ini untuk melayani kebutuhan industri Indonesia dalam sistem HVAC, manajemen energi, dan solusi energi terbarukan.',
    history_2: 'Dengan pengalaman lebih dari 25 tahun, kami berkomitmen untuk terus berinovasi dan mengalokasikan 10% dari pendapatan penjualan tahunan untuk Research & Development. Kami menghadirkan sistem pendingin non-listrik (LiBr Absorption Chiller) dan refrigerant rendah GWP yang ramah lingkungan.',
    globalTitle: 'Dampak Global & Solusi Kami',
    global_1: 'Berdasarkan laporan IEA dan UNEP, sektor pendinginan berkontribusi terhadap sekitar 10% emisi CO₂ global dan mengonsumsi sekitar 20% listrik dunia.',
    global_2: 'Setiap penurunan 10°C suhu ruangan ber-AC akan diikuti peningkatan 1°C suhu di luar ruangan. Semakin dingin ruangan ber-AC, semakin panas suhu di luar. Bumi semakin panas.',
    global_3: 'Kami percaya bahwa solusi HVAC yang efisien (high COP, inverter, system design), penggunaan refrigerant Low-GWP, dan perawatan rutin adalah kunci untuk mengurangi dampak ini.',
    vision: 'Menjadi mitra strategis utama bagi industri dalam transisi energi hijau di Asia Tenggara.',
    mission: 'Menyediakan solusi HVAC dan Energy Management System yang efisien, andal, dan terjangkau untuk skala industri besar.',
    exp: '25+ Tahun Pengalaman', expDesc: 'Telah dipercaya oleh berbagai sektor industri di seluruh Indonesia sejak tahun 2000.',
    rnd: '10% untuk R&D', rndDesc: 'Komitmen kami terhadap inovasi teknologi energi berkelanjutan.',
    globalFact: 'Cooling ~10% CO₂ Global', globalDesc: 'Kontribusi sektor pendingin terhadap emisi global (IEA & UNEP).',
    teamTitle: 'Tim Manajemen Kami',
    teamDesc: 'Para profesional berpengalaman yang memimpin transformasi energi hijau di Indonesia.',
    team: [
      { name: 'Person 1', role: 'Direktur Utama', exp: '20+ tahun di industri HVAC & energi', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face' },
      { name: 'Person 2', role: 'Direktur Teknis', exp: '18+ tahun engineering & project management', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face' },
      { name: 'Person 3', role: 'Direktur Keuangan', exp: '15+ tahun financial planning & strategy', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face' },
      { name: 'Person 4', role: 'Kepala Teknik', exp: '25+ tahun chiller & HVAC specialist', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face' },
    ],
    certs: [
      { name: 'ISO 9001:2015', desc: 'Sistem Manajemen Mutu untuk layanan HVAC & energi' },
      { name: 'Mitra Resmi YORK®', desc: 'Authorized distributor & service center untuk produk YORK' },
      { name: 'Anggota ASHRAE', desc: 'American Society of Heating, Refrigerating and Air-Conditioning Engineers' },
      { name: 'IUJASMI', desc: 'Ikatan Ahli Utama Jasa & Sistem Mekanikal Indonesia' },
    ],
  } : {
    title: 'About Us', subtitle: 'Your strategic partner in the green energy transition across Indonesia and Southeast Asia.',
    historyTitle: 'Our Journey',
    history_1: 'BGE Group, established in 2000 with headquarters in Singapore and Jakarta, is a leading advocate for green energy investment and sustainability. PT. Benua Green Energy was established as part of this group to serve Indonesian industries in HVAC systems, energy management, and renewable energy solutions.',
    history_2: 'With over 25 years of experience, we are committed to continuous innovation, allocating 10% of annual sales revenue to Research & Development. We proudly present non-electric cooling systems (LiBr Absorption Chiller) and low-GWP refrigerants that are environmentally friendly.',
    globalTitle: 'Global Impact & Our Solutions',
    global_1: 'According to IEA and UNEP reports, the cooling sector contributes approximately 10% of global CO₂ emissions and consumes about 20% of the world\'s electricity.',
    global_2: 'Every 10°C decrease in air-conditioned indoor temperature is followed by a 1°C increase in outdoor temperature. The colder the AC room, the hotter it gets outside. Our planet is warming.',
    global_3: 'We believe that efficient HVAC solutions (high COP, inverter, system design), Low-GWP refrigerants, and regular maintenance are the keys to reducing this impact.',
    vision: 'To be the primary strategic partner for industries in the green energy transition across Southeast Asia.',
    mission: 'Providing efficient, reliable, and affordable HVAC and Energy Management System solutions for large-scale industrial needs.',
    exp: '25+ Years Experience', expDesc: 'Trusted by various industrial sectors across Indonesia since 2000.',
    rnd: '10% for R&D', rndDesc: 'Our commitment to sustainable energy technology innovation.',
    globalFact: 'Cooling ~10% Global CO₂', globalDesc: 'Cooling sector contribution to global emissions (IEA & UNEP).',
    teamTitle: 'Our Management Team',
    teamDesc: 'Experienced professionals leading the green energy transformation in Indonesia.',
    team: [
      { name: 'Ravi Desai', role: 'CEO', exp: '20+ years in HVAC & energy industry', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face' },
      { name: 'Andi Pratama', role: 'CTO', exp: '18+ years engineering & project management', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face' },
      { name: 'Siti Rahmawati', role: 'CFO', exp: '15+ years financial planning & strategy', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face' },
      { name: 'Bambang Wijaya', role: 'Chief Engineer', exp: '25+ years chiller & HVAC specialist', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face' },
    ],
    certs: [
      { name: 'ISO 9001:2015', desc: 'Quality Management System for HVAC & energy services' },
      { name: 'Official YORK® Partner', desc: 'Authorized distributor & service center for YORK products' },
      { name: 'ASHRAE Member', desc: 'American Society of Heating, Refrigerating and Air-Conditioning Engineers' },
      { name: 'GBCI Member', desc: 'Green Building Council Indonesia member' },
    ],
  }

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
            <Breadcrumb items={[{ label: lang === 'id' ? 'Tentang Kami' : 'About Us' }]} lang={lang} />
            <AnimateIn>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white mb-6 mt-8">{t.title}</h1>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 max-w-2xl">{t.subtitle}</p>
            </AnimateIn>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 md:h-48 z-10 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, rgba(13,27,42,0.85) 0%, rgba(13,27,42,0.5) 30%, rgba(253,251,247,0.3) 60%, #FDFBF7 100%)',
          }}
        />
      </section>

      {/* Content section */}
      <div className="py-12 sm:py-16 md:py-20 lg:py-28 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto bg-[#FDFBF7] relative">
        <div className="absolute inset-0 noise-texture opacity-50 pointer-events-none mix-blend-overlay" />
      <div className="max-w-5xl mx-auto relative z-10">

      {/* History */}
      <div className="max-w-5xl mx-auto mb-20">
        <div className="section-divider mb-8 sm:mb-12" />
        <AnimateIn><h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#1A252F] mb-8 heading-line inline-block">{t.historyTitle}</h2></AnimateIn>
        <div className="space-y-6 text-lg text-[#2C3E50]/80 leading-relaxed mt-10">
          <AnimateIn delay={0.1}><p>{t.history_1}</p></AnimateIn>
          <AnimateIn delay={0.15}><p>{t.history_2}</p></AnimateIn>
        </div>
      </div>

      {/* Stats Cards - Glassmorphism */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto mb-20">
        <AnimateIn delay={0.1}>
          <div className="group bg-white/70 backdrop-blur-xl p-10 rounded-3xl border border-white/20 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-500 hover-glow">
            <AwardIcon size={40} className="text-[#2D5A27] mb-6" />
            <h3 className="font-bold text-2xl mb-3">{t.exp}</h3>
            <p className="text-[#2C3E50]/70">{t.expDesc}</p>
          </div>
        </AnimateIn>
        <AnimateIn delay={0.2}>
          <div className="group bg-white/70 backdrop-blur-xl p-10 rounded-3xl border border-white/20 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-500 hover-glow">
            <TargetIcon size={40} className="text-[#2D5A27] mb-6" />
            <h3 className="font-bold text-2xl mb-3">{t.rnd}</h3>
            <p className="text-[#2C3E50]/70">{t.rndDesc}</p>
          </div>
        </AnimateIn>
      </div>

      {/* Global Impact - Bento Layout */}
      <div className="max-w-5xl mx-auto mb-20">
        <div className="section-divider mb-8 sm:mb-12" />
        <AnimateIn><h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#1A252F] mb-8">{t.globalTitle}</h2></AnimateIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {/* Featured BIG stat */}
          <AnimateIn delay={0.1} className="md:col-span-2 md:row-span-2 bg-gradient-to-br from-[#2D5A27] to-[#1A252F] p-8 rounded-3xl shadow-lg flex flex-col justify-center relative overflow-hidden group hover-glow">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 50%, rgba(255,255,255,0.04) 100%)',
            }} />
            <ThermometerIcon size={36} className="text-white/80 mb-4 relative z-10" />
            <p className="text-5xl font-bold text-white mb-2 relative z-10">~10%</p>
            <p className="text-sm text-white/60 uppercase tracking-wider relative z-10">CO₂ Global</p>
            <p className="text-white/50 text-xs mt-4 leading-relaxed relative z-10">{lang === 'id' ? 'Kontribusi sektor pendingin terhadap emisi CO₂ global (sumber: IEA & UNEP).' : 'Cooling sector contribution to global CO₂ emissions (source: IEA & UNEP).'}</p>
          </AnimateIn>
          {/* Stat 2 - glass */}
          <AnimateIn delay={0.2} className="bg-white/70 backdrop-blur-xl p-6 rounded-2xl border border-white/20 shadow-sm hover:shadow-md transition-all duration-300 hover-glow">
            <BarChartIcon size={28} className="text-[#2D5A27] mb-3" />
            <p className="text-3xl font-bold text-[#1A252F]">~20%</p>
            <p className="text-xs text-[#2C3E50]/60 uppercase tracking-wider mt-1">{lang === 'id' ? 'Listrik Global' : 'Global Electricity'}</p>
          </AnimateIn>
          {/* Stat 3 - glass */}
          <AnimateIn delay={0.3} className="bg-white/70 backdrop-blur-xl p-6 rounded-2xl border border-white/20 shadow-sm hover:shadow-md transition-all duration-300 hover-glow">
            <LeafIcon size={28} className="text-[#2D5A27] mb-3" />
            <p className="text-3xl font-bold text-[#1A252F]">-40%</p>
            <p className="text-xs text-[#2C3E50]/60 uppercase tracking-wider mt-1">{lang === 'id' ? 'Potensi Hemat' : 'Potential Savings'}</p>
          </AnimateIn>
          {/* Quote card */}
          <AnimateIn delay={0.25} className="md:col-span-2 bg-[#2D5A27]/5 backdrop-blur-xl p-6 rounded-2xl border border-[#2D5A27]/20 flex items-center">
            <p className="text-sm text-[#2C3E50]/80 italic leading-relaxed">{lang === 'id' ? 'Setiap penurunan 10°C suhu ruangan ber-AC diikuti peningkatan 1°C suhu di luar ruangan.' : 'Every 10°C decrease in AC indoor temp is followed by a 1°C increase outdoors.'}</p>
          </AnimateIn>
        </div>
        <div className="space-y-4 text-lg text-[#2C3E50]/80 leading-relaxed">
          <AnimateIn delay={0.1}><p>{t.global_1}</p></AnimateIn>
          <AnimateIn delay={0.15}><p>{t.global_2}</p></AnimateIn>
          <AnimateIn delay={0.2}>
            <div className="bg-white/70 backdrop-blur-xl p-6 rounded-2xl border border-[#2D5A27]/20 shadow-sm">
              <p className="font-semibold text-[#2D5A27] mb-2">{lang === 'id' ? 'Solusi Kami:' : 'Our Solution:'}</p>
              <p>{t.global_3}</p>
            </div>
          </AnimateIn>
        </div>
      </div>

      {/* Team Section */}
      {t.team && (
        <div className="max-w-5xl mx-auto mb-20">
          <div className="section-divider mb-8 sm:mb-12" />
          <AnimateIn><h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#1A252F] mb-4">{t.teamTitle}</h2></AnimateIn>
          <AnimateIn delay={0.1}><p className="text-[#2C3E50]/70 mb-12">{t.teamDesc}</p></AnimateIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.team.map((m: any, i: number) => (
              <AnimateIn key={i} delay={0.15 + i * 0.1}>
                <div className="group bg-white/70 backdrop-blur-xl p-6 rounded-2xl border border-white/20 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 text-center hover-glow">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#2D5A27] to-[#1A252F] mx-auto mb-4 overflow-hidden ring-2 ring-white/30 group-hover:ring-[#2D5A27]/30 transition-all duration-500">
                    <img src={m.img} alt={m.name} className="w-full h-full object-cover" />
                  </div>
                  <h4 className="font-bold text-[#1A252F]">{m.name}</h4>
                  <p className="text-sm text-[#2D5A27] font-medium mb-2">{m.role}</p>
                  <p className="text-xs text-[#2C3E50]/60">{m.exp}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      )}

      {/* Certifications */}
      {t.certs && (
        <div className="max-w-5xl mx-auto mb-20">
          <div className="section-divider mb-8 sm:mb-12" />
          <AnimateIn><h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#1A252F] mb-8">{lang === 'id' ? 'Sertifikasi & Keanggotaan' : 'Certifications & Memberships'}</h2></AnimateIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {t.certs.map((c: any, i: number) => (
              <AnimateIn key={i} delay={0.1 + i * 0.1}>
                <div className="group flex items-start gap-4 bg-white/70 backdrop-blur-xl p-5 rounded-2xl border border-white/20 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-500 hover-glow">
                  <ShieldIcon size={24} className="text-[#2D5A27] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-[#1A252F] text-sm">{c.name}</h4>
                    <p className="text-xs text-[#2C3E50]/60 mt-1">{c.desc}</p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      )}

      {/* Vision & Mission */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <AnimateIn delay={0.1}>
          <div className="group bg-[#1A252F] text-white p-10 rounded-3xl hover:-translate-y-1 transition-all duration-500 relative overflow-hidden hover-glow">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{
              background: 'linear-gradient(135deg, rgba(45,90,39,0.15) 0%, transparent 60%)',
            }} />
            <EyeIcon size={36} className="mb-6 relative z-10" />
            <h3 className="font-serif text-2xl mb-4 relative z-10">{lang === 'id' ? 'Visi' : 'Vision'}</h3>
            <p className="text-white/70 leading-relaxed relative z-10">{t.vision}</p>
          </div>
        </AnimateIn>
        <AnimateIn delay={0.2}>
          <div className="group bg-[#2D5A27] text-white p-10 rounded-3xl hover:-translate-y-1 transition-all duration-500 relative overflow-hidden hover-glow">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 60%)',
            }} />
            <TargetIcon size={36} className="mb-6 relative z-10" />
            <h3 className="font-serif text-2xl mb-4 relative z-10">{lang === 'id' ? 'Misi' : 'Mission'}</h3>
            <p className="text-white/70 leading-relaxed relative z-10">{t.mission}</p>
          </div>
        </AnimateIn>
      </div>
    </div>
  </div>
</div>
  )
}
