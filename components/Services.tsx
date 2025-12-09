import React, { useEffect, useRef, useState } from 'react';
import { Palette, Smartphone, TrendingUp, Briefcase } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    title: "Identidade Visual",
    description: "Criação de marcas fortes e memoráveis que posicionam sua empresa no mercado.",
    icon: <Palette className="w-8 h-8" />
  },
  {
    title: "Social Media",
    description: "Posts estáticos e carrosséis estratégicos para engajar e converter seguidores em clientes.",
    icon: <Smartphone className="w-8 h-8" />
  },
  {
    title: "Materiais Comerciais",
    description: "Apresentações, catálogos e materiais visuais que vendem sua empresa de forma profissional.",
    icon: <Briefcase className="w-8 h-8" />
  },
  {
    title: "Criativos para Ads",
    description: "Design de alta performance para anúncios focados em conversão e resultados.",
    icon: <TrendingUp className="w-8 h-8" />
  }
];

const iconColors = [
  'from-brand-cyan to-brand-cyanDark',
  'from-purple-400 to-purple-600',
  'from-blue-400 to-blue-600',
  'from-brand-cyan to-emerald-400',
];

const Services: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-32 bg-brand-black relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-0 w-96 h-96 bg-brand-cyan/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-20 left-0 w-80 h-80 bg-purple-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className={`mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-sm font-bold text-brand-cyan uppercase tracking-widest mb-3 flex items-center gap-2">
            <span className="w-8 h-px bg-brand-cyan" />
            O que eu faço
          </h2>
          <h3 className="text-4xl md:text-5xl font-black text-white leading-tight">
            Soluções completas para <br className="hidden md:block" />
            o seu <span className="gradient-text">negócio</span>.
          </h3>
        </div>

        {/* Services Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children ${isVisible ? 'visible' : ''}`}>
          {services.map((service, index) => (
            <div
              key={index}
              className="group glass-card-premium p-8 rounded-[2rem] hover:bg-white/5 transition-all duration-500 cursor-default card-hover relative overflow-hidden"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Gradient border on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem] p-px bg-gradient-to-br from-brand-cyan/50 via-transparent to-purple-500/30 -z-10" />

              {/* Icon container */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${iconColors[index]} p-[1px] mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                <div className="w-full h-full rounded-2xl bg-brand-black flex items-center justify-center text-white group-hover:bg-brand-black/80">
                  {service.icon}
                </div>
              </div>

              <h4 className="text-xl font-bold text-white mb-3 group-hover:text-brand-cyan transition-colors duration-300">
                {service.title}
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                {service.description}
              </p>

              {/* Decorative corner */}
              <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-white/5 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;