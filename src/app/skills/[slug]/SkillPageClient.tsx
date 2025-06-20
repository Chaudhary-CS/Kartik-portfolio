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
        
        {/* Back Button */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link 
            href="/skills"
            className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Skills
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          className="mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
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
              {skill.experience} experience
            </span>
            <span className="px-3 py-1 bg-gray-800/60 text-sm text-gray-300 rounded-full">
              {skill.category}
            </span>
            {skill.internships && skill.internships > 0 && (
              <span className="px-3 py-1 bg-teal-900/40 text-sm text-teal-300 rounded-full border border-teal-400/30">
                {skill.internships} internship{skill.internships !== 1 ? 's' : ''}
              </span>
            )}
            {skill.jobs && skill.jobs > 0 && (
              <span className="px-3 py-1 bg-green-900/40 text-sm text-green-300 rounded-full border border-green-400/30">
                {skill.jobs} job{skill.jobs !== 1 ? 's' : ''}
              </span>
            )}
            {skill.researchRoles && skill.researchRoles > 0 && (
              <span className="px-3 py-1 bg-indigo-900/40 text-sm text-indigo-300 rounded-full border border-indigo-400/30">
                {skill.researchRoles} research role{skill.researchRoles !== 1 ? 's' : ''}
              </span>
            )}
            {skill.teachingRoles && skill.teachingRoles > 0 && (
              <span className="px-3 py-1 bg-amber-900/40 text-sm text-amber-300 rounded-full border border-amber-400/30">
                {skill.teachingRoles} teaching role{skill.teachingRoles !== 1 ? 's' : ''}
              </span>
            )}
            {skill.certifications && skill.certifications > 0 && (
              <span className="px-3 py-1 bg-blue-900/40 text-sm text-blue-300 rounded-full border border-blue-400/30">
                {skill.certifications} certification{skill.certifications !== 1 ? 's' : ''}
              </span>
            )}
            {skill.publications && skill.publications > 0 && (
              <span className="px-3 py-1 bg-purple-900/40 text-sm text-purple-300 rounded-full border border-purple-400/30">
                {skill.publications} publication{skill.publications !== 1 ? 's' : ''}
              </span>
            )}
          </div>

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

              {skill.researchDetails && skill.researchDetails.length > 0 && (
                <div>
                  <h3 className="text-sm font-semibold text-indigo-300 mb-2">Research Roles</h3>
                  <div className="flex flex-wrap gap-2">
                    {skill.researchDetails.map((research, index) => (
                      <span key={index} className="px-3 py-1 bg-indigo-900/40 text-sm text-indigo-200 rounded-full border border-indigo-400/30">
                        {research}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {skill.teachingDetails && skill.teachingDetails.length > 0 && (
                <div>
                  <h3 className="text-sm font-semibold text-amber-300 mb-2">Teaching Roles</h3>
                  <div className="flex flex-wrap gap-2">
                    {skill.teachingDetails.map((teaching, index) => (
                      <span key={index} className="px-3 py-1 bg-amber-900/40 text-sm text-amber-200 rounded-full border border-amber-400/30">
                        {teaching}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {skill.certificationDetails && skill.certificationDetails.length > 0 && (
                <div>
                  <h3 className="text-sm font-semibold text-blue-300 mb-2">Certifications</h3>
                  <div className="flex flex-wrap gap-2">
                    {skill.certificationDetails.map((cert, index) => (
                      <span key={index} className="px-3 py-1 bg-blue-900/40 text-sm text-blue-200 rounded-full border border-blue-400/30">
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {skill.publicationDetails && skill.publicationDetails.length > 0 && (
                <div>
                  <h3 className="text-sm font-semibold text-purple-300 mb-2">Publications</h3>
                  <div className="flex flex-wrap gap-2">
                    {skill.publicationDetails.map((pub, index) => (
                      <span key={index} className="px-3 py-1 bg-purple-900/40 text-sm text-purple-200 rounded-full border border-purple-400/30">
                        {pub}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Technical Deep Dive */}
        {skill.technicalDeepDive && (
          <motion.div
            className="mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
          >
            <div className="bg-gray-900/70 rounded-xl p-6 sm:p-8 border border-gray-700">
              <h2 className="text-2xl font-semibold mb-6 text-teal-400">
                Technical Deep Dive
              </h2>
              <div className="prose prose-invert max-w-none">
                <div 
                  className="text-gray-300 leading-relaxed space-y-4"
                  dangerouslySetInnerHTML={{ 
                    __html: skill.technicalDeepDive
                      // First, handle bold sections (headings)
                      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
                      // Handle italic sections
                      .replace(/\*(.*?)\*/g, '<em class="text-teal-300 font-medium">$1</em>')
                      // Split into paragraphs and handle each section
                      .split('\n\n')
                      .map(section => {
                        // Handle bullet points within sections
                        if (section.includes('- ')) {
                          const lines = section.split('\n');
                          const processedLines = lines.map(line => {
                            if (line.startsWith('- **') && line.includes('**:')) {
                              // Handle bullet points with bold labels
                              return line.replace(/^- \*\*(.*?)\*\*:(.*)/, '<div class="ml-4 mb-2">• <strong class="text-teal-400">$1:</strong>$2</div>');
                            } else if (line.startsWith('- ')) {
                              // Handle regular bullet points
                              return line.replace(/^- (.*)/, '<div class="ml-4 mb-2">• $1</div>');
                            } else {
                              // Handle section headers or regular text
                              return line.includes('**') ? `<div class="mb-3 font-semibold text-lg">${line}</div>` : `<div class="mb-3">${line}</div>`;
                            }
                          });
                          return processedLines.join('');
                        } else {
                          // Handle non-bullet sections (like headers or paragraphs)
                          if (section.includes('**') && !section.includes(':')) {
                            return `<div class="mb-4 font-semibold text-lg text-teal-400">${section}</div>`;
                          } else {
                            return `<div class="mb-4 leading-relaxed">${section}</div>`;
                          }
                        }
                      })
                      .join('<div class="mb-6"></div>')
                  }}
                />
              </div>
            </div>
          </motion.div>
        )}

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
                    href={project.href ?? `/projects/${project.slug}`}
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

            {skill.internships && skill.internships > 0 && (
              <div className="bg-gray-900/70 rounded-xl p-4 sm:p-6 border border-gray-700 min-w-[140px] flex-1 max-w-[200px] flex flex-col justify-center items-center">
                <div className="text-2xl sm:text-3xl font-bold text-teal-400 mb-2 text-center">
                  {skill.internships}
                </div>
                <div className="text-gray-400 text-sm text-center">Internships</div>
              </div>
            )}

            {skill.jobs && skill.jobs > 0 && (
              <div className="bg-gray-900/70 rounded-xl p-4 sm:p-6 border border-gray-700 min-w-[140px] flex-1 max-w-[200px] flex flex-col justify-center items-center">
                <div className="text-2xl sm:text-3xl font-bold text-green-400 mb-2 text-center">
                  {skill.jobs}
                </div>
                <div className="text-gray-400 text-sm text-center">Jobs</div>
              </div>
            )}

            {skill.researchRoles && skill.researchRoles > 0 && (
              <div className="bg-gray-900/70 rounded-xl p-4 sm:p-6 border border-gray-700 min-w-[140px] flex-1 max-w-[200px] flex flex-col justify-center items-center">
                <div className="text-2xl sm:text-3xl font-bold text-indigo-400 mb-2 text-center">
                  {skill.researchRoles}
                </div>
                <div className="text-gray-400 text-sm text-center">Research</div>
              </div>
            )}

            {skill.teachingRoles && skill.teachingRoles > 0 && (
              <div className="bg-gray-900/70 rounded-xl p-4 sm:p-6 border border-gray-700 min-w-[140px] flex-1 max-w-[200px] flex flex-col justify-center items-center">
                <div className="text-2xl sm:text-3xl font-bold text-amber-400 mb-2 text-center">
                  {skill.teachingRoles}
                </div>
                <div className="text-gray-400 text-sm text-center">Teaching</div>
              </div>
            )}

            {skill.certifications && skill.certifications > 0 && (
              <div className="bg-gray-900/70 rounded-xl p-4 sm:p-6 border border-gray-700 min-w-[140px] flex-1 max-w-[200px] flex flex-col justify-center items-center">
                <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-2 text-center">
                  {skill.certifications}
                </div>
                <div className="text-gray-400 text-sm text-center">Certifications</div>
              </div>
            )}

            {skill.publications && skill.publications > 0 && (
              <div className="bg-gray-900/70 rounded-xl p-4 sm:p-6 border border-gray-700 min-w-[140px] flex-1 max-w-[200px] flex flex-col justify-center items-center">
                <div className="text-2xl sm:text-3xl font-bold text-purple-400 mb-2 text-center">
                  {skill.publications}
                </div>
                <div className="text-gray-400 text-sm text-center">Publications</div>
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