import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'Benua Green Energy | Green Energy Industrial Solutions',
    template: '%s | Benua Green Energy'
  },
  description: 'Pemimpin dalam solusi HVAC, Energy Management System, dan Panel Surya terintegrasi untuk efisiensi industri berkelanjutan di Indonesia.',
  keywords: ['Benua Green Energy', 'HVAC Industri', 'Energy Management System', 'Panel Surya Industri', 'Audit Energi', 'Green Energy Indonesia', 'Chiller Industri'],
  authors: [{ name: 'Benua Green Energy' }],
  openGraph: {
    title: 'Benua Green Energy | Green Energy Industrial Solutions',
    description: 'Solusi HVAC, Energy Management System, dan Solar Panel terintegrasi untuk efisiensi operasional perusahaan Anda.',
    url: 'https://benuagreenenergy.com',
    siteName: 'Benua Green Energy',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: 'Benua Green Energy Industrial Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Benua Green Energy | Green Energy Industrial Solutions',
    description: 'Solusi HVAC, Energy Management System, dan Solar Panel terintegrasi untuk efisiensi operasional perusahaan Anda.',
    images: ['https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&h=630&q=80'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}
