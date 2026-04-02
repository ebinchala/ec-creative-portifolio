import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '../types';
import { fadeInUp } from '../animations';

export default function ProjectCard({
  project
}: {
  project: Project;
  index: number;
  key?: string | number;
}) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={`${project.span || 'md:col-span-6'} w-full group relative overflow-hidden rounded-3xl glass-panel aspect-video md:aspect-auto h-[450px] cursor-pointer`}
    >
      {/* Animated gradient overlay on hover */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 pointer-events-none z-10"
      />

      <motion.img
        src={project.image}
        alt={project.title}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-all duration-700"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent" />

      {/* Animated border glow on hover */}
      <motion.div
        className="absolute inset-0 rounded-3xl pointer-events-none"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        style={{
          boxShadow: "inset 0 0 0 2px rgba(255,255,255,0.2), 0 0 0 2px rgba(255,255,255,0.1)"
        }}
      />

      <div className="absolute bottom-0 p-6 sm:p-8 lg:p-10 w-full z-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="flex gap-3 mb-4"
        >
          <motion.span
            whileHover={{ scale: 1.05, x: 2 }}
            transition={{ type: "spring", stiffness: 400 }}
            className={`px-3 py-1 rounded-md bg-${project.color}/10 text-${project.color} text-[9px] font-headline uppercase tracking-widest border border-${project.color}/20 backdrop-blur-sm`}
          >
            {project.category}
          </motion.span>
          <motion.span
            whileHover={{ scale: 1.05 }}
            className="px-3 py-1 rounded-md bg-white/5 text-on-surface-variant text-[9px] font-headline uppercase tracking-widest border border-white/10 backdrop-blur-sm"
          >
            {project.year}
          </motion.span>
        </motion.div>

        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          className="font-headline text-2xl sm:text-3xl font-bold mb-2 group-hover:text-primary transition-colors duration-300"
        >
          {project.title.split(' ').map((word, i) => (
            <motion.span
              key={i}
              className="inline-block"
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {word}{' '}
            </motion.span>
          ))}
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
          className="text-on-surface-variant text-sm max-w-sm leading-relaxed"
        >
          {project.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
          className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0"
        >
          <motion.div
            className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-primary hover:bg-primary hover:text-surface transition-colors cursor-pointer relative overflow-hidden"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Ripple effect on hover */}
            <motion.div
              className="absolute inset-0 bg-primary"
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 2, opacity: 0.2 }}
              transition={{ duration: 0.4 }}
            />
            <ArrowUpRight className="w-5 h-5 relative z-10" />
          </motion.div>
        </motion.div>
      </div>

      {/* Animated corner accents */}
      <motion.div
        className="absolute top-4 right-4 w-12 h-12 pointer-events-none z-10"
        initial={{ opacity: 0, rotate: -90 }}
        whileHover={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="absolute top-0 right-0 w-8 h-px bg-gradient-to-l from-white/50 to-transparent" />
        <div className="absolute top-0 right-0 w-px h-8 bg-gradient-to-b from-white/50 to-transparent" />
      </motion.div>

      <motion.div
        className="absolute bottom-4 left-4 w-12 h-12 pointer-events-none z-10"
        initial={{ opacity: 0, rotate: 90 }}
        whileHover={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="absolute bottom-0 left-0 w-8 h-px bg-gradient-to-r from-white/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-px h-8 bg-gradient-to-t from-white/50 to-transparent" />
      </motion.div>

      {/* Animated shimmer effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl"
        initial={{ x: '-100%' }}
        whileHover={{ x: '100%' }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />
      </motion.div>
    </motion.div>
  );
}