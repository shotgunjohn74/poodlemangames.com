# poodlemangames.com

The Poodleman Games LLC website: a plain static site (HTML + CSS, no build step),
hosted on GitHub Pages at **https://poodlemangames.com**.

## Layout

```
index.html                     studio home
games/index.html               list of games
games/paperheroes/             Paper Heroes game page (papercraft theme)
games/paperheroes/privacy/     Paper Heroes privacy policy  <- Play Console "Privacy policy" URL
news/  faq/  press/  contact/  privacy/   studio pages
404.html                       GitHub Pages "not found" page
app-ads.txt                    AdMob seller verification (must stay at the domain root)
CNAME                          custom domain for GitHub Pages
.nojekyll                      serve files as-is (no Jekyll processing)
assets/css/site.css            studio styles (light + dark)
assets/css/paperheroes.css     Paper Heroes theme, layered on site.css
assets/img/                    web-sized images (logo, key art, screenshots)
assets/press/                  full-size press downloads
```

A future game gets its own folder under `games/<name>/`, with its own theme CSS
file if it needs one, plus a card on `games/index.html` and the home page.

Header and footer are repeated in every page; when you change one, change them all.

## Preview locally

```bash
python -m http.server 8123
```

Then open http://localhost:8123. (Paths start with `/`, so opening the files
directly from disk won't load the styles.)

## Publish on GitHub Pages

1. Create an empty public repo on GitHub (e.g. `poodlemangames.com`) and push this folder to it.
2. Repo **Settings → Pages**: Source = *Deploy from a branch*, Branch = `main`, folder `/ (root)`.
3. Custom domain: `poodlemangames.com` (already in `CNAME`). At your domain registrar, add DNS records:
   - `A` records for `@` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `CNAME` record for `www` → `<your-github-username>.github.io`
4. Once the DNS check passes, tick **Enforce HTTPS**.
5. Optional but recommended: verify the domain under your GitHub account's
   **Settings → Pages → Verified domains**, so nobody else can claim it.

## Google Play and AdMob checklist

- Play Console → **App content → Privacy policy**: `https://poodlemangames.com/games/paperheroes/privacy/`
- Play Console → **Store settings → Store listing contact details → Website**: `https://poodlemangames.com`
  (AdMob looks for `app-ads.txt` at the root of this domain.)
- Check `https://poodlemangames.com/app-ads.txt` loads, then in AdMob → **Apps → app-ads.txt**
  wait for the crawl (can take up to 24 hours after the Play listing shows the website).
- When the Play listing goes live, swap the "Coming soon" buttons on
  `games/paperheroes/index.html` for links to
  `https://play.google.com/store/apps/details?id=com.poodlemangames.paperheroes`
  (there's a comment by the first one), and post on `news/`.
