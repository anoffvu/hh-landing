'use client'

import { useEffect } from 'react'
import Script from 'next/script'

// Add type definition for the Tally global
declare global {
  interface Window {
    Tally?: {
      loadEmbeds: () => void
    }
  }
}

export function TallyForm() {
  useEffect(() => {
    // Properly handle the Tally embed loading
    const loadTallyEmbeds = () => {
      if (window.Tally) {
        window.Tally.loadEmbeds()
      }
    }

    loadTallyEmbeds()
  }, [])

  return (
    <div className='w-full'>
      <Script
        src='https://tally.so/widgets/embed.js'
        strategy='lazyOnload'
        onLoad={() => {
          if (window.Tally) {
            window.Tally.loadEmbeds()
          }
        }}
      />
      <iframe
        data-tally-src='https://tally.so/embed/nr0MPp?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1'
        loading='lazy'
        width='100%'
        height={174}
        frameBorder={0}
        title='Holy House Email Capture'
        className='bg-white/50 backdrop-blur-sm rounded-md'
      ></iframe>
    </div>
  )
}
