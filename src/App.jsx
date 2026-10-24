import React from 'react';
import AnimatedBackground from './components/ui/AnimatedBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import ResumeSection from './components/ResumeSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useScrollSpy } from './hooks/useScrollSpy';

const sections = ['home', 'about', 'experience', 'projects', 'skills', 'achievements', 'resume', 'contact'];

export default function App() {
  const activeSection = useScrollSpy(sections, 140);

  return (
    <div className="min-h-screen bg-bgDark text-slate-100 relative overflow-x-hidden selection:bg-sky-500/30 selection:text-sky-300">
      
      {/* Dynamic Animated Canvas & Mesh Background */}
      <AnimatedBackground />

      {/* Navigation Header */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Achievements />
        <ResumeSection />
        <Contact />
      </main>

      {/* Site Footer */}
      <Footer />

    </div>
  );
}
