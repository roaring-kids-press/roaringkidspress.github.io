# Roaring Kids Press — website

An [Eleventy](https://www.11ty.dev/) static site, ready for GitHub Pages.

## Run locally
```
npm install
npm run serve      # dev server with live reload at localhost:8080
npm run build      # outputs static site to _site/
```

## How it's organized
- `src/_data/site.json` — site name, nav, email, tagline.
- `src/_data/seriesList.json` — one entry per series. **Add a non-Zavi series here** and pages generate automatically.
- `src/books/*.md` — one file per book. Front-matter drives everything (series, ages, pages, availability). Copy an existing file to add a book.
- `src/_includes/` — layouts and header/footer partials.
- `src/assets/css/style.css` — all styling and brand tokens (brown #5C3D2E / gold #C8963E).

## Adding a book
Copy `src/books/zavi-learns-to-roar.md`, change the front-matter. The `availability` list controls the format + retailer rows on the book page. Set `series:` to any slug from `seriesList.json`.

## Adding a new (non-Zavi) series
Add an object to `src/_data/seriesList.json`. Its landing page, home-page card, and filter button all appear automatically.

## Buy links
Replace the `url: "#"` placeholders in each book's `availability` block with your live KDP / IngramSpark / Apple Books URLs.

## Newsletter
The footer form posts to a hosted service (Formspree/MailerLite/Buttondown). Replace `YOUR_FORM_ID` in `src/_includes/partials/footer.njk`.

## Deploy to GitHub Pages
1. Push this repo to GitHub.
2. Add a GitHub Actions workflow (or use the Pages "build from /_site" setting) to build and publish.
3. `src/CNAME` already contains `www.roaringkidspress.com` — in your Zoho DNS, add a CNAME record pointing `www` to `<username>.github.io`, and configure the custom domain in repo Settings → Pages.

A ready-to-use Actions workflow is in `.github/workflows/deploy.yml`.
