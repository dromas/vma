import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import HomeBanner from '../components/HomeBanner'
import DetailOverlay from '../components/DetailOverlay'
import { useData } from '../hooks/useData'

export default function Home() {
  const nav = useNavigate()
  const { news, eventi } = useData()
  const [detail, setDetail] = useState(null)

  const upcoming = eventi.filter(e => !e.past).slice(0, 2)
  const latestNews = news.slice(0, 2)

  return (
    <div className="sc">
      <HomeBanner />
      <div className="tri" />

      {/* Quick actions */}
      <div className="qa-grid">
        <button className="qa" onClick={() => nav('/notizie')}>
          <div className="qa-ico c1">📰</div>
          <span className="qa-lbl">Notizie</span>
        </button>
        <button className="qa" onClick={() => nav('/eventi')}>
          <div className="qa-ico c2">🗓️</div>
          <span className="qa-lbl">Eventi</span>
        </button>
        <button className="qa" onClick={() => nav('/trasparenza')}>
          <div className="qa-ico c3">📊</div>
          <span className="qa-lbl">Trasparenza</span>
        </button>
        <button className="qa" onClick={() => nav('/servizi')}>
          <div className="qa-ico c4">🚌</div>
          <span className="qa-lbl">Servizi</span>
        </button>
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
