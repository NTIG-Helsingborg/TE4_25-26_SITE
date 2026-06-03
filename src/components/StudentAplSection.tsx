import { motion } from 'framer-motion'
import { useLang } from '../contexts/lang'
import { strings } from '../i18n/strings'
import { asset } from '../lib/asset'
import type { Student, AplStudentEntry } from '../data/students'
import type { AplPlace } from '../data/aplPlace'
import { aplSwedenPlaces } from '../data/aplSweden'
import { aplMaltaPlaces } from '../data/aplMalta'

interface AplCardProps {
  entry: AplStudentEntry
  place: AplPlace
  countryCode: 'SE' | 'MT'
  gradient: string
  weeks: string
}

function AplCard({ entry, place, countryCode, gradient, weeks }: AplCardProps) {
  const { lang } = useLang()
  const countryLabel = countryCode === 'SE' ? strings.apl.sweden[lang] : strings.apl.malta[lang]

  const hasLinks = place.website || place.email || place.linkedIn

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-5% 0px' }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className="relative bg-bg overflow-hidden"
    >
      {/* Image area */}
      <div
        className="relative aspect-[21/9] overflow-hidden border-b border-border"
        style={{ background: gradient }}
      >
        {entry.photo && (
          <img
            src={asset(entry.photo)}
            alt={place.company[lang]}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ filter: 'saturate(0.8) contrast(1.05) brightness(0.7)' }}
          />
        )}
        <div
          className="absolute inset-0 opacity-50"
          style={{
            background:
              'radial-gradient(ellipse at 30% 40%, color-mix(in oklch, var(--color-accent) 22%, transparent) 0%, transparent 60%)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg/70 via-transparent to-bg/30" />
        <span className="absolute top-4 right-4 z-10 font-mono text-[10px] tracking-widest text-accent bg-bg/50 backdrop-blur-sm px-1.5 py-0.5">
          [{countryCode}]
        </span>
        <span className="absolute bottom-4 left-4 z-10 font-mono text-[11px] tracking-widest text-fg/90 uppercase">
          {countryLabel}
        </span>
      </div>

      {/* Content */}
      <div className="p-8">
        <div className="flex items-baseline justify-between mb-3">
          <h3 className="font-sans font-bold text-fg text-2xl tracking-tight">
            {place.company[lang]}
          </h3>
          <div className="text-right">
            <div className="font-sans font-black text-accent text-5xl leading-none">{weeks}</div>
            <div className="font-mono text-[10px] text-muted-2 tracking-widest uppercase mt-1">
              {strings.apl.weeks[lang]}
            </div>
          </div>
        </div>
        <p className="font-mono text-[13px] leading-relaxed text-muted max-w-[52ch]">
          {entry.summary[lang]}
        </p>

        {/* Contact links */}
        {hasLinks && (
          <div className="mt-5 flex flex-wrap gap-4 font-mono text-[11px]">
            <span className="text-muted-2 tracking-widest uppercase self-center">
              {strings.profile.contact[lang]} →
            </span>
            {place.website && (
              <a
                href={place.website}
                target="_blank"
                rel="noreferrer"
                className="text-accent hover:text-accent-soft transition-colors"
              >
                {place.website.replace(/^https?:\/\/(www\.)?/, '')}
              </a>
            )}
            {place.email && (
              <a
                href={`mailto:${place.email}`}
                className="text-accent hover:text-accent-soft transition-colors"
              >
                {place.email}
              </a>
            )}
            {place.linkedIn && (
              <a
                href={place.linkedIn}
                target="_blank"
                rel="noreferrer"
                className="text-accent hover:text-accent-soft transition-colors"
              >
                {place.linkedIn.replace(/^https?:\/\/(www\.)?/, '')}
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  )
}

interface Props {
  student: Student
}

export function StudentAplSection({ student }: Props) {
  const { lang } = useLang()

  const swedenPlace = student.aplSweden
    ? aplSwedenPlaces.find((p) => p.id === student.aplSweden!.placeId) ?? null
    : null
  const maltaPlace = student.aplMalta
    ? aplMaltaPlaces.find((p) => p.id === student.aplMalta!.placeId) ?? null
    : null

  if (!swedenPlace && !maltaPlace) return null

  const cols = swedenPlace && maltaPlace ? 'lg:grid-cols-2' : 'lg:grid-cols-1'

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
      className="px-12 max-w-[960px] mx-auto mb-14"
    >
      {/* Section heading */}
      <div className="font-mono text-[11px] text-muted-2 tracking-widest uppercase mb-5 flex items-center gap-3">
        <span className="text-accent">&middot;</span>
        <span>{strings.profile.aplHeading[lang]}</span>
        <span className="flex-1 h-px bg-border" />
      </div>

      <div className={`grid grid-cols-1 ${cols} gap-[1px] bg-border border border-border`}>
        {swedenPlace && student.aplSweden && (
          <AplCard
            entry={student.aplSweden}
            place={swedenPlace}
            countryCode="SE"
            weeks="7"
            gradient="linear-gradient(160deg, oklch(0.22 0.05 240) 0%, oklch(0.12 0.04 240) 100%)"
          />
        )}
        {maltaPlace && student.aplMalta && (
          <AplCard
            entry={student.aplMalta}
            place={maltaPlace}
            countryCode="MT"
            weeks="3"
            gradient="linear-gradient(160deg, oklch(0.32 0.10 60) 0%, oklch(0.18 0.06 50) 100%)"
          />
        )}
      </div>
    </motion.section>
  )
}
