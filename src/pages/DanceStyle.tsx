import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTrial } from '../context/TrialContext';
import SEO from '../components/SEO';

const danceStylesData: Record<string, { title: string, desc: string, image: string, longDesc: string }> = {
  'bharatanatyam': {
    title: 'Bharatanatyam',
    desc: 'The grace. The story. The soul of India.',
    image: 'https://i.pinimg.com/736x/4e/67/2c/4e672ccadd0771c70a19af61321a46db.jpg',
    longDesc: 'Bharatanatyam is one of the oldest and most traditional classical dance forms of India. It is known for its grace, purity, tenderness, and sculpturesque poses. Today, it is one of the most popular and widely performed dance styles and is practiced by male and female dancers all over the world.'
  },
  'kathak': {
    title: 'Kathak',
    desc: 'Rhythm. Expressions. Storytelling.',
    image: 'https://i.pinimg.com/736x/ed/bc/0c/edbc0cbaf1d59936a887c705b5fcbb76.jpg',
    longDesc: 'Kathak is one of the eight major forms of Indian classical dance. The origin of Kathak is traditionally attributed to the traveling bards in of ancient northern India known as Kathakars or storytellers. The term Kathak is derived from the Vedic Sanskrit word Katha which means "story", and Kathakar which means "the one who tells a story", or "to do with stories".'
  },
  'folk': {
    title: 'Folk',
    desc: 'Celebrating culture. Honoring roots.',
    image: 'https://i.pinimg.com/736x/4a/db/bd/4adbbdb0b9bcc096e81e0187bee46aad.jpg',
    longDesc: 'Indian folk dances are simple dances, and are performed to express joy and happiness among themselves. Folk dances are performed for every possible occasion, to celebrate the arrival of seasons, birth of a child, a wedding and festivals.'
  },
  'semi-classical': {
    title: 'Semi Classical',
    desc: 'A blend of traditional grace and modern flair.',
    image: 'https://i.pinimg.com/736x/e3/ea/60/e3ea602afc542fa92c4f195b651ea1ef.jpg',
    longDesc: 'Semi-classical dance is an art form that features extensive movements of your body while maintaining grace along with expressions and speed. It breaks the stylized structures and forms of the classical dance.'
  },
  'contemporary': {
    title: 'Contemporary',
    desc: 'Express. Evolve. Be limitless.',
    image: 'https://res.cloudinary.com/dm3scoj2q/image/upload/v1783581335/2c5f4165-1605-4040-a49c-c16b49f5fe83.png',
    longDesc: 'Contemporary dance is a style of expressive dance that combines elements of several dance genres including modern, jazz, lyrical and classical ballet. Contemporary dancers strive to connect the mind and the body through fluid dance movements.'
  },
  'jazz': {
    title: 'Jazz',
    desc: 'Energy. Technique. Rhythmic syncopation.',
    image: 'https://i.pinimg.com/1200x/b1/d5/e1/b1d5e104e88b4217ae28f2c367002189.jpg',
    longDesc: 'Jazz dance is a performance dance technique and style that first emerged in the United States in the early twentieth century. Jazz dance may refer to vernacular jazz or to Broadway or theatrical jazz.'
  },
  'hip-hop': {
    title: 'Hip-Hop',
    desc: 'Feel the beat. Own the floor.',
    image: 'https://i.pinimg.com/736x/bf/36/46/bf3646d7dba78f06cbb8cd59236b11f4.jpg',
    longDesc: 'Hip-hop dance refers to street dance styles primarily performed to hip-hop music or that have evolved as part of hip-hop culture. It includes a wide range of styles primarily breaking which was created in the 1970s and made popular by dance crews in the United States.'
  }
};

const DanceStyle = () => {
  const { styleId } = useParams();
  const styleData = styleId ? danceStylesData[styleId] : null;
  const { openTrial } = useTrial();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [styleId]);

  if (!styleData) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h2 className="text-2xl font-serif text-brand-gold mb-4">Style Not Found</h2>
          <Link to="/" className="text-gray-300 hover:text-white underline">Return Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-24 px-6 md:px-12 max-w-7xl mx-auto min-h-screen">
      <SEO title={`${styleData.title} Classes`} description={styleData.desc} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Image Section */}
        <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden border border-brand-surface-light group">
          <div className="absolute inset-0 bg-brand-gold/10 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500 z-10"></div>
          <img 
            src={styleData.image} 
            alt={styleData.title} 
            className="w-full h-full object-cover object-top scale-105 group-hover:scale-100 transition-transform duration-700" 
          />
        </div>

        {/* Content Section */}
        <div>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-[1px] bg-brand-gold"></div>
            <h3 className="text-sm font-serif text-brand-gold tracking-[0.15em] uppercase">DANCE STYLES</h3>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-cinzel text-white tracking-widest mb-4">
            {styleData.title}
          </h1>
          
          <p className="text-xl font-serif text-brand-gold italic mb-8">
            {styleData.desc}
          </p>
          
          <div className="space-y-6 text-gray-300 font-light leading-relaxed mb-10 text-sm md:text-base">
            <p>{styleData.longDesc}</p>
            <p>
              At Rasikaarpan Dance Academy, we ensure that every student masters the foundational techniques while developing their unique artistic expression in this style. Our experienced instructors guide you through a structured curriculum designed to build strength, grace, and confidence.
            </p>
          </div>

          <div className="pt-8 border-t border-brand-surface-light">
            <button 
              onClick={openTrial}
              className="bg-brand-gold text-black font-semibold px-8 py-4 rounded-sm hover:bg-white transition-colors tracking-widest text-sm w-full sm:w-auto text-center block"
            >
              BOOK A TRIAL CLASS
            </button>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="mt-20 md:mt-32 pt-16 md:pt-24 border-t border-brand-surface-light">
        <h2 className="text-2xl font-serif text-brand-gold tracking-[0.15em] uppercase mb-12 text-center">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Expert Instructors', desc: 'Learn from highly experienced professionals dedicated to this specific style.' },
            { title: 'Performance Opportunities', desc: 'Regular showcases and cultural events to build stage confidence.' },
            { title: 'Structured Curriculum', desc: 'A well-designed syllabus catering to beginners and advanced students alike.' }
          ].map((item, idx) => (
            <div key={idx} className="bg-brand-surface/30 p-8 rounded-lg border border-brand-surface-light text-center">
              <div className="w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center mx-auto mb-6">
                 <div className="w-3 h-3 rounded-full bg-brand-gold"></div>
              </div>
              <h3 className="text-white font-medium mb-3">{item.title}</h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="mt-20 md:mt-32 bg-brand-surface/30 p-8 md:p-16 rounded-lg border border-brand-surface-light text-center">
        <h2 className="text-2xl font-serif text-brand-gold tracking-[0.15em] uppercase mb-6">Ready to Start?</h2>
        <p className="text-gray-300 font-light mb-10 max-w-2xl mx-auto text-sm md:text-base">
          Join us to explore the beauty and technique of {styleData.title}. Contact us to learn more about schedules, fees, and to book your first trial class.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm">
           <div className="flex flex-col items-center gap-2">
             <span className="text-brand-gold uppercase tracking-widest text-xs font-semibold">Call Us</span>
             <span className="text-white">+91 98765 43210</span>
           </div>
           <div className="hidden sm:block w-[1px] h-10 bg-brand-surface-light"></div>
           <div className="flex flex-col items-center gap-2">
             <span className="text-brand-gold uppercase tracking-widest text-xs font-semibold">Email Us</span>
             <span className="text-white">info@rasikaarpan.com</span>
           </div>
        </div>
      </div>
    </div>
  );
};

export default DanceStyle;
