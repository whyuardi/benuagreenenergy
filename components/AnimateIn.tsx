'use client'
import { ReactNode, useEffect, useRef, useState } from 'react'

/* ============================================
   AnimateIn — scroll-triggered entry with CSS transitions
   Uses IntersectionObserver for real scroll detection
   ============================================ */
export function AnimateIn({
  children,
  className = '',
  delay = 0,
  duration = 600,
  distance = 40,
  once = true,
  direction = 'up',
  threshold = 0.15,
}: {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  distance?: number
  once?: boolean
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale'
  threshold?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Check reduced motion preference
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          setHasAnimated(true)
          if (once) observer.unobserve(el)
        } else if (!once && !hasAnimated) {
          setVisible(false)
        }
      },
      { threshold, rootMargin: '0px 0px -60px 0px' }
    )

    observer.observe(el)

    // Fallback: force-visible after 1.5s if observer hasn't fired (headless/SSR)
    const fallback = setTimeout(() => {
      setVisible(true)
      observer.unobserve(el)
    }, 1500 + delay)

    return () => {
      observer.disconnect()
      clearTimeout(fallback)
    }
  }, [once, threshold, hasAnimated, delay])

  const getTransform = () => {
    switch (direction) {
      case 'up': return `translateY(${distance}px)`
      case 'down': return `translateY(${-distance}px)`
      case 'left': return `translateX(${distance}px)`
      case 'right': return `translateX(${-distance}px)`
      case 'scale': return 'scale(0.92)'
      default: return `translateY(${distance}px)`
    }
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : getTransform(),
        transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1), transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1)`,
        transitionDelay: visible ? `${delay}ms` : '0ms',
        willChange: visible ? 'auto' : 'opacity, transform',
      }}
    >
      {children}
    </div>
  )
}

/* ============================================
   StaggerContainer — stagger children on scroll
   ============================================ */
export function StaggerContainer({
  children,
  className = '',
  staggerDelay = 80,
  threshold = 0.1,
  once = true,
}: {
  children: ReactNode
  className?: string
  staggerDelay?: number
  threshold?: number
  once?: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          if (once) observer.unobserve(el)
        }
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    )

    observer.observe(el)

    // Fallback: force-visible after 1.5s
    const fallback = setTimeout(() => {
      setVisible(true)
      observer.unobserve(el)
    }, 1500)

    return () => {
      observer.disconnect()
      clearTimeout(fallback)
    }
  }, [once, threshold])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}

/* ============================================
   MotionCard — staggered child item
   ============================================ */
export function MotionCard({
  children,
  className = '',
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
    )

    observer.observe(el)

    // Fallback: force-visible after 1.5s
    const fallback = setTimeout(() => {
      setVisible(true)
      observer.unobserve(el)
    }, 1500)

    return () => {
      observer.disconnect()
      clearTimeout(fallback)
    }
  }, [])

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 500ms cubic-bezier(0.16, 1, 0.3, 1), transform 500ms cubic-bezier(0.16, 1, 0.3, 1)`,
        transitionDelay: visible ? `${delay}ms` : '0ms',
      }}
    >
      {children}
    </div>
  )
}

/* ============================================
   SlideIn — slide from direction
   ============================================ */
export function SlideIn({
  children,
  className = '',
  direction = 'left',
  delay = 0,
  once = true,
}: {
  children: ReactNode
  className?: string
  direction?: 'left' | 'right' | 'up' | 'down'
  delay?: number
  once?: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          if (once) observer.unobserve(el)
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    observer.observe(el)

    // Fallback: force-visible after 1.5s
    const fallback = setTimeout(() => {
      setVisible(true)
      observer.unobserve(el)
    }, 1500)

    return () => {
      observer.disconnect()
      clearTimeout(fallback)
    }
  }, [once])

  const offsets: Record<string, { x?: number; y?: number }> = {
    left: { x: -60 },
    right: { x: 60 },
    up: { y: 60 },
    down: { y: -60 },
  }
  const offset = offsets[direction] || offsets.left
  const startTransform = offset.x ? `translateX(${offset.x}px)` : `translateY(${offset.y}px)`

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : startTransform,
        transition: `opacity 600ms cubic-bezier(0.16, 1, 0.3, 1), transform 600ms cubic-bezier(0.16, 1, 0.3, 1)`,
        transitionDelay: visible ? `${delay}ms` : '0ms',
      }}
    >
      {children}
    </div>
  )
}

/* ============================================
   FadeTransition — wrapper for route transitions
   ============================================ */
export function FadeTransition({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return <div className={className}>{children}</div>
}

/* ============================================
   AnimatedCounter — number counter with scroll trigger
   ============================================ */
export function AnimatedCounter({
  value,
  suffix = '',
  duration = 2000,
}: {
  value: number
  suffix?: string
  duration?: number
}) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          let start = 0
          const inc = Math.ceil(value / (duration / 16))
          const t = setInterval(() => {
            start += inc
            if (start >= value) { setCount(value); clearInterval(t) }
            else setCount(start)
          }, 16)
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [value, duration])

  return <span ref={ref} className="counter-value">{count}{suffix}</span>
}

/* ============================================
   SectionHeading — standard section header
   ============================================ */
export function SectionHeading({
  title,
  subtitle,
  center = true,
}: {
  title: string
  subtitle?: string
  center?: boolean
}) {
  return (
    <div className={`mb-10 sm:mb-16 ${center ? 'text-center' : ''}`}>
      <AnimateIn>
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#1A252F] heading-line inline-block">
          {title}
        </h2>
      </AnimateIn>
      {subtitle && (
        <AnimateIn delay={150}>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#2C3E50] mt-4 sm:mt-6 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </AnimateIn>
      )}
    </div>
  )
}

/* ============================================
   ParallaxBG — parallax background section
   ============================================ */
export function ParallaxBG({
  imageUrl,
  children,
  className = '',
}: {
  imageUrl: string
  children: ReactNode
  className?: string
}) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#1A252F]/90 to-[#2D5A27]/80" />
      <div className="relative z-10">{children}</div>
    </div>
  )
}
