import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { ArrowDown, Download, ExternalLink, MapPin, GraduationCap } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-purple-50/30 dark:from-slate-900/30 dark:via-slate-800/30 dark:to-purple-900/30"></div>
      
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-gradient-to-br from-pink-400/10 to-orange-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-gradient-to-br from-purple-400/10 to-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Status Badge */}
            <div className="flex items-center space-x-2">
              <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400 border-green-200 dark:border-green-800">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                Available for opportunities
              </Badge>
              <Badge variant="outline" className="flex items-center space-x-1">
                <MapPin className="w-3 h-3" />
                <span>Providence, RI</span>
              </Badge>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="block text-slate-900 dark:text-white">Hi, I'm</span>
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient-x">
                  Ghirish Pranav
                </span>
              </h1>
              
              <div className="space-y-2">
                <h2 className="text-2xl lg:text-3xl font-semibold text-slate-700 dark:text-slate-300">
                  AI/ML Engineer & Full-Stack Developer
                </h2>
                <div className="flex items-center space-x-2 text-slate-600 dark:text-slate-400">
                  <GraduationCap className="w-5 h-5" />
                  <span className="text-lg">MS Computer Science @ Brown University</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg lg:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
              Passionate about building intelligent systems and scalable applications. 
              Currently pursuing AI specialization while developing cutting-edge solutions 
              in machine learning, backend engineering, and data science.
            </p>

            {/* Tech Stack Preview */}
            <div className="flex flex-wrap gap-2">
              {['Python', 'JavaScript', 'React', 'TensorFlow', 'AWS', 'Docker'].map((tech, index) => (
                <Badge 
                  key={tech} 
                  variant="outline" 
                  className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm hover:bg-white dark:hover:bg-slate-700 transition-colors"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {tech}
                </Badge>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onClick={scrollToAbout}
              >
                Explore My Work
                <ArrowDown className="ml-2 w-4 h-4" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 hover:bg-slate-50 dark:hover:bg-slate-800 font-semibold px-8 py-3 rounded-lg transition-all duration-300"
                asChild
              >
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 w-4 h-4" />
                  Download Resume
                </a>
              </Button>
            </div>

            {/* Quick Links */}
            <div className="flex items-center space-x-6 pt-4">
              <a 
                href="https://github.com/ghirish-pranav" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              >
                <span className="text-sm font-medium">GitHub</span>
                <ExternalLink className="inline-block ml-1 w-3 h-3" />
              </a>
              <a 
                href="https://linkedin.com/in/ghirish-pranav" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              >
                <span className="text-sm font-medium">LinkedIn</span>
                <ExternalLink className="inline-block ml-1 w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Right Column - Visual Element */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative">
              {/* Main Avatar */}
              <div className="relative z-10 mx-auto w-80 h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
                <Avatar className="w-full h-full border-4 border-white dark:border-slate-800 shadow-2xl">
                  <AvatarImage 
                    src="/images/ghirish-headshot.jpg" 
                    alt="Ghirish Pranav Thaenraj"
                    className="object-cover"
                  />
                  <AvatarFallback className="text-6xl font-bold bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                    GP
                  </AvatarFallback>
                </Avatar>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-8 -left-8 w-16 h-16 bg-blue-500/20 rounded-full blur-md animate-bounce" style={{ animationDelay: '0s' }}></div>
              <div className="absolute -bottom-8 -right-8 w-12 h-12 bg-purple-500/20 rounded-full blur-md animate-bounce" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-16 -right-12 w-8 h-8 bg-pink-500/20 rounded-full blur-md animate-bounce" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-2 text-slate-400 dark:text-slate-600">
          <span className="text-sm font-medium">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-slate-300 dark:border-slate-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-slate-400 dark:bg-slate-500 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 