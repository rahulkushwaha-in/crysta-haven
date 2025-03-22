
import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-crysta-dark text-white">
      <div className="section-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="md:col-span-3 lg:col-span-1">
            <div className="mb-6">
              <span className="font-display font-bold text-2xl">
                CRYSTA<span className="text-crysta-blue">INVESTMENT</span>
              </span>
            </div>
            <p className="text-white/70 mb-6 max-w-md">
              Premium office spaces in Sector 63, Noida. Backed by the trusted legacy of Crysta Investment, elevate your business with us.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-300">
                <Linkedin size={20} />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-300">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {['Home', 'About', 'Office Spaces', 'Location', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(' ', '-')}`} 
                    className="text-white/70 hover:text-white flex items-center group"
                  >
                    <span className="group-hover:underline">{item}</span>
                    <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Office Spaces */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Office Spaces</h3>
            <ul className="space-y-4">
              {['Small Office', 'Medium Suite', 'Large Office', 'Full Floor', 'Customized Solutions'].map((item) => (
                <li key={item}>
                  <a 
                    href="#spaces" 
                    className="text-white/70 hover:text-white flex items-center group"
                  >
                    <span className="group-hover:underline">{item}</span>
                    <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="text-white/70">
                <strong className="text-white">Address:</strong> C-30, Sector 63,<br />Noida, Uttar Pradesh
              </li>
              <li className="text-white/70">
                <strong className="text-white">Email:</strong> leasing@crystainvestment.com
              </li>
              <li className="text-white/70">
                <strong className="text-white">Phone:</strong> +91 98765 43210
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Copyright Bar */}
      <div className="border-t border-white/10 py-6">
        <div className="section-padding flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-white/60 text-sm">
            &copy; {currentYear} Crysta Investment. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-white/60 text-sm hover:text-white transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-white/60 text-sm hover:text-white transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
