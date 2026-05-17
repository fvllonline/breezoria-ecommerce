'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function ProductHighlightSection() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true },
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          {...fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Featured Product</h2>
          <p className="text-xl text-muted-foreground">
            Breezoria Invisible Matte Finish Sunscreen
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          <motion.div
            {...fadeInUp}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-secondary/40 to-primary/20 rounded-2xl blur-xl" />
            <div className="relative bg-card p-8 rounded-2xl border border-border">
              <div className="aspect-square bg-gradient-to-br from-secondary/30 to-primary/10 rounded-xl flex items-center justify-center relative overflow-hidden">
                <Image
                  src="/images/product-1.jpeg"
                  alt="Breezoria Sunscreen"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Invisible Matte Finish Sunscreen
            </h3>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <span className="text-primary text-xl mt-1">✨</span>
                <div>
                  <h4 className="font-semibold text-foreground">Invisible Protection</h4>
                  <p className="text-muted-foreground">No white cast, no residue, just pure protection.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary text-xl mt-1">✨</span>
                <div>
                  <h4 className="font-semibold text-foreground">Matte Finish</h4>
                  <p className="text-muted-foreground">Acts like a primer, blurs imperfections naturally.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary text-xl mt-1">✨</span>
                <div>
                  <h4 className="font-semibold text-foreground">Lightweight Formula</h4>
                  <p className="text-muted-foreground">Comfortable wear, makeup-friendly, all day protection.</p>
                </div>
              </div>
            </div>

            <div className="mb-8 p-4 bg-secondary/20 rounded-lg border border-secondary/30">
              <p className="text-primary font-bold text-2xl mb-2">399 DH</p>
              <p className="text-sm text-muted-foreground">SPF 50 PA+++ • 50ml • 8-hour protection</p>
            </div>

            <Link
              href="/product"
              className="inline-block px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              View Details
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
