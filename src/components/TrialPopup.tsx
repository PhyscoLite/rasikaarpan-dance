import React from 'react';
import { X, Calendar } from 'lucide-react';
import { useTrial } from '../context/TrialContext';

const TrialPopup = () => {
  const { isTrialOpen, closeTrial } = useTrial();

  if (!isTrialOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={closeTrial}
      ></div>
      
      {/* Popup Content */}
      <div className="relative bg-brand-surface w-full max-w-xl rounded-lg shadow-2xl border border-brand-gold/30 overflow-hidden z-10 max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="bg-brand-gold p-6 text-black flex items-center justify-between shrink-0">
          <div>
            <h3 className="text-xl md:text-2xl font-serif tracking-wide font-semibold">BOOK A TRIAL CLASS</h3>
            <p className="text-xs md:text-sm font-medium text-black/80 mt-1">Take the first step towards your dance journey.</p>
          </div>
          <button 
            onClick={closeTrial}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-black/10 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 md:p-8 overflow-y-auto">
          <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); closeTrial(); }}>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-gray-400 text-xs tracking-widest uppercase mb-2">Your Name</label>
                <input 
                  type="text" 
                  required
                  className="w-full bg-brand-bg border border-brand-surface-light text-white px-4 py-3 rounded-sm text-sm focus:outline-none focus:border-brand-gold transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-gray-400 text-xs tracking-widest uppercase mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  required
                  className="w-full bg-brand-bg border border-brand-surface-light text-white px-4 py-3 rounded-sm text-sm focus:outline-none focus:border-brand-gold transition-colors"
                  placeholder="9115731105"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-400 text-xs tracking-widest uppercase mb-2">Location</label>
              <input 
                type="text" 
                required
                className="w-full bg-brand-bg border border-brand-surface-light text-white px-4 py-3 rounded-sm text-sm focus:outline-none focus:border-brand-gold transition-colors"
                placeholder="Enter your location / address"
              />
            </div>

            <div>
              <label className="block text-gray-400 text-xs tracking-widest uppercase mb-2">Dance Style</label>
              <select defaultValue="" required className="w-full bg-brand-bg border border-brand-surface-light text-white px-4 py-3 rounded-sm text-sm focus:outline-none focus:border-brand-gold transition-colors appearance-none">
                <option value="" disabled>What do you want to learn?</option>
                <option value="bharatanatyam">Bharatanatyam</option>
                <option value="kathak">Kathak</option>
                <option value="folk">Folk Dance</option>
                <option value="semi-classical">Semi Classical</option>
                <option value="contemporary">Contemporary</option>
                <option value="jazz">Jazz</option>
                <option value="hip-hop">Hip-Hop</option>
                <option value="not-sure">Not Sure Yet</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-gray-400 text-xs tracking-widest uppercase mb-2">Preferred Date</label>
                <input 
                  type="date" 
                  required
                  className="w-full bg-brand-bg border border-brand-surface-light text-white px-4 py-3 rounded-sm text-sm focus:outline-none focus:border-brand-gold transition-colors"
                />
              </div>
              <div>
                <label className="block text-gray-400 text-xs tracking-widest uppercase mb-2">Preferred Time</label>
                <select defaultValue="" required className="w-full bg-brand-bg border border-brand-surface-light text-white px-4 py-3 rounded-sm text-sm focus:outline-none focus:border-brand-gold transition-colors appearance-none">
                  <option value="" disabled>Select Time Slot</option>
                  <option value="morning">Morning (10AM - 12PM)</option>
                  <option value="afternoon">Afternoon (4PM - 6PM)</option>
                  <option value="evening">Evening (6PM - 8PM)</option>
                </select>
              </div>
            </div>

            <div className="pt-4 border-t border-brand-surface-light mt-6">
              <button type="submit" className="w-full bg-brand-gold text-black font-semibold tracking-wider py-4 rounded-sm hover:bg-brand-gold-dark transition-colors flex items-center justify-center gap-2 text-sm">
                CONFIRM BOOKING <Calendar size={16} />
              </button>
            </div>
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default TrialPopup;
