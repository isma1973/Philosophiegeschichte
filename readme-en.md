# History of Philosophy (Philosophiegeschichte)

*Read this in [German](readme.md).*

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen.svg)](#) <!-- Insert your GitHub Pages link here -->

> **[Insert Screenshot]**
> *Tip: Insert a nice picture here (e.g., `assets/img/screenshot.png`) that shows your website in the browser (preferably in Dark Mode). Markdown syntax: `![Screenshot of History of Philosophy](assets/img/screenshot.png)`*

A static, interactive educational website on the history of philosophy from antiquity to the present. The project combines a chronological timeline, era articles, longer reading texts, and a quiz within a responsive interface.

The website does not require a build step or a web server. It works completely offline directly via `index.html`.

## Features

- Chronological timeline featuring six philosophical eras
- Accessible accordion with keyboard navigation and ARIA states
- Filtering by Logic, Ethics, Metaphysics, and Politics
- Era articles with images and zoomable image view
- 43 custom philosopher profiles including core ideas, works, and historical context
- Offline text reader for five longer documents
- Markdown rendering with lists, links, quotes, code blocks, and tables
- Era quiz with seven randomly selected and shuffled questions
- Light and dark theme with local storage support
- Responsive design for desktop, tablet, and mobile devices

## Getting Started

### Open Directly

Open `index.html` in your file explorer or via VS Code in your browser.

On Windows, the homepage can also be opened via PowerShell:

```powershell
Start-Process .\index.html
```

The application only uses local files and therefore works via `file://` without an internet connection.

## Pages

| File | Content |
| --- | --- |
| `index.html` | Homepage with navigation, topic filter, and interactive timeline |
| `lesen.html` | Offline reader for embedded Markdown texts |
| `quiz.html` | Quiz; the era is passed via the `?era=` parameter |
| `philosophen/antike.html` | Antiquity |
| `philosophen/mittelalter.html` | Middle Ages |
| `philosophen/neuzeit.html` | Early Modern Period |
| `philosophen/moderne.html` | Classical Modernity |
| `philosophen/20jh.html` | 20th Century Philosophy |
| `philosophen/gegenwart.html` | Contemporary Philosophy |
| `philosophen/[name].html` | Individual profile of a philosopher |

## Project Structure

```text
Philosophiegeschichte/
├── index.html
├── lesen.html
├── quiz.html
├── *.md                         # Source texts on the history of philosophy
├── philosophen/                 # Six era articles and 43 individual profiles
│   ├── antike.html
│   ├── mittelalter.html
│   ├── neuzeit.html
│   ├── moderne.html
│   ├── 20jh.html
│   ├── gegenwart.html
│   └── [name].html             # Individual philosopher profiles
├── assets/
│   ├── css/
│   │   ├── components/timeline.css
│   │   ├── core.css
│   │   ├── core-theme.css
│   │   ├── core-ui.css
│   │   ├── custom.css
│   │   └── ui-kit.css
│   ├── img/                     # Era images
│   └── js/
│       ├── lightbox.js
│       ├── philosopher-profile.js
│       ├── quiz.js
│       ├── theme.js
│       ├── timeline.js
│       └── vendor/marked.umd.js
└── docs/                        # Documentation of the UI system used
```

## Core Modules

### Timeline

Timeline data is located in `index.html`. `assets/js/timeline.js` generates the accessible accordion cards from this data. The styling is found in `assets/css/components/timeline.css`.

Each record contains:

- Time period and title
- Summary and description
- Important thinkers
- Themes for the filter
- Image, detail page, and quiz link

### Text Reader

`lesen.html` contains five embedded documents and can therefore be used directly via `file://` without `fetch()`. Markdown is rendered locally using `marked 18.0.11` from `assets/js/vendor/marked.umd.js`. There is no CDN dependency.

The standalone Markdown files in the project serve as readable source and working drafts. Changes to these files are currently not automatically transferred to `lesen.html`.

### Quiz

`assets/js/quiz.js` contains twelve questions for each of the six eras and the evaluation logic. Seven questions are selected per run. Questions and answer options are shuffled independently; the correct answer index is redetermined afterwards. For example, a quiz is called like this:

```text
quiz.html?era=Antike
```

### Philosopher Profiles

Each of the 43 individuals has a directly accessible HTML page under `philosophen/`. The six era articles link to all profiles. `assets/js/philosopher-profile.js` contains the centrally maintained biographical data and renders the content as well as the previous/next navigation offline into the respective HTML page.

### Design

The interface is based on the local Ismail-UI system:

- `core.css`: Reset, variables, and helper classes
- `core-theme.css`: Color themes and Dark Mode
- `core-ui.css`: Shared components
- `ui-kit.css`: Panels, buttons, and form elements
- `custom.css`: Project-specific additions
- `docs/layout.css`: Homepage layout

The pages under `docs/` document and demonstrate this UI system. They are not the main entry point for the philosophy website.

## Operating the Timeline

- `Tab`: Focus on the next interactive entry
- `Enter` or `Space`: Open or close era
- `Tab` inside opened entry: Reach "Read more" and "Start Quiz"

Only one era is opened at most. The corresponding preview image only appears in the opened section.

## Maintaining Content

- Timeline eras and filter themes: `index.html`
- Timeline component: `assets/js/timeline.js`
- Quiz questions: `assets/js/quiz.js`
- Era articles: `philosophen/*.html`
- Profile data and order: `assets/js/philosopher-profile.js`
- Texts in the offline reader: `DOCS` in `lesen.html`
- Images: `assets/img/`

## Technical Notes

- Pure HTML, CSS, and JavaScript
- No package installation required
- No build process required
- No external runtime dependencies
- `marked 18.0.11` is included locally and is licensed under the MIT License

## Project License

The project is licensed under the [MIT License](LICENSE). You are free to use, modify, and distribute it.
