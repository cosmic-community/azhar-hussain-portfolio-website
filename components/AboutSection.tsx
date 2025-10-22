import { SiteSettings } from '@/types'

interface AboutSectionProps {
  settings: SiteSettings
}

export default function AboutSection({ settings }: AboutSectionProps) {
  const { about_me } = settings.metadata
  
  return (
    <section id="about" className="section-container bg-gray-50 dark:bg-gray-800/50">
      <div className="text-center mb-12">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">Get to know me better</p>
      </div>
      
      <div className="max-w-3xl mx-auto">
        <div 
          className="prose prose-lg dark:prose-invert mx-auto text-gray-700 dark:text-gray-300"
          dangerouslySetInnerHTML={{ __html: about_me }}
        />
      </div>
    </section>
  )
}