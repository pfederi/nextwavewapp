'use client'

import Image from 'next/image'
import { useOS } from '@/context/OSContext'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'

export default function Screenshots() {
  const { selectedOS } = useOS()
  
  // Log when the component renders with the current OS
  useEffect(() => {
    console.log('Screenshots rendering with OS:', selectedOS)
  }, [selectedOS])

  return (
    <div id="screenshots" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-[#59a8c7] font-semibold tracking-wide uppercase">Screenshots</h2>
          <p className="mt-2 text-3xl font-extrabold text-[#2c5461] sm:text-4xl">
            See the app in action
          </p>
          <p className="mt-4 max-w-2xl text-xl text-[#407d97] mx-auto">
            Take a tour through NextWave's intuitive interface and powerful features.
          </p>
        </div>

        <div className="mt-12 relative rounded-2xl shadow-xl overflow-hidden bg-white">
          <AnimatePresence mode="wait">
            {selectedOS === 'ios' ? (
              <motion.div 
                key="ios"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                style={{ position: 'relative', width: '100%', height: '600px' }}
              >
                <Image
                  src="/app-interface-ios.png"
                  alt="NextWave iOS App Interface"
                  fill
                  style={{ objectFit: 'contain' }}
                  priority
                  loading="eager"
                  unoptimized
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                />
              </motion.div>
            ) : (
              <motion.div 
                key="android"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                style={{ position: 'relative', width: '100%', height: '600px' }}
              >
                <Image
                  src="/app-interface-android.png"
                  alt="NextWave Android App Interface"
                  fill
                  style={{ objectFit: 'contain' }}
                  priority
                  loading="eager"
                  unoptimized
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
} 