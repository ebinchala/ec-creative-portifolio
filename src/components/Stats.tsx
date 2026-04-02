import { motion } from 'motion/react';

export default function Stats() {
  const stats = [
    { value: '03+', label: 'Years Exp' },
    { value: '20+', label: 'Projects' },
    { value: '10+', label: 'Core Skills' },
    { value: '24/7', label: 'Uptime' }
  ];

  return (
    <section className="max-w-7xl mx-auto px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-4 gap-8 p-12 rounded-3xl bg-white/5 border border-white/10"
      >
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center"
          >
            <div className="font-headline text-4xl md:text-5xl font-bold text-white mb-2">
              {stat.value}
            </div>
            <div className="text-white/40 text-[10px] uppercase tracking-widest font-headline">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}