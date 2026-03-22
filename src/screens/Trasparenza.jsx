import { useState } from 'react'
import DetailOverlay from '../components/DetailOverlay'
import { IMPEGNI } from '../data/content'

const DELIBERE = [
  { id: 'd1', tag: 'Delibera', tagColor: 'grn', title: 'Delibera CC n.12/2026 — Piano Triennale Opere Pubbliche', date: '15 mar 2026', stato: 'Approvata' },
  { id: 'd2', tag: 'Ordinanza', tagColor: 'grn', title: 'Ordinanza n.45/2026 — Divieto circolazione lungomare', date: '10 mar 2026', stato: 'Vigente' },
]

export default function Trasparenza() {
  const [detail, setDetail] = useState(null)

  const totDone     = IMPEGNI.flatMap(g => g.items).filter(i => i.status === 'done').length
  const totProgress = IMPEGNI.flatMap(g => g.items).filter(i => i.status === 'progress').length
  const totPending  = IMPEGNI.flatMap(g => g.items).filter(i => i.status === 'pending').length

  return (
    <>
      <div className="ph grn">
        <div className="ph-title">Pannello Trasparenza</div>
        <div className="ph-sub">Impegni e stato di avanzamento</div>
        <span className="ph-icon">📊</span>
      </div>
      <div className="tri" />
      <div className="sc" style={{ paddingTop: 12 }}>

        <div className="infobox ok">
          <span className="infobox-icon">✅</span>
          <div>
            <div className="infobox-lbl grn">Trasparenza</div>
            <div className="infobox-text">Stato reale degli impegni presi durante la campagna e, dopo l'elezione, delle delibere approvate.</div>
          </div>
        </div>

        <div className="stats-grid">
          <div className="stat-box"><div className="stat-num grn">{totDone}</div><div className="stat-lbl">Completati</div></div>
          <div className="stat-box"><div className="stat-num blu">{totProgress}</div><div className="stat-lbl">In corso</div></div>
          <div className="stat-box"><div className="stat-num amb">{totPending}</div><div className="stat-lbl">Pianificati</div></div>
        </div>

        {IMPEGNI.map((gruppo, gi) => (
          <div key={gi} className="tcard">
            <div className="tcard-head">
              <span className="tcard-title">{gruppo.area}</span>
              <span className={`badge ${gruppo.badge}`}>{gruppo.progress}</span>
            </div>
            <div className="tcard-body">
              {gruppo.items.map((item, ii) => (
                <div key={ii} className="p-row">
                  <span className={`p-dot ${item.status}`} />
                  <span className="p-text">{item.text}</span>
                  <span className={`p-badge ${item.status}`}>
                    {item.status === 'done' ? '✓ Fatto' : item.status === 'progress' ? 'In corso' : 'Pianificato'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="stitle" style={{ paddingTop: 8 }}>Delibere recenti</div>
        {DELIBERE.map(d => (
          <button
            key={d.id}
            className="card"
            onClick={() => setDetail({ ...d, text: 'Documento disponibile sul portale istituzionale del Comune di Viareggio.' })}
          >
            <div className="card-body">
              <div className={`card-tag ${d.tagColor}`}>{d.tag}</div>
              <div className="card-title">{d.title}</div>
              <div className="card-meta">📅 {d.date} · <span className={`badge ${d.tagColor}`}>{d.stato}</span></div>
            </div>
          </button>
        ))}

        <div className="pb-safe" />
      </div>

      {detail && <DetailOverlay item={detail} onClose={() => setDetail(null)} />}
    </>
  )
}
