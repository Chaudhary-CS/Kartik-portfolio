'use client'

import { motion, Variants } from "framer-motion";
import BlogCard from "./BlogCard";
import ContactIcons from "./ContactIcons";

interface PostMeta {
    slug: string;
    title: string;
    date: string;
    excerpt?: string;
    image?: string;
}

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

export default function BlogListClient({ posts }: { posts: PostMeta[] }) {
    return (
        <main className="relative min-h-screen flex flex-col text-white">
            {/* dark overlay */}
            <div className="fixed inset-0 bg-black/50" />

            <div className="relative z-10 flex-1 max-w-4xl mx-auto py-8 sm:py-12 px-4">
                {/* animated, underlined title */}
                <motion.h1
                    className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-8 sm:mb-12 underline decoration-teal-400"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={cardVariants}
                    transition={{ duration: 0.6 }}
                >
                    Blog
                </motion.h1>

                <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
                    {posts.map((post, i) => (
                        <motion.div
                            key={post.slug}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={cardVariants}
                            transition={{ delay: 0.1 * i, duration: 0.5 }}
                        >
                            <BlogCard {...post}/>
                        </motion.div>
                    ))}
                </div>
            </div>
            
            <ContactIcons />
        </main>
    );
}