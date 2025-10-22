'use client'

import { useEffect } from 'react'
import { Project } from '@/types'
import { FiX, FiGithub, FiExternalLink } from 'react-icons/fi'

interface ProjectModalProps {
  project: Project
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const {
    project_name,
    detailed_description,
    short_description,
    featured_image,
    project_gallery,
    technologies,
    github_link,
    live_demo_link,
    project_category
  } = project.metadata
  
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])
  
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-6 flex items-center justify-between z-10">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              {project_name}
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              {project_category.value}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <FiX className="w-6 h-6 text-gray-600 dark:text-gray-400" />
          </button>
        </div>
        
        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Main Image */}
          <img
            src={`${featured_image.imgix_url}?w=1600&h=900&fit=crop&auto=format,compress`}
            alt={project_name}
            width="800"
            height="450"
            className="w-full h-auto rounded-lg"
          />
          
          {/* Description */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            {detailed_description ? (
              <div dangerouslySetInnerHTML={{ __html: detailed_description }} />
            ) : (
              <p>{short_description}</p>
            )}
          </div>
          
          {/* Gallery */}
          {project_gallery && project_gallery.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Project Gallery
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {project_gallery.map((image, idx) => (
                  <img
                    key={idx}
                    src={`${image.imgix_url}?w=800&h=600&fit=crop&auto=format,compress`}
                    alt={`${project_name} screenshot ${idx + 1}`}
                    width="400"
                    height="300"
                    className="w-full h-auto rounded-lg"
                  />
                ))}
              </div>
            </div>
          )}
          
          {/* Technologies */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-lg text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          {/* Links */}
          <div className="flex flex-wrap gap-4 pt-4">
            {github_link && (
              <a
                href={github_link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <FiGithub />
                View Code
              </a>
            )}
            
            {live_demo_link && (
              <a
                href={live_demo_link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <FiExternalLink />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}