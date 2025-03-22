
import React, { useEffect, useRef, useState } from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?auto=format&fit=crop&q=80",
    alt: "Office Building Exterior",
    title: "Modern Building Exterior"
  },
  {
    src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80",
    alt: "Meeting Room",
    title: "Executive Meeting Room"
  },
  {
    src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80",
    alt: "Office Work Area",
    title: "Collaborative Workspace"
  },
  {
    src: "https://images.unsplash.com/photo-1540274566628-4684a0f8b494?auto=format&fit=crop&q=80",
    alt: "Building Atrium",
    title: "Spacious Reception Area"
  },
  {
    src: "https://images.unsplash.com/photo-1622126807280-9b5b32b28e77?auto=format&fit=crop&q=80",
    alt: "Office Cubicles",
    title: "Private Office Spaces"
  },
  {
    src: "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?auto=format&fit=crop&q=80",
    alt: "Building Hallway",
    title: "Modern Hallway Design"
  },
];

const Gallery = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [autoScroll, setAutoScroll] = useState(true);
  const autoScrollRef = useRef<NodeJS.Timeout | null>(null);
  const carouselRef = useRef<HTMLDivElement | null>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-in');
            setAutoScroll(true);
          } else {
            setAutoScroll(false);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elementsToAnimate = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elementsToAnimate?.forEach((el) => observer.observe(el));
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      elementsToAnimate?.forEach((el) => observer.unobserve(el));
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Auto-scroll effect
  useEffect(() => {
    if (autoScroll && carouselRef.current) {
      const scrollAmount = 1;
      let scrollPosition = 0;
      
      const scroll = () => {
        if (!carouselRef.current) return;
        
        scrollPosition += scrollAmount;
        carouselRef.current.scrollLeft += scrollAmount;
        
        // Reset scroll position when it reaches end
        if (scrollPosition >= carouselRef.current.scrollWidth - carouselRef.current.clientWidth) {
          scrollPosition = 0;
          carouselRef.current.scrollLeft = 0;
        }
      };
      
      autoScrollRef.current = setInterval(scroll, 30);
    }
    
    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
    };
  }, [autoScroll]);

  return (
    <section id="gallery" ref={sectionRef} className="py-20 bg-white">
      <div className="section-padding">
        <div className="text-center max-w-3xl mx-auto mb-12 opacity-0 animate-on-scroll">
          <p className="text-sm font-medium text-crysta-blue mb-2">GALLERY</p>
          <h2 className="section-title mb-6">Experience Our Spaces</h2>
          <p className="section-description">
            Take a visual tour of our premium office building and facilities, designed to inspire productivity and growth.
          </p>
        </div>
        
        <div className="opacity-0 animate-on-scroll relative overflow-hidden">
          <div 
            ref={carouselRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide pb-8 pt-2 px-2 -mx-2 scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            onMouseEnter={() => setAutoScroll(false)}
            onMouseLeave={() => setAutoScroll(true)}
          >
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[400px] h-[300px] relative overflow-hidden rounded-xl group transition-all duration-500"
              >
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="p-6 text-white">
                    <h3 className="font-semibold text-xl">{image.title}</h3>
                    <p className="text-white/80 mt-1">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Gradient overlays for infinite scroll effect */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
