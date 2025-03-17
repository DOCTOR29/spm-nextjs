"use client";
// import 'style.css'
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
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-yellow-50">
      {/* Hero Section */}
      <section className="relative gradient-bg hero-pattern py-24 text-white">
        <div className="absolute inset-0 bg-primary opacity-90"></div>
        <div className="container mx-auto px-6 relative">
          <div className="flex flex-col items-center text-center">
            <div className="animate-float mb-8">
              <GraduationCap className="h-20 w-20 text-secondary" />
            </div>
            <h1 className="mb-6 text-4xl font-bold md:text-6xl">
              SPM and LALAN&apos;s
              <span className="block gradient-text mt-2 text-5xl md:text-7xl font-extrabold">
                The Best JEE and NEET Coaching in Guwahati
              </span>
            </h1>
            <p className="mb-8 max-w-3xl text-lg opacity-90 glass-effect p-6 rounded-xl">
              Lalans Coaching is a top-rated JEE coaching centre in Guwahati and a trusted NEET coaching centre in Guwahati known for its exceptional teaching methods, expert faculty, and outstanding student results. With a proven track record of success in JEE and NEET exams, we ensure that every student gets the best guidance to achieve their dreams.
            </p>
            <div className="grid gap-6 md:grid-cols-2 max-w-2xl w-full">
              <Button className="bg-secondary text-primary hover:bg-secondary/90 text-lg px-8 py-6 shadow-glow transform hover:scale-105 transition-all">
                Start Your Success Journey
              </Button>
              <Button variant="outline" className="glass-effect text-white hover:bg-white/20 text-lg px-8 py-6 transform hover:scale-105 transition-all">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-20 bg-secondary/10">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">
            <span className="gradient-text">Key Benefits</span>
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <Trophy className="h-12 w-12 text-accent1" />,
                title: "Top JEE and NEET Results",
                description: "Multiple top rankers in Guwahati",
                color: "bg-accent1/20",
              },
              {
                icon: <Brain className="h-12 w-12 text-accent2" />,
                title: "Personalized Learning Plans",
                description: "Customized for every student",
                color: "bg-accent2/10",
              },
              {
                icon: <BookOpen className="h-12 w-12 text-accent3" />,
                title: "Comprehensive Materials",
                description: "Complete study materials and mock tests",
                color: "bg-accent3/10",
              },
              {
                icon: <Wallet className="h-12 w-12 text-accent4" />,
                title: "Affordable Fees",
                description: "Flexible payment options available",
                color: "bg-accent4/10",
              },
            ].map((benefit, index) => (
              <Card key={index} className={`p-8 text-center card-hover ${benefit.color} border-none`}>
                <div className="mb-6 flex justify-center">
                  <div className="p-4 rounded-full bg-white shadow-lg">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="mb-4 text-2xl font-bold">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="gradient-text">Why We&apos;re the Best</span>
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="p-8 card-hover bg-white/80 backdrop-blur-sm">
              <Trophy className="h-16 w-16 text-accent1 mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-primary">Top Results in Guwahati</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-accent1" />
                  <span>Multiple top rankers in JEE and NEET</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-accent1" />
                  <span>Consistently high success rates</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-accent1" />
                  <span>Result-oriented approach</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 card-hover bg-white/80 backdrop-blur-sm">
              <Users className="h-16 w-16 text-accent2 mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-primary">Expert Faculty</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-accent2" />
                  <span>IITians and doctors as instructors</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-accent2" />
                  <span>One-on-one mentorship</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-accent2" />
                  <span>Small batch sizes</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 card-hover bg-white/80 backdrop-blur-sm">
              <BookCheck className="h-16 w-16 text-accent3 mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-primary">Study Materials</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-accent3" />
                  <span>Comprehensive study materials</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-accent3" />
                  <span>Regular mock tests</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-accent3" />
                  <span>Performance analytics</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 card-hover bg-white/80 backdrop-blur-sm">
              <Building className="h-16 w-16 text-accent4 mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-primary">Infrastructure</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-accent4" />
                  <span>Smart classrooms</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-accent4" />
                  <span>Modern study labs</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-accent4" />
                  <span>Digital learning tools</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 card-hover bg-white/80 backdrop-blur-sm">
              <Wallet className="h-16 w-16 text-accent1 mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-primary">Affordable Fees</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-accent1" />
                  <span>Competitive pricing</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-accent1" />
                  <span>Merit-based scholarships</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-accent1" />
                  <span>Flexible EMI options</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 card-hover bg-white/80 backdrop-blur-sm">
              <Target className="h-16 w-16 text-accent2 mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-primary">Performance Tracking</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-accent2" />
                  <span>Weekly assessments</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-accent2" />
                  <span>Detailed feedback</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-accent2" />
                  <span>Progress monitoring</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="section-pattern py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="gradient-text">Our Comprehensive Programs</span>
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="p-8 card-hover bg-white/80 backdrop-blur-sm border-t-4 border-accent1">
              <Calculator className="h-16 w-16 text-accent1 mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-primary">Foundation Course</h3>
              <h4 className="text-lg font-semibold mb-4 text-accent1">Class 11 & 12</h4>
              <p className="text-gray-600 mb-6">
                Designed for early-stage preparation, this program builds a strong foundation for JEE and NEET aspirants.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-accent1" />
                  <span>Early competitive edge</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-accent1" />
                  <span>Complete syllabus coverage</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-accent1" />
                  <span>Regular assessments</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 card-hover bg-white/80 backdrop-blur-sm border-t-4 border-accent2">
              <BrainCircuit className="h-16 w-16 text-accent2 mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-primary">One-Year Course</h3>
              <h4 className="text-lg font-semibold mb-4 text-accent2">For Repeaters</h4>
              <p className="text-gray-600 mb-6">
                Aimed at students retaking JEE or NEET, this course helps them improve scores through intensive training.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-accent2" />
                  <span>Focus on weak areas</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-accent2" />
                  <span>Regular mock tests</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-accent2" />
                  <span>Detailed feedback</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 card-hover bg-white/80 backdrop-blur-sm border-t-4 border-accent3">
              <Clock className="h-16 w-16 text-accent3 mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-primary">Weekend Batches</h3>
              <h4 className="text-lg font-semibold mb-4 text-accent3">Flexible Schedule</h4>
              <p className="text-gray-600 mb-6">
                Special batches for students needing flexible schedules with weekend and evening classes.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-accent3" />
                  <span>Convenient timings</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-accent3" />
                  <span>Same quality education</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-accent3" />
                  <span>Complete coverage</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="gradient-text">Why Choose Us Over Others</span>
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white/80 backdrop-blur-sm rounded-lg shadow-xl">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="p-6 text-left rounded-tl-lg">Feature</th>
                  <th className="p-6 text-left">Lalans Coaching</th>
                  <th className="p-6 text-left rounded-tr-lg">Other Institutes</th>
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
                  <tr key={index} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                    <td className="p-6 font-medium">{row[0]}</td>
                    <td className="p-6 text-primary">
                      <div className="flex items-center gap-2">
                        <Star className="h-5 w-5 text-secondary" />
                        {row[1]}
                      </div>
                    </td>
                    <td className="p-6 text-gray-600">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* JEE & NEET Features */}
      <section className="section-pattern py-20">
        <div className="container mx-auto px-6">
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="p-8 card-hover bg-white/80 backdrop-blur-sm border-t-4 border-accent1">
              <h3 className="text-2xl font-bold mb-6 gradient-text">Best for JEE Coaching</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-accent1 flex-shrink-0" />
                  <span>Customized Study Plans based on student strengths</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-accent1 flex-shrink-0" />
                  <span>Interactive Learning Sessions with active participation</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-accent1 flex-shrink-0" />
                  <span>High Success Rate with proven results</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-accent1 flex-shrink-0" />
                  <span>Scholarship Options for deserving students</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 card-hover bg-white/80 backdrop-blur-sm border-t-4 border-accent2">
              <h3 className="text-2xl font-bold mb-6 gradient-text">Best for NEET Coaching</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-accent2 flex-shrink-0" />
                  <span>Expert Faculty including top medical educators</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-accent2 flex-shrink-0" />
                  <span>Comprehensive NEET syllabus coverage</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-accent2 flex-shrink-0" />
                  <span>Regular Mock Tests with performance analysis</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-accent2 flex-shrink-0" />
                  <span>Award-Winning coaching methodology</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-bg hero-pattern py-20 text-white relative">
        <div className="absolute inset-0 bg-primary opacity-90"></div>
        <div className="container mx-auto px-6 relative text-center">
          <h2 className="mb-6 text-4xl font-bold">
            Join the Best Coaching Institute in Guwahati for JEE and NEET Today!
          </h2>
          <p className="mb-8 text-lg opacity-90 max-w-2xl mx-auto glass-effect p-6 rounded-xl">
            At Lalans Coaching, we are committed to shaping the future of students by providing top-notch JEE and NEET coaching in Guwahati. Whether you&apos;re aiming for IIT, AIIMS, or top medical colleges, our personalized learning approach, expert faculty, and advanced infrastructure will guide you toward success.
          </p>
          <div className="max-w-xl mx-auto  items-center justify-center">
            {/* <Button className="bg-secondary text-primary hover:bg-secondary/90 text-lg px-8 py-6 shadow-glow transform hover:scale-105 transition-all">
              Enroll Now
            </Button> */}
            {/* <Button className="glass-effect text-white hover:bg-white/20 text-lg px-8 py-6 transform hover:scale-105 transition-all">
              Book Free Consultation
            </Button> */}
            <EnquiryForm/>
          </div>
        </div>
      </section>
    </main>
  );
}