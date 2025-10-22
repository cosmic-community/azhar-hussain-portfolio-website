import { Certification } from '@/types'
import { FiAward, FiExternalLink } from 'react-icons/fi'

interface CertificationsSectionProps {
  certifications: Certification[]
}

export default function CertificationsSection({ certifications }: CertificationsSectionProps) {
  if (!certifications || certifications.length === 0) {
    return null
  }
  
  return (
    <section id="certifications" className="section-container">
      <div className="text-center mb-12">
        <h2 className="section-title">Certifications & Achievements</h2>
        <p className="section-subtitle">Professional development and learning</p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {certifications.map((cert, index) => {
          const {
            certificate_name,
            issuing_organization,
            issue_date,
            credential_id,
            certificate_image,
            verification_link
          } = cert.metadata
          
          const formattedDate = new Date(issue_date).toLocaleDateString('en-US', {
            month: 'long',
            year: 'numeric'
          })
          
          return (
            <div
              key={cert.id}
              className="card overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {certificate_image && (
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={`${certificate_image.imgix_url}?w=800&h=600&fit=crop&auto=format,compress`}
                    alt={certificate_name}
                    width="400"
                    height="240"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              
              <div className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <FiAward className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                      {certificate_name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {issuing_organization}
                    </p>
                  </div>
                </div>
                
                <div className="space-y-2 text-sm">
                  <p className="text-gray-600 dark:text-gray-400">
                    Issued: {formattedDate}
                  </p>
                  
                  {credential_id && (
                    <p className="text-gray-600 dark:text-gray-400">
                      Credential ID: {credential_id}
                    </p>
                  )}
                </div>
                
                {verification_link && (
                  <a
                    href={verification_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors font-medium"
                  >
                    Verify Certificate
                    <FiExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}