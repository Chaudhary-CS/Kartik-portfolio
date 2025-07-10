// src/app/page.tsx
import Hero from '../../components/Hero';
import AboutPreview from '../../components/AboutPreview';
import FeaturedInFront from '../../components/FeaturedInFront';
import ContactIcons from '../../components/ContactIcons';
import projects from '../../data/projects';
import { workExperience } from '../../data/work-experience';

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

  return (
    <>
      <Hero />
      <AboutPreview />
      <FeaturedInFront featured={featured} workExperience={workExperience} />
      
      {/* 3D Skills Showcase */}
      {/* Remove the 3D Showcase link/button */}
      
      <ContactIcons />
    </>
  );
}
