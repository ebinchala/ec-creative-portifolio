import React from 'react';
import { motion } from 'motion/react';
import { fadeInUp, staggerContainer } from '../animations';
import { SKILLS } from '../data/skills';

export default function Skills() {
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
        {SKILLS.map((skill) => (
          <motion.div
            key={skill.name}
            variants={fadeInUp}
            whileHover={{
              y: -10,
              borderColor: 'rgba(143, 245, 255, 0.4)',
              boxShadow: '0 10px 30px rgba(143, 245, 255, 0.1)'
            }}
            className="glass-panel p-8 rounded-2xl flex flex-col items-center justify-center text-center group transition-all duration-500"
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.8 }}
              className={`w-14 h-14 mb-4 rounded-full bg-${skill.color}/10 flex items-center justify-center text-${skill.color} group-hover:bg-${skill.color} group-hover:text-surface transition-all duration-300`}
            >
              {React.cloneElement(skill.icon as React.ReactElement, { className: 'w-6 h-6' })}
            </motion.div>
            <span className="font-headline font-bold text-[10px] tracking-widest uppercase text-on-surface-variant group-hover:text-on-surface transition-colors">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

