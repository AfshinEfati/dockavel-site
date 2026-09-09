# Dockavel Site

Official landing page and documentation source for [Dockavel](https://github.com/AfshinEfati/dockavel).

**Website:** https://afshinefati.github.io/dockavel-site/  
**Documentation:** https://afshinefati.github.io/dockavel-site/docs/

The website lives in a separate repository so developers cloning Dockavel receive the development stack only, not the website assets and documentation source.

## Design

The current design is intentionally:

- dark-first and developer-tool focused
- bilingual English / Persian with full RTL switching
- Inter for English UI
- Vazirmatn for Persian UI
- Fira Code for terminal/code with ligatures enabled
- responsive for desktop and mobile
- dependency-light: static HTML, CSS and JavaScript
- CDN-backed fonts
- compatible with the current GitHub Pages project URL and a future custom domain

## Landing page coverage

The landing page presents the current Dockavel product surface:

- multi-project Laravel + Node.js workflow
- PHP 8.2, 8.3, 8.4 and 8.5 side by side
- interactive `setup.sh` and incremental stack changes
- Project Manager: add, list, edit and remove
- project-aware shell / Artisan / Composer / npm command routing
- minimal `.dockavel.yml` metadata
- Nginx project routing and rollback-aware project changes
- `doctor` environment/stack diagnostics
- `source:test` connectivity diagnostics
- Official, IranServer, Runflare, China and Custom source presets
- MySQL, PostgreSQL, Redis, Node.js, phpMyAdmin and pgAdmin profiles
- data-safety behavior and hosts-file ownership
- quick start
- current roadmap, clearly separated from released features

## Documentation

Documentation is intentionally separate from the landing page and currently has these sections:

```text
docs/
├── index.html             # Overview / getting started
├── projects/              # Project Manager
├── commands/              # shell / Artisan / Composer / npm routing
├── network/               # Download sources + Doctor + source:test
├── stack/                 # PHP, Node, databases, services and ports
├── troubleshooting/       # Diagnostics, local domains and data safety
└── reference/             # CLI, .env, service names, CI and roadmap
```

Every documentation page contains both English and Persian content and uses the same saved language preference as the landing page.

## Documentation sync policy

The Dockavel runtime repository and this website are maintained as one public product surface.

Whenever a user-facing Dockavel feature, service, runtime, source preset, CLI command, configuration option, port, workflow or behavior is added or materially changed:

1. update `README.md` and `README.fa.md` in `AfshinEfati/dockavel` when the change belongs in the runtime overview,
2. update the matching page under `docs/` in this repository,
3. update the landing page when the change is important enough to be part of the product overview,
4. keep English and Persian documentation aligned,
5. update the sitemap when a new documentation route is added.

Internal refactors and fixes that do not change user-facing behavior do not require landing-page changes.

## SEO and sharing

The published site includes:

- favicon and web manifest
- canonical URLs
- Open Graph metadata
- Twitter/X large-card metadata
- social preview image
- `robots.txt`
- `sitemap.xml`

## Local preview

From the repository root:

```bash
python3 -m http.server 8080
```

Then open:

```text
http://localhost:8080
```

Documentation:

```text
http://localhost:8080/docs/
```

No build step is required.

## Repository separation

Dockavel runtime code remains in `AfshinEfati/dockavel`.

This repository contains the landing page, visual assets and documentation so normal Dockavel clones stay focused on the runtime itself.

## Publishing

GitHub Pages is published from the `main` branch.

Current URL:

```text
https://afshinefati.github.io/dockavel-site/
```

A custom domain can replace the project-style GitHub Pages URL later without moving the site source back into the runtime repository.
