'use client'
import { useEffect, useState, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

export default function RouteLoader() {
  const pathname = usePathname()
  const [loading, setLoading] = useState(false)
  const prevPath = useRef('')

  useEffect(() => {
    if (prevPath.current && prevPath.current !== pathname) {
      setLoading(true)
      const timer = setTimeout(() => setLoading(false), 400)
      return () => clearTimeout(timer)
    }
    prevPath.current = pathname
  }, [pathname])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ scaleX: 0, opacity: 1 }}
          animate={{ scaleX: 1, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          style={{ transformOrigin: 'left' }}
          className="fixed top-0 left-0 right-0 z-[100] h-[3px] bg-gradient-to-r from-[#2D5A27] via-[#4CAF50] to-[#2D5A27]"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
