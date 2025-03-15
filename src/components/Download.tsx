'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useOS } from '@/context/OSContext'

export default function Download() {
  const { selectedOS } = useOS()

  return (
    <div id="download" className="relative py-24 bg-[#59a8c7] overflow-hidden">
      {/* Background wave animation */}
      <div className="absolute inset-0 z-0">
        <svg
          className="absolute w-full h-full"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          style={{ transform: 'scaleY(-1)' }}
        >
          <motion.path
            d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,224C672,213,768,171,864,149.3C960,128,1056,128,1152,149.3C1248,171,1344,213,1392,234.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            fill="rgba(255,255,255,0.1)"
            animate={{
              d: [
                "M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,224C672,213,768,171,864,149.3C960,128,1056,128,1152,149.3C1248,171,1344,213,1392,234.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,160L48,144C96,128,192,96,288,106.7C384,117,480,171,576,192C672,213,768,203,864,170.7C960,139,1056,85,1152,74.7C1248,64,1344,96,1392,112L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ]
            }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 20,
              ease: "easeInOut"
            }}
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Ready to catch your next wave?
            </h2>
            <p className="mt-4 text-xl text-[#e6f4f9]">
              Upgrade your foiling experience! Download NextWave now and never miss the perfect wake.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-10 relative z-20 flex flex-col sm:flex-row justify-center items-center gap-6"
          >
            <a
              href="https://apps.apple.com/ch/app/nextwave/id6739363035"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-block transition-opacity duration-300 ${selectedOS === 'android' ? 'opacity-40 hover:opacity-100' : 'opacity-100'}`}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center h-[60px]"
              >
                <Image
                  src="/app-store-badge.svg"
                  alt="Download on the App Store"
                  width={200}
                  height={60}
                  className="h-auto"
                />
              </motion.div>
            </a>
            
            <div className="relative">
              <div className="absolute -top-3 -right-3 z-10">
                <div className="bg-yellow-400 text-yellow-900 font-bold py-1 px-4 rounded-md text-sm shadow-md transform rotate-[-8deg]">
                  Coming Soon
                </div>
              </div>
              <a
                href="https://play.google.com/store/apps/details?id=com.nextwave.app"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-block transition-opacity duration-300 ${selectedOS === 'ios' ? 'opacity-40 hover:opacity-100' : 'opacity-100'}`}
                onClick={(e) => e.preventDefault()}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center h-[60px] relative"
                >
                  <Image
                    src="/google-play-badge.svg"
                    alt="Get it on Google Play"
                    width={200}
                    height={60}
                    className="h-auto"
                  />
                </motion.div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
} 