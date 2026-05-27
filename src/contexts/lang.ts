import { createContext, useContext } from 'react'

export type Lang = 'sv' | 'en'

export interface LangCtx {
  lang: Lang
  setLang: (l: Lang) => void
  toggle: () => void
}

export const Ctx = createContext<LangCtx | null>(null)

export const STORAGE_KEY = 'te4-lang'
export const DEFAULT_LANG: Lang = 'sv'

export function getSupportedSystemLang(): Lang | null {
  if (typeof window === 'undefined') return null

  const browserLanguages = window.navigator.languages?.length
    ? window.navigator.languages
    : [window.navigator.language]

  for (const browserLang of browserLanguages) {
    const lang = browserLang.toLowerCase().split('-')[0]
    if (lang === 'en' || lang === 'sv') return lang
  }

  return null
}

export function useLang() {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error('useLang must be used within LangProvider')
  return ctx
}

export function t<T extends Record<Lang, unknown>>(strings: T, lang: Lang): T[Lang] {
  return strings[lang]
}
