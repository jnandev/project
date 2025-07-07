import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Work from './components/Work';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Service Landing Pages
import RetailMarketingPage from './pages/RetailMarketingPage';
import EcommercePage from './pages/EcommercePage';
import RealEstateMarketingPage from './pages/RealEstateMarketingPage';
import BrandDevelopmentPage from './pages/BrandDevelopmentPage';
import DigitalAdvertisingPage from './pages/DigitalAdvertisingPage';
import SocialMediaPage from './pages/SocialMediaPage';

function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Work />
      <About />
      <Contact />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services/retail-marketing" element={<RetailMarketingPage />} />
          <Route path="/services/ecommerce" element={<EcommercePage />} />
          <Route path="/services/real-estate" element={<RealEstateMarketingPage />} />
          <Route path="/services/brand-development" element={<BrandDevelopmentPage />} />
          <Route path="/services/digital-advertising" element={<DigitalAdvertisingPage />} />
          <Route path="/services/social-media" element={<SocialMediaPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;