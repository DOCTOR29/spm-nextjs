import React from 'react';
import { Star, Quote } from 'lucide-react';
import { CarouselDemo } from '../../spm-lalans/components/carouselTestimonials';

interface TestimonialProps {
  name: string;
  qualification: string;
  message: string;
  rating: number;
  image: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ name, qualification, message, rating, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 relative">
      <div className="absolute top-6 right-6 text-[#F4D605]">
        <Quote className="h-12 w-12 opacity-20" />
      </div>
      <div className="flex items-center mb-4">
        <img 
          src={image} 
          alt={name} 
          className="w-16 h-16 rounded-full object-cover border-2 border-[#184587]"
        />
        <div className="ml-4">
          <h4 className="font-bold text-[#184587]">{name}</h4>
          <p className="text-gray-600 text-sm">{qualification}</p>
          <div className="flex mt-1">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`h-4 w-4 ${i < rating ? 'text-[#F4D605] fill-[#F4D605]' : 'text-gray-300'}`} 
              />
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-600 italic relative z-10">{message}</p>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      qualification: "AIIMS Delhi, Batch of 2022",
      message: "PM & LALAN'S Coaching transformed my NEET preparation with their structured approach and dedicated faculty. Their test series was particularly helpful in improving my score.",
      rating: 5,
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      name: "Rahul Dutta",
      qualification: "GMC Guwahati, Batch of 2023",
      message: "The integrated approach of board and NEET preparation saved me a lot of time. The faculty members are extremely supportive and always available for doubt clearing.",
      rating: 5,
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      name: "Ananya Borah",
      qualification: "NEET AIR 542, Batch of 2023",
      message: "I joined the dropper batch after missing my cutoff, and the personalized attention helped me improve my rank significantly. Their study material is excellent.",
      rating: 4,
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#184587] mb-4">Success Stories</h2>
          <div className="w-24 h-1 bg-[#F4D605] mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Hear from our alumni who have successfully achieved their NEET dreams
          </p>
        </div>

        <div className="w-full max-w-7xl mx-auto">
                 <CarouselDemo />
          {/* {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              name={testimonial.name}
              qualification={testimonial.qualification}
              message={testimonial.message}
              rating={testimonial.rating}
              image={testimonial.image}
            />
          ))} */}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;