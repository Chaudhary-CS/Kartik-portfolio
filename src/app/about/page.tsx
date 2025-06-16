'use client'

import { motion } from 'framer-motion'
import { FaDownload, FaGraduationCap, FaCode, FaBrain, FaFileAlt, FaMusic, FaDumbbell, FaPlane, FaMapMarkerAlt } from 'react-icons/fa'
import { GiTennisRacket } from 'react-icons/gi'
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
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.h2 
              className="text-2xl sm:text-3xl font-semibold mb-4 text-teal-400"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              Hello, I am Sami Melhem
            </motion.h2>
            <motion.p 
              className="text-base sm:text-lg text-gray-300 leading-relaxed mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              Hi, I&apos;m Sami Melhem, I&apos;m entering my senior year at Texas A&M majoring in Computer Science, with an emphasis in Data Science, and a minor in Cybersecurity. During my time at A&M academically, I focused on machine learning, big-data analytics, and AI workflows where I&apos;ve worked with 2 different startups on AI workflow products and recyclable battery material optimization pipelines.
            </motion.p>
            <motion.p 
              className="text-base sm:text-lg text-gray-300 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              I also work as an AI conversational developer & undergraduate researcher for the college of visualization where I develop tools for SANE Nurses at the Texas A&M Medical School. I blend my technical work with creative problem-solving in creating usable products for anyone to use in everyday life so I can not only improve productivity, but help others improve their life situations as well.
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
                { title: "Programming Languages", content: "Python (Advanced), JavaScript (Advanced), HTML/CSS (Advanced), SQL (Advanced),  C++ (Intermediate), Java (Intermediate), Go (Beginner), Rust (Beginner), R (Beginner)" },
                { title: "Frameworks & Libraries", content: "React.js, Node.js, TypeScript, Next.js, Flask, Pandas, NumPy, Matplotlib, Scikit-learn, TensorFlow, PyTorch, FastAPI" },
                { title: "Tools & Platforms", content: "Git, Docker, Postman, Electron, Vercel, Power BI, Tableau, Visual Studio Code, PyCharm, IntelliJ, Cursor" },
                { title: "Cloud & Databases", content: "AWS, GCP, MySQL, PostgreSQL, Linux, Firebase, NoSQL, SQLAlchemy" },
                { title: "AI & Data Science", content: "Machine Learning, Computer Vision, Statistical Modeling, Feature Engineering, A/B Testing, Data Visualization" },
                { title: "Methodologies", content: "Agile, Waterfall, Scrum, Physics-Informed Neural Networks (PINNs), ETL Pipelines" }
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
                <h3 className="font-semibold text-white text-lg">Texas A&M University</h3>
                <p className="text-gray-300 mb-2">
                  <strong>Master of Science in Computer Science</strong> (Expected May 2027)<br/>
                  <strong>GPA:</strong> 4.0/4.0<br/>
                  <strong>Bachelor of Science in Computer Science</strong> (Expected May 2026)<br/>
                  <strong>Minor:</strong> Cybersecurity | <strong>Emphasis:</strong> Data Science | <strong>GPA:</strong> 3.8/4.0
                </p>
                <p className="text-gray-300 text-sm">
                  <strong>Relevant Coursework:</strong> Machine Learning, Artificial Intelligence, Data Structures & Algorithms, 
                  Database Systems, Cloud Computing, Data Visualization, Cryptography, Cybersecurity Risk Management
                </p>
              </motion.div>
              <motion.div 
                className="border-l-4 border-teal-400 pl-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                <h3 className="font-semibold text-white text-lg">Honors & Awards</h3>
                <p className="text-gray-300">
                  • Michael 78 & Dianne 79 Pfister Endowed Scholar (2024-2025)<br/>
                  • Best Juniors at ACPC Spring Competition (Spring 2025)<br/>
                  • Distinguished Student (Fall 2024)
                </p>
              </motion.div>
            </motion.div>
          </motion.section>

          {/* Leadership & Extracurriculars */}
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
                <h3 className="font-semibold text-white mb-2">Music Leadership</h3>
                <p className="text-gray-300 text-sm">
                  • Principal Clarinet - TAMU Wind Symphony<br/>
                  • Principal Clarinet - TAMU Chamber Orchestra<br/>
                  • Vice President - Carnival of Animals (2025)<br/>
                  • Treasurer & Secretary - Carnival of Animals (2024)
                </p>
              </div>
              <div className="bg-gray-700/50 rounded-lg p-4">
                <h3 className="font-semibold text-white mb-2">Technical Leadership</h3>
                <p className="text-gray-300 text-sm">
                  • Projects Officer - Aggie Data Science Club (2024-2025)<br/>
                  • Project Manager - Aggie Data Science Club<br/>
                  • Member - Aggie Competitive Programming Club
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
              I&apos;ve conducted research in artificial intelligence and machine learning, particularly focusing on 
              Large Language Models and their applications in engineering education. My research has been accepted 
              for presentation at major academic conferences.
            </motion.p>
            <motion.div 
              className="bg-gray-700/50 rounded-lg p-4 border-l-4 border-teal-400"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <h3 className="font-semibold text-white text-lg mb-2">An Assessment Of ChatGPT 4o Performance on Mechanical Engineering Concept Inventories</h3>
              <p className="text-gray-300 text-sm mb-2">
                <strong>2025 ASEE Annual Conference & Exposition</strong> (Accepted June 15, 2025)
              </p>
              <p className="text-gray-300 text-sm mb-4">
                Co-authored with Dr. Rujun Gao, Hillary E. Merzdorf, Xiaosu Guo, Dr. Kristi J. Shryock, and Prof. Arun R Srinivasa. 
                This research evaluates ChatGPT-4o&apos;s performance on mechanical engineering concept inventories, 
                examining AI&apos;s potential and limitations in engineering education support.
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
              className="grid grid-cols-2 lg:grid-cols-4 gap-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {/* Music */}
              <motion.div 
                className="group bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl p-6 text-center hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-300 border border-purple-500/30 hover:border-purple-400/60 hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <div className="mb-4">
                  <FaMusic className="text-4xl text-purple-400 mx-auto group-hover:text-purple-300 transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Music</h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Principal Clarinet at TAMU Wind Symphony & Chamber Orchestra
                </p>
              </motion.div>

              {/* Fitness */}
              <motion.div 
                className="group bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-xl p-6 text-center hover:from-red-500/30 hover:to-orange-500/30 transition-all duration-300 border border-red-500/30 hover:border-red-400/60 hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                <div className="mb-4">
                  <FaDumbbell className="text-4xl text-red-400 mx-auto group-hover:text-red-300 transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Fitness</h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Weightlifting enthusiast & strength training
                </p>
              </motion.div>

              {/* Pickleball */}
              <motion.div 
                className="group bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl p-6 text-center hover:from-green-500/30 hover:to-emerald-500/30 transition-all duration-300 border border-green-500/30 hover:border-green-400/60 hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: 0.6 }}
              >
                <div className="mb-4">
                  <GiTennisRacket className="text-4xl text-green-400 mx-auto group-hover:text-green-300 transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Pickleball</h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Weekend warrior on the courts with friends
                </p>
              </motion.div>

              {/* Travel */}
              <motion.div 
                className="group bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl p-6 text-center hover:from-blue-500/30 hover:to-cyan-500/30 transition-all duration-300 border border-blue-500/30 hover:border-blue-400/60 hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: 0.7 }}
              >
                <div className="mb-4">
                  <FaPlane className="text-4xl text-blue-400 mx-auto group-hover:text-blue-300 transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Travel</h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Recent adventures: Spain, Mexico, Arkansas
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
                <h3 className="text-lg font-semibold text-white">Recent Adventures</h3>
              </div>
              <div className="grid sm:grid-cols-3 gap-4 text-center">
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <div className="text-2xl mb-2">🇪🇸</div>
                  <p className="text-white font-medium">Spain</p>
                  <p className="text-xs text-gray-400">Performance Tour</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <div className="text-2xl mb-2">🇲🇽</div>
                  <p className="text-white font-medium">Cancun</p>
                  <p className="text-xs text-gray-400">Beach Getaway</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <div className="text-2xl mb-2">🏔️</div>
                  <p className="text-white font-medium">Arkansas</p>
                  <p className="text-xs text-gray-400">Nature and State Exploration</p>
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
              "I believe in the power of technology to solve real-world problems and make a positive impact on society. 
              Through my work with startups, research labs, and various projects, I strive to create solutions that 
              not only improve productivity but also help others improve their life situations."
            </motion.p>
          </motion.section>
        </div>
      </div>
      
      <ContactIcons />
    </main>
  )
} 