#!/usr/bin/env bash
# Downloads self-hosted fonts and the nostr-zap script into assets/,
# so the site makes no requests to Google Fonts or jsDelivr.
# Run from the repo root: bash scripts/fetch_assets.sh
set -euo pipefail

cd "$(dirname "$0")/.."
mkdir -p assets/fonts assets/js

CDN="https://cdn.jsdelivr.net/npm"

for f in inter-latin-400-normal inter-latin-500-normal; do
  curl -fsSL "$CDN/@fontsource/inter@5.3.0/files/$f.woff2" -o "assets/fonts/$f.woff2"
done

for f in noto-serif-jp-latin-400-normal noto-serif-jp-latin-600-normal; do
  curl -fsSL "$CDN/@fontsource/noto-serif-jp@5.3.1/files/$f.woff2" -o "assets/fonts/$f.woff2"
done

curl -fsSL "$CDN/nostr-zap@1.3.2/dist/main.js" -o assets/js/nostr-zap-1.3.2.js

# Must match the integrity attribute in _layouts/post.html
EXPECTED="bZNDKE3iPE9QLGZeDLZUj0wkPvMsYpKi44aumZMryoew3QXDvvmaGM3/H3CKlUNM"
ACTUAL=$(openssl dgst -sha384 -binary assets/js/nostr-zap-1.3.2.js | openssl base64 -A)
if [ "$ACTUAL" != "$EXPECTED" ]; then
  echo "ERROR: nostr-zap hash mismatch" >&2
  exit 1
fi

ls -lh assets/fonts assets/js
echo "OK"
