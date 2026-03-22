# 🌊 Viareggio mon Amour

App web mobile-first per la campagna elettorale del Comune di Viareggio 2026.

## Struttura file

```
viareggio-mon-amour/
├── index.html        ← App principale (tutto in un file)
├── manifest.json     ← Configurazione PWA
├── sw.js             ← Service Worker (offline support)
├── make_icons.py     ← Script generazione icone
├── icons/
│   ├── icon.svg
│   ├── icon-192.png
│   └── icon-512.png
└── README.md
```

## Funzionalità

- 🏠 **Home** — Hero campagna, quick actions, notizie e eventi in evidenza
- 📰 **Notizie** — Feed filtrabili per categoria
- 🗓️ **Eventi** — Calendario campagna con dettaglio completo
- 🔔 **Notifiche** — Centro notifiche push
- 📊 **Trasparenza** — Impegni con stato avanzamento
- 🚌 **Servizi** — Orari TPL, parcheggi, taxi, bike sharing
- 🔐 **Admin** — Pannello protetto per pubblicare eventi e notizie

## Accesso admin (demo)

- Email: `admin@viareggio.it`
- Password: `admin123`

## Deploy su GitHub Pages

Vedi la guida completa nel file `GUIDA-GITHUB.md`.

## PWA — Installazione su Android

1. Apri l'URL in Chrome
2. Menu ⋮ → "Aggiungi a schermata Home"
3. L'app si installa come nativa
