import { Project } from '@/types'
import { FiExternalLink, FiGithub } from 'react-icons/fi'

interface ProjectCardProps {
  project: Project
  index: number
  onClick: () => void
}

export default function ProjectCard({ project, index, onClick }: ProjectCardProps) {
  const { project_name, short_description, featured_image, technologies, featured } = project.metadata
  
  return (
    <div
      className="card overflow-hidden cursor-pointer group animate-fade-in"
      style={{ animationDelay: `${index * 0.1}s` }}
      onClick={onClick}
    >
      {/* Featured Badge */}
      {featured && (
        <div className="absolute top-4 right-4 z-10 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
          Featured
        </div>
      )}
      
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={`${featured_image.imgix_url}?w=800&h=600&fit=crop&auto=format,compress`}
          alt={project_name}
          width="400"
          height="240"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      {/* Content */}
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-primary transition-colors">
          {project_name}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3">
          {short_description}
        </p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {technologies.slice(0, 3).map((tech, idx) => (
            <span
              key={idx}
              className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
          {technologies.length > 3 && (
            <span className="text-xs text-gray-500 dark:text-gray-400 px-2 py-1">
              +{technologies.length - 3} more
            </span>
          )}
        </div>
        
        <div className="pt-2 text-primary font-medium text-sm flex items-center gap-1">
          View Details
          <FiExternalLink className="w-4 h-4" />
        </div>
      </div>
    </div>
  )
}