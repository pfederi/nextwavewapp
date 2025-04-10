'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useOS } from '@/context/OSContext'

// Common FAQs for both platforms (excluding support which will be added last)
const commonFaqs = [
  {
    question: 'What devices is NextWave compatible with?',
    answer: (
      <div>
        <p className="mb-3 text-[#407d97]">NextWave is compatible with iOS devices running iOS 17.6 or later. Android support will not be available. Sourcecode is available on <a href="https://github.com/pfederi/Next-Wave">GitHub</a> if you want to build it yourself.</p>
      </div>
    )
  },
  {
    question: 'What data does NextWave collect?',
    answer: (
      <div>
        <p className="mb-3 text-[#407d97]">NextWave is privacy-focused:</p>
        <ul className="list-disc pl-5 space-y-1 text-[#407d97]">
          <li>No tracking or analytics</li>
          <li>No personal data collection</li>
          <li>All data stays on your device</li>
          <li>Location data is only used locally and never stored or shared</li>
        </ul>
      </div>
    )
  },
  {
    question: 'Can I save my favorite wake spots?',
    answer: 'Yes! You can store up to 5 favorite stations, and the nearest station is automatically displayed.'
  },
  {
    question: 'Why are no departure times showing?',
    answer: (
      <div>
        <p className="mb-3 text-[#407d97]">If you're not seeing any departure times, this might be because the <a href="https://transport.opendata.ch" className="text-[#59a8c7] hover:text-[#407d97] underline underline-offset-2" target="_blank" rel="noopener noreferrer">transport.opendata.ch</a> API service is temporarily unavailable. This is a third-party service that NextWave depends on to show departure times. When this happens, you'll see an error message, and there's nothing else to do but wait until the service is back online.</p>
      </div>
    )
  }
]

// Support FAQ that will always be last
const supportFaq = {
  question: 'Where can I get support?',
  answer: (
    <div>
      <p className="mb-3 text-[#407d97]">For questions or issues, please contact <a href="mailto:contact@nextwaveapp.ch">contact@nextwaveapp.ch</a></p>
    </div>
  )
}

// iOS-specific FAQs
const iosFaqs = [
  {
    question: 'How do smart notifications work?',
    answer: "You can set alerts by swiping left on a wave. Optionally, you can set a notification time in the settings for 3, 5, 10, or 15 minutes before a wake arrives, ensuring you're in the right spot at the right time."
  },
  {
    question: 'How does the weather integration work?',
    answer: 'NextWave uses the OpenWeather API to provide live weather data for your session. You can enable or disable the weather feature in the settings.'
  }
]

// Android-specific FAQs
const androidFaqs = [
  {
    question: 'How does the weather integration work?',
    answer: 'NextWave uses the OpenWeather API to provide live weather data for your session. You can enable or disable the weather feature in the settings.'
  }
]

// Platform-specific FAQs that have different answers based on OS
function getPlatformSpecificFaqs(selectedOS: 'ios' | 'android') {
  return [
    {
      question: 'Do I need to allow location access?',
      answer: selectedOS === 'ios' ? (
        <div>
          <p className="mb-3 text-[#407d97]">No, but with location access enabled, you can:</p>
          <ul className="list-disc pl-5 space-y-1 text-[#407d97]">
            <li>See your position on the map</li>
            <li>Use the location tracking button</li>
            <li>Get the nearest station displayed automatically</li>
          </ul>
          <br></br>
          <p className="mb-3 text-[#407d97]">If you deny location access, these features will be disabled, but the app remains fully functional.</p>
        </div>
      ) : (
        <div>
          <p className="mb-3 text-[#407d97]">No, but with location access enabled, you can:</p>
          <ul className="list-disc pl-5 space-y-1 text-[#407d97]">
            <li>Get the nearest station displayed automatically</li>
          </ul>
          <br></br>
          <p className="mb-3 text-[#407d97]">If you deny location access, this feature will be disabled, but the app remains fully functional.</p>
        </div>
      )
    }
  ];
}

function FAQItem({ question, answer }: { question: string; answer: string | JSX.Element }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      initial={false}
      className="border-b border-gray-200"
    >
      <button
        className="py-6 w-full flex justify-between items-center text-left focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-[#2c5461]">{question}</span>
        <span className="ml-6 flex-shrink-0">
          <motion.svg
            animate={{ rotate: isOpen ? 180 : 0 }}
            className="h-6 w-6 text-[#59a8c7]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </motion.svg>
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pb-6">
              {typeof answer === 'string' ? (
                <p className="text-base text-[#407d97]">{answer}</p>
              ) : (
                answer
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const { selectedOS } = useOS()
  
  // Get platform-specific FAQs
  const platformSpecificFaqs = getPlatformSpecificFaqs(selectedOS);
  
  // Combine FAQs based on selected OS, always putting support FAQ last
  const faqs = selectedOS === 'ios' 
    ? [...commonFaqs, ...platformSpecificFaqs, ...iosFaqs, supportFaq] 
    : [...commonFaqs, ...platformSpecificFaqs, ...androidFaqs, supportFaq]

  return (
    <div id="faq" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-[#59a8c7] font-semibold tracking-wide uppercase">FAQ</h2>
          <p className="mt-2 text-3xl font-extrabold text-[#2c5461] sm:text-4xl">
            Frequently asked questions
          </p>
          <p className="mt-4 max-w-2xl text-xl text-[#59a8c7] mx-auto">
            Find answers to common questions about NextWave.
          </p>
        </div>
        <div className="mt-20 max-w-3xl mx-auto">
          {faqs.map((faq) => (
            <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </div>
  )
} 