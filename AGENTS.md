# AGENTS.md - Focus Matters Technology Website

This repository contains the deployable static website for Focus Matters
Technology. It is public, so do not add private local paths, credentials,
client details, internal notes, or non-public infrastructure details here.

## Public-Safe Working Rules

- Treat this Git repository as the deployable website source.
- Keep the site static unless Shelby explicitly approves backend work.
- Use small, focused commits.
- Do not add secrets, API keys, OAuth files, private URLs, local home-directory
  paths, client data, family details, or internal operations notes.
- Do not claim a form, guide download, analytics integration, or automation
  exists until it is actually built and verified.
- Keep assets local under `assets/`; do not hotlink private or local files.

## Site Structure

- `index.html` - main static page
- `css/tokens.css` - brand design tokens
- `css/site.css` - page layout and component styles
- `js/site.js` - mobile menu and current mailto waitlist helper
- `assets/` - public website images and brand assets
- `Dockerfile`, `docker-compose.yml`, `nginx.conf` - xCloud Docker + NGINX
  deployment package
- `robots.txt`, `sitemap.xml` - crawl and sitemap metadata
- `XCLOUD_DEPLOY.md` - public-safe deployment notes

## Current Public Site Decisions

- Booking CTAs use the Calendly 15-minute call link:
  `https://calendly.com/focusmatters/15min`.
- Calendly CTAs currently open in a new tab with
  `target="_blank" rel="noopener"`.
- The AI guide section is a placeholder/waitlist until the actual
  `Demystifying AI for small local businesses` guide exists.
- The waitlist form uses a prefilled `mailto:` helper. Do not represent it as a
  backend email capture system.
- Instagram handle is `@asktheitguy`.
- Current public headshot asset is `assets/ShelbyHeadshot.png`.

## Standard Update Workflow

1. Inspect current state before editing:
   - `git status --short`
   - `rg` for affected copy, links, assets, or sections
2. Make the requested change in the smallest practical scope.
3. Verify locally before committing.
4. Update public metadata such as `sitemap.xml`, canonical URLs, and Open Graph
   tags when adding a page that should be indexed or shared.
5. Commit one logical change.
6. Push only when the change is ready for deployment.

## Verification Checklist

Before reporting completion:

- The working tree contains only intended changes.
- The homepage returns HTTP 200 in local/static preview.
- Changed links resolve or are intentionally external.
- Removed/replaced copy is actually gone.
- For visual changes, inspect desktop and mobile layouts.
- For new pages, navigation, sitemap, canonical metadata, and share metadata are
  consistent.
- The final commit hash is available.

## Private Workflow Notes

Detailed private workflow notes may exist outside this public repo. Keep those
private instructions out of GitHub unless they have been sanitized for public
release.
