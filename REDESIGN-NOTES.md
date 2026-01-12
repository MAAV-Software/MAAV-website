# MAAV Website Redesign Notes

## Branch: `redesign-drone-showcase`

## Summary of Changes

### 1. Scroll-Driven Drone Showcase (`DroneShowcase.jsx`)
- Apple-like smooth scrolling with double-layer interpolation
- Camera animates to highlight different drone components:
  - **Overview**: Full drone view
  - **Software**: Zooms to Jetson Xavier NX (side view)
  - **Structures**: Views carbon fiber frame/struts
  - **Embedded**: Top-down view of PCBs and wiring
- Progress indicator dots on the right side
- "Scroll to explore" hint at start
- Section overlays with titles, descriptions, and links to subteams

### 2. Drone Model Enhancements (`modelDrone.jsx`)
- Procedural carbon fiber texture on frame struts
- Normal map for 3D weave depth effect
- Realistic materials:
  - Jetson: Dark green PCB
  - Frame: Carbon fiber with metallic sheen
  - Shell: Matte black (no texture)
  - Propellers: Semi-gloss black plastic
  - Motors: Brushed aluminum with copper accents
- Backup saved as `modelDrone.backup.jsx`

### 3. Consolidated Subteams Page
- Removed individual subteam pages (`/subteams/software`, etc.)
- All subteams now on single `/subteams` page with anchor links
- Smooth scroll navigation between sections
- Each section has image header, number, title, and content

### 4. Back to Top Button (`BackToTop.jsx`)
- Floating button appears after scrolling
- Bounce animation on hover
- Smooth scroll back to top

### 5. Instagram Integration
- Dark card wrapper around embed
- Header with @umichmaav and Follow button
- Note: Instagram iframe can't be styled dark (limitation of iframes)

### 6. Styling Updates (`globals.css`)
- Dark "mission control" aesthetic
- Removed pulsing/glowing animations
- Updated hero section (removed badge, added hero-university class)
- Smooth scroll animations using IntersectionObserver
- Updated team cards, blog styling, etc.

## Key Files Modified
- `src/components/three/DroneShowcase.jsx` (NEW)
- `src/components/three/modelDrone.jsx`
- `src/components/three/mainCanvas.jsx`
- `src/components/ui/BackToTop.jsx` (NEW)
- `src/app/globals.css`
- `src/app/page.js`
- `src/app/subteams/page.jsx`
- `src/app/leads/page.jsx`
- `src/app/blog/page.jsx`
- Various other page files

## Camera Positions for Drone Showcase
```javascript
const sections = [
  { id: 'overview', camera: { position: [6, 4, 10], target: [0, 1, 0] } },
  { id: 'software', camera: { position: [2, 1.8, 0], target: [-0.3, 1.7, 0] } },
  { id: 'structures', camera: { position: [-1, 3, 6], target: [-2, 1.9, 0] } },
  { id: 'embedded', camera: { position: [0, 10, 0.1], target: [0, 1, 0] } }
]
```

## Drone Model Component Positions (from modelDrone.jsx)
- Jetson Xavier NX: `[-0.344, 1.703, 0]`
- Body center: `y ≈ 2`
- Propellers: corners at `±3` in x/z, `y ≈ 1.866`
- Motors: `y ≈ -0.105`

## To Run
```bash
cd maav-prototype-app
npm run dev
```

## GitHub
- Branch: `redesign-drone-showcase`
- PR Link: https://github.com/MAAV-Software/MAAV-website/pull/new/redesign-drone-showcase
