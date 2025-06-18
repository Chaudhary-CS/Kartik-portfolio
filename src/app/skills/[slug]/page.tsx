import { notFound } from 'next/navigation'
import { getSkillBySlug, skills } from '../../../../data/skills'
import projects from '../../../../data/projects'
import SkillPageClient from './SkillPageClient'

// Generate static params for all skills
export async function generateStaticParams() {
  return skills.map((skill) => ({
    slug: skill.slug,
  }))
}

interface SkillPageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function SkillPage({ params }: SkillPageProps) {
  const { slug } = await params
  const skill = getSkillBySlug(slug)
  
  if (!skill) {
    notFound()
  }

  // Get related projects
  const relatedProjects = projects.filter(project => 
    skill.projects.includes(project.slug)
  )

  return <SkillPageClient skill={skill} relatedProjects={relatedProjects} />
} 