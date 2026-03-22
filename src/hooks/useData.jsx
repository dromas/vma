import { createContext, useContext, useState } from 'react'
import { NEWS_INIT, EVENTI_INIT } from '../data/content'

const Ctx = createContext(null)

export function DataProvider({ children }) {
  const [news,   setNews]   = useState(NEWS_INIT)
  const [eventi, setEventi] = useState(EVENTI_INIT)

  const addNews = (item) => setNews(prev => [item, ...prev])
  const delNews = (id)   => setNews(prev => prev.filter(n => n.id !== id))

  const addEvento = (item) => setEventi(prev => [item, ...prev])
  const delEvento = (id)   => setEventi(prev => prev.filter(e => e.id !== id))

  return (
    <Ctx.Provider value={{ news, eventi, addNews, delNews, addEvento, delEvento }}>
      {children}
    </Ctx.Provider>
  )
}

export function useData() {
  return useContext(Ctx)
}
