import React from 'react';
import './WhoWeAre.css';
import autorizacionLogo from '../assets/autorizacionLogo.png';
import backgroundVideo from '../assets/videoSomos-1.mp4';
import escaner from '../assets/escaner.jpg'
import logoPremio from '../assets/Lpremio.png'
import clientImage1 from '../assets/logos/epic_games.png'; 
import clientImage2 from '../assets/logos/fornite.png';
import clientImage3 from '../assets/logos/HTC.png';
import clientImage4 from '../assets/logos/Lenovo.png';
import clientImage5 from '../assets/logos/Pico.png';
import clientImage6 from '../assets/logos/senseglove.png';
import clientImage7 from '../assets/logos/teslasuit.png';
import clientImage8 from '../assets/logos/ultraleap.png';
import clientImage9 from '../assets/logos/unreal_engine.png';
import Footer from '../components/Footer';


const WhoWeAre = () => {
  return (
    <div className="page-container">
      {/* Certification Container */}
      <div className="certification-container">
        <video className="background-video" autoPlay loop muted>
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="certification-content">
          <img src={autorizacionLogo} alt="Unreal Engine Certification" className="certification-logo" />
          <h1 className="certification-title">Socios Certificados de Unreal Engine</h1>
        </div>
      </div>

      {/* Team Description Container */}
      <div className="team-description-container">
        {/* First Container */}
        <div className="team-overview">
          <h3>TEAM OVERVIEW</h3>
          <p>Our development studio is in Bogotá, Colombia composed by 21
          people in different roles to make everything run smoothly while
          covering al task needed in the 3D workflow.
          Our team is not built up from freelancers and since it is an inhouse
          fully hired team, we give you the assurance to have the right
          amount of people working in the project always. People might
          come and go but you don ́t need to worry about someone leaving
          the team because we warranty to fill the space ASAP without any
          extra charge.</p>
        </div>

        {/* Second Container with Two Columns */}
        <div className="team-columns">
          <div className="tasks-developed">
            <h3>TASKS DEVELOPED BY TEAM</h3>
            <ul>
              <li>3D model optimization for XR</li>
              <li>3D Modeling</li>
              <li>3D Scanning</li>
              <li>Animation</li>
              <li>Body Mocap (Rokoko)</li>
              <li>Face Mocap</li>
              <li>Full project development in Unity/Unreal Engine/UEFN</li>
              <li>Hardware implementation such as Full body haptics, etc.</li>
              <li>Photogrammetry</li>
              <li>Photogrammetry & 3D scanning content processing and optimization</li>
              <li>Rigging</li>
              <li>Texturing</li>
            </ul>
          </div>
          <div className="reference-image">
            <img src={escaner} alt="Reference" />
          </div>
        </div>
      </div>

      {/* Awards Container */}
      <div className="awards-container">
        <div className="awards-content">
          <div className="awards-image">
            <img src={logoPremio} alt="Premio" />
          </div>
          <div className="awards-description">
            <h2>Premios</h2>
            <p>Descripción de los premios obtenidos por la empresa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
          </div>
        </div>
      </div>

      {/* Clients Container */}
      <div className="clients-container">
        <h2>Quiénes confían en nosotros</h2>
        <div className="slider">
          <div className="slide-track">
            {[
              clientImage1,
              clientImage2,
              clientImage3,
              clientImage4,
              clientImage5,
              clientImage6,
              clientImage7,
              clientImage8,
              clientImage9
            ].map((clientImage, index) => (
              <div className="slide" key={index}>
                <img src={clientImage} alt={`Client ${index + 1}`} />
              </div>
            ))}
            {[
              clientImage1,
              clientImage2,
              clientImage3,
              clientImage4,
              clientImage5,
              clientImage6,
              clientImage7,
              clientImage8,
              clientImage9
            ].map((clientImage, index) => (
              <div className="slide" key={`clone-${index}`}>
                <img src={clientImage} alt={`Client ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
          <footer>
            <Footer></Footer>
          </footer>
    </div>
  );
};

export default WhoWeAre;
