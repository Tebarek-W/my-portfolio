export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
  slug: string;
}

export interface Experience {
  id: number;
  company: string;
  position: string;
  duration: string;
  description: string[];
  technologies: string[];
  logo: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools';
  icon: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  target?: string;
  rel?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}