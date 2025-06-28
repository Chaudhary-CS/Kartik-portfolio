// src/app/page.tsx
import Hero from '../../components/Hero';
import AboutPreview from '../../components/AboutPreview';
import FeaturedInFront from '../../components/FeaturedInFront';
import ContactIcons from '../../components/ContactIcons';
import projects from '../../data/projects';

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  image?: string;
}

export default function Home() {
  // ---- data loading stays here on the server ----
  // Filter featured projects from the actual projects data
  const featured = projects
    .filter(project => project.featured)
    .map(project => ({
      title: project.title,
      description: project.description,
      href: project.href ?? `/projects/${project.slug}/`,
      image: project.image || '/images/project-placeholder.png',
      techs: project.techs || [],
      slug: project.slug,
      github: project.github,
      liveDemo: project.liveDemo,
      date: project.date
    }));

  // Define our blog posts manually since we're using React components instead of MDX
  const posts: BlogPost[] = [
    {
      slug: "lessons-learned-making-website",
      title: "5 Key Lessons I Learned from Making This Website (So You Don't Have To)",
      date: "June 28th, 2025",
      excerpt: "Five critical lessons I discovered while building my developer portfolio with Next.js, TypeScript, and modern web technologies - and how you can apply them to your own projects.",
      image: "gradient-gray-blue"
    },
    {
      slug: "why-blogging-matters-today", 
      title: "Why Blogging Matters in Today's Market",
      date: "June 28th, 2025",
      excerpt: "In an AI-driven job market where everyone has access to the same information, your unique perspective and ability to communicate complex ideas clearly has become your most valuable differentiator.",
      image: "gradient-purple-pink"
    }
  ]
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
