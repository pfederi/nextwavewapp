'use client'

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react'

type OSType = 'ios' | 'android'

interface OSContextType {
  selectedOS: OSType
  setSelectedOS: (os: OSType) => void
}

const OSContext = createContext<OSContextType | undefined>(undefined)

export function OSProvider({ children }: { children: ReactNode }) {
  const [selectedOS, setSelectedOS] = useState<OSType>('ios')
  
  useEffect(() => {
    console.log('OS Context changed:', selectedOS)
  }, [selectedOS])

  return (
    <OSContext.Provider value={{ selectedOS, setSelectedOS }}>
      {children}
    </OSContext.Provider>
  )
}

export function useOS() {
  const context = useContext(OSContext)
  if (context === undefined) {
    throw new Error('useOS must be used within an OSProvider')
  }
  return context
} 