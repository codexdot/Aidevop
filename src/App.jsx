
import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import AISection from './components/AISection'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Contact from './components/Contact'
import './App.css'

function App() {
  useEffect(() => {
    // Animation on scroll
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (elementPosition < screenPosition) {
          element.classList.add('animate-fadeIn');
        }
      });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    window.addEventListener('load', animateOnScroll);
    
    return () => {
      window.removeEventListener('scroll', animateOnScroll);
      window.removeEventListener('load', animateOnScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Header />
      <Hero />
      <Projects />
      <AISection />
      <Skills />
      <Experience />
      <Contact />
    </div>
  )
}

export default App
