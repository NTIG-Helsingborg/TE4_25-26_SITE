import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { useLang } from '../contexts/lang'
import { strings } from '../i18n/strings'
import { students } from '../data/students'
import { asset } from '../lib/asset'
import { Counter } from '../components/Counter'
import { KlassenSection } from '../sections/KlassenSection'
import { ProjektSection } from '../sections/ProjektSection'
import { AplSection } from '../sections/AplSection'
import { TidslinjeSection } from '../sections/TidslinjeSection'
import { GalleriSection } from '../sections/GalleriSection'
import { OmSection } from '../sections/OmSection'
import { Quote } from '../components/Quote'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Home — static cinematic hero (no scroll effects on the hero itself),
 * then chapter sections inline. Hero is one viewport tall; user scrolls
 * naturally past it into the rest of the site.
 */
export function Home() {
  const { lang } = useLang()
  const reduce = useReducedMotion()
  const location = useLocation()

  // Scroll to URL hash anchor after mount (handles /#tidslinje etc.)
  useEffect(() => {
    if (!location.hash) return
    const id = location.hash.replace(/^#/, '')
    // Wait one frame for sections to render
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' })
      })
    })
  }, [location.hash])

  return (
    <main className="relative">
      <a
        href="#klassen"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[80] focus:bg-accent focus:text-bg focus:px-3 focus:py-2 focus:font-mono focus:text-xs focus:tracking-wider"
      >
        {strings.ui.skip[lang]}
      </a>

      {/* === HERO STAGE — static, class photo as atmospheric background === */}
      <section
        className="relative h-screen flex items-center justify-center overflow-hidden"
        aria-label={strings.home.classOf[lang]}
      >
        {/* Class photo background — gives the hero warmth and identity */}
        <div aria-hidden="true" className="absolute inset-0">
          <img
            src={asset('/photos/events/uppstart-aug.jpg')}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            style={{ filter: 'saturate(0.4) contrast(1.1) brightness(0.28)' }}
          />
          {/* Heavy dark overlay + pink atmospheric glow */}
          <div className="absolute inset-0 bg-bg/65" />
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 900px 600px at 80% 20%, color-mix(in oklch, var(--color-accent) 18%, transparent) 0%, transparent 55%), radial-gradient(ellipse 800px 600px at 10% 80%, color-mix(in oklch, var(--color-purple-glow) 22%, transparent) 0%, transparent 55%)',
            }}
          />
          {/* Bottom fade to seamless transition */}
          <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-bg to-transparent" />
        </div>


        {/* HUD corners — tucked just below the nav */}
        <div className="absolute top-6 left-12 z-30 font-mono text-[10px] tracking-widest text-muted-2 uppercase flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-accent rounded-full blink shadow-[0_0_6px_rgba(255,45,135,0.8)]" />
            <span className="text-accent">REC</span>
          </span>
          <span className="w-px h-3 bg-border" />
          <span className="text-muted-2/70">TE4 · 25/26</span>
        </div>
        <div className="absolute top-6 right-12 z-30 font-mono text-[10px] tracking-widest text-muted-2 uppercase">
          <span className="text-accent">●</span> NTIG · HBG · MAJ 2026
        </div>

        {/* Hero content */}
        <div className="relative z-20 flex flex-col items-center text-center px-8">
          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans font-extrabold uppercase tracking-[-0.05em] leading-[0.86] text-[clamp(64px,10.5vw,168px)] glow-halo"
          >
            <span className="block text-fg">{strings.home.title1[lang]}</span>
            <span className="block text-accent drop-shadow-[0_0_40px_rgba(255,45,135,0.25)]">
              {strings.home.title2[lang]}
            </span>
            <span className="block text-fg">
              {strings.home.title3[lang].replace(/\.$/, '')}
              <span className="text-accent">.</span>
            </span>
          </motion.h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 max-w-[54ch] font-mono text-[13px] leading-[1.65] text-muted"
          >
            {lang === 'sv'
              ? 'Vi är elva elever på fjärde tekniska året på NTI Gymnasiet Helsingborg. Under tio månader byggde vi spel, AI-agenter och dashboards — med en hel del kaffe längs vägen. Det här är vad vi skapade.'
              : 'We are eleven students in our fourth technical year at NTI Gymnasiet Helsingborg. Over ten months we built games, AI agents, and dashboards — fuelled by a fair amount of coffee. This is what we made.'}
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex items-baseline gap-8 font-mono text-muted-2"
          >
            <Stat n={students.length} label={strings.home.stats.students[lang]} delay={0.9} />
            <Dot />
            {/* Featured projects in the NTIG org + the personal repos the class
                shipped this year (see Trello "Länk till projekt..."): ~10 total. */}
            <Stat n={10} suffix="+" label={strings.home.stats.projects[lang]} delay={1.05} />
            <Dot />
            <Stat n={10} label={strings.home.stats.aplWeeks[lang]} delay={1.2} />
          </motion.div>
        </div>

        {/* Scroll cue — small, fixed at bottom of letterbox */}
        {!reduce && (
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 hidden [@media(min-height:900px)]:flex flex-col items-center gap-2">
            <span className="font-mono text-[10px] tracking-[0.3em] text-muted-2/70 uppercase">
              {lang === 'sv' ? 'scrolla' : 'scroll'}
            </span>
            <span className="bob font-mono text-accent text-base">↓</span>
          </div>
        )}
      </section>

      {/* === CHAPTER SECTIONS INLINE === */}
      <KlassenSection />

      <Quote
        text={{
          sv: 'Elva personer, en uppgift i taget, och ett helt år av att lista ut hur man bygger saker tillsammans.',
          en: 'Eleven people, one brief at a time, and a whole year of figuring out how to build things together.',
        }}
        attribution={{ sv: 'TE4_25-26 · klassen', en: 'TE4_25-26 · the class' }}
        variant="film-card"
      />

      <ProjektSection />

      <Quote
        text={{
          sv: '’Det borde fungera’ - sista orden innan katastrof.',
          en: '"It should work" - the last words before disaster.',
        }}
        attribution={{ sv: 'En anonym i klassen', en: 'Someone in the class' }}
      />

      <AplSection />
      <TidslinjeSection />

      <Quote
        text={{
          sv: 'Internationell arbetslivserfarenhet låter bättre än ‘vi satt med laptops i värmen’.', 
          /*
          Andra quotes:
          “Vi åkte till Malta för erfarenheten. Och solen. Mest solen.”
          “Vi lärde oss att deadlines fortfarande existerar utomlands.”
          “Vi började som elever och slutade som gratis arbetskraft.”
          */
          en: 'International work experience sounds better than ‘we sat with laptops in the heat’.',
        }}
        attribution={{ sv: 'APL · vår 2026', en: 'APL · spring 2026' }}
      />

      <GalleriSection />
      <OmSection />

      {/* Deep links footer */}
      <section className="px-12 pb-24 max-w-[1440px] mx-auto">
        <div className="font-mono text-[10px] tracking-widest text-muted-2 uppercase mb-4">— deep links —</div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-border border border-border text-sm">
          <DeepLink to="/klassen" label={strings.nav.klassen[lang]} />
          <DeepLink to="/projekt" label={strings.nav.projekt[lang]} />
          <DeepLink to="/apl" label={strings.nav.apl[lang]} />
          <DeepLink to="/tidslinje" label={strings.nav.tidslinje[lang]} />
          <DeepLink to="/galleri" label={strings.nav.galleri[lang]} />
          <DeepLink to="/om" label={strings.nav.om[lang]} />
        </div>
      </section>
    </main>
  )
}

function Stat({ n, label, suffix, pad = 0, delay = 0 }: { n: number; label: string; suffix?: string; pad?: number; delay?: number }) {
  return (
    <div className="flex flex-col items-center gap-1.5">
      <span className="font-sans font-extrabold text-fg text-[clamp(28px,2.8vw,40px)] leading-none tracking-tight">
        <Counter to={n} pad={pad} suffix={suffix} delay={delay} />
      </span>
      <span className="font-mono text-[10px] tracking-widest uppercase text-muted-2/80">{label}</span>
    </div>
  )
}

function Dot() {
  return <span className="block w-1 h-1 rounded-full bg-accent/40 self-center" aria-hidden="true" />
}

function DeepLink({ to, label }: { to: string; label: string }) {
  return (
    <Link
      to={to}
      className="bg-bg px-4 py-3 font-mono text-[11px] uppercase tracking-widest text-muted-2 hover:bg-bg-2 hover:text-fg transition-colors"
    >
      {label} →
    </Link>
  )
}
