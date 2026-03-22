import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useData } from '../hooks/useData'
import { useToast } from '../hooks/useToast'

const CREDS = { email: 'admin@viareggio.it', pwd: 'admin123' }

// ─── MONTH LABELS ───────────────────────────────────────
const MONTHS = ['GEN','FEB','MAR','APR','MAG','GIU','LUG','AGO','SET','OTT','NOV','DIC']

function padDay(d) { return String(d).padStart(2,'0') }

// ─── LOGIN ───────────────────────────────────────────────
function Login({ onSuccess }) {
  const [email, setEmail] = useState('')
  const [pwd,   setPwd]   = useState('')
  const [error, setError] = useState(false)

  const submit = () => {
    if (email === CREDS.email && pwd === CREDS.pwd) {
      onSuccess()
    } else {
      setError(true)
      setTimeout(() => setError(false), 2500)
    }
  }

  return (
    <div className="login-overlay">
      <div style={{ fontSize:26, marginBottom:6 }}>🔐</div>
      <div className="login-logo">VIAREGGIO</div>
      <div className="login-sub">mon Amour</div>
      <div style={{ fontSize:12, color:'rgba(255,255,255,.5)', marginBottom:22, textAlign:'center' }}>
        Area riservata amministratori
      </div>
      {error && <div className="login-error">Credenziali non valide. Riprova.</div>}
      <label className="login-lbl">Email</label>
      <input
        className="login-input" type="email"
        placeholder="admin@viareggio.it"
        value={email} onChange={e => setEmail(e.target.value)}
        autoComplete="off"
      />
      <label className="login-lbl">Password</label>
      <input
        className="login-input" type="password"
        placeholder="••••••••"
        value={pwd} onChange={e => setPwd(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && submit()}
      />
      <button className="login-btn" onClick={submit}>Accedi al pannello →</button>
      <div className="login-hint">Demo: admin@viareggio.it / admin123</div>
    </div>
  )
}

// ─── TAB EVENTI ─────────────────────────────────────────
function TabEventi() {
  const { eventi, addEvento, delEvento } = useData()
  const toast = useToast()
  const [form, setForm] = useState({ title:'', short:'', long:'', date:'', time:'', place:'', cat:'Comizio' })

  const set = (k, v) => setForm(prev => ({ ...prev, [k]: v }))

  const submit = () => {
    if (!form.title || !form.place || !form.date) { toast('⚠️ Compila i campi obbligatori'); return }
    const d = new Date(form.date)
    addEvento({
      id: 'ev-' + Date.now(),
      past: false,
      day:   padDay(d.getDate()),
      month: MONTHS[d.getMonth()],
      color: 'red',
      cat:      form.cat,
      catColor: 'red',
      title:  form.title,
      place:  form.place,
      time:   form.time,
      meta:   [`📅 ${d.toLocaleDateString('it-IT',{weekday:'long',day:'numeric',month:'long',year:'numeric'})}`, form.time && `🕐 Ore ${form.time}`, `📍 ${form.place}`].filter(Boolean),
      text:   form.long || form.short || '—',
    })
    setForm({ title:'', short:'', long:'', date:'', time:'', place:'', cat:'Comizio' })
    toast('✅ Evento pubblicato!')
  }

  return (
    <div className="admin-sc">
      <div className="form-card">
        <div className="form-title">➕ Nuovo evento</div>
        <label className="flabel">Titolo *</label>
        <input className="finput" placeholder="Es: Comizio in Piazza Mazzini" value={form.title} onChange={e => set('title', e.target.value)} />
        <label className="flabel">Descrizione breve</label>
        <input className="finput" placeholder="Teaser breve" value={form.short} onChange={e => set('short', e.target.value)} />
        <label className="flabel">Descrizione lunga</label>
        <textarea className="ftextarea" placeholder="Testo completo dell'evento..." value={form.long} onChange={e => set('long', e.target.value)} />
        <div className="frow">
          <div>
            <label className="flabel">Data *</label>
            <input className="finput" type="date" value={form.date} onChange={e => set('date', e.target.value)} />
          </div>
          <div>
            <label className="flabel">Ora</label>
            <input className="finput" type="time" value={form.time} onChange={e => set('time', e.target.value)} />
          </div>
        </div>
        <label className="flabel">Luogo *</label>
        <input className="finput" placeholder="Es: Piazza Mazzini, Viareggio" value={form.place} onChange={e => set('place', e.target.value)} />
        <label className="flabel">Categoria</label>
        <select className="fselect" value={form.cat} onChange={e => set('cat', e.target.value)}>
          {['Comizio','Gazebo','Dibattito','Incontro cittadini','Evento culturale'].map(c => <option key={c}>{c}</option>)}
        </select>
        <button className="btn-primary red" onClick={submit}>✓ Pubblica evento</button>
      </div>

      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'4px 14px 8px' }}>
        <span style={{ fontSize:13, fontWeight:700, color:'var(--testo)' }}>Pubblicati</span>
        <span className="badge red">{eventi.length}</span>
      </div>
      {eventi.map(e => (
        <div key={e.id} className="admin-item">
          <span className="admin-item-ico">🗓️</span>
          <div className="admin-item-body">
            <div className="admin-item-title">{e.title}</div>
            <div className="admin-item-meta">📅 {e.day} {e.month} • {e.time} • {e.place}</div>
          </div>
          <button className="btn-danger" onClick={() => { delEvento(e.id); toast('Eliminato') }}>✕</button>
        </div>
      ))}
      <div className="pb-safe" />
    </div>
  )
}

// ─── TAB NOTIZIE ────────────────────────────────────────
function TabNotizie() {
  const { news, addNews, delNews } = useData()
  const toast = useToast()
  const [form, setForm] = useState({ title:'', short:'', long:'', cat:'Programma', push: true })

  const set = (k, v) => setForm(prev => ({ ...prev, [k]: v }))

  const submit = () => {
    if (!form.title) { toast('⚠️ Inserisci un titolo'); return }
    const catMap = { Programma:'blu', Campagna:'red', Avviso:'amb', Comune:'blu' }
    addNews({
      id:       'ns-' + Date.now(),
      tag:      form.cat,
      tagColor: catMap[form.cat] || 'blu',
      title:    form.title,
      desc:     form.short,
      date:     new Date().toLocaleDateString('it-IT', { day:'2-digit', month:'short', year:'numeric' }),
      text:     form.long || form.short || '—',
    })
    setForm({ title:'', short:'', long:'', cat:'Programma', push: true })
    toast(form.push ? '✅ Notizia pubblicata e notifica inviata!' : '✅ Notizia pubblicata')
  }

  return (
    <div className="admin-sc">
      <div className="form-card">
        <div className="form-title">➕ Nuova notizia</div>
        <label className="flabel">Titolo *</label>
        <input className="finput" placeholder="Es: Il nostro piano per le scuole" value={form.title} onChange={e => set('title', e.target.value)} />
        <label className="flabel">Descrizione breve (teaser)</label>
        <input className="finput" placeholder="Max 120 caratteri" value={form.short} onChange={e => set('short', e.target.value)} />
        <label className="flabel">Contenuto completo</label>
        <textarea className="ftextarea" placeholder="Testo completo della notizia..." style={{ height:90 }} value={form.long} onChange={e => set('long', e.target.value)} />
        <label className="flabel">Categoria</label>
        <select className="fselect" value={form.cat} onChange={e => set('cat', e.target.value)}>
          {['Programma','Campagna','Comune','Avviso'].map(c => <option key={c}>{c}</option>)}
        </select>
        <label className="flabel">Notifica push</label>
        <select className="fselect" value={form.push ? 'si' : 'no'} onChange={e => set('push', e.target.value === 'si')}>
          <option value="si">Sì — invia notifica</option>
          <option value="no">No — pubblica solo</option>
        </select>
        <button className="btn-primary" onClick={submit}>✓ Pubblica notizia</button>
      </div>

      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'4px 14px 8px' }}>
        <span style={{ fontSize:13, fontWeight:700, color:'var(--testo)' }}>Pubblicate</span>
        <span className="badge blu">{news.length}</span>
      </div>
      {news.map(n => (
        <div key={n.id} className="admin-item">
          <span className="admin-item-ico">📰</span>
          <div className="admin-item-body">
            <div className="admin-item-title">{n.title}</div>
            <div className="admin-item-meta">📅 {n.date} · {n.tag}</div>
          </div>
          <button className="btn-danger" onClick={() => { delNews(n.id); toast('Eliminato') }}>✕</button>
        </div>
      ))}
      <div className="pb-safe" />
    </div>
  )
}

// ─── TAB PUSH ───────────────────────────────────────────
function TabPush() {
  const toast = useToast()
  const [title, setTitle] = useState('')
  const [body,  setBody]  = useState('')
  const [dest,  setDest]  = useState('Tutti gli utenti (423)')

  const send = () => {
    if (!title || !body) { toast('⚠️ Compila titolo e messaggio'); return }
    setTitle(''); setBody('')
    toast('🔔 Notifica inviata a tutti gli utenti!')
  }

  const recent = [
    { ico: '🔔', title: 'Reminder: Comizio Piazza Mazzini', meta: 'Oggi • 423 utenti • ✓ Consegnata' },
    { ico: '📰', title: 'Nuova notizia: Piano mare',         meta: 'Ieri • 423 utenti • ✓ Consegnata' },
  ]

  return (
    <div className="admin-sc">
      <div className="form-card">
        <div className="form-title">📣 Invia notifica push</div>
        <label className="flabel">Titolo *</label>
        <input className="finput" placeholder="Es: Mancano 3 giorni al voto!" value={title} onChange={e => setTitle(e.target.value)} />
        <label className="flabel">Messaggio *</label>
        <textarea className="ftextarea" placeholder="Testo della notifica..." style={{ height:68 }} value={body} onChange={e => setBody(e.target.value)} />
        <label className="flabel">Destinatari</label>
        <select className="fselect" value={dest} onChange={e => setDest(e.target.value)}>
          {['Tutti gli utenti (423)','Quartiere Centro (128)','Quartiere Migliarina (87)','Quartiere Darsena (65)','Nuovi iscritti (34)'].map(d => <option key={d}>{d}</option>)}
        </select>
        <div className="infobox warn" style={{ margin:'0 0 12px' }}>
          <span className="infobox-icon">⚠️</span>
          <div className="infobox-text">Le notifiche vengono inviate immediatamente e non possono essere annullate.</div>
        </div>
        <button className="btn-primary red" onClick={send}>🔔 Invia notifica ora</button>
      </div>

      <div className="section-lbl">Inviate di recente</div>
      {recent.map((r, i) => (
        <div key={i} className="admin-item">
          <span className="admin-item-ico">{r.ico}</span>
          <div className="admin-item-body">
            <div className="admin-item-title">{r.title}</div>
            <div className="admin-item-meta">{r.meta}</div>
          </div>
        </div>
      ))}
      <div className="pb-safe" />
    </div>
  )
}

// ─── ADMIN ROOT ──────────────────────────────────────────
const TABS = [
  { id: 'events', label: '🗓️ Eventi' },
  { id: 'news',   label: '📰 Notizie' },
  { id: 'push',   label: '🔔 Push' },
]

export default function Admin() {
  const nav = useNavigate()
  const [loggedIn, setLoggedIn] = useState(false)
  const [tab, setTab] = useState('events')

  if (!loggedIn) {
    return (
      <div className="app-shell" style={{ position:'relative' }}>
        <Login onSuccess={() => setLoggedIn(true)} />
        <button
          onClick={() => nav('/')}
          style={{ position:'absolute', bottom:40, left:'50%', transform:'translateX(-50%)', fontSize:13, color:'rgba(255,255,255,.45)', background:'none', border:'none', cursor:'pointer' }}
        >
          ← Torna all'app
        </button>
      </div>
    )
  }

  return (
    <div className="app-shell">
      {/* Header */}
      <div style={{
        background:'linear-gradient(135deg, #0a1a50 0%, var(--blu) 100%)',
        padding:'calc(16px + var(--safe-top)) 18px 18px',
        color:'#fff', flexShrink:0
      }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start' }}>
          <div>
            <div style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:22, letterSpacing:'.06em' }}>Pannello Admin</div>
            <div style={{ fontSize:12, opacity:.72, marginTop:2 }}>Gestione contenuti app</div>
          </div>
          <button
            onClick={() => { setLoggedIn(false); nav('/') }}
            style={{ background:'rgba(255,255,255,.15)', border:'none', color:'#fff', borderRadius:9, padding:'6px 11px', fontSize:12, fontWeight:600, cursor:'pointer' }}
          >
            Esci ›
          </button>
        </div>
        <div style={{ display:'inline-flex', alignItems:'center', gap:5, background:'rgba(255,255,255,.15)', borderRadius:20, padding:'3px 10px', fontSize:11, fontWeight:600, marginTop:8 }}>
          🔐 Amministratore
        </div>
      </div>
      <div className="tri" />

      {/* Tabs */}
      <div className="admin-tabs">
        {TABS.map(t => (
          <button
            key={t.id}
            className={`admin-tab ${tab === t.id ? 'active' : ''}`}
            onClick={() => setTab(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      {tab === 'events' && <TabEventi />}
      {tab === 'news'   && <TabNotizie />}
      {tab === 'push'   && <TabPush />}
    </div>
  )
}
