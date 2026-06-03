import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useLang } from '../contexts/lang'
import { students } from '../data/students'
import { projects } from '../data/projects'
import { asset } from '../lib/asset'
import { StudentAplSection } from '../components/StudentAplSection'

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
            to="/#klassen"
            className="font-mono text-[12px] text-accent hover:text-accent-soft transition-colors"
          >
            {lang === 'sv' ? '← Tillbaka till klassen' : '← Back to the class'}
          </Link>
        </div>
      </main>
    )
  }

  // One unified project list: NTI-org group projects (from projects.ts, by id)
  // first, then the student's personal/solo repos. Rendered under a single
  // "Projects" heading with one consistent card style.
  const orgProjects = (student.projects ?? [])
    .map((pid) => projects.find((p) => p.id === pid))
    .filter((p): p is NonNullable<typeof p> => Boolean(p))
    .map((p) => ({
      key: p.id,
      name: p.name,
      url: p.url,
      deployUrl: p.deployUrl,
      tagline: p.tagline,
      meta: `@${p.org.toLowerCase()}`,
      stack: p.stack,
      period: p.period,
    }))

  const personalProjects = (student.personalProjects ?? []).map((p) => ({
    key: p.name,
    name: p.name,
    url: p.url,
    deployUrl: p.deployUrl,
    tagline: p.tagline,
    meta: p.primaryLanguage,
    stack: p.stack,
    period: p.period,
  }))

  const allProjects = [...orgProjects, ...personalProjects]

  const idx = students.findIndex((s) => s.id === id)

  return (
    <main className="min-h-screen pb-24">
      {/* Back link */}
      <div className="px-12 max-w-[960px] mx-auto pt-28 mb-12">
        <Link
          to="/#klassen"
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
                  src={asset(student.photo)}
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

      {/* Certificates */}
      {student.certificates && student.certificates.length > 0 && (
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25, ease }}
          className="px-12 max-w-[960px] mx-auto mb-14"
        >
          <div className="font-mono text-[11px] text-muted-2 tracking-widest uppercase mb-4 flex items-center gap-3">
            <span className="text-accent">&middot;</span>
            <span>{lang === 'sv' ? 'Certifikat' : 'Certificates'}</span>
            <span className="flex-1 h-px bg-border" />
          </div>
          <ul className="flex flex-wrap gap-2">
            {student.certificates.map((c) => (
              <li
                key={c}
                className="font-mono text-[11px] text-fg-2 border border-border bg-bg-2 px-2.5 py-1 tracking-wide flex items-center gap-1.5"
              >
                <span className="text-accent text-[10px]">✓</span>
                {c}
              </li>
            ))}
          </ul>
        </motion.section>
      )}

      {/* APL */}
      <StudentAplSection student={student} />

      {/* Projects — NTI-org group projects + personal/solo repos, one list */}
      {allProjects.length > 0 && (
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
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {allProjects.map((p) => (
              <li
                key={p.key}
                className="bg-bg p-6 border border-border hover:border-accent/40 transition-colors flex flex-col"
              >
                <div className="flex items-center justify-between font-mono text-[10px] text-muted-2 tracking-widest mb-3">
                  <span>{p.meta}</span>
                  <span>{p.period}</span>
                </div>
                <h3 className="font-sans font-bold text-fg text-xl tracking-tight mb-2">
                  {p.name}
                </h3>
                <p className="font-mono text-[12px] text-muted leading-relaxed mb-5 flex-1">
                  {p.tagline[lang]}
                </p>
                <div className="flex items-center justify-between flex-wrap gap-3">
                  <ul className="flex gap-1.5 flex-wrap">
                    {p.stack.map((s, si) => (
                      <li
                        key={`${p.key}-${si}`}
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
            ))}
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

    </main>
  )
}
