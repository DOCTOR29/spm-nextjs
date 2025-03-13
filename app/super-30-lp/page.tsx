'use client'
import React, { useState } from 'react';
import {
  BookOpen,
  Award,
  Users,
  CheckCircle,
  Star,
  Calendar,
  FileText,
  User,
  UserCheck,
  School,
  Phone,
  Mail,
  MapPin,
  Send,
  PartyPopper
} from 'lucide-react';

// import { OpenRegDialog } from '../component/OpenDialog';
import Super30Form from '../component/ReactForm';

function Page() {
  //   const [formData, setFormData] = useState({
  //     name: '',
  //     email: '',
  //     phone: '',
  //     school: '',
  //     grade: '',
  //     program: '',
  //     message: ''
  //   });

  //   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
  //     const { name, value } = e.target;
  //     setFormData(prevState => ({
  //       ...prevState,
  //       [name]: value
  //     }));
  //   };

  const urlAnchor = "https://spmandlalans.com/lp/super-30-coaching/#apply-form"

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      {/* <header className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <BookOpen className="h-8 w-8 mr-2" />
            <h1 className="text-2xl font-bold">Lalans Coaching</h1>
          </div>
          <nav className="flex flex-wrap justify-center gap-6">
            <a href="/" className="hover:text-blue-200 transition-colors">Home</a>
            <a href="#about" className="hover:text-blue-200 transition-colors">About Super 30</a>
            <a href="#programs" className="hover:text-blue-200 transition-colors">Programs</a>
            <a href="#selection" className="hover:text-blue-200 transition-colors">Selection Process</a>
            <a href="#register" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md transition-colors">Apply Now</a>
          </nav>
        </div>
      </header> */}

      {/* Hero Section */}
      {/* <section className="bg-gradient-to-b from-indigo-900 to-blue-800 text-white py-20"> */}
      {/* <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Super-30 Batch: 100% Scholarship for JEE/NEET Aspirants</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">Empowering talented students to achieve their dreams without financial barriers.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://spmandlalans.com/super-30-scholarship/#super30-form" target="_parent" className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold px-8 py-3 rounded-md transition-colors text-lg">Apply Now</a> */}
      {/* <!-- Inside your iframe's HTML --> */}



      {/* <OpenRegDialog title={'Apply Now'} super30={true} /> */}
      {/* <a href="https://spmandlalans.com/courses" target='_parent'  className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-md transition-colors text-lg">Explore Programs</a>
          </div>
        </div> */}
      {/* </section> */}

      {/* Introduction Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">About Super 30 Batch</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              The path to becoming a successful engineer or doctor begins with quality education and proper guidance. Recognizing this need, SPM & Lalan's Coaching is proud to announce the launch of its exclusive Super-30 Batch for JEE and NEET aspirants. This initiative offers a 100% scholarship, making quality education accessible to talented students with big dreams.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 mb-8">
              <h3 className="text-xl font-bold mb-3 text-blue-800">Educational Philosophy</h3>
              <p className="text-gray-700">
                The SPM & LALAN's Coaching prioritizes conceptual understanding instead of rote memorization, empowering students to work more intelligently. This effective approach ensures that students not only grasp fundamental principles but also become adept at applying their knowledge confidently during examinations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">Our Super 30 Programs</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Program 1 */}
            <div className="bg-white flex flex-col h-full rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-green-700 w-full text-white p-4">
                <h3 className="text-xl font-bold">Super 30 (Medical)</h3>
                <p className="text-sm">For NEET Aspirants</p>
              </div>
              <div className="p-6 flex-1">
                <p className="text-gray-700 mb-4">Specially structured for Class 12 appearing & pass-out students aiming for top ranks in NEET.</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Expert faculty including doctors, NEET rankers, and subject specialists.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Comprehensive NEET-focused syllabus and daily DPPs.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">National-level test series and in-depth conceptual learning.</span>
                  </li>
                </ul>
              </div>
              <div className="pb-4 px-4">
                <a href={urlAnchor} className="inline-block w-full text-center bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-md transition-colors">
                  Apply Now
                </a>
              </div>
            </div>

            {/* Program 2 */}
            <div className="bg-white flex flex-col h-full rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-blue-700 w-full text-white p-4">
                <h3 className="text-xl font-bold">Super 30 (JEE)</h3>
                <p className="text-sm">For Engineering Aspirants</p>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <p className="text-gray-700 mb-4">Designed for Class 12 appearing & pass-out students targeting JEE Mains & Advanced.</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Mentorship from IIT/NIT graduates and JEE toppers.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Advanced problem-solving sessions and regular tests.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Personalized guidance for maximum performance.</span>
                  </li>
                </ul>
                <div className="mt-auto">
                  <a href={urlAnchor} className="inline-block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-md transition-colors">
                    Apply Now
                  </a>
                </div>
              </div>
            </div>

            {/* Program 3 */}
            <div className="bg-white flex flex-col h-full rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-purple-700 w-full text-white p-4">
                <h3 className="text-xl font-bold">Super 30 (15+15)</h3>
                <p className="text-sm">For Integrated Students (Class 10)</p>
              </div>
              <div className="p-6 flex-1">
                <p className="text-gray-700 mb-4">Special batch for Class 10 students aspiring for JEE & NEET.</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Integrated curriculum balancing school education with entrance exam preparation.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Expert mentorship and scientific learning approach.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Strong conceptual base to excel in Class 11 & 12.</span>
                  </li>
                </ul>
              </div>
              <div className="pb-4 px-4">
                <a href={urlAnchor} className="inline-block w-full text-center bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-2 rounded-md transition-colors">
                  Apply Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Selection Process */}
      <section id="selection" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">Selection Process</h2>

          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-center text-gray-700 mb-10">
              The admission to SPM & Lalans Super 30 is through a three-stage selection process:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-blue-50 rounded-lg p-6 text-center relative">
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold">1</div>
                <FileText className="h-12 w-12 mx-auto mb-4 text-blue-600" />
                <h3 className="text-xl font-bold mb-2 text-gray-800">Online Test</h3>
                <p className="text-gray-600">Initial screening through our Eklavya Portal</p>
              </div>

              <div className="bg-blue-50 rounded-lg p-6 text-center relative">
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold">2</div>
                <Calendar className="h-12 w-12 mx-auto mb-4 text-blue-600" />
                <h3 className="text-xl font-bold mb-2 text-gray-800">Offline Test</h3>
                <p className="text-gray-600">Written examination at designated centers</p>
              </div>

              <div className="bg-blue-50 rounded-lg p-6 text-center relative">
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold">3</div>
                <User className="h-12 w-12 mx-auto mb-4 text-blue-600" />
                <h3 className="text-xl font-bold mb-2 text-gray-800">Personal Interview</h3>
                <p className="text-gray-600">Final assessment of aptitude and potential</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">Why Choose the Super-30 Batch?</h2>

          <div className="space-y-12 max-w-5xl mx-auto">
            {/* Faculty */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="bg-blue-100 p-4 rounded-full flex-shrink-0">
                <Users className="h-10 w-10 text-blue-700" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800">1. Experienced Faculty</h3>
                <p className="text-gray-700 mb-4">
                  SPM & Lalan's Coaching is proud to have a team of distinguished educators from premier institutions like IITs, engineering, and medical colleges. Leading this exceptional team is Lalan Kumar Sir, Founder and Managing Director, who brings over 19 years of experience in teaching and mentoring students. An esteemed B.Tech graduate from IIT Guwahati, Lalan Kumar Sir is celebrated for his innovative teaching methods, especially in Chemistry, and his unwavering commitment to academic excellence.
                </p>
                <p className="text-gray-700 mb-4">
                  Joining him is Aviral Sir, an extraordinary intellect from IIT Kanpur, who secured the prestigious AIR 1 in IIT JAM.
                </p>
                <p className="text-gray-700">
                  With the unmatched expertise and guidance of our faculty, we are dedicated to delivering top-quality education and shaping the future of our students.
                </p>
              </div>
            </div>

            {/* Results */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="bg-blue-100 p-4 rounded-full flex-shrink-0">
                <Award className="h-10 w-10 text-blue-700" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800">2. Proven Results</h3>
                <p className="text-gray-700">
                  Year after year, students from SPM & Lalan's Coaching secure top ranks in JEE (Main & Advanced), NEET, and CEE, demonstrating the institute's commitment to producing successful candidates.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="bg-blue-100 p-4 rounded-full flex-shrink-0">
                <PartyPopper className="h-10 w-10 text-blue-700" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800">3. 100% Scholarship for Meritorious Students</h3>
                <p className="text-gray-700">

                  SPM & Lalan’s Coaching firmly believes that financial constraints should never hinder a student's aspirations. To support deserving candidates, the Super-30 Batch offers a 100% scholarship, covering tuition fees, a comfortable hostel facility, nutritious food, and security entirely. This initiative ensures that talented students receive the best possible guidance without any financial burden, enabling them to focus solely on their preparation for JEE and NEET.
                </p>
              </div>
            </div>
            <div className='w-full flex flex-col items-center'>
              <a href={urlAnchor} className="inline-block  text-center w-72 bg-blue-600 hover:bg-purple-700 text-white font-semibold px-6 py-2 rounded-md transition-colors">Apply Now</a></div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">Facilities We Provide</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <School className="h-8 w-8 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Spacious Classrooms</h3>
              <p className="text-gray-600">Well-equipped and designed for interactive learning.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <FileText className="h-8 w-8 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">State-of-the-Art Labs</h3>
              <p className="text-gray-600">Providing hands-on practical learning experiences.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <MapPin className="h-8 w-8 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Comfortable Hostel</h3>
              <p className="text-gray-600">Ensuring a focused and distraction-free study environment.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Star className="h-8 w-8 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Nutritious Meals</h3>
              <p className="text-gray-600">Prepared in a hygienic kitchen to promote student health.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <UserCheck className="h-8 w-8 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">24x7 Security</h3>
              <p className="text-gray-600">CCTV surveillance ensures a safe and secure campus.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-800 to-indigo-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Take the First Step Towards Your Goal</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            The Super-30 Batch is more than just a scholarship program; it is a commitment to nurturing young minds and preparing them for a successful future. At SPM & Lalan's Coaching, we believe that financial barriers should never stand in the way of your dreams.
          </p>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Register now and embark on your journey to success with us. Let your aspirations take flight with the right guidance, support, and resources—because your potential deserves every opportunity to shine, regardless of financial constraints.
          </p>
          <div className="bg-yellow-100 text-yellow-800 p-4 rounded-lg inline-block mb-8 mx-4">
            <p className="font-bold">Seats are limited and only the most deserving candidates will be selected for this prestigious program. Don't miss this golden opportunity!</p>
          </div>
          {/* <OpenRegDialog title={'Apply Now'}  super30={true} /> */}
          {/* <a href="#register" className="inline-block bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold px-8 py-4 rounded-md transition-colors text-lg">Apply Now!</a> */}
        </div>
      </section>

      {/* Registration Form */}
      {/* Registration Form */}

      {/* <Super30Form/> */}
      {/* Footer */}
      {/* <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <BookOpen className="h-8 w-8 mr-2" />
                <h3 className="text-xl font-bold">Lalans Coaching</h3>
              </div>
              <p className="text-gray-400">The best JEE and NEET coaching centre in Guwahati, dedicated to helping students achieve their dreams.</p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="/" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Super 30</a></li>
                <li><a href="#programs" className="text-gray-400 hover:text-white transition-colors">Programs</a></li>
                <li><a href="#selection" className="text-gray-400 hover:text-white transition-colors">Selection Process</a></li>
                <li><a href="#register" className="text-gray-400 hover:text-white transition-colors">Apply Now</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Programs</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Super 30 (Medical)</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Super 30 (JEE)</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Super 30 (15+15)</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Regular Batches</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Phone className="h-5 w-5 mr-2 text-gray-400" />
                  <span className="text-gray-400">+91 98765 43210</span>
                </li>
                <li className="flex items-center">
                  <Mail className="h-5 w-5 mr-2 text-gray-400" />
                  <span className="text-gray-400">info@lalanscoaching.com</span>
                </li>
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 mr-2 text-gray-400 mt-1" />
                  <span className="text-gray-400">123 Education Hub, G.S. Road, Guwahati, Assam - 781005</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">&copy; {new Date().getFullYear()} Lalans Coaching. All rights reserved.</p>
          </div>
        </div>
      </footer> */}
    </div>
  );
}

export default Page;