import React, { useState, useEffect, useRef } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const contactRef = useRef(null);

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

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
    alert('Thank you for your message! I\'ll get back to you soon.');
  };

  return (
    <section id="contact" className="contact" ref={contactRef}>
      <div className="container">
        <h2 className="gradient-text fade-in-up">Get In Touch</h2>
        <p className="contact-intro fade-in-up">
          Interested in collaborating on a project or discussing opportunities? I'd love to hear from you!
        </p>
        <div className="contact-content">
          <div className="contact-info fade-in-left">
            <h3>Let's Connect</h3>
            <p>
              I'm currently pursuing my Master's in Computer Science at Brown University and am always open to 
              discussing new opportunities, interesting projects, or just connecting with fellow developers and researchers.
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <span>ghirish05@gmail.com</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <span>(925) 915-3668</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>Providence, RI / Irvine, CA</span>
              </div>
            </div>
            <div className="social-links">
              <a href="https://linkedin.com/in/ghirish-thaenraj" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/ghirish" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-github"></i>
              </a>
              <a href="mailto:ghirish05@gmail.com" className="social-link">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
          <form className="contact-form fade-in-right" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact; 