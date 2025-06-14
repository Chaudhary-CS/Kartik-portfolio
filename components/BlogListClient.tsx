'use client'

import { motion } from "framer-motion";
import BlogCard from "./BlogCard";
import ContactIcons from "./ContactIcons";

interface PostMeta {
    slug: string;
    title: string;
    date: string;
    excerpt?: string;
    image?: string;
}

export default function BlogListClient({ posts }: { posts: PostMeta[] }) {
    return (
        <main className="relative min-h-screen flex flex-col text-white">
            <div className="relative z-10 flex-1 max-w-4xl mx-auto py-8 sm:py-12 px-4">
                {/* animated, underlined title */}
                <motion.h1
                    className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-8 sm:mb-12 underline decoration-teal-400"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                >
                    Blog
                </motion.h1>

                <motion.div 
                    className="grid gap-6 sm:gap-8 md:grid-cols-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                >
                    {posts.map((post) => (
                        <div
                            key={post.slug}
                            className="group relative rounded-xl overflow-hidden cursor-pointer
                                       shadow-[0_0_10px_rgba(20,184,166,0.3)] hover:shadow-[0_0_20px_rgba(20,184,166,0.6)]
                                       border border-white hover:border-teal-400 transition-all duration-300"
                        >
                            <BlogCard {...post}/>
                        </div>
                    ))}
                </motion.div>
            </div>
            
            <ContactIcons />
        </main>
    );
}