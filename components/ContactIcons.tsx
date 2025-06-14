// components/ContactIcons.tsx
'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { MdEmail } from 'react-icons/md'
import { SiLinkedin, SiGithub, SiInstagram } from 'react-icons/si'

export default function ContactIcons() {
  const contacts = [
    { href: 'https://linkedin.com/in/sami-melhem', Icon: SiLinkedin, label: 'LinkedIn' },
    { href: 'https://github.com/SamiMelhem',   Icon: SiGithub,   label: 'GitHub'   },
    { href: 'mailto:samilmelhem23@gmail.com',   Icon: MdEmail,    label: 'Email'    },
    { href: 'https://instagram.com/samimelhem__', Icon: SiInstagram, label: 'Instagram' },
  ]

  return (
    <section className="relative">
      <motion.div
        className="relative z-10 py-8 px-4"
        style={{ color: '#ffffff' }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="flex justify-center gap-4 sm:gap-6">
          {contacts.map(({ href, Icon, label }, index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
            >
              <Link
                href={href}
                target="_blank"
                className="group flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gray-800/60 rounded-full hover:bg-teal-400/20 transition-all duration-300 hover:scale-110"
                aria-label={label}
              >
                <Icon 
                  className="text-teal-400 group-hover:text-white transition-colors duration-300" 
                  size={20}
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
