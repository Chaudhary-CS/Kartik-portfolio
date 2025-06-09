// src/app/page.tsx
import React from 'react';
import Hero from '../../components/Hero';
import AboutPreview from '../../components/AboutPreview';
import ProjectCard from '../../components/ProjectCard';
import BlogCard from '../../components/BlogCard';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
}

export default function Home() {
  // load featured projects (you'll create a data file next)
  const featured = [
    {
      title: 'Autonomous Vehicle Simulator',
      description: 'Built a CARLA-based simulation with real-time object detection.',
      href: '/projects/av-simulator',
      image: '/images/av-sim.png',
      techs: ['Python', 'TensorFlow', 'CARLA'],
      slug: 'av-simulator'
    },
  ];

  // load latest blog posts
  const blogDir = path.join(process.cwd(), 'content/blog');
  const files = fs.readdirSync(blogDir).filter((f) => f.endsWith('.mdx'));
  const posts = files.map((fname) => {
    const src = fs.readFileSync(path.join(blogDir, fname), 'utf-8');
    const { data } = matter(src);
    return { slug: fname.replace(/\.mdx$/, ''), ...data } as BlogPost;
  })
  .sort((a,b) => b.date.localeCompare(a.date))
  .slice(0, 3);

  return (
    <>
      <Hero />
      <AboutPreview />
      <section className="py-12">
        <h2 className="text-3xl font-semibold mb-6">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {featured.map(proj => (
            <ProjectCard key={proj.slug} {...proj} />
          ))}
        </div>
      </section>
      <section className="py-12">
        <h2 className="text-3xl font-semibold mb-6">Latest Posts</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {posts.map(post => (
            <BlogCard key={post.slug} slug={post.slug} title={post.title} date={post.date} excerpt={post.excerpt} />
          ))}
        </div>
      </section>
    </>
  );
}
