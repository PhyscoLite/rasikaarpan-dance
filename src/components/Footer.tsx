import React from 'react';
import { Facebook, Instagram, Youtube, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="border-t border-brand-surface-light mt-12 md:mt-16 pt-12 md:pt-16 pb-8 px-6 md:px-12">
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-12">
      {/* Brand */}
      <div className="col-span-1 sm:col-span-2 lg:col-span-1">
        <img src="https://res.cloudinary.com/dm3scoj2q/image/upload/v1783680487/Rasikaarpan_Ensemble_of_Dance_qsdo6w.png" alt="Rasikaarpan" className="h-[72px] md:h-[96px] object-contain mb-4" />
        <p className="text-gray-400 text-sm leading-relaxed mb-6">
          Preserving tradition. Nurturing talent. Inspiring generations.
        </p>
        <div className="flex gap-4 text-brand-gold">
          <a href="#" className="hover:text-white transition-colors"><Facebook size={20} /></a>
          <a href="#" className="hover:text-white transition-colors"><Instagram size={20} /></a>
          <a href="#" className="hover:text-brand-gold transition-colors"><Youtube size={20} /></a>
          <a href="#" className="hover:text-white transition-colors"><MessageCircle size={20} /></a>
        </div>
      </div>

      {/* Quick Links */}
      <div>
        <h4 className="text-brand-gold font-serif tracking-widest mb-6 uppercase text-sm">QUICK LINKS</h4>
        <ul className="space-y-3 text-sm text-gray-400">
          <li><Link to="/about" className="hover:text-brand-gold transition-colors">About Us</Link></li>
          <li><Link to="/classes" className="hover:text-brand-gold transition-colors">Classes</Link></li>
          <li><Link to="/gallery" className="hover:text-brand-gold transition-colors">Gallery</Link></li>
          <li><Link to="/astrology" className="hover:text-brand-gold transition-colors">Astrology</Link></li>
          <li><Link to="/contact" className="hover:text-brand-gold transition-colors">Contact Us</Link></li>
        </ul>
      </div>

      {/* Policies */}
      <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 col-span-1 sm:col-span-2 lg:col-span-1">
        <div>
          <h4 className="text-brand-gold font-serif tracking-widest mb-6 uppercase text-sm">POLICIES</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li><a href="#" className="hover:text-brand-gold transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-brand-gold transition-colors">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-brand-gold transition-colors">Refund Policy</a></li>
          </ul>
        </div>
      </div>

      {/* Contact */}
      <div>
        <h4 className="text-brand-gold font-serif tracking-widest mb-6 uppercase text-sm">CONTACT</h4>
        <p className="text-gray-400 text-sm mb-4">Reach out to us for any inquiries.</p>
        <Link to="/contact">
          <button type="button" className="w-full bg-brand-gold text-black font-semibold tracking-wider py-3 rounded-sm text-sm hover:bg-brand-gold-dark transition-colors">
            CONTACT US
          </button>
        </Link>
      </div>
    </div>
    
    <div className="text-center text-xs text-gray-600 mt-12 pt-8 border-t border-brand-surface-light">
      &copy; 2024 Rasikaarpan Dance Academy. All Rights Reserved.
    </div>
  </footer>
);

export default Footer;
