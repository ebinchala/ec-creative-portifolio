import { motion, AnimatePresence } from 'motion/react';
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

const SERVICES = [
  {
    id: "01",
    title: "Product & UX",
    description: "For teams building digital products, from early discovery through to a polished, validated experience.",
    items: [
      "End-to-End Product Design",
      "User Research & Usability Testing",
      "Prototyping & Interaction Design",
      "Design Systems & Component Libraries",
      "UX Audits & Redesigns"
    ],
  },
  {
    id: "02",
    title: "Brand & Identity",
    description: "For businesses that need a clear, ownable visual identity, built to scale across every touchpoint.",
    items: [
      "Logo & Visual Identity",
      "Brand Strategy & Positioning",
      "Brand Guidelines & Style Guides",
      "Art Direction",
      "Motion & Animation"
    ],
  },
  {
    id: "03",
    title: "Creative & Campaign",
    description: "For brands that need high-quality creative output, from awareness campaigns to always-on content.",
    items: [
      "Campaign Concept & Design",
      "Web & Landing Page Design",
      "Social Media & EDM Templates",
      "Digital Advertising Assets",
      "Print & Out-of-Home"
    ],
  },
  {
    id: "04",
    title: "Website Development",
    description: "For businesses ready to transform designs into high-performance digital platforms with robust architecture and seamless user interactions.",
    items: [
      "Front-End & Back-End Coding",
      "CMS Setup & Custom Integration",
      "E-commerce & Payment Gateway Implementation",
      "Performance & Speed Optimization",
      "SEO-Ready Technical Structure"
    ],
  }
];

export default function Services() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => {
    if (currentIndex < SERVICES.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevCard = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const currentService = SERVICES[currentIndex];

  return (
    <section id="services" className="relative py-20 text-white  min-h-screen overflow-hidden">
      {/* Subtle background glow - no animation for performance */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header with premium styling */}
        <div className="mb-24 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="font-headline uppercase tracking-[3px] text-[11px] text-primary/80 font-semibold">
              What I do
            </span>
          </div>
          <h2 className="font-headline text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">
            Services
          </h2>
          <div className="w-20 h-px bg-gradient-to-r from-primary to-transparent mt-6 hidden md:block" />
        </div>

        {/* Current Card with premium transitions */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
              className="group"
            >
              <div className="glass-panel p-8 md:p-12 lg:p-16 rounded-[2rem] lg:rounded-[2.5rem] 
                            backdrop-blur-xl 
                            border border-white/[0.08] 
                            shadow-[0_20px_40px_-12px_rgba(0,0,0,0.5)]
                            hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)]
                            transition-shadow duration-500
                            flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">

                {/* Left Column */}
                <div className="lg:w-5/12 flex-shrink-0">
                  {/* Animated number on hover */}
                  <div className="relative inline-block">
                    <div
                      className="text-[6rem] md:text-[8rem] lg:text-[10rem] leading-[0.85] font-bold text-transparent transition-all duration-300 group-hover:scale-105 origin-left"
                      style={{
                        WebkitTextStroke: '1.5px rgba(255,255,255,0.12)',
                      }}
                    >
                      {currentService.id}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-full blur-2xl" />
                  </div>

                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-8 leading-tight">
                    {currentService.title}
                  </h3>

                  <p className="text-[#a0a3b1] mt-8 text-[15px] leading-relaxed max-w-md">
                    {currentService.description}
                  </p>
                </div>

                {/* Right Column */}
                <div className="lg:w-7/12 w-full pt-4 lg:pt-0">
                  <ul className="border-t border-white/10 divide-y divide-white/10">
                    {currentService.items.map((item, i) => (
                      <li
                        key={i}
                        className="flex justify-between items-center py-4 lg:py-5 group/item hover:bg-white/[0.02] px-3 -mx-3 rounded-xl transition-all duration-200 cursor-pointer"
                      >
                        <div className="flex items-center gap-3 lg:gap-4">
                          <span className="w-1 h-1 rounded-full bg-white/20 group-hover/item:bg-primary transition-all duration-300" />
                          <span className="text-[#c1c4d6] group-hover/item:text-white transition-colors text-[14px] lg:text-[15px]">
                            {item}
                          </span>
                        </div>
                        <span className="text-[10px] lg:text-xs tracking-[2px] text-white/20 group-hover/item:text-white/60 transition-all duration-300 font-mono">
                          0{i + 1}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Premium Navigation */}
          <div className="flex justify-center items-center gap-4 lg:gap-6 mt-12">
            {/* Previous Button */}
            <motion.button
              onClick={prevCard}
              disabled={currentIndex === 0}
              whileHover={currentIndex !== 0 ? { scale: 1.05, x: -2 } : {}}
              whileTap={currentIndex !== 0 ? { scale: 0.95 } : {}}
              transition={{ duration: 0.2 }}
              className={`relative w-12 h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center transition-all duration-300 ${currentIndex === 0
                ? 'border border-white/5 text-white/20 cursor-not-allowed'
                : 'border border-white/15 text-white/70 hover:border-primary/50 hover:text-primary hover:bg-primary/5 cursor-pointer'
                }`}
            >
              <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6" />
            </motion.button>

            {/* Premium Progress Dots */}
            <div className="flex gap-2 lg:gap-3 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
              {SERVICES.map((_, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`relative transition-all duration-300 rounded-full ${idx === currentIndex
                    ? 'w-6 lg:w-8 h-1.5 bg-gradient-to-r from-primary to-secondary'
                    : 'w-2 h-1.5 bg-white/20 hover:bg-white/40'
                    }`}
                />
              ))}
            </div>

            {/* Next Button */}
            <motion.button
              onClick={nextCard}
              disabled={currentIndex === SERVICES.length - 1}
              whileHover={currentIndex !== SERVICES.length - 1 ? { scale: 1.05, x: 2 } : {}}
              whileTap={currentIndex !== SERVICES.length - 1 ? { scale: 0.95 } : {}}
              transition={{ duration: 0.2 }}
              className={`relative w-12 h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center transition-all duration-300 ${currentIndex === SERVICES.length - 1
                ? 'border border-white/5 text-white/20 cursor-not-allowed'
                : 'border border-white/15 text-white/70 hover:border-primary/50 hover:text-primary hover:bg-primary/5 cursor-pointer'
                }`}
            >
              <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6" />
            </motion.button>
          </div>

          {/* Card Counter - Premium */}
          <div className="text-center mt-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
              <span className="text-xs text-white/40 font-mono tracking-wider">
                CARD
              </span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span className="text-sm text-white/60 font-mono font-medium">
                {String(currentIndex + 1).padStart(2, '0')}
              </span>
              <span className="text-xs text-white/30 font-mono">
                / {String(SERVICES.length).padStart(2, '0')}
              </span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .glass-panel {
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }
      `}</style>
    </section>
  );
}