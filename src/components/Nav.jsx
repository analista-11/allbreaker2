import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Nav = () => {
  return (
    <nav style={styles.nav}>
      <div style={styles.logoContainer}>
        <img src={logo} alt="Logo" style={styles.logo} />
      </div>
      <ul style={styles.navLinks}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/who-we-are">Quiénes Somos</Link></li>
        <li><Link to="/services">Servicios</Link></li>
        <li><Link to="/portfolio">Portafolio</Link></li>
        <li><Link to="/news">Noticias</Link></li>
        <li><Link to="/contact">Contacto</Link></li>
        <li><Link to="/work-with-us">Trabaja con Nosotros</Link></li>
        <li><Link to="/faq">Preguntas Frecuentes</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;