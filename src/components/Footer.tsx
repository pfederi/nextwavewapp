'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="py-6 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a 
            href="https://nextwaveapp.ch/privacy.html" 
            className="text-[#407d97] hover:text-[#59a8c7] transition-colors underline underline-offset-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy
          </a>
          <div className="text-[#407d97]">
            Made with <span className="text-[#59a8c7]">♥</span> by{' '}
            <a 
              href="https://lakeshorestudios.ch" 
              className="hover:text-[#59a8c7] transition-colors underline underline-offset-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lakeshore Studios
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
} 