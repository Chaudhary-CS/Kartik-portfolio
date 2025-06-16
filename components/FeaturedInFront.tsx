// src/components/FeaturedInFront.tsx  (client component)
"use client";
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
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
    github?: string;
    liveDemo?: string;
    date?: string;
  }>;
  posts: Array<{ slug: string; title: string; date: string; excerpt: string }>;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    
    const container = scrollContainerRef.current;
    const cardWidth = container.children[0]?.clientWidth || 0;
    const gap = 24; // 6 * 4px (gap-6)
    const scrollAmount = cardWidth + gap;
    
    if (direction === 'left') {
      const newIndex = Math.max(0, currentIndex - 1);
      setCurrentIndex(newIndex);
      container.scrollTo({
        left: newIndex * scrollAmount,
        behavior: 'smooth'
      });
    } else {
      const maxIndex = Math.max(0, featured.length - 1);
      const newIndex = Math.min(maxIndex, currentIndex + 1);
      setCurrentIndex(newIndex);
      container.scrollTo({
        left: newIndex * scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4" style={{ color: '#ffffff' }}>
      <section className="relative">
        <motion.div
          className="relative z-10 py-12"
          style={{ color: '#ffffff' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
        >
          <motion.h2
            className="text-3xl font-semibold mb-8 underline decoration-teal-400 underline-offset-4 text-center"
            style={{ color: '#ffffff' }}
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.3 }}
          >
            Featured Projects
          </motion.h2>
          
          {/* Slider Container */}
          <div className="relative slider-container">
            {/* Navigation Arrows */}
            {currentIndex > 0 && (
              <button
                onClick={() => scroll('left')}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-gray-800/80 hover:bg-gray-700/90 border border-gray-600 hover:border-teal-400 rounded-full p-3 transition-all duration-300 opacity-60 hover:opacity-100"
              >
                <FaChevronLeft className="text-lg text-white hover:text-teal-400" />
              </button>
            )}
            
            {currentIndex < featured.length - 1 && (
              <button
                onClick={() => scroll('right')}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-gray-800/80 hover:bg-gray-700/90 border border-gray-600 hover:border-teal-400 rounded-full p-3 transition-all duration-300 opacity-60 hover:opacity-100"
              >
                <FaChevronRight className="text-lg text-white hover:text-teal-400" />
              </button>
            )}

            {/* Projects Slider */}
            <div 
              ref={scrollContainerRef}
              className="flex gap-6 overflow-x-hidden scroll-smooth"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {featured.map((proj, index) => (
                <div
                  key={proj.slug}
                  className="individual-project-card relative rounded-xl overflow-hidden cursor-pointer flex-shrink-0 w-[400px]
                             shadow-[0_0_10px_rgba(20,184,166,0.3)] hover:shadow-[0_0_20px_rgba(20,184,166,0.6)]
                             border border-white hover:border-teal-400 transition-all duration-300"
                >
                  <ProjectCard {...proj} />
                </div>
              ))}
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 gap-2">
              {featured.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    if (scrollContainerRef.current) {
                      const container = scrollContainerRef.current;
                      const cardWidth = container.children[0]?.clientWidth || 0;
                      const gap = 24;
                      const scrollAmount = cardWidth + gap;
                      container.scrollTo({
                        left: index * scrollAmount,
                        behavior: 'smooth'
                      });
                    }
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-teal-400 scale-110' 
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Latest Posts */}
      <section className="relative">
        <motion.div
          className="relative z-10 py-12"
          style={{ color: '#ffffff' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <motion.h2
            className="text-3xl font-semibold mb-6 underline decoration-teal-400 underline-offset-4 text-center"
            style={{ color: '#ffffff' }}
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.3 }}
          >
            Latest Posts
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6">
            {posts.map((post) => (
              <div
                key={post.slug}
                className="group relative rounded-xl overflow-hidden cursor-pointer
                           shadow-[0_0_10px_rgba(20,184,166,0.3)] hover:shadow-[0_0_20px_rgba(20,184,166,0.6)]
                           border border-white hover:border-teal-400 transition-all duration-300"
              >
                <BlogCard {...post} />
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
