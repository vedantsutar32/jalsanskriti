# JalSanskriti Digital Archive

## Goal
Build a complete, responsive cultural-heritage archive that feels like an editorial museum experience rather than a dashboard. The site will present traditional Indian water systems with careful factual framing, documentary imagery, strong archive browsing, and polished educational interactions.

## Pages and navigation
- Create a shared sticky header, accessible mobile menu, footer, page transitions, and back-to-top control.
- Build `/` with the editorial image-led introduction, editable statistics, six featured systems, the “From Rainfall to Resource” sequence, comparison preview, preservation methodology, and sample archive record.
- Build `/archive` with live text search, horizontally scrollable mobile filters, clear result counts, and responsive archive cards.
- Build `/archive/$slug` as a reusable museum-record template, populated for all sample records and led by a full-width image, narrative sections, metadata table, conservation note, and related records.
- Build `/systems` with six visual system explainers, working-principle diagrams, modern relevance, and an interactive 2–3 system comparison.
- Build `/map` as an interactive illustrated India map with category-coded markers, zoom controls, search/filter controls, and selectable record popovers; structure the data so a full map provider can replace it later.
- Build `/gallery` with category filters, editorial masonry layout, image credits, keyboard-accessible lightbox, and next/previous navigation.
- Build `/about` with the archive purpose, academic project details, preservation process, and the eight named Group 7 members using initials only.

## Visual system
- Establish semantic design tokens in `src/styles.css` using the supplied off-white, indigo, terracotta, sand, green, and charcoal palette, with restrained texture and shadows.
- Use Cormorant Garamond for display headings and Manrope for body/interface text, loaded in the document head.
- Use generous editorial whitespace, sharp-to-subtle corners, fine rules, archival labels, large documentary imagery, and restrained reveal/hover motion with reduced-motion support.
- Source reusable documentary photographs from reputable public collections where suitable, retain visible attribution, and avoid unrelated or fabricated imagery.
- Preserve readability and touch targets across 360, 390, 768, 1024, and 1440+ widths.

## Reusable frontend structure
- Add shared data models for archive records, systems, gallery items, team members, statistics, comparison fields, and map coordinates.
- Add reusable `Navbar`, `Footer`, `SectionHeader`, `ArchiveCard`, `SystemCard`, `StatsSection`, `SearchBar`, `FilterBar`, `ArchiveHero`, `ArchiveMetadata`, `MapMarker`, `GalleryGrid`, `Timeline`, and `ComparisonTable` components.
- Use existing interface primitives for buttons, dialogs, selectors, sheets, tabs, and accessible controls, with project-specific variants rather than ad hoc styling.
- Keep every navigation destination real and give every content route distinct title, description, Open Graph, and Twitter metadata.

## Content integrity
- Include the seven requested record families: Rani-ki-Vav, Adalaj Stepwell, Johads, Ahar-Pyne, Kuhls, Khadin, and traditional temple tanks.
- Use broad, well-established descriptions only; avoid unsupported dates, status claims, statistics, institutions, and citations.
- Mark interpretive summaries or prototype-only metadata clearly as “Archive prototype note” or “Documentation pending verification.”
- Keep the supplied archive totals explicitly identified as project/prototype counts rather than national statistics.

## Interaction and verification
- Implement instant archive search across name, region, state, type, period, function, and description, plus combinable filters and a reset action.
- Implement marker selection, map pan/zoom simulation, gallery lightbox controls, mobile navigation, comparison selectors, animated counters, and subtle scroll reveals.
- Verify the core journey from home to filtered archive results to an individual record, plus map selection, gallery lightbox, comparison changes, and mobile navigation.
- Check the finished experience visually at the requested responsive widths and resolve build, console, overflow, and accessibility issues before completion.
