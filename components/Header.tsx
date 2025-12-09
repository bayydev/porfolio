import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Update scroll state
      setIsScrolled(window.scrollY > 50);

      // Calculate scroll progress
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / scrollHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Sobre', href: '#about' },
    { name: 'Serviços', href: '#services' },
    { name: 'Portfólio', href: '#portfolio' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
      />

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
            ? 'bg-brand-black/80 backdrop-blur-xl py-4 border-b border-white/5 shadow-lg shadow-black/20'
            : 'bg-transparent py-6'
          }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <a
            href="#about"
            className="text-2xl font-black tracking-tighter text-white group transition-transform hover:scale-105"
          >
            VISUAL<span className="text-brand-cyan group-hover:text-white transition-colors">.CAUA</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-sm font-medium text-gray-300 hover:text-white transition-colors group py-2"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-cyan transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a
              href="https://wa.me/5527992241844"
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden bg-white text-black px-6 py-2.5 rounded-full font-bold text-sm hover:bg-brand-cyan hover:text-black transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-brand-cyan/20"
            >
              Orçamento
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors touch-target"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`absolute top-full left-0 right-0 bg-brand-black/95 backdrop-blur-xl border-b border-white/5 md:hidden overflow-hidden transition-all duration-300 ${mobileMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
            }`}
        >
          <div className="p-6 flex flex-col gap-4 mobile-menu-enter">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-gray-300 hover:text-brand-cyan transition-all py-3 px-4 rounded-xl hover:bg-white/5 touch-target"
                onClick={handleLinkClick}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://wa.me/5527992241844"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-cyan text-black text-center py-4 rounded-xl font-bold mt-2 hover:bg-brand-cyanDark transition-colors touch-target"
              onClick={handleLinkClick}
            >
              Fale Comigo
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;