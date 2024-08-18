import './style.css';

import Camera from '../../assets/camera.svg';

const Rodape = ()=>{
    return(
        <section className="rodape">
            <div className='menuRodape'>
                <nav>
                    <ul>
                        <li>Contato</li>
                        <li>Sobre</li>
                        <li>Politica de privacidade</li>
                        <li>Home</li>
                    </ul>
                </nav>
            </div>

            <div className='imgRodape'>
                <img src={Camera} alt="" />
            </div>

            <div className='direitosInfo'>
                <p>Todos os direitos reservados a Felipe Marques</p>
                {/* <h1>CNPJ: </h1> */}
            </div>
        </section>
    )
}

export default Rodape;