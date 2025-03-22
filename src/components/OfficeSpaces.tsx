
import React, { useEffect, useRef } from 'react';
import { ArrowRight, CheckCircle, ArrowUpRight } from 'lucide-react';

interface OfficeSpaceProps {
  title: string;
  area: string;
  imageUrl: string;
  features: string[];
  highlighted?: boolean;
}

const OfficeSpaceCard = ({ title, area, imageUrl, features, highlighted = false }: OfficeSpaceProps) => {
  return (
    <div 
      className={`glass-panel rounded-xl overflow-hidden hover-glass ${
        highlighted ? 'border-crysta-blue/20 shadow-lg' : ''
      }`}
    >
      <div className="h-56 w-full overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-lg font-semibold text-crysta-dark">{title}</h3>
            <p className="text-sm text-crysta-gray">{area}</p>
          </div>
          {highlighted && (
            <span className="bg-crysta-blue/10 text-crysta-blue text-xs font-medium px-3 py-1 rounded-full">
              Popular
            </span>
          )}
        </div>
        
        <div className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-crysta-blue flex-shrink-0" />
              <span className="text-sm text-crysta-gray">{feature}</span>
            </div>
          ))}
        </div>
        
        <a 
          href="#contact" 
          className="flex items-center text-crysta-blue font-medium group"
        >
          Book a tour
          <ArrowUpRight className="ml-1 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </a>
      </div>
    </div>
  );
};

const OfficeSpaces = () => {
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

  const officeSpaces = [
    {
      title: "Small Office",
      area: "500 - 800 sq.ft",
      imageUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=500",
      features: ["Ideal for startups", "Modern interiors", "24/7 access", "Shared amenities"],
    },
    {
      title: "Medium Suite",
      area: "1000 - 1500 sq.ft",
      imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=500",
      features: ["Flexible layout", "Meeting room", "High-speed internet", "Reception area"],
      highlighted: true,
    },
    {
      title: "Large Office",
      area: "2000 - 3000 sq.ft",
      imageUrl: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?auto=format&fit=crop&q=80&w=500",
      features: ["Multiple cabins", "Conference room", "Pantry area", "Premium furnishing"],
    },
    {
      title: "Full Floor",
      area: "4000 - 5000 sq.ft",
      imageUrl: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=500",
      features: ["Customizable layout", "Private elevator access", "Exclusive amenities", "Branding opportunities"],
    }
  ];

  return (
    <section id="spaces" ref={sectionRef} className="py-20">
      <div className="section-padding">
        <div className="text-center max-w-3xl mx-auto mb-16 opacity-0 animate-on-scroll">
          <p className="text-sm font-medium text-crysta-blue mb-2">OUR OFFERINGS</p>
          <h2 className="section-title mb-6">Premium Office Spaces</h2>
          <p className="section-description">
            Choose from a variety of office configurations designed to meet your business needs, 
            from small offices to entire floors, all strategically located in Sector 63, Noida.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {officeSpaces.map((office, index) => (
            <div key={index} className="opacity-0 animate-on-scroll" style={{ '--animation-delay': `${0.1 * index}s` } as React.CSSProperties}>
              <OfficeSpaceCard {...office} />
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center opacity-0 animate-on-scroll">
          <a 
            href="#contact" 
            className="inline-flex items-center custom-button bg-crysta-dark hover:bg-crysta-dark/90 text-white px-8 py-4 rounded-lg font-medium group"
          >
            Connect with our leasing team
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default OfficeSpaces;
