# AGENTS.md — Yungola Build and Design Website

## 1. Project Overview & Identity

**Yungola Build and Design** is a luxury boutique cinematic architectural design and construction studio. We transform visions into high-end built realities — from concept drawings to completed homes and commercial spaces across Nigeria and globally.

### Brand DNA
- **Tone:** Cinematic, Bold, Luxurious, Modern, Confident, Editorial, Clean.
- **Target Audience:** Premium homeowners, high-net-worth developers, and investors in Nigeria looking for master craftsmanship.
- **Visual References:** Cinematic architectural portfolios, lifestyle showcases, premium design studios.
- **Key Aesthetics:** Bold warm yellow highlights on rich dark surfaces, generous whitespace, sleek borders, smooth hover animations, absolute design authority.
- **Website:** [www.yungolabuildanddesign.com](http://www.yungolabuildanddesign.com)

---

## 2. Technical Stack & Architecture

- **Framework:** Next.js 14+ (App Router with Turbopack)
- **Styling:** Tailwind CSS v4 (Curated tokens)
- **UI Components:** Shadcn/UI (Radix Primitives) + Custom Contemporary Elements
- **Animations:** Framer Motion / Native CSS Transitions (Fluid & natural)
- **Validation:** Zod
- **Icons:** Lucide React
- **Typography:** Montserrat (Headings) & Hanken Grotesk (Body & Labels)

---

## 2.1 Brand Color Palette

Implement these exact hex codes in `app/globals.css` and use native Tailwind classes.

### Primary Colors (Luxury & Cinematic)
| Token | Hex | Usage |
|---|---|---|
| `primary-fixed` | `#ffe08b` | Brand highlights, main visual cues, CTA buttons, active indicators |
| `background` | `#131313` | Overall primary backdrop |
| `surface-container` | `#201f1f` | Card backgrounds, visual sections |
| `surface-container-lowest` | `#0e0e0e` | Deeper backdrop, footer surfaces, heavy contrast panels |
| `outline-variant` | `#4e4633` | Sleek thin borders, dividing lines |
| `on-surface-variant` | `#d1c5ac` | Body paragraphs, muted labels, secondary texts |
| `white` | `#FFFFFF` | Core text highlights |

### Design Signature: Yellow Gold on Charcoal Velvet
The primary brand moments are clean, sophisticated yellow actions on dark velvet-black backgrounds. This expresses luxury, confidence, and premium design authority.

---

## 3. Core Design Principles (Contemporary Editorial Vibe)

1. **Editorial Elegance:** The design must feel like a premium digital showroom, not engineering blueprints.
2. **Photography First & Full-Bleed:** Large, immersive, high-quality project imagery. Cards rely on premium photography and scaling transitions to express craftsmanship.
3. **Yellow Gold for Accents:** `#ffe08b` is a high-contrast luxury asset. Use it deliberately for primary CTAs, active outlines, and focused badges.
4. **Contemporary Sans-Serif Typography:**
   - **Headings & Logo:** Modern bold geometric sans-serif (`Montserrat`) with uppercase tracking.
   - **Body & Subtitles:** Sleek, warm geometric sans-serif (`Hanken Grotesk`).
5. **Fluid Mobile Responsiveness:** Flawless readability across all viewport screens.

---

## 4. Page Architecture & Component Specifications

### A. Global Layout

**Navbar:**
- Sticky header with transition: transparent to solid `#0e0e0e` with backdrop blur on scroll.
- Left: **YUNGOLA** wordmark in elegant Montserrat tracking layout.
- Right: Nav links → `Home | About | Services | Projects | Contact`.

**Footer:**
- Four-column cinematic dark layout with subtle dividers.
- Rich brand summaries, clean directories, and Globe / Share icon controllers.

---

### B. Homepage (`/`)

**Hero Section (Split Screen):**
- Left: Left side features Montserrat display header "Building Your Vision. Designing Your Future.", Hanken Grotesk descriptions, and CTAs (START YOUR PROJECT and VIEW PORTFOLIO).
- Right: Premium architectural imagery with linear overlay transitions.
- Scroll: Bottom-left vertical pulsing scroll indicator.

**Capabilities Overview (Services):**
- Modern capability cards featuring three pillars: Conceptual Blueprinting, Master Construction, and Luxury Curation.
- Structured with elegant numbers, Montserrat titles, and detailed description layouts.

**Selected Works Grid (FeaturedProjects):**
- Elegant four-card Bento Grid layout featuring custom project models (The Monolith House, Interior Craftsmanship, Philosophy, Horizon Estate) with smooth scale-up hover visuals.

---

## 5. Development Guidelines for AI Agents

### Typography Configuration (Tailwind Config / Globals):
- **Display Headings:** `var(--font-montserrat)`, sans-serif
- **Body & Content:** `var(--font-hanken)`, sans-serif
- **Accent Details:** `var(--font-montserrat)`, sans-serif

### Aesthetics QA checklist:
- All headings look modern, confident, bold, and contemporary.
- Spacing is spacious, elegant, and editorial.
- Cards use subtle, soft shadow offsets or elegant thin borders.
- Active states use simple borders or highlight colors.