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
          <li><a href="/link1">Inicio</a></li>
          <li><a href="/link2">Quienes Somos</a></li>
          <li><a href="/link3">Servicios</a></li>
          <li><a href="/link4">Portafolio</a></li>
          <li><a href="/link4">Noticias</a></li>
          <li><a href="/link4">Contacto</a></li>
          <li><a href="/link4">Trabaja con Nosotros</a></li>
          <li><a href="/link4">Preguntas Frecuentes</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
