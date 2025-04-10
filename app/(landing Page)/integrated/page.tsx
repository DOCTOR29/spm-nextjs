'use client'
import React from 'react';
import { 
  BookOpen, 
  GraduationCap,
  Users, 
  Target,
  School,
  Microscope,
  CheckCircle, 
  Shield,
  Award,
  Phone, 
  Mail, 
  MapPin
} from 'lucide-react';

import "./css/embla.css";
import testimonials from "./components/data/testimonials.json";
import EmblaCarousel from "./components/EmblaCorousel";
import { EmblaOptionsType } from "embla-carousel";
import { ReadMore } from "./components/ReadMore";
import { CarouselDemo } from "./components/carouselTestimonials";
const OPTIONS: EmblaOptionsType = { containScroll: false };
const SLIDE_COUNT = 5;

const teachers = [
  "./Teacher/1.webp",
  "./Teacher/2.webp",
  "./Teacher/3.webp",
  "./Teacher/4.webp",
  "./Teacher/5.webp",
  "./Teacher/6.webp",
  "./Teacher/7.webp",
  "./Teacher/8.webp",
];
const topper = [
  "./Topper/1.png",
  "./Topper/2.png",
  "./Topper/3.png",
  "./Topper/4.png",
  "./Topper/5.png",
  "./Topper/6.png",
  "./Topper/7.png",
  "./Topper/8.png",
];

function App() {

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white fixed w-full z-50">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
        <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-r from-[#F4D605] via-[#FFD700] to-[#DAA520] z-20 flex items-center justify-center shadow-lg">
          <img
            className="h-10 w-auto"
            src="/spm-and-lalans-logo-removebg-preview.png"
            alt="spm and lalans logo"
          />
        </div>
          {/* <nav className="flex flex-wrap justify-center gap-6">
            <a href="#courses" className="hover:text-blue-200 transition-colors">Courses</a>
            <a href="#facilities" className="hover:text-blue-200 transition-colors">Facilities</a>
            <a href="#testimonials" className="hover:text-blue-200 transition-colors">Testimonials</a>
            <a href="#faqs" className="hover:text-blue-200 transition-colors">FAQs</a>
            <a href="#contact" className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-4 py-2 rounded-md transition-colors font-semibold">Book Free Counselling</a>
          </nav> */}
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-indigo-900 to-blue-800 text-white pt-32 pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Best Coaching for NEET and JEE in Guwahati</h1>
          <p className="text-2xl md:text-3xl font-semibold mb-4 text-yellow-400">Your Success Begins Here</p>
          <p className="text-xl mb-8 max-w-4xl mx-auto">
            SPM & Lalan's Integrated Academy is a trusted name in competitive exam coaching, such as JEE (Main & Advanced), 
            NEET, CEE, and various Olympiads. With over 10,000 successful selections in NEET, JEE, and CEE. 
            Our expert faculty, advanced teaching methods, and student-first approach ensure top results.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#contact" className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold px-8 py-3 rounded-md transition-colors text-lg">
              Book Free Counselling
            </a>
            <a href="#courses" className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-md transition-colors text-lg">
              Explore Courses
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
              <p className="text-gray-600">Consistently high selection rates in NEET and JEE.</p>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <GraduationCap className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Faculty</h3>
              <p className="text-gray-600">Learn from IITians, NEET Rankers, and Expert Faculties.</p>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Comprehensive Preparation</h3>
              <p className="text-gray-600">Board exams + competitive exam training.</p>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Personalized Attention</h3>
              <p className="text-gray-600">Small batch sizes and regular mentorship.</p>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <School className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">State-of-the-Art Infrastructure</h3>
              <p className="text-gray-600">Smart classrooms, labs, and hostel facilities.</p>
              
            </div>
            <section className="section-pattern py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="gradient-text">
              Our Results Speak for Themselves
            </span>
          </h2>
          {/* <div className="md:hidden block "> */}

          <EmblaCarousel slides={topper} teacher={true} options={OPTIONS} />
          {/* </div> */}

          {/* <Card className="p-8 text-center card-hover bg-white/80 backdrop-blur-sm">
              <Award className="h-16 w-16 text-accent2 mx-auto mb-6" />
              <h3 className="text-3xl font-bold mb-2">1000+</h3>
              <p className="text-gray-600">NEET Qualifiers</p>
            </Card>
            <Card className="p-8 text-center card-hover bg-white/80 backdrop-blur-sm">
              <Star className="h-16 w-16 text-accent3 mx-auto mb-6" />
              <h3 className="text-3xl font-bold mb-2">95%</h3>
              <p className="text-gray-600">Success Rate</p>
            </Card> */}

          {/* <div className="grid gap-8   md:grid-cols-3">
            <img src="/Topper/1.png" className="h-full  card-hover  " alt="" />
            <img src="/Topper/2.png" className="h-fit card-hover " alt="" />
            <img src="/Topper/3.png" className="h-fit card-hover " alt="" />
            <img src="/Topper/4.png" className="h-fit card-hover " alt="" />
            <img src="/Topper/5.png" className="h-fit card-hover " alt="" />
            <img src="/Topper/6.png" className="h-fit card-hover " alt="" />
            <img src="/Topper/7.png" className="h-fit card-hover " alt="" />
            <img src="/Topper/8.png" className="h-fit card-hover " alt="" />
            <img src="/Topper/9.png" className="h-fit card-hover " alt="" />
            <img src="/Topper/10.png" className="h-fit card-hover " alt="" />
            <img src="/Topper/11.png" className="h-fit card-hover " alt="" />
            <img src="/Topper/12.png" className="h-fit card-hover " alt="" /> */}

          {/* <Card className="p-8 text-center card-hover bg-white/80 backdrop-blur-sm">
              <Award className="h-16 w-16 text-accent2 mx-auto mb-6" />
              <h3 className="text-3xl font-bold mb-2">1000+</h3>
              <p className="text-gray-600">NEET Qualifiers</p>
            </Card>
            <Card className="p-8 text-center card-hover bg-white/80 backdrop-blur-sm">
              <Star className="h-16 w-16 text-accent3 mx-auto mb-6" />
              <h3 className="text-3xl font-bold mb-2">95%</h3>
              <p className="text-gray-600">Success Rate</p>
            </Card> */}
          {/* </div> */}
         
        </div>
      </section>
            
          </div>
          
        </div>
      
      </section>


      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Enroll</h3>
              <p className="text-gray-600">Select a course that matches your goals.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Learn</h3>
              <p className="text-gray-600">Expert faculty provides in-depth subject knowledge.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Practice</h3>
              <p className="text-gray-600">Mock tests, doubt-solving, and regular assessments.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Succeed</h3>
              <p className="text-gray-600">Achieve top ranks in competitive exams.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">Integrated Academy Programs</h2>
          <p className="text-lg text-center text-gray-700 mb-12">
            The academy's integrated programs combine schooling with coaching
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <BookOpen className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Foundation 2-Year Course</h3>
              <p className="text-gray-600 mb-4">
                Designed for students moving from Class X to XI, this program integrates regular schooling 
                with coaching to prepare for competitive exams.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span>NEET/JEE/CEE preparation</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Pre-foundation Integrated</h3>
              <p className="text-gray-600 mb-4">
                Specially designed for classes 8, 9, and 10 to build a strong academic foundation 
                and excel in competitive exams.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Strong foundation building</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Pre-Foundation 4-Year Course</h3>
              <p className="text-gray-600 mb-4">
                Targeting students progressing from Class VIII to IX, this long-term program lays a solid 
                foundation for various competitive examinations.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span>NEET/JEE/NTSE/KVPY/Olympiads</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section id="facilities" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">Our Facilities</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <School className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Hostel</h3>
              <p className="text-gray-600">With hygienic food</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Security</h3>
              <p className="text-gray-600">24x7 CCTV monitoring</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Microscope className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Lab Facilities</h3>
              <p className="text-gray-600">Modern equipment</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Scholarships</h3>
              <p className="text-gray-600">For meritorious students</p>
            </div>
          </div>
        </div>
      </section>
{/* Student Testimonial */}
<section id="testimonial" className="py-16 bg-white">

        <div className="text-center mt-8 flex flex-col items-center justify-center">
            <h1 className="text-4xl pt-25 gradient-text font-bold">
              Topper&apos;s Speak
            </h1>

            {/* <EmblaCarousel slides={testimonials} options={OPTIONS} /> */}

            <CarouselDemo />
          </div>
</section>
      {/* FAQs Section */}
      <section id="faqs" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">What makes SPM & Lalan's Academy different?</h3>
              <p className="text-gray-600">Experienced faculty, strong results, and structured mentorship.</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Are online classes available?</h3>
              <p className="text-gray-600">Yes, we offer both online and offline options.</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">How can I enroll?</h3>
              <p className="text-gray-600">Register online or visit our center in Guwahati.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to Start Your Journey?</h2>
          <a href="#contact" className="inline-block bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold px-8 py-4 rounded-md transition-colors text-lg">
            Book Free Counselling Session
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">Contact Us</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold ">Get in Touch</h3>
              {/* <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-blue-600 mr-4" />
                  <span>+91 1234567890</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-blue-600 mr-4" />
                  <span>info@spmandlalans.com</span>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-blue-600 mr-4 mt-1" />
                  <span>123 Education Hub, Guwahati, Assam</span>
                </div>
              </div> */}
            </div>
            
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Name</label>
                <input type="text" className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Phone</label>
                <input type="tel" className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea rows={4} className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <BookOpen className="h-8 w-8 mr-2" />
                <h3 className="text-xl font-bold">SPM & Lalan's Academy</h3>
              </div>
              <p className="text-gray-400">Empowering students to achieve their dreams through quality education.</p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#courses" className="text-gray-400 hover:text-white transition-colors">Courses</a></li>
                <li><a href="#facilities" className="text-gray-400 hover:text-white transition-colors">Facilities</a></li>
                <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonials</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Programs</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Foundation Course</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pre-foundation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">4-Year Program</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Phone className="h-5 w-5 mr-2 text-gray-400" />
                  <span className="text-gray-400">+91 1234567890</span>
                </li>
                <li className="flex items-center">
                  <Mail className="h-5 w-5 mr-2 text-gray-400" />
                  <span className="text-gray-400">info@spmandlalans.com</span>
                </li>
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 mr-2 text-gray-400 mt-1" />
                  <span className="text-gray-400">123 Education Hub, Guwahati, Assam</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">&copy; {new Date().getFullYear()} SPM & Lalan's Academy. All rights reserved.</p>
          </div>
        </div>
      </footer> */}
    </div>
  );
}

export default App;