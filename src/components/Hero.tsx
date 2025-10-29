'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useOS } from '@/context/OSContext'
import { useEffect, useState, useRef } from 'react'

// Floating particles component for water effect
const WaterParticles = () => {
  // Generate random particles
  const particles = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100, // random x position (0-100%)
    y: Math.random() * 100, // random y position (0-100%)
    size: Math.random() * 10 + 5, // random size (5-15px)
    duration: Math.random() * 20 + 10, // random animation duration (10-30s)
    delay: Math.random() * 5, // random delay (0-5s)
  }))

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-white/10"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}

// Function to detect user device type
const detectDeviceType = (): 'ios' | 'android' | null => {
  if (typeof window === 'undefined' || !window.navigator) {
    return null; // Server-side rendering, can't detect
  }
  
  const userAgent = window.navigator.userAgent.toLowerCase();
  
  // Check for iOS devices
  if (/iphone|ipad|ipod/.test(userAgent)) {
    return 'ios';
  }
  
  // Check for Android devices
  if (/android/.test(userAgent)) {
    return 'android';
  }
  
  return null; // Default to null if not detected
};

export default function Hero() {
  const { selectedOS, setSelectedOS } = useOS()
  
  // Detect device type and set OS on component mount
  useEffect(() => {
    const deviceType = detectDeviceType();
    if (deviceType) {
      console.log('Detected device type:', deviceType);
      setSelectedOS(deviceType);
    } else {
      console.log('Could not detect device type, using default OS:', selectedOS);
    }
  }, []);
  
  // Log when the component renders with the current OS
  useEffect(() => {
    console.log('Hero rendering with OS:', selectedOS)
  }, [selectedOS])

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#e6f4f9]">
      {/* Water particles animation */}
      <WaterParticles />
      
      {/* Animated Waves */}
      <div className="absolute inset-0 z-0">
        <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <motion.path
            initial={{ d: "M0,160L48,144C96,128,192,96,288,106.7C384,117,480,171,576,192C672,213,768,203,864,170.7C960,139,1056,85,1152,74.7C1248,64,1344,96,1392,112L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" }}
            animate={{
              d: [
                "M0,160L48,144C96,128,192,96,288,106.7C384,117,480,171,576,192C672,213,768,203,864,170.7C960,139,1056,85,1152,74.7C1248,64,1344,96,1392,112L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,192L48,197.3C96,203,192,213,288,192C384,171,480,117,576,101.3C672,85,768,107,864,128C960,149,1056,171,1152,165.3C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ]
            }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 10,
              ease: "easeInOut"
            }}
            fill="#59a8c7"
            fillOpacity="0.2"
          />
          <motion.path
            initial={{ d: "M0,256L48,261.3C96,267,192,277,288,272C384,267,480,245,576,240C672,235,768,245,864,245.3C960,245,1056,235,1152,229.3C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" }}
            animate={{
              d: [
                "M0,256L48,261.3C96,267,192,277,288,272C384,267,480,245,576,240C672,235,768,245,864,245.3C960,245,1056,235,1152,229.3C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,288L48,282.7C96,277,192,267,288,272C384,277,480,299,576,293.3C672,288,768,256,864,250.7C960,245,1056,267,1152,277.3C1248,288,1344,288,1392,288L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ]
            }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 8,
              ease: "easeInOut"
            }}
            fill="#59a8c7"
            fillOpacity="0.1"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 md:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-[#2c5461]">
            NextWave
            <span className="block text-[#59a8c7]">Catch Every Wake, Anytime</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#407d97] max-w-3xl mx-auto">
            NextWave helps wake foilers across Swiss lakes by providing real-time boat schedules, wave ratings, water conditions, and weather data - ensuring you never miss the perfect wake for your foiling session.
          </p>
          
          {/* OS Switch */}
          <div id="hero-os-selector" className="mt-8 mb-4 flex flex-col items-center justify-center">
            <p className="text-sm text-gray-500 mb-2">Select your device</p>
            <div className="flex items-center bg-gray-200 rounded-full p-1 w-96">
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
                    layoutId="osBackgroundHero"
                    transition={{ type: 'spring', duration: 0.6 }}
                  />
                )}
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  iOS & WatchOS
                </span>
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
                    layoutId="osBackgroundHero"
                    transition={{ type: 'spring', duration: 0.6 }}
                  />
                )}
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zM20.5 8c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zM15.53 2.16l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.85 1.23 12.95 1 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31C6.97 3.26 6 5.01 6 7h12c0-1.99-.97-3.75-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z"/>
                  </svg>
                  Android
                </span>
              </button>
            </div>
            
            {/* New Banner */}
            {selectedOS === 'ios' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-3 inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full border border-purple-200"
              >
                <svg className="w-4 h-4 text-purple-600" viewBox="0 0 14.7266 20.9082" fill="currentColor">
                  <path d="M0.566406 14.4043C0.566406 15.918 1.16211 17.0312 2.26562 17.6367C2.80273 17.9199 3.11523 18.2812 3.31055 18.9355L3.62305 19.9805C3.80859 20.6055 4.24805 20.9082 4.90234 20.9082L9.41406 20.9082C10.0879 20.9082 10.498 20.6152 10.6836 19.9805L11.0059 18.9355C11.2012 18.2812 11.5137 17.9199 12.0508 17.6367C13.1543 17.0312 13.75 15.918 13.75 14.4043L13.75 6.50391C13.75 4.99023 13.1543 3.88672 12.0508 3.27148C11.5137 2.98828 11.2012 2.62695 11.0059 1.98242L10.6836 0.927734C10.5176 0.3125 10.0781 0 9.41406 0L4.90234 0C4.24805 0 3.80859 0.302734 3.62305 0.927734L3.31055 1.98242C3.125 2.61719 2.8125 2.99805 2.26562 3.27148C1.17188 3.85742 0.566406 4.9707 0.566406 6.50391ZM1.99219 14.1992L1.99219 6.71875C1.99219 5.26367 2.8418 4.38477 4.26758 4.38477L10.0488 4.38477C11.4746 4.38477 12.3242 5.26367 12.3242 6.71875L12.3242 14.1992C12.3242 15.6445 11.4746 16.5234 10.0488 16.5234L4.26758 16.5234C2.8418 16.5234 1.99219 15.6445 1.99219 14.1992ZM13.5352 9.76562L13.8867 9.76562C14.3945 9.76562 14.7266 9.42383 14.7266 8.86719L14.7266 7.54883C14.7266 6.99219 14.3945 6.65039 13.8867 6.65039L13.5352 6.65039Z"/>
                </svg>
                <span className="text-sm font-medium text-purple-700">NEW: WatchOS App</span>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* App Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8 relative w-full max-w-4xl mx-auto"
        >
          <div style={{ position: 'relative', width: '100%', paddingTop: '66.67%' }}>
            <Image
              src={selectedOS === 'ios' ? "/app-preview-ios.png" : "/app-preview-android.png"}
              alt={`NextWave ${selectedOS.toUpperCase()} App Preview`}
              fill
              style={{ objectFit: 'contain' }}
              priority
              loading="eager"
              unoptimized
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              quality={100}
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
} 