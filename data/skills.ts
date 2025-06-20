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
  technicalDeepDive?: string // Detailed technical expertise and problem-solving examples
}

export const skills: Skill[] = [
  // Programming Languages
  {
    name: 'Python',
    slug: 'python',
    category: 'Programming Languages',
    proficiency: 'Advanced',
    description: 'My go-to language for data science, machine learning, and backend development. Specialized in data processing, conversational AI systems, and environmental data pipelines with extensive experience across research, industry, and academic settings.',
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
    publicationDetails: ['ChatGPT 4o Performance on Mechanical Engineering Concept Inventories'],
    technicalDeepDive: `**Core Concepts I'm Proficient In:**
- **Data Processing & Analytics**: Advanced Pandas operations for DataFrame manipulation, Excel file processing, row/column transformations, and complex data aggregation workflows
- **Asynchronous Programming**: Async/await patterns for full-stack communication, enabling efficient frontend-backend data flow and real-time system interactions
- **Type Safety & Data Validation**: Type hints implementation combined with Pydantic for robust data validation, especially in LLM training pipelines and API development
- **Object-Oriented Design**: Strategic use of dataclasses for structured data representation (with performance considerations in mind)
- **Data Visualization Ecosystem**: Advanced plotting and interactive dashboard creation using Matplotlib, Plotly, and Dash for business intelligence applications

**Advanced Libraries & Integration:**
- **Pydantic**: JSON schema validation and data serialization for LLM training pipelines processing 500+ PDFs weekly
- **HTTP Communication**: Advanced usage of Requests library for API integrations, data collection workflows, and external service communications
- **Cloud Integration**: AWS S3 operations using boto3 for cloud-based data storage and retrieval
- **Web Frameworks**: Flask for research applications serving 500+ SANE nurses, FastAPI for high-performance API development
- **Database Integration**: SQLAlchemy ORM for complex data modeling and large-scale transaction processing
- **Automation**: Selenium for web scraping and automated data collection from environmental sources

**Complex Problem-Solving Examples:**

*Environmental Data Pipeline Challenge:*
Architected and implemented a comprehensive carbon footprint tracking system at INTERA Incorporated that automated data collection from multiple company locations using Selenium, processed complex environmental datasets with Pandas, and created interactive visualizations using Plotly and Matplotlib. The system identified key emission sources across different departments and geographical locations, providing actionable insights through automated reporting. This technical solution directly influenced the company founder to launch enterprise-wide carbon reduction initiatives, demonstrating how technical expertise can drive strategic business decisions and improve ESG investment appeal.

*High-Performance LLM Pipeline:*
At PitchFact, designed and built FastAPI-based LLM processing pipelines handling 500+ PDF documents weekly, integrating Pydantic for robust data validation and Pandas for complex startup evaluation analytics. The system required optimization for concurrent processing and reliable data transformation across diverse document formats.

*Medical AI Research Application:*
Developed Flask-based conversational AI tools at TAMU's Soft Interaction Lab serving 500+ SANE nurses, integrating Firebase for real-time data synchronization and implementing sophisticated prompt engineering techniques for medical training applications.

**Areas for Continued Growth:**
- **Performance Optimization**: Expanding expertise in Python profiling, multiprocessing, Cython, and advanced performance tuning techniques
- **Cloud Architecture**: Deepening AWS services knowledge beyond S3, exploring serverless architectures and distributed computing
- **Advanced ML Operations**: MLOps practices, model deployment, and production ML system optimization`
  },
  {
    name: 'TypeScript',
    slug: 'typescript',
    category: 'Programming Languages',
    proficiency: 'Advanced',
    description: 'My preferred language for modern web development, chosen for its type safety and superior development experience. This entire portfolio showcases TypeScript integration with Next.js, React, and modern development workflows.',
    experience: '3+ years',
    projects: ['save-gas', 'exped-browser', 'panda-express-pos'],
    icon: 'SiTypescript',
    color: '#3178c6',
    technicalDeepDive: `**Core Concepts I'm Proficient In:**
- **Type System Fundamentals**: Extensive use of interfaces, generics, and comprehensive type definitions for robust application architecture
- **Type Safety in Practice**: Leveraging TypeScript's compile-time error detection to prevent runtime issues across desktop, mobile, and cross-platform environments
- **Modern Development Syntax**: Utilizing TypeScript's enhanced syntax and developer experience improvements over vanilla JavaScript
- **Framework Integration**: Seamless integration with Next.js, React.js, and modern build tools for full-stack development
- **Component Architecture**: Building type-safe React components with proper prop typing and interface definitions

**Advanced Development Patterns:**
- **Interface-Driven Development**: Designing clear contracts between components and services using TypeScript interfaces
- **Generic Programming**: Implementing reusable, type-safe functions and components that work across different data types
- **Modern Tech Stack Integration**: Combining TypeScript + Next.js + React + TailwindCSS for cutting-edge development workflows
- **Cross-Platform Compatibility**: Ensuring type safety across different devices and environments through comprehensive typing
- **Build-Time Optimization**: Leveraging TypeScript's compilation process for early error detection and code optimization

**Complex Problem-Solving Examples:**

*HTML Semantic Structure Challenge:*
Encountered a critical issue where nested anchor tags were causing accessibility and functionality problems throughout the portfolio website. TypeScript's type checking helped identify the structural issue where skill navigation components were incorrectly implementing \`<a>\` tags within existing \`<a>\` tag contexts. The solution involved refactoring the skill components to use button elements within div containers, maintaining semantic HTML while preserving navigation functionality. This experience highlighted how TypeScript's strict typing and development-time error detection can catch not just JavaScript errors, but also help identify structural and accessibility issues in complex component hierarchies.

*Cross-Platform Type Safety:*
Developed responsive applications that needed to function consistently across desktop, mobile, and various screen sizes. TypeScript's type system enabled creating robust interfaces that ensured component props and state management worked reliably across different environments, preventing runtime errors that would be difficult to catch with vanilla JavaScript.

*Modern Framework Integration:*
Successfully architected full-stack applications using TypeScript as the foundation for both frontend (React/Next.js) and development tooling integration. This unified approach eliminated the traditional Node.js + JavaScript separation, creating a more cohesive development experience with consistent typing throughout the entire application stack.

**Areas for Continued Growth:**
- **Advanced Type Features**: Exploring union types, mapped types, and conditional types for more sophisticated type manipulations
- **Enterprise Architecture Patterns**: Deepening understanding of TypeScript's role in large-scale enterprise applications and microservices architectures
- **Performance Optimization**: Learning advanced TypeScript compiler optimizations and build performance improvements for production applications`
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
    description: 'Foundation language for my web development journey, from computer science fundamentals to cross-platform browser development. Strong expertise in vanilla JavaScript, browser APIs, and solving complex compatibility challenges.',
    experience: '4+ years',
    projects: ['save-gas', 'exped-browser', 'panda-express-pos'],
    icon: 'SiJavascript',
    color: '#f7df1e',
    certifications: 1,
    certificationDetails: ['JavaScript Algorithms and Data Structures (freeCodeCamp)'],
    technicalDeepDive: `**Core Concepts I'm Proficient In:**
- **Data Structures & Algorithms Foundation**: Solid computer science fundamentals using JavaScript as primary language for implementing algorithms, arrays, and data structures as an alternative to Java during high school
- **ES6+ Modern JavaScript**: Proficient with arrow functions, async/await, modules, and destructuring for modern JavaScript development patterns
- **Cross-Platform Browser Development**: Expert-level experience ensuring JavaScript applications work consistently across Windows, Apple, and Linux environments
- **Browser APIs Integration**: Extensive experience with fetch API, localStorage, and geolocation APIs for building interactive web applications
- **Frontend Data Optimization**: Understanding how to implement client-side data structures to reduce backend load and improve application performance

**Advanced Development Patterns:**
- **Cross-Platform Compatibility**: Deep experience resolving platform-specific JavaScript behavior differences across different operating systems
- **Authentication Integration**: Implementing secure API calls and authentication flows using vanilla JavaScript
- **WebView Architecture**: Advanced understanding of WebView components for building secure, resizable browser interfaces with security restrictions
- **Frontend-First Development**: Strategic use of JavaScript for rapid prototyping and foundational web development before transitioning to TypeScript for larger projects
- **Client-Side Performance**: Leveraging frontend JavaScript data structures and localStorage for improved application responsiveness

**Complex Problem-Solving Examples:**

*Cross-Platform Browser Component Challenge:*
Encountered a critical UI issue in the Exped Browser project where the internet search interface displayed incorrectly small across Windows, Apple, and Linux devices. Through systematic debugging, discovered the root cause was calling a non-editable HTML tag that prevented dynamic screen resizing. The breakthrough solution involved implementing a WebView component that not only resolved the sizing issues but also enabled adding security restrictions to prevent browser exploitation and protect users from potential security vulnerabilities. This experience demonstrated deep understanding of browser architecture, HTML element limitations, and innovative security-focused solutions.

*Frontend Data Structure Optimization:*
During freeCodeCamp certification, implemented various data structures and algorithms directly in JavaScript frontend environments to reduce backend processing load. This approach improved application performance by handling data manipulation client-side rather than requiring server-side processing for every operation, demonstrating understanding of performance optimization strategies.

*API Integration and Authentication:*
Successfully integrated multiple browser APIs including fetch for HTTP requests, localStorage for client-side data persistence, and geolocation for location-based features. Built authentication systems and API integrations for various use-case specific applications, ensuring secure and reliable data exchange between frontend and backend services.

**Areas for Continued Growth:**
- **Advanced Debugging Techniques**: Expanding beyond console logging to utilize browser developer tools, debugger statements, and advanced debugging strategies for complex JavaScript applications
- **Local Storage Architecture**: Deepening expertise in localStorage patterns and offline-first application development for non-cloud device solutions
- **Modern JavaScript Testing**: Learning testing frameworks and methodologies for robust JavaScript application development`
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
    description: 'My pragmatic framework of choice for building modern, interactive user interfaces. Expert in practical React development with strong focus on TypeScript integration, Next.js SSR, and advanced component styling systems.',
    experience: '3+ years',
    projects: ['save-gas', 'exped-browser', 'panda-express-pos'],
    icon: 'SiReact',
    color: '#61dafb',
    technicalDeepDive: `**Core Concepts I'm Proficient In:**
- **Pragmatic Component Development**: Focus on building functional, maintainable components that solve real-world problems efficiently
- **Context-Based State Management**: Utilizing React Context for application-wide state management without over-engineering
- **TypeScript Integration**: Seamless integration of React components with TypeScript for type-safe development
- **Next.js SSR Integration**: Leveraging Next.js server-side rendering capabilities for optimal performance and SEO
- **Advanced Styling Integration**: Expert-level component styling using Tailwind CSS, CSS modules, and dynamic theming systems

**Advanced Development Patterns:**
- **Multi-Theme Architecture**: Implementing complex theming systems that dynamically switch entire application UI schemes
- **Responsive Component Design**: Building components that work seamlessly across desktop, mobile, and tablet environments
- **SSR-Aware Development**: Understanding how components behave in server-side rendering contexts with Next.js
- **Practical State Solutions**: Using Context API strategically for application state without unnecessary complexity
- **Component-CSS Integration**: Deep expertise in styling React components through multiple CSS methodologies

**Complex Problem-Solving Examples:**

*Dynamic Theme Switching Challenge:*
Architected and implemented a comprehensive dark/light theme system for the Panda Express POS application that required dynamic UI transformation across the entire application. The challenge involved creating a theme context that could propagate theme changes to every component while maintaining performance and ensuring CSS references updated correctly. The solution required modifying component attributes to dynamically reference different CSS files and managing theme state across complex component hierarchies. This implementation demonstrated advanced understanding of React Context, CSS architecture, and state propagation in large-scale applications.

*SSR-Optimized Component Development:*
Developed React components specifically designed to work seamlessly with Next.js server-side rendering, ensuring optimal performance and SEO benefits. This required understanding the nuances of how components behave differently in server vs. client environments and architecting solutions that work reliably in both contexts.

*Practical State Management Solutions:*
Successfully implemented Context-based state management across multiple projects, choosing practical solutions over complex state management libraries. This approach prioritized maintainability and development speed while still providing robust state handling for real-world applications.

**Areas for Continued Growth:**
- **Advanced State Management**: Exploring Redux, Zustand, and other complex state management solutions for larger-scale applications
- **Component Architecture Patterns**: Learning advanced patterns like compound components, render props, and higher-order components for more sophisticated component design
- **Modern React Features**: Investigating React 18+ features including Suspense, concurrent features, and server components for cutting-edge development`
  },
  {
    name: 'Next.js',
    slug: 'next.js',
    category: 'Frameworks & Libraries',
    proficiency: 'Advanced',
    description: 'My full-stack framework of choice for modern web development. Expert in App Router, SSG/SSR implementation, and seamless user experience design. This entire portfolio demonstrates advanced Next.js architecture with persistent backgrounds and smooth animations.',
    experience: '2+ years',
    projects: ['panda-express-pos'],
    icon: 'SiNextdotjs',
    color: '#ffffff',
    technicalDeepDive: `**Core Concepts I'm Proficient In:**
- **App Router Architecture**: Modern Next.js 13+ App Router implementation with proper layout hierarchy and metadata management for SEO optimization
- **Static Site Generation (SSG)**: Expert implementation of SSG with CI/CD pipelines for GitHub Pages deployment, ensuring optimal performance and fast load times
- **Server-Side Rendering (SSR)**: Strategic use of SSR for dynamic content that requires real-time data while maintaining performance benefits
- **Full-Stack Development**: Complete Next.js API route implementation for backend functionality, demonstrated in the Panda Express POS System with weather API integration
- **TypeScript Integration**: Seamless Next.js and TypeScript configuration for type-safe full-stack development across frontend and backend

**Advanced Development Patterns:**
- **Consistent User Experience Design**: Architected persistent background (VantaNet) and navigation systems that maintain visual continuity across route transitions
- **Animation-Enhanced Navigation**: Integration of Framer Motion with Next.js routing using AnimatePresence and usePathname for smooth page transitions
- **MDX Content Integration**: Advanced configuration supporting both .md and .mdx files for dynamic content rendering and blog functionality
- **Export Configuration**: Strategic Next.js export setup for static deployment while maintaining dynamic capabilities where needed
- **Client/Server Component Architecture**: Proper separation of client-side interactivity and server-side optimization using Next.js 'use client' directives

**Complex Problem-Solving Examples:**

*Seamless Navigation with Persistent Background:*
Architected a sophisticated layout system that maintains visual continuity across all routes while providing smooth page transitions. The challenge involved implementing a persistent VantaNet background component that remains stable during navigation while allowing individual pages to animate in and out. The solution used Next.js App Router with a custom ClientLayout component that leverages usePathname hook for route detection and AnimatePresence for coordinated animations. This creates an immersive user experience where the background animation never interrupts, providing professional-grade visual consistency throughout the application.

*Full-Stack Weather API Integration:*
Implemented real-time weather API integration in the Panda Express POS System using Next.js API routes and TypeScript. The system dynamically adjusts the application's theme based on current weather conditions, requiring server-side API calls, data processing, and client-side state management. This demonstrated mastery of Next.js full-stack capabilities, handling both backend API integration and frontend state updates seamlessly.

*Optimized Static Generation with Dynamic Content:*
Configured Next.js for optimal static site generation while maintaining dynamic capabilities for skill pages and project showcases. The implementation uses strategic ISR (Incremental Static Regeneration) concepts for content that may update, while leveraging full SSG for performance-critical pages. This hybrid approach delivers exceptional loading speeds while maintaining content flexibility.

**Areas for Continued Growth:**
- **Advanced Performance Optimization**: Exploring Next.js caching strategies, bundle optimization, and advanced image optimization techniques for enterprise-scale applications
- **SEO and Core Web Vitals**: Deepening expertise in Next.js SEO optimization, structured data implementation, and Core Web Vitals improvement strategies
- **Advanced ISR Patterns**: Mastering complex Incremental Static Regeneration implementations for large-scale content management systems`
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
    description: 'Microsoft\'s business analytics tool for creating reports and dashboards from various data sources. Used at Pivotal Research Inc. across 1 internship for large-scale data analysis and business intelligence reporting.',
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