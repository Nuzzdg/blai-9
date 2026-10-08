# Blai 9

A frontend-only website for Blai 9, a tapas and pintxos bar on Carrer de Blai in Barcelona. Built with React and Vite.

## Run locally

Requires Node.js 18 or newer.

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Content and imagery

Menu items, editable opening-hours placeholders, restaurant contact details and image references live in `src/data/menu.js`. The opening hours are intentionally placeholders because exact hours were not provided. Menu prices are omitted rather than guessed.

The current food and bar photos are replaceable Unsplash placeholders. Replace the image IDs in `src/data/menu.js` with the restaurant's own photography when available.

An official Instagram profile was not provided, so the site does not link to an unverified account.

## Pages deployment

The repository includes a GitHub Actions workflow that builds and deploys the site to GitHub Pages. The Vite base path is configured for the `blai-9` repository.
