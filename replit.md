# Aerion Defense Systems - Government Procurement Website

## Overview
This is a React + Vite marketing website for Aerion Defense Systems, a government procurement solutions company. The site showcases services, capabilities, client base, and procurement intelligence features for federal, state, and local agencies.

## Project Architecture
- **Frontend Framework**: React 19.2 + Vite
- **Styling**: Tailwind CSS (via CDN)
- **Language**: TypeScript
- **Build Tool**: Vite 6.2
- **Data**: Official NAICS 2022 dataset (1,012 industry codes)

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
├── data/
│   ├── naicsData.ts    # Complete NAICS 2022 dataset (1,012 codes)
│   └── naics_2022.txt  # Original NAICS hierarchy file
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
4. **NAICS Terminal**: Interactive search through complete NAICS 2022 dataset (1,012 industry codes)
5. **Clients**: Federal agencies and SLED organizations
6. **Responsive Design**: Mobile-friendly with tactical/military aesthetic

## NAICS 2022 Integration
The application includes the complete NAICS 2022 classification system:
- **1,012 6-digit industry codes** covering all economic sectors
- Organized by category (Agriculture, Mining, Manufacturing, Services, etc.)
- Real-time client-side search functionality
- Data sourced from official NAICS 2022 hierarchy

## Development Setup
- **Port**: 5000 (configured for Replit environment)
- **Host**: 0.0.0.0 for Replit proxy support
- **Allowed Hosts**: Configured for `.replit.dev` and `.repl.co` domains
- **Dev Command**: `npm run dev`
- **Build Command**: `npm run build`

## Recent Changes (November 25, 2025)
- Migrated from AI Studio to Replit environment
- Integrated complete NAICS 2022 dataset (1,012 codes)
- Removed all Gemini API key references (not used)
- Updated Vite config for Replit proxy compatibility
- Created data parsing pipeline for NAICS hierarchy
- Updated documentation to reflect new data source

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
- NAICS data is statically imported from data/naicsData.ts
- Tailwind CSS is loaded via CDN in index.html
- Custom fonts: Inter (sans) and JetBrains Mono (monospace)
- Theme: Dark tactical design with military/government aesthetic
