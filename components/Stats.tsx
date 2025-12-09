import React, { useState, useEffect, useRef } from 'react';
import { StatItem } from '../types';
import { Clock, Target, Briefcase } from 'lucide-react';

const stats: StatItem[] = [
  { value: "+5", label: "Anos de", subLabel: "Experiência" },
  { value: "100%", label: "Foco em", subLabel: "Resultados" },
  { value: "13h", label: "Disponível", subLabel: "Por Dia" },
];

const statIcons = [
  <Briefcase className="w-6 h-6 text-brand-cyan" />,
  <Target className="w-6 h-6 text-brand-cyan" />,
  <Clock className="w-6 h-6 text-brand-cyan" />,
];

const AnimatedCounter: React.FC<{ value: string; duration?: number }> = ({ value, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  // Check if value is numeric
  const hasPlus = value.startsWith('+');
  const cleanValue = value.replace(/[+%h]/g, '');
  const numericValue = parseInt(cleanValue);
  const isNumeric = !isNaN(numericValue);
  const suffix = value.includes('%') ? '%' : value.includes('h') ? 'h' : '';
  const prefix = hasPlus ? '+' : '';

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated && isNumeric) {
          setHasAnimated(true);

          const startTime = Date.now();
          const endValue = numericValue;

          const animate = () => {
            const now = Date.now();
            const progress = Math.min((now - startTime) / duration, 1);

            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const currentValue = Math.floor(easeOutQuart * endValue);

            setCount(currentValue);

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [numericValue, duration, hasAnimated, isNumeric]);

  return (
    <span ref={ref} className="counter-animate">
      {isNumeric ? `${prefix}${count}${suffix}` : value}
    </span>
  );
};

const Stats: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-28 bg-brand-black relative overflow-hidden"
    >
      {/* Decorative line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-cyan/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-cyan/30 to-transparent" />

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-brand-cyan/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 stagger-children ${isVisible ? 'visible' : ''}`}>
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group cursor-default"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-brand-cyan/10 transition-colors">
                  {statIcons[index]}
                </div>
              </div>
              <div className="relative inline-block">
                <h3 className="text-5xl md:text-7xl font-black text-white mb-2 group-hover:text-brand-cyan transition-colors duration-300">
                  <AnimatedCounter value={stat.value} />
                </h3>
                {/* Subtle glow on hover */}
                <div className="absolute inset-0 bg-brand-cyan/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              </div>
              <p className="text-gray-400 font-medium text-lg leading-tight">
                {stat.label} <br />
                <span className="text-brand-cyan font-bold">{stat.subLabel}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;