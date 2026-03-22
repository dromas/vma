import { useState } from 'react'

function Logo1() {
  return (
    <div className="vma-logo">
      <div className="vma1-block">
        <div className="vma1-bar blu" />
        <div className="vma1-letters">
          <span className="vma1-v">V</span>
          <span className="vma1-m">M</span>
          <span className="vma1-a">A</span>
        </div>
        <div className="vma1-bar red" />
      </div>
      <div className="vma1-text">
        <span className="vma-vr">VIAREGGIO</span>
        <span className="vma-ma">mon Amour</span>
      </div>
    </div>
  )
}

function Logo2() {
  return (
    <div className="vma-logo">
      <div className="vma2-bands">
        <div className="vma2-band b1">V</div>
        <div className="vma2-band b2">M</div>
        <div className="vma2-band b3">A</div>
      </div>
      <div className="vma1-text">
        <span className="vma-vr">VIAREGGIO</span>
        <span className="vma-ma">mon Amour</span>
      </div>
    </div>
  )
}

function Logo3() {
  return (
    <div className="vma-logo">
      <div className="vma3-circle">
        <span className="vma3-letters">VMA</span>
      </div>
      <div className="vma1-text">
        <span className="vma-vr">VIAREGGIO</span>
        <span className="vma-ma">mon Amour</span>
      </div>
    </div>
  )
}

const LOGOS = [Logo1, Logo2, Logo3]

export default function HomeBanner() {
  const [active, setActive] = useState(0)
  const LogoComp = LOGOS[active]

  return (
    <div className="home-banner">
      <div className="hb-tri-tl" />
      <div className="hb-tri-br" />

      <div className="hb-content">
        <div className="hb-site">marialina.it</div>
        <LogoComp />
        <div className="hb-pills">
          <span className="hb-pill">📅 Voto: 15 Giu 2026</span>
          <span className="hb-pill red">🔴 Campagna attiva</span>
        </div>
      </div>

      {/* Selettore logo — rimuovere in produzione */}
      <div className="logo-switcher">
        <span className="ls-label">Logo:</span>
        {[0,1,2].map(i => (
          <button
            key={i}
            className={`ls-btn ${active === i ? 'active' : ''}`}
            onClick={() => setActive(i)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  )
}
