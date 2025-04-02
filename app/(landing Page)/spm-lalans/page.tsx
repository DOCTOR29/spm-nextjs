"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
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
  School,
  Home,
  Medal,
  Video,
  FileText,
  UserPlus,
  Rocket
} from "lucide-react";

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative gradient-bg hero-pattern py-24 text-white">
        <div className="absolute inset-0 bg-primary/90"></div>
        <div className="container mx-auto px-6 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <div className="animate-float mb-8">
                <GraduationCap className="h-20 w-20 text-secondary" />
              </div>
              <h1 className="mb-6 text-4xl font-bold md:text-6xl">
                Empowering Students for Excellence in Competitive Exams at
                <span className="block gradient-text mt-2 text-5xl md:text-7xl font-extrabold">
                  SPM & LALAN&apos;S Coaching
                </span>
              </h1>
              <p className="mb-8 text-lg opacity-90 glass-effect p-6 rounded-xl">
                Welcome to SPM & Lalan&apos;s Coaching for Success—Guwahati&apos;s No.1 Institute for JEE, NEET, Olympiad, NTSE, CUET, & More!
              </p>
            </div>
            <div className="glass-effect p-8 rounded-xl backdrop-blur-md">
              <h3 className="text-2xl font-bold mb-6 text-center">Start Your Journey Today</h3>
              <form className="space-y-4">
                <div>
                  <Input 
                    placeholder="Your Name" 
                    className="w-full bg-white/10 border-white/20 text-white placeholder:text-white/70"
                  />
                </div>
                <div>
                  <Input 
                    type="tel" 
                    placeholder="Phone Number" 
                    className="w-full bg-white/10 border-white/20 text-white placeholder:text-white/70"
                  />
                </div>
                <div>
                  <Input 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full bg-white/10 border-white/20 text-white placeholder:text-white/70"
                  />
                </div>
                <div>
                <Select>
                        <SelectTrigger className="w-full bg-white/10 border-white/20 ">
                            <SelectValue  placeholder="Select a Course" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                            <SelectLabel>Courses</SelectLabel>
                            <SelectItem value="apple">JEE</SelectItem>
                            <SelectItem value="banana">NEET</SelectItem>
                            <SelectItem value="blueberry">Olympiad</SelectItem>
                            <SelectItem value="grapes">NTSE</SelectItem>
                            <SelectItem value="pineapple">CUET</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                        </Select>
                </div>
                <Button className="w-full bg-secondary text-primary hover:bg-secondary/90 text-lg py-6 shadow-glow transform hover:scale-105 transition-all">
                  Apply Now
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="gradient-text">Why Choose Us?</span>
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <Users className="h-12 w-12 text-accent1" />,
                title: "Expert Faculty",
                description: "Learn from experienced educators with a proven track record. Personalized attention tailored to learning styles.",
              },
              {
                icon: <BookOpen className="h-12 w-12 text-accent2" />,
                title: "Comprehensive Study Material",
                description: "Updated study material across subjects. Regular mock tests & quizzes.",
              },
              {
                icon: <BrainCircuit className="h-12 w-12 text-accent3" />,
                title: "Interactive Learning Environment",
                description: "Live and recorded lectures. Doubt-clearing & one-on-one mentorship.",
              },
              {
                icon: <Trophy className="h-12 w-12 text-accent4" />,
                title: "Proven Track Record",
                description: "Successful alumni & high success rates.",
              },
              {
                icon: <Wallet className="h-12 w-12 text-accent1" />,
                title: "Affordable and Flexible Programs",
                description: "Competitive pricing, flexible options.",
              },
              {
                icon: <Home className="h-12 w-12 text-accent2" />,
                title: "Residential Facilities",
                description: "Secure, comfortable hostels with nutritious meals and 24/7 support.",
              },
            ].map((benefit, index) => (
              <Card key={index} className="p-8 card-hover bg-white/80 backdrop-blur-sm">
                <div className="mb-6 flex justify-center">
                  <div className="p-4 rounded-full bg-white shadow-lg">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="mb-4 text-2xl font-bold text-primary">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="section-pattern py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="gradient-text">Our Results Speak for Themselves</span>
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="p-8 text-center card-hover bg-white/80 backdrop-blur-sm">
              <Medal className="h-16 w-16 text-accent1 mx-auto mb-6" />
              <h3 className="text-3xl font-bold mb-2">500+</h3>
              <p className="text-gray-600">Selections in JEE Advanced</p>
            </Card>
            <Card className="p-8 text-center card-hover bg-white/80 backdrop-blur-sm">
              <Award className="h-16 w-16 text-accent2 mx-auto mb-6" />
              <h3 className="text-3xl font-bold mb-2">1000+</h3>
              <p className="text-gray-600">NEET Qualifiers</p>
            </Card>
            <Card className="p-8 text-center card-hover bg-white/80 backdrop-blur-sm">
              <Star className="h-16 w-16 text-accent3 mx-auto mb-6" />
              <h3 className="text-3xl font-bold mb-2">95%</h3>
              <p className="text-gray-600">Success Rate</p>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" className="text-primary hover:bg-primary/10">
              View Topper&apos;s Speak
            </Button>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="gradient-text">Our Comprehensive Programs</span>
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <School className="h-16 w-16 text-accent1" />,
                title: "Pre-Foundation Course",
                subtitle: "Classes 8–10",
                description: "Conceptual learning, Olympiads & NTSE prep",
              },
              {
                icon: <BookCheck className="h-16 w-16 text-accent2" />,
                title: "Foundation Course",
                subtitle: "Classes 11–12",
                description: "Board + JEE/NEET/CUET prep, mock tests, mentorship",
              },
              {
                icon: <Brain className="h-16 w-16 text-accent3" />,
                title: "Fresher Course",
                subtitle: "After Class 12",
                description: "First attempt prep with time management and concept mastery",
              },
              {
                icon: <Target className="h-16 w-16 text-accent4" />,
                title: "Dropper Course",
                subtitle: "One Year Program",
                description: "Intensive JEE/NEET improvement program",
              },
              {
                icon: <Rocket className="h-16 w-16 text-accent1" />,
                title: "Crash Course",
                subtitle: "Short Term",
                description: "High-intensity revision program",
              },
              {
                icon: <FileText className="h-16 w-16 text-accent2" />,
                title: "CUET Preparation",
                subtitle: "Specialized Program",
                description: "CUET-specific strategy, mock exams & mentoring",
              },
            ].map((course, index) => (
              <Card key={index} className="p-8 card-hover bg-white/80 backdrop-blur-sm">
                <div className="mb-6">
                  {course.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2 text-primary">{course.title}</h3>
                <h4 className="text-lg font-semibold mb-4 text-accent1">{course.subtitle}</h4>
                <p className="text-gray-600">{course.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Super 30 Section */}
      <section className="gradient-bg hero-pattern py-20 text-white relative">
        <div className="absolute inset-0 bg-primary/90"></div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Super 30 Batch</h2>
            <div className="glass-effect p-8 rounded-xl">
              <Star className="h-16 w-16 text-secondary mx-auto mb-6" />
              <p className="text-lg mb-6">
                Full scholarship program for 90 meritorious students covering Medical, Engineering, and Integrated streams.
              </p>
              <ul className="space-y-4 text-left mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0" />
                  <span>100% tuition + materials + hostel + meals</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0" />
                  <span>Personalized mentorship</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0" />
                  <span>Expert guidance throughout the program</span>
                </li>
              </ul>
              <Button className="bg-secondary text-primary hover:bg-secondary/90">
                Apply for Super 30
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="gradient-bg hero-pattern py-20 text-white relative">
        <div className="absolute inset-0 bg-primary/90"></div>
        <div className="container mx-auto px-6 relative text-center">
          <h2 className="text-4xl font-bold mb-6">Join Us Today</h2>
          <p className="mb-8 text-lg max-w-2xl mx-auto">
            Embark on your journey to success with SPM & Lalan&apos;s Coaching for Success. Experience the perfect blend of knowledge, mentorship, and resources to achieve your academic goals.
          </p>
          <Button className="bg-secondary text-primary hover:bg-secondary/90 text-lg px-8 py-6 shadow-glow">
            Apply Now
          </Button>
        </div>
      </section>
    </main>
  );
}