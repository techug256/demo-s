# Kibira Safaris

A bespoke, multi-page East African safari website with a warm editorial aesthetic: forest green, natural paper tones, expressive serif typography, full-bleed wildlife imagery, and careful mobile layouts.

## Implementation

React, TypeScript, Vite, Tailwind CSS, React Router, and Lucide icons. This is a standalone React implementation, not a WordPress theme or plugin. It does not modify the reference WordPress website.

The supplied Nkuringo screenshot was used as a structural and content reference, not embedded as a page image. The attached text file identified an existing Kibira Safaris concept; its brand name informed this new implementation. No contact details, review scores, accreditation claims, or invented tour prices were copied into this site.

## Pages

- Home with interactive safari finder and a short safari film.
- Safari collection: six sample private journeys, country and experience filters, duration filters, keyword search, sorting, and a saved-only view.
- Six safari detail pages with itinerary accordions, route overviews, highlights, and personalised planning links.
- Four destination guides: Uganda, Rwanda, Kenya, and Tanzania.
- Four experience guides and an experience overview.
- Three accommodation-style guides and a places-to-stay overview.
- Our story, thoughtful travel, journal, three full articles, searchable FAQs, privacy, terms, and a custom not-found page.
- A three-step personal safari planner, also available through the contact route.

## Functional details

- Hearts save and remove journeys. The shortlist persists in browser local storage.
- Search parameters preserve safari filters and preselect journeys, destinations, experiences, or stay preferences in the planner.
- The planner validates required fields, saves a brief locally, generates a text-file download, supports clipboard copying, and can be edited or reset.
- The planner does **not** send email, submit to a CRM, create a reservation, check live permits, or process a payment. The interface and privacy pages explain this clearly.
- The footer provides a working downloadable safari planning checklist.
- The film uses locally served licensed stock video, accessible controls, a focus-managed dialog, and Escape-to-close.
- The site includes mobile navigation, keyboard-visible focus, semantic landmarks, labelled inputs, empty search states, reduced-motion support, and direct-route fallbacks.

## Commands

```sh
npm install
npm run lint
npm run build
npx playwright install chromium
node scripts/test-site.mjs
```

The browser test serves the production build temporarily, runs desktop and mobile checks, writes screenshots under `reference/screenshots`, and shuts down its server and browser before exiting. It tests filters, sorting, search, shortlists, persistence, modal behaviour, itinerary accordions, FAQ search, planning, validation, file downloads, direct routes, image loading, and layout overflow at multiple screen widths.

## Content and a future WordPress handoff

Editable content is centralised in `src/lib/data.ts`; page templates live in `src/pages`, shared UI in `src/components`, and the complete responsive design system in `src/index.css`.

A future WordPress implementation can map journeys, destinations, experiences, and accommodation styles to custom post types, with countries and travel styles as taxonomies. The itinerary and highlights arrays are suitable for repeatable fields. Journal articles map naturally to posts. Alternatively, the existing React pages can use WordPress as a headless content source after an authenticated content workflow and API are configured.

Before accepting live enquiries, connect an owned email or CRM endpoint, add server-side validation and abuse protection, configure retention and consent, replace sample itineraries with confirmed operator content, and update the privacy and travel terms accordingly. No such integration is represented as already connected.

## Media

The homepage elephant panorama is an original AI-generated illustration styled as a travel photograph. The other wildlife and landscape photographs are licensed Pexels assets. The safari film is Pexels footage by Roman Odintsov. Images are illustrative and do not imply a specific wildlife sighting or a confirmed accommodation booking.

The original reference screenshot, source inspection material, and browser screenshots are stored outside `public` and are not part of the deployed website.
