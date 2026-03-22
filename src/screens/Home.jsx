import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import HomeBanner from '../components/HomeBanner'
import DetailOverlay from '../components/DetailOverlay'
import { useData } from '../hooks/useData'

// Le stesse voci della bottom bar
const QA = [
  { icon: '📰', label: 'Notizie',     route: '/notizie',     cls: 'c1' },
  { icon: '🗓️', label: 'Eventi',      route: '/eventi',      cls: 'c2' },
  { icon: '📊', label: 'Trasparenza', route: '/trasparenza', cls: 'c3' },
  { icon: '🚌', label: 'Servizi',     route: '/servizi',     cls: 'c4' },
]

export default function Home() {
  const nav = useNavigate()
  const { news, eventi } = useData()
  const [detail, setDetail] = useState(null)

  const upcoming   = eventi.filter(e => !e.past).slice(0, 2)
  const latestNews = news.slice(0, 2)

  return (
    <div className="sc">
      <HomeBanner />
      <div className="tri" />

      {/* Quick actions — stesse voci della bottom bar */}
      <div className="qa-grid">
        {QA.map(q => (
          <button key={q.route} className="qa" onClick={() => nav(q.route)}>
            <div className={`qa-ico ${q.cls}`}>{q.icon}</div>
            <span className="qa-lbl">{q.label}</span>
          </button>
        ))}
      </div>

      {/* Reminder */}
      <div className="infobox warn" style={{ marginTop: 4 }}>
        <span className="infobox-icon">🔔</span>
        <div>
          <div className="infobox-lbl amb">Reminder</div>
          <div className="infobox-text">Comizio in Piazza Mazzini <b>domenica 29 marzo ore 17:30</b></div>
        </div>
      </div>

      {/* Ultime notizie */}
      <div className="stitle">
        Ultime notizie
        <button className="stitle-link" onClick={() => nav('/notizie')}>Tutte →</button>
      </div>
      {latestNews.map(n => (
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

      {/* Prossimi eventi */}
      <div className="stitle">
        Prossimi eventi
        <button className="stitle-link" onClick={() => nav('/eventi')}>Tutti →</button>
      </div>
      {upcoming.map(e => (
        <button key={e.id} className="ecard" onClick={() => setDetail(e)}>
          <div className={`ebox ${e.color}`}>
            <div className="eday">{e.day}</div>
            <div className="emon">{e.month}</div>
          </div>
          <div className="einfo">
            <div className="etitle">{e.title}</div>
            <div className="emeta">📍 {e.place} • ore {e.time}</div>
          </div>
          <div className="earrow">›</div>
        </button>
      ))}

      <div className="pb-safe" />
      {detail && <DetailOverlay item={detail} onClose={() => setDetail(null)} />}
    </div>
  )
}
