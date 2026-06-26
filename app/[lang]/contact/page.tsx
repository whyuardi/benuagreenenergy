'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { AnimateIn } from '@/components/AnimateIn'
import Breadcrumb from '@/components/Breadcrumb'
import {
  SendIcon,
  CheckCircleIcon,
  MapPinIcon,
  PhoneIcon,
  MailIcon,
  ClockIcon,
  PrinterIcon,
} from '@/components/Icons'
import { AnimatePresence, motion } from 'framer-motion'

export default function ContactPage({ params }: { params: { lang: string } }) {
  const lang = params.lang === 'en' ? 'en' : 'id'
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [sourceValue, setSourceValue] = useState('')

  // Detect source from URL to pre-fill subject
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const source = urlParams.get('source')
    if (source) {
      setSourceValue(source)
    }
  }, [])

  const t = lang === 'id' ? {
    title: 'Hubungi Tim Ahli Kami',
    subtitle: 'Konsultasi gratis, permintaan penawaran, atau informasi teknis. Tim kami siap membantu.',
    form_name: 'Nama Lengkap',
    form_email: 'Email Perusahaan',
    form_phone: 'No. Telepon',
    form_company: 'Perusahaan',
    form_subject: 'Subjek',
    form_message: 'Pesan / Kebutuhan Anda',
    form_submit: 'Kirim Permintaan',
    success_msg: 'Permintaan berhasil dikirim. Tim kami akan menghubungi Anda.',
    form_dept: 'Tujuan Departemen',
    dept_options: ['Pilih Departemen', 'General / Informasi', 'Sales & Penawaran', 'Finance & Accounting', 'Teknis & Support'],
    map_title: 'Kantor Kami',
    hours_label: 'Jam Operasional',
    hours_weekday: 'Senin - Jumat: 08:00 - 17:00',
    hours_saturday: 'Sabtu: 08:00 - 13:00',
    hours_sunday: 'Minggu: Libur',
    address: 'Jl. Trocadero Office Park, Ruko Piazza De Europe Garnier No. 82, Lippo Karawaci, Panunggangan Barat, Cibodas, Tangerang 15139, Banten, Indonesia',
    fax_label: 'Fax',
    contact_person: 'Ravi Desai',
    contactInfoLabel: 'Informasi Kontak',
    formLabel: 'Kirim Pesan',
  } : {
    title: 'Contact Our Expert Team',
    subtitle: 'Free consultation, quotations, or technical inquiries. Our team is ready to assist.',
    form_name: 'Full Name',
    form_email: 'Company Email',
    form_phone: 'Phone Number',
    form_company: 'Company',
    form_subject: 'Subject',
    form_message: 'Your Message / Requirements',
    form_submit: 'Send Request',
    success_msg: 'Thank you! Our sales team will contact you within 24 hours.',
    form_dept: 'Department',
    dept_options: ['Select Department', 'General Inquiry', 'Sales & Quotation', 'Finance & Accounting', 'Technical & Support'],
    map_title: 'Our Office',
    hours_label: 'Working Hours',
    hours_weekday: 'Mon - Fri: 08:00 - 17:00',
    hours_saturday: 'Saturday: 08:00 - 13:00',
    hours_sunday: 'Sunday: Closed',
    address: 'Jl. Trocadero Office Park, Ruko Piazza De Europe Garnier No. 82, Lippo Karawaci, Panunggangan Barat, Cibodas, Tangerang 15139, Banten, Indonesia',
    fax_label: 'Fax',
    contact_person: 'Ravi Desai',
    contactInfoLabel: 'Contact Information',
    formLabel: 'Send Message',
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')
    setErrorMessage('')
    const data = Object.fromEntries(new FormData(e.currentTarget))
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
      })
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
    <div>
      {/* ============================================
          HERO SECTION
          ============================================ */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(145deg, var(--dark) 0%, #112A1A 30%, #1B4332 60%, #0B1D13 100%)',
          }} />
          <div className="absolute inset-0 grid-overlay opacity-40" />
          {/* Ambient glow orbs */}
          <div className="absolute inset-0 pointer-events-none" style={{
            background: 'radial-gradient(ellipse 600px 400px at 30% 40%, rgba(82,183,136,0.08) 0%, transparent 70%), radial-gradient(ellipse 500px 500px at 70% 55%, rgba(64,145,108,0.06) 0%, transparent 60%)',
          }} />
          <div className="absolute top-1/4 right-[12%] w-72 h-72 rounded-full opacity-[0.03] pointer-events-none"
            style={{ background: 'radial-gradient(circle, #52B788 0%, transparent 70%)' }} />
          <div className="absolute bottom-1/3 left-[10%] w-52 h-52 rounded-full opacity-[0.04] pointer-events-none"
            style={{ background: 'radial-gradient(circle, #40916C 0%, transparent 70%)' }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 w-full pt-28 pb-20 md:pt-32 md:pb-28">
          <Breadcrumb items={[{ label: t.title }]} lang={lang} />
          <div className="max-w-3xl mt-6">
            <AnimateIn>
              <p className="eyebrow mb-4">{lang === 'id' ? 'Mari Berdiskusi' : 'Get in Touch'}</p>
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

        {/* Bottom gradient blend */}
        <div className="absolute bottom-0 left-0 right-0 h-32 md:h-48 z-10 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, transparent 0%, var(--surface) 100%)',
          }}
        />
      </section>

      {/* ============================================
          CONTACT CONTENT - Asymmetric 2-col
          ============================================ */}
      <section className="bg-[var(--surface)] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            {status !== 'success' ? (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
                  {/* Left: Contact Form (7 cols = ~60%) */}
                  <div className="lg:col-span-7">
                    <AnimateIn>
                      <p className="eyebrow mb-4">{t.formLabel}</p>
                    </AnimateIn>

                    <AnimateIn delay={100}>
                      <div className="glass-panel p-6 sm:p-8 md:p-10" style={{
                        background: 'rgba(255,255,255,0.7)',
                        backdropFilter: 'blur(20px) saturate(1.5)',
                        WebkitBackdropFilter: 'blur(20px) saturate(1.5)',
                        border: '1px solid rgba(255,255,255,0.5)',
                        boxShadow: '0 8px 32px rgba(27,67,50,0.06), 0 1px 3px rgba(0,0,0,0.04)',
                      }}>
                        <form className="space-y-5" method="post" action="/api/contact" onSubmit={handleSubmit}>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-xs font-semibold text-[var(--ink-muted)] uppercase tracking-wider mb-2">{t.form_name}</label>
                              <input name="name" type="text" required
                                className="w-full px-4 py-3.5 rounded-xl bg-white border border-[var(--border)] text-sm text-[var(--ink)] placeholder:text-[var(--ink-muted)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--brand)]/30 focus:border-[var(--brand)] transition-all" />
                            </div>
                            <div>
                              <label className="block text-xs font-semibold text-[var(--ink-muted)] uppercase tracking-wider mb-2">{t.form_email}</label>
                              <input name="email" type="email" required
                                className="w-full px-4 py-3.5 rounded-xl bg-white border border-[var(--border)] text-sm text-[var(--ink)] placeholder:text-[var(--ink-muted)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--brand)]/30 focus:border-[var(--brand)] transition-all" />
                            </div>
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-xs font-semibold text-[var(--ink-muted)] uppercase tracking-wider mb-2">{t.form_phone}</label>
                              <input name="phone" type="tel" required
                                className="w-full px-4 py-3.5 rounded-xl bg-white border border-[var(--border)] text-sm text-[var(--ink)] placeholder:text-[var(--ink-muted)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--brand)]/30 focus:border-[var(--brand)] transition-all" />
                            </div>
                            <div>
                              <label className="block text-xs font-semibold text-[var(--ink-muted)] uppercase tracking-wider mb-2">{t.form_company}</label>
                              <input name="company" type="text" required
                                className="w-full px-4 py-3.5 rounded-xl bg-white border border-[var(--border)] text-sm text-[var(--ink)] placeholder:text-[var(--ink-muted)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--brand)]/30 focus:border-[var(--brand)] transition-all" />
                            </div>
                          </div>
                          <div>
                            <label className="block text-xs font-semibold text-[var(--ink-muted)] uppercase tracking-wider mb-2">{t.form_dept}</label>
                            <select name="department" required
                              className="w-full px-4 py-3.5 rounded-xl bg-white border border-[var(--border)] text-sm text-[var(--ink)] focus:outline-none focus:ring-2 focus:ring-[var(--brand)]/30 focus:border-[var(--brand)] transition-all appearance-none">
                              {t.dept_options.map((opt: string, i: number) => (
                                <option key={i} value={i === 0 ? '' : opt}>{opt}</option>
                              ))}
                            </select>
                          </div>
                          <div>
                            <label className="block text-xs font-semibold text-[var(--ink-muted)] uppercase tracking-wider mb-2">{t.form_subject}</label>
                            <input name="subject" type="text" required value={sourceValue} onChange={e => setSourceValue(e.target.value)}
                              className="w-full px-4 py-3.5 rounded-xl bg-white border border-[var(--border)] text-sm text-[var(--ink)] placeholder:text-[var(--ink-muted)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--brand)]/30 focus:border-[var(--brand)] transition-all" />
                          </div>
                          <div>
                            <label className="block text-xs font-semibold text-[var(--ink-muted)] uppercase tracking-wider mb-2">{t.form_message}</label>
                            <textarea name="message" rows={4} required
                              className="w-full px-4 py-3.5 rounded-xl bg-white border border-[var(--border)] text-sm text-[var(--ink)] placeholder:text-[var(--ink-muted)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--brand)]/30 focus:border-[var(--brand)] transition-all resize-none" />
                          </div>

                          <button disabled={status === 'sending'} type="submit"
                            className={`btn-primary w-full py-4 text-base ${
                              status === 'sending' ? 'opacity-70 cursor-not-allowed' : ''
                            }`}>
                            {status === 'sending' ? (
                              <span className="flex items-center gap-3">
                                <motion.span
                                  className="inline-block w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                                  animate={{ rotate: 360 }}
                                  transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                                />
                                <span>{lang === 'id' ? 'Mengirim...' : 'Sending...'}</span>
                              </span>
                            ) : (
                              <>
                                <span>{t.form_submit}</span>
                                <SendIcon size={16} />
                              </>
                            )}
                          </button>

                          {status === 'error' && errorMessage && (
                            <p className="text-red-600 text-sm text-center">{errorMessage}</p>
                          )}
                        </form>
                      </div>
                    </AnimateIn>
                  </div>

                  {/* Right: Contact Info (5 cols = ~40%) */}
                  <div className="lg:col-span-5 space-y-5">
                    <AnimateIn delay={150}>
                      <p className="eyebrow mb-4">{t.contactInfoLabel}</p>
                    </AnimateIn>

                    {/* Address */}
                    <AnimateIn delay={200}>
                      <div className="card-corporate flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-[var(--brand)]/8 flex items-center justify-center shrink-0 mt-0.5">
                          <MapPinIcon size={18} className="text-[var(--brand)]" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-[var(--ink-muted)] uppercase tracking-wider mb-1.5">Office</p>
                          <p className="text-sm text-[var(--ink-secondary)] leading-relaxed">{t.address}</p>
                        </div>
                      </div>
                    </AnimateIn>

                    {/* Phone */}
                    <AnimateIn delay={240}>
                      <div className="card-corporate flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-[var(--brand)]/8 flex items-center justify-center shrink-0 mt-0.5">
                          <PhoneIcon size={18} className="text-[var(--brand)]" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-[var(--ink-muted)] uppercase tracking-wider mb-1.5">Phone</p>
                          <p className="text-sm text-[var(--ink)] font-medium">(62-21) 5573 1123</p>
                          <p className="text-sm text-[var(--ink)] font-medium">+62 815-8816-259</p>
                          <p className="text-sm text-[var(--ink)] font-medium">+62 817-6779-719</p>
                        </div>
                      </div>
                    </AnimateIn>

                    {/* Fax */}
                    <AnimateIn delay={280}>
                      <div className="card-corporate flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-[var(--brand)]/8 flex items-center justify-center shrink-0 mt-0.5">
                          <PrinterIcon size={18} className="text-[var(--brand)]" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-[var(--ink-muted)] uppercase tracking-wider mb-1.5">{t.fax_label}</p>
                          <p className="text-sm text-[var(--ink)] font-medium">(62-21) 5573 5533</p>
                        </div>
                      </div>
                    </AnimateIn>

                    {/* Email - General */}
                    <AnimateIn delay={320}>
                      <div className="card-corporate flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-[var(--brand)]/8 flex items-center justify-center shrink-0 mt-0.5">
                          <MailIcon size={18} className="text-[var(--brand)]" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-[var(--ink-muted)] uppercase tracking-wider mb-1.5">Email</p>
                          <p className="text-sm text-[var(--ink)] font-medium">jakarta@benuagreen.com</p>
                          <p className="text-sm text-[var(--ink-muted)]">sales@benuagreen.com</p>
                        </div>
                      </div>
                    </AnimateIn>

                    {/* Working Hours */}
                    <AnimateIn delay={360}>
                      <div className="card-corporate flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-[var(--brand)]/8 flex items-center justify-center shrink-0 mt-0.5">
                          <ClockIcon size={18} className="text-[var(--brand)]" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-[var(--ink-muted)] uppercase tracking-wider mb-1.5">{t.hours_label}</p>
                          <p className="text-sm text-[var(--ink)] font-medium">{t.hours_weekday}</p>
                          <p className="text-sm text-[var(--ink-muted)]">{t.hours_saturday}</p>
                          <p className="text-sm text-[var(--ink-muted)]">{t.hours_sunday}</p>
                        </div>
                      </div>
                    </AnimateIn>

                    {/* Contact Person */}
                    <AnimateIn delay={400}>
                      <div className="rounded-xl bg-[var(--brand)]/[0.04] border border-[var(--brand)]/10 p-4 text-center">
                        <p className="text-xs text-[var(--ink-muted)] mb-1">{lang === 'id' ? 'Kontak Person' : 'Contact Person'}</p>
                        <p className="font-outfit font-bold text-[var(--ink)]">{t.contact_person}</p>
                      </div>
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
                <div className="text-center py-12 max-w-lg mx-auto">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.1 }}
                  >
                    <div className="w-20 h-20 rounded-full bg-[var(--brand)]/10 flex items-center justify-center mx-auto mb-8">
                      <CheckCircleIcon size={40} className="text-[var(--brand)]" />
                    </div>
                  </motion.div>
                  <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="font-outfit text-2xl sm:text-3xl font-bold text-[var(--ink)] mb-4"
                  >
                    {t.success_msg}
                  </motion.h2>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <button onClick={() => setStatus('idle')} className="btn-secondary mt-6">
                      {lang === 'id' ? 'Kirim Pesan Lain' : 'Send Another Message'}
                    </button>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ============================================
          MAP SECTION
          ============================================ */}
      <section className="bg-[var(--surface-alt)]">
        <AnimateIn>
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-16 md:py-20">
            <div className="mb-8">
              <p className="eyebrow mb-3">{t.map_title}</p>
              <h2 className="font-outfit text-2xl sm:text-3xl font-bold text-[var(--ink)] tracking-tight">
                {lang === 'id' ? 'Lokasi Kantor Kami' : 'Find Our Office'}
              </h2>
            </div>
            <div className="rounded-2xl overflow-hidden border border-[var(--border)] shadow-sm" style={{ minHeight: '400px' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.787!2d106.5963!3d-6.2257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sJl.%20Trocadero%20Office%20Park%20Ruko%20Piazza%20De%20Europe%20Garnier%20No.82%20Lippo%20Karawaci!5e0!3m2!1sen!2sid!4v1"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={t.map_title}
              />
            </div>
          </div>
        </AnimateIn>
      </section>
    </div>
  )
}
