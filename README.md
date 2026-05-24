# Wait, Hear Me Out...

An editorial blog with three content feeds — Gaming & Hobbies, Current Events, and Sports. Built with Astro 6.

## Getting started

```sh
npm install
npm run dev        # dev server at localhost:4321
npm run build      # production build to ./dist/
npm run preview    # preview the production build locally
```

## Project structure

```
src/
  content.config.ts          # defines the three content collections
  content/
    gaming/                  # markdown posts for Gaming & Hobbies
    current-events/          # markdown posts for Current Events
    sports/                  # markdown posts for Sports
  layouts/
    Base.astro               # outer shell: <html>, masthead, dark mode toggle
    ArticlePage.astro        # article layout: hero image, headline, body
  components/
    FeedCard.astro           # card used on the homepage (lead + secondary variants)
  pages/
    index.astro              # tabbed homepage
    gaming/[slug].astro      # individual gaming post pages
    current-events/[slug].astro
    sports/[slug].astro
  styles/
    global.css               # source stylesheet (also copied to public/styles/)
public/
  styles/global.css          # served as a static asset (keep in sync with src/styles/)
  favicon.svg
```

## Adding a post

Create a `.md` file in the relevant content folder. The filename becomes the URL slug.

```
src/content/gaming/my-new-post.md  →  /gaming/my-new-post
```

Every post requires this frontmatter:

```yaml
---
title: "Your Post Title"
description: "One-sentence summary shown on the homepage card."
date: 2026-05-24
author: "Your Name"
---
```

Two optional fields:

```yaml
image: "/images/my-hero.jpg"   # full-bleed hero image above the headline
tags: ["tag1", "tag2"]         # not displayed yet, available for future use
```

For the hero image, drop the file in `public/images/` and reference it with an absolute path starting with `/`.

Inline images work with standard markdown inside the post body:

```markdown
![Alt text](/images/my-inline-image.jpg)
```

## Design system

Styles live in `src/styles/global.css` and use CSS custom properties throughout. The key tokens:

| Token | Purpose |
|---|---|
| `--ink` | Primary text color |
| `--paper` | Background color |
| `--muted` | Secondary text (dates, captions) |
| `--rule` | Border/divider color |
| `--gaming` | Accent color for the Gaming feed |
| `--events` | Accent color for the Current Events feed |
| `--sports` | Accent color for the Sports feed |

Dark mode overrides all of these under `[data-theme="dark"]` on the `<html>` element.

**Fonts:** Playfair Display (headlines, weights 700 and 900) + Inter (UI and body copy), loaded from Google Fonts.

## Dark mode

The toggle button in the masthead switches between light and dark mode. The preference is saved to `localStorage` and applied before first paint (no flash on reload). If no preference is stored, it falls back to the OS `prefers-color-scheme` setting.

## Editing styles

`src/styles/global.css` is the source of truth. Because Astro imports it via a `<link>` tag pointing to `/styles/global.css` (a static file), changes to the source file need to be copied to `public/styles/global.css` to take effect:

```sh
cp src/styles/global.css public/styles/global.css
```
