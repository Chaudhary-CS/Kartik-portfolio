
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

interface WorkExperienceCardProps {
  job: {
    company: string
    title: string
    dates: string
    logo: string
    description: string[]
  }
  index: number
}

export default function WorkExperienceCard({ job, index }: WorkExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
      className="bg-gray-800/70 rounded-xl p-6 hover:bg-gray-700/70 transition-all duration-300"
    >
      <Link href="/work-experience">
        <div className="flex items-center gap-4 mb-4">
          <Image
            src={job.logo}
            alt={`${job.company} logo`}
            width={40}
            height={40}
            className="rounded-md"
          />
          <div>
            <h3 className="text-lg font-bold text-white">{job.company}</h3>
            <p className="text-sm text-gray-400">{job.title}</p>
            <p className="text-xs text-gray-500">{job.dates}</p>
          </div>
        </div>
        <p className="text-sm text-gray-300">
          {job.description[0]}
        </p>
      </Link>
    </motion.div>
  )
}
