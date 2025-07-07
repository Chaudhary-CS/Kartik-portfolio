'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Skill } from '../../../../data/skills'
import ContactIcons from '../../../../components/ContactIcons'
import ProjectCard from '../../../../components/ProjectCard'
import SkillIcon from '../../../../components/SkillIcon'

interface SkillPageClientProps {
  skill: Skill
  relatedProjects: Array<{
    slug: string
    title: string
    description: string
    href?: string
    image?: string
    techs?: string[]
    github?: string
    liveDemo?: string
    date?: string
  }>
}

export default function SkillPageClient({ skill, relatedProjects }: SkillPageClientProps) {


  const getProficiencyColor = (proficiency: string) => {
    switch (proficiency) {
      case 'Expert': return 'text-emerald-400 bg-emerald-400/20 border-emerald-400/30'
      case 'Advanced': return 'text-blue-400 bg-blue-400/20 border-blue-400/30'
      case 'Intermediate': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30'
      case 'Beginner': return 'text-gray-400 bg-gray-400/20 border-gray-400/30'
      default: return 'text-gray-400 bg-gray-400/20 border-gray-400/30'
    }
  }

  const getProficiencyDescription = (proficiency: string) => {
    switch (proficiency) {
      case 'Expert': return 'Deep expertise with ability to architect complex solutions and mentor others'
      case 'Advanced': return 'Proficient with extensive hands-on experience in production environments'
      case 'Intermediate': return 'Solid understanding with practical experience in multiple projects'
      case 'Beginner': return 'Foundational knowledge with some practical application'
      default: return ''
    }
  }

  return (
    <main className="relative min-h-screen flex flex-col text-white">
      <div className="relative z-10 flex-1 max-w-4xl mx-auto py-8 sm:py-12 px-2 sm:px-4">
        {/* Back Button + Header Section */}
        <motion.div
          className="mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          {/* Back Button */}
          <div className="mb-6">
            <Link 
              href="/skills/"
              className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Skills
            </Link>
          </div>
          
          <div className="flex items-center gap-4 mb-4">
            <SkillIcon 
              iconName={skill.icon}
              color={skill.color}
              size={32}
            />
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
              {skill.name}
            </h1>
          </div>
          
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className={`px-4 py-2 rounded-full text-sm font-medium border ${getProficiencyColor(skill.proficiency)}`}>
              {skill.proficiency}
            </span>
            <span className="text-gray-400">
              {skill.experience}
            </span>
            <span className="px-3 py-1 bg-gray-800/60 text-sm text-gray-300 rounded-full">
              {skill.category}
            </span>
            {skill.internshipDetails && skill.internshipDetails.length > 0 && (
              <span className="px-3 py-1 bg-teal-900/40 text-sm text-teal-300 rounded-full border border-teal-400/30">
                {skill.internshipDetails.length} internship{skill.internshipDetails.length !== 1 ? 's' : ''}
              </span>
            )}
            {skill.jobDetails && skill.jobDetails.length > 0 && (
              <span className="px-3 py-1 bg-green-900/40 text-sm text-green-300 rounded-full border border-green-400/30">
                {skill.jobDetails.length} job{skill.jobDetails.length !== 1 ? 's' : ''}
              </span>
            )}
            {skill.projects && skill.projects.length > 0 && (
                <span className="px-3 py-1 bg-blue-900/40 text-sm text-blue-300 rounded-full border border-blue-400/30">
                    {skill.projects.length} project{skill.projects.length !== 1 ? 's' : ''}
                </span>
            )}
          </div>

          {/* Description */}
          <p className="text-gray-400 text-sm max-w-2xl">
            {getProficiencyDescription(skill.proficiency)}
          </p>
        </motion.div>

        {/* Main Description */}
        <motion.div
          className="mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <div className="bg-gray-900/70 rounded-xl p-6 sm:p-8 border border-gray-700">
            <h2 className="text-2xl font-semibold mb-4 text-teal-400">
              My Experience
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              {skill.description}
            </p>

            {/* Experience Details */}
            <div className="space-y-4">
              {skill.internshipDetails && skill.internshipDetails.length > 0 && (
                <div>
                  <h3 className="text-sm font-semibold text-teal-300 mb-2">Internships</h3>
                  <div className="flex flex-wrap gap-2">
                    {skill.internshipDetails.map((internship, index) => (
                      <span key={index} className="px-3 py-1 bg-teal-900/40 text-sm text-teal-200 rounded-full border border-teal-400/30">
                        {internship}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {skill.jobDetails && skill.jobDetails.length > 0 && (
                <div>
                  <h3 className="text-sm font-semibold text-green-300 mb-2">Jobs</h3>
                  <div className="flex flex-wrap gap-2">
                    {skill.jobDetails.map((job, index) => (
                      <span key={index} className="px-3 py-1 bg-green-900/40 text-sm text-green-200 rounded-full border border-green-400/30">
                        {job}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>



        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <motion.div
            className="mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.8 }}
          >
            <h2 className="text-3xl font-semibold mb-8 text-center underline decoration-teal-400">
              Projects Using {skill.name}
            </h2>
            
            <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
              {relatedProjects.map((project) => (
                <div
                  key={project.slug}
                  className="group relative rounded-xl overflow-hidden cursor-pointer
                           shadow-[0_0_10px_rgba(20,184,166,0.3)] hover:shadow-[0_0_20px_rgba(20,184,166,0.6)]
                           border border-white hover:border-teal-400 transition-all duration-300"
                >
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    href={project.href ?? `/projects/${project.slug}/`}
                    image={project.image}
                    techs={project.techs}
                    github={project.github}
                    liveDemo={project.liveDemo}
                    date={project.date}
                  />
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Stats */}
        <motion.div
          className="mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 1.0 }}
        >
          <div className="flex flex-wrap gap-4 sm:gap-6 justify-center">
            <div className="bg-gray-900/70 rounded-xl p-4 sm:p-6 border border-gray-700 min-w-[140px] flex-1 max-w-[200px] flex flex-col justify-center items-center">
              <div className="text-2xl sm:text-3xl font-bold text-teal-400 mb-2 text-center">
                {skill.experience}
              </div>
              <div className="text-gray-400 text-sm text-center">Experience</div>
            </div>
            
            <div className="bg-gray-900/70 rounded-xl p-4 sm:p-6 border border-gray-700 min-w-[140px] flex-1 max-w-[200px] flex flex-col justify-center items-center">
              <div className="text-2xl sm:text-3xl font-bold text-teal-400 mb-2 text-center">
                {skill.projects.length}
              </div>
              <div className="text-gray-400 text-sm text-center">Projects</div>
            </div>

            {skill.internshipDetails && skill.internshipDetails.length > 0 && (
              <div className="bg-gray-900/70 rounded-xl p-4 sm:p-6 border border-gray-700 min-w-[140px] flex-1 max-w-[200px] flex flex-col justify-center items-center">
                <div className="text-2xl sm:text-3xl font-bold text-teal-400 mb-2 text-center">
                  {skill.internshipDetails.length}
                </div>
                <div className="text-gray-400 text-sm text-center">Internships</div>
              </div>
            )}

            {skill.jobDetails && skill.jobDetails.length > 0 && (
              <div className="bg-gray-900/70 rounded-xl p-4 sm:p-6 border border-gray-700 min-w-[140px] flex-1 max-w-[200px] flex flex-col justify-center items-center">
                <div className="text-2xl sm:text-3xl font-bold text-green-400 mb-2 text-center">
                  {skill.jobDetails.length}
                </div>
                <div className="text-gray-400 text-sm text-center">Jobs</div>
              </div>
            )}
            
            <div className="text-center bg-gray-900/70 rounded-xl p-4 sm:p-6 border border-gray-700 min-w-[140px] flex-1 max-w-[200px] flex flex-col justify-center items-center">
              <div className="text-2xl sm:text-3xl font-bold text-teal-400 mb-2 break-words text-center">
                {skill.proficiency}
              </div>
              <div className="text-gray-400 text-sm whitespace-nowrap text-center">Proficiency</div>
            </div>
          </div>
        </motion.div>

      </div>
      
      <ContactIcons />
    </main>
  )
}