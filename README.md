# Focus Matters Personal Hub Proxy

This repository is the thin NGINX deployment layer for `www.focusmatters.net`.
The personal hub itself is built and published through OpenAI Sites; this
container preserves the existing domain and reverse-proxies requests to the
published Site.

## What lives here

- `nginx.conf` — upstream proxying, response-header hygiene, asset caching,
  and conservative browser security headers.
- `Dockerfile` and `docker-compose.yml` — the existing xCloud/Docker runtime.
- `XCLOUD_DEPLOY.md` — server deployment notes.

The legacy static FMT files remain in Git history but are not the production
site. Do not restore them or change DNS when updating the personal hub.

## Deployment model

1. Publish the verified source version to the existing Focus Matters Site.
2. Confirm the upstream Sites URL is healthy.
3. Push any proxy changes to this repository.
4. On the existing server checkout, pull the exact commit and rebuild the
   current Compose service.
5. Verify both the container-local response and `https://www.focusmatters.net`.

The public hub remains the primary Focus Matters body of work. This proxy is
infrastructure only; content and page architecture belong in the Sites source
checkout.
