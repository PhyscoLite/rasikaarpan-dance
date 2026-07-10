import React, { useState } from 'react';
import { Filter } from 'lucide-react';
import SEO from '../components/SEO';

const galleryItems = [
  { id: 1, type: 'image', date: '2024-06-15', src: 'https://res.cloudinary.com/dm3scoj2q/image/upload/v1783509908/WhatsApp_Image_2026-07-02_at_5.34.29_PM_a5w1ag.jpg' },
  { id: 2, type: 'image', date: '2024-05-20', src: 'https://res.cloudinary.com/dm3scoj2q/image/upload/v1783582515/e5a0f9c1-444c-4279-adf3-d698c23d229e.png' },
  { id: 3, type: 'image', date: '2024-04-10', src: 'https://res.cloudinary.com/dm3scoj2q/image/upload/v1783583388/052854aa-739e-4550-b956-e58645d5f18f.png' },
  { id: 4, type: 'image', date: '2024-03-05', src: 'https://res.cloudinary.com/dm3scoj2q/image/upload/v1783583386/27e4db24-1e53-4221-aa90-1ab2a1fea415.png' },
  { id: 5, type: 'image', date: '2024-02-28', src: 'https://res.cloudinary.com/dm3scoj2q/image/upload/v1783583374/7f0f9503-ce54-4380-9412-c52c76ed4897.png' },
  { id: 6, type: 'image', date: '2024-01-15', src: 'https://res.cloudinary.com/dm3scoj2q/image/upload/v1783583371/b4fd6049-30ea-4d13-b107-794a325ae1bd.png' },
  { id: 7, type: 'image', date: '2023-12-10', src: 'https://res.cloudinary.com/dm3scoj2q/image/upload/v1783583362/5a9ad57a-8077-4a8e-bf16-b5b70e650caa.png' },
];

const Gallery = () => {
  const [filterType, setFilterType] = useState('all');
  const [sortOrder, setSortOrder] = useState('latest');

  const filteredItems = galleryItems
    .filter(item => filterType === 'all' || item.type === filterType)
    .sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return sortOrder === 'latest' ? dateB - dateA : dateA - dateB;
    });

  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-24 px-6 md:px-12 max-w-7xl mx-auto min-h-screen">
      <SEO title="Gallery" description="Explore our gallery featuring vibrant dance performances and moments from Rasikaarpan Dance Academy." />
      
      {/* Header Section */}
      <div className="text-center mb-12 md:mb-16">
        <h1 className="text-3xl md:text-5xl font-cinzel text-brand-gold tracking-widest mb-4">OUR GALLERY</h1>
        <p className="text-lg md:text-xl font-serif text-gray-300 italic">Moments captured in motion</p>
        <div className="flex items-center justify-center gap-4 mt-8">
          <div className="w-16 md:w-24 h-[1px] bg-brand-gold"></div>
          <div className="w-2 h-2 rotate-45 border border-brand-gold"></div>
          <div className="w-16 md:w-24 h-[1px] bg-brand-gold"></div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-6 mb-12 bg-brand-surface/30 p-4 md:p-6 rounded-lg border border-brand-surface-light">
        <div className="flex items-center gap-2 text-brand-gold">
          <Filter size={18} />
          <span className="font-serif tracking-widest uppercase text-sm font-semibold">Filter & Sort</span>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          {/* Media Type Filter */}
          <div className="flex gap-2">
            <button 
              onClick={() => setFilterType('all')}
              className={`px-4 py-2 text-xs md:text-sm font-semibold tracking-wider rounded-sm transition-colors border ${filterType === 'all' ? 'bg-brand-gold text-black border-brand-gold' : 'text-gray-300 border-brand-surface-light hover:border-brand-gold'}`}
            >
              ALL
            </button>
            <button 
              onClick={() => setFilterType('image')}
              className={`px-4 py-2 text-xs md:text-sm font-semibold tracking-wider rounded-sm transition-colors border ${filterType === 'image' ? 'bg-brand-gold text-black border-brand-gold' : 'text-gray-300 border-brand-surface-light hover:border-brand-gold'}`}
            >
              IMAGES
            </button>
            <button 
              onClick={() => setFilterType('video')}
              className={`px-4 py-2 text-xs md:text-sm font-semibold tracking-wider rounded-sm transition-colors border ${filterType === 'video' ? 'bg-brand-gold text-black border-brand-gold' : 'text-gray-300 border-brand-surface-light hover:border-brand-gold'}`}
            >
              VIDEOS
            </button>
          </div>

          {/* Date Sort */}
          <select 
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="bg-brand-bg border border-brand-surface-light text-gray-300 text-xs md:text-sm font-semibold tracking-wider px-4 py-2 rounded-sm focus:outline-none focus:border-brand-gold transition-colors"
          >
            <option value="latest">LATEST FIRST</option>
            <option value="oldest">OLDEST FIRST</option>
          </select>
        </div>
      </div>

      {/* Gallery Grid */}
      {filteredItems.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="group relative overflow-hidden rounded-lg border border-brand-surface-light aspect-square cursor-pointer">
              <div className="absolute inset-0 bg-brand-gold/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
              {item.type === 'image' ? (
                <img 
                  src={item.src} 
                  alt="Gallery Item" 
                  className="w-full h-full object-cover object-top grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-brand-surface text-gray-500">
                  Video Placeholder
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-gray-400 font-light">No media found for the selected filter.</p>
        </div>
      )}

    </div>
  );
};

export default Gallery;
