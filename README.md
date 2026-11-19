# TessWorks Website V2 — multi-page starter

A responsive static website built with HTML, CSS and JavaScript. No paid builder or build tools are required.

## Pages
- `index.html` — animated homepage with canvas network visual
- `ecosystem.html` — separate AI, Automation, Web3 and Fintech sections
- `work.html` — projects overview with links to individual project pages
- `trading-system.html` — algorithmic trading research project detail
- `tess-ai.html` — TESS AI assistant project detail
- `founder.html` — founder profile with photo placeholder
- `contact.html` — contact page

## Preview
Unzip and open `index.html` in Chrome or Safari.

## Add your founder photo
1. Put your portrait in the `assets` folder and name it `harshit-photo.jpg`.
2. In `founder.html`, find `<div class="photo-placeholder"> ... </div>`.
3. Replace that entire block with: `<img src="assets/harshit-photo.jpg" alt="Harshit Agarwal, Founder of TessWorks">`.

## Replace links and email
In `work.html`, replace `https://github.com/` with your actual GitHub profile URL. In `founder.html`, replace the GitHub and LinkedIn homepage links with your profiles. Replace `hello@tessworks.in` in `contact.html` with an email address you monitor.

## Publish/update with GitHub Pages
Upload all files and the `assets` folder to the root of your existing `tessworks-website` repository. Keep all HTML pages, `style.css`, and `script.js` at the root. Commit changes. GitHub Pages will redeploy from `main` / root if that is your configured source. Your old homepage will be replaced by this version.

After testing the GitHub Pages URL, keep your existing custom-domain configuration for `tessworks.in`. If domain setup is not complete, use the repository Settings → Pages → Custom domain instructions and follow the exact DNS records shown there; do not guess DNS values.

## Visual/video roadmap
The homepage network is an original canvas animation. The other visual panels are CSS/SVG animated illustrations, so no stock-video licensing or paid service is required. Later, replace selected panels with original footage of your actual software, or properly licensed/created background videos. Autoplay videos should be muted, compressed and have a mobile/reduced-motion fallback.

Before launch, verify all project claims and statuses, add real GitHub/LinkedIn links and a working contact email. Blockchain is labelled as brainstorming, not a launched product. Never publish API keys, passwords or private repository URLs.
