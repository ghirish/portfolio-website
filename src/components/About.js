import React, { useEffect, useRef } from 'react';
import './About.css';

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right, .scale-in');
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

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about" ref={aboutRef}>
      <div className="container">
        <h2>About Me</h2>
        <p className="about-intro fade-in-up">
          Passionate about leveraging technology and artificial intelligence to build scalable solutions that make a meaningful impact.
        </p>
        <div className="about-content">
          <div className="about-text fade-in-left">
            <p>
              I'm currently pursuing a <span className="gradient-text">Master of Science in Computer Science with an AI Track at Brown University</span>, 
              building on my foundation from a <span className="gradient-text">Bachelor's in Computer Science from UC Irvine</span> with a strong GPA of 3.8.
            </p>
            <p>
              My professional journey includes leading software engineering at <span className="gradient-text-alt">Elytra Robotics</span>, where I built 
              backend services for telemetry ingestion and drone health diagnostics, and developing scalable data pipelines at the{' '}
              <span className="gradient-text">American Institute of Behavioral Research and Technology</span> for analyzing 90M+ behavioral data records.
            </p>
            <p>
              I'm passionate about full-stack development, machine learning, and systems engineering. My recent projects include building 
              React-based applications, implementing CNN models for medical imaging, and creating scalable microservices architectures 
              with real-time analytics capabilities.
            </p>
            <p>
              I hold multiple <span className="gradient-text-alt">Databricks certifications</span> in Generative AI, Data Engineering, and Machine Learning, 
              keeping me at the forefront of modern AI and data technologies. When I'm not coding, I enjoy exploring new places, 
              staying active, and working on personal projects that challenge my technical skills.
            </p>
            <div className="skills fade-in-up">
              <h3 className="gradient-text">Technical Skills</h3>
              <div className="skill-tags">
                <span className="skill-tag">Python</span>
                <span className="skill-tag">Java</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">C++</span>
                <span className="skill-tag">React</span>
                <span className="skill-tag">Flask</span>
                <span className="skill-tag">PostgreSQL</span>
                <span className="skill-tag">AWS</span>
                <span className="skill-tag">Docker</span>
                <span className="skill-tag">Kubernetes</span>
                <span className="skill-tag">TensorFlow</span>
                <span className="skill-tag">NumPy</span>
              </div>
            </div>
          </div>
          <div className="about-image fade-in-right">
            <div className="image-placeholder floating glow">
              <img src="/images/ghirish-outdoor.jpg" alt="Ghirish outdoors" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 