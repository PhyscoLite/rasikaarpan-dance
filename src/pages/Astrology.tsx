import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Star, ShieldCheck, Clock, Sparkles, CheckCircle2, ChevronDown, ChevronUp, Sun, Moon, CalendarDays, Key, MapPin } from 'lucide-react';

const Astrology = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "Is my consultation confidential?",
      answer: "Yes. Every consultation is completely private and confidential."
    },
    {
      question: "What details are required?",
      answer: "Your Date of Birth, Time of Birth, and Place of Birth provide the most accurate analysis."
    },
    {
      question: "Can I ask specific questions?",
      answer: "Absolutely. You are welcome to ask questions related to career, marriage, relationships, finance, health, education, business, or any personal concern."
    },
    {
      question: "Are remedies compulsory?",
      answer: "No. Remedies are suggested as optional guidance based on your chart. The decision to follow them is entirely yours."
    },
    {
      question: "How long does a consultation take?",
      answer: "Typically between 30–60 minutes, depending on your questions and the depth of analysis."
    }
  ];

  const scrollToBooking = () => {
    window.open("https://wa.me/919115731105", "_blank");
  };

  return (
    <div className="bg-brand-bg min-h-screen text-gray-200 font-sans selection:bg-brand-gold selection:text-black">
      <Helmet>
        <title>Astrologer Shrikant | Trusted Astrology Consultations</title>
        <meta name="description" content="Unlock the Guidance Written in Your Stars. Trusted Astrology Consultations with Astrologer Shrikant." />
      </Helmet>

      {/* Header/Logo (Simple) */}
      <header className="py-6 px-4 md:px-12 border-b border-white/5 flex justify-center bg-brand-surface">
        <h1 className="text-2xl font-cinzel text-brand-gold tracking-widest text-center">
          ASTROLOGER SHRIKANT
        </h1>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1532968961962-810cb2552ce1?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-brand-bg/80 to-brand-bg"></div>
        
        <div className="max-w-4xl mx-auto relative z-10 text-center flex flex-col items-center">
          <span className="text-brand-gold tracking-[0.2em] text-sm md:text-base font-semibold uppercase mb-4 block">Unlock the Guidance Written in Your Stars</span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-tight">
            Trusted Astrology Consultations
          </h2>
          <p className="text-lg md:text-xl text-gray-300 font-light mb-8 max-w-2xl leading-relaxed">
            Empowering Your Life Through the Timeless Wisdom of Astrology, Numerology & Divine Guidance
          </p>
          <p className="text-base text-gray-400 mb-10 max-w-3xl leading-relaxed">
            Life often presents moments of uncertainty—whether it's your career, relationships, marriage, finances, health, or personal growth. During these moments, the right guidance can transform confusion into clarity.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button onClick={scrollToBooking} className="bg-brand-gold text-black font-semibold px-8 py-4 rounded-sm tracking-widest uppercase hover:bg-brand-gold-dark transition-colors flex items-center justify-center gap-2">
              <Star size={18} /> Book Consultation
            </button>
            <button onClick={scrollToBooking} className="border border-brand-gold text-brand-gold font-semibold px-8 py-4 rounded-sm tracking-widest uppercase hover:bg-brand-gold/10 transition-colors">
              Talk to Astrologer
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-brand-surface/50 border-t border-b border-white/5">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="relative">
              <div className="aspect-[4/5] rounded-t-full overflow-hidden border border-brand-gold/20 p-2">
                <img 
                  src="https://images.unsplash.com/photo-1606553898863-74ad496c5c7d?q=80&w=2070&auto=format&fit=crop" 
                  alt="Astrologer Shrikant" 
                  className="w-full h-full object-cover rounded-t-full rounded-b-md opacity-80"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-brand-surface border border-brand-gold/30 p-6 rounded-md shadow-2xl">
                <p className="text-4xl font-serif text-brand-gold mb-1">15+</p>
                <p className="text-xs uppercase tracking-widest text-gray-400">Years of<br/>Experience</p>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h3 className="text-brand-gold tracking-[0.2em] text-sm font-semibold uppercase mb-3">About Astrologer Shrikant</h3>
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">Meet Astrologer Shrikant</h2>
            <div className="space-y-4 text-gray-400 font-light leading-relaxed">
              <p>
                For more than 15 years, Astrologer Shrikant has dedicated his life to studying and practicing authentic Vedic astrological sciences to help people achieve clarity, success, and peace of mind.
              </p>
              <p>
                His approach combines traditional astrological wisdom with modern analytical techniques, enabling highly accurate predictions and meaningful guidance that clients can actually apply in their lives.
              </p>
              <p>
                Rather than simply predicting future events, every consultation focuses on helping you understand your strengths, recognize challenges before they arise, and make informed decisions that lead to long-term success.
              </p>
            </div>
            
            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="text-white font-medium mb-4">Trusted for guidance on:</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-brand-gold/80">
                <li className="flex items-center gap-2"><CheckCircle2 size={16} /> Career Growth</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={16} /> Marriage & Relationships</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={16} /> Business Success</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={16} /> Financial Stability</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={16} /> Health & Well-being</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={16} /> Education & Overseas</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={16} /> Family Matters</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={16} /> Spiritual Growth</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h3 className="text-brand-gold tracking-[0.2em] text-sm font-semibold uppercase mb-3">Why Choose Us</h3>
          <h2 className="text-3xl md:text-5xl font-serif text-white">Why Choose Astrologer Shrikant?</h2>
        </div>
        
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: <Clock className="text-brand-gold mb-4" size={32} />, title: "15+ Years of Experience", desc: "Over a decade of dedicated astrological practice helping clients from different backgrounds." },
            { icon: <Star className="text-brand-gold mb-4" size={32} />, title: "Accurate & Personalized Guidance", desc: "Every horoscope is carefully analyzed based on your unique birth details, ensuring personalized insights instead of generic predictions." },
            { icon: <ShieldCheck className="text-brand-gold mb-4" size={32} />, title: "Confidential Consultations", desc: "Your privacy is always respected. Every consultation remains completely confidential." },
            { icon: <Sparkles className="text-brand-gold mb-4" size={32} />, title: "Practical Remedies", desc: "Receive easy-to-follow remedies that are designed to support positive life changes and personal growth." },
            { icon: <Moon className="text-brand-gold mb-4" size={32} />, title: "Holistic Approach", desc: "Combining Astrology, Numerology, KP System, Naadi Astrology, Nakshatra Analysis, and Tarot for comprehensive guidance." },
            { icon: <Sun className="text-brand-gold mb-4" size={32} />, title: "Trusted by Thousands", desc: "Helping individuals and families make informed life decisions with confidence." }
          ].map((item, i) => (
            <div key={i} className="bg-brand-surface border border-white/5 p-8 rounded-sm hover:border-brand-gold/30 transition-colors">
              {item.icon}
              <h4 className="text-xl font-serif text-white mb-3">{item.title}</h4>
              <p className="text-gray-400 font-light text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-brand-surface/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-brand-gold tracking-[0.2em] text-sm font-semibold uppercase mb-3">Our Services</h3>
            <h2 className="text-3xl md:text-5xl font-serif text-white">Astrology Services</h2>
          </div>

          <div className="space-y-12">
            {[
              {
                title: "KP Astrology (Krishnamurti Paddhati)",
                desc: "KP Astrology is one of the most accurate predictive systems available today. Using advanced planetary analysis and precise event timing, this method helps answer important life questions with exceptional accuracy.",
                ideal: ["Career", "Marriage", "Property", "Job Change", "Foreign Settlement", "Business Decisions"]
              },
              {
                title: "Naadi Astrology",
                desc: "Naadi Astrology reveals deeper karmic influences and life patterns that shape your present experiences.",
                ideal: ["Life Purpose", "Past Karma", "Future Opportunities", "Spiritual Direction", "Major Life Events"]
              },
              {
                title: "Nakshatra Astrology",
                desc: "The Nakshatras offer profound insight into your personality, emotions, strengths, relationships, and destiny.",
                ideal: ["Hidden Talents", "Emotional Patterns", "Relationship Compatibility", "Personal Growth", "Life Path"]
              },
              {
                title: "Numerology",
                desc: "Numbers carry unique vibrational energies that influence your success and opportunities.",
                ideal: ["Name Correction", "Business Name", "Lucky Numbers", "Mobile Number Selection", "House Number", "Career Compatibility", "Personal Growth"]
              },
              {
                title: "Tarot Card Reading",
                desc: "Tarot provides intuitive guidance for present situations and helps you make confident decisions when facing uncertainty.",
                ideal: ["Love & Relationships", "Career Decisions", "Family Matters", "Emotional Healing", "Spiritual Guidance", "Personal Clarity"]
              }
            ].map((service, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-8 border-b border-white/5 pb-12 last:border-0 last:pb-0">
                <div className="md:w-1/2">
                  <h4 className="text-2xl font-serif text-brand-gold mb-4">{service.title}</h4>
                  <p className="text-gray-400 font-light leading-relaxed mb-6">{service.desc}</p>
                </div>
                <div className="md:w-1/2 bg-brand-surface border border-brand-surface-light p-6 rounded-sm">
                  <h5 className="text-white font-medium mb-4 uppercase tracking-widest text-xs">Ideal For:</h5>
                  <div className="flex flex-wrap gap-2">
                    {service.ideal.map((item, j) => (
                      <span key={j} className="bg-brand-bg text-gray-300 text-xs px-3 py-1.5 rounded-full border border-white/10">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Remedies */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          {/* Benefits */}
          <div>
            <h3 className="text-brand-gold tracking-[0.2em] text-sm font-semibold uppercase mb-3">Consultation Benefits</h3>
            <h2 className="text-3xl font-serif text-white mb-6">What You Will Receive</h2>
            <p className="text-gray-400 font-light mb-8">Every consultation includes:</p>
            <ul className="space-y-4">
              {[
                "Detailed Birth Chart Analysis",
                "Personalized Predictions",
                "Career Guidance",
                "Marriage & Relationship Analysis",
                "Financial Insights",
                "Health Guidance",
                "Business Consultation",
                "Personalized Remedies",
                "Question & Answer Session",
                "Complete Confidentiality"
              ].map((benefit, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300 font-light">
                  <CheckCircle2 className="text-brand-gold" size={20} />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Remedies */}
          <div className="bg-brand-surface p-8 md:p-10 border border-brand-gold/20 rounded-sm">
            <h3 className="text-brand-gold tracking-[0.2em] text-sm font-semibold uppercase mb-3">Remedies Section</h3>
            <h2 className="text-3xl font-serif text-white mb-6">Personalized Remedies That Create Positive Change</h2>
            <p className="text-gray-400 font-light mb-6 leading-relaxed">
              Astrology is most valuable when it offers practical guidance—not just predictions. Astrologer Shrikant provides personalized remedies based on your unique planetary combinations to help reduce obstacles and support positive transformation.
            </p>
            <p className="text-white font-medium mb-4">Recommendations may include:</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 text-sm text-brand-gold/80 mb-6">
              <li>• Gemstone Guidance</li>
              <li>• Mantra Recommendations</li>
              <li>• Spiritual Practices</li>
              <li>• Lifestyle Adjustments</li>
              <li>• Energy Balancing Techniques</li>
              <li>• Auspicious Dates & Timings</li>
              <li>• Personalized Ritual Guidance</li>
            </ul>
            <p className="text-xs text-gray-500 italic">
              Each recommendation is carefully selected according to your individual birth chart and life circumstances.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6 bg-brand-surface/50 border-t border-b border-white/5">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h3 className="text-brand-gold tracking-[0.2em] text-sm font-semibold uppercase mb-3">How It Works</h3>
          <h2 className="text-3xl md:text-5xl font-serif text-white">4 Steps to Clarity</h2>
        </div>

        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: <CalendarDays size={24}/>, step: "Step 1", title: "Book Your Consultation", desc: "Choose your preferred consultation time." },
            { icon: <MapPin size={24}/>, step: "Step 2", title: "Share Your Details", desc: "Provide your Date of Birth, Time of Birth, and Place of Birth." },
            { icon: <Star size={24}/>, step: "Step 3", title: "Horoscope Analysis", desc: "A detailed astrological analysis is performed using multiple systems." },
            { icon: <Key size={24}/>, step: "Step 4", title: "Receive Guidance", desc: "Get clear predictions, practical advice, and personalized remedies." },
          ].map((item, i) => (
            <div key={i} className="text-center relative">
              <div className="w-16 h-16 mx-auto bg-brand-surface border border-brand-gold/30 rounded-full flex items-center justify-center text-brand-gold mb-6 relative z-10">
                {item.icon}
              </div>
              {i !== 3 && <div className="hidden lg:block absolute top-8 left-[60%] w-full h-[1px] bg-brand-surface-light -z-0"></div>}
              <h4 className="text-brand-gold text-xs uppercase tracking-widest font-semibold mb-2">{item.step}</h4>
              <h5 className="text-white font-serif text-lg mb-3">{item.title}</h5>
              <p className="text-gray-400 font-light text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h3 className="text-brand-gold tracking-[0.2em] text-sm font-semibold uppercase mb-3">Testimonials</h3>
          <h2 className="text-3xl md:text-5xl font-serif text-white">What Our Clients Say</h2>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "https://res.cloudinary.com/dm3scoj2q/image/upload/v1783685531/WhatsApp_Image_2026-07-10_at_5.33.21_PM_sptmca.jpg",
            "https://res.cloudinary.com/dm3scoj2q/image/upload/v1783685529/WhatsApp_Image_2026-07-10_at_5.33.21_PM_1_trp5ip.jpg",
            "https://res.cloudinary.com/dm3scoj2q/image/upload/v1783685528/WhatsApp_Image_2026-07-10_at_5.33.22_PM_oa4qmv.jpg",
            "https://res.cloudinary.com/dm3scoj2q/image/upload/v1783685527/WhatsApp_Image_2026-07-10_at_5.33.22_PM_1_xy6a1p.jpg",
            "https://res.cloudinary.com/dm3scoj2q/image/upload/v1783685526/WhatsApp_Image_2026-07-10_at_5.33.23_PM_qiwzb9.jpg"
          ].map((imgSrc, i) => (
            <div key={i} className="bg-brand-surface border border-white/5 rounded-sm overflow-hidden flex flex-col items-center justify-center p-2 shadow-lg">
              <img src={imgSrc} alt={`Testimonial ${i + 1}`} className="w-full h-auto object-contain max-h-[600px]" />
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-brand-surface/30">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-brand-gold tracking-[0.2em] text-sm font-semibold uppercase mb-3">FAQ</h3>
            <h2 className="text-3xl md:text-5xl font-serif text-white">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-white/10 rounded-sm overflow-hidden bg-brand-surface">
                <button
                  className="w-full text-left px-6 py-4 flex items-center justify-between focus:outline-none"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-serif text-white text-lg">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="text-brand-gold flex-shrink-0" size={20} />
                  ) : (
                    <ChevronDown className="text-gray-400 flex-shrink-0" size={20} />
                  )}
                </button>
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    openFaq === index ? "max-h-40 pb-5 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-400 font-light">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 border-t border-brand-gold/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-surface/80"></div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">Your Future Begins with the Right Guidance</h2>
          <p className="text-gray-300 font-light mb-6 leading-relaxed">
            Every life has its challenges, opportunities, and turning points. Understanding your unique cosmic blueprint can help you approach these moments with greater clarity and confidence.
          </p>
          <p className="text-gray-400 font-light mb-10 leading-relaxed">
            Whether you're seeking answers about your career, relationships, finances, health, or life's purpose, Astrologer Shrikant offers personalized guidance rooted in years of experience and traditional astrological knowledge.
          </p>
          <button onClick={scrollToBooking} className="bg-brand-gold text-black font-semibold px-10 py-5 rounded-sm tracking-widest uppercase hover:bg-brand-gold-dark transition-colors inline-flex items-center justify-center gap-2 text-lg">
            Book Your Consultation
          </button>
        </div>
      </section>

      {/* Footer Quote */}
      <footer className="py-12 px-6 bg-black text-center border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <p className="text-brand-gold font-serif text-xl md:text-2xl italic leading-relaxed mb-6">
            "The stars incline, they do not bind. With the right knowledge and thoughtful guidance, you can navigate your destiny with confidence."
          </p>
          <p className="text-gray-500 text-sm tracking-widest uppercase">
            © {new Date().getFullYear()} Astrologer Shrikant. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Astrology;
