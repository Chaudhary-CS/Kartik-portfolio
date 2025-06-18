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
}

export const skills: Skill[] = [
  // Programming Languages
  {
    name: 'Python',
    slug: 'python',
    category: 'Programming Languages',
    proficiency: 'Advanced',
    description: 'My go-to language for data science, machine learning, and backend development. I\'ve built everything from autonomous vehicle simulations to financial modeling tools using Python\'s extensive ecosystem.',
    experience: '4+ years',
    projects: ['av-simulator', 'financial-modeling-tool'],
    icon: 'SiPython',
    color: '#3776ab'
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
    slug: 'c++',
    category: 'Programming Languages',
    proficiency: 'Intermediate',
    description: 'Used for performance-critical applications and system programming. Applied it in client-server systems where real-time processing was essential.',
    experience: '2+ years',
    projects: ['client-server-system'],
    icon: 'SiCplusplus',
    color: '#00599c'
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
    description: 'Proficient in building scalable backend services with Node.js. I\'ve created APIs that handle thousands of concurrent connections.',
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
    description: 'Extensive experience building and training neural networks for computer vision and autonomous systems. I\'ve implemented everything from CNNs to reinforcement learning models.',
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
    description: 'Deep learning framework I use for research and production. Particularly effective for computer vision tasks in autonomous vehicle projects.',
    experience: '2+ years',
    projects: ['av-simulator'],
    icon: 'SiPytorch',
    color: '#ee4c2c'
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
    category: 'AI/ML',
    proficiency: 'Advanced',
    description: 'Specialized in autonomous vehicle simulation using CARLA. I\'ve built complex scenarios for testing self-driving algorithms in realistic environments.',
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
    category: 'AI/ML',
    proficiency: 'Advanced',
    description: 'Essential library for data manipulation and analysis in Python. Used extensively for financial modeling and data preprocessing.',
    experience: '3+ years',
    projects: ['av-simulator', 'financial-modeling-tool'],
    icon: 'SiPandas',
    color: '#150458'
  },
  {
    name: 'NumPy',
    slug: 'numpy',
    category: 'AI/ML',
    proficiency: 'Advanced',
    description: 'Fundamental package for scientific computing with Python. Critical for numerical computations in ML and data analysis projects.',
    experience: '3+ years',
    projects: ['av-simulator', 'financial-modeling-tool'],
    icon: 'SiNumpy',
    color: '#013243'
  },
  {
    name: 'Matplotlib',
    slug: 'matplotlib',
    category: 'AI/ML',
    proficiency: 'Advanced',
    description: 'Primary plotting library for creating static, animated, and interactive visualizations in Python.',
    experience: '3+ years',
    projects: ['av-simulator'],
    icon: 'FcScatterPlot',
    color: '#1f77b4'
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
    description: 'Business intelligence tool for creating interactive data visualizations and dashboards.',
    experience: '1+ years',
    projects: ['av-simulator'],
    icon: 'SiTableau',
    color: '#e97627'
  },
  {
    name: 'Power BI',
    slug: 'power-bi',
    category: 'Tools & Platforms',
    proficiency: 'Intermediate',
    description: 'Microsoft\'s business analytics tool for creating reports and dashboards from various data sources.',
    experience: '1+ years',
    projects: ['av-simulator'],
    icon: 'IoBusiness',
    color: '#f2c800'
  },
  {
    name: 'Plotly',
    slug: 'plotly',
    category: 'AI/ML',
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
    category: 'AI/ML',
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
    category: 'Programming Languages',
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
    category: 'Programming Languages',
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
    description: 'Advanced spreadsheet application for data analysis, financial modeling, and business intelligence.',
    experience: '5+ years',
    projects: ['av-simulator'],
    icon: 'PiMicrosoftExcelLogoFill',
    color: '#217346'
  },

  // AI & Emerging Technologies
  {
    name: 'Prompt Engineering',
    slug: 'prompt-engineering',
    category: 'AI/ML',
    proficiency: 'Advanced',
    description: 'Specialized in crafting effective prompts for AI systems. Created educational GPT bots featured in industry publications.',
    experience: '1+ years',
    projects: ['class-primer'],
    icon: 'SiOpenai',
    color: '#9333ea'
  },
  {
    name: 'GPT Agent Creation',
    slug: 'gpt-agent-creation',
    category: 'AI/ML',
    proficiency: 'Advanced',
    description: 'Expertise in building custom GPT agents for specific use cases. Featured work in educational technology.',
    experience: '1+ years',
    projects: ['class-primer'],
    icon: 'SiOpenai',
    color: '#10b981'
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