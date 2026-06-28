'use client'
import { useEffect, useRef, useState } from 'react'

/**
 * Lazy-load a CSS backgroundImage via IntersectionObserver.
 * Returns the current style value (empty string until in-view).
 */
export function useLazyBg(src: string, rootMargin = '200px') {
  const ref = useRef<HTMLDivElement>(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoaded(true)
          io.disconnect()
        }
      },
      { rootMargin, threshold: 0 }
    )

    io.observe(el)
    return () => io.disconnect()
  }, [rootMargin])

  return {
    ref,
    style: loaded ? { backgroundImage: `url(${src})` } : {},
  }
}

/**
 * Combine lazy bg with an optional fallback gradient placeholder.
 */
export function LazyBg({
  src,
  className = '',
  fallbackClass = 'bg-[#e8e4dc]',
  style = {},
  rootMargin = '200px',
  ...rest
}: {
  src: string
  className?: string
  fallbackClass?: string
  style?: React.CSSProperties
  rootMargin?: string
} & Omit<React.HTMLAttributes<HTMLDivElement>, 'style'>) {
  const { ref, style: bgStyle } = useLazyBg(src, rootMargin)

  return (
    <div
      ref={ref}
      className={`${fallbackClass} ${className}`}
      style={{ ...style, ...bgStyle }}
      {...rest}
    />
  )
}