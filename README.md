# TessWorks Website Redesign

Responsive multi-page static site. No build tools, frameworks or paid hosting required.

## Pages
- index.html — homepage and 20–25 second introduction film placeholder
- work.html — projects and demo-video placeholders
- projects/trading-system.html — algorithmic trading project
- projects/tess-ai.html — TESS AI project
- ecosystem.html — intelligent systems, automation, financial technology, emerging technology
- founder.html — founder profile and portrait placeholder
- contact.html — contact page

## Add media
Put files inside `assets/` with these exact names:
- `tessworks-intro.mp4` — homepage intro film (20–25 seconds)
- `trading-demo.mp4` — trading software demo
- `tess-demo.mp4` — TESS AI demo
- `harshit-photo.jpg` — founder portrait

Optional video poster images: `intro-poster.jpg`, `trading-demo-poster.jpg`, `tess-demo-poster.jpg`.

The video blocks are already connected to those filenames. Until you add the MP4s, the designed placeholders remain visible.

## Important image path fix
Your founder image must be in `assets/harshit-photo.jpg`, not at the repository root. In GitHub's upload page, drag the `assets` folder itself if using the web interface; alternatively create folder `assets` with Add file > Create new file and name it `assets/harshit-photo.jpg`, then upload the image content using GitHub Desktop or git. GitHub web upload preserves folders when you drag the folder from Finder into the upload area, but if it selects only the image, use GitHub Desktop or the browser upload picker after opening the folder and selecting the image. Confirm the final path shown in the repository is `assets/harshit-photo.jpg`.

## Before publishing
Replace generic GitHub/LinkedIn profile links with your actual profile URLs. Confirm `hello@tessworks.in` is an inbox you monitor. Preserve your existing `CNAME` file and GitHub Pages custom-domain settings.

Market graphics are illustrative, not live market data. Project stages are stated transparently; the site does not claim live trading or completed product capabilities.
