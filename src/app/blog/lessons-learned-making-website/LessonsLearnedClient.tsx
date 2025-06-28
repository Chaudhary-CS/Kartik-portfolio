"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import ContactIcons from "../../../../components/ContactIcons";

interface PostData {
  title: string;
  date: string;
  readTime: string;
  author: string;
  excerpt: string;
  tags: string[];
}

export default function LessonsLearnedClient({ postData }: { postData: PostData }) {
  return (
    <main className="relative min-h-screen flex flex-col text-white">
      {/* Animated background that covers entire viewport */}
      <motion.div 
        className="fixed inset-0 bg-gradient-to-br from-gray-900 via-black to-blue-900 -z-50"
        style={{ 
          backgroundImage: `
            radial-gradient(circle at 1px 1px, rgba(79, 70, 229, 0.15) 1px, transparent 0),
            linear-gradient(to bottom right, rgba(59, 130, 246, 0.05), rgba(147, 51, 234, 0.05)),
            linear-gradient(to bottom right, rgb(17, 24, 39), rgb(0, 0, 0), rgb(30, 58, 138))
          `,
          backgroundSize: '20px 20px, 100% 100%, 100% 100%'
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      />
      <div className="relative z-10 flex-1">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="pt-24 pb-16 px-6"
        >
          <div className="max-w-4xl mx-auto text-center">
            {/* Tags */}
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {postData.tags.map((tag) => (
                <span 
                  key={tag}
                  className="px-4 py-2 bg-blue-500/20 backdrop-blur-sm text-blue-300 rounded-full text-sm font-medium border border-blue-500/30"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-transparent leading-tight">
              {postData.title}
            </h1>

            {/* Excerpt */}
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              {postData.excerpt}
            </p>

            {/* Meta info */}
            <div className="flex items-center justify-center gap-4 text-gray-400 text-lg">
              <span className="font-medium">{postData.author}</span>
              <span>•</span>
              <span>{postData.date}</span>
              <span>•</span>
              <span>{postData.readTime}</span>
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <motion.article 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.8 }}
          className="max-w-4xl mx-auto px-6 pb-24 overflow-x-hidden"
        >
          {/* Introduction */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-white/10">
            <p className="text-lg text-gray-200 leading-relaxed">
              {`Building a developer portfolio isn't just about showcasing your work, but a worthwhile journey that teaches you as much about software development as any ongoing project that you might be working on. Over the past 3 weeks, I've built this website from scratch and discovered that the real value of creating this portfolio is not just the final product, but the lessons learned along the way. Here are my 5 most critical insights that can save you days and weeks of development time.`}
            </p>
          </div>

          {/* Lesson 1 */}
          <motion.section 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">1</div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Framer Motion + TypeScript = Animation Perfection</h2>
            </div>
            
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50">
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                <strong className="text-blue-300">The Problem I Solved:</strong> {`I needed to have professional page transitions without sacrificing website performance, plus type-safe animations that wouldn't break during refactoring.`}
              </p>
              
              <div className="bg-black/50 rounded-lg p-6 border border-gray-600/30 mb-6">
                <h3 className="text-xl font-semibold text-blue-300 mb-4">The Magic Combination</h3>
                <p className="text-gray-300 mb-4">Using `AnimatePresence` with `usePathname` hook creates seamless route transitions, while timeline-based animations prevent double animations when users visit pages.</p>
                
                <div className="bg-gray-800/50 rounded-lg p-4 mb-4 overflow-hidden">
                  <pre className="text-blue-200 text-sm overflow-x-auto w-full max-w-full">
                    <code>{`<AnimatePresence mode="wait">
  <motion.main
    key={pathname}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
  />
</AnimatePresence>`}</code>
                  </pre>
                </div>
                
                <p className="text-gray-300">The timeline-based approach ensures each page animation completes before the next begins, preventing the jarring experience of overlapping animations.</p>
                
                <div className="bg-gray-800/50 rounded-lg p-4 mt-4 overflow-hidden">
                  <h4 className="text-blue-300 font-semibold mb-2">Hero Section</h4>
                  <pre className="text-blue-200 text-sm overflow-x-auto w-full max-w-full">
                    <code>{`// Hero.tsx - Elements appear in sequence
<motion.h1 
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.4 }}
>
  Hi, I'm Sami Melhem
</motion.h1>

<motion.p 
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.6 }}
>
  Senior at Texas A&M University...
</motion.p>

<motion.div 
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.8 }}
>
  {buttons.map((button, index) => (
    <motion.div
      key={button.href}
      initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: 1.0 + index * 0.1 }}
    >
      {button.label}
    </motion.div>
  ))}
</motion.div>`}</code>
                  </pre>
                </div>
                
                <p className="text-gray-300 mt-4">{`Notice how each element has an increasing delay (0.4s → 0.6s → 0.8s → 1.0s+), creating a smooth cascade effect that guides the user's attention naturally down the page.`}</p>
              </div>

              <div className="mt-6 p-4 bg-blue-900/20 border border-blue-500/30 rounded-lg">
                <p className="text-blue-200 font-medium">
                  <strong>Key Insight:</strong> Type-safe animations with proper timing create professional interactions that recruiters notice and remember.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Lesson 2 */}
          <motion.section 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">2</div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">CI/CD Pipeline Automation Saves Hours Every Week</h2>
            </div>
            
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50">
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                <strong className="text-purple-300">The Problem I Solved:</strong> Manual deployments were time-consuming and error-prone. I needed a deployment strategy that is fast, free, and replicable.
              </p>
              
                            <div className="bg-black/50 rounded-lg p-6 border border-gray-600/30 mb-6">
                <h3 className="text-xl font-semibold text-purple-300 mb-4">The Complete Pipeline Solution</h3>
                
                <div className="space-y-6">
                  <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                    <h4 className="text-green-300 font-semibold mb-2">GitHub Actions Automation:</h4>
                    <p className="text-gray-300 text-sm mb-2">Push to main → automatic build → deploy in minutes</p>
                  </div>
                  
                  <div className="bg-gray-800/50 rounded-lg p-4">
                    <h4 className="text-purple-300 font-semibold mb-3">The 8-Step Automation Process</h4>
                    <p className="text-gray-300 text-sm mb-4">{`Here's the exact workflow that runs automatically on every push:`}</p>
                    
                    <div className="space-y-3">
                      {[
                        { step: 1, name: "Checkout code", desc: "Get latest source from repository", icon: "📁" },
                        { step: 2, name: "Configure Pages", desc: "Set up GitHub Pages environment", icon: "⚙️" },
                        { step: 3, name: "Cache Next.js build", desc: "Speed up builds with intelligent caching", icon: "⚡" },
                        { step: 4, name: "Setup Node.js", desc: "Install Node 20 with npm cache", icon: "📦" },
                        { step: 5, name: "Install dependencies", desc: "npm ci for clean, fast installs", icon: "🔧" },
                        { step: 6, name: "Build", desc: "npm run build → static export", icon: "🏗️" },
                        { step: 7, name: "Upload artifact", desc: "Package /out directory for Pages", icon: "📤" },
                        { step: 8, name: "Deploy to Pages", desc: "Live site updated automatically", icon: "🚀" }
                      ].map(({ step, name, desc, icon }) => (
                        <div key={step} className="p-3 bg-gray-700/30 rounded-lg">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-lg">{icon}</span>
                            <span className="text-purple-300 font-medium text-sm">{step}.</span>
                            <span className="text-white font-medium text-sm">{name}</span>
                          </div>
                          <p className="text-gray-300 text-xs ml-7">{desc}</p>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-4 p-3 bg-green-900/20 border border-green-500/30 rounded-lg">
                      <p className="text-green-200 text-sm">
                        <strong>Total Time:</strong> {`<2 minutes from push to live site`}
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                    <h4 className="text-blue-300 font-semibold mb-2">Custom Domain Setup:</h4>
                    <p className="text-gray-300 text-sm">{`Bought "samimelhem.com" and routed it to "samimelhem.github.io" for professional branding while keeping GitHub's fast, free hosting.`}</p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4 text-center">
                  <h4 className="text-green-300 font-semibold mb-2">Time Savings</h4>
                  <p className="text-gray-300 text-sm">No more manual deployments</p>
                </div>
                <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4 text-center">
                  <h4 className="text-blue-300 font-semibold mb-2">Cost: $0</h4>
                  <p className="text-gray-300 text-sm">GitHub Pages handles traffic spikes</p>
                </div>
                <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-4 text-center">
                  <h4 className="text-purple-300 font-semibold mb-2">Career Showcase</h4>
                  <p className="text-gray-300 text-sm">Demonstrates DevOps skills</p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-purple-900/20 border border-purple-500/30 rounded-lg">
                <p className="text-purple-200 font-medium">
                  <strong>Key Insight:</strong> Choose GitHub Pages over Vercel when you want to demonstrate automation skills AND provide a completely free template others can follow.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Lesson 3 */}
          <motion.section 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold">3</div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">{`The "Key Details" Philosophy`}</h2>
            </div>
            
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50">
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                <strong className="text-green-300">The Problem I Solved:</strong> {`Recruiters need quick assessment tools to evaluate candidates online professionally, developers wanted implementation details that they could understand and learn from, and generic portfolios don't differentiate candidates.`}
              </p>
              
              <div className="space-y-6">
                <div className="bg-black/50 rounded-lg p-6 border border-gray-600/30">
                  <h3 className="text-xl font-semibold text-green-300 mb-4">Data Architecture That Serves Everyone</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                      <h4 className="text-blue-300 font-semibold mb-2">For Recruiters:</h4>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Quantified achievements</li>
                        <li>• Clear proficiency levels</li>
                        <li>• Measurable business impact</li>
                      </ul>
                    </div>
                    <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                      <h4 className="text-green-300 font-semibold mb-2">For Developers:</h4>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Technical deep dives</li>
                        <li>• Problem-solving examples</li>
                        <li>• Replicable code patterns</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-black/50 rounded-lg p-6 border border-gray-600/30">
                  <h3 className="text-xl font-semibold text-green-300 mb-4">Smart Integration Examples</h3>
                  
                  <div className="space-y-6">
                    {/* Contact System */}
                    <div className="bg-gray-800/50 rounded-lg p-4">
                      <h4 className="text-green-300 font-semibold mb-2 flex items-center gap-2">
                        <span className="text-green-400">✓</span>
                        Contact System: Platform-Specific Optimizations
                      </h4>
                      <p className="text-gray-300 text-sm mb-3">Advanced email client integration with intelligent platform detection and fallback mechanisms:</p>
                      <pre className="text-green-200 text-xs overflow-x-auto bg-gray-900/50 rounded p-3 w-full max-w-full">
                        <code>{`const emailServices = [
  {
    name: 'Gmail',
    icon: SiGmail,
    color: 'text-red-400',
    getUrl: (subject, body) => 
      \`https://mail.google.com/mail/?view=cm&fs=1&to=samilmelhem23@gmail.com&subject=\${encodeURIComponent(subject)}&body=\${encodeURIComponent(body)}\`
  },
  {
    name: 'Outlook',
    icon: MdEmail,
    color: 'text-blue-500',
    getUrl: (subject, body) => {
      const userAgent = navigator.userAgent.toLowerCase()
      // On Windows, try desktop app first
      if (userAgent.includes('windows')) {
        return \`ms-outlook://compose?to=samilmelhem23@gmail.com&subject=\${encodeURIComponent(subject)}&body=\${encodeURIComponent(body)}\`
      }
      // On Mac/iOS, use web version
      return \`https://outlook.live.com/mail/0/deeplink/compose?to=samilmelhem23@gmail.com&subject=\${encodeURIComponent(subject)}&body=\${encodeURIComponent(body)}\`
    }
  },
  {
    name: 'Apple Mail',
    icon: SiApple,
    color: 'text-gray-300',
    getUrl: (subject, body) => 
      \`mailto:samilmelhem23@gmail.com?subject=\${encodeURIComponent(subject)}&body=\${encodeURIComponent(body)}\`,
    isAvailable: () => {
      const userAgent = navigator.userAgent.toLowerCase()
      return userAgent.includes('mac') || userAgent.includes('iphone') || userAgent.includes('ipad')
    }
  }
]`}</code>
                      </pre>
                      
                      <div className="mt-4 space-y-3">
                        <div className="bg-blue-900/20 border border-blue-500/30 rounded p-3">
                          <h5 className="text-blue-300 font-semibold text-xs mb-2">🪟 Windows Outlook Optimization</h5>
                          <p className="text-gray-300 text-xs">
                            • <strong>Desktop-First Strategy:</strong> Attempts `ms-outlook://` protocol to open native app<br/>
                            • <strong>Intelligent Fallback:</strong> 1-second timeout before opening web version<br/>
                            • <strong>Best User Experience:</strong> {`Preserves user's preferred email environment`}
                          </p>
                        </div>
                        
                        <div className="bg-gray-900/20 border border-gray-500/30 rounded p-3">
                          <h5 className="text-gray-300 font-semibold text-xs mb-2">🍎 Apple Ecosystem Integration</h5>
                          <p className="text-gray-300 text-xs">
                            • <strong>Device Detection:</strong> Only shows Apple Mail on Mac/iPhone/iPad devices<br/>
                            • <strong>Native Protocol:</strong> Uses `mailto:` for seamless system integration<br/>
                            • <strong>Cross-Device Sync:</strong> Leverages iCloud email synchronization
                          </p>
                        </div>
                        
                        <div className="bg-red-900/20 border border-red-500/30 rounded p-3">
                          <h5 className="text-red-300 font-semibold text-xs mb-2">📧 Gmail Web Optimization</h5>
                          <p className="text-gray-300 text-xs">
                            • <strong>Universal Compatibility:</strong> Works across all platforms and browsers<br/>
                            • <strong>Pre-filled Forms:</strong> Automatic subject/body population with URL encoding<br/>
                            • <strong>Professional Routing:</strong> Direct compose interface bypass
                          </p>
                        </div>
                        
                        <div className="bg-green-900/20 border border-green-500/30 rounded p-3">
                          <h5 className="text-green-300 font-semibold text-xs mb-2">⚡ Technical Implementation</h5>
                          <p className="text-gray-300 text-xs">
                            • <strong>Real-Time Detection:</strong> `navigator.userAgent` parsing for accurate platform identification<br/>
                            • <strong>Security-First:</strong> `encodeURIComponent()` prevents injection attacks<br/>
                            • <strong>UX Enhancement:</strong> Dynamic dropdown positioning to prevent off-screen rendering<br/>
                            • <strong>Performance:</strong> Client-side processing eliminates server dependencies
                          </p>
                        </div>
                      </div>
                      
                      <p className="text-gray-300 text-xs mt-4">
                        💡 <Link href="/contact/" className="text-blue-400 hover:text-blue-300 underline font-bold">See it in action</Link> to try the platform detection and experience the optimizations firsthand
                      </p>
                    </div>

                    {/* File Organization */}
                    <div className="bg-gray-800/50 rounded-lg p-4">
                      <h4 className="text-green-300 font-semibold mb-2 flex items-center gap-2">
                        <span className="text-green-400">✓</span>
                        File Organization: Professional Structure
                      </h4>
                      <p className="text-gray-300 text-sm mb-3">Clear separation of concerns that recruiters immediately recognize:</p>
                      <pre className="text-green-200 text-xs overflow-x-auto bg-gray-900/50 rounded p-3 w-full max-w-full">
                        <code>{`samimelhem-portfolio/
├── components/              # 14 reusable UI components
│   ├── AboutPreview.tsx     # Homepage about section
│   ├── BlogCard.tsx         # Blog post preview cards
│   ├── BlogListClient.tsx   # Blog listing page
│   ├── CarlaIcon.tsx        # CARLA project icon
│   ├── ClientLayout.tsx     # Page transitions & animations
│   ├── ContactIcons.tsx     # Social media links
│   ├── ConvexIcon.tsx       # Convex database icon
│   ├── FeaturedInFront.tsx  # Homepage featured content
│   ├── Footer.tsx           # Site footer
│   ├── Hero.tsx             # Landing page hero section
│   ├── Navbar.tsx           # Navigation header
│   ├── ProjectCard.tsx      # Project preview cards
│   ├── SkillIcon.tsx        # Technology skill badges
│   └── VantaNet.tsx         # Animated background
├── data/                    # Structured data layer
│   ├── projects.ts          # Project metadata & achievements
│   └── skills.ts            # Technical expertise & experience
├── src/app/                 # Next.js 14 app router structure
│   ├── about/page.tsx       # Personal background & education
│   ├── blog/                # Content management system
│   │   └── page.tsx         # Blog listing page
│   ├── contact/page.tsx     # Smart contact form
│   ├── projects/            # Dynamic project showcase
│   │   ├── [slug]/          # Individual project pages
│   │   └── page.tsx         # Projects listing
│   ├── skills/              # Technical expertise display
│   │   ├── [slug]/          # Individual skill deep-dives
│   │   └── page.tsx         # Skills overview
│   ├── globals.css          # Global styles & animations
│   ├── layout.tsx           # Root layout & metadata
│   └── page.tsx             # Homepage
├── types/                   # TypeScript definitions
└── .github/workflows/       # CI/CD automation`}</code>
                      </pre>
                      <p className="text-gray-300 text-xs mt-2">
                        💡 <a href="https://github.com/SamiMelhem/samimelhem-portfolio/" target="_blank" className="text-green-400 hover:text-green-300 underline font-bold">Explore the structure</a> - Full source code and implementation details
                      </p>
                    </div>

                    {/* Code Documentation */}
                    <div className="bg-gray-800/50 rounded-lg p-4">
                      <h4 className="text-green-300 font-semibold mb-2 flex items-center gap-2">
                        <span className="text-green-400">✓</span>
                        Documentation: Technical + Business Value
                      </h4>
                      
                      <div className="space-y-4">
                        <div>
                          <p className="text-gray-300 text-sm mb-2">
                            <strong>Project Example:</strong> <Link href="/projects/save-gas/" className="text-blue-400 hover:text-blue-300 underline font-semibold">SaveGas App</Link>
                          </p>
                          <pre className="text-blue-200 text-xs overflow-x-auto bg-gray-900/50 rounded p-3 w-full max-w-full">
                            <code>{`{
  title: 'SaveGas',
  description: 'Real-time gas price tracking application that helps users save up to $0.30 per gallon',
  
  // For recruiters: Clear business metrics
  achievements: [
    'Real-time gas price tracking that helps users save an average of $0.15-$0.30 per gallon',
    'Interactive map interface with turn-by-turn navigation to selected stations',
    'Secure authentication system processing 100+ gas station data points in real-time'
  ],
  
  // For developers: Technical implementation
  techs: ['React', 'TypeScript', 'Convex', 'Auth0', 'Vite', 'Tailwind CSS'],
  longDescription: 'Built a real-time gas price tracking application with 60-second refresh system to optimize API calls while maintaining strict privacy standards...'
}`}</code>
                          </pre>
                        </div>

                        <div>
                          <p className="text-gray-300 text-sm mb-2">
                            <strong>Skill Example:</strong> <Link href="/skills/python/" className="text-purple-400 hover:text-purple-300 underline font-semibold">Python Expertise</Link>
                          </p>
                          <pre className="text-purple-200 text-xs overflow-x-auto bg-gray-900/50 rounded p-3 w-full max-w-full">
                            <code>{`{
  name: 'Python',
  proficiency: 'Advanced',
  experience: '4+ years',
  
  // For recruiters: Experience metrics
  internships: 4,
  researchRoles: 2,
  publications: 1,
  
  // For developers: Technical deep dive
  technicalDeepDive: \`**Core Concepts I'm Proficient In:**
  - Advanced Pandas operations for DataFrame manipulation
  - Async/await patterns for full-stack communication
  - Type hints implementation with Pydantic for LLM training pipelines
  
  **Complex Problem-Solving Examples:**
  Architected comprehensive carbon footprint tracking system at INTERA 
  that automated data collection using Selenium, processed environmental 
  datasets with Pandas, and created interactive visualizations...\`
}`}</code>
                          </pre>
                          <p className="text-gray-300 text-xs mt-2">
                            💡 <strong>Browse the data structure:</strong> <a href="https://github.com/SamiMelhem/samimelhem-portfolio/blob/main/data/projects.ts/" target="_blank" className="text-blue-400 hover:text-blue-300 underline">projects.ts</a> • <a href="https://github.com/SamiMelhem/samimelhem-portfolio/blob/main/data/skills.ts/" target="_blank" className="text-purple-400 hover:text-purple-300 underline">skills.ts</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-green-900/20 border border-green-500/30 rounded-lg">
                <p className="text-green-200 font-medium">
                  <strong>Key Insight:</strong> Structure your data and code to serve multiple audiences—this demonstrates strategic thinking that employers value.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Lesson 4 */}
          <motion.section 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold">4</div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Performance Optimization Through Strategic Lazy Loading</h2>
            </div>
            
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50">
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                <strong className="text-orange-300">The Problem I Solved:</strong> Complex animations and components were slowing initial page load, while needing maintainable architecture and static generation benefits.
              </p>
              
              <div className="space-y-6">
                <div className="bg-black/50 rounded-lg p-6 border border-gray-600/30">
                  <h3 className="text-xl font-semibold text-orange-300 mb-4">The Three-Pillar Approach</h3>
                  
                  <div className="space-y-4">
                    <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                      <h4 className="text-blue-300 font-semibold mb-2">Strategic Lazy Loading: VantaNet Background</h4>
                      <p className="text-gray-300 text-sm mb-3">Complex 3D animations loaded only when needed with intelligent cleanup:</p>
                      <div className="bg-gray-800/50 rounded p-3 overflow-hidden">
                        <pre className="text-blue-200 text-xs overflow-x-auto w-full max-w-full">
                          <code>{`// components/VantaNet.tsx - Strategic lazy loading implementation
'use client'

import { useState, useRef, useEffect } from 'react'
import NET from 'vanta/dist/vanta.net.min'
import * as THREE from 'three'

export default function VantaNet() {
  const [vantaEffect, setVantaEffect] = useState<VantaNetEffect | null>(null)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Only load when element is mounted and effect doesn't exist
    if (!vantaEffect && ref.current) {
      setVantaEffect(
        NET({
          THREE,                  // Heavy 3D library
          el: ref.current,        // DOM element binding
          color: 0x0fffff,        // Optimized settings
          backgroundColor: 0x0,   
          points: 12.0,           // Performance-balanced config
          maxDistance: 25.0,
          spacing: 18.0
        })
      )
    }
    
    // Critical cleanup prevents memory leaks
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  return <div ref={ref} className="fixed inset-0 -z-10" />
}`}</code>
                        </pre>
                      </div>
                      <div className="mt-3 space-y-2">
                        <div className="text-gray-300 text-xs">
                          <strong className="text-blue-300">Key Optimizations:</strong>
                        </div>
                        <div className="text-gray-300 text-xs">
                          • <strong>Conditional Loading:</strong> Only creates effect when DOM element exists<br/>
                          • <strong>Memory Management:</strong> Proper cleanup prevents memory leaks<br/>
                          • <strong>Performance Settings:</strong> Balanced points/spacing for smooth animation<br/>
                          • <strong>Client-Side Only:</strong> {`'use client' ensures no SSR performance impact`}
                        </div>
                        <p className="text-gray-300 text-xs mt-3">
                          💡 <a href="https://github.com/SamiMelhem/samimelhem-portfolio/blob/main/components/VantaNet.tsx/" target="_blank" className="text-blue-400 hover:text-blue-300 underline font-bold">View full component</a> - See this exact implementation running on every page
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                      <h4 className="text-green-300 font-semibold mb-2">Component Architecture:</h4>
                      <p className="text-gray-300 text-sm">{`'use client' only when needed—server components by default for better performance`}</p>
                    </div>
                    
                    <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-4">
                      <h4 className="text-purple-300 font-semibold mb-2">Next.js Static Generation:</h4>
                      <p className="text-gray-300 text-sm">{`output: 'export' for lightning-fast static sites with dynamic capabilities`}</p>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4 text-center">
                    <h4 className="text-green-300 font-semibold mb-2">Load Speed</h4>
                    <p className="text-gray-300 text-sm">First contentful paint under 1 second</p>
                  </div>
                  <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4 text-center">
                    <h4 className="text-blue-300 font-semibold mb-2">User Experience</h4>
                    <p className="text-gray-300 text-sm">Smooth interactions without penalties</p>
                  </div>
                  <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-4 text-center">
                    <h4 className="text-purple-300 font-semibold mb-2">SEO Benefits</h4>
                    <p className="text-gray-300 text-sm">Static generation improves rankings</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-orange-900/20 border border-orange-500/30 rounded-lg">
                <p className="text-orange-200 font-medium">
                  <strong>Key Insight:</strong> {`Architecture decisions made early determine your app's performance ceiling—optimize from day one, not as an afterthought.`}
                </p>
              </div>
            </div>
          </motion.section>

          {/* Lesson 5 */}
          <motion.section 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center text-white font-bold">5</div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Mobile-First Responsive Design Prevents Redesign Later</h2>
            </div>
            
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50">
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                <strong className="text-pink-300">The Problem I Solved:</strong> Desktop-first designs break on mobile devices, touch interactions need different UX patterns, and responsive design as an afterthought creates expensive technical debt.
              </p>
              
              <div className="bg-black/50 rounded-lg p-6 border border-gray-600/30 mb-6">
                <h3 className="text-xl font-semibold text-pink-300 mb-4">The Mobile-First Strategy</h3>
                
                <div className="space-y-4">
                  <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                    <h4 className="text-blue-300 font-semibold mb-2">Responsive State Management:</h4>
                    <div className="bg-gray-800/50 rounded p-2 mb-2 overflow-hidden">
                      <pre className="text-blue-200 text-xs overflow-x-auto w-full max-w-full">
                        <code>{`const [isMobile, setIsMobile] = useState(false)
useEffect(() => {
  const checkMobile = () => setIsMobile(window.innerWidth < 768)
  window.addEventListener('resize', checkMobile)
}, [])`}</code>
                      </pre>
                    </div>
                  </div>
                  
                  <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                    <h4 className="text-green-300 font-semibold mb-2">Touch-First Interactions:</h4>
                    <p className="text-gray-300 text-sm mb-3">Advanced swipe navigation with live drag preview and intelligent gesture detection:</p>
                    
                    <div className="space-y-4">
                      <div className="bg-gray-800/50 rounded-lg p-4">
                        <h5 className="text-green-300 font-semibold mb-2 text-sm">Swipe Navigation with Live Preview</h5>
                        <pre className="text-green-200 text-xs overflow-x-auto bg-gray-900/50 rounded p-3 w-full max-w-full">
                          <code>{`// components/FeaturedInFront.tsx - Touch interaction system
const [touchStart, setTouchStart] = useState<number | null>(null)
const [touchEnd, setTouchEnd] = useState<number | null>(null)
const [dragOffset, setDragOffset] = useState(0)

const onTouchStart = (e: React.TouchEvent) => {
  setTouchEnd(null)
  setTouchStart(e.targetTouches[0].clientX)
  setDragOffset(0)
}

const onTouchMove = (e: React.TouchEvent) => {
  if (!touchStart) return
  
  const currentTouch = e.targetTouches[0].clientX
  setTouchEnd(currentTouch)
  
  // Live drag preview - user sees movement immediately
  const offset = currentTouch - touchStart
  setDragOffset(offset)
}

const onTouchEnd = () => {
  if (!touchStart || !touchEnd) {
    setDragOffset(0)
    return
  }
  
  const distance = touchStart - touchEnd
  const isLeftSwipe = distance > minSwipeDistance
  const isRightSwipe = distance < -minSwipeDistance

  if (isLeftSwipe && currentIndex < featured.length - 1) {
    setCurrentIndex(currentIndex + 1)
  }
  if (isRightSwipe && currentIndex > 0) {
    setCurrentIndex(currentIndex - 1)
  }
  
  setDragOffset(0)
}`}</code>
                        </pre>
                        
                        <div className="mt-3 space-y-2">
                          <div className="text-gray-300 text-xs">
                            <strong className="text-green-300">Key Features:</strong>
                          </div>
                          <div className="text-gray-300 text-xs">
                            • <strong>Live Preview:</strong> Users see content move as they drag<br/>
                            • <strong>Gesture Detection:</strong> 50px minimum distance prevents accidental swipes<br/>
                            • <strong>State Management:</strong> Tracks touch lifecycle with proper cleanup<br/>
                            • <strong>Visual Feedback:</strong> Immediate response to touch input
                          </div>
                        </div>
                      </div>

                      <div className="bg-gray-800/50 rounded-lg p-4">
                        <h5 className="text-green-300 font-semibold mb-2 text-sm">Mobile-Optimized Layout Switching</h5>
                        <pre className="text-green-200 text-xs overflow-x-auto bg-gray-900/50 rounded p-3 w-full max-w-full">
                          <code>{`{isMobile ? (
  // Mobile: Full-width swipeable carousel
  <div className="w-full px-4">
    <div className="overflow-hidden rounded-xl">
      <div 
        className="flex transition-transform duration-300 ease-out"
        style={{ 
          transform: \`translateX(calc(-\${currentIndex * 100}% + \${dragOffset}px))\`,
          scrollbarWidth: 'none', 
          msOverflowStyle: 'none' 
        }}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {featured.map((proj) => (
          <div className="flex-shrink-0 w-full">
            <ProjectCard {...proj} />
          </div>
        ))}
      </div>
    </div>
  </div>
) : (
  // Desktop: Fixed-width centered display with arrow navigation
  <div className="w-[450px] lg:w-[500px] xl:w-[550px]">
    <ProjectCard {...featured[currentIndex]} />
  </div>
)}`}</code>
                        </pre>
                        
                        <div className="mt-3 space-y-2">
                          <div className="text-gray-300 text-xs">
                            <strong className="text-green-300">Architecture Decisions:</strong>
                          </div>
                          <div className="text-gray-300 text-xs">
                            • <strong>Conditional Rendering:</strong> Completely different components for mobile vs desktop<br/>
                            • <strong>Touch Zones:</strong> Full-width touch areas on mobile for easier interaction<br/>
                            • <strong>Performance:</strong> CSS transforms for smooth 60fps animations<br/>
                            • <strong>Accessibility:</strong> Maintains keyboard navigation and screen reader support
                          </div>
                        </div>
                      </div>

                      <div className="bg-gray-800/50 rounded-lg p-4">
                        <h5 className="text-green-300 font-semibold mb-2 text-sm">Mobile Navigation Menu</h5>
                        <pre className="text-green-200 text-xs overflow-x-auto bg-gray-900/50 rounded p-3 w-full max-w-full">
                          <code>{`// components/Navbar.tsx - Touch-optimized mobile menu
const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

// Prevent body scroll when mobile menu is open
useEffect(() => {
  if (mobileMenuOpen) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'unset'
  }
  return () => {
    document.body.style.overflow = 'unset'
  }
}, [mobileMenuOpen])

// Animated hamburger with touch feedback
<button
  className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 z-50"
  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
  aria-label="Toggle mobile menu"
>
  <motion.span
    className="w-6 h-0.5 bg-white transition-all duration-300"
    animate={mobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
  />
  <motion.span
    className="w-6 h-0.5 bg-white transition-all duration-300"
    animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
  />
  <motion.span
    className="w-6 h-0.5 bg-white transition-all duration-300"
    animate={mobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
  />
</button>`}</code>
                        </pre>
                        
                        <div className="mt-3 space-y-2">
                          <div className="text-gray-300 text-xs">
                            <strong className="text-green-300">UX Enhancements:</strong>
                          </div>
                          <div className="text-gray-300 text-xs">
                            • <strong>Visual Feedback:</strong> Animated hamburger ↔ X transformation<br/>
                            • <strong>Touch Targets:</strong> 44px minimum touch target size for accessibility<br/>
                            • <strong>Body Lock:</strong> Prevents background scrolling when menu is open<br/>
                            • <strong>Backdrop Dismiss:</strong> Touch outside menu to close
                          </div>
                        </div>
                      </div>

                      <div className="bg-gray-800/50 rounded-lg p-4">
                        <h5 className="text-green-300 font-semibold mb-2 text-sm">Touch-Optimized Interactive Elements</h5>
                        <pre className="text-green-200 text-xs overflow-x-auto bg-gray-900/50 rounded p-3 w-full max-w-full">
                          <code>{`// Touch-friendly button sizing and spacing
const buttonStyle = {
  // Minimum 44px touch target (iOS/Android guidelines)
  minHeight: '44px',
  minWidth: '44px',
  // Adequate spacing between touch targets
  margin: '8px',
  // Visual feedback for touch states
  transform: 'scale(1)',
  transition: 'all 0.2s ease'
}

// Hover effects adapted for touch
.touch-friendly-button {
  @media (hover: hover) {
    &:hover { transform: scale(1.05); }
  }
  
  // Touch-specific interactions
  &:active { 
    transform: scale(0.95);
    background-color: rgba(255, 255, 255, 0.1);
  }
}`}</code>
                        </pre>
                        
                        <div className="mt-3 space-y-2">
                          <div className="text-gray-300 text-xs">
                            <strong className="text-green-300">Implementation Details:</strong>
                          </div>
                          <div className="text-gray-300 text-xs">
                            • <strong>Touch Guidelines:</strong> Follows iOS/Android 44px minimum touch target<br/>
                            • <strong>Hover Detection:</strong> Uses CSS @media (hover: hover) to detect touch devices<br/>
                            • <strong>Active States:</strong> Immediate feedback on touch with scale animation<br/>
                            • <strong>Spacing:</strong> Generous gaps prevent accidental touches
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 text-xs mt-4">
                      💡 <Link href="/" className="text-green-400 hover:text-green-300 underline font-bold">Try it yourself</Link> - Visit the homepage on mobile and swipe through the featured projects, or test the mobile navigation menu
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
                  <h4 className="text-red-300 font-semibold mb-2">The Cost of Desktop-First:</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• 60%+ of portfolio views are mobile</li>
                    <li>• Expensive redesigns later</li>
                    <li>• Poor user experience</li>
                  </ul>
                </div>
                <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                  <h4 className="text-green-300 font-semibold mb-2">Mobile-First Benefits:</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Progressive enhancement</li>
                    <li>• No technical debt</li>
                    <li>• Professional standard</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 bg-pink-900/20 border border-pink-500/30 rounded-lg">
                <p className="text-pink-200 font-medium">
                  <strong>Key Insight:</strong> Design for mobile constraints first, then enhance for desktop—this prevents expensive redesigns and ensures professional quality across all devices.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Summary Section */}
          <motion.section 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="bg-gradient-to-r from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-600/30">
              <h2 className="text-3xl font-bold text-center text-white mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Key Takeaways: 5 Lessons That Transform Development
              </h2>
              
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-blue-900/20 border border-blue-500/30 rounded-lg">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">1</div>
                    <div>
                      <h3 className="text-blue-300 font-semibold mb-1">Timeline-Based Animations</h3>
                      <p className="text-gray-300 text-sm">Framer Motion + TypeScript creates professional page transitions with sequential delays (0.4s → 0.6s → 0.8s → 1.0s+) that guide user attention naturally.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-purple-900/20 border border-purple-500/30 rounded-lg">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">2</div>
                    <div>
                      <h3 className="text-purple-300 font-semibold mb-1">Automated CI/CD Pipeline</h3>
                      <p className="text-gray-300 text-sm">GitHub Actions deploys in &lt;1 minute with 8-step automation: checkout → build → deploy. Free hosting + custom domain = professional presence without costs.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-green-900/20 border border-green-500/30 rounded-lg">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">3</div>
                    <div>
                      <h3 className="text-green-300 font-semibold mb-1">Dual-Audience Data Architecture</h3>
                      <p className="text-gray-300 text-sm">Structure content for both recruiters (business metrics) and developers (technical deep-dives). Smart contact integration, organized file structure, and comprehensive documentation.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-orange-900/20 border border-orange-500/30 rounded-lg">
                    <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">4</div>
                    <div>
                      <h3 className="text-orange-300 font-semibold mb-1">Strategic Lazy Loading</h3>
                      <p className="text-gray-300 text-sm">{`Complex 3D animations loaded only when needed with intelligent cleanup. 'use client' only when necessary, maintaining static generation benefits.`}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-pink-900/20 border border-pink-500/30 rounded-lg">
                    <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">5</div>
                    <div>
                      <h3 className="text-pink-300 font-semibold mb-1">Touch-First Mobile Design</h3>
                      <p className="text-gray-300 text-sm">Advanced swipe navigation with live drag preview, 44px touch targets, and conditional rendering. Design for mobile constraints first, enhance for desktop.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-500/30 rounded-lg text-center">
                <p className="text-blue-200 font-medium text-lg">
                  <strong>The Meta-Lesson:</strong> Every architectural decision compounds. Choose technologies and patterns that serve multiple purposes and scale with your growth.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Call to Action */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/30 text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Build Your Own Portfolio?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              These 5 lessons can save you weeks of development time and technical debt. From timeline-based animations to CI/CD automation, touch-first design to strategic architecture—build something that scales with your career.
            </p>
            <Link 
              href="/contact/" 
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-200 transform hover:scale-105"
            >
              {`Let's Connect`}
            </Link>
          </motion.div>

          {/* Navigation */}
          <div className="mt-16 pt-8 border-t border-gray-800 text-center">
            <Link 
              href="/blog/" 
              className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors text-lg font-medium"
            >
              ← Back to Blog
            </Link>
          </div>
        </motion.article>
      </div>

      <ContactIcons />
    </main>
  );
} 