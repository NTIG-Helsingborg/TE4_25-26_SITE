import { motion } from 'framer-motion'
import { useLang } from '../contexts/lang'
import { strings } from '../i18n/strings'
import { projects } from '../data/projects'
import { SectionHeader } from './SectionHeader'

export function ProjektSection() {
  const { lang } = useLang()

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
          {projects.filter((p) => !p.isOpenSlot).map((p, i) => (
            <motion.li
              key={p.id}
              id={`proj-${p.id}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-5% 0px' }}
              transition={{ duration: 0.5, delay: 0.05 * i, ease: [0.16, 1, 0.3, 1] }}
              className="group bg-bg p-8 transition-colors relative hover:bg-bg-2 scroll-mt-20 border border-border hover:border-accent/40"
            >
              <div className="flex items-center justify-between font-mono text-[11px] text-muted-2 tracking-widest mb-7">
                <span>[{String(i + 1).padStart(2, '0')} / {p.isOpenSlot ? 'open' : p.repo}]</span>
                <span className="text-accent-soft">@{p.org.toLowerCase()}</span>
              </div>
              <h3 className="font-sans font-bold text-fg text-3xl md:text-4xl tracking-[-0.02em] mb-3">
                {p.isOpenSlot ? strings.projekt.openSlot[lang] : p.name}
              </h3>
              <p className="font-sans text-fg-2 text-base leading-relaxed max-w-[42ch] mb-6">
                {p.isOpenSlot ? strings.projekt.openSlotHint[lang] : p.tagline[lang]}
              </p>
              {!p.isOpenSlot && (
                <p className="font-mono text-[12px] leading-relaxed text-muted max-w-[52ch] mb-7">
                  {p.description[lang]}
                </p>
              )}
              <div className="flex items-center justify-between flex-wrap gap-4 mt-7">
                <ul className="flex gap-1.5 flex-wrap">
                  {p.stack.map((s, si) => (
                    <li
                      key={`${p.id}-${si}`}
                      className={`font-mono text-[10px] tracking-wider px-2 py-1 border ${
                        p.isOpenSlot ? 'border-muted-2 text-muted-2' : 'border-accent/50 text-accent'
                      }`}
                    >
                      {s}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-4 font-mono text-[11px] text-muted-2">
                  {!p.isOpenSlot && <span>{p.period}</span>}
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
        </ul>
      </div>
    </section>
  )
}
