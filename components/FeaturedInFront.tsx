// src/components/FeaturedInFront.tsx  (client component)
"use client";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import BlogCard    from "./BlogCard";

export default function FeaturedAndBlog({
  featured,
  posts,
}: {
  featured: Array<{
    title: string;
    description: string;
    href: string;
    image: string;
    techs: string[];
    slug: string;
  }>;
  posts: Array<{ slug: string; title: string; date: string; excerpt: string }>;
}) {
  return (
    <div className="max-w-4xl mx-auto px-4" style={{ color: '#ffffff' }}>
      <section className="relative">
        {/* Dark overlay */}
        <div className="absolute inset-0 pointer-events-none" />
        
        <motion.div
          className="relative z-10 py-12"
          style={{ color: '#ffffff' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-3xl font-semibold mb-6 underline decoration-teal-400 underline-offset-4 text-center"
            style={{ color: '#ffffff' }}
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4 }}
          >
            Featured Projects
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6">
            {featured.map((proj, i) => (
              <motion.div
                key={proj.slug}
                className="group relative rounded-xl overflow-hidden p-6 cursor-pointer
                           shadow-[0_0_10px_rgba(20,184,166,0.3)] hover:shadow-[0_0_20px_rgba(20,184,166,0.6)]
                           border border-transparent hover:border-teal-400 transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <ProjectCard {...proj} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Latest Posts */}
      <section className="relative">
        {/* Dark overlay */}
        <div className="absolute inset-0 pointer-events-none" />
        
        <motion.div
          className="relative z-10 py-12"
          style={{ color: '#ffffff' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.h2
            className="text-3xl font-semibold mb-6 underline decoration-teal-400 underline-offset-4 text-center"
            style={{ color: '#ffffff' }}
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4 }}
          >
            Latest Posts
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6">
            {posts.map((post, i) => (
              <motion.div
                key={post.slug}
                className="group relative rounded-xl overflow-hidden p-6 cursor-pointer
                           shadow-[0_0_10px_rgba(20,184,166,0.3)] hover:shadow-[0_0_20px_rgba(20,184,166,0.6)]
                           border border-transparent hover:border-teal-400 transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <BlogCard {...post} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
