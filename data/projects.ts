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
    slug: 'trace-the-change',
    title: 'Trace the Change',
    description: 'A secure and scalable multi-payment donation platform with blockchain integration.',
    longDescription: 'Architected a secure and scalable backend using Java & SpringBoot for a multi-payment donation platform. Engineered REST APIs for real-time processing and managed the full-stack application\'s CI/CD pipeline on Vercel. Achieved recognition among 50+ teams at a Citi Internal Hackathon for a trusted, blockchain-based solution.',
    image: '/images/projects/trace-change.png',
    techs: ['Java', 'Spring Boot', 'AstraDB', 'MetaMask', 'Vercel', 'Blockchain'],
    github: 'https://github.com/Chaudhary-CS/Neueda_Hackathon_2025.git',
    featured: true,
    date: 'June 2025 – Present',
    achievements: [
        'Achieved recognition among 50+ teams at Citi Internal Hackathon',
        'Engineered REST APIs for real-time processing',
        'Managed full-stack application CI/CD pipeline on Vercel',
        'Implemented secure blockchain-based payment system',
        'Built scalable backend architecture with Spring Boot'
    ]
  },
  {
    slug: 'bull-mart',
    title: 'Bull-Mart',
    description: 'A full-stack web application for USF students to buy and sell used products.',
    longDescription: 'Built Bull-Mart, a full-stack web application using HTML/CSS, React.js, Node.js, and MongoDB, enabling USF students to buy and sell used products while managing user profiles, listings, and transactions. Designed responsive interfaces with Bootstrap, integrated Google Maps API for location-based features, and implemented JWT authentication for secure, role-based access control.',
    image: '/images/projects/bull-mart.png',
    techs: ['HTML/CSS', 'MongoDB', 'React.js', 'Node.js', 'Bootstrap', 'JWT'],
    github: 'https://github.com/Chaudhary-CS/Bull_Mart',
    featured: true,
    date: 'May 2021 – July 2021',
    achievements: [
        'Launched full-stack MERN application with 50+ active users',
        'Designed responsive UI with Bootstrap & integrated Google Maps API',
        'Engineered secure authentication system using JWT',
        'Protected 10+ REST API endpoints with role-based access control',
        'Enabled location-based listings for USF students'
    ]
  },
  {
    slug: 'client-data-management-system',
    title: 'Client Data Management System',
    description: 'A desktop application for financial institutions to manage client data securely.',
    longDescription: 'Developed a client data management application using Python, MySQL, and Tkinter to streamline secure client information handling for financial institutions, enabling efficient data entry, retrieval, and reporting. Utilized SQL to design and manage a database, ensuring data accuracy and security through structured queries, optimizing data integrity and accessibility for improved client service and regulatory compliance.',
    image: '/images/projects/client-data-management.png',
    techs: ['Python', 'MySQL', 'Tkinter', 'SQL'],
    github: 'https://github.com/Chaudhary-CS/Student-Sphere.git',
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
