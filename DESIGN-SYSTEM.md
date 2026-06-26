# BGE Design System

> Benua Green Energy (BGE) premium visual identity.
> Industrial premium. Trust-first. Editorial.
> Dials: VARIANCE 7, MOTION 5, DENSITY 4
> Audience: B2B industrial buyers, government partners

---

## 1. Color Tokens

### CSS Variables (replace existing `:root` block)

```css
:root {
  /* === Brand === */
  --brand-primary:   #1B4332;   /* deep forest green - headers, CTAs, dark bg */
  --brand-accent:    #40916C;   /* medium green - links, secondary actions */
  --brand-highlight: #52B788;   /* bright green - accents, active states, badges */
  --brand-glow:      rgba(82, 183, 136, 0.15); /* glow behind interactive elements */

  /* === Neutral === */
  --dark:    #0B1D13;  /* near-black green - dark section backgrounds */
  --surface: #F8FAF9;  /* off-white green tint - light section backgrounds */
  --text:    #1A1F16;  /* warm near-black - primary body text */
  --muted:   #6B7280;  /* gray - secondary text, captions */
  --white:   #FFFFFF;

  /* === Derived === */
  --border:        rgba(27, 67, 50, 0.08);
  --border-strong: rgba(27, 67, 50, 0.15);
  --surface-elevated: #FFFFFF;
  --surface-dim:   #F0F4F1;

  /* === Glassmorphism === */
  --glass-bg:   rgba(248, 250, 249, 0.72);
  --glass-blur: 16px;
  --glass-border: rgba(27, 67, 50, 0.06);
  --glass-bg-dark: rgba(11, 29, 19, 0.75);

  /* === Noise === */
  --noise-opacity: 0.035;
}
```

### Usage Rules
- `--brand-primary` for primary buttons, dark section backgrounds, strong brand moments
- `--brand-accent` for links, secondary buttons, interactive hover states
- `--brand-highlight` for badges, success indicators, active tab indicators
- `--dark` for full dark sections (hero, footer, alternate sections)
- `--surface` for light sections, body background
- `--text` for body copy, headings on light backgrounds
- `--muted` for captions, metadata, timestamps
- Never use more than 2 brand greens per section

---

## 2. Typography Scale

### Font Stack (Next.js / next/font/google)

```typescript
import { Outfit, DM_Sans } from 'next/font/google'

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-outfit',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-dm-sans',
})
```

### Scale

| Token          | Size (px) | Size (rem) | Line Height | Font            | Weight | Use Case                          |
|----------------|-----------|------------|-------------|-----------------|--------|-----------------------------------|
| `display-xl`   | 64        | 4.0        | 1.05        | Outfit          | 800    | Hero headline                     |
| `display-lg`   | 48        | 3.0        | 1.1         | Outfit          | 700    | Section headline                  |
| `display-md`   | 36        | 2.25       | 1.15        | Outfit          | 700    | Sub-section headline              |
| `display-sm`   | 28        | 1.75       | 1.2         | Outfit          | 600    | Card title, feature heading       |
| `heading`      | 22        | 1.375      | 1.3         | Outfit          | 600    | Subheadings, sidebar headings     |
| `body-lg`      | 18        | 1.125      | 1.65        | DM Sans         | 400    | Lead paragraphs, intro text       |
| `body`         | 16        | 1.0        | 1.65        | DM Sans         | 400    | Default body text                 |
| `body-sm`      | 14        | 0.875      | 1.55        | DM Sans         | 400    | Captions, helper text             |
| `caption`      | 12        | 0.75       | 1.4         | DM Sans         | 500    | Labels, badges, metadata          |
| `eyebrow`      | 11        | 0.6875     | 1           | DM Sans         | 700    | Section labels (uppercase, tracked) |

### Eyebrow Label Pattern
```css
.eyebrow {
  font-family: var(--font-dm-sans);
  font-size: 0.6875rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--brand-accent);
}
```

On dark sections, eyebrow color becomes `var(--brand-highlight)`.

### Type Rules
- All body text uses DM Sans
- All display/headline text uses Outfit
- Headlines are left-aligned or left-aligned within asymmetric layouts (never center on desktop)
- Body max-width: 65ch for readability
- No text smaller than 12px (0.75rem) anywhere in the UI

---

## 3. Spacing System

Base unit: **4px**

| Token  | Value | Use Case                                   |
|--------|-------|--------------------------------------------|
| `--sp-1`  | 4px   | Inline icon gaps, tight padding            |
| `--sp-2`  | 8px   | Badge internal padding, small gaps         |
| `--sp-3`  | 12px  | Button internal padding                    |
| `--sp-4`  | 16px  | Card padding, standard gaps                |
| `--sp-5`  | 20px  | Section inner spacing                      |
| `--sp-6`  | 24px  | Card gaps, nav item gaps                   |
| `--sp-8`  | 32px  | Component spacing                          |
| `--sp-10` | 40px  | Between card groups                        |
| `--sp-12` | 48px  | Section padding (top/bottom) mobile        |
| `--sp-16` | 64px  | Section padding (top/bottom) desktop       |
| `--sp-20` | 80px  | Major section breaks                       |
| `--sp-24` | 96px  | Hero section vertical padding              |

### Spacing Rules
- Sections on desktop: `py-20` (80px) to `py-24` (96px) top and bottom
- Sections on mobile: `py-12` (48px) top and bottom
- Container horizontal padding: `px-4 sm:px-6 lg:px-8` with `max-w-7xl mx-auto`
- Card internal padding: `p-6` (24px) to `p-8` (32px)
- Between card grid items: `gap-6` (24px) to `gap-8` (32px)
- Never stack content sections with less than `py-12` separation

---

## 4. Component Patterns

### 4.1 Buttons

#### Primary Button
```css
.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--brand-primary);
  color: var(--white);
  padding: 0.75rem 1.75rem;
  border-radius: 8px;
  font-family: var(--font-dm-sans);
  font-size: 0.9375rem;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}
.btn-primary:hover {
  background: var(--brand-accent);
  box-shadow: 0 4px 20px rgba(27, 67, 50, 0.25);
  transform: translateY(-1px);
}
.btn-primary:active {
  transform: translateY(0) scale(0.98);
}
```

#### Secondary Button
```css
.btn-secondary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: transparent;
  color: var(--text);
  padding: 0.75rem 1.75rem;
  border-radius: 8px;
  font-family: var(--font-dm-sans);
  font-size: 0.9375rem;
  font-weight: 600;
  border: 1px solid var(--border-strong);
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}
.btn-secondary:hover {
  background: var(--surface-dim);
  border-color: var(--brand-accent);
  color: var(--brand-accent);
}
```

#### Ghost Button (for dark sections)
```css
.btn-ghost {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: transparent;
  color: var(--white);
  padding: 0.75rem 1.75rem;
  border-radius: 8px;
  font-family: var(--font-dm-sans);
  font-size: 0.9375rem;
  font-weight: 600;
  border: 1px solid rgba(255, 255, 255, 0.2);
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}
.btn-ghost:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.4);
}
```

#### Button Sizes
- **Small**: `padding: 0.5rem 1rem; font-size: 0.8125rem; border-radius: 8px`
- **Default**: `padding: 0.75rem 1.75rem; font-size: 0.9375rem; border-radius: 8px`
- **Large**: `padding: 1rem 2rem; font-size: 1rem; border-radius: 8px`

### 4.2 Cards

#### Corporate Card (Light Section)
```css
.card-corporate {
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 2rem;
  transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
}
.card-corporate:hover {
  border-color: var(--border-strong);
  box-shadow: 0 8px 32px rgba(27, 67, 50, 0.08);
  transform: translateY(-2px);
}
```

#### Glass Card (Dark or Overlay Sections)
```css
.card-glass {
  background: var(--glass-bg);
  backdrop-filter: blur(var(--glass-blur));
  -webkit-backdrop-filter: blur(var(--glass-blur));
  border: 1px solid var(--glass-border);
  border-radius: 12px;
  padding: 2rem;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}
.card-glass:hover {
  border-color: var(--brand-highlight);
  box-shadow: 0 8px 32px rgba(82, 183, 136, 0.1);
}
```

Dark variant for card-glass:
```css
.card-glass-dark {
  background: var(--glass-bg-dark);
  backdrop-filter: blur(var(--glass-blur));
  -webkit-backdrop-filter: blur(var(--glass-blur));
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 2rem;
}
```

#### Card Radius Rule
- ALL cards use `border-radius: 12px`
- ALL buttons use `border-radius: 8px`
- Badges use `border-radius: 100px` (full pill)
- Icons in square containers: `border-radius: 12px`
- This is the ONLY radius system. No 6px, no 16px, no 24px, no 4px.

### 4.3 Badges

```css
.badge {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.375rem 0.875rem;
  border-radius: 100px;
  font-family: var(--font-dm-sans);
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.02em;
}

.badge-primary {
  background: rgba(27, 67, 50, 0.08);
  color: var(--brand-primary);
}

.badge-highlight {
  background: rgba(82, 183, 136, 0.12);
  color: var(--brand-primary);
}

.badge-on-dark {
  background: rgba(82, 183, 136, 0.15);
  color: var(--brand-highlight);
}

.badge-outline {
  background: transparent;
  border: 1px solid var(--border-strong);
  color: var(--muted);
}
```

### 4.4 Section Eyebrow + Heading Pattern

Every major section follows this structure:
```html
<div class="section-header">
  <span class="eyebrow">Our Capabilities</span>
  <h2 class="display-lg">Industrial Energy Solutions</h2>
  <p class="body-lg muted">Trusted by leading manufacturers across Indonesia.</p>
</div>
```

- Eyebrow sits 16px above the heading
- Heading sits 12px above the description
- Description max-width: 540px on desktop, full width on mobile

### 4.5 Icon Containers

```css
.icon-container {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(27, 67, 50, 0.06);
  color: var(--brand-primary);
  flex-shrink: 0;
}

.icon-container-on-dark {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(82, 183, 136, 0.12);
  color: var(--brand-highlight);
  flex-shrink: 0;
}
```

---

## 5. Animation Tokens

### Easing Curves
| Token               | Value                                | Use Case                        |
|---------------------|--------------------------------------|---------------------------------|
| `--ease-out-expo`   | cubic-bezier(0.16, 1, 0.3, 1)      | Page transitions, reveals       |
| `--ease-out-quart`  | cubic-bezier(0.25, 1, 0.5, 1)      | Card hover, button states       |
| `--ease-in-out`     | cubic-bezier(0.4, 0, 0.2, 1)       | Color transitions               |
| `--ease-spring`     | cubic-bezier(0.34, 1.56, 0.64, 1)  | Bounce-in for featured elements |

### Duration Tokens
| Token              | Value  | Use Case                            |
|--------------------|--------|-------------------------------------|
| `--dur-fast`       | 150ms  | Button hover, icon color            |
| `--dur-normal`     | 250ms  | Card hover, border color            |
| `--dur-slow`       | 400ms  | Section reveal, modal enter         |
| `--dur-very-slow`  | 800ms  | Hero background zoom                |

### Keyframe Definitions

```css
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}

@keyframes slideInLeft {
  from { opacity: 0; transform: translateX(-24px); }
  to   { opacity: 1; transform: translateX(0); }
}

@keyframes scaleIn {
  from { opacity: 0; transform: scale(0.95); }
  to   { opacity: 1; transform: scale(1); }
}

@keyframes heroZoom {
  0%   { transform: scale(1); }
  100% { transform: scale(1.04); }
}

@keyframes shimmer {
  0%   { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}
```

### Scroll-Triggered Reveal Classes

```css
.reveal-up {
  opacity: 0;
  transform: translateY(20px);
}
.reveal-up.visible {
  animation: fadeUp 0.6s var(--ease-out-expo) forwards;
}

.reveal-left {
  opacity: 0;
  transform: translateX(-24px);
}
.reveal-left.visible {
  animation: slideInLeft 0.6s var(--ease-out-expo) forwards;
}
```

Staggered children:
```css
.stagger-children > *:nth-child(1) { animation-delay: 0ms; }
.stagger-children > *:nth-child(2) { animation-delay: 80ms; }
.stagger-children > *:nth-child(3) { animation-delay: 160ms; }
.stagger-children > *:nth-child(4) { animation-delay: 240ms; }
.stagger-children > *:nth-child(5) { animation-delay: 320ms; }
.stagger-children > *:nth-child(6) { animation-delay: 400ms; }
```

### Motion Dial (MOTION 5 / 10)
- Scroll reveals: YES, using `fadeUp` with stagger
- Hover transforms: YES, subtle `translateY(-2px)` on cards
- Hero parallax/zoom: YES, slow `heroZoom` on background image
- Infinite loops: NO except for logo ticker and WhatsApp float
- Complex orchestrated sequences: NO
- Respect `prefers-reduced-motion: reduce` at all times

---

## 6. Layout Patterns

### Container
```html
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <!-- content -->
</div>
```

### Asymmetric Split (Primary Pattern)

The default section layout is NOT centered. Use a two-column asymmetric split:

```html
<section class="py-20 lg:py-28">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
      <!-- Left: Text content (5 cols) -->
      <div class="lg:col-span-5">
        <span class="eyebrow">...</span>
        <h2 class="display-lg mt-3">...</h2>
        <p class="body-lg muted mt-4">...</p>
        <div class="mt-8">
          <button class="btn-primary">...</button>
        </div>
      </div>
      <!-- Right: Visual (7 cols) -->
      <div class="lg:col-span-7">
        <div class="relative rounded-12px overflow-hidden aspect-[4/3]">
          <!-- Image or illustration -->
        </div>
      </div>
    </div>
  </div>
</section>
```

### Reverse Asymmetric Split
Alternate the visual and text sides across sections:

```html
<!-- Section N: text left, visual right -->
<!-- Section N+1: visual left, text right -->
<div class="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
  <div class="lg:col-span-7 lg:order-first"> <!-- visual first on this section --> </div>
  <div class="lg:col-span-5"> <!-- text --> </div>
</div>
```

### Full-Width Dark Section
```html
<section class="relative bg-[var(--dark)] text-white py-20 lg:py-28 overflow-hidden">
  <!-- Noise overlay -->
  <div class="absolute inset-0 noise-texture pointer-events-none" style="opacity: var(--noise-opacity);"></div>
  <!-- Grid pattern (hero only) -->
  <div class="absolute inset-0 hero-grid pointer-events-none"></div>
  <!-- Content -->
  <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    ...
  </div>
</section>
```

### Stats Row Pattern
Asymmetric: left stat is larger, right stats are smaller.

```html
<div class="grid grid-cols-2 lg:grid-cols-4 gap-8">
  <div class="lg:col-span-1">
    <span class="display-xl font-extrabold text-[var(--brand-highlight)]">500+</span>
    <p class="body-sm mt-2 text-white/60">Projects Delivered</p>
  </div>
  <div class="lg:col-span-1">
    <span class="display-lg font-bold text-white">98%</span>
    <p class="body-sm mt-2 text-white/60">Client Retention</p>
  </div>
  <div class="lg:col-span-1">
    <span class="display-lg font-bold text-white">15+</span>
    <p class="body-sm mt-2 text-white/60">Years Experience</p>
  </div>
  <div class="lg:col-span-1">
    <span class="display-lg font-bold text-white">40%</span>
    <p class="body-sm mt-2 text-white/60">Avg Energy Savings</p>
  </div>
</div>
```

Key: the first stat gets a larger display size to break visual monotony.

### Feature Grid (NOT Three Identical Cards)

Use varied card layouts. At least one card should span wider or have a different structure:

```html
<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
  <!-- Card 1: Standard -->
  <div class="card-corporate">
    <div class="icon-container">...</div>
    <h3 class="heading mt-4">Energy Audit</h3>
    <p class="body-sm mt-2 muted">Comprehensive analysis...</p>
  </div>
  <!-- Card 2: Standard with highlight accent -->
  <div class="card-corporate">
    <div class="icon-container" style="background: rgba(82, 183, 136, 0.12); color: var(--brand-highlight);">...</div>
    <h3 class="heading mt-4">Installation</h3>
    <p class="body-sm mt-2 muted">End-to-end deployment...</p>
  </div>
  <!-- Card 3: Wide card spanning full width on lg -->
  <div class="card-corporate md:col-span-2 lg:col-span-1 relative overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-br from-[var(--brand-primary)] to-[var(--brand-accent)] opacity-5"></div>
    <div class="relative z-10">
      <span class="badge badge-highlight">Most Popular</span>
      <h3 class="heading mt-4">Maintenance Contracts</h3>
      <p class="body-sm mt-2 muted">Long-term service agreements...</p>
    </div>
  </div>
</div>
```

### Editorial Quote/Statement Block

```html
<div class="max-w-3xl mx-auto text-center py-16">
  <span class="eyebrow">Industry Insight</span>
  <blockquote class="display-md mt-4" style="font-family: var(--font-outfit); font-weight: 500; font-style: italic;">
    "Green energy adoption is not just a moral imperative. It is a competitive advantage."
  </blockquote>
  <p class="body-sm mt-6 muted">Head of Sustainability, PT Benua Green Energy</p>
</div>
```

---

## 7. Dark / Light Section Alternation

### Pattern

Alternate sections follow this rhythm for the homepage:

| #  | Section              | Background    | Pattern                                      |
|----|----------------------|---------------|----------------------------------------------|
| 1  | Hero                 | `--dark`      | Full dark, grid overlay, noise texture       |
| 2  | Trust bar / logos    | `--surface`   | Light, minimal                               |
| 3  | About / mission      | `--dark`      | Dark, asymmetric split                       |
| 4  | Services overview    | `--surface`   | Light, feature grid                          |
| 5  | Key stats            | `--dark`      | Dark, horizontal stat row                    |
| 6  | Products showcase    | `--surface`   | Light, asymmetric split (reversed)           |
| 7  | Case study / proof   | `--dark`      | Dark, glass card on dark                     |
| 8  | Partners / clients   | `--surface`   | Light, logo ticker                           |
| 9  | CTA                  | `--dark`      | Dark, centered statement + button            |
| 10 | Contact form         | `--surface`   | Light or glass overlay                       |
| 11 | Footer               | `--dark`      | Dark, noise texture                          |

### Rules
1. Never place two full dark sections adjacent to each other
2. Never place two full light sections adjacent to each other
3. Light sections use `background: var(--surface)` (NOT pure white)
4. Dark sections use `background: var(--dark)` with white text
5. Footer is always dark
6. Hero is always dark
7. Maximum consecutive cards in a row: 3 (and they must not be identical)
8. Every dark section gets the noise texture overlay
9. The hero section additionally gets the grid pattern overlay

### Dark Section Text Colors
```css
.dark-section h2,
.dark-section h3 {
  color: var(--white);
}
.dark-section p {
  color: rgba(255, 255, 255, 0.7);
}
.dark-section .eyebrow {
  color: var(--brand-highlight);
}
.dark-section .muted {
  color: rgba(255, 255, 255, 0.5);
}
```

### Noise Texture Overlay

Apply to every dark section:
```html
<div class="absolute inset-0 pointer-events-none" 
     style="background-image: url('data:image/svg+xml,...noise-svg...'); opacity: 0.035; background-repeat: repeat; background-size: 200px 200px;">
</div>
```

The existing `.noise-texture` class in globals.css handles this.

### Hero Grid Pattern

```css
.hero-grid {
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 60px 60px;
}
```

Apply only to the hero section. The grid should be very subtle, just barely visible.

---

## 8. Glassmorphism Usage

Use glassmorphism sparingly, only on these specific elements:

1. **Navbar when scrolled** over a dark hero: `backdrop-filter: blur(16px); background: rgba(11, 29, 19, 0.85);`
2. **Floating stat cards** overlaid on images: `backdrop-filter: blur(12px); background: rgba(248, 250, 249, 0.8);`
3. **Testimonial cards** on dark sections: glass-dark variant
4. **CTA overlay** on a section image: glass variant

### Requirements
- Always use `backdrop-filter: blur()` (and `-webkit-backdrop-filter` for Safari)
- Always pair with a semi-transparent background color
- Always add a subtle border: `border: 1px solid rgba(..., 0.06-0.1)`
- Never use glassmorphism on more than 2 elements per viewport
- Never use it for the main content area of a section

---

## 9. Anti-Patterns to Avoid

These are explicitly forbidden in the BGE design system:

### Fonts
- **NO Playfair Display** or any serif font. Headlines use Outfit only.
- **NO Inter**. Body text uses DM Sans only.
- **NO Plus Jakarta Sans**. Replace all instances with Outfit (display) or DM Sans (body).
- **NO mixing more than 2 font families** in any component.

### Colors
- **NO AI purple** (`#7C3AED`, `#6D28D9`, `#8B5CF6`, or similar).
- **NO beige and brass** palette. This is a green energy company, not a luxury hotel.
- **NO pure black** (`#000000`). Use `--dark: #0B1D13` instead.
- **NO pure white** (`#FFFFFF`) as a section background. Use `--surface: #F8FAF9` instead.
- **NO rainbow gradients** or multicolor backgrounds.

### Layout
- **NO centered-everything layouts** on desktop. Use asymmetric splits as the primary pattern.
- **NO three identical cards** in a row. Vary at least: size, color accent, or structure.
- **NO full-width text blocks wider than 720px** on desktop.
- **NO hero sections without a visual** (image, illustration, or pattern).

### Typography
- **NO em-dashes** (`—`). Use commas, colons, or periods instead.
- **NO decorative typography** (script fonts, handwritten fonts, neon effects).
- **NO all-caps body text**. All-caps only for eyebrow labels and nav items.
- **NO text smaller than 12px** (0.75rem).
- **NO centered body text** on desktop. Left-align always.

### Components
- **NO 3D buttons** or skeuomorphic shadows.
- **NO drop shadows larger than `0 20px 40px`** on any element.
- **NO gradient text** (keep text solid colored).
- **NO hover effects that scale above 1.0**. Scale down only (0.98) or translate only.
- **NO circular cards**. Radius is always 12px for cards, 8px for buttons.

### Animation
- **NO infinite bouncing** or floating loops on non-WhatsApp elements.
- **NO parallax scrolling** that shifts layout. Only subtle opacity/scale parallax on backgrounds.
- **NO page load animations longer than 600ms**.
- **NO animations that require clicking to start** on desktop (scroll-triggered only).
- Always respect `prefers-reduced-motion: reduce`.

### Content
- **NO "Lorem ipsum" placeholder text** in any visible component.
- **NO generic stock photo captions** ("Image of a solar panel").
- **NO "Click here" link text**. Use descriptive labels.
- **NO "Welcome to our website"** as a headline.

---

## 10. Tailwind Config Reference

The new palette maps to these Tailwind extensions:

```js
// tailwind.config.js additions
{
  theme: {
    extend: {
      colors: {
        brand: {
          primary:   '#1B4332',
          accent:    '#40916C',
          highlight: '#52B788',
        },
        dark:     '#0B1D13',
        surface:  '#F8FAF9',
        'surface-dim': '#F0F4F1',
        ink:      '#1A1F16',
        muted:    '#6B7280',
      },
      fontFamily: {
        display: ['var(--font-outfit)', 'sans-serif'],
        body:    ['var(--font-dm-sans)', 'sans-serif'],
      },
      borderRadius: {
        card: '12px',
        btn:  '8px',
        icon: '12px',
        badge: '100px',
      },
    },
  },
}
```

---

## 11. File Structure Reference

| File                     | Purpose                                          |
|--------------------------|--------------------------------------------------|
| `DESIGN-SYSTEM.md`       | This document - source of truth                  |
| `app/globals.css`        | CSS variables, component classes, animations     |
| `tailwind.config.js`     | Tailwind theme extensions                        |
| `app/[lang]/layout.tsx`  | Font loading, header, footer shell               |
| `components/`            | Reusable UI components                           |
| `app/[lang]/page.tsx`    | Homepage using all patterns above                |

---

## 12. Implementation Checklist

When rewriting any page to match this design system:

- [ ] Fonts: Outfit for headlines, DM Sans for body. Load via `next/font/google`.
- [ ] Colors: All references use CSS custom properties from Section 1.
- [ ] Layout: Asymmetric split as default. Center only for CTAs and quotes.
- [ ] Sections: Alternate dark/light. Apply noise to all dark sections.
- [ ] Cards: 12px radius. No three identical. At least one highlight accent.
- [ ] Buttons: 8px radius. Primary, secondary, ghost variants only.
- [ ] Eyebrow + heading: Every section starts with the eyebrow-label pattern.
- [ ] Animations: Scroll-triggered `fadeUp` with stagger. Respect reduced motion.
- [ ] Glassmorphism: Only on overlays and floating elements, not content areas.
- [ ] Typography: No em-dashes. No all-caps body. No text under 12px.
- [ ] No AI purple, no beige, no serif fonts, no Inter.

---

*Last updated: 2026-06-26*
*BGE Design System v1.0*
