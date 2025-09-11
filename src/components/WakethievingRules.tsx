'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

// Types for the JSON data
interface RuleContent {
  main?: {
    title: string;
    description: string;
  } | string;
  info?: {
    text: string;
    type: string;
    link?: string;
  };
  intro?: string;
  daytime?: {
    title: string;
    description: string;
  };
  nighttime?: {
    title: string;
    description: string;
  };
  rules?: Array<{
    title: string;
    description: string;
    icon?: string;
  }>;
  equipment?: Array<{
    title: string;
    description: string;
    icon?: string;
  }>;
  vendor?: {
    text: string;
    link: string;
    code: string;
  };
  warning?: {
    text: string;
    type: string;
  };
  description?: string;
  community?: {
    name: string;
    url: string;
    image: string;
  };
}

interface Rule {
  id: string;
  title: string;
  icon: string;
  content: RuleContent;
}

interface LanguageData {
  content: {
    title: string;
    subtitle: string;
    lastContentUpdate: string;
  };
  rules: Rule[];
  ui: {
    footer: {
      message: string;
    };
    apiSource: string;
  };
}

interface RulesData {
  api: {
    version: string;
    lastUpdated: string;
    defaultLanguage: string;
    supportedLanguages: string[];
    endpoint: string;
    cors: boolean;
    license: string;
  };
  languages: Record<string, LanguageData>;
  ui: {
    colors: {
      primary: string;
      primaryHover: string;
      text: string;
      textSecondary: string;
      info: string;
      warning: string;
    };
  };
  icons: Record<string, string>;
}

// SVG Icon component
function SvgIcon({ iconKey, icons, className = "w-6 h-6" }: { iconKey: string; icons: Record<string, string>; className?: string }) {
  const pathData = icons[iconKey];
  if (!pathData) return null;

  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={pathData} />
    </svg>
  );
}

// Dynamic Rule Card component
function DynamicRuleCard({ rule, icons }: { rule: Rule; icons: Record<string, string> }) {
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
          <SvgIcon iconKey={rule.icon} icons={icons} />
        </div>
        <h3 className="text-xl font-semibold text-[#2c5461]">{rule.title}</h3>
      </div>
      <div className="flex-1">
        <RuleContent content={rule.content} icons={icons} ruleId={rule.id} />
      </div>
    </motion.div>
  );
}

// Dynamic content renderer
function RuleContent({ content, icons, ruleId }: { content: RuleContent; icons: Record<string, string>; ruleId: string }) {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 space-y-4">
        {/* Main content */}
        {content.main && typeof content.main === 'object' && (
          <div>
            <h4 className="text-base font-semibold text-[#2c5461]">{content.main.title}</h4>
            <p className="text-base text-[#407d97]">{content.main.description}</p>
          </div>
        )}



      {/* Intro text */}
      {content.intro && (
        <p className="text-base text-[#407d97] font-medium">{content.intro}</p>
      )}

      {/* Day/Night content */}
      {(content.daytime || content.nighttime) && (
        <div className="space-y-3">
          {content.daytime && (
            <div>
              <h4 className="text-base font-semibold text-[#2c5461]">{content.daytime.title}</h4>
              <p className="text-base text-[#407d97]">{content.daytime.description}</p>
            </div>
          )}
          {content.nighttime && (
            <div>
              <h4 className="text-base font-semibold text-[#2c5461]">{content.nighttime.title}</h4>
              <p className="text-base text-[#407d97]">{content.nighttime.description}</p>
            </div>
          )}
        </div>
      )}

      {/* Rules list */}
      {content.rules && (
        <div className="space-y-3">
          {content.rules.map((rule, index) => (
            <div key={index}>
              <h4 className="text-base font-semibold text-[#2c5461]">{rule.title}</h4>
              <p className="text-base text-[#407d97]">{rule.description}</p>
            </div>
          ))}
        </div>
      )}

      {/* Equipment list */}
      {content.equipment && (
        <div className="space-y-3">
          {content.equipment.map((item, index) => (
            <div key={index}>
              <h4 className="text-base font-semibold text-[#2c5461]">{item.title}</h4>
              <p className="text-base text-[#407d97]">{item.description}</p>
            </div>
          ))}
        </div>
      )}

      {/* Main text content (string version) */}
      {typeof content.main === 'string' && (
        <p className="text-base text-[#407d97]">{content.main}</p>
      )}


      {/* Description */}
      {content.description && (
        <p className="text-base text-[#407d97]">{content.description}</p>
      )}

      </div>
      
      {/* Bottom section - Info boxes, warnings, and buttons */}
      <div className="mt-4 space-y-4">
        {/* Info note (for non-equipment sections) */}
        {content.info && !content.equipment && (
          <div className="bg-[#e6f3f7] p-3 rounded-md border-l-4 border-[#59a8c7]">
            <div className="flex items-start gap-2">
              <SvgIcon iconKey="info" icons={icons} className="w-4 h-4 text-[#59a8c7] mt-0.5 flex-shrink-0" />
              <div className="text-sm text-[#407d97] italic">
                {content.info.link ? (
                  <a
                    href={content.info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#59a8c7] hover:text-[#407d97] underline underline-offset-2"
                  >
                    {content.info.text}
                  </a>
                ) : (
                  <p>{content.info.text}</p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Equipment-specific info box - Local Restube info for safety-equipment */}
        {ruleId === 'safety-equipment' && (
          <div className="bg-[#e6f3f7] p-3 rounded-md border-l-4 border-[#59a8c7]">
            <div className="flex items-start gap-2">
              <SvgIcon iconKey="info" icons={icons} className="w-4 h-4 text-[#59a8c7] mt-0.5 flex-shrink-0" />
              <div className="text-sm text-[#407d97] italic">
                <a
                  href="https://indiana-paddlesurf.com/de_ch/shop/accessories/safety.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#59a8c7] hover:text-[#407d97] underline underline-offset-2"
                >
                  Restube offers inflatable life jackets perfect for this requirement. 10% discount with code: FEDERI10X
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Warning */}
        {content.warning && (
          <div className="bg-yellow-50 p-3 rounded-md border-l-4 border-yellow-400">
            <div className="flex items-start gap-2">
              <SvgIcon iconKey="warning" icons={icons} className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-yellow-800 font-medium">{content.warning.text}</p>
            </div>
          </div>
        )}
        
        {/* Community link */}
        {content.community && (
          <div>
            <a
              href={content.community.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-[#59a8c7] hover:bg-[#407d97] text-white font-medium rounded-md transition-colors duration-200"
            >
              <SvgIcon iconKey="heart" icons={icons} className="w-4 h-4" />
              {content.community.name}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}


export default function WakethievingRules() {
  const [rulesData, setRulesData] = useState<RulesData | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentLanguage, setCurrentLanguage] = useState<string>('en');

  useEffect(() => {
    const fetchRules = async () => {
      try {
        // Try GitHub first, fallback to local
        const githubUrl = 'https://raw.githubusercontent.com/pfederi/wakethievingrules/main/wakethieving-rules.json';
        const localUrl = '/.wakethieving-rules.json';
        
        let response;
        let dataSource = 'unknown';
        try {
          response = await fetch(githubUrl);
          if (!response.ok) {
            throw new Error('GitHub fetch failed');
          }
          console.log('Loaded from GitHub API');
          dataSource = 'github';
        } catch (githubError) {
          console.warn('Failed to fetch from GitHub, trying local:', githubError);
          response = await fetch(localUrl);
          console.log('Loaded from local fallback');
          dataSource = 'local';
        }
        
        const data = await response.json();
        console.log('Raw data loaded:', data);
        console.log('Data structure check:', {
          dataSource,
          hasApi: !!data.api,
          hasLanguages: !!data.languages,
          hasIcons: !!data.icons,
          supportedLanguages: data.api?.supportedLanguages || 'none',
          availableLanguages: data.languages ? Object.keys(data.languages) : 'none'
        });
        
        setRulesData(data);
        
        // Always use English for now
        setCurrentLanguage('en');
      } catch (error) {
        console.error('Failed to fetch rules data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRules();
  }, []);

  if (loading) {
    return (
      <section id="rules" className="py-24 bg-gradient-to-b from-gray-100 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-[#59a8c7] mx-auto"></div>
          <p className="mt-4 text-[#407d97]">Loading rules...</p>
        </div>
      </section>
    );
  }

  if (!rulesData) {
    return (
      <section id="rules" className="py-24 bg-gradient-to-b from-gray-100 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2c5461]">
            Wakethieving Rules
          </h2>
          <p className="mt-4 text-xl text-[#407d97] max-w-3xl mx-auto">
            Failed to load rules. Please try again later.
          </p>
        </div>
      </section>
    );
  }

  // Get current language data
  const currentLangData = rulesData.languages?.[currentLanguage];
  
  // Additional safety check
  if (!currentLangData || !currentLangData.content || !currentLangData.content.title) {
    console.error('Invalid language data structure:', {
      currentLanguage,
      availableLanguages: rulesData.languages ? Object.keys(rulesData.languages) : 'none',
      currentLangData
    });
    return (
      <section id="rules" className="py-24 bg-gradient-to-b from-gray-100 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2c5461]">
            Wakethieving Rules
          </h2>
          <p className="mt-4 text-xl text-[#407d97] max-w-3xl mx-auto">
            Language data error. Please check console for details.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="rules" className="py-24 bg-gradient-to-b from-gray-100 to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2c5461] mb-6">
            {currentLangData.content.title}
          </h2>
          <p className="text-xl text-[#407d97] max-w-3xl mx-auto">
            {currentLangData.content.subtitle}
          </p>
        </div>

        {/* Dynamic Rules Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {currentLangData.rules.map((rule) => (
            <DynamicRuleCard key={rule.id} rule={rule} icons={rulesData.icons} />
          ))}
        </div>

        {/* Footer Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-16"
        >
          <p className="text-lg font-medium text-[#407d97]">
            {currentLangData.ui.footer.message}
          </p>
          
          {/* API Source Info */}
          <p className="text-sm text-gray-400 mt-6">
            <a 
              href="https://github.com/pfederi/wakethievingrules"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#59a8c7] hover:text-[#407d97] underline underline-offset-2 font-medium"
            >
              {currentLangData.ui.apiSource}
            </a>
            {' '}• Version {rulesData.api.version} • Last updated: {new Date(rulesData.api.lastUpdated).toLocaleDateString()}
            {' '}• License: {rulesData.api.license}
          </p>
        </motion.div>
      </div>
    </section>
  )
}