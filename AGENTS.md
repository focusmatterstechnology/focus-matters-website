# AGENTS.md - Focus Matters Technology Website

This repository is the deployable Focus Matters Technology website package.
Any AI agent working here should follow this workflow so Jarvis, Codex, Claude,
or another tool can update the site without losing track of source, preview, or
deployment state.

## Current Site Map

- Deployment repo: `/Users/shelby/.openclaw/workspace/sites/focus-matters-website`
- GitHub repo: `https://github.com/focusmatterstechnology/focus-matters-website`
- LifeOS local copy: `/Users/shelby/Library/Mobile Documents/iCloud~md~obsidian/Documents/TheVault/LifeOS/Work/Focus Matters Technology/Website`
- Local preview URL: `http://localhost:8745/`
- Local preview server: detached `screen` session named `fmt-website`
- Temporary hosted domain: `https://merciful-abyss.1wp.site/`
- Intended production domain in metadata: `https://focusmatters.net`

## Source Of Truth

Treat the GitHub/deployment repo as the deployable source of truth.

The LifeOS copy is Shelby's local preview/editing copy and must stay in sync for
browser review. When changing deployable website files, update both places:

- `index.html`
- `css/`
- `js/`
- `assets/`
- `README.md` or workflow docs when relevant

Do not treat the temporary 1WP domain as editable source. It is only a deployed
runtime target.

## Standard Update Workflow

1. Read the current request and classify the change:
   - copy/content
   - layout/style
   - asset/image
   - call-to-action/link
   - new section/page
   - deployment/config
2. Inspect the current repo state before editing:
   - `git status --short`
   - search with `rg` for the affected text, link, asset, or section
3. Edit the deployment repo first.
4. Mirror the same deployable file changes into the LifeOS local copy.
5. Verify locally:
   - `curl -sSI http://localhost:8745/`
   - fetch changed assets or files directly when relevant
   - search the served HTML for changed links/text with `curl ... | rg`
6. If browser behavior matters, open and test the local preview or temp domain
   with browser automation.
7. Commit one logical change in the deployment repo.
8. Push `main` when Shelby expects the hosted site to update from GitHub.
9. If the temp domain does not update, report that xCloud/1WP likely needs a
   redeploy or cache refresh.

## Local Preview Server

The local preview currently serves the LifeOS copy, not the Git repo.

Check it:

```bash
curl -sSI http://localhost:8745/
```

Restart it if needed:

```bash
cd "/Users/shelby/Library/Mobile Documents/iCloud~md~obsidian/Documents/TheVault/LifeOS/Work/Focus Matters Technology/Website"
screen -dmS fmt-website python3 -m http.server 8745
```

Stop it if needed:

```bash
screen -S fmt-website -X quit
```

## Deployment Package

The repo is a static site packaged for xCloud Docker + NGINX.

Important files:

- `Dockerfile`
- `docker-compose.yml`
- `nginx.conf`
- `robots.txt`
- `sitemap.xml`
- `XCLOUD_DEPLOY.md`

The Docker image copies only the public site files into NGINX. Agent workflow
files such as this one are not part of the deployed website unless the Dockerfile
is changed.

## Current Known Site Decisions

- Booking CTAs should be normal direct links to
  `https://calendly.com/focusmatters/15min`.
- Shelby requested Calendly CTAs open in a new tab:
  `target="_blank" rel="noopener"`.
- The AI guide section is a placeholder/waitlist until the actual
  `Demystifying AI for small local businesses` guide exists.
- The current waitlist form uses a prefilled `mailto:` helper; do not imply a
  backend or automation exists until one is built.
- Instagram handle is `@asktheitguy` and links to
  `https://www.instagram.com/asktheitguy/`.
- Current headshot asset is `assets/ShelbyHeadshot.png`.
- Do not add fake testimonials, fake automation, fake analytics, or fake lead
  capture behavior.

## Verification Checklist

Before reporting completion:

- Repo working tree has only the intended changes.
- LifeOS local copy is synced for edited deployable files.
- `http://localhost:8745/` returns HTTP 200.
- Changed links return expected HTTP status or are intentionally external.
- Search confirms old text/links/handlers are gone when replacing behavior.
- For visual/layout changes, inspect at desktop and mobile widths.
- Commit hash is available for the user.

## New Page Or Feature Checklist

For new pages or larger features:

- Keep the site static unless Shelby explicitly approves backend work.
- Add navigation only when the page should be discoverable from the main site.
- Update `sitemap.xml` and canonical/Open Graph metadata if the page should be
  indexed or shared.
- Update `README.md` if the site structure or launch state changes.
- Keep assets local under `assets/`; do not hotlink private/local files.
- Keep accessibility basics: meaningful link text, alt text for content images,
  keyboard-accessible controls, and visible focus states.

## Commit Guidance

Use small commits with plain messages, for example:

- `Update booking CTA copy`
- `Add AI guide landing section`
- `Replace homepage headshot`
- `Add services page`

Do not batch unrelated website changes into one commit.

