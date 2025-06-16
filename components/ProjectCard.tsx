// components/ProjectCard.tsx
'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

export interface ProjectCardProps {
  title: string
  description: string
  href: string        // where the card links to (could be external or `/projects/[slug]`)
  image?: string      // optional: path to a thumbnail in /public
  techs?: string[]    // optional list of tech-stack badges
  github?: string     // optional GitHub link
  liveDemo?: string   // optional live demo link
  date?: string       // optional project date
}

export default function ProjectCard({
  title,
  description,
  href,
  image,
  techs = [],
  github,
  liveDemo,
  date,
}: ProjectCardProps) {
  const router = useRouter()
  
  return (
    <div className="block h-full w-full flex flex-col group">
      {/* Main project content with hover effect */}
      <Link
        href={href}
        className="flex flex-col flex-1 transition-transform group-hover:scale-[1.02] relative z-10"
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
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-semibold group-hover:text-teal-400 transition-colors flex-1">
                {title}
              </h3>
              {date && (
                <span className="text-xs text-gray-400 ml-2 whitespace-nowrap">
                  {date}
                </span>
              )}
            </div>
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
      
      {/* External Links - separate from hover effect */}
      {(github || liveDemo) && (
        <div className="relative z-20 p-4 pt-0 bg-gray-900/70 flex gap-4 border-t border-gray-700/50">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-300 hover:text-teal-400 transition-colors py-1 px-2 hover:bg-gray-800/50 rounded"
            >
              <FaGithub className="text-lg" />
              View Code
            </a>
          )}
          {liveDemo && (
            <a
              href={liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-300 hover:text-teal-400 transition-colors py-1 px-2 hover:bg-gray-800/50 rounded"
            >
              <FaExternalLinkAlt className="text-sm" />
              Live Demo
            </a>
          )}
        </div>
      )}
    </div>
  )
}
