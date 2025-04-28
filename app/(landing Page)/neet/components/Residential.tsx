import React from 'react';
import { Home, BookOpen, Bell, Users } from 'lucide-react';

interface FeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const FeatureCard: React.FC<FeatureProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300">
      <div className="text-[#184587] mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-[#184587] mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Residential: React.FC = () => {
  const features = [
    {
      title: "Disciplined Environment",
      description: "Structured daily routine fostering academic excellence and personal growth",
      icon: <Home className="h-8 w-8" />,
    },
    {
      title: "Regular Performance Updates",
      description: "Detailed parental updates on academic progress and overall development",
      icon: <Bell className="h-8 w-8" />,
    },
    {
      title: "Comprehensive Development",
      description: "Focus on academics, motivation, and essential soft skills",
      icon: <BookOpen className="h-8 w-8" />,
    },
    {
      title: "Personalized Mentoring",
      description: "Individual attention and guidance from experienced faculty members",
      icon: <Users className="h-8 w-8" />,
    },
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/2982449/pexels-photo-2982449.jpeg')] bg-cover bg-center opacity-10"></div>
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#184587] mb-4">Residential Campus</h2>
          <div className="w-24 h-1 bg-[#F4D605] mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            A conducive environment for focused NEET preparation with comprehensive support
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>

        <div className="bg-[#184587] rounded-lg p-8 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Residential Facilities</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-[#F4D605] mr-2">•</span>
                  Modern, well-furnished accommodation
                </li>
                <li className="flex items-start">
                  <span className="text-[#F4D605] mr-2">•</span>
                  Nutritious and balanced meals
                </li>
                <li className="flex items-start">
                  <span className="text-[#F4D605] mr-2">•</span>
                  24/7 security and supervision
                </li>
                <li className="flex items-start">
                  <span className="text-[#F4D605] mr-2">•</span>
                  Regular health check-ups
                </li>
                <li className="flex items-start">
                  <span className="text-[#F4D605] mr-2">•</span>
                  Indoor and outdoor recreation facilities
                </li>
              </ul>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <h4 className="text-xl font-bold mb-4">Daily Schedule Highlights</h4>
              <div className="space-y-3">
                <p className="flex justify-between">
                  <span>Morning Study</span>
                  <span>5:30 AM - 7:30 AM</span>
                </p>
                <p className="flex justify-between">
                  <span>Regular Classes</span>
                  <span>8:30 AM - 4:30 PM</span>
                </p>
                <p className="flex justify-between">
                  <span>Evening Study</span>
                  <span>6:00 PM - 9:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span>Doubt Clearing</span>
                  <span>9:00 PM - 10:00 PM</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Residential;