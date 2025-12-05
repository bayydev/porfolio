// Centralização de Assets
// Importando todas as imagens locais
import img11 from './1.1.jpg';
import perfil from './perfil.png';
import imobiliaria from './imobiliaria-7.jpg';
import imobiliaria2 from './imobiliaria-1.jpg';
import imobiliaria3 from './imobiliaria-2.jpg';
import imobiliaria4 from './imobiliaria-3.jpg';
import imobiliaria5 from './imobiliaria-4.jpg';
import imobiliaria6 from './imobiliaria-5.jpg';
import imobiliaria7 from './imobiliaria-6.jpg';
import imobiliaria8 from './imobiliaria-8.jpg';

// Importando imagens de outros projetos
import leandroImg from './leandro.png';
import luzDoSolImg from './luzdosol-logo 3.jpg';

// Configuração de imagens do portfólio
const IMAGES = {
  profile: perfil, // Foto de perfil do Cauã
  acai: {
    cover: imobiliaria,
    gallery: [
      imobiliaria2,
      imobiliaria3,
      imobiliaria4,
      imobiliaria5,
      imobiliaria6,
      imobiliaria7,
      imobiliaria8,
    ]
  },
  confidencial1: {
    cover: img11   // Preview do projeto confidencial 1
  },
  confidencial2: {
    cover: luzDoSolImg  // Preview do projeto confidencial 2
  },
  confidencial3: {
    cover: leandroImg  // Preview do projeto confidencial 3
  }
};

export default IMAGES;