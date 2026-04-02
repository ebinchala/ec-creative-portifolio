import React from 'react';
import { Cpu, Layout, Layers, Palette, Star, Smartphone, Terminal, Code } from 'lucide-react';
import type { Skill } from '../types';

export const SKILLS: Skill[] = [
  { name: 'Visual Identity & Branding', icon: React.createElement(Palette, {}), color: 'primary' },
  { name: 'Logo Design', icon: React.createElement(Star, {}), color: 'secondary' },
  { name: 'Adobe Creative Suite', icon: React.createElement(Layers, {}), color: 'tertiary' },
  { name: 'Figma & UI Design', icon: React.createElement(Layout, {}), color: 'primary' },
  { name: 'HTML5, CSS3, JS (ES6+)', icon: React.createElement(Code, {}), color: 'primary' },
  { name: 'React.js', icon: React.createElement(Cpu, {}), color: 'secondary' },
  { name: 'Responsive Web Design', icon: React.createElement(Smartphone, {}), color: 'tertiary' },
  { name: 'Git & GitHub', icon: React.createElement(Terminal, {}), color: 'primary' }
];

