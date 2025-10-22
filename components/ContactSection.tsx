import { SiteSettings } from '@/types'
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'

interface ContactSectionProps {
  settings: SiteSettings
}

export default function ContactSection({ settings }: ContactSectionProps) {
  const { email, phone, linkedin_url, github_url, twitter_url } = settings.metadata
  
  return (
    <section id="contact" className="section-container">
      <div className="text-center mb-12">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Let's collaborate on something amazing</p>
      </div>
      
      <div className="max-w-2xl mx-auto">
        <div className="card p-8 space-y-6">
          <p className="text-center text-lg text-gray-700 dark:text-gray-300">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          
          <div className="space-y-4">
            {/* Email */}
            <a
              href={`mailto:${email}`}
              className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
            >
              <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                <FiMail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Email</p>
                <p className="font-medium text-gray-900 dark:text-white">{email}</p>
              </div>
            </a>
            
            {/* Phone */}
            {phone && (
              <a
                href={`tel:${phone}`}
                className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
              >
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <FiPhone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Phone</p>
                  <p className="font-medium text-gray-900 dark:text-white">{phone}</p>
                </div>
              </a>
            )}
          </div>
          
          {/* Social Links */}
          <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
            <p className="text-center text-sm text-gray-600 dark:text-gray-400 mb-4">
              Connect with me on social media
            </p>
            <div className="flex justify-center gap-4">
              {github_url && (
                <a
                  href={github_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-primary hover:text-white transition-all"
                  aria-label="GitHub"
                >
                  <FiGithub className="w-6 h-6" />
                </a>
              )}
              
              {linkedin_url && (
                <a
                  href={linkedin_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-primary hover:text-white transition-all"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin className="w-6 h-6" />
                </a>
              )}
              
              {twitter_url && (
                <a
                  href={twitter_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-primary hover:text-white transition-all"
                  aria-label="Twitter"
                >
                  <FiTwitter className="w-6 h-6" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}