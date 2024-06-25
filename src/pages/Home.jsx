import React, { Suspense } from 'react';
import Copyright from '../components/Copyright';
import video from '../assets/videoHome.mp4';
import gifIcon from '../assets/gif-icon.gif'; 
import { Canvas } from '@react-three/fiber';
import HomeAnimation from '../components/animation/HomeAnimation';
import { OrbitControls } from '@react-three/drei';



const Home = () => {
  return (
    <div className="home-container">
      <video className="background-video" autoPlay loop muted>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content-left">
        <h1>Lorem ipsum dolor sit</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan
          nunc eget tortor pulvinar, sit amet venenatis nisi scelerisque.
          Integer nec ex ut arcu fermentum laoreet Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Sed accumsan nunc eget tortor pulvinar,
          sit amet venenatis nisi scelerisque. Integer nec ex ut arcu fermentum
          laoreet.
        </p>
        <button className="icon-box">
  <img src={gifIcon} alt="Icon" className="gif-icon" />
  Lorem ipsum
</button>
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
            <OrbitControls  enableZoom={false}/>
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
