'use client'
import { motion } from 'framer-motion'

interface SkeletonProps {
  className?: string
  count?: number
  variant?: 'text' | 'card' | 'image' | 'circle' | 'btn'
}

export function Skeleton({ className = '', count = 1 }: SkeletonProps) {
  const items = Array.from({ length: count })
  return (
    <>
      {items.map((_, i) => (
        <div
          key={i}
          className={`relative overflow-hidden bg-[#e8e4dc] rounded-lg ${className}`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#e8e4dc] via-[#f5f2ec] to-[#e8e4dc] animate-shimmer" />
        </div>
      ))}
    </>
  )
}

export function SkeletonText({ lines = 3, className = '' }: { lines?: number; className?: string }) {
  return (
    <div className={`space-y-2 ${className}`}>
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className={`relative overflow-hidden h-4 rounded ${i === lines - 1 ? 'w-3/4' : 'w-full'} bg-[#e8e4dc]`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#e8e4dc] via-[#f5f2ec] to-[#e8e4dc] animate-shimmer" />
        </div>
      ))}
    </div>
  )
}

export function SkeletonCard({ className = '' }: { className?: string }) {
  return (
    <div className={`bg-[var(--card-bg)] rounded-[var(--radius-card)] p-6 space-y-4 ${className}`}>
      <Skeleton className="w-full h-48 rounded-[var(--radius)]" />
      <SkeletonText lines={2} />
      <Skeleton className="w-20 h-8 rounded-full" />
    </div>
  )
}

export function SkeletonProductGrid({ count = 8 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  )
}

export function SkeletonHero() {
  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-[#1a1a1a]" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="max-w-3xl space-y-6">
          <Skeleton className="w-24 h-6 rounded-full" />
          <Skeleton className="w-full h-16 rounded-lg" />
          <Skeleton className="w-5/6 h-16 rounded-lg" />
          <Skeleton className="w-3/4 h-6 rounded-lg" />
          <div className="flex gap-3 pt-4">
            <Skeleton className="w-36 h-12 rounded-full" />
            <Skeleton className="w-36 h-12 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  )
}

export function SkeletonServiceCard() {
  return (
    <div className="bg-[var(--card-bg)] rounded-[var(--radius-card)] p-6 space-y-4">
      <Skeleton className="w-12 h-12 rounded-xl" />
      <Skeleton className="w-3/4 h-5 rounded" />
      <SkeletonText lines={3} />
      <Skeleton className="w-28 h-9 rounded-full" />
    </div>
  )
}

export function SkeletonProductCard() {
  return (
    <div className="bg-[var(--card-bg)] rounded-[var(--radius-card)] overflow-hidden">
      <Skeleton className="w-full aspect-[4/3] rounded-none" />
      <div className="p-5 space-y-3">
        <Skeleton className="w-2/3 h-5 rounded" />
        <Skeleton className="w-full h-4 rounded" />
        <Skeleton className="w-4/5 h-4 rounded" />
        <div className="pt-2 flex items-center justify-between">
          <Skeleton className="w-20 h-4 rounded" />
          <Skeleton className="w-28 h-9 rounded-full" />
        </div>
      </div>
    </div>
  )
}

export function SkeletonPortfolioCard() {
  return (
    <div className="bg-[var(--card-bg)] rounded-[var(--radius-card)] overflow-hidden group">
      <Skeleton className="w-full aspect-video rounded-none" />
      <div className="p-6 space-y-3">
        <Skeleton className="w-1/3 h-4 rounded" />
        <Skeleton className="w-3/4 h-6 rounded" />
        <SkeletonText lines={2} />
      </div>
    </div>
  )
}

// Loading fallback for Suspense boundaries
export function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 rounded-full border-2 border-[var(--brand)] border-t-transparent animate-spin" />
        <span className="text-sm text-[var(--text-secondary)]">Memuat...</span>
      </div>
    </div>
  )
}

// Skeleton loader for page sections (inline usage)
export function SectionSkeleton() {
  return (
    <div className="space-y-6">
      <Skeleton className="w-48 h-8 rounded-lg" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </div>
    </div>
  )
}

// Image skeleton placeholder (shown while image loads)
export function ImageSkeleton({ className = '' }: { className?: string }) {
  return (
    <div className={`relative bg-[#e8e4dc] overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-[#e8e4dc] via-[#f5f2ec] to-[#e8e4dc] animate-shimmer" />
    </div>
  )
}

// Animated shimmer keyframes injected into page via style tag
export function SkeletonStyles() {
  return (
    <style>{`
      @keyframes shimmer {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(100%); }
      }
      .animate-shimmer {
        animation: shimmer 1.8s infinite;
      }
    `}</style>
  )
}