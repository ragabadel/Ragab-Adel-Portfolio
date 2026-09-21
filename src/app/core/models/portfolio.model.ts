export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  ariaLabel: string;
  isPrimary?: boolean;
}

export interface ProfileInfo {
  fullName: string;
  professionalName: string;
  primaryRole: string;
  roleSubtitle: string;
  location: string;
  email: string;
  phone: string;
  whatsappNumber: string;
  whatsappUrl: string;
  heroHeadline: string;
  heroStatement: string;
  aboutStory: string[];
  cvPath: string;
  avatarPath: string;
  socials: SocialLink[];
  highlights: {
    label: string;
    description: string;
    icon: string;
  }[];
}

export interface SkillItem {
  name: string;
  level?: 'Beginner' | 'Intermediate' | 'Advanced';
  featured?: boolean;
}

export interface SkillCategory {
  id: string;
  categoryName: string;
  categorySubtitle: string;
  isPrimaryBackend?: boolean;
  skills: SkillItem[];
}

export interface ProjectItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  features: string[];
  githubUrl?: string;
  demoUrl?: string;
  image: string;
  isFeatured: boolean;
  category: 'Full Stack' | 'Backend / Web API' | 'IT Automation';
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  startDate: string;
  endDate: string;
  isCurrent: boolean;
  responsibilities: string[];
  technologies: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  grade: string;
  period?: string;
  details?: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  credentialType: string;
  date?: string;
}

export interface LanguageItem {
  language: string;
  proficiency: string;
  flag?: string;
}

export interface PortfolioData {
  profile: ProfileInfo;
  skillCategories: SkillCategory[];
  projects: ProjectItem[];
  experiences: ExperienceItem[];
  education: EducationItem[];
  certifications: CertificationItem[];
  languages: LanguageItem[];
}
