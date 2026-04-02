import type { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Brand Identity',
    description: 'Brand Identity for a startup company.',
    category: 'Branding',
    year: '2024',
    // Public assets are served from the root path in Vite.
    image: '/brandings-01.jpg',
    color: 'primary',
    span: 'md:col-span-8'
  },
  {
    id: '2',
    title: 'Social Media Design',
    description: 'Social Media Design for a startup company.',
    category: 'Social Media',
    year: '2024',
    image: '/social-media-01.jpg',
    color: 'secondary',
    span: 'md:col-span-4'
  },
  {
    id: '3',
    title: 'App Design',
    description: 'App Design for a startup company.',
    category: 'App Design',
    year: '2024',
    image: '/app-design-01.png',
    color: 'primary',
    span: 'md:col-span-4'
  },
  {
    id: '4',
    title: 'Website Design',
    description: 'Website Design for a startup company.',
    category: 'Website Design',
    year: '2024',
    image: '/website-design-01-01.jpg',
    color: 'tertiary',
    span: 'md:col-span-8'
  }
];

