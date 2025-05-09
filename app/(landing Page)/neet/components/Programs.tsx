import React from 'react';
import { BookOpen, GraduationCap, Clock, Home, Users, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { anchor } from '../constants';

interface ProgramProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  gradient: string;
  duration: string;
  students: string;
}

const ProgramCard: React.FC<ProgramProps> = ({ 
  title, 
  description, 
  icon, 
  image, 
  gradient,
  duration,
  students
}) => {
  return (
    <div className={`relative rounded-xl overflow-hidden group transition-all duration-500 hover:scale-[1.02] ${gradient}`}>
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative p-6 h-full flex flex-col">
        {/* Icon */}
        <div className="w-14 h-14 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:bg-white/20 transition-all duration-300">
          <div className="text-white">{icon}</div>
        </div>

        {/* Title and Description */}
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#FFD700] transition-colors duration-300">{title}</h3>
        <p className="text-white/80 mb-6 flex-grow">{description}</p>

        {/* Stats */}
        <div className="flex gap-4 mb-4">
          <div className="flex items-center text-white/80 text-sm">
            <Clock className="h-4 w-4 mr-1" />
            {duration}
          </div>
          <div className="flex items-center text-white/80 text-sm">
            <Users className="h-4 w-4 mr-1" />
            {students}
          </div>
        </div>

        {/* CTA Button */}
        <a 
          href={anchor}
          className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-all duration-300 group-hover:translate-x-1"
        >
          Enroll Now
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
        </a>
      </div>
    </div>
  );
};

const Programs: React.FC = () => {
  const programs = [
    {
      title: "Class X to XI Moving (NEET + Boards)",
      description: "A strong foundation program balancing NEET and board exam preparation with expert guidance.",
      icon: <BookOpen className="h-6 w-6 text-white" />,
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1000",
      gradient: "bg-gradient-to-br from-[#60a5fa] to-[#3b82f6]",
      duration: "1 Year",
      students: "30 Students"
    },
    {
      title: "Class XI to XII Moving (NEET + Boards)",
      description: "Focused on conceptual clarity with intensive preparation for both NEET and boards.",
      icon: <GraduationCap className="h-6 w-6 text-white" />,
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1000",
      gradient: "bg-gradient-to-br from-[#a78bfa] to-[#8b5cf6]",
      duration: "1 Year",
      students: "30 Students"
    },
    {
      title: "12th Pass / Dropper Batch (NEET Repeaters)",
      description: "Tailored for repeaters with specialized modules and strategic exam training.",
      icon: <Clock className="h-6 w-6 text-white" />,
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000",
      gradient: "bg-gradient-to-br from-[#34d399] to-[#10b981]",
      duration: "1 Year",
      students: "25 Students"
    },
    {
      title: "Crash Course for NEET",
      description: "A short-term, intensive program emphasizing rapid revision and precision.",
      icon: <Clock className="h-6 w-6 text-white" />,
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000",
      gradient: "bg-gradient-to-br from-[#f87171] to-[#ef4444]",
      duration: "3 Months",
      students: "20 Students"
    },
    {
      title: "Super-30 NEET Batch (Fully Residential)",
      description: "An exclusive residential mentorship program for top-performing students with full scholarship support.",
      icon: <Home className="h-6 w-6 text-white" />,
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1000",
      gradient: "bg-gradient-to-br from-[#fbbf24] to-[#f59e0b]",
      duration: "1 Year",
      students: "30 Students"
    },
  ];

  return (
    <section id="programs" className="relative py-16 md:py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNGRkYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0di00aC0ydjRoLTR2Mmg0djRoMnYtNGg0di0yaC00em0wLTMwVjBoLTJ2NGgtNHYyaDR2NGgydi00aDR2LTJoLTR6TTYgMzR2LTRINHY0SDB2Mmg0djRoMnYtNGg0di0ySDZ6TTYgNFYwSDR2NEgwdjJoNHY0aDJWNmg0VjRINnoiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
      
      {/* Theme Color Background Sections */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full "></div>
       
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#184587] mb-4">
            <span className="bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FFD700] bg-clip-text text-transparent animate-gradient">
              Programs Offered
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#FFD700] to-[#FFA500] mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Comprehensive coaching programs designed to help you excel in NEET and secure your medical career
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {programs.map((program, index) => (
            <ProgramCard 
              key={index}
              {...program}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;