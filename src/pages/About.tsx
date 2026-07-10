import React from 'react';
import { useTrial } from '../context/TrialContext';
import SEO from '../components/SEO';

const About = () => {
  const { openTrial } = useTrial();
  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      <SEO title="About Us" description="Learn about Rasikaarpan Dance Academy, our history, and our passionate instructors." />
      
      {/* Header Section */}
      <div className="text-center mb-16 md:mb-24">
        <h1 className="text-3xl md:text-5xl font-cinzel text-brand-gold tracking-widest mb-4">ABOUT RASIKAARPAN DANCE ACADEMY</h1>
        <p className="text-lg md:text-xl font-serif text-gray-300 italic">Where Tradition Meets Expression</p>
        <div className="flex items-center justify-center gap-4 mt-8">
          <div className="w-16 md:w-24 h-[1px] bg-brand-gold"></div>
          <div className="w-2 h-2 rotate-45 border border-brand-gold"></div>
          <div className="w-16 md:w-24 h-[1px] bg-brand-gold"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-start mb-20 md:mb-32">
        <div className="space-y-6 text-gray-300 font-light leading-relaxed text-sm md:text-base">
          <p>
            For over 25 years, Rasikaarpan Dance Academy has been dedicated to preserving the timeless beauty of Indian classical dance while inspiring students to explore diverse dance forms with confidence, discipline, and creativity.
          </p>
          <p>
            Founded by Shri Shrikant K. Dhabadgaonkar, an award-winning dancer, choreographer, and educator, the academy has become a respected institution known for excellence in Bharatanatyam, Kathak, Folk, Contemporary, Semi-Classical, Jazz, and Hip-Hop training. Every class reflects our commitment to artistic excellence, cultural values, and holistic development.
          </p>
          <p>
            At Rasikaarpan, dance is more than movement—it is a journey of self-expression, discipline, confidence, and lifelong learning.
          </p>
        </div>
        
        {/* Placeholder image related to the journey */}
        <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden border border-brand-surface-light group">
           <div className="absolute inset-0 bg-brand-gold/10 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500 z-10"></div>
           <img src="https://res.cloudinary.com/dm3scoj2q/image/upload/v1783582515/e5a0f9c1-444c-4279-adf3-d698c23d229e.png" alt="Dance performance" className="w-full h-full object-cover object-top scale-105 group-hover:scale-100 transition-transform duration-700 grayscale-[20%]" />
        </div>
      </div>

      {/* Our Journey & Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mb-20 md:mb-32 bg-brand-surface/30 p-8 md:p-12 rounded-lg border border-brand-surface-light">
        <div>
          <h2 className="text-2xl font-serif text-brand-gold mb-6 tracking-wide">Our Journey</h2>
          <div className="space-y-4 text-gray-300 font-light text-sm md:text-base leading-relaxed">
            <p>
              Established with a vision to nurture talent while preserving India's rich cultural heritage, Rasikaarpan Dance Academy has trained hundreds of students across multiple generations.
            </p>
            <p>
              From beginners taking their first dance steps to performers representing the academy on prestigious stages, our students continue to uphold the values of dedication, respect, and artistic excellence.
            </p>
            <p>
              Today, Rasikaarpan proudly serves students through its centres in Thanjavur, Pattukkottai, Tiruvarur, and continues to expand its reach through quality dance education.
            </p>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-serif text-brand-gold mb-6 tracking-wide">Our Vision</h2>
          <p className="text-gray-300 font-light text-sm md:text-base leading-relaxed mb-10">
            To preserve and promote the rich heritage of Indian dance while creating confident, disciplined, and versatile performers who carry our traditions into the future.
          </p>
          
          <h2 className="text-2xl font-serif text-brand-gold mb-6 tracking-wide">Our Mission</h2>
          <ul className="space-y-3 text-gray-300 font-light text-sm md:text-base">
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0 mt-2"></div>
              <span>Deliver high-quality dance education rooted in tradition.</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0 mt-2"></div>
              <span>Encourage creativity alongside technical excellence.</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0 mt-2"></div>
              <span>Build confidence, discipline, and cultural awareness.</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0 mt-2"></div>
              <span>Provide professional performance opportunities.</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0 mt-2"></div>
              <span>Inspire students of every age to discover the joy of dance.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Meet Our Founder */}
      <div className="mb-20 md:mb-32">
        <div className="flex items-center gap-4 mb-10">
          <div className="w-8 h-[1px] bg-brand-gold"></div>
          <h2 className="text-2xl font-serif text-brand-gold tracking-[0.15em] uppercase">Meet Our Founder</h2>
          <div className="w-8 h-[1px] bg-brand-gold"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start">
          <div className="w-full md:w-1/3 aspect-[3/4] shrink-0 rounded-lg overflow-hidden border-2 border-brand-gold/30 p-2 relative group">
            <img src="https://res.cloudinary.com/dm3scoj2q/image/upload/v1783509908/WhatsApp_Image_2026-07-02_at_5.34.29_PM_a5w1ag.jpg" alt="Shri Shrikant K. Dhabadgaonkar" className="w-full h-full object-cover object-top rounded-md group-hover:scale-105 transition-transform duration-700 grayscale-[30%] hover:grayscale-0" />
          </div>
          <div className="w-full md:w-2/3">
            <h3 className="text-3xl font-serif text-white mb-2">Shri Shrikant K. Dhabadgaonkar</h3>
            <p className="text-brand-gold tracking-widest text-sm uppercase mb-8">Founder & Artistic Director</p>
            
            <div className="space-y-6 text-gray-300 font-light leading-relaxed text-sm md:text-base">
              <p>
                Shrikant K. Dhabadgaonkar is an accomplished dancer, choreographer, and educator with more than two decades of experience in Indian performing arts. A Gold Medalist in Kathak, he combines classical mastery with professional training in Jazz and Contemporary dance to create performances that beautifully bridge tradition and modern expression.
              </p>
              <p>
                As the Founder and Artistic Director of Rasikaarpan Dance Academy, he has conceptualized and choreographed acclaimed productions including Baana Marathi Maticha and Lok Aakhyan Ramayan, earning recognition for his contribution to Indian dance and cultural theatre.
              </p>
              <p>
                His achievements include national awards in folk dance, choreography, and direction, along with recognition for nurturing future generations of dancers through education and mentorship.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* What We Teach */}
      <div className="mb-20 md:mb-32 text-center">
        <h2 className="text-2xl font-serif text-brand-gold tracking-[0.15em] uppercase mb-6">What We Teach</h2>
        <p className="text-gray-300 font-light mb-10 max-w-2xl mx-auto">
          At Rasikaarpan Dance Academy, students can receive professional training in:
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['Bharatanatyam', 'Kathak', 'Folk Dance', 'Semi-Classical', 'Contemporary', 'Jazz', 'Hip-Hop'].map((style, idx) => (
            <span key={idx} className="px-6 py-3 border border-brand-surface-light rounded-sm text-sm font-medium text-white hover:border-brand-gold hover:text-brand-gold transition-colors bg-brand-surface/30">
              {style}
            </span>
          ))}
        </div>

        <div className="bg-brand-surface/30 p-8 border border-brand-surface-light rounded-lg max-w-3xl mx-auto text-left">
          <h3 className="text-lg font-serif text-brand-gold mb-4 text-center">We also prepare students for:</h3>
          <ul className="space-y-4 text-gray-300 font-light text-sm md:text-base">
            <li className="flex items-center gap-4 justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0"></div>
              <span>Diploma Courses in Folk Dance (Affiliated with Suro Bharati)</span>
            </li>
            <li className="flex items-center gap-4 justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0"></div>
              <span>Kathak & Bharatanatyam Examinations conducted by Gandharva Vidyalaya</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Why Choose Us & Achievements */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20 md:mb-32">
        <div>
          <h2 className="text-2xl font-serif text-brand-gold tracking-[0.15em] uppercase mb-8">Why Choose Rasikaarpan?</h2>
          <div className="space-y-6">
            {[
              { title: '25+ Years of Excellence', desc: 'A trusted name in dance education with decades of teaching experience.' },
              { title: 'Expert Guidance', desc: 'Learn from experienced professionals committed to artistic excellence.' },
              { title: 'Individual Attention', desc: "Personalized training designed to suit every student's learning pace." },
              { title: 'Performance Opportunities', desc: 'Students regularly participate in stage performances, festivals, competitions, and cultural events.' },
              { title: 'Holistic Development', desc: 'We focus not only on dance technique but also on confidence, discipline, teamwork, fitness, and stage presence.' },
              { title: 'Inclusive Learning', desc: "Whether you're a child discovering dance, an adult learning for passion, or an aspiring professional, we welcome dancers of all ages and skill levels." },
            ].map((item, idx) => (
              <div key={idx}>
                <h4 className="text-white font-medium mb-1 text-sm md:text-base">{item.title}</h4>
                <p className="text-gray-400 font-light text-xs md:text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-serif text-brand-gold tracking-[0.15em] uppercase mb-8">Our Achievements</h2>
          <div className="bg-brand-surface/30 p-8 border border-brand-surface-light rounded-lg">
            <ul className="space-y-6 text-gray-300 font-light text-sm md:text-base">
              {[
                '500+ Students Trained',
                '100+ Stage Performances',
                '25+ Years of Dance Legacy',
                'Multiple National Awards & Recognitions',
                'Professional Choreography for Cultural Productions',
                'Dance Education for Children, Teens & Adults'
              ].map((achievement, idx) => (
                <li key={idx} className="flex items-center gap-4 border-b border-brand-surface-light pb-4 last:border-0 last:pb-0">
                  <div className="w-6 h-6 rounded-full bg-brand-gold/10 flex items-center justify-center shrink-0">
                     <div className="w-2 h-2 rounded-full bg-brand-gold"></div>
                  </div>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center py-16 md:py-24 border-t border-brand-surface-light relative">
        <div className="absolute inset-0 bg-brand-gold/5 opacity-50"></div>
        <div className="relative z-10">
          <h2 className="text-2xl md:text-4xl font-serif text-white mb-6">Join the Rasikaarpan Family</h2>
          <div className="max-w-2xl mx-auto space-y-6 text-gray-300 font-light text-sm md:text-base leading-relaxed mb-10">
            <p>
              Every dancer has a unique story. At Rasikaarpan Dance Academy, we provide the guidance, inspiration, and opportunities to help you discover yours.
            </p>
            <p>
              Whether you wish to learn Bharatanatyam, master Kathak, explore Folk traditions, or express yourself through contemporary styles, your journey begins here.
            </p>
            <p className="font-medium text-brand-gold italic mt-6 text-lg">
              Rooted in Tradition. Committed to Excellence.
            </p>
          </div>
          <button 
            onClick={openTrial}
            className="bg-brand-gold text-black font-semibold px-8 py-4 rounded-sm hover:bg-white transition-colors tracking-widest text-sm"
          >
            BOOK A TRIAL CLASS
          </button>
        </div>
      </div>

    </div>
  );
};

export default About;
