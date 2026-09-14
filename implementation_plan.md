# Implementierungsplan: 80 Philosophen-Porträts generieren

Das ist ein großartiges Vorhaben! Da es sich um ca. 80 individuelle Philosophen handelt, die alle in der `philosopher-profile.js` hinterlegt sind, ist das definitiv machbar. Aufgrund von API-Ratenbegrenzungen muss dieser Prozess jedoch über mehrere Tage oder Sitzungen verteilt werden.

## 🎯 Ziel
Generierung von 80 einzigartigen Porträts für jeden individuellen Philosophen und Integration dieser Bilder in die bestehende Website-Struktur.

## 🎨 Beschlossener Stil & Parameter (WICHTIG FÜR FORTSETZUNG)
Um zu gewährleisten, dass auch nach einem Neustart des Rechners oder einer Pause (z.B. am nächsten Tag) der exakt gleiche Stil beibehalten wird, **MUSS** für alle zukünftigen Bilder zwingend dieser Prompt und dieses Format verwendet werden:

- **Aspect Ratio / Format:** `3:4` (Hochformat)
- **Tool:** `generate_image`
- **Exakter Prompt-Template:** 
  > A modern, minimalist vector art portrait of the philosopher [NAME DES PHILOSOPHEN]. Flat colors, clean look, monochrome accents with a dark mode aesthetic (dark blues, grays). Geometric shapes, subtle shading, sleek and elegant. No background clutter, focused entirely on the bust/face.

## 🛠️ Geplante Umsetzung & Aktueller Stand

### 1. Stil-Definition & Test (✅ Abgeschlossen)
Der Stil "Modern & Minimalistisch" wurde gewählt und an Aristoteles und Thales erfolgreich getestet.

### 2. Batch-Generierung & Pausen
Da das KI-Modell ein striktes Limit für die Bildgenerierung hat, müssen die Bilder in Blöcken generiert werden.
**Wichtig für die Fortsetzung:** 
Sobald das Limit wieder freigegeben ist (z.B. am nächsten Tag), einfach den Chat öffnen und mich anweisen: *"Bitte setze die Bildgenerierung laut task.md fort."* Am besten direkt in Kombination mit dem Befehl `/goal`.

### 3. Anpassung der `philosopher-profile.js`
Für alle erfolgreich generierten Bilder muss in der Datei `assets/js/philosopher-profile.js` das Feld `portrait` ergänzt werden. 
*Beispiel:*
```json
"slug": "aristoteles",
"portrait": "../assets/img/philosophers/aristoteles.jpg",
```

## ✅ Verifizierungsplan
- Ich stelle sicher, dass alle generierten `.jpg` Dateien im Ordner `assets/img/philosophers/` liegen.
- Die JavaScript-Datei lädt die Bilder fehlerfrei auf den jeweiligen Profilseiten.
- Die Fortschritte werden laufend in der `task.md` Checkliste dokumentiert.
