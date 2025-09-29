import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X, Mail, Phone } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo/Name */}
            <div className="flex items-center space-x-3">
              <div className={`w-10 h-10 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                isScrolled 
                  ? 'border-blue-600 shadow-lg' 
                  : 'border-white/30'
              }`}>
                <img 
                  src="https://customer-assets.emergentagent.com/job_multilingual-cv-2/artifacts/fsip6f4s_d464ce69-1cc5-4081-819d-d3b7b0f32bc8.jpg"
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h1 className={`font-bold text-lg transition-all duration-300 ${
                  isScrolled ? 'text-gray-900' : 'text-white'
                }`}>
                  {personalInfo.name.split(' ')[0]} {personalInfo.name.split(' ')[1]}
                </h1>
                <p className={`text-sm transition-all duration-300 ${
                  isScrolled ? 'text-blue-600' : 'text-blue-200'
                }`}>
                  Technical Solutions Specialist
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`font-medium transition-all duration-300 hover:scale-105 ${
                    isScrolled 
                      ? 'text-gray-700 hover:text-blue-600' 
                      : 'text-white hover:text-blue-300'
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </nav>

            {/* Contact Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              <a 
                href={`tel:${personalInfo.phone}`}
                className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
                  isScrolled 
                    ? 'text-gray-600 hover:bg-gray-100' 
                    : 'text-white hover:bg-white/10'
                }`}
              >
                <Phone className="h-5 w-5" />
              </a>
              
              <Button
                size="sm"
                onClick={() => scrollToSection('contact')}
                className={`transition-all duration-300 hover:scale-105 ${
                  isScrolled
                    ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg'
                    : 'bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm border border-white/30'
                }`}
              >
                <Mail className="h-4 w-4 mr-2" />
                Get in Touch
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-all duration-300 ${
                isScrolled 
                  ? 'text-gray-600 hover:bg-gray-100' 
                  : 'text-white hover:bg-white/10'
              }`}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? 'max-h-96 pb-6' : 'max-h-0'
          }`}>
            <nav className="flex flex-col space-y-4 bg-white rounded-2xl shadow-2xl p-6 mt-4 border border-gray-200">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-gray-700 hover:text-blue-600 font-medium text-left py-2 transition-colors duration-200"
                >
                  {link.name}
                </button>
              ))}
              
              <div className="pt-4 border-t border-gray-200 space-y-3">
                <a 
                  href={`tel:${personalInfo.phone}`}
                  className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors duration-200"
                >
                  <Phone className="h-5 w-5" />
                  <span>Call Me</span>
                </a>
                
                <Button
                  size="sm"
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Get in Touch
                </Button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
