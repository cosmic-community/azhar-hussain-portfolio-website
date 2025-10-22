import { SiteSettings } from '@/types'
import { FiDownload, FiArrowDown } from 'react-icons/fi'

interface HeroSectionProps {
  settings: SiteSettings
}

export default function HeroSection({ settings }: HeroSectionProps) {
  const { full_name, tagline, profile_photo, resume_file } = settings.metadata
  
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-2">
              <p className="text-lg text-gray-600 dark:text-gray-400 font-medium">
                👋 Hi, I'm
              </p>
              <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white">
                {full_name}
              </h1>
              <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300">
                {tagline}
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="btn-primary"
              >
                View My Projects
                <FiArrowDown />
              </a>
              
              {resume_file && (
                <a
                  href={resume_file.url}
                  download
                  className="btn-secondary"
                >
                  Download Resume
                  <FiDownload />
                </a>
              )}
            </div>
          </div>
          
          {/* Profile Image */}
          {profile_photo && (
            <div className="flex justify-center md:justify-end animate-scale-in">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl"></div>
                <img
                  src={`${profile_photo.imgix_url}?w=800&h=800&fit=crop&auto=format,compress`}
                  alt={full_name}
                  width="400"
                  height="400"
                  className="relative rounded-full shadow-2xl w-64 h-64 sm:w-80 sm:h-80 object-cover border-4 border-white dark:border-gray-800"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}