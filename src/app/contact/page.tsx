// src/app/contact/page.tsx
'use client'
import Link from 'next/link'
import {motion} from 'framer-motion'
import { MdEmail, MdPhone } from 'react-icons/md'
import { SiLinkedin, SiGithub, SiInstagram } from 'react-icons/si'

export default function ContactPage() {
    const topContacts = [
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
    ]
    const otherContacts = [
    {
        href: 'mailto:samilmelhem23@gmail.com',
        label: 'samilmelhem23@gmail.com',
        Icon: MdEmail,
    },
    {
        href: '',
        label: '+1 (512) 713-9742',
        Icon: MdPhone,
    },
    {
        href: 'https://www.instagram.com/samimelhem__/',
        label: 'Instagram',
        Icon: SiInstagram,
        external: true,
    },
    ]


  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center text-white pt-24 pb-16 px-4">      
      {/* Dark overlay */}
      <div className="fixed inset-0 bg-black/50" />

      {/* Animated content */}
      <motion.div
        className="relative z-10 flex flex-col items-center text-center space-y-8 w-full max-w-4xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <h1 className="text-4xl md:text-6xl font-bold">
            {`Contact Me`}
        </h1>
        <p className="text-lg text-gray-300 max-w-xl">
            {`Feel free to reach out via any of the methods below, I'd love to hear from you!`}
        </p>

        {/* Top Contacts */}
        <div className="grid grid-cols-2 gap-8 w-full">
          {topContacts.map(({ href, label, Icon, external }) => (
            <Link
              key={label}
              href={href}
              {...(external ? { target: '_blank' } : {})}
              className="group flex flex-col items-center p-6 bg-gray-800/70 rounded-lg hover:bg-gray-700/70 transition"
            >
              <Icon className="mb-4 text-teal-400" size={48} />
              <div className="relative inline-block pb-1">
                <span className="text-lg font-medium text-white">
                    {label}
                </span>
                {/* underline effect */}
                <span className="absolute left-0 bottom-0 h-0.5 bg-teal-400 w-full transform scale-x-0
                group-hover:scale-x-100 transition-transform duration-200 origin-left"/>              
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {otherContacts.map(({ href, label, Icon, external }) => {
            const isPhone = label.startsWith('+1');

            if (isPhone) {
                return (
                  <div
                    key={label}
                    className="group relative flex flex-col items-center p-6 bg-gray-800/70 rounded-lg hover:bg-gray-700/70 transition"
                  >
                    <Icon className="mb-4 text-teal-400" size={48} />
                    <div className="relative inline-block pb-1">
                        <span className="text-lg font-medium text-white">
                            {label}
                        </span>
                        {/* underline effect */}
                        <span className="absolute left-0 bottom-0 h-0.5 bg-teal-400 w-full transform scale-x-0
                            group-hover:scale-x-100 transition-transform duration-200 origin-left"/>
                    </div>
                  </div>
                );
              }

            return (
                <Link
                    key={label}
                    href={href}
                    {...(external ? { target: '_blank' } : {})}
                    className="group relative flex flex-col items-center p-6 bg-gray-800/70 rounded-lg hover:bg-gray-700/70 transition"
                >
                    <Icon className="mb-4 text-teal-400" size={48} />
                    <div className="relative inline-block pb-1">
                        <span className="text-lg font-medium text-white">
                            {label}
                        </span>
                        {/* underline effect */}
                        <span className="absolute left-0 bottom-0 h-0.5 bg-teal-400 w-full transform scale-x-0
                        group-hover:scale-x-100 transition-transform duration-200 origin-left"/>
                    </div>
                </Link>
            );
          })}
        </div>
      </motion.div>
    </main>
  )
}
