import React, { useEffect, useRef, useState } from 'react';
import { Clock, Users, Calculator, Wallet, FileText, GraduationCap, ArrowRight, Rocket } from 'lucide-react';

const features = [
    {
        icon: <Clock className="w-6 h-6" />,
        title: "Blocos de Tempo",
        description: "Rotina otimizada para seu nicho"
    },
    {
        icon: <Users className="w-6 h-6" />,
        title: "CRM de Clientes",
        description: "Pipeline visual de vendas"
    },
    {
        icon: <Calculator className="w-6 h-6" />,
        title: "Calculadora de Preços",
        description: "Precificação profissional"
    },
    {
        icon: <Wallet className="w-6 h-6" />,
        title: "Módulo Financeiro",
        description: "Controle de caixa completo"
    },
    {
        icon: <FileText className="w-6 h-6" />,
        title: "Gerador de Contratos",
        description: "PDFs personalizados"
    },
    {
        icon: <GraduationCap className="w-6 h-6" />,
        title: "Módulo de Carreira",
        description: "Conteúdo educacional"
    }
];

const FreelanceFlowCTA: React.FC = () => {
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
        <section
            ref={sectionRef}
            className="relative py-24 md:py-32 overflow-hidden cyberpunk-bg"
        >
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Floating orbs */}
                <div className="absolute top-20 left-10 w-64 h-64 bg-brand-cyan/10 rounded-full blur-[100px] animate-float-slow" />
                <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-[120px] animate-float-slow animate-float-delay-2" />
                <div className="absolute top-1/2 left-1/3 w-40 h-40 bg-brand-cyan/5 rounded-full blur-[80px] animate-float-reverse" />

                {/* Grid lines */}
                <div className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `
              linear-gradient(rgba(0, 217, 177, 0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 217, 177, 0.5) 1px, transparent 1px)
            `,
                        backgroundSize: '50px 50px'
                    }}
                />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-brand-cyan/20 to-purple-500/20 border border-brand-cyan/30 mb-6 animate-pulse-soft">
                        <Rocket className="w-4 h-4 text-brand-cyan" />
                        <span className="text-sm font-bold text-brand-cyan uppercase tracking-wider">Nova Plataforma</span>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-black text-white mb-4 leading-tight">
                        Conheça o{' '}
                        <span className="gradient-text-animated">FreelanceFlow</span>
                    </h2>

                    <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        O sistema completo para <span className="text-white font-semibold">designers</span>, <span className="text-white font-semibold">motion designers</span> e <span className="text-white font-semibold">editores de vídeo</span> que trabalham como freelancers.
                    </p>
                </div>

                {/* Features Grid */}
                <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12 stagger-children ${isVisible ? 'visible' : ''}`}>
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="cyberpunk-card rounded-2xl p-5 text-center card-hover group cursor-default"
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-brand-cyan/20 to-purple-500/20 flex items-center justify-center text-brand-cyan group-hover:scale-110 transition-transform duration-300">
                                {feature.icon}
                            </div>
                            <h4 className="text-sm font-bold text-white mb-1">{feature.title}</h4>
                            <p className="text-xs text-gray-500 leading-tight">{feature.description}</p>
                        </div>
                    ))}
                </div>

                {/* Main CTA Card */}
                <div className={`max-w-4xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="relative rounded-3xl overflow-hidden gradient-border gradient-border-animated">
                        <div className="bg-gradient-to-br from-brand-gray/80 to-brand-black/90 backdrop-blur-xl p-8 md:p-12">
                            <div className="flex flex-col lg:flex-row items-center gap-8">
                                {/* Left Content */}
                                <div className="flex-1 text-center lg:text-left">
                                    <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
                                        <div className="w-5 h-5 rounded bg-yellow-400/20 flex items-center justify-center">
                                            <div className="w-2 h-2 rounded-sm bg-yellow-400" />
                                        </div>
                                        <span className="text-sm font-bold text-yellow-400 uppercase tracking-wider">Gerencie sua Carreira</span>
                                    </div>

                                    <h3 className="text-2xl md:text-3xl font-black text-white mb-4">
                                        Tudo que você precisa para <br className="hidden md:block" />
                                        <span className="text-brand-cyan">escalar como freelancer</span>
                                    </h3>

                                    <ul className="space-y-3 mb-6 text-left">
                                        {[
                                            "Blocos de tempo inteligentes (B2B ou B2C)",
                                            "CRM completo com pipeline visual",
                                            "Calculadora de preços profissional",
                                            "Timer Pomodoro integrado + Daily Win"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-center gap-3 text-gray-300">
                                                <div className="w-5 h-5 rounded-full bg-brand-cyan/20 flex items-center justify-center flex-shrink-0">
                                                    <div className="w-2 h-2 rounded-full bg-brand-cyan" />
                                                </div>
                                                <span className="text-sm md:text-base">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Right CTA */}
                                <div className="flex flex-col items-center gap-4">
                                    <a
                                        href="https://flow.visualcaua.com.br"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group relative btn-cyberpunk text-white font-black text-lg md:text-xl px-10 py-5 rounded-2xl flex items-center gap-3 shimmer-button animate-glow-cyberpunk"
                                    >
                                        <span>ACESSAR PLATAFORMA</span>
                                        <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                                    </a>

                                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                        <span>flow.visualcaua.com.br</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Text */}
                <p className={`text-center text-gray-600 text-sm mt-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    Desenvolvido por Cauã C.
                </p>
            </div>
        </section>
    );
};

export default FreelanceFlowCTA;
