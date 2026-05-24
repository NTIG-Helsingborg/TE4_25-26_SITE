import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { useLang } from '../contexts/LangContext'
import { strings } from '../i18n/strings'
import { Brand } from './Brand'

const routes = [
  { to: '/klassen', anchor: '#klassen', key: 'klassen' as const },
  { to: '/projekt', anchor: '#projekt', key: 'projekt' as const },
  { to: '/apl', anchor: '#apl', key: 'apl' as const },
  { to: '/tidslinje', anchor: '#tidslinje', key: 'tidslinje' as const },
  { to: '/galleri', anchor: '#galleri', key: 'galleri' as const },
  { to: '/om', anchor: '#om', key: 'om' as const },
]

export function Nav() {
  const { lang, setLang } = useLang()
  const location = useLocation()
  const navigate = useNavigate()
  const onHome = location.pathname === '/'

  const handleNav = (e: React.MouseEvent, r: (typeof routes)[number]) => {
    if (!onHome) return // let NavLink handle routing
    e.preventDefault()
    const el = document.querySelector(r.anchor)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      history.replaceState(null, '', r.anchor)
    } else {
      navigate(r.to)
    }
  }

  return (
    <nav className="relative z-40 flex items-center justify-between border-b border-border bg-bg/85 px-12 py-4 backdrop-blur-md">
      <Brand size="md" />

      <ul className="flex gap-7 font-mono text-xs tracking-wide">
        {routes.map((r) => (
          <li key={r.to}>
            <NavLink
              to={onHome ? r.anchor : r.to}
              onClick={(e) => handleNav(e, r)}
              className={({ isActive }) =>
                `transition-colors hover:text-fg ${isActive && !onHome ? 'text-fg' : 'text-muted-2'}`
              }
            >
              [{strings.nav[r.key][lang]}]
            </NavLink>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-6 font-mono text-xs text-muted-2 tracking-wide">
        <span>helsingborg</span>
        <div className="flex items-center gap-1.5" role="group" aria-label="language">
          <button
            onClick={() => setLang('sv')}
            className={`uppercase transition-colors hover:text-fg ${lang === 'sv' ? 'text-accent font-semibold' : 'text-muted-2'}`}
            aria-pressed={lang === 'sv'}
          >
            sv
          </button>
          <span>/</span>
          <button
            onClick={() => setLang('en')}
            className={`uppercase transition-colors hover:text-fg ${lang === 'en' ? 'text-accent font-semibold' : 'text-muted-2'}`}
            aria-pressed={lang === 'en'}
          >
            en
          </button>
        </div>
      </div>
    </nav>
  )
}
