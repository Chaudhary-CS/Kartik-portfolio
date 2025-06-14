// src/app/contact/page.tsx
'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { MdEmail } from 'react-icons/md'
import { SiLinkedin, SiGithub, SiInstagram } from 'react-icons/si'

export default function ContactPage() {
    const contacts = [
    {
        href: 'https://www.linkedin.com/in/sami-melhem/',
        label: 'LinkedIn',
        Icon: SiLinkedin,
        external: true,
    },
    {
        href: 'https://www.github.com/SamiMelhem',
        label: 'GitHub',
        Icon: SiGithub,
        external: true,
    },
    {
        href: 'mailto:samilmelhem23@gmail.com',
        label: 'samilmelhem23@gmail.com',
        Icon: MdEmail,
    },
    {
        href: 'https://www.instagram.com/samimelhem__/',
        label: 'Instagram',
        Icon: SiInstagram,
        external: true,
    },
    ]

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center text-white pb-32 px-4">      
      {/* Animated content */}
      <motion.div
        className="relative z-10 flex flex-col items-center text-center space-y-6 sm:space-y-8 w-full max-w-4xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut', delay: 0.2 }}
      >
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl text-center font-bold mb-8 sm:mb-12 underline decoration-teal-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
            {`Contact Me`}
        </motion.h1>
        
        <motion.p 
          className="text-base sm:text-lg text-gray-300 max-w-xl px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
            {`Feel free to reach out via any of the methods below, I'd love to hear from you!`}
        </motion.p>

        {/* Top row - LinkedIn and GitHub */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.6 }}
        >
          {contacts.slice(0, 2).map(({ href, label, Icon, external }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + i * 0.1, duration: 0.4 }}
            >
              <Link
                href={href}
                {...(external ? { target: '_blank' } : {})}
                className="group flex flex-col items-center p-4 sm:p-6 bg-gray-800/70 rounded-lg hover:bg-gray-700/70 transition"
              >
                <Icon className="mb-3 sm:mb-4 text-teal-400" size={40} />
                <div className="relative inline-block pb-1">
                  <span className="text-base sm:text-lg font-medium text-white">
                      {label}
                  </span>
                  {/* underline effect */}
                  <span className="absolute left-0 bottom-0 h-0.5 bg-teal-400 w-full transform scale-x-0
                  group-hover:scale-x-100 transition-transform duration-200 origin-left"/>              
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom row - Email and Instagram */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.9 }}
        >
          {contacts.slice(2, 4).map(({ href, label, Icon, external }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 + i * 0.1, duration: 0.4 }}
            >
              <Link
                href={href}
                {...(external ? { target: '_blank' } : {})}
                className="group flex flex-col items-center p-4 sm:p-6 bg-gray-800/70 rounded-lg hover:bg-gray-700/70 transition"
              >
                <Icon className="mb-3 sm:mb-4 text-teal-400" size={40} />
                <div className="relative inline-block pb-1">
                  <span className="text-base sm:text-lg font-medium text-white text-center break-all">
                      {label}
                  </span>
                  {/* underline effect */}
                  <span className="absolute left-0 bottom-0 h-0.5 bg-teal-400 w-full transform scale-x-0
                  group-hover:scale-x-100 transition-transform duration-200 origin-left"/>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </main>
  )
}
