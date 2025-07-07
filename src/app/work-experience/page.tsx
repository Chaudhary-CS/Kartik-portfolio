// src/app/work-experience/page.tsx
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { workExperience } from '@/../data/work-experience'

interface WorkExperience {
    company: string;
    title: string;
    dates: string;
    logo: string;
    description: string[];
}

export default function WorkExperiencePage() {
  return (
    <main className="relative min-h-screen flex flex-col text-white">
      <div className="relative z-10 flex-1 max-w-4xl mx-auto py-8 sm:py-12 px-4">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl text-center font-bold mb-8 sm:mb-12 underline decoration-teal-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          Work Experience
        </motion.h1>
        
        <div className="space-y-8 sm:space-y-12">
          {workExperience.map((job: WorkExperience, index: number) => (
            <motion.section 
              key={index}
              className="bg-gray-800/70 rounded-xl p-6 sm:p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src={job.logo}
                  alt={`${job.company} logo`}
                  width={50}
                  height={50}
                  className="rounded-md"
                />
                <div>
                  <h2 className="text-2xl sm:text-3xl font-semibold text-teal-400">{job.company}</h2>
                  <h3 className="text-xl font-bold">{job.title}</h3>
                  <p className="text-gray-400">{job.dates}</p>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-2">
                {job.description.map((item: string, i: number) => (
                  <li key={i} className="text-base sm:text-lg text-gray-300 leading-relaxed">{item}</li>
                ))}
              </ul>
            </motion.section>
          ))}
        </div>
      </div>
    </main>
  )
}
