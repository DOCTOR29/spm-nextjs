import { 
  BookOpen, 
  Award, 
  Users, 
   
  Building, 
  DollarSign, 
  CheckCircle, 
   
  Star, 
  
  ChevronRight
} from 'lucide-react';
import EnquiryForm from './component/EnquiryForm';
import { OpenRegDialog } from './component/OpenDialog';


function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header
      <header className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <BookOpen className="h-8 w-8 mr-2" />
            <h1 className="text-2xl font-bold">SPM and Lalans Coaching</h1>
          </div>
          <nav className="flex flex-wrap justify-center gap-6">
            <a href="#why-choose" className="hover:text-blue-200 transition-colors">Why Choose Us</a>
            <a href="#benefits" className="hover:text-blue-200 transition-colors">Benefits</a>
            <a href="#programs" className="hover:text-blue-200 transition-colors">Programs</a>
            <a href="#comparison" className="hover:text-blue-200 transition-colors">Comparison</a>
            <a href="#contact" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md transition-colors">Contact Us</a>
          </nav>
        </div>
      </header> */}

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-indigo-900 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
     <h1 className="text-2xl md:text-5xl mb-6"><strong className='decoration-amber-300 underline-offset-4 underline'> SPM and LALAN's </strong>- The Best<strong> JEE and NEET</strong> Coaching in <strong>Guwahati</strong></h1>
          <p className="text-lg md:text-2xl mb-8 max-w-4xl mx-auto">Empowering students to achieve their dreams with expert guidance, personalized attention, and proven results.</p>
          <div className="flex flex-wrap justify-center gap-4">
            {/* <a href="#contact" className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold px-8 py-3 rounded-md transition-colors text-lg">Enroll Now</a> */}
            <OpenRegDialog title={"Enroll Now"} />
            <a href="https://spmandlalans.com/courses" target="_parent" className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-md transition-colors text-lg">Explore Programs</a>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">Why Choose SPM and Lalans Coaching for JEE and NEET?</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              SPM and Lalans Coaching is a top-rated JEE coaching centre in Guwahati and a trusted NEET coaching centre in Guwahati known for its exceptional teaching methods, expert faculty, and outstanding student results. With a proven track record of success in JEE and NEET exams, we ensure that every student gets the best guidance to achieve their dreams. Our student-first approach, comprehensive study materials, and personalized learning plans make us stand out as the best coaching institute in Guwahati for JEE and NEET.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">Key Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Award className="h-8 w-8 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Top JEE and NEET Results in Guwahati</h3>
              <p className="text-gray-600">Our students consistently achieve top ranks in competitive exams year after year.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Personalized Learning Plans</h3>
              <p className="text-gray-600">Customized study plans tailored to each student's strengths and weaknesses.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <BookOpen className="h-8 w-8 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Comprehensive Study Materials</h3>
              <p className="text-gray-600">Well-structured study materials and regular mock tests to track progress.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <DollarSign className="h-8 w-8 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Affordable Fee Structure</h3>
              <p className="text-gray-600">Flexible payment options and scholarships for deserving students.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">Why We're the Best Coaching Centre in Guwahati</h2>
          
          <div className="space-y-12 max-w-5xl mx-auto">
            {/* Feature 1 */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="bg-blue-100 p-4 rounded-full flex-shrink-0">
                <Award className="h-10 w-10 text-blue-700" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800">Top JEE and NEET Results in Guwahati</h3>
                <p className="text-gray-700 mb-4">Our best JEE coaching in Guwahati has produced multiple top rankers in the JEE and NEET exams. We take pride in the success stories of our students who have secured admissions to IITs, NITs, and top medical colleges across India.</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Consistently High Success Rates: Our coaching program has helped hundreds of students achieve their goals every year.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Top Rankers' Stories: Many of our alumni have scored in the top percentile, securing ranks in JEE Advanced, JEE Mains, and NEET.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Result-Oriented Approach: We focus on concept clarity, in-depth subject knowledge, and rigorous practice.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="bg-blue-100 p-4 rounded-full flex-shrink-0">
                <Users className="h-10 w-10 text-blue-700" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800">Expert Faculty and Personalized Attention</h3>
                <p className="text-gray-700 mb-4">Our faculty consists of highly experienced teachers and subject matter experts specializing in JEE and NEET coaching.</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Doubt-Clearing Sessions: We provide one-on-one mentorship to help students overcome their weaknesses.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Small Batch Sizes: A low student-to-teacher ratio ensures individual attention for every student.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Experienced Faculty: Our instructors are IITians, NITians, and doctors who have years of experience in training JEE and NEET aspirants.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="bg-blue-100 p-4 rounded-full flex-shrink-0">
                <BookOpen className="h-10 w-10 text-blue-700" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800">Comprehensive Study Materials and Mock Tests</h3>
                <p className="text-gray-700 mb-4">At SPM and Lalans Coaching, we offer high-quality study materials and practice tests designed to match the latest JEE and NEET syllabus.</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Conceptual Clarity: Our notes and study materials simplify complex topics for better understanding.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Regular Mock Tests: Students take weekly and monthly mock tests to track their performance.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Performance Analytics: We provide detailed feedback and performance analysis after every test.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="bg-blue-100 p-4 rounded-full flex-shrink-0">
                <Building className="h-10 w-10 text-blue-700" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800">Advanced Learning Infrastructure</h3>
                <p className="text-gray-700 mb-4">We offer state-of-the-art facilities to provide a superior learning environment.</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Smart Classrooms: Our coaching center is equipped with interactive boards and digital learning tools.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Study Labs: Students have access to modern study rooms for self-preparation.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Online and Offline Learning: We provide live and recorded classes for better flexibility.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="bg-blue-100 p-4 rounded-full flex-shrink-0">
                <DollarSign className="h-10 w-10 text-blue-700" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800">Affordable Fees and Flexible Payment Plans</h3>
                <p className="text-gray-700 mb-4">Unlike Allen and Narayana, our coaching institute provides top-quality education at an affordable cost.</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Cost-Effective Pricing: We offer the most competitive fee structure in Guwahati.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Scholarships and Discounts: Merit-based scholarships are available for deserving students.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Easy Payment Plans: Students can choose flexible EMI options for hassle-free payments.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* JEE & NEET Coaching Sections */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* JEE Coaching */}
            <div className="bg-white flex flex-col p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-blue-800">Why We Are the Best for JEE Coaching in Guwahati</h3>
              <p className="text-gray-700 mb-6">Our JEE coaching centre in Guwahati provides a structured and student-focused learning experience that guarantees results.</p>
              <h4 className="text-lg font-semibold mb-3 text-gray-800">Our JEE Coaching Features:</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Customized Study Plans: Based on the student's strengths and weaknesses.</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Interactive Learning Sessions: Encouraging active student participation.</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">High Success Rate: Hundreds of students crack JEE every year from our coaching center.</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Scholarship Options: We provide financial assistance to meritorious students.</span>
                </li>
              </ul>
              <div className="mt-auto">
              
              {/* <a target='_parent' className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md transition-colors">Enroll for JEE Coaching */}
                 <OpenRegDialog title={'Enroll for JEE Coaching'} variant={'blue'} />
              </div>
            </div>

            {/* NEET Coaching */}
            <div className="bg-white p-8 flex flex-col rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-green-800">Why We Are the Best for NEET Coaching in Guwahati</h3>
              <p className="text-gray-700 mb-6">Our NEET coaching centre in Guwahati has a strong track record of helping students excel in their medical entrance exams.</p>
              <h4 className="text-lg font-semibold mb-3 text-gray-800">Our NEET Coaching Features:</h4>
              <ul className="space-y-3 mb-18">
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Expert Faculty for NEET Preparation: Our faculty includes top medical educators.</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Comprehensive NEET Syllabus Coverage: We ensure detailed coverage of every NEET topic.</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Regular Mock Tests and Performance Analysis: Data-driven approach to improving student performance.</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Award-Winning Coaching Institute: Recognized as the best coaching for NEET in Guwahati.</span>
                </li>
              </ul>
              <div className="mt-auto  ">
                {/* <a href="https://spmandlalans.com/join-coaching-course/" target='_parent'  className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-md transition-colors">Enroll for NEET Coaching</a> */}

                <OpenRegDialog title={'Enroll for NEET Coaching'} variant={'green'} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">Our Comprehensive Coaching Programs</h2>
          <p className="text-lg text-center text-gray-700 mb-12 max-w-4xl mx-auto">We offer a variety of JEE and NEET coaching programs tailored to suit different student needs.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  {/* Program 1 */}
  <div className="bg-gray-50 flex flex-col rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
    <div className="bg-blue-800 text-white p-4">
      <h3 className="text-xl font-bold">Foundation Course</h3>
      <p className="text-sm">For Class 11 & 12</p>
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <p className="text-gray-700 mb-4">
        Designed for early-stage preparation, this program builds a strong foundation for JEE and NEET aspirants.
      </p>
      <ul className="space-y-2 mb-6">
        <li className="flex items-start">
          <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
          <span className="text-gray-700">
            Early Start Advantage: Students get a competitive edge by starting early.
          </span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
          <span className="text-gray-700">
            Complete Syllabus Coverage: We cover Physics, Chemistry, and Biology/Mathematics in-depth.
          </span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
          <span className="text-gray-700">
            Regular Assessments: Performance is tracked through weekly tests.
          </span>
        </li>
      </ul>
      <div className="text-center mt-auto">
        <a
          href="https://spmandlalans.com/courses/foundation-course/" target='_parent' 
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-md transition-colors"
        >
          Enroll Now
        </a>
      </div>
    </div>
  </div>

  {/* Program 2 */}
  <div className="bg-gray-50 flex flex-col rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
    <div className="bg-indigo-800 text-white p-4">
      <h3 className="text-xl font-bold">One-Year Course</h3>
      <p className="text-sm">For Repeaters</p>
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <p className="text-gray-700 mb-4">
        Aimed at students retaking JEE or NEET, this course helps them improve scores.
      </p>
      <ul className="space-y-2 mb-6">
        <li className="flex items-start">
          <CheckCircle className="h-5 w-5 text-indigo-600 mr-2 flex-shrink-0 mt-0.5" />
          <span className="text-gray-700">Intensive Training: Focused on strengthening weak areas.</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="h-5 w-5 text-indigo-600 mr-2 flex-shrink-0 mt-0.5" />
          <span className="text-gray-700">
            Mock Tests and Feedback: Regular exam simulations and detailed feedback.
          </span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="h-5 w-5 text-indigo-600 mr-2 flex-shrink-0 mt-0.5" />
          <span className="text-gray-700">
            Personalized Attention: One-on-one sessions to address specific challenges.
          </span>
        </li>
      </ul>
      <div className="text-center mt-auto">
        <a
         href="https://spmandlalans.com/courses/dropper-course/" target='_parent' 
          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-2 rounded-md transition-colors"
        >
          Enroll Now
        </a>
      </div>
    </div>
  </div>

  {/* Program 3 */}
  <div className="bg-gray-50 flex flex-col rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
    <div className="bg-purple-800 text-white p-4">
      <h3 className="text-xl font-bold">Weekend Batches</h3>
      <p className="text-sm">For Working Students</p>
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <p className="text-gray-700 mb-4">
        Special batches for students needing flexible schedules.
      </p>
      <ul className="space-y-2 mb-6">
        <li className="flex items-start">
          <CheckCircle className="h-5 w-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5" />
          <span className="text-gray-700">
            Convenient Timings: Classes are held on weekends and evenings.
          </span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="h-5 w-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5" />
          <span className="text-gray-700">
            Same Quality Education: Students receive the same high-standard coaching as regular batches.
          </span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="h-5 w-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5" />
          <span className="text-gray-700">
            Flexible Learning: Options for online and offline classes.
          </span>
        </li>
      </ul>
      <div className="text-center mt-auto">
        <a
         href="https://spmandlalans.com/join-coaching-course/" target='_parent' 
          className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-2 rounded-md transition-colors"
        >
          Enroll Now
        </a>
      </div>
    </div>
  </div>
</div>

        </div>
      </section>

      {/* Comparison Table */}
      <section id="comparison" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">Why SPM and Lalans Coaching is Better than Other Coaching in Guwahati</h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-lg">
              <thead className="bg-blue-800 text-white">
                <tr>
                  <th className="py-4 px-6 text-left">Feature</th>
                  <th className="py-4 px-6 text-left">SPM and Lalans Coaching</th>
                  <th className="py-4 px-6 text-left">Other Coaching Institutes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="py-4 px-6 text-black font-medium">Student-to-Teacher Ratio</td>
                  <td className="py-4 px-6 text-green-700 font-medium">Low (More Personal Attention)</td>
                  <td className="py-4 px-6 text-red-700">High</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-4 px-6 text-black  font-medium">Faculty Quality</td>
                  <td className="py-4 px-6 text-green-700 font-medium">Highly Experienced & IITians/Doctors</td>
                  <td className="py-4 px-6 text-red-700">Mixed</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-4 px-6 text-black  font-medium">Mock Tests & Analysis</td>
                  <td className="py-4 px-6 text-green-700 font-medium">Weekly, AI-Based Performance Reports</td>
                  <td className="py-4 px-6 text-red-700">Limited</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-4 px-6 text-black  font-medium">Study Materials</td>
                  <td className="py-4 px-6 text-green-700 font-medium">Comprehensive, Updated Regularly</td>
                  <td className="py-4 px-6 text-red-700">Generic</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-4 px-6 text-black  font-medium">Fees</td>
                  <td className="py-4 px-6 text-green-700 font-medium">Affordable with Scholarships</td>
                  <td className="py-4 px-6 text-red-700">Expensive</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-4 px-6 text-black  font-medium">Success Rate</td>
                  <td className="py-4 px-6 text-green-700 font-medium">High</td>
                  <td className="py-4 px-6 text-red-700">Moderate</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">What Our Students Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4">"SPM and Lalans Coaching helped me secure AIR 342 in JEE Advanced. The faculty's guidance and personalized attention made all the difference in my preparation."</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-800 font-bold">RK</span>
                </div>
                <div className="ml-3">
                  <h4 className="font-semibold text-black">Rahul Kumar</h4>
                  <p className="text-sm text-gray-600">JEE Advanced 2024</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4">"The study material and mock tests at SPM and Lalans Coaching are exceptional. I got into AIIMS Delhi thanks to their structured NEET preparation program."</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-800 font-bold">PS</span>
                </div>
                <div className="ml-3">
                  <h4 className="font-semibold text-black">Priya Sharma</h4>
                  <p className="text-sm text-gray-600">NEET 2024</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4">"After failing to clear JEE in my first attempt, I joined SPM and Lalans Coaching. Their one-year repeater course helped me secure a seat at NIT Silchar."</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                  <span className="text-indigo-800 font-bold">AD</span>
                </div>
                <div className="ml-3">
                  <h4 className="font-semibold text-black">Amit Das</h4>
                  <p className="text-sm text-gray-600">JEE Main 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-800 to-indigo-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join the Best Coaching Institute in Guwahati for JEE and NEET Today!</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">At SPM and Lalans Coaching, we are committed to shaping the future of students by providing top-notch JEE and NEET coaching in Guwahati. Whether you are aiming for IIT, AIIMS, or top medical colleges, our personalized learning approach, expert faculty, and advanced infrastructure will guide you toward success.</p>
          <div className="text-center">
            <a href="https://spmandlalans.com/join-coaching-course/" target='_parent'  className="inline-block bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold px-8 py-4 rounded-md transition-colors text-lg">Enroll Now</a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">Contact Us</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Get in Touch</h3>
              <p className="text-gray-700 mb-8">Have questions about our coaching programs? Fill out the form and our team will get back to you within 24 hours.</p>
              
              {/* <div className="space-y-4">
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-blue-700 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Phone</h4>
                    <p className="text-gray-700">+91 98765 43210</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-blue-700 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Email</h4>
                    <p className="text-gray-700">info@SPM and Lalanscoaching.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-blue-700 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Address</h4>
                    <p className="text-gray-700">123 Education Hub, G.S. Road, Guwahati, Assam - 781005</p>
                  </div>
                </div>
              </div> */}
            </div>
            
            <div>
            <EnquiryForm/>
              {/* <form className="bg-gray-50 p-8 text-black rounded-lg shadow-md">
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name</label>
                  <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Name" />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                  <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Email" />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
                  <input type="tel" id="phone" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Phone" />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="course" className="block text-gray-700 font-medium mb-2">Interested In</label>
                  <select id="course" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="">Select a Course</option>
                    <option value="jee">JEE Coaching</option>
                    <option value="neet">NEET Coaching</option>
                    <option value="foundation">Foundation Course</option>
                    <option value="repeater">Repeater Course</option>
                    <option value="weekend">Weekend Batch</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea id="message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Message"></textarea>
                </div>
                
                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md transition-colors">Submit Enquiry</button>
              </form> */}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
{/*       
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <BookOpen className="h-8 w-8 mr-2" />
                <h3 className="text-xl font-bold">SPM and Lalans Coaching</h3>
              </div>
              <p className="text-gray-400">The best JEE and NEET coaching centre in Guwahati, dedicated to helping students achieve their dreams.</p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#why-choose" className="text-gray-400 hover:text-white transition-colors">Why Choose Us</a></li>
                <li><a href="#benefits" className="text-gray-400 hover:text-white transition-colors">Benefits</a></li>
                <li><a href="#programs" className="text-gray-400 hover:text-white transition-colors">Programs</a></li>
                <li><a href="#comparison" className="text-gray-400 hover:text-white transition-colors">Comparison</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Programs</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">JEE Coaching</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">NEET Coaching</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Foundation Course</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Repeater Course</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Weekend Batch</a></li>
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
                  <span className="text-gray-400">info@SPM and Lalanscoaching.com</span>
                </li>
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 mr-2 text-gray-400 mt-1" />
                  <span className="text-gray-400">123 Education Hub, G.S. Road, Guwahati, Assam - 781005</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">&copy; {new Date().getFullYear()} SPM and Lalans Coaching. All rights reserved.</p>
          </div>
        </div>
      </footer> */}
    </div>
  );
}

export default App;