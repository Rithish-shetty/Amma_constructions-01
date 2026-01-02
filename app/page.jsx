'use client'


import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, Clock, CheckCircle, Award, Users, Hammer } from 'lucide-react';

export default function page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState('english');

  const services = [
    { 
      title: language === 'english' ? "Residential Construction" : "ವಸತಿ ನಿರ್ಮಾಣ", 
      description: language === 'english' ? "Custom homes and renovations tailored to your vision" : "ನಿಮ್ಮ ದೃಷ್ಟಿಗೆ ತಕ್ಕಂತೆ ಕಸ್ಟಮ್ ಮನೆಗಳು ಮತ್ತು ನವೀಕರಣಗಳು" 
    },
    { 
      title: language === 'english' ? "Commercial Building" : "ವಾಣಿಜ್ಯ ಕಟ್ಟಡ", 
      description: language === 'english' ? "Professional spaces built with precision and efficiency" : "ನಿಖರತೆ ಮತ್ತು ದಕ್ಷತೆಯೊಂದಿಗೆ ವೃತ್ತಿಪರ ಸ್ಥಳಗಳನ್ನು ನಿರ್ಮಿಸಲಾಗಿದೆ" 
    },
    { 
      title: language === 'english' ? "Remodeling & Renovation" : "ಮರುರೂಪಿಸುವಿಕೆ ಮತ್ತು ನವೀಕರಣ", 
      description: language === 'english' ? "Transform existing spaces into modern masterpieces" : "ಅಸ್ತಿತ್ವದಲ್ಲಿರುವ ಸ್ಥಳಗಳನ್ನು ಆಧುನಿಕ ಮಾಸ್ಟರ್‌ಪೀಸ್‌ಗಳಾಗಿ ಪರಿವರ್ತಿಸಿ" 
    },
    { 
      title: language === 'english' ? "Project Management" : "ಯೋಜನಾ ನಿರ್ವಹಣೆ", 
      description: language === 'english' ? "End-to-end oversight ensuring quality and timeliness" : "ಗುಣಮಟ್ಟ ಮತ್ತು ಸಮಯಪಾಲನೆಯನ್ನು ಖಚಿತಪಡಿಸುವ ಸಂಪೂರ್ಣ ಮೇಲ್ವಿಚಾರಣೆ" 
    }
  ];

  const projects = [
    { name: "Luxury Villa Construction", location: "Beverly Hills", year: "2024" },
    { name: "Downtown Office Complex", location: "Manhattan", year: "2023" },
    { name: "Residential Renovation", location: "Brooklyn", year: "2024" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-gray-900 text-white sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Hammer className="h-8 w-8 text-orange-500" />
              <span className="ml-2 text-xl font-bold">Amma Construction</span>
            </div>
            
            <div className="hidden md:flex space-x-8 items-center">
              <a href="#home" className="hover:text-orange-500 transition">{language === 'english' ? 'Home' : 'ಮುಖಪುಟ'}</a>
              <a href="#about" className="hover:text-orange-500 transition">{language === 'english' ? 'About' : 'ನಮ್ಮ ಬಗ್ಗೆ'}</a>
              <a href="#services" className="hover:text-orange-500 transition">{language === 'english' ? 'Services' : 'ಸೇವೆಗಳು'}</a>
              <a href="#projects" className="hover:text-orange-500 transition">{language === 'english' ? 'Projects' : 'ಯೋಜನೆಗಳು'}</a>
              <a href="#contact" className="hover:text-orange-500 transition">{language === 'english' ? 'Contact' : 'ಸಂಪರ್ಕ'}</a>
            </div>

            <div className="flex items-center gap-4">
              <button 
                onClick={() => setLanguage(language === 'english' ? 'kannada' : 'english')}
                className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-lg font-semibold transition"
              >
                {language === 'english' ? 'ಕನ್ನಡ' : 'English'}
              </button>
              
              <button 
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 px-4 py-4 space-y-3">
            <a href="#home" className="block hover:text-orange-500">{language === 'english' ? 'Home' : 'ಮುಖಪುಟ'}</a>
            <a href="#about" className="block hover:text-orange-500">{language === 'english' ? 'About' : 'ನಮ್ಮ ಬಗ್ಗೆ'}</a>
            <a href="#services" className="block hover:text-orange-500">{language === 'english' ? 'Services' : 'ಸೇವೆಗಳು'}</a>
            <a href="#projects" className="block hover:text-orange-500">{language === 'english' ? 'Projects' : 'ಯೋಜನೆಗಳು'}</a>
            <a href="#contact" className="block hover:text-orange-500">{language === 'english' ? 'Contact' : 'ಸಂಪರ್ಕ'}</a>
            <button 
              onClick={() => setLanguage(language === 'english' ? 'kannada' : 'english')}
              className="w-full bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-lg font-semibold transition"
            >
              {language === 'english' ? 'ಕನ್ನಡ' : 'English'}
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative bg-linear-to-r from-gray-900 to-gray-700 text-white py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">{language === 'english' ? 'Amma Construction' : 'ಅಮ್ಮ ಕನ್ಸ್ಟ್ರಕ್ಷನ್'}</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">Building Dreams into Reality Since 1995</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="#contact" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition">
                Get a Quote
              </a>
              <a href="#projects" className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition">
                {language === 'english' ? 'View Projects' : 'ಪ್ರಾಜೆಕ್ಟ್‌ಗಳನ್ನು ವೀಕ್ಷಿಸಿ'}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contractor Details */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet Your Contractor</h2>
              <h3 className="text-2xl font-semibold text-orange-500 mb-4">{language === 'english' ? 'Ramesh S M' : 'ರಾಮೇಶ್ ಎಸ್ ಎಂ'}</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                {language === 'english' ? 'Licensed General Contractor with over 28 years of experience in Building construction.As the founder and lead contractor of Amma Construction, Ive dedicated my career to delivering exceptional craftsmanship and unmatched customer service.' : '28 ವರ್ಷಗಳ ಅನುಭವ ಹೊಂದಿರುವ ಲೈಸೆನ್ಸ್ಡ್ ಸಾಮಾನ್ಯ ಕಾನ್ಟ್ರಾಕ್ಟರ್. ಅಮ್ಮ ಕಾನ್ಸ್ಟ್ರಕ್ಷನ್‌ನ ಸ್ಥಾಪಕ ಮತ್ತು ಪ್ರಮುಖ ಕಾನ್ಟ್ರಾಕ್ಟರ್ ಆಗಿ, ನಾನು ನನ್ನ ವೃತ್ತಿಜೀವನವನ್ನು ಅತ್ಯುತ್ತಮ ಶಿಲ್ಪಕಲೆಯನ್ನು ಮತ್ತು ಅಸಾಧಾರಣ ಗ್ರಾಹಕ ಸೇವೆಯನ್ನು ನೀಡುವುದಕ್ಕೆ ಹರಸಿಹ been್ಟಿರುವೆನು.'}
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {language === 'english' ? 'My team and I are committed to turning your construction visions into reality, ensuring every project is completed on time and within budget. We pride ourselves on our attention to detail, quality workmanship, and transparent communication throughout the entire process.' : 'ನನ್ನ ತಂಡ ಮತ್ತು ನಾನು ನಿಮ್ಮ ನಿರ್ಮಾಣ ದೃಷ್ಟಿಗಳನ್ನು ವಾಸ್ತವವಾಗಿ ಪರಿವರ್ತಿಸುವುದಕ್ಕೆ ಬದ್ಧರಾಗಿದ್ದೇವೆ, ಪ್ರತಿ ಯೋಜನೆಯೂ ಸಮಯಕ್ಕೆ ಸರಿಯಾಗಿ ಮತ್ತು ಬಜೆಟ್ ಒಳಗೆ ಪೂರ್ಣಗೊಳ್ಳುತ್ತದೆ ಎಂದು ಖಚಿತಪಡಿಸುತ್ತೇವೆ. ಸಂಪೂರ್ಣ ಪ್ರಕ್ರಿಯೆಯಲ್ಲಿಯೂ ನಮ್ಮ ವಿವರಗಳಿಗೆ ಗಮನ, ಗುಣಮಟ್ಟದ ಕಾರ್ಮಿಕ ಮತ್ತು ಪಾರದರ್ಶಕ ಸಂವಹನದ ಮೇಲೆ ನಾವು ಹೆಮ್ಮೆಪಡುತ್ತೇವೆ.'}
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center text-gray-700">
                  <Award className="h-5 w-5 text-orange-500 mr-3" />
                  <span>Licensed</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-orange-500 mr-3" />
                  <span>Top Rating</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Users className="h-5 w-5 text-orange-500 mr-3" />
                  <span>50+ Satisfied Clients</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Us?</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Quality Craftsmanship</h4>
                    <p className="text-gray-600">Attention to detail in every project we undertake</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">On-Time Delivery</h4>
                    <p className="text-gray-600">We respect your time and meet deadlines</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Transparent Pricing</h4>
                    <p className="text-gray-600">No hidden costs or surprises</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Full Warranty</h4>
                    <p className="text-gray-600">All work backed by comprehensive warranties</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Comprehensive construction solutions for every need</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-xl transition transform hover:-translate-y-1">
                <div className="bg-orange-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Hammer className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Recent Projects</h2>
            <p className="text-xl text-gray-600">A showcase of our finest work</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition">
                <div className="h-48 bg-linear-to-br from-gray-400 to-gray-600"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.name}</h3>
                  <p className="text-gray-600 mb-1">{project.location}</p>
                  <p className="text-sm text-orange-500 font-semibold">Completed: {project.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600">Let's discuss your next project</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-orange-500 mr-4 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <p className="text-gray-600">+91 9481835411, +91 9380628769</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-orange-500 mr-4 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600">smramesh5411@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-orange-500 mr-4 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Address</p>
                    <p className="text-gray-600">Sringeri, Chikkamagaluru, Karnataka, 577139</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-orange-500 mr-4 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Business Hours</p>
                    <p className="text-gray-600">Mon - sat: 7:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Sun: 7:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Hammer className="h-8 w-8 text-orange-500" />
              <span className="ml-2 text-xl font-bold">Amma Construction</span>
            </div>
            <p className="text-gray-400 mb-4">Building excellence, one project at a time</p>
            <p className="text-sm text-gray-500">&copy; 2024 Amma Construction. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
