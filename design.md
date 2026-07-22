# CDE Website Design System

## 1. Brand Direction

CDE’s website presents the company as a specialist, technically rigorous structural durability consultancy. The design should feel precise, confident and engineering-led rather than decorative or conventionally corporate.

The visual identity combines:

- Dark structural surfaces
- Warm CDE gold accents
- Off-white editorial backgrounds
- Large, tightly spaced typography
- Architectural photography
- Fine grid lines and technical labels
- Restrained motion and clear interaction feedback

The experience should communicate clarity, independence, specialist expertise and long-term performance.

## 2. Core Design Tokens

### Colors

| Token | Value | Usage |
|---|---:|---|
| Ink | `#111718` | Dark sections, footer, buttons and primary text |
| Paper | `#f1f0eb` | Main page background |
| CDE Gold | `#e1c300` | Highlights, active states, links and emphasis |
| Soft Blue-Grey | `#cfe4e4` | Supporting cool tone |
| Pale Structural Grey | `#dce4e1` | Alternate sections and location bands |
| White | `#ffffff` | Text on dark imagery and clean cards |
| Standard line | `rgba(17, 23, 24, 0.18)` | Dividers and grids on light backgrounds |
| Light-on-dark line | `rgba(255, 255, 255, 0.15)` | Dividers and grids on dark backgrounds |

The gold should be used selectively. It is an accent, not a default background color for every call to action.

### Typography

Two Google Fonts are used:

- **Manrope** — headings, statistics, important labels and display text
- **DM Sans** — body copy, navigation, buttons and interface text

Typography principles:

- Display headings use tight line height and negative letter spacing.
- Body text uses generous line height for technical readability.
- Eyebrows and technical labels are uppercase with wide tracking.
- Gold emphasis may be used for one important word or phrase inside a heading.
- Avoid long paragraphs spanning the full viewport width.

Typical sizes:

| Element | Desktop behavior |
|---|---|
| Homepage hero | `clamp(62px, 8.1vw, 126px)` |
| Inner-page hero | `clamp(60px, 7.3vw, 110px)` |
| Section heading | Approximately `44–80px` |
| Card heading | Approximately `21–39px` |
| Lead paragraph | `17–18px` |
| Body copy | `14–17px` |
| Technical label | `9–11px`, uppercase |

## 3. Spacing and Layout

The main horizontal page padding is fluid:

```css
--pad: clamp(24px, 5vw, 76px);
```

Primary section spacing generally uses:

```css
padding: clamp(85px, 10vw, 150px) var(--pad);
```

Layout principles:

- Use strong two-column or asymmetric editorial grids.
- Maintain generous whitespace around major statements.
- Use 1px structural lines to organize content.
- Align important elements to the shared page padding.
- Full-width dark bands are appropriate for technical capabilities and facts.
- Cards should normally use square or minimally rounded geometry.

## 4. Header and Navigation

The navigation remains visible while scrolling.

Current behavior:

- Fixed to the top of the viewport
- 88px desktop height
- 72px mobile height
- Translucent dark background
- Moderate backdrop blur and saturation
- Fine bottom border and restrained glossy highlight
- White CDE logo without a duplicated text wordmark

Logo sizing:

- Desktop: `86px × 60px`
- Mobile: `74px × 52px`

Navigation rules:

- Links use white text.
- The current page and hover state use CDE gold.
- The desktop enquiry action uses a thin outlined treatment.
- Mobile navigation opens as a dark vertical panel below the header.
- The page beneath the navbar should remain partially visible through the glass effect.

## 5. Hero Sections

### Homepage Hero

The homepage uses a dramatic upward architectural photograph with:

- Dark directional overlay for legibility
- Fine vertical grid structure
- Large left-aligned statement
- Technical coordinates
- Gold keyword emphasis
- Supporting paragraph lower in the composition
- Circular exploration control

The image should remain visible and should not be obscured by excessive blur or overlay opacity.

### Inner-Page Heroes

Inner pages use a shared structure:

- Full-width photographic background
- Dark left-to-right gradient
- Technical eyebrow
- Large page-specific heading
- Short supporting statement
- Optional location or category metadata

Service and project detail pages use the same system with content populated from the selected record.

## 6. Core Components

### Section Label

Small uppercase text used to identify section order or purpose.

Example:

```text
02 — Integrated expertise
```

Use approximately `11px` text with `1.9px` letter spacing.

### Expertise Rows

Expertise rows are full-width technical navigation elements.

- Dark background by default
- Gold background on hover or active state
- Service number, title, description and arrow
- Entire row is keyboard- and pointer-accessible
- Selecting a row opens its service detail page

### Project Cards

Project cards contain:

- Project photography
- Location
- Project name
- Verified service scope
- Reference number
- Hover darkening or overlay feedback
- Full-card navigation to the project detail page

Do not invent project outcomes or detailed case-study narratives when the source material only provides a name and service scope.

### Filter Controls

Project filters are functional buttons, not decorative tags.

Available categories:

- All Projects
- Assessment
- Repair
- Durability
- Strengthening

The active filter uses a dark filled state. Other filters use an outlined state.

### Client Marquee

The “Organizations we’ve worked with” section uses all supplied client marks.

Behavior:

- Continuous horizontal loop
- Two repeated sets create a seamless animation
- Movement pauses on hover
- Logos are grayscale by default and reveal color on hover
- Edge masks soften entry and exit
- Reduced-motion preferences disable automatic movement

Client logos are stored in:

```text
assets/clients/
```

### CTA Sections

Major CTAs may use the CDE gold background with oversized dark typography.

Buttons should:

- Use clear action language
- Show a directional arrow
- Link to a genuine destination
- Avoid decorative actions that do nothing

The homepage “Let’s assess it” CTA links to `contact.html`.

## 7. Footer

The footer is a complete information component, not a logo-only strip.

It contains:

- White CDE logo on the left
- Regional positioning statement
- “Start a conversation” action
- Page navigation
- Dubai location
- Copyright: `© 2021 CDE Engineering Services`

The footer uses the Ink background and a white-filtered CDE logo. Do not place the logo inside a separate white card.

## 8. Contact Experience

The Contact page includes:

- Email
- Office telephone
- WhatsApp
- LinkedIn
- Instagram
- Full Dubai office address
- Project enquiry form
- External Google Maps directions link

Official social links:

- LinkedIn: `https://www.linkedin.com/company/construction-durability-engineers-cde/`
- Instagram: `https://www.instagram.com/cdeengineering/`

An embedded interactive map is intentionally not used. The clean location band and external directions link fit the visual system better.

## 9. Motion and Interaction

Motion should be subtle and purposeful.

Current interactions include:

- Scroll-triggered reveal animations
- Animated statistics
- Expertise-row hover states
- Project-card hover treatments
- Continuous client-logo marquee
- Mobile navigation toggle
- Functional project filters
- Sticky translucent navigation

Motion principles:

- Avoid playful bouncing or excessive parallax.
- Use easing and movement to reinforce clarity.
- Hover motion should typically remain below 6px.
- Respect `prefers-reduced-motion` for continuous animation.

## 10. Responsive Behavior

Primary breakpoints:

```css
@media (max-width: 900px)
@media (max-width: 600px)
```

Responsive principles:

- Multi-column editorial grids collapse to one column.
- Four-column facts collapse to two columns.
- Project grids become stacked cards.
- Service descriptions may move beneath titles.
- Desktop navigation is replaced by the menu button.
- Large headings scale down without horizontal overflow.
- Footer navigation is simplified on smaller screens.
- Client marquee logos reduce in width and height.

Every page should maintain:

- No horizontal overflow
- Legible hero contrast
- Accessible menu operation
- Comfortable touch targets
- Clear content hierarchy

## 11. Content and Source Rules

The authoritative CDE source material is located in the previously supplied CDE project folder.

Content rules:

- Use the supplied service taxonomy and technical descriptions.
- Use only verified project names, locations, images and scopes.
- Keep each of the 16 supplied services independently navigable.
- Keep all 10 supplied projects independently navigable.
- Do not invent project metrics, outcomes or client quotations.
- Clearly distinguish published case-study detail from a short portfolio reference.
- Use 2021 as the company establishment and copyright year.
- Maintain technical language while keeping explanations understandable to asset owners and project teams.

## 12. Assets

Primary brand assets:

```text
assets/images/logo.png
assets/images/hero.png
assets/clients/
```

The navigation and footer use the supplied logo with a CSS white filter on dark backgrounds.

Project imagery currently references the original CDE-hosted project image URLs. If those images are later supplied locally, they should be copied into `assets/projects/` and the CSS/JavaScript references should be updated.

## 13. Accessibility

Maintain the following standards:

- Descriptive image alternative text
- Visible keyboard focus
- Keyboard-operable service and project cards
- Semantic headings in logical order
- Sufficient text contrast over photography
- Functional labels for form controls
- `aria-expanded` on the mobile menu button
- Reduced-motion support for continuous marquee movement
- External links use `target="_blank"` with `rel="noopener"`

## 14. Files and Responsibilities

| File | Purpose |
|---|---|
| `index.html` | Homepage |
| `about.html` | Company positioning and principles |
| `services.html` | Full service directory |
| `service-detail.html` | Dynamic service-detail template |
| `projects.html` | Project directory and filters |
| `project-detail.html` | Dynamic project-detail template |
| `contact.html` | Contact details and enquiry form |
| `styles.css` | Shared visual system and responsive behavior |
| `script.js` | Interactions, source-aligned service/project data and client marquee |

## 15. Design Maintenance Checklist

Before publishing a visual update, confirm:

- The header remains readable over every hero image.
- The CDE logo has not been stretched or paired with a redundant wordmark.
- Gold is used as an accent rather than everywhere.
- New cards have a real destination or interaction.
- Project claims are supported by supplied source material.
- All client logos remain present in the marquee.
- Desktop and mobile layouts have no horizontal overflow.
- Footer copyright remains 2021.
- Contact and social links remain correct.
- Continuous motion respects reduced-motion preferences.
