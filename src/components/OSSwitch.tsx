'use client'

import { useOS } from '@/context/OSContext'
import { motion } from 'framer-motion'

export default function OSSwitch() {
  const { selectedOS, setSelectedOS } = useOS()

  return (
    <div className="flex flex-col items-center justify-center mb-8">
      <p className="text-sm text-gray-500 mb-2">Select your device</p>
      <div className="flex items-center bg-gray-200 rounded-full p-1 w-64">
        <button
          onClick={() => setSelectedOS('ios')}
          className={`relative flex-1 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
            selectedOS === 'ios' 
              ? 'text-white' 
              : 'text-gray-700 hover:text-gray-900'
          }`}
        >
          {selectedOS === 'ios' && (
            <motion.div
              className="absolute inset-0 bg-blue-500 rounded-full"
              layoutId="osBackground"
              transition={{ type: 'spring', duration: 0.6 }}
            />
          )}
          <span className="relative z-10">iOS</span>
        </button>
        <button
          onClick={() => setSelectedOS('android')}
          className={`relative flex-1 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
            selectedOS === 'android' 
              ? 'text-white' 
              : 'text-gray-700 hover:text-gray-900'
          }`}
        >
          {selectedOS === 'android' && (
            <motion.div
              className="absolute inset-0 bg-green-500 rounded-full"
              layoutId="osBackground"
              transition={{ type: 'spring', duration: 0.6 }}
            />
          )}
          <span className="relative z-10">Android</span>
        </button>
      </div>
    </div>
  )
} 