import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import DetailOverlay from './DetailOverlay'
import { useState } from 'react'

export default function AppShell() {
  const nav  = useNavigate()
  const loc  = useLocation()
  const path = loc.pathname.replace('/', '') || 'home'

  const tabs = [
    { id: 'home',       icon: '🏠', label: 'Home',      route: '/'           },
    { id: 'notizie',    icon: '📰', label: 'Notizie',   route: '/notizie'    },
    { id: 'notifiche',  icon: '🔔', label: 'Notifiche', route: '/notifiche', dot: true },
    { id: 'servizi',    icon: '🚌', label: 'Servizi',   route: '/servizi'    },
    { id: 'profilo',    icon: '👤', label: 'Profilo',   route: '/profilo'    },
  ]

  return (
    <>
      <div className="screen">
        <Outlet />
      </div>

      <nav className="bnav">
        {tabs.map(t => (
          <button
            key={t.id}
            className={`ni ${path === t.id ? 'active' : ''}`}
            onClick={() => nav(t.route)}
          >
            <div className="ni-wrap">
              <span className="ni-icon">{t.icon}</span>
              {t.dot && <span className="notif-dot" />}
            </div>
            <span className="ni-label">{t.label}</span>
          </button>
        ))}
      </nav>
    </>
  )
}
