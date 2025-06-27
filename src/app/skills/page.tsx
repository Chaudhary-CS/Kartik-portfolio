'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { skills, skillCategories, getSkillsByCategory } from '../../../data/skills'
import ContactIcons from '../../../components/ContactIcons'
import SkillIcon from '../../../components/SkillIcon'
import Link from 'next/link'

export default function SkillsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredSkills, setFilteredSkills] = useState(skills)

  useEffect(() => {
    let filtered = getSkillsByCategory(selectedCategory)
    
    if (searchTerm) {
      filtered = filtered.filter(skill => 
        skill.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        skill.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }
    
    setFilteredSkills(filtered)
  }, [selectedCategory, searchTerm])

  const getProficiencyColor = (proficiency: string) => {
    switch (proficiency) {
      case 'Expert': return 'text-emerald-400 bg-emerald-400/20'
      case 'Advanced': return 'text-blue-400 bg-blue-400/20'
      case 'Intermediate': return 'text-yellow-400 bg-yellow-400/20'
      case 'Beginner': return 'text-gray-400 bg-gray-400/20'
      default: return 'text-gray-400 bg-gray-400/20'
    }
  }

  return (
    <main className="relative min-h-screen flex flex-col text-white">
      <div className="relative z-10 flex-1 max-w-6xl mx-auto py-8 sm:py-12 px-2 sm:px-4">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl text-center font-bold mb-8 sm:mb-12 underline decoration-teal-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          Skills & Technologies
        </motion.h1>

        {/* Introduction */}
        <motion.div 
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <p className="text-lg text-gray-300 mb-4 max-w-3xl mx-auto">
            Here&apos;s a comprehensive overview of my technical skills and expertise. Each technology represents 
            hands-on experience from real projects, with detailed insights into how I&apos;ve applied them.
          </p>
          <div className="flex justify-center gap-8 text-sm text-gray-400">
            <span>{skills.length} Technologies</span>
            <span>{skillCategories.length - 1} Categories</span>
            <span>4+ Years Experience</span>
          </div>
        </motion.div>

        {/* Search and Filter */}
        <motion.div 
          className="mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.6 }}
        >
          {/* Search Bar */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search skills..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full max-w-md mx-auto block px-4 py-2 bg-gray-800/60 border border-gray-600 rounded-lg 
                       text-white placeholder-gray-400 focus:outline-none focus:border-teal-400 transition-colors"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            {skillCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 sm:px-4 py-2 rounded-full text-sm sm:text-base transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-teal-400 text-black font-semibold'
                    : 'bg-gray-800/60 text-gray-300 hover:bg-gray-700/60 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div 
          className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.8 }}
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Link href={`/skills/${skill.slug}/`}>
                <div className="group relative rounded-xl overflow-hidden cursor-pointer h-full
                             bg-gray-900/70 border border-white hover:border-teal-400
                             shadow-[0_0_10px_rgba(20,184,166,0.3)] hover:shadow-[0_0_20px_rgba(20,184,166,0.6)]
                             transition-all duration-300 hover:scale-[1.02]">
                  
                  {/* Header */}
                  <div className="p-6 pb-4 pr-20">
                    <div className="flex items-center gap-3 mb-3">
                      <SkillIcon 
                        iconName={skill.icon}
                        color={skill.color}
                        size={16}
                      />
                      <h3 className="text-xl font-semibold group-hover:text-teal-400 transition-colors flex-1 pr-2">
                        {skill.name}
                      </h3>
                    </div>
                    
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getProficiencyColor(skill.proficiency)}`}>
                        {skill.proficiency}
                      </span>
                      <span className="text-sm text-gray-400">
                        {skill.experience}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="px-6 pb-4">
                    <p className="text-gray-300 text-sm line-clamp-3 mb-4">
                      {skill.description}
                    </p>
                  </div>

                  {/* Statistics */}
                  <div className="px-6 pb-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {skill.projects.length > 0 && (
                        <span className="px-2 py-1 bg-gray-800/60 text-xs text-gray-300 rounded-full">
                          {skill.projects.length} project{skill.projects.length !== 1 ? 's' : ''}
                        </span>
                      )}
                      {skill.internships && skill.internships > 0 && (
                        <span className="px-2 py-1 bg-teal-900/40 text-xs text-teal-300 rounded-full border border-teal-400/30">
                          {skill.internships} internship{skill.internships !== 1 ? 's' : ''}
                        </span>
                      )}
                      {skill.jobs && skill.jobs > 0 && (
                        <span className="px-2 py-1 bg-green-900/40 text-xs text-green-300 rounded-full border border-green-400/30">
                          {skill.jobs} job{skill.jobs !== 1 ? 's' : ''}
                        </span>
                      )}
                      {skill.researchRoles && skill.researchRoles > 0 && (
                        <span className="px-2 py-1 bg-indigo-900/40 text-xs text-indigo-300 rounded-full border border-indigo-400/30">
                          {skill.researchRoles} research
                        </span>
                      )}
                      {skill.teachingRoles && skill.teachingRoles > 0 && (
                        <span className="px-2 py-1 bg-amber-900/40 text-xs text-amber-300 rounded-full border border-amber-400/30">
                          {skill.teachingRoles} teaching
                        </span>
                      )}
                      {skill.certifications && skill.certifications > 0 && (
                        <span className="px-2 py-1 bg-blue-900/40 text-xs text-blue-300 rounded-full border border-blue-400/30">
                          {skill.certifications} cert{skill.certifications !== 1 ? 's' : ''}
                        </span>
                      )}
                      {skill.publications && skill.publications > 0 && (
                        <span className="px-2 py-1 bg-purple-900/40 text-xs text-purple-300 rounded-full border border-purple-400/30">
                          {skill.publications} pub{skill.publications !== 1 ? 's' : ''}
                        </span>
                      )}
                    </div>
                    
                    {skill.projects.length > 0 && (
                      <div className="flex flex-wrap gap-1">
                        {skill.projects.slice(0, 3).map((project) => (
                          <span
                            key={project}
                            className="px-2 py-1 bg-gray-700/40 text-xs text-gray-400 rounded-full"
                          >
                            {project}
                          </span>
                        ))}
                        {skill.projects.length > 3 && (
                          <span className="px-2 py-1 text-xs text-gray-500">
                            +{skill.projects.length - 3} more
                          </span>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-2 py-1 bg-gray-800/80 text-xs text-gray-400 rounded-full">
                      {skill.category}
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* No Results */}
        {filteredSkills.length === 0 && (
          <motion.div 
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <p className="text-gray-400 text-lg">
              No skills found matching your criteria.
            </p>
            <button
              onClick={() => {
                setSearchTerm('')
                setSelectedCategory('All')
              }}
              className="mt-4 px-6 py-2 bg-teal-400 text-black rounded-lg hover:bg-teal-300 transition-colors"
            >
              Clear Filters
            </button>
          </motion.div>
        )}
      </div>
      
      <ContactIcons />
    </main>
  )
} 