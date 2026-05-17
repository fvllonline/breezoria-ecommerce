'use client';

import { motion } from 'framer-motion';

export default function AboutSection() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true },
  };

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          {...fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">About Breezoria</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We believe that sun protection should never compromise on luxury or comfort.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: 'Premium Positioning',
              description: 'Crafted with the finest ingredients and cutting-edge formulation technology.',
            },
            {
              title: 'Summer Lifestyle',
              description: 'Designed for those who embrace the sun while protecting their skin.',
            },
            {
              title: 'Effortless Beauty',
              description: 'Sunscreen that acts like a primer, enhancing your natural beauty.',
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              {...fadeInUp}
              transition={{ delay: index * 0.1 }}
              className="bg-card p-8 rounded-xl border border-border hover:border-primary/50 transition-colors"
            >
              <div className="text-3xl mb-4">✨</div>
              <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          {...fadeInUp}
          className="bg-gradient-to-r from-secondary/20 to-primary/10 p-12 rounded-2xl border border-secondary/30"
        >
          <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
          <p className="text-lg text-foreground leading-relaxed">
            Breezoria is dedicated to combining sun protection with luxury skincare. We believe that your daily sunscreen should be an indulgence, not a compromise. Our invisible matte finish technology allows you to enjoy premium protection without white cast, greasiness, or any sacrifice to your skin&apos;s natural beauty.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
