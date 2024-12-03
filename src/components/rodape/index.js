
import React from 'react';
import './style.css';

const Footer = () => {
  return (
    <footer id='footer'>
      <div className='footer-content center'>
        <p>&copy; 2024, Todos os direitos reservados.</p>
        <div className='social-links'>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src='./assets/facebook-icon.png' alt='Facebook' />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src='./assets/instagram-icon.png' alt='Instagram' />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img id='xtw' src='./assets/twitter-icon.png' alt='Twitter' />
          </a>
        </div>
        <p>Nos visite em Caraguatatuba (SP) ou entre em contato pelo telefone (12) 3456-7890.</p>
      </div>
    </footer>
  );
}

export default Footer;
