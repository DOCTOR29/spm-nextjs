import React from 'react';
import { BookOpen, GraduationCap, Clock, Home, Users, Zap, ChevronRight } from 'lucide-react';
import { anchor } from './constant';

interface ProgramProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ProgramCard: React.FC<ProgramProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border-t-4 border-[#184587] relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-24 h-24 bg-[#F4D605]/10 rounded-bl-full transform translate-x-8 -translate-y-8 group-hover:translate-x-6 group-hover:-translate-y-6 transition-transform duration-300"></div>
      <div className="text-[#184587] mb-4">{icon}</div>
      <h3 className="text-lg font-bold text-[#184587] mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Programs: React.FC = () => {
  const programs = [
    {
      title: "Class X to XI Moving (JEE/Board)",
      description: "Foundation-building program tailored for early preparation in school and competitive exams.",
      icon: <BookOpen className="h-8 w-8" />,
    },
    {
      title: "Class XI to XII Moving (JEE/Board)",
      description: "Advanced-level learning with rigorous practice and performance tracking.",
      icon: <GraduationCap className="h-8 w-8" />,
    },
    {
      title: "Dropper/12th Appearing Batch",
      description: "A focused module with high-quality resources and expert strategies to improve rank.",
      icon: <Clock className="h-8 w-8" />,
    },
    {
      title: "Crash Course (JEE)",
      description: "Compact and intensive sessions designed for rapid revision before the exam.",
      icon: <Zap className="h-8 w-8" />,
    },
    {
      title: "Capsule Course (JEE)",
      description: "Short-term program targeting important and high-scoring topics.",
      icon: <Clock className="h-8 w-8" />,
    },
    {
      title: "Super-30 Programme (Residential)",
      description: "An exclusive batch for high-potential students with 100% scholarship support.",
      icon: <Home className="h-8 w-8" />,
    },
  ];

  return (
    <section id="programs" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#184587] mb-4">Our Specialized Offerings</h2>
          <div className="w-24 h-1 bg-[#F4D605] mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Comprehensive coaching programs designed to help you excel in JEE and secure your engineering career
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {programs.map((program, index) => (
            <ProgramCard 
              key={index}
              title={program.title}
              description={program.description}
              icon={program.icon}
            />
          ))}
          
        </div>

       <a 
              href={anchor} 
              className="bg-[#F4D605] mt-10 m-auto max-w-lg hover:bg-[#F4D605]/90 text-[#184587] font-bold py-3 px-6 rounded-md transition-all duration-300 text-center flex items-center justify-center "
            >
              Enroll Now
              <ChevronRight className="ml-1 h-5 w-5" />
            </a>  
      </div>
      
    </section>
  );
};

export default Programs;