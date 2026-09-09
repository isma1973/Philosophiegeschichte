# Philosophiegeschichte

**Version 1.2 – 2026‑08‑28**

*Read this in [English](readme-en.md).*

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen.svg)](https://isma1973.github.io/Philosophiegeschichte/)

![Screenshot der Philosophiegeschichte im Dark Mode](assets/img/screenshot-dark.png)

Eine vollständig modulare, datengetriebene Lernplattform zur globalen Philosophiegeschichte –
von den Weisheitslehren Asiens bis zur Gegenwart.
Mit **80 dynamisch gerenderten Philosophenprofilen**, 10 Epochenmodulen, einer interaktiven
Timeline, Quiz‑Engine, Theme‑System (mit Glassmorphismus im Light Mode) und ARIA‑optimierter UI —
komplett offline nutzbar und ohne Build‑Prozess.

## Funktionen

- **Globale Timeline:** 10 Epochen (Indien, China, Islamische Welt, Japan, Antike, Mittelalter, Neuzeit, Moderne, 20. Jh., Gegenwart) als zugängliche Akkordeon‑Struktur.
- **Philosophische Filter:** Thematische Filterung nach Ontologie, Epistemologie, Ethik, Ästhetik, Logik, Metaphysik, Sprache, Macht, Geist und Sein.
- **Datengetriebene Profile:** 80 Philosophenprofile, zentral in `PHILOSOPHERS[]` gepflegt. Jede Profilseite identifiziert den Philosophen per URL und rendert den Inhalt dynamisch in leere HTML‑Container.
- **Quiz‑Engine:** Zufallsgenerierte Fragen, Antwort‑Shuffling und direkte Score‑Berechnung pro Epoche.
- **Theme‑Engine:** Nativer Dark/Light‑Mode (inkl. Glassmorphismus) mit persistentem Zustand via `localStorage`.
- **UI‑Komponenten:** Lightbox, Modal, Tooltip, Toast, Tabs, Dropdown — alles in eigenständigen Vanilla‑JS‑Modulen.
- **Zero‑Build:** Reines HTML/CSS/JS, funktioniert offline direkt über `file://`.
- **ARIA‑optimiert:** Barrierefreie Attribute auf allen interaktiven Elementen.
- **Performance:** `.webp`‑Bildformat, modulares CSS‑Grid‑System.

## ⚡ Performance

Im geprüften Stand erreicht die Plattform in Lighthouse durchgehend **100/100** in allen Kernkategorien:

- Performance
- Barrierefreiheit
- Best Practices
- SEO

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
│   └── [name].html              # Einzelne Philosophenprofile (80 Dateien)
├── assets/
│   ├── css/                     # Modulares UI-System (5 Schichten)
│   │   ├── core.css             # Design Tokens & Reset
│   │   ├── core-theme.css       # Dark/Light-Mode Variablen
│   │   ├── core-ui.css          # Basis-Komponenten
│   │   ├── custom.css           # Projekt-spezifische Overrides
│   │   └── ui-kit.css           # Wiederverwendbare UI-Bausteine
│   ├── img/                     # .webp Epochen-Bilder
│   └── js/                      # 12 Vanilla-JS-Module
│       ├── philosopher-profile.js  # Zentrale Datenbank (80 Profile) & Templating (68 KB)
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
Das Herzstück des Projekts: **68 KB** zentrale Datenbank mit allen 80 Philosophenprofilen im Array `PHILOSOPHERS[]`. Jede Profilseite ist ein leeres HTML‑Gerüst. Beim Laden identifiziert das Modul den passenden Eintrag über den Dateinamen und füllt alle Felder dynamisch — kein doppelter HTML‑Code.

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
- **Daten‑Architektur:** Ein zentrales JS‑Array als Datenquelle für alle 80 Profile — kein doppelter HTML‑Code.
- **Barrierefreiheit:** ARIA‑Attribute auf allen interaktiven Elementen (Akkordeon, Filter, Quiz).


<details>
<summary><strong>Alle 80 Philosophen im Überblick anzeigen</strong></summary>

| Name | Epoche | Hauptgebiet | Kernthese |
| --- | --- | --- | --- |
| **Thales von Milet** | Antike | Naturphilosophie | Die Natur lässt sich aus natürlichen Ursachen erklären. |
| **Heraklit** | Antike | Kosmologie, Logoslehre | Alles fließt; die Welt ist ein Prozess ständiger Veränderung. |
| **Parmenides** | Antike | Ontologie, Metaphysik | Sein ist; wirkliche Veränderung ist eine Illusion oder muss philosophisch erklärt werden. |
| **Sokrates** | Antike | Ethik, Dialektik | Das gute Leben erfordert Untersuchung und moralische Selbstkenntnis. |
| **Platon** | Antike | Metaphysik, Erkenntnistheorie, Politik | Wirklichkeit unterscheidet sich zwischen sinnlich Wahrnehmbarem und unveränderlichen Ideenformen. |
| **Aristoteles** | Antike | Logik, Metaphysik, Naturwissenschaft, Ethik | Wesen und Ursachen der Dinge lassen sich durch systematische Begriffe und vier Ursachen erklären. |
| **Epikur** | Antike | Ethik, Naturphilosophie | Glück besteht in einfacher, schmerzfreier Lebensführung und seelischer Ruhe (ataraxia). |
| **Zenon von Kition** | Antike | Ethik, Stoa | Tugend ist das einzige Gute; seelische Unerschütterlichkeit entsteht durch Leben gemäß der Natur und Vernunft. |
| **Augustinus** | Mittelalter | Theologie, Philosophie der Religion | Gnade, Gotteserkenntnis und die innere Bekehrung sind zentral für das christliche Heil. |
| **Boethius** | Mittelalter | Philosophie, Theologie, Logik | Wahre Weisheit verbindet göttliche Vorsehung und menschliches Glück in philosophischer Prüfung. |
| **Avicenna** | Islamische Welt | Metaphysik, Medizin | Vernunftliche Metaphysik kann das Verhältnis von Wesen und Existenz sowie Gottesbegriff systematisch behandeln. |
| **Averroes** | Islamische Welt | Philosophie, Rechtswissenschaft | Philosophische Vernunft und religiöse Schrift sind zu prüfen und können zusammenwirken, teils unterschiedlich zu verstehen. |
| **Thomas von Aquin** | Mittelalter | Scholastik, Theologie | Glaube und Vernunft sind kompatibel; natürliche Theologie kann Grundwahrheiten über Gott erschließen. |
| **Meister Eckhart** | Mittelalter | Mystik, Theologie | Gottesschau kann in innerer Vereinigung des Geistes erreicht werden; die tiefste Wirklichkeit ist jenseits von Konzepten. |
| **Niccolò Machiavelli** | Frühe Neuzeit | Politische Theorie | Politische Wirklichkeit muss pragmatisch und oft jenseits idealer Moral analysiert werden. |
| **René Descartes** | Frühe Neuzeit | Erkenntnistheorie, Metaphysik, Mathematik | Methodischer Zweifel führt zu unbezweifelbarer Gewissheit des denkenden Subjekts: cogito ergo sum. |
| **Thomas Hobbes** | Frühe Neuzeit | Politische Philosophie, Anthropologie | Ohne politische Ordnung führt der Naturzustand zu Gewalt; Souveränität ist Grundlage Frieden sicherzustellen. |
| **Baruch de Spinoza** | Frühe Neuzeit | Metaphysik, Ethik | Gott oder Natur ist die einzige Substanz; Freiheit ist Einsicht in notwendige Naturzusammenhänge. |
| **John Locke** | Frühe Neuzeit | Erkenntnistheorie, Politische Philosophie | Geist als Tabula rasa; legitime politische Autorität gründet in Zustimmung und Schutz natürlicher Rechte. |
| **Gottfried Wilhelm Leibniz** | Frühe Neuzeit | Metaphysik, Mathematik, Logik | Die Welt besteht aus monadenhaften Substanzen; Gott wählte die beste aller möglichen Welten. |
| **David Hume** | Frühe Neuzeit | Erkenntnistheorie, Moralpsychologie | Erfahrung begrenzt Gewissheit; Kausalität ist Gewohnheitserwartung, nicht rational demonstrierbar. |
| **Jean-Jacques Rousseau** | Frühe Neuzeit | Politische Philosophie, Erziehungsphilosophie | Gesellschaftsvertrag kann die natürliche Freiheit wiederherstellen und Legitimität politischer Ordnung stiften. |
| **Immanuel Kant** | Klassische Moderne | Erkenntnistheorie, Ethik | Erkenntnis entsteht aus Wechselspiel von Sinnesgabe und kategorischer Struktur des Verstandes; Moral beruht auf kategorischem Imperativ. |
| **Johann Gottlieb Fichte** | Klassische Moderne | Transzendentalphilosophie, Ethik | Subjektive Ich-Aktivität ist die Grundlage aller erkenntnistheoretischen Setzungen und Freiheit. |
| **Friedrich Wilhelm Joseph Schelling** | Klassische Moderne | Naturphilosophie, Idealismus | Natur und Geist gehören zu einem dynamischen Ganzen, das sich in Freiheit und naturphilosophischer Entwicklung entfaltet. |
| **Georg Wilhelm Friedrich Hegel** | Klassische Moderne | Dialektik, Systemphilosophie | Die Wirklichkeit ist Prozess und Vernunft; Geist entfaltet sich historisch in Formen der Freiheit und Selbstbewusstsein. |
| **Arthur Schopenhauer** | Klassische Moderne | Metaphysik, Pessimismus, Ästhetik | Wille ist die fundamentale, irrational-expressive Kraft der Welt; Leiden ist zentrale Bedingung des Lebens. |
| **John Stuart Mill** | Klassische Moderne | Ethik, Politische Philosophie | Utilitarismus: Moral bewertet nach Förderung von Glück als allgemeinem Wohl; individuelle Freiheit ist zentral solange sie anderen nicht schadet. |
| **Karl Marx** | Klassische Moderne | Politische Ökonomie, Gesellschaftstheorie | Gesellschaftliche Widersprüche des kapitalistischen Produktionsverhältnisses führen zu Klassenkonflikten; ökonomische Strukturen prägen soziale Formationen. |
| **Søren Kierkegaard** | Klassische Moderne | Existenzphilosophie, Theologie | Individuelle Existenz, Entscheidung und subjektive Beziehung zu Gott sind vorrangig gegenüber abstrakten Systemen. |
| **Friedrich Nietzsche** | Klassische Moderne | Kulturkritik, Wertephilosophie | Traditionelle Werte sind historisch bedingt; Neuorientierung erfordert kritische Umwertung von Werten. |
| **Ludwig Wittgenstein** | 20. Jahrhundert | Sprachphilosophie, Logik | Sinn und Grenzen des Denkens werden durch die Struktur und den Gebrauch der Sprache bestimmt. |
| **Martin Heidegger** | 20. Jahrhundert | Existenzphilosophie, Ontologie | Sein ist die grundlegendste Frage; menschliches Dasein eröffnet das Verständnis von Sein durch Sorge und Zeitlichkeit. |
| **Jean-Paul Sartre** | 20. Jahrhundert | Existentialismus, Literatur | Existenz geht der Essenz voraus; der Mensch ist zu radikaler Freiheit und Verantwortung verurteilt. |
| **Albert Camus** | 20. Jahrhundert | Existentialismus, Literatur | Das Absurde entsteht aus der Spannung zwischen Menschenverlangen nach Sinn und einer indifferenten Welt; Ethik folgt aus Auflehnung gegen das Absurde. |
| **Hannah Arendt** | 20. Jahrhundert | Politische Theorie, Philosophie der Geschichte | Totalitarismus ist eine neue Form politischer Herrschaft; Urteilskraft und öffentliches Handeln sind zentrale Bedingungen politischer Freiheit. |
| **Simone de Beauvoir** | 20. Jahrhundert | Existenzphilosophie, Feministische Theorie | Frauen werden kulturell zur 'Anderen' gemacht; Freiheit und Existenzanalyse sind Grundlage für Emanzipation. |
| **Michel Foucault** | 20. Jahrhundert | Macht- und Wissensanalysen | Macht ist überall und wirkt durch Wissensformationen; Subjektivität wird durch historische Diskurse geformt. |
| **Jürgen Habermas** | 20. Jahrhundert | Sozialtheorie, Kommunikation | Kommunikative Rationalität und Diskursethik ermöglichen legitime soziale Integration und demokratische Verständigung. |
| **Daniel Dennett** | Gegenwart | Philosophie des Geistes, Kognitionswissenschaft | Bewusstsein und Geist lassen sich naturalistisch erklären; Funktionen und Evolution liefern Erklärungsansätze. |
| **Martha Nussbaum** | Gegenwart | Ethik, Politische Philosophie | Fähigkeitenansatz: Politische Gerechtigkeit muss konkrete menschliche Fähigkeiten und Würde ins Zentrum stellen. |
| **Judith Butler** | Gegenwart | Gender-Theorie, Politische Philosophie | Geschlecht ist performativ; Identität wird durch wiederholte kulturelle Praktiken hergestellt. |
| **Byung-Chul Han** | Gegenwart | Kulturkritik, Philosophie | Moderne Gesellschaft ist von Beschleunigung, Ermüdung und Leistungskult geprägt; digitale Vernetzung verändert Subjektivität. |
| **Siddhartha Gautama (Buddha)** | Indien | Ethik, Befreiungslehre | Leid entsteht durch Anhaftung; die Loslösung führt zur Befreiung (Nirvana). |
| **Nagarjuna** | Indien | Ontologie, Logik | Alle Phänomene sind leer (Śūnyatā) von einer inhärenten Eigennatur. |
| **Adi Shankara** | Indien | Metaphysik | Brahman (das Absolute) und Atman (das Selbst) sind eins; die Vielheit ist Illusion (Maya). |
| **Chanakya (Kautilya)** | Indien | Politische Philosophie | Macht und Staatsräson stehen über konventioneller Moral, wenn es um den Erhalt des Staates geht. |
| **Sri Aurobindo** | Indien | Integrale Philosophie | Die Evolution ist nicht nur physisch, sondern die spirituelle Entfaltung des göttlichen Bewusstseins. |
| **Rabindranath Tagore** | Indien | Humanismus, Ästhetik | Die höchste Wahrheit ist die Harmonie des Menschen mit dem Universum. |
| **Konfuzius (Kongzi)** | China | Ethik, Sozialphilosophie | Soziale Harmonie entsteht durch Tugend, Rituale und die richtige Erfüllung der eigenen Rolle. |
| **Laozi** | China | Daoismus | Das weiche Wasser besiegt den harten Stein. Handeln durch Nicht-Handeln (Wu Wei) im Einklang mit dem Dao. |
| **Zhuangzi** | China | Daoismus, Erkenntnistheorie | Alle menschlichen Perspektiven sind relativ. Freiheit liegt im Abwerfen starrer Kategorien. |
| **Mozi** | China | Ethik, Logik | Universalismus: Wir müssen alle Menschen gleichermaßen lieben, um den Nutzen der Welt zu maximieren. |
| **Mencius (Mengzi)** | China | Ethik, Politische Philosophie | Die menschliche Natur ist von Grund auf gut, so wie Wasser von Natur aus nach unten fließt. |
| **Zhu Xi** | China | Neo-Konfuzianismus | Alles Sein besteht aus kosmischem Prinzip (Li) und materieller Kraft (Qi). |
| **Dōgen Zenji** | Japan | Zen, Phänomenologie | Zazen (Sitzen) ist nicht der Weg zur Erleuchtung, sondern die Ausübung der Erleuchtung selbst. |
| **Nishida Kitarō** | Japan | Erkenntnistheorie, Ontologie | Das Absolute ist nicht Sein, sondern das 'absolute Nichts', der Ort (Basho), der alles Sein ermöglicht. |
| **Watsuji Tetsurō** | Japan | Ethik, Anthropologie | Der Mensch ist radikal beziehungshaft (Zwischenmenschlichkeit) und untrennbar mit seinem Klima (Fudo) verwoben. |
| **Al-Farabi** | Islamische Welt | Logik, Politische Philosophie | Die Philosophie steht über der Religion; die Religion ist der symbolische Ausdruck philosophischer Wahrheiten für das Volk. |
| **Al-Ghazali** | Islamische Welt | Theologie, Mystik, Skepsis | Reiner Rationalismus scheitert an metaphysischen Fragen; wahre Erkenntnis erlangt man nur durch mystische Erfahrung. |
| **Ibn Khaldun** | Islamische Welt | Geschichtstheorie, Soziologie | Der Aufstieg und Fall von Zivilisationen beruht auf der zyklischen Dynamik sozialer Kohäsion (Asabiyya). |
| **Marc Aurel** | Antike | Stoa, Ethik | Das Glück deines Lebens hängt von der Beschaffenheit deiner Gedanken ab. |
| **William James** | Klassische Moderne | Pragmatismus, Psychologie | Der Wert einer Idee liegt in ihrem praktischen Nutzen und ihrer Auswirkung auf das Leben. |
| **Karl Popper** | 20. Jahrhundert | Wissenschaftstheorie, Politik | Wissenschaftlicher Fortschritt geschieht durch Falsifikation; eine Theorie muss prinzipiell widerlegbar sein. |
| **Bertrand Russell** | 20. Jahrhundert | Analytische Philosophie, Logik | Sprache und Mathematik lassen sich auf reine Logik zurückführen; gesellschaftlicher Fortschritt erfordert Vernunft und Pazifismus. |
| **Edmund Husserl** | 20. Jahrhundert | Phänomenologie | Wir müssen 'zu den Sachen selbst' zurückkehren, indem wir untersuchen, wie uns die Welt im Bewusstsein erscheint. |
| **John Rawls** | 20. Jahrhundert | Politische Philosophie | Gerechtigkeit ist Fairneß; soziale Ungleichheiten sind nur legitim, wenn sie den Schwächsten der Gesellschaft den größtmöglichen Vorteil bringen. |
| **Mary Wollstonecraft** | Frühe Neuzeit | Feministische Philosophie | Frauen sind Männern von Natur aus nicht unterlegen; sie erscheinen nur so wegen mangelnder Bildung. |
| **Hypatia von Alexandria** | Antike | Neuplatonismus, Mathematik | Die Erforschung des Kosmos und der Mathematik ist ein Weg zur göttlichen Wahrheit. |
| **Diogenes von Sinope** | Antike | Kynismus, Ethik | Wahre Freiheit liegt in der absoluten Bedürfnislosigkeit und Unabhängigkeit von gesellschaftlichen Normen. |
| **Pythagoras** | Antike | Vorsokratik, Mathematik | Alles ist Zahl; die Ordnung des Kosmos basiert auf mathematischen und musikalischen Proportionen. |
| **Wilhelm von Ockham** | Mittelalter | Scholastik, Logik | Entitäten dürfen nicht über das Notwendige hinaus vermehrt werden (Ockhams Rasiermesser). |
| **Francis Bacon** | Frühe Neuzeit | Empirismus, Wissenschaftstheorie | Wissen ist Macht; Naturbeherrschung gelingt nur durch systematische Erfahrung und Induktion. |
| **Michel de Montaigne** | Frühe Neuzeit | Humanismus, Skeptizismus | Was weiß ich? Die Erforschung der menschlichen Natur muss beim eigenen, unvollkommenen Ich beginnen. |
| **Theodor W. Adorno** | 20. Jahrhundert | Kritische Theorie, Ästhetik | Es gibt kein richtiges Leben im falschen. |
| **Max Horkheimer** | 20. Jahrhundert | Kritische Theorie | Die instrumentelle Vernunft der Moderne hat sich von der Suche nach dem guten Leben entkoppelt und dient nur noch der Herrschaft. |
| **Jacques Derrida** | 20. Jahrhundert | Poststrukturalismus | Es gibt kein Außerhalb des Textes; jede Bedeutung ist instabil und verschiebt sich endlos. |
| **Thomas Kuhn** | 20. Jahrhundert | Wissenschaftstheorie | Wissenschaftlicher Fortschritt verläuft nicht kontinuierlich, sondern durch revolutionäre Brüche zwischen unvereinbaren Paradigmen. |
| **Peter Singer** | Gegenwart & Zukunft | Praktische Ethik, Utilitarismus | Moralische Berücksichtigung hängt nicht von der Spezies ab, sondern von der Fähigkeit, Leid zu empfinden (Präferenz-Utilitarismus). |
| **Slavoj Žižek** | Gegenwart & Zukunft | Hegelianismus, Psychoanalyse | Ideologie ist nicht das, was wir nicht wissen, sondern das, was wir wissen und trotzdem tun. |

</details>

## Projektlizenz

Das Projekt steht unter [MIT‑Lizenz](LICENSE). Du kannst es frei verwenden, verändern und verbreiten.
