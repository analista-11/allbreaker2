// src/pages/WhoWeAre/WhoWeAre.js
import React from 'react';
import './WhoWeAre.css';
import autorizacionLogo from '../assets/autorizacionLogo.png';
import backgroundVideo from '../assets/videoSomos-1.mp4';
import backgroundVideo1 from '../assets/videoSomos-2.mp4';
import backgroundVideo2 from '../assets/videoSomos-3.mp4';

const WhoWeAre = () => {
  return (
    <div className="page-container"> {/* Contenedor general */}
      <div className="who-we-are__container">
        <video className="who-we-are__background-video" autoPlay loop muted>
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="who-we-are__content">
          <div className="who-we-are__content-left">
            <h1 className="who-we-are__title">Socios Certificados de Unreal Engine</h1>
            <p className="who-we-are__text">
              Somos socios certificados de Unreal Engine, ofreciendo soluciones innovadoras de desarrollo y consultoría para asegurar el éxito y crecimiento de tu proyecto con tecnología de vanguardia.
            </p>
            <button className="who-we-are__learn-more-button">Conoce Más</button>
          </div>
          <div className="who-we-are__content-right">
            <img src={autorizacionLogo} alt="Descripción de la imagen" className="who-we-are__image" />
          </div>
        </div>
      </div>
      {/* ------------------------------------------------------------------------------------------ */}
      <div className="who-we-are__subcontainer">
        <div className="who-we-are__subcontainer-right">
          <video className="who-we-are__subcontainer-video" autoPlay loop muted>
            <source src={backgroundVideo1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="who-we-are__subcontainer-left">
          <h2 className="who-we-are__subcontainer-title">Nuestro Compromiso</h2>
          <p className="who-we-are__subcontainer-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis.
          </p>
        </div>
      </div>
      {/* --------------------------------------------------------------------------------------- */}
      <div className="custom-subcontainer">
        <div className="custom-subcontainer-left">
          <h2 className="custom-subcontainer-title">Nuestro Compromiso</h2>
          <ul className="custom-subcontainer-list">
            <li>Lorem ipsum dolor sit amet</li>
            <li>Consectetur adipiscing elit</li>
            <li>Quisque nisl eros, pulvinar facilisis</li>
            <li>Auctor consequat urna</li>
            <li>Morbi a bibendum metus</li>
          </ul>
        </div>
        <div className="custom-subcontainer-right">
          <video className="custom-subcontainer-video" autoPlay loop muted>
            <source src={backgroundVideo2} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      {/* --------------------------------------------------------------------------------------- */}
      <div className="new-container">
        <div className="new-container-content">
          <h2 className="new-container-title">Título del Contenedor</h2>
          <p className="new-container-text">
            Texto de ejemplo centrado en el contenedor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.
          </p>
        </div>
      </div>
      {/* --------------------------------------------------------------------------------------- */}
      <div className="carousel-container">
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="..." className="d-block w-100" alt="Slide 1" />
          </div>
          <div className="carousel-item">
            <img src="..." className="d-block w-100" alt="Slide 2" />
          </div>
          <div className="carousel-item">
            <img src="..." className="d-block w-100" alt="Slide 3" />
          </div>
          <div className="carousel-item">
            <img src="..." className="d-block w-100" alt="Slide 4" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    </div>
  );
};

export default WhoWeAre;
