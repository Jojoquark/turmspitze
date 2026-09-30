# Turmspitze – Spielhalle

Eine kleine Spielhalle als Web-App mit drei Spielen und einem gemeinsamen Guthaben:

- **Turmspitze**: Spielautomat im Stil von „Alles Spitze“. Drei Türme, eine 1×1-Walze, die Sonne als Joker, der Teufel und die Risikoleiter bis 300 €.
- **Roulette**: klassisches französisches Roulette mit einer Null, wie in der Spielbank. Alle Einsatzarten, Kesselspiele (Voisins, Tiers, Orphelins, Jeu Zéro, Nachbarn, Finales), „en prison“ oder Partage bei Zero, Permanenz und Statistik.
- **Black Jack**: nach den Regeln deutscher Spielbanken. Sechs Decks, die Bank zieht bis 16 und steht ab 17, keine verdeckte Bankkarte, Black Jack zahlt 3 : 2, Versicherung, Teilen und Verdoppeln. Dazu gibt es einen Strategie-Tipp mit exakten Erwartungswerten und eine Strategietabelle. Die Regeln lassen sich umstellen, auch auf Las Vegas.

Alles läuft im Browser, auch offline. Auf iPhone, iPad und Android lässt sich die Spielhalle als App auf den Startbildschirm legen.

**Es wird nur mit Spielgeld gespielt.** Das Guthaben lässt sich jederzeit auf 10, 20, 50 oder 100 € setzen, über den Knopf **GUTHABEN** in der Spielauswahl oder das €-Symbol in jedem Spiel. Name, Grafiken und Sounds sind selbst gemacht und stammen nicht von Merkur/Gauselmann.

## Auf GitHub Pages veröffentlichen

1. Auf GitHub ein öffentliches Repository anlegen, zum Beispiel `turmspitze`.
2. Alle Dateien aus diesem Ordner hochladen („Add file → Upload files“). `index.html` muss im Hauptordner liegen. Eine ältere Version einfach überschreiben.
3. Im Repository **Settings → Pages** öffnen. Bei „Source“ **Deploy from a branch** wählen, dann den Branch `main` und den Ordner `/ (root)` einstellen und speichern.
4. Nach ein bis zwei Minuten ist die Spielhalle unter `https://DEINNAME.github.io/turmspitze/` erreichbar.

Direkt zu einem Spiel springen: `…/turmspitze/#roulette`, `#blackjack` oder `#turmspitze`.

## Als App installieren

- **iPhone / iPad (Safari):** Seite öffnen → **Teilen** → **Zum Home-Bildschirm** → **Hinzufügen**.
- **Android (Chrome):** Seite öffnen → in der Spielauswahl auf den Download-Knopf oben rechts tippen → **Installieren**. Alternativ im Menü ⋮ **App installieren** wählen.
- **Computer (Chrome/Edge):** das Installieren-Symbol in der Adressleiste anklicken.

Danach startet die Spielhalle im Vollbild und funktioniert auch ohne Internet. Guthaben, Einstellungen und Statistiken werden auf dem Gerät gespeichert. War die alte Version schon installiert, holt sich die App das Update beim nächsten Start mit Internet automatisch.

## Bedienung

**Spielauswahl:** Spiel antippen oder die Tasten 1 / 2 / 3. Mit G öffnet sich das Guthaben, mit E die Einstellungen (Ton, Lautstärke, Sparmodus, Croupier-Stimme). Aus jedem Spiel führt das Haus-Symbol (oder Esc) zurück, sobald die Runde vorbei ist.

**Turmspitze**

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

**Roulette**

| Aktion | Touch | Tastatur |
|---|---|---|
| Jeton wählen | Jeton unten antippen | 1 – 7 |
| Setzen | Feld antippen: Mitte = Plein, Linie = Cheval, Kreuzung = Carré, Außenkante = Transversale | – |
| Kesselspiele | im Racetrack (Hochformat: Reiter „Kesselspiele“) Zahl mit Nachbarn oder Voisins/Tiers/Orphelins/Zéro antippen | – |
| Einsatz wegnehmen | ENTFERNEN, dann Feld antippen | Rechtsklick |
| Zurück, Wiederholen, Verdoppeln, Löschen | Knöpfe | Z, W, D, C |
| Drehen | DREHEN oder Kessel antippen | Leertaste |

**Black Jack**

| Aktion | Touch | Tastatur |
|---|---|---|
| Setzen | Jeton wählen, Box antippen (bis zu drei Boxen) | 1 – 7 |
| Geben | GEBEN | Leertaste |
| Karte / Stehen | KARTE / STEHEN | K oder ↑ / S oder ↓ |
| Verdoppeln / Teilen / Aufgeben | Knöpfe | D / T / A |
| Versicherung | VERSICHERN / KEINE | V / N |
| Strategietabelle | STRATEGIE | G |

## Regeln kurz

**Turmspitze:** Jeder Dreh kostet den Einsatz. Käfer, Münze und Kleeblatt lassen ihren Turm eine Stufe steigen, die Sonne alle drei. Der Teufel setzt den Jackpot (Summe der Türme) auf 0. Volle Türme zahlen jeden weiteren Treffer direkt aus. Nach der Annahme dürfen Gewinne bis 84 € riskiert werden (Leiter, Karte Rot/Schwarz oder Teilen). Die Auszahlungsquote wird exakt berechnet (Voreinstellung „Original“: 99,1 % bei optimalem Spiel).

**Roulette:** 37 Zahlen (0 bis 36), jede fällt mit 1/37. Plein 35 : 1, Cheval 17 : 1, Transversale und Trio 11 : 1, Carré und „Les quatre premiers“ 8 : 1, Sixain 5 : 1, Dutzend und Kolonne 2 : 1, einfache Chancen 1 : 1. Fällt Zero, werden einfache Chancen gesperrt („en prison“) oder zur Hälfte zurückgezahlt. Hausvorteil 2,70 %, auf einfachen Chancen 1,35 %.

**Black Jack:** Näher an 21 als die Bank, ohne 21 zu überschreiten. Die Bank bekommt ihre zweite Karte erst, wenn alle Spieler fertig sind. Hat sie dann Black Jack, verlieren alle Einsätze, auch Verdopplungen und Teilungen (einstellbar). Verdoppeln bei 9, 10 und 11, auch nach dem Teilen. Geteilte Asse bekommen nur je eine Karte. Versicherung bis zum halben Einsatz, zahlt 2 : 1. Mit Grundstrategie liegt der Hausvorteil bei etwa 0,7 %.

## Dateien

- `index.html` – die komplette Spielhalle (Grafik, Sounds und Schriften sind eingebettet)
- `manifest.webmanifest`, `sw.js`, `icons/` – für Installation und Offline-Betrieb
- `lizenzen/` – Lizenzen der Schriften Lilita One und Nunito (SIL Open Font License)
