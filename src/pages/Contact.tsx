import React from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import SEO from '../components/SEO';

const Contact = () => {
  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-24 px-6 md:px-12 max-w-7xl mx-auto min-h-screen">
      <SEO title="Contact Us" description="Get in touch with Rasikaarpan Dance Academy to book a trial or inquire about our dance classes." />
      
      {/* Header Section */}
      <div className="text-center mb-16 md:mb-24">
        <h1 className="text-3xl md:text-5xl font-cinzel text-brand-gold tracking-widest mb-4">CONTACT US</h1>
        <p className="text-lg md:text-xl font-serif text-gray-300 italic">Let's start your dance journey</p>
        <div className="flex items-center justify-center gap-4 mt-8">
          <div className="w-16 md:w-24 h-[1px] bg-brand-gold"></div>
          <div className="w-2 h-2 rotate-45 border border-brand-gold"></div>
          <div className="w-16 md:w-24 h-[1px] bg-brand-gold"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">
        
        {/* Contact Information */}
        <div>
          <h2 className="text-2xl font-serif text-brand-gold tracking-[0.15em] uppercase mb-8">Get in Touch</h2>
          <p className="text-gray-300 font-light mb-10 text-sm md:text-base leading-relaxed">
            Whether you have a question about our classes, want to book a trial, or simply want to say hello, we're here to help. Reach out to us using the details below or fill out the contact form.
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center shrink-0">
                <MapPin className="text-brand-gold" size={20} />
              </div>
              <div>
                <h4 className="text-white font-medium mb-1 tracking-widest uppercase text-sm">Main Studio</h4>
                <p className="text-gray-400 font-light text-sm md:text-base">Thanjavur, Tamil Nadu, India</p>
                <p className="text-gray-500 font-light text-xs mt-1">Other Branches: Pattukkottai, Tiruvarur</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center shrink-0">
                <Phone className="text-brand-gold" size={20} />
              </div>
              <div>
                <h4 className="text-white font-medium mb-1 tracking-widest uppercase text-sm">Phone</h4>
                <p className="text-gray-400 font-light text-sm md:text-base">+91 98765 43210</p>
                <p className="text-gray-500 font-light text-xs mt-1">Mon-Sat, 9:00 AM - 8:00 PM</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center shrink-0">
                <Mail className="text-brand-gold" size={20} />
              </div>
              <div>
                <h4 className="text-white font-medium mb-1 tracking-widest uppercase text-sm">Email</h4>
                <p className="text-gray-400 font-light text-sm md:text-base">info@rasikaarpan.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center shrink-0">
                <Clock className="text-brand-gold" size={20} />
              </div>
              <div>
                <h4 className="text-white font-medium mb-1 tracking-widest uppercase text-sm">Working Hours</h4>
                <p className="text-gray-400 font-light text-sm md:text-base">Monday - Saturday: 4:00 PM - 8:00 PM</p>
                <p className="text-gray-400 font-light text-sm md:text-base">Sunday: 10:00 AM - 1:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-brand-surface/30 p-8 md:p-10 rounded-lg border border-brand-surface-light">
          <h2 className="text-2xl font-serif text-brand-gold tracking-[0.15em] uppercase mb-8">Send a Message</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-400 text-xs tracking-widest uppercase mb-2">First Name</label>
                <input 
                  type="text" 
                  className="w-full bg-brand-bg border border-brand-surface-light text-white px-4 py-3 rounded-sm text-sm focus:outline-none focus:border-brand-gold transition-colors"
                  placeholder="John"
                />
              </div>
              <div>
                <label className="block text-gray-400 text-xs tracking-widest uppercase mb-2">Last Name</label>
                <input 
                  type="text" 
                  className="w-full bg-brand-bg border border-brand-surface-light text-white px-4 py-3 rounded-sm text-sm focus:outline-none focus:border-brand-gold transition-colors"
                  placeholder="Doe"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-400 text-xs tracking-widest uppercase mb-2">Email Address</label>
                <input 
                  type="email" 
                  className="w-full bg-brand-bg border border-brand-surface-light text-white px-4 py-3 rounded-sm text-sm focus:outline-none focus:border-brand-gold transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-gray-400 text-xs tracking-widest uppercase mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  className="w-full bg-brand-bg border border-brand-surface-light text-white px-4 py-3 rounded-sm text-sm focus:outline-none focus:border-brand-gold transition-colors"
                  placeholder="+91 98765 43210"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-400 text-xs tracking-widest uppercase mb-2">Interested In</label>
              <select defaultValue="" className="w-full bg-brand-bg border border-brand-surface-light text-white px-4 py-3 rounded-sm text-sm focus:outline-none focus:border-brand-gold transition-colors appearance-none">
                <option value="" disabled>Select a dance style</option>
                <option value="bharatanatyam">Bharatanatyam</option>
                <option value="kathak">Kathak</option>
                <option value="folk">Folk Dance</option>
                <option value="contemporary">Contemporary</option>
                <option value="jazz">Jazz</option>
                <option value="hip-hop">Hip-Hop</option>
                <option value="other">Other / General Inquiry</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-400 text-xs tracking-widest uppercase mb-2">Your Message</label>
              <textarea 
                rows={4}
                className="w-full bg-brand-bg border border-brand-surface-light text-white px-4 py-3 rounded-sm text-sm focus:outline-none focus:border-brand-gold transition-colors resize-none"
                placeholder="How can we help you?"
              ></textarea>
            </div>

            <button type="button" className="w-full bg-brand-gold text-black font-semibold tracking-wider py-4 rounded-sm hover:bg-brand-gold-dark transition-colors flex items-center justify-center gap-2 text-sm">
              SEND MESSAGE <Send size={16} />
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;
