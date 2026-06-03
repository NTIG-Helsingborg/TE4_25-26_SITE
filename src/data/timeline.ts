export interface TimelineEvent {
  id: string
  month: string
  date: { sv: string; en: string }
  title: { sv: string; en: string }
  description: { sv: string; en: string }
  brief?: { sv: string; en: string }
  tag?: 'intro' | 'apl' | 'project' | 'event' | 'cert' | 'end'
  href?: string
}

/**
 * Timeline reflects the assignment categories we worked through this year.
 * Titles describe the *kind* of project, not the specific team deliverable
 * (specific names live in the projekt section). `href` makes rows clickable.
 */
export const timeline: TimelineEvent[] = [
  {
    id: 'aug-intro',
    month: 'aug',
    date: { sv: 'augusti 2025', en: 'August 2025' },
    title: { sv: 'Intro', en: 'Intro' },
    brief: {
      sv: 'TE4 startar — elva elever, ett klassrum, ett år framför oss.',
      en: 'TE4 begins — eleven students, one classroom, one year ahead.',
    },
    description: {
      sv: 'Uppstart på NTI Gymnasiet Helsingborg. Vi lär känna klassen, verktygen och tempot som ska följa oss från augusti till juni.',
      en: 'Kick-off at NTI Gymnasiet Helsingborg. We meet the class, the tools and the pace that will carry us from August to June.',
    },
    tag: 'intro',
  },
  {
    id: 'sep-ai',
    month: 'sep',
    date: { sv: 'september 2025', en: 'September 2025' },
    title: { sv: 'AI-projekt', en: 'AI project' },
    brief: {
      sv: 'Bygg AI-verktyg för att lösa riktiga problem.',
      en: 'Build AI tools to solve real problems.',
    },
    description: {
      sv: 'AI-verktyg för att lösa riktiga problem med riktiga kunder.',
      en: 'AI tools to solve real problems with real customers.',
    },
    tag: 'project',
    href: '',
  },
  {
    id: 'aug-webshop',
    month: 'aug',
    date: { sv: 'augusti 2025', en: 'August 2025' },
    title: { sv: 'Webbshop', en: 'Webshop' },
    brief: {
      sv: 'Bygg en webbshop med produktlistor och kundvagn.',
      en: 'Build a webshop with product listings and a cart.',
    },
    description: {
      sv: 'Klassens webbshoppar: Webbshop, Snacky och Coffee Webshop — e-handel byggd från grunden i HTML, CSS och JavaScript.',
      en: 'The class webshops: Webbshop, Snacky and Coffee Webshop — e-commerce built from scratch in HTML, CSS and JavaScript.',
    },
    tag: 'project',
    href: '/projekt/webshop',
  },
  {
    id: 'aug-crealevant',
    month: 'aug',
    date: { sv: 'augusti 2025', en: 'August 2025' },
    title: { sv: 'Crealevant', en: 'Crealevant' },
    brief: {
      sv: 'Gästbesök från webbyrån Crealevant i Helsingborg.',
      en: 'Guest visit from the Crealevant web agency in Helsingborg.',
    },
    description: {
      sv: 'Crealevant delade erfarenheter från webbutveckling och e-handel med WordPress och Magento — över 20 år i branschen.',
      en: 'Crealevant shared experiences from web development and e-commerce with WordPress and Magento — over 20 years in the industry.',
    },
    tag: 'event',
    href: 'https://www.linkedin.com/company/crealevant-ab/',
  },
  {
    id: 'sep-jscert',
    month: 'sep',
    date: { sv: 'september 2025', en: 'September 2025' },
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
    id: 'sep-klang',
    month: 'sep',
    date: { sv: 'september 2025', en: 'September 2025' },
    title: { sv: 'Klang.ai', en: 'Klang.ai' },
    brief: {
      sv: 'Gästbesök från AI-bolaget Klang.ai i Helsingborg.',
      en: 'Guest visit from AI company Klang.ai in Helsingborg.',
    },
    description: {
      sv: 'Klang.ai berättade om hur de fångar, strukturerar och hittar signaler i samtal — europeisk AI byggd för integritet.',
      en: 'Klang.ai talked about capturing, structuring and finding signals in conversations — European AI built for privacy.',
    },
    tag: 'event',
    href: 'https://www.linkedin.com/company/klang-ai/',
  },
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
      sv: 'Webbappar byggda runt ett externt API — hämta data, visa den snyggt och göra något användbart av den.',
      en: 'Web apps built around an external API — fetch data, present it cleanly and make something useful out of it.',
    },
    tag: 'project',
    href: '/projekt/api',
  },
  {
    id: 'oct-cercino',
    month: 'okt',
    date: { sv: 'oktober 2025', en: 'October 2025' },
    title: { sv: 'Cercino', en: 'Cercino' },
    brief: {
      sv: 'Gästbesök från delägare Lefteris Avramidis från eventbolaget Cercino i Helsingborg.',
      en: 'Guest visit from Lefteris Avramidis from event company Cercino in Helsingborg.',
    },
    description: {
      sv: 'Lefteris delade sin erfarenhet av att använda verktyget figma och hur han använder det för att designa och utveckla webbplatser och appar.',
      en: 'Lefteris shared his experience in the use of the tool figma and how he uses it to design and develop websites and apps.',
    },
    tag: 'event',
    href: 'https://www.linkedin.com/company/cercino-ab/',
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
    href: '/projekt/game',
  },
  {
    id: 'nov-buildahome',
    month: 'nov',
    date: { sv: 'november 2025', en: 'November 2025' },
    title: { sv: 'Buildahome Digital', en: 'Buildahome Digital' },
    brief: {
      sv: 'Gästbesök från webbyrån Buildahome Digital i Helsingborg.',
      en: 'Guest visit from the Buildahome Digital web agency in Helsingborg.',
    },
    description: {
      sv: 'Buildahome berättade om webbutveckling, design, SEO och digital strategi — skräddarsydda lösningar för medelstora och stora företag.',
      en: 'Buildahome talked about web development, design, SEO and digital strategy — tailored solutions for mid-size and large companies.',
    },
    tag: 'event',
    href: 'https://www.linkedin.com/company/buildahome/',
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
    href: '/projekt/ai',
  },
  {
    id: 'dec-margo',
    month: 'dec',
    date: { sv: 'december 2025', en: 'December 2025' },
    title: { sv: 'Margo · spelutvecklare', en: 'Margo · game developer' },
    brief: {
      sv: 'Gästbesök från spelutvecklaren Margo.',
      en: 'Guest visit from game developer Margo.',
    },
    description: {
      sv: 'Margarita Shaposhnikova (Margo) delade erfarenheter från spelutveckling och vad det innebär att jobba i branschen.',
      en: 'Margarita Shaposhnikova (Margo) shared experiences from game development and what it means to work in the industry.',
    },
    tag: 'event',
    href: 'https://www.linkedin.com/in/margarita-shaposhnikova-a3694828b/',
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
    tag: 'event'
  },
  {
    id: 'mar-apl-mt',
    month: 'mar',
    date: { sv: 'mars 2026', en: 'March 2026' },
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
    href: '/#apl',
  },
  {
    id: 'apr-apl-se',
    month: 'apr',
    date: { sv: 'april 2026', en: 'April 2026' },
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
    href: '/#apl',
  },
  {
    id: 'may-thesis',
    month: 'maj',
    date: { sv: 'maj 2026', en: 'May 2026' },
    title: { sv: 'Examensarbete', en: 'Thesis project' },
    brief: {
      sv: 'Individuellt projekt: formulera en fråga, undersök och redovisa.',
      en: 'Individual project: formulate a question, investigate and present your findings.',
    },
    description: {
      sv: 'Varje elev skriver sitt eget examensarbete inom teknik, AI, UX, spel och mer. Titlar och sammanfattningar finns på elevprofilerna under klassen.',
      en: 'Each student writes their own thesis in areas like tech, AI, UX, games and more. Titles and summaries are on the student profiles under the class section.',
    },
    tag: 'project',
    href: '/#klassen',
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
      sv: 'Du läser den. React + Vite + Tailwind + framer-motion, hostad på NTIs egna server.',
      en: "You are reading it. React + Vite + Tailwind + framer-motion, hosted on NTI's own server.",
    },
    tag: 'project',
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
      sv: 'Fjärde året på NTI for vissa första för andra, men sista för alla. Avslut. Vi ses på andra sidan.',
      en: 'Forth year at NTI for some first for others, but last for us all. That is a wrap. See you on the other side.',
    },
    tag: 'end',
    href: '/om',
  },
]
