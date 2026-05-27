import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useLang } from '../contexts/lang'
import { students } from '../data/students'
import { projects } from '../data/projects'

const ease = [0.16, 1, 0.3, 1] as const

export function StudentProfile() {
  const { id } = useParams<{ id: string }>()
  const { lang } = useLang()

  const student = students.find((s) => s.id === id)

  if (!student) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center px-12">
          <p className="font-mono text-[11px] text-accent tracking-widest uppercase mb-4">
            [404 / student not found]
          </p>
          <h1 className="font-sans font-extrabold text-fg text-4xl tracking-tight mb-6">
            {lang === 'sv' ? 'Eleven finns inte' : 'Student not found'}
          </h1>
          <Link
            to="/klassen"
            className="font-mono text-[12px] text-accent hover:text-accent-soft transition-colors"
          >
            {lang === 'sv' ? '← Tillbaka till klassen' : '← Back to the class'}
          </Link>
        </div>
      </main>
    )
  }

  const studentProjects = (student.projects ?? [])
    .map((pid) => projects.find((p) => p.id === pid))
    .filter(Boolean)

  const idx = students.findIndex((s) => s.id === id)

  return (
    <main className="min-h-screen pb-24">
      {/* Back link */}
      <div className="px-12 max-w-[960px] mx-auto pt-28 mb-12">
        <Link
          to="/klassen"
          className="font-mono text-[11px] text-muted-2 hover:text-accent transition-colors tracking-widest uppercase inline-flex items-center gap-2"
        >
          <span className="group-hover:translate-x-[-2px] transition-transform">&larr;</span>
          {lang === 'sv' ? 'Tillbaka till klassen' : 'Back to the class'}
        </Link>
      </div>

      {/* Hero */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease }}
        className="px-12 max-w-[960px] mx-auto mb-16"
      >
        <div className="flex flex-col sm:flex-row items-start gap-8">
          {/* Photo / Initial fallback */}
          <div className="relative w-40 h-52 shrink-0 overflow-hidden border border-border bg-bg-2">
            {student.photo ? (
              <>
                <img
                  src={student.photo}
                  alt={student.fullName}
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ filter: 'saturate(0.92) contrast(1.02)' }}
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-bg/60 to-transparent" />
              </>
            ) : (
              <>
                <div className="absolute inset-0 bg-gradient-to-br from-bg-2 to-bg" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-sans font-black text-fg/[0.1] text-[120px] leading-none tracking-tight select-none">
                    {student.shortName.charAt(0)}
                  </span>
                </div>
              </>
            )}
            <span className="absolute top-2 left-2 z-10 font-mono text-[10px] text-accent tracking-widest bg-bg/70 backdrop-blur-sm px-1.5 py-0.5">
              [{String(idx + 1).padStart(2, '0')} / {String(students.length).padStart(2, '0')}]
            </span>
          </div>

          {/* Name + role + links */}
          <div className="flex-1 min-w-0">
            <div className="font-mono text-[10px] text-muted-2 tracking-widest uppercase mb-2">
              {lang === 'sv' ? 'Elev' : 'Student'} / TE4 25-26
            </div>
            <h1 className="font-sans font-extrabold text-fg text-4xl sm:text-5xl tracking-[-0.02em] mb-2">
              {student.fullName}
            </h1>
            <p className="font-mono text-[12px] text-muted tracking-wide lowercase mb-5">
              {student.role[lang]}
            </p>

            {/* Social links */}
            <div className="flex items-center gap-4 font-mono text-[11px]">
              {student.github && (
                <a
                  href={`https://github.com/${student.github}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-2 hover:text-accent transition-colors flex items-center gap-1.5"
                >
                  GitHub <span>&rarr;</span>
                </a>
              )}
              {student.linkedin && (
                <a
                  href={`https://linkedin.com/in/${student.linkedin}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-2 hover:text-accent transition-colors flex items-center gap-1.5"
                >
                  LinkedIn <span>&rarr;</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Bio */}
      {student.bio && (
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease }}
          className="px-12 max-w-[960px] mx-auto mb-14"
        >
          <div className="font-mono text-[11px] text-muted-2 tracking-widest uppercase mb-4 flex items-center gap-3">
            <span className="text-accent">&middot;</span>
            <span>{lang === 'sv' ? 'Om mig' : 'About me'}</span>
            <span className="flex-1 h-px bg-border" />
          </div>
          <p className="font-sans text-fg-2 text-base leading-relaxed max-w-[60ch]">
            {student.bio[lang]}
          </p>
        </motion.section>
      )}

      {/* Quote */}
      {student.quote && (
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15, ease }}
          className="px-12 max-w-[960px] mx-auto mb-14"
        >
          <p className="font-serif italic text-lg text-fg-2/85 leading-snug border-l-2 border-accent/40 pl-5 max-w-[50ch]">
            &ldquo;{student.quote[lang]}&rdquo;
          </p>
        </motion.section>
      )}

      {/* Tech stack */}
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease }}
        className="px-12 max-w-[960px] mx-auto mb-14"
      >
        <div className="font-mono text-[11px] text-muted-2 tracking-widest uppercase mb-4 flex items-center gap-3">
          <span className="text-accent">&middot;</span>
          <span>{lang === 'sv' ? 'Teknikstack' : 'Tech stack'}</span>
          <span className="flex-1 h-px bg-border" />
        </div>
        <ul className="flex flex-wrap gap-2">
          {student.stack.map((t) => (
            <li
              key={t}
              className="font-mono text-[11px] text-accent border border-accent/50 px-2.5 py-1 tracking-wide lowercase"
            >
              {t}
            </li>
          ))}
        </ul>
      </motion.section>

      {/* Projects */}
      {studentProjects.length > 0 && (
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25, ease }}
          className="px-12 max-w-[960px] mx-auto mb-14"
        >
          <div className="font-mono text-[11px] text-muted-2 tracking-widest uppercase mb-5 flex items-center gap-3">
            <span className="text-accent">&middot;</span>
            <span>{lang === 'sv' ? 'Projekt' : 'Projects'}</span>
            <span className="flex-1 h-px bg-border" />
          </div>
          <ul className="grid grid-cols-1 gap-4">
            {studentProjects.map((p) => {
              if (!p) return null
              return (
                <li
                  key={p.id}
                  className="bg-bg p-7 border border-border hover:border-accent/40 transition-colors"
                >
                  <div className="flex items-center justify-between font-mono text-[10px] text-muted-2 tracking-widest mb-4">
                    <span>@{p.org.toLowerCase()}</span>
                    <span>{p.period}</span>
                  </div>
                  <h3 className="font-sans font-bold text-fg text-2xl tracking-tight mb-2">
                    {p.name}
                  </h3>
                  <p className="font-sans text-fg-2 text-sm leading-relaxed max-w-[50ch] mb-4">
                    {p.tagline[lang]}
                  </p>
                  <p className="font-mono text-[12px] text-muted leading-relaxed max-w-[55ch] mb-5">
                    {p.description[lang]}
                  </p>
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <ul className="flex gap-1.5 flex-wrap">
                      {p.stack.map((s, si) => (
                        <li
                          key={`${p.id}-${si}`}
                          className="font-mono text-[10px] tracking-wider px-2 py-1 border border-accent/50 text-accent"
                        >
                          {s}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center gap-4 font-mono text-[11px] text-muted-2">
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-accent hover:text-accent-soft transition-colors flex items-center gap-1.5"
                      >
                        GitHub <span>&rarr;</span>
                      </a>
                      {p.deployUrl && (
                        <a
                          href={p.deployUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-accent hover:text-accent-soft transition-colors flex items-center gap-1.5"
                        >
                          Live demo <span>&rarr;</span>
                        </a>
                      )}
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        </motion.section>
      )}

      {/* Thesis / Examensarbete */}
      {student.thesis && (
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease }}
          className="px-12 max-w-[960px] mx-auto mb-14"
        >
          <div className="font-mono text-[11px] text-muted-2 tracking-widest uppercase mb-4 flex items-center gap-3">
            <span className="text-accent">&middot;</span>
            <span>{lang === 'sv' ? 'Examensarbete' : 'Thesis'}</span>
            <span className="flex-1 h-px bg-border" />
          </div>
          <div className="bg-bg p-7 border border-border">
            <p className="font-sans text-fg-2 text-base leading-relaxed max-w-[60ch]">
              {student.thesis[lang]}
            </p>
          </div>
        </motion.section>
      )}

      {/* Editable note */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4, ease }}
        className="px-12 max-w-[960px] mx-auto mt-20"
      >
        <div className="border border-dashed border-border/60 p-5">
          <p className="font-mono text-[11px] text-muted-2/70 tracking-wide leading-relaxed">
            {lang === 'sv' ? (
              <>
                Den h&auml;r sidan &auml;r redigerbar &mdash; uppdatera din post i{' '}
                <code className="text-accent/80 bg-bg-2 px-1 py-0.5">src/data/students.ts</code>{' '}
                f&ouml;r att l&auml;gga till bio, foto, projekt och examensarbete.
              </>
            ) : (
              <>
                This page is editable &mdash; update your entry in{' '}
                <code className="text-accent/80 bg-bg-2 px-1 py-0.5">src/data/students.ts</code>{' '}
                to add your bio, photo, projects, and thesis.
              </>
            )}
          </p>
        </div>
      </motion.div>
    </main>
  )
}
