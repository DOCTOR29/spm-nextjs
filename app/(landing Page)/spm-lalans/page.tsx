"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
  Rocket,
} from "lucide-react";
import "./css/embla.css";
import testimonials from "./components/data/testimonials.json";
import EmblaCarousel from "./components/EmblaCorousel";
import { EmblaOptionsType } from "embla-carousel";
const OPTIONS: EmblaOptionsType = { containScroll: false };
const SLIDE_COUNT = 5;

const teachers =['./Teacher/1.webp','./Teacher/2.webp','./Teacher/3.webp','./Teacher/4.webp','./Teacher/5.webp','./Teacher/6.webp','./Teacher/7.webp', './Teacher/8.webp']
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
              {/* <h1 className="mb-6 text-4xl font-bold md:text-6xl">
                Empowering Students for Excellence in Competitive Exams at
                <span className="block gradient-text mt-2 text-5xl md:text-7xl font-extrabold">
                  SPM & LALAN&apos;S Coaching
                </span>
              </h1> */}
              <p className="mb-8 text-lg opacity-90 glass-effect p-6 rounded-xl">
                Welcome to SPM & Lalan&apos;s Coaching for
                Success—Guwahati&apos;s No.1 Institute for JEE, NEET, Olympiad,
                NTSE, CUET, & More!
              </p>
            </div>
            <div className="glass-effect p-8 rounded-xl backdrop-blur-md">
              <h3 className="text-2xl font-bold mb-6 text-center">
                Start Your Journey Today
              </h3>
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
                      <SelectValue placeholder="Select a Course" />
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
                bullet1:
                  "Learn from experienced educators with a proven track record in mentoring students for competitive exams",
                bullet2:
                  "Receive personalized attention tailored to individual learning styles and needs",
              },
              {
                icon: <BookOpen className="h-12 w-12 text-accent2" />,
                title: "Comprehensive Study Material",
                bullet1:
                  "Updated study material across subjects. Regular mock tests & quizzes.",
                bullet2:
                  "Benefit from regular mock tests and quizzes to assess progress and identify areas for improvement.",
              },
              {
                icon: <BrainCircuit className="h-12 w-12 text-accent3" />,
                title: "Interactive Learning Environment",
                bullet1:
                  "Engage in live and recorded lectures designed to enhance understanding and retention.",
                bullet2:
                  "Participate in doubt-clearing sessions and one-on-one mentorship to address specific challenges.",
              },
              {
                icon: <Trophy className="h-12 w-12 text-accent4" />,
                title: "Proven Track Record",
                bullet1:
                  "Join a community of successful alumni who have secured top ranks in various competitive exams.",
                bullet2:
                  "Leverage our consistent history of high success rates to boost your confidence and performance. ",
              },
              {
                icon: <Wallet className="h-12 w-12 text-accent1" />,
                title: "Affordable and Flexible Programs",
                bullet1:
                  "Experience quality education at competitive prices with flexible payment options.",
                bullet2:
                  "Choose from a variety of courses tailored to fit different schedules and learning preferences.",
              },
              {
                icon: <Home className="h-12 w-12 text-accent2" />,
                title: "Residential Facilities",
                bullet1:
                  "Stay in comfortable, well-equipped hostels with 24/7 security and study-friendly environments.",
                bullet2:
                  "Enjoy nutritious meals, fully surveillance security and dedicated study spaces for uninterrupted learning.",
                bullet3:
                  "Access round-the-clock medical assistance and a supportive faculty for a home-like experience",
              },
            ].map((benefit, index) => (
              <Card
                key={index}
                className="p-8 card-hover bg-white/80 backdrop-blur-sm"
              >
                <div className="mb-6 flex justify-center">
                  <div className="p-4 rounded-full bg-white shadow-lg">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="mb-4 text-2xl font-bold text-primary">
                  {benefit.title}
                </h3>
                <ul className="list-disc">
                  <li className="text-gray-600">{benefit.bullet1}</li>
                  <li className="text-gray-600">{benefit.bullet2}</li>
                  {benefit.bullet3 && (
                    <li className="text-gray-600">{benefit.bullet3}</li>
                  )}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="section-pattern py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="gradient-text">
              Our Results Speak for Themselves
            </span>
          </h2>
        

            {/* <Card className="p-8 text-center card-hover bg-white/80 backdrop-blur-sm">
              <Award className="h-16 w-16 text-accent2 mx-auto mb-6" />
              <h3 className="text-3xl font-bold mb-2">1000+</h3>
              <p className="text-gray-600">NEET Qualifiers</p>
            </Card>
            <Card className="p-8 text-center card-hover bg-white/80 backdrop-blur-sm">
              <Star className="h-16 w-16 text-accent3 mx-auto mb-6" />
              <h3 className="text-3xl font-bold mb-2">95%</h3>
              <p className="text-gray-600">Success Rate</p>
            </Card> */}
          
         
          <div className="grid gap-8   md:grid-cols-3">
            <img src="/Topper/1.png" className="h-full  card-hover  " alt="" />
            <img src="/Topper/2.png" className="h-fit card-hover " alt="" />
            <img src="/Topper/3.png" className="h-fit card-hover " alt="" />
            <img src="/Topper/4.png" className="h-fit card-hover " alt="" />
            <img src="/Topper/5.png" className="h-fit card-hover " alt="" />
            <img src="/Topper/6.png" className="h-fit card-hover " alt="" />
            <img src="/Topper/7.png" className="h-fit card-hover " alt="" />
            <img src="/Topper/8.png" className="h-fit card-hover " alt="" />
            <img src="/Topper/9.png" className="h-fit card-hover " alt="" />
            <img src="/Topper/10.png" className="h-fit card-hover " alt="" />
            <img src="/Topper/11.png" className="h-fit card-hover " alt="" />
            <img src="/Topper/12.png" className="h-fit card-hover " alt="" />

            {/* <Card className="p-8 text-center card-hover bg-white/80 backdrop-blur-sm">
              <Award className="h-16 w-16 text-accent2 mx-auto mb-6" />
              <h3 className="text-3xl font-bold mb-2">1000+</h3>
              <p className="text-gray-600">NEET Qualifiers</p>
            </Card>
            <Card className="p-8 text-center card-hover bg-white/80 backdrop-blur-sm">
              <Star className="h-16 w-16 text-accent3 mx-auto mb-6" />
              <h3 className="text-3xl font-bold mb-2">95%</h3>
              <p className="text-gray-600">Success Rate</p>
            </Card> */}
          </div>
          <div className="text-center mt-8 flex flex-col items-center justify-center">
            <h1 className="text-4xl pt-25 gradient-text font-bold">
              Topper&apos;s Speak
            </h1>

            <EmblaCarousel slides={testimonials} options={OPTIONS} />
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="gradient-text">Our Comprehensive Courses</span>
          </h2>
          <div className="py-14 text-gray-700">
            <p>
              At SPM & LALAN's Coaching, we are dedicated to offering a
              comprehensive suite of programs tailored to meet the diverse
              academic needs of our students. In addition to our core offerings,
              we provide specialized courses designed to strengthen foundational
              knowledge and enhance competitive exam readiness.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <School className="h-16 w-16 text-accent1" />,
                title: "Pre-Foundation Course",
                subtitle:
                  "Designed for students in classes 8 to 10, this course focuses on building a strong conceptual base in subjects like Physics, Chemistry, Mathematics, and Biology, preparing them for future competitive exams.",
                description: [
                  "Conceptual learning, Olympiads & NTSE prep",
                  "Exposure to problem-solving techniques.",
                  "Preparation for Olympiads and NTSE examinations.",
                ],
              },
              {
                icon: <BookCheck className="h-16 w-16 text-accent2" />,
                title: "Foundation Course",
                subtitle:
                  "Aimed at students in classes 11 and 12, this course integrates the board syllabus with advanced topics, equipping students for competitive exams like JEE (Main/Advanced), NEET, and CUET.",
                description: [
                  "Comprehensive coverage of both board and competitive exam syllabi.",
                  "Regular assessments and mock tests.",
                  "Personalized mentorship and doubt-clearing sessions.",
                ],
              },
              {
                icon: <Brain className="h-16 w-16 text-accent3" />,
                title: "Fresher Course",
                subtitle:
                  "Tailored for students who have recently completed their class 12 exams and are preparing for their first attempt at competitive exams. This intensive curriculum bridges gaps and enhances understanding.",
                description: [
                  "Focused preparation for JEE, NEET, and other entrance exams.",
                  "In-depth concept clarification and application.",
                  "Time management and exam strategy sessions.",
                ],
              },
              {
                icon: <Target className="h-16 w-16 text-accent4" />,
                title: "Dropper Course",
                subtitle:
                  "A one-year program designed for students who have completed their 12th-grade exams but wish to dedicate an additional year to improve their scores in competitive exams like JEE and NEET.",
                description: [
                  "Expert faculty with extensive experience in competitive exam coaching.",
                  "Regular mock tests to simulate exam conditions and track progress.",
                  "Personalized attention and doubt-clearing sessions to address individual challenges.",
                ],
              },
              {
                icon: <Rocket className="h-16 w-16 text-accent1" />,
                title: "Crash Course",
                subtitle:
                  "An intensive short-term program aimed at thorough revision and practice before the examination season. Ideal for students seeking to consolidate their knowledge and boost their confidence",
                description: [
                  "Rapid coverage of key topics and concepts.",
                  " Extensive practice through mock tests and previous years' question papers.",
                  "Strategies for effective time management during exams.",
                ],
              },
              {
                icon: <Rocket className="h-16 w-16 text-accent1" />,
                title: "Capsule Course",
                subtitle:
                  "A focused program designed to provide in-depth coverage of specific subjects or topics within a limited timeframe, catering to students who need targeted assistance.",
                description: [
                  "Concentrated study sessions on selected topics.",
                  "Interactive classes with an emphasis on problem-solving.",
                  "Ideal for students looking to strengthen particular areas of weakness",
                ],
              },
              {
                icon: <FileText className="h-16 w-16 text-accent2" />,
                title: "CUET Preparation",
                subtitle:
                  "A structured coaching program designed to help students excel in CUET, ensuring admission to top central universities.",
                description: [
                  "Comprehensive subject coverage with expert guidance.",
                  "Strategic test preparation with mock exams and practice sessions.",
                  "Personalized mentoring to enhance problem-solving and time management skills.",
                ],
              },
            ].map((course, index) => (
              <Card
                key={index}
                className="p-8 card-hover bg-white/80 backdrop-blur-sm"
              >
                <div className="mb-6">{course.icon}</div>
                <h3 className="text-2xl font-bold mb-2 text-primary">
                  {course.title}
                </h3>
                <h4 className="text-lg font-semibold mb-4 text-accent1">
                  {course.subtitle}
                </h4>
                <ul className="text-gray-600">
                  {course.description.map((desc) => (
                    <li className="list-disc">{desc}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Section SPM & Lalans*/}

      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-6 bg-amber-100 py-10 rounded-2xl">
          <div className="flex flex-col gap-10 text-xl font-medium">
            <p>
              At SPM & LALAN's Coaching, we are committed to providing
              comprehensive programs that cater to the diverse needs of our
              students. In addition to our core offerings, we are proud to
              introduce the following specialized programs:​
            </p>
            <Button className="text-white w-fit mx-auto">Apply Now!</Button>
            {/* CTA Button to be added */}
          </div>
        </div>
      </section>

      {/* Super 30 Section */}
      <section className="gradient-bg hero-pattern py-20 text-white relative">
        <div className="absolute inset-0 bg-primary/90"></div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="md:text-6xl text-3xl font-bold mb-20">
              Dream big, achieve more: Additional Programs at SPM & LALAN’S
              Coaching
            </h2>
            <div className="text-left text-lg">
              <h2 className="text-2xl md:text-3xl text-left font-medium mb-6">
                School Integrated Program (SIP)
              </h2>
              <p className="text-left">
                The SIP bridges school academics with competitive exam
                readiness, ensuring students excel in board exams while building
                a strong foundation for national-level entrance tests. The
                program is structured to align with the learning stages of
                classes 8–10 (foundational phase) and classes 11–12 (advanced
                phase).​
              </p>
              <h3 className="text-2xl pt-12 font-bold mb-8">Key Features:</h3>
              <ul className="list-disc flex md:flex-row flex-col space-y-2 gap-8">
                <li className="flex gap-2">
                <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0" />
                 <p>
                  
                  Classes 8–10: Focus on strengthening core concepts in Physics,
                  Chemistry, Mathematics, and Biology, with an introduction to
                  problem-solving strategies for Olympiads and NTSE to build
                  analytical skills.​
                  </p>
                </li>

                <li className="flex gap-2 ">
                  <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0" />
                  <p>
                  Classes 11–12: Advanced coaching modules for NEET, JEE
                  (Main/Advanced), and CUET integrated with the board syllabus,
                  including weekly doubt-clearing sessions and mock tests
                  mirroring actual exam patterns.​
                  </p>
                </li>
              </ul>
            </div>
            <h2 className="text-4xl font-bold mt-20 mb-6">Super 30 Batch</h2>
            <div className="glass-effect text-left p-8 rounded-xl">
              <Star className="h-16 w-16 text-secondary mx-auto mb-6" />
              <p className="text-lg mb-6 ">
              The Super 30 Batch is a prestigious scholarship program designed to support 90 meritorious students (30 each for Medical, Engineering, and Integrated streams) by providing 100% free tuition, study materials, and personalized mentorship. This initiative aims to empower talented aspirants to achieve top ranks in JEE and NEET examinations
              </p>
              <ul className="space-y-4 text-left mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0" />
                  <span>Full Scholarship: Comprehensive coverage of tuition fees and academic resources.​
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0" />
                  <span>Expert Faculty: Guidance from experienced educators with a proven track record in mentoring students for competitive exams.​
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0" />
                  <span>Personalized Mentorship: Individual attention to address unique learning needs and challenges.​</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0" />
                  <span>Residential Program: Provision of comfortable hostel facilities, ensuring a conducive learning environment.​
                  ​</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0" />
                  <span>Nutritious Meals: Daily provision of wholesome and balanced meals to support students' health and well-being.
                  ​</span>
                </li>
              </ul>
              <p className="py-10">These additional programs reflect our dedication to nurturing academic excellence and providing opportunities for all students to succeed.
              </p>
              <Button className="bg-secondary text-primary hover:bg-secondary/90">
                Apply for Super 30
              </Button>
            </div>
          </div>
        </div>
      </section>
{/* Teacher List */}
      <section className="py-20  bg-gradient-to-br from-primary/5 to-secondary/5" >
      <div className="container mx-auto px-6 relative">
      <div className="max-w-6xl gradient-text text-6xl py-20 font-bold   mx-auto text-center">
      Guiding Minds, Shaping Futures – Meet Our Expert Faculties at SPM & Lalan's
  
      </div>
      <EmblaCarousel slides={teachers} teacher={true} options={OPTIONS} />
      </div>  
      </section>


      {/* Final CTA Section */}

      <section className="gradient-bg hero-pattern py-20 text-white relative">
        <div className="absolute inset-0 bg-primary/90"></div>
        <div className="container mx-auto px-6 relative text-center">
          <h2 className="text-4xl font-bold mb-6">Join Us Today</h2>
          <p className="mb-8 text-lg max-w-2xl mx-auto">
            Embark on your journey to success with SPM & Lalan&apos;s Coaching
            for Success. Experience the perfect blend of knowledge, mentorship,
            and resources to achieve your academic goals.
          </p>
          <Button className="bg-secondary text-primary hover:bg-secondary/90 text-lg px-8 py-6 shadow-glow">
            Apply Now
          </Button>
        </div>
      </section>
    </main>
  );
}
