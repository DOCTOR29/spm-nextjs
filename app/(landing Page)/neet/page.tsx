'use client'

import React, { useEffect } from 'react';
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
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    document.title = "PM & LALAN'S Coaching | Best NEET Coaching in Guwahati";
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(this: HTMLAnchorElement, e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href') as string);
        if (target) {
          window.scrollTo({
            top: (target as HTMLElement).offsetTop - 80,
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <div className="font-sans">
      {/* <Header /> */}
      <main>
        <Hero />
        <Programs />
        <WhyChooseUs />
        <Results />
        <Residential />
        <Facilities />
        <Testimonials />
        <Admission />
        <CallToAction />
        <Contact />
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;