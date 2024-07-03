import React from 'react';
import '../components/Footer.css';
import logo from '../assets/logo.png'; // Asegúrate de proporcionar la ruta correcta a tu logo

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-column">
        <img src={logo} alt="Logo" className="footer-logo" />
      </div>
      <div className="footer-column">
        <h3 className="footer-title">Links Rápidos</h3>
        <ul className="footer-links">
          <li><a href="/link1">Link 1</a></li>
          <li><a href="/link2">Link 2</a></li>
          <li><a href="/link3">Link 3</a></li>
          <li><a href="/link4">Link 4</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h3 className="footer-title">Título</h3>
        <p className="footer-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.</p>
      </div>
      <div className="footer-column">
        <h3 className="footer-title">Redes Sociales</h3>
        {/* Aquí agregarás los iconos de redes sociales */}
      </div>
    </footer>
  );
};

export default Footer;
