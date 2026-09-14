# English Resources

- Read the [README](README.md) for setup, layout, and documentation.
- Read [DESIGN.md](DESIGN.md) before changing pages, CSS, or links.
- Discover skills under [`.agents/skills/`](.agents/skills/) and read the
  matching `SKILL.md` when the task fits. Do not load unused skills.
  After adding, removing, or retitling pages, follow
  [`.agents/skills/update-site/SKILL.md`](.agents/skills/update-site/SKILL.md).

## Engineering Principles

- **KISS — Keep It Simple:** choose the simplest solution that meets the requirements.
- **LEAN:** minimize waste—code, dependencies, steps, and work that add no value.
- **YAGNI — You Aren’t Gonna Need It:** don’t implement features or abstractions until they’re actually needed.
- **DRY — Don’t Repeat Yourself:** keep a single source of truth; link instead of copying.

## Project Constraints

- Static GitHub Pages site. No build step, bundler, or runtime until those are required.
- Deploy from `main` root when Pages is enabled.
- Do not copy Unique vault notes into this repo; they are sources, not site files.
- Commits: `<type>: <short imperative summary>` (`feat`, `fix`, `docs`, `chore`, `refactor`, `test`).

## Verification

- Open `index.html` in a browser. No test, lint, or build command applies.
