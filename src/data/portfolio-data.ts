import { Project, Experience, Skill, SocialLink } from '@/types/portfolio';

export const personalInfo = {
  name: "Tebarek Wachamo",
  title: "Full-Stack Developer",
  description: "I build exceptional digital experiences that are fast, accessible, visually appealing, and responsive.",
  email: "tebarekwache@gmail.com",
  phone: "+251 954197597",
  location: "Addis Ababa, Ethiopia",
  avatar: "/images/avatar.jpg",
};

export const skills: Skill[] = [
  // Frontend
  { name: "React", level: 90, category: "frontend", icon: "react" },
  { name: "JavaScript", level: 90, category: "frontend", icon: "javascript" },
  { name: "TypeScript", level: 85, category: "frontend", icon: "typescript" },
  { name: "Next.js", level: 88, category: "frontend", icon: "nextjs" },
  { name: "Tailwind CSS", level: 92, category: "frontend", icon: "tailwind" },
  { name: "Material Ui", level: 75, category: "frontend", icon: "materialui" },
  
  // Backend
  { name: "Node.js", level: 88, category: "backend", icon: "nodejs" },
  { name: "Python", level: 85, category: "backend", icon: "python" },
  { name: "PostgreSQL", level: 80, category: "backend", icon: "postgresql" },
  { name: "MongoDB", level: 78, category: "backend", icon: "mongodb" },
  { name: "Express.js", level: 85, category: "backend", icon: "express" },
  
  // Tools
  { name: "Git", level: 90, category: "tools", icon: "git" },
  { name: "GitHub", level: 95, category: "tools", icon: "github" },
  { name: "Docker", level: 75, category: "tools", icon: "docker" },
  { name: "VS Code", level: 95, category: "tools", icon: "vscode" },
  { name: "Cursor AI", level: 85, category: "tools", icon: "cursor" },
  { name: "AWS", level: 87, category: "tools", icon: "aws" },
];

export const projects: Project[] = [
  {
    id: 0,
    title: "Kelal-Gebeya",
    description: "Modern full-stack e-commerce platform with real-time features and secure payments",
    longDescription: "A high-performance e-commerce solution built with Next.js and Supabase. Features include real-time inventory management, Cloudinary-powered media handling, and a seamless shopping experience with Tailwind CSS aesthetics.",
    image: "/images/projects/kelal-gebeya.png",
    technologies: ["Next.js", "Tailwind CSS", "Supabase", "Cloudinary", "PostgreSQL"],
    githubUrl: "https://github.com/Tebarek-W/Kelal-Gebeya",
    liveUrl: "#",
    featured: true,
    slug: "kelal-gebeya"
  },
  {
    id: 1,
    title: "Facial Recognition Attendance System",
    description: "Automated attendance tracking with 95% accuracy, reducing manual effort by 70%",
    longDescription: "A sophisticated facial recognition system built with Python and OpenCV that automates attendance tracking with high accuracy. The system uses computer vision algorithms to identify individuals and record attendance in real-time, significantly reducing manual administrative work.",
    image: "/images/projects/facial-recognition.JPG",
    technologies: ["Python", "OpenCV", "PostgreSQL", "Computer Vision", "Face Recognition"],
    githubUrl: "https://github.com/Tebarek-W/Facial-recognition-attendance-system-FRAS-",
    liveUrl: "https://github.com/Tebarek-W/Facial-recognition-attendance-system-FRAS-",
    featured: true,
    slug: "facial-recognition-attendance-system"
  },
  {
    id: 2,
    title: "Photo Printing House Web App",
    description: "Full-stack MERN application for photo printing services with order management",
    longDescription: "A comprehensive web application for a photo printing business built with the MERN stack. Features include user authentication, product catalog, shopping cart, order management, and admin dashboard for managing products and orders efficiently.",
    image: "/images/projects/photo.jpg",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "MERN Stack", "JWT"],
    githubUrl: "https://github.com/Tebarek-W/photo-printing-webapp",
    liveUrl: "https://github.com/Tebarek-W/photo-printing-webapp",
    featured: true,
    slug: "photo-printing-webapp"
  },
  {
    id: 3,
    title: "Makalla Community Membership Web App",
    description: "Built a full-stack app for managing 100+ memberships, featuring role-based access control and real-time updates",
    longDescription: "A community membership management system built during my internship at Makalla Technologies. The application features user authentication, admin controls, membership management, role-based access control, and real-time updates for efficient community administration.",
    image: "/images/projects/membership-app.jpg",
    technologies: ["React", "PHP", "MySQL", "JavaScript", "HTML", "CSS"],
    githubUrl: "#",
    liveUrl: "#",
    featured: true,
    slug: "makalla-community-membership"
  },
  {
    id: 4,
    title: "Weather App",
    description: "Real-time weather information for cities worldwide with responsive design",
    longDescription: "A clean and intuitive weather application that provides real-time weather data for cities across the globe. Features include current weather conditions, temperature, humidity, wind speed, and a responsive design that works on all devices.",
    image: "/images/projects/weather-app.jpg",
    technologies: ["HTML", "CSS", "JavaScript", "API Integration", "Responsive Design"],
    githubUrl: "https://github.com/Tebarek-W/Weather-App",
    liveUrl: "https://github.com/Tebarek-W/Weather-App",
    featured: true,
    slug: "weather-app"
  },
  {
    id: 5,
    title: "Super BD Consulting Website",
    description: "Professional website for an engineering consultancy firm with responsive design and modern UI.",
    longDescription: "A fully responsive, visually polished web application for Super BD Consulting, an engineering consultancy. The website highlights services like Soil Investigation, Concrete Testing, Asphalt & Aggregate, Geotechnical Investigation, Environmental Testing, and Consultancy & Reporting. Built with a clean layout, smooth transitions, and advanced theme options (light/dark), the site ensures excellent user experience across all devices.",
    image: "/images/projects/super-bd-consulting.png",
    technologies: ["React", "Next.js", "Tailwind CSS", "TypeScript", "HTML", "CSS"],
    githubUrl: "https://github.com/Tebarek-W/Super-BD-Consulting-Engineering",
    liveUrl: "https://super-bd-consulting-engineering.vercel.app",
    featured: true,
    slug: "super-bd-consulting-website"
  },
  {
    id: 6,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with real-time inventory management",
    longDescription: "A comprehensive e-commerce platform built with Next.js, featuring user authentication, payment processing, admin dashboard, and real-time inventory tracking.",
    image: "/images/projects/ecommerce.jpg",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
    githubUrl: "https://github.com/Tebarek-W",
    liveUrl: "#",
    featured: false,
    slug: "ecommerce-platform"
  }
];

export const experiences: Experience[] = [
  {
    id: 1,
    company: "GLYME TECH Solutions",
    position: "Full-stack Web Developer",
    duration: "Sep 2025 - Mar 2026",
    description: [
      "Built high-performance web apps using Next.js, React, and Node.js with 99.9% uptime",
      "Optimized Senedu ERP operations by architecting custom workflows and robust RBAC security",
      "Designed secure RESTful APIs featuring role-based authentication and access control",
      "Delivered the Super BD Consulting engineering website with responsive design and modern UI",
      "Collaborated with team members to implement features and maintain project quality"
    ],
    technologies: ["React", "Next.js", "Tailwind CSS", "Node.js", "TypeScript", "JavaScript", "HTML", "CSS", "Git"],
    logo: "/images/companies/glyme.jpg"
  },
  {
    id: 2,
    company: "Makalla Technologies",
    position: "Full-stack Web Developer (Intern)",
    duration: "Jun 2024 - Sep 2024",
    description: [
      "Delivered a community membership web app on time by delegating tasks based on team strengths",
      "Implemented key features like user authentication and admin controls using React and PHP",
      "Collaborated with team members to ensure project milestones were met efficiently"
    ],
    technologies: ["React", "PHP", "JavaScript", "HTML", "CSS", "MySQL", "Git"],
    logo: "/images/companies/makalla.jpg"
  }
];

export const socialLinks: SocialLink[] = [
  { 
    name: "GitHub", 
    url: "https://github.com/Tebarek-W", 
    icon: "github",
    target: "_blank",
    rel: "noopener noreferrer"
  },
  { 
    name: "LinkedIn", 
    url: "https://linkedin.com/in/tebarek-wachamo-0a90b432a", 
    icon: "linkedin",
    target: "_blank",
    rel: "noopener noreferrer"
  },
  { 
    name: "Email", 
    url: "mailto:tebarekwache@gmail.com", 
    icon: "mail"
  },
];