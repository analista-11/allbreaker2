// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import WhoWeAre from './pages/WhoWeAre';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import News from './pages/News';
import WorkWithUs from './pages/WorkWithUs';
import FAQ from './pages/FAQ';
import Path1Component from './pages/Path1Component'; // Asegúrate de importar el componente

import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/who-we-are" element={<WhoWeAre />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/path1" element={<Path1Component />} /> {/* Añadir la ruta aquí */}
          <Route path="/news" element={<News />} />
          <Route path="/work-with-us" element={<WorkWithUs />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
