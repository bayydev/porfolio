import React, { useState } from 'react';
import Modal from './Modal';

const Header: React.FC = () => {
  const [showServices, setShowServices] = useState(false);
  const [showFaq, setShowFaq] = useState(false);

  return (
    <>
      <header className="header">
        <nav className="header-nav">
          <a
            href="https://flow.visualcaua.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="header-link"
          >
            FLOW
          </a>
          <button
            onClick={() => setShowServices(true)}
            className="header-link"
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          >
            SERVIÇOS
          </button>
          <button
            onClick={() => setShowFaq(true)}
            className="header-link"
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          >
            FAQ
          </button>
        </nav>
      </header>

      {/* Modal de Serviços */}
      <Modal
        isOpen={showServices}
        onClose={() => setShowServices(false)}
        title="Meus Serviços"
      >
        <h3>Design Gráfico</h3>
        <p>
          Criação de identidades visuais completas, logotipos, materiais
          publicitários, posts para redes sociais e muito mais. Com mais de
          5 anos de experiência em publicidade.
        </p>
        <ul>
          <li>Identidade Visual / Branding</li>
          <li>Logotipos e Marcas</li>
          <li>Posts para Redes Sociais</li>
          <li>Materiais Publicitários</li>
          <li>Artes para Impressão</li>
        </ul>

        <h3>UI/UX Design</h3>
        <p>
          Design de interfaces para aplicativos e sites, com foco na
          experiência do usuário e na conversão.
        </p>
        <ul>
          <li>Design de Interfaces (UI)</li>
          <li>Experiência do Usuário (UX)</li>
          <li>Prototipagem</li>
        </ul>
      </Modal>

      {/* Modal de FAQ */}
      <Modal
        isOpen={showFaq}
        onClose={() => setShowFaq(false)}
        title="Perguntas Frequentes"
      >
        <div className="faq-item">
          <p className="faq-question">Qual o prazo de entrega?</p>
          <p className="faq-answer">
            O prazo varia de acordo com o projeto. Projetos simples podem ser entregues em 2-5
            dias úteis, enquanto projetos mais complexos podem levar de 1 a 3 semanas.
          </p>
        </div>

        <div className="faq-item">
          <p className="faq-question">Como funciona o processo de trabalho?</p>
          <p className="faq-answer">
            Começamos com um briefing detalhado para entender suas necessidades.
            Depois, apresento conceitos iniciais, fazemos rodadas de ajustes e
            finalizamos com a entrega dos arquivos finais.
          </p>
        </div>

        <div className="faq-item">
          <p className="faq-question">Quais formas de pagamento?</p>
          <p className="faq-answer">
            Aceito PIX, transferência bancária e cartão de crédito. O pagamento
            geralmente é dividido: 50% no início e 50% na entrega.
          </p>
        </div>

        <div className="faq-item">
          <p className="faq-question">Você atende empresas de qualquer lugar?</p>
          <p className="faq-answer">
            Sim! Trabalho 100% online e já atendi clientes de todo o Brasil e
            do exterior.
          </p>
        </div>

        <div className="faq-item">
          <p className="faq-question">Como entro em contato?</p>
          <p className="faq-answer">
            Me chama no <a href="https://wa.me/5527992241844" target="_blank" rel="noopener noreferrer" style={{ color: '#7C3AED' }}>WhatsApp</a> ou
            no <a href="https://instagram.com/visual.caua" target="_blank" rel="noopener noreferrer" style={{ color: '#7C3AED' }}>Instagram (@visual.caua)</a>.
          </p>
        </div>
      </Modal>
    </>
  );
};

export default Header;