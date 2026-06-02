export interface TimelineEvent {
  id: string
  month: string
  date: { sv: string; en: string }
  title: { sv: string; en: string }
  description: { sv: string; en: string }
  brief?: { sv: string; en: string }
  tag?: 'apl' | 'project' | 'event' | 'cert' | 'end'
  href?: string
}

/**
 * Timeline reflects the assignment categories we worked through this year.
 * Titles describe the *kind* of project, not the specific team deliverable
 * (specific names live in the projekt section). `href` makes rows clickable.
 */
export const timeline: TimelineEvent[] = [
  {
    id: 'oct-api',
    month: 'okt',
    date: { sv: 'oktober 2025', en: 'October 2025' },
    title: { sv: 'API-projekt', en: 'API project' },
    brief: {
      sv: 'Bygg en webbapp som använder ett externt API.',
      en: 'Build a web app that consumes an external API.',
    },
    description: {
      sv: 'Klassens version av uppgiften: RoastBattles — React + Vite, graffitistilad UI, AI-genererade roasts.',
      en: 'Our class take on the assignment: RoastBattles — React + Vite, graffiti-styled UI, AI-generated roasts.',
    },
    tag: 'project',
    href: '/projekt#proj-roastbattles',
  },
  {
    id: 'nov-game',
    month: 'nov',
    date: { sv: 'november 2025', en: 'November 2025' },
    title: { sv: 'Spel med en tvist', en: 'Game with a twist' },
    brief: {
      sv: 'Utveckla ett spel — en egen mekanik som tvist.',
      en: 'Develop a game with a unique mechanic as a twist.',
    },
    description: {
      sv: 'Vår version: Back-To-Zero — Berserk-inspirerad 2D roguelike i Unity / C#. Ditt blod är din mana.',
      en: 'Our take: Back-To-Zero — Berserk-inspired 2D roguelike in Unity / C#. Your blood is your mana.',
    },
    tag: 'project',
    href: '/projekt#proj-back-to-zero',
  },
  {
    id: 'dec-jetson',
    month: 'dec',
    date: { sv: 'december 2025', en: 'December 2025' },
    title: { sv: 'Jetson Nano med kamera', en: 'Jetson Nano + camera' },
    brief: {
      sv: 'Lokalt hosta AI på Jetson Nano som detekterar saker via kamera.',
      en: 'Locally host AI on a Jetson Nano that detects things via camera.',
    },
    description: {
      sv: 'Vår version: AI-Overwatch — edge-AI på Jetson, OpenCV-kamerapipeline, dashboard i Vue.',
      en: 'Our take: AI-Overwatch — edge AI on Jetson, OpenCV camera pipeline, Vue dashboard.',
    },
    tag: 'project',
    href: '/projekt#proj-ai-overwatch',
  },
  {
    id: 'jan-hetchhacks',
    month: 'jan',
    date: { sv: 'januari 2026', en: 'January 2026' },
    title: { sv: 'HetchHacks 2026', en: 'HetchHacks 2026' },
    brief: {
      sv: 'Hackathon i Helsingborg — 48h med stora idéer.',
      en: 'Hackathon in Helsingborg — 48h of big ideas.',
    },
    description: {
      sv: 'Klassen splittras i lag, river en deadline och bygger något skarpt.',
      en: 'The class splits into teams, tears through a deadline, ships something real.',
    },
    tag: 'event',
    href: 'https://hetchhacks.com',
  },
  {
    id: 'feb-jscert',
    month: 'feb',
    date: { sv: 'februari 2026', en: 'February 2026' },
    title: { sv: 'JavaScript-certifiering', en: 'JavaScript certification' },
    brief: {
      sv: 'JavaScript-certet.',
      en: 'The JavaScript cert.',
    },
    description: {
      sv: 'Första certet i raden. Klassrum till tentor till godkänd.',
      en: 'First cert in the run. Classroom through exams to pass.',
    },
    tag: 'cert',
  },
  {
    id: 'mar-apl-se',
    month: 'mar',
    date: { sv: 'mars 2026', en: 'March 2026' },
    title: { sv: 'APL · Sverige', en: 'APL · Sweden' },
    brief: {
      sv: 'Sju veckor arbetsplatsförlagt lärande på riktiga företag i Sverige.',
      en: 'Seven weeks of work placement at real companies in Sweden.',
    },
    description: {
      sv: 'Vi gick från klassrum till skarpa team. Olika roller, samma deadlines.',
      en: 'We went from classroom to real teams. Different roles, same deadlines.',
    },
    tag: 'apl',
    href: '/apl',
  },
  {
    id: 'apr-apl-mt',
    month: 'apr',
    date: { sv: 'april 2026', en: 'April 2026' },
    title: { sv: 'APL · Malta', en: 'APL · Malta' },
    brief: {
      sv: 'Tre veckor APL i Malta — annan sol, samma deadlines.',
      en: 'Three weeks of APL in Malta — different sun, same deadlines.',
    },
    description: {
      sv: 'Valletta och Sliema. Internationell arbetskultur, engelska i pendeln.',
      en: 'Valletta and Sliema. International work culture, English in the office.',
    },
    tag: 'apl',
    href: '/apl',
  },
  {
    id: 'may-yearsite',
    month: 'maj',
    date: { sv: 'maj 2026', en: 'May 2026' },
    title: { sv: 'Den här årssidan', en: 'This year site' },
    brief: {
      sv: 'En sida som dokumenterar året.',
      en: 'A site documenting the year.',
    },
    description: {
      sv: 'Du läser den. React + Vite + Tailwind + framer-motion, hostad någonstans.',
      en: 'You are reading it. React + Vite + Tailwind + framer-motion, hosted somewhere.',
    },
    tag: 'event',
  },
  {
    id: 'jun-avslut',
    month: 'jun',
    date: { sv: 'juni 2026', en: 'June 2026' },
    title: { sv: 'Avslut', en: 'Graduation' },
    brief: {
      sv: 'Sista skoldagen. Hatt på. Slutet.',
      en: 'Last school day. Cap on. The end.',
    },
    description: {
      sv: 'Tre år på NTI Gymnasiet Helsingborg. Avslut. Vi ses på andra sidan.',
      en: 'Three years at NTI Gymnasiet Helsingborg. That is a wrap. See you on the other side.',
    },
    tag: 'end',
    href: '/om',
  },
]
