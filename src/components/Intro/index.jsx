import './style.css';
import './Responsivo.css';

import Seta from '../../assets/setaBtnIntro.svg';
import card310 from '../../assets/card310.svg';
import grade350 from '../../assets/grade350.svg';
import MaisIcon from '../../assets/mais.svg';

const Intro = () => {
    return (
        <section className="intro">
            <section className="linha1">
                <div className='cardIntroMenor'></div>

                <div className='cardIntro cardIntroTitulo'>
                    <h1>
                        Inovação & Futuro lado a lado para a construção de novos horizontes!
                    </h1>
                </div>
                <div className='cardIntro'></div>
                <div className='cardIntro'></div>
                <div className='cardIntro cardIntroBtn'>
                    <button>
                        Portfolio
                        <img src={Seta} alt="" />
                    </button>
                    <button>
                        Contato
                        <img src={Seta} alt="" />
                    </button>
                </div>

                <div className='cardIntroMenor'></div>
            </section>

            <section className="linha2">
                <div className='cardIntroMenor'>
                    <img src={grade350} alt="" />
                </div>

                <div className='cardIntro'>

                    <img src={card310} alt="" />

                    <div className="indicacaoIntro">
                        <h1>01</h1>
                        <img src={MaisIcon} alt="" />
                    </div>

                    <div className="infoIntroCard">
                        <h1>Web Designer</h1>

                        <p>Criação de modelos e protótipos!</p>
                    </div>
                </div>

                <div className='cardIntro'>

                    <img src={card310} alt="" />

                    <div className="indicacaoIntro">
                        <h1>02</h1>
                        <img src={MaisIcon} alt="" />
                    </div>

                    <div className="infoIntroCard">
                        <h1>Desenvolvimento</h1>

                        <p>Parte onde um projeto ganha vida!</p>
                    </div>
                </div>

                <div className='cardIntro'>

                    <img src={card310} alt="" />

                    <div className="indicacaoIntro">
                        <h1>03</h1>
                        <img src={MaisIcon} alt="" />
                    </div>

                    <div className="infoIntroCard">
                        <h1>Analise/Manutenção</h1>

                        <p>Análise de projetos e manutenções para otimização e melhor performance!</p>
                    </div>
                </div>

                <div className='cardIntro'>

                    <img src={card310} alt="" />

                    <div className="indicacaoIntro">
                        <h1>04</h1>
                        <img src={MaisIcon} alt="" />
                    </div>

                    <div className="infoIntroCard">
                        <h1>Me Conheça</h1>

                        <p>Conheça quem está por trás das inovações que entregamos!</p>
                    </div>
                </div>

                <div className='cardIntroMenor'>
                    <img src={grade350} alt="" />
                </div>
            </section>

            <section className="linha3">
                <div className='cardIntroMenor'></div>
                <div className='cardIntro'></div>
                <div className='cardIntro'></div>
                <div className='cardIntro'></div>
                <div className='cardIntro'></div>
                <div className='cardIntroMenor'></div>
            </section>
        </section>
    )
}

export default Intro;