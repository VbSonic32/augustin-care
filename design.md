# Design System: St. Augustinegrass Care Guide

## 1. Visual Theme & Atmosphere

The "Texas Turf Editorial" system is an **earthy, organic, and academic-premium** design language. It takes inspiration from agricultural extension publications, balancing the raw textures of nature (soil, bark, grass) with the precision of a scientific laboratory. The canvas uses a warm off-white cream (`#FAF7F2`) to avoid the clinical feel of pure white, while deep forest greens anchor the brand moment on the hero and footer sections.

**Key Characteristics:**
- **Organic Depth**: Uses natural color gradients (Soil-to-Grass) rather than flat corporate palettes.
- **Editorial Typography**: A high-contrast serif (`Playfair Display`) provides an authoritative, "published" feel.
- **Scientific Precision**: Monospace accents (`DM Mono`) are used for metadata and technical labels, referencing field notes and lab reports.
- **Micro-Interactions**: Subtle animations like swaying grass blades and hover lifts add life to the static information.

---

## 2. Color Palette & Roles

### Core Brand Colors
- **Grass Deep** (`#1B4332`): The anchor color. Used for high-impact backgrounds like the Hero section and the Footer.
- **Soil** (`#2C1A0E`): The ground color. Used for primary section titles and as a contrast element for card headers.
- **Grass Bright** (`#52B788`): The primary action color. Used for call-to-action (CTA) buttons and success-state highlights.
- **Grass Light** (`#95D5B2`): The accent green. Used for italic emphasis in headings and hero eyebrow text.

### Neutral & Supporting
- **Cream** (`#FAF7F2`): The universal page canvas. A warm-neutral that references organic paper.
- **Straw** (`#C8A96E`): A secondary accent used for seasonal indicators and status moments.
- **Bark** (`#5C3D1E`): Used for muted text and secondary metadata.
- **Sky** (`#E8F4F0`): A cool-neutral tint used for background washes on active table cells.

---

## 3. Typography Rules

### Font Families
- **Display (Serif)**: `Playfair Display` (400, 700, 900). Used for H1, Section Titles, and Task Card titles. It carries the weight of authority.
- **Body (Sans)**: `DM Sans` (300, 400, 500). Used for all reading copy. It provides clean, modern legibility.
- **Meta (Mono)**: `DM Mono` (400, 500). Used for technical labels, eyebrows, and seasonal block markers.

### Hierarchy
| Role | Size | Weight | Line Height | Case | Font |
|------|------|--------|-------------|------|------|
| Hero Title | 3rem–7rem | 900 | 1.0 | Sentence | Playfair |
| Section Title | 1.8rem–3rem | 700 | 1.2 | Title | Playfair |
| Card Title | 1.1rem | 700 | 1.2 | Title | Playfair |
| Body Text | 1rem | 400 | 1.6 | Sentence | DM Sans |
| Technical Label | 0.72rem | 500 | 1.5 | Uppercase | DM Mono |

---

## 4. Component Stylings

### Buttons
- **Primary Pill**: `Grass Bright` fill with `Grass Deep` text. 100px (full pill) radius.
- **Hover State**: Background shifts to `Grass Light` with a -2px vertical lift.
- **Interactions**: All buttons use explicit property transitions (not `transition: all`) for performance.

### Content Cards
- **Task Cards**: White background, 1px Soil-tinted border, 12px corner radius.
- **Card Icon**: A circular background with a specific tint (e.g., `#D4EFE3` for Spring) containing an emoji or professional icon.
- **Elevation**: Flat by default; lifts on hover with a soft ambient shadow (`0 8px 24px rgba(44,26,14,0.1)`).

### Seasonal Indicators
- **Season Blocks**: Full-width color bands (Winter: Blue, Spring: Green, Summer: Gold, Fall: Rust) with mono labels.
- **Season Tags**: Inline pill tags within cards to indicate time-relevancy.

---

## 5. Layout & Spacing

- **Gutter Baseline**: 16px (`--space-4`).
- **Section Spacing**: Generous 80px (`--space-20`) to 96px (`--space-24`) vertical gaps to allow content to breathe.
- **Hero Proportion**: Full-height (min 100vh) with content pushed to the bottom to lead the eye into the grass layer.

---

## 6. Accessibility & Best Practices

- **Reduced Motion**: All animations (sway, lift) are disabled for users who prefer reduced motion.
- **Contrast**: Ensures all text on dark green backgrounds meets high-legibility standards (White or Grass Light).
- **Focus**: Clear focus rings (`outline-offset: 4px`) on all interactive elements.
