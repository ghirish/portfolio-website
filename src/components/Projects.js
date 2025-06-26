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
      title: 'React eCommerce Platform',
      description: 'A comprehensive full-stack eCommerce solution built with modern web technologies, featuring real-time inventory management, secure payment processing, and intelligent recommendation systems.',
      longDescription: 'This project demonstrates end-to-end development capabilities, from user interface design to backend API development and database management. The platform includes advanced features like real-time chat support, analytics dashboard, and automated email marketing.',
      icon: ShoppingCart,
      image: '/images/ecommerce-preview.png',
      technologies: ['React', 'Node.js', 'Express', 'Firebase', 'Stripe API', 'Material-UI', 'JWT'],
      category: 'Full-Stack',
      status: 'Completed',
      featured: true,
      github: 'https://github.com/ghirish-pranav/react-ecommerce',
      demo: 'https://ecommerce-demo.ghirish.dev',
      highlights: [
        'Real-time inventory management with Firebase',
        'Secure payment processing with Stripe integration',
        'Responsive design with Material-UI components',
        'JWT-based authentication and authorization',
        'RESTful API design with Express.js'
      ],
      stats: {
        stars: 25,
        commits: 150,
        contributors: 1
      }
    },
    {
      id: 2,
      title: 'Cinescope Movie Web App',
      description: 'A sophisticated movie discovery platform built with Java Spring Boot and React, featuring advanced search capabilities, user reviews, and personalized recommendations.',
      longDescription: 'This project showcases enterprise-level architecture with microservices deployment on Kubernetes. It includes features like machine learning-based recommendations, social features, and comprehensive content management.',
      icon: Film,
      image: '/images/cinescope-preview.png',
      technologies: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'Kubernetes', 'Docker', 'Redis'],
      category: 'Full-Stack',
      status: 'Completed',
      featured: true,
      github: 'https://github.com/ghirish-pranav/cinescope',
      demo: 'https://cinescope.ghirish.dev',
      highlights: [
        'Microservices architecture with Spring Boot',
        'Container orchestration with Kubernetes',
        'Advanced search with Elasticsearch integration',
        'Caching layer with Redis for improved performance',
        'CI/CD pipeline with automated testing'
      ],
      stats: {
        stars: 18,
        commits: 120,
        contributors: 2
      }
    },
    {
      id: 3,
      title: 'Pneumonia Detection CNN',
      description: 'An advanced deep learning model for automated pneumonia detection from chest X-ray images, achieving 90% accuracy using convolutional neural networks and computer vision techniques.',
      longDescription: 'This medical AI project demonstrates expertise in deep learning, computer vision, and healthcare applications. The model was trained on thousands of chest X-ray images and includes data augmentation, transfer learning, and model optimization techniques.',
      icon: Heart,
      image: '/images/pneumonia-detection-preview.png',
      technologies: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'NumPy', 'Matplotlib', 'Jupyter'],
      category: 'AI/ML',
      status: 'Completed',
      featured: true,
      github: 'https://github.com/ghirish-pranav/pneumonia-detection',
      demo: 'https://pneumonia-detector.ghirish.dev',
      highlights: [
        '90% accuracy on test dataset',
        'Transfer learning with pre-trained models',
        'Data augmentation for improved generalization',
        'Interactive web interface for predictions',
        'Comprehensive model evaluation and visualization'
      ],
      stats: {
        accuracy: '90%',
        dataset: '5000+ Images',
        performance: 'Real-time'
      }
    },
    {
      id: 4,
      title: 'AI-Powered Data Analytics Dashboard',
      description: 'An intelligent analytics platform that processes large datasets and provides automated insights using machine learning algorithms and interactive visualizations.',
      longDescription: 'This project combines data engineering, machine learning, and frontend development to create a comprehensive analytics solution. It features automated anomaly detection, predictive modeling, and customizable dashboards.',
      icon: Brain,
      image: '/images/analytics-dashboard-preview.png',
      technologies: ['Python', 'Flask', 'React', 'D3.js', 'Pandas', 'Scikit-learn', 'PostgreSQL'],
      category: 'Data Science',
      status: 'In Progress',
      featured: false,
      github: 'https://github.com/ghirish-pranav/analytics-dashboard',
      highlights: [
        'Automated anomaly detection algorithms',
        'Interactive data visualizations with D3.js',
        'Real-time data processing capabilities',
        'Machine learning-based predictions',
        'Customizable dashboard components'
      ],
      stats: {
        dataPoints: '1M+',
        models: '5',
        accuracy: '85%'
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
    <section ref={sectionRef} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
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