import { NextRequest, NextResponse } from 'next/server'

function generateResponse(userMessage: string): string {
  const message = userMessage.toLowerCase()
  
  // Education questions
  if (message.includes('education') || message.includes('school') || message.includes('university') || message.includes('degree') || message.includes('gpa')) {
    return `Kartik is currently pursuing a Bachelor of Science in Computer Science at the University of South Florida in Tampa, FL. He's a Dean's List Scholar with a GPA of 3.7/4.0 and is expected to graduate in May 2026.`
  }
  
  // Experience questions
  if (message.includes('citi') || message.includes('current') || message.includes('present')) {
    return `Kartik is currently working as a Software Development Intern at Citi in Tampa, FL (May 2025 - Present). He works on backend development within a financial technology team focused on compliance and risk tooling, and contributes to frontend work and CI/CD pipeline improvements.`
  }
  
  if (message.includes('vivint')) {
    return `At Vivint (May 2024 - Aug 2024), Kartik worked as a Software Engineering Intern in Provo, UT. He worked on data engineering projects within a smart home platform team and contributed to backend services and internal tooling to support real-time data operations.`
  }
  
  if (message.includes('capgemini')) {
    return `At Capgemini (May 2023 - July 2023), Kartik worked as a Testing Associate Intern in Noida, IN. He supported the QA team in software testing and defect tracking for enterprise applications and participated in a codebase modernization initiative.`
  }
  
  // Project questions
  if (message.includes('trace') || message.includes('change') || message.includes('donation') || message.includes('blockchain')) {
    return `Trace the Change is Kartik's blockchain-based donation platform project. It's a secure and scalable multi-payment donation platform built with Java, Spring Boot, AstraDB, MetaMask, and Vercel. Key achievements:
• Achieved recognition among 50+ teams at Citi Internal Hackathon
• Engineered REST APIs for real-time processing
• Managed full-stack application CI/CD pipeline on Vercel
• Implemented secure blockchain-based payment system`
  }
  
  if (message.includes('bull') || message.includes('mart') || message.includes('marketplace') || message.includes('e-commerce')) {
    return `Bull-Mart is a full-stack e-commerce marketplace for USF students built with HTML/CSS, MongoDB, React.js, Node.js, Bootstrap, and JWT. Key achievements:
• Launched full-stack MERN application with 50+ active users
• Designed responsive UI with Bootstrap & integrated Google Maps API
• Engineered secure authentication system using JWT
• Protected 10+ REST API endpoints with role-based access control`
  }
  
  if (message.includes('client') || message.includes('data') || message.includes('management') || message.includes('financial')) {
    return `The Client Data Management System is a desktop application for financial institutions built with Python, MySQL, Tkinter, and SQL. Key achievements:
• Streamlined secure client information handling for financial institutions
• Enabled efficient data entry, retrieval, and reporting
• Utilized SQL to design and manage a database
• Ensured data accuracy and security through structured queries`
  }
  
  // Skills questions
  if (message.includes('skill') || message.includes('technology') || message.includes('tech') || message.includes('programming')) {
    return `Kartik's technical skills include:
• Programming Languages: Java, Python, C/C++, HTML/CSS, JavaScript, SQL
• Frameworks: Spring Boot, React.js, Node.js, Express.js, Bootstrap
• Tools: AWS, Google Cloud, MongoDB, Linux/Unix, GitHub, Azure DevOps
• Libraries: Pandas, NumPy, PyMongo
• Concepts: Full-Stack Development, OOP, DevOps, Automation, Cloud Computing, Data Structures & Algorithms`
  }
  
  // Leadership questions
  if (message.includes('leadership') || message.includes('ai society') || message.includes('co-founder')) {
    return `Kartik is the Co-Founder of the AI Society at USF (April 2024 - Present). He co-founded the organization to build a student community around artificial intelligence and machine learning, organizing workshops and events for students interested in AI.`
  }
  
  // General questions
  if (message.includes('who') || message.includes('what') || message.includes('tell me about')) {
    return `Kartik Chaudhary is a Computer Science student at the University of South Florida with experience in building and automating backend systems. He's currently a Software Development Intern at Citi, specializing in Java, Python, and cloud platforms. He has worked at Vivint and Capgemini, and has built projects like Trace the Change (blockchain donation platform), Bull-Mart (e-commerce marketplace), and a Client Data Management System. He's also the Co-Founder of the AI Society at USF.`
  }
  
  // Default response
  return `I can help you learn about Kartik's experience, projects, skills, and background. Try asking about:
• His education at USF
• His work experience at Citi, Vivint, or Capgemini
• His projects like Trace the Change, Bull-Mart, or Client Data Management
• His technical skills and technologies
• His leadership role at AI Society`
}

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json()
    
    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 })
    }
    
    const response = generateResponse(message)
    
    return NextResponse.json({ response })
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
} 