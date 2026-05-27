import { motion } from 'framer-motion'

interface Props {
  text: { sv: string; en: string }
  attribution?: { sv: string; en: string }
  variant?: 'pull' | 'film-card'
}

import { useLang } from '../contexts/lang'

/**
 * Cinematic quote / pull-quote divider between sections.
 * "pull" — big italic serif on dark with accent rule above.
 * "film-card" — film-still framing with quote inside letterbox.
 */
export function Quote({ text, attribution, variant = 'pull' }: Props) {
  const { lang } = useLang()

  if (variant === 'film-card') {
    return (
      <section className="relative my-32 px-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15% 0px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[1180px] mx-auto relative overflow-hidden bg-bg-2/40 backdrop-blur-sm"
        >
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: 'url(/nti-bg.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'saturate(0.55) brightness(0.5) hue-rotate(-12deg)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-transparent" />
          <div className="relative py-24 px-12 md:px-20 text-center">
            <span className="font-mono text-[10px] tracking-[0.32em] text-accent uppercase">— intermission —</span>
            <blockquote
              className="font-serif italic font-light mt-10 text-fg text-[clamp(28px,3.2vw,52px)] leading-[1.18] tracking-[-0.01em] max-w-[36ch] mx-auto"
              style={{ fontVariationSettings: '"opsz" 144' }}
            >
              “{text[lang]}”
            </blockquote>
            {attribution && (
              <cite className="not-italic block mt-8 font-mono text-[11px] tracking-widest text-muted-2 uppercase">
                — {attribution[lang]}
              </cite>
            )}
          </div>
        </motion.div>
      </section>
    )
  }

  return (
    <section className="relative my-28 px-12">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-15% 0px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-[64ch] mx-auto text-center"
      >
        <span className="inline-block w-16 h-px bg-accent mb-8" />
        <blockquote
          className="font-serif italic font-light text-fg text-[clamp(24px,2.6vw,40px)] leading-[1.22] tracking-[-0.005em]"
          style={{ fontVariationSettings: '"opsz" 144' }}
        >
          “{text[lang]}”
        </blockquote>
        {attribution && (
          <cite className="not-italic block mt-6 font-mono text-[11px] tracking-widest text-muted-2 uppercase">
            — {attribution[lang]}
          </cite>
        )}
      </motion.div>
    </section>
  )
}
