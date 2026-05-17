'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductGallery from '@/components/ProductGallery';
import ProductInfo from '@/components/ProductInfo';
import { motion } from 'framer-motion';

export default function ProductPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20"
      >
        <motion.div {...fadeInUp} className="mb-12">
          <nav className="flex mb-4 text-sm text-muted-foreground" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2">
              <li><a href="/" className="hover:text-primary transition-colors">Home</a></li>
              <li><span className="mx-2">/</span></li>
              <li className="text-foreground font-medium">Product</li>
            </ol>
          </nav>
          <h1 className="text-4xl md:text-6xl font-extrabold text-foreground tracking-tight mb-4">
            Breezoria Invisible Matte Finish Sunscreen
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Premium protection meets luxury skincare. A weightless, pore-blurring formula for a flawless finish.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <ProductGallery />
          <ProductInfo />
        </div>

        <motion.section 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="space-y-16"
        >
          <div className="bg-card p-8 md:p-16 rounded-3xl border border-border shadow-sm">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center underline decoration-primary decoration-4 underline-offset-8">
                Product Experience
              </h2>

              <div className="space-y-12">
                <section>
                  <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm">01</span>
                    The Formula
                  </h3>
                  <div className="space-y-4 text-foreground/90 leading-relaxed text-lg">
                    <p>
                      Breezoria is not just a sunscreen; it's a skin-perfecting primer. Our matte chemical formula blurs imperfections and smooths skin texture, providing broad-spectrum SPF50 PA+++ protection without the heaviness of traditional sunscreens.
                    </p>
                    <p>
                      The clear gel texture glides effortlessly, absorbing instantly to control excess sebum and create a soft matte finish that lasts all day, even under makeup.
                    </p>
                  </div>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm">02</span>
                    Ritual for Perfection
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-2xl bg-secondary/10 border border-secondary/20">
                      <p className="font-bold text-primary mb-2">Step 1</p>
                      <p className="text-foreground/80">Apply generously to face and neck 15 minutes before sun exposure.</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-secondary/10 border border-secondary/20">
                      <p className="font-bold text-primary mb-2">Step 2</p>
                      <p className="text-foreground/80">Reapply every 2 hours or after swimming/sweating for continuous protection.</p>
                    </div>
                  </div>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm">03</span>
                    Science & Nature
                  </h3>
                  <div className="bg-muted p-6 rounded-2xl border border-border">
                    <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-4">Full Ingredient List</p>
                    <p className="text-sm text-foreground/80 font-mono leading-relaxed">
                      Isododecane, Isopropyl Palmitate, Butyloctyl Salicylate, Homosalate, Methyl Methacrylate Crosspolymer, Octocrylene, Ethylhexyl Salicylate, Dimethicone/Bis-Isobutyl Ppg-20 Crosspolymer, Caprylic/Capric Triglyceride, Polyamide-8, Isohexadecane, Polymethylsilsesquioxane, Butyl Methoxydibenzoylmethane, Benzotriazolyl Dodecyl P-Cresol, Dextrin Palmitate, Ethylhexyl Methoxycrylene, Polyamide-3, Pentaerythrityl Tetra-Di-T-Butyl Hydroxyhydrocinnamate, Tocopherol, Asiaticoside, Madecassic Acid, Asiatic Acid.
                    </p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </motion.section>
      </motion.main>

      <Footer />
    </div>
  );
}
