// src/app/projects/page.tsx
'use client';

import {motion} from 'framer-motion'
import projects from '../../../data/projects'
import ProjectCard from '../../../components/ProjectCard'

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen flex flex-col text-white">
      {/* Dark overlay */}
      <div className="fixed inset-0 bg-black/50"/>
      
      <div className="relative z-10 flex-1 max-w-4xl mx-auto py-12 px-4">
        <motion.h1
            className="text-5xl md:text-6xl text-center font-bold mb-12 underline"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Projects
          </motion.h1>
        
        <div className="grid gap-8 md:grid-cols-2 auto-rows-fr">
          {projects.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{delay: i * 0.1, duration: 0.5}}
              className="relative rounded-xl overflow-hidden cursor-pointer 
              shadow-[0_0_10px_rgba(20,184,166,0.3)] hover:shadow-[0_0_20px_rgba(20,184,166,0.6)]
              border border-transparent hover:border-teal-400
              transition-all duration-300"
            >
              <ProjectCard
                title={p.title}
                description={p.description}
                href={p.href ?? `/projects/${p.slug}`}
                image={p.image}
                techs={p.techs}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  )
}
