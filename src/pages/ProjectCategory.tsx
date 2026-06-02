import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useLang } from '../contexts/lang'
import { strings } from '../i18n/strings'
import { projects, projectCategories } from '../data/projects'
import { SectionHeader } from '../sections/SectionHeader'

const ease = [0.16, 1, 0.3, 1] as const

export function ProjectCategory() {
  const { category } = useParams<{ category: string }>()
  const { lang } = useLang()

  const meta = projectCategories.find((c) => c.id === category)
  const items = projects.filter((p) => !p.isOpenSlot && p.category === category)

  if (!meta) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center px-12">
          <p className="font-mono text-[11px] text-accent tracking-widest uppercase mb-4">
            [404 / category not found]
          </p>
          <h1 className="font-sans font-extrabold text-fg text-4xl tracking-tight mb-6">
            {lang === 'sv' ? 'Kategorin finns inte' : 'Category not found'}
          </h1>
          <Link
            to="/tidslinje"
            className="font-mono text-[12px] text-accent hover:text-accent-soft transition-colors"
          >
            {lang === 'sv' ? '← Tillbaka till tidslinjen' : '← Back to the timeline'}
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen pb-24">
      <SectionHeader
        anchorId="projekt-kategori"
        chapter={meta.chapter}
        title={meta.title}
        lede={meta.lede}
        timecode="00:32:44:02"
      />

      <div className="px-12 max-w-[1440px] mx-auto">
        <div className="mb-10">
          <Link
            to="/tidslinje"
            className="font-mono text-[11px] text-muted-2 hover:text-accent transition-colors tracking-widest uppercase inline-flex items-center gap-2"
          >
            <span>&larr;</span>
            {lang === 'sv' ? 'Tillbaka till tidslinjen' : 'Back to the timeline'}
          </Link>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {items.map((p, i) => (
            <motion.li
              key={p.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.05 * i, ease }}
              className="group bg-bg p-8 transition-colors relative border border-border hover:border-accent/40"
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
        </ul>
      </div>
    </main>
  )
}
