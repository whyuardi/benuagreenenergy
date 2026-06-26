'use client'
import Link from 'next/link'
import { ChevronRightIcon, HomeIcon } from '@/components/Icons'

export interface BreadcrumbItem {
  label: string
  href?: string
}

export default function Breadcrumb({ items, lang }: { items: BreadcrumbItem[]; lang: string }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex items-center gap-1.5 text-sm text-[#2C3E50]/50">
        <li>
          <Link href={`/${lang}`} className="hover:text-[#2D5A27] transition-colors flex items-center gap-1">
            <HomeIcon size={14} />
            <span className="sr-only">{lang === 'id' ? 'Beranda' : 'Home'}</span>
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1.5">
            <ChevronRightIcon size={14} className="text-[#2C3E50]/20" />
            {item.href ? (
              <Link href={item.href} className="hover:text-[#2D5A27] transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-[#2C3E50]/80 font-medium">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
