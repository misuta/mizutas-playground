#!/usr/bin/env python3
"""
IndexNow script for Mizuta's Playground
Submits URLs to Bing/IndexNow to speed up indexing.

Usage:
  python3 scripts/indexnow.py                        # submit every URL in the sitemap
  python3 scripts/indexnow.py <url1> <url2> ...      # submit specific URLs
"""

import sys
import os
import json
import urllib.request
import urllib.error
import xml.etree.ElementTree as ET

HOST = "playground.mizuta.eu"
KEY = os.environ.get("INDEXNOW_KEY") or "5afc52b37bf74a2675a76a890de57134"
KEY_LOCATION = f"https://{HOST}/{KEY}.txt"
SITEMAP_URL = f"https://{HOST}/sitemap.xml"
INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow"


def get_urls_from_sitemap():
    """Return every URL listed in the sitemap."""
    with urllib.request.urlopen(SITEMAP_URL) as response:
        tree = ET.parse(response)
    ns = {"sm": "http://www.sitemaps.org/schemas/sitemap/0.9"}
    return [loc.text for loc in tree.findall(".//sm:loc", ns)]


def submit_urls(urls):
    """Submit the URLs to IndexNow."""
    payload = {
        "host": HOST,
        "key": KEY,
        "keyLocation": KEY_LOCATION,
        "urlList": urls,
    }
    data = json.dumps(payload).encode("utf-8")
    req = urllib.request.Request(
        INDEXNOW_ENDPOINT,
        data=data,
        headers={"Content-Type": "application/json; charset=utf-8"},
        method="POST",
    )
    try:
        with urllib.request.urlopen(req) as response:
            status = response.status
    except urllib.error.HTTPError as e:
        status = e.code

    if status in (200, 202):
        print(f"✓ {len(urls)} URL(s) submitted (HTTP {status})")
    else:
        print(f"✗ Submission failed (HTTP {status})")

    for url in urls:
        print(f"  - {url}")


if __name__ == "__main__":
    if len(sys.argv) > 1:
        urls = sys.argv[1:]
        print(f"Submitting {len(urls)} specific URL(s)...")
    else:
        print("Fetching URLs from sitemap...")
        urls = get_urls_from_sitemap()
        print(f"Found {len(urls)} URLs in the sitemap.")

    submit_urls(urls)
