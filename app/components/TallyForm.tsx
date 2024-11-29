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
    <div className='w-full relative'>
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
        className='bg-transparent backdrop-blur-[2px] rounded-lg shadow-[0_0_1px_rgba(0,0,0,0.1)] hover:shadow-[0_0_1px_rgba(0,0,0,0.2)] transition-shadow'
      ></iframe>
    </div>
  )
}
