export default function HomeBanner() {
  return (
    <div className="home-banner">

      {/* SVG per i triangoli diagonali — precisi come nell'immagine */}
      <svg
        className="hb-svg"
        viewBox="0 0 400 220"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Sfondo bianco */}
        <rect width="400" height="220" fill="#ffffff" />
        {/* Triangolo blu — angolo top-left, taglia in diagonale */}
        <polygon points="0,0 400,0 400,90 0,200" fill="#1A3F8F" />
        {/* Triangolo rosso — angolo bottom-right */}
        <polygon points="0,220 400,130 400,220" fill="#C8282A" />
      </svg>

      {/* Contenuto sovrapposto */}
      <div className="hb-content">
        {/* marialina.it — bianco in alto a sinistra sopra il blu */}
        <div className="hb-site">marialina.it</div>

        {/* Testo centrale: VIAREGGIO + mon Amour */}
        <div className="hb-logo-text">
          <div className="hb-viareggio">VIAREGGIO</div>
          <div className="hb-monamour">mon Amour</div>
        </div>

        {/* Pill info in basso */}
        <div className="hb-pills">
          <span className="hb-pill">📅 Voto: 15 Giu 2026</span>
          <span className="hb-pill red">🔴 Campagna attiva</span>
        </div>
      </div>

    </div>
  )
}
