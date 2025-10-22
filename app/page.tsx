import { getSiteSettings, getProjects, getCertifications } from '@/lib/data'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import SkillsSection from '@/components/SkillsSection'
import ProjectsSection from '@/components/ProjectsSection'
import CertificationsSection from '@/components/CertificationsSection'
import EducationSection from '@/components/EducationSection'
import ContactSection from '@/components/ContactSection'

export default async function Home() {
  const settings = await getSiteSettings()
  const projects = await getProjects()
  const certifications = await getCertifications()
  
  if (!settings) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Loading portfolio content...
        </p>
      </div>
    )
  }
  
  return (
    <>
      <HeroSection settings={settings} />
      <AboutSection settings={settings} />
      <SkillsSection settings={settings} />
      <ProjectsSection projects={projects} />
      <CertificationsSection certifications={certifications} />
      <EducationSection settings={settings} />
      <ContactSection settings={settings} />
    </>
  )
}