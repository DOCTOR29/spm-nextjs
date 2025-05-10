import React from 'react';
import { Award, Users, Book, School, LineChart, MessageSquare, UserPlus, DollarSign, Briefcase, Brain } from 'lucide-react';

interface FeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const FeatureCard: React.FC<FeatureProps> = ({ title, description, icon }) => {
  return (
    <div className="flex gap-4 p-4 rounded-lg hover:bg-white hover:shadow-md transition-all duration-300">
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#184587]/10 flex items-center justify-center text-[#184587]">
        {icon}
      </div>
      <div>
        <h3 className="font-bold text-[#184587] mb-1">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

const WhyChooseUs: React.FC = () => {
  const features = [
    {
      title: "Proven Track Record",
      description: "A leading name in JEE coaching in Guwahati, we've consistently produced top rankers.",
      icon: <Award className="h-6 w-6" />,
    },
    {
      title: "Comprehensive Curriculum",
      description: "Covers the complete JEE syllabus with a focus on both theoretical clarity and practical applications.",
      icon: <Book className="h-6 w-6" />,
    },
    {
      title: "Personalized Mentorship",
      description: "Each student receives individual academic support and motivation to overcome learning challenges.",
      icon: <Users className="h-6 w-6" />,
    },
    {
      title: "Modern Infrastructure",
      description: "Well-equipped classrooms, laboratories, and digital facilities promote a distraction-free learning environment.",
      icon: <School className="h-6 w-6" />,
    },
    {
      title: "Regular Assessments",
      description: "Weekly and monthly tests to track progress and keep parents updated.",
      icon: <LineChart className="h-6 w-6" />,
    },
    {
      title: "Doubt Clearing Sessions",
      description: "Interactive sessions designed to strengthen conceptual understanding.",
      icon: <MessageSquare className="h-6 w-6" />,
    },
    {
      title: "Smart Learning Approach",
      description: "Focuses on conceptual clarity rather than rote memorization, promoting real understanding.",
      icon: <Brain className="h-6 w-6" />,
    },
    {
      title: "Affordable Fee Structure",
      description: "Top-tier JEE coaching at reasonable costs with merit-based scholarships available.",
      icon: <DollarSign className="h-6 w-6" />,
    },
  ];

  return (
    <section id="why-choose-us" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#184587] mb-4">Why Choose SPM & LALAN'S for JEE Preparation?</h2>
          <div className="w-24 h-1 bg-[#F4D605] mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Our proven methodology and student-centric approach have helped thousands of aspirants achieve their IIT dreams
          </p>
        </div>

        <div className="bg-gray-50 rounded-2xl p-6 md:p-8 lg:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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