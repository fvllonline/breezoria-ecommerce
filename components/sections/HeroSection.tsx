'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-background via-secondary/10 to-background pt-20">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 bg-secondary/30 rounded-full border border-secondary/50 mb-6"
            >
              <span className="text-sm font-semibold text-foreground">✨ Premium Sun Protection</span>
            </motion.div> */}

            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance leading-tight">
              Glow safe with Breezoria✨
            </h1>

            <p className="text-lg text-muted-foreground mb-8 max-w-lg text-balance">
              Breezoria combines premium sun protection with a luxurious matte finish. Protect your skin without compromise.
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/product"
                className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity text-center"
              >
                Shop Now
              </Link>
              <a
                href="#about"
                className="px-8 py-4 border-2 border-foreground text-foreground rounded-lg font-semibold hover:bg-foreground/5 transition-colors text-center"
              >
                Learn More
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-96 lg:h-full min-h-96"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/40 to-primary/20 rounded-2xl" />
            <Image
              src="/images/hero-suncare.jpg"
              alt="Premium suncare product"
              fill
              className="object-cover rounded-2xl"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
