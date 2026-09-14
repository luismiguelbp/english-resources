---
name: update-site
description: Keep search.json, sitemap.xml, and feed.xml in sync when English Resources HTML pages are added, removed, or retitled. Use when adding a course or lesson, changing page titles, deleting pages, or when the user mentions update-site, sitemap, RSS catalog, inventory feed, or regenerating search.
---

# Update site indexes

Run this checklist whenever HTML pages are added, removed, or retitled. Do not add a generator script. Edit the static files by hand.

Base URL: `https://luismiguelbp.github.io/english-resources/`.

## Checklist

1. **`search.json`** — Rebuild from page `<title>` tags. Each entry is `{title, url, section}` as consumed by `assets/js/search.js`. `url` is repo-relative (`video/thats-english/001.html`). `section` is one of Video Courses, Podcasts, Grammar & Reference, Courses & Tests, or Home. Decode HTML entities in titles (`&#x27;` → `'`, `&amp;` → `&`). Sort by title.

2. **`sitemap.xml`** — One `<url><loc>…</loc></url>` per HTML page. Use the absolute GitHub Pages URL. Add, remove, or rename the matching line. Do not list `search.json`, CSS, JS, or `feed.xml`.

3. **`feed.xml`** — Series inventory (video courses and podcasts only). One `<item>` per series hub, not per lesson and not a changelog. `<guid>` equals the item `<link>` (this site’s hub page). No media enclosures. `<pubDate>` is the first-episode date from the media source: YouTube `uploadDate` on the first video, iVoox `data-prm-pubdate` on the first audio, or the official first-episode date for Duolingo. Convert to RFC-822. Sort newest first. Set channel `<lastBuildDate>` to the newest item `<pubDate>`. Skip typo/link fixes.

4. **Head snippet** — New pages copy the RSS autodiscovery link from `index.html`. Do not retrofit existing pages.

5. **Verify** — Open `index.html` in a browser. Confirm search finds the new page. Confirm `sitemap.xml` and `feed.xml` parse as XML.

## Example item

```xml
<item>
  <title>Series name</title>
  <link>https://luismiguelbp.github.io/english-resources/video/series.html</link>
  <guid>https://luismiguelbp.github.io/english-resources/video/series.html</guid>
  <category>Video Courses</category>
  <pubDate>Wed, 27 Jun 2012 05:01:33 -0700</pubDate>
  <description>N lessons. One-line summary. First episode date from the media source.</description>
</item>
```
