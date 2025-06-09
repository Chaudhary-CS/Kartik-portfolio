// components/ProjectCard.tsx
import Link from 'next/link'
import Image from 'next/image'

export interface ProjectCardProps {
  title: string
  description: string
  href: string        // where the card links to (could be external or `/projects/[slug]`)
  image?: string      // optional: path to a thumbnail in /public
  techs?: string[]    // optional list of tech-stack badges
}

export default function ProjectCard({
  title,
  description,
  href,
  image,
  techs = [],
}: ProjectCardProps) {
  return (
    <Link
      href={href}
      className="group block border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
    >
      {image && (
        <div className="relative h-48 w-full">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-700 mb-4">{description}</p>
        {techs.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {techs.map((tech) => (
              <span
                key={tech}
                className="bg-gray-100 text-gray-800 text-xs font-medium px-2 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  )
}
