# Tehseen Ahmed · Personal Portfolio

Source for [tehseenahmed.me](https://tehseenahmed.me), a portfolio for sharing selected product engineering work with clients and remote hiring teams.

## Highlights

- Case studies for Museum Advocate and Serve Me
- Responsive, accessible static HTML and CSS
- Netlify contact form with a dedicated confirmation page
- Google Analytics 4 and Google Search Console setup
- No build step or framework required

## Run locally

```bash
python3 -m http.server 8765
```

Then open `http://localhost:8765` in a browser.

## Structure

- `index.html` — portfolio page
- `thank-you.html` — form confirmation page
- `styles.css` — layout and visual system
- `script.js` — lightweight interactions and form analytics
- `assets/` — portfolio imagery and icons

## Deployment

The site is deployed on Netlify. The `.netlify` directory is intentionally ignored because it contains local deployment state.
