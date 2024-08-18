import './style.css';

import { useState } from 'react';

import Cracha from '../../assets/cracha.svg';

const Sobre = ()=>{

    const [sobre, setSobre] = useState(true);

    return(
        <section className="sobre">
            <div className="menuSobre">
                <h1>Sobre</h1>

                <nav className='navMenuSobre'>
                    <ul>
                        <div 
                            className="ciculoNav"
                        ></div>
                        <li onClick={()=>setSobre(true)}>Me conheça!</li>
                        <li onClick={()=>setSobre(false)}>Habilidades</li>
                    </ul>
                </nav>

                <div className="sobreInfoAtv">
                    {sobre ?(
                        <p>
                            Olá, eu me chamo Felipe, tenho 24 anos e atualmente eu curso o 4º periodo de ADS, tenho abilidades como desenvolvedor com foco em soistemas web para resolução de problemas empresariais!

                            <div className="socialSobre">
                                
                            </div>
                        </p>
                    ):(null)}
                </div>
            </div>

            <div className="infoSobre">
                {sobre ?(
                    <img src={Cracha} alt="" />
                ):(
                    <section className='secaoSobreInfo'>
                        <div className="cardInfoSobre">
                            <h1>Desenvolvedor</h1>

                            <p>O objetivo é criar sistemas com uma otima qualidade tanto para o cliente quanto para o usuario final</p>
                        </div>

                        <div className="cardInfoSobre">
                            <h1>WEB DESIGN</h1>

                            <p>Habilidades como design para criação de modelos com altas taxas de conversão!</p>
                        </div>


                        <div className="cardInfoSobre">
                            <h1>Analise</h1>

                            <p>Analise para indentificar erros e pontos de melhorias!</p>
                        </div>

                        <div className="cardInfoSobre">
                            <h1>Manutenção</h1>

                            <p>Manutenção de sistemas garantindo um bom desenpenho e sempre mantendo projetos atualizados com tecnologias atuais!</p>
                        </div>

                        <h1>Full-Stack</h1>
                    </section>
                )}
            </div>
        </section>
    )
}

export default Sobre;