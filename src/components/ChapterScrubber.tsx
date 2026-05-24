import { useEffect, useState } from 'react'
import { useLang } from '../contexts/LangContext'
import { strings } from '../i18n/strings'

interface Chapter {
  id: string
  no: string
  key: keyof typeof strings.nav
}

const chapters: Chapter[] = [
  { id: 'top', no: '00', key: 'index' },
  { id: 'klassen', no: '01', key: 'klassen' },
  { id: 'projekt', no: '02', key: 'projekt' },
  { id: 'apl', no: '03', key: 'apl' },
  { id: 'tidslinje', no: '04', key: 'tidslinje' },
  { id: 'galleri', no: '05', key: 'galleri' },
  { id: 'om', no: 'end', key: 'om' },
]

/**
 * Film-reel chapter scrubber, fixed to right edge.
 * Highlights the chapter currently in view; click to scroll.
 */
export function ChapterScrubber() {
  const { lang } = useLang()
  const [activeId, setActiveId] = useState('top')

  useEffect(() => {
    const onScroll = () => {
      let nextActive = 'top'
      const focusY = window.innerHeight * 0.35
      for (const c of chapters) {
        const el = c.id === 'top' ? null : document.getElementById(c.id)
        if (!el) continue
        const rect = el.getBoundingClientRect()
        if (rect.top <= focusY) nextActive = c.id
      }
      setActiveId((prev) => (prev === nextActive ? prev : nextActive))
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = (id: string) => {
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <aside
      aria-label="chapter navigator"
      className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-end gap-1.5"
    >
      <div className="font-mono text-[9px] tracking-[0.18em] text-muted-2/60 uppercase mb-2">scenes</div>
      {chapters.map((c) => {
        const active = activeId === c.id
        return (
          <button
            key={c.id}
            type="button"
            onClick={() => handleClick(c.id)}
            className="group flex items-center gap-3"
            aria-current={active ? 'true' : 'false'}
          >
            <span
              className={`font-mono text-[10px] tracking-widest uppercase transition-colors ${
                active ? 'text-fg' : 'text-muted-2/70 group-hover:text-muted'
              }`}
            >
              {c.no === 'end' ? 'END' : `CH.${c.no}`} · {strings.nav[c.key][lang]}
            </span>
            <span
              className={`h-px transition-all ${
                active ? 'w-10 bg-accent' : 'w-4 bg-muted-2/40 group-hover:w-6'
              }`}
            />
          </button>
        )
      })}
    </aside>
  )
}
