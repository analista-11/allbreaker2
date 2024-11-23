// src/pages/Portfolio.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Portfolio.css';
import portafolio1 from '../assets/portafolio1.jpg';

const images = [
  { src: portafolio1, alt: 'Image 1', text: 'AD ASTRA FUERZA AEROESPACIAL COLOMBIANA', link: '/path1' },
<<<<<<< HEAD
  { src: portafolio1, alt: 'Image 2', text: 'AD ASTRA FUERZA AEROESPACIAL COLOMBIANA', link: '/path2' },
  { src: portafolio1, alt: 'Image 3', text: 'AD ASTRA FUERZA AEROESPACIAL COLOMBIANA', link: '/path3' },
  { src: portafolio1, alt: 'Image 4', text: 'AD ASTRA FUERZA AEROESPACIAL COLOMBIANA', link: '/path4' },
  { src: portafolio1, alt: 'Image 5', text: 'AD ASTRA FUERZA AEROESPACIAL COLOMBIANA', link: '/path5' },
  { src: portafolio1, alt: 'Image 6', text: 'AD ASTRA FUERZA AEROESPACIAL COLOMBIANA', link: '/path6' },
=======
  { src: portafolio1, alt: 'Image 2', text: 'AD ASTRA FUERZA AEROESPACIAL COLOMBIANA', link: '/path1' },
  { src: portafolio1, alt: 'Image 3', text: 'AD ASTRA FUERZA AEROESPACIAL COLOMBIANA', link: '/path1' },
  { src: portafolio1, alt: 'Image 4', text: 'AD ASTRA FUERZA AEROESPACIAL COLOMBIANA', link: '/path1' },
  { src: portafolio1, alt: 'Image 5', text: 'AD ASTRA FUERZA AEROESPACIAL COLOMBIANA', link: '/path1' },
  { src: portafolio1, alt: 'Image 6', text: 'AD ASTRA FUERZA AEROESPACIAL COLOMBIANA', link: '/path1' },
>>>>>>> 7ccce293c945d4a97585a78d1b88c79d47c744c7
];

const Portfolio = () => {
  const navigate = useNavigate();

  return (
    <div className="portfolio-page">
      <div className="portfolio-container">
        <h1 className="portfolio-title">Portfolio / Portafolio</h1>
        <div className="cards-container">
          {images.map((image, index) => (
            <div key={index} className="image-wrapper" onClick={() => navigate(image.link)}>
              <img src={image.src} alt={image.alt} />
              <div className="overlay">
                <div className="overlay-text">{image.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default Portfolio;
  