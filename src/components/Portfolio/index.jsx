import './style.css';
import './Responsivo.css';

import SvgPortfolio from '../../assets/svgPortfolio.svg';
import Seta from '../../assets/setaBtnIntro.svg';

import Fincontrol from '../../assets/fincontrol.svg';

const Portfolio = () => {
    return (
        <section className="portfolio">
            <div className="infoProjeto">
                <h1 className='tituloInfoProjeto'>Portfolio</h1>

                <div className="infoProjetoAtv">
                    <h1 className='nomeProjeto'>FinControl</h1>

                    <p className="descricaoProjeto">
                        FinControl é um sistema web projetado para o controle financeiro pessoal, suas funcionalidades incluem relatórios completos sobre gastos, investimentos e despesas fixas, além disso, o sistema possui integração com email e Telegram para envios de relatórios e inteligencia artificial para análise e melhoria dos seus gastos!

                    </p>

                    <a
                        href='https://fincontrol-peach.vercel.app/'
                        className='btnProjeto'
                        target='blank_'
                    >
                        Conhecer
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-arrow-up-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z" />
                        </svg>
                    </a>
                </div>

                <div className="btnProximoProjeto">
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#C2C2C2" class="bi bi-arrow-left" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
                        </svg>
                    </button>

                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#C2C2C2" class="bi bi-arrow-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                        </svg>
                    </button>
                </div>

            </div>

            <div className="imgProjeto">
                <img
                    src={SvgPortfolio}
                    alt=""
                    className="backgroundImgProjeto"
                />

                <div className="imgCenterProjeto">
                    <img src={Fincontrol} alt="Captura de uma das telas do sistema FinControl" title='FinControl'/>
                </div>
            </div>

        </section>
    )
}

export default Portfolio;