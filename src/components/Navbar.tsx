import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTrial } from '../context/TrialContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileClassesOpen, setIsMobileClassesOpen] = useState(false);
  const { openTrial } = useTrial();

  return (
    <nav className="flex items-center justify-between py-3 px-4 md:py-4 md:px-12 fixed top-0 w-full z-50 bg-brand-bg/90 backdrop-blur-md border-b border-white/5 transition-all">
      <div className="flex flex-col items-center">
        <Link to="/">
          <img src="https://res.cloudinary.com/dm3scoj2q/image/upload/v1783680487/Rasikaarpan_Ensemble_of_Dance_qsdo6w.png" alt="Rasikaarpan" className="h-[50px] md:h-[68px] w-auto object-contain" />
        </Link>
      </div>
      <div className="hidden lg:flex items-center space-x-8 text-sm font-semibold tracking-wider text-gray-300">
        <Link to="/" className="hover:text-brand-gold transition-colors">HOME</Link>
        <Link to="/about" className="hover:text-brand-gold transition-colors">ABOUT</Link>
        <div className="relative group cursor-pointer flex items-center py-2">
          <Link to="/classes" className="hover:text-brand-gold transition-colors">CLASSES</Link>
          <ChevronDown size={14} className="ml-1" />
          <div className="absolute top-full left-0 w-48 bg-brand-bg border border-white/10 rounded-sm shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-2">
            <Link to="/classes/bharatanatyam" className="block px-4 py-2 hover:text-brand-gold hover:bg-white/5 transition-colors">Bharatanatyam</Link>
            <Link to="/classes/kathak" className="block px-4 py-2 hover:text-brand-gold hover:bg-white/5 transition-colors">Kathak</Link>
            <Link to="/classes/folk" className="block px-4 py-2 hover:text-brand-gold hover:bg-white/5 transition-colors">Folk</Link>
            <Link to="/classes/semi-classical" className="block px-4 py-2 hover:text-brand-gold hover:bg-white/5 transition-colors">Semi-Classical</Link>
            <Link to="/classes/contemporary" className="block px-4 py-2 hover:text-brand-gold hover:bg-white/5 transition-colors">Contemporary</Link>
            <Link to="/classes/jazz" className="block px-4 py-2 hover:text-brand-gold hover:bg-white/5 transition-colors">Jazz</Link>
            <Link to="/classes/hip-hop" className="block px-4 py-2 hover:text-brand-gold hover:bg-white/5 transition-colors">Hip-Hop</Link>
          </div>
        </div>
        <Link to="/gallery" className="hover:text-brand-gold transition-colors">GALLERY</Link>
        <Link to="/contact" className="hover:text-brand-gold transition-colors">CONTACT</Link>
      </div>
      <div className="flex items-center gap-4">
        <button 
          onClick={openTrial}
          className="bg-brand-gold text-black font-semibold px-4 py-2 md:px-6 md:py-2 rounded-sm text-xs md:text-sm hover:bg-brand-gold-dark transition-colors"
        >
          BOOK A TRIAL
        </button>
        <button className="lg:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-brand-bg/95 backdrop-blur-lg border-b border-white/10 lg:hidden flex flex-col items-center py-6 space-y-4 shadow-2xl">
          <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-white hover:text-brand-gold font-semibold tracking-wider text-sm transition-colors">HOME</Link>
          <Link to="/about" onClick={() => setIsMenuOpen(false)} className="text-white hover:text-brand-gold font-semibold tracking-wider text-sm transition-colors">ABOUT</Link>
          <div className="flex flex-col items-center w-full cursor-pointer" onClick={() => setIsMobileClassesOpen(!isMobileClassesOpen)}>
            <div className="text-white font-semibold tracking-wider text-sm transition-colors flex items-center">
              <Link to="/classes" onClick={() => setIsMenuOpen(false)} className="hover:text-brand-gold">CLASSES</Link> <ChevronDown size={14} className={`ml-2 transition-transform ${isMobileClassesOpen ? 'rotate-180' : ''}`} />
            </div>
            {isMobileClassesOpen && (
              <div className="flex flex-col items-center space-y-3 mt-4 text-gray-300 text-sm">
                <Link to="/classes/bharatanatyam" onClick={() => setIsMenuOpen(false)} className="hover:text-brand-gold transition-colors">Bharatanatyam</Link>
                <Link to="/classes/kathak" onClick={() => setIsMenuOpen(false)} className="hover:text-brand-gold transition-colors">Kathak</Link>
                <Link to="/classes/folk" onClick={() => setIsMenuOpen(false)} className="hover:text-brand-gold transition-colors">Folk</Link>
                <Link to="/classes/semi-classical" onClick={() => setIsMenuOpen(false)} className="hover:text-brand-gold transition-colors">Semi-Classical</Link>
                <Link to="/classes/contemporary" onClick={() => setIsMenuOpen(false)} className="hover:text-brand-gold transition-colors">Contemporary</Link>
                <Link to="/classes/jazz" onClick={() => setIsMenuOpen(false)} className="hover:text-brand-gold transition-colors">Jazz</Link>
                <Link to="/classes/hip-hop" onClick={() => setIsMenuOpen(false)} className="hover:text-brand-gold transition-colors">Hip-Hop</Link>
              </div>
            )}
          </div>
          <Link to="/gallery" onClick={() => setIsMenuOpen(false)} className="text-white hover:text-brand-gold font-semibold tracking-wider text-sm transition-colors">GALLERY</Link>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="text-white hover:text-brand-gold font-semibold tracking-wider text-sm transition-colors">CONTACT</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
