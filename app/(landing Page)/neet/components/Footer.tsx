import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, BookOpen } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#184587] text-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <BookOpen className="h-8 w-8 text-[#F4D605]" />
              <div className="ml-2">
                <h3 className="text-xl font-bold">SPM & LALAN'S</h3>
                <p className="text-sm text-white/70">NEET Coaching</p>
              </div>
            </div>
            <p className="text-white/70 mb-4">
              Empowering medical aspirants to achieve their dreams through quality education and personalized mentorship.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-[#F4D605] transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-[#F4D605] transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-[#F4D605] transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-[#F4D605] transition-colors duration-200">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-white/70 hover:text-[#F4D605] transition-colors duration-200">Home</a>
              </li>
              <li>
                <a href="#programs" className="text-white/70 hover:text-[#F4D605] transition-colors duration-200">Programs</a>
              </li>
              <li>
                <a href="#why-choose-us" className="text-white/70 hover:text-[#F4D605] transition-colors duration-200">Why Choose Us</a>
              </li>
              <li>
                <a href="#facilities" className="text-white/70 hover:text-[#F4D605] transition-colors duration-200">Facilities</a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-[#F4D605] transition-colors duration-200">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Programs</h3>
            <ul className="space-y-2">
              <li>
                <a href="#programs" className="text-white/70 hover:text-[#F4D605] transition-colors duration-200">
                  Class X to XI Moving
                </a>
              </li>
              <li>
                <a href="#programs" className="text-white/70 hover:text-[#F4D605] transition-colors duration-200">
                  Class XI to XII Moving
                </a>
              </li>
              <li>
                <a href="#programs" className="text-white/70 hover:text-[#F4D605] transition-colors duration-200">
                  12th Pass / Dropper Batch
                </a>
              </li>
              <li>
                <a href="#programs" className="text-white/70 hover:text-[#F4D605] transition-colors duration-200">
                  Crash Course for NEET
                </a>
              </li>
              <li>
                <a href="#programs" className="text-white/70 hover:text-[#F4D605] transition-colors duration-200">
                  Super-30 NEET Batch
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p className="text-white/70 mb-4">
              Subscribe to our newsletter for the latest updates on courses, results, and educational resources.
            </p>
            <form className="space-y-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white outline-none focus:ring-[#F4D605] focus:border-[#F4D605] transition"
              />
              <button 
                type="submit" 
                className="w-full bg-[#F4D605] hover:bg-[#F4D605]/90 text-[#184587] font-bold py-2 px-4 rounded-md transition-colors duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-white/70 text-sm">
            &copy; {new Date().getFullYear()} SPM & LALAN'S Coaching. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;