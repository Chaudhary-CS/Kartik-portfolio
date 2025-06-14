// components/Hero.tsx
'use client'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* 1) Dark Overlay */}
      <div className="fixed inset-0 bg-black/50" />

      {/* 2) Content */}
      <motion.div 
        className="relative z-10 flex flex-col items-center justify-center text-center px-4 space-y-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Circular Portrait */}
        <motion.div 
          className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 md:border-8 border-white shadow-xl"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
            <Image
            src="/images/sami.jpg"
            alt="Sami Melhem"
            width={256}
            height={256}
            className="object-cover"
            unoptimized                 // required for static export
            />
        </motion.div>

        {/* Text */}
        <div className="max-w-2xl space-y-4">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold"
              style={{ color: '#ffffff' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
                {`Hi, I'm Sami Melhem`}
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl"
              style={{ color: '#d1d5db' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
                {`Computer Science junior at Texas A&M • Clarinetist • Data Science & AI Enthusiast`}
            </motion.p>
        </div>
        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
            {[
                { href: '/projects', label: 'See Projects' },
                { href: '/blog',    label: 'Read My Blog' },
            ].map(({ href, label }, index) => (
            <motion.div
              key={href}
              initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 1.0 + index * 0.1 }}
            >
              <Link
                href={href}
                className="relative inline-block px-1 pb-1 text-lg font-medium group"
                style={{ color: '#ffffff' }}
              >
                {label}
                <span
                    className="
                        absolute left-0 -bottom-[2px] h-[2px] bg-teal-400
                        w-0 group-hover:w-full transition-all duration-200
                    "
                />
              </Link>
            </motion.div>
            ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
