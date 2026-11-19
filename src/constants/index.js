export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Projects",
    href: "#projects",
  },
  {
    id: 4,
    name: "Experience",
    href: "#experience",
  },
  {
    id: 5,
    name: "Contact",
    href: "#contact",
  },
  {
    id: 6,
    href: "https://github.com/shantanu421/portfolio-shantanu.git",
    type: "github",
  },
];

export const myProjects = [
  {
    title: "Visual Converse Plus",
    desc: "An AI SaaS platform with five generative tools (chat, code, image, video and music) powered by the OpenAI and Replicate APIs. Stripe subscriptions unlock unlimited generations, and Clerk handles authentication.",
    subdesc:
      "Built with Next.js, TypeScript and Tailwind CSS. Per-user API usage limits and subscription data are tracked in PostgreSQL through Prisma.",
    href: "https://visual-converse-plus.vercel.app/",
    githubHref: "https://github.com/shantanu421/visual-converse-plus.git",
    texture: "/textures/project/project1.png",
    logo: "/assets/project-logo1.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "Next.js",
        path: "assets/nextjs.svg",
      },
      {
        id: 3,
        name: "TailwindCSS",
        path: "/assets/tailwindcss.png",
      },
      {
        id: 4,
        name: "Prisma",
        path: "/assets/prisma.svg",
      },
    ],
  },

  {
    title: "Vidcore (Open Source)",
    desc: "A complex backend system for a video streaming platform, handling API development and creating proper request handlers. Implemented middlewares like Multer and Cloudinary. Designed efficient database models with Mongoose, using advanced aggregation pipelines.",
    subdesc:
      "Built with Node.js, Express.js, and MongoDB, following proper industry-grade code practice and efficient data management",
    href: "NA",
    githubHref: "https://github.com/shantanu421/vidcore.git",
    texture: "/textures/project/project2.png",
    logo: "/assets/open-source.svg",
    tags: [
      {
        id: 1,
        name: "Node.js",
        path: "/other-logos/node.svg",
      },
      {
        id: 2,
        name: "Express.js",
        path: "/other-logos/express.svg",
      },
      {
        id: 3,
        name: "MongoDB",
        path: "/other-logos/mongodb.svg",
      },
    ],
  },

  {
    title: "CarePulse",
    desc: "A healthcare platform designed to streamline essential medical processes. It simplifies patient registration, appointment scheduling, and medical record management, providing a seamless experience for both healthcare providers and patients.",
    subdesc:
      "CarePulse integrates complex forms and SMS notifications by using Next.js,  Appwrite, and Twilio. Appwrite is used for handling the data of patients records and appointment schedules.",
    href: "https://carepulse-healthcare-platform.vercel.app/",
    githubHref: "https://github.com/shantanu421/healthcare_platform.git",

    texture: "/textures/project/project3.png",
    logo: "/assets/project-logo3.png",
    tags: [
      {
        id: 1,
        name: "Next.js",
        path: "assets/nextjs.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "/assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "Appwrite",
        path: "/assets/appwrite.png",
      },
    ],
  },
];

export const workExperiences = [
  {
    id: 1,
    name: "Decision Foundry",
    pos: "Associate Software Engineer",
    duration: "Mar 2025 - Present",
    location: "Remote",
    title:
      "Building production Generative AI apps: LLM tool calling, AI agents and chatbots.",
    projects: [
      {
        name: "Memosight",
        summary:
          "AI paid-media intelligence platform. Built “Memo”, a Claude-powered analyst chatbot, and an autonomous Google Ads agent.",
      },
      {
        name: "CampTag",
        summary:
          "Campaign URL tagging platform. Built the Bitly integration and real-time Socket.IO updates.",
      },
    ],
    award:
      "“Best Newcomer” for impact in the first year.",
    icon: "/assets/df.svg",
  },
  {
    id: 2,
    name: "ExcelR",
    pos: "Full Stack Developer Program",
    duration: "Feb 2024 - Oct 2024",
    title:
      "Worked on a full-stack application with Java, Spring Boot and Spring Security enabling role-based access control for employees and admins. Integrated REST APIs for handling complex data sets securely. Governed the backend data management with MySQL",
    // href: "https://www.excelr.com/",
    icon: "/assets/excelr.png",
  },
  {
    id: 3,
    name: "Business Web Solutions",
    pos: "Web Developer Intern",
    duration: "Jan 2023 - Mar 2023",
    title:
      "Utilizing HTML, CSS, JavaScript, and React.js, delivered a number of modules and tasks that ensured responsive design and interactive user experiences.",
    // href: "https://businesswebsolutions.in/",
    icon: "/assets/bws.png",
  },
];

export const skillGroups = [
  {
    label: "AI / LLM",
    items: [
      "Claude API",
      "OpenAI API",
      "AWS Bedrock",
      "Tool calling",
      "Prompt engineering",
      "Prompt caching",
      "LangChain",
      "LangGraph",
      "Langfuse",
      "AI agents",
    ],
  },
  {
    label: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "SQL", "HTML/CSS"],
  },
  {
    label: "Backend",
    items: [
      "Node.js",
      "Express",
      "FastAPI",
      "REST APIs",
      "WebSockets (Socket.IO)",
      "JWT",
      "OAuth 2.0 / OIDC",
    ],
  },
  {
    label: "Frontend",
    items: ["React", "Next.js"],
  },
  {
    label: "Data",
    items: [
      "PostgreSQL",
      "MongoDB (Mongoose)",
      "Redis",
      "MySQL",
      "MetricFlow (semantic layer)",
    ],
  },
  {
    label: "Cloud / DevOps",
    items: ["AWS (ECS Fargate, Bedrock)", "Terraform", "Temporal", "CI/CD"],
  },
  {
    label: "Tools",
    items: ["Git", "GitHub", "Claude Code", "Postman"],
  },
];

export const certifications = [
  {
    name: "Claude Certified Architect – Foundations",
    issuer: "Anthropic",
    date: "Aug 2026",
    credlyHref:
      "https://www.credly.com/badges/ef15d6df-a66f-4127-bb70-6b950b4103bb",
  },
];

export const education = [
  {
    school: "Sir Visvesvaraya Institute of Technology",
    location: "Nashik, Maharashtra",
    degree: "B.E. in Computer Science and Engineering",
    grade: "CGPA: 8.18",
    duration: "Feb 2021 - Jun 2024",
  },
];
