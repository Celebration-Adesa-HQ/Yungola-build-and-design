export const navigation = {
  logo: "YUNGOLA",
  tagline: "Build and Design",
  navLinks: [
    { href: "/", label: "HOME" },
    { href: "/about", label: "ABOUT" },
    {
      href: "/services",
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
    officeHours: "Mon – Fri: 9:00 AM – 5:00 PM",
    address: "5, Ayanleye Street, Ogba, Lagos State",
    phone: "09071518988, 08054178584",
    phoneHref: "tel:09071518988",
    email: "info@yungolabuildanddesign.com",
    emailHref: "mailto:info@yungolabuildanddesign.com",
    instagramHref: "https://instagram.com",
    linkedinHref: "https://linkedin.com",
    whatsappHref: "https://wa.me/2348054178584",
  }
};

export const homeContent = {
  hero: {
    // slides: [
    //   {
    //     id: 1,
    //     subHeadline: "3D Design",
    //     headline: "We",
    //     highlight: "Build",
    //     bottomText: "Houses",
    //     bgImage:
    //       "/media/3d-design/images/6e66e217-143b-4080-aecf-3b808d8ce297.JPG",
    //     link: "/gallery/3d-design",
    //   },
    //   {
    //     id: 2,
    //     subHeadline: "Construction",
    //     headline: "We",
    //     highlight: "Construct",
    //     bottomText: "Houses",
    //     bgImage:
    //       "/media/construction/images/9e9f5f02-0d84-4ac1-9e39-785e5a7d603c.JPEG",
    //     link: "/gallery/construction",
    //   },
    //   {
    //     id: 3,
    //     subHeadline: "Drawing",
    //     headline: "We",
    //     highlight: "Design",
    //     bottomText: "Houses",
    //     bgImage: "/media/drawing/images/IMG_0873.JPG",
    //     link: "/gallery/drawing",
    //   },
    // ],
    slides: [
      {
        id: 1,
        headlinePrefix: "We",
        headlineAction: "Build",
        headlineSuffix: "it",
        subHeadline:
          "We turn your vision into a beautiful home on time, on budget, and without the usual headaches",
        bgImage:
          "/media/3d-design/images/6e66e217-143b-4080-aecf-3b808d8ce297.JPG",
        link: "/gallery/3d-design",
      },
      {
        id: 2,
        bgImage:
          "/media/construction/images/9e9f5f02-0d84-4ac1-9e39-785e5a7d603c.JPEG",
        headlinePrefix: "We",
        headlineAction: "Construct",
        headlineSuffix: "it",
        subHeadline:
          "We turn your vision into a beautiful home on time, on budget, and without the usual headaches",
        link: "/gallery/construction",
      },
      {
        id: 3,
        bgImage: "/media/drawing/images/IMG_0873.JPG",
        headlinePrefix: "We", // Change to "We" here if "We" must be strictly static for all 3
        headlineAction: "Design",
        headlineSuffix: "it",
        subHeadline:
          "We turn your vision into a beautiful home on time, on budget, and without the usual headaches",
        link: "/gallery/drawing",
      },
    ],
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
      "Yungola Build and Design is a luxury boutique cinematic architectural design and construction firm. We transform visions into high-end built realities — from concept drawings to completed homes and commercial spaces globally.",
      "We believe that premium architecture should feel like an elevated design portfolio, not engineering blueprints. Every space is curated with generous whitespace, sleek borders, smooth hover animations, and absolute design authority.",
    ],
    imageUrl: "/media/construction/images/IMG_0711.JPG",
    ctaLabel: "Read More",
    ctaLink: "/about",
  },
  services: [
    {
      id: 1,
      title: "3D Design",
      description:
        "Hyper-realistic photorealistic architectural visualizations and immersive walkthroughs, allowing you to explore and perfect your space before construction begins.",
      image: "/media/3d-design/images/new mr ayoola_3 - Photo.JPEG",
      icon: "layers",
      link: "/gallery/3d-design",
    },
    {
      id: 2,
      title: "Construction",
      description:
        "Executing complex architectural designs requires elite craftsmanship and uncompromising engineering standards. We manage the entire build lifecycle with absolute precision.",
      image: "/media/construction/images/IMG_0712.JPG",
      icon: "building",
      link: "/gallery/construction",
    },
    {
      id: 3,
      title: "Drawing",
      description:
        "Rigorous site analysis, spatial planning, and conceptual development. Our blueprinting phase marries structural integrity with your lifestyle aspirations.",
      image: "/media/drawing/images/IMG_0875.JPG",
      icon: "layers",
      link: "/gallery/drawing",
    },
  ],
  testimonials: [
    {
      quote:
        "Working with Yungola Build and Design was a masterclass in architectural execution. They took our vague concepts and transformed them into a breathtaking, cinematic reality. Every space feels intentional, luxurious, and perfectly aligned with our vision.",
      name: "Engr. Tunde Adeleke",
      title: "CEO, Apex Development Group - Abuja",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0o7oayiTIqly5aY4QI6tMrUc3CzPhOfwRrg&s",

      image: "/media/3d-design/images/new mr ayoola_4 - Photo.JPEG",
    },
    {
      quote:
        "Yungola's attention to structural precision and modern editorial aesthetics is unmatched in Nigeria. From the initial 3D models to the final bespoke furniture curation, they delivered an absolute masterpiece.",
      name: "Amina Aliko",
      title: "Real Estate Investor - Lagos",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTemJDyK7DCYWYRlTejjS1f-KNdMrdhcnJe9g&s",
      image:
        "/media/construction/images/7a1d6f84-98f3-4b8f-b7d8-df8b610452ce.JPEG",
    },
    {
      quote:
        "The level of professionalism, transparency, and design authority Yungola brought to our commercial project was extraordinary. They don't just build structures; they curate timeless environments.",
      name: "Chinedu Okafor",
      title: "Managing Director, Zircon Commercials - Port Harcourt",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd96hT_uEHDQ4d5BLLHICbQU5mM5gi-Bj4Mg&s",
      image: "/media/drawing/images/IMG_0869.JPG",
    },
  ],
  showroomTeaser: {
    badge: "Virtual Experience",
    title: "Explore Our Services",
    desc: "Discover our core architectural capabilities, immersive spatial blueprinting, master construction, and luxury interior curation.",
    ctaLabel: "Explore Services",
    ctaLink: "/services",
  },
  quoteBand: {
    badge: "Let's Work Together",
    title: "Ready to Build? Let's Talk.",
    desc: "Get a free consultation and discover what Yungola Build and Design can create for you.",
    ctaLabel: "Request a Free Quote",
    ctaLink: "/contact",
  },
  featuredProjects: [
    {
      title: "The Monolith House",
      category: "3D Design",
      image: "/media/3d-design/images/new mr ayoola_4 - Photo.JPEG",
      href: "/gallery/3d-design",
    },
    {
      title: "Interior Craftsmanship",
      category: "Construction",
      image:
        "/media/construction/images/7a1d6f84-98f3-4b8f-b7d8-df8b610452ce.JPEG",
      href: "/gallery/construction",
    },
    {
      title: "Philosophy",
      category: "Drawing",
      image: "/media/drawing/images/IMG_0869.JPG",
      href: "/gallery/drawing",
    },
  ],
};

export const aboutContent = {
  hero: {
    badge: "YUNGOLA | ABOUT US",
    title: "About Yungola",
    desc: "For over 2 years, Yungola Build and Design has transformed visions into high-end built realities across Nigeria and globally. We merge structural precision with cinematic aesthetics to create residences and commercial spaces that command absolute design authority.",
    bgImage:
      "/media/construction/images/159347ed-9ffe-4281-b720-5de7d76e6807.JPEG",
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
      desc: "To be Africa's most trusted premium design-build firm — known for transforming the built landscape of Nigeria with bold, sustainable, and cinematic architecture of absolute design authority.",
    },
    image: "/media/drawing/images/IMG_0867.JPG",
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
        desc: "Our designs transcend engineering blueprints to feel like premium architectural showcases — bold negative space and striking facades that command absolute design authority.",
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
    ],
  },
  team: {
    badge: "Yungola Leadership",
    title: "Executive Team",
    desc: "Meet the visionary minds driving Yungola Build and Design. Our leadership is dedicated to ensuring absolute reliability, design integrity, and seamless coordination for every client.",
    members: [
      {
        name: "Olatunde Okanlawon",
        role: "CEO & Principal Architect of Yungola Build and Design",
        image: "/team/ceo-of-yungola.jpg",
        alt: "Olatunde Okanlawon, CEO and Founder",
        bio: "Leads Yungola’s vision for delivering premium architectural designs and master construction services that redefine luxury living in Nigeria and globally.",
      },
      {
        name: "Oluwaseun Ojo",
        role: "VP Operations",
        image: "/team/VP Operations.jpg",
        alt: "Oluwaseun Ojo, VP Operations",
        bio: "Oversees daily site operations, construction coordination, and project management to ensure flawless execution of master designs.",
      },
      {
        name: "Olamide Olawole",
        role: "Office Manager",
        image: "/team/Yungola Office Manager.jpg",
        alt: "Olamide Olawole, Office Manager",
        bio: "Manages office administration, client relations, and project documentation that keeps the design and build teams synchronized.",
      },
    ],
  },
  milestones: {
    badge: "Our Journey",
    title: "Milestones & Legacy",
    desc: "A decade of pioneering geometric monoliths, luxury interior curation, and master construction across West Africa.",
    timeline: [
      {
        year: "2014",
        title: "Company Foundation",
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
        title: "Cinematic Architectural Showcase",
        desc: "Launched our immersive virtual design experience, complete with 3D spatial previews and elite material curation.",
      },
    ],
  },
};

export const showroomContent = {
  hero: {
    title: "Our Services",
    desc: "Discover our comprehensive architectural capabilities, signature interior design languages, and premium material palettes.",
    bgImage: "/media/3d-design/images/2b.JPEG"
  },
  spatial: {
    badge: "YUNGOLA | SERVICES",
    title: "Mastering Spatial Design",
    desc1: "Yungola Build and Design merges structural precision with cinematic aesthetics to create residences and commercial spaces that transcend mere living environments.",
    desc2: "Every project is treated as a premium architectural showcase — curated with generous whitespace, sleek borders, smooth hover animations, and absolute design authority.",
    imageUrl: "/media/3d-design/images/new mr ayoola_3 - Photo.JPEG",
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
    badge: "Virtual Showcase",
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
    title: "Contact Our Office",
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
    badge: "Office Directory",
    title: "Find Our Office",
    whatsappLabel: "WhatsApp Chat",
    instagramLabel: "Instagram",
    list: [
      { label: "Headquarters", value: "5, Ayanleye Street, Ogba, Lagos State", href: null },
      { label: "Direct Line", value: "09071518988, 080541708584", href: "tel:09071518988" },
      { label: "Electronic Mail", value: "info@yungolabuildanddesign.com", href: "mailto:info@yungolabuildanddesign.com" },
      { label: "Operating Hours", value: "Mon – Fri: 9:00 AM – 5:00 PM", href: null },
    ]
  }
};

export const galleryContent = {
  hero: {
    badge: "YUNGOLA | PORTFOLIO",
    title: "Selected Works",
    desc: "Explore our cinematic architectural portfolio. Each project exemplifies our commitment to structural precision, bespoke furniture design, and immersive design aesthetics. Filter by our core service disciplines below.",
    bgImage: "/media/drawing/images/4db57b02-6f73-4c37-b07f-0460bc66e5c3.JPG"
  }
};

