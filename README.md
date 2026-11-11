# DVE Ministries — dveministries.com

Vite + React rebuild of the original WordPress site (content and photos carried over from the March 2025 archive).

## Run locally
```
npm install
npm run dev        # http://localhost:5175
```
or double-click `start.bat`.

## Deploy
Push to `main` on GitHub → Netlify builds with `netlify.toml` (`npm run build` → `dist/`). SPA redirect included.

## Structure
```
src/data/content.js   every line of copy, people, stories, sponsors — edit here
src/pages/            Home, About, Initiative (KJI / Wezesha Mtoto / My Period, My Pride / TCJI), Partners, Contact
src/components/       Layout (header/footer/mobile menu), ui (cards, grids, buttons)
public/img/           57 photos and logos from the original site (self-hosted)
```

## Contact form
Netlify Forms (`name="contact"`). Enable form detection on the Netlify project, then add a notification under Forms → Notifications. The original site addressed inquiries to dveministries501c3@gmail.com.
