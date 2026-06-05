# smpark00.github.io

Personal academic website of **Seungmin Park**, built with the [al-folio](https://github.com/alshedivat/al-folio) Jekyll theme and deployed to GitHub Pages via GitHub Actions.

## Editing content

- **Bio / landing page**: `_pages/about.md`
- **News**: `_news/*.md`
- **Publications**: `_bibliography/papers.bib`
- **CV**: `_data/cv.yml`
- **Social links**: `_data/socials.yml`
- **Site config**: `_config.yml`

## How it deploys

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site with Jekyll and publishes the result to the `gh-pages` branch. GitHub Pages serves the site from `gh-pages`.

Theme: [al-folio](https://github.com/alshedivat/al-folio) (v0.16.3).
