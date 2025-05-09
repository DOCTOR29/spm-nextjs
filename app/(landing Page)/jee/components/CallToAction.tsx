import React from 'react';
import { Calendar, ChevronRight } from 'lucide-react';
import { anchor } from './constant';

const CallToAction: React.FC = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg')] bg-cover bg-center opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#184587] to-[#184587]/90"></div>
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="mb-8 lg:mb-0 lg:mr-8 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Ready to Start Your <span className="text-[#F4D605]">Medical Journey</span>?
            </h2>
            <p className="text-white/80 text-lg max-w-xl">
              Join PM & LALAN'S Coaching today and take the first step towards your successful medical career. Limited seats available!
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href={anchor} 
              className="bg-[#F4D605] hover:bg-[#F4D605]/90 text-[#184587] font-bold py-3 px-6 rounded-md transition-all duration-300 text-center flex items-center justify-center"
            >
              Enroll Now
              <ChevronRight className="ml-1 h-5 w-5" />
            </a>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;