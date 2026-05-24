import { Link } from 'react-router-dom'
import { useLang } from '../contexts/LangContext'
import { Brand } from './Brand'

export function Footer() {
  const { lang } = useLang()
  return (
    <footer className="relative z-10 mt-32 border-t border-border bg-bg/60">
      <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-6 px-12 py-8 font-mono text-[11px] tracking-wider text-muted-2 uppercase">
        <div className="flex items-center gap-4">
          <Brand size="sm" linkToHome={false} />
          <span>· 25/26 · Helsingborg</span>
        </div>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/NTIG-Helsingborg"
            target="_blank"
            rel="noreferrer"
            className="hover:text-fg transition-colors"
          >
            github / ntig-helsingborg
          </a>
          <Link to="/om" className="hover:text-fg transition-colors">
            {lang === 'sv' ? 'eftertexter →' : 'end credits →'}
          </Link>
        </div>
      </div>
    </footer>
  )
}
