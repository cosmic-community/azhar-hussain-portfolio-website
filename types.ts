// Base Cosmic object interface
export interface CosmicObject {
  id: string
  slug: string
  title: string
  content?: string
  metadata: Record<string, any>
  type: string
  created_at: string
  modified_at: string
}

// Site Settings (Singleton)
export interface SiteSettings extends CosmicObject {
  type: 'site-settings'
  metadata: {
    full_name: string
    tagline: string
    profile_photo?: {
      url: string
      imgix_url: string
    }
    about_me: string
    skills: Skill[]
    education: Education
    resume_file?: {
      url: string
      imgix_url: string
    } | null
    email: string
    phone?: string
    linkedin_url?: string
    github_url?: string
    twitter_url?: string
    dark_mode_enabled?: boolean
    theme_color?: string
  }
}

// Skill interface
export interface Skill {
  name: string
  proficiency: number
  icon: string
}

// Education interface
export interface Education {
  degree: string
  university: string
  graduationYear: string
  location: string
  gpa?: string
}

// Project interface
export interface Project extends CosmicObject {
  type: 'projects'
  metadata: {
    project_name: string
    short_description: string
    detailed_description?: string
    featured_image: {
      url: string
      imgix_url: string
    }
    project_gallery?: Array<{
      url: string
      imgix_url: string
    }>
    technologies: string[]
    github_link?: string
    live_demo_link?: string | null
    project_category: {
      key: string
      value: string
    }
    featured: boolean
  }
}

// Certification interface
export interface Certification extends CosmicObject {
  type: 'certifications'
  metadata: {
    certificate_name: string
    issuing_organization: string
    issue_date: string
    credential_id?: string
    certificate_image?: {
      url: string
      imgix_url: string
    }
    verification_link?: string
  }
}

// API response types
export interface CosmicResponse<T> {
  objects: T[]
  total: number
  limit: number
  skip: number
}

// Type guard functions
export function isSiteSettings(obj: CosmicObject): obj is SiteSettings {
  return obj.type === 'site-settings'
}

export function isProject(obj: CosmicObject): obj is Project {
  return obj.type === 'projects'
}

export function isCertification(obj: CosmicObject): obj is Certification {
  return obj.type === 'certifications'
}