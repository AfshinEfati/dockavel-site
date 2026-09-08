# Dockavel Site

Official landing page and documentation source for [Dockavel](https://github.com/AfshinEfati/dockavel).

The website source lives separately from the Dockavel runtime repository so users cloning Dockavel only receive the development stack itself.

## Current design branch

`feature/initial-design`

The first design is intentionally:

- dark-first and developer-tool focused
- bilingual (English / Persian with full RTL switching)
- Inter for English UI
- Vazirmatn for Persian UI
- Fira Code for terminal/code with ligatures enabled
- responsive for desktop and mobile
- dependency-light: static HTML, CSS and JavaScript
- CDN-backed fonts for the initial version

The landing page includes an interactive Doctor / Project Manager terminal preview, core features, project metadata, architecture, regional sources and a short quick-start section.

The full documentation IA/content is intentionally not implemented yet; `/docs/` currently contains a placeholder so the visual direction can be reviewed first.

## Local preview

From the repository root:

```bash
python3 -m http.server 8080
```

Then open:

```text
http://localhost:8080
```

No build step is required for this initial version.

## Repository separation

Dockavel runtime code remains in `AfshinEfati/dockavel`. Site assets, fonts, landing-page code and documentation stay here so they do not add weight to normal Dockavel clones.
