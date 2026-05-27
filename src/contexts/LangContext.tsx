import { useEffect, useState, type ReactNode } from 'react'
import { Ctx, DEFAULT_LANG, getSupportedSystemLang, STORAGE_KEY, type Lang } from './lang'

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window === 'undefined') return DEFAULT_LANG
    const stored = window.localStorage.getItem(STORAGE_KEY) as Lang | null
    if (stored === 'en' || stored === 'sv') return stored

    return getSupportedSystemLang() ?? DEFAULT_LANG
  })

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, lang)
    document.documentElement.lang = lang
  }, [lang])

  const setLang = (l: Lang) => setLangState(l)
  const toggle = () => setLangState(lang === 'sv' ? 'en' : 'sv')

  return <Ctx.Provider value={{ lang, setLang, toggle }}>{children}</Ctx.Provider>
}
