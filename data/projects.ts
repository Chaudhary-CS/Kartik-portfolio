// data/projects.ts
export interface Project {
    slug: string
    title: string
    description: string
    href?: string        // optional override, otherwise `/projects/${slug}`
    image?: string
    techs?: string[]
  }
  
  const projects: Project[] = [
    {
      slug: 'av-simulator',
      title: 'Autonomous Vehicle Simulator',
      description: 'CARLA-based sim with object detection & path planning.',
      image: '/images/av-sim.png',
      techs: ['Python', 'TensorFlow', 'CARLA']
    },
    {
      slug: 'studyprime',
      title: 'StudyPrime Learning App',
      description: 'A learning-system app using priming & active-recall techniques.',
      image: '/images/studyprime.png',
      techs: ['React', 'Firebase', 'Tailwind']
    },
    // …add your other projects
  ]
  
  export default projects
  