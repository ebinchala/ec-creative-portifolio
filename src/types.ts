import type { ReactNode } from 'react';

export type ProjectColor = 'primary' | 'secondary' | 'tertiary';

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  year: string;
  image: string;
  color: ProjectColor;
  span?: string;
}

export interface ProjectItem {
  name: string;
  focus: string;
  active?: boolean;
}

export interface ProjectService {
  id: string;
  index: string;
  label: string;
  title: string;
  year: string;
  role: string;
  description: string;
  featured: {
    title: string;
    image: string;
    deliverables: string[];
  };
  projects: ProjectItem[];
  tags: string[];
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  company: string;
  description: string[];
  icon: ReactNode;
}

export interface Skill {
  name: string;
  icon: ReactNode;
  color: ProjectColor;
}

