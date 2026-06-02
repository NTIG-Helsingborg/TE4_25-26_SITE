import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useLang } from '../contexts/lang'
import type { AplPlace } from '../data/aplPlace'

interface Props {
  open: boolean
  onClose: () => void
  places: AplPlace[]
  region: { sv: string; en: string }
  ariaLabel: { sv: string; en: string }
  footer?: { sv: string; en: string }
  contactLabel?: { sv: string; en: string }
}

function websiteHref(url: string) {
  return url.startsWith('http') ? url : `https://${url}`
}

export function AplHostsModal({
  open,
  onClose,
  places,
  region,
  ariaLabel,
  footer,
  contactLabel = { sv: 'Handledare', en: 'Tutor' },
}: Props) {
  const { lang } = useLang()

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={ariaLabel[lang]}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-bg/95 backdrop-blur-md p-4 md:p-8"
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              onClose()
            }}
            aria-label={lang === 'sv' ? 'stäng' : 'close'}
            className="absolute top-5 right-5 z-20 font-mono text-[12px] tracking-widest uppercase text-muted-2 hover:text-accent border border-border hover:border-accent/50 px-3 py-1.5 transition-colors"
          >
            {lang === 'sv' ? 'stäng' : 'close'} ✕
          </button>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl max-h-[88vh] overflow-y-auto border border-border bg-bg"
          >
            <header className="sticky top-0 z-10 border-b border-border bg-bg/95 backdrop-blur-sm px-6 py-5">
              <p className="font-mono text-[10px] tracking-widest text-accent uppercase mb-1">
                {region[lang]}
              </p>
              <h2 className="font-sans font-bold text-fg text-2xl md:text-3xl tracking-tight">
                {lang === 'sv' ? 'APL-värdar' : 'APL hosts'}
              </h2>
            </header>

            <ul className="divide-y divide-border">
              {places.map((place) => (
                <li key={place.id} className="px-6 py-5">
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                    <div>
                      <h3 className="font-sans font-semibold text-fg text-lg tracking-tight">
                        {place.company[lang]}
                      </h3>
                      {place.subtitle && (
                        <p className="font-mono text-[11px] text-muted-2 tracking-wider mt-0.5 max-w-[42ch]">
                          {place.subtitle[lang]}
                        </p>
                      )}
                    </div>
                    {place.students && (
                      <span className="font-mono text-[11px] text-accent tracking-widest uppercase shrink-0">
                        {place.students}
                      </span>
                    )}
                  </div>

                  {(place.contact || place.linkedIn || place.phone || place.email || place.website) && (
                    <p className="font-mono text-[12px] text-muted space-y-1">
                      {place.contact && (
                        <span className="block">
                          {contactLabel[lang]}: {place.contact}
                        </span>
                      )}
                      {place.phone && <span className="block">{place.phone}</span>}
                      {place.email && (
                        <a
                          href={`mailto:${place.email}`}
                          className="block text-accent hover:underline"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {place.email}
                        </a>
                      )}
                      {place.website && (
                        <a
                          href={websiteHref(place.website)}
                          target="_blank"
                          rel="noreferrer"
                          className="block text-accent hover:underline"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {place.website.replace(/^https?:\/\//, '')}
                        </a>
                      )}
                      {place.linkedIn && (
                        <a
                          href={place.linkedIn}
                          target="_blank"
                          rel="noreferrer"
                          className="block text-accent hover:underline"
                          onClick={(e) => e.stopPropagation()}
                        >
                          LinkedIn
                        </a>
                      )}
                    </p>
                  )}
                </li>
              ))}
            </ul>

            {footer && (
              <p className="px-6 py-4 border-t border-border font-mono text-[11px] text-muted-2 tracking-wider">
                {footer[lang]}
              </p>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
