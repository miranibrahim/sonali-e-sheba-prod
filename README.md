# Sonali e-Wallet (Frontend Demo)

A pure front-end (HTML/CSS/JS) clone of the Sonali e-Wallet login and home screens. No backend, no build step — just static files.

## How it works

- **`index.html`** — login screen. Enter any phone number and PIN, then press **LOGIN**.
- **`dashboard.html`** — home screen. Tapping **Bank Balance** shows the PIN you entered on the login screen (stored only in the browser's `sessionStorage` — nothing is sent anywhere). Tapping **Wallet Balance** shows a placeholder value.
- Refreshing or opening `dashboard.html` directly without logging in redirects you back to the login screen.

## Run it locally

Just open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy to GitHub Pages

1. Create a new **public** GitHub repository named exactly:
   ```
   sonali-e-sheba-prod
   ```
2. Push these files to the repo's `main` branch:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Sonali e-Wallet frontend demo"
   git branch -M main
   git remote add origin https://github.com/<your-username>/sonali-e-sheba-prod.git
   git push -u origin main
   ```
3. On GitHub, go to **Settings → Pages**.
4. Under **Build and deployment → Source**, choose **Deploy from a branch**.
5. Under **Branch**, select `main` and folder `/ (root)`, then **Save**.
6. After a minute, your site will be live at:
   ```
   https://<your-username>.github.io/sonali-e-sheba-prod/
   ```

That's it — no build tools, no dependencies to install (Font Awesome icons load from a CDN).

## Notes

- This is a UI demo only. It does not connect to any real bank, wallet, or account — it recreates the look and basic interaction of the screens shown, with the PIN echoed back as a stand-in "balance" for demonstration purposes.
