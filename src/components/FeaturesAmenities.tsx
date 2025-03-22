
import React, { useEffect, useRef } from 'react';
import { 
  Wifi, 
  Shield, 
  Clock, 
  Zap, 
  Coffee, 
  Car, 
  ShieldCheck, 
  LifeBuoy, 
  Loader2 
} from 'lucide-react';

const featureImages = {
  internet: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80",
  security: "https://images.unsplash.com/photo-1639322537504-6427a16b0a28?auto=format&fit=crop&q=80",
  access: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&q=80",
  power: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80",
  cafeteria: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80",
  parking: "https://images.unsplash.com/photo-1470224114660-3f6686c562eb?auto=format&fit=crop&q=80",
  fire: "https://images.unsplash.com/photo-1600880292630-ee8a00403024?auto=format&fit=crop&q=80",
  maintenance: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80",
  elevators: "https://images.unsplash.com/photo-1572224384995-f9db81742062?auto=format&fit=crop&q=80"
};

const FeatureCard = ({ 
  icon, 
  title, 
  description, 
  image 
}: { 
  icon: React.ReactNode, 
  title: string, 
  description: string,
  image: string
}) => {
  return (
    <div className="glass-panel p-0 rounded-xl hover-glass transition-all duration-300 h-full flex flex-col overflow-hidden">
      <div className="h-48 w-full overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6 flex flex-col">
        <div className="mb-4 p-3 bg-crysta-blue/10 text-crysta-blue rounded-lg w-fit">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-crysta-dark mb-2">{title}</h3>
        <p className="text-crysta-gray flex-grow">{description}</p>
      </div>
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
      description: "Enterprise-grade fiber optic connectivity with redundant backup systems",
      image: featureImages.internet
    },
    {
      icon: <Shield size={24} />,
      title: "24/7 Security",
      description: "Round-the-clock security personnel and advanced surveillance systems",
      image: featureImages.security
    },
    {
      icon: <Clock size={24} />,
      title: "24/7 Access",
      description: "Secure biometric access control for tenants at all hours",
      image: featureImages.access
    },
    {
      icon: <Zap size={24} />,
      title: "Power Backup",
      description: "Uninterrupted power supply with 100% backup generators",
      image: featureImages.power
    },
    {
      icon: <Coffee size={24} />,
      title: "Cafeteria & Lounge",
      description: "Fully equipped cafeteria and comfortable lounge areas",
      image: featureImages.cafeteria
    },
    {
      icon: <Car size={24} />,
      title: "Ample Parking",
      description: "Dedicated covered parking spaces for tenants and visitors",
      image: featureImages.parking
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "Fire Safety Systems",
      description: "Advanced fire detection and suppression systems",
      image: featureImages.fire
    },
    {
      icon: <LifeBuoy size={24} />,
      title: "Maintenance Services",
      description: "Professional facility management and maintenance team",
      image: featureImages.maintenance
    },
    {
      icon: <Loader2 size={24} />,
      title: "Modern Elevators",
      description: "High-speed elevators with smart access control",
      image: featureImages.elevators
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
            <div key={index} className="opacity-0 animate-on-scroll group" style={{ '--animation-delay': `${index * 0.1}s` } as React.CSSProperties}>
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesAmenities;
