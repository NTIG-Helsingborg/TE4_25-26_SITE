import { Link } from 'react-router-dom'
import { useLang } from '../contexts/LangContext'
import { strings } from '../i18n/strings'

const order = ['/', '/klassen', '/projekt', '/apl', '/tidslinje', '/galleri', '/om'] as const

interface Props {
  current: typeof order[number]
}

export function ChapterNav({ current }: Props) {
  const { lang } = useLang()
  const idx = order.indexOf(current)
  const prev = idx > 0 ? order[idx - 1] : null
  const next = idx < order.length - 1 ? order[idx + 1] : null

  const labelFor = (path: string) => {
    switch (path) {
      case '/': return strings.nav.index[lang]
      case '/klassen': return strings.nav.klassen[lang]
      case '/projekt': return strings.nav.projekt[lang]
      case '/apl': return strings.nav.apl[lang]
      case '/tidslinje': return strings.nav.tidslinje[lang]
      case '/galleri': return strings.nav.galleri[lang]
      case '/om': return strings.nav.om[lang]
      default: return path
    }
  }

  return (
    <div className="mt-24 mb-12 px-12 max-w-[1440px] mx-auto">
      <div className="grid grid-cols-2 gap-1 border border-border bg-bg/50">
        {prev ? (
          <Link
            to={prev}
            className="group flex items-center justify-between p-6 hover:bg-bg-2 transition-colors border-r border-border"
          >
            <div>
              <div className="font-mono text-[10px] tracking-widest text-muted-2 uppercase mb-2">
                ← {strings.ui.prevChapter[lang]}
              </div>
              <div className="font-sans font-semibold text-fg text-lg lowercase">
                {labelFor(prev)}
              </div>
            </div>
            <span className="font-mono text-2xl text-muted-2 group-hover:text-accent transition-colors">←</span>
          </Link>
        ) : <div className="p-6 border-r border-border" />}

        {next ? (
          <Link
            to={next}
            className="group flex items-center justify-between p-6 hover:bg-bg-2 transition-colors text-right"
          >
            <span className="font-mono text-2xl text-muted-2 group-hover:text-accent transition-colors">→</span>
            <div>
              <div className="font-mono text-[10px] tracking-widest text-muted-2 uppercase mb-2">
                {strings.ui.nextChapter[lang]} →
              </div>
              <div className="font-sans font-semibold text-fg text-lg lowercase">
                {labelFor(next)}
              </div>
            </div>
          </Link>
        ) : <div className="p-6" />}
      </div>
    </div>
  )
}
