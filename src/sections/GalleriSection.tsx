import { motion } from 'framer-motion'
import { useLang } from '../contexts/LangContext'
import { strings } from '../i18n/strings'
import { SectionHeader } from './SectionHeader'

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
  { id: 'linkedin',  src: '/photos/events/linkedin-nov.jpg',     span: '',                            date: 'NOV 2025', caption: { sv: 'linkedin · workshop', en: 'linkedin · workshop' } },
  { id: 'klass-nov', src: '/photos/events/klassrum-nov.jpg',     span: 'md:col-span-2',               date: 'NOV 2025', caption: { sv: 'klassrum · novemberkväll', en: 'classroom · november evening' } },
  { id: 'spel',      src: '/photos/events/spel-dec.jpg',         span: '',                            date: 'DEC 2025', caption: { sv: 'spel · back-to-zero playtest', en: 'games · back-to-zero playtest' } },
  { id: 'techship',  src: '/photos/events/techship-dec.jpg',     span: '',                            date: 'DEC 2025', caption: { sv: 'techship demo day', en: 'techship demo day' } },
  { id: 'margo',     src: '/photos/events/margo-dec.jpg',        span: 'md:col-span-2 md:row-span-2', date: 'DEC 2025', caption: { sv: 'margo · tasty tuesday', en: 'margo · tasty tuesday' } },
  { id: 'klass-dec', src: '/photos/events/klassrum-dec.jpg',     span: '',                            date: 'DEC 2025', caption: { sv: 'klassrum · sista veckan -25', en: 'classroom · last week of -25' } },
  { id: 'klass-jan', src: '/photos/events/klassrum-jan.jpg',     span: '',                            date: 'JAN 2026', caption: { sv: 'klassrum · -26 börjar', en: 'classroom · -26 begins' } },
]

export function GalleriSection() {
  const { lang } = useLang()

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
              className={`relative overflow-hidden border border-border bg-bg-2 group ${s.span}`}
            >
              <img
                src={s.src}
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
    </section>
  )
}
