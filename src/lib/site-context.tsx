import { useEffect, useRef, useState, type ReactNode } from 'react'
import { SiteContext } from './site-store'

export function SiteProvider({ children }: { children: ReactNode }) {
  const [saved, setSaved] = useState<string[]>(() => {
    try { const value = JSON.parse(localStorage.getItem('kibira-shortlist') || '[]'); return Array.isArray(value) ? value.filter((item: unknown) => typeof item === 'string') : [] } catch { return [] }
  })
  const [savedOpen, setSavedOpen] = useState(false)
  const [filmOpen, setFilmOpen] = useState(false)
  const [toast, setToast] = useState('')
  const toastTimeout = useRef<number | undefined>(undefined)
  useEffect(() => {
    try { localStorage.setItem('kibira-shortlist', JSON.stringify(saved)) } catch { /* The shortlist still works when browser storage is unavailable. */ }
  }, [saved])
  useEffect(() => () => window.clearTimeout(toastTimeout.current), [])
  function notify(message: string) {
    window.clearTimeout(toastTimeout.current)
    setToast(message)
    toastTimeout.current = window.setTimeout(() => setToast(''), 3500)
  }
  function toggleSaved(slug: string) {
    const exists = saved.includes(slug)
    setSaved((current) => current.includes(slug) ? current.filter((id) => id !== slug) : [...current, slug])
    notify(exists ? 'Journey removed from your shortlist' : 'A little inspiration, saved to your shortlist')
  }
  return <SiteContext.Provider value={{ saved, toggleSaved, savedOpen, setSavedOpen, filmOpen, setFilmOpen, toast, notify }}>{children}</SiteContext.Provider>
}
