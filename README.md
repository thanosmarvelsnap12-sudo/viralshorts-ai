# viralshorts-ai

AI-powered platform for generating, editing, scheduling, and publishing profitable original YouTube content and short-form social media assets.

## Current milestone

ViralShorts AI Hub now includes an operator dashboard for managing a portfolio of channels as revenue-generating media assets. The Hub tracks channel stage, watch-time/CTR signals, revenue context, and production quality gates so automation stays focused on original content, viewer satisfaction, YouTube compliance, and long-term profit. The app also includes a persistent Strategy Workspace that stores editable channel strategy records in the browser so operators can define channel thesis, audience, and monetization plan before production begins.

## Local development

```bash
npm run dev
```

Open the printed local URL to preview the app.

## Build

```bash
npm run build
```

The build writes the static app to `dist/`, creates `dist/.nojekyll` for GitHub Pages, and validates that `index.html` still contains the app mount and JavaScript entrypoint.

## Checks

```bash
npm run check
npm run lint
```

The project is intentionally dependency-free right now, so checks use Node's built-in syntax validator for the app and tooling scripts.

## Build the app in GitHub

This repository includes a GitHub Actions workflow at `.github/workflows/build-and-deploy.yml` that builds the app directly in GitHub.

What it does:

1. Runs on pull requests, pushes to `main` or `work`, and manual runs from the GitHub Actions tab.
2. Checks out the repository in GitHub-hosted Ubuntu.
3. Sets up Node.js 22.
4. Configures GitHub Pages.
5. Runs `npm run build` in GitHub.
6. Uploads the generated `dist/` directory as the GitHub Pages artifact.
7. Publishes the built app to GitHub Pages for non-PR runs.

To turn on the hosted site in GitHub:

1. Go to repository **Settings → Pages**.
2. Set **Build and deployment → Source** to **GitHub Actions**.
3. Push to `main` or `work`, or run **Build and Deploy App** manually from **Actions**.
4. Open the `github-pages` environment URL shown on the completed workflow run.

## Roadmap

1. **Done:** Static landing app, studio preview, revenue-first workflow, portfolio scale messaging, GitHub build/deploy pipeline.
2. **Done:** Hub operator dashboard for channel portfolio tracking and production quality gates.
3. **Done:** Persistent channel strategy records and an editable strategy workspace backed by browser storage.
4. **Done:** Static analytics signal model and recommendation panel for watch time, CTR, subscriber conversion, and revenue decisions.
5. **Done:** Monetization planning workflows for YPP, affiliate offers, sponsors, and digital products.
6. **Next:** Add authentication, API integrations, and server-backed analytics ingestion.
