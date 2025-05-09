import React from 'react';
import { Trophy, GraduationCap, Building2 } from 'lucide-react';

interface StatProps {
  value: string;
  label: string;
  icon: React.ReactNode;
}

const StatCard: React.FC<StatProps> = ({ value, label, icon }) => {
  return (
    <div className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="text-[#F4D605] flex justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-3xl font-bold text-[#184587] mb-2">{value}</h3>
      <p className="text-gray-600">{label}</p>
    </div>
  );
};

const Results: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#184587] mb-4">Our Results Speak</h2>
          <div className="w-24 h-1 bg-[#F4D605] mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Setting the benchmark for NEET coaching excellence in Assam
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <StatCard
            value="85%+"
            label="Selection Rate in NEET"
            icon={<Trophy className="h-12 w-12" />}
          />
          <StatCard
            value="1000+"
            label="Students Selected in Medical Colleges"
            icon={<GraduationCap className="h-12 w-12" />}
          />
          <StatCard
            value="100%"
            label="Government Seat Focus"
            icon={<Building2 className="h-12 w-12" />}
          />
        </div>

        <div className="bg-[#184587] rounded-lg p-8 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Consistently Outstanding Results</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-[#F4D605] mr-2">•</span>
                  Highest NEET selection rate among coaching institutes in Assam
                </li>
                <li className="flex items-start">
                  <span className="text-[#F4D605] mr-2">•</span>
                  Multiple students securing top All India Ranks
                </li>
                <li className="flex items-start">
                  <span className="text-[#F4D605] mr-2">•</span>
                  Special focus on securing NEET UG government seats
                </li>
              </ul>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <h4 className="text-xl font-bold mb-4 text-[#F4D605]">2023 Highlights</h4>
              <div className="space-y-3">
                <p className="flex justify-between">
                  <span>Total Selections</span>
                  <span className="font-bold">250+</span>
                </p>
                <p className="flex justify-between">
                  <span>Government College Admissions</span>
                  <span className="font-bold">180+</span>
                </p>
                <p className="flex justify-between">
                  <span>Top 1000 AIR Achievers</span>
                  <span className="font-bold">25+</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;