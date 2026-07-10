import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Classes from './pages/Classes';
import DanceStyle from './pages/DanceStyle';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Astrology from './pages/Astrology';
import { TrialProvider } from './context/TrialContext';
import TrialPopup from './components/TrialPopup';
import ScrollToTop from './components/ScrollToTop';
import SEO from './components/SEO';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const isAstrology = location.pathname.startsWith('/astrology');

  if (isAstrology) {
    return <>{children}</>;
  }

  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <TrialPopup />
    </>
  );
};

export default function App() {
  return (
    <HelmetProvider>
      <TrialProvider>
        <Router>
          <ScrollToTop />
          <SEO />
          <div className="min-h-screen font-sans selection:bg-brand-gold selection:text-black pb-0">
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/classes" element={<Classes />} />
                <Route path="/classes/:styleId" element={<DanceStyle />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/astrology" element={<Astrology />} />
              </Routes>
            </Layout>
          </div>
        </Router>
      </TrialProvider>
    </HelmetProvider>
  );
}
