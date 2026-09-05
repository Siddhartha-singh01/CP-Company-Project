# ScaleUpSocial Design System

## 1. Design Philosophy & Overview
The ScaleUpSocial digital platform is built with a premium, high-end design aesthetic. The core philosophy centers around a **"Bold black canvas, alternating white, and oversized grotesque"** approach. It prioritizes:
- **Rich Aesthetics:** A highly curated, harmonious dark mode (with a crisp light mode alternative) designed to wow users.
- **Dynamic Interactivity:** Widespread use of smooth micro-animations, GSAP-powered custom cursors, and 3D elements to make the interface feel responsive and alive.
- **Premium Typography:** High-contrast, oversized headlines paired with legible body copy.
- **Subtle Geometry:** The use of "hairline" arcs, geometric image masks, and delicate particle networks to add depth without clutter.

## 2. Design Tokens & Theming

### 2.1 Colors
The system is built on a Tailwind v4 CSS-first theme, supporting both Dark (default) and Light modes.

**Dark Theme (Default):**
*   **Canvas/Backgrounds:**
    *   Ink: `#0a0a0a` (Base background)
    *   Ink-2: `#101012`
    *   Surface: `#161618` (Cards, dark buttons)
    *   Surface-2: `#1d1d20`
*   **Text & Accents:**
    *   White: `#ffffff` (Primary text)
    *   Grey Scale: `#7d7d7d` (Primary), `#a8a8a6` (Secondary), `#545454` (Tertiary)
*   **Brand Color:**
    *   Mauve Orchid: `#AB87A2` / `#7a4d6f` (Used for logos, active states, and emphasis)
*   **Lines/Borders:**
    *   Line: `rgba(255, 255, 255, 0.10)`
    *   Line-Soft: `rgba(255, 255, 255, 0.06)`

**Light Theme (`.theme-light` or `.section-light`):**
*   **Canvas/Backgrounds:**
    *   Ink: `#ffffff`
    *   Paper: `#f4f3ef` (Warm off-white for sections)
    *   Surface: `#f4f3ef`
*   **Text & Accents:**
    *   Ink (Text): `#0a0a0a`
    *   Grey Scale: `#545454`, `#2a2a2a`, `#a8a8a6`
*   **Lines/Borders:**
    *   Line: `rgba(10, 10, 10, 0.12)`
    *   Line-Soft: `rgba(10, 10, 10, 0.06)`

### 2.2 Typography
*   **Display Font:** `Inter Tight` (Weights: 400, 500, 600, 700)
    *   Used for oversized headlines (`.display`, `.display-sm`).
    *   Characteristics: Tight letter-spacing (`-0.035em`), tight line-height (`0.92`), bold and impactful.
    *   Pattern: Multi-line headlines often use a `.dim` class on the second line to reduce emphasis (using `--color-grey-3`).
*   **Body Font:** `Inter` (Weights: 400, 500, 600)
    *   Used for all body copy and UI elements.
    *   Characteristics: Highly legible, line-height `1.6`, antialiased.

### 2.3 Layout & Spacing
*   **Container:** `.container-page` caps width at `1440px` (scales to `1760px` or `2200px` on ultra-wide screens), with fluid inline padding (`clamp(1.25rem, 4vw, 4rem)`).
*   **Sections:** `.section` utilizes fluid block padding (`clamp(5rem, 10vw, 9rem)`).
*   **Safe Areas:** Edge-to-edge support for mobile notches (`env(safe-area-inset-left)`).

## 3. Core Components & UI Patterns

### 3.1 Navigation (`Nav.astro`)
*   **Desktop:** A floating, centralized "glass" pill (solid pitch black `#000000` with a subtle white border and heavy drop shadow).
    *   Features a "Mega Menu" dropdown for Services and Solutions, with subtle hover states and grid layouts.
    *   Auto-hides on scroll down and reveals on scroll up (`.nav-hidden`).
*   **Mobile:** The pill splits. The logo and hamburger menu become separate floating circular/pill buttons on the left and right edges, eliminating the empty black bar.
*   **Side Panel:** Triggered by a grid icon, sliding in from the left with a dark, blurred overlay and a glowing wave graphic at the bottom.

### 3.2 Buttons & CTAs
*   **Pill Buttons (`.pill`):**
    *   Fully rounded (`99px`), inline-flex, with an embedded arrow (`↗`).
    *   Hover Interaction: Smooth background/color transition; the arrow translates up and right (`translate(3px, -3px)`).
    *   Variants: `.pill-dark`, `.pill-light`, `.pill-ghost`.
*   **Gradient CTAs:** High-impact buttons feature a linear gradient border (e.g., dark blue to teal gradients) using background-clip padding-box techniques, scaling up on hover (`group-hover:scale-105`).

### 3.3 Visual Motifs & Geometry
*   **Hairline Geometry:** Delicate, absolute-positioned circular arcs (`.hair-arc`) drawn with 1px soft lines (`var(--color-line-soft)`), providing scale and framing in hero and CTA sections.
*   **Arrow Motif:** A large, highly transparent background SVG pattern used to break up negative space.
*   **Image Masks:** Predefined border-radius classes (`.mask-tl`, `.mask-tr`, `.mask-arch`, `.mask-blob`) to give images organic, non-rectangular shapes.
*   **Giant Watermark:** The footer features an oversized, clamped display text watermark (`Pinnacle Route`).

### 3.4 Interactive Elements
*   **Custom Cursor (`CustomCursor.astro`):**
    *   A premium, dual-element GSAP cursor replacing the default pointer on non-touch devices.
    *   Consists of a solid accent dot (`#AB87A2`) and a trailing, thicker ring.
    *   Hover State: On interactive elements, the ring expands (scale 1.5) and changes color, while the dot disappears.
*   **Accordions:** Used for FAQs and "What we do" sections. Features smooth max-height transitions and rotating chevron/arrow icons.

## 4. Motion & Animation System

### 4.1 Scroll Reveal (`motion.css` & `reveal.ts`)
*   Elements fade in and translate up (`translateY(28px)`) smoothly (`1s ease-out-expo`) as they enter the viewport.
*   Staggered delays are handled via `data-reveal-delay="1|2|3|4"`.
*   Headline masking (`data-reveal="clip"`): Text translates up from behind a hidden overflow boundary for a sharp reveal effect.
*   *Resilience:* Reveal styles are scoped to `html.js`, ensuring content remains visible if JavaScript fails or is disabled.

### 4.2 Infinite Marquee (`Marquee.astro`)
*   Two opposing scrolling text strips (one black angled up `-3deg`, one teal angled down `3deg`).
*   Uses standard CSS keyframes (`translateX(0)` to `translateX(-50%)`) for seamless infinite looping.

### 4.3 3D & Canvas Effects
*   **Three.js:** Used sparingly for premium, scroll-reactive 3D wireframe sculptures (e.g., hero section, CTA banner). Loaded lazily to protect performance.
*   **Network Particles (`NetworkParticles.astro`):** A custom HTML5 Canvas implementation rendering a web of nodes that gently repels from the user's mouse cursor, acting as an immersive hero background.

## 5. Asset & Iconography System

*   **Icons:** The system predominantly uses inline SVGs with predefined path strings (`src/data/expertise.ts`). This ensures perfect scaling, zero HTTP requests, and easy color inheritance via `currentColor`.
*   **Logos:** 
    *   The primary brand logo is the Teal/Dark Blue version.
    *   Client/Tech logos (e.g., React, AWS, Stripe) are stored locally as SVGs and used in scrolling strips or grids.
    *   Review platform logos (Clutch, Trustpilot) are used in a dedicated social-proof component with a `mix-blend-mode: multiply` effect to blend seamlessly into off-white backgrounds.

## 6. Architecture & Tech Stack Implications
*   **Astro + Tailwind CSS v4:** Fast, static-first delivery. Styles are heavily customized via a central `@theme` block in `global.css`.
*   **Client-Side JS:** Interactions (Lenis smooth scroll, GSAP, Three.js) are orchestrated through a single master script (`scripts/index.ts`) to manage Astro View Transitions properly (setup on `astro:page-load`, cleanup on `astro:before-swap`).
*   **Astro DB:** Content for navigation, services, solutions, and portfolio items is dynamically driven by a local/remote database layer, allowing for a structured CMS approach.
