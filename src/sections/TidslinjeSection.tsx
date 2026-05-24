import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useLang } from '../contexts/LangContext'
import { strings } from '../i18n/strings'
import { timeline, type TimelineEvent } from '../data/timeline'
import { SectionHeader } from './SectionHeader'

const tagColor: Record<string, string> = {
  apl: 'text-accent border-accent bg-accent/10',
  project: 'text-accent-soft border-accent-soft bg-accent/5',
  event: 'text-fg border-fg/40 bg-fg/5',
  cert: 'text-fg border-fg/50 bg-fg/[0.06]',
  end: 'text-accent border-accent bg-accent/20',
}

export function TidslinjeSection() {
  const { lang } = useLang()

  return (
    <section className="relative mt-24">
      <SectionHeader
        anchorId="tidslinje"
        chapter={strings.tidslinje.chapter}
        title={strings.tidslinje.title}
        lede={strings.tidslinje.lede}
        timecode="01:12:48:00"
      />

      <div className="px-12 max-w-[1440px] mx-auto">
        <ol className="relative">
          <div className="absolute left-[88px] top-2 bottom-2 w-px bg-gradient-to-b from-border via-accent/40 to-border" />
          {timeline.map((ev, i) => (
            <Row key={ev.id} ev={ev} i={i} lang={lang} />
          ))}
        </ol>
      </div>
    </section>
  )
}

function Row({ ev, i, lang }: { ev: TimelineEvent; i: number; lang: 'sv' | 'en' }) {
  const isEnd = ev.tag === 'end'
  const inner = (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-5% 0px' }}
      transition={{ duration: 0.45, delay: 0.03 * (i % 6), ease: [0.16, 1, 0.3, 1] }}
      className={`relative grid grid-cols-[80px_1fr] gap-10 py-6 border-b border-border last:border-b-0 transition-colors ${
        ev.href ? 'hover:bg-bg-2/60 cursor-pointer group' : ''
      } ${isEnd ? 'bg-gradient-to-r from-accent/10 via-transparent to-transparent' : ''}`}
    >
      <div className={`font-mono text-[11px] tracking-widest uppercase pt-1 ${isEnd ? 'text-accent font-semibold' : 'text-muted-2'}`}>
        {ev.month}
      </div>
      <div
        className={`absolute left-[83px] top-9 w-[11px] h-[11px] bg-bg border border-accent ${
          isEnd ? 'scale-150' : ''
        } transition-transform`}
      >
        <div className={`w-[5px] h-[5px] absolute top-[2px] left-[2px] ${isEnd ? 'bg-accent animate-pulse' : 'bg-accent'}`} />
      </div>
      <div className="pl-4">
        <div className="flex items-baseline justify-between gap-4 flex-wrap mb-2">
          <h3
            className={`font-sans font-semibold tracking-tight ${
              isEnd ? 'text-accent text-3xl md:text-4xl' : 'text-fg text-xl md:text-2xl'
            } ${ev.href ? 'group-hover:text-accent transition-colors' : ''}`}
          >
            {ev.title[lang]}
            {ev.href && (
              <span className="ml-3 inline-block font-mono text-[14px] text-muted-2 group-hover:text-accent group-hover:translate-x-0.5 transition-all">
                →
              </span>
            )}
          </h3>
          <div className="flex items-center gap-3">
            {ev.tag && (
              <span className={`font-mono text-[10px] tracking-widest uppercase border px-1.5 py-0.5 ${tagColor[ev.tag]}`}>
                {ev.tag}
              </span>
            )}
            <span className="font-mono text-[11px] text-muted-2 tracking-wider">{ev.date[lang]}</span>
          </div>
        </div>
        {ev.brief && (
          <p className="font-mono text-[12px] leading-relaxed text-accent-soft/90 max-w-[60ch] mb-1.5">
            {ev.brief[lang]}
          </p>
        )}
        <p className="font-mono text-[12px] leading-relaxed text-muted max-w-[64ch]">{ev.description[lang]}</p>
      </div>
    </motion.div>
  )

  if (!ev.href) return <li className="relative">{inner}</li>
  if (ev.href.startsWith('http')) {
    return (
      <li className="relative">
        <a href={ev.href} target="_blank" rel="noreferrer" className="block">
          {inner}
        </a>
      </li>
    )
  }
  return (
    <li className="relative">
      <Link to={ev.href} className="block">
        {inner}
      </Link>
    </li>
  )
}
