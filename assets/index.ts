// Centralização de Assets
// Importando todas as imagens locais
import perfil from './perfil 2.png';
import behanceBtn from './behance.jpg';
import instagramBtn from './instagram.jpg';

// Importando imagens dos projetos do carrossel
import luzDoSolImg from './luzdosol-logo 3.jpg';
import leandroImg from './leandro.png';
import natalImg from './natal.jpg';
import lancamentoImg from './lançamento.jpg';
import projeto5Img from './2.jpg';
import garraAcaiImg from './garraacai.jpg';
import octoImg from './octo.jpg';

// Configuração de imagens do portfólio
const IMAGES = {
  profile: perfil,
  behance: behanceBtn,
  instagram: instagramBtn,
  projects: {
    projeto1: luzDoSolImg,
    projeto2: leandroImg,
    projeto3: natalImg,
    projeto4: lancamentoImg,
    projeto5: projeto5Img,
    projeto6: garraAcaiImg,
    projeto7: octoImg,
  }
};

export default IMAGES;