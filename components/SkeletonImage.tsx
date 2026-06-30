'use client'
import Image from 'next/image'
import { useState, forwardRef } from 'react'
import type { ImageProps } from 'next/image'

type SkeletonImageProps = Omit<ImageProps, 'onLoad' | 'className'> & {
  wrapperClass?: string
  imgClass?: string
}

const SkeletonImage = forwardRef<HTMLDivElement, SkeletonImageProps>(
  ({ wrapperClass = '', imgClass = '', ...props }, ref) => {
    const [loaded, setLoaded] = useState(false)

    const handleLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
      const target = e.target as HTMLImageElement
      // Ignore placeholder data: URLs — only fire for real image loads
      if (target.src && !target.src.startsWith('data:')) {
        setLoaded(true)
      }
    }

    return (
      <div
        ref={ref}
        className={`overflow-hidden ${wrapperClass}`}
        style={{ background: loaded ? 'transparent' : undefined }}
      >
        {/* Skeleton shimmer */}
        {!loaded && (
          <div className="absolute inset-0 skeleton-shimmer" aria-hidden="true" />
        )}

        <Image
          {...props}
          className={`transition-opacity duration-500 ease-out ${loaded ? 'opacity-100' : 'opacity-0'} ${imgClass}`}
          onLoad={handleLoad}
        />
      </div>
    )
  }
)

SkeletonImage.displayName = 'SkeletonImage'
export default SkeletonImage
