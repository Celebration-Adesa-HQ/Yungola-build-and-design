export const projectFilters = [
  "All",
  "Architectural Design",
  "Interior Design",
  "Exterior Design",
  "Furniture Design",
  "Decor Plan",
  "3D Modelling",
];

export const projectsData = [
  {
    id: 1,
    title: "The Monolith House",
    type: "Architectural Design",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80",
    alt: "The Monolith House architectural design",
    desc: "A bold concrete and glass residence designed with uncompromising geometric precision.",
    highlight: false,
    details: {
      location: "Lekki Phase 1, Lagos",
      client: "Private Real Estate Developer",
      area: "5,800 sq ft",
      year: "2023",
      status: "Completed (Turnkey Handover)",
      scope: "Architectural Design, Structural Engineering & Interior Curation",
      philosophy: "The Monolith House stands as a testament to pure geometric minimalism. Constructed from high-performance board-formed concrete and structural steel, the residence challenges traditional residential forms in West Africa. By optimizing natural wind currents and building deep structural overhangs, we achieved a sustainable sanctuary that commands attention while remaining private.",
      features: [
        { title: "Monolithic Facade", desc: "A seamless outer shell crafted from custom cast-in-place concrete panels, acting as both structural support and aesthetic statement." },
        { title: "Thermal Overhangs", desc: "Deep architectural cantilevers engineered specifically to block the harsh mid-day sun, keeping the interior naturally cool." },
        { title: "Concealed Openings", desc: "Flush-mount doors and integrated window frames that preserve clean geometric outlines and prevent structural clutter." },
        { title: "Water Court", desc: "A central reflecting pool that cools incoming breeze before it enters the master living lounge, providing micro-climate regulation." }
      ],
      materials: [
        { name: "Board-Formed Concrete", type: "Structure", color: "bg-[#7a7a7a]", border: "border-gray-500" },
        { name: "Smoked Oak Wood", type: "Cladding", color: "bg-[#2c1e16]", border: "border-amber-900/50" },
        { name: "Brushed Brass Finishes", type: "Accents", color: "bg-[#d4af37]", border: "border-yellow-600" },
        { name: "Low-E Glazed Glass", type: "Façade", color: "bg-[#a6dce8]/30", border: "border-cyan-200/50" }
      ],
      additionalImages: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1920&q=80",
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1920&q=80"
      ]
    }
  },
  {
    id: 2,
    title: "Esse Tollit Iuvaret Iusat",
    type: "Interior Design",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB5LuC5-ABSVZ0UK9--dBrtxKu0R4va8_2VZ07hjr_y3ybUP76ZrjnJHXJMbqKG2f7fxAKwXeJ2th0GwF6AuWc5Ihjl4SO51rfYRNPdHLbCJU9L2avCQtOF_hH9uoOq1Dc_5ZqQjk35uuSv4XOXzLcdgxqjOSLCUKsE222QC5958ZWAz5EOR-P0aQvDRKretYx2Tg790YKSvatLDxTrvMHevbfGexTUzI5E9Q2L4G_HSZpRQOxGqmEHORE-0rr4MMhPMvkAvFcE89S1",
    alt: "Luxury villa interior design",
    desc: "Curated living space featuring premium finishes and custom lighting.",
    highlight: true,
    details: {
      location: "Ikoyi, Lagos, Nigeria",
      client: "Premium Art Curator & Collector",
      area: "3,400 sq ft",
      year: "2024",
      status: "Completed Showcase",
      scope: "Interior Design, Lighting Engineering & Bespoke Furniture Curation",
      philosophy: "Designed as an immersive sensory environment, this interior showcase merges rich charcoal velvet textures with warm amber illumination. Handcrafted timber slats divide spatial planes, creating depth and shadow while maintaining a continuous open-plan footprint that celebrates curated African artworks.",
      features: [
        { title: "Timber Slat Dividers", desc: "Custom dark oak slats that direct views, control ambient acoustic feedback, and structure separate gallery spaces." },
        { title: "Integrated LED Channels", desc: "Recessed light tracks configured on dual-dimming circuits, allowing the client to modify gallery scenes from bright showcase to intimate lounge." },
        { title: "Velvet Spatial Accents", desc: "Deep charcoal acoustic wall paneling that dampens echo while providing a luxurious, touchable background for gold elements." },
        { title: "Monolithic Kitchen Island", desc: "A continuous piece of Calacatta Gold Marble that anchors the social center of the penthouse." }
      ],
      materials: [
        { name: "Rich Charcoal Velvet", type: "Walls", color: "bg-[#181818]", border: "border-neutral-800" },
        { name: "Smoked Walnut Timber", type: "Joinery", color: "bg-[#3d271d]", border: "border-amber-950" },
        { name: "Calacatta Gold Marble", type: "Surfaces", color: "bg-[#f8f8f8]", border: "border-gray-300", textDark: true },
        { name: "Matte Brass Details", type: "Fittings", color: "bg-[#c5a059]", border: "border-yellow-600/60" }
      ],
      additionalImages: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuB5LuC5-ABSVZ0UK9--dBrtxKu0R4va8_2VZ07hjr_y3ybUP76ZrjnJHXJMbqKG2f7fxAKwXeJ2th0GwF6AuWc5Ihjl4SO51rfYRNPdHLbCJU9L2avCQtOF_hH9uoOq1Dc_5ZqQjk35uuSv4XOXzLcdgxqjOSLCUKsE222QC5958ZWAz5EOR-P0aQvDRKretYx2Tg790YKSvatLDxTrvMHevbfGexTUzI5E9Q2L4G_HSZpRQOxGqmEHORE-0rr4MMhPMvkAvFcE89S1",
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1920&q=80",
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1920&q=80"
      ]
    }
  },
  {
    id: 3,
    title: "In Eam Omittam Iudica",
    type: "Exterior Design",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBhZzefD8N2zOtGwBdkYyp1SmYQNCJM2nhJqh9Ycwdkoi8EgTx7ALCP0sN-2XFrE28mzfhdenuSXauuGoX7d317ETGnr_8m6nWLeMUVb6v9BrbZ7q7k_BJmMM--TtzFdqiP8rVBt30F6mrEZft8FkxHHQyL4W3joOMqRpCoZhsqPPNZOycH9NmWVao_Vr-vsqXlLfmf0m09j22nrdM9SvVTtRs4eWglFNRtFHkBP4w8o-vXJdVMZ9aJEcjszPZDTWfB11kM_Nm87J0I",
    alt: "Modern villa exterior design",
    desc: "Striking building facade with seamless indoor-outdoor integration.",
    highlight: false,
    details: {
      location: "Victoria Island, Lagos",
      client: "Tech Executive & Entrepreneur",
      area: "4,200 sq ft",
      year: "2023",
      status: "Completed",
      scope: "Exterior Design, Landscape Architecture & Architectural Facade Engineering",
      philosophy: "This facade design introduces a multi-tiered rain screen system using premium composite timber and laser-cut metal screen panels. The exterior acts as an organic shading device, dramatically reducing solar heat gain while filtering complex shadow plays into the interior living spaces throughout the day.",
      features: [
        { title: "Laser-Cut Shading", desc: "Custom geometric screens designed dynamically to filter sunlight during hot afternoons, referencing localized patterns." },
        { title: "Composite Timber Cladding", desc: "Eco-friendly, ultra-durable cladding designed to withstand high ocean humidity and salty sea breeze from the Atlantic." },
        { title: "Floating Terraces", desc: "Structural cantilevers that create outdoor entertainment zones without breaking the geometric continuity of the building facade." },
        { title: "Reflecting Lap Pool", desc: "A linear pool positioned at the edge of the terrace that mirrors the geometric lines of the structure." }
      ],
      materials: [
        { name: "Laser-Cut Bronze Screens", type: "Façade", color: "bg-[#8f7553]", border: "border-yellow-700/60" },
        { name: "Composite Cedar Decking", type: "Terrace", color: "bg-[#543b2b]", border: "border-amber-900" },
        { name: "Textured Cast Concrete", type: "Walls", color: "bg-[#8c8c8c]", border: "border-gray-500" },
        { name: "Nero Marquina Details", type: "Pool Edge", color: "bg-[#1c1c1c]", border: "border-gray-800" }
      ],
      additionalImages: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBhZzefD8N2zOtGwBdkYyp1SmYQNCJM2nhJqh9Ycwdkoi8EgTx7ALCP0sN-2XFrE28mzfhdenuSXauuGoX7d317ETGnr_8m6nWLeMUVb6v9BrbZ7q7k_BJmMM--TtzFdqiP8rVBt30F6mrEZft8FkxHHQyL4W3joOMqRpCoZhsqPPNZOycH9NmWVao_Vr-vsqXlLfmf0m09j22nrdM9SvVTtRs4eWglFNRtFHkBP4w8o-vXJdVMZ9aJEcjszPZDTWfB11kM_Nm87J0I",
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1920&q=80",
        "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1920&q=80"
      ]
    }
  },
  {
    id: 4,
    title: "Bespoke Minimalist Dining",
    type: "Furniture Design",
    image: "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1920&q=80",
    alt: "Custom minimalist dining table and chairs",
    desc: "Custom-crafted dining table and chairs designed specifically for the architectural layout.",
    highlight: true,
    details: {
      location: "Eko Atlantic City, Lagos",
      client: "Elite Fine Dining Group",
      area: "1,800 sq ft (Dining Zone)",
      year: "2024",
      status: "Completed",
      scope: "Bespoke Furniture Design, Curation & Interior Spatial Planning",
      philosophy: "We designed a ten-meter monolithic dining centerpiece crafted from a single fallen African Mahogany log, paired with hand-brushed solid brass structural legs. Surrounding the monolith are custom ergonomic leather dining chairs that reinforce the architectural flow of the dining chamber, blending organic rawness with luxury finishes.",
      features: [
        { title: "African Mahogany Slab", desc: "A single solid timber slab curated, air-dried, and finished with organic oils to expose rich deep grains." },
        { title: "Bespoke Brass Casting", desc: "Heavy geometric brass legs designed to support the multi-ton timber slab with absolute visual lightness." },
        { title: "Hand-Stitched Chairs", desc: "Ergonomically engineered seating wrapped in saddle leather, detailed with gold stitching to match the mahogany." },
        { title: "Acoustic Vault Ceiling", desc: "An arched panel ceiling above the dining table that directs ambient chatter into soft background acoustics." }
      ],
      materials: [
        { name: "Solid African Mahogany", type: "Furniture", color: "bg-[#4e2010]", border: "border-amber-950" },
        { name: "Brushed Solid Brass", type: "Frame", color: "bg-[#e5c158]", border: "border-yellow-500" },
        { name: "Full-Grain Saddle Leather", type: "Chairs", color: "bg-[#593b24]", border: "border-yellow-950" },
        { name: "Matte Charcoal Accents", type: "Fittings", color: "bg-[#181818]", border: "border-neutral-800" }
      ],
      additionalImages: [
        "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1920&q=80",
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1920&q=80",
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1920&q=80",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1920&q=80"
      ]
    }
  },
  {
    id: 5,
    title: "Nordic Elegance Suite",
    type: "Decor Plan",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1920&q=80",
    alt: "Nordic elegance decor styling",
    desc: "Comprehensive styling curation including custom art selection and sophisticated lighting.",
    highlight: false,
    details: {
      location: "Banana Island, Lagos, Nigeria",
      client: "Scandinavian Art & Design Aficionado",
      area: "2,800 sq ft",
      year: "2024",
      status: "Completed (Bespoke Curation)",
      scope: "Styling Curation, Custom Light Engineering & Furniture Specification",
      philosophy: "The Nordic Elegance Suite showcases clean lines, natural warmth, and high-performance minimalist surfaces inside a premier Banana Island penthouse. By focusing on organic textures like matte white ash and hand-knotted wool, we created a serene, gallery-like dwelling that captures soft light patterns and maximizes cross-breeze ventilation.",
      features: [
        { title: "Matte White Ash Joinery", desc: "Seamless floor-to-ceiling cabinetry that acts as wall paneling and conceals built-in smart systems." },
        { title: "Sculptural Lighting", desc: "Curated minimalist light pendants that function as architectural statement pieces." },
        { title: "Acoustic Insulation", desc: "Wall surfaces draped in premium textured fabrics to achieve perfect acoustic dampening in the main lounge." },
        { title: "Minimalist Hearth", desc: "A clean bio-ethanol focal fireplace surrounded by custom limestone panels." }
      ],
      materials: [
        { name: "Matte White Ash", type: "Joinery", color: "bg-[#e2dac6]", border: "border-amber-200/50" },
        { name: "Limestone Panels", type: "Surfaces", color: "bg-[#eae6db]", border: "border-stone-300", textDark: true },
        { name: "Organic Flat Wool", type: "Textiles", color: "bg-[#dcd6c8]", border: "border-stone-400", textDark: true },
        { name: "Anodized Black Aluminum", type: "Profiles", color: "bg-[#181818]", border: "border-neutral-800" }
      ],
      additionalImages: [
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1920&q=80",
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1920&q=80",
        "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1920&q=80"
      ]
    }
  },
  {
    id: 6,
    title: "Horizon Estate Walkthrough",
    type: "3D Modelling",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1920&q=80",
    alt: "Horizon estate 3d architectural rendering",
    desc: "Hyper-realistic photorealistic architectural visualization of a luxury estate.",
    highlight: true,
    details: {
      location: "Asokoro Hills, Abuja, Nigeria",
      client: "Hills Luxury Development Corp",
      area: "12,500 sq ft (Virtual Footprint)",
      year: "2025",
      status: "Pre-Construction Digital Master",
      scope: "Full-Scale photorealistic 3D Visualization, Interior Renderings & Digital Walkthroughs",
      philosophy: "This digital twin case study presents Horizon Estate: a grand, multi-tiered hillside mansion in Abuja. Using advanced photorealistic path tracing, we simulated the trajectory of equatorial sunlight against board-formed concrete and heavy glass, allowing investors to experience the spatial volume and shadow choreographies before groundbreaking.",
      features: [
        { title: "Dynamic Shadow Engine", desc: "Ultra-precise light path calculations reflecting natural sunset hues on polished concrete walls." },
        { title: "Virtual Glass Physics", desc: "Simulated dual-glazed low-emissivity glass to showcase panoramic horizon reflections." },
        { title: "Digital Furnishings", desc: "Bespoke virtual curation featuring exact specifications of B&B Italia and custom Yungola furniture models." },
        { title: "Scale-Accurate Terrains", desc: "Accurate 3D topological simulation of the Asokoro hillside rock formations." }
      ],
      materials: [
        { name: "Simulated Raw Concrete", type: "Facades", color: "bg-[#8c8c8c]", border: "border-gray-500" },
        { name: "Tempered Dynamic Glass", type: "Vitreous", color: "bg-[#a6dce8]/30", border: "border-cyan-200/50" },
        { name: "Brushed Charcoal Steel", type: "Columns", color: "bg-[#2b2b2b]", border: "border-neutral-700" },
        { name: "Sapele Hardwood", type: "Overhangs", color: "bg-[#4e2213]", border: "border-amber-950" }
      ],
      additionalImages: [
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1920&q=80",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1920&q=80"
      ]
    }
  },
  {
    id: 7,
    title: "The Belgravia Residence",
    type: "Architectural Design",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1920&q=80",
    alt: "The Belgravia Residence exterior",
    desc: "Cinematic residential architecture with uncompromising geometric precision.",
    highlight: false,
    details: {
      location: "Maitama District, Abuja",
      client: "Bespoke Diplomatic Envoy",
      area: "8,200 sq ft",
      year: "2024",
      status: "Completed",
      scope: "Full Architectural Drafting, Structural Layout & Site Engineering Oversight",
      philosophy: "Designed with monumental scale and uncompromising geometric precision, The Belgravia Residence balances security, luxury, and open-sky layouts. High, sweeping architectural massings frame a majestic double-height entrance courtyard, while natural travertine limestone and structural steel columns form an impenetrable but welcoming envelope.",
      features: [
        { title: "Double-Height Atrium", desc: "An 8-meter clear height ceiling that invites light deep into the heart of the ground floor gallery." },
        { title: "Secured Perimeter Portal", desc: "Flush-mount steel gate and secure vestibules seamlessly integrated into structural concrete walls." },
        { title: "Travertine Colonnade", desc: "A classic stone colonnade along the west facade providing natural solar shade." },
        { title: "Smart Airflow Venting", desc: "Passive warm-air exhaust vents hidden within the high roofline structure." }
      ],
      materials: [
        { name: "Classic Cream Travertine", type: "Facade Cladding", color: "bg-[#e8dec9]", border: "border-stone-300", textDark: true },
        { name: "Structural Grey Steel", type: "Frame Support", color: "bg-[#333333]", border: "border-neutral-600" },
        { name: "Clear Low-E Glass", type: "Fenestration", color: "bg-[#a6dce8]/30", border: "border-cyan-200/50" },
        { name: "Polished Ivory Stone", type: "Flooring", color: "bg-[#fcfaf2]", border: "border-stone-200", textDark: true }
      ],
      additionalImages: [
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1920&q=80",
        "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1920&q=80",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80"
      ]
    }
  },
  {
    id: 8,
    title: "Lagos Penthouse Lounge",
    type: "Interior Design",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1920&q=80",
    alt: "Lagos penthouse lounge interior",
    desc: "Immersive digital-showroom aesthetic for a high-end penthouse.",
    highlight: true,
    details: {
      location: "Victoria Island Waterfront, Lagos",
      client: "Boutique Venture Executive",
      area: "4,600 sq ft",
      year: "2024",
      status: "Completed Turnkey",
      scope: "Interior Spatial Layout, Lighting Design & Premium Curation",
      philosophy: "This waterfront penthouse lounge delivers an exquisite sensory journey. Designed with our signature warm yellow highlights and plush charcoal velvet textures, the space transitions seamlessly from a sunny, open daylight lounge overlooking the Atlantic to a moody, dramatic cocktail salon at night.",
      features: [
        { title: "Waterfront Panorama Glass", desc: "Custom floor-to-ceiling glass wall systems framing the Kuramo Waters." },
        { title: "Acoustic Velvet Panels", desc: "Hand-crafted sound-absorbent velvet panel modules defining the spatial zones." },
        { title: "Custom Gold Highlights", desc: "Precision-machined brass accents and warm yellow structural framing indicators." },
        { title: "Concealed Smart Mini-Bar", desc: "A pocket-door cocktail lounge bar clad in Nero Marquina marble." }
      ],
      materials: [
        { name: "Nero Marquina Marble", type: "Surfaces", color: "bg-[#111111]", border: "border-gray-800" },
        { name: "Warm Charcoal Velvet", type: "Paneling", color: "bg-[#252525]", border: "border-neutral-700" },
        { name: "Polished Yellow Gold", type: "Accents", color: "bg-[#ffe08b]", border: "border-yellow-600" },
        { name: "Smoked Oak Timber", type: "Ceilings", color: "bg-[#2c1e16]", border: "border-amber-900/50" }
      ],
      additionalImages: [
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1920&q=80",
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1920&q=80",
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1920&q=80"
      ]
    }
  },
  {
    id: 9,
    title: "Azure Cliffside Villa",
    type: "Exterior Design",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1920&q=80",
    alt: "Azure cliffside villa exterior",
    desc: "Sculpting striking building facades and secluded cliffside balconies.",
    highlight: false,
    details: {
      location: "Ibiza Coast, Spain",
      client: "International Lifestyle Collector",
      area: "6,900 sq ft",
      year: "2023",
      status: "Completed Design Portfolio",
      scope: "Exterior Architectural Design, Balcony Engineering & Pool Terraces",
      philosophy: "The Azure Cliffside Villa is integrated into the steep rocky slopes overlooking the Mediterranean. Our studio crafted a staggered concrete structure featuring expansive, lightweight cantilevered decks. The exterior features local white stone, natural limestone render, and thin black structural steel that lets the azure ocean remain the primary focal element.",
      features: [
        { title: "Cantilevered Terraces", desc: "Architectural concrete slabs jutting out 4.5 meters over the cliffside without visual columns." },
        { title: "Infinity Lap Pool", desc: "A stunning pool system with a zero-edge drop-off that merges into the Mediterranean horizon." },
        { title: "Mediterranean Shading", desc: "Pergolas crafted from weather-treated raw timber logs that cast structural geometric shadow patterns." },
        { title: "High-Grade Glass Railings", desc: "Tempered frameless glass panels providing unobstructed coastal views." }
      ],
      materials: [
        { name: "White Limestone Render", type: "Exterior Finish", color: "bg-[#f2efe9]", border: "border-stone-200", textDark: true },
        { name: "Cantilevered Raw Concrete", type: "Structure", color: "bg-[#9c9c9c]", border: "border-gray-400" },
        { name: "Weather-Treated Cedar Logs", type: "Pergolas", color: "bg-[#6b4c35]", border: "border-amber-900" },
        { name: "Ocean Blue Bisazza Tile", type: "Pool Finish", color: "bg-[#2e7d90]", border: "border-cyan-700" }
      ],
      additionalImages: [
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1920&q=80",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80",
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1920&q=80"
      ]
    }
  },
  {
    id: 10,
    title: "Ergonomic Executive Suite",
    type: "Furniture Design",
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1920&q=80",
    alt: "Custom executive office furniture",
    desc: "Bespoke executive desk and cabinetry crafted from dark oak and brass.",
    highlight: true,
    details: {
      location: "Eko Towers, Victoria Island, Lagos",
      client: "Global Capital Holdings",
      area: "1,200 sq ft",
      year: "2024",
      status: "Bespoke Delivery",
      scope: "Furniture Engineering, Material Prototyping & Production Curation",
      philosophy: "We engineered the Ergonomic Executive Suite as a testament to bespoke master craftsmanship. The focal point is a massive three-meter executive workstation sculpted from solid aged African Mahogany, balanced by custom-forged antique brass legs and hand-wrapped desk pads in full-grain saddle leather. This suite redefines the executive environment by merging absolute physical comfort with spatial authority.",
      features: [
        { title: "Mahogany Workstation", desc: "A continuous solid timber slab meticulously sculpted, oiled, and fitted with integrated charging pads." },
        { title: "Antique Brass Casting", desc: "Heavy custom-molded brass legs designed to conceal structural power cables." },
        { title: "Saddle Leather Desk Pad", desc: "Hand-stitched leather panels inlaid flush into the wood desktop surface." },
        { title: "Integrated Credenza", desc: "Soft-closing concealed drawer units with invisible electromagnetic latching." }
      ],
      materials: [
        { name: "Sculpted African Mahogany", type: "Desk Slab", color: "bg-[#3e190b]", border: "border-amber-950" },
        { name: "Full-Grain Saddle Leather", type: "Inlay", color: "bg-[#593b24]", border: "border-yellow-950" },
        { name: "Forged Antique Brass", type: "Leg Supports", color: "bg-[#d4af37]", border: "border-yellow-600" },
        { name: "Midnight Black Oak", type: "Credenza", color: "bg-[#181818]", border: "border-neutral-800" }
      ],
      additionalImages: [
        "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1920&q=80",
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1920&q=80",
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1920&q=80"
      ]
    }
  },
  {
    id: 11,
    title: "Heritage Home Styling",
    type: "Decor Plan",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1920&q=80",
    alt: "Heritage home decor styling",
    desc: "Warm textures, local artistry, and rich earthy tones curated for a heritage home.",
    highlight: false,
    details: {
      location: "Enugu Foothills, Nigeria",
      client: "Cultural Preservation Director",
      area: "3,800 sq ft",
      year: "2023",
      status: "Completed Styling Curation",
      scope: "Art Direction, Textile Sourcing, Color Theory & Lighting Layout",
      philosophy: "Rooted in local heritage and natural materiality, this home styling design balances earthy textures with contemporary geometry. The living spaces are curated with custom terracotta earthenware, hand-dyed Nigerian Aso-Oke pillows, and organic linen drapes, establishing a space that feels deeply grounded, rich, and historically resonant.",
      features: [
        { title: "Terracotta Accent Plinths", desc: "Custom cast pottery display plinths positioned to highlight historic bronzes." },
        { title: "Hand-Woven Textiles", desc: "Locally-sourced, custom-dyed indigo textiles providing deep accent hues on linen sofas." },
        { title: "Warm Earth Color Story", desc: "A color palette curated to reflect the red sands of the Enugu highlands." },
        { title: "Woven Rattan Light Screens", desc: "Sleek contemporary ceiling fixtures featuring woven fiber filters that project complex patterns." }
      ],
      materials: [
        { name: "Raw Terracotta Clay", type: "Plinths", color: "bg-[#c15c3d]", border: "border-amber-800" },
        { name: "Indigo Hand-Dyed Cotton", type: "Textiles", color: "bg-[#1a233d]", border: "border-blue-900" },
        { name: "Natural Unbleached Linen", type: "Sofas", color: "bg-[#eae3d5]", border: "border-stone-300", textDark: true },
        { name: "Earthy Lime-Wash Paint", type: "Walls", color: "bg-[#dfd8cc]", border: "border-stone-400", textDark: true }
      ],
      additionalImages: [
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1920&q=80",
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1920&q=80",
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1920&q=80"
      ]
    }
  },
  {
    id: 12,
    title: "Meridian Office Complex 3D",
    type: "3D Modelling",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1920&q=80",
    alt: "Meridian office complex 3d rendering",
    desc: "Immersive 3D walkthrough and spatial planning for a modern office tower.",
    highlight: true,
    details: {
      location: "Central Business District, Abuja",
      client: "Meridian Holdings Limited",
      area: "65,000 sq ft (Virtual Tower Layout)",
      year: "2025",
      status: "Approved 3D Master Plan",
      scope: "High-Rise 3D Architectural Visualisation & Corporate Branding Mockup",
      philosophy: "The Meridian Office Complex 3D case study outlines a landmark high-rise conceptualized for downtown Abuja. Our focus was on showcasing double-skin active breathing facades and natural plant-filled vertical lightwells. The hyper-detailed 3D render simulates realistic weather patterns and light reflections, offering stakeholders a clear look at this future corporate structure.",
      features: [
        { title: "Double-Skin Breathable Facade", desc: "Photorealistic visual simulation of layered glass panes that cool office corridors." },
        { title: "Lush Vertical Atriums", desc: "3D modeled green walls rising through twelve levels of office spaces." },
        { title: "Accurate Solar Path Studies", desc: "Virtual calculations demonstrating internal solar heat reduction under peak sunlight hours." },
        { title: "Interactive Corporate Entryway", desc: "An expansive digital entrance plaza showcasing water features and structural glass columns." }
      ],
      materials: [
        { name: "Double-Glazed Reflective Glass", type: "Facades", color: "bg-[#91c5cf]/30", border: "border-cyan-300/60" },
        { name: "Matte Structural Titanium", type: "Cladding", color: "bg-[#707275]", border: "border-neutral-500" },
        { name: "White Terrazzo Concrete", type: "Lobbies", color: "bg-[#f5f4f0]", border: "border-stone-300", textDark: true },
        { name: "Lush Vertical Living Greenery", type: "Atriums", color: "bg-[#3d6e4d]", border: "border-green-800" }
      ],
      additionalImages: [
        "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1920&q=80",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1920&q=80"
      ]
    }
  }
];

// Rich, high-end details generator/accessor for outstanding dynamic scalability
export const getProjectDetails = (project) => {
  if (!project) return null;
  if (project.details) return project.details;

  // Generate deterministic details for projects without hardcoded custom specs
  const years = ["2023", "2024", "2025"];
  const areas = ["4,500 sq ft", "5,200 sq ft", "3,800 sq ft", "6,100 sq ft"];
  const locations = ["Lekki Phase 1, Lagos", "Banana Island, Lagos", "Asokoro, Abuja", "Maitama, Abuja"];
  const clients = ["High-Net-Worth Individual", "Luxury Boutique Brand", "Bespoke Lifestyle Investor"];
  
  const idIdx = project.id || 1;
  const year = years[idIdx % years.length];
  const area = areas[idIdx % areas.length];
  const location = locations[idIdx % locations.length];
  const client = clients[idIdx % clients.length];
  
  return {
    location,
    client,
    area,
    year,
    status: "Completed Case Study",
    scope: `${project.type} & Luxury Turnkey Styling`,
    philosophy: `Designed to represent the pinnacle of ${project.type.toLowerCase()}, this project merges structural authenticity with contemporary digital-showroom aesthetics. Our studio focused on spatial choreography, generous whitespace, sleek borders, and custom integrations to build an uncompromising architectural environment that stands as a definitive visual statement.`,
    features: [
      { title: "Bespoke Detailing", desc: "Rigorous attention to geometric alignment and custom junctions that remove visual noise from the spatial landscape." },
      { title: "Smart Lighting Integrations", desc: "Pre-programmed automated lighting sequences designed to showcase materials and sculptures during sunset transitions." },
      { title: "Optimized Layout Flow", desc: "Clean mobile and physical flow that guarantees ease of motion, structural lightness, and dramatic architectural views." },
      { title: "Climate Resilience", desc: "Engineered building techniques customized specifically for the Nigerian tropical climate, combining structural durability and cooling design." }
    ],
    materials: [
      { name: "Nero Marquina Marble", type: "Surfaces", color: "bg-[#111111]", border: "border-gray-800" },
      { name: "Brushed Gold Brass", type: "Details", color: "bg-[#d4af37]", border: "border-yellow-600" },
      { name: "Smoked Dark Oak", type: "Joinery", color: "bg-[#2c1e16]", border: "border-amber-900/50" },
      { name: "Matte Charcoal Panels", type: "Mullions", color: "bg-[#222222]", border: "border-gray-700" }
    ],
    additionalImages: [
      project.image,
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1920&q=80"
    ]
  };
};
