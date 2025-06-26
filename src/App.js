import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { Separator } from './components/ui/separator';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <Header />
      
      <main className="relative">
        {/* Hero Section */}
        <section id="home" className="relative">
          <Hero />
        </section>

        <Separator className="mx-auto w-24 bg-gradient-to-r from-blue-500 to-purple-500 h-1" />

        {/* About Section */}
        <section id="about" className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <About />
          </div>
        </section>

        <Separator className="mx-auto w-24 bg-gradient-to-r from-purple-500 to-pink-500 h-1" />

        {/* Experience Section */}
        <section id="experience" className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-50/50 dark:bg-slate-900/50">
          <div className="max-w-7xl mx-auto">
            <Experience />
          </div>
        </section>

        <Separator className="mx-auto w-24 bg-gradient-to-r from-pink-500 to-orange-500 h-1" />

        {/* Projects Section */}
        <section id="projects" className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <Projects />
          </div>
        </section>

        <Separator className="mx-auto w-24 bg-gradient-to-r from-orange-500 to-blue-500 h-1" />

        {/* Contact Section */}
        <section id="contact" className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-50/50 dark:bg-slate-900/50">
          <div className="max-w-7xl mx-auto">
            <Contact />
          </div>
        </section>
      </main>

      {/* Background decoration */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-pink-400/20 to-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
      </div>
    </div>
  );
}

export default App;
