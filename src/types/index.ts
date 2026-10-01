export type Language = 'pt' | 'en';

export type Theme = 'dark' | 'light';

export interface Project {
  id: string;
  title: string;
  description: Record<Language, string>;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  image: string; // Placeholder or custom image path
  featured?: boolean;
}

export interface SkillCategory {
  title: Record<Language, string>;
  skills: string[];
}

export interface ExperienceItem {
  company: string;
  role: Record<Language, string>;
  period: Record<Language, string>;
  location?: string;
  description: Record<Language, string[]>;
}

export interface HeroData {
  tag: Record<Language, string>;
  title: Record<Language, string>;
  subtitle: Record<Language, string>;
  ctaProjects: Record<Language, string>;
  ctaResume: Record<Language, string>;
  resumePath: string;
  highlights: Record<Language, { label: string; value: string }[]>;
}

export interface AboutData {
  avatarPath: string;
  floatingWords: string[];
  title: Record<Language, string>;
  paragraphs: Record<Language, string[]>;
}

export interface ContactData {
  title: Record<Language, string>;
  subtitle: Record<Language, string>;
  email: string;
  github: string;
  linkedin: string;
  copyright: string;
}
