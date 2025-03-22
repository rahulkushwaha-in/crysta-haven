
import React, { useEffect, useRef } from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
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
        
        <div className="opacity-0 animate-on-scroll">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {galleryImages.map((image, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                  <div className="h-[300px] w-full relative overflow-hidden rounded-xl group">
                    <img 
                      src={image.src} 
                      alt={image.alt} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="p-4 text-white">
                        <h3 className="font-semibold text-lg">{image.title}</h3>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 bg-white hover:bg-crysta-blue hover:text-white" />
            <CarouselNext className="hidden md:flex -right-12 bg-white hover:bg-crysta-blue hover:text-white" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
