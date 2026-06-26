'use client'

import { ChevronRightIcon } from '@/components/Icons'
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'

const categories = [
  { label: 'Chiller / HVAC', tab: 'mini-chiller-ycae' },
  { label: 'Cooling Tower', tab: 'cooling-tower' },
  { label: 'Steam Accessories', tab: 'steam-accessories' },
  { label: 'Solar Panel', tab: 'solar-panel' },
  { label: 'BMS', tab: 'bms' },
  { label: 'Green Solution', tab: 'green-solution' },
  { label: 'High Efficiency Pump', tab: 'high-efficiency-pump' },
  { label: 'PPR Pipe & Fittings', tab: 'ppr-pipe' },
  { label: 'Solar Inverter Optimizer', tab: 'solar-inverter-optimizer' },
  { label: 'Alkaline Water Ionizer', tab: 'alkaline-water-ionizer' },
]

export default function ProductSidebar() {
  const params = useParams()
  const pathname = usePathname()
  const lang = (params.lang as string) === 'en' ? 'en' : 'id'
  const currentTab = typeof window !== 'undefined'
    ? new URLSearchParams(window.location.search).get('tab')
    : null

  return (
    <aside className="w-full lg:w-64 shrink-0">
      <div className="bg-[#1A252F] rounded-2xl p-6 sticky top-28">
        <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white/50 mb-6">
          {lang === 'id' ? 'PRODUK' : 'PRODUCTS'}
        </h3>
        <nav className="space-y-1">
          {categories.map((cat) => {
            const isActive = pathname.includes('/products/')
              ? pathname.includes(cat.tab)
              : currentTab === cat.tab
            const href = cat.tab === 'solar-inverter-optimizer'
              ? `/${lang}/products/solar-inverter-optimizer`
              : `/${lang}/products?tab=${cat.tab}`

            return (
              <Link
                key={cat.tab}
                href={href}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-[#2D5A27]/20 text-white'
                    : 'text-white/60 hover:bg-white/5 hover:text-white'
                }`}
              >
                <span>{cat.label}</span>
                <ChevronRightIcon
                  size={14}
                  className={`transition-all ${
                    isActive ? 'text-[#2D5A27]' : 'text-white/20'
                  }`}
                />
              </Link>
            )
          })}
        </nav>
      </div>
    </aside>
  )
}
