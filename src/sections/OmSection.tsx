import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { useLang } from '../contexts/LangContext'
import { strings } from '../i18n/strings'
import { students } from '../data/students'
import { projects } from '../data/projects'
import { Brand } from '../components/Brand'

export function OmSection() {
  const { lang } = useLang()

  return (
    <section id="om" className="relative mt-32 px-12 pt-24 pb-24 max-w-[960px] mx-auto scroll-mt-20">
      <motion.header
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-10% 0px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mb-24"
      >
        <div className="font-mono text-[11px] text-accent tracking-[0.3em] uppercase mb-6">
          — {strings.om.chapter[lang]} —
        </div>
        <div className="font-sans font-black text-fg text-6xl md:text-7xl tracking-[-0.045em] uppercase">TE4_25–26</div>
        <div className="mt-4 font-mono text-[12px] text-muted-2 tracking-widest uppercase">
          NTI Gymnasiet · Helsingborg · Sverige
        </div>
      </motion.header>

      <Credit label={strings.om.studio[lang]}>
        <Brand size="lg" linkToHome={false} />
      </Credit>

      <Credit label={strings.om.year[lang]}>
        <div className="font-mono text-fg text-xl">2025 — 2026</div>
      </Credit>

      <Credit label={strings.om.runtime[lang]}>
        <div className="font-mono text-fg text-xl">{strings.om.runtimeValue[lang]}</div>
      </Credit>

      <Credit label={strings.om.location[lang]}>
        <div className="font-mono text-fg text-xl">Helsingborg · Malta</div>
      </Credit>

      <Credit label={strings.om.cast[lang]}>
        <ul className="space-y-2 font-sans text-fg text-lg">
          {students.map((s) => (
            <li key={s.id} className="flex items-baseline justify-between gap-6 border-b border-border/50 pb-2">
              <span className="font-semibold">{s.fullName}</span>
              <span className="font-mono text-[11px] text-muted-2 tracking-widest uppercase">{s.role[lang]}</span>
            </li>
          ))}
        </ul>
      </Credit>

      <Credit label={strings.om.featured[lang]}>
        <ul className="space-y-2 font-sans text-fg text-lg">
          {projects.filter((p) => !p.isOpenSlot).map((p) => (
            <li key={p.id} className="flex items-baseline justify-between gap-6 border-b border-border/50 pb-2">
              <span className="font-semibold">{p.name}</span>
              <span className="font-mono text-[11px] text-muted-2 tracking-widest uppercase">{p.stack.join(' · ')}</span>
            </li>
          ))}
        </ul>
      </Credit>

      <Credit label={strings.om.directedBy[lang]}>
        <div className="font-sans text-fg text-xl">{lang === 'sv' ? 'Klassen själv.' : 'The class itself.'}</div>
      </Credit>

      <Credit label={lang === 'sv' ? 'Handledare' : 'Mentors'}>
        <ul className="space-y-2 font-sans text-fg text-base">
          <li className="flex items-baseline justify-between gap-6 border-b border-border/50 pb-2">
            <span className="font-semibold">NTI Gymnasiet Helsingborg</span>
            <span className="font-mono text-[11px] text-muted-2 tracking-widest uppercase">
              {lang === 'sv' ? 'lärarkår · te4' : 'faculty · te4'}
            </span>
          </li>
          <li className="flex items-baseline justify-between gap-6 border-b border-border/50 pb-2">
            <span className="font-semibold">{lang === 'sv' ? 'APL-värdar i Sverige' : 'APL hosts in Sweden'}</span>
            <span className="font-mono text-[11px] text-muted-2 tracking-widest uppercase">
              {lang === 'sv' ? 'apl · sverige' : 'apl · sweden'}
            </span>
          </li>
          <li className="flex items-baseline justify-between gap-6 border-b border-border/50 pb-2">
            <span className="font-semibold">{lang === 'sv' ? 'APL-värdar i Malta' : 'APL hosts in Malta'}</span>
            <span className="font-mono text-[11px] text-muted-2 tracking-widest uppercase">
              {lang === 'sv' ? 'apl · malta' : 'apl · malta'}
            </span>
          </li>
        </ul>
      </Credit>

      <Credit label={lang === 'sv' ? 'Certifikat' : 'Certifications'}>
        <ul className="space-y-2 font-sans text-fg text-base">
          <li className="flex items-baseline justify-between gap-6 border-b border-border/50 pb-2">
            <span className="font-semibold">JavaScript</span>
            <span className="font-mono text-[11px] text-muted-2 tracking-widest uppercase">feb 2026</span>
          </li>
          <li className="flex items-baseline justify-between gap-6 border-b border-border/50 pb-2">
            <span className="font-semibold">HTML + CSS</span>
            <span className="font-mono text-[11px] text-muted-2 tracking-widest uppercase">sep 2025</span>
          </li>
        </ul>
      </Credit>

      <Credit label={lang === 'sv' ? 'Verktyg' : 'Toolchain'}>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 font-mono text-[12px] text-fg-2">
          {['react', 'vite', 'typescript', 'unity', 'c#', 'vue', 'tailwind', 'framer motion', 'github'].map((t) => (
            <li key={t} className="border border-border/60 px-3 py-1.5 tracking-wider uppercase">{t}</li>
          ))}
        </ul>
      </Credit>

      <Credit label={strings.om.thanks[lang]}>
        <p className="font-sans text-fg-2 text-base leading-relaxed max-w-[58ch] mb-6">
          {lang === 'sv'
            ? 'Lärarna på NTI Gymnasiet Helsingborg, alla APL-handledare i Sverige och Malta, och föräldrarna som stod ut med oss när vi kodade till 03:00.'
            : 'Teachers at NTI Gymnasiet Helsingborg, every APL supervisor in Sweden and Malta, and the parents who put up with us coding until 3 AM.'}
        </p>
        <p className="font-sans italic text-muted text-sm leading-relaxed max-w-[58ch]">
          {lang === 'sv'
            ? 'Och till klassen — för att ni kom till skolan när det räknades. Det var en bra årgång.'
            : 'And to the class — for showing up when it counted. It was a good year.'}
        </p>
      </Credit>

      <Credit label={lang === 'sv' ? 'Kolofon' : 'Colophon'}>
        <p className="font-mono text-[12px] text-muted leading-relaxed max-w-[58ch]">
          {lang === 'sv'
            ? 'Byggd i React + Vite + Tailwind v4. Typografi: Geist (sans + mono) och Fraunces (citat). Designspråk: dark editorial med NTI-magenta som accent.'
            : 'Built with React + Vite + Tailwind v4. Type: Geist (sans + mono) and Fraunces (quotes). Design language: dark editorial with NTI magenta as accent.'}
        </p>
      </Credit>

      <div className="mt-32 text-center">
        <div className="font-sans font-black text-fg text-[clamp(80px,12vw,180px)] tracking-[-0.05em] leading-none">{strings.om.fin[lang]}</div>
        <div className="mt-8 font-mono text-[11px] text-muted-2 tracking-widest uppercase">© 2026 · NTIG-Helsingborg · MIT</div>
      </div>
    </section>
  )
}

function Credit({ label, children }: { label: string; children: ReactNode }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-6 md:gap-12 py-10 border-t border-border"
    >
      <div className="font-mono text-[11px] text-muted-2 tracking-[0.18em] uppercase pt-2">{label}</div>
      <div>{children}</div>
    </motion.section>
  )
}
