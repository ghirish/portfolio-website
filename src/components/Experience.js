import React, { useState, useEffect, useRef } from 'react';
import './Experience.css';

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);
  const experienceRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right');
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('animate');
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (experienceRef.current) {
      observer.observe(experienceRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      company: "Elytra Robotics",
      role: "Lead Software Engineer",
      period: "Jan 2025 - Jun 2025",
      description: "Leading backend development for next-generation drone technology solutions.",
      responsibilities: [
        "Built and maintained backend services for telemetry ingestion and drone health diagnostics using Python and Flask",
        "Designed scalable data pipelines to transform raw sensor logs into structured metrics for monitoring and analytics",
        "Deployed internal APIs and dashboard endpoints to support engineering and operations teams with real-time insights",
        "Implemented systems engineering best practices for reliable, high-performance drone monitoring solutions"
      ]
    },
    {
      company: "AIBRT",
      role: "Software Engineer",
      period: "Aug 2024 - Mar 2025",
      description: "Developing scalable backend systems for large-scale behavioral data analysis.",
      responsibilities: [
        "Developed Python and SQL-based backend pipelines to analyze 90M+ behavioral data records",
        "Created RESTful APIs to serve model predictions for user intent classification and downstream tools",
        "Automated analytics workflows into reusable modules and dashboards supporting long-term experimentation",
        "Collaborated on scalable data pipelines and behavioral modeling systems for research applications"
      ]
    },
    {
      company: "AIBRT",
      role: "Data Analyst Intern",
      period: "Jun 2024 - Aug 2024",
      description: "Analyzed user behavior patterns and developed insights for research initiatives.",
      responsibilities: [
        "Engineered dashboards and internal tools to track online search behavior across experimental cohorts",
        "Delivered findings through statistical analysis and collaborated on dashboard deployment with developers",
        "Gained experience in SQL, dashboard engineering, A/B testing, data analysis, and metrics design",
        "Contributed to research efforts analyzing large-scale behavioral data patterns"
      ]
    }
  ];

  return (
    <section id="experience" className="experience" ref={experienceRef}>
      <div className="container">
        <h2 className="gradient-text fade-in-up">Experience</h2>
        <div className="experience-container fade-in-up">
          <div className="experience-tabs fade-in-left">
            {experiences.map((exp, index) => (
              <button
                key={index}
                className={`tab-button ${activeTab === index ? 'active' : ''}`}
                onClick={() => setActiveTab(index)}
              >
                <span className="company-name">{exp.company}</span>
              </button>
            ))}
          </div>
          <div className="experience-content fade-in-right">
            <div className="experience-details">
              <h3 className="role-title gradient-text">
                {experiences[activeTab].role} 
                <span className="company-highlight">@ {experiences[activeTab].company}</span>
              </h3>
              <p className="period">{experiences[activeTab].period}</p>
              <p className="description">{experiences[activeTab].description}</p>
              <ul className="responsibilities">
                {experiences[activeTab].responsibilities.map((resp, index) => (
                  <li key={index}>{resp}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 