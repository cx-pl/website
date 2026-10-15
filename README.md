# CX website

The CX language site is configured for **https://cx-pl.io** and built with VitePress. The content covers an experimental project; source and runtime snapshots are pinned in `content-sources.json`.

## Requirements

- Node.js 24.12.0 (see `.node-version`)
- pnpm 11 (the exact package manager version is recorded in `package.json`)

## Local development

```powershell
pnpm install --frozen-lockfile
pnpm docs:dev
```

Run the production build and preview:

```powershell
pnpm check
pnpm docs:preview
```

## Refresh imported references

`pnpm content:sync` imports only committed files from the local sibling repositories, using exact commits listed in `content-sources.json`. Review the diff, update source links and tested instructions, then commit the generated files with the pin changes. The site does not fetch source repositories during a normal build.

## Domain and deployment

The production build uses the root URL (`base: '/'`) and includes `docs/public/CNAME` for `cx-pl.io`. The GitHub Actions workflow expects a repository named `cx-pl/website` with Pages configured for GitHub Actions. Configure DNS at the domain registrar to point the apex and `www` host to GitHub Pages, then enable HTTPS in GitHub Pages settings. DNS targets can vary; follow the current GitHub Pages custom-domain instructions for the exact records. The workflow is prepared but this checkout has not been published.

## Content note

The pinned compiler and runtime commits identify checked-in snapshots. When the site was created, both repositories had uncommitted changes; the snapshots are not the latest working state or a released version. The pinned compiler build and tutorial run paths were verified on Windows x64 only. See [source revisions and verification](docs/project/revisions.md).
