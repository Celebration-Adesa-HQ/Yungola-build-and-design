# AGENTS.md — Yungola Build and Design Website

## 1. Project Overview & Identity

**Yungola Build and Design** is a professional architecture, design, and construction company that transforms ideas into built realities — from concept drawings to completed homes and commercial spaces.

The digital presence must feel like a **premium architectural showroom**: bold, trustworthy, and visually driven. Every page should communicate craftsmanship, expertise, and modern vision.

### Brand DNA
- **Tone:** Bold, Professional, Modern, Confident, Premium.
- **Target Audience:** Homeowners, property developers, and investors in Nigeria and beyond who want quality design-build services.
- **Visual References:** Foster + Partners editorial clarity, Zaha Hadid Architects boldness, local premium Nigerian construction brands.
- **Key Aesthetics:** Strong yellow-black contrast, high-impact project photography, generous whitespace, architectural grid layouts, no clutter.
- **Website:** [www.yungolabuildanddesign.com](http://www.yungolabuildanddesign.com)

---

## 2. Technical Stack & Architecture

- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS (Utility-first, custom design tokens for premium feel)
- **UI Components:** Shadcn/UI (Radix Primitives) + Custom Architectural Components
- **Animations:** Framer Motion (Smooth, confident micro-interactions — parallax, fade-in, scale)
- **Forms:** React Hook Form + Zod validation (for quote requests and contact)
- **Gallery/Media:** Cloudinary or Next/Image with blur-up placeholders
- **Email:** Resend or Nodemailer for quote requests and contact form submissions
- **Deployment:** Vercel (recommended for Next.js)

---

## 2.1 Brand Color Palette

Implement these exact hex codes in `tailwind.config.ts`.

### Primary Colors (Bold & Architectural)
| Token | Hex | Usage |
|---|---|---|
| `brand-yellow` | `#F5C518` | Primary CTA buttons, active nav states, highlights, accents |
| `brand-yellow-deep` | `#E0A800` | Hover states on yellow buttons, borders, icon fills |
| `brand-yellow-soft` | `#FFF8DC` | Light section backgrounds, card backgrounds |
| `brand-black` | `#0D0D0D` | Headlines, footer background, strong contrast sections |
| `brand-dark` | `#1A1A1A` | Navbar background, dark card backgrounds |
| `brand-charcoal` | `#2C2C2C` | Body text on light backgrounds, subheadings |
| `brand-gray` | `#6B7280` | Muted text, metadata (dates, labels) |
| `brand-light` | `#F9F9F7` | Main page background (off-white, warm) |
| `brand-white` | `#FFFFFF` | Text on dark backgrounds, card surfaces |

### Design Rule: Yellow on Black = Brand Signature
The primary brand moment is bold yellow elements on dark/black backgrounds. This creates immediate visual trust and authority for a construction company.

---

## 3. Core Design Principles (UI/UX Pro Max)

1. **Architecture IS the Brand:** Use grid-based, structured layouts that echo architectural drawings. Precision matters.
2. **Photography First:** Project images are the primary selling tool. Use full-bleed, high-quality photos. Every section should feel like a portfolio.
3. **Yellow for Action:** `#F5C518` is reserved for the most important interactive elements — primary CTAs, active states, key badges. Do not overuse it.
4. **Bold Typography Hierarchy:** Large, confident headings (uppercase or semi-bold). Clean, readable body text. Strong contrast between levels.
5. **Mobile-First Construction:** Many Nigerian clients browse on mobile. Touch targets must be large; navigation must be thumb-friendly.
6. **Trust Signals Everywhere:** Licenses, years in business, completed projects count, and testimonials should appear throughout — not just on one page.
7. **Performance:** Fast load speeds are essential. Optimize all project images. Use Server Components for static content.

---

## 4. Page Architecture & Component Specifications

### A. Global Layout

**Navbar:**
- Sticky, transparent on hero scroll → solid `#0D0D0D` on scroll.
- Left: **Yungola Build and Design** logo (yellow wordmark or icon on dark background).
- Right: Nav links → `Gallery | Showroom | Get a Quote | About | Contact`.
- Mobile: Hamburger → full-screen dark overlay menu with large touch targets.
- CTA button always visible: `"Get a Quote"` → Yellow background, black text.

**Footer:**
- Dark background: `#0D0D0D`.
- 3 columns: Logo/tagline | Quick Links | Contact Info.
- Yellow divider line as brand accent.
- Bottom bar: © Yungola Build and Design | [www.yungolabuildanddesign.com](http://www.yungolabuildanddesign.com).

---

### B. Homepage (`/`)

**Hero Section:**
- Full-viewport height. Background: a high-quality project photo (latest completed build) with a dark overlay (opacity 50–60%).
- Headline: Large, bold white text (e.g., *"Building Your Vision. Designing Your Future."*).
- Subheadline: Short descriptor in gray text.
- CTA buttons: `"View Our Work"` (yellow, black text) | `"Get a Quote"` (outlined white).
- Subtle scroll-down arrow animation at bottom.

**Stats Bar:**
- Full-width dark strip (`#1A1A1A`).
- 3–4 key figures: `"50+ Projects Completed" | "10+ Years Experience" | "100% Client Satisfaction"`.
- Yellow number text on dark background.

**Featured Projects (Mini Gallery Preview):**
- Section heading: *"Our Work"*.
- 3-column grid of latest project cards (image + project name + type).
- Hover: Yellow border + scale-up effect.
- CTA: `"See Full Gallery"`.

**Services Overview:**
- 3 service cards: **Architecture & Design** | **Construction & Building** | **Renovations & Upgrades**.
- Icon (SVG) + title + short description.
- Card hover: Yellow left-border accent.

**Showroom Teaser:**
- Dark section (`#0D0D0D`).
- Full-bleed background of a stunning interior/render.
- Overlay text: *"Visit Our Showroom — See Designs Up Close."*
- CTA: `"Explore Showroom"` (yellow button).

**Testimonials Strip:**
- Light yellow-soft background (`#FFF8DC`).
- 2–3 rotating client quotes.
- Client name + location.

**Get a Quote CTA Band:**
- Bold yellow band (`#F5C518`).
- Black headline: *"Ready to Build? Let's Talk."*
- Black CTA button: `"Request a Free Quote"`.

---

### C. Gallery (`/gallery`)

- **Grid Layout:** Masonry or uniform 3-col grid (desktop), 2-col (tablet), 1-col (mobile).
- **Filter Tabs:** All | Residential | Commercial | Renovations | Ongoing.
- **Project Card:** Full image, project name overlay on hover (dark gradient + yellow project type badge).
- **Lightbox:** Click → fullscreen lightbox with arrow navigation and project details panel.
- **Admin-ready:** Design with CMS-friendly structure (headless CMS like Sanity or Contentful recommended for updates).
- **Image Upload:** Document the process for the team to update images (via CMS or Cloudinary dashboard).

**Gallery Page UX Notes:**
- Lazy-load all images below fold.
- Blur-up placeholders for perceived performance.
- Include video support for timelapse/walkthrough builds.

---

### D. Showroom (`/showroom`)

This page serves as a **virtual design experience** — clients explore material choices, design styles, and completed room setups.

- **Hero:** Bold heading + full-width showroom interior image.
- **Sections:**
  - **Interior Styles:** Grid of style cards (e.g., Modern Minimalist, Industrial, Traditional) with sample images.
  - **Material & Finish Samples:** Tiles, paint palettes, roofing materials — displayed in visual grid.
  - **3D Design Previews:** If available, embed Sketchfab models or rendered images.
  - **Book a Showroom Visit:** Small CTA form (Name, Phone, Preferred Date) or WhatsApp button.
- **Tone:** Aspirational. Make clients *dream* about what their home could look like.

---

### E. Get a Quote (`/quote`)

- **Two-step form for better UX:**
  - Step 1: Project Details (Name, Email, Phone, Location, Project Type, Budget Range, Timeline).
  - Step 2: Specific Needs (Bedrooms, Size/Area, Special Requests, File/Plan Upload).
- **Form Design:** Dark card on light background. Yellow progress bar. Yellow submit button.
- **On Submit:** Thank you message + "Our team will contact you within 24 hours."
- **Alternative:** WhatsApp Quick Quote button (prominent, green WhatsApp icon).
- **Validation:** All fields validated with clear error messages.

---

### F. About Us (`/about`)

- **Story Section:** Company founding story. Mission and vision statements. Full-width image of the team or a flagship project.
- **Team Section:** Photo cards of key team members (Principal Architect, Lead Designer, Project Manager).
- **Why Choose Us:** 4-6 icon + text blocks highlighting differentiators (Certified Architects, On-Time Delivery, Quality Materials, etc.).
- **Milestones Timeline:** Horizontal or vertical timeline of company history (Founded, First Major Project, Key Certifications, Expansion, etc.).
- **Certifications & Affiliations:** Logos/badges (NIA, COREN, etc. if applicable).

---

### G. Contact Us (`/contact`)

- **Two columns:**
  - Left: Contact form (Name, Email, Phone, Subject, Message) → yellow submit button.
  - Right: Contact details (Address, Phone, Email, Office Hours) + embedded Google Maps.
- **Social Links:** Instagram, LinkedIn, Facebook, WhatsApp.
- **WhatsApp CTA:** Floating WhatsApp button visible on all pages (fixed bottom-right).

---

## 5. Functional Requirements & Integrations

### Core Features
- **Quote Request System:** Form submissions emailed to team + stored in DB.
- **Gallery Management:** CMS-driven for easy photo/project updates (Sanity.io recommended).
- **WhatsApp Integration:** Floating button linking to WhatsApp Business number.
- **Google Maps Embed:** Office location on Contact page.
- **SEO:** Meta tags, Open Graph, sitemap, structured data for local business.
- **Analytics:** Google Analytics 4 or Vercel Analytics.

### Animations & Interactions (Framer Motion)
- **Hero Parallax:** Background image subtle parallax on scroll.
- **Stats Count-Up:** Numbers animate from 0 to final value when entering viewport.
- **Gallery Hover:** Smooth scale + overlay reveal.
- **Page Transitions:** Clean fade-in/slide-up for all content blocks entering viewport.
- **Form Step Transitions:** Sliding animation between quote form steps.

### Performance Optimization
- Use `next/image` with proper `sizes` and `priority` on hero image (LCP optimization).
- Lazy load gallery images.
- Font optimization with `next/font`.
- Dynamic import for Lightbox, Maps, and heavy components.

---

## 6. Development Guidelines for AI Agents

### When Generating Code:
1. **Server Components by default.** Only `'use client'` for interactive/stateful components.
2. **Tailwind Tokens:** Use custom design tokens (`brand-yellow`, `brand-black`, etc.) via `tailwind.config.ts`. Never use arbitrary hex values in JSX.
3. **Component Structure:**
   ```
   components/
     layout/      → Header.tsx, Footer.tsx, WhatsAppFloat.tsx
     sections/    → Hero.tsx, StatsBar.tsx, ServiceCards.tsx, Testimonials.tsx
     gallery/     → GalleryGrid.tsx, ProjectCard.tsx, Lightbox.tsx
     forms/       → QuoteForm.tsx, ContactForm.tsx, StepProgress.tsx
     ui/          → Button.tsx, Badge.tsx, SectionHeading.tsx
   ```
4. **Accessibility:** All images → `alt` text. All form inputs → `label`. Keyboard navigable. WCAG AA contrast.
5. **Mobile First:** Design at 375px width first. Layer up with `md:` and `lg:`.
6. **No Emojis as Icons:** Use Lucide or Heroicons SVGs exclusively.

### When Designing UI:
1. **Yellow = Action.** Apply `brand-yellow` only to primary CTAs and key highlights. Never use it as a background for large text blocks (contrast issue on mobile).
2. **Dark Sections = Premium.** Use `brand-black` or `brand-dark` sections to punctuate the page and add visual weight.
3. **Spacing:** Use generous padding (`py-20`, `py-24`) between sections. Don't compress content.
4. **Typography Stack:**
   - **Headings:** `Bebas Neue` or `DM Sans 700` (bold, architectural, confident).
   - **Body:** `Inter` or `DM Sans 400` (clean, highly readable).
   - **Accent/Labels:** `Montserrat 600` (uppercase tracking for service labels, badges).

---

## 7. Color Application Guide

| Context | Color | Example Usage |
|---|---|---|
| Page background | `#F9F9F7` | Light sections, cards |
| Dark sections | `#0D0D0D` | Footer, hero overlay, CTA bands |
| Primary CTA buttons | `#F5C518` | "Get a Quote", "View Gallery" |
| Button hover | `#E0A800` | Darkened yellow on hover |
| Headlines (on light) | `#0D0D0D` | Section headings |
| Body text (on light) | `#2C2C2C` | Paragraphs |
| Muted text | `#6B7280` | Labels, metadata, dates |
| Text on dark bg | `#FFFFFF` | All text on dark/black sections |
| Accent highlights | `#F5C518` | Badge borders, active underlines |
| Soft bg tint | `#FFF8DC` | Testimonials, alt-section backgrounds |

---

## 8. File Structure Recommendation

```
/app
  /page.tsx                    → Homepage
  /gallery/page.tsx            → Gallery
  /showroom/page.tsx           → Showroom
  /quote/page.tsx              → Get a Quote
  /about/page.tsx              → About Us
  /contact/page.tsx            → Contact Us
/components
  /layout
    Header.tsx
    Footer.tsx
    WhatsAppFloat.tsx
  /sections
    Hero.tsx
    StatsBar.tsx
    FeaturedProjects.tsx
    ServicesOverview.tsx
    ShowroomTeaser.tsx
    Testimonials.tsx
    QuoteCTABand.tsx
  /gallery
    GalleryGrid.tsx
    ProjectCard.tsx
    Lightbox.tsx
    FilterTabs.tsx
  /showroom
    StyleCard.tsx
    MaterialGrid.tsx
  /forms
    QuoteForm.tsx
    ContactForm.tsx
    StepProgress.tsx
  /ui
    Button.tsx
    Badge.tsx
    SectionHeading.tsx
/lib
  /email
    sendQuote.ts
    sendContact.ts
  /cms
    sanity.ts (or contentful.ts)
  /utils.ts
/styles
  globals.css
/public
  /images → Optimized project photos
  /icons  → SVG brand icons
```

---

## 9. Page Flow Summary

```
Homepage
│
├── Hero (Latest project hero image + CTA)
├── Stats Bar (Projects, Years, Satisfaction)
├── Featured Projects → [/gallery]
├── Services Overview
├── Showroom Teaser → [/showroom]
├── Testimonials
└── Quote CTA Band → [/quote]

/gallery       → Full project portfolio with filters + lightbox
/showroom      → Virtual showroom: styles, materials, 3D previews
/quote         → 2-step quote request form
/about         → Company story, team, milestones
/contact       → Contact form, map, WhatsApp
```

---

## 10. QA Checklist

- [ ] LCP < 2.5s on mobile 4G (hero image optimized with `priority` prop)
- [ ] CLS < 0.1 (no layout shifts on image load — use explicit width/height)
- [ ] All gallery images lazy-loaded below the fold
- [ ] Quote form submits and sends email confirmation
- [ ] WhatsApp float button visible on all pages
- [ ] Google Maps loads without blocking page render
- [ ] Mobile navigation: hamburger menu works at 375px
- [ ] Yellow (`#F5C518`) text on white passes contrast check (it may not — use black text on yellow backgrounds)
- [ ] All SVG icons consistent (Lucide React)
- [ ] Footer links resolve correctly
- [ ] Sitemap.xml generated for SEO

---

## 11. Notes for Prompt Engineering (AI Agent Instructions)

- When asking for component code: *"Use Next.js 14 App Router, Tailwind CSS with Yungola brand tokens, and Framer Motion. Ensure mobile-first responsive design and accessibility (WCAG AA)."*
- When asking for design decisions: *"Reference bold architectural brand aesthetics — think Foster + Partners meets premium Nigerian construction."*
- **Color check prompt:** *"Background must use `#F9F9F7` for light sections, `#0D0D0D` for dark sections. Primary CTA must be `#F5C518` (yellow) with black text. Never put yellow text on white — use black text on yellow."*
- **Gallery updates:** *"Gallery is CMS-driven via Sanity.io. Do not hardcode project images — always fetch from CMS with fallback placeholder."*
- **Trust first:** Every page should include at least one trust signal (stats, badge, testimonial, or certification logo) above the fold or within the first scroll.
- **Performance check:** *"Ensure all images use next/image with blur-up placeholder and correct sizes prop. No unoptimized images allowed in production."*