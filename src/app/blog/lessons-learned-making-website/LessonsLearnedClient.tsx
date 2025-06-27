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
          className="max-w-4xl mx-auto px-6 pb-24"
        >
          {/* Introduction */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-white/10">
            <p className="text-lg text-gray-200 leading-relaxed">
              {`Building a developer portfolio isn't just about showcasing your work—it's a journey that teaches you as much about software development as any formal project. Over the past month, I've discovered that the real value of creating this portfolio wasn't just the final product, but the lessons learned along the way.`}
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
              <h2 className="text-3xl md:text-4xl font-bold text-white">Technical Stack Choices Create Ripple Effects</h2>
            </div>
            
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50">
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                <strong className="text-blue-300">The Decision:</strong> I chose Next.js 14 with TypeScript, Tailwind CSS, and MDX for content management.
              </p>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                <strong className="text-blue-300">What I Learned:</strong> Every technology choice creates a cascade of decisions that either accelerate or complicate your development process.
              </p>
              
              <div className="bg-black/50 rounded-lg p-6 border border-gray-600/30">
                <h3 className="text-xl font-semibold text-blue-300 mb-4">Why Next.js Was the Right Choice</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <span><strong>Static Site Generation</strong> for lightning-fast loading</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <span><strong>Built-in optimization</strong> for images and performance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <span><strong>Seamless deployment</strong> with Vercel</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <span><strong>Developer experience</strong> that kept me productive</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 p-4 bg-blue-900/20 border border-blue-500/30 rounded-lg">
                <p className="text-blue-200 font-medium">
                  <strong>Key Insight:</strong> {`Choose technologies that compound your productivity, not just solve immediate problems.`}
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
              <h2 className="text-3xl md:text-4xl font-bold text-white">Content Architecture Is Code Architecture</h2>
            </div>
            
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50">
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                <strong className="text-purple-300">The Revelation:</strong> How you structure your content is as important as how you structure your code.
              </p>
              
              <div className="bg-black/50 rounded-lg p-6 border border-gray-600/30">
                <h3 className="text-xl font-semibold text-purple-300 mb-4">The Skills Data Structure Breakthrough</h3>
                <p className="text-gray-300 mb-4">Initially, I planned to just list my skills. Then I realized recruiters and developers need different information:</p>
                
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                    <h4 className="text-green-300 font-semibold mb-2">For Recruiters:</h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Quick proficiency levels</li>
                      <li>• Years of experience</li>
                      <li>• Business impact highlighted</li>
                    </ul>
                  </div>
                  <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                    <h4 className="text-blue-300 font-semibold mb-2">For Developers:</h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Technical deep dives</li>
                      <li>• Architecture decisions</li>
                      <li>• Problem-solving approaches</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-purple-900/20 border border-purple-500/30 rounded-lg">
                <p className="text-purple-200 font-medium">
                  <strong>Key Insight:</strong> Design your data structures to serve multiple audiences simultaneously.
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
              <h2 className="text-3xl md:text-4xl font-bold text-white">Performance Is About User Experience</h2>
            </div>
            
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50">
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                <strong className="text-green-300">The Reality:</strong> Users care about load times and smooth interactions, not perfect code architecture.
              </p>
              
              <div className="bg-black/50 rounded-lg p-6 border border-gray-600/30">
                <h3 className="text-xl font-semibold text-green-300 mb-4">The VantaNet Animation Decision</h3>
                <p className="text-gray-300 mb-4">I wanted impressive animated backgrounds, but had to implement them without destroying performance through dynamic imports and optimized settings.</p>
              </div>

              <div className="mt-6 p-4 bg-green-900/20 border border-green-500/30 rounded-lg">
                <p className="text-green-200 font-medium">
                  <strong>Key Insight:</strong> Impressive features must be implemented efficiently, or they become liabilities.
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
              {`The lessons I learned can save you weeks of development time. Start with your data structure, choose technologies that compound, and always design for your audience.`}
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-200 transform hover:scale-105"
            >
              {`Let's Connect`}
            </a>
          </motion.div>

          {/* Navigation */}
          <div className="mt-16 pt-8 border-t border-gray-800 text-center">
            <a 
              href="/blog/" 
              className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors text-lg font-medium"
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