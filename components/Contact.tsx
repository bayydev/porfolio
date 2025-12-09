import React, { useState, useEffect, useRef } from 'react';
import { Instagram, Send, Mail, MapPin, ArrowRight, User, Layers, Hash } from 'lucide-react';

const serviceOptions = [
  { value: 'identidade-visual', label: 'Identidade Visual' },
  { value: 'social-media', label: 'Social Media' },
  { value: 'materiais-comerciais', label: 'Materiais Comerciais' },
  { value: 'criativos-ads', label: 'Criativos para Ads' },
  { value: 'outro', label: 'Outro' },
];

const TypewriterEffect = () => {
  const phrases = ["único?", "estratégico?", "que impulsiona?"];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleType = () => {
      const currentPhrase = phrases[currentPhraseIndex];

      if (isDeleting) {
        setCurrentText(currentPhrase.substring(0, currentText.length - 1));
        setTypingSpeed(50);
      } else {
        setCurrentText(currentPhrase.substring(0, currentText.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && currentText === currentPhrase) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentPhraseIndex, phrases, typingSpeed]);

  return (
    <span className="text-brand-cyan relative">
      {currentText}
      <span className="ml-1 inline-block w-[3px] h-[0.8em] bg-brand-cyan animate-pulse align-middle" />
    </span>
  );
};

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    service: '',
    quantity: '',
  });

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const generateWhatsAppLink = () => {
    const { name, service, quantity } = formData;
    const serviceName = serviceOptions.find(s => s.value === service)?.label || service;

    let message = `Olá! `;

    if (name) {
      message += `Me chamo ${name}. `;
    }

    if (service) {
      message += `Tenho interesse em ${serviceName}`;
      if (quantity) {
        message += ` (${quantity} peças/projetos)`;
      }
      message += `. `;
    }

    message += `Gostaria de saber mais sobre como podemos trabalhar juntos!`;

    return `https://wa.me/5527992241844?text=${encodeURIComponent(message)}`;
  };

  const isFormValid = formData.name.trim() !== '' && formData.service !== '';

  return (
    <footer id="contact" ref={sectionRef} className="bg-black pt-32 pb-16 rounded-t-[3rem] relative -mt-12 z-20 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-80 h-80 bg-brand-cyan/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 mb-20 items-center">
          {/* Left Content */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-8 tracking-tight leading-tight">
              Vamos criar <br />
              algo <TypewriterEffect />
            </h2>
            <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-md leading-relaxed">
              Sua empresa merece um visual estratégico que gera resultados. Entre em contato e vamos elevar o nível da sua marca hoje.
            </p>

            <div className="flex flex-col gap-4">
              <a
                href="mailto:contato.visualcaua@gmail.com"
                className="group flex items-center gap-4 text-white hover:text-brand-cyan transition-all p-4 glass-card-premium rounded-xl w-max card-hover"
              >
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-brand-cyan/20 transition-colors">
                  <Mail size={20} className="group-hover:scale-110 transition-transform" />
                </div>
                <span className="font-medium">contato.visualcaua@gmail.com</span>
              </a>
              <div className="flex items-center gap-4 text-white p-4 glass-card-premium rounded-xl w-max">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                  <MapPin size={20} />
                </div>
                <span className="font-medium">ES, Brasil (Atendimento Online)</span>
              </div>
            </div>
          </div>

          {/* Right - WhatsApp Form */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="bg-gradient-to-br from-brand-gray/60 to-brand-black/80 p-8 md:p-10 rounded-[2rem] border border-white/10 relative overflow-hidden">
              <h3 className="text-2xl md:text-3xl font-black text-white mb-2">Solicite um orçamento</h3>
              <p className="text-gray-400 mb-8">
                Preencha os dados abaixo e fale diretamente comigo no WhatsApp.
              </p>

              {/* Form */}
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                {/* Name */}
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                    <User size={20} />
                  </div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Seu nome"
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder-gray-500 focus:border-brand-cyan/50 focus:bg-white/10 transition-all outline-none"
                  />
                </div>

                {/* Service */}
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                    <Layers size={20} />
                  </div>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:border-brand-cyan/50 focus:bg-white/10 transition-all outline-none appearance-none cursor-pointer"
                  >
                    <option value="" disabled className="bg-brand-black">Tipo de serviço</option>
                    {serviceOptions.map(option => (
                      <option key={option.value} value={option.value} className="bg-brand-black">
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
                    <ArrowRight size={16} className="rotate-90" />
                  </div>
                </div>

                {/* Quantity */}
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                    <Hash size={20} />
                  </div>
                  <input
                    type="text"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleInputChange}
                    placeholder="Quantidade (ex: 10 posts, 1 logo)"
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder-gray-500 focus:border-brand-cyan/50 focus:bg-white/10 transition-all outline-none"
                  />
                </div>

                {/* Submit Button */}
                <a
                  href={isFormValid ? generateWhatsAppLink() : '#'}
                  target={isFormValid ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  onClick={(e) => !isFormValid && e.preventDefault()}
                  className={`w-full flex items-center justify-center gap-3 py-5 rounded-2xl font-black text-lg transition-all ${isFormValid
                    ? 'bg-[#25D366] text-white hover:bg-[#1ebc57] hover:scale-[1.02] shadow-xl shadow-[#25D366]/20 cursor-pointer'
                    : 'bg-gray-700 text-gray-400 cursor-not-allowed'
                    }`}
                >
                  CHAMAR NO WHATSAPP
                  <Send size={24} className={isFormValid ? 'group-hover:translate-x-1' : ''} />
                </a>
              </form>

              <p className="text-gray-600 text-sm text-center mt-4">
                Respondo em até 4 horas durante o horário comercial
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className={`border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <a href="#about" className="text-2xl font-black tracking-tighter text-white group hover:scale-105 transition-transform">
            VISUAL<span className="text-brand-cyan group-hover:text-white transition-colors">.CAUA</span>
          </a>

          <div className="flex gap-6">
            <a
              href="https://instagram.com/visual.caua"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-brand-cyan transition-all hover:scale-110 p-2"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://be.net/visualcaua"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-brand-cyan transition-all footer-link py-2"
            >
              Behance
            </a>
            <a
              href="https://wa.me/5527992241844"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-brand-cyan transition-all footer-link py-2"
            >
              WhatsApp
            </a>
          </div>

          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Cauã C. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;