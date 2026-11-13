#!/usr/bin/env bash
# Build and publish dist/ to the gh-pages branch (GitHub Pages serves that branch).
set -euo pipefail
cd "$(dirname "$0")/.."
npm ci && npm run build
node scripts/route-pages.mjs
cp dist/index.html dist/404.html   # fallback for any other path
T=$(mktemp -d); cp -r dist/. "$T"; cd "$T"
git init -q -b gh-pages && git add -A && git commit -q -m "Deploy $(date -u +%FT%TZ)"
git push -f "${PAGES_REMOTE:?set PAGES_REMOTE to the repo URL}" gh-pages
