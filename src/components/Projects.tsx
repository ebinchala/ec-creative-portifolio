import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../animations';

export default function Projects() {
  return (
    <section id="projects" className="py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        {/* Header */}
        <motion.h2
          variants={fadeInUp}
          className="font-headline text-5xl md:text-6xl font-bold tracking-tighter text-white mb-16"
        >
          RECENT SELECTED WORKS
        </motion.h2>

        {/* Main Split Layout */}
        <motion.div
          variants={fadeInUp}
          className="grid grid-cols-1 lg:grid-cols-12 gap-0 rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative"
          style={{ minHeight: '700px' }}
        >
          {/* LEFT PANEL - Glassmorphism */}
          <div className="lg:col-span-5 bg-white/5 backdrop-blur-md p-10 lg:p-12 flex flex-col border-r border-white/10 relative z-10">
            {/* Core Services */}
            <div className="text-[11px] font-headline tracking-[3px] text-white/50 mb-3">
              01 — CORE SERVICES
            </div>

            {/* Brand Identity Title */}
            <div className="font-headline text-[44px] leading-[1.02] font-bold tracking-[-2px] text-white mb-6">
              BRAND<br />IDENTITY
            </div>

            {/* Date + Role */}
            <div className="mb-10">
              <div className="text-sm text-white/50 tracking-wide">JAN 2024 — OCT 2025</div>
              <div className="text-sm uppercase tracking-[2px] text-primary font-medium mt-1">IDENTITY LEAD</div>
            </div>

            {/* Description */}
            <p className="text-white/50 text-[15.2px] leading-relaxed mb-12 max-w-md">
              Developing cohesive visual systems and strategic foundations that empower brands to communicate their unique value through impactful design and storytelling.
            </p>

            {/* Project List */}
            <div className="space-y-4 mb-12 flex-1">
              {/* Snapwre - Active */}
              <div className="group flex items-center justify-between bg-white/10 hover:bg-white/15 border border-white/15 hover:border-primary/40 transition-all duration-300 rounded-2xl px-6 py-5">
                <div className="flex items-center gap-4">
                  <div className="w-2.5 h-2.5 bg-primary rounded-full ring-1 ring-primary/30"></div>
                  <div>
                    <div className="font-medium text-white text-[15px]">SNAPWRE DESIGN</div>
                    <div className="text-xs text-white/40 tracking-wide">LOGO DESIGN, STRATEGY</div>
                  </div>
                </div>
                <div className="w-7 h-7 rounded-full border border-white/30 flex items-center justify-center text-xs group-hover:bg-primary group-hover:text-black group-hover:border-primary transition-all">
                  ✕
                </div>
              </div>

              {/* Other Projects */}
              <div className="group flex items-center justify-between hover:bg-white/10 border border-transparent hover:border-white/15 transition-all duration-300 rounded-2xl px-6 py-5 cursor-pointer">
                <div>
                  <div className="font-medium text-white/80 text-[15px] group-hover:text-white">ILILI RIBBONS</div>
                  <div className="text-xs text-white/40 tracking-wide">IDENTITY SYSTEMS, ART DIRECTION</div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-white/40 group-hover:text-primary transition-colors" />
              </div>

              <div className="group flex items-center justify-between hover:bg-white/10 border border-transparent hover:border-white/15 transition-all duration-300 rounded-2xl px-6 py-5 cursor-pointer">
                <div>
                  <div className="font-medium text-white/80 text-[15px] group-hover:text-white">SUNRISE COFFEE SHOP</div>
                  <div className="text-xs text-white/40 tracking-wide">MINIMALIST, CORPORATE, TECH</div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-white/40 group-hover:text-primary transition-colors" />
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {['BRAND STRATEGY', 'LOGO DESIGN', 'VISUAL LANGUAGE', 'IDENTITY SYSTEMS'].map((tag) => (
                <div
                  key={tag}
                  className="px-5 py-2 text-[10px] font-headline tracking-[1.5px] border border-white/15 hover:border-white/30 bg-white/5 hover:bg-white/15 rounded-full text-white/60 hover:text-white transition-all cursor-pointer"
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="lg:col-span-7 relative bg-black/30 backdrop-blur-sm overflow-hidden flex items-center justify-center min-h-[700px] group">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff0f_1px,transparent_1px)] bg-[length:5px_5px]"></div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80 z-10"></div>

            {/* Image */}
            <img
              src="/snapwre.jpg"
              alt="Snapwre Logo Design Visual"
              className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
            />

            {/* Content Overlay */}
            <div className="relative z-20 w-full h-full flex flex-col justify-end p-8 lg:p-10 text-left">
              <div className="uppercase tracking-[4px] text-[10px] text-white/60 mb-3 font-medium">
                FEATURED PROJECT
              </div>

              <h3 className="font-headline text-4xl md:text-5xl leading-[1.1] font-bold tracking-[-2px] text-white mb-2">
                SNAPWRE LOGO DESIGN
              </h3>

              <div className="mb-6">
                <div className="text-[48px] md:text-[56px] font-light tracking-[-3px] text-white/20 leading-none">
                  AETHER OS
                </div>
              </div>

              <div className="border-t border-white/15 pt-4 text-left">
                <div className="text-[9px] tracking-[2px] text-white/50 mb-1 font-mono">
                  DELIVERABLES
                </div>
                <div className="text-white/80 text-xs leading-relaxed font-medium">
                  BRAND ARCHITECTURE, VISUAL IDENTITY
                </div>
              </div>
            </div>

            {/* Arrow Button */}
            <motion.div
              whileHover={{ scale: 1.1, rotate: 45 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="absolute bottom-8 right-8 w-12 h-12 rounded-xl border border-white/20 bg-black/60 backdrop-blur-md flex items-center justify-center cursor-pointer hover:border-primary hover:bg-primary/10 z-30 transition-all"
            >
              <ArrowUpRight className="w-5 h-5 text-white" />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}