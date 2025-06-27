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
  const [dragOffset, setDragOffset] = useState(0);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Enhanced swipe detection with live preview
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setDragOffset(0);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (!touchStart) return;
    
    const currentTouch = e.targetTouches[0].clientX;
    setTouchEnd(currentTouch);
    
    // Calculate drag offset for live preview
    const offset = currentTouch - touchStart;
    setDragOffset(offset);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) {
      setDragOffset(0);
      return;
    }
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && currentIndex < featured.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
    if (isRightSwipe && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
    
    setDragOffset(0);
  };

  const scroll = (direction: 'left' | 'right') => {
    if (direction === 'left') {
      setCurrentIndex(prev => Math.max(0, prev - 1));
    } else {
      setCurrentIndex(prev => Math.min(featured.length - 1, prev + 1));
    }
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
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
            {!isMobile && featured.length > 1 && (
              <>
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
              </>
            )}

            {/* Projects Slider */}
            <div className="flex justify-center w-full">
              {isMobile ? (
                // Mobile: Swipeable carousel
                <div className="w-full px-4">
                  <div className="overflow-hidden rounded-xl">
                    <div 
                      ref={scrollContainerRef}
                      className="flex transition-transform duration-300 ease-out"
                      style={{ 
                        transform: `translateX(calc(-${currentIndex * 100}% + ${dragOffset}px))`,
                        scrollbarWidth: 'none', 
                        msOverflowStyle: 'none' 
                      }}
                      onTouchStart={onTouchStart}
                      onTouchMove={onTouchMove}
                      onTouchEnd={onTouchEnd}
                    >
                      {featured.map((proj) => (
                        <div
                          key={proj.slug}
                          className="individual-project-card relative rounded-xl overflow-hidden cursor-pointer flex-shrink-0 w-full
                                   shadow-[0_0_10px_rgba(20,184,166,0.3)] hover:shadow-[0_0_20px_rgba(20,184,166,0.6)]
                                   border border-white hover:border-teal-400 transition-all duration-300"
                        >
                          <ProjectCard {...proj} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                // Desktop: Show only current card, centered
                <div className="w-[450px] lg:w-[500px] xl:w-[550px]">
                  <div
                    key={featured[currentIndex].slug}
                    className="individual-project-card relative rounded-xl overflow-hidden cursor-pointer
                             shadow-[0_0_10px_rgba(20,184,166,0.3)] hover:shadow-[0_0_20px_rgba(20,184,166,0.6)]
                             border border-white hover:border-teal-400 transition-all duration-300"
                  >
                    <ProjectCard {...featured[currentIndex]} />
                  </div>
                </div>
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
