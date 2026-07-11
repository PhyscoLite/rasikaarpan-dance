import re

with open('src/pages/Astrology.tsx', 'r') as f:
    content = f.read()

# Add hover effects to buttons
content = content.replace(
    'hover:bg-yellow-600 transition-colors',
    'hover:bg-yellow-600 hover:-translate-y-1 hover:shadow-lg transition-all duration-300'
)

content = content.replace(
    'hover:bg-yellow-500/10 transition-colors',
    'hover:bg-yellow-500/10 hover:-translate-y-1 hover:shadow-lg transition-all duration-300'
)

# Add hover to cards in Why Choose Us
content = content.replace(
    'className="bg-white border border-gray-200 p-8 rounded-sm hover:border-yellow-500/30 transition-colors"',
    'className="bg-white border border-gray-200 p-8 rounded-sm hover:border-yellow-500/40 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"'
)

# Add hover to services
content = content.replace(
    'bg-white border border-gray-200 p-6 rounded-sm"',
    'bg-white border border-gray-200 p-6 rounded-sm hover:shadow-md hover:border-yellow-500/30 transition-all duration-300"'
)

# Add hover to products
content = content.replace(
    'hover:border-yellow-500/30 transition-colors flex flex-col h-full',
    'hover:border-yellow-500/40 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col h-full group'
)

# Products ask for details button
content = content.replace(
    'hover:bg-yellow-50 transition-colors flex items-center justify-center gap-2 text-sm uppercase mt-auto',
    'hover:bg-yellow-50 hover:shadow-md transition-all duration-300 flex items-center justify-center gap-2 text-sm uppercase mt-auto group-hover:bg-yellow-500 group-hover:text-white'
)

# Add hover to Testimonials
content = content.replace(
    'className="bg-white border border-gray-200 rounded-sm overflow-hidden flex flex-col items-center justify-center p-2 shadow-lg"',
    'className="bg-white border border-gray-200 rounded-sm overflow-hidden flex flex-col items-center justify-center p-2 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"'
)

# FAQ buttons
content = content.replace(
    'className="border border-gray-200 rounded-sm overflow-hidden bg-white"',
    'className="border border-gray-200 rounded-sm overflow-hidden bg-white hover:border-yellow-500/30 transition-colors"'
)

with open('src/pages/Astrology.tsx', 'w') as f:
    f.write(content)

with open('src/components/AstrologyLeadForm.tsx', 'r') as f:
    content = f.read()

content = content.replace(
    'hover:bg-yellow-600 transition-colors',
    'hover:bg-yellow-600 hover:-translate-y-1 hover:shadow-lg transition-all duration-300'
)

with open('src/components/AstrologyLeadForm.tsx', 'w') as f:
    f.write(content)

