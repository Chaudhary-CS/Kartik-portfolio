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
  internshipDetails?: string[] // Specific internships where used
  jobDetails?: string[] // Specific jobs where used
}

export const skills: Skill[] = [
  {
    name: "Java",
    slug: "java",
    category: "Programming Languages",
    proficiency: "Advanced",
    description: "Used for building robust backend services.",
    experience: "Applied in a professional internship setting.",
    projects: [],
    internshipDetails: ["Citi"],
    color: "#007396"
  },
  {
    name: "Python",
    slug: "python",
    category: "Programming Languages",
    proficiency: "Advanced",
    description: "Versatile language for data aggregation and scripting.",
    experience: "Utilized in an internship and a personal project.",
    projects: ["client-data-management-system"],
    internshipDetails: ["Vivint"],
    color: "#3776AB"
  },
  {
    name: "C/C++",
    slug: "c-cpp",
    category: "Programming Languages",
    proficiency: "Intermediate",
    description: "Fundamental languages learned through coursework.",
    experience: "University coursework.",
    projects: [],
    color: "#00599C"
  },
  {
    name: "HTML/CSS",
    slug: "html-css",
    category: "Programming Languages",
    proficiency: "Advanced",
    description: "Core technologies for building web interfaces.",
    experience: "Applied in the Bull-Mart project.",
    projects: ["bull-mart"],
    color: "#E34F26"
  },
  {
    name: "JavaScript",
    slug: "javascript",
    category: "Programming Languages",
    proficiency: "Advanced",
    description: "Essential for creating dynamic and interactive web applications.",
    experience: "Used in the Bull-Mart project.",
    projects: ["bull-mart"],
    color: "#F7DF1E"
  },
  {
    name: "Spring Boot",
    slug: "spring-boot",
    category: "Frameworks & Libraries",
    proficiency: "Advanced",
    description: "Framework for creating microservices in Java.",
    experience: "Applied during my internship at Citi.",
    projects: [],
    internshipDetails: ["Citi"],
    color: "#6DB33F"
  },
  {
    name: "Angular",
    slug: "angular",
    category: "Frameworks & Libraries",
    proficiency: "Intermediate",
    description: "Used for building front-end components.",
    experience: "Applied during my internship at Citi.",
    projects: [],
    internshipDetails: ["Citi"],
    color: "#DD0031"
  },
  {
    name: "React.js",
    slug: "react-js",
    category: "Frameworks & Libraries",
    proficiency: "Advanced",
    description: "A JavaScript library for building user interfaces.",
    experience: "Core technology for the Bull-Mart project.",
    projects: ["bull-mart"],
    color: "#61DAFB"
  },
  {
    name: "Node.js",
    slug: "node-js",
    category: "Frameworks & Libraries",
    proficiency: "Advanced",
    description: "JavaScript runtime for building backend services.",
    experience: "Used to build the backend for the Bull-Mart project.",
    projects: ["bull-mart"],
    color: "#339933"
  },
  {
    name: "MongoDB",
    slug: "mongodb",
    category: "Databases",
    proficiency: "Advanced",
    description: "NoSQL database for modern applications.",
    experience: "Used in my internship at Vivint and the Bull-Mart project.",
    projects: ["bull-mart"],
    internshipDetails: ["Vivint"],
    color: "#47A248"
  },
  {
    name: "MySQL",
    slug: "mysql",
    category: "Databases",
    proficiency: "Advanced",
    description: "Relational database for structured data.",
    experience: "Used in the Client Data Management System project.",
    projects: ["client-data-management-system"],
    color: "#4479A1"
  },
  {
    name: "Oracle",
    slug: "oracle",
    category: "Databases",
    proficiency: "Intermediate",
    description: "Relational database used in enterprise environments.",
    experience: "Used during my internship at Citi.",
    projects: [],
    internshipDetails: ["Citi"],
    color: "#F80000"
  },
  {
    name: "Azure DevOps",
    slug: "azure-devops",
    category: "Cloud & DevOps",
    proficiency: "Intermediate",
    description: "CI/CD pipeline tool.",
    experience: "Used to implement CI/CD pipelines at Citi.",
    projects: [],
    internshipDetails: ["Citi"],
    color: "#0078D7"
  },
  {
    name: "OpenAI",
    slug: "openai",
    category: "AI/ML",
    proficiency: "Intermediate",
    description: "Used for various AI-related tasks and workshops.",
    experience: "Leveraged as Co-Founder of the AI Society at USF.",
    projects: [],
    jobDetails: ["AI Society at USF"],
    color: "#4E4E4E"
  },
  {
    name: "HP ALM",
    slug: "hp-alm",
    category: "Tools & Platforms",
    proficiency: "Intermediate",
    description: "Tool for test case creation, execution, and defect tracking.",
    experience: "Used during my internship at Capgemini.",
    projects: [],
    internshipDetails: ["Capgemini"],
    color: "#007A8D"
  }
];

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