import { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLang } from '../contexts/lang'
import type { Student } from '../data/students'

interface Props {
  student: Student | null
  onClose: () => void
}

export function StudentModal({ student, onClose }: Props) {
  const { lang } = useLang()
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!student) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [student, onClose])

  return (
    <AnimatePresence>
      {student && (
        <motion.div
          ref={overlayRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-bg/80 backdrop-blur-md"
          onClick={(e) => {
            if (e.target === overlayRef.current) onClose()
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[560px] bg-bg border border-border overflow-hidden max-h-[90vh] overflow-y-auto"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 font-mono text-[11px] text-muted-2 hover:text-accent transition-colors tracking-widest uppercase bg-bg/70 backdrop-blur-sm px-2 py-1 border border-border"
            >
              [ESC]
            </button>

            {student.photo && (
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={student.photo}
                  alt={student.fullName}
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ filter: 'saturate(0.92) contrast(1.02)' }}
                />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-bg to-transparent" />
              </div>
            )}

            <div className="p-8 pt-5">
              <h2 className="font-sans font-extrabold text-fg text-2xl tracking-tight mb-1">
                {student.fullName}
              </h2>
              <p className="font-mono text-[11px] text-muted tracking-wide lowercase mb-5">
                {student.role[lang]}
              </p>

              {student.bio && (
                <p className="font-mono text-[12px] text-fg-2/85 leading-relaxed mb-5">
                  {student.bio[lang]}
                </p>
              )}

              {student.quote && (
                <p className="font-serif italic text-[14px] text-fg-2/85 leading-snug border-l-2 border-accent/40 pl-4 mb-5">
                  "{student.quote[lang]}"
                </p>
              )}

              <ul className="flex flex-wrap gap-1.5 mb-5">
                {student.stack.map((t) => (
                  <li
                    key={t}
                    className="font-mono text-[10px] text-muted-2 border border-border px-1.5 py-0.5 tracking-wide lowercase"
                  >
                    {t}
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-4 font-mono text-[11px] border-t border-border pt-4">
                {student.github && (
                  <a
                    href={`https://github.com/${student.github}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted-2 hover:text-accent transition-colors"
                  >
                    GitHub →
                  </a>
                )}
                {student.linkedin && (
                  <a
                    href={`https://linkedin.com/in/${student.linkedin}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted-2 hover:text-accent transition-colors"
                  >
                    LinkedIn →
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
