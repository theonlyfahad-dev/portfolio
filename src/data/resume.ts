export interface PersonalData {
  name: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  role: string;
  about: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  details: string;
}

export interface Skills {
  languages: string[];
  frameworks: string[];
  databases: string[];
  aiAndApis: string[];
  tools: string[];
  concepts: string[];
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date?: string;
  url?: string;
  image?: string;
  details?: string[];
}

export interface Achievement {
  title: string;
  organization: string;
  date: string;
  description: string;
  image: string;
  curriculum?: string[];
}

export interface ResumeData {
  personal: PersonalData;
  education: Education[];
  skills: Skills;
  experience: Experience[];
  projects: Project[];
  certifications: Certification[];
  achievements: Achievement[];
}

export const resumeData: ResumeData = {
  personal: {
    name: "Fahad Khan",
    location: "Shahjahanpur, Uttar Pradesh",
    email: "zk070853@gmail.com",
    phone: "+91 7860985333",
    linkedin: "https://linkedin.com/in/fahadkhandevops",
    github: "https://github.com/theonlyfahad-dev",
    role: "Software Engineer | Business Analysis",
    about:
      "Software Engineer passionate about building scalable software, AI-powered applications, and data-driven business solutions. I enjoy solving real-world problems through clean code, thoughtful design, and continuous learning while creating technology that is innovative and impactful.",
  },
  education: [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Invertis University",
      period: "2024–2027",
      details:
        "Relevant Coursework: Operating Systems, Database Management Systems, Software Engineering, Cloud Computing, Python Programming",
    },
    {
      degree: "Senior Secondary (Class XII)",
      institution: "NIOS Board",
      period: "2024",
      details: "Score: 78.8%",
    },
    {
      degree: "Secondary School (Class X)",
      institution: "CBSE Board",
      period: "2020",
      details: "Score: 65.6%",
    },
  ],
  skills: {
    languages: ["Python", "JavaScript", "C", "HTML5", "CSS3"],
    frameworks: ["FastAPI"],
    databases: ["MySQL", "SQLite"],
    aiAndApis: ["AI APIs", "REST APIs"],
    tools: ["Git", "GitHub", "Visual Studio Code", "Jupyter Notebook"],
    concepts: ["SDLC", "Debugging", "Problem Solving"],
  },
  experience: [
    {
      title: "Tele Associate (Freelance)",
      company: "IndiaMART InterMESH Ltd.",
      period: "6 Months",
      description:
        "Conducted customer outreach, lead qualification, and follow-up activities while strengthening communication and customer service skills.",
    },
    {
      title: "AI-ML Virtual Internship (10 Weeks)",
      company: "AICTE × EduSkills (Supported by Google)",
      period: "10 Weeks",
      description:
        "Completed hands-on training in Artificial Intelligence, Machine Learning, and Data Analysis.",
    },
  ],
  projects: [
    {
      title: "Smart Campus Scheduling System",
      description: "A production-ready Smart Campus Scheduling System built to streamline timetable management with an Excel-like workspace, automated generation, and live conflict detection.",
      technologies: ["Next.js", "NestJS", "TypeScript", "Prisma", "PostgreSQL", "Supabase", "JWT", "Tailwind CSS", "shadcn/ui", "Vercel"],
      features: [
        "Automated timetable generation",
        "Excel-like drag & drop editing",
        "Live conflict detection & suggestions",
        "Student portal & version history"
      ],
      githubUrl: "https://github.com/theonlyfahad-dev",
    },
    {
      title: "DreamRoleAI – Personalized Career Roadmap Generator",
      description: "A career guidance platform that generates personalized roadmaps, offering intelligent resume analysis and comprehensive career skill-gap identification.",
      technologies: ["Python", "FastAPI", "HTML", "CSS", "JavaScript", "REST APIs"],
      features: [
        "AI-powered resume analysis",
        "Personalized learning roadmaps",
        "Skill-gap identification & recommendations"
      ],
      githubUrl: "https://github.com/theonlyfahad-dev",
    },
  ],
  certifications: [
    {
      name: "Generative AI Foundation Program",
      issuer: "UpGrad × Microsoft",
      date: "July 2025",
      image: "/images/certificates/generative-ai.jpg",
      details: [
        "Mastering Generative AI Foundations",
        "AI for Research and Content Creation",
        "Data to Decisions: AI-Driven Analytics",
        "AI-Powered Problem-solving & Prototyping"
      ]
    },
    {
      name: "Career Essentials in Software Development",
      issuer: "Microsoft × LinkedIn Learning",
      date: "July 2026",
      image: "/images/certificates/career-essentials.jpg",
      details: [
        "Core Programming Fundamentals",
        "Software Development Life Cycle (SDLC)",
        "Application of Programming Skills in Workflows"
      ]
    },
    {
      name: "LLM for Young Developers (Foundational)",
      issuer: "Meta × NASSCOM FutureSkills Prime",
      date: "Feb 2026",
      image: "/images/certificates/llm-foundational.jpg",
      details: [
        "Introduction to Open-Source LLMs (LLaMA)",
        "Transformer Architecture Fundamentals",
        "Prompting Techniques & Ethical AI",
        "Introduction to Agentic AI Workflows"
      ]
    },
    {
      name: "Digital Skills: Artificial Intelligence",
      issuer: "Accenture × FutureLearn",
      date: "Feb 2026",
      image: "/images/certificates/digital-skills.jpg",
      details: [
        "Fundamentals of Artificial Intelligence",
        "AI applications in business and the workplace",
        "Machine Learning basics",
        "Ethical and responsible AI",
        "Human–AI collaboration and future career opportunities"
      ]
    },
  ],
  achievements: [
    {
      title: "Graph Theory Programming Camp",
      organization: "AlgoUniversity",
      date: "2026",
      description: "Conquered 17 advanced graph problems under the mentorship of Codeforces Master, Manas Kumar Verma.",
      image: "/images/achievements/graph-theory.jpg",
      curriculum: [
        "Graph Traversals (BFS, DFS)",
        "Shortest Paths (Dijkstra, Bellman-Ford)",
        "Minimum Spanning Trees",
        "Advanced Graph Algorithms"
      ]
    },
    {
      title: "GenAI Powered Data Analytics Job Simulation",
      organization: "Forage × TATA",
      date: "May 2026",
      description: "Completed practical tasks in exploratory data analysis and risk profiling using GenAI.",
      image: "/images/achievements/genai-analytics.jpg",
      curriculum: [
        "Exploratory data analysis and risk profiling",
        "Predicting delinquency with AI",
        "Business report and data storytelling",
        "Implementing an AI-driven collections strategy"
      ]
    }
  ]
};
