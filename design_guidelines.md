# Pleazure Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing inspiration from premium wellness apps like Calm, Headspace, and modern content platforms with a focus on intimate, sophisticated design for sexual wellness education.

## Core Design Principles
- **Premium Dark Experience**: Sophisticated, intimate atmosphere through dark theming
- **App-Like Mobile-First**: Seamless, native app feel on mobile devices
- **Glassmorphism Elegance**: Modern frosted glass aesthetic with soft glows
- **Smooth Immersive Navigation**: Fluid transitions creating cohesive experience

---

## Color Palette

### Dark Mode (Primary)
- **Background Base**: 13 13 13 (deep charcoal #0d0d0d)
- **Card Surfaces**: 20 20 20 with glassmorphism overlay (backdrop-blur-lg)
- **Primary Accent**: Soft coral/pink neon glow (derived from logo) - 350 75% 65%
- **Secondary Accent**: Warm purple/violet for highlights - 280 60% 60%
- **Text Primary**: 0 0% 95% (near white)
- **Text Secondary**: 0 0% 70% (muted gray)
- **Subtle Gradients**: Radial gradients from primary/secondary accents at 10-15% opacity

### Interactive States
- **Hover Glow**: Soft neon border glow (box-shadow with accent colors at 40% opacity, 8-12px blur)
- **Active Cards**: Subtle scale transform (scale-105) with increased glow intensity

---

## Typography

### Font Families
- **Primary**: Poppins (Google Fonts) - headings, navigation, CTAs
- **Secondary**: Montserrat (Google Fonts) - body text, article content
- **Weights**: 300 (light), 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

### Type Scale
- **Hero Title**: text-5xl md:text-7xl font-bold
- **Section Headings**: text-3xl md:text-4xl font-semibold
- **Card Titles**: text-xl md:text-2xl font-medium
- **Body Text**: text-base md:text-lg font-normal
- **Captions**: text-sm font-light

---

## Layout System

### Spacing Primitives
**Consistent spacing using Tailwind units: 2, 4, 6, 8, 12, 16, 20, 24, 32**
- Component padding: p-6 to p-8
- Section spacing: py-16 md:py-24
- Card gaps: gap-6 md:gap-8
- Content max-width: max-w-7xl for containers, max-w-3xl for article content

### Grid Systems
- **Category Cards**: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6
- **Featured Articles**: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8
- **Article Lists**: Single column on mobile, 2-column on desktop

---

## Component Library

### Navigation
- Fixed top navbar with glassmorphism (backdrop-blur-lg bg-black/40)
- Logo left-aligned, navigation links right-aligned on desktop
- Mobile: Hamburger menu with smooth slide-in drawer
- Smooth scroll behavior for anchor links

### Cards (Glassmorphism Design)
- **Base**: Rounded corners (rounded-2xl), backdrop-blur-lg
- **Background**: bg-white/5 with border border-white/10
- **Hover Effect**: Soft neon glow (box-shadow: 0 0 20px rgba(accent, 0.4)), scale-105 transform
- **Transition**: transition-all duration-300
- **Content Padding**: p-6 md:p-8

### Hero Section
- Full viewport height on desktop (min-h-screen), comfortable height on mobile
- Gradient overlay on background for text readability
- Featured article cards in 3-column grid below hero content
- Large CTA button "Start Exploring →" with gradient background and hover glow

### Article Template
- Clean single-column layout (max-w-3xl mx-auto)
- Article header: large title, subtitle, metadata (read time, category)
- Rich text content with comfortable line-height (leading-relaxed)
- Share buttons at article end (WhatsApp, Telegram, Copy Link icons)
- "Next Article →" navigation with smooth transition
- Sticky progress indicator on scroll

### Category Pages
- Category header with title and description
- Grid of article cards (same styling as featured cards)
- Filter/sort options if needed

### Buttons
- **Primary CTA**: Gradient background (from primary to secondary accent), rounded-full, px-8 py-4, font-semibold
- **Secondary**: Outline variant with border-2, blurred background when on images
- **Icon Buttons**: Circular, glassmorphism background, hover glow
- Built-in hover states (no custom needed)

---

## Animations

### Page Transitions
- Fade-in on page load (opacity 0 to 1, 400ms ease-out)
- Staggered card entrance (each card delayed by 100ms)

### Scroll Animations
- Smooth scroll behavior for navigation links
- Parallax subtle effect on hero background (optional, minimal)

### Interactive Elements
- Card hover: scale-105, glow increase (300ms transition)
- Button hover: slight scale-105, glow pulse
- Link hover: color shift to accent, underline grow animation

**Principle**: Animations enhance feel without distraction — keep subtle and purposeful

---

## Images

### Logo Placement
- Top-left in navigation bar (h-8 md:h-10)
- Footer centered or left-aligned
- Transparent PNG with brand colors (coral/pink visible in logo)

### Hero Section
**No large hero image** — use gradient background with subtle radial glow effects from accent colors instead. Focus on typography and featured article cards.

### Article Cards
- Thumbnail images for each article (aspect-ratio-16/9, object-cover, rounded-xl)
- Subtle overlay gradient from bottom for text readability
- Images in public/images/articles/ folder

### Category Icons
- Simple line icons or emoji representing each category
- Placed above category title in cards
- Size: w-12 h-12 to w-16 h-16

---

## Mobile-First Responsiveness

### Breakpoints
- Mobile: Base (< 768px)
- Tablet: md (768px+)
- Desktop: lg (1024px+)

### Mobile Optimizations
- Touch-friendly tap targets (min 44px height)
- Comfortable reading width (no text wider than 75ch)
- Single-column layouts on mobile, multi-column on desktop
- Bottom navigation consideration for frequent actions
- Swipe-friendly card carousels where appropriate

---

## Accessibility & Polish

- Maintain WCAG AA contrast ratios (light text on dark backgrounds)
- Focus visible states for keyboard navigation (ring-2 ring-accent)
- Semantic HTML structure for screen readers
- Alt text for all images
- Smooth reduced motion preferences respected

---

## SEO Structure
- Meta titles, descriptions for all pages
- Open Graph tags for social sharing
- Semantic heading hierarchy (h1 → h2 → h3)
- Structured data for articles (JSON-LD)