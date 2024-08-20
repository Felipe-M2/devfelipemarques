import './App.css';
import './responsivo.css';

import Topo from './components/Topo';
import Intro from './components/Intro';
import Portfolio from './components/Portfolio';
import Sobre from './components/Sobre';
import Tecnologias from './components/Tecnologias';
import Contato from './components/Contato';
import Rodape from './components/Rodape';

function PortfolioPage() {

  return (
    <>
      <Topo />
      <Intro />
      <Portfolio />
      <Sobre />
      <Tecnologias />
      <Contato />
      <Rodape />
    </>
  )
}

export default PortfolioPage;
