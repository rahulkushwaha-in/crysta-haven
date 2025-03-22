
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

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
      className="min-h-screen relative flex items-center overflow-hidden pt-20"
      style={{ perspective: '1000px' }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-[10%] top-[20%] w-64 h-64 bg-crysta-blue/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute left-[5%] bottom-[10%] w-96 h-96 bg-crysta-light-blue/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>
      
      {/* 3D Elements that move with mouse */}
      <div 
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{ 
          transform: 'translateX(var(--move-x, 0)) translateY(var(--move-y, 0)) translateZ(0)',
          transition: 'transform 0.1s ease-out'
        }}
      >
        <div className="absolute right-[15%] top-[25%] w-20 h-20 bg-crysta-blue/20 rounded-xl"></div>
        <div className="absolute left-[20%] top-[15%] w-16 h-16 bg-crysta-light-blue/20 rounded-xl"></div>
        <div className="absolute left-[10%] bottom-[30%] w-12 h-12 bg-crysta-blue/20 rounded-xl"></div>
        <div className="absolute right-[25%] bottom-[20%] w-24 h-24 bg-crysta-blue/20 rounded-xl"></div>
      </div>

      <div className="section-padding w-full flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Text Content */}
        <div className="flex-1 max-w-2xl">
          <p className="text-sm md:text-base font-medium text-crysta-blue mb-2 opacity-0 animate-slide-in" style={{ '--animation-order': 0 } as React.CSSProperties}>
            PREMIUM OFFICE SPACES IN NOIDA
          </p>
          <h1 className="section-title mb-6 opacity-0 animate-slide-in" style={{ '--animation-order': 1 } as React.CSSProperties}>
            Elevate Your Business with Crysta Investment
          </h1>
          <p className="section-description opacity-0 animate-slide-in" style={{ '--animation-order': 2 } as React.CSSProperties}>
            Strategically located at C-30, Sector 63, Noida, we offer premium office spaces ranging from 500 to 5000 square feet, designed to empower your business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8 opacity-0 animate-slide-in" style={{ '--animation-order': 3 } as React.CSSProperties}>
            <a 
              href="#spaces" 
              className="custom-button bg-crysta-blue hover:bg-crysta-blue/90 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg hover:shadow-crysta-blue/20 transition-all duration-300 hover:-translate-y-1"
            >
              Explore Spaces
            </a>
            <a 
              href="#contact" 
              className="custom-button bg-crysta-light text-crysta-dark border border-crysta-blue/20 px-6 py-3 rounded-lg font-medium group hover:bg-crysta-blue/5 transition-all duration-300 hover:-translate-y-1"
            >
              Book a Tour
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
        
        {/* Image/Graphic */}
        <div className="flex-1 relative h-[400px] md:h-[500px] w-full max-w-xl">
          <div className="absolute inset-0 glass-panel rounded-2xl overflow-hidden opacity-0 animate-slide-in" style={{ '--animation-order': 4 } as React.CSSProperties}>
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80" 
              alt="Modern Office Space" 
              className="object-cover h-full w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-crysta-dark/50 to-transparent flex flex-col justify-end p-6">
              <span className="text-white/90 text-xs font-medium uppercase tracking-wide">Featured Space</span>
              <h3 className="text-white text-xl font-semibold mt-1">Executive Office Suite</h3>
              <p className="text-white/80 text-sm mt-1">Fully furnished, ready to move in</p>
            </div>
          </div>
          <div 
            className="absolute -bottom-4 -right-4 h-full w-full rounded-2xl border border-crysta-blue/20 opacity-0 animate-slide-in" 
            style={{ '--animation-order': 5 } as React.CSSProperties}
          ></div>
        </div>
      </div>
      
      {/* Scrolling indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-0 animate-fade-in" style={{ animationDelay: '2s' }}>
        <span className="text-sm text-crysta-gray mb-2">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-crysta-gray rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-crysta-gray rounded-full mt-2 animate-float"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
