import re

with open('src/pages/Astrology.tsx', 'r') as f:
    content = f.read()

replacements = {
    'bg-brand-bg': 'bg-white',
    'bg-brand-surface/50': 'bg-gray-50',
    'bg-brand-surface/30': 'bg-gray-50',
    'bg-brand-surface/80': 'bg-white/90',
    'bg-brand-surface': 'bg-white',
    'bg-brand-surface-light': 'bg-gray-200',
    'text-gray-200': 'text-gray-800',
    'text-white': 'text-gray-900',
    'text-gray-300': 'text-gray-700',
    'text-gray-400': 'text-gray-600',
    'border-white/5': 'border-gray-200',
    'border-white/10': 'border-gray-200',
    'border-brand-gold/20': 'border-yellow-500/30',
    'border-brand-gold/30': 'border-yellow-500/40',
    'text-brand-gold/80': 'text-yellow-600/80',
    'text-brand-gold': 'text-yellow-600',
    'bg-brand-gold/10': 'bg-yellow-500/10',
    'bg-brand-gold-dark': 'bg-yellow-600',
    'bg-brand-gold': 'bg-yellow-500',
    'border-brand-gold': 'border-yellow-500',
    'bg-black': 'bg-gray-50',
    'selection:bg-brand-gold': 'selection:bg-yellow-500',
    'from-brand-bg/80': 'from-white/80',
    'to-brand-bg': 'to-white',
    'bg-[url': 'opacity-20 bg-[url', # Make background image lighter
    'text-gray-500': 'text-gray-500', # leave alone
    'text-black': 'text-white' # for buttons
}

for old, new in replacements.items():
    content = content.replace(old, new)

with open('src/pages/Astrology.tsx', 'w') as f:
    f.write(content)

