import './style.css';

import { useState } from 'react';

import Asset1 from '../../assets/asset1.svg';
import Asset2 from '../../assets/asset2.svg';
import Meta from '../../assets/meta.svg';
import React from '../../assets/react.svg';
import { IconCloudDemo } from '../Icones';

const data = [
    {
        titulo: 'Site Institucional',
        descricao: 'Site para mostrar a sua empresa, seria a sua carta de apresentação para futuros clientes, o primeiro contato pode deixar uma marca muito positiva para uma pessoa interessada!'
    },
    {
        titulo: 'Loja Virtual',
        descricao: 'Uma loja virtual é uma plataforma online onde produtos ou serviços são oferecidos para venda. Os clientes podem navegar pelos itens, adicionar ao carrinho de compras e realizar pagamentos eletronicamente, com entrega ou acesso digital aos produtos adquiridos.'
    },
    {
        titulo: 'Landing page',
        descricao: 'Uma landing page é uma página web criada com o objetivo específico de converter visitantes em leads ou clientes. Ela é focada em uma oferta ou ação única, como preencher um formulário, baixar um eBook, ou se inscrever em um serviço, e é projetada para capturar a atenção do usuário e incentivá-lo a realizar essa ação.'
    },
    {
        titulo: 'Portfólio',
        descricao: 'Um portfólio é uma coleção organizada de trabalhos, projetos e realizações que demonstra as habilidades, experiências e competências de uma pessoa ou empresa. Geralmente utilizado por profissionais criativos, freelancers, e empresas, o portfólio pode incluir exemplos de trabalhos anteriores, estudos de caso, e depoimentos, servindo como uma ferramenta para atrair novos clientes ou oportunidades de emprego.'
    },
]

const Tecnologias = () => {

    const [posicao, setPosicao] = useState(0);

    const clickPosicao = (fun)=>{
        if(fun == false){
            if(posicao == 0){
                setPosicao(data.length - 1);
            }else{
                setPosicao(posicao - 1);
            }
        }else{
            if(posicao == data.length -1){
                setPosicao(0);
            }else{
                setPosicao(posicao + 1);
            }
        }
    }

    return (
        <section className="tecnologias">
            <section className="infoTecnologias">
                <div className='introTecnologias'>
                    <h1>
                        Tenho conhecimento em tecnologias criadas e usadas por empresas que ajudaram na evolução da tecnologia do mundo inteiro!
                    </h1>
                </div>

                {/* <div className='cardTecnologias'>
                    <div className="cardTech">
                        <img className='techImg' src={Meta} alt="Logo da Meta" title='Meta' />
                    </div>
                    <div className="cardTech">
                        <img src={Asset1} alt="" />
                    </div>
                    <div className="cardTech">
                        <img src={Asset2} alt="" />
                    </div>
                    <div className="cardTech">
                        <img className='techImg' src={React} alt="Logo do React, tecnologia usado em desenvolvimento WEB" title='React' />
                    </div>
                </div> */}

                <IconCloudDemo />
            </section>

            <section className="infoModelos">
                <div className="quadroModelo">
                    <div className="molduraModelos"></div>
                    <div className="molduraModelos"></div>
                    <div className="molduraModelos">
                        <h1>{data[posicao].titulo}</h1>
                    </div>
                </div>

                <div className="btnModelos">
                    <button onClick={()=>clickPosicao(true)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-up" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5" />
                        </svg>
                    </button>
                    <button onClick={()=>clickPosicao(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1" />
                        </svg>
                    </button>
                </div>

                <div className="infoModeloDescricao">
                    <p>
                        {data[posicao].descricao}
                    </p>
                </div>
            </section>
        </section>
    )
};

export default Tecnologias;