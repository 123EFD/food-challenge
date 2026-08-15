_This is a submission for [Frontend Challenge - Comfort Food Edition, Perfect Landing](https://dev.to/challenges/frontend-2026-07-29)_

# 🇲🇾 Rasa Malaysia: The Soul of Malaysian Comfort Food & Commuter Food Guide

## What I Built

**Rasa Malaysia** is an immersive, aesthetic landing page and interactive food guide dedicated to celebrating the authentic comfort food of Malaysia. Malaysian food culture is a vibrant, multi-ethnic tapestry where Malay, Chinese, and Indian flavors blend harmoniously — from steaming bowls of Asam Laksa and rich Curry Mee to fragrant banana-leaf Nasi Lemak and wok-fired Char Kway Teow.

Beyond being a visual love letter to Malaysian cuisine, this project solves a real-life challenge for students, tourists, and daily commuters: **discovering legendary, budget-friendly comfort food accessible purely via public transit (LRT, MRT, KTM, and RapidKL buses)**.

### ✨ Key Features

1. **Dynamic Hero Showcase**:
   - Cross-fading background featuring signature dishes every 5 seconds.
   - Elegant typography powered by *Share Tech Mono* and frosted glassmorphism accents.
2. **Iconic Dishes Carousel with Live Progress Indicator**:
   - Fully accessible horizontal showcase with smooth slide navigation.
   - A reactive **dotted progress bar** that tracks and reflects your scroll progress across all 9 featured delicacies in real-time.
3. **Public Transit Food Blog & Guide (`/blog`)**:
   - Curated food stall guide mapped to specific transit lines (e.g., *Oriental Kopi* at Mid Valley via LRT Abdullah Hukum/KTM, *Chow Yang Kopitiam* in SS2 via LRT Taman Bahagia, *Foo Hing Dim Sum* at LRT Taipan).
   - Clear transit directions (bus routes, covered walkways, on-demand vans), direct Google Maps links, and handy price range tags (💰).
4. **Skeuomorphic Commuter Sticky Note ("Commuter's Toolkit")**:
   - A playful, paper-styled sticky note pinned to the sidebar with tape effects, ruled notepad lines, and subtle hover tilt.
   - Quick links to essential schedule and tracking apps (*myrapid PULSE, Rapid On Demand, GOKL, and RapidKL Live Map*).
5. **"Borak-borak Corner" (Localized Malaysian Comment Board)**:
   - An interactive comment board using Malaysian dialect (*"Got other solid port makan near LRT/MRT? Kongsi sikit your recommendation here lah!"*).
   - Instant live feedback allowing visitors to post and discover new transit-accessible *port makan* spots.
6. **Bespoke Glassmorphism Design System & Dark/Light Mode**:
   - Crafted with pure **Vanilla CSS** using a curated Malaysian color palette (*Merah Bunga Raya, Kuning Telur, Hijau Daun, Kelabu Asap*).
   - Instant Dark Mode toggle with theme persistence in `localStorage`.
7. **Mobile-First Responsive Navigation**:
   - A clean mobile menu bar with smooth dropdown transitions, accessible controls, and theme toggling for screens of all sizes.

---

## Demo

- 🌐 **Live Website**: [Insert your Live Deployment URL here, e.g., Vercel / Cloud Run]
- 💻 **Source Code**: [Insert your GitHub Repository URL here]

### 📸 Preview

- **Homepage Hero & Carousel**: Dynamic cross-fading hero with smooth dish browsing.
- **Commuter Food Blog**: Transparent glass cards with transit routes and Google Maps integration.
- **Dark & Light Modes**: Seamless theme shifting with frosted glass blur effects.

---

## Journey

### 🛠️ Architecture & Tech Stack
- **Framework**: [Next.js (App Router)](https://nextjs.org/) + **React 19** + **TypeScript**
- **Styling**: Pure **Vanilla CSS** (CSS Variables, Flexbox, CSS Grid, Glassmorphism backdrop-filters) — *Zero heavy UI library bloat*
- **Typography**: Google Fonts (*Share Tech Mono*)
- **Icons & Theme**: Custom CSS & localized emoji accents

### 💡 What I Learned & Challenges Overcome
1. **Refining Carousel Physics & Performance**:
   Initially, automatic interval sliding conflicted with user interactions and caused erratic jumps. I refactored the carousel into a pure React component leveraging `useRef`, smooth scroll APIs, and scroll event calculations to drive a synchronous dotted progress bar.
2. **Pure CSS Glassmorphism without Tailwind**:
   Rather than relying on generic utility classes, I engineered a bespoke CSS design system using CSS custom properties for frosted glass translucency (`backdrop-filter: blur(12px)`), fluid container borders, and accessible text shadows that maintain crisp contrast across both Light and Dark themes.
3. **Designing for Real Utility (Commuter Empathy)**:
   Many great food directories assume you have a car. Focusing on transit-accessible spots (specifying bus numbers like PJ02, T807, and walking times from LRT stations) transformed this landing page from a simple showcase into a genuinely useful community tool for students and non-drivers.

### 🚀 What's Next
- Integrating live Google Maps API previews directly on the page.
- Connecting real-time bus arrival status via open transport APIs.
- Adding a filtering system for dietary preferences (Halal, Vegetarian, Street vs. Restaurant).

---

<!-- Team Submissions: Built with passion by @your_username -->
*License: MIT*
