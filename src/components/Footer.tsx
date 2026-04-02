import { motion } from 'motion/react';

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/5 bg-slate-950/40 backdrop-blur-md py-12">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex flex-col items-center md:items-start mb-8 md:mb-0"
        >
          <div className="text-xl font-bold text-primary font-headline mb-2">CELESTIAL</div>
          <p className="font-body text-[10px] tracking-normal text-slate-500 uppercase">
            © 2024 CELESTIAL INTERFACE. ALL RIGHTS RESERVED.
          </p>
        </motion.div>
        <div className="flex gap-8">
          {['Twitter', 'LinkedIn', 'GitHub'].map((social, i) => (
            <motion.a
              key={social}
              href="#"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ color: 'var(--color-primary)', y: -2 }}
              className="font-body text-[10px] tracking-widest uppercase text-slate-500 transition-all"
            >
              {social}
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
}

