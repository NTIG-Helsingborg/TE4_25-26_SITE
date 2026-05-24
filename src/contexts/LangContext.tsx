import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

export type Lang = 'sv' | 'en'

interface LangCtx {
  lang: Lang
  setLang: (l: Lang) => void
  toggle: () => void
}

const Ctx = createContext<LangCtx | null>(null)

const STORAGE_KEY = 'te4-lang'

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window === 'undefined') return 'sv'
    const stored = window.localStorage.getItem(STORAGE_KEY) as Lang | null
    return stored === 'en' || stored === 'sv' ? stored : 'sv'
  })

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, lang)
    document.documentElement.lang = lang
  }, [lang])

  const setLang = (l: Lang) => setLangState(l)
  const toggle = () => setLangState(lang === 'sv' ? 'en' : 'sv')

  return <Ctx.Provider value={{ lang, setLang, toggle }}>{children}</Ctx.Provider>
}

export function useLang() {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error('useLang must be used within LangProvider')
  return ctx
}

export function t<T extends Record<Lang, unknown>>(strings: T, lang: Lang): T[Lang] {
  return strings[lang]
}
