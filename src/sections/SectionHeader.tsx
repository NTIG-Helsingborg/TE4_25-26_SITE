import { motion } from 'framer-motion'
import { useLang } from '../contexts/LangContext'

interface Props {
  chapter: { sv: string; en: string }
  title: { sv: string; en: string }
  lede?: { sv: string; en: string }
  timecode?: string
  anchorId: string
}

export function SectionHeader({ chapter, title, lede, timecode, anchorId }: Props) {
  const { lang } = useLang()
  const titleLines = title[lang].split('\n')

  return (
    <header id={anchorId} className="relative pt-32 pb-16 px-12 max-w-[1440px] mx-auto scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-15% 0px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex justify-between items-baseline mb-14 font-mono text-[11px] tracking-widest text-muted-2 uppercase"
      >
        <span className="flex items-center gap-4">
          <span className="inline-block w-10 h-px bg-accent shadow-[0_0_8px_rgba(255,45,135,0.7)]" />
          <span className="text-accent font-semibold">{chapter[lang]}</span>
        </span>
        {timecode && <span className="text-muted-2/70">TC {timecode}</span>}
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-15% 0px' }}
        transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
        className="font-sans font-extrabold uppercase tracking-[-0.045em] leading-[0.86] text-fg text-[clamp(56px,8.5vw,128px)] glow-halo"
      >
        {titleLines.map((line, i) => (
          <span key={i} className="block">
            {/* Highlight final word/punctuation pink */}
            {line.includes('.') ? (
              <>
                {line.replace(/\.$/, '')}
                <span className="text-accent">.</span>
              </>
            ) : (
              line
            )}
          </span>
        ))}
      </motion.h2>

      {lede && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15% 0px' }}
          transition={{ duration: 0.6, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 max-w-[64ch] font-mono text-[14px] leading-[1.65] text-muted"
        >
          {lede[lang]}
        </motion.p>
      )}
    </header>
  )
}
