// data/projects.ts
export interface Project {
    slug: string
    title: string
    description: string
    longDescription?: string
    href?: string        // optional override, otherwise `/projects/${slug}`
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
    slug: 'save-gas',
    title: 'SaveGas',
    description: 'Real-time gas price tracking application that helps users save up to $0.30 per gallon by comparing prices across 100+ stations.',
    longDescription: 'Built a real-time gas price tracking application that helps users save up to $0.30 per gallon by comparing prices across 100+ stations, featuring an interactive map with turn-by-turn navigation and secure location-based services. The application implements a 60-second refresh system to optimize API calls while maintaining strict privacy standards, delivering a seamless cross-platform experience that enables users to make informed fuel purchase decisions.',
    image: '/images/projects/savegas.png',
    techs: ['React', 'TypeScript', 'JavaScript', 'Convex', 'Vercel', 'Node.js', 'Auth0', 'Axios', 'Vite', 'Tailwind CSS', 'PostCSS'],
    github: 'https://github.com/SamiMelhem/save-gas',
    featured: true,
    date: 'April 2025 - May 2025',
    achievements: [
      'Real-time gas price tracking that helps users save an average of $0.15-$0.30 per gallon',
      'Interactive map interface with turn-by-turn navigation to selected stations',
      'Secure authentication system processing 100+ gas station data points in real-time',
      '60-second refresh cooldown system for optimal API performance',
      'Seamless cross-platform experience for desktop and mobile devices'
    ]
  },
  {
    slug: 'exped-browser',
    title: 'Exped Browser',
    description: 'Cross-platform desktop browser supporting 10,000+ concurrent users with privacy-first AI-powered web page summarization.',
    longDescription: 'Developed a cross-platform desktop browser that efficiently supports over 10,000 concurrent users and delivers a privacy-first experience with local AI-powered web page summarization. Enhanced user productivity by reducing navigation and reading times by up to 50%, while achieving a 95% satisfaction rate and ensuring complete data privacy.',
    image: '/images/projects/exped_browser.png',
    techs: ['React', 'TypeScript', 'JavaScript', 'Node.js', 'Electron', 'Vite', 'Tailwind CSS', 'PostCSS', 'Radix UI', 'Lucide React'],
    github: 'https://github.com/SamiMelhem/exped-browser',
    featured: true,
    date: 'January 2025 - April 2025',
    achievements: [
      'Electron desktop application supporting 10,000+ concurrent users across all OS',
      'Reduced user navigation time by 40% through comprehensive keyboard shortcuts',
      '95% user satisfaction rate based on email feedback system metrics',
      'Local AI-powered page summarization reducing reading time by 50%',
      '100% data privacy through local processing of content'
    ]
  },
  {
    slug: 'av-simulator',
    title: 'Autonomous Vehicle Simulation',
    description: 'CARLA-based autonomous vehicle simulation with real-time object detection and advanced pathfinding algorithms.',
    longDescription: 'Developed autonomous vehicles in CARLA for vehicle navigation, sensor integration, and decision-making. Built comprehensive simulation environment integrating LiDAR and camera sensors for real-time object detection with machine learning models for navigation optimization.',
    image: '/images/projects/av_sim.png',
    techs: ['CARLA', 'Python', 'PyTorch', 'TensorFlow', 'OpenCV', 'Tableau', 'Power BI', 'Excel', 'Pandas', 'NumPy', 'Matplotlib'],
    liveDemo: 'https://docs.google.com/presentation/d/1V2agrhnjItJWyib6dGJf8xYpDqPeRsu3l0NsSZdQheE/edit?usp=sharing',
    featured: true,
    date: 'August 2024 - December 2024',
    achievements: [
      'LiDAR/Camera sensor integration for real-time object detection with 80%+ accuracy',
      'Navigation algorithms (A*, RRT, IDA*) for optimal pathfinding',
      'Decision-making ML models (Faster R-CNN, YOLO) improving navigation precision by 25%',
      'Comprehensive data visualizations in Tableau and Power BI'
    ]
  },
  {
    slug: 'panda-express-pos',
    title: 'Panda Express POS System',
    description: 'Full-stack Point of Sale system with role-based access control and dynamic theming based on real-time weather data.',
    longDescription: 'A Point of Sale (POS) System for Panda Express. It is a full-stack web application designed to streamline ordering and management processes for Panda Express employees while delivering an efficient and visually pleasing interface for customers. The system includes role-based access for cashiers, managers, and customers, with functionality tailored for each user type. The application dynamically adapts to environmental factors such as day/night themes based on real-time weather data.',
    image: '/images/projects/panda_express.png',
    techs: ['TypeScript', 'React', 'JavaScript', 'Next.js', 'Tailwind CSS', 'Lucide React', 'Node.js', 'Express.js', 'PostgreSQL'],
    github: 'https://github.com/CSCE331-Fall2024/Panda_Express_POS_System',
    featured: true,
    date: 'October 2024 - December 2024',
    achievements: [
      'Full-stack POS system with role-based access control for multiple user types',
      'Real-time weather API integration for dynamic theming (day/night modes)',
      'Enhanced user experience for 50+ active users',
      'Secure login and order management reducing cashier processing time by 30%',
      'Responsive and intuitive interface design'
    ]
  },
  {
    slug: 'financial-modeling-tool',
    title: 'Financial Modeling Tool',
    description: 'Comprehensive stock price forecasting system using machine learning with 80%+ accuracy for major companies.',
    longDescription: 'This is a comprehensive stock price forecasting and analysis system that downloads historical stock data for major companies (including MSFT, AAPL, NVDA, GOOG, etc.) and uses multiple machine learning and statistical models to predict future stock prices across different time horizons (1 day to 1 year). The system includes data preprocessing, feature engineering, model training, performance evaluation, and an interactive web dashboard for visualization.',
    image: '/images/projects/financial_modeling.png',
    techs: ['Python', 'Scikit-Learn', 'TensorFlow', 'Dash', 'Plotly', 'Pandas', 'NumPy', 'yfinance'],
    github: 'https://github.com/SamiMelhem/FinancialModelingTool',
    date: 'June 2024 - August 2024',
    achievements: [
      'Python-based financial modeling tool achieving 80%+ forecasting accuracy',
      'Object-oriented backend handling high-volume data ingestion',
      'Scalable and reliable system for financial analysts and investors',
      'Interactive data visualizations with Dash, Matplotlib, and Plotly',
      'Complex financial trends presented in digestible format'
    ]
  },
  {
    slug: 'client-server-system',
    title: 'Client-Server Process Communication System',
    description: 'Linux-based networked communication system using TCP/IP protocol supporting 1 million concurrent connections.',
    longDescription: 'Networked client-server application using the TCP/IP protocol. The project enhances an inter-process communication system by extending it to operate over a network, supporting both data point transfers and file transfers between multiple clients and a server.',
    image: '/images/projects/client_server_architecture.svg',
    techs: ['C++', 'TCP/IP', 'Multithreading', 'Linux', 'Socket Programming'],
    github: 'https://github.com/SamiMelhem/ClientServerProcess',
    date: 'March 2024 - April 2024',
    achievements: [
      'Linux-based client-server communication system using C and socket programming',
      '30% improvement in data transmission efficiency',
      'Robust communication protocols supporting 1 million concurrent connections',
      'Real-time embedded environments with reliability and scalability',
      'Low-level system calls and networking principles for real-world use cases'
    ]
  },
  {
    slug: 'class-primer',
    title: 'Class Primer',
    description: 'Custom GPT bot helping students prepare for courses using the "Priming" method, featured in AI x Education newsletter.',
    longDescription: 'An expert academic guide for mastering any class, tailored to specific course details. Created a custom GPT bot called "Class Primer" to help students prepare for courses by generating personalized "primers" weeks before classes start, integrating the "Priming" method.',
    image: '/images/projects/class_primer.png',
    techs: ['Prompt Engineering', 'GPT Agent Creation', 'Educational Technology'],
    liveDemo: 'https://chatgpt.com/g/g-LbbPjuL7W-class-primer',
    date: 'February 2024 - April 2024',
    achievements: [
      'Custom GPT bot generating personalized course primers using "Priming" method',
      'Featured interview in "AI x Education" newsletter (10,000+ educators)',
      'Presented to graduate class BADM 554 at UIUC (100 students)',
      'Demonstrated AI\'s transformative role in educational outcomes',
      'Practical application of AI in academic preparation'
    ]
  }
]

export default projects
  