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
- Datum‑Formatierung  
- Zahlen‑Formatierung  
- Currency/Percent  
- Storage‑System  
- Math‑Tools  
- Helper‑Funktionen  

### 📚 Dokumentation
- Framework‑Startseite  
- UI‑Komponenten‑Demo  
- UI‑Kit‑Dokumentation  
- Branding‑Seite  

---

## 📂 Projektstruktur

/assets
/css
core.css
core-theme.css
core-ui.css
ui-kit.css
variables.css
/js
core.js
core-ui.js
theme.js
trading.js
journal.js
/img
favicon/
logo/
icons/

/docs
framework.html
ui-components.html
ui.html
branding.html

/app
dev-dashboard.html

Code

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

### **core.js**
Utility‑Toolkit:
- formatDate()  
- formatNumber()  
- formatCurrency()  
- Storage‑System  
- Math‑Tools  
- Helpers  

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

## 🧪 Demo‑Seiten

| Seite | Beschreibung |
|-------|--------------|
| `/docs/framework.html` | Startseite des Frameworks |
| `/docs/ui-components.html` | Demo aller UI‑Komponenten |
| `/docs/ui.html` | UI‑Kit Dokumentation |
| `/docs/branding.html` | Branding‑Richtlinien |

---

## 🛠 Installation

Einfach die CSS‑ und JS‑Dateien einbinden:

```html
<link rel="stylesheet" href="assets/css/core.css">
<link rel="stylesheet" href="assets/css/core-theme.css">
<link rel="stylesheet" href="assets/css/core-ui.css">
<link rel="stylesheet" href="assets/css/ui-kit.css">

<script type="module">
  import { initUI } from "./assets/js/core-ui.js";
  import "./assets/js/theme.js";
  initUI();
</script>

🧩 Beispiel: Modal öffnen
html
<button data-modal-open="demoModal">Modal öffnen</button>

<div id="demoModal" class="modal">
  <div class="modal-content">
    <h3>Hallo!</h3>
    <button data-modal-close="demoModal">Schließen</button>
  </div>
</div>

🧭 Philosophie
Ismail UI basiert auf fünf Kernwerten:

Klarheit – keine unnötigen Elemente

Modularität – alles ist wiederverwendbar

Konsistenz – einheitliche Farben, Abstände, Typo

Produktivität – für echte Tools gebaut

Dark‑First Design – optimiert für moderne Dashboards

📌 Roadmap
v1.1


Komponenten‑Erweiterungen

Neue Widgets

v2.0
Layout‑System

Form‑Komponenten

Chart‑Styles

PWA‑Support

❤️ Autor
Ismail Karaduz  

📄 Lizenz
Eine öffentliche Lizenz kann später hinzugefügt werden.