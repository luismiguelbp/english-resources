const form = document.getElementById("search-form");
const input = document.getElementById("search-input");
const results = document.getElementById("search-results");
const status = document.getElementById("search-status");
const MAX_RESULTS = 50;

let entries = [];

function normalize(text) {
  return text.toLowerCase();
}

function matches(entry, words) {
  const haystack = normalize(entry.title + " " + entry.section);
  return words.every((word) => haystack.includes(word));
}

function rank(entry, query) {
  return normalize(entry.title).includes(normalize(query)) ? 0 : 1;
}

function render(query) {
  const words = normalize(query).split(/\s+/).filter(Boolean);
  results.innerHTML = "";
  if (words.length === 0) {
    status.textContent = "Type to search " + entries.length + " pages.";
    return;
  }
  const hits = entries
    .filter((entry) => matches(entry, words))
    .sort((a, b) => rank(a, query) - rank(b, query) || a.title.localeCompare(b.title))
    .slice(0, MAX_RESULTS);
  status.textContent =
    hits.length === 0
      ? "No results for \u201c" + query + "\u201d."
      : "Showing " + hits.length + " result" + (hits.length === 1 ? "" : "s") + " for \u201c" + query + "\u201d.";
  for (const hit of hits) {
    const item = document.createElement("li");
    item.className = "lesson-item";
    const link = document.createElement("a");
    link.className = "lesson-link";
    link.href = hit.url;
    const label = document.createElement("strong");
    label.textContent = hit.title;
    link.appendChild(label);
    const meta = document.createElement("span");
    meta.className = "meta";
    meta.textContent = hit.section;
    item.appendChild(link);
    item.appendChild(meta);
    results.appendChild(item);
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  render(input.value.trim());
});

input.addEventListener("input", () => {
  render(input.value.trim());
});

fetch("search.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("index not found");
    }
    return response.json();
  })
  .then((data) => {
    entries = data;
    const initial = new URLSearchParams(window.location.search).get("q") || "";
    input.value = initial;
    render(initial.trim());
    input.focus();
  })
  .catch(() => {
    status.textContent = "Search is unavailable. The index could not be loaded.";
  });
