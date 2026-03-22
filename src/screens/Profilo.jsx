import { useNavigate } from 'react-router-dom'

export default function Profilo() {
  const nav = useNavigate()

  return (
    <>
      <div className="ph blu">
        <div className="ph-title">Profilo</div>
        <div className="ph-sub">Il tuo account</div>
        <span className="ph-icon">👤</span>
      </div>
      <div className="tri" />
      <div className="sc" style={{ paddingTop: 12 }}>

        {/* Avatar */}
        <div style={{
          display:'flex', alignItems:'center', gap:13,
          background:'var(--white)', borderRadius:'var(--r)',
          boxShadow:'var(--shadow)', margin:'0 14px 12px', padding:15
        }}>
          <div style={{
            width:52, height:52, borderRadius:'50%',
            background:'var(--blu-light)', display:'flex',
            alignItems:'center', justifyContent:'center',
            fontSize:24, border:'2px solid var(--blu)', flexShrink:0
          }}>👤</div>
          <div>
            <div style={{ fontSize:16, fontWeight:700, color:'var(--testo)' }}>Marco Bianchi</div>
            <div style={{ fontSize:12, color:'var(--testo-3)' }}>Sostenitore della campagna</div>
            <div style={{ marginTop:5 }}><span className="badge blu">Utente registrato</span></div>
          </div>
        </div>

        <div className="set-card">
          <button className="set-row" onClick={() => {}}>
            <span className="set-ico">🔔</span>
            <span className="set-lbl">Notifiche push</span>
            <span style={{ background:'var(--verde-light)', color:'var(--verde)', fontSize:10, fontWeight:700, padding:'2px 9px', borderRadius:20 }}>Attive</span>
          </button>
          <button className="set-row" onClick={() => {}}>
            <span className="set-ico">🌍</span>
            <span className="set-lbl">Lingua</span>
            <span className="set-val">Italiano</span>
          </button>
          <button className="set-row" onClick={() => nav('/trasparenza')}>
            <span className="set-ico">📊</span>
            <span className="set-lbl">Pannello Trasparenza</span>
            <span className="set-arr">›</span>
          </button>
          <button className="set-row" onClick={() => nav('/servizi')}>
            <span className="set-ico">🚌</span>
            <span className="set-lbl">Servizi pubblici</span>
            <span className="set-arr">›</span>
          </button>
          <button className="set-row" onClick={() => nav('/admin')}>
            <span className="set-ico">🔐</span>
            <span className="set-lbl" style={{ color:'var(--rosso)', fontWeight:600 }}>Accesso amministratore</span>
            <span style={{ color:'var(--rosso)', fontSize:18 }}>›</span>
          </button>
        </div>

        {/* Footer logo */}
        <div style={{ margin:'4px 14px 0', borderRadius:'var(--r)', overflow:'hidden' }}>
          <div style={{ background:'var(--blu)', padding:'13px 16px', display:'flex', alignItems:'center', gap:11 }}>
            <span style={{ fontSize:20 }}>🌊</span>
            <div>
              <div style={{ fontFamily:"'Bebas Neue', sans-serif", fontSize:17, color:'#fff', letterSpacing:'.06em' }}>VIAREGGIO</div>
              <div style={{ fontFamily:"'Dancing Script', cursive", fontSize:13, color:'#ff9090' }}>mon Amour</div>
            </div>
            <div style={{ marginLeft:'auto', color:'rgba(255,255,255,.4)', fontSize:10 }}>v2.0</div>
          </div>
          <div className="tri" />
        </div>

        <div className="pb-safe" />
      </div>
    </>
  )
}
