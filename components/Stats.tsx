import React from 'react';
import { StatItem } from '../types';

const stats: StatItem[] = [
  { value: "5+", label: "Anos de", subLabel: "Experiência" },
  // { value: "120+", label: "Projetos", subLabel: "Entregues" }, // Removed as requested
  { value: "30%", label: "Aumento Médio", subLabel: "em Vendas" },
  { value: "9h-22h", label: "Suporte", subLabel: "Seg-Sáb" },
];

const Stats: React.FC = () => {
  return (
    <section className="py-20 bg-brand-black border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <h3 className="text-5xl md:text-6xl font-black text-white mb-2">{stat.value}</h3>
              <p className="text-gray-400 font-medium text-lg leading-tight">
                {stat.label} <br />
                <span className="text-brand-pink">{stat.subLabel}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;