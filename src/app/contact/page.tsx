// src/app/contact/page.tsx
'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { MdEmail, MdSend, MdContentCopy, MdCheck, MdArrowDropDown } from 'react-icons/md'
import { SiLinkedin, SiGithub, SiInstagram, SiGmail, SiApple } from 'react-icons/si'
import { FaUser, FaBuilding, FaEnvelope, FaComment, FaExternalLinkAlt, FaYahoo } from 'react-icons/fa'

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: '',
        inquiryType: 'general'
    })
    const [showCopySuccess, setShowCopySuccess] = useState(false)
    const [showEmailOptions, setShowEmailOptions] = useState(false)
    const [dropdownPosition, setDropdownPosition] = useState<'down' | 'up'>('down')
    const dropdownRef = useRef<HTMLDivElement>(null)
    const buttonRef = useRef<HTMLButtonElement>(null)

    // Close dropdown when clicking outside and handle window resize
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setShowEmailOptions(false)
            }
        }

        const handleResize = () => {
            if (showEmailOptions) {
                calculateDropdownPosition()
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        window.addEventListener('resize', handleResize)
        
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
            window.removeEventListener('resize', handleResize)
        }
    }, [showEmailOptions])

    // Calculate dropdown position to avoid going off-screen
    const calculateDropdownPosition = () => {
        if (!buttonRef.current) return

        const buttonRect = buttonRef.current.getBoundingClientRect()
        const viewportHeight = window.innerHeight
        const dropdownHeight = 250 // Approximate height of dropdown
        const spaceBelow = viewportHeight - buttonRect.bottom
        const spaceAbove = buttonRect.top

        // If there's not enough space below but enough space above, position upward
        if (spaceBelow < dropdownHeight && spaceAbove > dropdownHeight) {
            setDropdownPosition('up')
        } else {
            setDropdownPosition('down')
        }
    }

    const inquiryTypes = [
        { value: 'job', label: 'Job Opportunity' },
        { value: 'internship', label: 'Internship' },
        { value: 'freelance', label: 'Freelance Project' },
        { value: 'collaboration', label: 'Collaboration' },
        { value: 'networking', label: 'Professional Networking' },
        { value: 'general', label: 'General Inquiry' }
    ]

    const emailServices = [
        {
            name: 'Gmail',
            icon: SiGmail,
            color: 'text-red-400',
            getUrl: (subject: string, body: string) => 
                `https://mail.google.com/mail/?view=cm&fs=1&to=samilmelhem23@gmail.com&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
        },
        {
            name: 'Outlook',
            icon: MdEmail,
            color: 'text-blue-500',
            getUrl: (subject: string, body: string) => 
                `https://outlook.live.com/mail/0/deeplink/compose?to=samilmelhem23@gmail.com&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
        },
        {
            name: 'Apple Mail',
            icon: SiApple,
            color: 'text-gray-300',
            getUrl: (subject: string, body: string) => 
                `mailto:samilmelhem23@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
        },
        {
            name: 'Yahoo Mail',
            icon: FaYahoo,
            color: 'text-purple-400',
            getUrl: (subject: string, body: string) => 
                `https://compose.mail.yahoo.com/?to=samilmelhem23@gmail.com&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
        },
        {
            name: 'Default Email App',
            icon: MdEmail,
            color: 'text-gray-400',
            getUrl: (subject: string, body: string) => 
                `mailto:samilmelhem23@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
        }
    ]

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const generateEmailContent = () => {
        const emailSubject = `${formData.inquiryType === 'job' ? '[Job Opportunity]' : 
                             formData.inquiryType === 'internship' ? '[Internship]' : 
                             formData.inquiryType === 'freelance' ? '[Freelance]' : 
                             formData.inquiryType === 'collaboration' ? '[Collaboration]' : 
                             formData.inquiryType === 'networking' ? '[Networking]' : 
                             '[Inquiry]'} ${formData.subject || 'Contact from ' + (formData.company || 'Portfolio Website')}`

        const emailBody = `Hello Sami,

${formData.message}

${formData.company ? `\nCompany: ${formData.company}` : ''}

Best regards,
${formData.name}
${formData.email}`

        return { subject: emailSubject, body: emailBody }
    }

    const handleEmailServiceClick = (service: typeof emailServices[0]) => {
        const { subject, body } = generateEmailContent()
        const url = service.getUrl(subject, body)
        window.open(url, '_blank')
        setShowEmailOptions(false)
    }

    const handleCopyEmail = async () => {
        const { subject, body } = generateEmailContent()
        const emailContent = `To: samilmelhem23@gmail.com
Subject: ${subject}

${body}`
        
        try {
            await navigator.clipboard.writeText(emailContent)
            setShowCopySuccess(true)
            setTimeout(() => setShowCopySuccess(false), 2000)
        } catch (err) {
            console.error('Failed to copy email content:', err)
        }
    }

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
        href: 'https://www.instagram.com/samimelhem__/',
        label: 'Instagram',
        Icon: SiInstagram,
        external: true,
    },
    ]

  return (
    <main className="relative min-h-screen flex flex-col text-white py-8 px-4">      
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl text-center font-bold mb-12 underline decoration-teal-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          Contact Me
        </motion.h1>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            className="bg-gray-800/70 rounded-xl p-6 sm:p-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <FaEnvelope className="text-teal-400 text-2xl" />
              <h2 className="text-2xl sm:text-3xl font-semibold text-teal-400">
                Send Me a Message
              </h2>
            </div>
            
            <p className="text-gray-300 mb-8">
              Whether you're a recruiter, fellow developer, or have any questions about my work, I'd love to hear from you!
            </p>

            <form className="space-y-6">
              {/* Name and Email Row */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    <FaUser className="inline mr-2 text-teal-400" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:border-teal-400 focus:outline-none text-white placeholder-gray-400 transition-colors duration-200"
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    <MdEmail className="inline mr-2 text-teal-400" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:border-teal-400 focus:outline-none text-white placeholder-gray-400 transition-colors duration-200"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>

              {/* Company and Inquiry Type Row */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    <FaBuilding className="inline mr-2 text-teal-400" />
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:border-teal-400 focus:outline-none text-white placeholder-gray-400 transition-colors duration-200"
                    placeholder="Your company name (optional)"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    <FaComment className="inline mr-2 text-teal-400" />
                    Inquiry Type
                  </label>
                  <select
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:border-teal-400 focus:outline-none text-white transition-colors duration-200"
                  >
                    {inquiryTypes.map(type => (
                      <option key={type.value} value={type.value} className="bg-gray-700">
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:border-teal-400 focus:outline-none text-white placeholder-gray-400 transition-colors duration-200"
                  placeholder="Brief subject line"
                  required
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:border-teal-400 focus:outline-none text-white placeholder-gray-400 transition-colors duration-200 resize-vertical"
                  placeholder="Tell me about your opportunity, project, question, or just say hello..."
                  required
                />
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                {/* Email Service Selector */}
                <div className="flex-1 relative z-50 isolate" ref={dropdownRef}>
                  <button
                    ref={buttonRef}
                    type="button"
                    onClick={() => {
                      if (!showEmailOptions) {
                        calculateDropdownPosition()
                      }
                      setShowEmailOptions(!showEmailOptions)
                    }}
                    className="w-full group flex items-center justify-center gap-3 bg-teal-600 hover:bg-teal-700 px-6 py-3 rounded-lg transition-all duration-300 font-semibold"
                  >
                    <MdSend className="group-hover:animate-pulse" />
                    Send via Email
                    <MdArrowDropDown className={`transition-transform duration-200 ${showEmailOptions ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {/* Email Options Dropdown */}
                  {showEmailOptions && (
                    <div className={`absolute left-0 right-0 bg-gray-800/95 border border-gray-600 rounded-lg shadow-2xl z-[99999] backdrop-blur-sm ${
                      dropdownPosition === 'up' 
                        ? 'bottom-full mb-2' 
                        : 'top-full mt-2'
                    }`} style={{ zIndex: 99999 }}>
                      {emailServices.map((service, index) => (
                        <button
                          key={service.name}
                          type="button"
                          onClick={() => handleEmailServiceClick(service)}
                          className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-700 transition-colors duration-200 ${
                            index === 0 ? 'rounded-t-lg' : ''
                          } ${index === emailServices.length - 1 ? 'rounded-b-lg' : 'border-b border-gray-700'}`}
                        >
                          <service.icon className={`text-lg ${service.color}`} />
                          <span className="text-white font-medium">{service.name}</span>
                          <FaExternalLinkAlt className="text-gray-400 text-xs ml-auto" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="flex-1 group flex items-center justify-center gap-3 bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-lg transition-all duration-300 font-semibold border border-gray-600 hover:border-gray-500"
                >
                  {showCopySuccess ? (
                    <>
                      <MdCheck className="text-green-400" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <MdContentCopy className="group-hover:animate-pulse" />
                      Copy Email
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl font-semibold text-teal-400 mb-4">
                Connect With Me
              </h2>
              <p className="text-gray-300 mb-8">
                You can also find me on these platforms for updates and networking.
              </p>
            </div>

            {/* Social Links Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {contacts.map(({ href, label, Icon, external }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.1, duration: 0.4 }}
                >
                  <Link
                    href={href}
                    {...(external ? { target: '_blank' } : {})}
                    className="group flex flex-col items-center p-4 sm:p-6 bg-gray-800/70 rounded-lg hover:bg-gray-700/70 transition-all duration-300 hover:scale-105 border border-gray-700/50 hover:border-teal-400/50"
                  >
                    <Icon className="mb-3 text-teal-400 group-hover:text-teal-300 transition-colors duration-300" size={32} />
                    <span className="text-sm font-medium text-white text-center">
                        {label}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
