'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useOS } from '@/context/OSContext'

// Interface for FAQ items
interface FAQItem {
  question: string;
  answer: string | JSX.Element;
  tags?: string[];
}

// Common FAQs for both platforms (excluding support which will be added last)
const commonFaqs: FAQItem[] = [
  {
    question: 'What devices is NextWave compatible with?',
    answer: (
      <div>
        <p className="mb-3 text-[#407d97]">NextWave is compatible with:</p>
        <ul className="list-disc pl-5 space-y-1 text-[#407d97]">
          <li>iOS devices running iOS 17.6 or later</li>
          <li>Android devices running Android 8.0 (API Level 26) or later</li>
        </ul>
        <p className="mt-3 text-[#407d97]">The source code is available on GitHub for both platforms:</p>
        <ul className="list-disc pl-5 space-y-1 text-[#407d97]">
          <li><a href="https://github.com/pfederi/Next-Wave" className="text-[#59a8c7] hover:text-[#407d97] underline underline-offset-2">iOS version</a></li>
          <li><a href="https://github.com/pfederi/NextWaveAndroid" className="text-[#59a8c7] hover:text-[#407d97] underline underline-offset-2">Android version</a></li>
        </ul>
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
const supportFaq: FAQItem = {
  question: 'Where can I get support?',
  answer: (
    <div>
      <p className="mb-3 text-[#407d97]">For questions or issues, please contact <a href="mailto:contact@nextwaveapp.ch">contact@nextwaveapp.ch</a></p>
    </div>
  )
}

// iOS-specific FAQs
const iosFaqs: FAQItem[] = [
  {
    question: 'How do smart notifications work?',
    answer: "You can set alerts by swiping left on a wave. Optionally, you can set a notification time in the settings for 3, 5, 10, or 15 minutes before a wake arrives, ensuring you're in the right spot at the right time.",
    tags: ['iOS']
  },
  {
    question: 'How does the weather integration work?',
    answer: 'NextWave uses the OpenWeather API to provide live weather data for your session. Individual weather data is shown for each departure time, including pressure trends over a 6-hour rolling window. You can enable or disable the weather feature in the settings.',
    tags: ['iOS']
  },
  {
    question: 'What is the wave rating system?',
    answer: (
      <div>
        <p className="mb-3 text-[#407d97]">NextWave calculates wave ratings (1-3 waves) for Lake Zurich ships based on scientific ship data:</p>
        <ul className="list-disc pl-5 space-y-1 text-[#407d97]">
          <li>Strong waves (3): MS Panta Rhei, MS Albis, EMS Uetliberg, EMS Pfannenstiel</li>
          <li>Medium waves (2): MS Wädenswil, MS Limmat, MS Helvetia, MS Linth, DS Stadt Zürich, DS Stadt Rapperswil</li>
          <li>Light waves (1): MS Bachtel, MS Säntis, and other ships</li>
        </ul>
        <p className="mt-3 text-[#407d97]">Ratings are calculated based on ship displacement, length, width, wave energy, and impact force. This feature is only available for Lake Zurich stations.</p>
      </div>
    ),
    tags: ['iOS']
  },
  {
    question: 'How does the Albis-Class filter work?',
    answer: 'The Albis-Class filter shows only departures with the best wave-producing ships (MS Albis, EMS Uetliberg, EMS Pfannenstiel) on Lake Zurich. Activate it by flipping your device face-down in the departure view. An orange banner indicates when the filter is active. This feature is only available for Lake Zurich stations.',
    tags: ['iOS']
  },
  {
    question: 'Where does the water temperature and level data come from?',
    answer: 'NextWave displays real-time water temperature and water level data for 30+ Swiss lakes. Water levels are shown as differences from historical averages (e.g., "+5 cm" or "-3 cm") to help you assess water depth conditions.',
    tags: ['iOS']
  },
  {
    question: 'How do WatchOS complications work?',
    answer: (
      <div>
        <p className="mb-3 text-[#407d97]">WatchOS complications display the next departure time directly on your watch face:</p>
        <ul className="list-disc pl-5 space-y-1 text-[#407d97]">
          <li>Shows information from your nearest station when location is enabled</li>
          <li>Or displays data from your selected favorite station</li>
          <li>Updates automatically to keep information current</li>
          <li>Tap the complication to open the full NextWave watch app</li>
        </ul>
      </div>
    ),
    tags: ['WatchOS']
  },
  {
    question: 'What WatchOS version is required?',
    answer: 'NextWave for Apple Watch requires watchOS 10.0 or later. The watch app works in conjunction with the iPhone app and requires an active iPhone connection for initial data sync.',
    tags: ['WatchOS']
  },
  {
    question: 'How many favorite stations can I track on my Apple Watch?',
    answer: (
      <div>
        <p className="mb-3 text-[#407d97]">You can track up to 5 favorite stations on your Apple Watch:</p>
        <ul className="list-disc pl-5 space-y-1 text-[#407d97]">
          <li>Each favorite shows the next 3 departure times</li>
          <li>Favorites are managed through the iPhone app</li>
          <li>Location-based updates work when enabled</li>
          <li>Data syncs automatically between iPhone and Watch</li>
        </ul>
      </div>
    ),
    tags: ['WatchOS']
  },
  {
    question: 'Does the Apple Watch app work independently?',
    answer: 'The Apple Watch app requires your iPhone to be nearby for real-time data updates. However, recently cached departure information may be available for a short time when the iPhone is not accessible.',
    tags: ['WatchOS']
  }
]

// Android-specific FAQs
const androidFaqs: FAQItem[] = [
  {
    question: 'How does the weather integration work?',
    answer: 'NextWave uses the OpenWeather API to provide live weather data for your session. You can enable or disable the weather feature in the settings.'
  }
]

// Platform-specific FAQs that have different answers based on OS
function getPlatformSpecificFaqs(selectedOS: 'ios' | 'android'): FAQItem[] {
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

function FAQItem({ question, answer, tags }: { question: string; answer: string | JSX.Element; tags?: string[] }) {
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
        <div className="flex items-center gap-3">
          <span className="text-lg font-medium text-[#2c5461]">{question}</span>
          {tags && tags.map((tag) => (
            <span key={tag} className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
              tag === 'iOS' 
                ? 'bg-blue-100 text-blue-800' 
                : tag === 'WatchOS'
                ? 'bg-purple-100 text-purple-800'
                : 'bg-green-100 text-green-800'
            }`}>
              {tag}
            </span>
          ))}
        </div>
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
            <FAQItem key={faq.question} question={faq.question} answer={faq.answer} tags={faq.tags} />
          ))}
        </div>
      </div>
    </div>
  )
} 