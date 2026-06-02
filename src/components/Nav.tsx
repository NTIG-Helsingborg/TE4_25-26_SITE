import { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { useLang } from '../contexts/lang'
import { strings } from '../i18n/strings'
import { Brand } from './Brand'

const routes = [
  { anchor: '#klassen', key: 'klassen' as const },
  { anchor: '#projekt', key: 'projekt' as const },
  { anchor: '#apl', key: 'apl' as const },
  { anchor: '#tidslinje', key: 'tidslinje' as const },
  { anchor: '#galleri', key: 'galleri' as const },
  { anchor: '#om', key: 'om' as const },
]

function homeHash(anchor: string) {
  return `/${anchor}`
}

function LangSwitcher({ className }: { className?: string }) {
  const { lang, setLang } = useLang()
  return (
    <div className={`flex items-center gap-1.5 ${className ?? ''}`} role="group" aria-label="language">
      <button
        onClick={() => setLang('sv')}
        className={`uppercase transition-colors hover:text-fg ${lang === 'sv' ? 'text-accent font-semibold' : 'text-muted-2'}`}
        aria-pressed={lang === 'sv'}
      >
        sv
      </button>
      <span className="text-muted-2">/</span>
      <button
        onClick={() => setLang('en')}
        className={`uppercase transition-colors hover:text-fg ${lang === 'en' ? 'text-accent font-semibold' : 'text-muted-2'}`}
        aria-pressed={lang === 'en'}
      >
        en
      </button>
    </div>
  )
}

export function Nav() {
  const { lang } = useLang()
  const location = useLocation()
  const onHome = location.pathname === '/'
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleNav = (e: React.MouseEvent, r: (typeof routes)[number]) => {
    if (!onHome) return
    e.preventDefault()
    const el = document.querySelector(r.anchor)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      history.replaceState(null, '', r.anchor)
    }
  }

  const handleMobileNav = (e: React.MouseEvent, r: (typeof routes)[number]) => {
    setMobileOpen(false)
    handleNav(e, r)
  }

  return (
    <>
      <nav className="sticky top-0 z-40 flex items-center justify-between border-b border-border bg-bg/85 px-4 py-4 backdrop-blur-md min-[1000px]:px-12 min-[1475px]:relative">
        <Brand size="md" />

        {/* Desktop nav links */}
        <ul className="hidden gap-7 font-mono text-xs tracking-wide min-[1000px]:flex">
          {routes.map((r) => (
            <li key={r.anchor}>
              <NavLink
                to={homeHash(r.anchor)}
                onClick={(e) => handleNav(e, r)}
                className={({ isActive }) =>
                  `transition-colors hover:text-fg ${isActive ? 'text-fg' : 'text-muted-2'}`
                }
              >
                [{strings.nav[r.key][lang]}]
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop right side */}
        <div className="hidden items-center gap-6 font-mono text-xs text-muted-2 tracking-wide min-[1000px]:flex">
          <span>helsingborg</span>
          <LangSwitcher />
        </div>

        {/* Mobile right side: lang switcher + hamburger */}
        <div className="flex items-center gap-4 min-[1000px]:hidden">
          <LangSwitcher className="font-mono text-xs tracking-wide" />
          <button
            onClick={() => setMobileOpen((o) => !o)}
            className="relative z-50 flex h-8 w-8 flex-col items-center justify-center gap-[5px]"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            <motion.span
              className="block h-[2px] w-5 rounded-full bg-fg"
              animate={mobileOpen ? { rotate: 45, y: 3.5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25, ease: [0.25, 1, 0.5, 1] }}
            />
            <motion.span
              className="block h-[2px] w-5 rounded-full bg-fg"
              animate={mobileOpen ? { rotate: -45, y: -3.5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25, ease: [0.25, 1, 0.5, 1] }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
            className="fixed inset-0 z-39 flex flex-col items-center justify-center gap-8 bg-bg/98 backdrop-blur-lg min-[1000px]:hidden"
          >
            <ul className="flex flex-col items-center gap-6 font-mono text-lg tracking-wide">
              {routes.map((r, i) => (
                <motion.li
                  key={r.anchor}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + i * 0.04, duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
                >
                  <NavLink
                    to={homeHash(r.anchor)}
                    onClick={(e) => handleMobileNav(e, r)}
                    className={({ isActive }) =>
                      `transition-colors hover:text-fg ${isActive ? 'text-accent' : 'text-muted-2'}`
                    }
                  >
                    [{strings.nav[r.key][lang]}]
                  </NavLink>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.3 }}
              className="font-mono text-xs tracking-wide text-muted-2"
            >
              helsingborg
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
