# Focus Matters Technology Website

Static single-page marketing site packaged for xCloud Docker + NGINX deployment.
Plain HTML/CSS/JS. No Node build step is required.

## Structure

- `index.html` — the page.
- `css/tokens.css` — brand design tokens (colors, type, spacing, effects) copied from the Focus Matters Technology Design System.
- `css/site.css` — component styles (buttons, cards, inputs) and page layout.
- `js/site.js` — mobile menu toggle.
- `assets/` — logo lockups and brand graphics exported from the design system.

## Before launch

Completed:

- Calendly booking link
- Phone number
- Email address
- Instagram handle and URL
- Shelby portrait photo
- Basic guarantee/risk-reversal copy
- Static `robots.txt` and `sitemap.xml`
- Lead magnet signup — the guide waitlist section now embeds a real Kit (ConvertKit) form (`data-uid="f920b22dc3"`), not a mailto placeholder.

Optional polish:

1. **Google Analytics GA4 ID** — add the `gtag` snippet to `<head>` at deploy time.
2. **OG / Twitter share image** — current tags use an existing brand image; create a purpose-built 1200x630 image later for better social previews.
3. **Real testimonial(s)** — optional; none included yet.
4. **AI guide document** — create the actual "Demystifying AI for small local businesses" guide before promoting the download heavily.

## Deploy notes

This is a static page. For xCloud, use the included `Dockerfile`,
`docker-compose.yml`, and `nginx.conf`.

See `XCLOUD_DEPLOY.md` for deployment notes.
