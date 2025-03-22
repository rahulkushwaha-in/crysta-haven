
import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Zap, MapPin, Building, Shield } from 'lucide-react';

const heroImages = [
  "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&q=80",
];

const featureHighlights = [
  {
    icon: <Zap size={20} />,
    text: "Premium Location"
  },
  {
    icon: <MapPin size={20} />,
    text: "Sector 63, Noida"
  },
  {
    icon: <Building size={20} />,
    text: "500-5000 sq.ft"
  },
  {
    icon: <Shield size={20} />,
    text: "24/7 Security"
  },
];

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const slidesRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Auto-slide functionality
    const slideInterval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroImages.length);
    }, 3000);
    
    return () => clearInterval(slideInterval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { width, height, left, top } = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;
      
      const moveX = (x - 0.5) * 30;
      const moveY = (y - 0.5) * 30;
      
      heroRef.current.style.setProperty('--move-x', `${moveX}px`);
      heroRef.current.style.setProperty('--move-y', `${moveY}px`);
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="min-h-screen relative flex items-center overflow-hidden"
      style={{ perspective: '1000px' }}
    >
      {/* Full-width background image carousel */}
      <div className="absolute inset-0 w-full h-full">
        <div ref={slidesRef} className="relative w-full h-full">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
                activeSlide === index ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="absolute inset-0 bg-crysta-dark/50 z-10"></div>
              <img
                src={image}
                alt={`Office Space ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Content overlay */}
      <div className="section-padding relative z-20 w-full text-white py-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-start max-w-2xl">
            {/* Feature highlights */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mb-6 w-full opacity-0 animate-slide-in" style={{ '--animation-order': 0 } as React.CSSProperties}>
              {featureHighlights.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-3 flex items-center gap-2 border border-white/20">
                  <div className="text-crysta-blue">{feature.icon}</div>
                  <span className="text-sm md:text-base font-medium">{feature.text}</span>
                </div>
              ))}
            </div>
            
            <p className="text-sm md:text-base font-medium text-crysta-blue mb-2 opacity-0 animate-slide-in" style={{ '--animation-order': 1 } as React.CSSProperties}>
              PREMIUM OFFICE SPACES IN NOIDA
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white opacity-0 animate-slide-in" style={{ '--animation-order': 2 } as React.CSSProperties}>
              Elevate Your Business with Crysta Investment
            </h1>
            <p className="text-white/90 text-lg max-w-xl mb-8 opacity-0 animate-slide-in" style={{ '--animation-order': 3 } as React.CSSProperties}>
              Strategically located at C-30, Sector 63, Noida, we offer premium office spaces ranging from 500 to 5000 square feet, designed to empower your business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4 opacity-0 animate-slide-in" style={{ '--animation-order': 4 } as React.CSSProperties}>
              <a 
                href="#spaces" 
                className="custom-button bg-crysta-blue hover:bg-crysta-blue/90 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg hover:shadow-crysta-blue/20 transition-all duration-300 hover:-translate-y-1"
              >
                Explore Spaces
              </a>
              <a 
                href="#contact" 
                className="custom-button bg-white/10 backdrop-blur-sm text-white border border-white/20 px-6 py-3 rounded-lg font-medium group hover:bg-white/20 transition-all duration-300 hover:-translate-y-1"
              >
                Book a Tour
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Carousel Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex justify-center gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeSlide === index ? 'bg-crysta-blue scale-125 w-8' : 'bg-white/50'
            }`}
            onClick={() => setActiveSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      {/* 3D Elements that move with mouse */}
      <div 
        className="absolute inset-0 pointer-events-none z-10"
        style={{ 
          transform: 'translateX(var(--move-x, 0)) translateY(var(--move-y, 0)) translateZ(0)',
          transition: 'transform 0.1s ease-out'
        }}
      >
        <div className="absolute right-[15%] top-[25%] w-20 h-20 bg-crysta-blue/20 rounded-xl backdrop-blur-sm"></div>
        <div className="absolute left-[20%] top-[15%] w-16 h-16 bg-crysta-light-blue/20 rounded-xl backdrop-blur-sm"></div>
        <div className="absolute left-[10%] bottom-[30%] w-12 h-12 bg-crysta-blue/20 rounded-xl backdrop-blur-sm"></div>
        <div className="absolute right-[25%] bottom-[20%] w-24 h-24 bg-crysta-blue/20 rounded-xl backdrop-blur-sm"></div>
      </div>
    </section>
  );
};

export default Hero;
