import React from 'react';
import { Button } from './ui/button';
import { ArrowDown, Mail, Phone, MapPin } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-blue-100/20 opacity-30"></div>
      
      {/* Content Container */}
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Main Content - Left Side */}
            <div className="lg:col-span-8 text-white">
              {/* Professional Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full mb-6 backdrop-blur-sm">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 animate-pulse"></div>
                <span className="text-blue-300 font-medium text-sm">Available for New Opportunities</span>
              </div>

              {/* Name with Bold Typography */}
              <h1 className="text-5xl lg:text-7xl font-black mb-4 leading-tight">
                <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  {personalInfo.name.split(' ')[0]}
                </span>
                <br />
                <span className="text-blue-400 text-4xl lg:text-6xl font-bold">
                  {personalInfo.name.split(' ')[1]}
                </span>
              </h1>

              {/* Professional Title */}
              <h2 className="text-xl lg:text-2xl font-bold text-blue-300 mb-6 leading-relaxed">
                {personalInfo.title}
              </h2>

              {/* Tagline */}
              <p className="text-lg lg:text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
                {personalInfo.tagline}
              </p>

              {/* Languages */}
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-3 py-1 bg-slate-700/50 text-blue-300 rounded-lg text-sm font-medium border border-slate-600/50">
                  Arabic ({personalInfo.languages.arabic})
                </span>
                <span className="px-3 py-1 bg-slate-700/50 text-blue-300 rounded-lg text-sm font-medium border border-slate-600/50">
                  French ({personalInfo.languages.french})
                </span>
                <span className="px-3 py-1 bg-slate-700/50 text-blue-300 rounded-lg text-sm font-medium border border-slate-600/50">
                  English ({personalInfo.languages.english})
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button 
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  onClick={() => scrollToSection('projects')}
                >
                  View My Work
                  <ArrowDown className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900 font-semibold px-8 py-4 rounded-xl transition-all duration-300"
                  onClick={() => scrollToSection('contact')}
                >
                  Get In Touch
                  <Mail className="ml-2 h-5 w-5" />
                </Button>
              </div>

            </div>

            {/* Contact Info Card - Right Side */}
            <div className="lg:col-span-4">
              <div className="bg-slate-800/80 backdrop-blur-lg border border-slate-700/50 rounded-2xl p-6 shadow-2xl">
                {/* Professional Photo in Contact Card */}
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-xl overflow-hidden mr-4 border-2 border-blue-400/30">
                    <img 
                      src="https://customer-assets.emergentagent.com/job_multilingual-cv-2/artifacts/fsip6f4s_d464ce69-1cc5-4081-819d-d3b7b0f32bc8.jpg"
                      alt={personalInfo.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg">Quick Contact</h3>
                    <p className="text-blue-300 text-sm">Professional & Available</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center text-gray-300">
                    <Phone className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0" />
                    <span className="text-sm">{personalInfo.phone}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-300">
                    <Mail className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0" />
                    <span className="text-sm break-all">{personalInfo.email}</span>
                  </div>
                  
                  <div className="flex items-start text-gray-300">
                    <MapPin className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-sm leading-relaxed">{personalInfo.address}</span>
                  </div>
                </div>

                {/* Years of Experience */}
                <div className="mt-6 pt-6 border-t border-slate-700/50">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">15+</div>
                    <div className="text-sm text-gray-400">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-blue-400" />
      </div>
    </section>
  );
};

export default Hero;
