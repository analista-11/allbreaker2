// src/components/Card.jsx
import React from 'react';
import '../components/Card.css';

const Card = ({ src, alt, text, link }) => {
    const handleCardClick = () => {
      window.location.href = link;
    };
  
    return (
      <div className="card" onClick={handleCardClick}>
        <img src={src} alt={alt} className="card-image" />
        <div className="card-overlay">
          <div className="card-title">{text}</div>
        </div>
      </div>
    );
  };
  
  export default Card;