import React, { Suspense } from 'react';
import Copyright from '../components/Copyright';
import video from '../assets/videoHome.mp4';
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
      <div className="content-left"></div>
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
    </div>
  );
};

export default Home;
