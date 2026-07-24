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
  details?: string[];
}

export interface ResumeData {
  personal: PersonalData;
  education: Education[];
  skills: Skills;
  experience: Experience[];
  projects: Project[];
  certifications: Certification[];
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
      title: "ResumeIQ – AI Resume Analyzer",
      description: "Built an AI-powered resume analyzer that evaluates ATS compatibility, extracts skills, and generates personalized feedback.",
      technologies: ["Python", "FastAPI", "SQLite", "HTML", "CSS", "REST APIs"],
      features: [
        "Evaluates ATS compatibility, extracts skills, and generates personalized feedback.",
        "Integrated resume parsing, keyword analysis, and AI-powered recommendations for resume optimization."
      ],
      githubUrl: "https://github.com/theonlyfahad-dev",
    },
    {
      title: "DreamRoleAI – Personalized Career Roadmap Generator",
      description: "Built a career guidance platform that analyzes resumes and generates personalized career roadmaps.",
      technologies: ["Python", "FastAPI", "HTML", "CSS", "JavaScript", "REST APIs"],
      features: [
        "Analyzes resumes and generates personalized career roadmaps.",
        "Designed skill-gap analysis and integrated AI-powered recommendations for target roles."
      ],
      githubUrl: "https://github.com/theonlyfahad-dev",
    },
  ],
  certifications: [
    {
      name: "Generative AI Foundation Program",
      issuer: "UpGrad × Microsoft",
      date: "July 2025",
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
      details: [
        "Introduction to Open-Source LLMs (LLaMA)",
        "Transformer Architecture Fundamentals",
        "Prompting Techniques & Ethical AI",
        "Introduction to Agentic AI Workflows"
      ]
    },
  ]
};
