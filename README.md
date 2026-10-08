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

The menu in `src/data/menu.js` was transcribed from the digital menu linked by the restaurant's official website: [https://menu-bcncook.web.app/blai9](https://menu-bcncook.web.app/blai9). It includes the listed Pinchos, Tapas, all 13 drink categories, serving sizes, prices, vegetarian labels, and available allergen and trace information. The source currently formats food prices with `€` and drink prices with `$`; the site preserves those displayed symbols rather than guessing whether the drink currency is a formatting error. Check the live menu or confirm with the bar before relying on prices or allergy details.

The hero, story and gallery photos are replaceable Unsplash placeholders. Replace the image IDs in `src/data/menu.js` with the restaurant's own photography when available. The full menu only shows food and drink photos where they match a specific menu item.

An official Instagram profile was not provided, so the site does not link to an unverified account.

### Dish photography

The pintxos and patatas bravas photos are local Wikimedia Commons files in `public/images/`. The calamari and sangria entries use the restaurant photos supplied by the user. Credits for the Wikimedia images:

- Pintxos: [Tagor70, Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Pintxos,_tapas_de_un_bar_del_Casco_Viejo_de_Vitoria-Gasteiz.jpg), CC BY-SA 4.0.
- Patatas bravas: [Juan Emilio Prades Bel, Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Patatas_bravas._Tapa_de_bar_(Espa%C3%B1a).jpg), CC BY 4.0.
- Sangria and calamari: photos supplied by the user.

## Pages deployment

The repository includes a GitHub Actions workflow that builds and deploys the site to GitHub Pages. The Vite base path is configured for the `blai-9` repository.
