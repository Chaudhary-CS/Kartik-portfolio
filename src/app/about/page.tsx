'use client'

import { motion } from 'framer-motion'
import { FaDownload, FaGraduationCap, FaCode, FaBrain, FaMusic, FaDumbbell, FaMapMarkerAlt, FaCamera, FaFutbol } from 'react-icons/fa'
import ContactIcons from '../../../components/ContactIcons'
import Image from 'next/image'

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
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="mt-8 text-center">
              <div className="mt-8 flex justify-center gap-4">
                <Image
                  src="/images/kartik.jpg"
                  alt="Kartik Chaudhary"
                  width={150}
                  height={150}
                  className="rounded-full"
                />
              </div>
              <h1 className="mt-4 text-4xl font-bold text-gray-900 dark:text-white">
                Hello, I am Kartik Chaudhary
              </h1>
            </div>
            <motion.p 
              className="text-base sm:text-lg text-gray-300 leading-relaxed mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              Hi, I&apos;m Kartik Chaudhary, a passionate developer with a love for creating innovative solutions. I have a strong background in web development and a keen interest in exploring new technologies. My journey in the world of programming has been driven by a desire to build meaningful applications that can make a difference.
            </motion.p>
            <motion.p 
              className="text-base sm:text-lg text-gray-300 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              I am a Computer Science student at the University of South Florida with a passion for software development and data science. I have experience in building and maintaining backend microservices, developing data aggregation modules, and conducting software testing. I am a co-founder of the AI Society at USF and have held leadership positions in student government and other organizations.
            </motion.p>
            <motion.p 
              className="text-base sm:text-lg text-gray-300 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.1 }}
            >
              I am always looking for new opportunities to learn and grow as a developer. I am a quick learner and a team player, and I am confident that I can make a valuable contribution to any team.
            </motion.p>
          </motion.section>

          {/* Education */}
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
              <FaGraduationCap className="text-teal-400" />
              Education
            </motion.h2>
            <motion.div
              className="bg-gray-700/50 rounded-lg p-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-xl font-bold">University of South Florida</h3>
              <p className="text-gray-400">BSc in Computer Science (Dean’s List Scholar)</p>
              <p className="text-gray-400">May 2026</p>
              <p className="text-gray-400">GPA: 3.5/4.0</p>
            </motion.div>
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
                { title: "Languages and Web Technology", content: "Java, Python, C/C++, HTML/CSS, JavaScript" },
                { title: "Frameworks, Tools, Analytics Libraries", content: "Linux/Unix, MySQL, MongoDB, Express.js, React.js, Node.js, GitHub, Power BI, MS Excel, Pandas, NumPy, Hadoop, AWS, Google Cloud, Spring Boot" },
                { title: "Coursework", content: "Data Structures and Algorithms, Programming Concepts (Python), Computer Organisation, Computer Logic and Design (RISC V), Introduction to Web Development" },
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

          {/* Leadership & Activities */}
          <motion.section 
            className="bg-gray-800/70 rounded-xl p-6 sm:p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <motion.h2 
              className="text-2xl sm:text-3xl font-semibold mb-6 text-teal-400 flex items-center gap-3"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <FaMusic className="text-teal-400" />
              Leadership & Activities
            </motion.h2>
            <motion.div 
              className="grid sm:grid-cols-2 gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="bg-gray-700/50 rounded-lg p-4">
                <h3 className="font-semibold text-white mb-2">Leadership</h3>
                <p className="text-gray-300 text-sm">
                  • Chief of Staff (USF Student Government)<br/>
                  • CS Chair (SASE- Society of Asian Scientists and Engineers)
                </p>
              </div>
              <div className="bg-gray-700/50 rounded-lg p-4">
                <h3 className="font-semibold text-white mb-2">Activities</h3>
                <p className="text-gray-300 text-sm">
                  • Co-Founder - AI Society at USF
                </p>
              </div>
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
                href="/documents/kartik_chaudhary_cv.pdf"
                download
                className="group flex items-center justify-center gap-3 bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-lg transition-all duration-300 font-semibold border border-gray-600 hover:border-gray-500"
              >
                <FaDownload className="group-hover:animate-bounce" />
                Download CV
              </a>
            </motion.div>
          </motion.section>

          {/* Beyond Code - Personal Interests */}
          <motion.section 
            className="bg-gray-800/70 rounded-xl p-6 sm:p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <motion.h2 
              className="text-2xl sm:text-3xl font-semibold mb-8 text-teal-400 text-center"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              Beyond Code
            </motion.h2>
            
            {/* Interest Cards Grid */}
            <motion.div 
              className="grid grid-cols-2 lg:grid-cols-3 gap-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {/* Weightlifting */}
              <motion.div 
                className="group bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-xl p-6 text-center border border-red-500/30"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                whileHover={{ 
                  scale: 1.05,
                  background: "linear-gradient(135deg, rgba(239, 68, 68, 0.3) 0%, rgba(249, 115, 22, 0.3) 100%)",
                  borderColor: "rgba(239, 68, 68, 0.6)",
                  transition: { duration: 0.3, ease: "easeInOut" }
                }}
              >
                <div className="mb-4">
                  <motion.div
                    whileHover={{ 
                      color: "rgb(252, 165, 165)",
                      transition: { duration: 0.3, ease: "easeInOut" }
                    }}
                  >
                    <FaDumbbell className="text-4xl text-red-400 mx-auto" />
                  </motion.div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Weightlifting</h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Strength training enthusiast
                </p>
              </motion.div>

              {/* Soccer */}
              <motion.div 
                className="group bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl p-6 text-center border border-green-500/30"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                whileHover={{ 
                  scale: 1.05,
                  background: "linear-gradient(135deg, rgba(34, 197, 94, 0.3) 0%, rgba(16, 185, 129, 0.3) 100%)",
                  borderColor: "rgba(34, 197, 94, 0.6)",
                  transition: { duration: 0.3, ease: "easeInOut" }
                }}
              >
                <div className="mb-4">
                  <motion.div
                    whileHover={{ 
                      color: "rgb(134, 239, 172)",
                      transition: { duration: 0.3, ease: "easeInOut" }
                    }}
                  >
                    <FaFutbol className="text-4xl text-green-400 mx-auto" />
                  </motion.div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Soccer</h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Passionate about the beautiful game
                </p>
              </motion.div>

              {/* Videography */}
              <motion.div 
                className="group bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl p-6 text-center border border-blue-500/30"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: 0.7 }}
                whileHover={{ 
                  scale: 1.05,
                  background: "linear-gradient(135deg, rgba(59, 130, 246, 0.3) 0%, rgba(6, 182, 212, 0.3) 100%)",
                  borderColor: "rgba(59, 130, 246, 0.6)",
                  transition: { duration: 0.3, ease: "easeInOut" }
                }}
              >
                <div className="mb-4">
                  <motion.div
                    whileHover={{ 
                      color: "rgb(147, 197, 253)",
                      transition: { duration: 0.3, ease: "easeInOut" }
                    }}
                  >
                    <FaCamera className="text-4xl text-blue-400 mx-auto" />
                  </motion.div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Videography</h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Capturing moments and telling stories
                </p>
              </motion.div>
            </motion.div>

            {/* Recent Travel Highlights */}
            <motion.div 
              className="mt-8 bg-gray-700/30 rounded-lg p-6 border border-gray-600/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <FaMapMarkerAlt className="text-teal-400 text-xl" />
                <h3 className="text-lg font-semibold text-white">Countries Traveled</h3>
              </div>
              <div className="grid sm:grid-cols-4 gap-4 text-center">
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <div className="text-2xl mb-2">🇺🇸</div>
                  <p className="text-white font-medium">USA</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <div className="text-2xl mb-2">🇮🇳</div>
                  <p className="text-white font-medium">India</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <div className="text-2xl mb-2">🇩🇪</div>
                  <p className="text-white font-medium">Germany</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <div className="text-2xl mb-2">🇦🇪</div>
                  <p className="text-white font-medium">Dubai</p>
                </div>
              </div>
            </motion.div>

            {/* Philosophy */}
            <motion.p 
              className="text-center text-gray-300 leading-relaxed mt-8 italic"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              &quot;I believe in the power of technology to solve real-world problems and make a positive impact on society. 
              Through my work with startups, research labs, and various projects, I strive to create solutions that 
              not only improve productivity but also help others improve their life situations.&quot;
            </motion.p>
          </motion.section>
        </div>
      </div>
      
      <ContactIcons />
    </main>
  )
}