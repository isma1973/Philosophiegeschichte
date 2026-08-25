# Philosophiegeschichte

Eine statische, interaktive Lernwebsite zur Geschichte der Philosophie von der Antike bis zur Gegenwart. Das Projekt verbindet eine chronologische Timeline, Epochenartikel, längere Lesetexte und ein Quiz in einer responsiven Oberfläche.

Die Website benötigt keinen Build-Schritt und keinen Webserver. Sie funktioniert vollständig offline direkt über `index.html`.

## Funktionen

- Chronologische Timeline mit sechs philosophischen Epochen
- Zugängliches Akkordeon mit Tastaturbedienung und ARIA-Zuständen
- Filterung nach Logik, Ethik, Metaphysik und Politik
- Epochenartikel mit Bildern und vergrößerbarer Bildansicht
- Offline-Textleser für fünf längere Dokumente
- Markdown-Darstellung mit Listen, Links, Zitaten, Codeblöcken und Tabellen
- Quiz mit fünf zufällig ausgewählten Fragen
- Helles und dunkles Farbschema mit lokaler Speicherung
- Responsive Darstellung für Desktop, Tablet und Mobilgeräte

## Start

### Direkt öffnen

`index.html` im Datei-Explorer oder in VS Code im Browser öffnen.

Unter Windows kann die Startseite auch über PowerShell geöffnet werden:

```powershell
Start-Process .\index.html
```

Die Anwendung verwendet nur lokale Dateien und funktioniert daher auch über `file://` ohne Internetverbindung.

## Seiten

| Datei | Inhalt |
| --- | --- |
| `index.html` | Startseite mit Navigation, Themenfilter und interaktiver Timeline |
| `lesen.html` | Offline-Leser für die eingebetteten Markdown-Texte |
| `quiz.html` | Quiz; die Epoche wird über den Parameter `?era=` übergeben |
| `philosophen/antike.html` | Antike |
| `philosophen/mittelalter.html` | Mittelalter |
| `philosophen/neuzeit.html` | Frühe Neuzeit |
| `philosophen/moderne.html` | Klassische Moderne |
| `philosophen/20jh.html` | Philosophie des 20. Jahrhunderts |
| `philosophen/gegenwart.html` | Gegenwartsphilosophie |

## Projektstruktur

```text
Philosophiegeschichte/
├── index.html
├── lesen.html
├── quiz.html
├── *.md                         # Quelltexte zur Philosophiegeschichte
├── philosophen/                 # Artikel zu den sechs Epochen
│   ├── antike.html
│   ├── mittelalter.html
│   ├── neuzeit.html
│   ├── moderne.html
│   ├── 20jh.html
│   └── gegenwart.html
├── assets/
│   ├── css/
│   │   ├── components/timeline.css
│   │   ├── core.css
│   │   ├── core-theme.css
│   │   ├── core-ui.css
│   │   ├── custom.css
│   │   └── ui-kit.css
│   ├── img/                     # Bilder der Epochen
│   └── js/
│       ├── lightbox.js
│       ├── quiz.js
│       ├── theme.js
│       ├── timeline.js
│       └── vendor/marked.umd.js
└── docs/                        # Dokumentation des verwendeten UI-Systems
```

## Zentrale Module

### Timeline

Die Timeline-Daten stehen in `index.html`. `assets/js/timeline.js` erzeugt daraus die zugänglichen Akkordeon-Karten. Die Darstellung befindet sich in `assets/css/components/timeline.css`.

Jeder Datensatz enthält:

- Zeitraum und Titel
- Kurzfassung und Beschreibung
- wichtige Denkerinnen und Denker
- Themen für den Filter
- Bild, Detailseite und Quiz-Verweis

### Textleser

`lesen.html` enthält fünf eingebettete Dokumente und kann deshalb ohne `fetch()` direkt über `file://` verwendet werden. Markdown wird lokal mit `marked 18.0.11` aus `assets/js/vendor/marked.umd.js` gerendert. Es besteht keine CDN-Abhängigkeit.

Die eigenständigen Markdown-Dateien im Projekt dienen als lesbare Quell- und Arbeitsfassungen. Änderungen an diesen Dateien werden derzeit nicht automatisch in `lesen.html` übernommen.

### Quiz

`assets/js/quiz.js` enthält den Fragenkatalog und die Auswertungslogik. Ein Quiz wird beispielsweise so aufgerufen:

```text
quiz.html?era=Antike
```

### Gestaltung

Die Oberfläche basiert auf dem lokalen Ismail-UI-System:

- `core.css`: Reset, Variablen und Hilfsklassen
- `core-theme.css`: Farbthemen und Dark Mode
- `core-ui.css`: gemeinsame Komponenten
- `ui-kit.css`: Panels, Buttons und Formularelemente
- `custom.css`: projektspezifische Ergänzungen
- `docs/layout.css`: Layout der Startseite

Die Seiten unter `docs/` dokumentieren und demonstrieren dieses UI-System. Sie sind nicht der Haupteinstieg der Philosophie-Website.

## Bedienung der Timeline

- `Tab`: nächsten interaktiven Eintrag fokussieren
- `Enter` oder `Leertaste`: Epoche öffnen oder schließen
- `Tab` im geöffneten Eintrag: „Mehr lesen“ und „Quiz starten“ erreichen

Es ist immer höchstens eine Epoche geöffnet. Das zugehörige Vorschaubild erscheint erst im geöffneten Bereich.

## Inhalte pflegen

- Timeline-Epochen und Filterthemen: `index.html`
- Timeline-Komponente: `assets/js/timeline.js`
- Quizfragen: `assets/js/quiz.js`
- Epochenartikel: `philosophen/*.html`
- Texte im Offline-Leser: `DOCS` in `lesen.html`
- Bilder: `assets/img/`

## Technische Hinweise

- Reines HTML, CSS und JavaScript
- Keine Paketinstallation erforderlich
- Kein Build-Prozess erforderlich
- Keine externen Laufzeitabhängigkeiten
- `marked 18.0.11` ist lokal eingebunden und steht unter der MIT-Lizenz

## Projektlizenz

Für das Gesamtprojekt ist derzeit keine öffentliche Lizenz angegeben.
