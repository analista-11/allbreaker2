import React, { Suspense, useEffect } from 'react';
import './WhoWeAre.css';
import autorizacionLogo from '../assets/autorizacionLogo.png';
import backgroundVideo from '../assets/videoSomos-1.mp4';
import backgroundVideo1 from '../assets/videoSomos-2.mp4';
import backgroundVideo2 from '../assets/videoSomos-3.mp4';
import img1 from '../assets/logos/logo-1.png';
import img2 from '../assets/logos/logo-2.png';
import img3 from '../assets/logos/logo-3.png';
import img4 from '../assets/logos/logo-4.png';
import img5 from '../assets/logos/logo-5.png';
import img6 from '../assets/logos/logo-6.png';
import img7 from '../assets/logos/logo-7.png';
import img8 from '../assets/logos/logo-8.png';
import img9 from '../assets/logos/logo-9.png';
import img10 from '../assets/logos/logo-10.png';
import img11 from '../assets/logos/logo-11.png';
import img12 from '../assets/logos/logo-12.png';
import img13 from '../assets/logos/logo-13.png';
import img14 from '../assets/logos/logo-14.png';
import imgPremio from '../assets/logoPremio.png';
import premio from '../assets/premio.png'
import Footer from '../components/Footer';
// import { Canvas } from '@react-three/fiber';
// import ModelPremio from '../components/animation/ModelPremio'
// import { OrbitControls } from '@react-three/drei';

const WhoWeAre = () => {
  useEffect(() => {
    const duplicateSlides = (slideTrackClass, slideClass) => {
      const slideTrack = document.querySelector(slideTrackClass);
      const slides = Array.from(document.querySelectorAll(slideClass));

      slides.forEach(slide => {
        const clone = slide.cloneNode(true);
        slideTrack.appendChild(clone);
      });
    };

    duplicateSlides('.slide-track-one', '.slide-one');
    duplicateSlides('.slide-track-two', '.slide-two');
  }, []);

  return (
    <div className="page-container">
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
      <div className="custom-subcontainer">
        <div className="custom-subcontainer-left">
          <h2 className="custom-subcontainer-title">Nuestro Compromiso</h2>
          <ul className="custom-subcontainer-list">
            <li className="centered-justified">Lorem ipsum dolor sit amet</li>
            <li className="centered-justified">Consectetur adipiscing elit</li>
            <li className="centered-justified">Quisque nisl eros, pulvinar facilisis</li>
            <li className="centered-justified">Auctor consequat urna</li>
            <li className="centered-justified">Morbi a bibendum metus</li>
          </ul>
        </div>
        <div className="custom-subcontainer-right">
          <video className="custom-subcontainer-video" autoPlay loop muted>
            <source src={backgroundVideo2} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className="new-container">
        <div className="new-container-content">
          <h2 className="new-container-title">Título del Contenedor</h2>
          <p className="new-container-text">
            Texto de ejemplo centrado en el contenedor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.
          </p>
        </div>
      </div>
      {/* ----------- sliders ----------- */}
      <div className='slider' >
        <div className="slide-track-one">
          <div className="slide-one">
            <img src={img1} className="img-logo" />
          </div>
          <div className="slide-one">
            <img src={img2} className="img-logo" />
          </div>
          <div className="slide-one">
            <img src={img3} className="img-logo" />
          </div>
          <div className="slide-one">
            <img src={img4} className="img-logo" />
          </div>
          <div className="slide-one">
            <img src={img9} className="img-logo" />
          </div>
          <div className="slide-one">
            <img src={img10} className="img-logo" />
          </div>
          <div className="slide-one">
            <img src={img11} className="img-logo" />
          </div>
        </div>
      </div>
      <div className='slider-two'>
        <div className="slide-track-two">
          <div className="slide-two">
            <img src={img5} className="img-logo" />
          </div>
          <div className="slide-two">
            <img src={img6} className="img-logo" />
          </div>
          <div className="slide-two">
            <img src={img7} className="img-logo" />
          </div>
          <div className="slide-two">
            <img src={img8} className="img-logo" />
          </div>
          <div className="slide-two">
            <img src={img12} className="img-logo" />
          </div>
          <div className="slide-two">
            <img src={img13} className="img-logo" />
          </div>
          <div className="slide-two">
            <img src={img14} className="img-logo" />
          </div>
        </div>
      </div>
      {/* ----------- premios ----------- */}
      
      <div class="awards-container">
  <div class="awards-column-left">
    <h2 class="awards-title">Premio Destacado</h2>
    <p class="awards-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
    <img src={imgPremio} alt="Premio Izquierda" class="awards-image-left"/>
  </div>
  <div class="awards-column-right" >
  <div class="awards-column-right">
    <img src={premio} alt="Premio Derecha" class="awards-image-right"/>
  </div>
  </div>
</div>
{/* ----------- footer ----------- */}




    </div>
  );
};

export default WhoWeAre;
