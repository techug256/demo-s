import { createContext, useContext } from 'react'

export type SiteContextValue = {
  saved: string[]
  toggleSaved: (slug: string) => void
  savedOpen: boolean
  setSavedOpen: (open: boolean) => void
  filmOpen: boolean
  setFilmOpen: (open: boolean) => void
  toast: string
  notify: (message: string) => void
}

export const SiteContext = createContext<SiteContextValue | null>(null)

export function useSite() {
  const context = useContext(SiteContext)
  if (!context) throw new Error('useSite must be used inside SiteProvider')
  return context
}
