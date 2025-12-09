
import React from 'react';
import { ArrowRight } from 'lucide-react';
import IMAGES from '../assets/index';

const Hero: React.FC = () => {
  return (
    <section id="about" className="relative min-h-[110vh] flex items-center pt-32 pb-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient orbs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-cyan/15 rounded-full blur-[150px] animate-float-slow opacity-60" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-cyanDark/15 rounded-full blur-[120px] animate-float-slow animate-float-delay-2 opacity-50" />
        <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-[100px] animate-float-reverse opacity-40" />

        {/* Decorative floating elements */}
        <div className="absolute top-40 right-20 w-3 h-3 bg-brand-cyan rounded-full animate-float opacity-60" />
        <div className="absolute top-60 right-40 w-2 h-2 bg-brand-cyan/60 rounded-full animate-float animate-float-delay-1" />
        <div className="absolute bottom-40 left-20 w-4 h-4 bg-brand-cyanDark/40 rounded-full animate-float-reverse" />
        <div className="absolute top-1/2 left-10 w-2 h-2 bg-purple-400/50 rounded-full animate-float animate-float-delay-2" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 217, 177, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 217, 177, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-8">
          {/* Availability Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm animate-on-scroll opacity-0"
            style={{ animationDelay: '0.1s' }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-cyan"></span>
            </span>
            <span className="text-xs font-semibold tracking-wide uppercase text-gray-300">Disponível para Projetos</span>
          </div>

          {/* Main Heading */}
          <h1
            className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tight animate-on-scroll opacity-0"
            style={{ animationDelay: '0.2s' }}
          >
            DESIGN QUE FAZ <br />
            O SEU NEGÓCIO <br />
            <span className="gradient-text-animated">VENDER</span>.
          </h1>

          {/* Description */}
          <p
            className="text-lg text-gray-400 max-w-md leading-relaxed animate-on-scroll opacity-0"
            style={{ animationDelay: '0.3s' }}
          >
            Me chamo Cauã. Há mais de 5 anos desenvolvo projetos visuais que impulsionam resultados de empresas através de design estratégico e identidade visual forte.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 animate-on-scroll opacity-0"
            style={{ animationDelay: '0.4s' }}
          >
            <a
              href="#portfolio"
              className="group btn-primary text-black px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 shimmer-button"
            >
              Ver Trabalhos
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://wa.me/5527992241844"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full font-bold text-lg border border-white/20 hover:bg-white/10 hover:border-brand-cyan/50 transition-all text-center backdrop-blur-sm"
            >
              Consultoria Gratuita
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="relative flex items-center justify-center md:justify-end animate-on-scroll-scale opacity-0" style={{ animationDelay: '0.3s' }}>
          {/* Glow effect behind image */}
          <div className="absolute inset-0 flex items-center justify-center md:justify-end">
            <div className="w-80 h-80 bg-brand-cyan/20 rounded-full blur-[80px] animate-pulse-soft" />
          </div>

          {/* Image container */}
          <div className="relative rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl group">
            <img
              src={IMAGES.profile}
              alt="Cauã - Designer Gráfico Estratégico"
              className="w-full h-auto object-cover max-w-md aspect-[3/4] opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 animate-bounce opacity-60">
        <span className="text-xs text-gray-500 uppercase tracking-widest">Scroll</span>
        <div className="w-6 h-10 rounded-full border-2 border-gray-600 flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-brand-cyan rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;