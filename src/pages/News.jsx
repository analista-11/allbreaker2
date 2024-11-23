// src/pages/News.jsx
import React from 'react';
import './News.css';
import noticia1 from '../assets/portafolio1.jpg';

const News = () => {
  return (
    <div className="news-page">
      <div className="news-container">
        <h1 className="news-title">News / Noticias</h1>
        <div className="large-news-card">
          <img src={noticia1} alt="News Image" className="news-image" />
          <h2 className="news-card-title">News Title</h2>
          <p className="news-card-text">
            This is a sample text for the news. More details can be added here.This is a sample text for the news. More details can be added here.This is a sample text for the news. More details can be added here.This is a sample text for the news. More details can be added here.This is a sample text for the news. More details can be added here.
          </p>
<<<<<<< HEAD
          <button className="news-card-button">Read More</button>
=======
>>>>>>> 7ccce293c945d4a97585a78d1b88c79d47c744c7
        </div>
        <div className="additional-news-container">
          <h2 className="additional-news-title">More News</h2>
          <div className="small-news-cards">
            <div className="small-news-card">
              <img src={noticia1} alt="News Image 1" className="small-news-image" />
              <h3 className="small-news-card-title">Small News Title 1</h3>
              <p className="small-news-card-text">This is a sample text for the small news. More details can be added here.</p>
<<<<<<< HEAD
              <button className="small-news-card-button">Read More</button>
=======
>>>>>>> 7ccce293c945d4a97585a78d1b88c79d47c744c7
            </div>
            <div className="small-news-card">
              <img src={noticia1} alt="News Image 2" className="small-news-image" />
              <h3 className="small-news-card-title">Small News Title 2</h3>
              <p className="small-news-card-text">This is a sample text for the small news. More details can be added here.</p>
<<<<<<< HEAD
              <button className="small-news-card-button">Read More</button>
=======
>>>>>>> 7ccce293c945d4a97585a78d1b88c79d47c744c7
            </div>
            <div className="small-news-card">
              <img src={noticia1} alt="News Image 3" className="small-news-image" />
              <h3 className="small-news-card-title">Small News Title 3</h3>
              <p className="small-news-card-text">This is a sample text for the small news. More details can be added here.</p>
<<<<<<< HEAD
              <button className="small-news-card-button">Read More</button>
=======
>>>>>>> 7ccce293c945d4a97585a78d1b88c79d47c744c7
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
