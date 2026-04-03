import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../animations';
import { PROJECTS } from '../data/projects';
import type { ProjectService, ProjectItem } from '../types';

export default function Projects() {
  const [activeService, setActiveService] = useState<ProjectService>(PROJECTS[0]);
  const [activeProject, setActiveProject] = useState<ProjectItem>(
    PROJECTS[0].projects[0]
  );

  return (
    <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        {/* Header */}
        <motion.h2
          variants={fadeInUp}
          className="font-headline text-3xl md:text-4xl font-bold tracking-tighter text-white mb-10"
        >
          RECENT SELECTED WORKS
        </motion.h2>

        {/* Service Tabs (01–04) */}
        <motion.div
          variants={fadeInUp}
          className="flex gap-3 mb-6 flex-wrap"
        >
          {PROJECTS.map((service) => (
            <button
              key={service.id}
              onClick={() => {
                setActiveService(service);
                setActiveProject(service.projects[0]);
              }}
              className={`px-4 py-2 text-xs font-headline tracking-[2px] rounded-full border transition-all
                ${
                  activeService.id === service.id
                    ? 'bg-white text-black border-white'
                    : 'text-white/60 border-white/20 hover:border-white/40 hover:text-white'
                }`}
            >
              {service.index}
            </button>
          ))}
        </motion.div>

        {/* Main Layout */}
        <motion.div
          variants={fadeInUp}
          className="grid grid-cols-1 lg:grid-cols-12 rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
          style={{ minHeight: '420px' }}
        >
          {/* LEFT PANEL */}
          <div className="lg:col-span-5 bg-white/5 backdrop-blur-md p-6 lg:p-8 flex flex-col border-r border-white/10">
            {/* Index */}
            <div className="text-[10px] tracking-[3px] text-white/50 mb-2">
              {activeService.index} — {activeService.label}
            </div>

            {/* Title */}
            <div className="font-headline text-2xl md:text-3xl font-bold text-white mb-3 leading-[1.1]">
              {activeService.title}
            </div>

            {/* Date + Role */}
            <div className="mb-4">
              <div className="text-xs text-white/50">
                {activeService.year}
              </div>
              <div className="text-[10px] uppercase tracking-[2px] text-primary mt-1">
                {activeService.role}
              </div>
            </div>

            {/* Description */}
            <p className="text-white/50 text-xs mb-6 leading-relaxed">
              {activeService.description}
            </p>

            {/* Projects */}
            <div className="space-y-2 mb-6 flex-1">
              {activeService.projects.map((project, i) => {
                const isActive = project.name === activeProject.name;

                return (
                  <div
                    key={i}
                    onClick={() => setActiveProject(project)}
                    className={`group flex items-center justify-between rounded-xl px-4 py-3 transition-all duration-300 cursor-pointer
                      ${
                        isActive
                          ? 'bg-white/10 border border-white/20'
                          : 'hover:bg-white/10 border border-transparent hover:border-white/15'
                      }`}
                  >
                    <div className="flex items-center gap-3">
                      {isActive && (
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                      )}
                      <div>
                        <div
                          className={`text-xs font-medium ${
                            isActive ? 'text-white' : 'text-white/70'
                          }`}
                        >
                          {project.name}
                        </div>
                        <div className="text-[9px] text-white/40">
                          {project.focus}
                        </div>
                      </div>
                    </div>

                    {isActive ? (
                      <div className="w-6 h-6 flex items-center justify-center text-[9px] border border-white/30 rounded-full">
                        ✕
                      </div>
                    ) : (
                      <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-primary" />
                    )}
                  </div>
                );
              })}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5">
              {activeService.tags.map((tag) => (
                <div
                  key={tag}
                  className="px-3 py-1 text-[9px] border border-white/15 rounded-full text-white/60 hover:text-white hover:border-white/30 transition"
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="lg:col-span-7 relative overflow-hidden flex items-end min-h-[400px] group">
            {/* Background */}
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff0f_1px,transparent_1px)] bg-[length:5px_5px]" />

            <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/80 z-10" />

            {/* Image */}
            <motion.img
              key={activeProject.name}
              src={activeService.featured.image}
              alt={activeProject.name}
              initial={{ scale: 1.05, opacity: 0.8 }}
              animate={{ scale: 1.1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Content */}
            <div className="relative z-20 p-6 lg:p-8">
              <div className="text-[9px] tracking-[3px] text-white/60 mb-2">
                FEATURED PROJECT
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                {activeService.featured.title}
              </h3>

              <div className="border-t border-white/20 pt-3">
                <div className="text-[8px] text-white/50 mb-1">
                  DELIVERABLES
                </div>
                <div className="text-white/70 text-[10px]">
                  {activeService.featured.deliverables.join(', ')}
                </div>
              </div>
            </div>

            {/* Arrow */}
            <motion.div
              whileHover={{ scale: 1.1, rotate: 45 }}
              className="absolute bottom-6 right-6 w-10 h-10 border border-white/20 rounded-xl flex items-center justify-center bg-black/60 backdrop-blur-md cursor-pointer"
            >
              <ArrowUpRight className="w-4 h-4 text-white" />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}