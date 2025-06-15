'use client'

import { motion } from 'framer-motion'
import { FaDownload, FaGraduationCap, FaCode, FaBrain, FaFileAlt } from 'react-icons/fa'
import ContactIcons from '../../../components/ContactIcons'

export default function AboutPage() {
  return (
    <main className="relative min-h-screen flex flex-col text-white">
      <div className="relative z-10 flex-1 max-w-4xl mx-auto py-8 sm:py-12 px-4">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl text-center font-bold mb-8 sm:mb-12 underline decoration-teal-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          About Me
        </motion.h1>
        
        <div className="space-y-8 sm:space-y-12">
          {/* Introduction */}
          <motion.section 
            className="bg-gray-800/70 rounded-xl p-6 sm:p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2 
              className="text-2xl sm:text-3xl font-semibold mb-4 text-teal-400"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              Hello, I'm Sami Melhem
            </motion.h2>
            <motion.p 
              className="text-base sm:text-lg text-gray-300 leading-relaxed mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              I'm a passionate software developer and AI enthusiast with a strong background in computer science. 
              I love building innovative solutions that combine cutting-edge technology with practical applications, 
              particularly in the fields of artificial intelligence, machine learning, and web development.
            </motion.p>
            <motion.p 
              className="text-base sm:text-lg text-gray-300 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              My journey in tech has led me to work on diverse projects ranging from autonomous vehicle simulations 
              to learning applications, always with a focus on creating meaningful impact through code.
            </motion.p>
          </motion.section>

          {/* Skills & Expertise */}
          <motion.section 
            className="bg-gray-800/70 rounded-xl p-6 sm:p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <motion.h2 
              className="text-2xl sm:text-3xl font-semibold mb-6 text-teal-400 flex items-center gap-3"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <FaCode className="text-teal-400" />
              Skills & Expertise
            </motion.h2>
            <motion.div 
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {[
                { title: "Programming Languages", content: "Python, JavaScript, TypeScript, Java, C++" },
                { title: "Web Development", content: "React, Next.js, Node.js, Tailwind CSS" },
                { title: "AI & Machine Learning", content: "TensorFlow, PyTorch, Computer Vision" },
                { title: "Tools & Platforms", content: "Git, Docker, Firebase, AWS" },
                { title: "Databases", content: "MongoDB, PostgreSQL, MySQL" },
                { title: "Specializations", content: "CARLA Simulation, Computer Vision" }
              ].map((skill, index) => (
                <motion.div 
                  key={skill.title}
                  className="bg-gray-700/50 rounded-lg p-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                >
                  <h3 className="font-semibold text-white mb-2">{skill.title}</h3>
                  <p className="text-gray-300 text-sm">{skill.content}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* Education & Background */}
          <motion.section 
            className="bg-gray-800/70 rounded-xl p-6 sm:p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.h2 
              className="text-2xl sm:text-3xl font-semibold mb-6 text-teal-400 flex items-center gap-3"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <FaGraduationCap className="text-teal-400" />
              Education & Background
            </motion.h2>
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <motion.div 
                className="border-l-4 border-teal-400 pl-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <h3 className="font-semibold text-white text-lg">Computer Science Studies</h3>
                <p className="text-gray-300">
                  Focused on artificial intelligence, machine learning, and software engineering principles.
                </p>
              </motion.div>
              <motion.div 
                className="border-l-4 border-teal-400 pl-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                <h3 className="font-semibold text-white text-lg">Continuous Learning</h3>
                <p className="text-gray-300">
                  Always exploring new technologies and methodologies to stay at the forefront of innovation.
                </p>
              </motion.div>
            </motion.div>
          </motion.section>

          {/* Resume & CV Downloads */}
          <motion.section 
            className="bg-gray-800/70 rounded-xl p-6 sm:p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.h2 
              className="text-2xl sm:text-3xl font-semibold mb-6 text-teal-400 flex items-center gap-3"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <FaBrain className="text-teal-400" />
              Professional Documents
            </motion.h2>
            <motion.p 
              className="text-base sm:text-lg text-gray-300 leading-relaxed mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Interested in learning more about my professional background and experience? 
              Download my resume and CV for detailed information about my projects, skills, and achievements.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a
                href="/documents/sami_melhem.pdf"
                download
                className="group flex items-center justify-center gap-3 bg-teal-600 hover:bg-teal-700 px-6 py-3 rounded-lg transition-all duration-300 font-semibold"
              >
                <FaDownload className="group-hover:animate-bounce" />
                Download Resume
              </a>
              <a
                href="/documents/sami_melhem_cv.pdf"
                download
                className="group flex items-center justify-center gap-3 bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-lg transition-all duration-300 font-semibold border border-gray-600 hover:border-gray-500"
              >
                <FaDownload className="group-hover:animate-bounce" />
                Download CV
              </a>
            </motion.div>
          </motion.section>

          {/* Research Paper */}
          <motion.section 
            className="bg-gray-800/70 rounded-xl p-6 sm:p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.h2 
              className="text-2xl sm:text-3xl font-semibold mb-6 text-teal-400 flex items-center gap-3"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <FaFileAlt className="text-teal-400" />
              Research & Publications
            </motion.h2>
            <motion.p 
              className="text-base sm:text-lg text-gray-300 leading-relaxed mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              I've conducted research in artificial intelligence and machine learning, exploring innovative approaches 
              to complex problems. Below you can find my research paper that delves into cutting-edge AI methodologies 
              and their practical applications.
            </motion.p>
            <motion.div 
              className="bg-gray-700/50 rounded-lg p-4 border-l-4 border-teal-400"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <h3 className="font-semibold text-white text-lg mb-2">Research Paper</h3>
              <p className="text-gray-300 text-sm mb-4">
                An in-depth exploration of machine learning algorithms and their applications in real-world scenarios.
              </p>
              <a
                href="/documents/sami_melhem_research_paper_1.pdf"
                download
                className="group inline-flex items-center gap-3 bg-teal-600 hover:bg-teal-700 px-4 py-2 rounded-lg transition-all duration-300 font-medium text-sm"
              >
                <FaDownload className="group-hover:animate-bounce text-xs" />
                Download Research Paper
              </a>
            </motion.div>
          </motion.section>

          {/* Personal Touch */}
          <motion.section 
            className="bg-gray-800/70 rounded-xl p-6 sm:p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <motion.h2 
              className="text-2xl sm:text-3xl font-semibold mb-4 text-teal-400"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              Beyond Code
            </motion.h2>
            <motion.p 
              className="text-base sm:text-lg text-gray-300 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              When I'm not coding, I enjoy exploring the latest developments in AI research, 
              contributing to open-source projects, and sharing knowledge with the developer community. 
              I believe in the power of technology to solve real-world problems and make a positive impact on society.
            </motion.p>
          </motion.section>
        </div>
      </div>
      
      <ContactIcons />
    </main>
  )
} 