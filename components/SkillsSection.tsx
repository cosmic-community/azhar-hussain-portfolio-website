'use client'

import { useState, useEffect } from 'react'
import { SiteSettings } from '@/types'
import { 
  SiFlutter, 
  SiFirebase, 
  SiPython, 
  SiHtml5, 
  SiGit, 
  SiFigma,
  SiReact
} from 'react-icons/si'

interface SkillsSectionProps {
  settings: SiteSettings
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  flutter: SiFlutter,
  firebase: SiFirebase,
  python: SiPython,
  web: SiHtml5,
  git: SiGit,
  design: SiFigma,
  ai: SiReact, // Using React icon as placeholder for AI
}

export default function SkillsSection({ settings }: SkillsSectionProps) {
  const { skills } = settings.metadata
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )
    
    const element = document.getElementById('skills')
    if (element) {
      observer.observe(element)
    }
    
    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])
  
  if (!skills || skills.length === 0) {
    return null
  }
  
  return (
    <section id="skills" className="section-container">
      <div className="text-center mb-12">
        <h2 className="section-title">Skills & Expertise</h2>
        <p className="section-subtitle">Technologies I work with</p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {skills.map((skill, index) => {
          const Icon = iconMap[skill.icon] || SiReact
          
          return (
            <div
              key={index}
              className="card p-6 space-y-4"
              style={{
                animationDelay: `${index * 0.1}s`,
                opacity: isVisible ? 1 : 0,
                animation: isVisible ? 'slideUp 0.6s ease-out forwards' : 'none'
              }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Icon className="w-6 h-6 text-primary" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {skill.name}
                  </h3>
                </div>
                <span className="text-sm font-medium text-primary">
                  {skill.proficiency}%
                </span>
              </div>
              
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-primary h-full rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: isVisible ? `${skill.proficiency}%` : '0%'
                  }}
                />
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}