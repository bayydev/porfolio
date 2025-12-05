
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ProjectItem } from '../types';
import { X, ChevronLeft, ChevronRight, ZoomIn, Lock, ArrowUpRight } from 'lucide-react';
import IMAGES from '../assets/index';

const projects: ProjectItem[] = [
  {
    id: 1,
    title: "Imobiliária — Estratégia Visual",
    category: "Social Media",
    image: IMAGES.acai.cover,
    gallery: IMAGES.acai.gallery
  },
  { id: 2, title: "Imobiliária — Social Media", category: "Social Media", image: IMAGES.confidencial1.cover },
  { id: 3, title: "Projeto Confidencial", category: "Branding & Social", image: IMAGES.confidencial2.cover },
  { id: 4, title: "Projeto Confidencial", category: "Design Gráfico", image: IMAGES.confidencial3.cover },
];

const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

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
        // Swiped left - next image
        changeImage('next');
      } else {
        // Swiped right - prev image
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
    <section id="portfolio" className="py-32 bg-brand-dark relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Trabalhos Selecionados
            </h2>
            <p className="text-gray-400 max-w-lg">
              Uma curadoria dos projetos que geraram mais impacto e vendas para meus clientes.
            </p>
          </div>
          <a href="https://be.net/visualcaua" target="_blank" rel="noopener noreferrer" className="text-brand-cyan font-bold hover:text-white transition-colors">
            Ver Portfólio Completo &rarr;
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => {
            const isLocked = project.id !== 1;

            return (
              <div
                key={project.id}
                className="group relative rounded-[2rem] overflow-hidden cursor-pointer aspect-[4/3] border border-white/5"
                onClick={() => handleProjectClick(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-full object-cover transition-transform duration-700 ${isLocked ? 'scale-100 blur-[2px]' : 'group-hover:scale-110 opacity-80 group-hover:opacity-100'
                    }`}
                />

                {isLocked ? (
                  <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center p-6 text-center transition-opacity">
                    <div className="bg-brand-cyan/20 p-4 rounded-full mb-4">
                      <Lock className="text-brand-cyan w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Projeto Confidencial</h3>
                    <p className="text-gray-400 text-sm mb-6 max-w-xs">Este projeto faz parte do portfólio completo.</p>
                    <span className="flex items-center gap-2 text-white font-bold border border-white/20 px-6 py-2 rounded-full hover:bg-white/10 transition-colors">
                      Ver no Behance <ArrowUpRight size={16} />
                    </span>
                  </div>
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex justify-between items-end">
                      <div>
                        <span className="text-brand-cyan font-bold text-sm tracking-wider uppercase mb-1 block">{project.category}</span>
                        <h3 className="text-3xl font-bold text-white">{project.title}</h3>
                      </div>
                      {project.gallery && (
                        <div className="bg-white/10 p-3 rounded-full backdrop-blur-sm group-hover:bg-brand-cyan transition-colors">
                          <ZoomIn className="text-white" size={24} />
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal with improved animations */}
      {selectedProject && selectedProject.gallery && (
        <div
          className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 animate-[fadeIn_0.3s_ease-out]"
          onClick={closeProject}
        >
          {/* Close Button */}
          <button
            onClick={closeProject}
            className="absolute top-4 right-4 md:top-6 md:right-6 z-50 p-2 md:p-3 bg-white/10 rounded-full text-white hover:bg-white/20 transition-all"
          >
            <X size={24} className="md:w-8 md:h-8" />
          </button>

          {/* Desktop Navigation Buttons */}
          <button
            onClick={prevImage}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-40 p-3 bg-black/50 text-white rounded-full hover:bg-brand-cyan transition-all hover:scale-110 hidden md:flex"
          >
            <ChevronLeft size={32} />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-40 p-3 bg-black/50 text-white rounded-full hover:bg-brand-cyan transition-all hover:scale-110 hidden md:flex"
          >
            <ChevronRight size={32} />
          </button>

          {/* Image Container - Centered, not full screen */}
          <div
            className="relative max-w-5xl w-full h-[80vh] flex items-center justify-center animate-[scaleIn_0.3s_ease-out]"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
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
              <span className="text-brand-cyan">{currentImageIndex + 1}</span> / {selectedProject.gallery.length}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
