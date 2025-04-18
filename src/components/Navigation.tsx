'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useOS } from '@/context/OSContext'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [showOSSelector, setShowOSSelector] = useState(false)
  const { selectedOS, setSelectedOS } = useOS()
  const selectorRef = useRef(null)
  const mobileSelectorRef = useRef(null)

  // Add scroll event listener to show OS selector when hero OS selector disappears
  useEffect(() => {
    let lastScrollY = window.scrollY
    let animationFrameId: number | null = null
    
    const handleScroll = () => {
      // Get the hero OS selector element
      const heroOSSelector = document.querySelector('#hero-os-selector')
      
      if (heroOSSelector) {
        // Get the bounding rectangle of the hero OS selector
        const rect = heroOSSelector.getBoundingClientRect()
        
        // Simple condition: show when hero selector is out of view
        const shouldShow = rect.bottom <= 80
        
        // Only update state if it changed to avoid unnecessary re-renders
        if (shouldShow !== showOSSelector) {
          setShowOSSelector(shouldShow)
        }
      }
    }

    // Throttled scroll handler using requestAnimationFrame
    const onScroll = () => {
      if (animationFrameId) {
        return
      }
      
      animationFrameId = window.requestAnimationFrame(() => {
        handleScroll()
        animationFrameId = null
      })
    }
    
    window.addEventListener('scroll', onScroll, { passive: true })
    
    // Initial check
    handleScroll()
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId)
      }
    }
  }, [showOSSelector])

  // Function to handle smooth scrolling to sections
  const scrollToSection = (sectionId: string, e?: React.MouseEvent) => {
    if (e) e.preventDefault()
    
    // Close mobile menu if open
    if (isOpen) setIsOpen(false)
    
    const section = document.getElementById(sectionId)
    if (section) {
      // Calculate position with offset for navbar
      const offsetTop = section.getBoundingClientRect().top + window.pageYOffset - 80
      
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
      
      // Update URL hash without causing a jump
      window.history.pushState(null, '', `#${sectionId}`)
    }
  }

  // Spring animation variants
  const springVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 400,
        damping: 15
      }
    },
    exit: { 
      opacity: 0, 
      y: 10,
      transition: { 
        duration: 0.2,
        ease: "easeOut"
      }
    }
  }

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
              window.history.pushState(null, '', '/')
            }}
            className="flex-shrink-0 relative"
          >
            <Image
              src="/nextwave-logo.png"
              alt="NextWave Logo"
              width={120}
              height={40}
              className="h-8 w-auto"
            />
          </a>
          
          {/* Desktop Navigation with OS Selector */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {/* OS Selector that appears on scroll */}
            <AnimatePresence mode="wait">
              {showOSSelector && (
                <motion.div 
                  variants={springVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="flex items-center"
                >
                  <div className="flex items-center bg-gray-200 rounded-full p-1 w-40">
                    <button
                      onClick={() => setSelectedOS('ios')}
                      className={`relative flex-1 py-1 rounded-full text-xs font-medium transition-all duration-200 ${
                        selectedOS === 'ios' 
                          ? 'text-white' 
                          : 'text-gray-700 hover:text-gray-900'
                      }`}
                    >
                      {selectedOS === 'ios' && (
                        <motion.div
                          className="absolute inset-0 bg-blue-500 rounded-full"
                          layoutId="osBackgroundNav"
                          transition={{ type: 'spring', duration: 0.6 }}
                        />
                      )}
                      <span className="relative z-10">iOS</span>
                    </button>
                    <button
                      onClick={() => setSelectedOS('android')}
                      className={`relative flex-1 py-1 rounded-full text-xs font-medium transition-all duration-200 ${
                        selectedOS === 'android' 
                          ? 'text-white' 
                          : 'text-gray-700 hover:text-gray-900'
                      }`}
                    >
                      {selectedOS === 'android' && (
                        <motion.div
                          className="absolute inset-0 bg-green-500 rounded-full z-0"
                          layoutId="osBackgroundNav"
                          transition={{ type: 'spring', duration: 0.6 }}
                        />
                      )}
                      <span className="relative z-10">Android</span>
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            
            <a 
              href="#features" 
              onClick={(e) => scrollToSection('features', e)}
              className="text-[#407d97] hover:text-[#59a8c7] transition-colors"
            >
              Features
            </a>
            <a 
              href="#screenshots" 
              onClick={(e) => scrollToSection('screenshots', e)}
              className="text-[#407d97] hover:text-[#59a8c7] transition-colors"
            >
              Screenshots
            </a>
            <a 
              href="#faq" 
              onClick={(e) => scrollToSection('faq', e)}
              className="text-[#407d97] hover:text-[#59a8c7] transition-colors"
            >
              FAQ
            </a>
            <a 
              href="#download"
              onClick={(e) => scrollToSection('download', e)}
              className="bg-[#59a8c7] text-white px-4 py-2 rounded-lg hover:bg-[#407d97] transition-colors"
            >
              Download
            </a>
          </div>

          {/* Mobile menu button with OS Selector */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Mobile OS Selector */}
            <AnimatePresence mode="wait">
              {showOSSelector && (
                <motion.div 
                  variants={springVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="flex items-center"
                >
                  <div className="flex items-center bg-gray-200 rounded-full p-1 w-32">
                    <button
                      onClick={() => setSelectedOS('ios')}
                      className={`relative flex-1 py-1 px-2 rounded-full text-xs font-medium transition-all duration-200 ${
                        selectedOS === 'ios' 
                          ? 'text-white' 
                          : 'text-gray-700'
                      }`}
                    >
                      {selectedOS === 'ios' && (
                        <motion.div
                          className="absolute inset-0 bg-blue-500 rounded-full z-0"
                          layoutId="osBackgroundNavMobile"
                          transition={{ type: 'spring', duration: 0.6 }}
                        />
                      )}
                      <span className="relative z-10">iOS</span>
                    </button>
                    <button
                      onClick={() => setSelectedOS('android')}
                      className={`relative flex-1 py-1 px-2 rounded-full text-xs font-medium transition-all duration-200 ${
                        selectedOS === 'android' 
                          ? 'text-white' 
                          : 'text-gray-700'
                      }`}
                    >
                      {selectedOS === 'android' && (
                        <motion.div
                          className="absolute inset-0 bg-green-500 rounded-full z-0"
                          layoutId="osBackgroundNavMobile"
                          transition={{ type: 'spring', duration: 0.6 }}
                        />
                      )}
                      <span className="relative z-10">Android</span>
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#407d97] hover:text-[#59a8c7]"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
            href="#features"
            onClick={(e) => scrollToSection('features', e)}
            className="block px-3 py-2 rounded-md text-[#407d97] hover:text-[#59a8c7] hover:bg-[#e6f4f9]"
          >
            Features
          </a>
          <a
            href="#screenshots"
            onClick={(e) => scrollToSection('screenshots', e)}
            className="block px-3 py-2 rounded-md text-[#407d97] hover:text-[#59a8c7] hover:bg-[#e6f4f9]"
          >
            Screenshots
          </a>
          <a
            href="#faq"
            onClick={(e) => scrollToSection('faq', e)}
            className="block px-3 py-2 rounded-md text-[#407d97] hover:text-[#59a8c7] hover:bg-[#e6f4f9]"
          >
            FAQ
          </a>
          <a
            href="#download"
            onClick={(e) => scrollToSection('download', e)}
            className="block px-3 py-2 rounded-md bg-[#59a8c7] text-white hover:bg-[#407d97]"
          >
            Download
          </a>
        </div>
      </div>
    </nav>
  )
} 