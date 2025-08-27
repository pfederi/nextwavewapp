'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Rule section interface
interface RuleSectionProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

// Rule card component
function RuleCard({ icon, title, children }: RuleSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-[#f8fcfd] p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col border border-[#59a8c7]/20"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#59a8c7] text-white">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-[#2c5461]">{title}</h3>
      </div>
      <div className="flex-1">
        {children}
      </div>
    </motion.div>
  )
}

// Distance rule card
function DistanceRuleCard() {
  return (
    <RuleCard
      icon={
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 17h18v2H3zm0-6h18v2H3zm0-6h18v2H3z"/>
        </svg>
      }
      title="Safe Distance Requirements"
    >
      <div className="space-y-4">
        <div>
          <h4 className="text-lg font-semibold text-[#2c5461]">50 meters on each side</h4>
          <p className="text-[#407d97]">Maintain at least 50 meters distance from priority vessels (passenger ships) on both sides.</p>
        </div>
        <div className="flex items-center gap-2 mt-3">
          <svg className="w-4 h-4 text-[#59a8c7]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
          </svg>
          <p className="text-[#407d97] text-sm italic">50 meters ≈ one boat length for most ships.</p>
        </div>
      </div>
    </RuleCard>
  )
}

// Ship identification card
function ShipIdentificationCard() {
  return (
    <RuleCard
      icon={
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      }
      title="Identifying Priority Vessels"
    >
      <div className="space-y-4">
        <p className="text-black font-medium">Priority vessels are marked with:</p>
        
        <div className="space-y-3">
          <div>
            <h5 className="font-semibold text-[#2c5461]">During daytime:</h5>
            <p className="text-[#407d97]">Green ball at the highest point.</p>
          </div>
          
          <div>
            <h5 className="font-semibold text-[#2c5461]">At night:</h5>
            <p className="text-[#407d97]">White light at bow (front), green light on starboard (right), red light on port (left), and green light at highest point.</p>
          </div>
        </div>
      </div>
    </RuleCard>
  )
}

// Critical rules card
function CriticalRulesCard() {
  const rules = [
    {
      icon: (
        <svg className="w-5 h-5 text-[#59a8c7]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      ),
      title: "NEVER ride in front of the ship",
      description: "Always stay behind or to the side."
    },
    {
      icon: (
        <svg className="w-5 h-5 text-[#59a8c7]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
        </svg>
      ),
      title: "Best waves are further back anyway",
      description: "You'll get better waves staying behind."
    },
    {
      icon: (
        <svg className="w-5 h-5 text-[#59a8c7]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      ),
      title: "Leave the priority route as quickly as possible",
      description: "Don't linger in shipping lanes. Shipping lanes are visible on the map."
    }
  ]

  return (
    <RuleCard
      icon={
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      }
      title="Critical Safety Rules"
    >
      <div className="space-y-4">
        {rules.map((rule, index) => (
          <div key={index}>
            <h5 className="font-semibold text-[#2c5461]">{rule.title}</h5>
            <p className="text-[#407d97] text-sm">{rule.description}</p>
          </div>
        ))}
      </div>
    </RuleCard>
  )
}

// Safety equipment card
function SafetyEquipmentCard() {
  const equipment = [
    {
      icon: (
        <div className="w-4 h-4 bg-[#59a8c7] rounded-full"></div>
      ),
      title: "Highly visible head protection",
      description: "Wear bright, easily visible headgear for safety."
    },
    {
      icon: (
        <svg className="w-5 h-5 text-[#59a8c7]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      title: "Life jacket required outside shore zone (300m)",
      description: "Minimum 75N buoyancy required when leaving 300m shore zone."
    }
  ]

  return (
    <RuleCard
      icon={
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      }
      title="Required Safety Equipment"
    >
      <div className="space-y-4">
        {equipment.map((item, index) => (
          <div key={index}>
            <h5 className="font-semibold text-[#2c5461]">{item.title}</h5>
            <p className="text-[#407d97] text-sm">{item.description}</p>
          </div>
        ))}
        
        <div className="flex items-center gap-2 mt-3">
          <svg className="w-4 h-4 text-[#59a8c7]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
          </svg>
          <p className="text-[#407d97] text-sm italic">
            <a href="https://indiana-paddlesurf.com/de_ch/pfd-by-restube-iso-norm-rt-06001-hi.html" target="_blank" rel="noopener noreferrer" className="text-[#59a8c7] hover:text-[#407d97] underline font-semibold">Restube</a> offers inflatable life jackets perfect for this requirement. 
            <span className="text-[#407d97]">10% discount with code: <a href="https://indiana-paddlesurf.com/de_ch/pfd-by-restube-iso-norm-rt-06001-hi.html" target="_blank" rel="noopener noreferrer" className="text-[#59a8c7] hover:text-[#407d97] underline font-semibold">FEDERI10X</a></span>
          </p>
        </div>
      </div>
    </RuleCard>
  )
}

// Why it matters card
function WhyItMattersCard() {
  return (
    <RuleCard
      icon={
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      }
      title="Why This Matters"
    >
      <div className="space-y-4">
        <p className="text-[#407d97]">
          In an emergency stop, the captain must put the ship in reverse. This creates a powerful suction from the propeller that can be extremely dangerous.
        </p>
        
        <div className="flex items-center gap-2 mt-3">
          <svg className="w-4 h-4 text-[#59a8c7]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <p className="text-[#407d97] text-sm italic">Following these rules prevents accidents and keeps wakethieving legal!</p>
        </div>
      </div>
    </RuleCard>
  )
}

// Community guidelines card
function CommunityGuidelinesCard() {
  return (
    <RuleCard
      icon={
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      }
      title="Join Our Community"
    >
      <div className="space-y-4">
        <p className="text-[#407d97]">
          Be part of the responsible pumpfoiling movement in Switzerland
        </p>
        
        <a 
          href="https://responsible.pumpfoiling.community/"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <div className="bg-[#e6f4f9] p-4 rounded-lg border border-[#59a8c7]/30 hover:border-[#59a8c7] transition-colors duration-200 group">
            <div className="flex items-center justify-between">
              <div>
                <h5 className="font-semibold text-[#2c5461] group-hover:text-[#59a8c7] transition-colors">
                  Swiss Pumpfoilers Code of Conduct
                </h5>
                <p className="text-sm text-[#407d97]">Join the community commitment</p>
              </div>
              <svg className="w-5 h-5 text-[#59a8c7] group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>
          </div>
        </a>
      </div>
    </RuleCard>
  )
}

export default function WakethievingRules() {
  return (
    <section id="rules" className="py-24 bg-gradient-to-b from-gray-100 to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2c5461]">
            Wakethieving Rules
          </h2>
          <p className="mt-4 text-xl text-[#407d97] max-w-3xl mx-auto">
            Before you start catching waves, please read these important safety rules to protect yourself and preserve access to this amazing sport.
          </p>
        </div>

        {/* Rules Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <DistanceRuleCard />
          <ShipIdentificationCard />
          <CriticalRulesCard />
          <SafetyEquipmentCard />
          <WhyItMattersCard />
          <CommunityGuidelinesCard />
        </div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-16"
        >
          <p className="text-lg font-medium text-[#407d97]">
            Enjoy your waves responsibly! 🏄‍♂️
          </p>
        </motion.div>
      </div>
    </section>
  )
}
