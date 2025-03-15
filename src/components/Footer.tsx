'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="py-6 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link 
            href="/privacy" 
            className="text-[#407d97] hover:text-[#59a8c7] transition-colors underline underline-offset-2"
            scroll={true}
          >
            Privacy Policy
          </Link>
          <div className="text-[#407d97]">
            Made with <span className="text-[#59a8c7]">♥</span> by Lakeshore Studios
          </div>
        </div>
      </div>
    </footer>
  )
} 