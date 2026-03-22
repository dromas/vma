# 🌊 VMA — Viareggio mon Amour

App web mobile-first per la campagna elettorale del Comune di Viareggio 2026.

## Stack

- **React 18** + **Vite 5** — build velocissima
- **React Router 6** (HashRouter) — navigazione client-side, zero config server
- **Context API** — stato globale condiviso tra app e admin
- **CSS puro** — nessun framework CSS, massima leggerezza
- **GitHub Actions** — deploy automatico su ogni push

## Struttura

```
vma/
├── src/
│   ├── components/
│   │   ├── AppShell.jsx        ← layout shell + bottom nav
│   │   ├── DetailOverlay.jsx   ← overlay dettaglio notizie/eventi
│   │   └── HomeBanner.jsx      ← banner con 3 opzioni logo VMA
│   ├── screens/
│   │   ├── Home.jsx
│   │   ├── Notizie.jsx
│   │   ├── Eventi.jsx
│   │   ├── Notifiche.jsx
│   │   ├── Trasparenza.jsx
│   │   ├── Servizi.jsx
│   │   ├── Profilo.jsx
│   │   └── Admin.jsx           ← pannello admin con login
│   ├── hooks/
│   │   ├── useToast.jsx        ← sistema toast globale
│   │   └── useData.jsx         ← stato globale notizie/eventi
│   ├── data/
│   │   └── content.js          ← dati iniziali
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
│   ├── manifest.json
│   └── icons/
├── .github/workflows/
│   └── deploy.yml              ← CI/CD automatico
├── index.html
├── vite.config.js
└── package.json
```

## Sviluppo locale

```bash
npm install
npm run dev
# → http://localhost:5173/vma/
```

## Deploy su GitHub Pages

### Prima volta
1. Crea repository GitHub chiamato `vma` (Public)
2. Carica tutti i file
3. Vai su Settings → Pages → **Source: GitHub Actions**
4. Fai un push → il workflow parte automaticamente
5. In ~2 minuti l'app è live su `https://tuousername.github.io/vma/`

### Aggiornamenti futuri
```bash
# modifica un file, poi:
git add .
git commit -m "aggiunta notizia X"
git push
# → GitHub Actions rebuilda e deploya in automatico, ~2 minuti
```

**Zero problemi di cache** — Vite genera hash univoci per ogni build, i browser scaricano sempre la versione aggiornata.

## Accesso Admin (demo)

- Email: `admin@viareggio.it`
- Password: `admin123`

Percorso: Profilo → Accesso amministratore

## Personalizzazione

### Cambiare le credenziali admin
In `src/screens/Admin.jsx`, riga 7:
```js
const CREDS = { email: 'tuaemail@dominio.it', pwd: 'TuaPassword!' }
```

### Cambiare il nome del repository
In `vite.config.js`:
```js
base: '/nome-tuo-repo/',
```
E in `public/manifest.json` aggiorna `start_url` e `scope`.

### Aggiungere notizie ed eventi iniziali
Modifica `src/data/content.js`.
