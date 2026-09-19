# Geosmin

Personal website - projects, posts, and notes.

> ⚠️ **Work in Progress** - Content and design are actively being added and tweaked.

## About

Geosmin is a hand-built static website (no framework, no build step) for sharing projects, posts, and notes. Pages are plain HTML, styled with a shared stylesheet, and the header is injected at runtime via `site_header.js` so it stays consistent across every page.

## Project Structure

    Geosmin
    ├── posts/            # Individual post pages
    ├── projects/         # Individual project pages
    ├── about.html        # About page
    ├── index.html        # Home page
    ├── posts.html        # Posts index
    ├── projects.html     # Projects index
    ├── sensor.html       # LIS3MDL magnetometer project page
    ├── style.css         # Shared site styles
    ├── dashboard.css     # Header/dashboard styles
    ├── site_header.js    # Injects shared header, mobile responsive
    ├── favicon.svg       # Site favicon
    └── .gitignore

## Pages

| Page | Purpose |
|---|---|
| `index.html` | Landing page |
| `about.html` | About me |
| `projects.html` | Index of projects |
| `posts.html` | Index of posts and notes |
| `sensor.html` | raspberrypi-server-monitoring Live Feed |

## Running Locally

No build step required. Just open `index.html` in a browser:

    open index.html      # macOS
    start index.html     # Windows
    xdg-open index.html  # Linux

Or serve it locally so relative paths and JS behave exactly as they will in production:

    python3 -m http.server 8000

Then visit `http://localhost:8000`.

## Tech

- Plain **HTML**, **CSS**, and **JavaScript**
- No frameworks, no bundler, no dependencies
- Shared header injected via `site_header.js`
- Custom SVG favicon

## Roadmap

- [ ] Finish the About page
- [ ] Add more posts under `posts/`
- [ ] Add more project write-ups under `projects/`
- [ ] Polish responsive behaviour on mobile
- [ ] Add repo of the month section
- [ ] Add component of the month section

## License

TBD
