import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useLang } from '../contexts/lang'
import { strings } from '../i18n/strings'
import { SectionHeader } from './SectionHeader'
import { asset } from '../lib/asset'

interface Slot {
  id: string
  src: string
  span: string
  caption: { sv: string; en: string }
  date: string
}

/**
 * 12 real photos from the year, ordered roughly chronologically.
 * Spans vary to create a magazine-style layout.
 */
const slots: Slot[] = [
  { id: 'uppstart',  src: '/photos/events/uppstart-aug.jpg',    span: 'md:col-span-2 md:row-span-2', date: 'AUG 2025', caption: { sv: 'uppstart', en: 'kick-off' } },
  { id: 'klass-aug', src: '/photos/events/klassrum-aug.jpg',     span: '',                            date: 'AUG 2025', caption: { sv: 'klassrum · första veckan', en: 'classroom · first week' } },
  { id: 'robot',     src: '/photos/events/robotrally-sep.jpg',   span: '',                            date: 'SEP 2025', caption: { sv: 'robotrally', en: 'robot rally' } },
  { id: 'figma',     src: '/photos/events/figma-okt.jpg',        span: 'md:col-span-2',               date: 'OKT 2025', caption: { sv: 'figma workshop · terris', en: 'figma workshop · terris' } },
  { id: 'ergonomi',  src: '/photos/events/ergonomi-okt.jpg',     span: '',                            date: 'OKT 2025', caption: { sv: 'ergonomi', en: 'ergonomics' } },
  { id: 'linkedin',  src: '/photos/events/linkedin-nov.jpg',     span: '',                            date: 'NOV 2025', caption: { sv: 'spel · utveckling', en: 'game · development' } },
  { id: 'klass-nov', src: '/photos/events/klassrum-nov.jpg',     span: 'md:col-span-2',               date: 'NOV 2025', caption: { sv: 'klassrum · novemberkväll', en: 'classroom · november evening' } },
  { id: 'spel',      src: '/photos/events/spel-dec.jpg',         span: '',                            date: 'DEC 2025', caption: { sv: 'spel · speltest', en: 'games · playtest' } },
  { id: 'techship',  src: '/photos/events/techship-dec.jpg',     span: '',                            date: 'DEC 2025', caption: { sv: 'techship demo day', en: 'techship demo day' } },
  { id: 'margo',     src: '/photos/events/margo-dec.jpg',        span: 'md:col-span-2 md:row-span-2', date: 'DEC 2025', caption: { sv: 'margo · tasty tuesday', en: 'margo · tasty tuesday' } },
  { id: 'klass-dec', src: '/photos/events/klassrum-dec.jpg',     span: '',                            date: 'DEC 2025', caption: { sv: 'klassrum · sista veckan -25', en: 'classroom · last week of -25' } },
  { id: 'klass-jan', src: '/photos/events/klassrum-jan.jpg',     span: '',                            date: 'JAN 2026', caption: { sv: 'klassrum · -26 börjar', en: 'classroom · -26 begins' } },
]

export function GalleriSection() {
  const { lang } = useLang()
  const [active, setActive] = useState<number | null>(null)

  const close = () => setActive(null)
  const next = () => setActive((i) => (i === null ? i : (i + 1) % slots.length))
  const prev = () => setActive((i) => (i === null ? i : (i - 1 + slots.length) % slots.length))

  // Keyboard controls + body scroll lock while the lightbox is open
  useEffect(() => {
    if (active === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      else if (e.key === 'ArrowRight') next()
      else if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [active])

  const activeSlot = active === null ? null : slots[active]

  return (
    <section className="relative mt-24">
      <SectionHeader
        anchorId="galleri"
        chapter={strings.galleri.chapter}
        title={strings.galleri.title}
        lede={strings.galleri.lede}
        timecode="01:37:14:09"
      />

      <div className="px-12 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[220px]">
          {slots.map((s, i) => (
            <motion.figure
              key={s.id}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-5% 0px' }}
              transition={{ duration: 0.5, delay: 0.03 * (i % 6), ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setActive(i)}
              role="button"
              tabIndex={0}
              aria-label={`${s.caption[lang]} — ${lang === 'sv' ? 'öppna i helskärm' : 'open fullscreen'}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  setActive(i)
                }
              }}
              className={`relative overflow-hidden border border-border bg-bg-2 group cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${s.span}`}
            >
              <img
                src={asset(s.src)}
                alt={s.caption[lang]}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[700ms] ease-out group-hover:scale-[1.04]"
                style={{ filter: 'saturate(0.92) contrast(1.02)' }}
              />
              {/* Bottom gradient for legibility */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-bg/90 via-bg/40 to-transparent" />
              {/* Pink atmospheric tint on hover */}
              <div
                className="absolute inset-0 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(ellipse at ${30 + (i % 3) * 20}% 30%, color-mix(in oklch, var(--color-accent) 45%, transparent) 0%, transparent 60%)`,
                }}
              />
              {/* Expand affordance on hover */}
              <span className="absolute bottom-3 right-3 z-10 font-mono text-[12px] text-fg/90 bg-bg/65 backdrop-blur-sm px-1.5 py-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                ⤢
              </span>
              <span className="absolute top-3 left-3 z-10 font-mono text-[10px] tracking-widest text-fg/85 bg-bg/65 backdrop-blur-sm px-1.5 py-0.5">
                [{String(i + 1).padStart(2, '0')}]
              </span>
              <span className="absolute top-3 right-3 z-10 font-mono text-[10px] tracking-widest text-accent bg-bg/65 backdrop-blur-sm px-1.5 py-0.5">
                {s.date}
              </span>
              <figcaption className="absolute bottom-3 left-3 right-3 z-10 font-mono text-[11px] tracking-wider text-fg/95">
                {s.caption[lang]}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>

      {/* Lightbox / fullscreen viewer */}
      <AnimatePresence>
        {activeSlot && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label={activeSlot.caption[lang]}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-bg/95 backdrop-blur-md p-6 md:p-12"
          >
            {/* Close */}
            <button
              onClick={(e) => { e.stopPropagation(); close() }}
              aria-label={lang === 'sv' ? 'stäng' : 'close'}
              className="absolute top-5 right-5 z-20 font-mono text-[12px] tracking-widest uppercase text-muted-2 hover:text-accent border border-border hover:border-accent/50 px-3 py-1.5 transition-colors"
            >
              {lang === 'sv' ? 'stäng' : 'close'} ✕
            </button>

            {/* Prev */}
            <button
              onClick={(e) => { e.stopPropagation(); prev() }}
              aria-label={lang === 'sv' ? 'föregående' : 'previous'}
              className="absolute left-3 md:left-8 z-20 font-mono text-accent text-2xl md:text-3xl px-3 py-3 hover:scale-110 transition-transform"
            >
              ←
            </button>
            {/* Next */}
            <button
              onClick={(e) => { e.stopPropagation(); next() }}
              aria-label={lang === 'sv' ? 'nästa' : 'next'}
              className="absolute right-3 md:right-8 z-20 font-mono text-accent text-2xl md:text-3xl px-3 py-3 hover:scale-110 transition-transform"
            >
              →
            </button>

            <motion.figure
              key={activeSlot.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative flex flex-col items-center max-w-[92vw] max-h-[88vh]"
            >
              <img
                src={asset(activeSlot.src)}
                alt={activeSlot.caption[lang]}
                className="max-w-[92vw] max-h-[80vh] object-contain border border-border"
              />
              <figcaption className="mt-4 flex items-center gap-4 font-mono text-[11px] tracking-wider text-muted-2">
                <span className="text-accent">[{String((active ?? 0) + 1).padStart(2, '0')} / {String(slots.length).padStart(2, '0')}]</span>
                <span className="text-fg/90">{activeSlot.caption[lang]}</span>
                <span className="text-muted-2/70">{activeSlot.date}</span>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
