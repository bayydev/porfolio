
import React from 'react';
import { ArrowRight } from 'lucide-react';
import IMAGES from '../assets/index';

const Hero: React.FC = () => {
  return (
    <section id="about" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-pink/20 rounded-full blur-[120px] -z-10 opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-purple/20 rounded-full blur-[100px] -z-10 opacity-40"></div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-xs font-semibold tracking-wide uppercase text-gray-300">Disponível para Projetos</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tight">
            DESIGN QUE FAZ <br />
            O SEU DELIVERY <br />
            <span className="gradient-text">VENDER</span>.
          </h1>

          <p className="text-lg text-gray-400 max-w-md leading-relaxed">
            Me chamo Cauã. Há mais de 5 anos transformo visual de deliveries em máquinas de vendas através de design estratégico e identidade visual forte.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#portfolio"
              className="group bg-brand-pink text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:bg-brand-pink/90 transition-all hover:scale-105"
            >
              Ver Trabalhos
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://wa.me/5527992241844"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full font-bold text-lg border border-white/20 hover:bg-white/10 transition-all text-center"
            >
              Consultoria Gratuita
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="relative flex items-center justify-center md:justify-end">
          <div className="relative rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl">
            <img
              src={IMAGES.profile}
              alt="Cauã - Especialista em visual para Delivery"
              className="w-full h-auto object-cover max-w-md aspect-[3/4] opacity-90"
            />

            {/* Subtle Gradient Overlay for blending */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;