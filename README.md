# Lunchee Iceland – lunchee.is

Landing page for **Lunchee Iceland** (electric lunch box, by N'OVEEN), sold B2B in Iceland.
Plain HTML/CSS/JS – nothing to install. Published with GitHub Pages; every push to `main` goes live in ~1 minute.

- Until the domain is connected: https://mikchange20.github.io/lunchee-is/
- After: https://lunchee.is

## Audience versions (each has its own link)

| Audience | Link |
|---|---|
| Car rentals (default) | `/rentals` |
| Work crews | `/crews` |
| Drivers & fleets | `/drivers` |
| Companies – employee gifts (Christmas campaign) | `/companies` |
| Healthy eating / diet (individuals, B2C) | `/diet` |
| Stores | `/stores` |

Until 1 December (Christmas campaign) the page opens on `/companies`, its tab is first, and the other versions show a gift bar at the top; from 2 December this switches off by itself (`XMAS_ON` in `js/main.js`).

Add `?lang=pl` for Polish. The form sends a hidden `segment` field.

## Where things are

- Shared text: `index.html` · audience texts + PL translations: `js/content.js`
- Colours and fonts: top of `css/style.css` (brand: "Lunchee – kierunek wizualny marki")
- After changing files in `css/` or `js/`, bump `?v=...` on their links in `index.html` (stops browsers mixing old cached files with new HTML).

## Do NOT put on the page (brief 20.10.2026)

Warranty length · accessories availability · delivery dates before stock is in Iceland · prices/supplier ·
logo printing/branding (not offered). Allowed for companies: "Order by 1 December, we'll deliver before Christmas."

## Connecting lunchee.is

See `DNS.md`.

History: this page was built in the `v2/` folder of the `noveen-lp` repo and moved here on 22.10.2026.
