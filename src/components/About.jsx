import React from 'react';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import { CheckCircle } from 'lucide-react';
import { aboutMe, personalInfo } from '../data/portfolioData';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-blue-600 border-blue-200 bg-blue-50">
              About Me
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Building Solutions Through 
              <span className="text-blue-600 block lg:inline lg:ml-3">Technical Excellence</span>
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Professional Image */}
            <div className="lg:col-span-5">
              <Card className="overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
                <CardContent className="p-0 relative">
                  <div className="aspect-[4/5] bg-gradient-to-br from-blue-600 to-slate-900 flex items-center justify-center relative overflow-hidden">
                    
                    {/* Professional Photo */}
                    <img 
                      src="https://customer-assets.emergentagent.com/job_multilingual-cv-2/artifacts/fsip6f4s_d464ce69-1cc5-4081-819d-d3b7b0f32bc8.jpg"
                      alt={personalInfo.name}
                      className="w-full h-full object-cover relative z-10"
                    />
                    
                    {/* Professional Overlay with gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent z-20"></div>
                    
                    {/* Professional Info Overlay */}
                    <div className="absolute bottom-6 left-6 right-6 z-30">
                      <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                        <h3 className="text-white font-bold text-lg mb-1">
                          {personalInfo.name}
                        </h3>
                        <p className="text-blue-200 text-sm">
                          Technical Solutions Specialist
                        </p>
                        <div className="flex items-center mt-2 text-xs text-white/80">
                          <span className="bg-green-500 w-2 h-2 rounded-full mr-2"></span>
                          Available for Opportunities
                        </div>
                      </div>
                    </div>
                    
                    {/* Decorative Elements */}
                    <div className="absolute top-4 right-4 w-16 h-16 border border-white/20 rounded-lg rotate-12 z-20"></div>
                    <div className="absolute bottom-20 right-4 w-12 h-12 border border-white/20 rounded-full z-20"></div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Content */}
            <div className="lg:col-span-7">
              
              {/* Main Description */}
              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  {aboutMe.summary.split('\n\n')[0]}
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {aboutMe.summary.split('\n\n')[1]}
                </p>
              </div>

              {/* Key Strengths */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Core Strengths</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {aboutMe.strengths.map((strength, index) => (
                    <div key={index} className="flex items-start space-x-3 group">
                      <CheckCircle className="h-6 w-6 text-blue-600 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                      <span className="text-gray-700 font-medium">{strength}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-3 gap-6">
                <Card className="bg-blue-50 border-blue-200 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                    <div className="text-sm text-gray-600 font-medium">Years Experience</div>
                  </CardContent>
                </Card>
                
                <Card className="bg-green-50 border-green-200 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">5+</div>
                    <div className="text-sm text-gray-600 font-medium">Industries</div>
                  </CardContent>
                </Card>
                
                <Card className="bg-purple-50 border-purple-200 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">3</div>
                    <div className="text-sm text-gray-600 font-medium">Languages</div>
                  </CardContent>
                </Card>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
