// data/projects.ts
export interface Project {
    slug: string
    title: string
    description: string
    longDescription?: string
    href?: string        // optional override, otherwise `/projects/${slug}/`
    image?: string
    techs?: string[]
    github?: string
    liveDemo?: string
    featured?: boolean
    date?: string
    achievements?: string[]
}

const projects: Project[] = [
  {
    slug: 'bull-mart',
    title: 'Bull-Mart',
    description: 'A full-stack web application for USF students to buy and sell used products.',
    longDescription: 'Built Bull-Mart, a full-stack web application using HTML/CSS, React.js, Node.js, and MongoDB, enabling USF students to buy and sell used products while managing user profiles, listings, and transactions. Designed responsive interfaces with Bootstrap, integrated Google Maps API for location-based features, and implemented JWT authentication for secure, role-based access control.',
    image: '/images/projects/bull-mart.png',
    techs: ['HTML/CSS', 'MongoDB', 'React.js', 'Node.js', 'Bootstrap'],
    github: '',
    featured: true,
    date: 'November 2023 – Feb 2024',
    achievements: [
        'Enabled USF students to buy and sell used products',
        'Managed user profiles, listings, and transactions',
        'Designed responsive interfaces with Bootstrap',
        'Integrated Google Maps API for location-based features',
        'Implemented JWT authentication for secure, role-based access control'
    ]
  },
  {
    slug: 'client-data-management-system',
    title: 'Client Data Management System',
    description: 'A desktop application for financial institutions to manage client data.',
    longDescription: 'Developed a client data management application using Python, MySQL, and Tkinter to streamline secure client information handling for financial institutions, enabling efficient data entry, retrieval, and reporting. Utilized SQL to design and manage a database, ensuring data accuracy and security through structured queries, optimizing data integrity and accessibility for improved client service and regulatory compliance.',
    image: '/images/projects/client-data-management.png',
    techs: ['Python', 'MySQL', 'Tkinter'],
    github: '',
    featured: true,
    date: 'May 2021 – July 2021',
    achievements: [
        'Streamlined secure client information handling for financial institutions',
        'Enabled efficient data entry, retrieval, and reporting',
        'Utilized SQL to design and manage a database',
        'Ensured data accuracy and security through structured queries',
        'Optimized data integrity and accessibility for improved client service and regulatory compliance'
    ]
  }
]

export default projects
