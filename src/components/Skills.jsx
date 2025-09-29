import React from 'react';
import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { skills } from '../data/portfolioData';

const Skills = () => {
  const getSkillColor = (level) => {
    if (level >= 90) return 'bg-green-500';
    if (level >= 80) return 'bg-blue-500';
    if (level >= 70) return 'bg-yellow-500';
    return 'bg-gray-500';
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Technical Systems':
        return '⚙️';
      case 'Customer Service':
        return '🤝';
      case 'Commercial & Operations':
        return '📊';
      default:
        return '💼';
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Technical Systems':
        return 'from-blue-600 to-cyan-500';
      case 'Customer Service':
        return 'from-green-600 to-emerald-500';
      case 'Commercial & Operations':
        return 'from-purple-600 to-pink-500';
      default:
        return 'from-gray-600 to-slate-500';
    }
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-blue-600 border-blue-200 bg-blue-50">
              Skills & Expertise
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Technical Excellence 
              <span className="text-blue-600 block lg:inline lg:ml-3">Meets Innovation</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A comprehensive skill set built through years of hands-on experience across multiple technical domains and customer-facing roles.
            </p>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mt-6"></div>
          </div>

          {/* Skills Categories */}
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {skills.map((category, categoryIndex) => (
              <Card 
                key={categoryIndex}
                className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden"
              >
                {/* Card Header with Gradient */}
                <CardHeader className={`bg-gradient-to-br ${getCategoryColor(category.category)} text-white p-6 relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-white/10 opacity-30"></div>
                  <div className="relative z-10 flex items-center space-x-3">
                    <span className="text-3xl">{getCategoryIcon(category.category)}</span>
                    <div>
                      <CardTitle className="text-xl font-bold text-white">
                        {category.category}
                      </CardTitle>
                      <p className="text-white/80 text-sm mt-1">
                        {category.items.length} Skills
                      </p>
                    </div>
                  </div>
                </CardHeader>

                {/* Card Content */}
                <CardContent className="p-6 bg-gray-50">
                  <div className="space-y-6">
                    {category.items.map((skill, skillIndex) => (
                      <div key={skillIndex} className="group/skill">
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-semibold text-gray-900 group-hover/skill:text-blue-600 transition-colors duration-200">
                            {skill.name}
                          </h4>
                          <span className="text-sm font-bold text-gray-600 bg-white px-2 py-1 rounded-full shadow-sm">
                            {skill.level}%
                          </span>
                        </div>
                        
                        {/* Custom Progress Bar */}
                        <div className="relative">
                          <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                            <div 
                              className={`h-full ${getSkillColor(skill.level)} rounded-full transition-all duration-700 ease-out relative overflow-hidden`}
                              style={{ width: `${skill.level}%` }}
                            >
                              {/* Animated shine effect */}
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 animate-pulse"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Category Summary */}
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600 font-medium">Category Average</span>
                      <span className="text-lg font-bold text-gray-900">
                        {Math.round(category.items.reduce((acc, skill) => acc + skill.level, 0) / category.items.length)}%
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Skills Summary */}
          <div className="mt-16 text-center">
            <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Continuous Learning Mindset
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
                  My expertise spans multiple domains, from advanced booking systems like Amadeus to 
                  database management and mobile device support. I believe in adapting to new technologies 
                  and continuously expanding my skill set to meet evolving industry demands.
                </p>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
