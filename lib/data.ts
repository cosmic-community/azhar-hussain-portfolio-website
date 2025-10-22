import { cosmic } from './cosmic'
import { SiteSettings, Project, Certification } from '@/types'

export async function getSiteSettings(): Promise<SiteSettings | null> {
  try {
    const { object } = await cosmic.objects
      .findOne({
        type: 'site-settings',
        slug: 'site-settings'
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(0)
    
    return object as SiteSettings
  } catch (error) {
    console.error('Error fetching site settings:', error)
    return null
  }
}

export async function getProjects(): Promise<Project[]> {
  try {
    const { objects } = await cosmic.objects
      .find({
        type: 'projects'
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(0)
    
    // Sort manually - featured first, then by creation date
    return (objects as Project[]).sort((a, b) => {
      if (a.metadata.featured && !b.metadata.featured) return -1
      if (!a.metadata.featured && b.metadata.featured) return 1
      return 0
    })
  } catch (error) {
    if (error && typeof error === 'object' && 'status' in error && error.status === 404) {
      return []
    }
    console.error('Error fetching projects:', error)
    throw new Error('Failed to fetch projects')
  }
}

export async function getCertifications(): Promise<Certification[]> {
  try {
    const { objects } = await cosmic.objects
      .find({
        type: 'certifications'
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(0)
    
    // Sort by issue date (newest first)
    return (objects as Certification[]).sort((a, b) => {
      const dateA = new Date(a.metadata.issue_date || '').getTime()
      const dateB = new Date(b.metadata.issue_date || '').getTime()
      return dateB - dateA
    })
  } catch (error) {
    if (error && typeof error === 'object' && 'status' in error && error.status === 404) {
      return []
    }
    console.error('Error fetching certifications:', error)
    throw new Error('Failed to fetch certifications')
  }
}