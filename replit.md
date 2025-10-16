# Pleazure - Sexual Wellness & Education Platform

## Overview

Pleazure is a mobile-first, premium dark-themed web application focused on sexual wellness and education. The platform provides curated articles across multiple wellness categories including Mind & Focus, Growth & Success, Relationships, Self & Emotions, and Skills & Strategy. Built with a modern tech stack, it delivers an app-like experience with smooth animations, glassmorphism effects, and sophisticated dark theming inspired by premium wellness apps like Calm and Headspace.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack:**
- **Framework:** React with TypeScript
- **Routing:** Wouter (lightweight client-side routing)
- **Styling:** Tailwind CSS with custom dark theme configuration
- **UI Components:** Radix UI primitives with shadcn/ui component library
- **State Management:** TanStack Query (React Query) for server state
- **Build Tool:** Vite

**Design System:**
- **Theme:** Premium dark mode as default with glassmorphism effects
- **Typography:** Poppins (headings/CTAs) and Montserrat (body text) from Google Fonts
- **Color Palette:** Deep charcoal background (#0d0d0d), soft coral/pink primary accent (350 75% 65%), warm purple/violet secondary (280 60% 60%)
- **Interactive Effects:** Hover glow animations, backdrop blur, subtle scale transforms on cards
- **Layout:** Mobile-first responsive design with consistent Tailwind spacing primitives

**Component Architecture:**
- Reusable UI components in `client/src/components/ui/` (shadcn/ui pattern)
- Feature components: `ArticleCard`, `CategoryCard`, `Navigation`, `Footer`
- Page components: `Home`, `CategoryPage`, `ArticlePage`, `About`, `Privacy`
- Path aliases configured for clean imports (`@/`, `@shared/`, `@assets/`)

### Backend Architecture

**Technology Stack:**
- **Runtime:** Node.js with Express.js
- **Language:** TypeScript with ES modules
- **Development Server:** Vite middleware integration for HMR
- **Data Storage:** In-memory storage (MemStorage class) - currently no database persistence

**API Design:**
- RESTful API endpoints under `/api` prefix
- Routes:
  - `GET /api/categories` - Retrieve all categories
  - `GET /api/categories/:slug` - Get category by slug
  - `GET /api/articles` - Retrieve all articles
  - `GET /api/articles/:slug` - Get article by slug
- JSON request/response format
- Error handling middleware with status code propagation

**Data Model:**
- **Category:** id, name, description, icon, slug
- **Article:** id, title, subtitle, content, categoryId, slug, readTime, featured, imageUrl (optional)
- Zod schemas for runtime validation
- TypeScript interfaces for type safety

**Storage Strategy:**
- Currently uses in-memory storage with hardcoded seed data
- IStorage interface abstraction allows for future database implementation
- Categories and articles pre-populated with wellness content

### Data Storage

**Current Implementation:**
- **In-Memory Storage:** MemStorage class implements IStorage interface
- **Data Initialization:** Hardcoded categories and articles in `server/storage.ts`
- **No Persistence:** Data resets on server restart

**Database Configuration (Prepared but Not Active):**
- **ORM:** Drizzle ORM configured for PostgreSQL
- **Provider:** Neon Database serverless (@neondatabase/serverless)
- **Config:** drizzle.config.ts set up with schema path and dialect
- **Migration:** npm script `db:push` available
- **Schema Location:** `shared/schema.ts` (currently uses TypeScript interfaces, not Drizzle schemas)

**Architecture Decision:**
The application is designed to be fully functional without a database initially, using static content. The Drizzle/PostgreSQL configuration exists for future scaling when dynamic content management is needed. This allows for rapid deployment and testing without database provisioning.

### External Dependencies

**Core Libraries:**
- **UI Framework:** React 18 with TypeScript
- **Component Library:** Radix UI primitives (@radix-ui/*) for accessible, unstyled components
- **Styling:** Tailwind CSS with PostCSS, Autoprefixer
- **Form Handling:** React Hook Form with Hookform Resolvers, Zod validation
- **Icons:** Lucide React, React Icons (Simple Icons for social sharing)
- **Carousel:** Embla Carousel React
- **Date Utilities:** date-fns
- **State Management:** TanStack React Query

**Backend Dependencies:**
- **Web Framework:** Express.js
- **Database (configured):** Drizzle ORM, Neon Database Serverless, Drizzle-Zod
- **Session Management:** connect-pg-simple (PostgreSQL session store)
- **Development:** tsx for TypeScript execution, esbuild for production builds

**Development Tools:**
- **Vite Plugins:** Runtime error modal, Cartographer, Dev banner (Replit-specific)
- **TypeScript:** Strict mode enabled with path aliases
- **Build Process:** Vite for frontend, esbuild for backend bundling

**Third-Party Services:**
- **Fonts:** Google Fonts (Poppins, Montserrat)
- **Future Integration Points:** WhatsApp, Telegram (share functionality in ArticlePage)

**Design Inspiration Sources:**
- Calm (wellness app UX patterns)
- Headspace (meditation/wellness design)
- Modern content platforms (glassmorphism, dark themes)