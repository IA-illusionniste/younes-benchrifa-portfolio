import React, { useState } from 'react';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { ExternalLink, Code2, Award, Filter } from 'lucide-react';
import { projects } from '../data/portfolioData';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const categories = [
    { value: 'all', label: 'All Projects', count: projects.length },
    { value: 'Travel Technology', label: 'Travel Tech', count: projects.filter(p => p.category === 'Travel Technology').length },
    { value: 'IT Infrastructure', label: 'IT Infrastructure', count: projects.filter(p => p.category === 'IT Infrastructure').length },
    { value: 'Technical Support', label: 'Tech Support', count: projects.filter(p => p.category === 'Technical Support').length },
    { value: 'Commercial Operations', label: 'Commercial', count: projects.filter(p => p.category === 'Commercial Operations').length }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Travel Technology':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'IT Infrastructure':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'Technical Support':
        return 'bg-purple-100 text-purple-700 border-purple-200';
      case 'Commercial Operations':
        return 'bg-orange-100 text-orange-700 border-orange-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-blue-600 border-blue-200 bg-blue-50">
              Featured Projects
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Innovative Solutions 
              <span className="text-blue-600 block lg:inline lg:ml-3">Across Industries</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A showcase of technical projects and achievements spanning travel technology, 
              IT infrastructure, customer support systems, and commercial operations.
            </p>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mt-6"></div>
          </div>

          {/* Category Filter */}
          <div className="mb-12">
            <div className="flex items-center justify-center mb-6">
              <Filter className="h-5 w-5 text-gray-400 mr-2" />
              <span className="text-gray-600 font-medium">Filter by Category:</span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <Button
                  key={category.value}
                  variant={selectedCategory === category.value ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.value)}
                  className={`transition-all duration-300 ${
                    selectedCategory === category.value
                      ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg scale-105'
                      : 'hover:bg-blue-50 hover:border-blue-300'
                  }`}
                >
                  {category.label}
                  <Badge 
                    variant="secondary" 
                    className="ml-2 text-xs bg-white/20 text-current border-0"
                  >
                    {category.count}
                  </Badge>
                </Button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <Card 
                key={project.id}
                className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 shadow-lg"
              >
                <CardContent className="p-0">
                  {/* Project Image */}
                  <div className="relative overflow-hidden aspect-video">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Category Badge */}
                    <Badge className={`absolute top-4 left-4 ${getCategoryColor(project.category)} shadow-lg`}>
                      {project.category}
                    </Badge>

                    {/* Hover Actions */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <Button 
                        size="sm"
                        className="bg-white/90 text-gray-900 hover:bg-white shadow-lg"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Details
                      </Button>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div className="mb-4">
                      <div className="flex items-center mb-2">
                        <Code2 className="h-4 w-4 text-gray-400 mr-2" />
                        <span className="text-sm font-medium text-gray-700">Technologies Used:</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge 
                            key={techIndex}
                            variant="secondary"
                            className="text-xs bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Key Achievements */}
                    <div className="mb-6">
                      <div className="flex items-center mb-3">
                        <Award className="h-4 w-4 text-gray-400 mr-2" />
                        <span className="text-sm font-medium text-gray-700">Key Results:</span>
                      </div>
                      <div className="space-y-2">
                        {project.achievements.slice(0, 2).map((achievement, achIndex) => (
                          <div key={achIndex} className="flex items-start space-x-2 text-sm">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-600">{achievement}</span>
                          </div>
                        ))}
                        {project.achievements.length > 2 && (
                          <div className="text-sm text-blue-600 font-medium">
                            +{project.achievements.length - 2} more achievements
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Project Action */}
                    <div className="pt-4 border-t border-gray-100">
                      <Button 
                        variant="outline"
                        size="sm"
                        className="w-full group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300"
                      >
                        Learn More About This Project
                        <ExternalLink className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Ready for Your Next Project?
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto mb-6">
                  Let's discuss how my technical expertise and problem-solving approach 
                  can contribute to your organization's success.
                </p>
                <Button 
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Start a Conversation
                </Button>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;
