'use client'

import Link from 'next/link'
import { useEffect } from 'react'

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="text-[#59a8c7] hover:text-[#407d97] mb-8 inline-block">
          ← Back to Home
        </Link>
        
        <h1 className="text-3xl font-bold text-[#2c5461] mb-8">Privacy Policy for Next Wave</h1>
        <p className="text-[#407d97] mb-8">Effective Date: December 14, 2024</p>

        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-[#2c5461] mb-4">1. Introduction</h2>
            <p className="text-[#407d97]">Next Wave (Pumpfoiling Community) is committed to protecting your privacy. This Privacy Policy explains how we handle information in relation to our iOS application.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#2c5461] mb-4">2. Information We Don't Collect</h2>
            <p className="text-[#407d97] mb-4">Next Wave is designed with privacy in mind. We do not collect, store, or transmit any personal data. Specifically:</p>
            <ul className="list-disc pl-5 space-y-2 text-[#407d97]">
              <li>We do not collect personal information</li>
              <li>We do not track your location</li>
              <li>We do not use analytics services</li>
              <li>We do not store any user data on external servers</li>
              <li>We do not use third-party services</li>
              <li>We do not create user profiles</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#2c5461] mb-4">3. Local Device Storage</h2>
            <p className="text-[#407d97] mb-4">The app stores the following data locally on your device only:</p>
            <ul className="list-disc pl-5 space-y-2 text-[#407d97]">
              <li>Your notification settings</li>
              <li>Scheduled local notifications</li>
            </ul>
            <p className="text-[#407d97] mt-4">This data never leaves your device and is only used to provide the app's core functionality.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#2c5461] mb-4">4. Notifications</h2>
            <p className="text-[#407d97] mb-4">If you enable notifications:</p>
            <ul className="list-disc pl-5 space-y-2 text-[#407d97]">
              <li>Notifications are scheduled and managed locally on your device</li>
              <li>No notification data is transmitted to external servers</li>
              <li>You can disable notifications at any time through your device settings</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#2c5461] mb-4">5. Schedule Data</h2>
            <p className="text-[#407d97] mb-4">The boat schedule data is:</p>
            <ul className="list-disc pl-5 space-y-2 text-[#407d97]">
              <li>Included in the app installation</li>
              <li>Public information</li>
              <li>Updated through regular app updates</li>
              <li>Not personalized or modified based on usage</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#2c5461] mb-4">6. Children's Privacy</h2>
            <p className="text-[#407d97]">Our app does not collect any personal information from anyone, including children under 13.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#2c5461] mb-4">7. Changes to This Policy</h2>
            <p className="text-[#407d97]">We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy in the App Store listing and updating the "Effective Date" at the top of this policy.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#2c5461] mb-4">8. Contact Us</h2>
            <p className="text-[#407d97]">If you have any questions about this Privacy Policy, please contact us at: <a href='mailto:contact@nextwaveapp.ch'>contact@nextwaveapp.ch</a></p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#2c5461] mb-4">9. Your Rights</h2>
            <p className="text-[#407d97]">Since we don't collect any personal data, there is no personal information to access, modify, or delete. You have full control over any app-related data through your device's settings.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#2c5461] mb-4">10. Data Protection</h2>
            <p className="text-[#407d97]">All app functionality operates locally on your device, protected by your device's built-in security features.</p>
          </section>
        </div>
      </div>
    </div>
  )
} 