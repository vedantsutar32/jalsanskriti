# JalSanskriti presentation-ready refinement

## Goal

Refine the existing JalSanskriti project in place into a credible, premium academic heritage archive for Group 7’s IKS Assignment 6. Preserve every current route and working feature while correcting content, strengthening the academic identity, and improving accessibility and responsive behavior.

## Audit findings

- The build is currently clean and all requested routes exist.
- The About page has only 8 members, includes the wrong “Yash Patil,” and lacks the full college/semester/assignment identity.
- Statistics are ordered and worded inconsistently with the requested prototype labels.
- Archive detail pages lack several requested research sections and need safer verification labels.
- The current map is visually schematic; its markers are mouse-only and the mobile layout is excessively tall.
- Gallery categories and captions are incomplete, and arrow-key handling is active even when the lightbox is closed.
- Comparison content lacks climate, community role, and scale, and is not exposed as a semantic table.
- The site needs a skip link, stronger focus states, more consistent control usage, and responsive overflow checks.
- The visual foundation is strong, but repeated grids and stat-card patterns need more editorial variety.

## Implementation

### 1. Correct the shared archive source
- Add canonical project and academic information in the shared typed data module.
- Replace the team with the exact 10 names supplied, preserving Aaryan Patil and Aryan Patil separately.
- Keep exactly seven records and six educational system families; clarify that these are prototype categories, not a claim about India’s total traditions.
- Extend records with balanced research fields for historical context, landscape/ecology, community dimension, scale, and verification status, using “Requires field/source verification” wherever evidence is not established.
- Remove unsupported precise coordinates and conservation claims; retain clearly labelled approximate display positions for the prototype map.

### 2. Refine the shared museum design
- Preserve the deep indigo, terracotta, sand, green, off-white palette and editorial serif/body pairing.
- Rework statistics as a compact archive ledger, reduce repetitive card styling, and keep shadows, borders, badges, and motion restrained.
- Add subtle academic identification to the homepage, About page, project information, and redesigned footer.
- Add a skip link and consistent visible keyboard focus styling.

### 3. Upgrade each existing page
- **Home:** retain the exact hero headline, supporting copy, image, and CTAs; strengthen the archive masthead and IKS context; add “Water Knowledge as Indian Knowledge” with a balanced academic tone; refine the rainfall flow and methodology presentation.
- **Archive:** use the requested subtitle, searchable fields, labelled filters, clear-filters action, result count, empty state, and a brief skeleton transition; refine catalogue cards with record number, period, description, and View Record action.
- **Record pages:** add the requested eight research sections, complete metadata, responsible documentation status, improved unavailable-record state, and catalogue-style related records.
- **Systems:** present six named families with the full requested attributes and compact “How it works” diagrams; keep three-way comparison with all requested parameters.
- **Map:** create a more convincing India atlas surface with seven accessible markers, search, type filtering, zoom, location panel, record links, empty state, and an explicit approximate-position notice.
- **Gallery:** add all requested categories and complete title/location/category/status captions; preserve masonry and the keyboard-accessible lightbox while clearly labelling every current image as an educational reconstruction.
- **About:** redesign around About JalSanskriti, full academic information, project objective, IKS context, methodology, and a responsive 10-member grid using initials only as portraits.

### 4. Accessibility and responsive hardening
- Convert raw interactive buttons to the shared button component where appropriate.
- Make map markers keyboard operable and named, scope gallery shortcuts to the open dialog, and make comparison data semantically tabular.
- Verify heading hierarchy, labels, alt text, focus states, touch targets, contrast, image crops, and overflow at 360, 390, 430, 768, 1024, 1280, and 1440+ widths.

### 5. Final verification
- Exercise navbar/footer links, archive search and filters, every record, map selection, gallery lightbox, comparison selectors, mobile menu, and back-to-top.
- Confirm exactly 7 records, 6 system families, and 10 correctly named members everywhere.
- Check every content route’s metadata, browser console/runtime logs, build status, missing images, and dead controls.

## Technical details

- Keep heritage content in the existing typed shared data module and render through reusable archive components.
- Keep the existing TanStack Start route structure and semantic Tailwind design tokens; add no backend or unnecessary dependency.
- Treat loading as a subtle client transition because the current archive data is local and synchronous; do not introduce fake network behavior.