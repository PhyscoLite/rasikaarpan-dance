import React, { useState, useEffect } from 'react';
import { Quote, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const reviews = [
  {
    id: 1,
    name: 'Ananya',
    role: 'Student',
    text: "Rasikaarpan Dance is not just a dance class, it's a family. I've grown in confidence, discipline, and discovered my passion.",
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ananya',
    rating: 5,
  },
  {
    id: 2,
    name: 'Rahul',
    role: 'Parent',
    text: "My daughter loves her Kathak classes here. The teachers are incredibly patient and dedicated to preserving the authenticity of the art form.",
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul',
    rating: 5,
  },
  {
    id: 3,
    name: 'Priya',
    role: 'Professional Dancer',
    text: "An exceptional academy that focuses on both technical perfection and emotional expression. Highly recommended for serious learners.",
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Priya',
    rating: 5,
  },
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="lg:border-r border-y lg:border-y-0 py-10 lg:py-0 border-brand-surface-light lg:pr-12 flex flex-col justify-center h-full relative overflow-hidden">
      <div className="flex justify-between items-center mb-10">
        <h3 className="text-lg font-serif text-brand-gold tracking-widest uppercase">WHAT OUR STUDENTS SAY</h3>
      </div>

      <div className="relative min-h-[250px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0 flex flex-col bg-brand-surface/30 border border-brand-surface-light p-6 rounded-lg"
          >
            <div className="flex justify-between items-start mb-4">
               <Quote className="text-brand-gold/30" size={32} />
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24px" height="24px">
                  <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
                  <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
                  <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
                  <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
               </svg>
            </div>

            <p className="text-gray-300 font-light leading-relaxed mb-6 italic text-base lg:text-lg flex-1">
              "{reviews[currentIndex].text}"
            </p>
            
            <div className="mt-auto flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img 
                  src={reviews[currentIndex].avatar} 
                  alt={reviews[currentIndex].name}
                  className="w-12 h-12 rounded-full bg-white/10"
                />
                <div>
                  <h4 className="text-white font-medium">{reviews[currentIndex].name}</h4>
                  <p className="text-xs text-gray-500">{reviews[currentIndex].role}</p>
                </div>
              </div>
              <div className="flex gap-1 text-brand-gold">
                {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex mt-8 gap-2">
        {reviews.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-2 h-2 rounded-full transition-all ${
              i === currentIndex ? 'bg-brand-gold w-6' : 'bg-gray-600 hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
