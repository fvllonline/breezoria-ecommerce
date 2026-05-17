'use client';

import { motion } from 'framer-motion';

const benefits = [
  { icon: '☀️', title: 'SPF 50 PA+++', description: 'Maximum UV protection against UVA and UVB rays' },
  { icon: '✨', title: 'Matte Finish', description: 'Lightweight formula that blurs imperfections like a primer' },
  { icon: '🌫️', title: 'No White Cast', description: 'Clear gel texture for invisible, seamless coverage' },
  { icon: '💄', title: 'Makeup-Friendly', description: 'Perfect base for makeup, controls excess sebum' },
  { icon: '🧴', title: 'Non-Comedogenic', description: 'Gentle on all skin types, won\'t clog pores' },
  { icon: '🌿', title: 'Gentle Formula', description: 'Clinically tested, dermatologist-approved ingredients' },
];

export default function BenefitsSection() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          {...fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Why Choose Breezoria</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the difference of luxury sun protection
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-card p-8 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-foreground mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
