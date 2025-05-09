import React from 'react';
import { HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const faqs: FAQItem[] = [
    {
      question: "What makes SPM & LALAN'S Coaching the best choice for JEE preparation in Guwahati?",
      answer: "SPM & LALAN'S Coaching stands out for its proven track record of top ranks, experienced faculty, integrated learning approach, and modern infrastructure, all focused on student success in JEE and CEE exams."
    },
    {
      question: "Do you provide integrated schooling with JEE coaching?",
      answer: "Yes, we offer an integrated school + coaching program that aligns CBSE and State Board syllabi with JEE preparation, saving time and reducing stress."
    },
    {
      question: "What kind of support is provided for students in the Super-30 Program?",
      answer: "The Super-30 program is designed for high-potential students and provides personalized mentorship, a structured preparation journey, and 100% scholarship support, including a fully residential program."
    },
    {
      question: "How are students assessed and how often are tests conducted?",
      answer: "We conduct weekly, monthly, and full-length mock tests to track performance, provide timely feedback, and help students identify areas for improvement."
    },
    {
      question: "What is the fee structure at SPM & LALAN'S Coaching?",
      answer: "Our fee structure is designed to be affordable while maintaining the highest standards of education. We also offer merit-based scholarships to deserving students."
    },
    {
      question: "Do you offer crash courses for JEE preparation?",
      answer: "Yes, we offer crash courses for intensive and rapid revision before the JEE exam, helping students focus on key topics for better performance."
    },
    {
      question: "How is personalized mentorship provided to students?",
      answer: "Each student receives individual attention from our experienced faculty, who help identify learning challenges and provide personalized support and motivation."
    },
    {
      question: "Are the faculty members experienced in coaching for JEE?",
      answer: "Yes, our faculty members are highly experienced subject experts with years of successful teaching experience in JEE coaching, known for simplifying complex concepts."
    },
    {
      question: "Does SPM & LALAN's Coaching offer hostel facilities?",
      answer: "Yes, we provide fully residential programs with hostel facilities, ensuring a disciplined and focused learning environment for our students."
    },
    {
      question: "How can I enroll for the JEE program at SPM & LALAN'S Coaching?",
      answer: "You can enroll online or visit our centre in Guwahati. Admissions for the 2025 batch are now open. Call us or visit our website to secure your seat!"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#184587] mb-4">Frequently Asked Questions</h2>
          <div className="w-24 h-1 bg-[#F4D605] mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our JEE coaching programs
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <HelpCircle className="h-6 w-6 text-[#184587]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#184587] mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;