# Aerion Defense Systems - Government Procurement Website

## Overview
This is a React + Vite marketing website for Aerion Defense Systems, a government procurement solutions company. The site showcases services, capabilities, client base, and procurement intelligence features for federal, state, and local agencies.

## Project Architecture
- **Frontend Framework**: React 19.2 + Vite
- **Styling**: Tailwind CSS (via CDN)
- **Language**: TypeScript
- **Build Tool**: Vite 6.2

## Project Structure
```
/
├── components/          # React components
│   ├── About.tsx       # Mission and commitments section
│   ├── Clients.tsx     # Federal and SLED client listings
│   ├── Footer.tsx      # Footer with sitemap and certifications
│   ├── Hero.tsx        # Landing hero section
│   ├── NaicsTerminal.tsx  # NAICS code search interface
│   ├── Navbar.tsx      # Navigation bar
│   ├── QuoteForm.tsx   # Quote request form
│   ├── Services.tsx    # Capabilities showcase
│   └── TacticalGraphic.tsx  # 3D graphics component
├── App.tsx             # Main app component
├── index.tsx           # Entry point
├── types.ts            # TypeScript type definitions
├── vite.config.ts      # Vite configuration
└── package.json        # Dependencies
```

## Key Features
1. **Hero Section**: Mission-critical messaging with tactical design
2. **About/Mission**: Company values and commitments
3. **Services**: 7 core capabilities (Strategic Sourcing, Logistics, Defense, IT, Medical, etc.)
4. **NAICS Terminal**: Interactive search for NAICS codes (static data, no API required)
5. **Clients**: Federal agencies and SLED organizations
6. **Responsive Design**: Mobile-friendly with tactical/military aesthetic

## Development Setup
- **Port**: 5000 (configured for Replit environment)
- **Host**: 0.0.0.0 with allowedHosts enabled for proxy support
- **Dev Command**: `npm run dev`
- **Build Command**: `npm run build`

## Recent Changes (November 25, 2025)
- Migrated from AI Studio to Replit environment
- Updated Vite config to port 5000 with allowedHosts for Replit proxy
- Installed Node.js dependencies
- Configured workflow for automatic dev server startup
- Note: GEMINI_API_KEY referenced in original README is not actually used in the application

## Dependencies
### Production
- react: ^19.2.0
- react-dom: ^19.2.0
- lucide-react: ^0.554.0 (icon library)

### Development
- @types/node: ^22.14.0
- @vitejs/plugin-react: ^5.0.0
- typescript: ~5.8.2
- vite: ^6.2.0

## Notes
- The application is purely frontend - no backend or API integration needed
- NAICS data is hardcoded in the NaicsTerminal component
- Tailwind CSS is loaded via CDN in index.html
- Custom fonts: Inter (sans) and JetBrains Mono (monospace)
- Theme: Dark tactical design with military/government aesthetic
