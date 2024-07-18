// src/pages/Path1Component.jsx
import React from 'react';
import './Path1Component.css';
import mainImage from '../assets/portafolio1.jpg'; // Ruta a la imagen principal
import image1 from '../assets/adAstra.jpg'; // Ruta a la primera imagen
import image2 from '../assets/adAstra2.jpg'; // Ruta a la segunda imagen
import image3 from '../assets/llama.png'; // Ruta a la tercera imagen

const Path1Component = () => {
  return (
    <div className="path1-page">
           <div className="container main-image-container">
        <img src={mainImage} alt="Main" className="main-image" />
        <div className="overlay"></div>
        <h1 className="overlay-title">Colombia Airspace force</h1>
      </div>
      <div className="container text-container">
        <h1>AdAstra</h1>
        <h2>Technology: Fortnite / UEFN</h2>
        <p>Embark on a unique astronomical adventure in 'Ad Astra: Colombian Aerospace Force'! On this
vibrant and challenging island, your mission is to rebuild the Facsat 2 satellite and launch it into
orbit. Experience a journey that begins with a helicopter ride and ends beyond the Earth's
atmosphere.
Map code: 6905-2214-8655
Link to: https://www.fortnite.com/@allbreaker/6905-2214-8655?lang=es-MX</p>
      </div>
      <div className="container two-images-container">
        <img src={image1} alt="Image 1" className="side-image" />
        <img src={image2} alt="Image 2" className="side-image" />
      </div>
      <div className="container list-and-image-container">
        <div className="list-container">
          <h2 className='title-container'>Our role in the project</h2>
          <ul>
            <li>Full project responsibility</li>
            <li>3D modeling</li>
            <li>3D scanning</li>
            <li>Rigging</li>
            <li>Animation</li>
            <li>Scenario/asset creation</li>
            <li>Programming</li>
            <li>Localization</li>
            <li>Launch / Live services</li>
          </ul>
        </div>
        <img src={image3} alt="List Image" className="list-image" />
      </div>
    </div>
  );
};

export default Path1Component;
