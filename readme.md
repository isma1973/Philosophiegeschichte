# Philosophiegeschichte

*Read this in [English](readme-en.md).*

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen.svg)](#) <!-- Füge hier deinen GitHub Pages Link ein -->

> **[Screenshot einfügen]**
> *Tipp: Füge hier ein schickes Bild (z. B. `assets/img/screenshot.png`) ein, das deine Website im Browser (am besten im Dark Mode) zeigt. Markdown-Syntax: `![Screenshot der Philosophiegeschichte](assets/img/screenshot.png)`*

Eine statische, interaktive Lernwebsite zur globalen Geschichte der Philosophie – von den Weisheitslehren Asiens bis zur Postmoderne. Das Projekt verbindet eine chronologische visuelle Timeline, fundierte Epochenartikel, über 60 Philosophenprofile und interaktive Epochen-Quizzes in einer responsiven, puristischen Premium-Oberfläche.

Die Website benötigt keinen Build-Schritt und keinen Webserver. Sie funktioniert vollständig offline direkt über `index.html`.

## Funktionen

- **Globale Timeline:** 10 Epochen (inklusive Indien, China, Islamische Welt, Japan).
- **Philosophische Filter:** Thematische Filterung nach Ontologie, Epistemologie, Ethik, Ästhetik, Logik, Metaphysik, Sprache, Macht, Geist und Sein.
- **Epochenartikel & Profile:** 10 detaillierte Epochen-Überblicke und über 60 Philosophenprofile mit Kernideen und historischer Einordnung.
- **Interaktives Lernen:** Zufallsgeneriertes Epochenquiz zur Überprüfung des eigenen Wissens.
- **Premium Design:** Immersive Single-Column-Layouts, Dark/Light-Mode (mit lokaler Speicherung), typografisch optimiert und barrierefrei (ARIA).
- **Performance:** Moderne `.webp`-Bildformate und ein extrem schlanker CSS-Grid-Ansatz.

## Start

### Direkt öffnen

`index.html` im Datei-Explorer oder in VS Code im Browser öffnen.
Die Anwendung verwendet nur lokale Dateien und funktioniert daher auch über `file://` ohne Internetverbindung.

## Projektstruktur

```text
Philosophiegeschichte/
├── index.html                   # Startseite (Timeline & Filter)
├── quiz.html                    # Interaktives Quiz-Modul
├── philosophen/                 # 10 Epochenartikel und über 60 Einzelprofile
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
│   └── [name].html              # Einzelne Philosophenprofile
├── assets/
│   ├── css/                     # Modulares UI-System
│   │   ├── core.css
│   │   ├── core-theme.css
│   │   ├── core-ui.css
│   │   ├── custom.css           # Premium UI Overrides
│   │   └── ui-kit.css
│   ├── img/                     # .webp Epochen-Bilder
│   └── js/                      # App-Logik (Vanilla JS)
│       ├── philosopher-profile.js # Globale Datenbank & Templating
│       ├── quiz.js
│       ├── theme.js
│       └── timeline.js
└── docs/                        # Dokumentation des verwendeten UI-Systems
```

## Zentrale Module

### Visuelle Timeline (`index.html`)
Die Timeline-Daten stehen direkt im Skript der Startseite. `assets/js/timeline.js` erzeugt daraus zugängliche Akkordeon-Karten. Über den Filter lassen sich die Epochen nach philosophischen Kernthemen sortieren.

### Daten-getriebene Profile (`philosopher-profile.js`)
Statt statischer HTML-Wiederholung werden alle biografischen und bibliografischen Daten der über 60 Philosophen zentral im Array `PHILOSOPHERS` gepflegt. Das Skript rendert den Inhalt dynamisch in die leeren HTML-Container der Profilseiten.

### Quiz-Engine (`quiz.js`)
Ein leichtgewichtiges Modul, das für jede Epoche zufällige Fragen generiert, Antwortoptionen mischt und eine direkte Auswertung inklusive Score anzeigt.

### Gestaltung (`custom.css`)
Das Design fokussiert sich auf eine akademisch-präzise, minimalistische Ästhetik. Mit einem nativen Dark Mode, sanften Gradienten und Hover-Micro-Interaktionen bietet die UI ein hochwertiges Leseerlebnis, inspiriert von modernen Museums-Websites.

## Technische Hinweise

- **Reines HTML, CSS und Vanilla JavaScript:** Keine React/Vue-Abhängigkeit.
- **Kein Build-Prozess:** Kein NPM, Webpack oder Vite erforderlich.
- **Extreme Performance:** Sehr kleine Dateigrößen und optimierte `.webp`-Grafiken.

## Projektlizenz

Das Projekt steht unter [MIT-Lizenz](LICENSE). Du kannst es frei verwenden, verändern und verbreiten.
