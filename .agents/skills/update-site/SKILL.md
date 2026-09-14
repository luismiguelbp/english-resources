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

3. **`feed.xml`** — Catalog of video and podcast **series hubs and lesson pages**. Do not list `index.html` or range/module pages (`module-*`, `lessons-*`, `items-*`, `temporada-*`, Vaughan Definitive level pages). `<guid>` equals the item `<link>` (this site’s HTML page). No media enclosures. `<pubDate>` is that lesson’s media-source date: YouTube `uploadDate`, iVoox `data-prm-pubdate`, Duolingo/Apple episode date, Libsyn RSS `pubDate`, or RTVE page date. Convert to RFC-822. Omit `<pubDate>` if the source has no date (including unavailable lessons). Sort newest first; undated items last. Set channel `<lastBuildDate>` to the newest item `<pubDate>`. Skip typo/link fixes.

4. **Head snippet** — New pages copy the RSS autodiscovery link from `index.html`. Do not retrofit existing pages.

5. **Verify** — Open `index.html` in a browser. Confirm search finds the new page. Confirm `sitemap.xml` and `feed.xml` parse as XML.

## Example item

```xml
<item>
  <title>Lechón 1 — Gomaespuminglish</title>
  <link>https://luismiguelbp.github.io/english-resources/video/gomaespuminglish/01.html</link>
  <guid>https://luismiguelbp.github.io/english-resources/video/gomaespuminglish/01.html</guid>
  <category>Video Courses</category>
  <pubDate>Tue, 20 Jan 2009 23:40:20 -0800</pubDate>
  <description>Watch on YouTube.</description>
</item>
```
