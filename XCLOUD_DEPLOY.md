# xCloud Deploy Notes

This repository is the xCloud entry point for `focusmatters.net`. NGINX proxies
the public domain to the personal Focus Matters hub hosted by Sites. DNS stays
pointed at the existing xCloud server, and the previous static-site commit is
the rollback target.

## Recommended xCloud Setup

1. Create or use an xCloud server with the Docker + NGINX stack.
2. Create a Custom Docker app from this Git repository.
3. Use the repository root as the app root.
4. Use Docker Compose if xCloud asks for the run mode.
5. Keep the production domain pointed at the existing xCloud server.
6. Keep SSL enabled in xCloud.

## Local Verification

```bash
docker compose up --build
```

Then open:

```text
http://localhost:8080
```

## Upstream and production domain

The NGINX upstream is:

```text
https://focus-matters-hub-recreated.shelby264817.chatgpt.site
```

The hub's canonical metadata, `robots.txt`, and `sitemap.xml` use:

```text
https://www.focusmatters.net
```

The Sites project must remain publicly accessible for the reverse proxy to
serve visitors. To roll back, deploy the previous Git commit and rebuild the
Docker Compose service.
