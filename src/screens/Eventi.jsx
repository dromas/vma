import { useState } from 'react'
import DetailOverlay from '../components/DetailOverlay'
import { useData } from '../hooks/useData'

export default function Eventi() {
  const { eventi } = useData()
  const [detail, setDetail] = useState(null)

  const upcoming = eventi.filter(e => !e.past)
  const past     = eventi.filter(e =>  e.past)

  return (
    <>
      <div className="ph red">
        <div className="ph-title">Eventi</div>
        <div className="ph-sub">Calendario della campagna</div>
        <span className="ph-icon">🗓️</span>
      </div>
      <div className="tri" />
      <div className="sc">
        <div className="section-lbl" style={{ paddingTop: 14 }}>Prossimi</div>
        {upcoming.map(e => (
          <button key={e.id} className="ecard" onClick={() => setDetail(e)}>
            <div className={`ebox ${e.color}`}>
              <div className="eday">{e.day}</div>
              <div className="emon">{e.month}</div>
            </div>
            <div className="einfo">
              <div className="etitle">{e.title}</div>
              <div className="emeta">📍 {e.place} • ore {e.time}</div>
              <div><span className={`badge ${e.catColor}`}>{e.cat}</span></div>
            </div>
            <div className="earrow">›</div>
          </button>
        ))}

        <div className="section-lbl">Passati</div>
        {past.map(e => (
          <button key={e.id} className="ecard past" onClick={() => setDetail(e)}>
            <div className={`ebox ${e.color}`}>
              <div className="eday">{e.day}</div>
              <div className="emon">{e.month}</div>
            </div>
            <div className="einfo">
              <div className="etitle">{e.title}</div>
              <div className="emeta">📍 {e.place} • ore {e.time}</div>
              <div><span className="badge gray">{e.cat}</span></div>
            </div>
          </button>
        ))}
        <div className="pb-safe" />
      </div>

      {detail && <DetailOverlay item={detail} onClose={() => setDetail(null)} />}
    </>
  )
}
