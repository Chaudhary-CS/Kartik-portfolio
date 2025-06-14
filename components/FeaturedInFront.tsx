// src/components/FeaturedInFront.tsx  (client component)
"use client";
import { motion, Variants } from "framer-motion";
import ProjectCard from "./ProjectCard";
import BlogCard    from "./BlogCard";

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const headingVariants: Variants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
}

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
    <div className="max-w-4xl mx-auto px-4 text-white">
      <motion.section
        className="py-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={sectionVariants}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          className="text-3xl font-semibold mb-6 underline decoration-teal-400 underline-offset-4 text-center text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={headingVariants}
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
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={sectionVariants}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <ProjectCard {...proj} />
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Latest Posts */}
      <motion.section
        className="py-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={sectionVariants}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.h2
          className="text-3xl font-semibold mb-6 underline decoration-teal-400 underline-offset-4 text-center text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={headingVariants}
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
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={sectionVariants}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <BlogCard {...post} />
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
