import React, { useState, useEffect } from 'react';
import { ChevronRight, Award, Star, ChevronLeft, ChevronRight as ChevronRightIcon } from 'lucide-react';
import { anchor } from '../constants';


const slides = [
  {
    title: "SPM & LALAN'S Coaching:",
    subtitle: "Best NEET Coaching in Guwahati",
    description: "Your Gateway to a Successful Medical Career",
    image: "https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg",
    features: [
      { icon: <Star className="h-5 w-5 text-[#FFD700] mr-2" />, text: "Exceptional NEET Results" },
      { icon: <Award className="h-5 w-5 text-[#FFD700] mr-2" />, text: "Expert Faculty" }
    ]
  },
  {
    title: "Comprehensive NEET Preparation",
    subtitle: "Integrated Schooling & Coaching",
    description: "Combining academic excellence with NEET preparation",
    image: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg",
    features: [
      { icon: <Star className="h-5 w-5 text-[#FFD700] mr-2" />, text: "Modern Digital Classrooms" },
      { icon: <Award className="h-5 w-5 text-[#FFD700] mr-2" />, text: "State-of-the-art Labs" }
    ]
  },
  {
    title: "Personalized Learning Experience",
    subtitle: "Small Batch Sizes",
    description: "Focused mentoring for every student",
    image: "https://images.pexels.com/photos/8199159/pexels-photo-8199159.jpeg",
    features: [
      { icon: <Star className="h-5 w-5 text-[#FFD700] mr-2" />, text: "Individual Attention" },
      { icon: <Award className="h-5 w-5 text-[#FFD700] mr-2" />, text: "Regular Doubt Sessions" }
    ]
  }
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section 
      id="home" 
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNGRkYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0di00aC0ydjRoLTR2Mmg0djRoMnYtNGg0di0yaC00em0wLTMwVjBoLTJ2NGgtNHYyaDR2NGgydi00aDR2LTJoLTR6TTYgMzR2LTRINHY0SDB2Mmg0djRoMnYtNGg0di0ySDZ6TTYgNFYwSDR2NEgwdjJoNHY0aDJWNmg0VjRINnoiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
      
      {/* Theme Color Background Sections */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#0a182d] to-blue-900"></div>
      </div>

      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500"
            style={{ 
              backgroundImage: `url(${slide.image})`,
              transform: index === currentSlide ? 'scale(1)' : 'scale(1.1)'
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-br from-[#184587]/80 to-[#1e55b3]/80"></div>
        </div>
      ))}

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto md:mx-0">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`transition-opacity duration-500 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0 absolute'
              }`}
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                <span className="text-white">{slide.title}</span>{' '}
                <span className="bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FFD700] bg-clip-text text-transparent animate-gradient">
                  {slide.subtitle}
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                {slide.description}
              </p>
              <div className="flex flex-wrap gap-3 mb-12">
                {slide.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white/20 transition-all duration-300">
                    {feature.icon}
                    <span className="text-white text-sm">{feature.text}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={anchor}
                  className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] hover:from-[#FFA500] hover:to-[#FFD700] text-[#184587] font-bold py-3 px-6 rounded-md transition-all duration-300 text-center flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Enroll Today
                  <ChevronRight className="ml-1 h-5 w-5" />
                </a>
                {/* <a 
                  href="#contact" 
                  className="bg-white hover:bg-white/90 text-[#184587] font-bold py-3 px-6 rounded-md transition-all duration-300 text-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Contact Us
                </a> */}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-[#FFD700] w-6' : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>

      {/* Arrow Navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all duration-300 z-20"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all duration-300 z-20"
      >
        <ChevronRightIcon className="h-6 w-6 text-white" />
      </button>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;