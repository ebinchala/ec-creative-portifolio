
import type { ProjectService } from '../types';

export const PROJECTS: ProjectService[] = [
  {
    id: '1',
    index: '01',
    label: 'Core Services',

    title: 'Brand Identity',
    year: 'Jan 2024 — Oct 2025',
    role: 'Identity Lead',

    description:
      'Developing cohesive visual systems and strategic foundations that empower brands to communicate their unique value through impactful design and storytelling.',

    featured: {
      title: 'Snapwre Logo Design',
      image: '/snapwre.jpg',
      deliverables: ['Brand Architecture', 'Visual Identity']
    },

    projects: [
      {
        name: 'Snapwre Design',
        focus: 'Logo Design, Strategy',
        active: true
      },
      {
        name: 'Ilili Ribbons',
        focus: 'Identity Systems, Art Direction'
      },
      {
        name: 'Sunrise Coffee Shop',
        focus: 'Minimalist, Corporate, Tech'
      }
    ],

    tags: [
      'Brand Strategy',
      'Logo Design',
      'Visual Language',
      'Identity Systems'
    ]
  },

  // ✅ 02 — WEB & APP DESIGN
  {
    id: '2',
    index: '02',
    label: 'Core Services',

    title: 'Web & App Design',
    year: '2024 — Present',
    role: 'Product Designer',

    description:
      'Designing modern, user-centered web and mobile applications focused on usability, aesthetics, and seamless user experience.',

    featured: {
      title: 'Finance App UI',
      image: '/web-app-01.jpg',
      deliverables: ['UI Design', 'UX Flow', 'Design System']
    },

    projects: [
      {
        name: 'Finance App',
        focus: 'Dashboard, UX Flow',
        active: true
      },
      {
        name: 'E-commerce App',
        focus: 'Mobile UI, Conversion'
      },
      {
        name: 'SaaS Platform',
        focus: 'Web App UI'
      }
    ],

    tags: [
      'UI Design',
      'UX Research',
      'Wireframing',
      'Design Systems'
    ]
  },

  // ✅ 03 — SOCIAL MEDIA DESIGN
  {
    id: '3',
    index: '03',
    label: 'Core Services',

    title: 'Social Media Design',
    year: '2023 — Present',
    role: 'Visual Designer',

    description:
      'Creating high-impact social media visuals and content systems that enhance engagement and strengthen brand presence across platforms.',

    featured: {
      title: 'Instagram Campaign',
      image: '/social-01.jpg',
      deliverables: ['Content Design', 'Post System', 'Brand Visuals']
    },

    projects: [
      {
        name: 'Fashion Brand',
        focus: 'Instagram Visuals',
        active: true
      },
      {
        name: 'Tech Startup',
        focus: 'Content System'
      },
      {
        name: 'Coffee Shop',
        focus: 'Social Branding'
      }
    ],

    tags: [
      'Content Design',
      'Social Branding',
      'Post Design',
      'Visual Campaigns'
    ]
  },

  // ✅ 04 — WEB DEVELOPMENT
  {
    id: '4',
    index: '04',
    label: 'Core Services',

    title: 'Web Development',
    year: '2023 — Present',
    role: 'Frontend Developer',

    description:
      'Building fast, responsive, and interactive websites with modern technologies, focusing on performance and clean user experience.',

    featured: {
      title: 'Portfolio Website',
      image: '/dev-01.jpg',
      deliverables: ['Frontend Dev', 'Animations', 'Responsive Build']
    },

    projects: [
      {
        name: 'Portfolio Site',
        focus: 'React, Tailwind',
        active: true
      },
      {
        name: 'Business Website',
        focus: 'Landing Pages'
      },
      {
        name: 'Startup Platform',
        focus: 'Frontend System'
      }
    ],

    tags: [
      'React',
      'Frontend Dev',
      'Responsive Design',
      'Performance'
    ]
  }
];