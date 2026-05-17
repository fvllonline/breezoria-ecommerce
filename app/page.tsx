import Navbar from '@/components/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ProductHighlightSection from '@/components/sections/ProductHighlightSection';
import BenefitsSection from '@/components/sections/BenefitsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProductHighlightSection />
        <BenefitsSection />
        {/* <TestimonialsSection /> */}
        {/* <ContactSection /> */}
      </main>
      <Footer />
    </div>
  );
}
