import React from 'react';
import { motion } from 'motion/react';
import {
  ChevronDown,
  CheckCircle2,
  Send,
  Mail,
  MapPin,
  Phone,
  Globe,
  Github,
  Linkedin,
  Twitter
} from 'lucide-react';

export default function Contact() {
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
              { label: 'Email', value: 'ebi2012ch@gmail.com', icon: <Mail />, color: 'primary' },
              { label: 'Station', value: 'Addis Ababa, Ethiopia', icon: <MapPin />, color: 'secondary' },
              { label: 'Phone', value: '+251-961883295', icon: <Phone />, color: 'primary' }
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center space-x-4 group cursor-pointer"
              >
                <div
                  className={`w-12 h-12 rounded-xl glass-panel flex items-center justify-center text-${item.color} transition-all group-hover:scale-110 group-hover:neon-glow-${item.color}`}
                >
                  {React.cloneElement(item.icon as React.ReactElement, { className: 'w-5 h-5' })}
                </div>
                <div>
                  <p className="text-[10px] font-headline uppercase tracking-widest text-on-surface-variant">{item.label}</p>
                  <p className="text-on-surface font-medium group-hover:text-primary transition-colors">{item.value}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex space-x-4 pt-8">
            {[
              {
                label: 'Github',
                href: 'https://github.com/ebinchala',
                Icon: Github
              },
              {
                label: 'Linkedin',
                href: 'https://www.linkedin.com/in/ebin-ezer-chala-448839372',
                Icon: Linkedin
              },
              {
                // lucide doesn't have a dedicated Behance icon; using Globe as a placeholder.
                label: 'Behance',
                href: 'https://www.behance.net/gallery/236974831/Portfolio-of-Ecreative-design/modules/1362817993',
                Icon: Globe
              },
              {
                label: 'Website',
                href: 'https://ecreative.design',
                Icon: Globe
              }
            ].map(({ label, href, Icon }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
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
                  <label className="block text-[10px] font-headline uppercase tracking-widest text-on-surface-variant ml-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-on-surface focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all placeholder:text-outline-variant"
                    placeholder="Commander Shepard"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-[10px] font-headline uppercase tracking-widest text-on-surface-variant ml-1">
                    Email Coordinates
                  </label>
                  <input
                    type="email"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-on-surface focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all placeholder:text-outline-variant"
                    placeholder="ebi2012ch@gmail.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-[10px] font-headline uppercase tracking-widest text-on-surface-variant ml-1">
                  Subject
                </label>
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
                <label className="block text-[10px] font-headline uppercase tracking-widest text-on-surface-variant ml-1">
                  Your Message
                </label>
                <textarea
                  rows={5}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-on-surface focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all placeholder:text-outline-variant resize-none"
                  placeholder="Transmission details..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02, boxShadow: '0 0 40px rgba(143, 245, 255, 0.5)' }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 rounded-full bg-gradient-to-r from-primary to-primary-dim text-on-primary font-headline font-bold uppercase tracking-[0.2em] shadow-[0_0_30px_rgba(143,245,255,0.3)] transition-all flex items-center justify-center gap-3 group"
              >
                Send Transmission
                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </motion.button>
            </form>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8 glass-panel p-6 rounded-2xl flex items-center justify-between border-primary/20 border-dashed"
            >
              <div className="flex items-center space-x-4">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span className="text-[10px] font-headline uppercase tracking-tight text-on-surface-variant">
                  Response time within 24 light-hours
                </span>
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
          </div>
        </motion.div>
      </div>
    </section>
  );
}

