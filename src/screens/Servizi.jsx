const SERVIZI = [
  {
    heading: 'Trasporto pubblico',
    sections: [
      {
        ico: '🚌', lbl: 'Autobus Urbani — CTT Nord',
        rows: [
          { name: 'Linea 1 – Stazione ↔ Lungomare',  val: '6:00–22:00',  cls: 'blu' },
          { name: 'Linea 2 – Centro ↔ Migliarina',   val: '6:30–21:30',  cls: 'blu' },
          { name: 'Linea 3 – Darsena ↔ Torre del Lago', val: '7:00–20:00', cls: 'blu' },
          { name: 'Biglietto corsa singola',          val: '€ 1,70',      cls: 'grn' },
          { name: 'Abbonamento mensile',              val: '€ 35,00',     cls: 'grn' },
          { name: 'Carnet 10 corse',                  val: '€ 13,00',     cls: 'grn' },
        ]
      },
      {
        ico: '♿', lbl: 'Accessibilità TPL',
        rows: [
          { name: 'Bus pianale ribassabile',          val: 'Tutte le linee', cls: 'grn' },
          { name: 'Trasporto disabili (prenotazione)', val: '0584 581400', cls: 'blu' },
          { name: 'Servizio a chiamata anziani',       val: '800-703251',  cls: 'blu' },
        ]
      },
      {
        ico: '🚆', lbl: 'Stazione Ferroviaria Viareggio',
        rows: [
          { name: 'Prima corsa (Pisa → Viareggio)',   val: '5:14',        cls: 'blu' },
          { name: 'Ultima corsa (Viareggio → Pisa)',  val: '23:22',       cls: 'blu' },
          { name: 'Frequenza',                        val: 'ogni 30 min', cls: ''    },
          { name: 'Biglietto Viareggio–Pisa',         val: '€ 4,10',      cls: 'grn' },
          { name: 'Biglietto Viareggio–Firenze',      val: '€ 8,70',      cls: 'grn' },
        ]
      },
    ]
  },
  {
    heading: 'Parcheggi',
    sections: [
      {
        ico: '🅿️', lbl: 'Zona blu — centro città',
        rows: [
          { name: '1ª ora',                val: '€ 1,00',   cls: 'grn' },
          { name: 'Ora successiva',        val: '€ 1,50',   cls: 'grn' },
          { name: 'Domenica e festivi',    val: 'Gratuita', cls: 'grn' },
          { name: 'Orari pagamento',       val: '8:00–20:00', cls: '' },
        ]
      },
      {
        ico: '🟢', lbl: 'Parcheggi gratuiti',
        rows: [
          { name: 'Stadio dei Pini (Via Magenta)', val: 'Gratuito',   cls: 'grn' },
          { name: 'Via Fratti (zona Darsena)',      val: 'Gratuito',   cls: 'grn' },
          { name: 'Capienza totale',                val: '~600 posti', cls: '' },
        ]
      },
      {
        ico: '🌊', lbl: 'Lungomare (stagionale)',
        rows: [
          { name: 'Tariffa oraria (estate)',    val: '€ 2,00/h',  cls: '' },
          { name: 'Massimo giornaliero',        val: '€ 12,00',   cls: '' },
          { name: 'Abbonamento mensile estivo', val: '€ 60,00',   cls: 'grn' },
          { name: 'Periodo attivo',             val: '1 giu–30 set', cls: '' },
        ]
      },
    ]
  },
  {
    heading: 'Taxi & Mobilità alternativa',
    sections: [
      {
        ico: '🚕', lbl: 'Radio Taxi Viareggio',
        rows: [
          { name: 'Numero prenotazione',      val: '0584 44444', cls: 'blu' },
          { name: 'Scatto alla partenza',     val: '€ 3,50',     cls: '' },
          { name: 'Tariffa al km',            val: '€ 1,40',     cls: '' },
          { name: 'Notturno (22:00–6:00)',    val: '+ 30%',      cls: '' },
        ]
      },
      {
        ico: '🚲', lbl: 'Bike sharing — ViaBici',
        rows: [
          { name: 'Stazioni in città',    val: '12 punti',    cls: '' },
          { name: 'Prime 30 minuti',      val: 'Gratuiti',    cls: 'grn' },
          { name: 'Oltre 30 min',         val: '€ 0,50/15 min', cls: '' },
          { name: 'E-bike disponibili',   val: 'Sì',          cls: 'grn' },
        ]
      },
    ]
  },
]

export default function Servizi() {
  return (
    <>
      <div className="ph amb">
        <div className="ph-title">Servizi Pubblici</div>
        <div className="ph-sub">Orari, tariffe e informazioni utili</div>
        <span className="ph-icon">🚌</span>
      </div>
      <div className="tri" />
      <div className="sc" style={{ paddingTop: 12 }}>
        {SERVIZI.map((gruppo, gi) => (
          <div key={gi}>
            <div className="stitle" style={{ paddingTop: gi === 0 ? 0 : undefined }}>{gruppo.heading}</div>
            {gruppo.sections.map((s, si) => (
              <div key={si} className="srv-section">
                <div className="srv-head">
                  <span className="ico">{s.ico}</span>
                  <span className="lbl">{s.lbl}</span>
                </div>
                {s.rows.map((r, ri) => (
                  <div key={ri} className="srv-row">
                    <span className="srv-name">{r.name}</span>
                    <span className={`srv-val ${r.cls}`}>{r.val}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
        <div className="pb-safe" />
      </div>
    </>
  )
}
