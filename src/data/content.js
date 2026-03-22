export const NEWS_INIT = [
  {
    id: 'n1',
    tag: 'Programma', tagColor: 'blu',
    title: 'Piano mare: riqualificazione del Lungomare',
    desc: 'Più verde, più accessibile, più sicuro: il nostro progetto per il cuore di Viareggio.',
    date: '20 mar 2026',
    text: `Il nostro piano prevede la completa riqualificazione del Lungomare di Viareggio. Più verde, più accessibile, più sicuro.

Nel dettaglio:
• Nuova pavimentazione antiscivolo e accessibile ai disabili
• Piste ciclabili protette per tutto il lungomare
• 40 nuovi alberi e 200 nuove piante
• Illuminazione a LED a basso consumo
• Nuovi spazi giochi per bambini
• Wi-Fi gratuito nelle aree pubbliche

L'intervento è finanziato con fondi PNRR per un totale di €4,2 milioni.`,
  },
  {
    id: 'n2',
    tag: 'Campagna', tagColor: 'red',
    title: 'Incontro con i cittadini del quartiere Migliarina',
    desc: 'Ascolto diretto, proposte concrete. Rivedi il resoconto dell\'incontro del 18 marzo.',
    date: '18 mar 2026',
    text: `Un incontro partecipato e ricco di proposte. Oltre 80 cittadini hanno partecipato all'incontro di ascolto nel quartiere Migliarina.

I temi principali emersi:
• Necessità di nuovi marciapiedi su Via Aurelia
• Potenziamento della linea bus n.2
• Richiesta di un nuovo parco giochi
• Sicurezza stradale davanti alle scuole

Tutte le proposte verranno inserite nel programma elettorale.`,
  },
  {
    id: 'n3',
    tag: 'Avviso', tagColor: 'amb',
    title: "Dal 3 agosto: carta d'identità cartacea non più valida",
    desc: 'Il regolamento europeo 2025/1208 impone il rinnovo entro agosto 2026.',
    date: '15 mar 2026',
    text: `Il Regolamento Europeo 2025/1208 stabilisce che dal 3 agosto 2026 la carta d'identità cartacea non sarà più valida indipendentemente dalla data di scadenza.

Cosa fare:
• Prenotare online su servizi.comune.viareggio.lu.it
• Portare una foto tessera e il vecchio documento
• Il costo è di €22,50

Sportello anagrafe: Lun-Ven 8:30-12:30, Lun e Mer anche 15:00-17:00.`,
  },
  {
    id: 'n4',
    tag: 'Programma', tagColor: 'blu',
    title: "Scuole: il nostro piano per l'edilizia scolastica",
    desc: 'Sicurezza, efficienza energetica e ambienti moderni per i ragazzi di Viareggio.',
    date: '10 mar 2026',
    text: `La sicurezza e la qualità degli spazi educativi è una priorità assoluta del nostro programma.

Il piano prevede:
• Messa in sicurezza di tutti gli edifici scolastici entro il 2027
• Cappotti termici ed efficienza energetica (risparmio: 40%)
• Nuova mensa per la scuola primaria Migliarina
• Ambienti digitali e laboratori per le scuole secondarie

Budget previsto: €6,8 milioni (di cui €4M da fondi PNRR).`,
  },
]

export const EVENTI_INIT = [
  {
    id: 'e1', past: false,
    day: '29', month: 'MAR', color: 'red',
    cat: 'Comizio', catColor: 'red',
    title: 'Comizio — Piazza Mazzini',
    place: 'P.za Mazzini', time: '17:30',
    meta: ['📅 Domenica 29 marzo 2026', '🕐 Ore 17:30', '📍 Piazza Mazzini, Viareggio', '🎟️ Ingresso libero'],
    text: `Il grande comizio di presentazione della candidatura!

Porta amici, parenti e vicini di casa. Insieme possiamo fare la differenza.

Programma della serata:
• 17:30 — Apertura con musica dal vivo
• 18:00 — Interventi dei sostenitori
• 18:30 — Discorso della candidata
• 19:30 — Brindisi e aperitivo popolare

Parcheggio consigliato: Stadio dei Pini (gratuito, 10 min a piedi).`,
  },
  {
    id: 'e2', past: false,
    day: '05', month: 'APR', color: 'blu',
    cat: 'Dibattito', catColor: 'blu',
    title: 'Tavola rotonda — Il futuro del porto',
    place: 'Camera di Commercio', time: '10:00',
    meta: ['📅 Domenica 5 aprile 2026', '🕐 Ore 10:00', '📍 Sala Convegni Camera di Commercio', '🎟️ Ingresso libero'],
    text: `Una mattinata di confronto sul futuro del porto di Viareggio.

Relatori invitati:
• Autorità Portuale Toscana
• Associazione Cantieristica Nautica
• Rappresentanti delle categorie lavorative

Il porto di Viareggio è il secondo polo della cantieristica nautica italiana. Il nostro programma prevede €12 milioni di investimenti e 200 nuovi posti di lavoro.`,
  },
  {
    id: 'e3', past: false,
    day: '12', month: 'APR', color: 'red',
    cat: 'Gazebo', catColor: 'red',
    title: 'Gazebo — Quartiere Darsena',
    place: 'P.za della Libertà', time: '10:00–13:00',
    meta: ['📅 Domenica 12 aprile 2026', '🕐 Ore 10:00–13:00', '📍 Piazza della Libertà, Darsena'],
    text: `Vieni a trovarci al gazebo del quartiere Darsena!

Saremo presenti per ascoltare le tue proposte e presentare il programma.

Cosa troverai:
• Materiale informativo
• Possibilità di iscriverti come sostenitore
• Gadget della campagna
• Caffè e conversazione`,
  },
  {
    id: 'e4', past: false,
    day: '20', month: 'APR', color: 'blu',
    cat: 'Evento', catColor: 'blu',
    title: 'Presentazione programma completo',
    place: 'Teatro Politeama', time: '20:30',
    meta: ['📅 Lunedì 20 aprile 2026', '🕐 Ore 20:30', '📍 Teatro Politeama, Viareggio', '🎟️ Prenotazione obbligatoria'],
    text: `La serata più importante della campagna.

Presenteremo in dettaglio il programma per i prossimi 5 anni: 12 capitoli, 48 proposte concrete.

1. Mare e ambiente
2. Scuole e giovani
3. Lavoro e porto
4. Mobilità e trasporti
5. Cultura e turismo
6. Sicurezza
7. Welfare e anziani
8. Sport
9. Digitale e innovazione
10. Commercio
11. Bilancio e trasparenza
12. Partecipazione civica

Prenotazione: WhatsApp al 333-1234567.`,
  },
  {
    id: 'e0', past: true,
    day: '18', month: 'MAR', color: 'gray',
    cat: 'Concluso', catColor: 'gray',
    title: 'Incontro Migliarina',
    place: 'Oratorio Don Bosco', time: '18:30',
    meta: ['📅 Martedì 18 marzo 2026', '📍 Oratorio Don Bosco'],
    text: 'Evento concluso.',
  },
]

export const IMPEGNI = [
  {
    area: '🌊 Mare e Ambiente', badge: 'grn', progress: '2/3',
    items: [
      { status: 'done',     text: 'Riqualificazione Lungomare Nord' },
      { status: 'progress', text: 'Piste ciclabili sul lungomare' },
      { status: 'pending',  text: 'Nuovo parco urbano Darsena' },
    ]
  },
  {
    area: '🏫 Scuole', badge: 'blu', progress: '1/3',
    items: [
      { status: 'done',     text: 'Messa in sicurezza Scuola Pascoli' },
      { status: 'progress', text: 'Efficienza energetica istituti superiori' },
      { status: 'pending',  text: 'Nuova mensa scolastica Migliarina' },
    ]
  },
  {
    area: '🚌 Mobilità', badge: 'amb', progress: '0/2',
    items: [
      { status: 'progress', text: 'Potenziamento TPL quartieri periferici' },
      { status: 'pending',  text: 'Parcheggi gratuiti centro storico' },
    ]
  },
  {
    area: '💼 Lavoro & Porto', badge: 'grn', progress: '1/2',
    items: [
      { status: 'done',     text: 'Accordo Autorità Portuale — 80 assunzioni' },
      { status: 'progress', text: 'Piano sviluppo cantieri nautici' },
    ]
  },
]
