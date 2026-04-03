import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'motion/react';
import {
  Menu,
  X,
  ArrowRight,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
  Globe,
  Github,
  Linkedin,
  Twitter,
  Send,
  Code,
  Palette,
  Layers,
  Layout,
  Terminal,
  Smartphone,
  Cpu,
  Star,
  ArrowUpRight,
  ChevronDown,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

import NavbarComponent from './components/Navbar';
import HeroComponent from './components/Hero';
import ProjectsComponent from './components/Projects';
import StatsComponent from './components/Stats';
import ExperienceComponent from './components/Experience';
import SkillsComponent from './components/Skills';
import TestimonialsComponent from './components/Testimonials';
import ContactComponent from './components/Contact';
import FooterComponent from './components/Footer';
import TickerComponent from './components/Ticker';

// --- Types ---

interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  year: string;
  image: string;
  color: 'primary' | 'secondary' | 'tertiary';
  span?: string;
}

interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  company: string;
  description: string[];
  icon: React.ReactNode;
}

interface Skill {
  name: string;
  icon: React.ReactNode;
  color: string;
}

// --- Data ---

const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Aether Dashboard',
    description: 'Next-gen telemetry visualization for deep space exploration missions.',
    category: 'Spatial UI',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop',
    color: 'primary',
    span: 'md:col-span-8'
  },
  {
    id: '2',
    title: 'Void Protocol',
    description: 'Minimalist financial layer for decentralized autonomous entities.',
    category: 'Web3',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1000&auto=format&fit=crop',
    color: 'secondary',
    span: 'md:col-span-4'
  },
  {
    id: '3',
    title: 'Nova OS',
    description: 'An operating system built for mixed-reality hardware environments.',
    category: 'XR',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1614728263952-84ea256f9679?q=80&w=1000&auto=format&fit=crop',
    color: 'primary',
    span: 'md:col-span-4'
  },
  {
    id: '4',
    title: 'The Catalyst Core',
    description: 'Designing the interface for high-performance quantum workstation hardware.',
    category: 'Hardware',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop',
    color: 'tertiary',
    span: 'md:col-span-8'
  }
];

const EXPERIENCE: ExperienceItem[] = [
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
    icon: <Palette className="w-6 h-6" />
  }
];

const SKILLS: Skill[] = [
  { name: 'Visual Identity & Branding', icon: <Palette />, color: 'primary' },
  { name: 'Logo Design', icon: <Star />, color: 'secondary' },
  { name: 'Adobe Creative Suite', icon: <Layers />, color: 'tertiary' },
  { name: 'Figma & UI Design', icon: <Layout />, color: 'primary' },
  { name: 'HTML5, CSS3, JS (ES6+)', icon: <Code />, color: 'primary' },
  { name: 'React.js', icon: <Cpu />, color: 'secondary' },
  { name: 'Responsive Web Design', icon: <Smartphone />, color: 'tertiary' },
  { name: 'Git & GitHub', icon: <Terminal />, color: 'primary' }
];

// --- Animation Variants ---

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

// --- Hero Reveal Variants ---
// Bottom-to-top reveal with stagger (badge -> headings -> description -> buttons).
const heroStaggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.06
    }
  }
};

const heroRevealItem = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

// --- Components ---

const BackgroundElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 50, 0],
          y: [0, -30, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]"
      />
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, -40, 0],
          y: [0, 60, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[150px]"
      />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay" />
    </div>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-[#0b0e15]/90 backdrop-blur-xl border-b border-white/10 py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-[1400px] mx-auto px-8 lg:px-12 flex justify-between items-center relative">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold tracking-tight text-primary font-headline cursor-pointer"
        >
          ec.creative
        </motion.div>

        <div className="hidden md:flex items-center space-x-12 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              onClick={() => setActiveLink(link.href)}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`font-headline text-[13px] uppercase tracking-wider transition-colors relative group font-semibold ${activeLink === link.href ? 'text-primary' : 'text-[#6b7280] hover:text-white'}`}
            >
              {link.name}
              {activeLink === link.href && (
                <span className="absolute -bottom-2 left-0 h-[2px] w-full bg-primary" />
              )}
            </motion.a>
          ))}
        </div>

        <div className="flex items-center">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-300 hover:text-white transition-colors p-2 md:block">
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-[#0b0e15]/95 backdrop-blur-2xl border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-8 space-y-6 text-center">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    setActiveLink(link.href);
                    setIsMobileMenuOpen(false);
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className={`font-headline tracking-widest text-xs uppercase ${activeLink === link.href ? 'text-primary' : 'text-gray-400 hover:text-white'}`}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-transparent">
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-[500px] md:w-[800px] h-[500px] md:h-[800px] bg-[#8ff5ff]/6 blur-[150px] rounded-full pointer-events-none -translate-x-1/3 -translate-y-1/3 mix-blend-screen" />
      <div className="absolute bottom-0 right-0 w-[500px] md:w-[800px] h-[500px] md:h-[800px] bg-[#ff59e3]/10 blur-[150px] rounded-full pointer-events-none translate-x-1/3 translate-y-1/3 mix-blend-screen" />

      <div className="max-w-[1400px] mx-auto px-8 lg:px-16 w-full relative z-10">
        <div className="relative flex flex-col lg:flex-row items-center lg:items-start">

          {/* Left Content */}
          <motion.div
            variants={heroStaggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="w-full lg:w-full relative z-10 text-center lg:text-left"
          >
            <motion.div
              variants={heroRevealItem}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00eefc]/30 bg-[#00eefc]/5 mb-10 backdrop-blur-sm"
            >
              <span className="w-2 h-2 rounded-full bg-[#00eefc] shadow-[0_0_8px_#00eefc]" />
              <span className="font-headline text-[11px] tracking-[0.1em] uppercase text-[#00eefc] font-bold">AVAILABLE FOR NEW PROJECTS</span>
            </motion.div>

            <motion.h3
              variants={heroRevealItem}
              className="font-headline text-[#00eefc] mb-6 uppercase tracking-[0.4em] font-bold text-sm md:text-lg lg:text-xl"
            >
              CREATIVE DESIGNER & WEB DEVELOPER
            </motion.h3>

            <motion.h1
              variants={heroRevealItem}
              className="font-headline text-6xl md:text-[7rem] lg:text-[8rem] font-bold tracking-tight leading-[0.85] mb-10 text-white drop-shadow-2xl relative z-10"
            >
              Ebenezer{" "}
              <span
                className="relative bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(45deg, rgb(146, 1, 172) 0%, rgb(255, 38, 241) 100%)",
                }}
              >
                Chala
                <span className="text-[hsla(291, 98%, 22%, 1)]">.</span>
              </span>
            </motion.h1>

            <motion.p
              variants={heroRevealItem}
              className="font-headline font-medium text-lg md:text-xl lg:text-xl text-[#a0a3b1] max-w-[90%] lg:max-w-[65rem] xl:max-w-[70rem] mb-12 leading-[1.6] mx-auto lg:mx-0"
            >
              Creative Designer + UX/UI designer who loves turning ideas into simple, intuitive digital experiences. With a background in design and Web Development, I build products that not only look good but actually work.
            </motion.p>

            <motion.div
              variants={heroRevealItem}
              className="flex flex-wrap justify-center lg:justify-start gap-6"
            >
              <a href="#projects" className="inline-flex">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 rounded-full bg-[#00eefc] text-[#052b2e] font-headline font-bold uppercase tracking-widest text-xs flex items-center gap-3 transition-all shadow-[0_0_30px_rgba(0,238,252,0.3)]"
                >
                  VIEW MY WORK
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </a>

              <a href="#skills" className="inline-flex">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 rounded-full border border-white/20 text-white hover:bg-white/5 font-headline font-bold uppercase tracking-widest text-xs transition-colors"
                >
                  Services
                </motion.button>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Image Container - Positioned to overlap the text exactly as in the UI */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="relative lg:absolute lg:right-[10%] lg:top-[-15%] w-full lg:w-[700px] flex justify-center lg:justify-end items-center mt-12 lg:mt-0 -z-20 pointer-events-none"
          >
            <div className="relative w-[250px] h-[250px] md:w-[250px] md:h-[250px] lg:w-[400px] lg:h-[400px]">
              {/* The Image - hero.png contains the person and the circle */}
              <img
                src="/hero image.png"
                alt="Ebenezer Chala"
                className="w-full h-full object-contain relative z-20"
                referrerPolicy="no-referrer"
              />

              {/* Subtle glow behind the image */}
              <div className="absolute inset-0 rounded-full bg-[#F68BE4]/5 blur-[20px] -z-10" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ y: -10 }}
      className={`${project.span || 'md:col-span-6'} w-full group relative overflow-hidden rounded-3xl glass-panel aspect-video md:aspect-auto h-[450px] cursor-pointer`}
    >
      <motion.img
        src={project.image}
        alt={project.title}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-all duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent" />

      <div className="absolute bottom-0 p-6 sm:p-8 lg:p-10 w-full">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="flex gap-3 mb-4"
        >
          <span className={`px-3 py-1 rounded-md bg-${project.color}/10 text-${project.color} text-[9px] font-headline uppercase tracking-widest border border-${project.color}/20`}>
            {project.category}
          </span>
          <span className="px-3 py-1 rounded-md bg-white/5 text-on-surface-variant text-[9px] font-headline uppercase tracking-widest border border-white/10">
            {project.year}
          </span>
        </motion.div>

        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="font-headline text-2xl sm:text-3xl font-bold mb-2 group-hover:text-primary transition-colors"
        >
          {project.title}
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-on-surface-variant text-sm max-w-sm leading-relaxed"
        >
          {project.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0"
        >
          <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-primary hover:bg-primary hover:text-surface transition-colors">
            <ArrowUpRight className="w-5 h-5" />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4"
      >
        <div className="space-y-2 text-center md:text-left">
          <motion.h2 variants={fadeInUp} className="font-headline text-4xl font-bold tracking-tight text-on-surface">Featured Artifacts</motion.h2>
          <motion.p variants={fadeInUp} className="text-on-surface-variant max-w-md">Explorations in light, depth, and spatial computing.</motion.p>
        </div>
        <motion.a
          variants={fadeInUp}
          whileHover={{ x: 5 }}
          href="#"
          className="text-primary font-headline text-[10px] tracking-widest uppercase hover:underline flex items-center gap-2"
        >
          View Archive <ExternalLink className="w-3 h-3" />
        </motion.a>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
};

const Stats = () => {
  const stats = [
    { value: '03+', label: 'Years Exp', color: 'primary' },
    { value: '20+', label: 'Projects', color: 'secondary' },
    { value: '10+', label: 'Core Skills', color: 'tertiary' },
    { value: '24/7', label: 'Uptime', color: 'primary' }
  ];

  return (
    <section className="max-w-7xl mx-auto px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-4 gap-8 p-12 rounded-3xl bg-white/5 border border-white/10 relative overflow-hidden group"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center relative z-10"
          >
            <motion.div
              whileInView={{
                scale: [1, 1.1, 1],
                transition: { duration: 2, repeat: Infinity }
              }}
              className={`font-headline text-4xl md:text-5xl font-bold text-${stat.color} mb-2`}
            >
              {stat.value}
            </motion.div>
            <div className="text-on-surface-variant text-[10px] uppercase tracking-widest font-headline">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-32 max-w-7xl mx-auto px-8">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-4 mb-16"
      >
        <h2 className="font-headline text-3xl font-bold tracking-tight uppercase">Professional Experience</h2>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1 }}
          className="h-px flex-grow bg-gradient-to-r from-outline-variant/50 to-transparent origin-left"
        />
      </motion.div>

      <div className="relative border-l border-outline-variant/30 ml-4 md:ml-8 pl-8 md:pl-16 space-y-16">
        {EXPERIENCE.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="absolute -left-[41px] md:-left-[73px] top-0 w-4 h-4 rounded-full bg-primary neon-glow-primary ring-4 ring-surface"
            />
            <motion.div
              whileHover={{ x: 10 }}
              className="glass-panel p-8 rounded-3xl relative overflow-hidden group transition-all duration-500"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-20 group-hover:scale-110 transition-all duration-500">
                {item.icon}
              </div>
              <span className="text-secondary font-headline text-[10px] tracking-[0.2em] uppercase mb-2 block">{item.period}</span>
              <h3 className="font-headline text-2xl font-bold mb-1">{item.role}</h3>
              <p className="text-primary font-medium mb-6 uppercase tracking-widest text-xs">{item.company}</p>
              <ul className="text-on-surface-variant max-w-4xl leading-relaxed space-y-3">
                {item.description.map((desc, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * i }}
                    className="flex gap-3"
                  >
                    <span className="text-primary mt-1.5">•</span>
                    {desc}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-32 max-w-7xl mx-auto px-8">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-4 mb-16"
      >
        <h2 className="font-headline text-3xl font-bold tracking-tight uppercase">Technical Arsenal</h2>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1 }}
          className="h-px flex-grow bg-gradient-to-r from-outline-variant/50 to-transparent origin-left"
        />
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6"
      >
        {SKILLS.map((skill, i) => (
          <motion.div
            key={skill.name}
            variants={fadeInUp}
            whileHover={{
              y: -10,
              borderColor: "rgba(143, 245, 255, 0.4)",
              boxShadow: "0 10px 30px rgba(143, 245, 255, 0.1)"
            }}
            className="glass-panel p-8 rounded-2xl flex flex-col items-center justify-center text-center group transition-all duration-500"
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.8 }}
              className={`w-14 h-14 mb-4 rounded-full bg-${skill.color}/10 flex items-center justify-center text-${skill.color} group-hover:bg-${skill.color} group-hover:text-surface transition-all duration-300`}
            >
              {React.cloneElement(skill.icon as React.ReactElement, { className: "w-6 h-6" })}
            </motion.div>
            <span className="font-headline font-bold text-[10px] tracking-widest uppercase text-on-surface-variant group-hover:text-on-surface transition-colors">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-32 max-w-7xl mx-auto px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-5 space-y-8"
        >
          <div className="space-y-4">
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="inline-block px-3 py-1 rounded-md bg-tertiary-container/20 text-tertiary text-[10px] font-headline tracking-widest uppercase border border-tertiary/20"
            >
              Get in touch
            </motion.span>
            <h2 className="text-6xl md:text-7xl font-headline font-bold tracking-tighter text-on-surface leading-[0.9]">
              Let's <span className="text-primary italic">Orbit</span> Together.
            </h2>
            <p className="text-lg text-on-surface-variant font-body leading-relaxed max-w-sm">
              Ready to initiate a new project or just want to talk about the future of digital interfaces? Reach out and let's create something stellar.
            </p>
          </div>

          <div className="space-y-6 pt-8">
            {[
              { label: 'Email', value: 'hello@celestial.io', icon: <Mail />, color: 'primary' },
              { label: 'Station', value: 'Digital Nomad / Remote', icon: <MapPin />, color: 'secondary' },
              { label: 'Phone', value: '+251-961883295', icon: <Phone />, color: 'primary' }
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center space-x-4 group cursor-pointer"
              >
                <div className={`w-12 h-12 rounded-xl glass-panel flex items-center justify-center text-${item.color} transition-all group-hover:scale-110 group-hover:neon-glow-${item.color}`}>
                  {React.cloneElement(item.icon as React.ReactElement, { className: "w-5 h-5" })}
                </div>
                <div>
                  <p className="text-[10px] font-headline uppercase tracking-widest text-on-surface-variant">{item.label}</p>
                  <p className="text-on-surface font-medium group-hover:text-primary transition-colors">{item.value}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex space-x-4 pt-8">
            {[Globe, Github, Linkedin, Twitter].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary/50 transition-all duration-300"
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-7"
        >
          <div className="glass-panel p-8 md:p-12 rounded-[2rem] relative shadow-2xl group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[2rem]" />
            <form className="space-y-8 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="block text-[10px] font-headline uppercase tracking-widest text-on-surface-variant ml-1">Your Name</label>
                  <input
                    type="text"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-on-surface focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all placeholder:text-outline-variant"
                    placeholder="Commander Shepard"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-[10px] font-headline uppercase tracking-widest text-on-surface-variant ml-1">Email Coordinates</label>
                  <input
                    type="email"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-on-surface focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all placeholder:text-outline-variant"
                    placeholder="ebi2012ch@gmail.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="block text-[10px] font-headline uppercase tracking-widest text-on-surface-variant ml-1">Subject</label>
                <div className="relative">
                  <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-on-surface focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all appearance-none cursor-pointer">
                    <option className="bg-surface">New Project Proposal</option>
                    <option className="bg-surface">Collaboration Inquiry</option>
                    <option className="bg-surface">Technical Support</option>
                    <option className="bg-surface">Other Transmission</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant pointer-events-none" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="block text-[10px] font-headline uppercase tracking-widest text-on-surface-variant ml-1">Your Message</label>
                <textarea
                  rows={5}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-on-surface focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all placeholder:text-outline-variant resize-none"
                  placeholder="Transmission details..."
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(143, 245, 255, 0.5)" }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 rounded-full bg-gradient-to-r from-primary to-primary-dim text-on-primary font-headline font-bold uppercase tracking-[0.2em] shadow-[0_0_30px_rgba(143,245,255,0.3)] transition-all flex items-center justify-center gap-3 group"
              >
                Send Transmission
                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </motion.button>
            </form>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 glass-panel p-6 rounded-2xl flex items-center justify-between border-primary/20 border-dashed"
          >
            <div className="flex items-center space-x-4">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <span className="text-[10px] font-headline uppercase tracking-tight text-on-surface-variant">Response time within 24 light-hours</span>
            </div>
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
                  className={`w-8 h-8 rounded-full border-2 border-surface bg-${i === 1 ? 'primary' : i === 2 ? 'secondary' : 'tertiary'}/20`}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="w-full border-t border-white/5 bg-slate-950/40 backdrop-blur-md py-12">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex flex-col items-center md:items-start mb-8 md:mb-0"
        >
          <div className="text-xl font-bold text-primary font-headline mb-2">CELESTIAL</div>
          <p className="font-body text-[10px] tracking-normal text-slate-500 uppercase">© 2024 CELESTIAL INTERFACE. ALL RIGHTS RESERVED.</p>
        </motion.div>
        <div className="flex gap-8">
          {['Twitter', 'LinkedIn', 'GitHub'].map((social, i) => (
            <motion.a
              key={social}
              href="#"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ color: "var(--color-primary)", y: -2 }}
              className="font-body text-[10px] tracking-widest uppercase text-slate-500 transition-all"
            >
              {social}
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-transparent selection:bg-primary/30 selection:text-primary overflow-x-hidden">
      {/* Removed scroll progress bar animation for cleaner, faster scrolling */}
      <BackgroundElements />
      <NavbarComponent />

      <main className="relative z-10">
        <HeroComponent />
        <TickerComponent />
        <ProjectsComponent />
        <StatsComponent />
        <ExperienceComponent />
        <SkillsComponent />
        <TestimonialsComponent />
        <ContactComponent />
      </main>

      <FooterComponent />
    </div>
  );
}
