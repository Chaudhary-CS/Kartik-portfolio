import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import ProjectPageClient from './ProjectPageClient'
import projects from '../../../../data/projects'

interface ProjectPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  
  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }

  return {
    title: `${project.title} | Kartik Chaudhary`,
    description: project.description,
    openGraph: {
      title: `${project.title} | Kartik Chaudhary`,
      description: project.description,
      url: `https://kartikchaudhary.com/projects/${project.slug}`,
      siteName: "Kartik Chaudhary Portfolio",
      images: [
        {
          url: project.image || "/images/kartik.jpg",
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
      locale: "en_US",
    },
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    notFound()
  }

  return <ProjectPageClient project={project} />
}