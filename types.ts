export interface Skill {
  name: string;
}

export interface CategorizedSkill {
  category: string;
  skills: Skill[];
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  link: string;
}

export interface Experience {
  company: string;
  title: string;
  period: string;
  description: string;
}

export interface PortfolioContent {
  name: string;
  title: string;
  tagline: string;
  about: string;
  skills: CategorizedSkill[];
  projects: Project[];
  experience: Experience[];
  contact: {
    email: string;
    linkedin: string;
    github: string;
  };
}