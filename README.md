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

The hero, story and gallery photos are replaceable Unsplash placeholders. Replace the image IDs in `src/data/menu.js` with the restaurant's own photography when available.

An official Instagram profile was not provided, so the site does not link to an unverified account.

### Corrected dish photography

The pintxos, patatas bravas, calamari and sangria photos are local files in `public/images/`, selected to match the dishes shown. Photo credits and licenses:

- Pintxos: [Tagor70, Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Pintxos,_tapas_de_un_bar_del_Casco_Viejo_de_Vitoria-Gasteiz.jpg), CC BY-SA 4.0.
- Patatas bravas: [Juan Emilio Prades Bel, Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Patatas_bravas._Tapa_de_bar_(Espa%C3%B1a).jpg), CC BY 4.0.
- Calamari: [Mover el Bigote, Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Calamares_-_Bitoriano_-_Izarra_Taberna.jpg), CC BY 2.0.
- Sangria: [Ruth Hartnup, Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Pitcher_of_sangria.jpg), CC BY 2.0.

## Pages deployment

The repository includes a GitHub Actions workflow that builds and deploys the site to GitHub Pages. The Vite base path is configured for the `blai-9` repository.
