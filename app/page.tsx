'use client'

import { motion } from 'framer-motion'
import { TallyForm } from './components/TallyForm'

export default function Page() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  }

  const textAnimation = {
    hidden: {
      opacity: 0,
      filter: 'blur(20px)',
      y: 20,
    },
    show: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  const fadeIn = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: 'easeOut',
      },
    },
  }

  return (
    <div className='min-h-screen relative overflow-hidden bg-[#fafaf9]'>
      {/* Multiple gradient orbs for more organic movement */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-sky-100/40 via-blue-100/40 to-indigo-100/40 blur-3xl animate-drift-1' />
        <div className='absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-l from-blue-50/40 via-sky-100/40 to-indigo-50/40 blur-3xl animate-drift-2' />
        <div className='absolute top-1/4 left-1/4 w-full h-full bg-gradient-to-tr from-sky-50/30 via-blue-50/30 to-indigo-100/30 blur-3xl animate-drift-3' />
      </div>

      {/* Grain effect */}
      <div className='absolute inset-0 bg-noise opacity-20' />

      <div className='relative'>
        <div className='container mx-auto px-4 py-20 md:py-32'>
          <motion.div
            initial='hidden'
            animate='show'
            variants={container}
            className='max-w-4xl mx-auto space-y-20'
          >
            <div className='space-y-8 text-center'>
              <motion.p
                variants={textAnimation}
                className='text-sky-500 font-medium tracking-wide inline-block'
              >
                THE FUTURE OF SPIRITUAL GUIDANCE
              </motion.p>
              <motion.h1
                variants={textAnimation}
                className='text-4xl md:text-6xl lg:text-7xl font-light tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-blue-400'
              >
                A Personalized
              </motion.h1>
              <motion.h2
                variants={textAnimation}
                className='text-4xl md:text-6xl lg:text-7xl font-light tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-sky-400'
              >
                Spiritual Mentor
              </motion.h2>
            </div>

            <motion.div
              variants={fadeIn}
              className='prose prose-lg mx-auto text-center max-w-2xl'
            >
              <p className='text-gray-600'>
                Experience personalized spiritual guidance like never before.
                Holy House connects you with a dedicated mentor who understands
                your journey and helps you grow in your faith.
              </p>
            </motion.div>

            <motion.div variants={fadeIn} className='max-w-md mx-auto w-full'>
              <TallyForm />
            </motion.div>

            <motion.div
              variants={fadeIn}
              className='grid md:grid-cols-3 gap-8 text-center'
            >
              {[
                {
                  title: 'Personal Growth',
                  description:
                    'Receive guidance tailored to your spiritual journey',
                },
                {
                  title: 'Daily Wisdom',
                  description:
                    'Get inspired by scripture-based insights every day',
                },
                {
                  title: 'Deep Connection',
                  description:
                    'Build a meaningful relationship with your spiritual mentor',
                },
              ].map((feature, index) => (
                <div key={index}>
                  <h3 className='font-medium text-xl mb-2 bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-blue-400'>
                    {feature.title}
                  </h3>
                  <p className='text-gray-600'>{feature.description}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <footer className='relative text-center py-8 text-sm text-gray-500'>
          <div className='space-x-4'>
            <a
              href='/terms-of-service'
              className='hover:text-gray-700 underline underline-offset-2'
            >
              Terms of Service
            </a>
            <a
              href='/privacy-policy'
              className='hover:text-gray-700 underline underline-offset-2'
            >
              Privacy Policy
            </a>
          </div>
        </footer>
      </div>
    </div>
  )
}
