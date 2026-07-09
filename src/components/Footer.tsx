import React from 'react';
import { Facebook, Instagram, Youtube, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="border-t border-brand-surface-light mt-12 md:mt-16 pt-12 md:pt-16 pb-8 px-6 md:px-12">
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-12">
      {/* Brand */}
      <div className="col-span-1 sm:col-span-2 lg:col-span-1">
        <h2 className="text-3xl font-cinzel text-white tracking-widest mb-1"><span className="font-sans font-light">RASIKAARPAN</span> dance</h2>
        <p className="text-brand-gold text-sm font-serif mb-6">Academy of Bharatanatyam</p>
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
          <li><a href="#" className="hover:text-brand-gold transition-colors">Classes</a></li>
          <li><a href="#" className="hover:text-brand-gold transition-colors">Gallery</a></li>
          <li><Link to="/events" className="hover:text-brand-gold transition-colors">Events</Link></li>
          <li><Link to="/blog" className="hover:text-brand-gold transition-colors">Blog</Link></li>
          <li><Link to="/contact" className="hover:text-brand-gold transition-colors">Contact Us</Link></li>
        </ul>
      </div>

      {/* Classes & Policies */}
      <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 col-span-1 sm:col-span-2 lg:col-span-1">
        <div>
          <h4 className="text-brand-gold font-serif tracking-widest mb-6 uppercase text-sm">CLASSES</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li><a href="#" className="hover:text-brand-gold transition-colors">Bharatanatyam</a></li>
            <li><a href="#" className="hover:text-brand-gold transition-colors">Folk Dances</a></li>
            <li><a href="#" className="hover:text-brand-gold transition-colors">Contemporary</a></li>
            <li><a href="#" className="hover:text-brand-gold transition-colors">Hip-Hop</a></li>
            <li><a href="#" className="hover:text-brand-gold transition-colors">Kids Dance</a></li>
            <li><a href="#" className="hover:text-brand-gold transition-colors">Private Classes</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-brand-gold font-serif tracking-widest mb-6 uppercase text-sm">POLICIES</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li><a href="#" className="hover:text-brand-gold transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-brand-gold transition-colors">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-brand-gold transition-colors">Refund Policy</a></li>
          </ul>
        </div>
      </div>

      {/* Stay Connected */}
      <div>
        <h4 className="text-brand-gold font-serif tracking-widest mb-6 uppercase text-sm">STAY CONNECTED</h4>
        <p className="text-gray-400 text-sm mb-4">Subscribe to our newsletter</p>
        <form className="space-y-3">
          <input 
            type="email" 
            placeholder="Your Email" 
            className="w-full bg-brand-surface border border-brand-surface-light text-white px-4 py-3 rounded-sm text-sm focus:outline-none focus:border-brand-gold"
          />
          <button type="button" className="w-full bg-brand-gold text-black font-semibold tracking-wider py-3 rounded-sm text-sm hover:bg-brand-gold-dark transition-colors">
            SUBSCRIBE
          </button>
        </form>
      </div>
    </div>
    
    <div className="text-center text-xs text-gray-600 mt-12 pt-8 border-t border-brand-surface-light">
      &copy; 2024 Rasikaarpan Dance Academy. All Rights Reserved.
    </div>
  </footer>
);

export default Footer;
