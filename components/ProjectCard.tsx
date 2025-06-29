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

// Mapping function to convert project tech names to skill slugs
const getSkillSlug = (techName: string): string => {
  const techToSlugMap: { [key: string]: string } = {
    // Programming Languages
    'Python': 'python',
    'TypeScript': 'typescript',
    'JavaScript': 'javascript',
    'HTML/CSS': 'html-css',
    'C++': 'c++',
    'Java': 'java',
    'Go': 'go',
    'Rust': 'rust',
    'R': 'r',
    'C': 'c',
    'C#': 'c-sharp',
    
    // Frameworks & Libraries
    'React': 'react',
    'Next.js': 'next.js',
    'Node.js': 'node.js',
    'Express.js': 'express.js',
    'Flask': 'flask',
    'FastAPI': 'fastapi',
    'SQLAlchemy': 'sqlalchemy',
    'Tailwind CSS': 'tailwind-css',
    'TensorFlow': 'tensorflow',
    'PyTorch': 'pytorch',
    'Electron': 'electron',
    'Vite': 'vite',
    'PostCSS': 'postcss',
    'Axios': 'axios',
    'Lucide React': 'lucide-react',
    'Radix UI': 'radix-ui',
    'Dash': 'dash',
    'Plotly': 'plotly',
    'Pandas': 'pandas',
    'NumPy': 'numpy',
    'Matplotlib': 'matplotlib',
    'Scikit-Learn': 'scikit-learn',
    'OpenCV': 'opencv',
    'yfinance': 'yfinance',
    
    // Databases
    'PostgreSQL': 'postgresql',
    'MySQL': 'mysql',
    'MongoDB': 'mongodb',
    'Redis': 'redis',
    'SQLite': 'sqlite',
    
    // Cloud & DevOps
    'Vercel': 'vercel',
    'Convex': 'convex',
    'Firebase': 'firebase',
    'AWS': 'aws',
    'Docker': 'docker',
    'Kubernetes': 'kubernetes',
    
    // Tools & Platforms
    'Auth0': 'auth0',
    'CARLA': 'carla',
    'Git': 'git',
    'GitHub': 'github',
    'VS Code': 'vs-code',
    'Linux': 'linux',
    'Excel': 'excel',
    'Tableau': 'tableau',
    'Power BI': 'power-bi',
    'Selenium': 'selenium',
    
    // AI/ML & Other Technologies
    'Socket Programming': 'sockets',
    'Socket': 'sockets',
    'TCP/IP': 'tcp-ip',
    'Multithreading': 'multithreading',
    'Prompt Engineering': 'prompt-engineering',
    'GPT Agent Creation': 'gpt-agent-creation',
    'Educational Technology': 'educational-technology',
    'LLM APIs': 'llm-apis',
    'PDF Processing': 'pdf-processing',
    'VBA': 'vba',
  }
  
  // Return mapped slug or create a fallback slug
  return techToSlugMap[techName] || encodeURIComponent(techName.toLowerCase().replace(/[^a-z0-9]+/g, '-'))
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
  
  const handleSkillClick = (e: React.MouseEvent, skillSlug: string) => {
    e.stopPropagation()
    e.preventDefault()
    router.push(`/skills/${skillSlug}`)
  }
  
  return (
    <div className="block h-full w-full flex flex-col group">
      {/* Main project content with hover effect */}
      <Link
        href={href}
        className="flex flex-col flex-1 transition-transform group-hover:scale-[1.02] relative z-10"
      >
        {image && (
          <div className="relative h-36 sm:h-48 w-full flex-shrink-0">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              priority={false}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            />
          </div>
        )}
        <div className="p-4 sm:p-6 flex flex-col flex-1 justify-between min-h-0 bg-gray-900/70">
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-1">
              <h3 className="text-lg sm:text-xl font-semibold group-hover:text-teal-400 transition-colors flex-1 leading-tight">
                {title}
              </h3>
              {date && (
                <span className="text-xs text-gray-400 sm:ml-2 whitespace-nowrap self-start">
                  {date}
                </span>
              )}
            </div>
            <p className="text-gray-100 text-sm sm:text-base mb-3 sm:mb-4 flex-1 line-clamp-3">{description}</p>
          </div>

          {techs.length > 0 && (
            <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-auto pt-2">
              {techs.map((tech) => {
                const skillSlug = getSkillSlug(tech)
                return (
                  <button
                    key={tech}
                    onClick={(e) => handleSkillClick(e, skillSlug)}
                    className={
                      "cursor-pointer bg-gray-700 text-white px-2 py-1 rounded-full text-xs sm:text-sm \
                      border border-white hover:border-teal-400 \
                      transition-colors duration-200 whitespace-nowrap"
                    }
                  >
                    {tech}
                  </button>
                )
              })}
            </div>
          )}
        </div>
      </Link>
      
      {/* External Links - separate from hover effect */}
      {(github || liveDemo) && (
        <div className="relative z-20 p-3 sm:p-4 pt-0 bg-gray-900/70 flex gap-2 sm:gap-4 border-t border-gray-700/50">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-300 hover:text-teal-400 transition-colors py-1 px-2 hover:bg-gray-800/50 rounded flex-1 justify-center"
            >
              <FaGithub className="text-sm sm:text-lg" />
              <span className="hidden sm:inline">View Code</span>
              <span className="sm:hidden">Code</span>
            </a>
          )}
          {liveDemo && (
            <a
              href={liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-300 hover:text-teal-400 transition-colors py-1 px-2 hover:bg-gray-800/50 rounded flex-1 justify-center"
            >
              <FaExternalLinkAlt className="text-xs sm:text-sm" />
              <span className="hidden sm:inline">Live Demo</span>
              <span className="sm:hidden">Demo</span>
            </a>
          )}
        </div>
      )}
    </div>
  )
}
