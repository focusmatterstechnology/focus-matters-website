# Focus Matters Technology Website

Static single-page marketing site packaged for xCloud Docker + NGINX deployment.
Plain HTML/CSS/JS. No Node build step is required.

## Structure

- `index.html` — the page.
- `css/tokens.css` — brand design tokens (colors, type, spacing, effects) copied from the Focus Matters Technology Design System.
- `css/site.css` — component styles (buttons, cards, inputs) and page layout.
- `js/site.js` — mobile menu toggle, booking-link handler, lead-form fake-submit.
- `assets/` — logo lockups and brand graphics exported from the design system.

## Before launch — fill these in

1. **Calendly / booking link** — `js/site.js`, the `CTA_URL` constant. Every "Book a call" button uses this.
2. **Phone number** — footer (`tel:` link) and the JSON-LD block in `index.html` `<head>`.
3. **Email address** — footer (`mailto:` link) and the JSON-LD block.
4. **Instagram handle + URL** — "Ask the IT Guy" section, footer, and JSON-LD `sameAs`.
5. **Google Analytics GA4 ID** — add the `gtag` snippet to `<head>` at deploy time.
6. **Guarantee / risk-reversal terms** — "Your risk, removed" section; currently a placeholder sentence.
7. **Lead-magnet form handler** — the guide-download form's `action` attribute (Formspree, Netlify Forms, etc.) in `index.html`.
8. **OG / Twitter share image** — `og:image` / `twitter:image` meta tags, needs an absolute URL to a 1200x630 image.
9. **Real testimonial(s)** — optional; none included yet.
10. **Shelby's portrait photo** — About section currently shows a placeholder box (`.fmt-portrait` in `index.html`); drop a photo into `assets/` and swap the placeholder `div` for an `<img>`.

Search the codebase for `[FILL IN` to find every placeholder.

## Deploy notes

This is a static page. For xCloud, use the included `Dockerfile`,
`docker-compose.yml`, and `nginx.conf`.

See `XCLOUD_DEPLOY.md` for deployment notes.
