'use client'
import { useState, useEffect } from 'react'
import { SendIcon, CheckCircleIcon, MapPinIcon, PhoneIcon, MailIcon, ClockIcon, PrinterIcon } from '@/components/Icons'
import { AnimatePresence, motion } from 'framer-motion'
import { AnimateIn } from '@/components/AnimateIn'
import Breadcrumb from '@/components/Breadcrumb'

export default function ContactPage({ params }: { params: { lang: string } }) {
  const lang = params.lang === 'en' ? 'en' : 'id'
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [sourceValue, setSourceValue] = useState('')

  // Detect source from URL (e.g. ?source=Chiller+YCAE) to pre-fill subject
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const source = params.get('source')
    if (source) {
      setSourceValue(source)
    }
  }, [])

  const t = lang === 'id' ? {
    title: 'Hubungi Tim Ahli Kami',
    subtitle: 'Konsultasi gratis, permintaan penawaran, atau informasi teknis — tim kami siap membantu.',
    form_name: 'Nama Lengkap', form_email: 'Email Perusahaan', form_phone: 'No. Telepon',
    form_company: 'Perusahaan', form_subject: 'Subjek', form_message: 'Pesan / Kebutuhan Anda',
    form_submit: 'Kirim Permintaan', success_msg: '✓ Permintaan berhasil dikirim. Tim kami akan menghubungi Anda.',
    form_dept: 'Tujuan Departemen',
    dept_options: ['Pilih Departemen', 'General / Informasi', 'Sales & Penawaran', 'Finance & Accounting', 'Teknis & Support'],
    map_title: 'Kantor Kami', hours_label: 'Jam Operasional',
    hours_weekday: 'Senin - Jumat : 08:00 - 17:00', hours_saturday: 'Sabtu : 08:00 - 13:00', hours_sunday: 'Minggu : Libur',
    address: 'Jl. Trocadero Office Park, Ruko Piazza De Europe Garnier No. 82<br/>Lippo Karawaci, Panunggangan Barat, Cibodas<br/>Tangerang 15139, Banten, Indonesia',
    fax_label: 'Fax',
    contact_person: 'Ravi Desai'
  } : {
    title: 'Contact Our Expert Team',
    subtitle: 'Free consultation, quotations, or technical inquiries — our team is ready to assist.',
    form_name: 'Full Name', form_email: 'Company Email', form_phone: 'Phone Number',
    form_company: 'Company', form_subject: 'Subject', form_message: 'Your Message / Requirements',
    form_submit: 'Send Request', success_msg: 'Thank you! Our sales team will contact you within 24 hours.',
    form_dept: 'Department',
    dept_options: ['Select Department', 'General Inquiry', 'Sales & Quotation', 'Finance & Accounting', 'Technical & Support'],
    map_title: 'Our Office', hours_label: 'Working Hours',
    hours_weekday: 'Mon - Fri : 08:00 - 17:00', hours_saturday: 'Saturday : 08:00 - 13:00', hours_sunday: 'Sunday : Closed',
    address: 'Jl. Trocadero Office Park, Ruko Piazza De Europe Garnier No. 82<br/>Lippo Karawaci, Panunggangan Barat, Cibodas<br/>Tangerang 15139, Banten, Indonesia',
    fax_label: 'Fax',
    contact_person: 'Ravi Desai'
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')
    setErrorMessage('')
    const data = Object.fromEntries(new FormData(e.currentTarget))
    try {
      const res = await fetch('/api/contact', { method: 'POST', body: JSON.stringify(data), headers: { 'Content-Type': 'application/json' } })
      const result = await res.json()
      if (res.ok) setStatus('success')
      else {
        setErrorMessage(result.error || 'Failed to send message')
        setStatus('error')
      }
    } catch (err) {
      setErrorMessage('Network error. Please try again.')
      setStatus('error')
    }
  }

  return (
    <div className="page-enter">
      {/* Hero Banner */}
      <section className="relative min-h-[50vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(145deg, #0a1628 0%, #0D1B2A 25%, #132637 50%, #1a3348 75%, #0D1B2A 100%)',
          }} />
          <div className="noise-texture opacity-50 pointer-events-none mix-blend-overlay" />
        </div>
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none grid-pattern" />

        <div className="absolute top-20 left-10 w-72 h-72 bg-[#2D5A27]/15 rounded-full blur-3xl animate-float pointer-events-none" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#1A237E]/10 rounded-full blur-3xl animate-float pointer-events-none" style={{animationDelay:'2s'}} />
        <div className="absolute top-40 right-1/4 w-64 h-64 bg-[#4CAF50]/10 rounded-full blur-3xl animate-float pointer-events-none" style={{animationDelay:'4s'}} />
<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 w-full pb-24 md:pb-32">
          <div className="max-w-3xl">
            <Breadcrumb items={[{ label: lang === 'id' ? 'Kontak' : 'Contact' }]} lang={lang} />
            <AnimateIn>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white mb-6 mt-8">{t.title}</h1>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 max-w-2xl">{t.subtitle}</p>
            </AnimateIn>
          </div>
        </div>
        {/* Smooth transition blend */}
        <div className="absolute bottom-0 left-0 right-0 h-32 md:h-48 z-10 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, transparent 0%, rgba(13,27,42,0.3) 30%, rgba(253,251,247,0.6) 70%, #FDFBF7 100%)',
          }}
        />
      </section>

      {/* Section Divider */}
      <div className="section-divider" />

      {/* Content Section */}
      <div className="py-12 sm:py-16 md:py-20 lg:py-28 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto bg-[#FDFBF7] relative">
        <div className="noise-texture opacity-50 pointer-events-none mix-blend-overlay" />
        <div className="max-w-6xl mx-auto relative z-10">
          <AnimatePresence mode="wait">
            {status !== 'success' ? (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
                  {/* Form - 3 cols */}
                  <AnimateIn delay={0.1} className="lg:col-span-3 bg-white/70 backdrop-blur-xl p-6 sm:p-8 md:p-10 lg:p-12 rounded-3xl border border-white/20 shadow-lg hover-lift">
                    <form className="space-y-5" method="post" action="/api/contact" onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <input name="name" type="text" placeholder={t.form_name} required className="w-full p-4 rounded-xl bg-[#F1F5F9] border-0 focus:ring-2 focus:ring-[#2D5A27] outline-none" />
                        <input name="email" type="email" placeholder={t.form_email} required className="w-full p-4 rounded-xl bg-[#F1F5F9] border-0 focus:ring-2 focus:ring-[#2D5A27] outline-none" />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <input name="phone" type="tel" placeholder={t.form_phone} required className="w-full p-4 rounded-xl bg-[#F1F5F9] border-0 focus:ring-2 focus:ring-[#2D5A27] outline-none" />
                        <input name="company" type="text" placeholder={t.form_company} required className="w-full p-4 rounded-xl bg-[#F1F5F9] border-0 focus:ring-2 focus:ring-[#2D5A27] outline-none" />
                      </div>
                      <select name="department" required className="w-full p-4 rounded-xl bg-[#F1F5F9] border-0 focus:ring-2 focus:ring-[#2D5A27] outline-none text-sm">
                        {t.dept_options.map((opt: string, i: number) => (
                          <option key={i} value={i === 0 ? '' : opt}>{opt}</option>
                        ))}
                      </select>
                      <input name="subject" type="text" placeholder={t.form_subject} required value={sourceValue} onChange={e => setSourceValue(e.target.value)} className="w-full p-4 rounded-xl bg-[#F1F5F9] border-0 focus:ring-2 focus:ring-[#2D5A27] outline-none" />
                      <textarea name="message" placeholder={t.form_message} rows={4} required className="w-full p-4 rounded-xl bg-[#F1F5F9] border-0 focus:ring-2 focus:ring-[#2D5A27] outline-none"></textarea>
                      <button disabled={status === 'sending'} className={`w-full py-4 rounded-full font-bold flex items-center justify-center space-x-2 transition-all shadow-lg ${
                          status === 'sending'
                            ? 'bg-[#2D5A27]/70 cursor-not-allowed'
                            : 'bg-[#2D5A27] hover:bg-[#1E3B1A] text-white'
                        }`}>
                        {status === 'sending' ? (
                          <span className="flex items-center gap-3">
                            <motion.span
                              className="inline-block w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                              animate={{ rotate: 360 }}
                              transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                            />
                            <span className="text-white/80">Sending...</span>
                          </span>
                        ) : (
                          <><span>{t.form_submit}</span><SendIcon size={18} /></>
                        )}
                      </button>
                      {status === 'error' && errorMessage && (
                        <p className="text-red-600 text-sm text-center mt-2">{errorMessage}</p>
                      )}
                    </form>
                  </AnimateIn>

                  {/* Info - 2 cols */}
                  <div className="lg:col-span-2 space-y-8">
                    <AnimateIn delay={0.2}>
                      <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#1A252F] mb-4">{t.map_title}</h3>
                      <div className="rounded-3xl overflow-hidden min-h-[200px] sm:min-h-[250px] border border-[#2C3E50]/10 shadow-lg">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.787!2d106.5963!3d-6.2257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sJl.%20Trocadero%20Office%20Park%20Ruko%20Piazza%20De%20Europe%20Garnier%20No.82%20Lippo%20Karawaci!5e0!3m2!1sen!2sid!4v1" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                      </div>
                    </AnimateIn>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <AnimateIn delay={0.1} className="flex items-start gap-3 bg-white/70 backdrop-blur-xl p-4 rounded-2xl border border-white/20 shadow-lg hover-lift">
                        <MapPinIcon size={20} className="text-[#2D5A27] shrink-0 mt-0.5" />
                        <div className="text-xs">
                          <p className="text-[#2C3E50]/50 uppercase tracking-wider mb-1">Office</p>
                          <p className="font-semibold leading-tight" dangerouslySetInnerHTML={{__html: t.address}} />
                        </div>
                      </AnimateIn>
                      <AnimateIn delay={0.15} className="flex items-start gap-3 bg-white/70 backdrop-blur-xl p-4 rounded-2xl border border-white/20 shadow-lg hover-lift">
                        <PhoneIcon size={20} className="text-[#2D5A27] shrink-0 mt-0.5" />
                        <div className="text-xs">
                          <p className="text-[#2C3E50]/50 uppercase tracking-wider mb-1">Phone</p>
                          <p className="font-semibold">(62-21) 5573 1123</p>
                          <p className="font-semibold">+62 815-8816-259</p>
                          <p className="font-semibold">+62 817-6779-719</p>
                        </div>
                      </AnimateIn>
                      <AnimateIn delay={0.2} className="flex items-start gap-3 bg-white/70 backdrop-blur-xl p-4 rounded-2xl border border-white/20 shadow-lg hover-lift">
                        <PrinterIcon size={20} className="text-[#2D5A27] shrink-0 mt-0.5" />
                        <div className="text-xs">
                          <p className="text-[#2C3E50]/50 uppercase tracking-wider mb-1">{t.fax_label}</p>
                          <p className="font-semibold">(62-21) 5573 5533</p>
                        </div>
                      </AnimateIn>
                      <AnimateIn delay={0.25} className="flex items-start gap-3 bg-white/70 backdrop-blur-xl p-4 rounded-2xl border border-white/20 shadow-lg hover-lift">
                        <MailIcon size={20} className="text-[#2D5A27] shrink-0 mt-0.5" />
                        <div className="text-xs">
                          <p className="text-[#2C3E50]/50 uppercase tracking-wider mb-1">General Inquiry</p>
                          <p className="font-semibold">jakarta@benuagreen.com</p>
                        </div>
                      </AnimateIn>
                      <AnimateIn delay={0.3} className="flex items-start gap-3 bg-white/70 backdrop-blur-xl p-4 rounded-2xl border border-white/20 shadow-lg hover-lift">
                        <MailIcon size={20} className="text-[#2D5A27] shrink-0 mt-0.5" />
                        <div className="text-xs">
                          <p className="text-[#2C3E50]/50 uppercase tracking-wider mb-1">Sales & Marketing</p>
                          <p className="font-semibold">sales@benuagreen.com</p>
                        </div>
                      </AnimateIn>
                      <AnimateIn delay={0.35} className="flex items-start gap-3 bg-white/70 backdrop-blur-xl p-4 rounded-2xl border border-white/20 shadow-lg hover-lift">
                        <MailIcon size={20} className="text-[#2D5A27] shrink-0 mt-0.5" />
                        <div className="text-xs">
                          <p className="text-[#2C3E50]/50 uppercase tracking-wider mb-1">Finance & Accounting</p>
                          <p className="font-semibold">cfo@benuagreen.com</p>
                        </div>
                      </AnimateIn>
                      <AnimateIn delay={0.3} className="flex items-start gap-3 bg-white/70 backdrop-blur-xl p-4 rounded-2xl border border-white/20 shadow-lg hover-lift">
                        <ClockIcon size={20} className="text-[#2D5A27] shrink-0 mt-0.5" />
                        <div className="text-xs">
                          <p className="text-[#2C3E50]/50 uppercase tracking-wider mb-1">{t.hours_label}</p>
                          <p className="font-semibold">{t.hours_weekday}</p>
                          <p className="text-[#2C3E50]/60">{t.hours_saturday}</p>
                          <p className="text-[#2C3E50]/60">{t.hours_sunday}</p>
                        </div>
                      </AnimateIn>
                    </div>

                    <AnimateIn delay={0.35} className="bg-[#1A252F]/5 p-4 rounded-2xl border border-[#2C3E50]/10 text-center">
                      <p className="text-sm text-[#2C3E50]/60 mb-1">{lang === 'id' ? 'Kontak Person' : 'Contact Person'}</p>
                      <p className="font-bold text-[#1A252F]">{t.contact_person}</p>
                    </AnimateIn>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <div className="text-center py-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.1 }}
                  >
                    <CheckCircleIcon size={60} className="text-[#2D5A27] mx-auto mb-8" />
                  </motion.div>
                  <motion.h1
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#1A252F]"
                  >
                    {t.success_msg}
                  </motion.h1>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <button onClick={() => setStatus('idle')} className="text-[#2D5A27] underline mt-8">
                      Send another message
                    </button>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
