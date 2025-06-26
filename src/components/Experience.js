import React, { useEffect, useState, useRef } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { 
  Building2, 
  Calendar, 
  MapPin, 
  ExternalLink,
  ChevronRight,
  Users,
  Target,
  TrendingUp
} from 'lucide-react';

const Experience = () => {
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

  const experiences = [
    {
      id: 'elytra',
      company: 'Elytra Robotics',
      role: 'Lead Software Engineer',
      period: 'Jan 2025 - Jun 2025',
      location: 'Remote',
      type: 'Full-time',
      status: 'Current',
      website: 'https://elytra-robotics.com',
      description: 'Leading backend development for drone telemetry ingestion and health diagnostics systems.',
      achievements: [
        'Built and maintained backend services for telemetry ingestion and drone health diagnostics using Python and Flask',
        'Designed scalable data pipelines to transform raw sensor logs into structured metrics for monitoring and analytics',
        'Deployed internal APIs and dashboard endpoints to support engineering and operations teams with real-time insights'
      ],
      technologies: ['Python', 'Flask', 'Backend Development', 'Data Pipelines', 'API Design', 'Systems Engineering'],
      highlights: {
        focus: 'Backend Services',
        impact: 'Real-time Insights',
        scale: 'Production Systems'
      }
    },
    {
      id: 'aibrt-engineer',
      company: 'American Institute of Behavioral Research and Technology',
      role: 'Software Engineer',
      period: 'Aug 2024 - Mar 2025',
      location: 'Vista, CA',
      type: 'Full-time',
      status: 'Current',
      website: 'https://aibrt.org',
      description: 'Developing Python and SQL-based backend systems for large-scale behavioral data analysis.',
      achievements: [
        'Developed Python and SQL-based backend pipelines to analyze 90M+ behavioral data records',
        'Created RESTful APIs to serve model predictions for user intent classification and downstream tools',
        'Automated analytics workflows into reusable modules and dashboards supporting long-term experimentation'
      ],
      technologies: ['Python', 'SQL', 'API Development', 'Scalable Pipelines', 'Behavioral Modeling'],
      highlights: {
        data: '90M+ Records',
        apis: 'RESTful Services',
        automation: 'Workflow Modules'
      }
    },
    {
      id: 'aibrt-analyst',
      company: 'American Institute of Behavioral Research and Technology',
      role: 'Data Analyst Intern',
      period: 'Jun 2024 - Aug 2024',
      location: 'Vista, CA',
      type: 'Internship',
      status: 'Completed',
      website: 'https://aibrt.org',
      description: 'Engineered dashboards and tools to track online search behavior across experimental cohorts.',
      achievements: [
        'Engineered dashboards and internal tools to track online search behavior across experimental cohorts',
        'Delivered findings through statistical analysis and collaborated on dashboard deployment with developers'
      ],
      technologies: ['SQL', 'Dashboard Engineering', 'A/B Testing', 'Data Analysis', 'Metrics Design'],
      highlights: {
        dashboards: 'Multi-Cohort',
        analysis: 'Statistical',
        collaboration: 'Cross-team'
      }
    }
  ];

  return (
    <section ref={sectionRef} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Building scalable systems and intelligent solutions across diverse industries, 
            from autonomous robotics to behavioral research.
          </p>
        </div>

        {/* Experience Tabs */}
        <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Tabs defaultValue="elytra" className="w-full">
            {/* Company Tabs */}
            <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 h-auto p-1 bg-slate-100/50 dark:bg-slate-800/50 backdrop-blur-sm">
              {experiences.map((exp) => (
                <TabsTrigger
                  key={exp.id}
                  value={exp.id}
                  className="flex items-center space-x-2 px-4 py-3 text-left data-[state=active]:bg-white dark:data-[state=active]:bg-slate-700 data-[state=active]:shadow-sm"
                >
                  <span className="text-lg">{exp.logo}</span>
                  <div className="flex flex-col items-start">
                    <span className="font-medium">{exp.company}</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">{exp.role}</span>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Experience Content */}
            {experiences.map((exp) => (
              <TabsContent key={exp.id} value={exp.id} className="mt-8">
                <Card className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-slate-200/50 dark:border-slate-700/50">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <CardTitle className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white">
                          {exp.role}
                        </CardTitle>
                        <div className="flex items-center space-x-2">
                          <Building2 className="w-5 h-5 text-blue-600" />
                          <span className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                            {exp.company}
                          </span>
                          <a
                            href={exp.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-blue-600 transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </div>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 dark:text-slate-300">
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                          <Badge 
                            variant={exp.status === 'Current' ? 'default' : 'secondary'}
                            className="text-xs"
                          >
                            {exp.status}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {exp.type}
                          </Badge>
                        </div>
                      </div>
                      <div className="text-4xl">{exp.logo}</div>
                    </div>
                    <CardDescription className="text-base leading-relaxed pt-2">
                      {exp.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-8">
                    {/* Key Highlights */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {Object.entries(exp.highlights).map(([key, value]) => (
                        <Card key={key} className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-blue-200/50 dark:border-blue-800/50">
                          <CardContent className="p-4 text-center">
                            <div className="text-lg font-bold text-blue-600 dark:text-blue-400">{value}</div>
                            <div className="text-sm text-slate-600 dark:text-slate-300 capitalize">{key}</div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>

                    <Separator />

                    {/* Achievements */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-slate-900 dark:text-white flex items-center space-x-2">
                        <Target className="w-5 h-5 text-green-600" />
                        <span>Key Achievements</span>
                      </h4>
                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, index) => (
                          <li key={index} className="flex items-start space-x-3">
                            <ChevronRight className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span className="text-slate-700 dark:text-slate-300 leading-relaxed">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Separator />

                    {/* Technologies */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-slate-900 dark:text-white flex items-center space-x-2">
                        <TrendingUp className="w-5 h-5 text-purple-600" />
                        <span>Technologies Used</span>
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="bg-white/50 dark:bg-slate-700/50 hover:bg-white dark:hover:bg-slate-600 transition-colors"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Career Timeline Summary */}
        <div className={`mt-16 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Card className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800/50 dark:to-blue-900/20 border-slate-200/50 dark:border-slate-700/50">
            <CardContent className="p-8">
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Career Progression
                </h3>
                <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                  From data analysis intern to lead software engineer, I've consistently grown my expertise 
                  in AI/ML, backend systems, and large-scale data processing across innovative companies.
                </p>
                <div className="flex justify-center items-center space-x-4 pt-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">3+</div>
                    <div className="text-sm text-slate-600 dark:text-slate-300">Companies</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">2+</div>
                    <div className="text-sm text-slate-600 dark:text-slate-300">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">90M+</div>
                    <div className="text-sm text-slate-600 dark:text-slate-300">Records Processed</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience; 