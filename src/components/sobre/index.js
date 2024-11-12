import React from 'react';
import './style.css';

const SecaoSobre = () => {
    return (
        <section id='sobre'>
            <div className='sobre center'>
                <h2>Sobre Nós</h2>
                <p>
                    Somos apaixonados por carros clássicos e, especialmente, pelo <strong>Volkswagen Fusca</strong>. 
                    Fundada em 2024, na cidade de Caraguatatuba (SP), nossa missão é oferecer aos amantes de automóveis antigos a oportunidade de adquirir 
                    um pedaço da história sobre rodas.
                </p>
                <p>
                    Com um estoque seleto de Fuscas, desde os modelos mais antigos até as versões mais modernas, nossa empresa se dedica a 
                    proporcionar a melhor experiência de compra, com preços acessíveis, carros restaurados com carinho e qualidade, e um atendimento que entende a verdadeira paixão por carros.
                </p>
                <p>
                    Se você também é fã desse ícone automobilístico, está no lugar certo. Aqui, cada Fusca tem uma história, e cada cliente faz parte dessa história.
                </p>
            </div>

            <div className='elementos-sobre'>
                <picture>
                    <img src='./assets/fusca1.jpg' alt='Volkswagen Fusca Clássico' />
                </picture>
            </div>
        </section>
    );
}

export default SecaoSobre;
