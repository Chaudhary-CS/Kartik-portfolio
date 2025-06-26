// src/components/FeaturedInFront.tsx  (client component)
"use client";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
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
  posts: Array<{ slug: string; title: string; date: string; excerpt: string; image?: string }>;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Swipe detection
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && currentIndex < featured.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
    if (isRightSwipe && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    
    const container = scrollContainerRef.current;
    const containerWidth = container.clientWidth;
    const cardWidth = container.children[0]?.clientWidth || 0;
    const gap = window.innerWidth < 768 ? 16 : 32;
    const cardOffset = (containerWidth - cardWidth) / 2;
    
    if (direction === 'left') {
      const newIndex = Math.max(0, currentIndex - 1);
      setCurrentIndex(newIndex);
      const scrollLeft = newIndex * (cardWidth + gap) - cardOffset;
      container.scrollTo({
        left: Math.max(0, scrollLeft),
        behavior: 'smooth'
      });
    } else {
      const maxIndex = Math.max(0, featured.length - 1);
      const newIndex = Math.min(maxIndex, currentIndex + 1);
      setCurrentIndex(newIndex);
      const scrollLeft = newIndex * (cardWidth + gap) - cardOffset;
      container.scrollTo({
        left: Math.max(0, scrollLeft),
        behavior: 'smooth'
      });
    }
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const containerWidth = container.clientWidth;
      const cardWidth = container.children[0]?.clientWidth || 0;
      const gap = window.innerWidth < 768 ? 16 : 32;
      const cardOffset = (containerWidth - cardWidth) / 2;
      const scrollLeft = index * (cardWidth + gap) - cardOffset;
      container.scrollTo({
        left: Math.max(0, scrollLeft),
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-2 sm:px-4" style={{ color: '#ffffff' }}>
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
            {/* Navigation Arrows - Desktop Only */}
            {!isMobile && currentIndex > 0 && (
              <button
                onClick={() => scroll('left')}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-gray-800/80 hover:bg-gray-700/90 border border-gray-600 hover:border-teal-400 rounded-full p-3 transition-all duration-300 opacity-60 hover:opacity-100"
              >
                <FaChevronLeft className="text-lg text-white hover:text-teal-400" />
              </button>
            )}
            
            {!isMobile && currentIndex < featured.length - 1 && (
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
              className={`flex overflow-x-hidden scroll-smooth ${
                isMobile 
                  ? 'gap-4 px-4' 
                  : 'gap-8 px-0'
              }`}
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              onTouchStart={isMobile ? onTouchStart : undefined}
              onTouchMove={isMobile ? onTouchMove : undefined}
              onTouchEnd={isMobile ? onTouchEnd : undefined}
            >
              {isMobile ? (
                // Mobile: Show only current card
                <div className="w-full flex justify-center">
                  <div
                    key={featured[currentIndex].slug}
                    className="individual-project-card relative rounded-xl overflow-hidden cursor-pointer flex-shrink-0 
                             w-[calc(100vw-2rem)] max-w-[350px]
                             shadow-[0_0_10px_rgba(20,184,166,0.3)] hover:shadow-[0_0_20px_rgba(20,184,166,0.6)]
                             border border-white hover:border-teal-400 transition-all duration-300"
                  >
                    <ProjectCard {...featured[currentIndex]} />
                  </div>
                </div>
              ) : (
                // Desktop: Show all cards in slider
                featured.map((proj) => (
                  <div
                    key={proj.slug}
                    className="individual-project-card relative rounded-xl overflow-hidden cursor-pointer flex-shrink-0 
                             w-[380px] lg:w-[400px]
                             shadow-[0_0_10px_rgba(20,184,166,0.3)] hover:shadow-[0_0_20px_rgba(20,184,166,0.6)]
                             border border-white hover:border-teal-400 transition-all duration-300"
                  >
                    <ProjectCard {...proj} />
                  </div>
                ))
              )}
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 gap-2">
              {featured.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 ${
                    isMobile
                      ? 'w-4 h-4 rounded-full' // Larger dots for mobile
                      : 'w-3 h-3 rounded-full'
                  } ${
                    index === currentIndex 
                      ? 'bg-teal-400 scale-110' 
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                  aria-label={`Go to project ${index + 1}`}
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
