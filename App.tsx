import React, { useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import FlowCTA from './components/FlowCTA';
import Contact from './components/Contact';

const App: React.FC = () => {
  // Initialize scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll(
      '.animate-on-scroll, .animate-on-scroll-left, .animate-on-scroll-right, .animate-on-scroll-scale'
    );

    animatedElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-brand-cyan selection:text-black">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Portfolio />
        <FlowCTA />
      </main>
      <Contact />

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/5527992241844"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] p-4 rounded-full shadow-lg shadow-[#25D366]/30 hover:scale-110 hover:shadow-xl hover:shadow-[#25D366]/40 transition-all duration-300 flex items-center justify-center group"
        aria-label="Fale conosco no WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white group-hover:scale-110 transition-transform"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>

        {/* Pulse effect */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
      </a>

      <Analytics />
    </div>
  );
};

export default App;