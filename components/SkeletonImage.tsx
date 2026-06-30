'use client'
import Image from 'next/image'
import { useState, forwardRef } from 'react'
import type { ImageProps, StaticImageData } from 'next/image'

type SkeletonImageProps = Omit<ImageProps, 'onLoad' | 'className'> & {
  /** Optional override for the wrapper class */
  wrapperClass?: string
  /** Optional override for the img className (applied after image loads) */
  imgClass?: string
}

const SkeletonImage = forwardRef<HTMLDivElement, SkeletonImageProps>(
  ({ wrapperClass = '', imgClass = '', ...props }, ref) => {
    const [loaded, setLoaded] = useState(false)

    return (
      <div
        ref={ref}
        className={`relative overflow-hidden ${wrapperClass}`}
        style={{ background: loaded ? 'transparent' : undefined }}
      >
        {/* Skeleton shimmer */}
        {!loaded && (
          <div
            className="absolute inset-0 skeleton-shimmer"
            aria-hidden="true"
          />
        )}

        {/* Actual image */}
        <Image
          {...props}
          className={`transition-opacity duration-500 ease-out ${loaded ? 'opacity-100' : 'opacity-0'} ${imgClass}`}
          onLoad={(e) => {
            // Only mark as loaded when the actual img element fires (not the <img> from next/image placeholder)
            const target = e.target as HTMLImageElement
            if (target.tagName === 'IMG' && target.src && !target.src.startsWith('data:')) {
              setLoaded(true)
            }
          }}
        />
      </div>
    )
  }
)

SkeletonImage.displayName = 'SkeletonImage'
export default SkeletonImage
