// src/app/projects/page.tsx
'use client';

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import projects from '../../../data/projects'
import ProjectCard from '../../../components/ProjectCard'
import ContactIcons from '../../../components/ContactIcons'

export default function ProjectsPage() {
  const [isMobile, setIsMobile] = useState(false)
  
  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Calculate project statistics
  const totalProjects = projects.length
  const featuredProjects = projects.filter(p => p.featured).length
  const uniqueTechs = [...new Set(projects.flatMap(p => p.techs || []))].length

  return (
    <main className="relative min-h-screen flex flex-col text-white">
      <div className="relative z-10 flex-1 max-w-4xl mx-auto py-8 sm:py-12 px-4">
        <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl text-center font-bold mb-8 sm:mb-12 underline decoration-teal-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{duration: 0.4, delay: 0.2}}
          >
            Projects
          </motion.h1>

        {/* Project Summary */}
        <motion.div 
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <p className="text-lg text-gray-300 mb-4">
            A collection of {totalProjects} projects showcasing my skills in software development, 
            AI/ML, and full-stack web applications.
          </p>
          <div className="flex justify-center gap-8 text-sm text-gray-400">
            <span>{totalProjects} Total Projects</span>
            <span>{featuredProjects} Featured</span>
            <span>{uniqueTechs}+ Technologies</span>
          </div>
        </motion.div>
        
        <motion.div 
          className={isMobile 
            ? "flex flex-col items-center gap-6" 
            : "grid gap-6 sm:gap-8 md:grid-cols-2"
          }
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.6 }}
        >
          {projects.map((p) => (
            <div
              key={p.slug}
              className={`
                group relative rounded-xl overflow-hidden cursor-pointer 
                shadow-[0_0_10px_rgba(20,184,166,0.3)] 
                hover:shadow-[0_0_20px_rgba(20,184,166,0.6)]
                border border-white hover:border-teal-400
                transition-all duration-300
                ${isMobile 
                  ? 'w-[calc(100vw-2rem)] max-w-[350px]' 
                  : ''
                }
              `}
            >
              <ProjectCard
                title={p.title}
                description={p.description}
                href={p.href ?? `/projects/${p.slug}`}
                image={p.image}
                techs={p.techs}
                github={p.github}
                liveDemo={p.liveDemo}
                date={p.date}
              />
            </div>
          ))}
        </motion.div>
      </div>
      
      <ContactIcons />
    </main>
  )
}
