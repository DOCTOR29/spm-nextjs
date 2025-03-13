


export default function EnquiryForm() {
    return (
      <form 
        action="https://docs.google.com/forms/d/e/1FAIpQLSd8Bbo5juF52K026ohEpL0Kdb9p0TFcQCYZuFF2Smd3esFLyw/formResponse" 
        method="POST" 
        className="flex mt-10 text-left flex-col gap-5 bg-gray-50 p-8 text-black rounded-lg shadow-md"
      >
        <div>
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name</label>
          <input type="text" id="name" name="entry.1082769987" required 
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
            placeholder="Your Name" 
          />
        </div>
  
        <div>
          <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
          <input type="tel" id="phone" name="entry.1175656234" required 
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
            placeholder="Your Phone" 
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
          <input type="email" id="email" name="entry.89470469" required 
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
            placeholder="Your Email" 
          />
        </div>
  
        <div>
          <label htmlFor="course" className="block text-gray-700 font-medium mb-2">Course Interest</label>
          <select id="course" name="entry.817333411" required 
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
            <option value="">Select a Course</option>
            <option value="NEET">NEET</option>
            <option value="JEE">JEE</option>
            <option value="CEE">CEE</option>
          </select>
        </div>
        
        <button 
          type="submit" 
          className="w-full bg-gradient-to-r from-blue-800 to-blue-500 text-white font-bold py-3 px-4 rounded-lg transition-all shadow-md hover:shadow-lg hover:opacity-90 uppercase tracking-wide">
          Book Free Consulation
        </button>
      </form>
    );
  }
  