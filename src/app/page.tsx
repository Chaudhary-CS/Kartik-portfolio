// src/app/page.tsx
import Hero from '../../components/Hero';
import AboutPreview from '../../components/AboutPreview';
import FeaturedInFront from '../../components/FeaturedInFront';
import ContactIcons from '../../components/ContactIcons';
import projects from '../../data/projects';

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
  // Filter featured projects from the actual projects data
  const featured = projects
    .filter(project => project.featured)
    .map(project => ({
      title: project.title,
      description: project.description,
      href: project.href ?? `/projects/${project.slug}`,
      image: project.image || '/images/project-placeholder.png',
      techs: project.techs || [],
      slug: project.slug,
      github: project.github,
      liveDemo: project.liveDemo,
      date: project.date
    }));

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
