'use client'

import { useState } from 'react'
import { Project } from '@/types'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'

interface ProjectsSectionProps {
  projects: Project[]
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  
  if (!projects || projects.length === 0) {
    return (
      <section id="projects" className="section-container bg-gray-50 dark:bg-gray-800/50">
        <div className="text-center">
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">No projects available yet</p>
        </div>
      </section>
    )
  }
  
  return (
    <>
      <section id="projects" className="section-container bg-gray-50 dark:bg-gray-800/50">
        <div className="text-center mb-12">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Some of my recent work</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </section>
      
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  )
}