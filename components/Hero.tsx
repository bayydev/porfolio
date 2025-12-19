import React from 'react';
import IMAGES from '../assets';

// Placeholder images - replace these paths with your actual images
const PROFILE_IMAGE = IMAGES.profile; // Your PNG image path
const BEHANCE_BUTTON_IMAGE = IMAGES.behance; // Behance button image path
const INSTAGRAM_BUTTON_IMAGE = IMAGES.instagram; // Instagram button image path

// Carousel projects with real images
const PROJECTS = [
  { id: 1, title: 'Luz do Sol', image: IMAGES.projects.projeto1 },
  { id: 2, title: 'Leandro', image: IMAGES.projects.projeto2 },
  { id: 3, title: 'Natal', image: IMAGES.projects.projeto3 },
  { id: 4, title: 'Lançamento', image: IMAGES.projects.projeto4 },
  { id: 5, title: 'Projeto 5', image: IMAGES.projects.projeto5 },
  { id: 6, title: 'Garra Açaí', image: IMAGES.projects.projeto6 },
  { id: 7, title: 'Octo', image: IMAGES.projects.projeto7 },
];

const Hero: React.FC = () => {
  // Duplicate projects for infinite scroll effect
  const duplicatedProjects = [...PROJECTS, ...PROJECTS];

  return (
    <section className="main-container">
      <div className="content-wrapper">
        {/* Left - Profile Image */}
        <div className="profile-section fade-in">
          {PROFILE_IMAGE ? (
            <img
              src={PROFILE_IMAGE}
              alt="Cauã - Visual Designer"
              className="profile-image"
            />
          ) : (
            <div className="profile-placeholder">
              IMAGEM<br />PNG<br />SEM FUNDO
            </div>
          )}
        </div>

        {/* Right - Content */}
        <div className="info-section">
          <p className="bio-text fade-in fade-delay-1">
            Me chamo Cauã, tenho 19 anos e possuo uma trajetória marcada pela versatilidade e pelo foco em resultados. Criado na Baixada Fluminense, Rio de Janeiro, retornei ao Espírito Santo — minha terra natal — para consolidar minha carreira e meus projetos.
            <br /><br />
            Sou designer gráfico especializado em publicidade há mais de 5 anos, unindo criatividade e estratégia para entregar soluções visuais de alto impacto. Atualmente, sou o fundador da Flow, uma plataforma desenvolvida exclusivamente para impulsionar o crescimento de designers, motion designers e editores de vídeo. Através de ferramentas inovadoras, cursos e mentorias, minha missão é fornecer o suporte necessário para que outros profissionais da área criativa evoluam em suas carreiras e alcancem a excelência no mercado.
          </p>

          {/* Buttons */}
          <div className="action-buttons">
            <a
              href="https://www.behance.net/visualcaua"
              target="_blank"
              rel="noopener noreferrer"
              className="action-btn fade-in fade-delay-2"
            >
              {BEHANCE_BUTTON_IMAGE ? (
                <img src={BEHANCE_BUTTON_IMAGE} alt="Ver Portfólio no Behance" />
              ) : (
                <div className="action-btn-placeholder">BOTÃO 2</div>
              )}
            </a>

            <a
              href="https://www.instagram.com/visualcaua"
              target="_blank"
              rel="noopener noreferrer"
              className="action-btn fade-in fade-delay-3"
            >
              {INSTAGRAM_BUTTON_IMAGE ? (
                <img src={INSTAGRAM_BUTTON_IMAGE} alt="Seguir no Instagram" />
              ) : (
                <div className="action-btn-placeholder">BOTÃO 3</div>
              )}
            </a>
          </div>

          {/* Infinite Carousel */}
          <div className="carousel-section fade-in fade-delay-4">
            <p className="carousel-label">Trabalhos recentes</p>
            <div className="carousel-track-wrapper">
              <div className="carousel-track">
                {duplicatedProjects.map((project, index) => (
                  <div key={`${project.id}-${index}`} className="carousel-slide">
                    {project.image ? (
                      <img src={project.image} alt={project.title} />
                    ) : (
                      <div className="carousel-slide-placeholder">
                        {project.title}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;