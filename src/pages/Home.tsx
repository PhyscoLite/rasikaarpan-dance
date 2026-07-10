import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronLeft, ChevronRight, CheckCircle, MapPin, Facebook, Instagram, Youtube, MessageCircle, Star, Quote, Menu, X } from 'lucide-react';



import { useTrial } from '../context/TrialContext';
import { Testimonials } from "../components/Testimonials";

const heroImages = [
  "https://res.cloudinary.com/dm3scoj2q/image/upload/v1783656912/WhatsApp_Image_2026-07-02_at_5.34.29_PM_hu1yhj.jpg",
  "https://res.cloudinary.com/dm3scoj2q/image/upload/v1783583371/b4fd6049-30ea-4d13-b107-794a325ae1bd.png",
  "https://res.cloudinary.com/dm3scoj2q/image/upload/v1783582515/e5a0f9c1-444c-4279-adf3-d698c23d229e.png"
];

const Hero = () => {
  const { openTrial } = useTrial();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center overflow-hidden">
      {/* Background Image Slideshow */}
      <div className="absolute inset-0 z-0 bg-black">
        {heroImages.map((src, index) => (
          <img 
            key={src}
            src={src} 
            alt="Hero Background" 
            className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/90 via-black/50 to-transparent md:w-3/4"></div>
      </div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row items-center justify-between h-full pt-20 md:pt-24">
        {/* Left Content */}
        <div className="w-full md:w-1/2 text-left mt-[200px] mb-[100px]">
          <div className="mb-6 hidden md:block">
            <h2 className="text-brand-gold text-2xl md:text-5xl font-cinzel font-light mb-1 md:mb-2 drop-shadow-md">25+</h2>
            <p className="text-xs md:text-xl tracking-[0.2em] font-light text-gray-300 uppercase leading-snug drop-shadow-md">
              YEARS OF NURTURING TALENT
            </p>
            <div className="w-8 h-[1px] bg-brand-gold mt-4 mx-auto md:mx-0"></div>
          </div>
          
          <h1 className="font-cinzel text-white tracking-widest mb-4 leading-tight drop-shadow-lg">
            <span className="font-sans font-light text-3xl sm:text-4xl md:text-[56px]">RASIKAARPAN</span><br/>
            <span className="lowercase text-brand-gold border-b-2 border-brand-gold/30 pb-2 inline-block text-3xl sm:text-4xl md:text-[56px]">dance</span>
          </h1>
          
          <p className="text-gray-200 mt-4 md:mt-8 mb-8 leading-relaxed text-sm lg:text-base font-light max-w-lg mx-auto md:mx-0 drop-shadow-md">
            <span className="font-semibold text-white">Rooted in Tradition. Committed to Excellence.</span><br /><br />
            Rasikaarpan Dance - Academy of Indian Dance Styles is a premier dance institution dedicated to preserving the rich heritage of Indian Folk and classical dances while embracing the evolution of modern dance forms.
          </p>
          
          <div className="flex justify-center md:justify-start gap-4 flex-row w-full sm:w-auto">
            <button 
              onClick={openTrial}
              className="bg-brand-gold text-black font-semibold px-6 py-3 md:px-8 md:py-4 rounded-sm text-xs md:text-sm hover:bg-brand-gold-dark transition-colors whitespace-nowrap"
            >
              BOOK A TRIAL
            </button>
            <Link to="/classes">
              <button className="border border-brand-gold text-brand-gold font-semibold px-6 py-3 md:px-8 md:py-4 rounded-sm text-xs md:text-sm hover:bg-brand-gold/10 transition-colors whitespace-nowrap bg-black/30 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none">
                EXPLORE CLASSES
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const SectionHeading = ({ title, subtitle }: { title: string, subtitle?: string }) => (
  <div className="text-center mb-8 md:mb-16">
    <div className="flex items-center justify-center gap-2 md:gap-4 mb-2 md:mb-4">
      <div className="w-8 md:w-12 h-[1px] bg-brand-gold"></div>
      <div className="w-1.5 h-1.5 md:w-2 md:h-2 rotate-45 border border-brand-gold"></div>
      <h2 className="text-xl md:text-3xl font-serif text-brand-gold tracking-[0.15em] uppercase px-2 md:px-0">{title}</h2>
      <div className="w-1.5 h-1.5 md:w-2 md:h-2 rotate-45 border border-brand-gold"></div>
      <div className="w-8 md:w-12 h-[1px] bg-brand-gold"></div>
    </div>
    {subtitle && <p className="text-gray-400 font-serif italic text-sm md:text-lg">{subtitle}</p>}
  </div>
);



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

const DanceStyles = () => {
  const styles = [
    { title: "Folk", desc: "Celebrating culture. Honoring roots.", slug: "folk", image: "https://i.pinimg.com/736x/4a/db/bd/4adbbdb0b9bcc096e81e0187bee46aad.jpg" },
    { title: "Kathak", desc: "Rhythm. Expressions. Storytelling.", slug: "kathak", image: "https://i.pinimg.com/736x/ed/bc/0c/edbc0cbaf1d59936a887c705b5fcbb76.jpg" },
    { title: "Bharatanatyam", desc: "The grace. The story. The soul of India.", slug: "bharatanatyam", image: "https://i.pinimg.com/736x/4e/67/2c/4e672ccadd0771c70a19af61321a46db.jpg" },
    { title: "Semi Classical", desc: "A blend of traditional grace and modern flair.", slug: "semi-classical", image: "https://i.pinimg.com/736x/e3/ea/60/e3ea602afc542fa92c4f195b651ea1ef.jpg" },
    { title: "Contemporary", desc: "Express. Evolve. Be limitless.", slug: "contemporary", image: "https://res.cloudinary.com/dm3scoj2q/image/upload/v1783581335/2c5f4165-1605-4040-a49c-c16b49f5fe83.png" },
    { title: "Hip-Hop", desc: "Feel the beat. Own the floor.", slug: "hip-hop", image: "https://i.pinimg.com/736x/bf/36/46/bf3646d7dba78f06cbb8cd59236b11f4.jpg" },
    { title: "Jazz", desc: "Energy. Technique. Rhythmic syncopation.", slug: "jazz", image: "https://i.pinimg.com/1200x/b1/d5/e1/b1d5e104e88b4217ae28f2c367002189.jpg" },
  ];

  return (
    <section className="py-16 md:py-24 px-6 md:px-12 border-t border-brand-surface-light relative">
      <SectionHeading title="OUR DANCE STYLES" subtitle="From Tradition to Trend — We Teach It All" />
      
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {styles.map((style, idx) => (
            <DanceStyleCard key={idx} {...style} className={idx === 0 ? "lg:col-span-2" : ""} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ClassesInfo = () => {
  const { openTrial } = useTrial();
  return (
    <section className="py-12 md:py-16 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-6 md:space-y-8">
        {/* Classes for everyone */}
        <div className="border border-brand-surface-light bg-brand-surface/50 rounded-lg p-6 md:p-10">
          <h3 className="text-lg md:text-xl font-serif text-brand-gold tracking-widest text-center mb-6 md:mb-10">CLASSES FOR EVERYONE</h3>
          <div className="grid grid-cols-2 sm:flex flex-wrap justify-between items-center text-center gap-6 sm:gap-4">
            {[
              { label: 'Kids', sub: '(4-12 Years)' },
              { label: 'Teens', sub: '(13-18 Years)' },
              { label: 'Adults', sub: '(18+ Years)' },
              { label: 'Beginners', sub: 'Welcome' },
              { label: 'Advanced', sub: 'Training' }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center group">
                <div className="w-10 h-10 md:w-12 md:h-12 mb-3 md:mb-4 text-brand-gold opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all">
                  {/* Icon placeholder - would ideally use proper SVGs matching the image */}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h4 className="font-serif text-base md:text-lg text-white mb-1">{item.label}</h4>
                <p className="text-[10px] md:text-xs text-gray-500">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="border border-brand-surface-light bg-brand-surface/50 rounded-lg p-6 md:p-10">
          <h3 className="text-lg md:text-xl font-serif text-brand-gold tracking-widest text-center mb-6 md:mb-10">WHY CHOOSE RASIKAARPAN DANCE?</h3>
          <div className="grid grid-cols-2 sm:flex flex-wrap justify-between items-start text-center gap-6 sm:gap-4">
            {[
              { label: 'Expert', sub: 'Instructors' },
              { label: 'Personalized', sub: 'Training' },
              { label: 'Performance', sub: 'Opportunities' },
              { label: 'Holistic', sub: 'Development' },
              { label: 'Safe & Positive', sub: 'Environment' }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center max-w-[120px]">
                <div className="w-10 h-10 mb-4 text-brand-gold opacity-80">
                  <CheckCircle className="w-full h-full" strokeWidth={1} />
                </div>
                <h4 className="text-sm font-medium text-white mb-1 leading-tight">{item.label}</h4>
                <p className="text-xs text-gray-400">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Book Trial CTA */}
      <div className="bg-brand-gold rounded-lg p-6 md:p-10 text-black shadow-xl flex flex-col items-center justify-center text-center h-full">
        <h3 className="text-2xl md:text-3xl font-serif mb-4 tracking-wide font-semibold">Ready to start?</h3>
        <p className="text-sm md:text-base mb-8 font-medium text-black/80 max-w-sm">Take the first step towards your dance journey. Experience the joy of movement with us.</p>
        
        <button 
          onClick={openTrial}
          className="w-full sm:w-auto bg-black text-brand-gold font-semibold tracking-wider px-8 py-4 rounded-sm hover:bg-gray-900 transition-colors"
        >
          BOOK A TRIAL CLASS
        </button>
      </div>
    </section>
  );
};

const GurusAndHighlights = () => (
  <section className="py-12 md:py-16 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
    
    {/* Gurus Section */}
    <div>
      <div className="flex items-center gap-3 md:gap-4 mb-8">
        <div className="w-8 md:w-12 h-[1px] bg-brand-gold"></div>
        <div className="w-2 h-2 rotate-45 border border-brand-gold"></div>
        <h2 className="text-xl md:text-2xl font-serif text-brand-gold tracking-[0.15em] uppercase text-center">GURUS</h2>
        <div className="w-2 h-2 rotate-45 border border-brand-gold"></div>
        <div className="w-8 md:w-12 h-[1px] bg-brand-gold"></div>
      </div>

      <div className="flex flex-col sm:flex-row gap-6 md:gap-8 items-center sm:items-start text-center sm:text-left">
        <div className="w-40 h-56 md:w-48 md:h-64 shrink-0 rounded-lg overflow-hidden border-2 border-brand-gold p-1 relative">
          <img src="https://i.pinimg.com/736x/51/e5/3f/51e53ff7f0187a281eb2c93d85cdfca7.jpg" alt="Guru" className="w-full h-full object-cover object-top rounded-md" />
        </div>
        <div>
          <h3 className="text-2xl font-serif text-white mb-6">Guru. Mentor. Inspiration.</h3>
          <p className="text-sm text-gray-400 font-light leading-relaxed mb-8">
            Under the able guidance of our founder and artistic director, our academy has grown into a nurturing space where discipline meets creativity and tradition shapes tomorrow's performers.
          </p>
          <button className="border border-brand-gold text-brand-gold font-semibold px-6 py-2 rounded-sm text-sm hover:bg-brand-gold/10 transition-colors">
            KNOW MORE ABOUT US
          </button>
        </div>
      </div>
    </div>

    {/* Highlights Section */}
    <div className="overflow-hidden w-full mt-4 md:mt-0">
       <div className="flex items-center gap-3 md:gap-4 mb-8 justify-center md:justify-end">
        <div className="w-8 md:w-12 h-[1px] bg-brand-gold"></div>
        <div className="w-2 h-2 rotate-45 border border-brand-gold"></div>
        <h2 className="text-lg md:text-2xl font-serif text-brand-gold tracking-[0.15em] uppercase text-center">STUDENT HIGHLIGHTS</h2>
        <div className="w-2 h-2 rotate-45 border border-brand-gold"></div>
        <div className="w-8 md:w-12 h-[1px] bg-brand-gold"></div>
      </div>
      
      <div className="relative w-full group">
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-50% - 0.5rem)); }
          }
          .animate-marquee {
            display: flex;
            width: max-content;
            animation: marquee 15s linear infinite;
          }
          .group:hover .animate-marquee {
            animation-play-state: paused;
          }
        `}</style>
        <div className="animate-marquee gap-4">
          {[
            "https://i.pinimg.com/1200x/38/66/6d/38666d7403b77998a3eda5d0c94b1ab4.jpg",
            "https://i.pinimg.com/736x/17/11/18/171118192903345d93c7565d19bc319b.jpg",
            "https://res.cloudinary.com/dm3scoj2q/image/upload/v1783509908/WhatsApp_Image_2026-07-02_at_5.34.29_PM_a5w1ag.jpg",
            // Duplicate images to create seamless loop
            "https://i.pinimg.com/1200x/38/66/6d/38666d7403b77998a3eda5d0c94b1ab4.jpg",
            "https://i.pinimg.com/736x/17/11/18/171118192903345d93c7565d19bc319b.jpg",
            "https://res.cloudinary.com/dm3scoj2q/image/upload/v1783509908/WhatsApp_Image_2026-07-02_at_5.34.29_PM_a5w1ag.jpg"
          ].map((img, i) => (
            <div key={i} className="w-[calc(50vw-2rem)] sm:w-[280px] lg:w-[280px] aspect-[4/3] shrink-0 rounded-lg overflow-hidden border border-brand-gold/30">
              <img src={img} alt="Highlight" className="w-full h-full object-cover object-top hover:scale-105 transition-transform" />
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Stats = () => (
  <section className="py-12 md:py-16 px-6 md:px-12 my-8 md:my-12 border-y border-brand-surface-light relative">
    <div className="max-w-6xl mx-auto">
      <SectionHeading title="PERFORM. GROW. SHINE." />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center mt-8 md:mt-12">
        <div>
          <div className="text-3xl md:text-5xl font-cinzel text-brand-gold mb-1 md:mb-2">500+</div>
          <div className="text-[10px] sm:text-xs md:text-sm text-gray-300 tracking-wider">Students Trained</div>
        </div>
        <div>
          <div className="text-3xl md:text-5xl font-cinzel text-brand-gold mb-1 md:mb-2">100+</div>
          <div className="text-[10px] sm:text-xs md:text-sm text-gray-300 tracking-wider">Stage Performances</div>
        </div>
        <div>
          <div className="text-3xl md:text-5xl font-cinzel text-brand-gold mb-1 md:mb-2">25+</div>
          <div className="text-[10px] sm:text-xs md:text-sm text-gray-300 tracking-wider">Years of Legacy</div>
        </div>
        <div>
          <div className="text-3xl md:text-5xl font-cinzel text-brand-gold mb-1 md:mb-2">10+</div>
          <div className="text-[10px] sm:text-xs md:text-sm text-gray-300 tracking-wider">Awards & Recognitions</div>
        </div>
      </div>
    </div>
    
    {/* Decorative line art placeholder */}
    <div className="absolute left-12 top-1/2 -translate-y-1/2 opacity-20 hidden lg:block">
      <svg width="100" height="150" viewBox="0 0 100 150" fill="none" stroke="currentColor" className="text-brand-gold">
        <path d="M50 10 C 20 40, 20 80, 50 140 M50 10 C 80 40, 80 80, 50 140" strokeWidth="2"/>
        <circle cx="50" cy="10" r="5" fill="currentColor"/>
      </svg>
    </div>
    <div className="absolute right-12 top-1/2 -translate-y-1/2 opacity-20 hidden lg:block">
      <svg width="100" height="150" viewBox="0 0 100 150" fill="none" stroke="currentColor" className="text-brand-gold">
        <path d="M50 10 C 20 40, 20 80, 50 140 M50 10 C 80 40, 80 80, 50 140" strokeWidth="2"/>
        <circle cx="50" cy="10" r="5" fill="currentColor"/>
      </svg>
    </div>
  </section>
);


const TestimonialsLocations = () => (
  <section className="py-12 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
    <div className="lg:col-span-2">
      <Testimonials />
    </div>

    {/* Locations */}
    <div className="md:pl-8 flex flex-col justify-center h-full">
      <h3 className="text-lg font-serif text-brand-gold tracking-widest mb-8 text-center md:text-left uppercase">CLASS LOCATIONS</h3>
      <div className="space-y-6">
        {[
          { city: 'Nagpur', sub: '(Main Studio)', state: 'Maharashtra' }
        ].map((loc, i) => (
          <div key={i} className="flex gap-4 items-start">
            <MapPin className="text-brand-gold shrink-0 mt-1" size={20} />
            <div>
              <h4 className="text-white font-medium">{loc.city} <span className="text-gray-400 font-light text-sm">{loc.sub}</span></h4>
              <p className="text-sm text-gray-500">{loc.state}</p>
            </div>
          </div>
        ))}
        <button className="w-full border border-brand-surface-light text-gray-300 text-xs font-semibold py-3 mt-8 hover:border-brand-gold hover:text-brand-gold transition-colors">
          VIEW ALL LOCATIONS
        </button>
      </div>
    </div>
  </section>
);



export default function Home() {
  return (
    <div className="min-h-screen font-sans selection:bg-brand-gold selection:text-black pb-0">
       <Hero />
       <DanceStyles />
       <ClassesInfo />
       <GurusAndHighlights />
       <Stats />
       <TestimonialsLocations />
    </div>
  );
}

