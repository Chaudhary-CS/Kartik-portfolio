"use client";
import { motion } from "framer-motion";
import ContactIcons from "../../../../components/ContactIcons";

interface PostData {
  title: string;
  date: string;
  readTime: string;
  author: string;
  excerpt: string;
  tags: string[];
}

export default function WhyBloggingMattersClient({ postData }: { postData: PostData }) {
  return (
    <main className="relative min-h-screen text-white">
      <div className="relative z-10">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="pt-24 pb-16 px-6"
        >
          <div className="max-w-4xl mx-auto text-center">
            {/* Tags */}
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {postData.tags.map((tag) => (
                <span 
                  key={tag}
                  className="px-4 py-2 bg-pink-500/20 backdrop-blur-sm text-pink-300 rounded-full text-sm font-medium border border-pink-500/30"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-pink-100 to-purple-300 bg-clip-text text-transparent leading-tight">
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
          transition={{ duration: 0.4, delay: 0.6 }}
          className="max-w-4xl mx-auto px-6 pb-24"
        >
          {/* Introduction */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-white/10">
            <p className="text-lg text-gray-200 leading-relaxed">
              In 2025, we're experiencing a fundamental shift in how technical skills are valued. ChatGPT can write code, AI can solve complex algorithms, and automated tools can handle many tasks that once required deep technical expertise. So what separates good developers from great ones? It's not just what you know—it's how effectively you can communicate what you know.
            </p>
          </div>

          {/* The New Landscape */}
          <motion.section 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">1</div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">The New Career Landscape</h2>
            </div>
            
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-red-300 mb-4">What AI Changed</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-3">
                      <span className="text-red-400 mt-1">⚡</span>
                      <span>Generate boilerplate code in seconds</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-400 mt-1">⚡</span>
                      <span>Get explanations for complex algorithms</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-400 mt-1">⚡</span>
                      <span>Debug issues with AI assistance</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-400 mt-1">⚡</span>
                      <span>Learn new frameworks rapidly</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-green-300 mb-4">What AI Can't Replace</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 mt-1">✓</span>
                      <span>Real-world problem-solving experience</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 mt-1">✓</span>
                      <span>Context from multiple projects and domains</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 mt-1">✓</span>
                      <span>Ability to synthesize and teach concepts</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 mt-1">✓</span>
                      <span>Personal perspective on technical trade-offs</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 bg-purple-900/20 border border-purple-500/30 rounded-lg">
                <p className="text-purple-200 font-medium text-center">
                  <strong>This is exactly what technical blogging showcases.</strong>
                </p>
              </div>
            </div>
          </motion.section>

          {/* Communication Premium */}
          <motion.section 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold">2</div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">The Communication Premium</h2>
            </div>
            
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50">
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                <strong className="text-pink-300">Why Companies Pay More for Communicators:</strong>
              </p>
              
              <div className="space-y-6">
                <div className="bg-black/50 rounded-lg p-6 border border-gray-600/30">
                  <h4 className="text-lg font-semibold text-pink-300 mb-2">Team Scaling</h4>
                  <p className="text-gray-300">As teams grow, the ability to document decisions, explain architecture, and onboard new developers becomes exponentially more valuable.</p>
                </div>
                
                <div className="bg-black/50 rounded-lg p-6 border border-gray-600/30">
                  <h4 className="text-lg font-semibold text-pink-300 mb-2">Cross-functional Impact</h4>
                  <p className="text-gray-300">Modern development requires working with product managers, designers, and stakeholders who need technical concepts translated into business value.</p>
                </div>
                
                <div className="bg-black/50 rounded-lg p-6 border border-gray-600/30">
                  <h4 className="text-lg font-semibold text-pink-300 mb-2">Knowledge Retention</h4>
                  <p className="text-gray-300">Companies lose millions when key developers leave without proper documentation. Those who can capture and transfer knowledge become indispensable.</p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-pink-900/20 to-orange-900/20 border border-pink-500/30 rounded-lg">
                <h3 className="text-xl font-semibold text-pink-200 mb-4">The Data Behind Communication Skills</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="text-gray-300">
                    <p className="mb-2">• Advance to senior roles <strong className="text-pink-300">2-3x faster</strong></p>
                    <p className="mb-2">• Command <strong className="text-pink-300">higher salaries</strong> at every level</p>
                  </div>
                  <div className="text-gray-300">
                    <p className="mb-2">• More likely chosen for <strong className="text-pink-300">high-visibility projects</strong></p>
                    <p className="mb-2">• Better <strong className="text-pink-300">job security</strong> during economic downturns</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Technical Blogging Benefits */}
          <motion.section 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold">3</div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Technical Blogging as Career Insurance</h2>
            </div>
            
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50">
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                <strong className="text-orange-300">Why Smart Developers Blog:</strong> In an uncertain economy, your blog becomes proof of your thinking, problem-solving, and communication abilities.
              </p>
              
              <div className="space-y-6">
                <div className="bg-black/50 rounded-lg p-6 border border-gray-600/30">
                  <h4 className="text-lg font-semibold text-orange-300 mb-2">Portfolio of Thinking</h4>
                  <p className="text-gray-300">Employers can see how you approach problems, not just the final solutions. This shows your thought process and methodology.</p>
                </div>
                
                <div className="bg-black/50 rounded-lg p-6 border border-gray-600/30">
                  <h4 className="text-lg font-semibold text-orange-300 mb-2">Industry Recognition</h4>
                  <p className="text-gray-300">Well-written technical content gets shared, commented on, and referenced. This builds your reputation beyond your immediate network.</p>
                </div>
                
                <div className="bg-black/50 rounded-lg p-6 border border-gray-600/30">
                  <h4 className="text-lg font-semibold text-orange-300 mb-2">Future-Proof Skills</h4>
                  <p className="text-gray-300">While frameworks change constantly, the ability to learn, synthesize, and teach remains valuable regardless of which technologies dominate the market.</p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-orange-900/20 border border-orange-500/30 rounded-lg">
                <p className="text-orange-200 font-medium">
                  <strong>Key Insight:</strong> Your blog isn't just content—it's proof that you can think clearly and communicate effectively under your own motivation.
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
            className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30 text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Technical Blogging?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              The best time to start was yesterday. The second best time is now. Your unique perspective and experience have value—share them with the world.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200 transform hover:scale-105"
            >
              Let's Connect
            </a>
          </motion.div>

          {/* Navigation */}
          <div className="mt-16 pt-8 border-t border-gray-800 text-center">
            <a 
              href="/blog" 
              className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors text-lg font-medium"
            >
              ← Back to Blog
            </a>
          </div>
        </motion.article>
      </div>

      <ContactIcons />
    </main>
  );
} 