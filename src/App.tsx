import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import DanceStyle from './pages/DanceStyle';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import { TrialProvider } from './context/TrialContext';
import TrialPopup from './components/TrialPopup';
import ScrollToTop from './components/ScrollToTop';
import SEO from './components/SEO';

export default function App() {
  return (
    <HelmetProvider>
      <TrialProvider>
        <Router>
          <ScrollToTop />
          <SEO />
          <div className="min-h-screen font-sans selection:bg-brand-gold selection:text-black pb-0">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/classes/:styleId" element={<DanceStyle />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
            <TrialPopup />
          </div>
        </Router>
      </TrialProvider>
    </HelmetProvider>
  );
}
