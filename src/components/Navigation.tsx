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
                  <div className="flex items-center bg-gray-200 rounded-full p-1 w-20">
                    <button
                      onClick={() => setSelectedOS('ios')}
                      className={`relative flex-1 py-2 px-1 rounded-full transition-all duration-200 ${
                        selectedOS === 'ios' 
                          ? 'text-white' 
                          : 'text-gray-700 hover:text-gray-900'
                      }`}
                      title="iOS"
                    >
                      {selectedOS === 'ios' && (
                        <div className="absolute inset-0 bg-blue-500 rounded-full" />
                      )}
                      <svg className="relative z-10 w-4 h-4 mx-auto" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                      </svg>
                    </button>
                    <button
                      onClick={() => setSelectedOS('android')}
                      className={`relative flex-1 py-2 px-1 rounded-full transition-all duration-200 ${
                        selectedOS === 'android' 
                          ? 'text-white' 
                          : 'text-gray-700 hover:text-gray-900'
                      }`}
                      title="Android"
                    >
                      {selectedOS === 'android' && (
                        <div className="absolute inset-0 bg-green-500 rounded-full" />
                      )}
                      <svg className="relative z-10 w-4 h-4 mx-auto" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zM20.5 8c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zM15.53 2.16l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.85 1.23 12.95 1 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31C6.97 3.26 6 5.01 6 7h12c0-1.99-.97-3.75-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z"/>
                      </svg>
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
              href="#rules" 
              onClick={(e) => scrollToSection('rules', e)}
              className="text-[#407d97] hover:text-[#59a8c7] transition-colors"
            >
              Rules
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
                  <div className="flex items-center bg-gray-200 rounded-full p-1 w-20">
                    <button
                      onClick={() => setSelectedOS('ios')}
                      className={`relative flex-1 py-2 px-1 rounded-full transition-all duration-200 ${
                        selectedOS === 'ios' 
                          ? 'text-white' 
                          : 'text-gray-700 hover:text-gray-900'
                      }`}
                      title="iOS"
                    >
                      {selectedOS === 'ios' && (
                        <div className="absolute inset-0 bg-blue-500 rounded-full" />
                      )}
                      <svg className="relative z-10 w-4 h-4 mx-auto" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                      </svg>
                    </button>
                    <button
                      onClick={() => setSelectedOS('android')}
                      className={`relative flex-1 py-2 px-1 rounded-full transition-all duration-200 ${
                        selectedOS === 'android' 
                          ? 'text-white' 
                          : 'text-gray-700 hover:text-gray-900'
                      }`}
                      title="Android"
                    >
                      {selectedOS === 'android' && (
                        <div className="absolute inset-0 bg-green-500 rounded-full" />
                      )}
                      <svg className="relative z-10 w-4 h-4 mx-auto" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zM20.5 8c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zM15.53 2.16l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.85 1.23 12.95 1 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31C6.97 3.26 6 5.01 6 7h12c0-1.99-.97-3.75-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z"/>
                      </svg>
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
            href="#rules"
            onClick={(e) => scrollToSection('rules', e)}
            className="block px-3 py-2 rounded-md text-[#407d97] hover:text-[#59a8c7] hover:bg-[#e6f4f9]"
          >
            Rules
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