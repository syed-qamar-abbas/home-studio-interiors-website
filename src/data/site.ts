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
    image: '/images/services/kitchen-live/01-1-17.webp',
  },
  {
    slug: 'wardrobe', title: 'Wardrobes', tagline: 'Where style lives.',
    excerpt: 'Sliding, hinged and walk-in systems planned to the millimetre, with smart storage and elegant finishes tailored to your life.',
    features: ['Smart storage planning', 'Premium boards & finishes', 'Sliding · hinged · walk-in'],
    image: '/images/services/wardrobe-live/01-1-8.webp',
  },
  {
    slug: 'vanities', title: 'Vanities', tagline: 'Your reflection, redefined.',
    excerpt: 'Moisture-resistant cabinetry with stone tops, integrated lighting and matching mirrors — built for humid spaces and daily ease.',
    features: ['Stone / quartz tops', 'Integrated mirror lighting', 'Easy-clean, moisture-resistant'],
    image: '/images/services/vanities-live/01-3-1024x574.webp',
  },
  {
    slug: 'media-walls', title: 'Media Walls', tagline: 'The spotlight of your home.',
    excerpt: 'Statement TV walls with paneling and floating storage — cables hidden, ventilation planned, ambience layered in.',
    features: ['Wood slats & panel moulding', 'LED niches & backlighting', 'Cable-free, ventilated builds'],
    image: '/images/services/media-walls-live/01-photo-stylish-wallmounted-entertainment-1024x574.webp',
  },
  {
    slug: 'doors', title: 'Doors', tagline: 'A door beyond ordinary.',
    excerpt: 'Interior doors that complete the look and stand up to daily use — precise lines, durable cores and quality hardware.',
    features: ['Flush · groove · veneer · painted', 'Durable cores, true alignment', 'Minimalist hardware detail'],
    image: '/images/services/doors-live/01-coastal-interior-design-modern-entrance-hall-1-1024x574.webp',
  },
];

type ServiceCollection = {
  label: string;
  title: string;
  intro: string;
  images: { name: string; description: string; images: string[] }[];
};

type ServiceDetail = {
  intro: string;
  materials: string[];
  gallery: string[];
  collections?: ServiceCollection[];
};

// Per-service detail: long intro + gallery + materials
export const serviceDetail: Record<string, ServiceDetail> = {
  kitchen: {
    intro: 'Your kitchen is the hardest-working room in the home. We plan efficient work triangles, specify durable surfaces and deliver turnkey installation — so the space looks effortless and performs every single day.',
    materials: ['HPL, UV & Deco laminates', 'Quartz & granite worktops', 'Soft-close hinges & drawers', 'Task & under-cabinet lighting'],
    gallery: [
      '/images/services/kitchen-live/01-1-17.webp',
      '/images/services/kitchen-live/05-1-21.webp',
      '/images/services/kitchen-live/09-1-18.webp',
      '/images/services/kitchen-live/13-2-21.webp',
      '/images/services/kitchen-live/16-36.webp',
      '/images/services/kitchen-live/22-13.webp',
      '/images/services/kitchen-live/27-22.webp',
      '/images/services/kitchen-live/35-30.webp',
      '/images/services/kitchen-live/40-9.webp',
      '/images/services/kitchen-live/44-1-7.webp',
      '/images/services/kitchen-live/48-1-12.webp',
      '/images/services/kitchen-live/51-1-13.webp',
      '/images/services/kitchen-live/55-1-15.webp',
      '/images/services/kitchen-live/62-1-16.webp',
      '/images/services/kitchen-live/66-2-7.webp',
    ],
    collections: [
      {
        label: 'Modern kitchens',
        title: 'Clean lines, quiet luxury and high-function layouts.',
        intro: 'Modern kitchen designs from the live collection, shaped around minimal profiles, luminous surfaces, smart workflow and polished daily use.',
        images: [
          {
            name: 'Seoul',
            images: ['/images/services/kitchen-live/01-1-17.webp', '/images/services/kitchen-live/02-2-19.webp', '/images/services/kitchen-live/03-3-19.webp', '/images/services/kitchen-live/04-4-12.webp'],
            description: 'Inspired by the fusion of tradition and modernity, Seoul combines clean lines with rich textures. Its minimalist design and innovative features create a functional, yet elegant kitchen that embodies both style and practicality.',
          },
          {
            name: 'Refined Contemporary',
            images: ['/images/services/kitchen-live/05-1-21.webp', '/images/services/kitchen-live/06-4-14.webp', '/images/services/kitchen-live/07-2-24.webp', '/images/services/kitchen-live/08-3-24.webp'],
            description: 'This design embraces a refined contemporary theme, where soft matte finishes in muted grey tones are paired with subtle textural details, creating a quiet harmony against the luminous backdrop of marble.',
          },
          {
            name: 'Oslo',
            images: ['/images/services/kitchen-live/09-1-18.webp', '/images/services/kitchen-live/10-2-20.webp', '/images/services/kitchen-live/11-3-20.webp', '/images/services/kitchen-live/12-4-13.webp'],
            description: 'Inspired by the minimalist beauty of Scandinavian design, Oslo combines clean lines with functional elegance. Its simple, modern finishes create a serene and efficient space, perfect for contemporary kitchens.',
          },
          {
            name: 'Lira',
            images: ['/images/services/kitchen-live/13-2-21.webp', '/images/services/kitchen-live/14-3-21.webp', '/images/services/kitchen-live/15-Lira-1-scaled.webp'],
            description: 'Inspired by timeless elegance, Lira features soft curves and refined finishes. Its minimalist design creates a sleek and sophisticated kitchen, where beauty meets functionality in perfect harmony.',
          },
          {
            name: 'Elara',
            images: ['/images/services/kitchen-live/16-36.webp', '/images/services/kitchen-live/17-37.webp', '/images/services/kitchen-live/18-38.webp', '/images/services/kitchen-live/19-39.webp', '/images/services/kitchen-live/20-40.webp', '/images/services/kitchen-live/21-41.webp'],
            description: 'Inspired by celestial beauty, Elara features smooth lines and a soft, luminous finish. Its elegant design creates a serene atmosphere, making it the perfect choice for a modern kitchen with a touch of refinement.',
          },
          {
            name: 'Neom',
            images: ['/images/services/kitchen-live/22-13.webp', '/images/services/kitchen-live/23-14.webp', '/images/services/kitchen-live/24-15.webp', '/images/services/kitchen-live/25-16.webp', '/images/services/kitchen-live/26-17.webp'],
            description: 'A cutting-edge design that blends futuristic elements with sleek simplicity, Neom features clean, geometric lines and advanced materials. Its innovative layout and modern finishes create a stylish, high-tech kitchen for the contemporary home.',
          },
          {
            name: 'Eris',
            images: ['/images/services/kitchen-live/27-22.webp', '/images/services/kitchen-live/28-23.webp', '/images/services/kitchen-live/29-24.webp', '/images/services/kitchen-live/30-25.webp', '/images/services/kitchen-live/31-26.webp', '/images/services/kitchen-live/32-27.webp', '/images/services/kitchen-live/33-28.webp', '/images/services/kitchen-live/34-29.webp'],
            description: 'A blend of sleek modernity and subtle sophistication, Eris features sharp lines and refined finishes. Its minimalist design creates an effortlessly stylish kitchen that balances form with function.',
          },
          {
            name: 'Contrast',
            images: ['/images/services/kitchen-live/35-30.webp', '/images/services/kitchen-live/36-18.webp', '/images/services/kitchen-live/37-19.webp', '/images/services/kitchen-live/38-20.webp', '/images/services/kitchen-live/39-21.webp'],
            description: 'Contemporary design paired with a smooth countertop, elevated by rich contrasting colors that add depth and modern elegance to the kitchen.',
          },
          {
            name: 'Elva',
            images: ['/images/services/kitchen-live/40-9.webp', '/images/services/kitchen-live/41-10.webp', '/images/services/kitchen-live/42-11.webp', '/images/services/kitchen-live/43-12.webp'],
            description: 'A perfect fusion of style and practicality, Elva combines smooth lines with a modern aesthetic. Its clean design and high-quality finishes create a kitchen that is both visually striking and highly functional.',
          },
          {
            name: 'Miami',
            images: ['/images/services/kitchen-live/44-1-7.webp', '/images/services/kitchen-live/45-2-6.webp', '/images/services/kitchen-live/46-3-7.webp', '/images/services/kitchen-live/47-4-7.webp'],
            description: 'With vibrant energy and modern flair, Miami blends bold finishes with sleek design. Its open, airy layout captures the essence of contemporary living, creating a lively and stylish kitchen space.',
          },
        ],
      },
      {
        label: 'Classic kitchens',
        title: 'Panelled detail, warm materials and timeless character.',
        intro: 'Classic kitchen directions from the original page, rebuilt with a darker editorial presentation so the craftsmanship, cabinetry and material contrast feel more premium.',
        images: [
          {
            name: 'Modern Classic',
            images: ['/images/services/kitchen-live/48-1-12.webp', '/images/services/kitchen-live/49-2-14.webp', '/images/services/kitchen-live/50-3-14.webp'],
            description: 'This kitchen embodies a modern classic theme, with cabinetry crafted in soft matte finishes that echo the elegance of hand-painted wood. The smooth, understated panels and refined detailing lend a timeless character, balancing warmth with contemporary sophistication.',
          },
          {
            name: 'Bold Classic',
            images: ['/images/services/kitchen-live/51-1-13.webp', '/images/services/kitchen-live/52-2-15.webp', '/images/services/kitchen-live/53-3-15.webp', '/images/services/kitchen-live/54-4-9.webp'],
            description: 'This kitchen embodies a bold contemporary-classic theme, with cabinetry cloaked in deep matte black wood. The richly paneled surfaces evoke timeless craftsmanship, while the dark finish lends a dramatic elegance that contrasts beautifully with the marble countertops.',
          },
          {
            name: 'Navy Transitional',
            images: ['/images/services/kitchen-live/55-1-15.webp', '/images/services/kitchen-live/56-2-17.webp', '/images/services/kitchen-live/57-3-17.webp', '/images/services/kitchen-live/58-2-16.webp', '/images/services/kitchen-live/59-3-16.webp', '/images/services/kitchen-live/60-4-11.webp', '/images/services/kitchen-live/61-1-14.webp'],
            description: 'This kitchen embraces a transitional theme, with cabinetry crafted from painted wood in a crisp white offset by a bold navy centerpiece. The smooth finishes and paneled detailing blend classic craftsmanship with modern elegance, creating a timeless harmony of light and depth.',
          },
          {
            name: 'Oak Mediterranean',
            images: ['/images/services/kitchen-live/62-1-16.webp', '/images/services/kitchen-live/63-2-18.webp', '/images/services/kitchen-live/64-3-18.webp'],
            description: 'This kitchen embraces a rustic Mediterranean theme, with cabinetry fashioned from warm natural oak. The wood’s organic grain and earthy tone bring an authentic charm, harmonizing with the stone textures to create a timeless, grounded elegance.',
          },
          {
            name: 'Farmhouse White',
            images: ['/images/services/kitchen-live/65-1-8.webp'],
            description: 'This kitchen embraces a timeless farmhouse theme, where crisp white shaker-style cabinetry meets the warmth of natural wood surfaces. The smooth, painted finish contrasts beautifully with the organic grain of the countertops, creating a harmonious blend of refinement and rustic charm.',
          },
          {
            name: 'Sage Cottage',
            images: ['/images/services/kitchen-live/66-2-7.webp', '/images/services/kitchen-live/67-3-8.webp'],
            description: 'This kitchen reflects a charming cottage theme, with cabinetry crafted from painted wood in a soft sage green. The smooth matte finish and classic paneling bring a gentle warmth, blending rustic simplicity with a refreshing, modern touch.',
          },
        ],
      },
    ],
  },
  wardrobe: {
    intro: 'From sliding and hinged to full walk-in dressing rooms, we plan storage to the millimetre — smart internals, elegant fronts and finishes that wear beautifully over years of daily use.',
    materials: ['Sliding · hinged · walk-in systems', 'Premium boards & veneers', 'Soft-close & push-to-open', 'Integrated wardrobe lighting'],
    gallery: ['/images/services/wardrobe-live/01-1-8.webp', '/images/services/wardrobe-live/05-1-9.webp', '/images/services/wardrobe-live/09-photo-minimalist-wardrobe-with-sliding-doors-minimal-handles-scaled.webp', '/images/services/wardrobe-live/13-Gemini_Generated_Image_ig9wetig9wetig9w.webp', '/images/services/wardrobe-live/18-1-10.webp', '/images/services/wardrobe-live/22-1-11.webp'],
    collections: [
      {
        label: 'Wardrobe collection',
        title: 'Luxury behind every door.',
        intro: 'A seamless blend of elegance and organization for modern living, using the complete wardrobe image library from the live page.',
        images: [
          {
            name: 'Luxe',
            images: ['/images/services/wardrobe-live/01-1-8.webp', '/images/services/wardrobe-live/02-2-9.webp', '/images/services/wardrobe-live/03-3-9.webp', '/images/services/wardrobe-live/04-4-6.webp'],
            description: 'A statement of elegance and refinement, Luxe embodies premium craftsmanship with a sleek, polished finish.',
          },
          {
            name: 'Aspen',
            images: ['/images/services/wardrobe-live/05-1-9.webp', '/images/services/wardrobe-live/06-2-11.webp', '/images/services/wardrobe-live/07-3-11.webp', '/images/services/wardrobe-live/08-4-8.webp'],
            description: 'Evoking the serene beauty of alpine landscapes, Aspen combines rustic charm with contemporary flair. Its natural textures and calming tones create a peaceful and inviting wardrobe mood.',
          },
          {
            name: 'Vienna',
            images: ['/images/services/wardrobe-live/09-photo-minimalist-wardrobe-with-sliding-doors-minimal-handles-scaled.webp', '/images/services/wardrobe-live/10-3-10.webp', '/images/services/wardrobe-live/11-4-7.webp', '/images/services/wardrobe-live/12-5-4.webp'],
            description: 'Inspired by classical elegance, Vienna blends timeless charm with modern functionality. Its refined details and graceful aesthetics create a sophisticated yet inviting ambiance.',
          },
          {
            name: 'Urban Oak',
            images: ['/images/services/wardrobe-live/13-Gemini_Generated_Image_ig9wetig9wetig9w.webp', '/images/services/wardrobe-live/14-white-wardrobe-with-wooden-door-white-rug-with-wooden-frame-scaled.webp', '/images/services/wardrobe-live/15-1-7.webp', '/images/services/wardrobe-live/16-2-8.webp', '/images/services/wardrobe-live/17-3-8.webp'],
            description: 'A perfect blend of modern sophistication and natural warmth, Urban Oak brings the essence of city life with a touch of organic charm. Its sleek yet textured finish makes it ideal for contemporary interiors.',
          },
          {
            name: 'Savoy',
            images: ['/images/services/wardrobe-live/18-1-10.webp', '/images/services/wardrobe-live/19-2-12.webp', '/images/services/wardrobe-live/20-3-12.webp', '/images/services/wardrobe-live/21-room-with-closet-with-view-city-scaled.webp'],
            description: 'A symbol of refined luxury, Savoy exudes sophistication with elegant lines and premium finishes. Its sleek design is perfect for creating a statement in any modern space.',
          },
          {
            name: 'Paris',
            images: ['/images/services/wardrobe-live/22-1-11.webp', '/images/services/wardrobe-live/23-2-13.webp', '/images/services/wardrobe-live/24-3-13.webp', '/images/services/wardrobe-live/25-home-interior-photography-modern-living-room-design-contemporary-home-decor-stylish-furniture-ima-scaled.webp'],
            description: 'A tribute to the elegance of French design, Paris captures classic beauty with a modern twist. Its refined detailing and graceful lines bring timeless sophistication to any space.',
          },
        ],
      },
    ],
  },
  vanities: {
    intro: 'Built for humid spaces and everyday ease — moisture-resistant cabinetry, stone tops and integrated mirror lighting that make bathrooms feel considered, calm and easy to maintain.',
    materials: ['Moisture-resistant cores', 'Stone & quartz tops', 'Integrated mirror lighting', 'Easy-clean surfaces'],
    gallery: ['/images/services/vanities-live/01-3-1024x574.webp', '/images/services/vanities-live/02-7-1024x574.webp', '/images/services/vanities-live/03-4-1024x574.webp', '/images/services/vanities-live/04-5-1024x574.webp', '/images/services/vanities-live/05-6-1024x574.webp', '/images/services/vanities-live/06-modern-bathroom-vanity-with-elegant-mirror-design-1024x574.webp', '/images/services/vanities-live/07-8-1024x574.webp', '/images/services/vanities-live/08-2-1024x574.webp'],
    collections: [
      {
        label: 'Vanity collection',
        title: 'Elegant and functional vanity designs.',
        intro: 'A statement of luxury, crafted to reflect your style, using every vanity image and design name from the live page.',
        images: [
          {
            name: 'Regal',
            images: ['/images/services/vanities-live/01-3-1024x574.webp'],
            description: 'Embodying grandeur and sophistication, Regal features bold lines and luxurious finishes. Its majestic design exudes an air of royalty, creating a statement of elegance and refinement in any room.',
          },
          {
            name: 'Willow',
            images: ['/images/services/vanities-live/02-7-1024x574.webp'],
            description: 'Inspired by nature’s grace, Willow combines soft, flowing lines with a natural finish. Its light, airy feel and subtle textures create a calm and inviting atmosphere in any room.',
          },
          {
            name: 'Ambrosia',
            images: ['/images/services/vanities-live/03-4-1024x574.webp'],
            description: 'A symbol of luxury and elegance, Ambrosia offers a rich blend of intricate details and refined finishes. Its sophisticated design brings a sense of opulence and tranquility to any space.',
          },
          {
            name: 'Pearl',
            images: ['/images/services/vanities-live/04-5-1024x574.webp'],
            description: 'Exuding timeless elegance, Pearl showcases a lustrous finish that enhances any space. Its subtle, refined design captures the essence of understated luxury, creating a serene and sophisticated ambiance.',
          },
          {
            name: 'Maple',
            images: ['/images/services/vanities-live/05-6-1024x574.webp'],
            description: 'A perfect blend of natural beauty and modern design, Maple features warm, inviting tones and smooth textures. Its timeless appeal adds a touch of rustic charm while maintaining a contemporary elegance.',
          },
          {
            name: 'Celine',
            images: ['/images/services/vanities-live/06-modern-bathroom-vanity-with-elegant-mirror-design-1024x574.webp'],
            description: 'A timeless embodiment of chic elegance, Celine blends soft curves with sleek finishes. Its understated beauty and modern design create a refined, luxurious atmosphere in any space.',
          },
          {
            name: 'Prague',
            images: ['/images/services/vanities-live/07-8-1024x574.webp'],
            description: 'Inspired by the city’s blend of history and modernity, Prague combines classic charm with contemporary design. Its elegant lines and subtle details create a sophisticated yet inviting atmosphere.',
          },
          {
            name: 'Lisbon',
            images: ['/images/services/vanities-live/08-2-1024x574.webp'],
            description: 'With a blend of vibrant culture and understated elegance, Lisbon features clean lines and warm tones. Its timeless design evokes a sense of both sophistication and comfort, perfect for modern living spaces.',
          },
        ],
      },
    ],
  },
  'media-walls': {
    intro: 'A statement TV wall anchors the living room. We design paneling, floating storage and layered lighting with cables hidden and ventilation planned — a clean, cinematic focal point.',
    materials: ['Wood slats & panel moulding', 'LED niches & backlighting', 'Concealed cable management', 'Ventilated equipment bays'],
    gallery: ['/images/services/media-walls-live/01-photo-stylish-wallmounted-entertainment-1024x574.webp', '/images/services/media-walls-live/02-burnished-copper-tv-wall-panels-with-textured-designs-luxurious-copper-textured-tv-decor-ideas-1024x576.webp', '/images/services/media-walls-live/03-modern-living-room-interior-design-with-blue-walls-large-tv-1024x574.webp', '/images/services/media-walls-live/04-tv-is-shelf-with-shelf-it-1024x574.webp', '/images/services/media-walls-live/05-arafed-tv-wall-with-shelf-plant-vase-generative-ai-1024x574.webp', '/images/services/media-walls-live/06-4-1-1024x574.webp', '/images/services/media-walls-live/07-red-wall-with-white-frame-that-says-x-it-1024x574.webp', '/images/services/media-walls-live/08-black-white-room-with-tv-wall-shelf-with-tv-it-1024x1024.webp'],
    collections: [
      {
        label: 'Media wall collection',
        title: 'Your world, on display.',
        intro: 'A modern centerpiece that blends style, storage, and entertainment seamlessly, using every media wall image and concept from the live page.',
        images: [
          {
            name: 'Opus',
            images: ['/images/services/media-walls-live/01-photo-stylish-wallmounted-entertainment-1024x574.webp'],
            description: 'A masterpiece of design, Opus combines bold lines with subtle elegance. Its refined finish and timeless appeal create a sophisticated focal point, perfect for modern interiors that demand distinction.',
          },
          {
            name: 'Mist',
            images: ['/images/services/media-walls-live/02-burnished-copper-tv-wall-panels-with-textured-designs-luxurious-copper-textured-tv-decor-ideas-1024x576.webp'],
            description: 'Evoking the soft, ethereal quality of morning fog, Mist features gentle, muted tones and smooth textures. Its light, airy design brings a sense of calm and tranquility, creating a serene atmosphere.',
          },
          {
            name: 'Majesty',
            images: ['/images/services/media-walls-live/03-modern-living-room-interior-design-with-blue-walls-large-tv-1024x574.webp'],
            description: 'A true reflection of grandeur, Majesty combines bold elegance with refined details. Its regal design and luxurious finishes create an atmosphere of opulence, making it a striking centerpiece in any room.',
          },
          {
            name: 'Sierra',
            images: ['/images/services/media-walls-live/04-tv-is-shelf-with-shelf-it-1024x574.webp'],
            description: 'Inspired by rugged mountain landscapes, Sierra blends earthy tones with strong, natural textures. Its sturdy yet elegant design brings a sense of adventure and warmth, creating a grounded, inviting atmosphere.',
          },
          {
            name: 'Pulse',
            images: ['/images/services/media-walls-live/05-arafed-tv-wall-with-shelf-plant-vase-generative-ai-1024x574.webp'],
            description: 'Dynamic and energetic, Pulse combines sleek, modern lines with vibrant finishes. Its bold design captures movement and vitality, making it the perfect choice for contemporary spaces that demand attention.',
          },
          {
            name: 'Vivid',
            images: ['/images/services/media-walls-live/06-4-1-1024x574.webp'],
            description: 'Bold and striking, Vivid features bright, eye-catching tones and sharp, clean lines. Its energetic design brings a lively, dynamic atmosphere, making it a perfect statement piece for modern interiors.',
          },
          {
            name: 'Elite',
            images: ['/images/services/media-walls-live/07-red-wall-with-white-frame-that-says-x-it-1024x574.webp'],
            description: 'Embodying unparalleled sophistication, Elite features sleek lines and premium finishes. Its refined design and luxurious materials create a sense of exclusivity, offering a truly distinguished look for any space.',
          },
          {
            name: 'Elysian',
            images: ['/images/services/media-walls-live/08-black-white-room-with-tv-wall-shelf-with-tv-it-1024x1024.webp'],
            description: 'A perfect blend of luxury and serenity, Elysian features soft, flowing lines and exquisite detailing. Its ethereal design and elegant finish create a peaceful, refined atmosphere, making any space feel divine.',
          },
        ],
      },
    ],
  },
  doors: {
    intro: 'Interior doors complete the look and stand up to daily use. Precise lines, durable cores and quality hardware — flush, grooved, veneered or painted to match your interior.',
    materials: ['Flush · groove · veneer · painted', 'Durable solid cores', 'True swing & alignment', 'Minimalist hardware'],
    gallery: ['/images/services/doors-live/01-coastal-interior-design-modern-entrance-hall-1-1024x574.webp', '/images/services/doors-live/02-hotel-room-with-wooden-doors-1024x574.webp', '/images/services/doors-live/03-closed-office-door-beautiful-brown-building-clean-classic-architecture-background-1-scaled.webp', '/images/services/doors-live/04-ai-generated-modern-styled-entryway-2-scaled.webp', '/images/services/doors-live/05-modern-entranceway-with-furniture-home-decor-1-scaled.webp', '/images/services/doors-live/06-home-entranceway-with-furniture-modern-decor-2-scaled.webp', '/images/services/doors-live/07-BRISTOL-door-image.webp', '/images/services/doors-live/08-double-central-door-glass-panels-white-colonial-lampposts-4-scaled.webp'],
    collections: [
      {
        label: 'Door collection',
        title: 'The doors that define your home.',
        intro: 'Blending durability with design to create lasting impressions every day, using every door image and concept from the live page.',
        images: [
          {
            name: 'Oakcrest',
            images: ['/images/services/doors-live/01-coastal-interior-design-modern-entrance-hall-1-1024x574.webp'],
            description: 'A fusion of rustic charm and modern elegance, Oakcrest showcases rich wood tones and clean lines. Its natural finish and sturdy design bring warmth and timeless beauty to any interior.',
          },
          {
            name: 'Palazzo',
            images: ['/images/services/doors-live/02-hotel-room-with-wooden-doors-1024x574.webp'],
            description: 'Evoking the grandeur of Italian architecture, Palazzo combines opulence with timeless design. Its intricate detailing and luxurious finish create an atmosphere of refined elegance and stately beauty.',
          },
          {
            name: 'Forestgate',
            images: ['/images/services/doors-live/03-closed-office-door-beautiful-brown-building-clean-classic-architecture-background-1-scaled.webp'],
            description: 'A tribute to nature’s serene beauty, Forestgate combines rich wood tones with soft textures. Its earthy design evokes the calmness of a forest, creating a peaceful and welcoming environment.',
          },
          {
            name: 'Ironbark',
            images: ['/images/services/doors-live/04-ai-generated-modern-styled-entryway-2-scaled.webp'],
            description: 'Strong and sturdy, Ironbark combines industrial appeal with natural warmth. Its deep, textured finish evokes resilience and sophistication, adding a bold yet refined character to any space.',
          },
          {
            name: 'Opaloak',
            images: ['/images/services/doors-live/05-modern-entranceway-with-furniture-home-decor-1-scaled.webp'],
            description: 'A harmonious blend of modern elegance and natural beauty, Opaloak features soft, opalescent hues with the warmth of oak. Its smooth finish and subtle shine create a sophisticated, serene atmosphere.',
          },
          {
            name: 'Tuscany',
            images: ['/images/services/doors-live/06-home-entranceway-with-furniture-modern-decor-2-scaled.webp'],
            description: 'Inspired by the rustic beauty of Italian landscapes, Tuscany features earthy tones and classic details. Its warm, inviting design creates a cozy yet sophisticated atmosphere, perfect for any space.',
          },
          {
            name: 'Bristol',
            images: ['/images/services/doors-live/07-BRISTOL-door-image.webp'],
            description: 'With a blend of classic design and contemporary style, Bristol offers sleek lines and refined details. Its versatile finish adds both elegance and warmth, making it a perfect fit for any modern space.',
          },
          {
            name: 'Snowfall',
            images: ['/images/services/doors-live/08-double-central-door-glass-panels-white-colonial-lampposts-4-scaled.webp'],
            description: 'Capturing the purity and calm of a winter landscape, Snowfall features soft, frosted finishes and gentle textures. Its crisp, clean design brings a serene and tranquil ambiance to any room.',
          },
        ],
      },
    ],
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
    image: '/images/services/kitchen-live/01-1-17.webp',
    cards: [{ label: 'Modern Kitchens', image: '/images/services/kitchen-live/09-1-18.webp' }, { label: 'Classic Kitchens', image: '/images/services/kitchen-live/51-1-13.webp' }],
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
    image: '/images/services/wardrobe-live/01-1-8.webp',
    cards: [{ label: 'Sliding Wardrobes', image: '/images/services/wardrobe-live/09-photo-minimalist-wardrobe-with-sliding-doors-minimal-handles-scaled.webp' }, { label: 'Walk-in Wardrobes', image: '/images/services/wardrobe-live/18-1-10.webp' }],
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
    image: '/images/services/doors-live/01-coastal-interior-design-modern-entrance-hall-1-1024x574.webp',
    cards: [{ label: 'Flush Doors', image: '/images/services/doors-live/04-ai-generated-modern-styled-entryway-2-scaled.webp' }, { label: 'Panel Doors', image: '/images/services/doors-live/07-BRISTOL-door-image.webp' }],
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
    image: '/images/services/vanities-live/01-3-1024x574.webp',
    cards: [{ label: 'Modern Vanities', image: '/images/services/vanities-live/06-modern-bathroom-vanity-with-elegant-mirror-design-1024x574.webp' }, { label: 'Classic Vanities', image: '/images/services/vanities-live/04-5-1024x574.webp' }],
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
    image: '/images/services/media-walls-live/01-photo-stylish-wallmounted-entertainment-1024x574.webp',
    cards: [{ label: 'Slat Walls', image: '/images/services/media-walls-live/02-burnished-copper-tv-wall-panels-with-textured-designs-luxurious-copper-textured-tv-decor-ideas-1024x576.webp' }, { label: 'Panelled Walls', image: '/images/services/media-walls-live/08-black-white-room-with-tv-wall-shelf-with-tv-it-1024x1024.webp' }],
  },
];

// "What We Deliver" — matches the live homepage block
export const deliverables = [
  {
    slug: 'kitchen',
    title: 'Kitchen',
    text: 'Efficient modular layouts, premium finishes, task lighting and soft-close hardware.',
    icon: 'gem',
    images: ['/images/services/kitchen-live/16-36.webp', '/images/services/kitchen-live/09-1-18.webp', '/images/services/kitchen-live/51-1-13.webp'],
  },
  {
    slug: 'doors',
    title: 'Doors',
    text: 'Flush or grooved profiles with durable cores and minimalist hardware.',
    icon: 'key',
    images: ['/images/services/doors-live/01-coastal-interior-design-modern-entrance-hall-1-1024x574.webp', '/images/services/doors-live/04-ai-generated-modern-styled-entryway-2-scaled.webp', '/images/services/doors-live/07-BRISTOL-door-image.webp'],
  },
  {
    slug: 'media-walls',
    title: 'Media Walls',
    text: 'Cable-free TV walls with paneling, floating storage and layered lighting.',
    icon: 'home',
    images: ['/images/services/media-walls-live/01-photo-stylish-wallmounted-entertainment-1024x574.webp', '/images/services/media-walls-live/03-modern-living-room-interior-design-with-blue-walls-large-tv-1024x574.webp', '/images/services/media-walls-live/08-black-white-room-with-tv-wall-shelf-with-tv-it-1024x1024.webp'],
  },
  {
    slug: 'vanities',
    title: 'Vanities',
    text: 'Moisture-resistant cabinetry with stone tops and integrated mirror lighting.',
    icon: 'compass',
    images: ['/images/services/vanities-live/01-3-1024x574.webp', '/images/services/vanities-live/04-5-1024x574.webp', '/images/services/vanities-live/08-2-1024x574.webp'],
  },
  {
    slug: 'wardrobe',
    title: 'Wardrobe',
    text: 'Sliding, hinged and walk-in systems planned to the millimetre.',
    icon: 'armchair',
    images: ['/images/services/wardrobe-live/01-1-8.webp', '/images/services/wardrobe-live/13-Gemini_Generated_Image_ig9wetig9wetig9w.webp', '/images/services/wardrobe-live/22-1-11.webp'],
  },
];

export const signatureCollections = [
  {
    service: 'Kitchen',
    name: 'Oslo',
    href: '/services/kitchen',
    image: '/images/services/kitchen-live/09-1-18.webp',
    text: 'Scandinavian restraint, warm neutrals and clean functional planning.',
  },
  {
    service: 'Kitchen',
    name: 'Lira',
    href: '/services/kitchen',
    image: '/images/services/kitchen-live/13-2-21.webp',
    text: 'Soft curves and refined finishes for a sleek everyday kitchen.',
  },
  {
    service: 'Wardrobe',
    name: 'Luxe',
    href: '/services/wardrobe',
    image: '/images/services/wardrobe-live/01-1-8.webp',
    text: 'Premium wardrobe craftsmanship with polished, quiet luxury.',
  },
  {
    service: 'Vanity',
    name: 'Regal',
    href: '/services/vanities',
    image: '/images/services/vanities-live/01-3-1024x574.webp',
    text: 'A bold vanity statement with grandeur, symmetry and refined detail.',
  },
  {
    service: 'Media Wall',
    name: 'Opus',
    href: '/services/media-walls',
    image: '/images/services/media-walls-live/01-photo-stylish-wallmounted-entertainment-1024x574.webp',
    text: 'A cinematic focal point shaped with bold lines and hidden function.',
  },
  {
    service: 'Door',
    name: 'Oakcrest',
    href: '/services/doors',
    image: '/images/services/doors-live/01-coastal-interior-design-modern-entrance-hall-1-1024x574.webp',
    text: 'Rich wood warmth and modern linework for a memorable entrance.',
  },
];

export const materialHighlights = [
  { title: 'Matte Laminates', text: 'Soft-touch HPL, UV and Deco finishes for durable daily use.' },
  { title: 'Natural Oak', text: 'Warm grains for kitchens, wardrobes, doors and media details.' },
  { title: 'Quartz & Stone', text: 'Long-wearing worktops and vanity surfaces with elegant veining.' },
  { title: 'Warm LED Lighting', text: 'Task, niche and ambient lighting planned into the build.' },
  { title: 'Soft-Close Hardware', text: 'Hinges, runners and mechanisms that make daily use feel refined.' },
  { title: 'Moisture-Resistant Boards', text: 'Practical specification for vanities, kitchens and humid zones.' },
];

export const designPackages = [
  { title: 'Design Consultation', text: 'Site visit, measurements, design direction and a clear next-step plan.', cta: 'Book a consultation' },
  { title: 'Single Room Design', text: 'Concept, 3D visuals, material direction and execution guidance for one focused space.', cta: 'Plan one room' },
  { title: 'Kitchen / Wardrobe Build', text: 'Custom cabinetry, materials, fabrication and turnkey installation for high-use zones.', cta: 'Discuss build' },
  { title: 'Full Home Turnkey', text: 'One accountable team for design, BOQ, materials, site execution and handover.', cta: 'Start full home' },
];

export const areasServed = ['Islamabad', 'Rawalpindi', 'DHA', 'Bahria Town', 'Gulberg Greens', 'E-11', 'G-13', 'F Sectors', 'B-17', 'PWD'];

export const projectPortfolio = [
  { title: 'Oslo Kitchen', service: 'Kitchen', image: '/images/services/kitchen-live/09-1-18.webp' },
  { title: 'Lira Kitchen', service: 'Kitchen', image: '/images/services/kitchen-live/13-2-21.webp' },
  { title: 'Bold Classic Kitchen', service: 'Kitchen', image: '/images/services/kitchen-live/51-1-13.webp' },
  { title: 'Luxe Wardrobe', service: 'Wardrobe', image: '/images/services/wardrobe-live/01-1-8.webp' },
  { title: 'Savoy Wardrobe', service: 'Wardrobe', image: '/images/services/wardrobe-live/18-1-10.webp' },
  { title: 'Regal Vanity', service: 'Vanity', image: '/images/services/vanities-live/01-3-1024x574.webp' },
  { title: 'Celine Vanity', service: 'Vanity', image: '/images/services/vanities-live/06-modern-bathroom-vanity-with-elegant-mirror-design-1024x574.webp' },
  { title: 'Opus Media Wall', service: 'Media Wall', image: '/images/services/media-walls-live/01-photo-stylish-wallmounted-entertainment-1024x574.webp' },
  { title: 'Majesty Media Wall', service: 'Media Wall', image: '/images/services/media-walls-live/03-modern-living-room-interior-design-with-blue-walls-large-tv-1024x574.webp' },
  { title: 'Oakcrest Door', service: 'Door', image: '/images/services/doors-live/01-coastal-interior-design-modern-entrance-hall-1-1024x574.webp' },
  { title: 'Bristol Door', service: 'Door', image: '/images/services/doors-live/07-BRISTOL-door-image.webp' },
  { title: 'Snowfall Door', service: 'Door', image: '/images/services/doors-live/08-double-central-door-glass-panels-white-colonial-lampposts-4-scaled.webp' },
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

export const heroImage = '/images/hero/orange-stair-lounge.webp';
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
