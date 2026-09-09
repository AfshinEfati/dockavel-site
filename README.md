# Dockavel Site

Official landing page and documentation source for [Dockavel](https://github.com/AfshinEfati/dockavel).

The website lives in a separate repository so developers cloning Dockavel receive the development stack only, not the website assets and documentation source.

## Current design branch

`feature/initial-design`

The current design is intentionally:

- dark-first and developer-tool focused
- bilingual English / Persian with full RTL switching
- Inter for English UI
- Vazirmatn for Persian UI
- Fira Code for terminal/code with ligatures enabled
- responsive for desktop and mobile
- dependency-light: static HTML, CSS and JavaScript
- CDN-backed fonts
- compatible with a project-style GitHub Pages URL today and a custom domain later

## Landing page coverage

The landing page now presents the current Dockavel product surface:

- multi-project Laravel + Node.js workflow
- PHP 8.2, 8.3, 8.4 and 8.5 side by side
- interactive `setup.sh` and incremental stack changes
- Project Manager: add, list, edit and remove
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
├── network/               # Download sources + Doctor + source:test
├── stack/                 # PHP, Node, databases, services and ports
├── troubleshooting/       # Diagnostics, local domains and data safety
└── reference/             # CLI, .env, service names, CI and roadmap
```

Every documentation page contains both English and Persian content and uses the same saved language preference as the landing page.

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

GitHub Pages publishing is intentionally not enabled by the design branch. The repository can stay private during design/review; publishing and repository visibility can be decided separately.
