export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
    icon: '/logos/home.svg'
  },
  {
    id: 2,
    name: "About",
    href: "#about",
    icon: '/logos/about.svg'

  },
  {
    id: 3,
    name: "Projects",
    href: "#projects",
    icon: '/logos/project.svg'
  },
  {
    id: 4,
    name: "Experience",
    href: "#experience",
    icon: '/logos/exp.svg'
  },
  {
    id: 5,
    href: "https://github.com/shantanu421/portfolio-shantanu.git",
    type: "github"
  },
];

export const myProjects = [
  {
    title: "Visual Converse Plus",
    desc: "A SaaS platform where users can generate dynamic content using AI tools like Image generation AI, Video generation AI, Code generation AI, Music generation AI, and Conversation AI. To generate unlimited content, a subscription model feature is implemented using Stripe.",
    subdesc:
      "This AI platform is built with Next.js, Tailwind CSS, and React.js. Prisma is used as a ORM to handle the data of user subscription and Api limit count",
    href: "https://visual-converse-plus.vercel.app/",
    githubHref: "https://github.com/shantanu421/visual-converse-plus.git",
    texture: "/textures/project/project1.png",
    logo: "/assets/project-logo1.png",
    spotlight: "/assets/spotlight1.png",
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
    githubHref:"https://github.com/shantanu421/vidcore.git",
    texture: "/textures/project/project2.png",
    logo: "/assets/open-source.svg",
    spotlight: "/assets/spotlight4.png",
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
      "CarePulse integrates complex forms and SMS notifications by using Next.js, React.js, and Twilio. Appwrite is used for handling the data of patients records and appointment schedules.",
    href: "https://carepulse-healthcare-platform.vercel.app/",
    githubHref: "https://github.com/shantanu421/healthcare_platform.git",
    
    texture: "/textures/project/project3.png",
    logo: "/assets/project-logo3.png",
    spotlight: "/assets/spotlight3.png",
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
        name: "Appwrite",
        path: "/assets/appwrite.png",
      },
    ],
  },
 
  
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.7 : isMobile ? 0.9 : 1.3,
    deskPosition: isMobile ? [0.8, -3.5, 0] : [2.1, -5, 0],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: "Framer",
    pos: "Lead Web Developer",
    duration: "2022 - Present",
    title:
      "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
    icon: "/assets/framer.svg",
  },
  {
    id: 2,
    name: "Figma",
    pos: "Web Developer",
    duration: "2020 - 2022",
    title:
      "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
    icon: "/assets/figma.svg",
  },
  {
    id: 3,
    name: "Notion",
    pos: "Junior Web Developer",
    duration: "2019 - 2020",
    title:
      "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
    icon: "/assets/notion.svg",
  },
];
