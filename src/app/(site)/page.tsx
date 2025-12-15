"use client";

import { motion } from "framer-motion";
import ContactForm from "../components/ContactForm";

const projects = [
  {
    name: "To-Do List Manager",
    github: "https://github.com/Arctic1ce/AchieveIt",
    technologies: ["React", "Node.js", "JavaScript", "MongoDB", "Azure"],
    description:
      "Developed and deployed a full-stack task management application that enables users to create, organize, and track their daily tasks and projects through an intuitive web interface.",
    keyFeatures: [
      {
        name: "Modern Frontend",
        description:
          "Created a Built responsive user interface using React with clean, user-friendly design",
      },
      {
        name: "RESTful Backend",
        description:
          "Implemented Node.js server with JavaScript APIs for seamless data operations",
      },
      {
        name: "Cloud Database",
        description:
          "Integrated MongoDB Cloud for reliable data persistence and synchronization",
      },
      {
        name: "Cloud Deployment",
        description:
          "Deployed the application on Vercel for global accessibility and scalability",
      },
    ],
    technicalHighlights: [
      "Complete CRUD operations for task management",
      "Real-time updates and data synchronization",
      "Responsive design for desktop and mobile users",
      "Secure user authentication and data management",
    ],
    summary:
      "This project demonstrates my ability to build and deploy complete web applications from concept to production, integrating modern web technologies with cloud infrastructure.",
  },
  {
    name: "String Taint Analysis Tool",
    github: "https://github.com/Arctic1ce/CSC-429-Taint-Analysis-Project",
    technologies: ["LLVM", "C++"],
    description:
      "Developed a sophisticated string taint analysis tool as part of a compiler security project to detect potential cybersecurity vulnerabilities in source code.",
    keyFeatures: [
      {
        name: "LLVM Compiler Pass",
        description:
          "Created an LLVM compiler pass to systematically track user-inputted strings throughout program execution",
      },
      {
        name: "Memory Taint Tracking",
        description:
          "Implemented memory taint tracking to identify any memory locations that could become compromised by malicious inputs",
      },
      {
        name: "Data Flow Analysis",
        description:
          "Designed algorithms to trace data flow and flag potential security vulnerabilities before runtime",
      },
    ],
    summary:
      "This project deepened my understanding of how simple yet effective cyberattacks can be, and reinforced my passion for building defensive security tools. The analysis tool demonstrates the critical importance of tracking data provenance in secure software development.",
  },
  {
    name: "Fantasy Potion Shop API",
    github: "https://github.com/Arctic1ce/artincauldrons",
    technologies: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "Supabase"],
    description:
      "Built a comprehensive backend API for a simulated fantasy RPG potion shop that integrates with a live marketplace system. The application manages a complex business simulation where virtual customers purchase potions based on dynamic preferences and market conditions.",
    keyFeatures: [
      {
        name: "Real-time Business Logic",
        description:
          "Handles customer interactions, potion brewing, and barrel purchasing on scheduled ticks (every 5 minutes during testing)",
      },
      {
        name: "Complex Inventory Management",
        description:
          "Tracks gold, potion inventory, and barrel supplies across multiple potion types (100k+ possible combinations)",
      },
      {
        name: "Customer Behavior Simulation",
        description:
          "Implements sophisticated customer classes with varying preferences, wealth levels, and shopping patterns",
      },
      {
        name: "Reputation System",
        description:
          "Manages shop reputation based on value, reliability, and recognition metrics",
      },
      {
        name: "Database Integration",
        description:
          "Uses PostgreSQL with SQLAlchemy for persistent state management",
      },
    ],
    technicalHighlights: [
      "Deployed on Render with automated CI/CD pipeline",
      "RESTful API design following OpenAPI specifications",
      "Environment-based configuration for scalable deployment",
      "Integration with external consortium marketplace for competitive gameplay",
    ],
    summary:
      "The project showcases full-stack development skills while managing complex business logic and real-time data processing in a competitive simulation environment.",
  },
];

const languages = [
  {
    name: "Proficient",
    languages: ["Java", "Python", "C/C++", "JavaScript", "SQL (PostgreSQL)"],
  },
  {
    name: "Familiar",
    languages: ["Rust", "PHP", "Go", "HTML/CSS", "Assembly"],
  },
];

const frameworks = [
  {
    name: "Frameworks & Libraries",
    frameworks: ["React", "Node.js", "Material-UI", "RestAPI", "Plotly"],
  },
];

const databaseTechnologies = [
  {
    name: "Database Technologies",
    databases: [
      "PostgreSQL",
      "MongoDB",
      "Supabase",
      "Database Design & Management",
    ],
  },
];

const tools = [
  {
    name: "Developer Tools & Technologies",
    tools: [
      "Git",
      "Atlassian (Jira, Stash)",
      "Docker",
      "TravisCI",
      "Azure",
      "AWS",
      "Linux",
      "Windows",
      "MacOS",
    ],
  },
];

const security = [
  {
    name: "Security & Systems",
    security: [
      "System Security",
      "Web Security",
      "Cryptography",
      "Compiler Security",
      "Vulnerability Assessment (CVE Detection)",
      "Networks",
      "Operating Systems",
    ],
  },
];

const areasOfExpertise = [
  {
    name: "Areas of Expertise",
    areasOfExpertise: [
      "Full-Stack Development",
      "Cybersecurity",
      "Data Visualization",
      "Database Management",
      "Network Research",
    ],
  },
];

const technicalCompetencies = [
  {
    name: "Technical Competencies",
    technicalCompetencies: [
      "Problem Solving",
      "Research & Development",
      "Team Collaboration",
      "Project Management",
    ],
  },
];

type WorkExperience = {
  company: string;
  position: string;
  duration: string;
  location: string;
  skills: string[];
  description: string[];
};

const workExperience: WorkExperience[] = [
  {
    company: "Eridan",
    position: "Software Engineer Contractor",
    duration: "June 2025 - Present",
    location: "Sunnyvale, CA",
    skills: [
      "Full Stack Development",
      "Data Upload Streaming",
      "CI/CD",
      "Next.js",
      "PostgreSQL",
    ],
    description: [
      "Migrated a legacy web application to a modern, scalable, and maintainable codebase using Next.js, Supabase, and Vercel",
      "Migrated database to accommodate a new version of a radio part which required several hundred lines of a raw PostgreSQL query",
      "Worked with hardware team to create a custom file upload chunking service using C++",
      "Developed new features and bug fixes for the application",
    ],
  },
  {
    company: "Oregon Network Research Group - University of Oregon",
    position: "REU-funded Summer Internship",
    duration: "June - Sept 2024",
    location: "Remote",
    skills: [
      "Python",
      "Plotly",
      "Data Visualization",
      "Network Analysis",
      "Data Processing",
    ],
    description: [
      "Developed real-time network data visualization applications using Plotly",
      "Collaborated with research team to analyze and present network security patterns",
      "Implemented automated data processing pipelines for network traffic analysis",
      "Created interactive dashboards for visualizing complex network metrics",
    ],
  },
  {
    company: "Nebulon (acquired by Nvidia)",
    position: "Software Engineering Intern",
    duration: "June - August 2023",
    location: "Fremont, CA",
    skills: ["Go", "Cybersecurity", "Automation", "Performance Testing"],
    description: [
      "Developed an internal application to automate the process of finding CVE cybersecurity vulnerabilities within imported packages in company repositories",
      "Created an application using Go to test different logging packages and determine optimal package efficiency",
      "Implemented automated security scanning pipeline that reduced manual vulnerability assessment time by 75%",
    ],
  },
  {
    company: "CDK Global",
    position: "Software Engineering Intern",
    duration: "June - August 2022",
    location: "San Jose, CA",
    skills: [
      "React",
      "PHP",
      "JavaScript",
      "PostgreSQL",
      "Full-Stack Development",
      "Database Management",
      "Git",
      "CI/CD",
    ],
    description: [
      "Developed and maintained automotive dealership management systems",
      "Participated in full-stack development of web applications",
      "Collaborated with senior developers on system improvements",
      "Developed a dashboard to automate the process of adding, removing, editing, and looking up data entries in a Git repository",
      "Developed a customer relational database, built a user-friendly dashboard to display its contents, which allowed for filtering, adding, and editing data entries",
    ],
  },
];

type SkillSection = {
  name: string;
  [key: string]: string | string[];
};

const skillsSections = [
  { title: "Languages", data: languages },
  { title: "Frameworks", data: frameworks },
  { title: "Databases", data: databaseTechnologies },
  { title: "Tools", data: tools },
  { title: "Security", data: security },
  { title: "Expertise", data: areasOfExpertise },
  { title: "Competencies", data: technicalCompetencies },
] as const;

export default function Home() {
  return (
    <main className="min-h-screen p-4 md:p-8 pt-20 md:pt-24">
      {/* Hero Section */}
      <motion.section
        id="home"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="min-h-[80vh] flex flex-col justify-center items-center mb-32 text-center max-w-6xl mx-auto px-4 pt-24"
      >
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 gradient-text">
          Artin Davari
        </h1>
        <p className="text-3xl md:text-4xl lg:text-5xl text-muted-foreground">
          SWE & Cybersecurity Student
        </p>
      </motion.section>

      {/* Experience Section */}
      <motion.section
        id="experience"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-24 md:mb-32 pt-24"
      >
        <h2 className="text-3xl font-bold mb-8 gradient-text">
          Work Experience
        </h2>
        <div className="space-y-8">
          {workExperience.map((job: WorkExperience, index: number) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="card-hover p-6 rounded-lg border bg-card hover-lift"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-bold">{job.company}</h3>
                <span className="text-muted-foreground">{job.duration}</span>
              </div>
              <p className="text-lg mb-2">{job.position}</p>
              <p className="text-muted-foreground mb-4">{job.location}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {job.skills.map((skill: string) => (
                  <span
                    key={skill}
                    className="px-2 py-1 text-sm rounded-full bg-primary/10 text-primary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                {job.description.map((item: string) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-24 md:mb-32 pt-24"
      >
        <h2 className="text-3xl font-bold mb-8 gradient-text">Projects</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-card/50 border border-primary/20 rounded-lg p-6 hover:border-primary/40 hover:bg-card/80 transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-2 text-primary">
                {project.name}
              </h3>
              <p className="text-foreground/80 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-sm rounded-full bg-primary/5 text-primary border border-primary/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 text-primary/90">
                    Key Features:
                  </h4>
                  <ul className="space-y-2">
                    {project.keyFeatures.map((feature) => (
                      <li key={feature.name} className="text-sm">
                        <span className="font-medium text-primary">
                          {feature.name}:
                        </span>{" "}
                        <span className="text-foreground/70">
                          {feature.description}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                {project.technicalHighlights && (
                  <div>
                    <h4 className="font-semibold mb-2 text-primary/90">
                      Technical Highlights:
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-foreground/70">
                      {project.technicalHighlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="text-sm text-foreground/60 italic">
                  {project.summary}
                </div>
              </div>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-primary hover:text-primary/80 transition-colors"
              >
                View on GitHub →
              </a>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        id="skills"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-24 md:mb-32 pt-24"
      >
        <h2 className="text-3xl font-bold mb-8 gradient-text">Skills</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillsSections.map((section, index) => {
            const data = section.data[0] as SkillSection;
            const items = data[Object.keys(data)[1]] as string[];

            return (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card-hover p-6 rounded-lg border bg-card hover-lift"
              >
                <h3 className="text-xl font-bold mb-4">{section.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((item: string) => (
                    <span
                      key={item}
                      className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-24 md:mb-32 pt-24"
      >
        <h2 className="text-3xl font-bold mb-8 gradient-text">Contact Me</h2>
        <div className="card-hover p-6 rounded-lg border bg-card hover-lift">
          <ContactForm />
        </div>
      </motion.section>
    </main>
  );
}
