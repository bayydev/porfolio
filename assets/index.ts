// Centralização de Assets
// Importando todas as imagens locais
import img1 from './1.jpg';
import img11 from './1.1.jpg';
import img2 from './2.jpg';
import img3 from './3.jpg';
import img4 from './4.jpg';
import img5 from './5.jpg';
import img6 from './6.jpg';
import img7 from './7.jpg';
import perfil from './perfil.png';

// Importando imagens de outros projetos
import mockupImg from './mockup.jpg';
import luzDoSolImg from './luzdosol-logo 3.jpg';
import amandaImg from './amanda.jpeg';

// Configuração de imagens do portfólio
const IMAGES = {
  profile: perfil, // Foto de perfil do Cauã
  acai: {
    cover: img11,
    gallery: [
      img11, // 1.1
      img2,  // 2
      img3,  // 3
      img4,  // 4
      img5,  // 5
      img6,  // 6
      img7,  // 7
    ]
  },
  confidencial1: {
    cover: mockupImg  // Preview do projeto confidencial 1
  },
  confidencial2: {
    cover: luzDoSolImg  // Preview do projeto confidencial 2
  },
  confidencial3: {
    cover: amandaImg  // Preview do projeto confidencial 3
  }
};

export default IMAGES;