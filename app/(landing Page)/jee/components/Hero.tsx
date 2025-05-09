import React from 'react';
import { ChevronRight, Award, Star } from 'lucide-react';
import { anchor } from './constant';
const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-br from-[#184587]/95 to-[#184587]"
    >
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/2982449/pexels-photo-2982449.jpeg')] bg-cover bg-center opacity-10"></div>
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto md:mx-0">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            SPM & LALAN'S Coaching: <span className="text-[#F4D605]">Best JEE Coaching in Guwahati</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            From Classroom to Campus: Empowering JEE Dreams
          </p>
          <div className="text-white/80 mb-8 max-w-2xl">
            <p>If you're searching for a top-rated JEE coaching centre in Guwahati, look no further. We are committed to academic excellence and producing consistent results in engineering entrance exams like JEE & CEE.</p>
          </div>
          <div className="flex flex-wrap gap-3 mb-12">
            <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Star className="h-5 w-5 text-[#F4D605] mr-2" />
              <span className="text-white text-sm">Top JEE Results</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Award className="h-5 w-5 text-[#F4D605] mr-2" />
              <span className="text-white text-sm">Expert Faculty</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href={anchor}
              className="bg-[#F4D605] hover:bg-[#F4D605]/90 text-[#184587] font-bold py-3 px-6 rounded-md transition-all duration-300 text-center flex items-center justify-center"
            >
              Enroll Today
              <ChevronRight className="ml-1 h-5 w-5" />
            </a>
          
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;