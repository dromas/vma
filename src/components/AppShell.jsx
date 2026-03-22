import { useState } from 'react'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'

const TABS = [
  { id: 'home',        icon: '🏠', label: 'Home',        route: '/'            },
  { id: 'notizie',     icon: '📰', label: 'Notizie',     route: '/notizie'     },
  { id: 'eventi',      icon: '🗓️', label: 'Eventi',      route: '/eventi'      },
  { id: 'trasparenza', icon: '📊', label: 'Trasparenza',  route: '/trasparenza' },
  { id: 'servizi',     icon: '🚌', label: 'Servizi',      route: '/servizi'     },
]

const MENU_ITEMS = [
  { icon: '🔔', label: 'Notifiche', route: '/notifiche', dot: true },
  { icon: '👤', label: 'Profilo',   route: '/profilo'             },
  { icon: '🔐', label: 'Admin',     route: '/admin'               },
]

export default function AppShell() {
  const nav  = useNavigate()
  const loc  = useLocation()
  const path = loc.pathname.replace('/', '') || 'home'
  const [menuOpen, setMenuOpen] = useState(false)

  const go = (route) => { setMenuOpen(false); nav(route) }

  return (
    <>
      <div className="screen">
        <Outlet />
      </div>

      {/* Burger menu overlay */}
      {menuOpen && (
        <div className="burger-overlay" onClick={() => setMenuOpen(false)}>
          <div className="burger-panel" onClick={e => e.stopPropagation()}>
            <div className="burger-header">
              <span className="burger-title">Menu</span>
              <button className="burger-close" onClick={() => setMenuOpen(false)}>✕</button>
            </div>
            {MENU_ITEMS.map(item => (
              <button key={item.route} className="burger-item" onClick={() => go(item.route)}>
                <span className="burger-item-icon">{item.icon}</span>
                <span className="burger-item-label">{item.label}</span>
                {item.dot && <span className="burger-dot" />}
                <span className="burger-item-arr">›</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Burger button — top-right fisso sopra tutto */}
      <button
        className={`burger-btn ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(v => !v)}
        aria-label="Menu"
      >
        <span /><span /><span />
      </button>

      {/* Bottom nav */}
      <nav className="bnav">
        {TABS.map(t => (
          <button
            key={t.id}
            className={`ni ${path === t.id ? 'active' : ''}`}
            onClick={() => nav(t.route)}
          >
            <span className="ni-icon">{t.icon}</span>
            <span className="ni-label">{t.label}</span>
          </button>
        ))}
      </nav>
    </>
  )
}
