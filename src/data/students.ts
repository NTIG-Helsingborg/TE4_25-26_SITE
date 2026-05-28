export interface Student {
  id: string
  fullName: string
  shortName: string
  role: { sv: string; en: string }
  stack: string[]
  quote?: { sv: string; en: string }
  bio?: { sv: string; en: string }
  github?: string
  linkedin?: string
  isAuthor?: boolean
  photo?: string
  projects?: string[]
  thesis?: { sv: string; en: string }
}

/**
 * Eleven students. Only Mykyta has a real portrait for now — everyone else
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
    projects: ['roastbattles'],
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
    role: { sv: 'Frontendutveckling', en: 'Frontend development' },
    stack: ['HTML', 'CSS', 'React', 'Figma', 'JS','WordPress', 'C#'],
    github: 'eliahdim',
    linkedin: 'eliah-dimmed',
    photo: '/photos/portrait-07.jpg',
    bio: {
      sv: 'Jag har ett stort intresse för programmering, AI och digitala lösningar, särskilt projekt där teknik kan användas för att automatisera processer eller skapa något kreativt och användbart. Under året har jag arbetat mycket med moderna webbutvecklingsverktyg och AI-baserade lösningar, både i skolan och under min APL-period. \nPå min APL hos ZYNQ Media Group fokuserade jag bland annat på att utveckla AI-verktyg för marknadsföring och innehållsskapande. Där fick jag möjlighet att kombinera programmering med problemlösning, design och affärstänkande. Utöver utveckling är jag också intresserad av musik, digital design och kreativa projekt. Jag gillar att bygga idéer från grunden och utforska hur teknik och kreativitet kan kombineras för att skapa något unikt.',
      en: 'I have a strong interest in programming, AI and digital solutions, especially projects where technology can be used to automate processes or create something creative and useful. During the year, I have worked extensively with modern web development tools and AI-based solutions, both in school and during my APL period. During my APL at ZYNQ Media Group, I focused on developing AI tools for marketing and content creation. There I had the opportunity to combine programming with problem-solving, design and business thinking. In addition to development, I am also interested in music, digital design and creative projects. I like to build ideas from the ground up and explore how technology and creativity can be combined to create something unique.',
    },
    quote: {
      sv: 'If it works, don\'t touch it',
      en: 'If it works, don\'t touch it',
    },
    projects: ['ai-overwatch', ],
    thesis: {
      sv: '"En undersökning av hur strukturerade tekniker påverkar kvaliteten och precisionen i LLM-svar."',
      en: '"An investigation into how structured techniques affect the quality and precision of LLM responses."',
    },
  },
  {
    id: 'isak-p',
    fullName: 'Isak Petersson',
    shortName: 'Isak P.',
    role: { sv: 'frontend', en: 'frontend' },
    stack: ['HTML', 'CSS', 'React', 'Figma'],
    github: 'IsakPetersson',
    linkedin: 'isak-petersson-801a2937a',
    photo: '/photos/portrait-04.jpg',
  },
  {
    id: 'jesper',
    fullName: 'Jesper Ahlström',
    shortName: 'Jesper',
    role: { sv: 'fullstack', en: 'fullstack' },
    stack: ['JS', 'React', 'Node'],
    photo: '/photos/portrait-05.jpg',
  },
  {
    id: 'kevin',
    fullName: 'Kevin Hermansson',
    shortName: 'Kevin',
    role: { sv: 'AI · chatbot', en: 'AI · chatbot' },
    stack: ['HTML', 'CSS', 'Python', 'AI'],
    photo: '/photos/portrait-01.jpg',
  },
  {
    id: 'andi',
    fullName: 'Andi Gjomakaj',
    shortName: 'Andi',
    role: { sv: 'spelutveckling', en: 'game dev' },
    stack: ['C#', 'Unity', 'GMS'],
    photo: '/photos/portrait-09.jpg',
  },
  {
    id: 'damian',
    fullName: 'Damian Dacic',
    shortName: 'Damian',
    role: { sv: 'spelutveckling', en: 'game dev' },
    stack: ['C#', 'Unity', 'GMS'],
    photo: '/photos/portrait-02.jpg',
  },
  {
    id: 'finn',
    fullName: 'Finn Skattum',
    shortName: 'Finn',
    role: { sv: 'systemutveckling', en: 'systems' },
    stack: ['Python', 'Java', 'Node'],
    photo: '/photos/portrait-06.jpg',
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
    stack: ['HTML', 'CSS', 'React', 'Figma', 'JS','WordPress', 'C#'],
    github: 'isakcarlsson25',
    linkedin: 'isak-carlsson-73076737a',
    photo: '/photos/portrait-08.jpg',
    bio: {
      sv: 'Jag har gått TE4 med inriktning inom teknik och har ett stort intresse för webbutveckling. Under min utbildning och på fritiden har jag arbetat mycket med att utveckla webbapplikationer, där frontend är det område jag tycker är mest intressant. Jag gillar att skapa användarvänliga och moderna gränssnitt och utvecklas ständigt inom nya tekniker och ramverk. På fritiden gillar jag att kolla på fotboll och träna på gym, vilket hjälper mig att hålla både fokus och motivation uppe.',
      en: 'I completed TE4 with a focus on technology and have a strong interest in web development. During my studies and in my free time, I have worked extensively with developing web applications, where frontend development is the area I enjoy the most. I like creating user-friendly and modern interfaces, and I am constantly improving my skills by learning new technologies and frameworks. In my free time, I enjoy watching football and going to the gym, which helps me stay focused and motivated.',
    },
    quote: {
      sv: 'Jag vill skapa saker som gör skillnad och är kul att använda.',
      en: 'I want to create things that make a difference and are fun to use.',
    },
    projects: ['ai-overwatch'],
    thesis: {
      sv: '"Hur påverkas nyexaminerade utvecklare genom AI:s utveckling på arbetsmarknaden?"',
      en: '"How are newly graduated developers affected by the development of AI in the job market?"',
    },
  },
]
