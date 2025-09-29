import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Mail, Phone, MapPin, Calendar, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About Me', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' }
  ];

  const interests = [
    { name: 'Sports', icon: '🏃' },
    { name: 'Cinema', icon: '🎬' },
    { name: 'Travel', icon: '✈️' },
    { name: 'Music', icon: '🎵' }
  ];

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-blue-100/20 opacity-30"></div>
      
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-6 lg:px-8 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-12">
              
              {/* Brand & Bio - Left Side */}
              <div className="lg:col-span-5">
                <div className="mb-8">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center font-bold text-lg shadow-lg">
                      <img 
                        src="https://customer-assets.emergentagent.com/job_multilingual-cv-2/artifacts/fsip6f4s_d464ce69-1cc5-4081-819d-d3b7b0f32bc8.jpg"
                        alt={personalInfo.name}
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white">
                        {personalInfo.name}
                      </h2>
                      <p className="text-blue-300 text-sm">
                        Technical Problem Solver & IT Solutions Specialist
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed mb-6">
                    With over 15 years of experience across IT support, travel technology, 
                    and commercial operations, I'm passionate about solving complex technical 
                    challenges and building lasting professional relationships.
                  </p>

                  {/* Availability Status */}
                  <div className="flex items-center space-x-2 mb-6">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-green-400 font-medium">Available for New Opportunities</span>
                  </div>

                  {/* Interests */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Interests</h4>
                    <div className="flex flex-wrap gap-2">
                      {interests.map((interest, index) => (
                        <Badge 
                          key={index}
                          variant="secondary"
                          className="bg-gray-800 text-gray-300 border-gray-700 hover:bg-gray-700 transition-colors"
                        >
                          <span className="mr-1">{interest.icon}</span>
                          {interest.name}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Links & Contact - Right Side */}
              <div className="lg:col-span-7">
                <div className="grid md:grid-cols-2 gap-8">
                  
                  {/* Quick Navigation */}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">
                      Quick Navigation
                    </h3>
                    <nav className="space-y-3">
                      {quickLinks.map((link) => (
                        <button
                          key={link.id}
                          onClick={() => scrollToSection(link.id)}
                          className="block text-gray-300 hover:text-blue-400 transition-colors duration-200 text-left"
                        >
                          {link.name}
                        </button>
                      ))}
                    </nav>
                  </div>

                  {/* Contact Information */}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">
                      Contact Information
                    </h3>
                    <div className="space-y-4">
                      <a 
                        href={`mailto:${personalInfo.email}`}
                        className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors duration-200 group"
                      >
                        <Mail className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
                        <span className="text-sm break-all">{personalInfo.email}</span>
                      </a>
                      
                      <a 
                        href={`tel:${personalInfo.phone}`}
                        className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors duration-200 group"
                      >
                        <Phone className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
                        <span className="text-sm">{personalInfo.phone}</span>
                      </a>
                      
                      <div className="flex items-start space-x-3 text-gray-300">
                        <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                        <span className="text-sm leading-relaxed">
                          {personalInfo.address}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Professional Stats Card */}
                <Card className="mt-8 bg-gray-800/50 border-gray-700 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="grid grid-cols-3 gap-6 text-center">
                      <div>
                        <div className="text-2xl font-bold text-blue-400 mb-1">15+</div>
                        <div className="text-xs text-gray-400 uppercase tracking-wide">Years Experience</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-green-400 mb-1">5+</div>
                        <div className="text-xs text-gray-400 uppercase tracking-wide">Industries</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-purple-400 mb-1">3</div>
                        <div className="text-xs text-gray-400 uppercase tracking-wide">Languages</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800">
          <div className="container mx-auto px-6 lg:px-8 py-6">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                
                {/* Copyright */}
                <div className="flex items-center space-x-4 text-gray-400 text-sm">
                  <span>© {currentYear} {personalInfo.name}. All rights reserved.</span>
                  <div className="flex items-center space-x-1">
                    <span>Built with</span>
                    <Heart className="h-4 w-4 text-red-500 animate-pulse" />
                    <span>and modern technology</span>
                  </div>
                </div>

                {/* Last Updated */}
                <div className="flex items-center space-x-2 text-gray-400 text-sm">
                  <Calendar className="h-4 w-4" />
                  <span>Portfolio updated January 2025</span>
                </div>
              </div>

              {/* Professional Note */}
              <div className="mt-6 pt-6 border-t border-gray-800">
                <p className="text-center text-gray-400 text-sm leading-relaxed max-w-3xl mx-auto">
                  This portfolio represents my professional journey and technical expertise. 
                  All information is accurate as of the last update. For the most current details 
                  about my availability and recent projects, please contact me directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
