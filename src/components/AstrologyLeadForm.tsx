import React from 'react';
import { X, Send } from 'lucide-react';

interface AstrologyLeadFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const AstrologyLeadForm = ({ isOpen, onClose }: AstrologyLeadFormProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      dob: formData.get('dob'),
      tob: formData.get('tob'),
      pob: formData.get('pob'),
      service: formData.get('service'),
    };
    
    const text = `Hi Astrologer Shrikant, I would like to book a consultation.\n\nName: ${data.name}\nPhone: ${data.phone}\nEmail: ${data.email}\nDOB: ${data.dob}\nTime of Birth: ${data.tob}\nPlace of Birth: ${data.pob}\nService: ${data.service}`;
    
    window.open(`https://wa.me/919115731105?text=${encodeURIComponent(text)}`, '_blank');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      {/* Popup Content */}
      <div className="relative bg-white w-full max-w-xl rounded-lg shadow-2xl border border-gray-200 overflow-hidden z-10 max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="bg-yellow-500 p-6 text-white flex items-center justify-between shrink-0">
          <div>
            <h3 className="text-xl md:text-2xl font-serif tracking-wide font-semibold text-white">BOOK CONSULTATION</h3>
            <p className="text-xs md:text-sm font-medium text-white/90 mt-1">Take the first step towards clarity and guidance.</p>
          </div>
          <button 
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-black/10 transition-colors text-white"
          >
            <X size={20} />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 md:p-8 overflow-y-auto bg-white">
          <form className="space-y-5" onSubmit={handleSubmit}>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-gray-600 text-xs tracking-widest uppercase mb-2">Your Name</label>
                <input 
                  type="text" 
                  name="name" 
                  required
                  className="w-full bg-gray-50 border border-gray-200 text-gray-900 px-4 py-3 rounded-sm text-sm focus:outline-none focus:border-yellow-500 transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-gray-600 text-xs tracking-widest uppercase mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  name="phone" 
                  required
                  className="w-full bg-gray-50 border border-gray-200 text-gray-900 px-4 py-3 rounded-sm text-sm focus:outline-none focus:border-yellow-500 transition-colors"
                  placeholder="9115731105"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-600 text-xs tracking-widest uppercase mb-2">Email Address</label>
              <input 
                type="email" 
                name="email" 
                required
                className="w-full bg-gray-50 border border-gray-200 text-gray-900 px-4 py-3 rounded-sm text-sm focus:outline-none focus:border-yellow-500 transition-colors"
                placeholder="john@example.com"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-gray-600 text-xs tracking-widest uppercase mb-2">Date of Birth</label>
                <input 
                  type="date" 
                  name="dob" 
                  className="w-full bg-gray-50 border border-gray-200 text-gray-900 px-4 py-3 rounded-sm text-sm focus:outline-none focus:border-yellow-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-gray-600 text-xs tracking-widest uppercase mb-2">Time of Birth</label>
                <input 
                  type="time" 
                  name="tob" 
                  className="w-full bg-gray-50 border border-gray-200 text-gray-900 px-4 py-3 rounded-sm text-sm focus:outline-none focus:border-yellow-500 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-600 text-xs tracking-widest uppercase mb-2">Place of Birth</label>
              <input 
                type="text" 
                className="w-full bg-gray-50 border border-gray-200 text-gray-900 px-4 py-3 rounded-sm text-sm focus:outline-none focus:border-yellow-500 transition-colors"
                name="pob"
                placeholder="City, State, Country"
              />
            </div>

            <div>
              <label className="block text-gray-600 text-xs tracking-widest uppercase mb-2">Service Required</label>
              <select name="service" defaultValue="" required className="w-full bg-gray-50 border border-gray-200 text-gray-900 px-4 py-3 rounded-sm text-sm focus:outline-none focus:border-yellow-500 transition-colors appearance-none">
                <option value="" disabled>Select a service</option>
                <option value="kp">KP Astrology</option>
                <option value="naadi">Naadi Astrology</option>
                <option value="nakshatra">Nakshatra Astrology</option>
                <option value="numerology">Numerology</option>
                <option value="tarot">Tarot Card Reading</option>
                <option value="general">General Consultation</option>
              </select>
            </div>

            <div className="pt-4 border-t border-gray-200 mt-6">
              <button type="submit" className="w-full bg-yellow-500 text-white font-semibold tracking-wider py-4 rounded-sm hover:bg-yellow-600 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 text-sm uppercase">
                Submit Inquiry <Send size={16} />
              </button>
            </div>
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default AstrologyLeadForm;
