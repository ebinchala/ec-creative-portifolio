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

