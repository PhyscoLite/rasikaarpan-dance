import { Link } from 'react-router-dom';
import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, ChevronLeft, ChevronRight, CheckCircle, MapPin, Facebook, Instagram, Youtube, MessageCircle, Star, Quote, Menu, X } from 'lucide-react';



import { useTrial } from '../context/TrialContext';

const Hero = () => {
  const TOTAL_FRAMES = 100;
  const [loadedFrames, setLoadedFrames] = useState<Record<number, HTMLImageElement>>({});
  const [isReady, setIsReady] = useState(false);
  const [progress, setProgress] = useState(0);
  const containerRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { openTrial } = useTrial();
  
  const loadedFramesRef = useRef<Record<number, HTMLImageElement>>({});

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const queue = [0, TOTAL_FRAMES - 1];
    
    const addSub = (start: number, end: number) => {
      if (end - start <= 1) return;
      const mid = Math.floor((start + end) / 2);
      queue.push(mid);
      addSub(start, mid);
      addSub(mid, end);
    };
    addSub(0, TOTAL_FRAMES - 1);

    let loadedCount = 0;
    let currentIndex = 0;
    let isMounted = true;

    const loadNext = () => {
      if (!isMounted || currentIndex >= queue.length) return;
      const frameIdx = queue[currentIndex++];
      
      const img = new Image();
      img.crossOrigin = "anonymous";
      const percent = (frameIdx / (TOTAL_FRAMES - 1)) * 100;
      img.src = `https://res.cloudinary.com/dm3scoj2q/video/upload/${isMobile ? 'w_960' : 'w_1280'},f_auto,q_auto,so_${percent.toFixed(2)}p/v1783493342/3d-scroll_yttlsx.jpg`;
      
      img.onload = () => {
        if (!isMounted) return;
        loadedFramesRef.current[frameIdx] = img;
        loadedCount++;
        
        setLoadedFrames(prev => ({ ...prev, [frameIdx]: img }));
        setProgress(Math.round((loadedCount / TOTAL_FRAMES) * 100));
        
        if (loadedCount >= 25 && !isReady) {
          setIsReady(true);
        }
        
        loadNext();
      };
      
      img.onerror = () => {
        if (!isMounted) return;
        loadNext();
      };
    };

    const CONCURRENCY = 4;
    for (let i = 0; i < Math.min(CONCURRENCY, queue.length); i++) {
      loadNext();
    }
    
    return () => { isMounted = false; };
  }, []);

  const currentFrameRef = useRef(0);
  const targetFrameRef = useRef(0);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const scrollY = -rect.top;
      const maxScroll = rect.height - window.innerHeight;
      
      if (scrollY < 0) {
        targetFrameRef.current = 0;
      } else if (scrollY > maxScroll) {
        targetFrameRef.current = TOTAL_FRAMES - 1;
      } else {
        const fraction = scrollY / maxScroll;
        targetFrameRef.current = Math.min(TOTAL_FRAMES - 1, fraction * (TOTAL_FRAMES - 1));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    let animationFrameId: number;
    
    const renderLoop = () => {
      currentFrameRef.current += (targetFrameRef.current - currentFrameRef.current) * 0.08;
      
      const frameToDraw = Math.round(currentFrameRef.current);
      
      if (canvasRef.current) {
        const ctx = canvasRef.current.getContext('2d');
        if (ctx) {
          let drawIdx = frameToDraw;
          if (!loadedFramesRef.current[drawIdx]) {
            let offset = 1;
            while (offset < TOTAL_FRAMES) {
              if (loadedFramesRef.current[drawIdx - offset]) {
                drawIdx = drawIdx - offset;
                break;
              }
              if (loadedFramesRef.current[drawIdx + offset]) {
                drawIdx = drawIdx + offset;
                break;
              }
              offset++;
            }
          }
          
          const img = loadedFramesRef.current[drawIdx];
          if (img) {
            if (canvasRef.current.width !== img.width) {
               canvasRef.current.width = img.width;
               canvasRef.current.height = img.height;
            }
            ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
            ctx.drawImage(img, 0, 0);
            
            // Chroma key (green screen removal)
            const frame = ctx.getImageData(0, 0, canvasRef.current.width, canvasRef.current.height);
            const data = frame.data;
            const l = data.length;
            for (let i = 0; i < l; i += 4) {
              const r = data[i];
              const g = data[i + 1];
              const b = data[i + 2];
              
              if (g > 80 && g > r * 1.2 && g > b * 1.2) {
                 if (g > 110 && g > r * 1.4 && g > b * 1.4) {
                   data[i + 3] = 0;
                 } else {
                   const alpha = Math.max(0, 255 - (g - Math.max(r, b)) * 3);
                   data[i + 3] = Math.min(data[i + 3], alpha);
                 }
              }
            }
            ctx.putImageData(frame, 0, 0);
          }
        }
      }
      
      animationFrameId = requestAnimationFrame(renderLoop);
    };
    
    animationFrameId = requestAnimationFrame(renderLoop);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <section ref={containerRef} className="relative h-[480vh] w-full">
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
        {/* Background gradient for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-800 via-brand-bg to-brand-bg opacity-60 z-0 pointer-events-none"></div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row items-center justify-between h-full pt-20 md:pt-24 pointer-events-none">
          {/* Left Text */}
          <div className="w-full md:w-1/4 text-center md:text-left pointer-events-auto mt-4 md:mt-24 z-20">
            <h2 className="text-brand-gold text-2xl md:text-5xl font-cinzel font-light mb-1 md:mb-2 drop-shadow-md">25+</h2>
            <p className="text-xs md:text-xl tracking-[0.2em] font-light text-gray-300 uppercase leading-snug drop-shadow-md">
              YEARS OF<span className="md:hidden"> </span><br className="hidden md:block" />NURTURING<span className="md:hidden"> </span><br className="hidden md:block" />TALENT
            </p>
            <div className="w-8 h-[1px] bg-brand-gold mt-2 md:mt-4 mx-auto md:mx-0"></div>
          </div>

          {/* Center Image -> Canvas */}
          <div className="absolute md:relative inset-0 md:inset-auto md:w-2/4 h-full flex justify-center items-end pointer-events-auto z-10 overflow-hidden md:overflow-visible">
            <div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full bg-brand-gold/40 blur-[80px] md:blur-[120px] top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 mix-blend-screen pointer-events-none"></div>
            <div className="absolute w-[150px] h-[200px] md:w-[250px] md:h-[300px] rounded-full bg-[#ffeba6]/30 blur-[60px] md:blur-[90px] top-[35%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 mix-blend-screen pointer-events-none"></div>
            
            <div className="relative z-10 w-full h-[90%] md:h-[90%] flex items-end justify-center">
              <canvas 
                ref={canvasRef} 
                className="w-[500px] h-[750px] md:w-full md:h-full max-w-full object-contain object-bottom drop-shadow-2xl transition-opacity duration-1000 scale-[0.7] md:scale-100 -translate-y-[40px] md:translate-y-0 origin-bottom"
                style={{ 
                  maskImage: 'linear-gradient(to top, transparent 0%, black 15%)', 
                  WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 15%)',
                  opacity: isReady ? 1 : 0 
                }}
              />
              
              {!isReady && (
                <div className="absolute top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center p-4 bg-brand-bg/50 rounded-lg backdrop-blur-sm">
                  <div className="w-32 md:w-48 h-[2px] bg-gray-800 rounded-full overflow-hidden mb-3">
                    <div className="h-full bg-brand-gold transition-all duration-300 ease-out" style={{ width: `${progress}%` }}></div>
                  </div>
                  <span className="text-[8px] md:text-[10px] text-brand-gold font-serif tracking-[0.2em] uppercase">Loading Sequence {progress}%</span>
                </div>
              )}
            </div>
          </div>

          {/* Right Content */}
          <div className="w-full md:w-1/3 text-center md:text-left pointer-events-auto mt-auto mb-6 md:mt-24 md:mb-0 z-20 pb-2 md:pb-0">
            <h1 className="font-cinzel text-white tracking-widest mb-1 md:mb-2 leading-tight drop-shadow-lg"><span className="font-sans font-light text-2xl sm:text-3xl md:text-[48px]">RASIKAARPAN</span><br/><span className="lowercase text-brand-gold border-b-2 border-brand-gold/30 pb-1 md:pb-2 inline-block text-2xl sm:text-3xl md:text-[48px]">dance</span></h1>
            
            <p className="text-gray-200 mt-2 md:mt-8 mb-4 md:mb-10 leading-relaxed text-[10px] sm:text-sm lg:text-base font-light text-center md:text-left max-w-sm mx-auto md:max-w-none drop-shadow-md bg-black/20 md:bg-transparent rounded px-2 md:px-0 py-1 md:py-0 backdrop-blur-sm md:backdrop-blur-none">
              <span className="font-semibold text-white">Rooted in Tradition. Committed to Excellence.</span><br className="hidden md:block"/><br className="hidden md:block"/>
              <span className="hidden md:inline">Rasikaarpan Dance - Academy of Bharatanatyam is a premier dance institution dedicated to preserving the rich heritage of Indian classical dance while embracing the evolution of modern dance forms.</span>
            </p>
            
            <div className="flex justify-center md:justify-start gap-2 md:gap-4 flex-row w-full sm:w-auto px-4 md:px-0">
              <button 
                onClick={openTrial}
                className="flex-1 sm:flex-none bg-brand-gold text-black font-semibold px-2 py-2 md:px-6 md:py-3 rounded-sm text-[10px] md:text-sm hover:bg-brand-gold-dark transition-colors whitespace-nowrap"
              >
                BOOK A TRIAL
              </button>
              <button className="flex-1 sm:flex-none border border-brand-gold text-brand-gold font-semibold px-2 py-2 md:px-6 md:py-3 rounded-sm text-[10px] md:text-sm hover:bg-brand-gold/10 transition-colors whitespace-nowrap bg-black/30 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none">
                EXPLORE CLASSES
              </button>
            </div>
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
      <img src={image} alt={title} className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" />
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
            <DanceStyleCard key={idx} {...style} className={idx === 4 ? "lg:col-span-2" : ""} />
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
          <img src="https://i.pinimg.com/736x/51/e5/3f/51e53ff7f0187a281eb2c93d85cdfca7.jpg" alt="Guru" className="w-full h-full object-cover rounded-md" />
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
              <img src={img} alt="Highlight" className="w-full h-full object-cover hover:scale-105 transition-transform" />
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

const EventsTestimonialsLocations = () => (
  <section className="py-12 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
    
    {/* Upcoming Events */}
    <div>
      <h3 className="text-lg font-serif text-brand-gold tracking-widest mb-8 text-center md:text-left uppercase">UPCOMING EVENTS</h3>
      <div className="space-y-6">
        {[
          { date: 'JUN 15', title: 'Annual Arangetram Showcase', desc: 'A grand evening of classical excellence.' },
          { date: 'JUL 05', title: 'Folk Fusion Workshop', desc: 'Celebrate culture. Learn tradition.' },
          { date: 'AUG 10', title: 'Contemporary Masterclass', desc: 'Move beyond boundaries.' }
        ].map((event, i) => (
          <div key={i} className="flex gap-4">
            <div className="bg-brand-gold rounded-md flex flex-col items-center justify-center w-16 h-16 shrink-0 text-black">
              <span className="text-xs font-bold uppercase">{event.date.split(' ')[0]}</span>
              <span className="text-xl font-bold leading-none">{event.date.split(' ')[1]}</span>
            </div>
            <div>
              <h4 className="text-brand-gold font-serif text-lg">{event.title}</h4>
              <p className="text-xs text-gray-400 mb-1">{event.desc}</p>
              <button className="text-[10px] uppercase tracking-wider text-gray-300 hover:text-brand-gold flex items-center font-bold">
                VIEW DETAILS <ChevronRight size={12} className="ml-1" />
              </button>
            </div>
          </div>
        ))}
        <button className="w-full border border-brand-surface-light text-gray-300 text-xs font-semibold py-3 mt-4 hover:border-brand-gold hover:text-brand-gold transition-colors">
          VIEW ALL EVENTS
        </button>
      </div>
    </div>

    {/* Testimonials */}
    <div className="lg:border-x lg:border-y-0 border-y py-8 lg:py-0 border-brand-surface-light lg:px-8 flex flex-col justify-center items-center text-center">
      <h3 className="text-lg font-serif text-brand-gold tracking-widest mb-8 uppercase">WHAT OUR STUDENTS SAY</h3>
      <Quote className="text-brand-gold mb-6" size={32} />
      <p className="text-gray-300 font-light leading-relaxed mb-6 italic">
        "Rasikaarpan Dance is not just a dance class, it's a family. I've grown in confidence, discipline, and discovered my passion."
      </p>
      <div className="flex gap-1 mb-4 text-brand-gold">
        {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
      </div>
      <p className="text-sm font-medium text-white">— Ananya, Student</p>
      
      <div className="flex justify-center mt-8 gap-2">
        <div className="w-2 h-2 rounded-full bg-white"></div>
        <div className="w-2 h-2 rounded-full bg-gray-600"></div>
        <div className="w-2 h-2 rounded-full bg-gray-600"></div>
      </div>
    </div>

    {/* Locations */}
    <div className="md:pl-8">
      <h3 className="text-lg font-serif text-brand-gold tracking-widest mb-8 text-center md:text-left uppercase">CLASS LOCATIONS</h3>
      <div className="space-y-6">
        {[
          { city: 'Thanjavur', sub: '(Main Studio)', state: 'Tamil Nadu' },
          { city: 'Pattukkottai', sub: '', state: 'Tamil Nadu' },
          { city: 'Tiruvarur', sub: '', state: 'Tamil Nadu' }
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
       <EventsTestimonialsLocations />
    </div>
  );
}

