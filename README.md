# Maksud Sharif — Portfolio

Static personal portfolio for [maksudsharif.com](https://maksudsharif.com), built with React, TypeScript, and Vite. React is used as a build-time template layer: Vite renders the complete page to HTML, so the deployed site does not ship a hydration bundle or require an application server, database, or runtime API.

## Local development

Requires Node.js 22.12 or newer.

```bash
npm ci
npm run dev
```

Vite serves the site at `http://127.0.0.1:4200`.

## Updating content

- Edit résumé-derived text, contact links, roles, capabilities, and technologies in `src/data/portfolio.data.ts`.
- Replace `public/assets/resume.pdf` to update the downloadable résumé.
- Edit layout components in `src/App.tsx` and visual styles in `src/css/styles.css`.

The PDF is a download only. The browser does not parse it and the site makes no backend requests.

## Production build

```bash
npm run build
npm run preview
```

The optimized static site is written to `dist/`.

The production artifact contains the rendered HTML, extracted CSS, and a small inline handler for closing the native mobile menu. It does not contain a client-side React bundle.

## Deployment

The production site is published through GitHub Pages from the repository's `develop` branch. Every push to `develop` runs `.github/workflows/deploy-pages.yml`, builds the site, uploads the Pages artifact, and deploys it to the `github-pages` environment.

GitHub Pages is configured with `maksudsharif.com` as its custom domain. Cloudflare remains the authoritative DNS provider, with the apex records directed to GitHub Pages and `www.maksudsharif.com` directed to `maksudsharif.github.io`. GitHub redirects the `www` hostname to the apex domain.
