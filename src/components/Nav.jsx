import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../components/Nav.css';

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);

  // Función para cerrar el menú
  const closeMenu = () => {
    setShowMenu(false);
  };

  // Efecto para cerrar el menú al cambiar el tamaño de la ventana
  useEffect(() => {
    const handleResize = () => {
      // Cerrar el menú si está abierto y el ancho de la ventana supera los 1324px (tamaño máximo del media query)
      if (showMenu && window.innerWidth > 1324) {
        setShowMenu(false);
      }
    };

    // Agregar el listener para el evento resize
    window.addEventListener('resize', handleResize);

    // Limpiar el listener en el cleanup del useEffect
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [showMenu]); // Dependencia: showMenu para que se actualice el efecto cuando cambie

  // Función para alternar la visibilidad del menú
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="nav">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <ul className={`nav-links ${showMenu ? 'active' : ''}`}>
        <li>
          <Link to="/" className="nav-link" onClick={closeMenu}>Home</Link>
        </li>
        <li>
          <Link to="/who-we-are" className="nav-link" onClick={closeMenu}>Quiénes Somos</Link>
        </li>
        <li>
          <Link to="/services" className="nav-link" onClick={closeMenu}>Servicios</Link>
        </li>
        <li>
          <Link to="/portfolio" className="nav-link" onClick={closeMenu}>Portafolio</Link>
        </li>
        <li>
          <Link to="/news" className="nav-link" onClick={closeMenu}>Noticias</Link>
        </li>
        <li>
          <Link to="/contact" className="nav-link" onClick={closeMenu}>Contacto</Link>
        </li>
        <li>
          <Link to="/work-with-us" className="nav-link" onClick={closeMenu}>Trabaja con Nosotros</Link>
        </li>
        <li>
          <Link to="/faq" className="nav-link" onClick={closeMenu}>Preguntas Frecuentes</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
