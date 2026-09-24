# Design

UI rules for the static catalog. Follow this file when adding or changing pages, CSS, or links.

## Goals

- Modern, calm, readable layout on phone, tablet, and desktop.
- One-handed use on mobile: large tap targets, short pages, obvious next action.
- Opening a lesson is one tap: YouTube, RTVE, iVoox, or other sites/apps.

## Layout

- Mobile-first. One column by default. Widen the reading column on large screens; do not add a second content column unless a page needs it.
- Hub and Home cards may wrap 2 columns on tablet and 3 on desktop. Series, article, and resource lists stay one stacked column at every breakpoint.
- Viewport meta on every HTML page: `width=device-width, initial-scale=1`.
- Sticky or short top nav: Home, the main sections (Videos, Podcasts, Grammar & Reference, Courses & Tests), and Search. Keep nav labels in English.
- Every non-home page has a static breadcrumb above `<h1>` (`aria-label="Breadcrumb"`). Home has no breadcrumb. Use relative links for the ancestor trail; the last item is the current page title, not a link, with `aria-current="page"`.
- Prefer many short pages over one long scroll for series (one module, level, or block of lessons per page).
- Use overview cards to open those smaller catalog pages. Use jump links only when a long page cannot be split naturally.
- Lesson page chrome: title, duration if known, short objective, Previous / Next pager, primary play/open link, and a matching Previous / Next pager after the player. The breadcrumb covers going up the catalog; pagers cover sequential movement.
- Every page has a keyboard-visible skip link to the main content. Repeated navigation landmarks have distinct accessible labels.

## Links (YouTube and other apps)

- Prefer official `https://` URLs (`youtube.com/watch?v=…`, iVoox, RTVE, mansioningles, etc.). Do not invent custom URL schemes.
- Exception: if the source notes only provide a legacy `http://` URL, publish that URL as-is. Do not rewrite it to `https://` unless the notes already contain an HTTPS target. GitHub Pages does not upgrade outbound links.
- Let the browser and OS hand off to the YouTube or podcast app. Do not wrap links in JavaScript that intercepts the click.
- External links: `target="_blank"` and `rel="noopener noreferrer"`.
- Mark external links consistently with a north-east arrow.
- Primary action per lesson is a single, full-width-on-mobile button/link (min tap height 44px). Secondary links stay visually quieter.
- Link text names the destination and the lesson (`Watch on YouTube — Lesson 3`), not “click here”.
- Verb by medium, on both lesson pages and list pages: `Watch` for video (YouTube, RTVE), `Listen` for audio (iVoox, Libsyn), `Open` for everything else (playlists, podcast indexes, text sites).
- Do not embed as the only way to play. An official HTTPS iframe may sit below the primary link: iVoox (`https://www.ivoox.com/player_ej_{id}_4_1.html`), YouTube (`https://www.youtube.com/embed/{id}`), Libsyn (`https://html5-player.libsyn.com/embed/episode/id/{id}/height/90/theme/custom/autoplay/no/autonext/no/thumbnail/yes/preload/no/`), or Spotify (`https://podcasters.spotify.com/pod/show/{show}/embed/episodes/{slug}`). The link must still work if the embed fails. Do not autoplay. Do not hotlink media files.

## Visual

- System font stack. Comfortable body size (about 16–18px) and line length.
- High contrast text. Visible `:focus` and `:hover` on links and buttons.
- Use a distinct, accessible color for visited lesson links so learners can recognize completed material.
- Plenty of spacing. Avoid dense tables of tiny links on mobile; use stacked cards or lists.
- No decorative animation, no autoplay, no pop-ups.
- Use Bootstrap 5.3.8 CSS from the jsDelivr CDN plus a small custom stylesheet. Load the Bootstrap JavaScript bundle only when an interactive Bootstrap component requires it.
- Head on every page: shared `<meta name="description">` site summary, `<meta name="theme-color" content="#f6f4ef">`, and the SVG book-mark favicon (`assets/favicon.svg`) via a relative `<link rel="icon" type="image/svg+xml">` matching page depth.
- Brand mark: the same SVG book-mark shown decoratively inside `.navbar-brand` next to the `English Resources` wordmark (`<img class="brand-mark" ... alt="" aria-hidden="true" width="28" height="28">`, relative `src` matching page depth). Keep the text; never icon-only.

## Copy and content

- Nav, folders, and page titles: English. Body: English, with Spanish where it helps.
- Curated index: attribution, no claim of ownership of third-party courses.
- Do not include source-vault names, URLs, or page labels on the site.
- Shared footer on every page: this site is a curated index of third-party courses and does not claim ownership of those materials, plus an `About this site` link (relative to page depth) and a `Site code released under the Unlicense` link to `https://unlicense.org`.

## Sitemap

Publish legacy `http://` outbound links from the source notes when no HTTPS target is recorded. Restore truncated YouTube ids when the official 11-character id is confirmed. Omit lessons whose official video is still missing.

- `index.html` — Home (Videos, Podcasts, Grammar & Reference, Courses & Tests)
- `about.html` — About (sources, license, privacy, contact)
- `search.html` — Search (client-side filter over `search.json`; logic in `assets/js/search.js`). Whenever pages are added, removed, or retitled, update `search.json` from page `<title>` tags, `sitemap.xml`, and (for a new series or lesson) `feed.xml`. Follow `.agents/skills/update-site/SKILL.md`.
- `sitemap.xml` — One URL per HTML page. Absolute GitHub Pages loc. Maintain by hand.
- `feed.xml` — RSS 2.0 catalog of video and podcast series hubs and lesson pages. `pubDate` is the episode date from YouTube, iVoox, Duolingo, Libsyn, or RTVE when available. Newest first. Autodiscovery link lives in `index.html`; copy it onto new pages.
- `video/index.html` — Videos hub (That's English, Vaughan Basic, Vaughan Definitive, Rumbo al inglés, Follow Me Beginner, Gomaespuminglish, SNL English Spanish)
  - `video/thats-english.html` — modules 1–9 (198 programmes; YouTube and RTVE)
  - `video/thats-english/module-1.html` … `module-9.html` — 22 programmes per module
  - `video/thats-english/001.html` … `198.html`
  - `video/vaughan-basic.html` — 93 episodes
  - `video/vaughan-basic/lessons-01-20.html` … `lessons-81-93.html` — five lesson ranges
  - `video/vaughan-basic/01.html` … `93.html`
  - `video/vaughan-definitive.html` — Basic, Intermediate, Advanced (30 videos)
  - `video/vaughan-definitive/basic.html`, `intermediate.html`, `advanced.html` — 10 lessons per level
  - `video/vaughan-definitive/01.html` … `30.html`
  - `video/rumbo-al-ingles.html` — 33 videos with valid ids; Intermediate 06 and Advanced 02 shown as unavailable (no href)
  - `video/rumbo-al-ingles/01.html` … `33.html`
  - `video/follow-me.html` — 30 parts
  - `video/follow-me/01.html` … `30.html`
  - `video/gomaespuminglish.html` — 24 lessons (link list, no embeds)
  - `video/gomaespuminglish/01.html` … `24.html`
  - `video/snl-english-spanish.html` — 54 clips (link list, embeds on lesson pages)
  - `video/snl-english-spanish/01.html` … `54.html`
- `audio/index.html` — Podcasts hub (Tu Inglés, Alema, Gramática Popular, Relatos en inglés, Duolingo Spanish Podcast)
  - `audio/tu-ingles.html` — sessions, exams, and extras in source order (82 items)
  - `audio/tu-ingles/items-01-20.html` … `items-81-82.html` — five item ranges
  - `audio/tu-ingles/01.html` … `82.html`
  - `audio/alema-aprende-ingles.html` — 13 lessons (link list, no embeds)
  - `audio/alema/01.html` … `13.html`
  - `audio/gramatica-popular.html` — 34 lessons
  - `audio/gramatica-popular/01.html` … `34.html`
  - `audio/duolingo-relatos-en-ingles.html` — 12 seasons in catalog order (105 items)
  - `audio/relatos-en-ingles/temporada-1.html` … `temporada-12.html`
  - `audio/relatos-en-ingles/01.html` … `105.html`
  - `audio/duolingo-spanish.html` — 20 seasons in catalog order (170 items; Spanish-learning)
  - `audio/duolingo-spanish/temporada-1.html` … `temporada-20.html`
  - `audio/duolingo-spanish/01.html` … `170.html`
- `text/index.html` — Grammar & Reference hub
  - `text/alphabet.html` — English alphabet
  - `text/verb-tenses.html` — verb tenses (`play`)
  - `text/youglish.html` — YouGlish selection (A1 search: All, US, UK)
  - `text/youglish-tenses.html` — YouGlish clips for eight common tenses (name, then a *walk* sentence; All, US, UK)
  - `text/grammar.html` — grammar topic index (Mansión del Inglés HTTPS lesson links)
- `resources/index.html` — Courses & Tests, including word lists, sites, and legacy HTTP listings
  - `resources/learnenglish-speaking.html` — British Council speaking (A1–B2, five lessons each)
