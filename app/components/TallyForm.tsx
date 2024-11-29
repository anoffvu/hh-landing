'use client'

import { useEffect, useState } from 'react'
import Script from 'next/script'

export function TallyForm() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // @ts-ignore (Tally is injected by the script)
    if (window.Tally) {
      // @ts-ignore
      window.Tally.loadEmbeds()
      setIsLoading(false)
    }
  }, [])

  return (
    <div className='w-full max-w-md mx-auto'>
      <Script
        src='https://tally.so/widgets/embed.js'
        strategy='lazyOnload'
        onLoad={() => {
          // @ts-ignore
          window.Tally.loadEmbeds()
          setIsLoading(false)
        }}
      />

      {isLoading && (
        <div className='h-[174px] flex items-center justify-center'>
          <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500' />
        </div>
      )}

      <iframe
        data-tally-src='https://tally.so/embed/nr0MPp?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1'
        loading='lazy'
        width='100%'
        height='174'
        frameBorder='0'
        marginHeight='0'
        marginWidth='0'
        title='Holy House Email Capture'
        className={isLoading ? 'hidden' : ''}
      ></iframe>
    </div>
  )
}
