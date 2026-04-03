import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../animations';

interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar?: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: "Working with this designer was an absolute pleasure. Their attention to detail and creative vision brought our brand to life in ways we never imagined.",
    name: "Abel Mengistu",
    role: "Marketing Director",
    company: "TechCorp"
  },
  {
    id: '2',
    quote: "The web application they built exceeded our expectations. It's not just functional, it's beautiful and user-friendly.",
    name: "Exodus Tola",
    role: "Product Manager",
    company: "StartupXYZ"
  },
  {
    id: '3',
    quote: "Their design work helped us increase our conversion rates by 40%. Highly recommend their services!",
    name: "Emma Rodriguez",
    role: "CEO",
    company: "E-commerce Plus"
  }
];

export default function Testimonials() {
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
          className="font-headline text-3xl md:text-4xl font-bold tracking-tighter text-white mb-12 text-center"
        >
          WHAT CLIENTS SAY
        </motion.h2>

        {/* Testimonials Grid */}
        <motion.div
          variants={fadeInUp}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={fadeInUp}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
            >
              <div className="mb-4">
                <div className="flex text-primary mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-white/80 text-sm leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                  <span className="text-primary font-bold text-sm">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="text-white font-medium text-sm">
                    {testimonial.name}
                  </div>
                  <div className="text-white/60 text-xs">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
