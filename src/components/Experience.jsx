import React, { useState } from 'react';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import { Calendar, MapPin, Building, TrendingUp, Users, Wrench, Briefcase, Crown } from 'lucide-react';
import { experiences } from '../data/portfolioData';

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState(experiences[0]);

  const getTypeIcon = (type) => {
    switch (type) {
      case 'current':
        return TrendingUp;
      case 'technical':
        return Wrench;
      case 'commercial':
        return Briefcase;
      case 'leadership':
        return Crown;
      default:
        return Building;
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'current':
        return 'from-green-600 to-emerald-500';
      case 'technical':
        return 'from-blue-600 to-cyan-500';
      case 'commercial':
        return 'from-purple-600 to-pink-500';
      case 'leadership':
        return 'from-orange-600 to-red-500';
      default:
        return 'from-gray-600 to-slate-500';
    }
  };

  const getTypeBadge = (type) => {
    switch (type) {
      case 'current':
        return { text: 'Current Role', class: 'bg-green-100 text-green-700 border-green-200' };
      case 'technical':
        return { text: 'Technical', class: 'bg-blue-100 text-blue-700 border-blue-200' };
      case 'commercial':
        return { text: 'Commercial', class: 'bg-purple-100 text-purple-700 border-purple-200' };
      case 'leadership':
        return { text: 'Leadership', class: 'bg-orange-100 text-orange-700 border-orange-200' };
      default:
        return { text: 'Professional', class: 'bg-gray-100 text-gray-700 border-gray-200' };
    }
  };

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-blue-600 border-blue-200 bg-blue-50">
              Professional Experience
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Career Journey of 
              <span className="text-blue-600 block lg:inline lg:ml-3">Technical Excellence</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Over 15 years of progressive experience across IT support, travel technology, and commercial operations.
            </p>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid lg:grid-cols-12 gap-8">
            
            {/* Experience Timeline - Left Side */}
            <div className="lg:col-span-5">
              <div className="space-y-4">
                {experiences.map((exp) => {
                  const IconComponent = getTypeIcon(exp.type);
                  const typeBadge = getTypeBadge(exp.type);
                  
                  return (
                    <Card 
                      key={exp.id}
                      className={`cursor-pointer transition-all duration-300 border-2 hover:shadow-lg ${
                        selectedExperience.id === exp.id 
                          ? 'border-blue-500 shadow-lg bg-blue-50' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => setSelectedExperience(exp)}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-start space-x-3">
                          <div className={`p-2 rounded-lg bg-gradient-to-br ${getTypeColor(exp.type)} shadow-sm`}>
                            <IconComponent className="h-5 w-5 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center space-x-2 mb-1">
                              <h3 className="font-semibold text-gray-900 truncate text-sm">
                                {exp.title}
                              </h3>
                              <Badge className={typeBadge.class}>
                                {typeBadge.text}
                              </Badge>
                            </div>
                            <p className="text-blue-600 font-medium text-sm mb-1">
                              {exp.company}
                            </p>
                            <div className="flex items-center text-gray-500 text-xs space-x-2">
                              <Calendar className="h-3 w-3" />
                              <span>{exp.period}</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Experience Details - Right Side */}
            <div className="lg:col-span-7">
              <Card className="h-full shadow-xl border-0">
                <CardContent className="p-0 h-full">
                  {/* Header Section */}
                  <div className={`bg-gradient-to-br ${getTypeColor(selectedExperience.type)} text-white p-8 relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-white/10 opacity-30"></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                          {React.createElement(getTypeIcon(selectedExperience.type), { 
                            className: "h-6 w-6 text-white" 
                          })}
                        </div>
                        <Badge className={getTypeBadge(selectedExperience.type).class}>
                          {getTypeBadge(selectedExperience.type).text}
                        </Badge>
                      </div>
                      
                      <h3 className="text-3xl font-bold mb-2">
                        {selectedExperience.title}
                      </h3>
                      
                      <div className="flex flex-wrap items-center gap-4 text-white/90">
                        <div className="flex items-center">
                          <Building className="h-4 w-4 mr-2" />
                          <span className="font-medium">{selectedExperience.company}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2" />
                          <span>{selectedExperience.location}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span>{selectedExperience.period}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-8">
                    <div className="mb-8">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">
                        Role Overview
                      </h4>
                      <p className="text-gray-700 leading-relaxed text-lg">
                        {selectedExperience.description}
                      </p>
                    </div>

                    <div className="mb-8">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">
                        Key Achievements
                      </h4>
                      <div className="space-y-3">
                        {selectedExperience.achievements.map((achievement, index) => (
                          <div key={index} className="flex items-start space-x-3 group">
                            <div className="p-1 bg-blue-100 rounded-full mt-1 group-hover:bg-blue-200 transition-colors">
                              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                            </div>
                            <span className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors">
                              {achievement}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">
                        Technologies & Tools
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedExperience.technologies.map((tech, index) => (
                          <Badge 
                            key={index}
                            variant="secondary"
                            className="bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
