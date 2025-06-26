import React, { useEffect, useRef } from 'react';
import './Projects.css';

const Projects = () => {
  const projectsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right, .scale-in');
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('animate');
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "React eCommerce Platform",
      description: "A comprehensive eCommerce web application built with modern React architecture and full-stack functionality.",
      technologies: ["React.js", "JavaScript", "HTML/CSS", "Node.js", "Firebase"],
      features: [
        "Responsive front-end eCommerce interface with shopping cart, product detail, and user login components",
        "State management with React hooks for product filtering, search, and sorting functionality",
        "Integrated checkout and mock payment gateway using form validation and RESTful API patterns",
        "Modern UI/UX with responsive design principles"
      ],
      github: "https://github.com/ghirish/react-ecommerce",
      live: "#"
    },
    {
      title: "Cinescope Full-Stack Movie Web App",
      description: "A scalable movie browsing and discovery platform with advanced search capabilities and real-time features.",
      technologies: ["Java", "React", "MySQL", "Docker", "Kubernetes", "AWS", "JMeter"],
      features: [
        "Built and deployed full-stack movie browsing web app across a Kubernetes cluster",
        "Implemented servlet logic for advanced search, movie/star browsing, authentication, shopping cart, and payment flows using Java and JDBC with connection pooling",
        "Conducted performance testing using JMeter and optimized backend response time via connection reuse and caching",
        "Deployed with Docker containers for scalability and reliability"
      ],
      github: "https://github.com/ghirish/cinescope",
      live: "#"
    },
    {
      title: "Pneumonia Detection via Chest X-Rays",
      description: "AI-powered medical imaging system for automated pneumonia diagnosis with high accuracy and interpretability.",
      technologies: ["Python", "TensorFlow/Keras", "NumPy", "OpenCV", "Matplotlib"],
      features: [
        "Trained a CNN on labeled chest X-ray images to classify pneumonia vs. healthy lungs with over 90% test accuracy",
        "Applied data augmentation, dropout, and early stopping to improve model generalization and prevent overfitting",
        "Visualized predictions and misclassifications using Grad-CAM and confusion matrices for model interpretability",
        "Implemented robust data preprocessing and model evaluation pipelines"
      ],
      github: "https://github.com/ghirish/pneumonia-detection",
      live: "#"
    }
  ];

  return (
    <section id="projects" className="projects" ref={projectsRef}>
      <div className="container">
        <h2 className="gradient-text fade-in-up">Featured Projects</h2>
        <p className="projects-intro fade-in-up">
          A collection of projects showcasing my skills in full-stack development, machine learning, and software engineering.
        </p>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className={`project-card scale-in`} style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="card-content">
                <h3 className="gradient-text">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {project.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="technologies">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                    <i className="fab fa-github"></i> GitHub
                  </a>
                  {project.live !== "#" && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link">
                      <i className="fas fa-external-link-alt"></i> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 