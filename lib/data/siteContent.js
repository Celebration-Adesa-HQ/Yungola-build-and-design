export const navigation = {
  logo: "YUNGOLA",
  tagline: "Build and Design",
  navLinks: [
    { href: "/", label: "HOME" },
    { href: "/about", label: "ABOUT" },
    {
      href: "/showroom",
      label: "SERVICES",
      hasDropdown: false,
      dropdownItems: [
        { href: "/gallery/3d-design", label: "3D DESIGN" },
        { href: "/gallery/construction", label: "CONSTRUCTION" },
        { href: "/gallery/drawing", label: "DRAWING" },
      ],
    },
    {
      href: "/gallery",
      label: "PROJECTS",
      hasDropdown: false,
    },
    { href: "/contact", label: "CONTACT" },
  ],
  footer: {
    aboutText: "Cinematic Architectural Design. Building the exceptional, designing your future.",
    officeHours: "Mon – Fri: 8:00 AM – 6:00 PM (WAT)",
    address: "Lekki Phase 1, Lagos, Nigeria",
    phone: "+234 800 YUNGOLA (+234 800 000 0000)",
    phoneHref: "tel:+2348000000000",
    email: "hello@yungolabuildanddesign.com",
    emailHref: "mailto:hello@yungolabuildanddesign.com",
    instagramHref: "https://instagram.com",
    linkedinHref: "https://linkedin.com",
    whatsappHref: "https://wa.me/2348000000000",
  }
};

export const homeContent = {
  hero: {
    slides: [
      {
        id: 1,
        subHeadline: "3D Design",
        headline: "Immersive Visualizations",
        bgImage: "/media/3d-design/images/new mr ayoola_2 - Photo.JPEG",
        link: "/gallery/3d-design",
      },
      {
        id: 2,
        subHeadline: "Construction",
        headline: "Master Construction",
        bgImage: "/media/construction/images/IMG_0710.JPG",
        link: "/gallery/construction",
      },
      {
        id: 3,
        subHeadline: "Drawing",
        headline: "Precision Blueprinting",
        bgImage: "/media/drawing/images/IMG_0873.JPG",
        link: "/gallery/drawing",
      },
    ]
  },
  stats: [
    { value: 50, suffix: "+", label: "Projects Completed" },
    { value: 10, suffix: "+", label: "Years Experience" },
    { value: 100, suffix: "%", label: "Client Satisfaction" },
    { value: 25, suffix: "+", label: "Expert Team Members" },
  ],
  aboutOverview: {
    badge: "Get To Know Us",
    title: "About Yungola",
    paragraphs: [
      "Yungola Build and Design is a luxury boutique cinematic architectural design and construction studio. We transform visions into high-end built realities — from concept drawings to completed homes and commercial spaces globally.",
      "We believe that premium architecture should feel like a premium digital showroom, not engineering blueprints. Every space is curated with generous whitespace, sleek borders, smooth hover animations, and absolute design authority."
    ],
    imageUrl: "/media/construction/images/IMG_0711.JPG",
    ctaLabel: "Read More",
    ctaLink: "/about"
  },
  services: [
    {
      id: 1,
      title: "3D Design",
      description: "Hyper-realistic photorealistic architectural visualizations and immersive walkthroughs, allowing you to explore and perfect your space before construction begins.",
      image: "/media/3d-design/images/new mr ayoola_3 - Photo.JPEG",
      icon: "layers",
      link: "/gallery/3d-design"
    },
    {
      id: 2,
      title: "Construction",
      description: "Executing complex architectural designs requires elite craftsmanship and uncompromising engineering standards. We manage the entire build lifecycle with absolute precision.",
      image: "/media/construction/images/IMG_0712.JPG",
      icon: "building",
      link: "/gallery/construction"
    },
    {
      id: 3,
      title: "Drawing",
      description: "Rigorous site analysis, spatial planning, and conceptual development. Our blueprinting phase marries structural integrity with your lifestyle aspirations.",
      image: "/media/drawing/images/IMG_0875.JPG",
      icon: "layers",
      link: "/gallery/drawing"
    }
  ],
  testimonials: [
    {
      quote: "Working with Yungola Build and Design was a masterclass in architectural execution. They took our vague concepts and transformed them into a breathtaking, cinematic reality. Every space feels intentional, luxurious, and perfectly aligned with our vision.",
      name: "Jonh Deep",
      title: "CEO ECCorp - Italy",
            avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuC9YE1HRVdWRV9PGP9xeLbdBUI9EfAA-1wulvIDs6w7WELoD-9bW5Z7KdzYNb_B1LG7BOd5C1H_OZrH7H7HCOzAzpoh1-PorK_awbeTuZzN2L5HPTtBCtaSieMuw_0CrXr0pbwbZjmqaoPmkkmx1EANfZrC5rdNCg89X-P2qYK0rlkCyVy0g7J09Nv3qIUP8NY9m_cW8BEJX2Kk1J9UIteByvoyk2m1BFg4vAaUYAWI5kcIcK8QMcCxc8woiJzpDuxMB5BVriJmRX8W",

      image: "/media/3d-design/images/new mr ayoola_4 - Photo.JPEG",
    },
    {
      quote: "Yungola's attention to structural precision and modern editorial aesthetics is unmatched in Nigeria. From the initial 3D models to the final bespoke furniture curation, they delivered an absolute masterpiece.",
      name: "Amina Aliko",
      title: "Real Estate Investor - Lagos",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
      image: "/media/construction/images/7a1d6f84-98f3-4b8f-b7d8-df8b610452ce.JPEG",
    },
    {
      quote: "The level of professionalism, transparency, and design authority Yungola brought to our commercial project was extraordinary. They don't just build structures; they curate timeless environments.",
      name: "Marcus Vance",
      title: "Managing Director - London",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      image: "/media/drawing/images/IMG_0869.JPG",
    },
  ],
  showroomTeaser: {
    badge: "Virtual Experience",
    title: "Visit Our Showroom",
    desc: "See designs up close. Explore material choices, interior styles, and completed room setups that will inspire your next build.",
    ctaLabel: "Explore Showroom",
    ctaLink: "/showroom"
  },
  quoteBand: {
    badge: "Let's Work Together",
    title: "Ready to Build? Let's Talk.",
    desc: "Get a free consultation and discover what Yungola Build and Design can create for you.",
    ctaLabel: "Request a Free Quote",
    ctaLink: "/contact"
  }
};

export const aboutContent = {
  hero: {
    badge: "YUNGOLA | ABOUT US",
    title: "About Yungola",
    desc: "For over a decade, Yungola Build and Design has transformed visions into high-end built realities across Nigeria and globally. We merge structural precision with cinematic aesthetics to create residences and commercial spaces that command absolute design authority.",
    bgImage: "/media/construction/images/159347ed-9ffe-4281-b720-5de7d76e6807.JPEG"
  },
  foundation: {
    badge: "Our Foundation",
    title: "Mission & Vision",
    mission: {
      title: "Our Mission",
      desc: "To design and build exceptional spaces that reflect our clients' highest aspirations — combining architectural precision, elite material curation, and uncompromising quality at every stage of master construction.",
    },
    vision: {
      title: "Our Vision",
      desc: "To be Africa's most trusted premium design-build studio — known for transforming the built landscape of Nigeria with bold, sustainable, and cinematic architecture that feels like a digital showroom.",
    },
    image: "/media/drawing/images/IMG_0867.JPG"
  },
  edge: {
    badge: "Our Edge",
    title: "Why Choose Us",
    desc: "We stand at the intersection of elite engineering and editorial design authority. Here is why luxury homeowners and commercial developers trust Yungola.",
    reasons: [
      {
        icon: "Shield",
        title: "NIA Certified Authority",
        desc: "Fully accredited professionals with global architectural design training and deep local execution expertise in Nigeria.",
      },
      {
        icon: "Clock",
        title: "Uncompromising Punctuality",
        desc: "We respect your capital and timeline. Every milestone is transparently tracked and delivered on schedule, every time.",
      },
      {
        icon: "Star",
        title: "Elite Material Curation",
        desc: "Sourcing only the finest marble, dark oak, and bespoke brass from vetted global artisans. We never compromise on quality.",
      },
      {
        icon: "Award",
        title: "Cinematic Aesthetics",
        desc: "Our designs transcend engineering blueprints to feel like premium digital showrooms with bold negative space and striking facades.",
      },
      {
        icon: "Users",
        title: "Client-Centered Blueprinting",
        desc: "Your lifestyle and investment goals drive every spatial decision. We listen intently before drafting the first concept.",
      },
      {
        icon: "Zap",
        title: "Rapid Mobilization",
        desc: "Seamless transition from 3D photorealistic walkthroughs to immediate site preparation and master construction.",
      },
    ]
  },
  team: {
    badge: "Yungola Leadership",
    title: "Executive Team",
    desc: "Meet the visionary minds driving Yungola Transport. Our leadership is dedicated to ensuring absolute reliability, structural accessibility, and seamless coordination for every client.",
    members: [
      {
        name: "Okanlawon Olatunde",
        role: "CEO/Founder of Yungola transport",
        image: "/team/ceo-of-yungola.jpg",
        alt: "Okanlawon Olatunde, CEO and Founder",
        bio: "Leads Yungola’s vision for making vehicle ownership and transport support more accessible, practical, and reliable for everyday customers.",
      },
      {
        name: "Oluwaseun Ojo",
        role: "VP Operations",
        image: "/team/VP Operations.jpg",
        alt: "Oluwaseun Ojo, VP Operations",
        bio: "Oversees daily operations, service coordination, and internal processes to ensure customers receive smooth and timely support.",
      },
      {
        name: "Olamide Olawole",
        role: "Office Manager",
        image: "/team/Yungola Office Manager.jpg",
        alt: "Olamide Olawole, Office Manager",
        bio: "Manages office administration, client coordination, and front-facing support that keeps the team responsive and organised.",
      },
    ]
  },
  milestones: {
    badge: "Our Journey",
    title: "Milestones & Legacy",
    desc: "A decade of pioneering geometric monoliths, luxury interior curation, and master construction across West Africa.",
    timeline: [
      {
        year: "2014",
        title: "Studio Foundation",
        desc: "Yungola Build and Design established in Lagos, Nigeria, with a vision to redefine boutique luxury architecture.",
      },
      {
        year: "2016",
        title: "The Belgravia Monolith",
        desc: "Completed our first landmark residential estate in Lekki, setting a new benchmark for contemporary geometric design.",
      },
      {
        year: "2018",
        title: "Full NIA Accreditation",
        desc: "Received formal corporate certification from the Nigerian Institute of Architects, solidifying our design authority.",
      },
      {
        year: "2020",
        title: "Commercial Skyline Expansion",
        desc: "Expanded into high-rise corporate headquarters, luxury retail malls, and advanced mixed-use developments across Abuja and Lagos.",
      },
      {
        year: "2023",
        title: "50+ Masterpieces Delivered",
        desc: "Celebrated a major milestone of over 50 bespoke turnkey projects completed nationwide with zero structural failures.",
      },
      {
        year: "2024",
        title: "Cinematic Digital Showroom",
        desc: "Launched our immersive virtual design experience, complete with 3D spatial previews and elite material curation.",
      },
    ]
  }
};

export const showroomContent = {
  hero: {
    title: "Showroom & Services",
    desc: "Discover our comprehensive architectural capabilities and immerse yourself in our curated interior styles and material palettes.",
    bgImage: "/media/3d-design/images/2b.JPEG"
  },
  spatial: {
    badge: "YUNGOLA | CAPABILITIES",
    title: "Mastering Spatial Design",
    desc1: "Yungola Build and Design merges structural precision with cinematic aesthetics to create residences and commercial spaces that transcend mere living environments.",
    desc2: "Every project is treated as a premium digital showroom — curated with generous whitespace, sleek borders, smooth hover animations, and absolute design authority.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAT6NWLbKgtSFKjJKcejd6qFq1kjIQS2FlnTTr83TT76G6NvZqb31MLsG_WPq_GK-dDfhx3HumAm4a8iP34Mt6CZIXTxsN7GaAqZ6NVhz9Qx0octCHTZWMX81rx890dKRoP1ZM7X1GZtRBajj_jPlBLkJoWC3hXL_cxNBdzBK7KMgdYScrUg_iau3dGf6AeRsZc6q9SbvoSMp9RX2ok_zeiwTniXhanc5RQRAr6WE0hJAF3mCMGDnEU3ksldUEfqXxubbbF7Wo03ukV",
    ctaLabel: "Explore Projects",
    ctaLink: "/gallery"
  },
  capabilities: {
    badge: "End-to-End Execution",
    title: "Core Capabilities",
    list: [
      {
        id: "blueprinting",
        title: "Conceptual Blueprinting",
        desc: "We begin every project with rigorous site analysis, spatial planning, and conceptual development. Our blueprinting phase marries structural integrity with your lifestyle aspirations.",
      },
      {
        id: "construction",
        title: "Master Construction",
        desc: "Executing complex architectural designs requires elite craftsmanship and uncompromising engineering standards. We manage the entire build lifecycle with absolute precision.",
      },
      {
        id: "curation",
        title: "Luxury Curation",
        desc: "Sourcing premium materials, custom fixtures, and exclusive finishes from top global artisans to ensure your property feels distinct, rare, and world-class.",
      },
      {
        id: "management",
        title: "Project Management",
        desc: "Dedicated end-to-end oversight ensuring clear communication, transparent milestone tracking, and seamless coordination between architects, engineers, and interior designers.",
      },
      {
        id: "turnkey",
        title: "Turnkey Solutions",
        desc: "From the initial sketch to the final interior styling and key handover, our turnkey service provides a completely stress-free experience for luxury homeowners and investors.",
      },
    ]
  },
  servicesGrid: [
    {
      id: "3d-design",
      title: "3D Design",
      desc: "Hyper-realistic photorealistic architectural visualizations and immersive walkthroughs, allowing you to explore and perfect your space before construction begins.",
      icon: "layers",
      bgImage: "/media/3d-design/images/3.JPEG",
      link: "/gallery/3d-design"
    },
    {
      id: "construction",
      title: "Construction",
      desc: "Executing complex architectural designs requires elite craftsmanship and uncompromising engineering standards. We manage the entire build lifecycle with absolute precision.",
      icon: "building",
      bgImage: "/media/construction/images/7a1d6f84-98f3-4b8f-b7d8-df8b610452ce.JPEG",
      link: "/gallery/construction"
    },
    {
      id: "drawing",
      title: "Drawing",
      desc: "Rigorous site analysis, spatial planning, and conceptual development. Our blueprinting phase marries structural integrity with your lifestyle aspirations.",
      icon: "layers",
      bgImage: "/media/drawing/images/IMG_0866.JPG",
      link: "/gallery/drawing"
    }
  ],
  interiorStyles: {
    badge: "Virtual Showroom",
    title: "Signature Interior Styles",
    desc: "Explore our curated design languages. Each style represents a distinct philosophy of living, engineered for maximum aesthetic impact.",
    styles: [
      {
        name: "Architectural Noir",
        desc: "Dark velvets, matte charcoal finishes, striking yellow gold accents, and dramatic lighting. For those who command absolute authority.",
        image: "/media/3d-design/images/new mr ayoola_5 - Photo.JPEG",
      },
      {
        name: "Brutalist Warmth",
        desc: "Exposed concrete and striking structural lines softened by rich walnut, warm amber lighting, and organic linen textures.",
        image: "/media/construction/images/9e9f5f02-0d84-4ac1-9e39-785e5a7d603c.JPEG",
      },
      {
        name: "Minimalist Luxe",
        desc: "Expansive negative space, monolithic marble islands, concealed storage, and floor-to-ceiling glass allowing nature to serve as art.",
        image: "/media/3d-design/images/retwe_4 - Photo.JPEG",
      },
    ]
  },
  materials: {
    badge: "The Details",
    title: "Premium Material Palette",
    desc: "We source directly from elite quarries and artisans. Feel the weight, see the grain, and understand the uncompromising quality behind every Yungola build.",
    list: [
      { name: "Nero Marquina", type: "Marble", color: "bg-[#111111]", border: "border-gray-800" },
      { name: "Brushed Brass", type: "Metal", color: "bg-[#d4af37]", border: "border-yellow-600" },
      { name: "Smoked Oak", type: "Wood", color: "bg-[#2c1e16]", border: "border-amber-900/50" },
      { name: "Matte Charcoal", type: "Finish", color: "bg-[#222222]", border: "border-gray-700" },
      { name: "Calacatta Gold", type: "Marble", color: "bg-[#f8f8f8]", border: "border-gray-200", textDark: true },
      { name: "Oxidized Copper", type: "Metal", color: "bg-[#4a5d5e]", border: "border-teal-900" },
    ]
  }
};

export const contactContent = {
  hero: {
    badge: "YUNGOLA | CONTACT US",
    title: "Contact Studio",
    desc: "Whether you are planning a landmark residential monolith, a commercial high-rise, or a bespoke interior curation, our master architects and engineers are ready to bring your vision to life.",
    bgImage: "/media/construction/images/IMG_0711.JPG"
  },
  portal: {
    badge: "Inquiry Portal",
    title: "Send a Direct Message",
    successHeading: "Inquiry Received",
    successMsg: "Thank you for contacting Yungola Build and Design. One of our principal architects will review your project requirements and contact you within 24 business hours.",
  },
  directory: {
    badge: "Studio Directory",
    title: "Find Our Studio",
    whatsappLabel: "WhatsApp Chat",
    instagramLabel: "Instagram",
    list: [
      { label: "Headquarters", value: "Lekki Phase 1, Lagos, Nigeria", href: null },
      { label: "Direct Line", value: "+234 800 YUNGOLA (+234 800 000 0000)", href: "tel:+2348000000000" },
      { label: "Electronic Mail", value: "hello@yungolabuildanddesign.com", href: "mailto:hello@yungolabuildanddesign.com" },
      { label: "Operating Hours", value: "Mon – Fri: 8:00 AM – 6:00 PM (WAT)", href: null },
    ]
  }
};

export const galleryContent = {
  hero: {
    badge: "YUNGOLA | PORTFOLIO",
    title: "Selected Works",
    desc: "Explore our cinematic architectural portfolio. Each project exemplifies our commitment to structural precision, bespoke furniture design, and immersive digital showroom aesthetics. Filter by our core service disciplines below.",
    bgImage: "/media/drawing/images/4db57b02-6f73-4c37-b07f-0460bc66e5c3.JPG"
  }
};

