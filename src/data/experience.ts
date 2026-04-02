import React from 'react';
import { Palette } from 'lucide-react';
import type { ExperienceItem } from '../types';

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: 'exp1',
    period: '2022 — PRESENT',
    role: 'Freelance Creative Designer & Frontend Developer',
    company: 'Ecreative Design',
    description: [
      'Designed complete brand identity systems including logos and brand guidelines.',
      'Developed responsive websites and landing pages using HTML, CSS, and JavaScript.',
      'Built reusable UI components using React.',
      'Converted Figma designs into responsive web interfaces.',
      'Collaborated with clients to deliver tailored digital and branding solutions.'
    ],
    icon: React.createElement(Palette, { className: 'w-6 h-6' })
  }
];

