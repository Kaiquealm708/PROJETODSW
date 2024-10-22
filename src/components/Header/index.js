import React from 'react';
import './style.css';

const Header = () => {
    return (
        <header>
            <div className='header center'>
                <picture>
                    <img src='./assets/logo.png' alt='logo fusca'/>
                    <h2 className='title-site'>BuscoFusca</h2>
                </picture>

                <nav>
                    <ul>
                        <li >
                            <a href= '#pro'>Produtos</a>
                        </li>

                        <li>
                            <a href= '#'>Sobre</a>
                        </li>

                        <li>
                            <a href= '#'>Contatos</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;