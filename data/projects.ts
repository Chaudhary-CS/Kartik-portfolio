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
    slug: 'navai',
    title: 'NavAI',
    description: 'An on-device AI agent for macOS that navigates apps and performs actions like a human user.',
    longDescription: 'NavAI is a macOS AI agent that interprets what is visible on your screen, plans a sequence of steps, and executes actions — clicking, typing, and navigating — across 50+ apps without any setup. It uses a multimodal system combining visual understanding with language context, running entirely on-device for full privacy.',
    image: '/images/projects/navai.png',
    techs: ['Python', 'macOS', 'Multimodal AI', 'Computer Vision', 'LLM'],
    liveDemo: 'https://getnav.app',
    featured: true,
    date: 'Jan 2026 – Present',
    achievements: [
      'Built an on-device AI agent that automates multi-step tasks across macOS apps',
      'Designed a multimodal perception system combining vision and language understanding',
      'Supports 50+ popular macOS applications with zero configuration required',
      'Runs entirely locally — screen data never leaves the device',
    ],
  },
  {
    slug: 'applytune',
    title: 'ApplyTune',
    description: 'An AI-powered tool that optimizes resumes for ATS compatibility with job descriptions.',
    longDescription: 'ApplyTune is a full-stack AI application that parses resumes and job descriptions, extracts relevant keywords using LLMs, and scores and rewrites content for ATS compatibility. It preserves the original resume format while intelligently surfacing the most relevant experience for each role.',
    techs: ['Python', 'React.js', 'Node.js', 'LLM', 'NLP', 'ATS Parsing'],
    github: 'https://github.com/Chaudhary-CS/ApplyTune',
    featured: true,
    date: 'Jan 2026 – Present',
    achievements: [
      'Built end-to-end resume parsing and ATS scoring pipeline using LLMs',
      'Implemented adaptive keyword extraction tailored to individual job descriptions',
      'Preserved original resume formatting while rewriting content for ATS optimization',
      'Designed a full-stack application with React frontend and Python backend',
    ],
  },
  {
    slug: 'flowai',
    title: 'FlowAI',
    description: 'A Chrome extension that acts as a universal memory layer across ChatGPT, Claude, and Perplexity.',
    longDescription: 'FlowAI is a browser extension that lets users store personal contexts, project details, and preferences in named "Buckets" and inject them into any AI chat with a single click. All data lives in the browser via Chrome Storage API with no server dependency, and a glassmorphic UI integrates seamlessly into ChatGPT, Claude, and Perplexity.',
    techs: ['React', 'Vite', 'Tailwind CSS', 'Chrome Extension API', 'JavaScript'],
    github: 'https://github.com/Chaudhary-CS/FlowAI',
    featured: true,
    date: 'Feb 2026 – Present',
    achievements: [
      'Built a Chrome extension bridging persistent memory across multiple AI platforms',
      'Implemented context injection via DOM manipulation content scripts',
      'Designed a privacy-first architecture — all data stored locally in the browser',
      'Created a glassmorphic UI that blends natively into major AI chat interfaces',
    ],
  },
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
