'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
  const fadeInUp = {
    initial: { opacity: 0, y: 10 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
    viewport: { once: true },
  };

  return (
    <footer className="bg-foreground text-background border-t border-border/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <motion.div {...fadeInUp}>
            <div className="flex items-center gap-2 mb-4">
              <div className="text-2xl">✨</div>
              <span className="text-xl font-bold">Breezoria</span>
            </div>
            <p className="text-background/80 text-sm">
              Premium sun protection with luxury skincare benefits.
            </p>
          </motion.div>

          <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-background/80 hover:text-background transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/product" className="text-background/80 hover:text-background transition-colors">
                  Product
                </Link>
              </li>
              <li>
                <a href="/#about" className="text-background/80 hover:text-background transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/#contact" className="text-background/80 hover:text-background transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-background/80 hover:text-background transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-background transition-colors">
                  TikTok
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-background transition-colors">
                  Facebook
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div {...fadeInUp} transition={{ delay: 0.3 }}>
            <h3 className="font-semibold mb-4">Customer Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:hello@breezoria.com" className="text-background/80 hover:text-background transition-colors">
                  Email Us
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-background transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-background transition-colors">
                  Shipping Info
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.4 }}
          className="border-t border-background/20 pt-8 text-center text-background/80 text-sm"
        >
          <p>&copy; 2024 Breezoria. All rights reserved. | Premium Sun Care Brand</p>
        </motion.div>
      </div>
    </footer>
  );
}
