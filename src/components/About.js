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
    { name: 'Python', level: 95, category: 'Languages', icon: Code },
    { name: 'Databricks', level: 85, category: 'Cloud', icon: Brain },
    { name: 'C++', level: 85, category: 'Languages', icon: Code },
    { name: 'JavaScript', level: 90, category: 'Languages', icon: Code },
    { name: 'SQL', level: 90, category: 'Languages', icon: Database },
    { name: 'Flask', level: 85, category: 'Frameworks', icon: Code },
    { name: 'React.js', level: 85, category: 'Frameworks', icon: Code },
    { name: 'Pandas', level: 90, category: 'Libraries', icon: Brain },
    { name: 'PostgreSQL', level: 85, category: 'Databases', icon: Database },
    { name: 'Git', level: 90, category: 'DevOps', icon: Code },
  ];

  const certifications = [
    {
      title: 'Databricks Certified Generative AI Engineer Associate',
      issuer: 'Databricks',
      date: 'Dec 2024',
      status: 'Active'
    },
    {
      title: 'Databricks Certified Data Engineer Associate',
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
      title: 'Databricks Certified Machine Learning Associate',
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
      period: '2025 - 2027 (Expected)',
      status: 'Current'
    },
    {
      degree: 'Bachelor of Science in Computer Science',
      school: 'University of California, Irvine',
      location: 'Irvine, CA',
      period: '2022 - 2025',
      gpa: '3.8/4.0',
      status: 'Completed'
    }
  ];

  return (
    <section ref={sectionRef} className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
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
                My journey in tech began at the University of California, Irvine, where I earned my B.S. in Computer Science. It was there that I first explored the real-world impact of intelligent systems—from AI-powered classification models to full-stack web applications. What started as curiosity quickly evolved into a drive to engineer solutions that solve meaningful problems.
                </p>
                <p>
                Now, as an Master’s student in Computer Science at Brown University (AI Track), I’m continuing that journey by deepening my expertise in machine learning, model optimization, and system design. My graduate studies are fueled by hands-on industry experience building backend systems, deploying scalable data pipelines, and leading cross-functional engineering efforts.                </p>
                <p>
                I thrive at the intersection of engineering and impact—whether that’s optimizing search and authentication systems in Kubernetes, designing scheduling agents powered by LLMs, or delivering data-driven dashboards that guide behavioral research. I see every project as a chance to blend technical rigor with human-centered thinking.
                </p>
                <p>
I believe great technology should feel intuitive, resilient, and meaningful—and I’m excited to keep building toward that ideal.
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
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">5</div>
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