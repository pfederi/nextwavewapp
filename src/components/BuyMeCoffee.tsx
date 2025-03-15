'use client'

import { motion } from 'framer-motion'

export default function BuyMeCoffee() {
  return (
    <div className="relative py-24 bg-[#59a8c7] overflow-hidden">
      {/* Static waves background */}
      <div className="absolute inset-0 z-0">
        <svg
          className="absolute bottom-0 w-full h-32"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0,40 C320,20 420,80 640,60 C860,40 960,80 1280,60 L1440,60 L1440,100 L0,100 Z"
            fill="rgba(255,255,255,0.15)"
          />
          <path
            d="M0,60 C320,40 420,100 640,80 C860,60 960,100 1280,80 L1440,80 L1440,100 L0,100 Z"
            fill="rgba(255,255,255,0.2)"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.p 
            className="mt-4 text-xl text-white mx-auto mb-8 max-w-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            NextWave is completely free. If you enjoy using the app and would like to support its development, you can buy me a coffee. Thank you!
          </motion.p>
          <motion.a 
            href="https://www.buymeacoffee.com/federi" 
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img 
              src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" 
              alt="Buy Me A Coffee" 
              className="mx-auto h-12"
            />
          </motion.a>
        </div>
      </div>
    </div>
  )
} 