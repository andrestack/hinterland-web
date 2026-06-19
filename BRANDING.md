# Hinterland Web — Branding Guidelines

> This document is a living summary of the visual branding system used across the Hinterland Web site. It was derived from the current codebase (Astro + React + Tailwind CSS) and should be kept in sync with any future design changes.

---

## 1. Color Palette

### Brand Colors (Tailwind Extended Theme)

| Token       | Hex / Value | Usage |
|-------------|-------------|-------|
| **Primary** | `#42b3e8`   | CTAs, accent blobs, links, highlights |
| **Secondary** | `#143144` | Light-mode headings, dark navy surfaces |
| **Tertiary** | `#d8e5cf`  | Dark-mode text, soft sage backgrounds |

### CSS Custom Properties (Theme-Aware)

The site uses CSS custom properties scoped to `:root` (light) and `.dark` (dark). Tailwind maps several tokens to these variables.

#### Light Theme (`:root`)

| Token            | Value (RGB)               | Tailwind Mapping |
|------------------|---------------------------|------------------|
| `--color-bg`     | `216 229 207`             | `bg-body`        |
| `--color-box`    | `216 229 207`             | `bg-box-bg`      |
| `--box-border`   | `20 49 68`                | `border-box-border` |
| `--box-sd`       | `20 49 68 / 0.5`          | `shadow-box-shadow` |
| `--heading-1`    | `20 49 68`                | `text-heading-1` |
| `--heading-2`    | `20 49 68`                | `text-heading-2` |
| `--heading-3`    | `20 49 68`                | `text-heading-3` |

#### Dark Theme (`.dark`)

| Token            | Value (RGB)               | Tailwind Mapping |
|------------------|---------------------------|------------------|
| `--color-bg`     | `20 49 68`                | `bg-body`        |
| `--color-box`    | `17 24 39`                | `bg-box-bg`      |
| `--box-border`   | `243 244 246 / 0.1`       | `border-box-border` |
| `--box-sd`       | `transparent`             | `shadow-box-shadow` |
| `--heading-1`    | `216 229 207`             | `text-heading-1` |
| `--heading-2`    | `216 229 207`             | `text-heading-2` |
| `--heading-3`    | `209 213 219`             | `text-heading-3` |

### Gradient Patterns

A signature gradient is used for **hero headings**, **logo text**, and **accent text**:

```css
bg-gradient-to-br from-indigo-600 from-20% via-primary via-30% to-green-600
```

This produces a vibrant indigo → sky-blue → green flow and is the site’s primary typographic accent.

Other decorative gradients found in blobs:

- `from-primary to-green-400`
- `from-primary to-orange-400`
- `from-purple-500/80 to-white` (light) / `from-white to-white` (dark)
- `from-gray-100 to-gray-200` (light backgrounds) / `from-gray-900` (dark)

---

## 2. Typography

> **Note:** The font stack is subject to change in the future. Keep this section updated if the typeface is swapped.

### Current Font Family

- **Primary:** `Raleway` (Google Fonts)
- **Weights loaded:** 300, 400, 500, 600, 700
- **Fallback:** `sans-serif`

### Application

- **Body / Global:** `font-family: "Raleway", sans-serif;`
- **Headings:** Bold weights (700) with tight tracking on larger breakpoints.
- **Accent / Gradient Text:** Same family, but wrapped in the signature indigo-to-green gradient.

### Sizing Scale (observed)

| Context | Size |
|---------|------|
| Hero H1 | `text-3xl` → `sm:text-4xl` → `md:text-5xl` → `xl:text-6xl` |
| Section H2 | `text-4xl` → `md:text-5xl` → `lg:text-6xl` |
| Large Display (Pricing / FAQ) | `text-5xl` → `md:text-7xl` → `lg:text-8xl` |
| Body | `text-lg` / `text-xl` |
| Small / Caption | `text-sm` |

---

## 3. Decorative Blobs & Shapes

The site makes heavy use of **blurred, gradient-filled blobs** and **inline SVG illustrations** to create depth and visual interest.

### 3.1 Gradient Blobs (Blurred Divs)

These are `absolute` positioned `<div>` or `<span>` elements with heavy `blur-2xl` / `blur-3xl`, low opacity, and gradient backgrounds.

#### Hero Section (`src/components/sections/Hero.astro`)
- **Primary blob:** `rounded-3xl bg-primary blur-xl opacity-80` (bottom-right accent)
- **Secondary blob:** `rounded-full bg-gradient-to-tr from-primary to-green-400 blur-2xl opacity-40` (top-left, skewed/rotated)

#### About Us Section (`src/components/sections/AboutUs.astro`)
- **Blob 1:** `bg-gradient-to-br from-primary to-orange-400 blur-3xl opacity-50` (rotated square, left side)
- **Blob 2:** `bg-gradient-to-br from-primary to-orange-400 rounded-full blur-3xl opacity-60` (top-right)
- **Blob 3:** `bg-gradient-to-tr from-primary to-green-400 rounded-full blur-2xl opacity-40` (bottom, wide skewed ellipse)

#### How It Works Section (`src/components/sections/HowItWorks.astro`)
- Same blob pattern as About Us (primary → green gradients, blur-3xl, rotated and skewed).

#### CTA Section (`src/components/sections/CTA.astro`)
- Uses a cluster of **small rotated squares** inside a blurred container:
  - `bg-green-500`
  - `bg-[#FCDC58]` (yellow)
  - `bg-primary`
- Two mirrored clusters: top-right and bottom-left.

#### Footer (`src/components/elements/Footer.astro`)
- Subtle blob behind logo area: `rounded-full rotate-12 skew-x-6 bg-primary blur-2xl opacity-20`

#### Features Section (`src/components/sections/features.astro`)
- Hover-activated blob inside each card:
  - `rounded-full bg-gradient-to-b from-purple-500/80 to-white opacity-25 blur-2xl`
  - Dark mode swaps to `from-white to-white` with `dark:opacity-5` → `dark:group-hover:opacity-10`

### 3.2 Inline SVG Illustrations

Several sections contain **hand-coded inline SVGs** that act as decorative graphics or mock UI elements.

#### Bento Grid (`src/components/sections/bentogrid.astro`)
- **Code-editor illustration** — SVG mimicking a window with path-based code lines.
- **Security shield illustration** — Circular SVG with a gradient-filled shield icon (`fill="url(#paint0_linear_0_1)"`).
- **Line / area chart** — Complex SVG paths with gradients (`fill="url(#paint0_linear_0_106)"`, `fill="url(#paint0_linear_0_705)"`) used to simulate analytics dashboards.
- **Social avatars** — Circular placeholder images (`randomuser.me`) inside bordered rings.

#### Theme Toggle (`src/components/theme-toggle.tsx`)
- **Sun icon** — Animated SVG with rays and a central circle.
- **Moon icon** — Animated crescent SVG.
- Both use `framer-motion` for rotate/scale transitions.

#### Icons (General)
- Most UI icons are **inline SVGs** from Lucide or Astro Icon (e.g., arrows, shields, user avatars, menu hamburger lines).
- Social icons in the footer (commented out) use Bootstrap-style SVG paths.

---

## 4. Dark Mode Strategy

- **Mechanism:** CSS class-based (`darkMode: "class"` in Tailwind config). The `.dark` class is toggled on `<html>` via localStorage (`appTheme` key) and a React theme-toggle component.
- **Key swaps:**
  - Background flips from sage green (`#d8e5cf`) to dark navy (`#143144`).
  - Box surfaces flip from sage to near-black (`#111827`).
  - Headings flip from dark navy to sage/off-white.
  - Gradient blobs that reference `to-white` switch to `from-white to-white` with reduced opacity.
- **Footer & CTA backgrounds:** Use `dark:from-gray-900` to darken their gray-gradient containers.

---

## 5. Assets & Imagery

- **Favicon / Hero image:** `/images/cooroora-pic.webp`
- **Mockups:** iPhone mockup (`iphone-mockup.png`) used in About Us.
- **How It Works graphic:** `how-it-works-md-blue.png` (light-theme explainer image).
- **Portfolio screenshots:** Various PNGs in `/public/images/`.
- **No custom SVG sprite sheet** — all SVGs are inline or loaded via `astro-icon` / `lucide-react`.

---

## 6. Notes for Future Designers

1. **Font changes:** If Raleway is replaced, update the Google Fonts `<link>` in `src/layouts/Layout.astro` and the `body { font-family: ... }` rule in the same file.
2. **Color changes:** Primary, secondary, and tertiary are hard-coded in `tailwind.config.cjs`. Theme-aware variables live in the `<style is:global>` block of `Layout.astro`.
3. **Blob consistency:** The blur + gradient + low-opacity pattern is the site’s signature. When adding new sections, reuse the existing blob formulas (`blur-2xl`, `blur-3xl`, `opacity-40`–`60`, `rounded-full` or `rounded-3xl`) to maintain visual cohesion.
4. **Gradient text:** The `from-indigo-600 via-primary to-green-600` gradient is the brand’s “hero text” look. Reserve it for primary headlines and the logo wordmark.
