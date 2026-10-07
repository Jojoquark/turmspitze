# Turmspitze – Spielhalle

Eine Spielhalle als Web-App mit **zehn Spielen**, einem gemeinsamen Guthaben, Spielerkonten und Admin-Bereich.

**Spielhalle (deutsche Klassiker)**

- **Turmspitze**: Spielautomat im Stil von „Alles Spitze“. Drei Türme, eine 1×1-Walze, die Sonne als Joker, der Teufel und die Risikoleiter bis 300 €.
- **Roulette**: klassisches französisches Roulette mit einer Null, wie in der Spielbank. Alle Einsatzarten, Kesselspiele (Voisins, Tiers, Orphelins, Jeu Zéro, Nachbarn, Finales), „en prison“ oder Partage bei Zero, Permanenz und Statistik.
- **Black Jack**: nach den Regeln deutscher Spielbanken, mit Strategie-Tipp und Strategietabelle.
- **Sonnenbuch**: Walzenspiel im Stil der klassischen Buch-Automaten mit Freispielen, wachsenden Sondersymbolen, Risikoleiter und Karte. Auszahlungsquote 95,03 %.

**Neu**

- **Goldzahl-Roulette**: Roulette nach den Regeln der „3000er“-Live-Roulettes (Vorbild: Mega Roulette 3000). Vor jedem Coup blitzen 1 bis 8 Goldzahlen mit 50× bis 3000× auf. Plein zahlt 19 : 1, auf einer Goldzahl den Multiplikator. Europäischer Tisch, Voisins/Tiers/Orphelins/Jeu Zéro, Auto-Spiel, heiße und kalte Zahlen.
- **Schatzstollen**: Sammler-Slot nach der Mechanik von Pirots. Vier Maulwürfe sammeln Edelsteine ihrer Farbe, Edelsteine steigen bis Stufe 5, Dynamit vergrößert den Stollen von 5 × 5 bis 8 × 8, Sammelleiste mit Schatztruhen, Schatzsuche (Bonus) mit Freifahrten, Kaufoptionen wie beim X-iter.
- **Mines**, **Plinko** und **Chicken**: wie die Casino-Originals von Stake – gleiche Mathematik und Bedienung (Manuell/Auto, ½ und 2×, Stopp bei Gewinn/Verlust).
- **Höhenflug**: Crash-Spiel mit Flugzeug im Stil von Aviator – zwei Einsätze gleichzeitig, Auto-Auszahlung, Auto-Spiel, Verlauf.

Alles läuft im Browser, auch offline. Auf iPhone, iPad und Android lässt sich die Spielhalle als App auf den Startbildschirm legen.

**Es wird nur mit Spielgeld gespielt.** Namen, Grafiken, Figuren und Sounds sind selbst gemacht; nur die Spielregeln und die Mathematik folgen den genannten Vorbildern. Es werden keine Logos oder Grafiken von Merkur/Gauselmann, Pragmatic Play, ELK Studios, Stake oder Spribe verwendet.

## Guthaben aufladen

- In der **Spielauswahl** oben der grüne Knopf **+ AUFLADEN** (oder die Guthaben-Anzeige antippen, Taste G).
- In **jedem Spiel** gibt es jetzt ein Aufladen: in den neuen Spielen der grüne **+ Aufladen**-Knopf neben dem Guthaben oben, in Turmspitze, Roulette, Black Jack und Sonnenbuch das **€-Symbol** oben rechts – oder einfach die **Guthaben-Anzeige antippen**.
- Aufgeladen werden +10, +20, +50 oder +100 € (der Admin kann die Beträge, eine Obergrenze und das Aufladen überhaupt einstellen).

Warum war es vorher versteckt? Turmspitze war ursprünglich ein einzelner Automat; das Guthaben ließ sich dort nur über **Statistik → Guthaben setzen** ändern. Als später die Spielhalle mit den anderen Spielen dazukam, bekamen Roulette, Black Jack und Sonnenbuch ein €-Symbol – Turmspitze nicht. Außerdem hieß der Knopf „Guthaben“ und setzte das Guthaben nur auf einen festen Betrag, statt etwas dazuzuladen.

## Spielerkonten, Statistik und Admin-Bereich

Jeder Spieler hat ein eigenes Konto mit Guthaben und Statistik (Runden, Einsatz, Gewinn, Ergebnis und bester Gewinn je Spiel). Das eigene Konto öffnet sich über den lila Namens-Knopf in der Spielauswahl (Taste K).

Den **Admin-Bereich** öffnest du über **Einstellungen (Zahnrad) → ADMIN** oder direkt mit `…/#admin`. Beim ersten Öffnen legst du dein **Admin-Passwort** fest. Danach kannst du:

- alle Spieler mit Guthaben, Ergebnis, Runden und „zuletzt aktiv“ sehen, suchen und sortieren (grüner Punkt = gerade online),
- Guthaben gutschreiben, abziehen oder auf einen Betrag setzen,
- die Statistik eines Spielers ansehen oder zurücksetzen, Spieler sperren/entsperren, eine private Notiz anlegen oder Spieler löschen,
- die Übersicht der ganzen Halle sehen: Einsätze, Auszahlungen, Ergebnis und echte Auszahlungsquote je Spiel, Guthaben aller Spieler, Export als CSV,
- Einstellungen für alle ändern: Startguthaben, Aufladen an/aus, Aufladebeträge, Obergrenze fürs Aufladen, einzelne Spiele aus- und einblenden, eine Mitteilung an alle (erscheint als Banner in der Spielauswahl),
- das Admin-Passwort ändern.

Es gibt zwei Betriebsarten:

1. **Lokal (ohne Einrichtung):** Jedes Gerät spielt für sich. Auf einem Gerät kann es mehrere Spieler geben („Mein Konto → Neuer Spieler“, z. B. für ein Familien-Tablet). Der Admin-Bereich verwaltet dann die Spieler **dieses Geräts**. Das Admin-Passwort wird nur als Prüfsumme auf dem Gerät gespeichert.
2. **Online (alle Geräte):** Mit einer kostenlosen Firebase-Datenbank melden sich alle Spieler mit Name und Passwort an, und du siehst im Admin-Bereich **alle Spieler auf allen Geräten**. Guthaben und Statistik werden alle paar Sekunden gespeichert; Änderungen des Admins kommen beim Spieler innerhalb von etwa 15 Sekunden an.

### Online-Konten und Admin-Panel einrichten (einmalig, ca. 10 Minuten)

1. Auf [console.firebase.google.com](https://console.firebase.google.com) mit einem Google-Konto anmelden und **Projekt erstellen** (Name beliebig, Google Analytics kann aus bleiben).
2. Links **Build → Authentication → Jetzt starten**. Unter „Anmeldeanbieter“ **E-Mail/Passwort** aktivieren und speichern.
3. **Build → Realtime Database → Datenbank erstellen**, Standort z. B. Belgien (europe-west1), **im gesperrten Modus starten**.
4. In der Realtime Database den Reiter **Regeln** öffnen, den Inhalt komplett durch den Inhalt der Datei **`database.rules.json`** ersetzen und **Veröffentlichen**.
5. Zahnrad oben links → **Projekteinstellungen** → unten bei „Meine Apps“ das Web-Symbol **&lt;/&gt;** anklicken, einen Namen eingeben, registrieren. Im angezeigten Code stehen `apiKey` und `databaseURL`.
6. Die Datei **`online-config.js`** öffnen (auf GitHub: Datei anklicken → Stift-Symbol) und die beiden Werte eintragen:
   ```js
   window.TURMSPITZE_ONLINE = {
     apiKey: 'AIza…',
     databaseURL: 'https://dein-projekt-default-rtdb.europe-west1.firebasedatabase.app'
   };
   ```
   Speichern („Commit changes“). Alternativ im Admin-Bereich unter **Online** die Werte eintragen, **Verbindung testen** und die fertige Datei herunterladen.
7. Spielhalle öffnen (eventuell zweimal neu laden, weil die App die alte Fassung zwischenspeichert), `#admin` aufrufen und sofort dein **Admin-Passwort festlegen** (mindestens 6 Zeichen). Wer zuerst ein Admin-Passwort festlegt, ist Admin – deshalb gleich nach der Einrichtung erledigen.

Hinweise:

- Der `apiKey` von Firebase ist kein Geheimnis; geschützt werden die Daten durch die Regeln aus `database.rules.json`. Spieler können nur ihr eigenes Konto lesen und schreiben, Sperren und Notizen kann nur der Admin ändern.
- Spieler melden sich mit Name und Passwort an. Intern wird daraus eine Adresse wie `max@turmspitze.example.com`, an die nie etwas geschickt wird. Ein vergessenes Passwort kann nicht zurückgesetzt werden: einfach neues Konto anlegen lassen und im Admin-Bereich das alte Guthaben gutschreiben.
- Da es Spielgeld ist, ist das System auf Bequemlichkeit ausgelegt, nicht auf Bank-Sicherheit: Wer sich mit Entwicklerwerkzeugen auskennt, könnte sein eigenes Spielgeld-Guthaben verändern. Fremde Konten, Sperren und Einstellungen sind durch die Regeln geschützt.
- Wird der Online-Modus eingeschaltet, startet jeder Spieler mit dem Startguthaben. Lokale Spielstände werden nicht automatisch übernommen (der Admin kann Guthaben gutschreiben).

## Auf GitHub Pages veröffentlichen

1. Auf GitHub ein öffentliches Repository anlegen, zum Beispiel `turmspitze`.
2. Alle Dateien aus diesem Ordner hochladen („Add file → Upload files“). `index.html` muss im Hauptordner liegen. Eine ältere Version einfach überschreiben – Guthaben und Statistiken auf den Geräten bleiben erhalten.
3. Im Repository **Settings → Pages** öffnen. Bei „Source“ **Deploy from a branch** wählen, dann den Branch `main` und den Ordner `/ (root)` einstellen und speichern.
4. Nach ein bis zwei Minuten ist die Spielhalle unter `https://DEINNAME.github.io/turmspitze/` erreichbar.

Direkt zu einem Spiel springen: `…/turmspitze/#roulette`, `#blackjack`, `#sonnenbuch`, `#turmspitze`, `#goldroulette`, `#schatzstollen`, `#mines`, `#plinko`, `#chicken` oder `#hoehenflug`. Den Admin-Bereich öffnet `…/turmspitze/#admin`.

## Als App installieren

- **iPhone / iPad (Safari):** Seite öffnen → **Teilen** → **Zum Home-Bildschirm** → **Hinzufügen**.
- **Android (Chrome):** Seite öffnen → in der Spielauswahl auf den Download-Knopf oben rechts tippen → **Installieren**. Alternativ im Menü ⋮ **App installieren** wählen.
- **Computer (Chrome/Edge):** das Installieren-Symbol in der Adressleiste anklicken.

Danach startet die Spielhalle im Vollbild und funktioniert auch ohne Internet. Guthaben, Einstellungen und Statistiken werden auf dem Gerät gespeichert. War die alte Version schon installiert, holt sich die App das Update beim nächsten Start mit Internet automatisch.

## Als App installieren

- **iPhone / iPad (Safari):** Seite öffnen → **Teilen** → **Zum Home-Bildschirm** → **Hinzufügen**.
- **Android (Chrome):** Seite öffnen → in der Spielauswahl auf den Download-Knopf oben rechts tippen → **Installieren**. Alternativ im Menü ⋮ **App installieren** wählen.
- **Computer (Chrome/Edge):** das Installieren-Symbol in der Adressleiste anklicken.

Danach startet die Spielhalle im Vollbild und funktioniert auch ohne Internet (im Online-Modus wird nachgespeichert, sobald wieder Verbindung besteht). War die alte Version schon installiert, holt sich die App das Update beim nächsten Start mit Internet automatisch.

## Bedienung

**Spielauswahl:** Spiel antippen oder die Tasten 1 bis 9 und 0. Mit G öffnet sich das Aufladen, mit K das eigene Konto, mit E die Einstellungen (Ton, Lautstärke, Sparmodus, Croupier-Stimme, Konto, Admin). Aus jedem Spiel führt das Haus-Symbol (oder Esc) zurück, sobald die Runde vorbei ist.

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

**Sonnenbuch**

| Aktion | Touch | Tastatur |
|---|---|---|
| Start / Stopp | START oder Walzen antippen | Leertaste |
| Einsatz je Linie / Linien | − / + / LINIEN | − / + / X |
| Gewinn riskieren mit der Karte | RISIKO, dann ROT / SCHWARZ | R, dann ← / → |
| Risikoleiter | LEITER, dann STOPP (oder Leiter antippen) | L, dann Leertaste oder ↑ |
| Gewinn annehmen | ANNEHMEN (START nimmt den Gewinn und dreht weiter) | N oder ↓ |
| Auto-Start, Gewinnplan | AUTO START, GEWINNPLAN | A, I |

**Black Jack**

| Aktion | Touch | Tastatur |
|---|---|---|
| Setzen | Jeton wählen, Box antippen (bis zu drei Boxen) | 1 – 7 |
| Geben | GEBEN | Leertaste |
| Karte / Stehen | KARTE / STEHEN | K oder ↑ / S oder ↓ |
| Verdoppeln / Teilen / Aufgeben | Knöpfe | D / T / A |
| Versicherung | VERSICHERN / KEINE | V / N |
| Strategietabelle | STRATEGIE | G |

**Goldzahl-Roulette**

| Aktion | Touch | Tastatur |
|---|---|---|
| Jeton wählen | Jeton unten antippen | 1 – 6 |
| Setzen | Feld antippen: Mitte = Plein, Linie = Cheval, Kreuzung = Carré, untere Kante = Transversale (zwischen zwei Reihen: Sixain), Kante zur Null = Null-Kombinationen | – |
| Spezialwetten | Voisins, Tiers, Orphelins, Jeu Zéro | – |
| Jeton wegnehmen | – | Rechtsklick |
| Zurück, Wiederholen, Verdoppeln, Löschen | Knöpfe | Z, W, D, C |
| Drehen / Nochmal | DREHEN | Leertaste |
| Auto-Spiel | AUTO (5, 10, 25 oder 50 Coups) | – |

**Schatzstollen**

| Aktion | Touch | Tastatur |
|---|---|---|
| Drehen / Animation beschleunigen | runder Knopf oder Stollen antippen | Leertaste |
| Einsatz | − / + | – |
| Auto, Turbo | AUTO, TURBO | A, T |
| Lore-Jagd, Bonus kaufen | KAUFEN | – |

**Mines, Plinko, Chicken**

| Aktion | Touch | Tastatur |
|---|---|---|
| Setzen / Auszahlen | grüner Knopf | Leertaste |
| Feld aufdecken (Mines) | Feld antippen, „Zufälliges Feld“ | – |
| Nächste Spur (Chicken) | Spur antippen oder WEITER | Leertaste, A = Auszahlen |
| Einsatz halbieren / verdoppeln | ½ / 2× | – |
| Auto | Reiter AUTO: Anzahl, bei Gewinn/Verlust zurücksetzen oder erhöhen, Stopp bei Nettogewinn/Verlust. Bei Mines vorher Felder antippen, bei Chicken die Ziel-Spur wählen. | – |

**Höhenflug**

| Aktion | Touch | Tastatur |
|---|---|---|
| Setzen / Abbrechen / Auszahlen | großer Knopf im linken oder rechten Einsatzfeld | Leertaste (links) |
| Einsatz | − / + oder 1 €, 2 €, 5 €, 10 € | – |
| Auto-Auszahlung | Reiter AUTO, Schalter und Multiplikator | – |
| Auto-Spiel | Reiter AUTO → AUTO-SPIEL (10 bis 100 Runden, Stopp-Regeln) | – |

## Regeln kurz

**Turmspitze:** Jeder Dreh kostet den Einsatz. Käfer, Münze und Kleeblatt lassen ihren Turm eine Stufe steigen, die Sonne alle drei. Der Teufel setzt den Jackpot (Summe der Türme) auf 0. Volle Türme zahlen jeden weiteren Treffer direkt aus. Nach der Annahme dürfen Gewinne bis 84 € riskiert werden (Leiter, Karte Rot/Schwarz oder Teilen). Die Auszahlungsquote wird exakt berechnet (Voreinstellung „Original“: 96,0 % bei optimalem Spiel, 90,8 % bei sofortiger Annahme).

**Roulette:** 37 Zahlen (0 bis 36), jede fällt mit 1/37. Plein 35 : 1, Cheval 17 : 1, Transversale und Trio 11 : 1, Carré und „Les quatre premiers“ 8 : 1, Sixain 5 : 1, Dutzend und Kolonne 2 : 1, einfache Chancen 1 : 1. Fällt Zero, werden einfache Chancen gesperrt („en prison“) oder zur Hälfte zurückgezahlt. Hausvorteil 2,70 %, auf einfachen Chancen 1,35 %.

**Sonnenbuch:** Gewinne zählen auf den gespielten Linien von links nach rechts. Falke 10/100/1000/5000, Katze 5/40/400/2000, Ankh und Pyramide 5/30/100/750, A und K 5/40/150, Q, J und 10 5/25/100 (je Linieneinsatz), Bücher irgendwo 2/20/200 × Gesamteinsatz. In den Freispielen zahlt das ausgebreitete Sondersymbol auf allen gespielten Linien, auch auf Walzen, die nicht nebeneinander liegen. Risiko: Karte bis zu 5× verdoppeln, Leiter Stufe für Stufe bis zum 500-fachen Einsatz, jeweils 50 : 50. Freispiele kommen im Schnitt alle 197 Spiele.

**Black Jack:** Näher an 21 als die Bank, ohne 21 zu überschreiten. Die Bank bekommt ihre zweite Karte erst, wenn alle Spieler fertig sind. Hat sie dann Black Jack, verlieren alle Einsätze, auch Verdopplungen und Teilungen (einstellbar). Verdoppeln bei 9, 10 und 11, auch nach dem Teilen. Geteilte Asse bekommen nur je eine Karte. Versicherung bis zum halben Einsatz, zahlt 2 : 1. Mit Grundstrategie liegt der Hausvorteil bei etwa 0,7 %.

**Goldzahl-Roulette:** Europäischer Kessel mit 37 Zahlen. Nach dem Setzen werden 1 bis 8 Goldzahlen gezogen (im Schnitt 3,8) und bekommen 50×, 75×, 100×, 150×, 200×, 250×, 300×, 400×, 500×, 750×, 1000×, 1500×, 2000× oder 3000×. Plein zahlt 19 : 1, auf einer Goldzahl deren Multiplikator. Alle anderen Einsätze zahlen wie üblich (Cheval 17 : 1, Transversale 11 : 1, Carré und Erste Vier 8 : 1, Sixain 5 : 1, Dutzend/Kolonne 2 : 1, einfache Chancen 1 : 1, bei Zero verloren). Quote: Plein 97,50 %, alle anderen Einsätze 97,30 %.

**Schatzstollen:** Raster 5 × 5 bis 8 × 8. Im Grundspiel graben 1 bis 4 Maulwürfe mit, in der Schatzsuche immer alle vier. Ein Maulwurf sammelt waagerecht/senkrecht benachbarte Edelsteine seiner Farbe und läuft weiter, solange etwas zu sammeln ist; danach rutschen neue Steine nach. Rubin 0,25/0,5/1/3/15×, Amethyst 0,1/0,2/0,4/1,2/7,5×, Smaragd 0,05/0,15/0,3/0,9/5×, Saphir 0,05/0,1/0,2/0,6/3× Einsatz je Stein (Stufe 1 bis 5). Joker-Kristall, Schleifstein (Stufe +1, bunt: alle Farben), Farbtopf (färbt die Nachbarn um), Goldnugget (1× bis 1000×), Dynamit (Stollen wächst), Grubenlore (3 = Schatzsuche mit 5 Freifahrten, je 3 weitere +5). Sammelleiste 60 Steine = 3 Truhen mit Sonderfeldern. Kaufen: Lore-Jagd 3× Einsatz, Schatzsuche 100×, Super-Schatzsuche 500× (8 × 8, Stufe 3, 7 Freifahrten). Höchstgewinn 10.000×. Quote per Simulation (10 Mio. Runden): Grundspiel ≈ 95,5 %, Kaufoptionen ≈ 93–94 %, Schatzsuche im Schnitt alle 320 Fahrten.

**Mines:** 25 Felder, 1 bis 24 Minen. Multiplikator nach k Edelsteinen bei m Minen: 0,99 · C(25, k) / C(25 − m, k) – Quote 99 %.

**Plinko:** 8 bis 16 Reihen, Risiko Niedrig/Mittel/Hoch mit den Multiplikator-Tabellen des Originals (z. B. 16 Reihen Hoch: 1000× am Rand, 0,2× in der Mitte). Jede Reihe 50 : 50 links/rechts. Quote je Einstellung 98,9 bis 99,2 %.

**Chicken:** 20 Felder, davon 1/3/5/10 gefährlich (Leicht/Mittel/Schwer/Experte) – also 19/17/15/10 Spuren. Multiplikator nach k Spuren: 0,98 · C(20, k) / C(20 − m, k), z. B. Leicht 1,03× … 19,60×, Experte 1,96× … 181.060,88×. Quote 98 %.

**Höhenflug:** Der Multiplikator wächst mit e^(0,09·t) (2× nach etwa 8 Sekunden). Der Absturzpunkt wird vorher ausgelost: P(mindestens x) = 0,97 / x, etwa 3 % der Runden enden sofort bei 1,00×, höchstens 10.000×. Quote 97 % bei jeder Auszahl-Strategie. 5 Sekunden Setzzeit zwischen den Runden.

## Dateien

- `index.html` – die komplette Spielhalle (Grafik, Sounds und Schriften sind eingebettet)
- `online-config.js` – Zugang zur Firebase-Datenbank für den Online-Modus (leer = jedes Gerät für sich)
- `database.rules.json` – Sicherheitsregeln für die Firebase Realtime Database
- `manifest.webmanifest`, `sw.js`, `icons/` – für Installation und Offline-Betrieb
- `lizenzen/` – Lizenzen der Schriften Lilita One und Nunito (SIL Open Font License)
