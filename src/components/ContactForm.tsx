
import React, { useState, useEffect, useRef } from 'react';
import { Send, Mail, Phone, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    spaceType: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast.success("Your message has been sent", {
        description: "We'll get back to you as soon as possible."
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        spaceType: '',
      });
      
      // Reset submission status after a delay
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "+91 98765 43210",
      href: "tel:+919876543210"
    },
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "leasing@crystainvestment.com",
      href: "mailto:leasing@crystainvestment.com"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Address",
      value: "C-30, Sector 63, Noida, UP",
      href: "https://goo.gl/maps/1234567890"
    }
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-20">
      <div className="section-padding">
        <div className="text-center max-w-3xl mx-auto mb-16 opacity-0 animate-on-scroll">
          <p className="text-sm font-medium text-crysta-blue mb-2">GET IN TOUCH</p>
          <h2 className="section-title mb-6">Book Your Office Now</h2>
          <p className="section-description">
            Ready to elevate your business? Connect with our leasing team to learn more about our premium office spaces
            and schedule a personalized tour.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Contact Form */}
          <div className="lg:w-3/5 opacity-0 animate-on-scroll">
            <form 
              onSubmit={handleSubmit} 
              className="glass-panel rounded-xl p-8 border border-crysta-blue/10 transition-all duration-500"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-crysta-dark mb-2">
                    Full Name <span className="text-crysta-blue">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="custom-input w-full bg-white/50 focus:border-crysta-blue hover:border-crysta-gray/80 transition-colors duration-300"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-crysta-dark mb-2">
                    Email <span className="text-crysta-blue">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="custom-input w-full bg-white/50 focus:border-crysta-blue hover:border-crysta-gray/80 transition-colors duration-300"
                    placeholder="john@company.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-crysta-dark mb-2">
                    Phone <span className="text-crysta-blue">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="custom-input w-full bg-white/50 focus:border-crysta-blue hover:border-crysta-gray/80 transition-colors duration-300"
                    placeholder="+91 98765 43210"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-crysta-dark mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="custom-input w-full bg-white/50 focus:border-crysta-blue hover:border-crysta-gray/80 transition-colors duration-300"
                    placeholder="Your Company Ltd."
                  />
                </div>
                
                <div>
                  <label htmlFor="spaceType" className="block text-sm font-medium text-crysta-dark mb-2">
                    Interested In <span className="text-crysta-blue">*</span>
                  </label>
                  <select
                    id="spaceType"
                    name="spaceType"
                    value={formData.spaceType}
                    onChange={handleChange}
                    required
                    className="custom-input w-full bg-white/50 focus:border-crysta-blue hover:border-crysta-gray/80 transition-colors duration-300"
                  >
                    <option value="" disabled>Select office type</option>
                    <option value="small">Small Office (500-800 sq.ft)</option>
                    <option value="medium">Medium Suite (1000-1500 sq.ft)</option>
                    <option value="large">Large Office (2000-3000 sq.ft)</option>
                    <option value="full">Full Floor (4000-5000 sq.ft)</option>
                  </select>
                </div>
                
                <div className="md:col-span-2">
                  <label htmlFor="message" className="block text-sm font-medium text-crysta-dark mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="custom-input w-full bg-white/50 focus:border-crysta-blue hover:border-crysta-gray/80 transition-colors duration-300"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className={cn(
                  "custom-button w-full py-3 rounded-lg text-white font-medium group transition-all duration-300",
                  isSubmitted 
                    ? "bg-green-500 hover:bg-green-600" 
                    : "bg-crysta-blue hover:bg-crysta-blue/90 hover:shadow-lg hover:shadow-crysta-blue/20 hover:-translate-y-1"
                )}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </span>
                ) : isSubmitted ? (
                  <span className="flex items-center justify-center">
                    <CheckCircle2 className="mr-2 h-4 w-4" />
                    Message Sent
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    Book Your Office
                  </span>
                )}
              </button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="lg:w-2/5 space-y-8 opacity-0 animate-on-scroll" style={{ '--animation-delay': '0.2s' } as React.CSSProperties}>
            <div className="glass-panel rounded-xl p-8 border border-crysta-blue/10">
              <h3 className="text-xl font-semibold text-crysta-dark mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <a 
                    key={index}
                    href={item.href}
                    className="flex items-start gap-4 hover:bg-crysta-blue/5 p-3 rounded-lg transition-colors duration-300"
                    target={item.label === "Address" ? "_blank" : undefined}
                    rel={item.label === "Address" ? "noopener noreferrer" : undefined}
                  >
                    <div className="p-3 bg-crysta-blue/10 text-crysta-blue rounded-lg">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm text-crysta-gray">{item.label}</p>
                      <p className="font-medium text-crysta-dark">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            
            <div className="glass-panel rounded-xl p-8 border border-crysta-blue/10">
              <h3 className="text-xl font-semibold text-crysta-dark mb-6">Schedule a Tour</h3>
              <p className="text-crysta-gray mb-6">
                Interested in seeing our office spaces in person? Schedule a guided tour with our leasing team.
              </p>
              <a 
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  toast.success("Tour scheduling coming soon!");
                }}
                className="flex items-center justify-center gap-2 custom-button bg-crysta-light text-crysta-dark border border-crysta-blue/20 w-full py-3 rounded-lg font-medium group hover:bg-crysta-blue/5 transition-all duration-300"
              >
                <Calendar className="h-5 w-5" />
                Schedule a Tour
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
