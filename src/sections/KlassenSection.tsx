import { motion } from 'framer-motion'
import { useLang } from '../contexts/lang'
import { strings } from '../i18n/strings'
import { students } from '../data/students'
import { SectionHeader } from './SectionHeader'

export function KlassenSection() {
  const { lang } = useLang()

  return (
    <section className="relative">
      <SectionHeader
        anchorId="klassen"
        chapter={strings.klassen.chapter}
        title={strings.klassen.title}
        lede={strings.klassen.lede}
        timecode="00:14:08:12"
      />

      <div className="px-12 max-w-[1440px] mx-auto">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {students.map((s, i) => (
            <motion.li
              key={s.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-5% 0px' }}
              transition={{ duration: 0.5, delay: 0.04 * (i % 8), ease: [0.16, 1, 0.3, 1] }}
              className="group bg-bg p-7 hover:bg-bg-2 transition-colors relative border border-border hover:border-accent/40"
            >
              <div className="relative aspect-[4/5] mb-5 overflow-hidden border border-border/70 bg-bg-2">
                {s.photo ? (
                  <>
                    <img
                      src={s.photo}
                      alt={s.fullName}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.03]"
                      style={{ filter: 'saturate(0.92) contrast(1.02)' }}
                    />
                    <div
                      className="absolute inset-0 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background:
                          'radial-gradient(ellipse at 30% 30%, color-mix(in oklch, var(--color-accent) 50%, transparent) 0%, transparent 60%)',
                      }}
                    />
                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-bg/85 to-transparent" />
                  </>
                ) : (
                  <>
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: 'url(/nti-bg.jpg)',
                        backgroundSize: 'cover',
                        backgroundPosition: `${(i * 37) % 100}% ${(i * 61) % 100}%`,
                        filter: 'saturate(0.7) brightness(0.5) hue-rotate(-8deg)',
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/55 to-bg/30" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-sans font-black text-fg/[0.12] text-[180px] leading-none tracking-tight select-none">
                        {s.shortName.charAt(0)}
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-3 right-12 z-10 font-mono text-[10px] text-muted-2/80 tracking-widest uppercase">
                      lägg in din egen
                    </div>
                  </>
                )}

                {/* Number badge */}
                <span className="absolute top-3 left-3 z-10 font-mono text-[10px] text-accent tracking-widest bg-bg/70 backdrop-blur-sm px-1.5 py-0.5">
                  [{String(i + 1).padStart(2, '0')} / {String(students.length).padStart(2, '0')}]
                </span>
                {s.isAuthor && (
                  <span className="absolute top-3 right-3 z-10 font-mono text-[10px] text-accent border border-accent px-1.5 py-0.5 tracking-widest uppercase bg-bg/70 backdrop-blur-sm">
                    site
                  </span>
                )}
                {/* Caption */}
                <div className="absolute bottom-3 left-3 right-3 z-10 font-mono text-[10px] text-fg/70 tracking-widest uppercase">
                  {s.shortName}
                </div>
              </div>

              <div className="flex items-baseline justify-between gap-3 mb-2">
                <h3 className="font-sans font-bold text-fg text-xl tracking-tight">{s.fullName}</h3>
                <div className="flex items-baseline gap-3">
                  {s.github && (
                    <a
                      href={`https://github.com/${s.github}`}
                      target="_blank"
                      rel="noreferrer"
                      className="font-mono text-[11px] text-muted-2 hover:text-accent transition-colors"
                    >
                      @{s.github}
                    </a>
                  )}
                  {s.linkedin && (
                    <a
                      href={`https://linkedin.com/in/${s.linkedin}`}
                      target="_blank"
                      rel="noreferrer"
                      className="font-mono text-[11px] text-muted-2 hover:text-accent transition-colors"
                    >
                      LinkedIn
                    </a>
                  )}
                </div>
              </div>
              <p className="font-mono text-[11px] text-muted tracking-wide lowercase mb-3">
                {s.role[lang]}
              </p>

              {/* Tech stack chips — last year's site had them, they signal what each person ships in */}
              <ul className="flex flex-wrap gap-1.5">
                {s.stack.map((t) => (
                  <li
                    key={t}
                    className="font-mono text-[10px] text-muted-2 border border-border px-1.5 py-0.5 tracking-wide lowercase"
                  >
                    {t}
                  </li>
                ))}
              </ul>

              {s.quote && (
                <p className="mt-4 font-serif italic text-[13px] text-fg-2/85 leading-snug border-t border-border/60 pt-3">
                  “{s.quote[lang]}”
                </p>
              )}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
