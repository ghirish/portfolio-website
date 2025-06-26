import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="logo fade-in-left">
          <h2 className="gradient-text">Ghirish Pranav Thaenraj</h2>
        </div>
        <nav className="nav fade-in-right">
          <ul>
            <li>
              <button onClick={() => scrollToSection('about')}>About</button>
            </li>
            <li>
              <button onClick={() => scrollToSection('experience')}>Experience</button>
            </li>
            <li>
              <button onClick={() => scrollToSection('projects')}>Projects</button>
            </li>
            <li>
              <button onClick={() => scrollToSection('contact')}>Contact</button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header; 