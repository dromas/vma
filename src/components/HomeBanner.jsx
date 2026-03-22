export default function HomeBanner() {
  /*
    Misurato pixel per pixel da Screenshot_2026-03-22_at_15_39_39.png (684x298):

    GEOMETRIA:
    - Triangolo BLU:   (0,0) → (430,0) → (0,52)   [angolo top-left]
    - Triangolo ROSSO: (0,298) → (684,222) → (684,298) [angolo bottom-right]
    - Sfondo: bianco

    TESTI:
    - marialina.it: top-left nel blu, bianco
    - VIAREGGIO: top=78, bottom=145, left=54, right=636 (h=67, w=582)
    - mon Amour:  top=149, bottom=212, x_start≈130 (sotto VIAREGGIO, leggermente a destra)

    COLORI campionati:
    - Blu:   rgb(3, 81, 215)
    - Rosso: rgb(226, 5, 10)
  */
  return (
    <div className="home-banner">
      <svg
        className="hb-svg"
        viewBox="0 0 684 298"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Sfondo bianco */}
        <rect width="684" height="298" fill="#ffffff" />

        {/* Triangolo BLU — angolo top-left */}
        <polygon points="0,0 430,0 0,52" fill="#0351D7" />

        {/* Triangolo ROSSO — angolo bottom-right */}
        <polygon points="0,298 684,222 684,298" fill="#E2050A" />

        {/* marialina.it — bianco, dentro il triangolo blu */}
        <text
          x="14" y="24"
          fontFamily="'DM Sans', Arial, sans-serif"
          fontSize="13"
          fontWeight="700"
          fill="#ffffff"
          letterSpacing="0.3"
        >marialina.it</text>

        {/* VIAREGGIO
            Misurato: top=78 bottom=145 left=54 right=636
            baseline SVG = bottom = 145
            fontSize calibrato: altezza glifo 67px → fontSize≈90 */}
        <text
          x="54"
          y="145"
          fontFamily="'DM Sans', Arial Black, sans-serif"
          fontSize="90"
          fontWeight="700"
          fill="#0a0a0a"
          letterSpacing="-1"
        >VIAREGGIO</text>

        {/* mon Amour
            Misurato: top=149 bottom=212 x_start≈130
            baseline = 212, fontSize calibrato per altezza 63px → fontSize≈120 */}
        <text
          x="130"
          y="212"
          fontFamily="'Dancing Script', cursive"
          fontSize="120"
          fontWeight="700"
          fill="#E2050A"
        >mon Amour</text>
      </svg>
    </div>
  )
}
