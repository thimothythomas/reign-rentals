# Reign Rentals — Luxury Car Rental Landing Page

A fully responsive, modern landing page for a luxury car rental service built with **Next.js**, **React**, and **Tailwind CSS**.

**Author:** Timothy Thomas

## Project Overview

Reign Rentals is a high-performance landing page for a premium car rental startup. It showcases a curated fleet of luxury vehicles with transparent pricing, smooth animations, dark/light mode, and a mobile-first responsive design.

## Tech Stack

- **Next.js 16** (App Router)
- **React 19**
- **Tailwind CSS 4**
- **TypeScript 5**
- **Framer Motion** (scroll & interaction animations)
- **next-themes** (dark/light mode)

## Setup Instructions

```bash
# Clone the repository
git clone https://github.com/thimothythomas/reign-rentals.git
cd reign-rentals

# Install dependencies
npm install

# Run the development server
npm run dev

# Open http://localhost:3000
```

## Production Build

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── globals.css          — Design system tokens (light + dark)
│   ├── layout.tsx           — Root layout, fonts, SEO metadata
│   └── page.tsx             — Page composition
├── components/
│   ├── theme-provider.tsx   — Dark mode provider
│   ├── navbar.tsx           — Fixed navigation + theme toggle
│   ├── hero.tsx             — Hero section with CTA
│   ├── search-filter.tsx    — Rental search form
│   ├── trade-in.tsx         — Value proposition section
│   ├── featured-vehicles.tsx — Vehicle card grid
│   ├── about.tsx            — About + stats + editorial
│   ├── services.tsx         — Service cards + brand strip
│   └── footer.tsx           — Footer with links
└── lib/
    └── cars-data.ts         — Vehicle data, stats, brands
```

## Deployment

Deploy on [Vercel](https://vercel.com) by connecting the GitHub repository.
