
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import OfficeSpaces from '@/components/OfficeSpaces';
import Gallery from '@/components/Gallery';
import FeaturesAmenities from '@/components/FeaturesAmenities';
import Location from '@/components/Location';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import { ArrowUp, MessageSquare } from 'lucide-react';
import { cn } from '@/lib/utils';

const Index = () => {
  const [showScrollTop, setShowScrollTop] = React.useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <OfficeSpaces />
      <Gallery />
      <FeaturesAmenities />
      <Location />
      <ContactForm />
      <Footer />
      
      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className={cn(
          "fixed bottom-8 right-8 p-3 bg-crysta-blue text-white rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 z-40",
          showScrollTop ? "opacity-100 visible" : "opacity-0 invisible"
        )}
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
      
      {/* WhatsApp Contact Button */}
      <a
        href="https://wa.me/911234567890?text=I'm%20interested%20in%20Crysta%20Investment%20office%20spaces"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 left-8 p-4 bg-green-500 text-white rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 z-40 flex items-center justify-center"
        aria-label="Contact via WhatsApp"
      >
        <MessageSquare size={24} />
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></span>
      </a>
    </main>
  );
};

export default Index;
