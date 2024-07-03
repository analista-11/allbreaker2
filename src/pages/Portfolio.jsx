import React from 'react';
import './Portfolio.css';
import portafolio1 from '../assets/portafolio1.jpg';

const images = [
  {
    id: 1,
    src: portafolio1,
    alt: 'Image 1',
    text: 'AD ASTRA FUERZA AEROESPACIAL COLOMBIANA',
    link: '/path1',
  },
  {
    id: 2,
    src: portafolio1,
    alt: 'Image 2',
    text: 'Textooo 2',
    link: '/path2',
  },
  {
    id: 3,
    src: portafolio1,
    alt: 'Image 3',
    text: 'Text 3',
    link: '/path3',
  },
  {
    id: 4,
    src: portafolio1,
    alt: 'Image 4',
    text: 'Text 4',
    link: '/path4',
  },
  {
    id: 5,
    src: portafolio1,
    alt: 'Image 5',
    text: 'Text 5',
    link: '/path5',
  },
  {
    id: 6,
    src: portafolio1,
    alt: 'Image 6',
    text: 'Text 6',
    link: '/path6',
  },
];

const Portfolio = () => {
  const handleImageClick = (link) => {
    window.location.href = link; // Redirigir a la ruta especificada
  };

  return (
    <div className="portfolio-container">
      <h1>Portfolio / Portafolio</h1>
      <div className="gallery-container">
        {images.map((image) => (
          <div
            key={image.id}
            className="gallery-item"
            onClick={() => handleImageClick(image.link)}
          >
            <img src={image.src} alt={image.alt} className="gallery-image" />
            <div className="overlay">
              <div className="overlay-text">{image.text}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
