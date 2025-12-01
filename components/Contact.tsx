import React, { useState, useEffect } from 'react';
import { Instagram, Send, Mail, MapPin, MessageCircle } from 'lucide-react';

const TypewriterEffect = () => {
  const phrases = ["único?", "que dê fome?", "que vende?"];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleType = () => {
      const currentPhrase = phrases[currentPhraseIndex];

      if (isDeleting) {
        setCurrentText(currentPhrase.substring(0, currentText.length - 1));
        setTypingSpeed(50); // Velocidade mais rápida para apagar
      } else {
        setCurrentText(currentPhrase.substring(0, currentText.length + 1));
        setTypingSpeed(150); // Velocidade normal para escrever
      }

      if (!isDeleting && currentText === currentPhrase) {
        // Terminou de escrever, espera um pouco antes de apagar
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === "") {
        // Terminou de apagar, passa para a próxima frase
        setIsDeleting(false);
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentPhraseIndex, phrases, typingSpeed]);

  return (
    <span className="text-brand-pink relative">
      {currentText}
      <span className="animate-cursor-blink ml-1 border-r-2 border-brand-pink h-[0.8em] inline-block align-middle"></span>
    </span>
  );
};

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-black pt-24 pb-12 rounded-t-[3rem] relative -mt-12 z-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 mb-20 items-center">
          <div>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight h-[3.5em] md:h-[3em]">
              Vamos criar <br />
              algo <TypewriterEffect />
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-md">
              Seu delivery merece um visual que desperta o desejo e converte cliques em pedidos. Entre em contato e vamos elevar o nível da sua marca hoje.
            </p>

            <div className="flex flex-col gap-4">
              <a href="mailto:contato.visualcaua@gmail.com" className="flex items-center gap-4 text-white hover:text-brand-pink transition-colors p-4 glass-card rounded-xl w-max">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                  <Mail size={20} />
                </div>
                <span className="font-medium">contato.visualcaua@gmail.com</span>
              </a>
              <div className="flex items-center gap-4 text-white p-4 glass-card rounded-xl w-max">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                  <MapPin size={20} />
                </div>
                <span className="font-medium">ES, Brasil (Atendimento Online)</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-brand-gray/50 to-brand-black p-8 rounded-[2rem] border border-white/10 flex flex-col items-center justify-center text-center h-full min-h-[400px]">
            <div className="w-24 h-24 bg-brand-pink/20 rounded-full flex items-center justify-center mb-6 animate-pulse">
              <MessageCircle size={48} className="text-brand-pink" />
            </div>
            <h3 className="text-3xl font-black text-white mb-4">Pronto para começar?</h3>
            <p className="text-gray-400 mb-8 max-w-sm">
              Não perca tempo com formulários longos. Fale diretamente comigo no WhatsApp e receba um orçamento personalizado.
            </p>
            <a
              href="https://wa.me/5527992241844"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-md bg-[#25D366] text-white font-black text-xl py-5 rounded-2xl hover:bg-[#1ebc57] transition-all hover:scale-105 shadow-xl flex items-center justify-center gap-3"
            >
              CHAMAR NO WHATSAPP <Send size={24} />
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-black tracking-tighter text-white">
            VISUAL<span className="text-brand-pink">.CAUA</span>
          </div>

          <div className="flex gap-6">
            <a href="https://instagram.com/visual.caua" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-pink transition-colors">
              <Instagram size={24} />
            </a>
            <a href="https://be.net/visualcaua" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-pink transition-colors">
              Behance
            </a>
            <a href="https://wa.me/5527992241844" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-pink transition-colors">
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