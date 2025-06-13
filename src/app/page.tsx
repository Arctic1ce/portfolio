"use client";

import { motion } from "framer-motion";

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
    technologies: ["Python, FastAPI, PostgreSQL, SQLAlchemy, Supabase"],
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

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-primary">Artin Davari</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            Full Stack Developer & Cybersecurity Student
          </p>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <p className="text-lg text-muted-foreground">
            Hi, I&apos;m Artin Davari, a passionate software engineer and
            cybersecurity enthusiast who recently graduated from California
            Polytechnic State University, San Luis Obispo with a Bachelor of
            Science in Computer Science and a 3.8 GPA. This fall, I&apos;ll be
            pursuing my Master&apos;s degree in Cybersecurity at Georgia
            Institute of Technology, where I&apos;m excited to deepen my
            expertise in security systems and network protection.
            <br />
            <br />
            My journey in computer science has been driven by a fascination with
            both building innovative solutions and protecting them from evolving
            threats. Throughout my academic career, I&apos;ve maintained strong
            performance, earning Dean&apos;s List recognition for 10 quarters
            and President&apos;s List honors for 3 years. My coursework has
            provided me with a solid foundation in system security,
            cryptography, web security, and software engineering, which
            I&apos;ve applied through hands-on internship experiences.
            <br />
            <br />
            I&apos;ve had the privilege of working with diverse organizations,
            from my recent REU-funded research internship with the Oregon
            Network Research Group, where I developed real-time network data
            visualization applications, to my software engineering roles at
            companies like Nebulon (acquired by Nvidia) and CDK Global. These
            experiences have strengthened my skills in languages like Python,
            Java, JavaScript, Go, and C++, while working with frameworks such as
            React and Node.js.
            <br />
            <br />
            Beyond the technical realm, I&apos;m someone who believes in the
            power of technology to create positive impact. My early experience
            refurbishing computers for underprivileged children at Equal
            Opportunities Technology sparked my commitment to using technology
            as a force for good. I enjoy tackling complex problems, whether
            it&apos;s developing full-stack applications, automating
            cybersecurity vulnerability detection, or visualizing network data
            patterns.
            <br />
            <br />
            When I&apos;m not coding or studying security protocols, you&apos;ll
            find me playing basketball, diving into the latest video games,
            building custom computers, or strategizing over a chess match.
            I&apos;m always eager to learn new technologies, take on challenging
            projects, and collaborate with fellow developers and security
            professionals. I&apos;m excited about the intersection of software
            development and cybersecurity, and I look forward to contributing to
            innovative solutions that help protect our increasingly connected
            world.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    {project.name}
                  </a>
                </h3>
                <div className="mt-4">
                  <p>
                    <span className="font-semibold">Technologies Used:</span>{" "}
                    {project.technologies.join(", ")}
                  </p>
                </div>
                <h4 className="text-lg font-semibold mb-2">Description:</h4>
                <p>{project.description}</p>
                <div className="mt-4">
                  <h4 className="font-semibold mb-2">Key Features:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {project.keyFeatures.map((feature, idx) => (
                      <li key={idx}>
                        <span className="font-semibold">{feature.name}:</span>{" "}
                        {feature.description}
                      </li>
                    ))}
                  </ul>
                </div>
                {project.technicalHighlights && (
                  <div className="mt-4">
                    <h4 className="font-semibold mb-2">
                      Technical Highlights:
                    </h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {project.technicalHighlights.map((highlight, idx) => (
                        <li key={idx}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="mt-4">{project.summary}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Programming Languages
                </h3>
                <p>
                  <span className="font-semibold">Proficient:</span>{" "}
                  {languages[0].languages.join(", ")}
                </p>
                <p>
                  <span className="font-semibold">Familiar:</span>{" "}
                  {languages[1].languages.join(", ")}
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Frameworks & Libraries
                </h3>
                <p>{frameworks[0].frameworks.join(", ")}</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Security & Systems
                </h3>
                <p>{security[0].security.join(", ")}</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Areas of Expertise
                </h3>
                <ul className="list-disc pl-5 space-y-1">
                  {areasOfExpertise[0].areasOfExpertise.map((area, index) => (
                    <li key={index}>{area}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Database Technologies
                </h3>
                <p>{databaseTechnologies[0].databases.join(", ")}</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Developer Tools & Technologies
                </h3>
                <p>{tools[0].tools.join(", ")}</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Technical Competencies
                </h3>
                <ul className="list-disc pl-5 space-y-1">
                  {technicalCompetencies[0].technicalCompetencies.map(
                    (competency, index) => (
                      <li key={index}>{competency}</li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Contact</h2>
          <div className="max-w-md mx-auto">
            {/* Contact form will go here */}
          </div>
        </div>
      </section>
    </main>
  );
}
