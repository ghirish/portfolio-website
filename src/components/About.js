import React, { useEffect, useState, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Separator } from './ui/separator';
import { 
  GraduationCap, 
  Code, 
  Brain, 
  Database, 
  Cloud, 
  Award,
  MapPin,
  Calendar
} from 'lucide-react';

const About = () => {
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

  const skills = [
    { name: 'Python', level: 95, category: 'Programming', icon: Code },
    { name: 'JavaScript', level: 90, category: 'Programming', icon: Code },
    { name: 'React', level: 85, category: 'Frontend', icon: Code },
    { name: 'TensorFlow', level: 88, category: 'AI/ML', icon: Brain },
    { name: 'PyTorch', level: 82, category: 'AI/ML', icon: Brain },
    { name: 'PostgreSQL', level: 85, category: 'Database', icon: Database },
    { name: 'AWS', level: 80, category: 'Cloud', icon: Cloud },
    { name: 'Docker', level: 85, category: 'DevOps', icon: Cloud },
  ];

  const certifications = [
    {
      title: 'Databricks Certified Generative AI Engineer Associate',
      issuer: 'Databricks',
      date: 'Dec 2024',
      status: 'Active'
    },
    {
      title: 'Databricks Certified Data Engineer Professional',
      issuer: 'Databricks',
      date: 'Dec 2024',
      status: 'Active'
    },
    {
      title: 'Databricks Certified Machine Learning Professional',
      issuer: 'Databricks',
      date: 'Dec 2024',
      status: 'Active'
    }
  ];

  const education = [
    {
      degree: 'Master of Science in Computer Science',
      specialization: 'Artificial Intelligence Track',
      school: 'Brown University',
      location: 'Providence, RI',
      period: '2024 - 2026 (Expected)',
      status: 'Current'
    },
    {
      degree: 'Bachelor of Science in Computer Science',
      school: 'University of California, Irvine',
      location: 'Irvine, CA',
      period: '2020 - 2024',
      gpa: '3.8/4.0',
      status: 'Completed'
    }
  ];

  return (
    <section ref={sectionRef} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            A passionate engineer combining artificial intelligence with software development 
            to create innovative solutions that make a real-world impact.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Personal Story */}
          <div className={`lg:col-span-2 space-y-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Card className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-slate-200/50 dark:border-slate-700/50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-2xl">
                  <Brain className="w-6 h-6 text-blue-600" />
                  <span>My Journey</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
                <p>
                  My passion for technology began during my undergraduate studies at UC Irvine, where I discovered 
                  the transformative power of artificial intelligence and machine learning. With a strong foundation 
                  in computer science and a 3.8 GPA, I've dedicated myself to understanding both the theoretical 
                  underpinnings and practical applications of cutting-edge technology.
                </p>
                <p>
                  Currently pursuing my Master's degree at Brown University with a focus on AI, I'm diving deep 
                  into advanced machine learning techniques, neural networks, and their applications in solving 
                  real-world problems. My academic journey is complemented by hands-on experience in software 
                  engineering, data analysis, and system design.
                </p>
                <p>
                  I believe in the power of technology to improve lives and create positive change. Whether it's 
                  developing intelligent systems for drone telemetry, building scalable backend services, or 
                  creating intuitive user interfaces, I approach every project with curiosity, precision, and 
                  a commitment to excellence.
                </p>
              </CardContent>
            </Card>

            {/* Skills Section */}
            <Card className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-slate-200/50 dark:border-slate-700/50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-2xl">
                  <Code className="w-6 h-6 text-purple-600" />
                  <span>Technical Skills</span>
                </CardTitle>
                <CardDescription>
                  Proficiency levels in key technologies and frameworks
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-6">
                  {skills.map((skill, index) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <skill.icon className="w-4 h-4 text-slate-500" />
                          <span className="font-medium">{skill.name}</span>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {skill.category}
                        </Badge>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2"
                        style={{
                          animationDelay: `${index * 0.1}s`
                        }}
                      />
                      <span className="text-sm text-slate-500">{skill.level}%</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Education & Certifications */}
          <div className={`space-y-8 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Education */}
            <Card className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-slate-200/50 dark:border-slate-700/50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <GraduationCap className="w-5 h-5 text-green-600" />
                  <span>Education</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <h4 className="font-semibold text-slate-900 dark:text-white">
                          {edu.degree}
                        </h4>
                        {edu.specialization && (
                          <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                            {edu.specialization}
                          </p>
                        )}
                        <p className="text-sm text-slate-600 dark:text-slate-300">
                          {edu.school}
                        </p>
                        <div className="flex items-center space-x-4 text-xs text-slate-500">
                          <div className="flex items-center space-x-1">
                            <MapPin className="w-3 h-3" />
                            <span>{edu.location}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-3 h-3" />
                            <span>{edu.period}</span>
                          </div>
                        </div>
                        {edu.gpa && (
                          <p className="text-sm font-medium text-green-600 dark:text-green-400">
                            GPA: {edu.gpa}
                          </p>
                        )}
                      </div>
                      <Badge 
                        variant={edu.status === 'Current' ? 'default' : 'secondary'}
                        className="shrink-0"
                      >
                        {edu.status}
                      </Badge>
                    </div>
                    {index < education.length - 1 && <Separator />}
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-slate-200/50 dark:border-slate-700/50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Award className="w-5 h-5 text-orange-600" />
                  <span>Certifications</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="space-y-2">
                    <div className="space-y-1">
                      <h4 className="font-medium text-slate-900 dark:text-white text-sm leading-tight">
                        {cert.title}
                      </h4>
                      <div className="flex items-center justify-between">
                        <p className="text-xs text-slate-600 dark:text-slate-300">
                          {cert.issuer}
                        </p>
                        <div className="flex items-center space-x-2">
                          <span className="text-xs text-slate-500">{cert.date}</span>
                          <Badge variant="outline" className="text-xs">
                            {cert.status}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    {index < certifications.length - 1 && <Separator />}
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-blue-200/50 dark:border-blue-800/50">
              <CardContent className="pt-6">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">3+</div>
                    <div className="text-sm text-slate-600 dark:text-slate-300">Years Coding</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">10+</div>
                    <div className="text-sm text-slate-600 dark:text-slate-300">Projects Built</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">3</div>
                    <div className="text-sm text-slate-600 dark:text-slate-300">Certifications</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">90M+</div>
                    <div className="text-sm text-slate-600 dark:text-slate-300">Data Records</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 