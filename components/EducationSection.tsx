import { SiteSettings } from '@/types'
import { FiBook } from 'react-icons/fi'

interface EducationSectionProps {
  settings: SiteSettings
}

export default function EducationSection({ settings }: EducationSectionProps) {
  const { education } = settings.metadata
  
  if (!education) {
    return null
  }
  
  return (
    <section id="education" className="section-container bg-gray-50 dark:bg-gray-800/50">
      <div className="text-center mb-12">
        <h2 className="section-title">Education</h2>
        <p className="section-subtitle">Academic background</p>
      </div>
      
      <div className="max-w-2xl mx-auto">
        <div className="card p-8">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-primary/10 rounded-lg">
              <FiBook className="w-8 h-8 text-primary" />
            </div>
            
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {education.degree}
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-1">
                {education.university}
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                {education.location}
              </p>
              
              <div className="flex flex-wrap gap-4 mt-4 text-sm">
                <div>
                  <span className="text-gray-600 dark:text-gray-400">Expected Graduation:</span>
                  <span className="ml-2 font-medium text-gray-900 dark:text-white">
                    {education.graduationYear}
                  </span>
                </div>
                
                {education.gpa && (
                  <div>
                    <span className="text-gray-600 dark:text-gray-400">GPA:</span>
                    <span className="ml-2 font-medium text-gray-900 dark:text-white">
                      {education.gpa}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}