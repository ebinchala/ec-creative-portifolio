import React, { useRef, useEffect } from 'react';
import { motion, useMotionValue, animate } from 'framer-motion';

const Ticker = () => {
  const items = [
    "Website Development",
    "A/B Testing",
    "UX Research",
    "Product Design",
    "Interaction Design",
    "UX/UI",
    "Branding",
    "Social Design",
    "EDM Design",
    "Print Design",
    "Visual Design"
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = React.useState(false);
  const [contentWidth, setContentWidth] = React.useState(0);
  const x = useMotionValue(0);

  useEffect(() => {
    // Calculate total width of the ticker content
    if (tickerRef.current) {
      const width = tickerRef.current.scrollWidth / 3; // Since we have 3 copies
      setContentWidth(width);
    }
  }, []);

  useEffect(() => {
    if (contentWidth === 0) return;

    const controls = animate(x, -contentWidth, {
      duration: 30,
      repeat: Infinity,
      ease: "linear",
      repeatType: "loop",
      repeatDelay: 0
    });

    if (isHovered) {
      controls.stop();
    } else {
      controls.play();
    }

    return () => controls.stop();
  }, [x, isHovered, contentWidth]);

  const tickerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden flex items-center z-20 group"
      style={{
        backgroundColor: 'rgba(10, 10, 15, 0.8)',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        padding: '28px 0',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated gradient overlays */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0a0a0f] to-transparent pointer-events-none z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0a0a0f] to-transparent pointer-events-none z-10" />

      {/* Animated background glow */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: [
            'radial-gradient(circle at 0% 50%, rgba(0,238,252,0.03) 0%, transparent 50%)',
            'radial-gradient(circle at 100% 50%, rgba(255,89,227,0.03) 0%, transparent 50%)',
            'radial-gradient(circle at 0% 50%, rgba(0,238,252,0.03) 0%, transparent 50%)',
          ]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        ref={tickerRef}
        style={{ x }}
        className="flex items-center gap-0"
      >
        {/* Render the items array 3 times for seamless loop */}
        {[...Array(3)].map((_, arrayIndex) => (
          <div key={arrayIndex} className="flex items-center">
            {items.map((item, index) => (
              <React.Fragment key={`${arrayIndex}-${index}`}>
                <motion.span
                  className="relative group/item cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  style={{
                    color: '#B0B0B0',
                    fontSize: '13px',
                    fontWeight: 500,
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    whiteSpace: 'nowrap',
                    transition: 'color 0.3s ease'
                  }}
                >
                  {/* Hover glow effect */}
                  <motion.span
                    className="absolute inset-0 blur-md opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"
                    style={{
                      background: 'linear-gradient(90deg, #00eefc, #ff59e3)',
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                    }}
                  >
                    {item}
                  </motion.span>

                  {/* Main text with gradient on hover */}
                  <motion.span
                    className="relative z-10 inline-block"
                    whileHover={{
                      background: 'linear-gradient(135deg, #00eefc, #ff59e3)',
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      color: 'transparent',
                    }}
                  >
                    {item}
                  </motion.span>

                  {/* Animated underline on hover */}
                  <motion.span
                    className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-[#00eefc] to-[#ff59e3]"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{ originX: 0 }}
                  />
                </motion.span>

                {/* Enhanced dot separator */}
                <motion.div
                  className="mx-[28px] flex-shrink-0"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.2 }}
                >
                  <motion.div
                    className="w-1.5 h-1.5 rounded-full"
                    style={{
                      background: 'linear-gradient(135deg, #00eefc, #ff59e3)',
                    }}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.4, 0.8, 0.4],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.1,
                    }}
                  />
                </motion.div>
              </React.Fragment>
            ))}
          </div>
        ))}
      </motion.div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-0.5 rounded-full bg-[#00eefc]/30"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * 100,
            }}
            animate={{
              y: [null, -50, -100],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: Math.random() * 100 + "%",
            }}
          />
        ))}
      </div>

      {/* Interactive shine effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 0.3 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
          animate={{
            x: ['-100%', '100%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </motion.div>
    </div>
  );
};

export default Ticker;