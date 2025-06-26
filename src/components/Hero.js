import React, { useEffect, useRef } from 'react';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef(null);

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

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="hero" className="hero" ref={heroRef}>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text fade-in-left">
            <h1>Using AI to Build the Future</h1>
            <p className="hero-subtitle gradient-text">Software Engineer • AI/ML Specialist • Full-Stack Developer</p>
            <p className="hero-description">
              I'm Ghirish Pranav Thaenraj, currently pursuing a <span className="gradient-text-alt">Master's in Computer Science with AI Track at Brown University</span>. 
              With experience at Elytra Robotics and AIBRT, I specialize in building scalable software solutions, 
              data pipelines, and machine learning systems that solve real-world problems.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn-primary">View My Work</a>
              <a href="mailto:ghirish05@gmail.com" className="btn-secondary">Get In Touch</a>
            </div>
          </div>
          <div className="hero-image fade-in-right">
            <div className="image-placeholder floating glow">
              <img src="/images/ghirish-headshot.jpg" alt="Ghirish Pranav Thaenraj" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 