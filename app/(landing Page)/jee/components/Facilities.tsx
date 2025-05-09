import React from 'react';
import { Monitor, FlaskRound as Flask, Clock } from 'lucide-react';

interface FacilityProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  imageUrl: string;
}

const FacilityCard: React.FC<FacilityProps> = ({ title, description, icon, imageUrl }) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-md group">
      <div className="h-48 overflow-hidden relative">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#184587]/80 to-transparent opacity-90"></div>
        <div className="absolute bottom-0 left-0 p-4 text-white">
          <div className="flex items-center">
            <div className="mr-3 text-[#F4D605]">{icon}</div>
            <h3 className="font-bold text-lg">{title}</h3>
          </div>
        </div>
      </div>
      <div className="p-4 bg-white">
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const Facilities: React.FC = () => {
  const facilities = [
    {
      title: "Modern Digital Classrooms",
      description: "Equipped with the latest teaching technologies to enhance the learning experience.",
      icon: <Monitor className="h-6 w-6" />,
      imageUrl: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg",
    },
    {
      title: "Fully Equipped Labs",
      description: "State-of-the-art laboratories for enhanced practical learning with hands-on experience.",
      icon: <Flask className="h-6 w-6" />,
      imageUrl: "https://images.pexels.com/photos/8850742/pexels-photo-8850742.jpeg",
    },
    {
      title: "Regular Doubt Sessions",
      description: "Dedicated time slots for personalized doubt clearing and conceptual reinforcement.",
      icon: <Clock className="h-6 w-6" />,
      imageUrl: "https://images.pexels.com/photos/8199159/pexels-photo-8199159.jpeg",
    },
  ];

  return (
    <section id="facilities" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#184587] mb-4">Facilities and Support</h2>
          <div className="w-24 h-1 bg-[#F4D605] mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Creating an optimal learning environment to help students excel in their NEET preparation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {facilities.map((facility, index) => (
            <FacilityCard 
              key={index}
              title={facility.title}
              description={facility.description}
              icon={facility.icon}
              imageUrl={facility.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;