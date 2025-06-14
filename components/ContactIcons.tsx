// components/ContactIcons.tsx
'use client'

import Link from 'next/link'
import { motion, Variants } from 'framer-motion'
import { MdEmail } from 'react-icons/md'
import { SiLinkedin, SiGithub, SiInstagram } from 'react-icons/si'

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const headingVariants: Variants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
}

export default function ContactIcons() {
  const contacts = [
    { href: 'https://linkedin.com/in/sami-melhem', Icon: SiLinkedin, label: 'LinkedIn' },
    { href: 'https://github.com/SamiMelhem',   Icon: SiGithub,   label: 'GitHub'   },
    { href: 'mailto:samilmelhem23@gmail.com',   Icon: MdEmail,    label: 'Email'    },
    { href: 'https://instagram.com/samimelhem__', Icon: SiInstagram, label: 'Instagram' },
  ]

  return (
    <motion.section
      className="py-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={sectionVariants}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <motion.h2
        className="text-3xl font-semibold mb-6 underline decoration-teal-400 underline-offset-4 text-center text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={headingVariants}
        transition={{ duration: 0.5 }}
      >
        Contact
      </motion.h2>

      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-6">
        {contacts.map(({ href, Icon, label }) => {
          const isPhone = label === 'Phone'

          const inner = (
            <>
              <Icon className="mb-2 text-teal-400" size={36} />
              <span className="relative inline-block pb-1">
                <span className="text-lg font-medium text-white">{label}</span>
                <span className="absolute left-0 -bottom-[2px] h-[2px] bg-teal-400 w-0
                                 group-hover:w-full transition-all duration-200 origin-left" />
              </span>
            </>
          )

          return isPhone ? (
            <div
              key={label}
              className="group flex flex-col items-center p-6 bg-gray-800/70 rounded-lg hover:bg-gray-700/70 transition-colors"
            >
              {inner}
            </div>
          ) : (
            <Link
              key={label}
              href={href}
              target="_blank"
              className="group flex flex-col items-center p-6 bg-gray-800/70 rounded-lg hover:bg-gray-700/70 transition-colors"
            >
              {inner}
            </Link>
          )
        })}
      </div>
    </motion.section>
  )
}
