# History of Philosophy (Philosophiegeschichte)

*Read this in [German](readme.md).*

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen.svg)](#) <!-- Insert your GitHub Pages link here -->

> **[Insert Screenshot]**
> *Tip: Insert a nice picture here (e.g., `assets/img/screenshot.png`) that shows your website in the browser (preferably in Dark Mode). Markdown syntax: `![Screenshot of History of Philosophy](assets/img/screenshot.png)`*

A static, interactive educational website on the global history of philosophy – from the wisdom traditions of Asia to postmodernism. The project combines a chronological visual timeline, in-depth era articles, over 60 philosopher profiles, and interactive quizzes within a responsive, puristic premium interface.

The website does not require a build step or a web server. It works completely offline directly via `index.html`.

## Features

- **Global Timeline:** 10 historical eras (including India, China, Islamic World, Japan).
- **Philosophical Filters:** Thematic filtering by Ontology, Epistemology, Ethics, Aesthetics, Logic, Metaphysics, Language, Power, Mind, and Being.
- **Era Articles & Profiles:** 10 detailed era overviews and over 60 individual philosopher profiles detailing core ideas and context.
- **Interactive Learning:** Randomized quizzes to test your knowledge of specific eras.
- **Premium Design:** Immersive single-column layouts, native Dark/Light mode (with local storage), typographically optimized, and accessible (ARIA).
- **Performance:** Modern `.webp` image formats and an extremely lean CSS Grid architecture.

## Getting Started

### Open Directly

Open `index.html` in your file explorer or via VS Code in your browser.
The application only uses local files and therefore works via `file://` without an internet connection.

## Project Structure

```text
Philosophiegeschichte/
├── index.html                   # Homepage (Timeline & Filters)
├── quiz.html                    # Interactive Quiz Module
├── philosophen/                 # 10 era articles and >60 individual profiles
│   ├── antike.html
│   ├── china.html
│   ├── indien.html
│   ├── islam.html
│   ├── japan.html
│   ├── mittelalter.html
│   ├── neuzeit.html
│   ├── moderne.html
│   ├── 20jh.html
│   ├── gegenwart.html
│   └── [name].html              # Individual philosopher profiles
├── assets/
│   ├── css/                     # Modular UI system
│   │   ├── core.css
│   │   ├── core-theme.css
│   │   ├── core-ui.css
│   │   ├── custom.css           # Premium UI Overrides
│   │   └── ui-kit.css
│   ├── img/                     # .webp Era images
│   └── js/                      # App Logic (Vanilla JS)
│       ├── philosopher-profile.js # Global database & templating
│       ├── quiz.js
│       ├── theme.js
│       └── timeline.js
└── docs/                        # Documentation of the UI system
```

## Core Modules

### Visual Timeline (`index.html`)
Timeline data is embedded directly in the homepage script. `assets/js/timeline.js` generates accessible accordion cards from this data. The filter allows users to sort eras based on core philosophical themes.

### Data-Driven Profiles (`philosopher-profile.js`)
Instead of static HTML repetition, all biographical and bibliographical data of the 60+ philosophers is centrally maintained in the `PHILOSOPHERS` array. The script dynamically renders the content into the empty HTML containers of the profile pages.

### Quiz Engine (`quiz.js`)
A lightweight module that generates random questions for each era, shuffles answer options, and displays an immediate evaluation including a score.

### Design (`custom.css`)
The design focuses on an academically precise, minimalist aesthetic. Featuring a native Dark Mode, soft gradients, and hover micro-interactions, the UI provides a premium reading experience inspired by modern museum websites.

## Technical Notes

- **Pure HTML, CSS, and Vanilla JavaScript:** No React/Vue dependencies.
- **No Build Process:** No NPM, Webpack, or Vite required.
- **Extreme Performance:** Tiny file sizes and highly optimized `.webp` graphics.

## Project License

The project is licensed under the [MIT License](LICENSE). You are free to use, modify, and distribute it.
