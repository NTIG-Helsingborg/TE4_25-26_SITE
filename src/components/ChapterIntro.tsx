import { motion } from 'framer-motion'
import { useLang } from '../contexts/lang'

interface Props {
  chapter: { sv: string; en: string }
  title: { sv: string; en: string }
  lede: { sv: string; en: string }
  timecode?: string
}

export function ChapterIntro({ chapter, title, lede, timecode = '00:00:14:08' }: Props) {
  const { lang } = useLang()
  const titleText = title[lang]
  const lines = titleText.split('\n')

  return (
    <header className="relative pt-20 pb-16 px-12 max-w-[1440px] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="flex justify-between items-baseline mb-12 font-mono text-[11px] tracking-widest text-muted-2 uppercase"
      >
        <span className="flex items-center gap-3">
          <span className="inline-block w-6 h-px bg-accent" />
          <span className="text-accent">{chapter[lang]}</span>
        </span>
        <span>TC {timecode}</span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
        className="font-sans font-extrabold uppercase tracking-[-0.045em] leading-[0.88] text-fg text-[clamp(64px,9vw,140px)]"
      >
        {lines.map((line, i) => (
          <span key={i} className="block">
            {line}
          </span>
        ))}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
        className="mt-10 max-w-[58ch] font-mono text-[14px] leading-[1.65] text-muted"
      >
        {lede[lang]}
      </motion.p>
    </header>
  )
}
