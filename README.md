# Turmspitze

Ein Spielautomat im Stil von „Alles Spitze“ als Web-App: drei Türme, eine 1×1-Walze, die Sonne als Joker, der Teufel und die Merkur-Risikoleiter bis 300 €. Das Spiel läuft komplett im Browser, auch offline, und lässt sich auf iPhone, iPad und Android als App auf den Startbildschirm legen.

**Es wird nur mit Spielgeld gespielt.** Name, Grafiken und Sounds sind selbst gemacht und stammen nicht von Merkur/Gauselmann.

## Auf GitHub Pages veröffentlichen

1. Auf GitHub ein neues, öffentliches Repository anlegen, zum Beispiel `turmspitze`.
2. Alle Dateien aus diesem Ordner hochladen („Add file → Upload files“). `index.html` muss im Hauptordner liegen.
3. Im Repository **Settings → Pages** öffnen. Bei „Source“ **Deploy from a branch** wählen, dann den Branch `main` und den Ordner `/ (root)` einstellen und speichern.
4. Nach ein bis zwei Minuten ist das Spiel unter `https://DEINNAME.github.io/turmspitze/` erreichbar.

## Als App installieren

- **iPhone / iPad (Safari):** Seite öffnen → **Teilen** → **Zum Home-Bildschirm** → **Hinzufügen**.
- **Android (Chrome):** Seite öffnen → auf den Download-Knopf oben im Spiel tippen → **Installieren**. Alternativ im Menü ⋮ **App installieren** wählen.
- **Computer (Chrome/Edge):** das Installieren-Symbol in der Adressleiste anklicken.

Danach startet Turmspitze im Vollbild und funktioniert auch ohne Internet. Guthaben, Einstellungen und Statistik werden auf dem Gerät gespeichert.

## Bedienung

| Aktion | Touch | Tastatur |
|---|---|---|
| Start / Stopp | Walze oder START antippen | Leertaste |
| Jackpot annehmen | Annahme | A oder ↓ |
| Risikoleiter / Licht anhalten | RISIKO bzw. STOPP (oder die Leiter antippen) | R oder ↑ |
| Karte Rot / Schwarz | ROT / SCHWARZ | ← / → |
| Teilen / Gewinn nehmen | TEILEN / ANNEHMEN | H / N |
| Einsatz | − / + / MAX | − / + |
| Auto-Start, Turbo | AUTO START, TURBO | U, T |
| Einstellungen, Hilfe, Statistik, Ton | Symbole oben rechts | E, I, S, M |

## Regeln kurz

- Jeder Dreh kostet den Einsatz. Käfer, Münze und Kleeblatt lassen ihren Turm eine Stufe steigen, die Sonne alle drei.
- Der Teufel setzt den Jackpot (Summe der Türme) auf 0. Bleibt die Walze zwischen zwei Symbolen stehen, passiert nichts.
- Volle Türme bleiben stehen; jeder weitere Treffer zahlt den Spitzenwert direkt aufs Guthaben. Erstmals alle drei voll: einmalig 500 × Einsatz.
- Nach der Annahme dürfen Gewinne bis 84 € riskiert werden: Leiter 0,15 … 140 € (mit Risiko+ bis 300 €), Karte Rot/Schwarz oder Teilen. Das Licht läuft, bis du STOPP drückst; im Moment des Drückens entscheidet der Zufall (fair).
- Alle Wahrscheinlichkeiten sind in den Einstellungen frei einstellbar. Die Auszahlungsquote wird exakt über alle 216 Turm-Zustände berechnet (Voreinstellung „Original“: 99,1 % bei optimalem Spiel).

## Dateien

- `index.html` – das komplette Spiel (Grafik, Sounds und Schriften sind eingebettet)
- `manifest.webmanifest`, `sw.js`, `icons/` – für Installation und Offline-Betrieb
- `lizenzen/` – Lizenzen der Schriften Lilita One und Nunito (SIL Open Font License)
