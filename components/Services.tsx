import React from 'react';
import { Palette, Smartphone, TrendingUp, Layout } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    title: "Identidade Visual",
    description: "Criação de marcas fortes e memoráveis que se destacam nos aplicativos de delivery.",
    icon: <Palette className="w-8 h-8 text-brand-pink" />
  },
  {
    title: "Social Media",
    description: "Posts estáticos e carrosséis estratégicos para engajar e converter seguidores em clientes.",
    icon: <Smartphone className="w-8 h-8 text-brand-purple" />
  },
  {
    title: "Cardápios Digitais",
    description: "Layouts otimizados para leitura rápida e despertar o apetite (Engenharia de Cardápio).",
    icon: <Layout className="w-8 h-8 text-blue-500" />
  },
  {
    title: "Tráfego Visual",
    description: "Criativos de alta performance para anúncios (Ads) focados em venda direta.",
    icon: <TrendingUp className="w-8 h-8 text-green-400" />
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-brand-black relative">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-sm font-bold text-brand-pink uppercase tracking-widest mb-2">O que eu faço</h2>
          <h3 className="text-4xl md:text-5xl font-black text-white">
            Soluções completas para <br />
            o seu negócio.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="glass-card p-8 rounded-[2rem] hover:bg-white/5 transition-all duration-300 group cursor-default"
            >
              <div className="bg-white/5 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-3">{service.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;