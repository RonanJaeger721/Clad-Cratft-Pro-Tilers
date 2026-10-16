# Verification — 16 October 2026

Production: https://clad-craft-pro-tilers.vercel.app

## Passed

- Production Next.js build and TypeScript checks.
- All six business routes at 375, 390, 430, 768, 1024, 1366 and 1440 CSS pixels: 42 route/viewport combinations, HTTP 200, one H1, no horizontal overflow or broken rendered images.
- Desktop and mobile visual inspection of layout, typography, photography, pricing and contact form.
- All 40 unique links checked, including service anchors, valid international call links and contextual WhatsApp URLs.
- Project images, favicon, transparent wordmarks, robots.txt and sitemap.xml served successfully.
- Unique page titles/descriptions, production canonicals, social metadata and verified business structured data.
- Gallery filtering, fullscreen view, next/previous buttons, keyboard arrows, Escape, focus management and mobile swipe.
- Material-study whole/detail control.
- Navbar hide on downward scroll and return on upward scroll; mobile navigation.
- Required form fields and formatted WhatsApp payload, including all five enquiry fields. Outgoing navigation intercepted during QA; no test message was sent.
- Reduced-motion rendering.
- No browser console/page errors across the public test suite.
- Vercel production runtime error scan for the recent available window returned zero records.

## Boundaries

- Responsive testing used Chromium/Edge browser emulation, not physical iOS or Android devices.
- WhatsApp delivery is controlled by the visitor sending the prepared message in WhatsApp. No automated message delivery, email service or website storage is claimed.
- The screenshot's additional business number remains unpublished pending confirmation.
- Existing project photography is used without inventing project locations, dates, clients or budgets.

The GitHub repository is connected to the Vercel project for subsequent deployments.
