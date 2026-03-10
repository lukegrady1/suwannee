You are building a proof-of-concept landing page for Spirit of the Suwannee Music Park — a destination nature park and music venue in Live Oak, Florida. This is a client proposal mockup, not a production build.

**Tech Stack:**
- Vite + React + TypeScript
- Tailwind CSS (via CDN or vite config)
- Framer Motion for animations
- No backend — all data is static

**Project Setup:**
Run: npm create vite@latest suwannee-landing -- --template react-ts
Then install: npm install framer-motion

---

## Brand & Aesthetic Direction

This park is being repositioned FROM "a festival site that also has camping" TO "a destination park that happens to host festivals." The design must feel like a luxury nature destination — think Anthropologie meets National Park. NOT a county fair website.

**Color Palette:**
- Deep forest green: #1C3A2A
- Warm amber/gold: #C8922A
- Cream/parchment: #F5EDD8
- Dark bark brown: #2C1A0E
- River mist (light sage): #8FAF8C

**Typography (import from Google Fonts):**
- Display/headings: "Playfair Display" — editorial, nature-luxury feel
- Body: "Lato" — clean and readable
- Accent/labels: "Bebas Neue" — bold, festival energy

**Aesthetic:**
- Dark, moody, atmospheric — deep forest greens and warm amber lighting
- Full-width cinematic imagery
- Layered textures: subtle noise grain overlay on sections
- Generous whitespace with unexpected asymmetric layouts
- Smooth scroll-triggered animations via Framer Motion (fade up, stagger reveals)
- Nature-inspired decorative dividers between sections (SVG wave or tree line silhouette)

---

## Page Structure

Build a single-page landing with these sections in order:

### 1. Hero Section
- Full-viewport height
- Background: Use this Unsplash image as the hero bg: https://images.unsplash.com/photo-1504851149312-7a075b496cc7?w=1800 (outdoor music festival at night with crowd and stage lights — atmospheric)
- Dark overlay gradient: from-black/70 to-transparent
- Centered content with:
  - Small uppercase label: "LIVE OAK, FLORIDA — ON THE SUWANNEE RIVER"
  - Large headline (Playfair Display, ~72px): "Where the River Meets the Music"
  - Subheadline: "800 acres of old-growth forest. World-class music festivals. Your next great escape."
  - Two CTA buttons: "Book Your Stay" (amber filled) and "Explore the Park" (ghost/outline)
- Smooth parallax scroll effect on the background image using Framer Motion useScroll
- Animated logo placeholder top-left (text: "Spirit of the Suwannee" in Playfair Display)
- Nav links top-right: Camping · Events · Weddings · Activities

### 2. "More Than a Festival" Repositioning Bar
- Full-width dark green (#1C3A2A) band
- 4 icon stats in a row:
  - 🌲 "800 Acres" — Old-Growth Forest
  - 🎵 "50+ Years" — Of Live Music
  - 🏕️ "Year-Round" — Camping & Cabins
  - 💍 "Private Events" — Weddings & Gatherings
- Fade-in-up animation with stagger delay on scroll

### 3. Accommodations Section
- Headline: "Find Your Perfect Stay"
- 3 cards in a row, each with:
  - Full image background (use Unsplash):
    - Cabins: https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=800
    - RV/Camping: https://images.unsplash.com/photo-1533873984035-25970ab07461?w=800
    - Primitive Camping: https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800
  - Dark gradient overlay from bottom
  - Card title in Playfair Display (white)
  - 2-line description
  - "Reserve Now →" link in amber
- Cards lift and brighten slightly on hover (Framer Motion whileHover)
- Background: parchment cream (#F5EDD8)

### 4. Events & Music Section
- Split layout: left side is large image (music crowd/festival), right side is text
- Image: https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=900
- Right side (dark green bg):
  - Eyebrow label: "EVENTS & FESTIVALS"
  - Headline: "Music Has Always Lived Here"
  - Body: "From intimate acoustic sets to full-scale music festivals, the Spirit of the Suwannee has been Florida's premier live music destination for over half a century. Discover upcoming events and secure your spot."
  - "View All Events →" button in amber
- Section animates in from left/right on scroll

### 5. Park Experience Section
- Headline: "Life on the Suwannee"
- Subhead: "There's always something waiting just beyond your campsite"
- 4-column icon grid of activities:
  - 🐴 Horseback Riding
  - 🚣 River Access
  - 🌿 Nature Trails
  - 🎭 Live Entertainment
  - 🛶 Kayaking & Canoes
  - 🌅 Sunrise Yoga
  - 🔥 Campfire Nights
  - 🎸 Open Mic Events
- Background: Use a forest/river nature texture or subtle animated gradient in deep greens
- Each icon card fades up with stagger on scroll

### 6. Weddings & Private Events Section
- Full-width background image: https://images.unsplash.com/photo-1519741497674-611481863552?w=1600 (outdoor wedding in nature setting)
- Dark amber/brown overlay
- Centered text overlay:
  - Eyebrow: "WEDDINGS & PRIVATE EVENTS"
  - Headline: "Say Yes in the Forest"
  - Body: "800 acres of natural beauty, Spanish moss canopies, and riverside ceremony sites. The Spirit of the Suwannee is unlike any wedding venue you've ever seen."
  - CTA: "Start Planning Your Event" (white ghost button)

### 7. Park Map / Visitor Info Teaser
- Simple 2-col layout
- Left: Styled "map placeholder" card (dark green with a simple SVG dot map — just decorative) labeled "Property Map — 800 Acres"
- Right:
  - Headline: "Plan Your Visit"
  - Bullet list with icons:
    - 📍 3076 95th Drive, Live Oak, FL 32060
    - 📞 (386) 364-1683
    - 🌐 musicliveshere.com
    - 🗓️ Open Year-Round

### 8. Footer
- Dark (#2C1A0E bark brown) background
- Logo text left
- Nav links center
- "Book Your Adventure" CTA button right (amber)
- Bottom bar: © Spirit of the Suwannee Music Park

---

## Animation Rules
- Use Framer Motion `useInView` or `whileInView` for scroll-triggered reveals
- Stagger children with `staggerChildren: 0.15` in variants
- Default entry: `{ opacity: 0, y: 40 }` → `{ opacity: 1, y: 0 }` over 0.6s ease-out
- Hero content: animate in on mount with slight delay
- Parallax on hero background using `useScroll` + `useTransform`
- Hover states on cards: `scale: 1.02`, subtle brightness increase

---

## Technical Requirements
- Full TypeScript — type all props and data structures
- Component-per-section file structure:
  - src/components/Hero.tsx
  - src/components/StatsBar.tsx
  - src/components/Accommodations.tsx
  - src/components/EventsSection.tsx
  - src/components/Experiences.tsx
  - src/components/Weddings.tsx
  - src/components/VisitorInfo.tsx
  - src/components/Footer.tsx
  - src/App.tsx (imports all, renders in order)
- Global CSS in src/index.css: import Google Fonts, set base font, define CSS custom properties for the color palette
- Mobile responsive: stack all multi-col layouts to single col on mobile, hamburger menu on mobile nav
- Smooth scroll behavior: html { scroll-behavior: smooth }
- All images use loading="lazy" and have descriptive alt text

---

## Tone & Copy Voice
Write all copy in a warm, adventurous, nature-luxury tone. Not corporate. Not rustic-kitschy. Think: Airbnb meets Bon Iver. Wild but refined.

---

When done, give me the commands to run the dev server so I can preview it immediately.