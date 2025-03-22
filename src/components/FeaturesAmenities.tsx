
import React, { useEffect, useRef } from 'react';
import { 
  Wifi, 
  Shield, 
  Clock, 
  Zap, 
  Coffee, 
  Parking, 
  ShieldCheck, 
  LifeBuoy, 
  Loader2 
} from 'lucide-react';

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => {
  return (
    <div className="glass-panel p-6 rounded-xl hover-glass transition-all duration-300 h-full flex flex-col">
      <div className="mb-4 p-3 bg-crysta-blue/10 text-crysta-blue rounded-lg w-fit">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-crysta-dark mb-2">{title}</h3>
      <p className="text-crysta-gray flex-grow">{description}</p>
    </div>
  );
};

const FeaturesAmenities = () => {
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

  const features = [
    {
      icon: <Wifi size={24} />,
      title: "High-Speed Internet",
      description: "Enterprise-grade fiber optic connectivity with redundant backup systems"
    },
    {
      icon: <Shield size={24} />,
      title: "24/7 Security",
      description: "Round-the-clock security personnel and advanced surveillance systems"
    },
    {
      icon: <Clock size={24} />,
      title: "24/7 Access",
      description: "Secure biometric access control for tenants at all hours"
    },
    {
      icon: <Zap size={24} />,
      title: "Power Backup",
      description: "Uninterrupted power supply with 100% backup generators"
    },
    {
      icon: <Coffee size={24} />,
      title: "Cafeteria & Lounge",
      description: "Fully equipped cafeteria and comfortable lounge areas"
    },
    {
      icon: <Parking size={24} />,
      title: "Ample Parking",
      description: "Dedicated covered parking spaces for tenants and visitors"
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "Fire Safety Systems",
      description: "Advanced fire detection and suppression systems"
    },
    {
      icon: <LifeBuoy size={24} />,
      title: "Maintenance Services",
      description: "Professional facility management and maintenance team"
    },
    {
      icon: <Loader2 size={24} />,
      title: "Modern Elevators",
      description: "High-speed elevators with smart access control"
    }
  ];

  return (
    <section id="features" ref={sectionRef} className="py-20 bg-crysta-light relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-crysta-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-crysta-blue/5 rounded-full blur-3xl"></div>
      
      <div className="section-padding relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 opacity-0 animate-on-scroll">
          <p className="text-sm font-medium text-crysta-blue mb-2">FEATURES & AMENITIES</p>
          <h2 className="section-title mb-6">Everything Your Business Needs</h2>
          <p className="section-description">
            Our comprehensive suite of amenities and features ensures that your business operations run smoothly in a comfortable environment optimized for productivity.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="opacity-0 animate-on-scroll" style={{ '--animation-delay': `${index * 0.1}s` } as React.CSSProperties}>
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesAmenities;
