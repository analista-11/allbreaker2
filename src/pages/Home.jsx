import React, { Suspense } from 'react';
import Copyright from '../components/Copyright';
import video from '../assets/videoHome.mp4';
import gifIcon from '../assets/gif-icon.gif'; 
import { Canvas } from '@react-three/fiber';
import HomeAnimation from '../components/animation/HomeAnimation';
import { OrbitControls } from '@react-three/drei';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; 
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const Home = () => {
  const [text] = useTypewriter({
    words: ['sit amet', 'pulvinar', 'Lorem ipsum'],
    loop: true, // Asegúrate de que el loop esté habilitado si quieres que repita
    delaySpeed: 2000, // Ajusta la velocidad de retraso entre palabras
});

  return (
    <div className="home-container">
      <video className="background-video" autoPlay loop muted>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content-left">
        <h1>
          {' '}
          <span style={{ fontWeight: 'bold', color: '#fff' }}>
            {text}
          </span>
          <Cursor />
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan
          nunc eget tortor pulvinar, sit amet venenatis nisi scelerisque.
          Integer nec ex ut arcu fermentum laoreet Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Sed accumsan nunc eget tortor pulvinar,
          sit amet venenatis nisi scelerisque. Integer nec ex ut arcu fermentum
          laoreet.
        </p>
        <div className="social-buttons">
          <button className="icon-box">
            <img src={gifIcon} alt="Icon" className="gif-icon" />
            Lorem ipsum 
          </button>
          <div className="social-icons">
            <span>síguenos/</span>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
      <div className="content-right">
        <div className="image-container">
          <Canvas camera={{ zoom: 20, position: [15, 20, 15] }}>
            <ambientLight intensity={2} />
            <pointLight position={[35, 35, 0]} intensity={0.4} />
            <pointLight position={[-35, 35, 0]} intensity={0.4} />
            <Suspense fallback={null}>
              <HomeAnimation />
            </Suspense>
            <OrbitControls enableZoom={false} />
          </Canvas>
        </div>
      </div>
      <div className="footer-container">
        <footer>
          <Copyright />
        </footer>
      </div>
    </div>
  );
};

export default Home;
