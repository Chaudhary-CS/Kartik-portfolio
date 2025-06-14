// src/app/page.tsx
import Hero from '../../components/Hero';
import AboutPreview from '../../components/AboutPreview';
import FeaturedInFront from '../../components/FeaturedInFront';
import ContactIcons from '../../components/ContactIcons';

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
  // ---- data loading stays here on the server ----
  const featured = [
    {
      title: 'Autonomous Vehicle Simulator',
      description: 'Built a CARLA-based simulation with real-time object detection.',
      href: '/projects/av-simulator',
      image: '/images/av-sim.png',
      techs: ['Python', 'TensorFlow', 'CARLA'],
      slug: 'av-simulator'
    },
    {
      title: 'StudyPrime Learning App',
      description: 'A learning-system app using priming & active-recall techniques.',
      href: '/projects/studyprime',
      image: '/images/studyprime.png',
      techs: ['React', 'Firebase', 'Tailwind'],
      slug: 'studyprime',
    },
  ];

  // load latest blog posts
  const blogDir = path.join(process.cwd(), 'content/blog');
  const posts = fs.readdirSync(blogDir).map((fname) => {
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
      <FeaturedInFront featured={featured} posts={posts} />
      <ContactIcons />
    </>
  );
}
