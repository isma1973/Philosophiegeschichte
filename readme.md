# Philosophiegeschichte

**Version 1.2 – 2026‑08‑28**

*Read this in [English](readme-en.md).*

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen.svg)](#)

![Screenshot der Philosophiegeschichte im Dark Mode](assets/img/screenshot-dark.png)

Eine vollständig modulare, datengetriebene Lernplattform zur globalen Philosophiegeschichte –
von den Weisheitslehren Asiens bis zur Gegenwart.
Mit **61 dynamisch gerenderten Philosophenprofilen**, 10 Epochenmodulen, einer interaktiven
Timeline, Quiz‑Engine, Theme‑System und ARIA‑optimierter UI —
komplett offline nutzbar und ohne Build‑Prozess.

## Funktionen

- **Globale Timeline:** 10 Epochen (Indien, China, Islamische Welt, Japan, Antike, Mittelalter, Neuzeit, Moderne, 20. Jh., Gegenwart) als zugängliche Akkordeon‑Struktur.
- **Philosophische Filter:** Thematische Filterung nach Ontologie, Epistemologie, Ethik, Ästhetik, Logik, Metaphysik, Sprache, Macht, Geist und Sein.
- **Datengetriebene Profile:** 61 Philosophenprofile, zentral in `PHILOSOPHERS[]` gepflegt. Jede Profilseite identifiziert den Philosophen per URL und rendert den Inhalt dynamisch in leere HTML‑Container.
- **Quiz‑Engine:** Zufallsgenerierte Fragen, Antwort‑Shuffling und direkte Score‑Berechnung pro Epoche.
- **Theme‑Engine:** Nativer Dark/Light‑Mode mit persistentem Zustand via `localStorage`.
- **UI‑Komponenten:** Lightbox, Modal, Tooltip, Toast, Tabs, Dropdown — alles in eigenständigen Vanilla‑JS‑Modulen.
- **Zero‑Build:** Reines HTML/CSS/JS, funktioniert offline direkt über `file://`.
- **ARIA‑optimiert:** Barrierefreie Attribute auf allen interaktiven Elementen.
- **Performance:** `.webp`‑Bildformat, modulares CSS‑Grid‑System.

## Start

### Direkt öffnen

`index.html` im Datei‑Explorer oder in VS Code im Browser öffnen.
Die Anwendung verwendet nur lokale Dateien und funktioniert daher auch über `file://` ohne Internetverbindung.

## Projektstruktur

```text
Philosophiegeschichte/
├── index.html                   # Startseite (Timeline & Filter)
├── quiz.html                    # Interaktives Quiz-Modul
├── philosophen/                 # 10 Epochenartikel + 61 Einzelprofile
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
│   └── [name].html              # Einzelne Philosophenprofile (61 Dateien)
├── assets/
│   ├── css/                     # Modulares UI-System (5 Schichten)
│   │   ├── core.css             # Design Tokens & Reset
│   │   ├── core-theme.css       # Dark/Light-Mode Variablen
│   │   ├── core-ui.css          # Basis-Komponenten
│   │   ├── custom.css           # Projekt-spezifische Overrides
│   │   └── ui-kit.css           # Wiederverwendbare UI-Bausteine
│   ├── img/                     # .webp Epochen-Bilder
│   └── js/                      # 12 Vanilla-JS-Module
│       ├── philosopher-profile.js  # Zentrale Datenbank (61 Profile) & Templating (68 KB)
│       ├── quiz.js                 # Quiz-Engine mit Shuffling & Scoring (36 KB)
│       ├── theme.js                # Dark/Light-Mode via localStorage
│       ├── timeline.js             # Akkordeon-Timeline mit ARIA
│       ├── lightbox.js             # Bild-Lightbox
│       ├── modal.js                # Modal-Dialog
│       ├── tooltip.js              # Tooltip-Komponente
│       ├── toast.js                # Toast-Benachrichtigungen
│       ├── tabs.js                 # Tab-Navigation
│       ├── dropdown.js             # Dropdown-Menü
│       ├── switches.js             # Toggle-Switches
│       └── core-ui.js              # UI-Bootstrap
└── docs/                        # Dokumentation des modularen UI-Systems
```

## Zentrale Module

### Visuelle Timeline (`timeline.js`)
Liest Epochendaten aus dem Seitenquelltext und rendert daraus zugängliche Akkordeon‑Karten mit ARIA‑Attributen (`aria-expanded`, `aria-controls`). Der Filter‑Dropdown sortiert die Epochen nach philosophischen Kernthemen in Echtzeit — ohne Seitenneuladen.

### Datenbank & Templating (`philosopher-profile.js`)
Das Herzstück des Projekts: **68 KB** zentrale Datenbank mit allen 61 Philosophenprofilen im Array `PHILOSOPHERS[]`. Jede Profilseite ist ein leeres HTML‑Gerüst. Beim Laden identifiziert das Modul den passenden Eintrag über den Dateinamen und füllt alle Felder dynamisch — kein doppelter HTML‑Code.

### Quiz‑Engine (`quiz.js`)
**36 KB** leichtgewichtiges Modul: Zieht für jede Epoche zufällige Fragen aus dem Datensatz, mischt die Antwortoptionen, zeigt direktes Feedback pro Frage und berechnet am Ende den Gesamtscore.

### Theme‑Engine (`theme.js`)
Togglet zwischen Dark und Light Mode durch Klassen‑Wechsel am `<html>`‑Element. Der gewählte Modus wird in `localStorage` gespeichert und beim nächsten Besuch automatisch wiederhergestellt.

### Modulares CSS‑System (`assets/css/`)
Fünf‑Schichten‑Architektur:
1. `core.css` — Design Tokens (Farben, Abstände, Schriften) & CSS Reset
2. `core-theme.css` — CSS Custom Properties für Dark/Light‑Mode
3. `core-ui.css` — Basis‑Typografie, Layout‑Primitives
4. `ui-kit.css` — Wiederverwendbare Komponenten (Cards, Buttons, Badges)
5. `custom.css` — Projekt‑spezifische Ästhetik & Overrides

## Technische Hinweise

- **Stack:** Reines HTML5, CSS3 und Vanilla JavaScript — keine React‑, Vue‑ oder Angular‑Abhängigkeit.
- **Kein Build‑Prozess:** Kein NPM, Webpack oder Vite erforderlich.
- **Offline‑fähig:** Funktioniert vollständig über `file://` ohne Webserver.
- **Daten‑Architektur:** Ein zentrales JS‑Array als Datenquelle für alle 61 Profile — kein doppelter HTML‑Code.
- **Barrierefreiheit:** ARIA‑Attribute auf allen interaktiven Elementen (Akkordeon, Filter, Quiz).

## Projektlizenz

Das Projekt steht unter [MIT‑Lizenz](LICENSE). Du kannst es frei verwenden, verändern und verbreiten.
