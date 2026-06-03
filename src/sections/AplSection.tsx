import { useState } from 'react'
import { motion } from 'framer-motion'
import { useLang } from '../contexts/lang'
import { strings } from '../i18n/strings'
import { SectionHeader } from './SectionHeader'
import { asset } from '../lib/asset'
import { AplMaltaModal } from '../components/AplMaltaModal'
import { AplSwedenModal } from '../components/AplSwedenModal'

export function AplSection() {
  const { lang } = useLang()
  const [swedenOpen, setSwedenOpen] = useState(false)
  const [maltaOpen, setMaltaOpen] = useState(false)

  return (
    <section className="relative mt-24">
      <SectionHeader
        anchorId="apl"
        chapter={strings.apl.chapter}
        title={strings.apl.title}
        lede={strings.apl.lede}
        timecode="00:51:12:18"
      />

      <div className="px-12 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[1px] bg-border border border-border">
          <Country
            code="SE"
            name={strings.apl.sweden[lang]}
            weeks="7"
            weeksLabel={strings.apl.weeks[lang]}
            tag="helsingborg"
            gradient="linear-gradient(160deg, oklch(0.22 0.05 240) 0%, oklch(0.12 0.04 240) 100%)"
            photo="/photos/events/apl-sverige.jpg"
            description={
              lang === 'sv'
                ? 'Sju veckor på riktiga företag i Sverige. Vi jobbade sida vid sida med utvecklare som faktiskt levererar.'
                : 'Seven weeks at real companies in Sweden. We worked alongside developers who actually ship.'
            }
            timecode="00:51:12:18"
            interactive
            hint={lang === 'sv' ? 'visa värdar' : 'view hosts'}
            onOpen={() => setSwedenOpen(true)}
          />
          <Country
            code="MT"
            name={strings.apl.malta[lang]}
            weeks="3"
            weeksLabel={strings.apl.weeks[lang]}
            tag="valletta · sliema"
            gradient="linear-gradient(160deg, oklch(0.32 0.10 60) 0%, oklch(0.18 0.06 50) 100%)"
            photo="/photos/events/apl-malta.jpg"
            description={
              lang === 'sv'
                ? 'Tre veckor i Malta - samma stress, finare utsikt.'
                : 'Three weeks in Malta - same stress, better view.'
            }
            timecode="00:51:34:06"
            interactive
            hint={lang === 'sv' ? 'visa värdar' : 'view hosts'}
            onOpen={() => setMaltaOpen(true)}
          />
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-border border border-border">
          <StatBig n="10" label={lang === 'sv' ? 'veckor totalt' : 'total weeks'} />
          <StatBig n="02" label={lang === 'sv' ? 'länder' : 'countries'} />
          <StatBig n="16" label={lang === 'sv' ? 'arbetsplatser' : 'workplaces'} />
        </div>
      </div>

      <AplSwedenModal open={swedenOpen} onClose={() => setSwedenOpen(false)} />
      <AplMaltaModal open={maltaOpen} onClose={() => setMaltaOpen(false)} />
    </section>
  )
}

function Country({ code, name, weeks, weeksLabel, tag, gradient, description, timecode, photo, interactive, hint, onOpen }: {
  code: string; name: string; weeks: string; weeksLabel: string; tag: string;
  gradient: string; description: string; timecode: string; photo?: string;
  interactive?: boolean; hint?: string; onOpen?: () => void;
}) {
  const inner = (
    <>
      <div className="relative aspect-[21/9] overflow-hidden border-b border-border" style={{ background: gradient }}>
        {photo && (
          <img
            src={asset(photo)}
            alt={name}
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
        <span className="absolute top-4 left-4 z-10 font-mono text-[10px] tracking-widest text-fg/85 uppercase bg-bg/50 backdrop-blur-sm px-1.5 py-0.5">TC {timecode}</span>
        <span className="absolute top-4 right-4 z-10 font-mono text-[10px] tracking-widest text-accent bg-bg/50 backdrop-blur-sm px-1.5 py-0.5">[{code}]</span>
        <span className="absolute bottom-4 left-4 z-10 font-mono text-[11px] tracking-widest text-fg/90 uppercase">{tag}</span>
        <span className="absolute bottom-4 right-4 font-sans font-black text-fg/[0.10] text-[160px] leading-none tracking-tighter">{code}</span>
      </div>
      <div className="p-8">
        <div className="flex items-baseline justify-between mb-5">
          <h3 className="font-sans font-bold text-fg text-4xl tracking-tight">{name}</h3>
          <div className="text-right">
            <div className="font-sans font-black text-accent text-5xl leading-none">{weeks}</div>
            <div className="font-mono text-[10px] text-muted-2 tracking-widest uppercase mt-1">{weeksLabel}</div>
          </div>
        </div>
        <p className="font-mono text-[13px] leading-relaxed text-muted max-w-[52ch]">{description}</p>
        {interactive && hint && (
          <p className="mt-4 font-mono text-[11px] tracking-widest uppercase text-accent group-hover:translate-x-0.5 transition-transform">
            {hint} →
          </p>
        )}
      </div>
    </>
  )

  const className = `relative bg-bg overflow-hidden${interactive ? ' group cursor-pointer hover:bg-bg-2/40 transition-colors' : ''}`

  if (interactive && onOpen) {
    return (
      <motion.button
        type="button"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-5% 0px' }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        onClick={onOpen}
        className={`${className} w-full text-left`}
      >
        {inner}
      </motion.button>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-5% 0px' }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {inner}
    </motion.div>
  )
}

function StatBig({ n, label }: { n: string; label: string }) {
  return (
    <div className="bg-bg p-10 text-center">
      <div className="font-sans font-extrabold text-fg text-7xl leading-none tracking-[-0.04em]">{n}</div>
      <div className="mt-3 font-mono text-[11px] text-muted-2 tracking-widest uppercase">// {label}</div>
    </div>
  )
}
