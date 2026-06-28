'use client'
import { useEffect, useState, useRef } from 'react'
import { usePathname } from 'next/navigation'

export default function RouteLoader() {
  const pathname = usePathname()
  const [loading, setLoading] = useState(false)
  const [exiting, setExiting] = useState(false)
  const prevPath = useRef('')

  useEffect(() => {
    if (prevPath.current && prevPath.current !== pathname) {
      setLoading(true)
      setExiting(false)
      const exitTimer = setTimeout(() => {
        setExiting(true)
      }, 500)
      const clearTimer = setTimeout(() => {
        setLoading(false)
        setExiting(false)
      }, 700)
      return () => { clearTimeout(exitTimer); clearTimeout(clearTimer) }
    }
    prevPath.current = pathname
  }, [pathname])

  if (!loading) return null

  return (
    <div
      className="route-loader-bar"
      style={{
        opacity: exiting ? 0 : 1,
        transition: 'opacity 0.2s ease-out',
      }}
    />
  )
}
