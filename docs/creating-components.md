# Anleitung: Komponenten erweitern & erstellen

Das Ismail Framework UI ist modular aufgebaut. Neue Komponenten folgen einem klaren Muster aus **HTML (Struktur)**, **CSS (Design)** und **JS (Logik)**.

---

## 1. Das Architektur-Pattern

Jede Komponente besteht aus drei Teilen:

1.  **HTML**: Nutzung von `data-attributes` (z.B. `data-modal-open`, `data-tab`).
2.  **CSS**: Nutzung der globalen Variablen aus `core.css` / `core-theme.css`.
3.  **JS**: Ein globales Objekt (z.B. `window.MyComponent`) mit einer `init()` Funktion.

---

## 2. Schritt-für-Schritt Beispiel: "Tooltip"

Hier zeigen wir, wie man eine einfache **Tooltip-Komponente** erstellt.

### Schritt A: CSS erstellen
Erstelle (oder erweitere) eine CSS-Datei, z.B. `assets/css/components/tooltip.css` oder füge es in `core-ui.css` ein.

```css
/* Tooltip Styles */
[data-tooltip] {
  position: relative;
  cursor: help;
}

[data-tooltip]::before {
  content: attr(data-tooltip-text);
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(-5px);
  
  /* Design-Tokens nutzen! */
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  color: var(--text);
  padding: var(--space-2);
  border-radius: var(--radius-sm);
  font-size: 12px;
  white-space: nowrap;
  box-shadow: var(--shadow-sm);
  
  /* Initial versteckt */
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s ease, transform 0.2s ease;
}

[data-tooltip]:hover::before {
  opacity: 1;
  transform: translateX(-50%) translateY(-10px);
}
```

### Schritt B: JavaScript Logik (optional)
Falls die Komponente Interaktion benötigt, erstelle eine JS-Datei, z.B. `assets/js/tooltip.js`.

```javascript
// assets/js/tooltip.js
window.Tooltip = {
  init() {
    console.log("Tooltips initialisiert");
    
    // Accessibility Enhancements (ARIA labels)
    this.enhanceAccessibility();
  },

  enhanceAccessibility() {
     document.querySelectorAll("[data-tooltip]").forEach(el => {
      const text = el.getAttribute("data-tooltip-text");
      if (text && !el.getAttribute("aria-label")) {
        el.setAttribute("aria-label", text);
      }
    });
  }
};
```

### Schritt C: Komponente registrieren
Damit die Komponente automatisch geladen wird, musst du sie in `assets/js/core-ui.js` registrieren.

1.  Binde die JS-Datei in deinem HTML ein (vor `core-ui.js` oder als Modul).
2.  Erweitere `initUI` in `assets/js/core-ui.js`:

```javascript
window.initUI = function () {
  if (window.Modal) Modal.init();
  if (window.Tabs) Tabs.init();
  // ... andere ...
  
  // NEU:
  if (window.Tooltip) Tooltip.init(); 
};
```

---

## 3. Bestehende Komponenten erweitern

Möchtest du z.B. das **Modal** erweitern (z.B. Animation ändern)?

1.  **CSS überschreiben**:
    Lade eine eigene CSS-Datei *nach* `core-ui.css` und überschreibe die Klassen.
    ```css
    .modal-content {
      animation: myNewAnimation 0.5s ease !important;
    }
    ```

2.  **JS erweitern**:
    Du kannst die `init`-Funktion monkey-patchen oder ergänzen, bevor `initUI()` aufgerufen wird.
    ```javascript
    const originalModalInit = window.Modal.init;
    window.Modal.init = function() {
      originalModalInit(); // Original Logik
      console.log("Modal erweitert!"); // Deine Logik
    };
    ```

---

## 4. Checkliste für neue Komponenten

- [x] **Design-Tokens genutzt?** (Farben `var(--accent)`, Spacing `var(--space-2)`, Radius `var(--radius-md)`)
- [x] **Dark Mode kompatibel?** (Niemals Hardcode-Farben wie `#fff` oder `#000` nutzen, immer Variablen)
- [x] **Data-Attribute genutzt?** (Besser `data-widget` als `.widget` für JS-Selektoren)
- [x] **In `initUI` registriert?**

