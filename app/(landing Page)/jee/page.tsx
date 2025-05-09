"use client"
// import React, { useEffect } from 'react';

import Header from './components/Header';
import Hero from './components/Hero';
import Programs from './components/Programs';
import WhyChooseUs from './components/WhyChooseUs';
import Facilities from './components/Facilities';
import Results from './components/Results';
import Residential from './components/Residential';
import Testimonials from './components/Testimonials';
import Admission from './components/Admission';
import CallToAction from './components/CallToAction';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import { CarouselDemo } from '../integrated/components/carouselTestimonials';

function App() {
//   useEffect(() => {
//     document.title = "SPM & LALAN'S Coaching | Best JEE Coaching in Guwahati";
    
//     // Smooth scrolling for anchor links
//     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//       anchor.addEventListener('click', function(e) {
//         e.preventDefault();
//         const target = document.querySelector(this.getAttribute('href') as string);
//         if (target) {
//           window.scrollTo({
//             top: (target as HTMLElement).offsetTop - 80,
//             behavior: 'smooth'
//           });
//         }
//       });
//     });
//   }, []);

  return (
    <div className="font-sans">
      {/* <Header /> */}
      <main>
        <Hero />
        <WhyChooseUs />
        <Programs />
        <Results />
        <Residential />
        <Facilities />
        <CarouselDemo />
        {/* <Testimonials /> */}
        {/* <Admission /> */}
        <FAQ />
        <CallToAction />
        {/* <Contact /> */}
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;