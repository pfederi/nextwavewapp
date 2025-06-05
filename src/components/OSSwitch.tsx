'use client'

import { useOS } from '@/context/OSContext'
import { motion } from 'framer-motion'

export default function OSSwitch() {
  const { selectedOS, setSelectedOS } = useOS()

  return (
    <div className="flex flex-col items-center justify-center mb-8">
      <p className="text-sm text-gray-500 mb-2">Select your device</p>
      <div className="relative flex bg-gray-200 rounded-full p-1 w-64">
        {/* Animated background pill */}
        <motion.div
          className={`absolute top-1 bottom-1 left-0 w-32 rounded-full ${
            selectedOS === 'ios' ? 'bg-green-500' : 'bg-blue-500'
          }`}
                      animate={{
              x: selectedOS === 'ios' ? 4 : 128
            }}
          transition={{ 
            type: 'spring', 
            stiffness: 300, 
            damping: 30,
            duration: 0.4
          }}
        />
        
        {/* iOS Button */}
        <button
          onClick={() => setSelectedOS('ios')}
          className={`relative flex-1 py-2 px-4 rounded-full text-sm font-medium transition-colors duration-200 z-10 ${
            selectedOS === 'ios' 
              ? 'text-white' 
              : 'text-gray-700 hover:text-gray-900'
          }`}
        >
          iOS
        </button>
        
        {/* Android Button */}
        <button
          onClick={() => setSelectedOS('android')}
          className={`relative flex-1 py-2 px-4 rounded-full text-sm font-medium transition-colors duration-200 z-10 ${
            selectedOS === 'android' 
              ? 'text-white' 
              : 'text-gray-700 hover:text-gray-900'
          }`}
        >
          Android
        </button>
      </div>
    </div>
  )
} 