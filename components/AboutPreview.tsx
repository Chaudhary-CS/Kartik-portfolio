'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function AboutPreview() {
  return (
    <section className="relative">
      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-4 py-16"
        style={{ color: '#ffffff' }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          className="text-3xl font-semibold mb-4 underline decoration-teal-400 underline-offset-4 text-center"
          style={{ color: '#ffffff' }}
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.4 }}
        >
          {`About Me`}
        </motion.h2>

        <motion.p
          className="mb-6 text-center md:text-left"
          style={{ color: '#ffffff' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {`I'm entering my senior year at Texas A&M majoring in Computer Science, with an emphasis in Data Science, and a minor in Cybersecurity. I focus on machine learning, big-data analytics, and AI workflows, working with startups and research labs. I also serve as Principal Clarinet for both the TAMU Wind Symphony and Chamber Orchestra.`}
        </motion.p>

        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Link
            href="/about"
            className="relative inline-block px-1 pb-1 text-lg font-medium group"
            style={{ color: '#ffffff' }}
          >
            Read more →
            {/* teal underline */}
            <span
              className={`
                absolute left-0 -bottom-[2px] h-[2px] bg-teal-400
                transition-all duration-200 w-0 group-hover:w-full
              `}
            />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}
