'use client'

import { useEffect, useState } from 'react'
import Hero from './Hero'
import Features from './Features'
import Screenshots from './Screenshots'
import FAQ from './FAQ'
import WakethievingRules from './WakethievingRules'
import Download from './Download'
import Navigation from './Navigation'
import Footer from './Footer'
import BuyMeCoffee from './BuyMeCoffee'
import { useOS } from '@/context/OSContext'

export default function ClientPage() {
  const [isMounted, setIsMounted] = useState(false)
  const { selectedOS, setSelectedOS } = useOS()

  useEffect(() => {
    setIsMounted(true)
    // Ensure iOS is selected by default
    setSelectedOS('ios')
    console.log('ClientPage mounted, OS set to:', 'ios')
  }, [setSelectedOS])

  if (!isMounted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#e6f4f9] to-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-[#59a8c7]"></div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#e6f4f9] to-white">
      <Navigation />
      <Hero />
      <Features />
      <Screenshots />
      <BuyMeCoffee />
      <WakethievingRules />
      <FAQ />
      <Download />
      <Footer />
    </main>
  )
} 