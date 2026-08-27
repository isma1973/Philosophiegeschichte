# Ismail UI Framework  
**clean · modular · consistent**

Ismail UI ist ein leichtgewichtiges, modulares und elegantes UI‑Framework für moderne Web‑Apps, Dashboards und Tools.  
Es kombiniert ein globales CSS‑Toolkit, ein Theme‑System, interaktive UI‑Komponenten und ein vollständiges Design‑System.

Dieses Framework wurde entwickelt, um **schnell**, **klar** und **wiederverwendbar** zu sein – perfekt für produktive Projekte.

---

## 🚀 Features

### 🎨 Design‑System
- Globales CSS‑Toolkit (`core.css`)
- Theme‑System mit Dark/Light Mode (`core-theme.css`)
- UI‑Komponenten‑Styles (`core-ui.css`)
- UI‑Kit für Buttons, Panels, Inputs, Tabellen (`ui-kit.css`)

### 🧩 Interaktive Komponenten
- Modals  
- Toasts  
- Tabs  
- Dropdowns  
- Switches  
- Theme‑Toggle  

### 🧠 Utility‑Funktionen
- `debounce(fn, wait)`: verhindert zu häufiges Aufrufen von Funktionen.
- `formatDate(date, format)`: formatiert Datumsobjekte nach Vorgabe.
- `themeSwitcher(storageKey)`: steuert Dark‑/Light‑Mode und speichert die Präferenz im `localStorage`.
- `scrollTo(elementId)`: smooth‑scrollt zu einem Element auf der Seite.

## 📂 Projektstruktur

```text
Philosophiegeschichte/
├── index.html                   # Startseite (Timeline & Filter)
├── quiz.html                    # Interaktives Quiz‑Modul
├── philosophen/                 # Epochen‑Artikel + Philosophen‑Profile
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
│   └── [name].html              # Einzelne Philosophen‑Profiles
├── assets/
│   ├── css/
│   │   ├── core.css
│   │   ├── core-theme.css
│   │   ├── core-ui.css
│   │   ├── custom.css           # Projekt‑spezifische Overrides
│   │   └── ui-kit.css
│   ├── img/                     # `.webp`‑Bilder für alle Epochen
│   └── js/
│       ├── philosopher-profile.js # Zentrale Datenbank & Templating
│       ├── quiz.js
│       ├── theme.js
│       └── timeline.js
└── docs/
    ├── readme.md                # Dieses Dokument (Deutsch)
    └── readme-en.md             # English version
```

## 📦 Version / Changelog

- **v1.2 – 2026‑08‑28** – Bild‑Umstellung auf `.webp`, Footer‑Divider vergrößert, Dokumentation ergänzt.
- **v1.1 – 2026‑08‑20** – Dark‑Mode‑Filter für Line‑Art, neue Epoch‑Illustrationen.
- **v1.0 – 2026‑08‑10** – Erstveröffentlichung, Grund‑Timeline, Quiz‑Engine.

> **Hinweis:** Für jede neue Funktion bitte beide README‑Dateien (`readme.md` & `readme-en.md`) aktualisieren.

## 🌐 Bilinguale Verweise

- Die englische Dokumentation befindet sich in `[readme‑en.md](../readme-en.md)`.
- Änderungen sollten synchron in beiden Dateien erfolgen, um Konsistenz zu wahren.

---

## 🧱 Module

### **core.css**
Globales CSS‑Toolkit:
- Reset  
- Spacing  
- Flex/Grid  
- Shadows  
- Radius  
- Utilities  

### **core-theme.css**
Globales Theme‑System:
- Dark/Light Mode  
- Farbvariablen  
- Theme‑Transitions  

### **core-ui.css**
Styles für UI‑Komponenten:
- Modals  
- Toasts  
- Tabs  
- Dropdowns  
- Switches  

### **core-ui.js**
Interaktive Komponenten:
- Modal‑Engine  
- Toast‑System  
- Tabs  
- Dropdowns  
- Switch‑Events  


---

## 🎨 Branding

### Logo
Das Logo besteht aus einem abgerundeten Quadrat mit drei Punkten – ein Symbol für Modularität und Systematik.

### Farben
- **Primary:** `#2962ff`  
- **Gradient:** `#2962ff → #8e5cff`  
- **Dark Backgrounds:** `#0e1114`, `#131722`, `#1c2333`  
- **Status:** Success, Danger, Warning  

### Typografie
- **Inter**  
- Überschriften: 600  
- Buttons: 500  
- Body: 400  

---



❤️ Autor
Ismail Karaduz  


📄 Lizenz
MIT