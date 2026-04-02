import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Sparkles, ChevronDown, Github, Linkedin, Twitter } from 'lucide-react';
import { heroRevealItem, heroStaggerContainer } from '../animations';
import { useEffect, useRef, useState } from 'react';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-[#030014] via-[#0a0a1a] to-[#010105]"
      style={{ opacity }}
    >
      {/* Animated gradient background that follows mouse */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,238,252,0.15) 0%, rgba(255,89,227,0.08) 50%, rgba(0,0,0,0) 80%)`
        }}
        transition={{ type: "tween", duration: 0.2 }}
      />

      {/* Animated grid lines */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(0,238,252,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(0,238,252,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#00eefc]/30 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, -100, -200],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear"
            }}
            style={{
              left: Math.random() * 100 + "%",
            }}
          />
        ))}
      </div>

      {/* Animated glowing orbs */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-[#00eefc]/5 blur-[120px] pointer-events-none"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        style={{ y: backgroundY }}
        className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-[#ff59e3]/5 blur-[120px] pointer-events-none"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

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
            {/* Animated status badge */}
            <motion.div
              variants={heroRevealItem}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00eefc]/30 bg-[#00eefc]/5 mb-10 backdrop-blur-sm relative overflow-hidden group cursor-pointer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.span
                className="w-2 h-2 rounded-full bg-[#00eefc] shadow-[0_0_8px_#00eefc]"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <span className="font-headline text-[11px] tracking-[0.1em] uppercase text-[#00eefc] font-bold relative z-10">
                AVAILABLE FOR NEW PROJECTS
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#00eefc]/0 via-[#00eefc]/10 to-[#00eefc]/0"
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>

            {/* Role badge with sparkle */}
            <motion.div
              variants={heroRevealItem}
              className="flex items-center justify-center lg:justify-start gap-2 mb-6"
            >
              <Sparkles className="w-4 h-4 text-[#00eefc]" />
              <h3 className="font-headline text-[#00eefc] uppercase tracking-[0.3em] font-bold text-sm md:text-base lg:text-lg">
                CREATIVE DESIGNER & WEB DEVELOPER
              </h3>
              <Sparkles className="w-4 h-4 text-[#00eefc]" />
            </motion.div>

            {/* Animated name with 3D tilt effect */}
            <motion.h1
              variants={heroRevealItem}
              className="font-headline text-6xl md:text-[7rem] lg:text-[8rem] font-bold tracking-tight leading-[0.85] mb-10 text-white drop-shadow-2xl relative z-10"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Ebenezer{' '}
              <motion.span
                className="relative inline-block bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #9201ac 0%, #ff26f1 50%, #00eefc 100%)',
                  backgroundSize: '200% auto',
                }}
                animate={{
                  backgroundPosition: ['0% 0%', '100% 0%', '0% 0%'],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                Chala
                <motion.span
                  className="absolute -inset-1 bg-gradient-to-r from-[#9201ac] to-[#00eefc] blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"
                  animate={{ opacity: [0, 0.3, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <span className="text-[hsla(291,98%,22%,1)]">.</span>
              </motion.span>
            </motion.h1>

            {/* Animated description with typewriter effect */}
            <motion.p
              variants={heroRevealItem}
              className="font-headline font-medium text-lg md:text-xl lg:text-xl text-[#a0a3b1] max-w-[90%] lg:max-w-[65rem] xl:max-w-[70rem] mb-12 leading-[1.6] mx-auto lg:mx-0 relative"
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                Creative Designer + UX/UI designer who loves turning ideas into simple, intuitive digital experiences.
                With a background in design and Web Development, I build products that not only look good but actually work.
              </motion.span>
              <motion.div
                className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-[#00eefc] to-transparent"
                initial={{ width: 0 }}
                whileInView={{ width: "100px" }}
                transition={{ delay: 1, duration: 0.8 }}
                viewport={{ once: true }}
              />
            </motion.p>

            {/* Buttons with enhanced animations */}
            <motion.div variants={heroRevealItem} className="flex flex-wrap justify-center lg:justify-start gap-6">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative group"
              >
                <motion.button
                  className="px-10 py-5 rounded-full bg-gradient-to-r from-[#00eefc] to-[#00a6b3] text-[#052b2e] font-headline font-bold uppercase tracking-widest text-xs flex items-center gap-3 transition-all shadow-[0_0_30px_rgba(0,238,252,0.3)] relative overflow-hidden"
                  whileHover={{ boxShadow: "0 0 40px rgba(0,238,252,0.5)" }}
                >
                  <span className="relative z-10">VIEW MY WORK</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <ArrowRight className="w-5 h-5 relative z-10" />
                  </motion.div>
                  <motion.div
                    className="absolute inset-0 bg-white"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.4 }}
                  />
                </motion.button>
              </motion.a>

              <motion.a
                href="#skills"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative group"
              >
                <motion.button
                  className="px-10 py-5 rounded-full border border-white/20 text-white hover:bg-white/5 font-headline font-bold uppercase tracking-widest text-xs transition-all relative overflow-hidden"
                  whileHover={{ borderColor: "rgba(0,238,252,0.5)", boxShadow: "0 0 20px rgba(0,238,252,0.2)" }}
                >
                  <span className="relative z-10">Services</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#00eefc]/0 via-[#00eefc]/10 to-[#00eefc]/0"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.button>
              </motion.a>
            </motion.div>

            {/* Social links with animations */}
            <motion.div
              variants={heroRevealItem}
              className="flex justify-center lg:justify-start gap-4 mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              {[
                { icon: Github, href: "#", label: "GitHub" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Twitter, href: "#", label: "Twitter" },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-[#00eefc]/50 transition-all"
                  whileHover={{ scale: 1.1, y: -2, borderColor: "#00eefc" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Image Container with 3D hover effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: 30 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="relative lg:absolute lg:right-[10%] lg:top-[-15%] w-full lg:w-[700px] flex justify-center lg:justify-end items-center mt-12 lg:mt-0"
            whileHover={{ scale: 1.02 }}
            style={{ perspective: "1000px" }}
          >
            <motion.div
              className="relative w-[250px] h-[250px] md:w-[300px] md:h-[300px] lg:w-[450px] lg:h-[450px]"
              whileHover={{ rotateY: 5, rotateX: 5 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              {/* Animated rotating ring */}
              <motion.div
                className="absolute inset-0 rounded-full border border-[#00eefc]/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute top-0 left-1/2 w-3 h-3 bg-[#00eefc] rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_#00eefc]" />
              </motion.div>

              <motion.div
                className="absolute inset-0 rounded-full border border-[#ff59e3]/30"
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-[#ff59e3] rounded-full -translate-x-1/2 translate-y-1/2 shadow-[0_0_8px_#ff59e3]" />
              </motion.div>

              {/* Image with glow effect */}
              <motion.div
                className="relative w-full h-full rounded-full overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src="/hero.png"
                  alt="Ebenezer Chala"
                  className="w-full h-full object-contain relative z-20"
                  referrerPolicy="no-referrer"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-tr from-[#00eefc]/20 via-transparent to-[#ff59e3]/20 rounded-full"
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </motion.div>

              {/* Pulsing glow */}
              <motion.div
                className="absolute inset-0 rounded-full bg-[#00eefc]/10 blur-3xl -z-10"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 0.6, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <span className="text-xs tracking-wider text-white/40 font-mono">SCROLL</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-4 h-4 text-white/40" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}