# xCloud Deploy Notes

This repository is a static Focus Matters Technology website packaged for xCloud's Docker + NGINX stack.

## Recommended xCloud Setup

1. Create or use an xCloud server with the Docker + NGINX stack.
2. Create a Custom Docker app from this Git repository.
3. Use the repository root as the app root.
4. Use Docker Compose if xCloud asks for the run mode.
5. Point the production domain to the xCloud server.
6. Enable SSL in xCloud after DNS resolves.

## Local Verification

```bash
docker compose up --build
```

Then open:

```text
http://localhost:8080
```

## Current Domain Assumption

The site metadata, `robots.txt`, and `sitemap.xml` currently use:

```text
https://focusmatters.net
```

If the production domain changes, update:

- `index.html` meta tags and JSON-LD URL
- `robots.txt`
- `sitemap.xml`
