// src/app/projects/page.tsx
import projects from '../../../data/projects'
import ProjectCard from '../../../components/ProjectCard'

export default function ProjectsPage() {
  return (
    <main className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-6">All Projects</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard
            key={p.slug}
            title={p.title}
            description={p.description}
            href={p.href ?? `/projects/${p.slug}`}
            image={p.image}
            techs={p.techs}
          />
        ))}
      </div>
    </main>
  )
}
