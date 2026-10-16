# Clad & Craft Pro Tilers

Complete Next.js App Router website, built with TypeScript, Tailwind CSS and custom responsive CSS. Includes six business routes, a filterable project portfolio, keyboard/touch lightbox, material detail interaction and a WhatsApp quotation form.

## Run

```sh
npm ci
npm run dev
npm run typecheck
npm run build
npm start
```

## Deployment

Vercel framework: Next.js. Run from this repository root. The production canonical origin defaults to `https://clad-craft-pro-tilers.vercel.app`. Set `NEXT_PUBLIC_SITE_URL` before building if changing the production domain. No email, database or WhatsApp API credentials are needed: the form opens a prefilled WhatsApp conversation for the visitor to send.

## Content and assets

- All 14 supplied images were visually reviewed: 11 project photographs, one flyer, one business profile screenshot and one catalog screenshot.
- Project photography is optimised to WebP; screenshots and flyer are reference sources, not portfolio photographs.
- `public/wordmark.svg` and `public/wordmark-dark.svg` are transparent two-line typographic recreations of the flyer branding. The navigation and footer use matching accessible text. `public/icon.svg` is the compact brand initial favicon.
- Fireplace/patio photographs are grouped together; matching hallway and patterned entrance views are grouped. Curved and straight stairs are distinct installations. Ceramic fitting is explicitly labelled as progress; hallway images note ongoing surrounding works.
- Public primary lines: `0772 580 824` / `+263772580824` and `0715 617 140` / `+263715617140`. The separate WhatsApp Business screenshot line `+263 71 561 7140` is unconfirmed and is not a public contact.
- Prices transcribed from the catalog: cladding US$10 service only (no area basis asserted), 600 × 600 mm ceramic fitting US$3.75/m², porcelain floor fitting US$4/m². Indicative pricing note is shown.
- No invented addresses, email, dates, testimonials, certifications or project clients.
- The balcony service uses a clearly identified entrance photograph as a finish detail; no standalone balcony photograph was supplied.

## Accessibility and motion

Semantic headings, skip navigation, visible labels, focus rings, active navigation, accessible gallery controls, focus restoration/trapping, keyboard arrows/Escape and touch swipe. Viewport reveal/fade motion runs in both scroll directions. Navbar hides downward and returns upward. Reduced motion disables transitions, parallax and image zoom.

## Enquiries

The form validates required fields in the browser, formats the project information and opens `wa.me/263772580824`. The visitor reviews and sends the message in WhatsApp. The website does not claim that opening WhatsApp delivers the enquiry.
