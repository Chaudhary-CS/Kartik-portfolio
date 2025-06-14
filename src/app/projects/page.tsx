// src/app/projects/page.tsx
'use client';

import {motion, Variants} from 'framer-motion'
import projects from '../../../data/projects'
import ProjectCard from '../../../components/ProjectCard'
import ContactIcons from '../../../components/ContactIcons'

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen flex flex-col text-white">
      {/* Dark overlay */}
      <div className="fixed inset-0 bg-black/50"/>
      
      <div className="relative z-10 flex-1 max-w-4xl mx-auto py-8 sm:py-12 px-4">
        <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl text-center font-bold mb-8 sm:mb-12 underline decoration-teal-400"
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            variants={cardVariants}
            transition={{duration: 0.6}}
          >
            Projects
          </motion.h1>
        
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.div
              key={p.slug}
              initial="hidden"
              whileInView="visible"
              viewport={{once: true, amount: 0.3}}
              variants={cardVariants}
              transition={{delay: i * 0.1, duration: 0.5}}
              className="
                group relative rounded-xl overflow-hidden cursor-pointer 
                shadow-[0_0_10px_rgba(20,184,166,0.3)] 
                hover:shadow-[0_0_20px_rgba(20,184,166,0.6)]
                border border-white hover:border-teal-400
                transition-all duration-300
              "
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
      
      <ContactIcons />
    </main>
  )
}
