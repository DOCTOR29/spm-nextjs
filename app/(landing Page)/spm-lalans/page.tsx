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
  Divide,
  ChevronUp,
  ChevronDown,
  ArrowRight,
} from "lucide-react";
import "./css/embla.css";
import testimonials from "./components/data/testimonials.json";
import EmblaCarousel from "./components/EmblaCorousel";
import { EmblaOptionsType } from "embla-carousel";
import { ReadMore } from "./components/ReadMore";
import { CarouselDemo } from "./components/carouselTestimonials";
import { useState, Suspense } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Hero from "./components/Hero";
import { useSearchParams } from "next/navigation";

const OPTIONS: EmblaOptionsType = { containScroll: false };
const SLIDE_COUNT = 5;

const teachers = [
  "./Teacher/1.webp",
  "./Teacher/2.webp",
  "./Teacher/3.webp",
  "./Teacher/4.webp",
  "./Teacher/5.webp",
  "./Teacher/6.webp",
  "./Teacher/7.webp",
  "./Teacher/8.webp",
];
const topper = [
  "./Topper/1.png",
  "./Topper/2.png",
  "./Topper/3.png",
  "./Topper/4.png",
  "./Topper/5.png",
  "./Topper/6.png",
  "./Topper/7.png",
  "./Topper/8.png",
];

// Component that uses useSearchParams
function HeroWrapper() {
  const searchParams = useSearchParams();
  const wp = searchParams.get('wp');
  const showHero = wp === "true";
  
  return showHero ? <Hero /> : null;
}

// Create a client component that uses useSearchParams
function LandingPageContent() {
  const [isReadMore, setisReadMore] = useState(false);
  const [isReadMoreSuper, setisReadMoreSuper] = useState(false);
  
  // Get the wp parameter from the URL
  const searchParams = useSearchParams();
  const wp = searchParams.get('wp');
  
  // Check if wp parameter is "true"
  const showHero = wp === "true";

  return (
    <main className="min-h-screen">
      {showHero && <Hero />}

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
                bgImage: "/card/Expert-Faculty.jpg"
              },
              {
                icon: <BookOpen className="h-12 w-12 text-accent2" />,
                title: "Comprehensive Study Material",
                bullet1:
                  "Updated study material across subjects. Regular mock tests & quizzes.",
                bullet2:
                  "Benefit from regular mock tests and quizzes to assess progress and identify areas for improvement.",
                bgImage: "/card/Comprehensive-Study-Material.jpg"
              },
              {
                icon: <BrainCircuit className="h-12 w-12 text-accent3" />,
                title: "Interactive Learning Environment",
                bullet1:
                  "Engage in live and recorded lectures designed to enhance understanding and retention.",
                bullet2:
                  "Participate in doubt-clearing sessions and one-on-one mentorship to address specific challenges.",
                bgImage: "/card/Interactive-Learning-Environment.jpg"
              },
              {
                icon: <Trophy className="h-12 w-12 text-accent4" />,
                title: "Proven Track Record",
                bullet1:
                  "Join a community of successful alumni who have secured top ranks in various competitive exams.",
                bullet2:
                  "Leverage our consistent history of high success rates to boost your confidence and performance. ",
                bgImage: "/card/Proven-Track-Record.jpg"
              },
              {
                icon: <Wallet className="h-12 w-12 text-accent1" />,
                title: "Affordable and Flexible Programs",
                bullet1:
                  "Experience quality education at competitive prices with flexible payment options.",
                bullet2:
                  "Choose from a variety of courses tailored to fit different schedules and learning preferences.",
                bgImage: "/card/Affordable-and-Flexible-Programs.jpg"
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
                bgImage: "/card/Residential-Facilities.jpg"
              },
            ].map((benefit, index) => (
              <Card
                key={index}
                className="p-8 card-hover  relative overflow-hidden shadow-lg"
                style={{
                  backgroundImage: `url(${benefit.bgImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                 
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-white/10 z-0"></div>
                <div className="relative z-10">
                  <div className="mb-6 flex justify-center">
                    <div className="p-4 rounded-full bg-white shadow-lg">
                      {benefit.icon}
                    </div>
                  </div>
                  <h3 className="mb-4 text-2xl font-bold text-primary">
                    {benefit.title}
                  </h3>
                  <ul className="list-disc font-bold">
                    <li className="text-gray-800">{benefit.bullet1}</li>
                    <li className="text-gray-800">{benefit.bullet2}</li>
                    {benefit.bullet3 && (
                      <li className="text-gray-800">{benefit.bullet3}</li>
                    )}
                  </ul>
                </div>
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
          {/* <div className="md:hidden block "> */}

          <EmblaCarousel slides={topper} teacher={true} options={OPTIONS} />
          {/* </div> */}

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

          {/* <div className="grid gap-8   md:grid-cols-3">
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
            <img src="/Topper/12.png" className="h-fit card-hover " alt="" /> */}

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
          {/* </div> */}
          <div className="text-center mt-8 flex flex-col items-center justify-center">
            <h1 className="text-4xl pt-25 gradient-text font-bold">
              Topper&apos;s Speak
            </h1>

            {/* <EmblaCarousel slides={testimonials} options={OPTIONS} /> */}

            <CarouselDemo />
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">
            <span className="gradient-text">Our Comprehensive Courses</span>
          </h2>
          <div className="py-8 md:py-14 text-gray-700"></div>
          <Tabs defaultValue="pre-foundation" className="w-full ">
            <TabsList className="flex w-full     flex-wrap justify-center gap-2">
              <TabsTrigger value="pre-foundation" className=" text-sm md:text-base w-[calc(50%-4px)] md:w-auto px-3 py-2 text-accent1 hover:bg-accent1/10">Pre-Foundation</TabsTrigger>
              <TabsTrigger value="foundation" className="text-sm md:text-base w-[calc(50%-4px)] md:w-auto px-3 py-2 text-accent2 hover:bg-accent2/10">Foundation</TabsTrigger>
              <TabsTrigger value="fresher" className="text-sm md:text-base w-[calc(50%-4px)] md:w-auto px-3 py-2 text-accent3 hover:bg-accent3/10">Fresher</TabsTrigger>
              <TabsTrigger value="dropper" className="text-sm md:text-base w-[calc(50%-4px)] md:w-auto px-3 py-2 text-purple-500 hover:bg-purple-500/10">Dropper</TabsTrigger>
              <TabsTrigger value="crash" className="text-sm md:text-base w-[calc(50%-4px)] md:w-auto px-3 py-2 text-orange-500 hover:bg-orange-500/10">Crash Course</TabsTrigger>
              <TabsTrigger value="capsule" className="text-sm md:text-base w-[calc(50%-4px)] md:w-auto px-3 py-2 text-teal-500 hover:bg-teal-500/10">Capsule</TabsTrigger>
              <TabsTrigger value="cuet" className="text-sm md:text-base w-[calc(50%-4px)] md:w-auto px-3 py-2 text-pink-500 hover:bg-pink-500/10">CUET</TabsTrigger>
            </TabsList>

            <div className="mt-6 md:mt-8">
              <TabsContent value="pre-foundation">
                <Card className="p-4 mt-20 md:p-8 card-hover bg-white/80 backdrop-blur-sm">
                  <div className="mb-4 md:mb-6">
                    <School className="h-12 w-12 md:h-16 md:w-16 text-accent1 mx-auto" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2 text-primary">Pre-Foundation Course</h3>
                  <h4 className="text-base md:text-lg font-semibold mb-4 text-accent1">
                    Designed for students in classes 8 to 10, this course focuses on building a strong conceptual base in subjects like Physics, Chemistry, Mathematics, and Biology, preparing them for future competitive exams.
                  </h4>
                  <ul className="text-sm md:text-base text-gray-600 space-y-2 pl-4">
                    <li className="list-disc">Conceptual learning, Olympiads & NTSE prep</li>
                    <li className="list-disc">Exposure to problem-solving techniques.</li>
                    <li className="list-disc">Preparation for Olympiads and NTSE examinations.</li>
                  </ul>
                </Card>
              </TabsContent>

              <TabsContent value="foundation">
                <Card className="p-4 mt-20 md:p-8 card-hover bg-white/80 backdrop-blur-sm">
                  <div className="mb-4 md:mb-6">
                    <BookCheck className="h-12 w-12 md:h-16 md:w-16 text-accent2 mx-auto" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2 text-primary">Foundation Course</h3>
                  <h4 className="text-base md:text-lg font-semibold mb-4 text-accent1">
                    Aimed at students in classes 11 and 12, this course integrates the board syllabus with advanced topics, equipping students for competitive exams like JEE (Main/Advanced), NEET, and CUET.
                  </h4>
                  <ul className="text-sm md:text-base text-gray-600 space-y-2 pl-4">
                    <li className="list-disc">Comprehensive coverage of both board and competitive exam syllabi.</li>
                    <li className="list-disc">Regular assessments and mock tests.</li>
                    <li className="list-disc">Personalized mentorship and doubt-clearing sessions.</li>
                  </ul>
                </Card>
              </TabsContent>

              <TabsContent value="fresher">
                <Card className="p-4 mt-20 md:p-8 card-hover bg-white/80 backdrop-blur-sm">
                  <div className="mb-4 md:mb-6">
                    <Brain className="h-12 w-12 md:h-16 md:w-16 text-accent3 mx-auto" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2 text-primary">Fresher Course</h3>
                  <h4 className="text-base md:text-lg font-semibold mb-4 text-accent1">
                    Tailored for students who have recently completed their class 12 exams and are preparing for their first attempt at competitive exams. This intensive curriculum bridges gaps and enhances understanding.
                  </h4>
                  <ul className="text-sm md:text-base text-gray-600 space-y-2 pl-4">
                    <li className="list-disc">Focused preparation for JEE, NEET, and other entrance exams.</li>
                    <li className="list-disc">In-depth concept clarification and application.</li>
                    <li className="list-disc">Time management and exam strategy sessions.</li>
                  </ul>
                </Card>
              </TabsContent>

              <TabsContent value="dropper">
                <Card className="p-4 mt-20 md:p-8  card-hover bg-white/80 backdrop-blur-sm">
                  <div className="mb-4 md:mb-6">
                    <Target className="h-12 w-12 md:h-16 md:w-16 text-accent4 mx-auto" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2 text-primary">Dropper Course</h3>
                  <h4 className="text-base md:text-lg font-semibold mb-4 text-accent1">
                    A one-year program designed for students who have completed their 12th-grade exams but wish to dedicate an additional year to improve their scores in competitive exams like JEE and NEET.
                  </h4>
                  <ul className="text-sm md:text-base text-gray-600 space-y-2 pl-4">
                    <li className="list-disc">Expert faculty with extensive experience in competitive exam coaching.</li>
                    <li className="list-disc">Regular mock tests to simulate exam conditions and track progress.</li>
                    <li className="list-disc">Personalized attention and doubt-clearing sessions to address individual challenges.</li>
                  </ul>
                </Card>
              </TabsContent>

              <TabsContent value="crash">
                <Card className="p-4 mt-20 md:p-8 card-hover bg-white/80 backdrop-blur-sm">
                  <div className="mb-4 md:mb-6">
                    <Rocket className="h-12 w-12 md:h-16 md:w-16 text-accent1 mx-auto" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2 text-primary">Crash Course</h3>
                  <h4 className="text-base md:text-lg font-semibold mb-4 text-accent1">
                    An intensive short-term program aimed at thorough revision and practice before the examination season. Ideal for students seeking to consolidate their knowledge and boost their confidence
                  </h4>
                  <ul className="text-sm md:text-base text-gray-600 space-y-2 pl-4">
                    <li className="list-disc">Rapid coverage of key topics and concepts.</li>
                    <li className="list-disc">Extensive practice through mock tests and previous years' question papers.</li>
                    <li className="list-disc">Strategies for effective time management during exams.</li>
                  </ul>
                </Card>
              </TabsContent>

              <TabsContent value="capsule">
                <Card className="p-4 mt-20 md:p-8 card-hover bg-white/80 backdrop-blur-sm">
                  <div className="mb-4 md:mb-6">
                    <Rocket className="h-12 w-12 md:h-16 md:w-16 text-accent1 mx-auto" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2 text-primary">Capsule Course</h3>
                  <h4 className="text-base md:text-lg font-semibold mb-4 text-accent1">
                    A focused program designed to provide in-depth coverage of specific subjects or topics within a limited timeframe, catering to students who need targeted assistance.
                  </h4>
                  <ul className="text-sm md:text-base text-gray-600 space-y-2 pl-4">
                    <li className="list-disc">Concentrated study sessions on selected topics.</li>
                    <li className="list-disc">Interactive classes with an emphasis on problem-solving.</li>
                    <li className="list-disc">Ideal for students looking to strengthen particular areas of weakness</li>
                  </ul>
                </Card>
              </TabsContent>

              <TabsContent value="cuet">
                <Card className="p-4 mt-20 md:p-8 card-hover bg-white/80 backdrop-blur-sm">
                  <div className="mb-4 md:mb-6">
                    <FileText className="h-12 w-12 md:h-16 md:w-16 text-accent2 mx-auto" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2 text-primary">CUET Preparation</h3>
                  <h4 className="text-base md:text-lg font-semibold mb-4 text-accent1">
                    A structured coaching program designed to help students excel in CUET, ensuring admission to top central universities.
                  </h4>
                  <ul className="text-sm md:text-base text-gray-600 space-y-2 pl-4">
                    <li className="list-disc">Comprehensive subject coverage with expert guidance.</li>
                    <li className="list-disc">Strategic test preparation with mock exams and practice sessions.</li>
                    <li className="list-disc">Personalized mentoring to enhance problem-solving and time management skills.</li>
                  </ul>
                </Card>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </section>
      {/* Section SPM & Lalans*/}

      <section className="py-20 bg-gradient-to-br px-6 from-primary/5 to-secondary/5">
        <div className="container mx-auto px-6  backdrop-blur-sm py-12 rounded-2xl shadow-lg">
          <div className="flex flex-col items-center gap-10 text-xl font-medium">
            <div className="flex items-center gap-4">
              <GraduationCap className="h-12 w-12 text-primary" />
              <h2 className="text-2xl md:text-3xl font-bold text-primary">Welcome to Excellence</h2>
            </div>
            <p className="text-center max-w-3xl">
              At <strong className="text-primary">SPM & LALAN's</strong> Coaching, we are committed to
              providing comprehensive programs that cater to the diverse needs
              of our students. In addition to our core offerings, we are proud
              to introduce the following specialized programs:​
            </p>
            <div className="flex items-center gap-4">
              <Button className="text-white w-fit group flex items-center gap-2 bg-primary hover:bg-primary/90 transition-all">
                <UserPlus className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Apply Now!
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button className="bg-secondary text-blue-600 hover:bg-secondary/90 transition-all">
                Book Free Counselling Session
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Super 30 Section */}
      <section className="gradient-bg hero-pattern py-20 text-white relative">
        <div className="absolute inset-0 bg-primary/90"></div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="md:text-6xl text-3xl font-bold mb-20">
              Dream big, achieve more: Additional Programs at SPM & LALAN'S
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
              <ReadMore id={""} text={""} />
              {/* ReadMore */}
              {isReadMore && (
                <div>
                  <h3 className="text-2xl pt-12 font-bold mb-8">
                    Key Features:
                  </h3>
                  <ul className="list-disc flex md:flex-row flex-col space-y-2 gap-8">
                    <li className="flex gap-2">
                      <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0" />
                      <p>
                        Classes 8–10: Focus on strengthening core concepts in
                        Physics, Chemistry, Mathematics, and Biology, with an
                        introduction to problem-solving strategies for Olympiads
                        and NTSE to build analytical skills.​
                      </p>
                    </li>

                    <li className="flex gap-2 ">
                      <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0" />
                      <p>
                        Classes 11–12: Advanced coaching modules for NEET, JEE
                        (Main/Advanced), and CUET integrated with the board
                        syllabus, including weekly doubt-clearing sessions and
                        mock tests mirroring actual exam patterns.​
                      </p>
                    </li>
                  </ul>
                </div>
              )}
              <div onClick={() => setisReadMore(!isReadMore)}>
                {" "}
                <Button className="text-white" variant={"link"}>
                  {isReadMore ? (
                    <>
                      {" "}
                      <ChevronUp />
                      Read More
                    </>
                  ) : (
                    <>
                      {" "}
                      <ChevronDown /> Read Less
                    </>
                  )}{" "}
                </Button>{" "}
              </div>
            </div>
            <h2 className="text-4xl font-bold mt-20 mb-6">Super 30 Batch</h2>
            <div className="glass-effect text-left p-8 rounded-xl">
              <Star className="h-16 w-16 text-secondary mx-auto mb-6" />
              <p className="text-lg mb-6 ">
                The Super 30 Batch is a prestigious scholarship program designed
                to support 90 meritorious students (30 each for Medical,
                Engineering, and Integrated streams) by providing 100% free
                tuition, study materials, and personalized mentorship. This
                initiative aims to empower talented aspirants to achieve top
                ranks in JEE and NEET examinations
              </p>
              {isReadMoreSuper && (
                <ul className="space-y-4 text-left mb-8">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0" />
                    <span>
                      Full Scholarship: Comprehensive coverage of tuition fees
                      and academic resources.​
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0" />
                    <span>
                      Expert Faculty: Guidance from experienced educators with a
                      proven track record in mentoring students for competitive
                      exams.​
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0" />
                    <span>
                      Personalized Mentorship: Individual attention to address
                      unique learning needs and challenges.​
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0" />
                    <span>
                      Residential Program: Provision of comfortable hostel
                      facilities, ensuring a conducive learning environment.​ ​
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0" />
                    <span>
                      Nutritious Meals: Daily provision of wholesome and
                      balanced meals to support students' health and well-being.
                      ​
                    </span>
                  </li>
                </ul>
              )}
              <div onClick={() => setisReadMoreSuper(!isReadMoreSuper)}>
                {" "}
                <Button className="text-white" variant={"link"}>
                  {isReadMoreSuper ? (
                    <>
                      {" "}
                      <ChevronUp />
                      Read More
                    </>
                  ) : (
                    <>
                      {" "}
                      <ChevronDown /> Read Less
                    </>
                  )}{" "}
                </Button>{" "}
              </div>
              <p className="py-10">
                These additional programs reflect our dedication to nurturing
                academic excellence and providing opportunities for all students
                to succeed.
              </p>
              <Button className="bg-secondary text-blue-600 hover:bg-secondary/90">
                Apply for Super 30
              </Button>
              <Button className="bg-primary text-white hover:bg-primary/90 mt-4">
                Book Free Counselling Session
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Teacher List */}
      <section className="py-20  bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-6 relative">
          <div className="max-w-6xl gradient-text text-3xl md:text-6xl py-10 md:py-20 font-bold   mx-auto text-center">
            Guiding Minds, Shaping Futures – Meet Our Expert Faculties at SPM &
            Lalan's
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
          <Button className="bg-secondary text-blue-600 hover:bg-secondary/90 text-lg px-8 py-6 shadow-glow">
            Apply Now
          </Button>
          <Button className="bg-primary text-white hover:bg-primary/90 text-lg px-8 py-6 shadow-glow mt-4">
            Book Free Counselling Session
          </Button>
        </div>
      </section>
    </main>
  );
}

// Main component that wraps the content in Suspense
export default function LandingPage() {
  const [isReadMore, setisReadMore] = useState(false);
  const [isReadMoreSuper, setisReadMoreSuper] = useState(false);

  return (
    <main className="min-h-screen">
      <Suspense fallback={<div>Loading...</div>}>
        <HeroWrapper />
      </Suspense>

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
                bgImage: "/card/Expert-Faculty.jpg"
              },
              {
                icon: <BookOpen className="h-12 w-12 text-accent2" />,
                title: "Comprehensive Study Material",
                bullet1:
                  "Updated study material across subjects. Regular mock tests & quizzes.",
                bullet2:
                  "Benefit from regular mock tests and quizzes to assess progress and identify areas for improvement.",
                bgImage: "/card/Comprehensive-Study-Material.jpg"
              },
              {
                icon: <BrainCircuit className="h-12 w-12 text-accent3" />,
                title: "Interactive Learning Environment",
                bullet1:
                  "Engage in live and recorded lectures designed to enhance understanding and retention.",
                bullet2:
                  "Participate in doubt-clearing sessions and one-on-one mentorship to address specific challenges.",
                bgImage: "/card/Interactive-Learning-Environment.jpg"
              },
              {
                icon: <Trophy className="h-12 w-12 text-accent4" />,
                title: "Proven Track Record",
                bullet1:
                  "Join a community of successful alumni who have secured top ranks in various competitive exams.",
                bullet2:
                  "Leverage our consistent history of high success rates to boost your confidence and performance. ",
                bgImage: "/card/Proven-Track-Record.jpg"
              },
              {
                icon: <Wallet className="h-12 w-12 text-accent1" />,
                title: "Affordable and Flexible Programs",
                bullet1:
                  "Experience quality education at competitive prices with flexible payment options.",
                bullet2:
                  "Choose from a variety of courses tailored to fit different schedules and learning preferences.",
                bgImage: "/card/Affordable-and-Flexible-Programs.jpg"
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
                bgImage: "/card/Residential-Facilities.jpg"
              },
            ].map((benefit, index) => (
              <Card
                key={index}
                className="p-8 card-hover  relative overflow-hidden shadow-lg"
                style={{
                  backgroundImage: `url(${benefit.bgImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                 
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-white/10 z-0"></div>
                <div className="relative z-10">
                  <div className="mb-6 flex justify-center">
                    <div className="p-4 rounded-full bg-white shadow-lg">
                      {benefit.icon}
                    </div>
                  </div>
                  <h3 className="mb-4 text-2xl font-bold text-primary">
                    {benefit.title}
                  </h3>
                  <ul className="list-disc font-bold">
                    <li className="text-gray-800">{benefit.bullet1}</li>
                    <li className="text-gray-800">{benefit.bullet2}</li>
                    {benefit.bullet3 && (
                      <li className="text-gray-800">{benefit.bullet3}</li>
                    )}
                  </ul>
                </div>
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
          {/* <div className="md:hidden block "> */}

          <EmblaCarousel slides={topper} teacher={true} options={OPTIONS} />
          {/* </div> */}

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

          {/* <div className="grid gap-8   md:grid-cols-3">
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
            <img src="/Topper/12.png" className="h-fit card-hover " alt="" /> */}

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
          {/* </div> */}
          <div className="text-center mt-8 flex flex-col items-center justify-center">
            <h1 className="text-4xl pt-25 gradient-text font-bold">
              Topper&apos;s Speak
            </h1>

            {/* <EmblaCarousel slides={testimonials} options={OPTIONS} /> */}

            <CarouselDemo />
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">
            <span className="gradient-text">Our Comprehensive Courses</span>
          </h2>
          <div className="py-8 md:py-14 text-gray-700"></div>
          <Tabs defaultValue="pre-foundation" className="w-full ">
            <TabsList className="flex w-full     flex-wrap justify-center gap-2">
              <TabsTrigger value="pre-foundation" className=" text-sm md:text-base w-[calc(50%-4px)] md:w-auto px-3 py-2 text-accent1 hover:bg-accent1/10">Pre-Foundation</TabsTrigger>
              <TabsTrigger value="foundation" className="text-sm md:text-base w-[calc(50%-4px)] md:w-auto px-3 py-2 text-accent2 hover:bg-accent2/10">Foundation</TabsTrigger>
              <TabsTrigger value="fresher" className="text-sm md:text-base w-[calc(50%-4px)] md:w-auto px-3 py-2 text-accent3 hover:bg-accent3/10">Fresher</TabsTrigger>
              <TabsTrigger value="dropper" className="text-sm md:text-base w-[calc(50%-4px)] md:w-auto px-3 py-2 text-purple-500 hover:bg-purple-500/10">Dropper</TabsTrigger>
              <TabsTrigger value="crash" className="text-sm md:text-base w-[calc(50%-4px)] md:w-auto px-3 py-2 text-orange-500 hover:bg-orange-500/10">Crash Course</TabsTrigger>
              <TabsTrigger value="capsule" className="text-sm md:text-base w-[calc(50%-4px)] md:w-auto px-3 py-2 text-teal-500 hover:bg-teal-500/10">Capsule</TabsTrigger>
              <TabsTrigger value="cuet" className="text-sm md:text-base w-[calc(50%-4px)] md:w-auto px-3 py-2 text-pink-500 hover:bg-pink-500/10">CUET</TabsTrigger>
            </TabsList>

            <div className="mt-6 md:mt-8">
              <TabsContent value="pre-foundation">
                <Card className="p-4 mt-20 md:p-8 card-hover bg-white/80 backdrop-blur-sm">
                  <div className="mb-4 md:mb-6">
                    <School className="h-12 w-12 md:h-16 md:w-16 text-accent1 mx-auto" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2 text-primary">Pre-Foundation Course</h3>
                  <h4 className="text-base md:text-lg font-semibold mb-4 text-accent1">
                    Designed for students in classes 8 to 10, this course focuses on building a strong conceptual base in subjects like Physics, Chemistry, Mathematics, and Biology, preparing them for future competitive exams.
                  </h4>
                  <ul className="text-sm md:text-base text-gray-600 space-y-2 pl-4">
                    <li className="list-disc">Conceptual learning, Olympiads & NTSE prep</li>
                    <li className="list-disc">Exposure to problem-solving techniques.</li>
                    <li className="list-disc">Preparation for Olympiads and NTSE examinations.</li>
                  </ul>
                </Card>
              </TabsContent>

              <TabsContent value="foundation">
                <Card className="p-4 mt-20 md:p-8 card-hover bg-white/80 backdrop-blur-sm">
                  <div className="mb-4 md:mb-6">
                    <BookCheck className="h-12 w-12 md:h-16 md:w-16 text-accent2 mx-auto" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2 text-primary">Foundation Course</h3>
                  <h4 className="text-base md:text-lg font-semibold mb-4 text-accent1">
                    Aimed at students in classes 11 and 12, this course integrates the board syllabus with advanced topics, equipping students for competitive exams like JEE (Main/Advanced), NEET, and CUET.
                  </h4>
                  <ul className="text-sm md:text-base text-gray-600 space-y-2 pl-4">
                    <li className="list-disc">Comprehensive coverage of both board and competitive exam syllabi.</li>
                    <li className="list-disc">Regular assessments and mock tests.</li>
                    <li className="list-disc">Personalized mentorship and doubt-clearing sessions.</li>
                  </ul>
                </Card>
              </TabsContent>

              <TabsContent value="fresher">
                <Card className="p-4 mt-20 md:p-8 card-hover bg-white/80 backdrop-blur-sm">
                  <div className="mb-4 md:mb-6">
                    <Brain className="h-12 w-12 md:h-16 md:w-16 text-accent3 mx-auto" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2 text-primary">Fresher Course</h3>
                  <h4 className="text-base md:text-lg font-semibold mb-4 text-accent1">
                    Tailored for students who have recently completed their class 12 exams and are preparing for their first attempt at competitive exams. This intensive curriculum bridges gaps and enhances understanding.
                  </h4>
                  <ul className="text-sm md:text-base text-gray-600 space-y-2 pl-4">
                    <li className="list-disc">Focused preparation for JEE, NEET, and other entrance exams.</li>
                    <li className="list-disc">In-depth concept clarification and application.</li>
                    <li className="list-disc">Time management and exam strategy sessions.</li>
                  </ul>
                </Card>
              </TabsContent>

              <TabsContent value="dropper">
                <Card className="p-4 mt-20 md:p-8  card-hover bg-white/80 backdrop-blur-sm">
                  <div className="mb-4 md:mb-6">
                    <Target className="h-12 w-12 md:h-16 md:w-16 text-accent4 mx-auto" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2 text-primary">Dropper Course</h3>
                  <h4 className="text-base md:text-lg font-semibold mb-4 text-accent1">
                    A one-year program designed for students who have completed their 12th-grade exams but wish to dedicate an additional year to improve their scores in competitive exams like JEE and NEET.
                  </h4>
                  <ul className="text-sm md:text-base text-gray-600 space-y-2 pl-4">
                    <li className="list-disc">Expert faculty with extensive experience in competitive exam coaching.</li>
                    <li className="list-disc">Regular mock tests to simulate exam conditions and track progress.</li>
                    <li className="list-disc">Personalized attention and doubt-clearing sessions to address individual challenges.</li>
                  </ul>
                </Card>
              </TabsContent>

              <TabsContent value="crash">
                <Card className="p-4 mt-20 md:p-8 card-hover bg-white/80 backdrop-blur-sm">
                  <div className="mb-4 md:mb-6">
                    <Rocket className="h-12 w-12 md:h-16 md:w-16 text-accent1 mx-auto" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2 text-primary">Crash Course</h3>
                  <h4 className="text-base md:text-lg font-semibold mb-4 text-accent1">
                    An intensive short-term program aimed at thorough revision and practice before the examination season. Ideal for students seeking to consolidate their knowledge and boost their confidence
                  </h4>
                  <ul className="text-sm md:text-base text-gray-600 space-y-2 pl-4">
                    <li className="list-disc">Rapid coverage of key topics and concepts.</li>
                    <li className="list-disc">Extensive practice through mock tests and previous years' question papers.</li>
                    <li className="list-disc">Strategies for effective time management during exams.</li>
                  </ul>
                </Card>
              </TabsContent>

              <TabsContent value="capsule">
                <Card className="p-4 mt-20 md:p-8 card-hover bg-white/80 backdrop-blur-sm">
                  <div className="mb-4 md:mb-6">
                    <Rocket className="h-12 w-12 md:h-16 md:w-16 text-accent1 mx-auto" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2 text-primary">Capsule Course</h3>
                  <h4 className="text-base md:text-lg font-semibold mb-4 text-accent1">
                    A focused program designed to provide in-depth coverage of specific subjects or topics within a limited timeframe, catering to students who need targeted assistance.
                  </h4>
                  <ul className="text-sm md:text-base text-gray-600 space-y-2 pl-4">
                    <li className="list-disc">Concentrated study sessions on selected topics.</li>
                    <li className="list-disc">Interactive classes with an emphasis on problem-solving.</li>
                    <li className="list-disc">Ideal for students looking to strengthen particular areas of weakness</li>
                  </ul>
                </Card>
              </TabsContent>

              <TabsContent value="cuet">
                <Card className="p-4 mt-20 md:p-8 card-hover bg-white/80 backdrop-blur-sm">
                  <div className="mb-4 md:mb-6">
                    <FileText className="h-12 w-12 md:h-16 md:w-16 text-accent2 mx-auto" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2 text-primary">CUET Preparation</h3>
                  <h4 className="text-base md:text-lg font-semibold mb-4 text-accent1">
                    A structured coaching program designed to help students excel in CUET, ensuring admission to top central universities.
                  </h4>
                  <ul className="text-sm md:text-base text-gray-600 space-y-2 pl-4">
                    <li className="list-disc">Comprehensive subject coverage with expert guidance.</li>
                    <li className="list-disc">Strategic test preparation with mock exams and practice sessions.</li>
                    <li className="list-disc">Personalized mentoring to enhance problem-solving and time management skills.</li>
                  </ul>
                </Card>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </section>
      {/* Section SPM & Lalans*/}

      <section className="py-20 bg-gradient-to-br px-6 from-primary/5 to-secondary/5">
        <div className="container mx-auto px-6  backdrop-blur-sm py-12 rounded-2xl shadow-lg">
          <div className="flex flex-col items-center gap-10 text-xl font-medium">
            <div className="flex items-center gap-4">
              <GraduationCap className="h-12 w-12 text-primary" />
              <h2 className="text-2xl md:text-3xl font-bold text-primary">Welcome to Excellence</h2>
            </div>
            <p className="text-center max-w-3xl">
              At <strong className="text-primary">SPM & LALAN's</strong> Coaching, we are committed to
              providing comprehensive programs that cater to the diverse needs
              of our students. In addition to our core offerings, we are proud
              to introduce the following specialized programs:​
            </p>
            <div className="flex items-center gap-4">
              <Button className="text-white w-fit group flex items-center gap-2 bg-primary hover:bg-primary/90 transition-all">
                <UserPlus className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Apply Now!
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button className="bg-secondary text-blue-600 hover:bg-secondary/90 transition-all">
                Book Free Counselling Session
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Super 30 Section */}
      <section className="gradient-bg hero-pattern py-20 text-white relative">
        <div className="absolute inset-0 bg-primary/90"></div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="md:text-6xl text-3xl font-bold mb-20">
              Dream big, achieve more: Additional Programs at SPM & LALAN'S
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
              <ReadMore id={""} text={""} />
              {/* ReadMore */}
              {isReadMore && (
                <div>
                  <h3 className="text-2xl pt-12 font-bold mb-8">
                    Key Features:
                  </h3>
                  <ul className="list-disc flex md:flex-row flex-col space-y-2 gap-8">
                    <li className="flex gap-2">
                      <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0" />
                      <p>
                        Classes 8–10: Focus on strengthening core concepts in
                        Physics, Chemistry, Mathematics, and Biology, with an
                        introduction to problem-solving strategies for Olympiads
                        and NTSE to build analytical skills.​
                      </p>
                    </li>

                    <li className="flex gap-2 ">
                      <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0" />
                      <p>
                        Classes 11–12: Advanced coaching modules for NEET, JEE
                        (Main/Advanced), and CUET integrated with the board
                        syllabus, including weekly doubt-clearing sessions and
                        mock tests mirroring actual exam patterns.​
                      </p>
                    </li>
                  </ul>
                </div>
              )}
              <div onClick={() => setisReadMore(!isReadMore)}>
                {" "}
                <Button className="text-white" variant={"link"}>
                  {isReadMore ? (
                    <>
                      {" "}
                      <ChevronUp />
                      Read More
                    </>
                  ) : (
                    <>
                      {" "}
                      <ChevronDown /> Read Less
                    </>
                  )}{" "}
                </Button>{" "}
              </div>
            </div>
            <h2 className="text-4xl font-bold mt-20 mb-6">Super 30 Batch</h2>
            <div className="glass-effect text-left p-8 rounded-xl">
              <Star className="h-16 w-16 text-secondary mx-auto mb-6" />
              <p className="text-lg mb-6 ">
                The Super 30 Batch is a prestigious scholarship program designed
                to support 90 meritorious students (30 each for Medical,
                Engineering, and Integrated streams) by providing 100% free
                tuition, study materials, and personalized mentorship. This
                initiative aims to empower talented aspirants to achieve top
                ranks in JEE and NEET examinations
              </p>
              {isReadMoreSuper && (
                <ul className="space-y-4 text-left mb-8">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0" />
                    <span>
                      Full Scholarship: Comprehensive coverage of tuition fees
                      and academic resources.​
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0" />
                    <span>
                      Expert Faculty: Guidance from experienced educators with a
                      proven track record in mentoring students for competitive
                      exams.​
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0" />
                    <span>
                      Personalized Mentorship: Individual attention to address
                      unique learning needs and challenges.​
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0" />
                    <span>
                      Residential Program: Provision of comfortable hostel
                      facilities, ensuring a conducive learning environment.​ ​
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0" />
                    <span>
                      Nutritious Meals: Daily provision of wholesome and
                      balanced meals to support students' health and well-being.
                      ​
                    </span>
                  </li>
                </ul>
              )}
              <div onClick={() => setisReadMoreSuper(!isReadMoreSuper)}>
                {" "}
                <Button className="text-white" variant={"link"}>
                  {isReadMoreSuper ? (
                    <>
                      {" "}
                      <ChevronUp />
                      Read More
                    </>
                  ) : (
                    <>
                      {" "}
                      <ChevronDown /> Read Less
                    </>
                  )}{" "}
                </Button>{" "}
              </div>
              <p className="py-10">
                These additional programs reflect our dedication to nurturing
                academic excellence and providing opportunities for all students
                to succeed.
              </p>
              <Button className="bg-secondary text-blue-600 hover:bg-secondary/90">
                Apply for Super 30
              </Button>
              <Button className="bg-primary text-white hover:bg-primary/90 mt-4">
                Book Free Counselling Session
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Teacher List */}
      <section className="py-20  bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-6 relative">
          <div className="max-w-6xl gradient-text text-3xl md:text-6xl py-10 md:py-20 font-bold   mx-auto text-center">
            Guiding Minds, Shaping Futures – Meet Our Expert Faculties at SPM &
            Lalan's
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
          <Button className="bg-secondary text-blue-600 hover:bg-secondary/90 text-lg px-8 py-6 shadow-glow">
            Apply Now
          </Button>
          <Button className="bg-primary text-white hover:bg-primary/90 text-lg px-8 py-6 shadow-glow mt-4">
            Book Free Counselling Session
          </Button>
        </div>
      </section>
    </main>
  );
}
