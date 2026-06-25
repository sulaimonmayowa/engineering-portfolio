---
name: Sulaimon Mayowa
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1b1b1b'
  on-surface-variant: '#4c4546'
  inverse-surface: '#303030'
  inverse-on-surface: '#f1f1f1'
  outline: '#7e7576'
  outline-variant: '#cfc4c5'
  surface-tint: '#5e5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1b1b1b'
  on-primary-container: '#848484'
  inverse-primary: '#c6c6c6'
  secondary: '#5e5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e1dfdf'
  on-secondary-container: '#626262'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#1b1b1b'
  on-tertiary-container: '#848484'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c6'
  on-primary-fixed: '#1b1b1b'
  on-primary-fixed-variant: '#474747'
  secondary-fixed: '#e4e2e2'
  secondary-fixed-dim: '#c7c6c6'
  on-secondary-fixed: '#1b1c1c'
  on-secondary-fixed-variant: '#464747'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c6'
  on-tertiary-fixed: '#1b1b1b'
  on-tertiary-fixed-variant: '#474747'
  background: '#f9f9f9'
  on-background: '#1b1b1b'
  surface-variant: '#e2e2e2'
typography:
  h1:
    fontFamily: Geist
    fontSize: 80px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.03em
  h1-mobile:
    fontFamily: Geist
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  h2:
    fontFamily: Geist
    fontSize: 56px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  h2-mobile:
    fontFamily: Geist
    fontSize: 36px
    fontWeight: '700'
    lineHeight: '1.2'
  h3:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Geist
    fontSize: 20px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-mono:
    fontFamily: Geist Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.05em
  caption:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.4'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1200px
  section-gap: 80px
  panel-padding: 40px
  card-padding: 24px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 60px
---

## Brand & Style
This design system centers on the intersection of engineering rigor and creative AI agency. The brand personality is authoritative yet approachable, characterized by a **Premium Minimalist** aesthetic that mirrors the clean code and architectural depth of a Full-Stack Engineer. 

The visual direction utilizes a **Modular Stacked** approach, treating each section of the portfolio as a distinct functional unit. This modularity emphasizes organization and technical clarity. By blending high-contrast typography with a muted, warm-neutral foundation, the design system evokes a sense of high-end hardware and sophisticated software interfaces. The experience should feel fast, precise, and intentionally structured.

## Colors
The palette is rooted in a "Paper & Ink" philosophy, using a warm off-white (`#F7F7F5`) for the background to reduce eye strain and provide a more premium feel than pure white. 

- **Primary & Text:** Pure black (`#000000`) is reserved for primary actions and hero headings to ensure maximum impact and clarity.
- **Secondary Text:** A refined grey (`#6B6B6B`) handles metadata and supporting copy.
- **Accent:** Indigo (`#6366F1`) is used sparingly for interactive highlights, code symbols, and AI-related indicators.
- **Surface Strategy:** Layers are built using subtle shifts in value—`#F3F2EF` for large layout panels and `#FCFCFB` for individual cards—creating depth without relying on heavy shadows.

## Typography
The typography system relies on the **Geist** family to communicate a developer-centric, high-performance vibe. 

- **Headings:** Set in Geist Sans with tight tracking and heavy weights. They should feel architectural and commanding.
- **Body:** Prioritizes legibility with generous line height.
- **Labels:** Every section and technical metadata tag utilizes **Geist Mono**. These must be prefixed with double slashes (e.g., `// tech-stack`) to reinforce the "code-first" narrative of the portfolio.
- **Scale:** High contrast between massive display titles and utility mono-labels creates a dynamic visual rhythm.

## Layout & Spacing
The layout follows a **Modular Fixed-Grid** model. Content is organized into large "Panels" that span the full width of the container. 

- **Modular Stacks:** Vertical sections are separated by significant whitespace (`80px`+) to allow each project or skill set to breathe.
- **Section Labeling:** Every panel should be preceded by a Geist Mono label (e.g., `// projects`) placed in the top-left margin or nested within the panel's header.
- **Responsive Behavior:** On mobile, panels lose their side padding but maintain the card-based structure. Desktop layouts should use a 12-column grid for card distribution within panels (e.g., project grids in 2 or 3 columns).

## Elevation & Depth
This design system avoids traditional shadows in favor of **Tonal Layering** and **Subtle Outlines**.

- **Level 0 (Background):** `#F7F7F5` — The canvas.
- **Level 1 (Panels):** `#F3F2EF` with a 1px solid border of `#E7E7E4`. These define the primary content areas.
- **Level 2 (Cards):** `#FCFCFB` with a 1px solid border of `#E7E7E4`. These represent interactive items like project showcases or blog posts.
- **Interactive State:** Upon hover, a card may receive a subtle "lift" using a very soft, low-opacity indigo shadow (`rgba(99, 102, 241, 0.08)`) and a slightly darker border.

## Shapes
The shape language uses exaggerated rounding to soften the high-contrast typography and engineering-heavy content, making the UI feel modern and tactile.

- **Panels:** Use a large `28px` radius to anchor major sections.
- **Cards:** Use a `20px` radius for inner content modules.
- **Buttons & Chips:** Always use the `pill-shaped` (9999px) radius. This creates a clear distinction between structural containers and interactive elements.
- **Icons:** Material Symbols Outlined should be used with a 1.5px stroke weight to match the refined lines of the Geist font family.

## Components
- **Primary Button:** Solid black background, white Geist text, pill-shaped. On hover, background shifts to Indigo (`#6366F1`).
- **Secondary Button:** Transparent background, 1px border (`#E7E7E4`), Geist text.
- **Project Cards:** Image at the top with a `12px` inner radius, followed by the project title (H3) and tech tags (Pills). The entire card is wrapped in the Card Surface (`#FCFCFB`).
- **Tech Chips:** Small pill-shaped containers with Geist Mono text, `#F3F2EF` background, and no border.
- **Input Fields:** Minimalist style with only a bottom border of `2px #E7E7E4`, focusing on the Geist typography. Focus state changes border to `#6366F1`.
- **Section Header:** A combination of the `// section-name` Geist Mono label and a large H2 heading.
- **Code Snippet Block:** Use the Panel background (`#F3F2EF`) with Geist Mono text, highlighting key syntax in Indigo.