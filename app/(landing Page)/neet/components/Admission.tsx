import React from 'react';
import { Calendar, Clock, Sparkles, CheckCircle } from 'lucide-react';

const Admission: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#184587] mb-4">Admission Process</h2>
          <div className="w-24 h-1 bg-[#F4D605] mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Join one of the most trusted names in NEET preparation across Guwahati and Assam
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg p-8 shadow-md">
            <div className="flex items-center mb-6">
              <Calendar className="h-8 w-8 text-[#184587] mr-3" />
              <h3 className="text-xl font-bold text-[#184587]">Admissions Open for 2025</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#F4D605] mr-3 mt-1 flex-shrink-0" />
                <p className="text-gray-600">Early Bird Discounts Available</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#F4D605] mr-3 mt-1 flex-shrink-0" />
                <p className="text-gray-600">Limited Seats Available</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#F4D605] mr-3 mt-1 flex-shrink-0" />
                <p className="text-gray-600">Scholarship Programs for Deserving Students</p>
              </div>
            </div>
          </div>

          <div className="bg-[#184587] rounded-lg p-8 text-white">
            <div className="flex items-center mb-6">
              <Clock className="h-8 w-8 text-[#F4D605] mr-3" />
              <h3 className="text-xl font-bold">Quick Admission Steps</h3>
            </div>
            <ol className="space-y-4">
              <li className="flex items-start">
                <span className="bg-[#F4D605] text-[#184587] w-6 h-6 rounded-full flex items-center justify-center font-bold mr-3 flex-shrink-0">1</span>
                <p>Fill the admission inquiry form or contact us directly</p>
              </li>
              <li className="flex items-start">
                <span className="bg-[#F4D605] text-[#184587] w-6 h-6 rounded-full flex items-center justify-center font-bold mr-3 flex-shrink-0">2</span>
                <p>Schedule a counseling session with our academic team</p>
              </li>
              <li className="flex items-start">
                <span className="bg-[#F4D605] text-[#184587] w-6 h-6 rounded-full flex items-center justify-center font-bold mr-3 flex-shrink-0">3</span>
                <p>Complete the admission formalities and secure your seat</p>
              </li>
            </ol>
          </div>
        </div>

        <div className="bg-white rounded-lg p-8 shadow-md text-center">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="h-8 w-8 text-[#F4D605] mr-3" />
            <h3 className="text-xl font-bold text-[#184587]">Begin Your Journey Toward Medical Success!</h3>
          </div>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join SPM & LALAN'S Coaching and take the first step towards achieving your dream of becoming a doctor.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact" 
              className="bg-[#184587] text-white hover:bg-[#184587]/90 px-8 py-3 rounded-md font-bold transition-colors duration-300"
            >
              Apply Now
            </a>
            <a 
              href="#contact" 
              className="bg-[#F4D605] text-[#184587] hover:bg-[#F4D605]/90 px-8 py-3 rounded-md font-bold transition-colors duration-300"
            >
              Download Brochure
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admission;