import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLang } from '../contexts/lang'
import { strings } from '../i18n/strings'
import { projects } from '../data/projects'
import { SectionHeader } from './SectionHeader'

const VISIBLE_COUNT = 3
const ease = [0.16, 1, 0.3, 1] as const

export function ProjektSection() {
  const { lang } = useLang()
  const [expanded, setExpanded] = useState(false)

  const featured = projects.filter((p) => !p.isOpenSlot)
  const visible = expanded ? featured : featured.slice(0, VISIBLE_COUNT)
  const hasMore = featured.length > VISIBLE_COUNT

  return (
    <section className="relative mt-24">
      <SectionHeader
        anchorId="projekt"
        chapter={strings.projekt.chapter}
        title={strings.projekt.title}
        lede={strings.projekt.lede}
        timecode="00:32:44:02"
      />

      <div className="px-12 max-w-[1440px] mx-auto">
        <div className="font-mono text-[11px] text-muted-2 tracking-widest uppercase mb-5 flex items-center gap-3">
          <span className="text-accent">·</span>
          <span>{strings.projekt.featuredLabel[lang]}</span>
          <span className="flex-1 h-px bg-border" />
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <AnimatePresence initial={false}>
            {visible.map((p, i) => (
              <motion.li
                key={p.id}
                id={`proj-${p.id}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.45, delay: expanded && i >= VISIBLE_COUNT ? 0.04 * (i - VISIBLE_COUNT) : 0, ease }}
                className="group bg-bg p-8 transition-colors relative scroll-mt-20 border border-border hover:border-accent/40"
              >
                <div className="flex items-center justify-between font-mono text-[11px] text-muted-2 tracking-widest mb-7">
                  <span>[{String(i + 1).padStart(2, '0')} / {p.repo}]</span>
                  <span className="text-accent-soft">@{p.org.toLowerCase()}</span>
                </div>
                <h3 className="font-sans font-bold text-fg text-3xl md:text-4xl tracking-[-0.02em] mb-3">
                  {p.name}
                </h3>
                <p className="font-sans text-fg-2 text-base leading-relaxed max-w-[42ch] mb-6">
                  {p.tagline[lang]}
                </p>
                <p className="font-mono text-[12px] leading-relaxed text-muted max-w-[52ch] mb-7">
                  {p.description[lang]}
                </p>
                <div className="flex items-center justify-between flex-wrap gap-4 mt-7">
                  <ul className="flex gap-1.5 flex-wrap">
                    {p.stack.map((s, si) => (
                      <li
                        key={`${p.id}-${si}`}
                        className="font-mono text-[10px] tracking-wider px-2 py-1 border border-accent/50 text-accent"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-4 font-mono text-[11px] text-muted-2">
                    <span>{p.period}</span>
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-accent hover:text-accent-soft transition-colors flex items-center gap-1.5 group/link"
                    >
                      {strings.projekt.viewOnGithub[lang]}
                      <span className="group-hover/link:translate-x-0.5 transition-transform">→</span>
                    </a>
                    {p.deployUrl && (
                      <a
                        href={p.deployUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-accent hover:text-accent-soft transition-colors flex items-center gap-1.5 group/link"
                      >
                        {lang === 'sv' ? 'Live demo' : 'Live demo'}
                        <span className="group-hover/link:translate-x-0.5 transition-transform">→</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>

        {hasMore && (
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              className="font-mono text-[11px] tracking-widest uppercase text-accent hover:text-accent-soft transition-colors border border-accent/40 hover:border-accent px-6 py-3 flex items-center gap-2"
            >
              {expanded ? strings.projekt.viewLess[lang] : strings.projekt.viewMore[lang]}
              {!expanded && (
                <span className="text-muted-2">({featured.length - VISIBLE_COUNT})</span>
              )}
              <span className={`transition-transform ${expanded ? 'rotate-180' : ''}`}>↓</span>
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
