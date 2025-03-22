
import React, { useEffect, useRef } from 'react';
import { MapPin, Building, Train, Car, Clock, Map } from 'lucide-react';

const LocationFeature = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => {
  return (
    <div className="flex items-start gap-4 p-6 glass-panel hover-glass rounded-xl group hover:-translate-y-1 transition-all duration-300">
      <div className="p-3 bg-crysta-blue/10 text-crysta-blue rounded-lg group-hover:bg-crysta-blue/20 transition-colors">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-lg text-crysta-dark mb-1">{title}</h3>
        <p className="text-crysta-gray">{description}</p>
      </div>
    </div>
  );
};

const Location = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  
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

  const locationFeatures = [
    {
      icon: <MapPin size={24} />,
      title: "Strategic Location",
      description: "Located at C-30, Sector 63, Noida, in the heart of a business hub"
    },
    {
      icon: <Building size={24} />,
      title: "Near Fortis Hospital",
      description: "Easy access to healthcare facilities for you and your team"
    },
    {
      icon: <Train size={24} />,
      title: "Sector 62 Metro Proximity",
      description: "Just minutes away from Sector 62 Metro Station for easy commuting"
    },
    {
      icon: <Car size={24} />,
      title: "Excellent Connectivity",
      description: "Well-connected to major highways and transportation routes"
    },
    {
      icon: <Clock size={24} />,
      title: "Thriving Business District",
      description: "Surrounded by established businesses and commercial services"
    }
  ];

  return (
    <section id="location" ref={sectionRef} className="py-20 bg-crysta-light">
      <div className="section-padding">
        <div className="text-center max-w-3xl mx-auto mb-16 opacity-0 animate-on-scroll">
          <p className="text-sm font-medium text-crysta-blue mb-2">LOCATION & CONNECTIVITY</p>
          <h2 className="section-title mb-6">Strategically Positioned for Success</h2>
          <p className="section-description">
            Our prime location in Sector 63, Noida, offers exceptional connectivity and accessibility,
            making it an ideal choice for businesses looking to establish or expand their presence.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-10 items-stretch">
          {/* Map */}
          <div className="lg:w-1/2 relative opacity-0 animate-on-scroll">
            <div className="h-[500px] w-full rounded-xl overflow-hidden shadow-xl border border-crysta-blue/20">
              <div className="absolute top-4 left-4 z-10 flex items-center gap-2 bg-white/90 py-2 px-4 rounded-full shadow-lg">
                <Map size={18} className="text-crysta-blue" />
                <span className="text-sm font-medium text-crysta-dark">Crysta Investment, C-30, Sector 63</span>
              </div>
              
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0040602301463!2d77.37492861464485!3d28.627328682423493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce551491b3ce7%3A0x7335d9fcfd4d9db!2sSector%2063%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1651234567890!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Crysta Investment Location Map"
                className="grayscale-[0%] hover:grayscale-0 transition-all duration-500"
              >
              </iframe>
            </div>
          </div>
          
          {/* Location Features - now organized in 2 columns */}
          <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-5 opacity-0 animate-on-scroll" style={{ '--animation-delay': '0.2s' } as React.CSSProperties}>
            {locationFeatures.map((feature, index) => (
              <LocationFeature key={index} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
