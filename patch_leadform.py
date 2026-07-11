import re

with open('src/components/AstrologyLeadForm.tsx', 'r') as f:
    content = f.read()

# Update onSubmit to send to WhatsApp
whatsapp_submit = """  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      dob: formData.get('dob'),
      tob: formData.get('tob'),
      pob: formData.get('pob'),
      service: formData.get('service'),
    };
    
    const text = `Hi Astrologer Shrikant, I would like to book a consultation.\\n\\nName: ${data.name}\\nPhone: ${data.phone}\\nEmail: ${data.email}\\nDOB: ${data.dob}\\nTime of Birth: ${data.tob}\\nPlace of Birth: ${data.pob}\\nService: ${data.service}`;
    
    window.open(`https://wa.me/919115731105?text=${encodeURIComponent(text)}`, '_blank');
    onClose();
  };

  if (!isOpen) return null;"""

content = content.replace("  if (!isOpen) return null;", whatsapp_submit)

content = content.replace(
    '<form className="space-y-5" onSubmit={(e) => { e.preventDefault(); onClose(); }}>',
    '<form className="space-y-5" onSubmit={handleSubmit}>'
)

# Add name attributes to inputs
content = content.replace('type="text" \n                  required', 'type="text" \n                  name="name" \n                  required')
content = content.replace('type="tel" \n                  required', 'type="tel" \n                  name="phone" \n                  required')
content = content.replace('type="email" \n                required', 'type="email" \n                name="email" \n                required')
content = content.replace('type="date" \n                  className', 'type="date" \n                  name="dob" \n                  className')
content = content.replace('type="time" \n                  className', 'type="time" \n                  name="tob" \n                  className')
content = content.replace('placeholder="City, State, Country"\n              />', 'name="pob"\n                placeholder="City, State, Country"\n              />')
content = content.replace('defaultValue="" required className', 'name="service" defaultValue="" required className')

with open('src/components/AstrologyLeadForm.tsx', 'w') as f:
    f.write(content)
