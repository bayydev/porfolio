
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ProjectItem } from '../types';
import { X, ChevronLeft, ChevronRight, ExternalLink, Eye } from 'lucide-react';
import IMAGES from '../assets/index';

const projects: ProjectItem[] = [
  {
    id: 1,
    title: "Estratégia Visual Imobiliária",
    category: "Social Media",
    image: IMAGES.acai.cover,
    gallery: IMAGES.acai.gallery
  },
  { id: 2, title: "Social Media Imobiliária", category: "Social Media", image: IMAGES.confidencial1.cover },
  { id: 3, title: "Branding Completo", category: "Branding & Social", image: IMAGES.confidencial2.cover },
  { id: 4, title: "Design Gráfico", category: "Design Gráfico", image: IMAGES.confidencial3.cover },
];

const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const [isVisible, setIsVisible] = useState(false);
  const [activeProject, setActiveProject] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleProjectClick = (project: ProjectItem) => {
    if (project.id === 1 && project.gallery && project.gallery.length > 0) {
      setSelectedProject(project);
      setCurrentImageIndex(0);
      document.body.style.overflow = 'hidden';
    } else {
      window.open('https://be.net/visualcaua', '_blank');
    }
  };

  const closeProject = useCallback(() => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  }, []);

  const changeImage = useCallback((newDirection: 'next' | 'prev') => {
    if (!selectedProject?.gallery || isTransitioning) return;

    setIsTransitioning(true);
    setDirection(newDirection);

    setTimeout(() => {
      setCurrentImageIndex((prev) => {
        if (newDirection === 'next') {
          return (prev + 1) % selectedProject.gallery!.length;
        } else {
          return (prev - 1 + selectedProject.gallery!.length) % selectedProject.gallery!.length;
        }
      });

      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 150);
  }, [selectedProject, isTransitioning]);

  const nextImage = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    changeImage('next');
  }, [changeImage]);

  const prevImage = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    changeImage('prev');
  }, [changeImage]);

  // Touch/Swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const swipeThreshold = 50;
    const diff = touchStartX.current - touchEndX.current;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        changeImage('next');
      } else {
        changeImage('prev');
      }
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedProject) return;
      if (e.key === 'Escape') closeProject();
      if (e.key === 'ArrowRight') changeImage('next');
      if (e.key === 'ArrowLeft') changeImage('prev');
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject, closeProject, changeImage]);

  return (
    <section id="portfolio" ref={sectionRef} className="py-32 bg-brand-dark relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-cyan/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-sm font-bold text-brand-cyan uppercase tracking-widest mb-3 flex items-center justify-center gap-2">
            <span className="w-8 h-px bg-brand-cyan" />
            Portfólio
            <span className="w-8 h-px bg-brand-cyan" />
          </h2>
          <h3 className="text-4xl md:text-5xl font-black text-white mb-4">
            Trabalhos <span className="gradient-text">Selecionados</span>
          </h3>
          <p className="text-gray-400 max-w-lg mx-auto">
            Projetos que geraram impacto real e aumentaram vendas para meus clientes.
          </p>
        </div>

        {/* Featured Project - Large */}
        <div className={`mb-8 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div
            className="group relative rounded-[2rem] overflow-hidden cursor-pointer aspect-[21/9] border border-white/5"
            onClick={() => handleProjectClick(projects[0])}
          >
            <img
              src={projects[0].image}
              alt={projects[0].title}
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8 md:p-12">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <span className="inline-block text-brand-cyan font-bold text-sm tracking-wider uppercase mb-2 px-3 py-1 bg-brand-cyan/10 rounded-full">
                    {projects[0].category}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold text-white">{projects[0].title}</h3>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-gray-400 text-sm hidden md:block">{projects[0].gallery?.length} imagens</span>
                  <div className="bg-brand-cyan text-black px-6 py-3 rounded-full font-bold flex items-center gap-2 group-hover:bg-white transition-colors">
                    <Eye size={20} />
                    Ver Projeto
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other Projects - Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 stagger-children ${isVisible ? 'visible' : ''}`}>
          {projects.slice(1).map((project, index) => (
            <div
              key={project.id}
              className="group relative rounded-2xl overflow-hidden cursor-pointer aspect-[4/3] border border-white/5"
              onClick={() => handleProjectClick(project)}
              onMouseEnter={() => setActiveProject(index + 1)}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 blur-[1px] group-hover:blur-0 opacity-60 group-hover:opacity-100"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30 flex flex-col items-center justify-center p-6 text-center">
                <span className="text-brand-cyan font-bold text-xs tracking-wider uppercase mb-2">
                  {project.category}
                </span>
                <h4 className="text-xl font-bold text-white mb-4">{project.title}</h4>
                <div className="px-5 py-2 rounded-full border border-white/20 text-white text-sm font-medium group-hover:bg-white group-hover:text-black group-hover:border-white transition-all flex items-center gap-2">
                  <ExternalLink size={14} />
                  Ver no Behance
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Behance Link */}
        <div className={`text-center transition-all duration-700 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <a
            href="https://be.net/visualcaua"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-gray-400 hover:text-brand-cyan transition-colors font-medium"
          >
            <span>Ver portfólio completo no Behance</span>
            <ExternalLink size={18} />
          </a>
        </div>
      </div>

      {/* Modal */}
      {selectedProject && selectedProject.gallery && (
        <div
          className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
          onClick={closeProject}
          style={{ animation: 'fadeIn 0.3s ease-out' }}
        >
          {/* Close Button */}
          <button
            onClick={closeProject}
            className="absolute top-4 right-4 md:top-6 md:right-6 z-50 p-2 md:p-3 bg-white/10 rounded-full text-white hover:bg-white/20 hover:rotate-90 transition-all duration-300 touch-target"
          >
            <X size={24} className="md:w-8 md:h-8" />
          </button>

          {/* Desktop Navigation Buttons */}
          <button
            onClick={prevImage}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-40 p-3 bg-black/50 text-white rounded-full hover:bg-brand-cyan transition-all hover:scale-110 hidden md:flex touch-target"
          >
            <ChevronLeft size={32} />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-40 p-3 bg-black/50 text-white rounded-full hover:bg-brand-cyan transition-all hover:scale-110 hidden md:flex touch-target"
          >
            <ChevronRight size={32} />
          </button>

          {/* Image Container */}
          <div
            className="relative max-w-5xl w-full h-[80vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{ animation: 'scaleIn 0.3s ease-out' }}
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <img
                key={currentImageIndex}
                src={selectedProject.gallery[currentImageIndex]}
                alt={`${selectedProject.title} - Imagem ${currentImageIndex + 1}`}
                className={`max-w-full max-h-full object-contain rounded-xl shadow-2xl transition-all duration-300 ${isTransitioning
                    ? direction === 'next'
                      ? 'opacity-0 -translate-x-8'
                      : 'opacity-0 translate-x-8'
                    : 'opacity-100 translate-x-0'
                  }`}
              />
            </div>

            {/* Mobile swipe indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 md:hidden">
              {selectedProject.gallery.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentImageIndex
                      ? 'w-8 bg-brand-cyan'
                      : 'w-1.5 bg-white/30'
                    }`}
                />
              ))}
            </div>
          </div>

          {/* Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-md px-6 py-2 rounded-full border border-white/10 hidden md:block">
            <p className="text-white font-medium text-sm">
              <span className="text-brand-cyan font-bold">{currentImageIndex + 1}</span> / {selectedProject.gallery.length}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
