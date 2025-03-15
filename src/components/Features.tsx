'use client'

import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useOS } from '@/context/OSContext'

// Original iOS features
const iosFeatures = [
  {
    title: 'Station Selection',
    description: 'Easily find and choose the best wake foiling spots on Swiss lakes. Explore an interactive map with all available stations or browse a convenient list.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  },
  {
    title: 'Real-time Boat Tracking',
    description: 'Never miss a wave with real-time boat schedule tracking. Get accurate departure times and locations for all boats on Swiss lakes.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: 'Smart Wave Notifications',
    description: 'Customize your alerts with flexible notification times - 3, 5, 10, or 15 minutes before the perfect wave arrives. Stay prepared and never miss a session.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    )
  },
  {
    title: 'Weather Info',
    description: 'Get detailed weather conditions including temperature, wind speed and direction, all in one glance. Make informed decisions about your foiling sessions.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    )
  }
]

// Android features
const androidFeatures = [
  {
    title: 'Station Selection',
    description: 'Easily find and choose the best wake foiling spots on Swiss lakes. Explore an interactive map with all available stations or browse a convenient list.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  },
  {
    title: 'Real-time Boat Tracking',
    description: 'Never miss a wave with real-time boat schedule tracking. Get accurate departure times and locations for all boats on Swiss lakes.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: 'Favorites',
    description: 'Save your most frequented spots for quick access. Mark stations as favorites and access them instantly from the home screen for faster wake tracking.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    )
  }
]

// Define a type for the feature items
interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function Features() {
  const { selectedOS } = useOS()
  const [currentFeatures, setCurrentFeatures] = useState<Feature[]>([])
  const [key, setKey] = useState(0)
  
  // Update features when OS changes
  useEffect(() => {
    setCurrentFeatures(selectedOS === 'ios' ? iosFeatures : androidFeatures)
    setKey(prev => prev + 1) // Force re-render
  }, [selectedOS])

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2c5461]">
            Key Features
          </h2>
          <p className="mt-4 text-xl text-[#407d97] max-w-3xl mx-auto">
            Discover how NextWave makes wake foiling easier and more enjoyable.
          </p>
        </div>

        {/* Features grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={key}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className={`mt-16 grid gap-8 ${
              currentFeatures.length === 4 
                ? 'md:grid-cols-2 lg:grid-cols-4' 
                : 'md:grid-cols-3'
            }`}
          >
            {currentFeatures.map((feature, index) => (
              <motion.div
                key={`${feature.title}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#f8fcfd] p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#59a8c7] text-white mb-4 mx-auto">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-medium text-[#2c5461] text-center">{feature.title}</h3>
                <p className="mt-2 text-base text-[#407d97] text-center">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
} 