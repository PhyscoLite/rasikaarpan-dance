import re

with open('src/pages/Astrology.tsx', 'r') as f:
    content = f.read()

# 1. Add state for the lead form
content = content.replace(
    'const [openFaq, setOpenFaq] = useState<number | null>(null);',
    'const [openFaq, setOpenFaq] = useState<number | null>(null);\n  const [isLeadFormOpen, setIsLeadFormOpen] = useState(false);'
)

# 2. Update scrollToBooking to open the form
content = content.replace(
    '''  const scrollToBooking = () => {
    window.open("https://wa.me/919115731105", "_blank");
  };''',
    '''  const scrollToBooking = () => {
    setIsLeadFormOpen(true);
  };'''
)

# 3. Add AstrologyLeadForm import
content = content.replace(
    "import { Star, ShieldCheck, Clock, Sparkles, CheckCircle2, ChevronDown, ChevronUp, Sun, Moon, CalendarDays, Key, MapPin } from 'lucide-react';",
    "import { Star, ShieldCheck, Clock, Sparkles, CheckCircle2, ChevronDown, ChevronUp, Sun, Moon, CalendarDays, Key, MapPin, ShoppingBag, MessageCircle } from 'lucide-react';\nimport AstrologyLeadForm from '../components/AstrologyLeadForm';"
)

# 4. Insert AstrologyLeadForm at the end of the file
content = content.replace(
    '</footer>\n    </div>',
    '</footer>\n      <AstrologyLeadForm isOpen={isLeadFormOpen} onClose={() => setIsLeadFormOpen(false)} />\n    </div>'
)

# 5. Insert Products section before 'Why Choose Us'
products_section = """
      {/* Products Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h3 className="text-yellow-600 tracking-[0.2em] text-sm font-semibold uppercase mb-3">Our Products & Reports</h3>
          <h2 className="text-3xl md:text-5xl font-serif text-gray-900">Astrology Products</h2>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Yantra", price: "Starts at ₹101/-", desc: "Sacred geometrical diagrams to attract positive energy and remove obstacles." },
            { title: "Sigil", price: "Starts at ₹101/-", desc: "Custom designed energetic symbols to manifest specific intentions." },
            { title: "Name Numerology Correction Report", price: "₹2001/-", desc: "Detailed PDF report for name correction based on your numerology." },
            { title: "Numerology Report", price: "₹301/-", desc: "Comprehensive PDF report explaining your numbers and their impact." },
            { title: "Astrology Kundli Report", price: "₹1001/-", desc: "Detailed PDF Kundli report covering planetary positions and predictions." }
          ].map((product, i) => (
            <div key={i} className="bg-gray-50 border border-gray-200 p-8 rounded-sm hover:border-yellow-500/30 transition-colors flex flex-col h-full">
              <ShoppingBag className="text-yellow-600 mb-4" size={32} />
              <h4 className="text-xl font-serif text-gray-900 mb-2">{product.title}</h4>
              <p className="text-yellow-600 font-semibold mb-4">{product.price}</p>
              <p className="text-gray-600 font-light text-sm leading-relaxed mb-8 flex-grow">{product.desc}</p>
              <a 
                href={`https://wa.me/919115731105?text=${encodeURIComponent(`Hi Astrologer Shrikant, I would like to ask for details about the ${product.title}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-white border border-yellow-500 text-yellow-600 font-semibold tracking-wider py-3 rounded-sm hover:bg-yellow-50 transition-colors flex items-center justify-center gap-2 text-sm uppercase mt-auto"
              >
                Ask For Details <MessageCircle size={16} />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}"""

content = content.replace('{/* Why Choose Us */}', products_section)

with open('src/pages/Astrology.tsx', 'w') as f:
    f.write(content)
