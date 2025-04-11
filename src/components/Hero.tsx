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
            NextWave helps wake foilers across Swiss lakes by providing real-time boat schedules, ensuring you never miss the perfect wake for your foiling session.
          </p>
          
          {/* OS Switch */}
          <div id="hero-os-selector" className="mt-8 mb-4 flex flex-col items-center justify-center">
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
                    layoutId="osBackgroundHero"
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
                    layoutId="osBackgroundHero"
                    transition={{ type: 'spring', duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">Android</span>
              </button>
            </div>
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