export interface Skill {
  name: string
  slug: string
  category: 'Programming Languages' | 'Frameworks & Libraries' | 'Databases' | 'Tools & Platforms' | 'Cloud & DevOps' | 'AI/ML'
  proficiency: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert'
  description: string
  experience: string // Years of experience or context
  projects: string[] // Project slugs where this skill was used
  icon?: string // Optional icon path
  color: string // Hex color for the skill badge
  internships?: number // Number of internships where this skill was used
  internshipDetails?: string[] // Specific internships where used
  jobs?: number // Number of full-time/part-time jobs where this skill was used
  jobDetails?: string[] // Specific jobs where used
  researchRoles?: number // Number of research positions where this skill was used
  researchDetails?: string[] // Specific research roles where used
  teachingRoles?: number // Number of teaching/TA roles where this skill was used
  teachingDetails?: string[] // Specific teaching roles where used
  certifications?: number // Number of certifications earned for this skill
  certificationDetails?: string[] // Specific certifications earned
  publications?: number // Number of research publications involving this skill
  publicationDetails?: string[] // Specific publications that used this skill
}

export const skills: Skill[] = [
  // Programming Languages
  {
    name: 'Python',
    slug: 'python',
    category: 'Programming Languages',
    proficiency: 'Advanced',
    description: 'My go-to language for data science, machine learning, and backend development. Extensive experience with ML models, data pipelines, and conversational AI systems.',
    experience: '4+ years',
    projects: ['av-simulator', 'financial-modeling-tool'],
    icon: 'SiPython',
    color: '#3776ab',
    internships: 4,
    internshipDetails: ['INTERA Incorporated (Data Science)', 'Pivotal Research Inc.', 'INTERA Incorporated (Data Engineering)', 'Momentum Technologies'],
    jobs: 1,
    jobDetails: ['PitchFact'],
    researchRoles: 2,
    researchDetails: ['TAMU x Soft Interaction Lab', 'Algoverse'],
    teachingRoles: 1,
    teachingDetails: ['CSCE 221 Teaching Assistant'],
    certifications: 2,
    certificationDetails: ['Data Science Math Skills (Coursera)', 'Scientific Computing with Python (freeCodeCamp)'],
    publications: 1,
    publicationDetails: ['ChatGPT 4o Performance on Mechanical Engineering Concept Inventories']
  },
  {
    name: 'TypeScript',
    slug: 'typescript',
    category: 'Programming Languages',
    proficiency: 'Advanced',
    description: 'I prefer TypeScript over JavaScript for larger projects due to its type safety and better development experience. This portfolio is built entirely with TypeScript.',
    experience: '3+ years',
    projects: ['save-gas', 'exped-browser', 'panda-express-pos'],
    icon: 'SiTypescript',
    color: '#3178c6'
  },
  {
    name: 'C++',
    slug: 'cpp',
    category: 'Programming Languages',
    proficiency: 'Intermediate',
    description: 'Used for performance-critical applications and system programming. Applied it in client-server systems where real-time processing was essential.',
    experience: '2+ years',
    projects: ['client-server-system'],
    icon: 'SiCplusplus',
    color: '#00599c',
    teachingRoles: 1,
    teachingDetails: ['CSCE 221 Teaching Assistant']
  },
  {
    name: 'JavaScript',
    slug: 'javascript',
    category: 'Programming Languages',
    proficiency: 'Advanced',
    description: 'Fundamental web programming language for modern web development. Experienced in both frontend and backend JavaScript development.',
    experience: '4+ years',
    projects: ['save-gas', 'exped-browser', 'panda-express-pos'],
    icon: 'SiJavascript',
    color: '#f7df1e',
    certifications: 1,
    certificationDetails: ['JavaScript Algorithms and Data Structures (freeCodeCamp)']
  },

  {
    name: 'HTML/CSS',
    slug: 'html-css',
    category: 'Programming Languages',
    proficiency: 'Advanced',
    description: 'Core web technologies used in frontend development across multiple projects and research applications.',
    experience: '4+ years',
    projects: ['save-gas', 'exped-browser', 'panda-express-pos'],
    icon: 'SiHtml5',
    color: '#e34f26'
  },

  // Frameworks & Libraries
  {
    name: 'React',
    slug: 'react',
    category: 'Frameworks & Libraries',
    proficiency: 'Advanced',
    description: 'My framework of choice for building modern, interactive user interfaces. I\'m comfortable with hooks, context, and advanced patterns.',
    experience: '3+ years',
    projects: ['save-gas', 'exped-browser', 'panda-express-pos'],
    icon: 'SiReact',
    color: '#61dafb'
  },
  {
    name: 'Next.js',
    slug: 'next.js',
    category: 'Frameworks & Libraries',
    proficiency: 'Advanced',
    description: 'I love Next.js for its full-stack capabilities and excellent developer experience. This portfolio showcases my skills with App Router, SSR, and modern Next.js features.',
    experience: '2+ years',
    projects: ['panda-express-pos'],
    icon: 'SiNextdotjs',
    color: '#ffffff'
  },
  {
    name: 'Node.js',
    slug: 'node.js',
    category: 'Frameworks & Libraries',
    proficiency: 'Advanced',
    description: 'Proficient in building scalable backend services with Node.js. I have created APIs that handle thousands of concurrent connections.',
    experience: '3+ years',
    projects: ['save-gas', 'exped-browser', 'panda-express-pos'],
    icon: 'SiNodedotjs',
    color: '#339933'
  },
  {
    name: 'Tailwind CSS',
    slug: 'tailwind-css',
    category: 'Frameworks & Libraries',
    proficiency: 'Advanced',
    description: 'My preferred CSS framework for rapid UI development. I appreciate its utility-first approach and how it speeds up the design process.',
    experience: '2+ years',
    projects: ['save-gas', 'exped-browser', 'panda-express-pos'],
    icon: 'SiTailwindcss',
    color: '#06b6d4'
  },
  {
    name: 'TensorFlow',
    slug: 'tensorflow',
    category: 'AI/ML',
    proficiency: 'Advanced',
    description: 'Extensive experience building and training neural networks for computer vision and autonomous systems. I have implemented everything from CNNs to reinforcement learning models.',
    experience: '3+ years',
    projects: ['av-simulator', 'financial-modeling-tool'],
    icon: 'SiTensorflow',
    color: '#ff6f00'
  },
  {
    name: 'PyTorch',
    slug: 'pytorch',
    category: 'AI/ML',
    proficiency: 'Advanced',
    description: 'Deep learning framework used for research and production. Applied for Physics-Informed Neural Networks (PINNs) and computer vision tasks in autonomous vehicle projects.',
    experience: '2+ years',
    projects: ['av-simulator'],
    icon: 'SiPytorch',
    color: '#ee4c2c',
    internships: 1,
    internshipDetails: ['Momentum Technologies']
  },
  {
    name: 'Electron',
    slug: 'electron',
    category: 'Frameworks & Libraries',
    proficiency: 'Intermediate',
    description: 'Built cross-platform desktop applications with Electron. I understand the challenges of desktop app development and performance optimization.',
    experience: '1+ years',
    projects: ['exped-browser'],
    icon: 'SiElectron',
    color: '#47848f'
  },
  {
    name: 'Express.js',
    slug: 'express.js',
    category: 'Frameworks & Libraries',
    proficiency: 'Advanced',
    description: 'Robust web framework for Node.js applications. Used for building RESTful APIs and handling server-side logic efficiently.',
    experience: '2+ years',
    projects: ['panda-express-pos'],
    icon: 'SiExpress',
    color: '#ffffff'
  },
  {
    name: 'Flask',
    slug: 'flask',
    category: 'Frameworks & Libraries',
    proficiency: 'Advanced',
    description: 'Python web framework used in research work at Texas A&M University & Soft Interaction Lab. Built conversational AI tools for 500+ SANE nurses and backend services for medical training applications.',
    experience: '2+ years',
    projects: [],
    icon: 'SiFlask',
    color: '#000000',
    researchRoles: 1,
    researchDetails: ['TAMU x Soft Interaction Lab']
  },
  {
    name: 'FastAPI',
    slug: 'fastapi',
    category: 'Frameworks & Libraries',
    proficiency: 'Intermediate',
    description: 'Modern Python web framework for building APIs with Uvicorn server deployment. Used for creating high-performance LLM pipelines processing 500+ PDFs weekly and startup evaluation systems.',
    experience: '1+ years',
    projects: [],
    icon: 'SiFastapi',
    color: '#009688',
    jobs: 1,
    jobDetails: ['PitchFact']
  },
  {
    name: 'SQLAlchemy',
    slug: 'sqlalchemy',
    category: 'Frameworks & Libraries',
    proficiency: 'Intermediate',
    description: 'Python SQL toolkit and ORM used for database interactions, data modeling, and handling large-scale transaction processing.',
    experience: '2+ years',
    projects: [],
    icon: 'SiSqlalchemy',
    color: '#d71f00',
    internships: 1,
    internshipDetails: ['Pivotal Research Inc.'],
    researchRoles: 1,
    researchDetails: ['TAMU x Soft Interaction Lab']
  },
  {
    name: 'Selenium',
    slug: 'selenium',
    category: 'Frameworks & Libraries',
    proficiency: 'Intermediate',
    description: 'Web automation framework used for data extraction and testing. Applied for environmental data processing and automated data collection workflows.',
    experience: '1+ years',
    projects: [],
    icon: 'SiSelenium',
    color: '#43b02a',
    internships: 1,
    internshipDetails: ['INTERA Incorporated (Data Science)']
  },

  // Databases
  {
    name: 'PostgreSQL',
    slug: 'postgresql',
    category: 'Databases',
    proficiency: 'Advanced',
    description: 'My database of choice for complex applications. I\'m experienced with advanced features like JSON columns, full-text search, and performance optimization.',
    experience: '3+ years',
    projects: ['panda-express-pos'],
    icon: 'SiPostgresql',
    color: '#336791'
  },
  {
    name: 'MySQL',
    slug: 'mysql',
    category: 'Databases',
    proficiency: 'Intermediate',
    description: 'Relational database management system used at INTERA Incorporated across 2 internships for environmental data modeling and scalable data architectures. Experience with data integrity and multi-department collaboration.',
    experience: '2+ years',
    projects: [],
    icon: 'SiMysql',
    color: '#4479a1',
    internships: 2,
    internshipDetails: ['INTERA Incorporated (Data Science)', 'INTERA Incorporated (Data Engineering)']
  },

  // Cloud & DevOps
  {
    name: 'Vercel',
    slug: 'vercel',
    category: 'Cloud & DevOps',
    proficiency: 'Advanced',
    description: 'My preferred platform for deploying Next.js applications. Excellent integration with modern web development workflows.',
    experience: '2+ years',
    projects: ['save-gas'],
    icon: 'SiVercel',
    color: '#ffffff'
  },
  {
    name: 'Convex',
    slug: 'convex',
    category: 'Cloud & DevOps',
    proficiency: 'Intermediate',
    description: 'Backend-as-a-service platform for real-time applications. Used for building scalable, reactive applications with ease.',
    experience: '1+ years',
    projects: ['save-gas'],
    icon: 'ConvexIcon',
    color: '#f59e0b'
  },
  {
    name: 'Firebase',
    slug: 'firebase',
    category: 'Cloud & DevOps',
    proficiency: 'Intermediate',
    description: 'Google\'s cloud platform used for backend services and real-time data synchronization in conversational AI applications for medical training.',
    experience: '1+ years',
    projects: [],
    icon: 'SiFirebase',
    color: '#ffca28',
    researchRoles: 1,
    researchDetails: ['TAMU x Soft Interaction Lab']
  },

  // Tools & Platforms
  {
    name: 'Vite',
    slug: 'vite',
    category: 'Tools & Platforms',
    proficiency: 'Advanced',
    description: 'Lightning-fast build tool that significantly improves development experience. My go-to for modern frontend development.',
    experience: '2+ years',
    projects: ['save-gas', 'exped-browser'],
    icon: 'SiVite',
    color: '#646cff'
  },
  {
    name: 'CARLA',
    slug: 'carla',
    category: 'Frameworks & Libraries',
    proficiency: 'Advanced',
    description: 'Specialized in autonomous vehicle simulation using CARLA. I have built complex scenarios for testing self-driving algorithms in realistic environments.',
    experience: '1+ years',
    projects: ['av-simulator'],
    icon: 'CarlaIcon',
    color: '#0ea5e9'
  },
  {
    name: 'Auth0',
    slug: 'auth0',
    category: 'Tools & Platforms',
    proficiency: 'Intermediate',
    description: 'Identity and access management platform. Implemented secure authentication systems with social login and role-based access control.',
    experience: '1+ years',
    projects: ['save-gas'],
    icon: 'SiGoogle',
    color: '#eb5424'
  },
  {
    name: 'PostCSS',
    slug: 'postcss',
    category: 'Tools & Platforms',
    proficiency: 'Intermediate',
    description: 'CSS post-processor that extends CSS capabilities. Used for optimizing and transforming CSS in modern build pipelines.',
    experience: '2+ years',
    projects: ['save-gas', 'exped-browser', 'panda-express-pos'],
    icon: 'SiTailwindcss',
    color: '#dd3a0a'
  },

  // Data Science & Analytics
  {
    name: 'Pandas',
    slug: 'pandas',
    category: 'Frameworks & Libraries',
    proficiency: 'Advanced',
    description: 'Essential library for data manipulation and analysis in Python. Used for data processing, ETL pipelines, and financial modeling.',
    experience: '3+ years',
    projects: ['av-simulator', 'financial-modeling-tool'],
    icon: 'SiPandas',
    color: '#150458',
    internships: 3,
    internshipDetails: ['Pivotal Research Inc.', 'INTERA Incorporated (Data Engineering)', 'Momentum Technologies'],
    jobs: 1,
    jobDetails: ['PitchFact']
  },
  {
    name: 'NumPy',
    slug: 'numpy',
    category: 'Frameworks & Libraries',
    proficiency: 'Advanced',
    description: 'Fundamental package for scientific computing with Python. Used for Physics-Informed Neural Networks and numerical computations in ML and data analysis.',
    experience: '3+ years',
    projects: ['av-simulator', 'financial-modeling-tool'],
    icon: 'SiNumpy',
    color: '#013243',
    internships: 3,
    internshipDetails: ['INTERA Incorporated (Data Science)', 'INTERA Incorporated (Data Engineering)', 'Momentum Technologies']
  },
  {
    name: 'Matplotlib',
    slug: 'matplotlib',
    category: 'Frameworks & Libraries',
    proficiency: 'Advanced',
    description: 'Primary plotting library for creating static, animated, and interactive visualizations in Python. Used for data visualization and analysis reporting.',
    experience: '3+ years',
    projects: ['av-simulator'],
    icon: 'FcScatterPlot',
    color: '#1f77b4',
    internships: 2,
    internshipDetails: ['INTERA Incorporated (Data Science)', 'INTERA Incorporated (Data Engineering)']
  },
  {
    name: 'Scikit-Learn',
    slug: 'scikit-learn',
    category: 'AI/ML',
    proficiency: 'Advanced',
    description: 'Go-to library for machine learning in Python. Used for implementing various ML algorithms and model evaluation.',
    experience: '2+ years',
    projects: ['financial-modeling-tool'],
    icon: 'SiScikitlearn',
    color: '#f7931e'
  },
  {
    name: 'OpenCV',
    slug: 'opencv',
    category: 'AI/ML',
    proficiency: 'Intermediate',
    description: 'Computer vision library used for image processing and analysis in autonomous vehicle projects.',
    experience: '1+ years',
    projects: ['av-simulator'],
    icon: 'SiOpencv',
    color: '#5c3ee8'
  },

  // Data Visualization
  {
    name: 'Tableau',
    slug: 'tableau',
    category: 'Tools & Platforms',
    proficiency: 'Intermediate',
    description: 'Business intelligence tool for creating interactive data visualizations and dashboards. Used at INTERA Incorporated across 1 internship for environmental impact tracking and client reporting across 5 countries.',
    experience: '1+ years',
    projects: ['av-simulator'],
    icon: 'SiTableau',
    color: '#e97627',
    internships: 1,
    internshipDetails: ['INTERA Incorporated (Data Science)']
  },
  {
    name: 'Power BI',
    slug: 'power-bi',
    category: 'Tools & Platforms',
    proficiency: 'Intermediate',
    description: 'Microsoft&apos;s business analytics tool for creating reports and dashboards from various data sources. Used at Pivotal Research Inc. across 1 internship for large-scale data analysis and business intelligence reporting.',
    experience: '1+ years',
    projects: ['av-simulator'],
    icon: 'IoBusiness',
    color: '#f2c800'
  },
  {
    name: 'Plotly',
    slug: 'plotly',
    category: 'Frameworks & Libraries',
    proficiency: 'Advanced',
    description: 'Interactive plotting library for creating dynamic, web-based visualizations. Perfect for financial data analysis.',
    experience: '2+ years',
    projects: ['financial-modeling-tool'],
    icon: 'SiPlotly',
    color: '#3f4f75'
  },
  {
    name: 'Dash',
    slug: 'dash',
    category: 'Frameworks & Libraries',
    proficiency: 'Intermediate',
    description: 'Python framework for building analytical web applications. Used for creating interactive financial modeling dashboards.',
    experience: '1+ years',
    projects: ['financial-modeling-tool'],
    icon: 'BiSolidDashboard',
    color: '#0ea5e9'
  },

  // Additional Libraries & Tools
  {
    name: 'Axios',
    slug: 'axios',
    category: 'Frameworks & Libraries',
    proficiency: 'Advanced',
    description: 'Promise-based HTTP client for JavaScript. Essential for making API calls in web applications.',
    experience: '3+ years',
    projects: ['save-gas'],
    icon: 'SiAxios',
    color: '#5a29e4'
  },
  {
    name: 'Radix UI',
    slug: 'radix-ui',
    category: 'Frameworks & Libraries',
    proficiency: 'Intermediate',
    description: 'Low-level UI primitives for building high-quality, accessible design systems and web apps.',
    experience: '1+ years',
    projects: ['exped-browser'],
    icon: 'SiRadixui',
    color: '#ffffff'
  },
  {
    name: 'Lucide React',
    slug: 'lucide-react',
    category: 'Frameworks & Libraries',
    proficiency: 'Advanced',
    description: 'Beautiful & consistent icon toolkit. My preferred icon library for React applications.',
    experience: '2+ years',
    projects: ['exped-browser', 'panda-express-pos'],
    icon: 'SiLucide',
    color: '#f56565'
  },
  {
    name: 'yfinance',
    slug: 'yfinance',
    category: 'Frameworks & Libraries',
    proficiency: 'Advanced',
    description: 'Python library for downloading historical market data from Yahoo Finance. Essential for financial modeling projects.',
    experience: '1+ years',
    projects: ['financial-modeling-tool'],
    icon: 'FaYahoo',
    color: '#720e9e'
  },

  // System Programming
  {
    name: 'TCP/IP',
    slug: 'tcp-ip',
    category: 'Tools & Platforms',
    proficiency: 'Intermediate',
    description: 'Network protocol suite for internet communications. Implemented in client-server systems for reliable data transmission.',
    experience: '1+ years',
    projects: ['client-server-system'],
    icon: 'BsRouterFill',
    color: '#4a90e2'
  },
  {
    name: 'Multithreading',
    slug: 'multithreading',
    category: 'Tools & Platforms',
    proficiency: 'Intermediate',
    description: 'Concurrent programming technique for improving application performance through parallel execution.',
    experience: '2+ years',
    projects: ['client-server-system'],
    icon: 'TbNeedleThread',
    color: '#ff6b6b'
  },
  {
    name: 'Linux',
    slug: 'linux',
    category: 'Tools & Platforms',
    proficiency: 'Advanced',
    description: 'Unix-like operating system. Extensive experience with command-line tools, system administration, and development.',
    experience: '4+ years',
    projects: ['client-server-system'],
    icon: 'SiLinux',
    color: '#fcc624'
  },
  {
    name: 'Sockets',
    slug: 'sockets',
    category: 'Tools & Platforms',
    proficiency: 'Intermediate',
    description: 'Network programming using sockets for inter-process communication over networks.',
    experience: '1+ years',
    projects: ['client-server-system'],
    icon: 'SiSocketdotio',
    color: '#61dafb'
  },

  // Office & Productivity
  {
    name: 'Excel',
    slug: 'excel',
    category: 'Tools & Platforms',
    proficiency: 'Advanced',
    description: 'Advanced spreadsheet application for data analysis, financial modeling, and business intelligence. Used for data processing and analysis.',
    experience: '5+ years',
    projects: ['av-simulator'],
    icon: 'PiMicrosoftExcelLogoFill',
    color: '#217346',
    internships: 4,
    internshipDetails: ['INTERA Incorporated (Data Science)', 'Pivotal Research Inc.', 'INTERA Incorporated (Data Engineering)', 'Momentum Technologies'],
    jobs: 1,
    jobDetails: ['PitchFact']
  },

  // AI & Emerging Technologies
  {
    name: 'Prompt Engineering',
    slug: 'prompt-engineering',
    category: 'AI/ML',
    proficiency: 'Advanced',
    description: 'Specialized in crafting effective prompts for AI systems. Featured work with educational GPT bots.',
    experience: '1+ years',
    projects: ['class-primer'],
    icon: 'SiOpenai',
    color: '#9333ea',
    researchRoles: 1,
    researchDetails: ['TAMU x Soft Interaction Lab'],
    publications: 1,
    publicationDetails: ['ChatGPT 4o Performance on Mechanical Engineering Concept Inventories']
  },
  {
    name: 'GPT Agent Creation',
    slug: 'gpt-agent-creation',
    category: 'AI/ML',
    proficiency: 'Advanced',
    description: 'Expertise in building custom GPT agents for specific use cases. Featured work with educational technology applications.',
    experience: '1+ years',
    projects: ['class-primer'],
    icon: 'SiOpenai',
    color: '#10b981',
    researchRoles: 1,
    researchDetails: ['TAMU x Soft Interaction Lab'],
    publications: 1,
    publicationDetails: ['ChatGPT 4o Performance on Mechanical Engineering Concept Inventories']
  },
  {
    name: 'Educational Technology',
    slug: 'educational-technology',
    category: 'Tools & Platforms',
    proficiency: 'Advanced',
    description: 'Innovative application of technology in educational settings. Created tools that transform learning experiences.',
    experience: '1+ years',
    projects: ['class-primer'],
    icon: 'IoBookOutline',
    color: '#f59e0b'
  },
  {
    name: 'LLM APIs',
    slug: 'llm-apis',
    category: 'AI/ML',
    proficiency: 'Advanced',
    description: 'Large Language Model APIs including OpenAI, Hume.ai, and Anthropic AI SDK. Used for conversational AI development and LLM pipeline creation.',
    experience: '1+ years',
    projects: ['class-primer'],
    icon: 'SiOpenai',
    color: '#412991',
    jobs: 1,
    jobDetails: ['PitchFact'],
    researchRoles: 2,
    researchDetails: ['TAMU x Soft Interaction Lab', 'Algoverse']
  },
  {
    name: 'PDF Processing',
    slug: 'pdf-processing',
    category: 'Tools & Platforms',
    proficiency: 'Intermediate',
    description: 'PDF creation, manipulation, and processing using PyPDF2 and Ghostscript. Applied for automated document processing in startup evaluation pipelines.',
    experience: '1+ years',
    projects: [],
    icon: 'SiAdobeacrobatreader',
    color: '#dc2626',
    jobs: 1,
    jobDetails: ['PitchFact']
  },
  {
    name: 'VBA',
    slug: 'vba',
    category: 'Programming Languages',
    proficiency: 'Intermediate',
    description: 'Microsoft Visual Basic for Applications used for creating customized Excel applications tailored to specific employee needs. Applied at INTERA for automated data processing workflows across 1 internship.',
    experience: '1+ years',
    projects: [],
    icon: 'TbLayoutNavbar',
    color: '#ff8c00',
    internships: 1,
    internshipDetails: ['INTERA Incorporated (Data Engineering)']
  },

]

export const skillCategories = [
  'All',
  'Programming Languages',
  'Frameworks & Libraries', 
  'Databases',
  'AI/ML',
  'Cloud & DevOps',
  'Tools & Platforms'
] as const

export function getSkillBySlug(slug: string): Skill | undefined {
  return skills.find(skill => skill.slug === slug)
}

export function getSkillsByCategory(category: string): Skill[] {
  if (category === 'All') return skills
  return skills.filter(skill => skill.category === category)
}

export function getSkillsByProject(projectSlug: string): Skill[] {
  return skills.filter(skill => skill.projects.includes(projectSlug))
} 