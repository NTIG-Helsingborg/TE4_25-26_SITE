export interface Student {
  id: string
  fullName: string
  shortName: string
  role: { sv: string; en: string }
  stack: string[]
  quote?: { sv: string; en: string }
  github?: string
  isAuthor?: boolean
  photo?: string
}

/**
 * Twelve students. Only Mykyta has a real portrait for now — everyone else
 * gets the initial-letter fallback and is expected to add their own.
 * (Studio portraits exist for 10 of them in /public/photos/portrait-*.jpg
 * but aren't wired in until each person confirms their mapping.)
 */
export const students: Student[] = [
  {
    id: 'mykyta',
    fullName: 'Mykyta Grogul',
    shortName: 'Mykyta',
    role: { sv: 'AI · agenter · founder', en: 'AI · agents · founder' },
    stack: ['React', 'TypeScript', 'Python', 'AI'],
    quote: {
      sv: 'Bygger AI som tänker. Sen är jag den som glömmer att äta lunch.',
      en: 'I build AI that thinks. Then I forget to eat lunch.',
    },
    github: 'Mykyta-G',
    isAuthor: true,
    photo: '/photos/mykyta.jpg',
  },
  {
    id: 'carl',
    fullName: 'Carl Axelson',
    shortName: 'Carl',
    role: { sv: 'systemutveckling', en: 'systems' },
    stack: ['C#', 'TypeScript', 'Node'],
  },
  {
    id: 'eliah',
    fullName: 'Eliah Bäckström Dimmed',
    shortName: 'Eliah',
    role: { sv: 'spelutveckling', en: 'game dev' },
    stack: ['C#', 'Unity', 'Blender'],
  },
  {
    id: 'isak-p',
    fullName: 'Isak Petersson',
    shortName: 'Isak P.',
    role: { sv: 'frontend', en: 'frontend' },
    stack: ['HTML', 'CSS', 'React', 'Figma'],
  },
  {
    id: 'jesper',
    fullName: 'Jesper Ahlström',
    shortName: 'Jesper',
    role: { sv: 'fullstack', en: 'fullstack' },
    stack: ['JS', 'React', 'Node'],
  },
  {
    id: 'kevin',
    fullName: 'Kevin Hermansson',
    shortName: 'Kevin',
    role: { sv: 'AI · chatbot', en: 'AI · chatbot' },
    stack: ['HTML', 'CSS', 'Python', 'AI'],
  },
  {
    id: 'andi',
    fullName: 'Andi Gjomakaj',
    shortName: 'Andi',
    role: { sv: 'spelutveckling', en: 'game dev' },
    stack: ['C#', 'Unity', 'GMS'],
  },
  {
    id: 'damian',
    fullName: 'Damian Dacic',
    shortName: 'Damian',
    role: { sv: 'spelutveckling', en: 'game dev' },
    stack: ['C#', 'Unity', 'GMS'],
  },
  {
    id: 'finn',
    fullName: 'Finn Skattum',
    shortName: 'Finn',
    role: { sv: 'systemutveckling', en: 'systems' },
    stack: ['Python', 'Java', 'Node'],
  },
  {
    id: 'ibraheem',
    fullName: 'Ibraheem Al-Shabee',
    shortName: 'Ibraheem',
    role: { sv: 'fullstack', en: 'fullstack' },
    stack: ['HTML', 'CSS', 'JS', 'PHP'],
  },
  {
    id: 'isak-c',
    fullName: 'Isak Carlsson',
    shortName: 'Isak C.',
    role: { sv: 'frontend', en: 'frontend' },
    stack: ['HTML', 'CSS', 'React'],
  },
  {
    id: 'viktor',
    fullName: 'Viktor Alkbrand',
    shortName: 'Viktor',
    role: { sv: 'te4 · 25/26', en: 'te4 · 25/26' },
    stack: ['TE4'],
  },
]
