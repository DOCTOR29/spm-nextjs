"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  GraduationCap, 
  Users, 
  BookOpen, 
  Trophy, 
  CheckCircle, 
  Star, 
  BrainCircuit,
  Clock,
  Calculator,
  Building,
  Microscope,
  Wallet,
  Target,
  Award,
  Calendar,
  BarChart,
  Lightbulb,
  BookCheck,
  Brain,
  School
} from "lucide-react";
import EnquiryForm from "../component/EnquiryForm";

export default function Home() {
  const urlAnchor = '#join-us'
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-primary py-20 text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center text-center">
            <h1 className="mb-6 text-4xl  md:text-6xl">
              SPM and LALAN&apos;s
              <span className="block font-semibold text-secondary mt-2">
                The Best <strong>JEE</strong> and <strong>NEET</strong> Coaching in Guwahati
              </span>
            </h1>
            <p className="mb-8 max-w-3xl text-lg opacity-90">
              Lalans Coaching is a top-rated JEE coaching centre in Guwahati and a trusted NEET coaching centre in Guwahati known for its exceptional teaching methods, expert faculty, and outstanding student results. With a proven track record of success in JEE and NEET exams, we ensure that every student gets the best guidance to achieve their dreams. Our student-first approach, comprehensive study materials, and personalized learning plans make us stand out as the best coaching institute in Guwahati for JEE and NEET.
            </p>
            <div className="grid gap-6 md:grid-cols-2 max-w-2xl w-full">
              <a href={`${urlAnchor}`}  target="_parent" >
              <Button className="bg-secondary w-full text-primary hover:bg-secondary/90 text-lg px-8 py-6">
                Start Your Success Journey
              </Button>
              </a>
              <a href={`${urlAnchor}`} target="_parent" >
              <Button variant="outline" className="bg-white/10 w-full text-white hover:bg-white/20 text-lg px-8 py-6">
                Learn More
              </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Key Benefits</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <Trophy className="h-8 w-8 text-primary" />,
                title: "Top JEE and NEET Results",
                description: "Multiple top rankers in Guwahati",
              },
              {
                icon: <Brain className="h-8 w-8 text-primary" />,
                title: "Personalized Learning Plans",
                description: "Customized for every student",
              },
              {
                icon: <BookOpen className="h-8 w-8 text-primary" />,
                title: "Comprehensive Materials",
                description: "Complete study materials and mock tests",
              },
              {
                icon: <Wallet className="h-8 w-8 text-primary" />,
                title: "Affordable Fees",
                description: "Flexible payment options available",
              },
            ].map((benefit, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="mb-2 text-xl font-semibold">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">
            Why We&apos;re the Best Coaching Centre in Guwahati for JEE and NEET
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="p-8">
              <Trophy className="h-12 w-12 text-secondary mb-4" />
              <h3 className="text-2xl font-bold mb-4">Top Results in Guwahati</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                  <span>Multiple top rankers in JEE and NEET</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                  <span>Consistently high success rates</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                  <span>Result-oriented approach</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8">
              <Users className="h-12 w-12 text-secondary mb-4" />
              <h3 className="text-2xl font-bold mb-4">Expert Faculty</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                  <span>IITians and doctors as instructors</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                  <span>One-on-one mentorship</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                  <span>Small batch sizes</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8">
              <BookCheck className="h-12 w-12 text-secondary mb-4" />
              <h3 className="text-2xl font-bold mb-4">Study Materials</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                  <span>Comprehensive study materials</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                  <span>Regular mock tests</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                  <span>Performance analytics</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8">
              <Building className="h-12 w-12 text-secondary mb-4" />
              <h3 className="text-2xl font-bold mb-4">Infrastructure</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                  <span>Smart classrooms</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                  <span>Modern study labs</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                  <span>Digital learning tools</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8">
              <Wallet className="h-12 w-12 text-secondary mb-4" />
              <h3 className="text-2xl font-bold mb-4">Affordable Fees</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                  <span>Competitive pricing</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                  <span>Merit-based scholarships</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                  <span>Flexible EMI options</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8">
              <Target className="h-12 w-12 text-secondary mb-4" />
              <h3 className="text-2xl font-bold mb-4">Performance Tracking</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                  <span>Weekly assessments</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                  <span>Detailed feedback</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                  <span>Progress monitoring</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">
            Our Comprehensive Programs
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="p-8">
              <Calculator className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-2xl font-bold mb-4">Foundation Course</h3>
              <h4 className="text-lg font-semibold mb-4">Class 11 & 12</h4>
              <p className="text-gray-600 mb-6">
                Designed for early-stage preparation, this program builds a strong foundation for JEE and NEET aspirants.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                  <span>Early competitive edge</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                  <span>Complete syllabus coverage</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                  <span>Regular assessments</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8">
              <BrainCircuit className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-2xl font-bold mb-4">One-Year Course</h3>
              <h4 className="text-lg font-semibold mb-4">For Repeaters</h4>
              <p className="text-gray-600 mb-6">
                Aimed at students retaking JEE or NEET, this course helps them improve scores through intensive training.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                  <span>Focus on weak areas</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                  <span>Regular mock tests</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                  <span>Detailed feedback</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8">
              <Clock className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-2xl font-bold mb-4">Weekend Batches</h3>
              <h4 className="text-lg font-semibold mb-4">Flexible Schedule</h4>
              <p className="text-gray-600 mb-6">
                Special batches for students needing flexible schedules with weekend and evening classes.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                  <span>Convenient timings</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                  <span>Same quality education</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                  <span>Complete coverage</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">
            Why Choose Us Over Others
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg shadow-md">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="p-4 text-left">Feature</th>
                  <th className="p-4 text-left">Lalans Coaching</th>
                  <th className="p-4 text-left">Other Institutes</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Student-to-Teacher Ratio", "Low (More Personal Attention)", "High"],
                  ["Faculty Quality", "Highly Experienced & IITians/Doctors", "Mixed"],
                  ["Mock Tests & Analysis", "Weekly, AI-Based Performance Reports", "Limited"],
                  ["Study Materials", "Comprehensive, Updated Regularly", "Generic"],
                  ["Fees", "Affordable with Scholarships", "Expensive"],
                  ["Success Rate", "High", "Moderate"],
                ].map((row, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-4 font-medium">{row[0]}</td>
                    <td className="p-4 text-primary">
                      <div className="flex items-center gap-2">
                        <Star className="h-4 w-4 text-secondary" />
                        {row[1]}
                      </div>
                    </td>
                    <td className="p-4 text-gray-600">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* JEE & NEET Features */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6">
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-primary">Best for JEE Coaching</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0" />
                  <span>Customized Study Plans based on student strengths</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0" />
                  <span>Interactive Learning Sessions with active participation</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0" />
                  <span>High Success Rate with proven results</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0" />
                  <span>Scholarship Options for deserving students</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-primary">Best for NEET Coaching</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0" />
                  <span>Expert Faculty including top medical educators</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0" />
                  <span>Comprehensive NEET syllabus coverage</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0" />
                  <span>Regular Mock Tests with performance analysis</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0" />
                  <span>Award-Winning coaching methodology</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 text-white" id="join-us">
        <div className="container mx-auto px-6 text-center">
          <h2 className="mb-6 text-3xl font-bold">
            Join the Best Coaching Institute in Guwahati for JEE and NEET Today!
          </h2>
          <p className="mb-8 text-lg opacity-90 max-w-2xl mx-auto">
            At Lalans Coaching, we are committed to shaping the future of students by providing top-notch JEE and NEET coaching in Guwahati. Whether you&apos;re aiming for IIT, AIIMS, or top medical colleges, our personalized learning approach, expert faculty, and advanced infrastructure will guide you toward success.
          </p>
          <div className="flex gap-4 justify-center">
            {/* <Button className="bg-secondary text-primary hover:bg-secondary/90 text-lg px-8 py-6">
              Enroll Now
            </Button>
            <Button className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-6">
              Book Free Consultation
            </Button> */}
          </div>
          <EnquiryForm/>
        </div>
      </section>
    </main>
  );
}