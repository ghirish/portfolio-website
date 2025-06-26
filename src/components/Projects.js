import React, { useEffect, useState, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { 
  ExternalLink, 
  Github, 
  Play, 
  Star, 
  Users, 
  Calendar,
  Code,
  Database,
  Brain,
  ShoppingCart,
  Film,
  Heart
} from 'lucide-react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: 'CalMail AI Agent',
      description: 'An intelligent scheduling assistant that parses emails to detect meeting intent and integrates seamlessly with Gmail and Google Calendar.',
      longDescription: 'This project implements a Model Context Protocol (MCP)-based architecture to orchestrate structured tools for availability checking, event creation, and automated responses with enhanced security practices.',
      icon: Brain,
      image: '/images/calmail-preview.png',
      technologies: ['JavaScript', 'Node.js', 'React', 'Google Calendar API', 'Gmail API', 'Azure AI (GPT-4)'],
      category: 'AI/ML',
      status: 'Completed',
      featured: true,
      github: 'https://github.com/ghirish-pranav/calmail-ai-agent',
      demo: 'https://calmail.ghirish.dev',
      highlights: [
        'Model Context Protocol (MCP)-based architecture for tool orchestration',
        'Real-time notifications and Teams-style interface',
        'Robust security with OAuth, rate limiting, and data encryption',
        'Seamless Gmail and Google Calendar integration',
        'Intelligent meeting intent detection and automated responses'
      ],
      stats: {
        integrations: '2 APIs',
        security: 'OAuth + Encryption',
        architecture: 'MCP-based'
      }
    },
    {
      id: 2,
      title: 'React eCommerce Platform',
      description: 'A responsive full-stack eCommerce solution with shopping cart, product management, and secure checkout functionality.',
      longDescription: 'This project demonstrates modern React development with state management, API integration, and responsive design principles for a complete eCommerce experience.',
      icon: ShoppingCart,
      image: '/images/ecommerce-preview.png',
      technologies: ['React.js', 'JavaScript', 'HTML/CSS', 'Node.js', 'Firebase'],
      category: 'Full-Stack',
      status: 'Completed',
      featured: true,
      github: 'https://github.com/ghirish-pranav/react-ecommerce',
      demo: 'https://ecommerce-demo.ghirish.dev',
      highlights: [
        'Responsive front-end design with React components',
        'State management with React hooks',
        'Product filtering, search, and sorting functionality',
        'Integrated checkout with form validation',
        'RESTful API patterns and mock payment gateway'
      ],
      stats: {
        components: 'React-based',
        features: 'Full eCommerce',
        responsive: 'Mobile-first'
      }
    },
    {
      id: 3,
      title: 'Cinescope: Full-Stack Movie Web App',
      description: 'A comprehensive movie browsing platform deployed across a Kubernetes cluster with advanced search and performance optimization.',
      longDescription: 'This enterprise-level application showcases full-stack development with Java backend, React frontend, and containerized deployment with performance testing and optimization.',
      icon: Film,
      image: '/images/cinescope-preview.png',
      technologies: ['Java', 'React', 'MySQL', 'Docker', 'Kubernetes', 'AWS', 'JMeter'],
      category: 'Full-Stack',
      status: 'Completed',
      featured: true,
      github: 'https://github.com/ghirish-pranav/cinescope',
      demo: 'https://cinescope.ghirish.dev',
      highlights: [
        'Servlet logic for advanced search and user authentication',
        'Movie/star browsing with shopping cart and payment flows',
        'JDBC implementation with connection pooling',
        'Performance testing with JMeter optimization',
        'Kubernetes cluster deployment with Docker containers'
      ],
      stats: {
        deployment: 'Kubernetes',
        optimization: 'JMeter Tested',
        architecture: 'Full-Stack'
      }
    }
  ];

  const categories = ['All', 'Full-Stack', 'AI/ML', 'Data Science'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section ref={sectionRef} className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            A showcase of innovative solutions spanning full-stack development, AI/ML, and data science, 
            each demonstrating technical excellence and real-world impact.
          </p>
        </div>

        {/* Category Filter */}
        <div className={`flex justify-center mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex flex-wrap gap-2 p-1 bg-slate-100/50 dark:bg-slate-800/50 rounded-lg backdrop-blur-sm">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'ghost'}
                onClick={() => setSelectedCategory(category)}
                className="px-6 py-2 rounded-md transition-all duration-200"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Featured Projects Grid */}
        <div className={`grid lg:grid-cols-2 gap-8 mb-16 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {featuredProjects.slice(0, 2).map((project, index) => (
            <Card key={project.id} className="group bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-slate-200/50 dark:border-slate-700/50 hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 flex items-center justify-center">
                  <project.icon className="w-16 h-16 text-blue-600 dark:text-blue-400" />
                </div>
                <Badge 
                  className="absolute top-4 left-4 bg-white/90 dark:bg-slate-800/90 text-slate-900 dark:text-white"
                >
                  Featured
                </Badge>
                <Badge 
                  variant={project.status === 'Completed' ? 'default' : 'secondary'}
                  className="absolute top-4 right-4"
                >
                  {project.status}
                </Badge>
              </div>

              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <CardTitle className="text-xl lg:text-2xl font-bold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </CardTitle>
                    <Badge variant="outline" className="w-fit">
                      {project.category}
                    </Badge>
                  </div>
                </div>
                <CardDescription className="text-base leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="bg-white/50 dark:bg-slate-700/50 hover:bg-white dark:hover:bg-slate-600 transition-colors text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Key Highlights */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-slate-900 dark:text-white">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.highlights.slice(0, 3).map((highlight, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-sm text-slate-600 dark:text-slate-300">
                        <Star className="w-3 h-3 text-yellow-500 mt-1 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Project Stats */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-200/50 dark:border-slate-700/50">
                  {Object.entries(project.stats).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-lg font-bold text-blue-600 dark:text-blue-400">{value}</div>
                      <div className="text-xs text-slate-500 capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3 pt-4">
                  {project.github && (
                    <Button variant="outline" size="sm" asChild className="flex-1">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.demo && (
                    <Button size="sm" asChild className="flex-1">
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Separator className="mx-auto w-24 bg-gradient-to-r from-blue-500 to-purple-500 h-1 mb-16" />

        {/* All Projects Grid */}
        <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h3 className="text-2xl font-bold text-center mb-8 text-slate-900 dark:text-white">
            All Projects
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <Card key={project.id} className="group bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-slate-200/50 dark:border-slate-700/50 hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <project.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                    <Badge 
                      variant={project.status === 'Completed' ? 'default' : 'secondary'}
                      className="text-xs"
                    >
                      {project.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </CardTitle>
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline" className="text-xs">
                      {project.category}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {project.description.length > 120 
                      ? `${project.description.substring(0, 120)}...` 
                      : project.description}
                  </p>

                  {/* Technologies - Limited */}
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-xs bg-white/50 dark:bg-slate-700/50"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 4}
                      </Badge>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-2 pt-2">
                    {project.github && (
                      <Button variant="outline" size="sm" asChild className="flex-1">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-3 h-3 mr-1" />
                          Code
                        </a>
                      </Button>
                    )}
                    {project.demo && (
                      <Button size="sm" asChild className="flex-1">
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <Play className="w-3 h-3 mr-1" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* GitHub CTA */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Card className="max-w-2xl mx-auto bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800/50 dark:to-blue-900/20 border-slate-200/50 dark:border-slate-700/50">
            <CardContent className="p-8">
              <div className="space-y-4">
                <Github className="w-12 h-12 text-slate-700 dark:text-slate-300 mx-auto" />
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Explore More Projects
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Check out my GitHub for additional projects, open-source contributions, 
                  and ongoing experiments in AI, web development, and data science.
                </p>
                <Button size="lg" asChild className="mt-4">
                  <a 
                    href="https://github.com/ghirish-pranav" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    View GitHub Profile
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects; 