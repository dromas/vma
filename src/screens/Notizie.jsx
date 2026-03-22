import { useState } from 'react'
import DetailOverlay from '../components/DetailOverlay'
import { useData } from '../hooks/useData'

const FILTERS = ['Tutte', 'Programma', 'Campagna', 'Avviso', 'Comune']

export default function Notizie() {
  const { news } = useData()
  const [filter, setFilter] = useState('Tutte')
  const [detail, setDetail] = useState(null)

  const filtered = filter === 'Tutte' ? news : news.filter(n => n.tag === filter)

  return (
    <>
      <div className="ph blu">
        <div className="ph-title">Notizie</div>
        <div className="ph-sub">Aggiornamenti dalla campagna</div>
        <span className="ph-icon">📰</span>
      </div>
      <div className="tri" />
      <div className="sc">
        <div className="hrow" style={{ paddingTop: 12 }}>
          {FILTERS.map(f => (
            <button
              key={f}
              className={`badge ${filter === f ? 'blu' : 'gray'}`}
              style={{ cursor: 'pointer', padding: '6px 13px', fontSize: 11, border: 'none' }}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div style={{ paddingTop: 4 }}>
          {filtered.map(n => (
            <button key={n.id} className="card" onClick={() => setDetail(n)}>
              <div className="card-body">
                <div className={`card-tag ${n.tagColor}`}>{n.tag}</div>
                <div className="card-title">{n.title}</div>
                <div className="card-desc">{n.desc}</div>
                <div className="card-meta">
                  📅 {n.date} · <span className={`badge ${n.tagColor}`}>{n.tag}</span>
                </div>
              </div>
            </button>
          ))}
        </div>
        <div className="pb-safe" />
      </div>

      {detail && <DetailOverlay item={detail} onClose={() => setDetail(null)} />}
    </>
  )
}
