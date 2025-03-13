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
    Send
  } from 'lucide-react';
  


export default function page(){
    return  <section id="register" className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">Register for Super 30 Batch</h2>
      
      <div className="max-w-3xl mx-auto">
        <form  className="bg-gray-50 p-8 rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="col-span-2 md:col-span-1">
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name*</label>
              <div className="flex items-center border border-gray-300 rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500">
                <span className="px-3 py-2 bg-gray-100 text-gray-500">
                  <User className="h-5 w-5" />
                </span>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                //   value={formData.name}
                //   onChange={handleChange}
                  required
                  className="w-full px-4 py-2 focus:outline-none" 
                  placeholder="Your Name" 
                />
              </div>
            </div>
            
            <div className="col-span-2 md:col-span-1">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address*</label>
              <div className="flex items-center border border-gray-300 rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500">
                <span className="px-3 py-2 bg-gray-100 text-gray-500">
                  <Mail className="h-5 w-5" />
                </span>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                //   value={formData.email}
                //   onChange={handleChange}
                  required
                  className="w-full px-4 py-2 focus:outline-none" 
                  placeholder="Your Email" 
                />
              </div>
            </div>
            
            <div className="col-span-2 md:col-span-1">
              <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number*</label>
              <div className="flex items-center border border-gray-300 rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500">
                <span className="px-3 py-2 bg-gray-100 text-gray-500">
                  <Phone className="h-5 w-5" />
                </span>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone"
                //   value={formData.phone}
                //   onChange={handleChange}
                  required
                  className="w-full px-4 py-2 focus:outline-none" 
                  placeholder="Your Phone" 
                />
              </div>
            </div>
            
            <div className="col-span-2 md:col-span-1">
              <label htmlFor="school" className="block text-gray-700 font-medium mb-2">School/College*</label>
              <div className="flex items-center border border-gray-300 rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500">
                <span className="px-3 py-2 bg-gray-100 text-gray-500">
                  <School className="h-5 w-5" />
                </span>
                <input 
                  type="text" 
                  id="school" 
                  name="school"
                //   value={formData.school}
                //   onChange={handleChange}
                  required
                  className="w-full px-4 py-2 focus:outline-none" 
                  placeholder="Your School/College" 
                />
              </div>
            </div>
            
            <div className="col-span-2 md:col-span-1">
              <label htmlFor="grade" className="block text-gray-700 font-medium mb-2">Current Grade/Class*</label>
              <select 
                id="grade" 
                name="grade"
                // value={formData.grade}
                // onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select Your Class</option>
                <option value="10">Class 10</option>
                <option value="11">Class 11</option>
                <option value="12">Class 12</option>
                <option value="12-pass">Class 12 Passed</option>
              </select>
            </div>
            
            <div className="col-span-2 md:col-span-1">
              <label htmlFor="program" className="block text-gray-700 font-medium mb-2">Interested Program*</label>
              <select 
                id="program" 
                name="program"
                // value={formData.program}
                // onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select a Program</option>
                <option value="super30-medical">Super 30 (Medical) - NEET</option>
                <option value="super30-jee">Super 30 (JEE) - Engineering</option>
                <option value="super30-integrated">Super 30 (15+15) - Integrated</option>
              </select>
            </div>
            
            <div className="col-span-2">
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Why do you want to join Super 30?</label>
              <textarea 
                id="message" 
                name="message"
                // value={formData.message}
                // onChange={handleChange}
                rows={4} 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                placeholder="Tell us about your goals and why you should be selected..."
              ></textarea>
            </div>
          </div>
          
          <div className="mt-8">
            <button 
              type="submit" 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md transition-colors flex items-center justify-center"
            >
              <Send className="h-5 w-5 mr-2" />
              Submit Application
            </button>
          </div>
          
          <p className="text-sm text-gray-500 mt-4 text-center">
            By submitting this form, you agree to participate in the selection process for the Super 30 Batch.
            
          </p>
          <p className="text-sm text-gray-500 mt-4 text-center">* T&C applied</p>
        </form>
      </div>
    </div>
  </section>
}