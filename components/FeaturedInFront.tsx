// src/components/FeaturedInFront.tsx  (client component)
"use client";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ProjectCard from "./ProjectCard";
import WorkExperienceCard from "./WorkExperienceCard";
import Link from "next/link";

export default function FeaturedInFront({
  featured,
  workExperience,
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
  workExperience: Array<{
    company: string;
    title: string;
    dates: string;
    logo: string;
    description: string[];
  }>;
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

  // Preload all featured project images for smooth navigation
  useEffect(() => {
    const preloadImages = () => {
      featured.forEach((project) => {
        if (project.image) {
          const img = new Image();
          img.src = project.image;
        }
      });
    };

    // Preload images after component mounts
    preloadImages();
  }, [featured]);

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

  return (
    <section className="relative">
      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-4 py-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex flex-col lg:flex-row-reverse gap-12">

          {/* Section: Featured Projects */}
          <div className="w-full lg:w-2/3">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">
                Featured Projects
              </h2>
              <div className="hidden md:flex items-center space-x-2">
                <button 
                  onClick={() => scroll('left')} 
                  disabled={currentIndex === 0}
                  className="p-2 rounded-full bg-gray-800/60 hover:bg-gray-700/80 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  aria-label="Previous Project"
                >
                  <FaChevronLeft />
                </button>
                <button 
                  onClick={() => scroll('right')} 
                  disabled={currentIndex === featured.length - 1}
                  className="p-2 rounded-full bg-gray-800/60 hover:bg-gray-700/80 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  aria-label="Next Project"
                >
                  <FaChevronRight />
                </button>
              </div>
            </div>

            {/* Carousel for Projects */}
            <div 
              className="relative overflow-hidden"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              <motion.div
                ref={scrollContainerRef}
                className="flex"
                animate={{ x: `-${currentIndex * 100}%` }}
                style={{ transform: `translateX(calc(-${currentIndex * 100}% + ${dragOffset}px))` }}
                transition={{ type: "spring", stiffness: 300, damping: 30, duration: 0.5 }}
              >
                {featured.map((project, index) => (
                  <div key={index} className="flex-shrink-0 w-full">
                    <ProjectCard {...project} />
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Mobile-only navigation buttons */}
            <div className="md:hidden flex justify-center items-center space-x-4 mt-4">
              <button 
                onClick={() => scroll('left')} 
                disabled={currentIndex === 0}
                className="p-2 rounded-full bg-gray-800/60 hover:bg-gray-700/80 disabled:opacity-50 transition-all"
                aria-label="Previous Project"
              >
                <FaChevronLeft />
              </button>
              <div className="flex space-x-2">
                {featured.map((_, index) => (
                  <button 
                    key={index} 
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${currentIndex === index ? 'bg-teal-400' : 'bg-gray-600'}`}
                    aria-label={`Go to project ${index + 1}`}
                  />
                ))}
              </div>
              <button 
                onClick={() => scroll('right')} 
                disabled={currentIndex === featured.length - 1}
                className="p-2 rounded-full bg-gray-800/60 hover:bg-gray-700/80 disabled:opacity-50 transition-all"
                aria-label="Next Project"
              >
                <FaChevronRight />
              </button>
            </div>
          </div>

          {/* Section: Work Experience */}
          <div className="w-full lg:w-1/3 flex flex-col space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-white">
                Work Experience
              </h2>
              <Link
                href="/work-experience/"
                className="text-teal-400 hover:text-teal-300 transition-colors"
              >
                See All
              </Link>
            </div>
            <div className="space-y-4">
              {workExperience.slice(0, 2).map((job, index) => (
                <WorkExperienceCard key={index} job={job} index={index} />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
