---
name: Obsidian Alabaster Editorial Terminal
colors:
  surface: '#faf9f4'
  surface-dim: '#dbdad5'
  surface-bright: '#faf9f4'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f4ef'
  surface-container: '#efeee9'
  surface-container-high: '#e9e8e3'
  surface-container-highest: '#e3e3de'
  on-surface: '#1b1c19'
  on-surface-variant: '#444748'
  inverse-surface: '#30312e'
  inverse-on-surface: '#f2f1ec'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1b1b'
  on-primary-container: '#858383'
  inverse-primary: '#c9c6c5'
  secondary: '#af2900'
  on-secondary: '#ffffff'
  secondary-container: '#db3500'
  on-secondary-container: '#fffbff'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#161e00'
  on-tertiary-container: '#7e895a'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c9c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474646'
  secondary-fixed: '#ffdbd2'
  secondary-fixed-dim: '#ffb4a2'
  on-secondary-fixed: '#3c0800'
  on-secondary-fixed-variant: '#891e00'
  tertiary-fixed: '#dce8b2'
  tertiary-fixed-dim: '#c0cc98'
  on-tertiary-fixed: '#161e00'
  on-tertiary-fixed-variant: '#414b23'
  background: '#faf9f4'
  on-background: '#1b1c19'
  surface-variant: '#e3e3de'
typography:
  display-xl:
    fontFamily: Syne
    fontSize: 56px
    fontWeight: '800'
    lineHeight: 60px
    letterSpacing: -0.03em
  display-xl-mobile:
    fontFamily: Syne
    fontSize: 38px
    fontWeight: '800'
    lineHeight: 42px
    letterSpacing: -0.02em
  display-italic:
    fontFamily: Newsreader
    fontSize: 48px
    fontWeight: '400'
    lineHeight: 54px
    letterSpacing: -0.01em
  display-italic-mobile:
    fontFamily: Newsreader
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 38px
    letterSpacing: 0em
  headline-lg:
    fontFamily: Syne
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 38px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Syne
    fontSize: 26px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Syne
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Newsreader
    fontSize: 19px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Newsreader
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  terminal-code:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: 0em
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.08em
  label-badge:
    fontFamily: JetBrains Mono
    fontSize: 10px
    fontWeight: '700'
    lineHeight: 12px
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 0.75rem
  margin: 3rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style
This design system fuses rigorous Swiss editorial layout discipline with the raw precision of early computing terminals and the tactile luxury of modern glass surfaces. It is tailored for high-agency digital products, developer platforms, design tools, and avant-garde media publications.

The aesthetic tension is intentional: high-contrast typographic collisions between literary serifs and monospaced technical codes, punctuated by structured dot matrices and translucent frosted layers. The interface evokes discipline, deliberate craftsmanship, intellectual authority, and high technical craft without slipping into sterile clinicalism.

## Colors
The palette is hyper-disciplined and completely excludes cool blues or purple tints. 

- **Primary Canvas & Contrast (`#F6F5F0` & `#0E0E0E`)**: The environment rests on a warm alabaster paper base (`#F6F5F0`). Obsidian deep black (`#0E0E0E`) commands typography, primary interactive states, solid buttons, and key structure.
- **Micro-Accents (`#FF4D1C` & `#E9F5BE`)**: Signal Vermilion (`#FF4D1C`) serves exclusively for system status, micro-indicators, cursor blinks, and high-priority flags. Soft Sage-Lime (`#E9F5BE`) acts as an understated editorial wash, selection highlight, or tertiary badge backdrop.
- **Glass & Outlines**: Elevated cards use pure white `#FFFFFF` or frosted acrylic `rgba(255, 255, 255, 0.72)`. All dividers, cells, and bounding boxes use structural hairline borders measured at `rgba(17, 17, 17, 0.12)`.

## Typography
Typographic rhythm balances industrial precision and editorial nuance:

- **Syne (Display & Headlines)**: Rendered ultra-bold, uppercase, or tightly tracked for section titles, anchor metric points, and key statements.
- **Newsreader (Editorial & Body Text)**: Provides tactile bookishness. Use standard upright styles for long-form narrative body and use the italic variant (`display-italic`) for contrasting lead-ins, quotes, and accented subheaders.
- **JetBrains Mono (Interface, Labels & Terminal Data)**: Applied strictly to metadata, tabular indices, system telemetry, interactive buttons, navigation tags, and input values. Always set label caps with expanded tracking.

## Layout & Spacing
The layout adheres to a modular Swiss grid underpinned by a repetitive dot-grid background (`1px` dots spaced `24px` apart, colored in `rgba(14, 14, 14, 0.08)`). 

- **Grid Architecture**: 12-column fluid grid system on desktop (`> 1024px`) with `1.5rem` gutters and `3rem` canvas margins. Switches to a 6-column architecture on tablet (`640px - 1023px`) and a 2-column or single-stack system on mobile (`< 640px`) with `1rem` edge margins.
- **Vertical Rhythm**: Layout modules snap along explicit baseline increments of `8px`. White space is architectural: vast breathing expanses framing dense, highly structured data blocks.

## Elevation & Depth
Depth avoids muddy multi-stop shadows, relying instead on structural layering, frosted refractions, and hard retro terminal offsets:

- **Flat Canvas (Level 0)**: Background `#F6F5F0` overlaid with the subtle technical dot grid.
- **Frosted Translucent (Level 1)**: Glass panels use `rgba(255, 255, 255, 0.72)`, backdrop filter `blur(12px) saturate(140%)`, and a hairline boundary `border: 1px solid rgba(17, 17, 17, 0.12)`.
- **Solid Floating Cards (Level 2)**: Solid `#FFFFFF` cards resting with a razor-thin border (`rgba(17, 17, 17, 0.12)`) and an architectural, low-blur offset shadow: `box-shadow: 4px 4px 0px 0px rgba(14, 14, 14, 0.1)`.
- **Overlay & Popovers (Level 3)**: Modal windows and persistent bottom toolbars with crisp dual separation: `box-shadow: 0 12px 32px -4px rgba(14, 14, 14, 0.12), 0 0 0 1px rgba(17, 17, 17, 0.16)`.

## Shapes
The shape language favors structured restraint (`roundedness: 1`). 

- Default interactive surfaces, cards, and input fields feature disciplined `0.25rem` (4px) soft corners.
- Modal panels and nested frosted cards scale up to `0.5rem` (8px).
- Status dots, counter pills, and terminal activity lights use full circles (`rounded-full`), establishing a strict geometry of orthogonal grids contrasted with sharp circular micro-elements.

## Components

- **Buttons**:
  - *Primary*: Obsidian black (`#0E0E0E`) fill with `#F6F5F0` text in `label-caps` (JetBrains Mono). Square/soft corners (`4px`), `0.5rem 1rem` padding, zero border. Hover introduces an immediate micro-shift with a vermilion accent dot.
  - *Secondary / Glass*: `rgba(255, 255, 255, 0.72)` background with backdrop blur, `1px solid rgba(17, 17, 17, 0.12)` border, and black monospace typography.
  - *Accent Active*: Soft Sage-Lime (`#E9F5BE`) fill with black text for secondary command-actions.

- **Floating Glass Cards**:
  - Composed of translucent frosted planes (`rgba(255, 255, 255, 0.72)`) surrounded by hairline dividers (`rgba(17, 17, 17, 0.12)`). Inner padding follows `space-lg`. Contains an optional technical top bar with monospaced breadcrumbs and a Signal Vermilion run-indicator (`#FF4D1C`).

- **Input Fields & Terminal Consoles**:
  - Inputs feature `#FFFFFF` or `rgba(255, 255, 255, 0.5)` background with a crisp `1px solid rgba(17, 17, 17, 0.2)` border.
  - Text rendered in `terminal-code`. Focus state eliminates default browser glow, shifting the border to `#0E0E0E` with a blinking `2px` Signal Vermilion caret.

- **Chips & Status Badges**:
  - Compact tags set in `label-badge` (10px JetBrains Mono, uppercase). Inactive or category chips use `#FFFFFF` with hairline borders. Selected chips use a soft wash of `#E9F5BE`. Critical notifications use `#FF4D1C` text with a 6px pulsing vermilion dot.

- **Checkboxes & Radios**:
  - Boxy `16px x 16px` containers with `2px` soft corners. Hairline border in resting state. Checked state fills obsidian `#0E0E0E` with an off-white inner square or cross-check instead of generic curved checkmarks.

- **Data Tables & Lists**:
  - Alternating rows stripped of heavy shadows. Monospaced headers in `label-caps` sitting above a `1px solid rgba(17, 17, 17, 0.16)` rule. Editorial values in `Newsreader`, numerical indices and timestamps strictly aligned right in `JetBrains Mono`.