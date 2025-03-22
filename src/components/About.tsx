
import React, { useEffect, useRef } from 'react';
import { CheckCircle } from 'lucide-react';

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-in');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elementsToAnimate = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elementsToAnimate?.forEach((el) => observer.observe(el));
    
    return () => {
      elementsToAnimate?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const highlights = [
    'Prime location in Sector 63, Noida',
    'Near Fortis Hospital & Sector 62 Metro',
    'Premium office spaces from 500-5000 sq.ft',
    'Flexible office configurations',
    'Modern amenities & facilities',
    'Trusted Crysta Investment legacy',
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-crysta-light">
      <div className="section-padding">
        <div className="text-center mb-10">
          <p className="text-sm font-medium text-crysta-blue mb-2 opacity-0 animate-on-scroll">ABOUT US</p>
          <h2 className="section-title mb-4 opacity-0 animate-on-scroll" style={{ '--animation-delay': '0.1s' } as React.CSSProperties}>The Trusted Legacy of Crysta Investment</h2>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center justify-between">
          {/* Left side - Image with floating effect */}
          <div className="lg:w-1/2 relative order-2 lg:order-1">
            <div className="opacity-0 animate-on-scroll relative">
              <div className="absolute -top-4 -left-4 w-64 h-64 bg-crysta-blue/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow"></div>
              <div className="absolute -bottom-8 -right-4 w-64 h-64 bg-crysta-blue/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
              
              <div className="relative">
                <div className="h-[400px] sm:h-[500px] w-full md:w-[90%] mx-auto rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <img 
                    src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80" 
                    alt="Crysta Investment Office" 
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 h-full w-full md:w-[90%] mx-auto border-2 border-crysta-blue/30 rounded-2xl"></div>
              </div>
            </div>
          </div>
          
          {/* Right side - Text content */}
          <div className="lg:w-1/2 order-1 lg:order-2">
            <div className="opacity-0 animate-on-scroll" style={{ '--animation-delay': '0.2s' } as React.CSSProperties}>
              <p className="section-description">
                Crysta Investment has established itself as a premier provider of commercial office spaces in Noida. Located at C-30, Sector 63, we offer businesses of all sizes the perfect environment to thrive and grow.
              </p>
              <p className="section-description">
                Our strategic location near Fortis Hospital and Sector 62 Metro ensures excellent connectivity, making it convenient for both employees and clients to access your workspace.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {highlights.map((item, index) => (
                  <div key={index} className="flex items-start gap-2 group hover:bg-white/50 p-2 rounded-lg transition-all duration-300">
                    <CheckCircle className="h-5 w-5 text-crysta-blue flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <span className="text-crysta-dark">{item}</span>
                  </div>
                ))}
              </div>
              
              <a 
                href="#spaces" 
                className="custom-button bg-crysta-blue hover:bg-crysta-blue/90 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg hover:shadow-crysta-blue/20 transition-all duration-300 hover:-translate-y-1"
              >
                Explore Our Spaces
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
