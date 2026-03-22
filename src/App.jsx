import { Routes, Route, Navigate } from 'react-router-dom'
import AppShell from './components/AppShell'
import Home         from './screens/Home'
import Notizie      from './screens/Notizie'
import Eventi       from './screens/Eventi'
import Notifiche    from './screens/Notifiche'
import Trasparenza  from './screens/Trasparenza'
import Servizi      from './screens/Servizi'
import Profilo      from './screens/Profilo'
import Admin        from './screens/Admin'
import { ToastProvider } from './hooks/useToast'
import { DataProvider }  from './hooks/useData'

export default function App() {
  return (
    <DataProvider>
      <ToastProvider>
        <div className="app-shell">
          <Routes>
            <Route element={<AppShell />}>
              <Route index              element={<Home />} />
              <Route path="notizie"    element={<Notizie />} />
              <Route path="eventi"     element={<Eventi />} />
              <Route path="notifiche"  element={<Notifiche />} />
              <Route path="trasparenza" element={<Trasparenza />} />
              <Route path="servizi"    element={<Servizi />} />
              <Route path="profilo"    element={<Profilo />} />
            </Route>
            <Route path="admin" element={<Admin />} />
            <Route path="*"     element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </ToastProvider>
    </DataProvider>
  )
}
