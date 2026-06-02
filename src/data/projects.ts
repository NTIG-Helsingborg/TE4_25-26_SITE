export type ProjectCategoryId = 'api' | 'game' | 'ai' | 'webshop'

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
  category?: ProjectCategoryId
  isOpenSlot?: boolean
}

export interface ProjectCategory {
  id: ProjectCategoryId
  chapter: { sv: string; en: string }
  title: { sv: string; en: string }
  lede: { sv: string; en: string }
}

export const projectCategories: ProjectCategory[] = [
  {
    id: 'api',
    chapter: { sv: 'API-projekt', en: 'API project' },
    title: { sv: 'API-projekt.', en: 'API projects.' },
    lede: {
      sv: 'Webbappar byggda runt ett externt API — hämta data, visa den snyggt och göra något användbart av den.',
      en: 'Web apps built around an external API — fetch data, present it cleanly and make something useful out of it.',
    },
  },
  {
    id: 'game',
    chapter: { sv: 'Spelprojekt', en: 'Game projects' },
    title: { sv: 'Spelprojekt.', en: 'Game projects.' },
    lede: {
      sv: 'Spel byggda från grunden — egna mekaniker, egen känsla och en hel del iterationer.',
      en: 'Games built from scratch — custom mechanics, their own feel and plenty of iteration.',
    },
  },
  {
    id: 'ai',
    chapter: { sv: 'AI-projekt', en: 'AI projects' },
    title: { sv: 'AI-projekt.', en: 'AI projects.' },
    lede: {
      sv: 'System som ser, resonerar och reagerar — från edge-AI på Jetson till övervakningsdashboards.',
      en: 'Systems that see, reason and react — from edge AI on the Jetson to monitoring dashboards.',
    },
  },
  {
    id: 'webshop',
    chapter: { sv: 'Webbshop', en: 'Webshop' },
    title: { sv: 'Webbshoppar.', en: 'Webshops.' },
    lede: {
      sv: 'E-handelsprojekt byggda från grunden — produktlistor, kundvagn och allt däremellan.',
      en: 'E-commerce projects built from scratch — product listings, carts and everything in between.',
    },
  },
]

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
    category: 'api',
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
    category: 'game',
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
    category: 'ai',
  },
  {
    id: 'aiming-for-disaster',
    name: 'Aiming For Disaster',
    org: 'KebabMumsare',
    repo: 'Aiming-for-Disaster',
    url: 'https://github.com/KebabMumsare/Aiming-for-Disaster',
    tagline: {
      sv: 'Spelprojekt där sikte och kaos går hand i hand.',
      en: 'A game project where aim and chaos go hand in hand.',
    },
    description: {
      sv: 'Ett spelprojekt byggt i C#. Utvecklat som del av TE4-utbildningen.',
      en: 'A game project built in C#. Developed as part of the TE4 programme.',
    },
    stack: ['c#', 'game'],
    primaryLanguage: 'C#',
    period: '2025',
    category: 'game',
  },
  {
    id: 'ai-guard',
    name: 'AI Guard',
    org: 'KebabMumsare',
    repo: 'AI_Guard',
    url: 'https://github.com/KebabMumsare/AI_Guard',
    tagline: {
      sv: 'AI-skydd som håller koll på det som rör sig.',
      en: 'AI-powered guard that keeps watch on what moves.',
    },
    description: {
      sv: 'Ett AI-projekt med Vue i frontend. Byggt för att övervaka och reagera på händelser.',
      en: 'An AI project with Vue on the frontend. Built to monitor and react to events.',
    },
    stack: ['vue', 'ai', 'js'],
    primaryLanguage: 'Vue',
    period: '2025',
    category: 'ai',
  },
  {
    id: 'verdenafall',
    name: 'Verdenafall',
    org: 'KevinHermansson',
    repo: 'fuck-ass-rouglike',
    url: 'https://github.com/KevinHermansson/fuck-ass-rouglike',
    tagline: {
      sv: 'En roguelike där världen faller isär runt dig.',
      en: 'A roguelike where the world falls apart around you.',
    },
    description: {
      sv: 'Roguelike-spelprojekt i C#. Varje run är en kamp mot en värld som rasar.',
      en: 'Roguelike game project in C#. Every run is a fight against a crumbling world.',
    },
    stack: ['c#', 'game', 'roguelike'],
    primaryLanguage: 'C#',
    period: '2025',
    category: 'game',
  },
  {
    id: 'steamdream',
    name: 'Steamdream',
    org: 'KebabMumsare',
    repo: 'SteamDream',
    url: 'https://github.com/KebabMumsare/SteamDream',
    tagline: {
      sv: 'Visar alla steams spel på rea.',
      en: 'Shows all Steam games on sale.',
    },
    description: {
      sv: 'API projekt för att hämta och visa Steam-spel på rea.',
      en: 'API project to fetch and display Steam games on sale.',
    },
    stack: ['ts', 'api', 'steam'],
    primaryLanguage: 'TypeScript',
    period: '2025',
    category: 'api',
  },
  {
    id: 'snacky',
    name: 'Snacky',
    org: 'NTIG-Helsingborg',
    repo: 'TE4_25-26_WebShop',
    url: 'https://github.com/NTIG-Helsingborg/TE4_25-26_WebShop',
    tagline: {
      sv: 'Webbshop för snacks, byggd från grunden.',
      en: 'A snack webshop, built from scratch.',
    },
    description: {
      sv: 'Webbprojekt i HTML, CSS och JavaScript. En webshop för att köpa och bläddra bland snacks.',
      en: 'Web project in HTML, CSS and JavaScript. A webshop for browsing and buying snacks.',
    },
    stack: ['html', 'css', 'js'],
    primaryLanguage: 'JavaScript',
    period: '2025',
    category: 'webshop',
  },
  {
    id: 'hypixel-skyblock-tracker',
    name: 'Hypixel Skyblock Tracker',
    org: 'NTIG-Helsingborg',
    repo: 'React-API',
    url: 'https://github.com/NTIG-Helsingborg/React-API',
    tagline: {
      sv: 'API-projekt som håller koll på din Skyblock-progress.',
      en: 'API project that tracks your Skyblock progress.',
    },
    description: {
      sv: 'Klassens API-projekt i React. Hämtar och visar data från Hypixel Skyblock.',
      en: 'The class API project in React. Fetches and displays data from Hypixel Skyblock.',
    },
    stack: ['react', 'js', 'api'],
    primaryLanguage: 'JavaScript',
    period: '2025',
    category: 'api',
  },
  {
    id: 'coffee-webshop',
    name: 'Coffee Webshop',
    org: 'eliahdim',
    repo: 'coffeeWebshop',
    url: 'https://github.com/eliahdim/coffeeWebshop',
    tagline: {
      sv: 'Webbshop för kaffeälskare.',
      en: 'A webshop for coffee lovers.',
    },
    description: {
      sv: 'Webbshop-projekt i HTML och CSS. Bläddra och handla kaffe online.',
      en: 'Webshop project in HTML and CSS. Browse and shop for coffee online.',
    },
    stack: ['html', 'css', 'js'],
    primaryLanguage: 'HTML',
    period: '2025',
    category: 'webshop',
  },
  {
    id: 'webbshop',
    name: 'Webbshop',
    org: 'Mykyta-G',
    repo: 'Webbshop',
    url: 'https://github.com/Mykyta-G/Webbshop',
    tagline: {
      sv: 'Webbshop med frontend och backend.',
      en: 'A webshop with frontend and backend.',
    },
    description: {
      sv: 'Webbshop-projekt i HTML, CSS och JavaScript med egen backend. Byggt som en fullständig e-handelslösning.',
      en: 'Webshop project in HTML, CSS and JavaScript with its own backend. Built as a full e-commerce solution.',
    },
    stack: ['html', 'css', 'js', 'node'],
    primaryLanguage: 'HTML',
    period: '2025',
    category: 'webshop',
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
