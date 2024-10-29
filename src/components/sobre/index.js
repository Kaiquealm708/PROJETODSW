import React from 'react'
import './style.css'

const SecaoSobre = () => {
    return( 
    <section id='sobre'>
        <div className='sobre center'>
            <h2>Sobre Nós</h2>
                <p>Fundada em 2024 - Caraguatatuba (SP), com o objetivo de oferecer aos clientes de gosto antigo, carros relíquias e de grande modestia.</p>
        </div>

            <div className='elementos-sobre'>
                <picture>
                    <img src='./assents/img/'
                    alt='img-car'></img>
                </picture>
            </div>
    </section>)
}

export default SecaoSobre;