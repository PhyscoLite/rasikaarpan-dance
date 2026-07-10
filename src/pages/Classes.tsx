import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, MapPin, Phone, Mail } from 'lucide-react';
import SEO from '../components/SEO';

const DanceStyleCard = ({ image, title, desc, slug, className = "" }: { image: string, title: string, desc: string, slug: string, className?: string }) => (
  <Link to={`/classes/${slug}`} className={`group relative overflow-hidden rounded-lg border border-brand-surface-light bg-brand-surface p-3 md:p-4 transition-all hover:border-brand-gold/50 cursor-pointer flex flex-col items-center ${className} block`}>
    <div className="w-full h-48 md:h-64 overflow-hidden rounded-md mb-4 md:mb-6 relative bg-black">
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
      <img src={image} alt={title} className="w-full h-full object-cover object-top opacity-80 group-hover:scale-105 transition-transform duration-700" />
    </div>
    <h3 className="text-lg md:text-xl font-serif text-brand-gold mb-1 md:mb-2">{title}</h3>
    <p className="text-xs md:text-sm text-gray-400 text-center font-light mb-4 md:mb-6 min-h-[32px] md:min-h-[40px] px-2">{desc}</p>
    <button className="text-brand-gold text-xs md:text-sm font-semibold tracking-wider flex items-center group-hover:text-white transition-colors">
      LEARN MORE <ChevronRight size={14} className="ml-1 transition-transform group-hover:translate-x-1" />
    </button>
  </Link>
);

const styles = [
  { title: "Folk", desc: "Celebrating culture. Honoring roots.", slug: "folk", image: "https://i.pinimg.com/736x/4a/db/bd/4adbbdb0b9bcc096e81e0187bee46aad.jpg" },
  { title: "Kathak", desc: "Rhythm. Expressions. Storytelling.", slug: "kathak", image: "https://i.pinimg.com/736x/ed/bc/0c/edbc0cbaf1d59936a887c705b5fcbb76.jpg" },
  { title: "Bharatanatyam", desc: "The grace. The story. The soul of India.", slug: "bharatanatyam", image: "https://i.pinimg.com/736x/4e/67/2c/4e672ccadd0771c70a19af61321a46db.jpg" },
  { title: "Semi Classical", desc: "A blend of traditional grace and modern flair.", slug: "semi-classical", image: "https://i.pinimg.com/736x/e3/ea/60/e3ea602afc542fa92c4f195b651ea1ef.jpg" },
  { title: "Contemporary", desc: "Express. Evolve. Be limitless.", slug: "contemporary", image: "https://res.cloudinary.com/dm3scoj2q/image/upload/v1783581335/2c5f4165-1605-4040-a49c-c16b49f5fe83.png" },
  { title: "Hip-Hop", desc: "Feel the beat. Own the floor.", slug: "hip-hop", image: "https://i.pinimg.com/736x/bf/36/46/bf3646d7dba78f06cbb8cd59236b11f4.jpg" },
  { title: "Jazz", desc: "Energy. Technique. Rhythmic syncopation.", slug: "jazz", image: "https://i.pinimg.com/1200x/b1/d5/e1/b1d5e104e88b4217ae28f2c367002189.jpg" },
];

const Classes = () => {
  return (
    <div className="pt-24 md:pt-32 min-h-screen">
      <SEO title="Our Classes" description="Explore our diverse range of dance styles including Folk, Kathak, Bharatanatyam, Contemporary, and more." />
      
      {/* Header Section */}
      <div className="px-6 md:px-12 max-w-7xl mx-auto mb-16 text-center">
        <h1 className="text-3xl md:text-5xl font-cinzel text-brand-gold tracking-widest mb-6">OUR DANCE CLASSES</h1>
        <p className="text-gray-300 font-light max-w-2xl mx-auto leading-relaxed text-sm md:text-base">
          From the vibrant expressions of traditional Indian styles to the energetic beats of modern dance forms, we offer a diverse curriculum tailored to every passion and skill level.
        </p>
      </div>

      {/* Cards Section */}
      <div className="px-6 md:px-12 max-w-7xl mx-auto mb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {styles.map((style, idx) => (
            <DanceStyleCard key={idx} {...style} className={idx === 0 ? "lg:col-span-2" : ""} />
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-brand-surface border-t border-brand-surface-light py-16 md:py-24">
        <div className="px-6 md:px-12 max-w-7xl mx-auto text-center">
          <h2 className="text-2xl font-serif text-brand-gold tracking-widest uppercase mb-8">Ready to Join?</h2>
          <p className="text-gray-300 font-light mb-10 max-w-xl mx-auto">
            Contact us today to book your trial session or inquire about our class schedules and enrollment details.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-sm text-gray-400 font-light">
             <div className="flex items-center gap-2">
               <Phone size={18} className="text-brand-gold" />
               <span>+91 98765 43210</span>
             </div>
             <div className="hidden md:block w-1 h-1 rounded-full bg-brand-gold"></div>
             <div className="flex items-center gap-2">
               <Mail size={18} className="text-brand-gold" />
               <span>info@rasikaarpan.com</span>
             </div>
             <div className="hidden md:block w-1 h-1 rounded-full bg-brand-gold"></div>
             <div className="flex items-center gap-2">
               <MapPin size={18} className="text-brand-gold" />
               <span>Nagpur, Maharashtra</span>
             </div>
          </div>
          <Link to="/contact" className="inline-block mt-10 bg-brand-gold text-black font-semibold px-8 py-4 rounded-sm text-sm hover:bg-brand-gold-dark transition-colors tracking-wider">
            CONTACT US NOW
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Classes;
