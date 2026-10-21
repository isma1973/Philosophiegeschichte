# Philosophiegeschichte

**Version 2.0 – 2026‑10‑21**

*Read this in [English](readme-en.md).*

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen.svg)](https://isma1973.github.io/Philosophiegeschichte/)

![Screenshot der Philosophiegeschichte im Dark Mode](assets/img/screenshot-dark.png)

Eine vollständig modulare, datengetriebene Lernplattform zur globalen Philosophiegeschichte – von den Weisheitslehren Asiens bis zur Gegenwart.  
Mit **81 dynamisch gerenderten Philosophenprofilen**, 10 Epochenmodulen, interaktiver Timeline, Spotlight-Echtzeitsuche, Favoritensystem, Tinder-Style Entdecken-Galerie, didaktischer Quiz-Engine, Theme-System (Obsidian Slate Dark Mode & Ivory Light Mode) und barrierefreier ARIA-Architektur — **100% offline-fähig, Zero-Build und im Schweizer Hochdeutsch (`de-CH`)**.

---

## Funktionen

- **Globale Timeline:** 10 Epochen (Indien, China, Islamische Welt, Japan, Antike, Mittelalter, Neuzeit, Moderne, 20. Jh., Gegenwart) als zugängliche, barrierefreie Akkordeon-Struktur mit Epochenzusammenfassungen und Denker-Badges.
- **Spotlight-Echtzeitsuche (`Strg + K` / `/`):** Sofortige Volltextsuche in der Topbar über alle 81 Denker (Namen, Epochen, Hauptgebiete, Thesen und Kernideen) mit Match-Highlighting, Porträt-Avataren, Tastatur-Navigation (`↑`/`↓`/`Enter`/`Esc`) und direkten Favoriten-Sternen.
- **Favoriten- & Merkzettel-System:** Denker mit einem Klick auf Profilseiten, in der Suche oder in der Galerie bookmarken (`philo_favorites_v1` im `localStorage`), synchronisiert über alle Seiten via Event-Bus (`philosophy:favorites-changed`).
- **Themen- & Favoriten-Filter:** Schnelle Filter-Chips nach *Ontologie*, *Epistemologie*, *Ethik*, *Ästhetik*, *Logik*, *Metaphysik*, *Sprache*, *Macht*, *Geist*, *Sein* sowie der interaktive Filter *⭐ Gemerkt* zur gezielten Anzeige gespeicherter Denker.
- **Entdecken-Galerie (`galerie.html`):** Tinder-Style Swipe-Karten für spielerisches Lernen. Steuerung per Touch-Gesten, Mausdrag oder Tastatur (`←` Weiter, `→` Profil öffnen, `Z` / `↺` Undo), inklusive Zähler, Haptik-Vibration und Favoriten-Button.
- **Didaktische Quiz-Engine:** Zwei Schwierigkeitsstufen (Einfach: 3 Fragen / Fortgeschritten: 7 Fragen), animierter Live-Fortschrittsbalken, fundiertes pädagogisches Feedback mit historischem Kontext nach jeder Antwort (Richtig/Falsch) und Belohnungssystem (Epochengalerie & Weisheitszitate).
- **Zufälliger Denker (`🎲`):** Direkt in die Topbar-Navigation integrierter Button zur Inspiration und Zufallsentdeckung.
- **Datengetriebene Profile:** Alle 81 Philosophenprofile werden zentral in `PHILOSOPHERS[]` gepflegt. Jede Profilseite identifiziert den Denker per URL und rendert die Inhalte dynamisch in semantische Container.
- **Interaktive Zitat-Karten:** Hervorgehobene Thesen mit Ein-Klick-Kopierfunktion in die Zwischenablage und Toast-Rückmeldung.
- **Premium Design & Typografie:** Obsidian Slate Dark Mode und Ivory Light Mode mit feinem Glassmorphismus, kuratierter Farbpalette und lokaler Inter-Typografie.
- **Schweizer Standarddeutsch (CH-DE):** Vollständige Umsetzung nach Schweizer Konvention (kein `ß`, durchgehend `ss`), typografische Guillemets (`«...»`) und HTML-Sprachauszeichnung `lang="de-CH"`.
- **Zero-Build & Offline-First:** Reines HTML5, CSS3 und Vanilla JavaScript — funktioniert direkt per Doppelklick über `file://` ohne Webserver, Node.js oder Build-Tools.
- **ARIA-optimiert:** Vollständige Barrierefreiheit durch ARIA-Attribute auf allen interaktiven Elementen.

---

## ⚡ Performance

Im geprüften Stand erreicht die Plattform in Google Lighthouse durchgehend **100/100** in allen Kernkategorien:

- 🟢 **Performance:** 100/100
- 🟢 **Barrierefreiheit (Accessibility):** 100/100
- 🟢 **Best Practices:** 100/100
- 🟢 **SEO:** 100/100

---

## Start & Bedienung

### Direkt im Browser öffnen

Einfach `index.html` im Datei-Explorer doppelklicken oder im Browser öffnen.  
Da alle Assets (Schriften, Skripte, Bilder) lokal eingebunden sind, funktioniert die gesamte Plattform offline über `file://`.

### Tastaturkürzel

| Tastenkombination | Aktion |
| --- | --- |
| `Strg + K` oder `/` | Spotlight-Suche öffnen und fokussieren |
| `↑` / `↓` | Suchergebnisse navigieren |
| `Enter` | Ausgewählten Denker öffnen |
| `Esc` | Spotlight-Suche schliessen |
| `←` / `→` | Tinder-Galerie: Nächster Denker / Profil aufrufen |
| `Z` oder `Backspace` | Tinder-Galerie: Letzten Swipe rückgängig machen (Undo) |

---

## Projektstruktur

```text
Philosophiegeschichte/
├── index.html                   # Startseite (Timeline, Topbar-Suche & Themen-Filter)
├── galerie.html                 # Tinder-Style Entdecken-Modus (Swipe-Karten)
├── quiz.html                    # Interaktives Quiz-Modul mit didaktischem Feedback
├── philosophen/                 # 10 Epochenartikel + 81 Einzelprofile
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
│   └── [slug].html              # 81 dynamisch befüllte Philosophenprofile
├── assets/
│   ├── css/                     # Modulares Design-System
│   │   ├── core.css             # Globale Design Tokens & Reset
│   │   ├── core-theme.css       # Obsidian Slate & Ivory Theme-Variablen
│   │   ├── core-ui.css          # Basis-Komponenten & Typografie-Stile
│   │   ├── layout.css           # Grid- & Flexbox-Layouts
│   │   ├── typography.css       # Lokales Inter-Fontsystem
│   │   ├── ui-kit.css           # Wiederverwendbare UI-Bausteine
│   │   ├── custom.css           # Projekt-Overrides, Topbar, Suchleiste & Hero
│   │   └── components/
│   │       └── timeline.css     # Timeline-Akkordeon & Epochen-Styling
│   ├── fonts/                   # Lokale Inter-Schriftdateien (WOFF2)
│   ├── img/                     # Optimierte .webp Porträts & Epochen-Bilder
│   └── js/                      # Modulare Vanilla-JS-Architektur
│       ├── philosopher-profile.js  # Zentrale Denker-Datenbank (81 Profile) & Templating
│       ├── quickfinder.js          # Spotlight-Live-Suche & Favoriten-Synchronisation
│       ├── favorites.js            # Shared LocalStorage Favorites Manager
│       ├── galerie.js              # Tinder-Card Swipe-Engine & Haptik
│       ├── quiz.js                 # Quiz-Engine mit Erklärungen & Progressbar
│       ├── timeline.js             # Akkordeon-Timeline mit ARIA-Support
│       ├── theme.js                # Dark/Light-Mode Switcher via localStorage
│       ├── lightbox.js             # Bild-Lightbox für Porträts
│       ├── modal.js                # Dialog- & Modal-Komponente
│       ├── toast.js                # Toast-Benachrichtigungen
│       ├── tooltip.js              # Barrierefreie Tooltips
│       ├── tabs.js                 # Tab-Navigation
│       ├── dropdown.js             # Dropdown-Menü
│       ├── switches.js             # iOS-Style Toggle-Switches
│       └── core-ui.js              # Framework-Bootstrap
└── docs/                        # Dokumentation des Ismail UI Frameworks
```

---

## Zentrale Module

### 1. Spotlight-Suche (`quickfinder.js`)
Echtzeit-Suchindex in der Topbar: Durchsucht bei jedem Tastenanschlag Namen, Thesen, Epochen, Fachgebiete und Kernideen aller 81 Denker. Treffer werden mit gelben `<mark>`-Hervorhebungen, Porträts und Epochen-Tags angezeigt. Vollständig bedienbar über Tastatur (`Strg + K`, Pfeiltasten, `Enter`, `Esc`).

### 2. Favoriten-System (`favorites.js`)
Zentraler Favoriten-Manager auf Basis von `localStorage` (`philo_favorites_v1`). Über den benutzerdefinierten DOM-Event `philosophy:favorites-changed` synchronisieren sich alle Komponenten (Profil-Merken-Button, Galerie-Stern, Suchergebnisse und Timeline-Filter) sofort und seiteneffektfrei.

### 3. Swipe-Galerie (`galerie.js`)
Entwickelt für mobiles und Desktop-Browsing: Bietet flüssige Tinder-ähnliche Swipe-Gesten mit Federmechanik, visueller Kartendrehung, Undo-Stack (`↺`), Tastatur-Shortcuts und Haptik-Vibration via `navigator.vibrate`.

### 4. Datenbank & Templating (`philosopher-profile.js`)
Das Herzstück des Projekts: Zentrale Datenbank aller 81 Philosophen im Array `PHILOSOPHERS[]`. Jede HTML-Profilseite dient als leichtgewichtiges Shell-Template, das zur Laufzeit anhand des URL-Slugs die passenden Metadaten, Zitate, Lebensdaten, zentralen Gedanken, historischen Kontexte und Werke dynamisch einfügt.

### 5. Quiz-Engine mit Feedback (`quiz.js`)
Bietet dynamische Fragenkataloge für jede Epoche in zwei Stufen (3 oder 7 Fragen). Nach jeder Antwort liefert eine animierte Feedback-Box fundierte Erklärungen zum Hintergrund. Bei voller Punktzahl schaltet sich automatisch eine Epochen-Belohnung frei.

### 6. Theme-Engine (`theme.js`)
Wechselt nahtlos zwischen Dark Mode (Obsidian Slate) und Light Mode (Ivory). Der Status wird persistent gespeichert und synchronisiert sich seitenseitig ohne FOUC (Flash of Unstyled Content).

---

## Technische Leitlinien

- **Stack:** 100% reines HTML5, modernes CSS3 und Vanilla JavaScript (ES6+).
- **Keine Framework-Abhängigkeiten:** Null externe CDNs, kein React, Vue, jQuery oder Tailwind.
- **Offline-Garantie:** Funktioniert direkt per Doppelklick über `file://` ohne lokalen Server.
- **Typografie:** Schweizer Standarddeutsch (`de-CH`), spitze Guillemets (`«...»`), konsequentes `ss`.
- **Barrierefreiheit (A11y):** Vollständige Unterstützung für Screenreader dank semantischem HTML5 und ARIA-Auszeichnung.

---

<details>
<summary><strong>Alle 81 Philosophen im Überblick anzeigen</strong></summary>

| Name | Epoche | Hauptgebiet | Kernthese |
| --- | --- | --- | --- |
| **Thales von Milet** | Antike | Naturphilosophie | Die Natur lässt sich aus natürlichen Ursachen erklären. |
| **Heraklit** | Antike | Kosmologie, Logoslehre | Alles fliesst; die Welt ist ein Prozess ständiger Veränderung. |
| **Parmenides** | Antike | Ontologie, Metaphysik | Sein ist; wirkliche Veränderung ist eine Illusion oder muss philosophisch erklärt werden. |
| **Sokrates** | Antike | Ethik, Dialektik | Das gute Leben erfordert Untersuchung und moralische Selbstkenntnis. |
| **Platon** | Antike | Metaphysik, Erkenntnistheorie, Politik | Wirklichkeit unterscheidet sich zwischen sinnlich Wahrnehmbarem und unveränderlichen Ideenformen. |
| **Aristoteles** | Antike | Logik, Metaphysik, Naturwissenschaft, Ethik | Wesen und Ursachen der Dinge lassen sich durch systematische Begriffe und vier Ursachen erklären. |
| **Epikur** | Antike | Ethik, Naturphilosophie | Glück besteht in einfacher, schmerzfreier Lebensführung und seelischer Ruhe (ataraxia). |
| **Zenon von Kition** | Antike | Ethik, Stoa | Tugend ist das einzige Gute; seelische Unerschütterlichkeit entsteht durch Leben gemäss der Natur und Vernunft. |
| **Hypatia von Alexandria** | Antike | Neuplatonismus, Mathematik | Die Erforschung des Kosmos und der Mathematik ist ein Weg zur göttlichen Wahrheit. |
| **Diogenes von Sinope** | Antike | Kynismus, Ethik | Wahre Freiheit liegt in der absoluten Bedürfnislosigkeit und Unabhängigkeit von gesellschaftlichen Normen. |
| **Pythagoras** | Antike | Vorsokratik, Mathematik | Alles ist Zahl; die Ordnung des Kosmos basiert auf mathematischen und musikalischen Proportionen. |
| **Marc Aurel** | Antike | Stoa, Ethik | Das Glück deines Lebens hängt von der Beschaffenheit deiner Gedanken ab. |
| **Die Vedischen Seher (Rishis)** | Indien | Metaphysik, Kosmologie | Das Absolute (Brahman) und der innerste Kern des Menschen (Atman) sind letztlich eins. |
| **Siddhartha Gautama (Buddha)** | Indien | Ethik, Befreiungslehre | Leid entsteht durch Anhaftung; die Loslösung führt zur Befreiung (Nirvana). |
| **Nagarjuna** | Indien | Ontologie, Logik | Alle Phänomene sind leer (Śūnyatā) von einer inhärenten Eigennatur. |
| **Adi Shankara** | Indien | Metaphysik | Brahman (das Absolute) und Atman (das Selbst) sind eins; die Vielheit ist Illusion (Maya). |
| **Chanakya (Kautilya)** | Indien | Politische Philosophie | Macht und Staatsräson stehen über konventioneller Moral, wenn es um den Erhalt des Staates geht. |
| **Sri Aurobindo** | Indien | Integrale Philosophie | Die Evolution ist nicht nur physisch, sondern die spirituelle Entfaltung des göttlichen Bewusstseins. |
| **Rabindranath Tagore** | Indien | Humanismus, Ästhetik | Die höchste Wahrheit ist die Harmonie des Menschen mit dem Universum. |
| **Konfuzius (Kongzi)** | China | Ethik, Sozialphilosophie | Soziale Harmonie entsteht durch Tugend, Rituale und die richtige Erfüllung der eigenen Rolle. |
| **Laozi** | China | Daoismus | Das weiche Wasser besiegt den harten Stein. Handeln durch Nicht-Handeln (Wu Wei) im Einklang mit dem Dao. |
| **Zhuangzi** | China | Daoismus, Erkenntnistheorie | Alle menschlichen Perspektiven sind relativ. Freiheit liegt im Abwerfen starrer Kategorien. |
| **Mozi** | China | Ethik, Logik | Universalismus: Wir müssen alle Menschen gleichermassen lieben, um den Nutzen der Welt zu maximieren. |
| **Mencius (Mengzi)** | China | Ethik, Politische Philosophie | Die menschliche Natur ist von Grund auf gut, so wie Wasser von Natur aus nach unten fliesst. |
| **Zhu Xi** | China | Neo-Konfuzianismus | Alles Sein besteht aus kosmischem Prinzip (Li) und materieller Kraft (Qi). |
| **Dōgen Zenji** | Japan | Zen, Phänomenologie | Zazen (Sitzen) ist nicht der Weg zur Erleuchtung, sondern die Ausübung der Erleuchtung selbst. |
| **Nishida Kitarō** | Japan | Erkenntnistheorie, Ontologie | Das Absolute ist nicht Sein, sondern das 'absolute Nichts', der Ort (Basho), der alles Sein ermöglicht. |
| **Watsuji Tetsurō** | Japan | Ethik, Anthropologie | Der Mensch ist radikal beziehungshaft (Zwischenmenschlichkeit) und untrennbar mit seinem Klima (Fudo) verwoben. |
| **Al-Farabi** | Islamische Welt | Logik, Politische Philosophie | Die Philosophie steht über der Religion; die Religion ist der symbolische Ausdruck philosophischer Wahrheiten für das Volk. |
| **Avicenna** | Islamische Welt | Metaphysik, Medizin | Vernünftige Metaphysik kann das Verhältnis von Wesen und Existenz sowie Gottesbegriff systematisch behandeln. |
| **Al-Ghazali** | Islamische Welt | Theologie, Mystik, Skepsis | Reiner Rationalismus scheitert an metaphysischen Fragen; wahre Erkenntnis erlangt man nur durch mystische Erfahrung. |
| **Averroes** | Islamische Welt | Philosophie, Rechtswissenschaft | Philosophische Vernunft und religiöse Schrift drücken dieselbe Wahrheit in unterschiedlicher Form aus. |
| **Ibn Khaldun** | Islamische Welt | Geschichtstheorie, Soziologie | Der Aufstieg und Fall von Zivilisationen beruht auf der zyklischen Dynamik sozialer Kohäsion (Asabiyya). |
| **Augustinus** | Mittelalter | Theologie, Philosophie der Religion | Gnade, Gotteserkenntnis und die innere Bekehrung sind zentral für das christliche Heil. |
| **Boethius** | Mittelalter | Philosophie, Theologie, Logik | Wahre Weisheit verbindet göttliche Vorsehung und menschliches Glück in philosophischer Prüfung. |
| **Thomas von Aquin** | Mittelalter | Scholastik, Theologie | Glaube und Vernunft sind kompatibel; natürliche Theologie kann Grundwahrheiten über Gott erschliessen. |
| **Meister Eckhart** | Mittelalter | Mystik, Theologie | Gottesschau kann in innerer Vereinigung des Geistes erreicht werden; die tiefste Wirklichkeit ist jenseits von Konzepten. |
| **Wilhelm von Ockham** | Mittelalter | Scholastik, Logik | Entitäten dürfen nicht über das Notwendige hinaus vermehrt werden (Ockhams Rasiermesser). |
| **Niccolò Machiavelli** | Frühe Neuzeit | Politische Theorie | Politische Wirklichkeit muss pragmatisch und oft jenseits idealer Moral analysiert werden. |
| **Francis Bacon** | Frühe Neuzeit | Empirismus, Wissenschaftstheorie | Wissen ist Macht; Naturbeherrschung gelingt nur durch systematische Erfahrung und Induktion. |
| **Michel de Montaigne** | Frühe Neuzeit | Humanismus, Skeptizismus | Was weiss ich? Die Erforschung der menschlichen Natur muss beim eigenen, unvollkommenen Ich beginnen. |
| **René Descartes** | Frühe Neuzeit | Erkenntnistheorie, Metaphysik | Methodischer Zweifel führt zu unbezweifelbarer Gewissheit des denkenden Subjekts: cogito ergo sum. |
| **Thomas Hobbes** | Frühe Neuzeit | Politische Philosophie | Ohne staatliche Ordnung führt der Naturzustand zu Gewalt; Souveränität stiftet Frieden. |
| **Baruch de Spinoza** | Frühe Neuzeit | Metaphysik, Ethik | Gott oder Natur ist die einzige Substanz; Freiheit ist Einsicht in notwendige Naturzusammenhänge. |
| **John Locke** | Frühe Neuzeit | Erkenntnistheorie, Politische Philosophie | Geist als Tabula rasa; legitime politische Autorität gründet in Zustimmung und Schutz natürlicher Rechte. |
| **Gottfried Wilhelm Leibniz** | Frühe Neuzeit | Metaphysik, Logik | Die Welt besteht aus Monaden; Gott erschuf die beste aller möglichen Welten. |
| **Mary Wollstonecraft** | Frühe Neuzeit | Feministische Philosophie | Frauen sind Männern von Natur aus nicht unterlegen; sie erscheinen nur so wegen mangelnder Bildung. |
| **David Hume** | Frühe Neuzeit | Erkenntnistheorie, Skeptizismus | Erfahrung begrenzt Gewissheit; Kausalität ist Gewohnheitserwartung, nicht rational beweisbar. |
| **Jean-Jacques Rousseau** | Frühe Neuzeit | Politische Philosophie | Gesellschaftsvertrag kann die natürliche Freiheit wiederherstellen und den allgemeinen Willen verwirklichen. |
| **Immanuel Kant** | Klassische Moderne | Erkenntnistheorie, Ethik | Erkenntnis entsteht aus Sinneswahrnehmung und Verstandeskategorien; Moral gründet im kategorischen Imperativ. |
| **Johann Gottlieb Fichte** | Klassische Moderne | Transzendentalphilosophie | Die freie Ich-Aktivität ist die absolute Grundlage aller Erkenntnis und Wirklichkeit. |
| **Friedrich Wilhelm Joseph Schelling** | Klassische Moderne | Naturphilosophie, Idealismus | Natur und Geist gehören zu einem dynamischen Ganzen, das sich organisch entfaltet. |
| **Georg Wilhelm Friedrich Hegel** | Klassische Moderne | Dialektik, Systemphilosophie | Die Wirklichkeit ist historischer Prozess der Vernunft; der Geist entfaltet sich dialektisch zur Freiheit. |
| **Arthur Schopenhauer** | Klassische Moderne | Metaphysik, Pessimismus | Der blinde, unvernünftige Wille treibt die Welt an; Kunst und Askese erlösen vom Leiden. |
| **Søren Kierkegaard** | Klassische Moderne | Existenzphilosophie, Theologie | Individuelle Existenz, subjektive Wahrheit und der Sprung des Glaubens stehen über abstrakten Systemen. |
| **John Stuart Mill** | Klassische Moderne | Ethik, Politische Philosophie | Utilitarismus: Handlungen sind moralisch gut, wenn sie das grösstmögliche Glück für alle fördern. |
| **Karl Marx** | Klassische Moderne | Gesellschaftstheorie, Ökonomie | Das gesellschaftliche Sein bestimmt das Bewusstsein; Klassenkämpfe treiben die Geschichte voran. |
| **Friedrich Nietzsche** | Klassische Moderne | Kulturkritik, Wertephilosophie | Traditionelle Moral ist lebensfeindlich; der freie Mensch überwindet den Nihilismus durch die Umwertung aller Werte. |
| **William James** | Klassische Moderne | Pragmatismus, Psychologie | Der Wahrheitswert einer Idee bemisst sich an ihren praktischen Konsequenzen für das Leben. |
| **Edmund Husserl** | 20. Jahrhundert | Phänomenologie | «Zu den Sachen selbst»: Phänomenologie erforscht die reinen Strukturen des Bewusstseins. |
| **Bertrand Russell** | 20. Jahrhundert | Analytische Philosophie, Logik | Sprache und Mathematik gründen in formaler Logik; Vernunft und Skepsis sind Bollwerke gegen Dogmatismus. |
| **Ludwig Wittgenstein** | 20. Jahrhundert | Sprachphilosophie, Logik | «Wovon man nicht sprechen kann, darüber muss man schweigen.» Die Grenzen der Sprache sind die Grenzen der Welt. |
| **Martin Heidegger** | 20. Jahrhundert | Fundamentalontologie | Das menschliche Dasein erschliesst die Frage nach dem Sein durch Zeitlichkeit, Sorge und Geworfenheit. |
| **Max Horkheimer** | 20. Jahrhundert | Kritische Theorie | Die instrumentelle Vernunft der Moderne verwandelt Aufklärung in neue Formen von Herrschaft. |
| **Theodor W. Adorno** | 20. Jahrhundert | Kritische Theorie, Ästhetik | «Es gibt kein richtiges Leben im falschen.» Kritische Theorie demaskiert die Widersprüche der Kulturindustrie. |
| **Jean-Paul Sartre** | 20. Jahrhundert | Existenzialismus | Die Existenz geht der Essenz voraus: Der Mensch ist zur absoluten Freiheit und Verantwortung verurteilt. |
| **Hannah Arendt** | 20. Jahrhundert | Politische Theorie | Politisches Handeln und Pluralität im öffentlichen Raum sind die Grundbedingungen menschlicher Freiheit. |
| **Simone de Beauvoir** | 20. Jahrhundert | Existenzialismus, Feminismus | «Man wird nicht als Frau geboren, man wird es.» Geschlechterrollen sind gesellschaftliche Konstruktionen. |
| **Albert Camus** | 20. Jahrhundert | Philosophie des Absurden | Das Absurde entsteht aus dem Verlangen nach Sinn in einer sinnlosen Welt; die Antwort ist schöpferische Revolte. |
| **Karl Popper** | 20. Jahrhundert | Kritischer Rationalismus | Wissenschaft wächst durch Versuch und Irrtum (Falsifikation); Verteidigung der offenen Gesellschaft. |
| **Thomas Kuhn** | 20. Jahrhundert | Wissenschaftstheorie | Wissenschaft entwickelt sich sprunghaft durch revolutionäre Paradigmenwechsel, nicht linear. |
| **John Rawls** | 20. Jahrhundert | Politische Philosophie | Gerechtigkeit als Fairness: Prinzipien, die freie und gleiche Menschen unter dem «Schleier des Nichtwissens» wählen würden. |
| **Jürgen Habermas** | 20. Jahrhundert | Diskurstheorie, Sozialphilosophie | Kommunikative Rationalität und herrschaftsfreier Diskurs stiften demokratische Legitimität. |
| **Michel Foucault** | 20. Jahrhundert | Diskursanalyse, Machttheorie | Macht ist produktiv, dezentral und eng an gesellschaftliche Wissensordnungen und Disziplinierung gekoppelt. |
| **Jacques Derrida** | 20. Jahrhundert | Dekonstruktion | «Es gibt kein Ausserhalb des Textes»: Bedeutungen sind prinzipiell instabil und lassen sich dekonstruieren. |
| **Daniel Dennett** | Gegenwart & Zukunft | Philosophie des Geistes | Das menschliche Bewusstsein lässt sich naturwissenschaftlich und evolutionär ohne Mystizismus erklären. |
| **Martha Nussbaum** | Gegenwart & Zukunft | Ethik, Politische Philosophie | Der Fähigkeitenansatz (Capabilities Approach) misst Gerechtigkeit an realen Chancen für ein erfülltes Leben. |
| **Peter Singer** | Gegenwart & Zukunft | Praktische Ethik, Utilitarismus | Moralische Berücksichtigung hängt von der Leidensfähigkeit ab; Eintreten für Tierschutz und effektiven Altruismus. |
| **Judith Butler** | Gegenwart & Zukunft | Gender Studies, Philosophie | Geschlechtsidentität ist performativ und wird durch ständige gesellschaftliche Wiederholung erzeugt. |
| **Slavoj Žižek** | Gegenwart & Zukunft | Psychoanalyse, Gesellschaftskritik | Ideologie prägt unbewusst unsere alltägliche Praxis: Wir wissen es, aber wir tun es trotzdem. |
| **Byung-Chul Han** | Gegenwart & Zukunft | Kulturphilosophie | Die spätmoderne Leistungsgesellschaft führt zu Selbstausbeutung, Erschöpfung («Müdigkeitsgesellschaft») und Sinnverlust. |

</details>

---

## Bildnachweise & Credits

Alle auf dieser Plattform verwendeten Porträts der Philosophen wurden maschinell mithilfe von Künstlicher Intelligenz (generiert mit Google Gemini 3.1 Pro / Antigravity) im modernen Vektor-Stil erstellt. 

Da diese Bilder vollständig durch KI generiert wurden, unterliegen sie nach aktuellem rechtlichem Stand (EU/US) keinem menschlichen Urheberrecht. Sie sind de facto **gemeinfrei (Public Domain)**. Sie dürfen uneingeschränkt frei verwendet, kopiert und verändert werden.

---

## Projektlizenz

Das Projekt steht unter [MIT‑Lizenz](LICENSE). Du kannst es frei verwenden, verändern und verbreiten.
