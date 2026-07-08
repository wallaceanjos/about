export type Atmosphere = 'gold' | 'violet';

export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'design' | 'dev' | 'all';
  subtype: string; // e.g. "Identidade Visual", "Front-end SPA", "WordPress CMS"
  techStack: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
  behanceUrl?: string;
  details: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'design' | 'dev' | 'cms';
}

export interface TimelineEvent {
  year: string;
  title: string;
  company: string;
  description: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string; // Lucide icon name
}
