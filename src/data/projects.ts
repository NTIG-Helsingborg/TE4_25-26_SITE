export interface Project {
  id: string
  name: string
  org: string
  repo: string
  url: string
  tagline: { sv: string; en: string }
  description: { sv: string; en: string }
  stack: string[]
  primaryLanguage: string
  deployUrl?: string
  period: string
  isOpenSlot?: boolean
}

export const projects: Project[] = [
  {
    id: 'roastbattles',
    name: 'RoastBattles',
    org: 'NTIG-Helsingborg',
    repo: 'TE4_25-26_RoastBattles',
    url: 'https://github.com/NTIG-Helsingborg/TE4_25-26_RoastBattles',
    tagline: {
      sv: 'Konkurrenskraftiga roastningar i graffitistil.',
      en: 'Competitive roasting in graffiti style.',
    },
    description: {
      sv: 'En webbapp inspirerad av street art där du utmanar vänner eller övar solo i grafittistilade roast-strider. Byggd i React + Vite.',
      en: 'A street-art-inspired web app where you challenge friends or sharpen your skills solo in graffiti-styled roasting battles. Built with React + Vite.',
    },
    stack: ['react', 'vite', 'js'],
    primaryLanguage: 'JavaScript',
    deployUrl: 'https://roastbattles.azurewebsites.net/',
    period: 'okt — dec 2025',
  },
  {
    id: 'back-to-zero',
    name: 'Back-To-Zero',
    org: 'NTIG-Helsingborg',
    repo: 'TE4_25-26_Back-To-Zero',
    url: 'https://github.com/NTIG-Helsingborg/TE4_25-26_Back-To-Zero',
    tagline: {
      sv: 'En mörk Berserk-inspirerad 2D roguelike. Ditt blod är ditt vapen.',
      en: 'A dark Berserk-inspired 2D roguelike. Your blood is your weapon.',
    },
    description: {
      sv: 'Ditt HP är din mana — kasta besvärjelser, förstärk attacker, skörda livskraft. En döende värld full av odöda. Byggd i Unity / C#.',
      en: 'Your HP is your mana — cast spells, empower attacks, harvest life-essence. A dying world of undead. Built in Unity / C#.',
    },
    stack: ['c#', 'unity', 'game'],
    primaryLanguage: 'C#',
    period: 'nov — dec 2025',
  },
  {
    id: 'ai-overwatch',
    name: 'AI-Overwatch',
    org: 'NTIG-Helsingborg',
    repo: 'AI-Overwatch',
    url: 'https://github.com/NTIG-Helsingborg/AI-Overwatch',
    tagline: {
      sv: 'AI-övervakning som faktiskt håller koll.',
      en: 'AI supervision that actually keeps watch.',
    },
    description: {
      sv: 'Dashboard för att övervaka AI-beteenden. Byggd i Vue + TypeScript.',
      en: 'Dashboard for monitoring AI behaviour. Built with Vue + TypeScript.',
    },
    stack: ['vue', 'ts', 'ai'],
    primaryLanguage: 'Vue',
    period: 'dec 2025',
  },
  {
    id: 'open-slot',
    name: '',
    org: 'NTIG-Helsingborg',
    repo: '',
    url: 'https://github.com/NTIG-Helsingborg',
    tagline: {
      sv: 'Lägg till ditt projekt i NTIG-orgen så landar det här.',
      en: 'Add your project to the NTIG org and it lands here.',
    },
    description: {
      sv: 'Flera av oss byggde grejer som aldrig laddades upp till skolans org. Pusha det och det dyker upp på denna sida.',
      en: 'Several of us built things that never made it to the school org. Push them and they show up on this page.',
    },
    stack: ['?', '?', '?'],
    primaryLanguage: '—',
    period: '—',
    isOpenSlot: true,
  },
]

export interface Cert {
  id: string
  name: string
  full: string
}

export const certs: Cert[] = [
  { id: 'js', name: 'JavaScript', full: 'JavaScript fundamentals' },
  { id: 'htmlcss', name: 'HTML + CSS', full: 'HTML & CSS' },
]
