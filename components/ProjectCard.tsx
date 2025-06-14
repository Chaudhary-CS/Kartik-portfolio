// components/ProjectCard.tsx
'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

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
  const router = useRouter()
  
  return (
    <Link
      href={href}
      className="block h-full w-full flex flex-col transition-transform group-hover:scale-[1.02]"
    >
      {image && (
        <div className="relative h-48 w-full flex-shrink-0">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
      )}
      <div className="p-6 flex flex-col flex-1 justify-between min-h-0 bg-gray-900/70">
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-2 group-hover:text-teal-400 transition-colors">
            {title}
          </h3>
          <p className="text-gray-100 mb-4 flex-1">{description}</p>
        </div>

        {techs.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-auto pt-2">
            {techs.map((tech) => {
              const slug = encodeURIComponent(tech.toLowerCase())
              return (
                <span
                  key={tech}
                  onClick={(e) => {
                    e.stopPropagation()
                    router.push(`/skills/${slug}`)
                  }}
                  className={
                    "cursor-pointer bg-gray-700 text-white px-2 py-1 rounded-full text-sm \
                    border border-white hover:border-teal-400 \
                    transition-colors duration-200"
                  }
                >
                  {tech}
                </span>
              )
            })}
          </div>
        )}
      </div>
    </Link>
  )
}
