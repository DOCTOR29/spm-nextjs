import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#184587] mb-4">Contact Us</h2>
          <div className="w-24 h-1 bg-[#F4D605] mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Get in touch to learn more about our programs or to enroll in our courses
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-1">
            <div className="p-6 md:p-8 lg:p-10">
              <h3 className="text-xl font-bold text-[#184587] mb-6">Send Us a Message</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#184587] focus:border-[#184587] outline-none transition"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#184587] focus:border-[#184587] outline-none transition"
                      placeholder="Your phone"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#184587] focus:border-[#184587] outline-none transition"
                    placeholder="Your email"
                  />
                </div>
                <div>
                  <label htmlFor="program" className="block text-sm font-medium text-gray-700 mb-1">Interested Program</label>
                  <select 
                    id="program" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#184587] focus:border-[#184587] outline-none transition"
                  >
                    <option value="">Select a program</option>
                    <option value="10-11">Class X to XI Moving</option>
                    <option value="11-12">Class XI to XII Moving</option>
                    <option value="dropper">12th Pass / Dropper Batch</option>
                    <option value="crash">Crash Course</option>
                    <option value="super30">Super-30 NEET Batch</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#184587] focus:border-[#184587] outline-none transition resize-none"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="bg-[#184587] hover:bg-[#184587]/90 text-white font-bold py-3 px-6 rounded-md transition-colors duration-300 w-full md:w-auto"
                >
                  Submit Inquiry
                </button>
              </form>
            </div>
            {/* <div className="bg-[#184587] text-white p-6 md:p-8 lg:p-10">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-[#F4D605] mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium mb-1">Our Location</h4>
                    <p className="text-white/80">
                      123 Education Street, Guwahati, Assam, India - 781001
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-[#F4D605] mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium mb-1">Phone Number</h4>
                    <p className="text-white/80">+91 98765 43210</p>
                    <p className="text-white/80">+91 98765 43211</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-[#F4D605] mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium mb-1">Email Address</h4>
                    <p className="text-white/80">info@pmlalans.edu.in</p>
                    <p className="text-white/80">admissions@pmlalans.edu.in</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-[#F4D605] mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium mb-1">Office Hours</h4>
                    <p className="text-white/80">Monday to Saturday: 9:00 AM - 6:00 PM</p>
                    <p className="text-white/80">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;