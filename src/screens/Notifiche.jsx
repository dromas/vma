import { useState } from 'react'

const INIT = [
  { id: 1, unread: true,  ico: 'red', icon: '🔔', title: 'Reminder: Comizio Piazza Mazzini', sub: 'Domenica 29 marzo ore 17:30 — porta amici!', time: 'Oggi' },
  { id: 2, unread: true,  ico: 'blu', icon: '📰', title: 'Nuova notizia: Piano mare',          sub: 'Pubblicato il progetto di riqualificazione del Lungomare', time: 'Ieri' },
  { id: 3, unread: true,  ico: 'grn', icon: '📊', title: 'Aggiornamento Trasparenza',           sub: 'Nuovo impegno aggiunto al Pannello Trasparenza', time: '2gg fa' },
  { id: 4, unread: false, ico: 'red', icon: '🗓️', title: 'Nuovo evento: Camera di Commercio',  sub: 'Tavola rotonda sul porto — 5 aprile', time: '5gg fa' },
  { id: 5, unread: false, ico: 'blu', icon: '📰', title: 'Notizia: Piano scuole',               sub: "Pubblicato il piano per l'edilizia scolastica", time: '10gg fa' },
]

export default function Notifiche() {
  const [notifiche, setNotifiche] = useState(INIT)

  const unreadCount = notifiche.filter(n => n.unread).length

  const markAllRead = () => setNotifiche(prev => prev.map(n => ({ ...n, unread: false })))

  const unread = notifiche.filter(n =>  n.unread)
  const read   = notifiche.filter(n => !n.unread)

  return (
    <>
      <div className="ph blu">
        <div className="ph-title">Notifiche</div>
        <div className="ph-sub">Aggiornamenti per te</div>
        <span className="ph-icon">🔔</span>
      </div>
      <div className="tri" />
      <div className="sc">
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'11px 14px 6px' }}>
          <span style={{ fontSize:12, fontWeight:700, color:'var(--testo-2)' }}>
            Non lette{' '}
            {unreadCount > 0 && (
              <span style={{ background:'var(--rosso)', color:'#fff', borderRadius:20, padding:'1px 7px', fontSize:10, fontWeight:700 }}>
                {unreadCount}
              </span>
            )}
          </span>
          {unreadCount > 0 && (
            <button
              onClick={markAllRead}
              style={{ fontSize:12, color:'var(--blu)', fontWeight:500, background:'none', border:'none', cursor:'pointer' }}
            >
              Segna tutte lette
            </button>
          )}
        </div>

        {unread.length > 0 && (
          <div style={{ background:'var(--white)', borderRadius:'var(--r)', boxShadow:'var(--shadow)', margin:'0 14px 10px', overflow:'hidden' }}>
            {unread.map(n => <NotifItem key={n.id} n={n} />)}
          </div>
        )}

        {read.length > 0 && (
          <>
            <div className="section-lbl">Precedenti</div>
            <div style={{ background:'var(--white)', borderRadius:'var(--r)', boxShadow:'var(--shadow)', margin:'0 14px 10px', overflow:'hidden' }}>
              {read.map(n => <NotifItem key={n.id} n={n} />)}
            </div>
          </>
        )}

        <div className="pb-safe" />
      </div>
    </>
  )
}

function NotifItem({ n }) {
  return (
    <div className={`notif-item ${n.unread ? 'unread' : ''}`}>
      <div className={`notif-ico ${n.ico}`}>{n.icon}</div>
      <div className="notif-body">
        <div className="notif-title">{n.title}</div>
        <div className="notif-sub">{n.sub}</div>
      </div>
      <div className="notif-right">
        <div className="notif-time">{n.time}</div>
        {n.unread && <div className="unread-dot" />}
      </div>
    </div>
  )
}
