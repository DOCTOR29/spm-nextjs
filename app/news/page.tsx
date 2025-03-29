import { Newspaper, Calendar, ArrowRight } from 'lucide-react';

interface NewsArticle {
  title: string;
  date: string;
  summary: string;
  source: string;
  logo: string;
}

const pressLogos = {
  'Reuters': 'https://images.unsplash.com/photo-1679690598219-39456ce75944?q=80&w=50&auto=format&fit=crop',
  'Bloomberg': 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=50&auto=format&fit=crop',
  'Associated Press': 'https://images.unsplash.com/photo-1590070714379-94df52d14a34?q=80&w=50&auto=format&fit=crop',
  'Financial Times': 'https://images.unsplash.com/photo-1611605698335-8b1569810432?q=80&w=50&auto=format&fit=crop'
};

const newsArticles: NewsArticle[] = [
  {
    title: '[Institution Name] Introduces Cutting-Edge Online Learning Platform',
    date: 'March 29, 2025',
    summary: '[Institution Name] has launched a new online learning platform designed to offer flexible, high-quality education for students worldwide. The platform features interactive modules, live sessions, and personalized learning paths to cater to diverse learning styles.',
    source: 'Reuters',
    logo: pressLogos.Reuters
  },
  {
    title: '[Institution Name] Partners with Global Universities for Research Initiative',
    date: 'March 28, 2025',
    summary: 'In a bid to foster international research collaboration, [Institution Name] has partnered with leading universities across the globe. The new initiative will focus on joint research projects, faculty exchange programs, and collaborative innovations in various fields.',
    source: 'Bloomberg',
    logo: pressLogos.Bloomberg
  },
  {
    title: '[Institution Name] Wins Award for Sustainable Campus Development',
    date: 'March 27, 2025',
    summary: '[Institution Name] has been awarded a prestigious sustainability award for its ongoing efforts to reduce the carbon footprint of its campus. The institution\'s eco-friendly initiatives include solar power, waste management, and green building designs.',
    source: 'Associated Press',
    logo: pressLogos['Associated Press']
  },
  {
    title: '[Institution Name] Celebrates Record Graduation Rates for STEM Students',
    date: 'March 26, 2025',
    summary: '[Institution Name] has announced a significant milestone, with over 90% of its STEM graduates successfully securing jobs within six months of graduation. This achievement is a testament to the institution\'s commitment to providing high-quality education and career preparation.',
    source: 'Financial Times',
    logo: pressLogos['Financial Times']
  },
  {
    title: '[Institution Name] Hosts Annual International Conference on Technology and Education',
    date: 'March 25, 2025',
    summary: 'The [Institution Name] hosted its Annual International Conference on Technology and Education, featuring keynote speakers from top tech companies and academic leaders. The event attracted hundreds of educators and innovators, discussing the future of technology in education.',
    source: 'Reuters',
    logo: pressLogos.Reuters
  },
  {
    title: '[Institution Name] Expands Campus with New Research and Innovation Center',
    date: 'March 24, 2025',
    summary: 'To foster innovation and cutting-edge research, [Institution Name] has unveiled a new Research and Innovation Center. The facility is equipped with state-of-the-art laboratories and collaborative spaces designed to promote interdisciplinary studies.',
    source: 'Bloomberg',
    logo: pressLogos.Bloomberg
  },
  {
    title: '[Institution Name] Launches New Internship Program with Leading Corporations',
    date: 'March 23, 2025',
    summary: '[Institution Name] has introduced a new internship program that connects students with top industry leaders. Through this initiative, students will gain real-world experience and build essential skills before entering the job market.',
    source: 'Associated Press',
    logo: pressLogos['Associated Press']
  },
  {
    title: '[Institution Name] Celebrates Diversity and Inclusion with Cultural Awareness Week',
    date: 'March 22, 2025',
    summary: '[Institution Name] held its annual Cultural Awareness Week to celebrate diversity on campus. The event featured multicultural performances, food festivals, and discussions, promoting inclusivity and global understanding among students and faculty.',
    source: 'Financial Times',
    logo: pressLogos['Financial Times']
  },
  {
    title: '[Institution Name] Announces Scholarships for Underrepresented Communities',
    date: 'March 21, 2025',
    summary: 'In a commitment to supporting underrepresented students, [Institution Name] has announced new scholarships aimed at increasing diversity in higher education. The scholarships will provide financial assistance to talented students from disadvantaged backgrounds.',
    source: 'Reuters',
    logo: pressLogos.Reuters
  },
  {
    title: '[Institution Name] Launches Entrepreneurship Program for Aspiring Innovators',
    date: 'March 20, 2025',
    summary: '[Institution Name] has introduced a new Entrepreneurship Program designed to help students develop business ideas from concept to launch. The program offers mentorship, resources, and access to investors to turn innovative ideas into successful ventures.',
    source: 'Bloomberg',
    logo: pressLogos.Bloomberg
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="bg-[#1D458A] text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-8">
              <div className="bg-white rounded-full p-6 shadow-xl transform hover:scale-105 transition-transform duration-300">
                <Newspaper className="w-16 h-16 text-[#1D458A]" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">Latest Institution News</h1>
            <p className="text-lg text-gray-200">Stay updated with our latest announcements, achievements, and initiatives</p>
          </div>
        </div>
        <div className="h-24 bg-gradient-to-b from-[#1D458A] to-white/0"></div>
      </header>

      {/* News Grid */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsArticles.map((article, index) => (
            <article 
              key={index} 
              className="group bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <time>{article.date}</time>
                  </div>
                  <div className="bg-gray-50  p-2">
                    <img 
                      src={article.logo} 
                      alt={`${article.source} logo`}
                      className=" object-cover group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                </div>
                <h2 className="text-xl font-semibold text-[#1D458A] mb-3 line-clamp-2 group-hover:text-[#1D458A]/80">
                  {article.title}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {article.summary}
                </p>
                <div className="flex items-center justify-between">
                  <button className="inline-flex items-center text-[#1D458A] hover:text-[#F8DB06] transition-colors duration-200">
                    Read more
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <span className="text-sm text-gray-400">{article.source}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}