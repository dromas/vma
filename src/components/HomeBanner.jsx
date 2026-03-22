export default function HomeBanner() {
  return (
    /*
      Proporzioni originale immagine: ~1274×530 → ratio 2.4:1
      Usiamo un SVG unico che contiene TUTTO: sfondi, testo, pills.
      In questo modo font-size, posizioni e proporzioni sono
      identiche all'originale su qualsiasi schermo.
    */
    <div className="home-banner">
      <svg
        className="hb-svg"
        viewBox="0 0 1274 530"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* ── SFONDI ── */}
        <rect width="1274" height="530" fill="#ffffff" />
        {/* Triangolo blu top-left */}
        <polygon points="0,0 1274,0 1274,180 0,420" fill="#1A3F8F" />
        {/* Triangolo rosso bottom-right */}
        <polygon points="0,530 1274,310 1274,530" fill="#C8282A" />

        {/* ── marialina.it ── */}
        <text
          x="42" y="72"
          fontFamily="'DM Sans', Arial, sans-serif"
          fontSize="38"
          fontWeight="700"
          fill="#ffffff"
        >marialina.it</text>

        {/* ── VIAREGGIO ── font black condensed simulato con scaleX */}
        <g transform="translate(60, 190)">
          <text
            fontFamily="'DM Sans', Arial Black, sans-serif"
            fontSize="260"
            fontWeight="700"
            fill="#0d0d0d"
            letterSpacing="-6"
            transform="scale(0.82, 1)"
          >VIAREGGIO</text>
        </g>

        {/* ── mon Amour ── */}
        <text
          x="62" y="490"
          fontFamily="'Dancing Script', cursive"
          fontSize="210"
          fontWeight="700"
          fill="#C8282A"
        >mon Amour</text>
      </svg>
    </div>
  )
}
