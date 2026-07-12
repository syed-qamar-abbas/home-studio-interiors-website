// Single source of truth for Home Studio Interiors content.
// Images currently reference the live media library; they'll be localized before deploy.

const IMG = '/images';

export const site = {
  name: 'Home Studio Interiors',
  shortName: 'Home Studio',
  tagline: 'Turning Plans into Places.',
  url: 'https://homestudiointeriors.pk',
  email: 'info@homestudiointeriors.pk',
  phone: '0339 2001959',
  phoneIntl: '+923392001959',
  whatsapp: '+923392001959',
  areaServed: ['Islamabad', 'Rawalpindi'],
  address: 'Islamabad Capital Territory, Pakistan',
  rating: { value: '4.95', count: '260' },
  socials: {
    facebook: 'https://facebook.com/',
    instagram: 'https://instagram.com/',
    linkedin: 'https://linkedin.com/',
  },
};

export const stats = [
  { value: '8+', label: 'Years of Craft' },
  { value: '2,488+', label: 'Homes Delivered' },
  { value: '95%', label: 'Client Satisfaction' },
  { value: '1 yr', label: 'Workmanship Warranty' },
];

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Services', href: '/services',
    children: [
      { label: 'Kitchens', href: '/services/kitchen' },
      { label: 'Wardrobes', href: '/services/wardrobe' },
      { label: 'Vanities', href: '/services/vanities' },
      { label: 'Media Walls', href: '/services/media-walls' },
      { label: 'Doors', href: '/services/doors' },
    ],
  },
  { label: 'Projects', href: '/projects' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export const services = [
  {
    slug: 'kitchen', title: 'Kitchens', tagline: 'The kitchen you deserve.',
    excerpt: 'Efficient layouts, premium surfaces and turnkey installation — kitchens engineered to work as beautifully as they look.',
    features: ['Efficient modular layouts', 'HPL / UV / Deco & quartz / granite', 'Task lighting & soft-close hardware'],
    image: '/images/services/kitchen/kitchen-1.webp',
  },
  {
    slug: 'wardrobe', title: 'Wardrobes', tagline: 'Where style lives.',
    excerpt: 'Sliding, hinged and walk-in systems planned to the millimetre, with smart storage and elegant finishes tailored to your life.',
    features: ['Smart storage planning', 'Premium boards & finishes', 'Sliding · hinged · walk-in'],
    image: '/images/services/wardrobe/wardrobe-1.webp',
  },
  {
    slug: 'vanities', title: 'Vanities', tagline: 'Your reflection, redefined.',
    excerpt: 'Moisture-resistant cabinetry with stone tops, integrated lighting and matching mirrors — built for humid spaces and daily ease.',
    features: ['Stone / quartz tops', 'Integrated mirror lighting', 'Easy-clean, moisture-resistant'],
    image: '/images/services/vanities/vanities-1.webp',
  },
  {
    slug: 'media-walls', title: 'Media Walls', tagline: 'The spotlight of your home.',
    excerpt: 'Statement TV walls with paneling and floating storage — cables hidden, ventilation planned, ambience layered in.',
    features: ['Wood slats & panel moulding', 'LED niches & backlighting', 'Cable-free, ventilated builds'],
    image: '/images/services/media-walls/media-walls-1.webp',
  },
  {
    slug: 'doors', title: 'Doors', tagline: 'A door beyond ordinary.',
    excerpt: 'Interior doors that complete the look and stand up to daily use — precise lines, durable cores and quality hardware.',
    features: ['Flush · groove · veneer · painted', 'Durable cores, true alignment', 'Minimalist hardware detail'],
    image: '/images/services/doors/doors-1.webp',
  },
];

// Per-service detail: long intro + gallery + materials
export const serviceDetail: Record<string, { intro: string; materials: string[]; gallery: string[] }> = {
  kitchen: {
    intro: 'Your kitchen is the hardest-working room in the home. We plan efficient work triangles, specify durable surfaces and deliver turnkey installation — so the space looks effortless and performs every single day.',
    materials: ['HPL, UV & Deco laminates', 'Quartz & granite worktops', 'Soft-close hinges & drawers', 'Task & under-cabinet lighting'],
    gallery: ['/images/services/kitchen/kitchen-1.webp', '/images/services/kitchen/kitchen-5.webp', '/images/services/kitchen/kitchen-6.webp', '/images/services/kitchen/kitchen-7.webp', '/images/services/kitchen/kitchen-8.webp', '/images/services/kitchen/kitchen-9.webp'],
  },
  wardrobe: {
    intro: 'From sliding and hinged to full walk-in dressing rooms, we plan storage to the millimetre — smart internals, elegant fronts and finishes that wear beautifully over years of daily use.',
    materials: ['Sliding · hinged · walk-in systems', 'Premium boards & veneers', 'Soft-close & push-to-open', 'Integrated wardrobe lighting'],
    gallery: ['/images/services/wardrobe/wardrobe-1.webp', '/images/services/wardrobe/wardrobe-2.webp', '/images/services/wardrobe/wardrobe-3.webp', '/images/services/wardrobe/wardrobe-4.webp', '/images/services/wardrobe/wardrobe-5.webp', '/images/services/wardrobe/wardrobe-6.webp'],
  },
  vanities: {
    intro: 'Built for humid spaces and everyday ease — moisture-resistant cabinetry, stone tops and integrated mirror lighting that make bathrooms feel considered, calm and easy to maintain.',
    materials: ['Moisture-resistant cores', 'Stone & quartz tops', 'Integrated mirror lighting', 'Easy-clean surfaces'],
    gallery: ['/images/services/vanities/vanities-1.webp', '/images/services/vanities/vanities-2.webp', '/images/services/vanities/vanities-3.webp', '/images/services/vanities/vanities-4.webp', '/images/services/vanities/vanities-5.webp', '/images/services/vanities/vanities-6.webp'],
  },
  'media-walls': {
    intro: 'A statement TV wall anchors the living room. We design paneling, floating storage and layered lighting with cables hidden and ventilation planned — a clean, cinematic focal point.',
    materials: ['Wood slats & panel moulding', 'LED niches & backlighting', 'Concealed cable management', 'Ventilated equipment bays'],
    gallery: ['/images/services/media-walls/media-walls-1.webp', '/images/services/media-walls/media-walls-2.webp', '/images/services/media-walls/media-walls-3.webp', '/images/services/media-walls/media-walls-4.webp', '/images/services/media-walls/media-walls-5.webp', '/images/services/media-walls/media-walls-6.webp'],
  },
  doors: {
    intro: 'Interior doors complete the look and stand up to daily use. Precise lines, durable cores and quality hardware — flush, grooved, veneered or painted to match your interior.',
    materials: ['Flush · groove · veneer · painted', 'Durable solid cores', 'True swing & alignment', 'Minimalist hardware'],
    gallery: ['/images/services/doors/doors-1.webp', '/images/services/doors/doors-2.webp', '/images/services/doors/doors-3.webp', '/images/services/doors/doors-4.webp', '/images/services/doors/doors-5.webp', '/images/services/doors/doors-6.webp'],
  },
};

// Tabbed "What We Do" showcase (matches live homepage service tabs)
export const serviceTabs = [
  {
    slug: 'kitchen', label: 'Kitchen', tabIcon: 'stove',
    eyebrow: 'The kitchen you deserve.',
    headA: 'Transform your kitchen into a ', headItalic: 'hardworking, elegant', headB: ' space.',
    text: 'We plan efficient layouts, specify premium materials, and deliver turnkey installation across Islamabad & Rawalpindi.',
    features: [
      { t: 'Efficient layouts', i: 'check' },
      { t: 'Premium materials (HPL/UV/Deco, quartz/granite)', i: 'layers' },
      { t: 'Task & ambient lighting', i: 'bulb' },
      { t: 'Soft-close hardware', i: 'sliders' },
    ],
    image: '/images/hero/kitchen.webp',
    cards: [{ label: 'Modern Kitchens', image: '/images/hero/kitchen3.webp' }, { label: 'Classic Kitchens', image: '/images/hero/kitchen2.webp' }],
  },
  {
    slug: 'wardrobe', label: 'Wardrobe', tabIcon: 'wardrobe',
    eyebrow: 'Where style lives.',
    headA: 'Wardrobes that are both functional and ', headItalic: 'beautifully styled', headB: '.',
    text: 'Smart storage solutions and elegant finishes, crafted to your lifestyle — from sliding fronts to full walk-in dressing rooms.',
    features: [
      { t: 'Smart storage planning', i: 'check' },
      { t: 'Premium boards & veneers', i: 'layers' },
      { t: 'Integrated wardrobe lighting', i: 'bulb' },
      { t: 'Sliding · hinged · walk-in', i: 'sliders' },
    ],
    image: '/images/services/wardrobe/wardrobe-2.webp',
    cards: [{ label: 'Sliding Wardrobes', image: '/images/services/wardrobe/wardrobe-3.webp' }, { label: 'Walk-in Wardrobes', image: '/images/services/wardrobe/wardrobe-4.webp' }],
  },
  {
    slug: 'doors', label: 'Doors', tabIcon: 'door',
    eyebrow: 'A door beyond ordinary.',
    headA: 'Interior doors that complete the ', headItalic: 'look', headB: ' and last.',
    text: 'Precise lines, durable cores and quality hardware — flush, grooved, veneered or painted to match your interior.',
    features: [
      { t: 'Flush · groove · veneer · painted', i: 'check' },
      { t: 'Durable solid cores', i: 'layers' },
      { t: 'Minimalist hardware', i: 'bulb' },
      { t: 'True swing & alignment', i: 'sliders' },
    ],
    image: '/images/services/doors/doors-2.webp',
    cards: [{ label: 'Flush Doors', image: '/images/services/doors/doors-3.webp' }, { label: 'Panel Doors', image: '/images/services/doors/doors-4.webp' }],
  },
  {
    slug: 'vanities', label: 'Vanities', tabIcon: 'mirror',
    eyebrow: 'Your reflection, redefined.',
    headA: 'Vanities built for humid spaces and everyday ', headItalic: 'ease', headB: '.',
    text: 'Moisture-resistant cabinetry with stone tops, integrated mirror lighting and easy-clean finishes — calm and considered.',
    features: [
      { t: 'Moisture-resistant cores', i: 'check' },
      { t: 'Stone & quartz tops', i: 'layers' },
      { t: 'Integrated mirror lighting', i: 'bulb' },
      { t: 'Easy-clean surfaces', i: 'sliders' },
    ],
    image: '/images/hero/vanity.webp',
    cards: [{ label: 'Modern Vanities', image: '/images/services/vanities/vanities-3.webp' }, { label: 'Classic Vanities', image: '/images/services/vanities/vanities-4.webp' }],
  },
  {
    slug: 'media-walls', label: 'Media Wall', tabIcon: 'tv',
    eyebrow: 'The spotlight of your home.',
    headA: 'Statement media walls that hide the ', headItalic: 'clutter', headB: '.',
    text: 'Paneling, floating storage and layered lighting with cables hidden and ventilation planned — a clean, cinematic focal point.',
    features: [
      { t: 'Wood slats & panel moulding', i: 'check' },
      { t: 'LED niches & backlighting', i: 'bulb' },
      { t: 'Concealed cable management', i: 'sliders' },
      { t: 'Ventilated equipment bays', i: 'layers' },
    ],
    image: '/images/hero/media2.webp',
    cards: [{ label: 'Slat Walls', image: '/images/hero/media.webp' }, { label: 'Panelled Walls', image: '/images/services/media-walls/media-walls-4.webp' }],
  },
];

// "What We Deliver" — matches the live homepage block
export const deliverables = [
  { title: 'Modular Kitchens', text: 'Efficient modular layouts, premium finishes, task lighting and soft-close hardware.', icon: 'gem' },
  { title: 'Interior Doors', text: 'Flush or grooved profiles with durable cores and minimalist hardware.', icon: 'key' },
  { title: 'Media Walls', text: 'Cable-free TV walls with paneling, floating storage and layered lighting.', icon: 'home' },
  { title: 'Bathroom Vanities', text: 'Moisture-resistant cabinetry with stone tops and integrated mirror lighting.', icon: 'compass' },
  { title: 'Custom Wardrobes', text: 'Sliding, hinged and walk-in systems planned to the millimetre.', icon: 'armchair' },
];

export const processSteps = [
  { no: '01', title: 'Consultation & Site Visit', text: 'We map your lifestyle, rooms and budget, then measure the space to begin a personalised plan for your home.' },
  { no: '02', title: 'Design & Planning', text: 'Layouts, mood boards and 3D interior visuals with material options — delivered with an itemised BOQ and schedule for sign-off.' },
  { no: '03', title: 'Execution', text: 'Our site team builds to approved drawings — civil, carpentry, finishes and lighting — with weekly updates and rigorous quality checks.' },
  { no: '04', title: 'Review & Handover', text: 'We snag, style and hand over your space, followed by warranty and aftercare so everything works beautifully.' },
];

export const differentiators = [
  { title: 'Creative & Functional Design', text: 'Rooms planned around real life.', icon: 'armchair' },
  { title: 'Eco-Friendly Materials', text: 'Low-VOC paints, moisture-resistant boards.', icon: 'leaf' },
  { title: 'Client Collaboration', text: 'Clear options, 3D visuals, weekly updates.', icon: 'users' },
  { title: 'Seamless Management', text: 'One team for design → build → handover.', icon: 'helmet' },
];

export const founder = {
  quote: 'We craft calm, functional interiors that mirror the people who live in them.',
  name: 'Hassan Nawaz',
  role: 'Co-Founder',
};

export const heroFeatures = [
  { title: 'Bespoke Designs', sub: 'Tailored to your vision', icon: 'compass' },
  { title: 'Premium Quality', sub: 'Finishes that last', icon: 'gem' },
  { title: 'Turnkey Solutions', sub: 'Hassle-free experience', icon: 'key' },
  { title: 'Functional Spaces', sub: 'Designed for real life', icon: 'home' },
];

export const testimonials = [
  { quote: 'Professional, creative and detail-oriented. Our kitchen makeover matched the 3D exactly and finished on time.', name: 'Ahmed Khan', place: 'DHA Phase 2' },
  { quote: 'From concept to handover, the process was smooth. Clean finishes, zero snags — highly recommended.', name: 'Sana & Bilal', place: 'G-13' },
  { quote: 'Transparent BOQ, weekly updates and neat execution. The media wall and doors look premium.', name: 'Usman Raza', place: 'Bahria Town Phase 8' },
  { quote: 'Storage planned to the millimetre. Sliding wardrobes and lighting transformed our apartment.', name: 'Aisha Malik', place: 'E-11' },
];

export const faqs = [
  { q: 'How much does full home interior design cost in Islamabad?', a: 'Costs vary by size, materials and scope. After a brief consultation we share a transparent, itemised BOQ and timeline so there are no surprises.' },
  { q: 'Do you provide 3D designs before execution?', a: 'Yes — 3D interior visualisation is part of our process, so you can approve layouts, finishes and lighting before any work begins.' },
  { q: 'Do you design and install kitchens and wardrobes?', a: 'Absolutely. We design, manufacture and install kitchens, wardrobes, vanities, media walls and doors to suit your storage and style needs.' },
  { q: 'How long does a project take?', a: 'A single-room refresh can take 2–4 weeks; full homes vary by scope. We commit to reliable timelines before we start.' },
  { q: 'Can you work with my existing furniture?', a: 'Yes — we can design around your current pieces or recommend new options within your budget.' },
];

// Curated project/gallery imagery from the existing library
export const featuredProjects = [
  { title: 'Elara Residence', tag: 'Full Home', image: `${IMG}/dark-kitchen.webp` },
  { title: 'Oslo Kitchen', tag: 'Kitchen', image: `${IMG}/kitchen-b.webp` },
  { title: 'Neom Living', tag: 'Living & Media', image: `${IMG}/media-a.webp` },
  { title: 'Oryn Suite', tag: 'Bedroom & Wardrobe', image: `${IMG}/bedroom-a.webp` },
  { title: 'Seoul Apartment', tag: 'Turnkey Fit-out', image: `${IMG}/living-a.webp` },
  { title: 'Aria Media Wall', tag: 'Media Wall', image: `${IMG}/kitchen-c.webp` },
];

export const heroImage = '/images/hero/statement.webp';
export const heroImageAlt = `${IMG}/dark-kitchen.webp`;
export const bandImage = '/images/hero/living.webp';
export const aboutImage = `${IMG}/feature-1.webp`;

// Full gallery pool for the Projects page
export const galleryImages = [
  'dark-kitchen', 'kitchen-a', 'kitchen-b', 'kitchen-c', 'kitchen-d',
  'wardrobe-fill-1', 'wardrobe-fill-2', 'wardrobe-fill-3', 'vanity-a', 'vanity-fill-1',
  'vanity-fill-2', 'media-a', 'media-fill-1', 'media-fill-2', 'door-fill-1',
  'door-fill-2', 'living-a', 'bedroom-a', 'feature-1', 'hero-2',
].map((n) => `${IMG}/${n}.webp`);
