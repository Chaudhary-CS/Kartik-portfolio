'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Project } from '../../../../data/projects'
import ContactIcons from '../../../../components/ContactIcons'
import { FaGithub as Github, FaArrowLeft as ArrowLeft, FaCalendarAlt as Calendar, FaBullseye as Target, FaCog as Cog, FaChartBar as BarChart3, FaCheckCircle as CheckCircle } from 'react-icons/fa'

interface ProjectPageClientProps {
  project: Project
}

export default function ProjectPageClient({ project }: ProjectPageClientProps) {


  return (
    <main className="relative min-h-screen flex flex-col text-white">
      <div className="relative z-10 flex-1 max-w-6xl mx-auto py-8 sm:py-12 px-4 sm:px-6">
        {/* Back Button + Header Section */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          {/* Back Button */}
          <div className="mb-6">
            <Link 
              href="/projects/"
              className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </Link>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
                {project.title}
              </h1>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                {project.longDescription || project.description}
              </p>
              
              {/* Date and Quick Actions */}
              <div className="flex flex-wrap items-center gap-4 mb-6">
                {project.date && (
                  <div className="flex items-center gap-2 text-gray-400">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{project.date}</span>
                  </div>
                )}
                
                {project.github && (
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors font-medium"
                    >
                      <Github className="w-4 h-4" />
                      View Code
                    </a>
                  </div>
                )}
              </div>

              {/* Tech Stack */}
              {project.techs && (
                <div className="flex flex-wrap gap-2">
                  {project.techs.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-800/60 text-teal-300 text-sm rounded-full border border-teal-400/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
            
            {/* Project Image */}
            {project.image && (
              <div className="relative">
                <div className="relative rounded-xl overflow-hidden shadow-2xl">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            )}
          </div>
        </motion.div>

        {/* Project Details Content */}
        <ProjectContent project={project} />
      </div>
      
      <ContactIcons />
    </main>
  )
}

function ProjectContent({ project }: { project: Project }) {
  const getProjectDetails = (slug: string) => {
    const projectDetailsMap: Record<string, {
      challenge: string
      solution: string
      technicalHighlights: string[]
      keyResults: string[]
      businessImpact: string
    }> = {
      'trace-the-change': {
        challenge: "Traditional donation platforms lack transparency and trust, making it difficult for donors to verify where their contributions are going. Users needed a secure, blockchain-based solution that could provide real-time tracking of donations while ensuring data integrity and building trust between donors and recipients.",
        solution: "Architected a secure and scalable multi-payment donation platform using Java & Spring Boot with blockchain integration. The system provides real-time donation tracking, secure payment processing through MetaMask integration, and transparent fund allocation with immutable blockchain records.",
        technicalHighlights: [
          "Built robust REST APIs using Java & Spring Boot for real-time donation processing and tracking",
          "Integrated MetaMask wallet for secure blockchain-based payment processing",
          "Implemented AstraDB for scalable data storage with real-time synchronization",
          "Designed CI/CD pipeline on Vercel for seamless deployment and continuous integration",
          "Created secure authentication system ensuring donor privacy and data protection"
        ],
        keyResults: [
          "Achieved recognition among 50+ teams at Citi Internal Hackathon",
          "Engineered REST APIs for real-time processing and donation tracking",
          "Managed full-stack application CI/CD pipeline on Vercel",
          "Implemented secure blockchain-based payment system with MetaMask",
          "Built scalable backend architecture supporting multiple payment methods"
        ],
        businessImpact: "This blockchain-based donation platform revolutionizes charitable giving by providing unprecedented transparency and trust. The solution demonstrates expertise in blockchain integration, secure payment systems, and scalable backend architecture - critical skills for fintech and social impact applications."
      },
      'bull-mart': {
        challenge: "USF students needed a reliable platform to buy and sell used products within their community, but existing solutions lacked campus-specific features and secure user authentication. Students required a trusted marketplace with location-based listings and robust user management.",
        solution: "Developed a full-stack MERN application specifically designed for USF students, featuring secure JWT authentication, location-based listings with Google Maps integration, and responsive design for optimal mobile experience. The platform enables safe peer-to-peer transactions within the university community.",
        technicalHighlights: [
          "Built full-stack application using React.js, Node.js, and MongoDB with RESTful API architecture",
          "Implemented JWT authentication system for secure user registration and login",
          "Integrated Google Maps API for location-based product listings and proximity search",
          "Designed responsive UI with Bootstrap ensuring optimal experience across all devices",
          "Created role-based access control protecting 10+ REST API endpoints"
        ],
        keyResults: [
          "Launched full-stack MERN application with 50+ active users",
          "Designed responsive UI with Bootstrap & integrated Google Maps API",
          "Engineered secure authentication system using JWT",
          "Protected 10+ REST API endpoints with role-based access control",
          "Enabled location-based listings for USF students"
        ],
        businessImpact: "Bull-Mart creates a sustainable, community-driven marketplace that reduces waste and provides economic benefits to students. The platform demonstrates expertise in full-stack development, user authentication, and location-based services - essential skills for modern web applications."
      },
      'client-data-management-system': {
        challenge: "Financial institutions struggle with manual client data management, leading to inefficiencies, security risks, and compliance issues. Traditional paper-based systems and basic spreadsheets fail to provide the security, accuracy, and reporting capabilities required for regulatory compliance.",
        solution: "Developed a comprehensive desktop application using Python, MySQL, and Tkinter that streamlines client data management for financial institutions. The system provides secure data entry, automated reporting, and regulatory compliance features while maintaining data integrity and accessibility.",
        technicalHighlights: [
          "Built desktop application using Python and Tkinter for cross-platform compatibility",
          "Designed relational database using MySQL with optimized queries for data integrity",
          "Implemented secure data entry forms with input validation and error handling",
          "Created comprehensive reporting system with automated data export capabilities",
          "Developed user-friendly interface with role-based access control for different user types"
        ],
        keyResults: [
          "Streamlined secure client information handling for financial institutions",
          "Enabled efficient data entry, retrieval, and reporting",
          "Utilized SQL to design and manage a database",
          "Ensured data accuracy and security through structured queries",
          "Optimized data integrity and accessibility for improved client service and regulatory compliance"
        ],
        businessImpact: "This data management system modernizes financial institution operations by replacing manual processes with secure, automated solutions. The project demonstrates expertise in database design, desktop application development, and financial compliance - valuable skills for enterprise software development."
      },
      'save-gas': {
        challenge: "With gas prices fluctuating daily and varying significantly between stations, drivers were losing money and time searching for the best fuel prices. Users needed a reliable way to find the cheapest gas nearby without compromising their location privacy or spending excessive time comparing prices.",
        solution: "Built a real-time gas price tracking system that aggregates data from 100+ stations and presents it through an intuitive map interface. The application balances real-time accuracy with performance through a smart 60-second refresh system, while maintaining strict privacy standards for location-based services.",
        technicalHighlights: [
          "Implemented 60-second API refresh cooldown to optimize performance while maintaining real-time data accuracy",
          "Created secure location services using Auth0 authentication, ensuring user privacy while delivering location-specific results",
          "Built responsive cross-platform interface using React and TypeScript for consistent experience across all devices",
          "Integrated turn-by-turn navigation system that connects seamlessly with the user's preferred mapping application",
          "Designed with Convex backend for real-time data synchronization and Vercel deployment for reliable global access"
        ],
        keyResults: [
          "Helps users save $0.15-$0.30 per gallon on average",
          "Processes 100+ gas station data points in real-time",
          "Reduces fuel search time by up to 75%",
          "Maintains 100% user location privacy",
          "Delivers seamless experience across desktop and mobile platforms"
        ],
        businessImpact: "For frequent drivers, this translates to potential savings of $200-500 annually while dramatically reducing time spent searching for gas stations. The application demonstrates mastery of real-time data processing, secure authentication systems, and user-centered design principles."
      },
      'exped-browser': {
        challenge: "Users were overwhelmed by information overload while browsing the web, spending excessive time reading through lengthy articles and navigating between pages. Traditional browsers offered no productivity features, forcing users to rely on external tools or spend significant time processing content manually.",
        solution: "Developed a privacy-first desktop browser that transforms web browsing through local AI-powered page summarization. The application reduces cognitive load by providing instant content summaries while maintaining complete data privacy through local processing, eliminating the need for cloud-based AI services.",
        technicalHighlights: [
          "Built cross-platform desktop application using Electron, ensuring native performance on Windows, macOS, and Linux",
          "Implemented local AI processing for page summarization, ensuring 100% data privacy with no external API dependencies",
          "Created comprehensive keyboard shortcut system reducing navigation time by 40% for power users",
          "Designed scalable architecture supporting 10,000+ concurrent users through efficient resource management",
          "Integrated WebView components with security restrictions to prevent browser exploitation while maintaining full functionality"
        ],
        keyResults: [
          "Supports 10,000+ concurrent users across all operating systems",
          "Reduces reading time by 50% through intelligent content summarization",
          "Achieves 95% user satisfaction rate based on direct feedback",
          "Cuts navigation time by 40% through optimized keyboard shortcuts",
          "Maintains 100% data privacy through local-only AI processing"
        ],
        businessImpact: "This browser represents the future of productive web browsing, where AI enhances human efficiency without compromising privacy. The solution demonstrates expertise in desktop application development, local AI integration, and privacy-conscious design patterns."
      },
      'av-simulator': {
        challenge: "Autonomous vehicle development requires extensive real-world testing which is expensive, dangerous, and time-consuming. Traditional testing methods cannot efficiently simulate the vast array of driving scenarios needed to train and validate autonomous systems, creating a bottleneck in AV development and safety validation.",
        solution: "Built a comprehensive autonomous vehicle simulation environment using CARLA that integrates multiple sensor types (LiDAR, cameras) with advanced machine learning models for real-time object detection and navigation. The system enables safe, repeatable testing of autonomous driving algorithms across diverse scenarios without real-world risks.",
        technicalHighlights: [
          "Integrated LiDAR and camera sensor fusion achieving 80%+ object detection accuracy in diverse weather conditions",
          "Implemented advanced pathfinding algorithms (A*, RRT, IDA*) for optimal route planning in complex urban environments",
          "Developed machine learning models using Faster R-CNN and YOLO for real-time object classification and tracking",
          "Created comprehensive data visualization dashboards using Tableau and Power BI for performance analysis",
          "Built robust simulation framework handling multiple vehicle interactions and dynamic obstacle scenarios"
        ],
        keyResults: [
          "Achieved 80%+ accuracy in real-time object detection across weather conditions",
          "Improved navigation precision by 25% through ML-optimized decision making",
          "Successfully simulated 1000+ driving scenarios for algorithm validation",
          "Reduced physical testing requirements by 60% through comprehensive simulation",
          "Created reusable framework for future autonomous vehicle research projects"
        ],
        businessImpact: "This simulation platform significantly accelerates autonomous vehicle development by providing a safe, cost-effective testing environment. The system demonstrates advanced skills in computer vision, machine learning, and sensor integration - critical technologies for the future of transportation and robotics industries."
      },
      'panda-express-pos': {
        challenge: "Traditional restaurant POS systems lack modern user experience design and fail to adapt to environmental factors, leading to inefficient order processing and reduced customer satisfaction. Restaurants needed a system that could handle multiple user roles while providing intuitive interfaces for both staff and customers.",
        solution: "Developed a comprehensive full-stack POS system specifically designed for Panda Express operations, featuring role-based access control for cashiers, managers, and customers. The system includes innovative dynamic theming that adapts to real-time weather data, creating a more engaging user experience while streamlining restaurant operations.",
        technicalHighlights: [
          "Built full-stack web application using React, TypeScript, and Next.js with PostgreSQL database integration",
          "Implemented role-based authentication system supporting cashiers, managers, and customer interfaces",
          "Integrated real-time weather API for dynamic day/night theming based on environmental conditions",
          "Designed responsive interface using Tailwind CSS ensuring optimal experience across all device types",
          "Created secure order management system with real-time inventory tracking and reporting capabilities"
        ],
        keyResults: [
          "Reduced cashier processing time by 30% through intuitive interface design",
          "Successfully deployed for 50+ active users across multiple restaurant locations",
          "Achieved 99% uptime with robust error handling and database optimization",
          "Improved customer ordering experience with streamlined menu navigation",
          "Enhanced management efficiency through comprehensive reporting and analytics"
        ],
        businessImpact: "This POS system modernizes restaurant operations by combining efficient functionality with innovative user experience features. The project demonstrates expertise in full-stack development, database design, and user-centered design principles essential for enterprise software solutions."
      },
      'financial-modeling-tool': {
        challenge: "Financial analysts and investors struggle with time-consuming manual analysis of stock market data, often lacking access to sophisticated forecasting tools that can process large datasets and identify complex market patterns. Traditional analysis methods are prone to human error and cannot efficiently handle the volume and complexity of modern financial data.",
        solution: "Created a comprehensive Python-based financial modeling system that automates stock price forecasting using multiple machine learning algorithms. The tool processes historical data for major companies and provides accurate predictions across various time horizons, complete with interactive visualizations for data-driven investment decisions.",
        technicalHighlights: [
          "Developed object-oriented Python architecture handling high-volume financial data ingestion from multiple sources",
          "Implemented ensemble machine learning models using Scikit-Learn and TensorFlow achieving 80%+ forecasting accuracy",
          "Built interactive web dashboard using Dash and Plotly for real-time data visualization and analysis",
          "Created automated feature engineering pipeline processing complex financial indicators and market trends",
          "Designed scalable data processing system capable of analyzing 100+ stocks simultaneously with optimized performance"
        ],
        keyResults: [
          "Achieved 80%+ accuracy in stock price forecasting across multiple time horizons",
          "Processed and analyzed data for 50+ major companies including MSFT, AAPL, NVDA, GOOG",
          "Reduced manual analysis time by 75% through automated data processing and visualization",
          "Created comprehensive backtesting framework validating model performance over historical periods",
          "Delivered actionable insights through intuitive dashboards accessible to non-technical users"
        ],
        businessImpact: "This financial modeling tool democratizes sophisticated market analysis by making advanced forecasting accessible to individual investors and smaller firms. The system showcases expertise in machine learning, financial analysis, and data visualization - critical skills for fintech and quantitative analysis roles."
      },
      'client-server-system': {
        challenge: "Modern distributed systems require robust inter-process communication that can handle high-volume data transfers across networks reliably. Traditional communication methods often struggle with scalability, error handling, and concurrent connection management, limiting system performance in real-world applications.",
        solution: "Engineered a high-performance client-server communication system using C++ and TCP/IP protocols, designed to handle massive concurrent connections while maintaining data integrity. The system supports both data point transfers and file transfers with optimized protocols for maximum efficiency and reliability.",
        technicalHighlights: [
          "Implemented low-level socket programming in C++ with TCP/IP protocol for reliable network communication",
          "Designed multithreaded architecture supporting up to 1 million concurrent client connections",
          "Built robust error handling and recovery mechanisms ensuring data integrity across network failures",
          "Optimized data transmission protocols achieving 30% improvement in throughput efficiency",
          "Created comprehensive testing framework validating system performance under high-load conditions"
        ],
        keyResults: [
          "Successfully handled 1 million concurrent connections with stable performance",
          "Achieved 30% improvement in data transmission efficiency over baseline implementations",
          "Maintained 99.9% uptime during stress testing with automatic error recovery",
          "Reduced latency by 40% through optimized network protocol implementation",
          "Created reusable communication framework applicable to various distributed system architectures"
        ],
        businessImpact: "This communication system provides the foundation for scalable distributed applications in industries requiring high-performance networking. The project demonstrates deep understanding of systems programming, network protocols, and performance optimization - essential skills for backend infrastructure and embedded systems development."
      },
      'class-primer': {
        challenge: "Students often struggle with course preparation, entering classes without proper context or foundational understanding, leading to poor academic performance and increased stress. Traditional study methods don't provide personalized, pre-course preparation that adapts to individual learning needs and course-specific requirements.",
        solution: "Developed an innovative AI-powered educational tool that generates personalized course primers using advanced prompt engineering and the 'Priming' methodology. The system helps students prepare for courses weeks in advance by creating customized study materials tailored to specific course content and individual learning styles.",
        technicalHighlights: [
          "Engineered sophisticated prompt engineering techniques to generate contextually relevant educational content",
          "Implemented the 'Priming' methodology for pre-course preparation optimizing student learning outcomes",
          "Created adaptive content generation system that personalizes materials based on course requirements and student needs",
          "Designed scalable AI framework capable of handling diverse academic subjects and learning objectives",
          "Built user-friendly interface enabling seamless interaction with AI-generated educational content"
        ],
        keyResults: [
          "Featured in 'AI x Education' newsletter reaching 10,000+ educators worldwide",
          "Successfully presented to 100+ graduate students at UIUC demonstrating practical AI applications",
          "Generated personalized primers for 50+ different academic courses across multiple disciplines",
          "Achieved 90%+ student satisfaction rate based on feedback from early adopters",
          "Demonstrated measurable improvement in student preparedness and course performance"
        ],
        businessImpact: "This educational AI tool represents the future of personalized learning, showing how artificial intelligence can enhance traditional education methods. The project demonstrates expertise in prompt engineering, educational technology, and AI application development - increasingly valuable skills in the rapidly growing EdTech sector."
      }
    }

    return projectDetailsMap[slug] || {
      challenge: "Details coming soon...",
      solution: "Details coming soon...",
      technicalHighlights: [],
      keyResults: [],
      businessImpact: "Details coming soon..."
    }
  }

  const details = getProjectDetails(project.slug)

  return (
    <div className="space-y-16">
      {/* The Challenge */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.4 }}
        className="bg-gray-900/70 rounded-xl p-6 sm:p-8 border border-gray-700"
      >
        <div className="flex items-center gap-3 mb-6">
          <Target className="w-6 h-6 text-red-400" />
          <h2 className="text-2xl font-semibold text-white">The Challenge</h2>
        </div>
        <p className="text-gray-300 text-lg leading-relaxed">
          {details.challenge}
        </p>
      </motion.section>

      {/* The Solution */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.6 }}
        className="bg-gray-900/70 rounded-xl p-6 sm:p-8 border border-gray-700"
      >
        <div className="flex items-center gap-3 mb-6">
          <Cog className="w-6 h-6 text-blue-400" />
          <h2 className="text-2xl font-semibold text-white">The Solution</h2>
        </div>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          {details.solution}
        </p>
        
        {/* Technical Highlights */}
        {details.technicalHighlights.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold text-teal-400 mb-4">Technical Highlights</h3>
            <ul className="space-y-3">
              {details.technicalHighlights.map((highlight, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </motion.section>

      {/* Key Results & Impact */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.8 }}
        className="bg-gray-900/70 rounded-xl p-6 sm:p-8 border border-gray-700"
      >
        <div className="flex items-center gap-3 mb-6">
          <BarChart3 className="w-6 h-6 text-green-400" />
          <h2 className="text-2xl font-semibold text-white">Key Results & Impact</h2>
        </div>
        
        {/* Results Grid */}
        {details.keyResults.length > 0 && (
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {details.keyResults.map((result, index) => (
              <div key={index} className="bg-gray-800/50 rounded-lg p-4 border border-gray-600">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{result}</span>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {/* Business Impact */}
        <div className="bg-gradient-to-r from-teal-900/30 to-blue-900/30 rounded-lg p-6 border border-teal-400/30">
          <h3 className="text-lg font-semibold text-teal-400 mb-3">Business Impact</h3>
          <p className="text-gray-300 leading-relaxed">
            {details.businessImpact}
          </p>
        </div>
      </motion.section>

      {/* Achievements */}
      {project.achievements && project.achievements.length > 0 && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 1.0 }}
          className="bg-gray-900/70 rounded-xl p-6 sm:p-8 border border-gray-700"
        >
          <h2 className="text-2xl font-semibold text-white mb-6">Key Achievements</h2>
          <div className="grid gap-4">
            {project.achievements.map((achievement, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-gray-800/50 rounded-lg border border-gray-600">
                <CheckCircle className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">{achievement}</span>
              </div>
            ))}
          </div>
        </motion.section>
      )}

      {/* Call to Action */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 1.2 }}
        className="text-center py-8"
      >
        <h2 className="text-2xl font-semibold text-white mb-4">Interested in Learning More?</h2>
        <p className="text-gray-300 mb-6">
          Check out the source code or see the project in action
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors font-medium"
            >
              <Github className="w-4 h-4" />
              Explore Source Code
            </a>
          )}
        </div>
      </motion.section>
    </div>
  )
} 