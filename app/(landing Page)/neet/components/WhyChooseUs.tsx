import React from 'react';
import { Award, Users, Book, School, LineChart, MessageSquare, UserPlus, DollarSign } from 'lucide-react';

interface FeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const FeatureCard: React.FC<FeatureProps> = ({ title, description, icon }) => {
  return (
    <div className="group flex gap-4 p-4 rounded-xl hover:bg-white/80 hover:shadow-lg transition-all duration-300 backdrop-blur-sm">
      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#184587]/20 to-[#F4D605]/10 flex items-center justify-center text-[#184587] group-hover:from-[#F4D605]/20 group-hover:to-[#184587]/10 transition-all duration-300">
        {icon}
      </div>
      <div>
        <h3 className="font-bold text-[#184587] mb-1 group-hover:text-[#F4D605] transition-colors duration-300">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

const WhyChooseUs: React.FC = () => {
  const features = [
    {
      title: "Outstanding Results Every Year",
      description: "Consistently delivering top NEET ranks with selections in premier government medical colleges.",
      icon: <Award className="h-6 w-6" />,
    },
    {
      title: "Experienced Faculty",
      description: "Highly qualified subject experts adept at simplifying complex NEET concepts.",
      icon: <Users className="h-6 w-6" />,
    },
    {
      title: "Comprehensive Curriculum",
      description: "Updated and NEET-aligned study materials covering NCERT and advanced topics.",
      icon: <Book className="h-6 w-6" />,
    },
    {
      title: "Integrated Schooling & Coaching Model",
      description: "Streamlined preparation with combined board and NEET coaching under one roof.",
      icon: <School className="h-6 w-6" />,
    },
    {
      title: "Rigorous Testing and Analysis",
      description: "Frequent weekly, monthly, and full-length mock tests with detailed performance insights.",
      icon: <LineChart className="h-6 w-6" />,
    },
    {
      title: "Doubt-Clearing & Revision Sessions",
      description: "Interactive sessions designed to strengthen conceptual understanding.",
      icon: <MessageSquare className="h-6 w-6" />,
    },
    {
      title: "Small Batch Sizes",
      description: "Focused mentoring for every student to maximize their performance.",
      icon: <UserPlus className="h-6 w-6" />,
    },
    {
      title: "Affordable Fee Structure",
      description: "Top-tier NEET coaching at a reasonable cost for aspiring medical students.",
      icon: <DollarSign className="h-6 w-6" />,
    },
  ];

  return (
    <section id="why-choose-us" className="relative py-16 md:py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNGRkYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0di00aC0ydjRoLTR2Mmg0djRoMnYtNGg0di0yaC00em0wLTMwVjBoLTJ2NGgtNHYyaDR2NGgydi00aDR2LTJoLTR6TTYgMzR2LTRINHY0SDB2Mmg0djRoMnYtNGg0di0ySDZ6TTYgNFYwSDR2NEgwdjJoNHY0aDJWNmg0VjRINnoiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
      
      {/* Theme Color Background Sections */}
      <div className="absolute inset-0">
       <div className="absolute top-0 left-0 w-full h-full bg-blue-50"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#184587] via-[#F4D605] to-[#184587] bg-clip-text text-transparent animate-gradient">
              Why Choose SPM & LALAN'S for NEET Preparation?
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#184587] to-[#F4D605] mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Our proven methodology and student-centric approach have helped thousands of aspirants achieve their NEET dreams
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 lg:p-10 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FeatureCard 
                key={index}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;