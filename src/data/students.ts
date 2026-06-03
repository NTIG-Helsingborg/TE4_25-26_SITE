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
  personalProjects?: PersonalProject[]
  thesis?: { sv: string; en: string }
}

/**
 * Personal/solo projects that live on a student's own profile only — they do
 * NOT appear on the shared class Projects page (that's `projects` in
 * src/data/projects.ts). Curated highlights, newest first.
 */
export interface PersonalProject {
  name: string
  url: string
  deployUrl?: string
  tagline: { sv: string; en: string }
  stack: string[]
  primaryLanguage: string
  period: string
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
    role: { sv: 'grundare Simple Schedules · AI & agenter', en: 'founder of Simple Schedules · AI & agents' },
    stack: ['React', 'TypeScript', 'Python', 'AI', 'Vue', 'Swift', 'C++', 'C#', 'Java', 'Electron'],
    bio: {
      sv: 'Mykyta är grundare av Simple Schedules och klassens AI- och agentmänniska. Han bygger AI-verktyg och agentbaserade system — mjukvara som resonerar och agerar på egen hand. Hans största projekt under året är Project-Overseer, en personlig AI-infrastruktur med fem specialiserade agenter, ett väckningsord och ett fysiskt skrivbordsgränssnitt. Vid sidan av det har han byggt allt från macOS-appar som Workspace-Buddy och Focus-Wave till CLI-verktyget One-Line och hackathon-projektet Home-E i Vue + Electron. På TE4 vid NTI Gymnasiet Helsingborg var han med i RoastBattles, klassens API-projekt i React + Vite. Han gillar att äga ett projekt hela vägen — från frontend till Python- och AI-arbetet bakom — och när något kan automatiseras eller lämnas över till en agent är det oftast där man hittar honom.',
      en: 'Mykyta is the founder of Simple Schedules and the AI-and-agents person in the class. He builds AI tooling and agentic systems — software that reasons and acts on its own. His biggest project this year is Project-Overseer, a personal AI infrastructure with five specialized agents, a wake word and a physical desk interface. Alongside it he has built everything from macOS apps like Workspace-Buddy and Focus-Wave to the One-Line CLI tool and the Home-E hackathon project in Vue + Electron. At TE4 (NTI Gymnasiet Helsingborg) he worked on RoastBattles, the class API project built with React + Vite. He likes owning a project end to end — from the frontend to the Python and AI work behind it — and when something can be automated or handed off to an agent, that is usually where you will find him.',
    },
    quote: {
      sv: 'Bygger AI som tänker. Sen är jag den som glömmer att äta lunch.',
      en: 'I build AI that thinks. Then I forget to eat lunch.',
    },
    github: 'Mykyta-G',
    linkedin: 'mykyta-grogul',
    isAuthor: true,
    photo: '/photos/mykyta.jpg',
    projects: ['roastbattles', 'back-to-zero', 'ai-guard', 'webbshop'],
    personalProjects: [
      {
        name: 'Project-Overseer',
        url: 'https://github.com/Mykyta-G/Project-Overseer',
        tagline: {
          sv: '🦞 Personlig AI-infrastruktur — fem specialiserade agenter, ett väckningsord och ett fysiskt skrivbordsgränssnitt. Byggt på OpenClaw + Claude.',
          en: '🦞 Personal AI infrastructure — five specialized agents, one wake word and a physical desk interface. Built on OpenClaw + Claude.',
        },
        stack: ['python', 'ai', 'agents'],
        primaryLanguage: 'Python',
        period: 'mar 2026',
      },
      {
        name: 'Notes-To-Plan',
        url: 'https://github.com/Mykyta-G/Notes-To-Plan',
        tagline: {
          sv: 'Förvandlar lösa anteckningar till en strukturerad plan med hjälp av AI.',
          en: 'Turns loose notes into a structured, actionable plan with the help of AI.',
        },
        stack: ['ts', 'ai'],
        primaryLanguage: 'TypeScript',
        period: 'feb 2026',
      },
      {
        name: 'Project-Gunnar',
        url: 'https://github.com/Mykyta-G/Project-Gunnar',
        tagline: {
          sv: 'AI i menyraden som svarar tillbaka. Väckningsord, udda presets och din nya bästa/värsta skrivbordskompis.',
          en: 'Menu-bar AI that talks back. Wake word, weird presets and your new best/worst desk buddy.',
        },
        stack: ['ts', 'ai', 'macos'],
        primaryLanguage: 'TypeScript',
        period: 'jan 2026',
      },
      {
        name: 'One-Line',
        url: 'https://github.com/Mykyta-G/One-Line',
        tagline: {
          sv: 'Produktionsfärdigt CLI-verktyg för att skapa, hantera och köra hela kommandosekvenser från en terminalmeny.',
          en: 'Production-ready CLI tool to create, manage and run whole command sequences from a terminal menu.',
        },
        stack: ['ts', 'cli', 'node'],
        primaryLanguage: 'TypeScript',
        period: 'jan 2026',
      },
      {
        name: 'Home-E',
        url: 'https://github.com/Mykyta-G/Home-E',
        tagline: {
          sv: 'Familjehanteringsapp byggd i Vue 3 + Electron under HetchHacks 2025 — från hackathon-prototyp till iOS/Android/Web.',
          en: 'Family-management app built with Vue 3 + Electron at HetchHacks 2025 — from hackathon prototype to iOS/Android/Web.',
        },
        stack: ['vue', 'electron', 'ts'],
        primaryLanguage: 'Vue',
        period: 'nov 2025 — jan 2026',
      },
      {
        name: 'Workspace-Buddy',
        url: 'https://github.com/Mykyta-G/Workspace-Buddy',
        tagline: {
          sv: 'macOS-app i menyraden för att skapa, hantera och direkt växla mellan egna arbetsytor — appar, sajter och flöden med ett klick.',
          en: 'macOS menu-bar app to create, manage and instantly switch between custom workspaces — apps, sites and workflows in one click.',
        },
        stack: ['swift', 'macos'],
        primaryLanguage: 'Swift',
        period: 'aug — dec 2025',
      },
      {
        name: 'Focus-Wave',
        url: 'https://github.com/Mykyta-G/Focus-Wave',
        tagline: {
          sv: 'Minimalistisk macOS-fokusapp med ambient-ljud och en lugn våganimation för bättre koncentration.',
          en: 'Minimalist macOS focus app with ambient sounds and a calming wave animation to boost concentration.',
        },
        stack: ['swift', 'macos'],
        primaryLanguage: 'Swift',
        period: 'aug — nov 2025',
      },
      {
        name: 'Trading-Simulation-Platform',
        url: 'https://github.com/Mykyta-G/Trading-Simulation-Platform',
        tagline: {
          sv: 'Java Swing-app i helskärm som simulerar realistisk aktiehandel med dynamiska grafer, marknadsvolatilitet och en interaktiv handels-dashboard.',
          en: 'Full-screen Java Swing app simulating realistic stock trading with dynamic charts, market volatility and an interactive trading dashboard.',
        },
        stack: ['java', 'swing'],
        primaryLanguage: 'Java',
        period: 'mar — nov 2025',
      },
      {
        name: 'About-me',
        url: 'https://github.com/Mykyta-G/About-me',
        deployUrl: 'https://mykyta-g.github.io/About-me/',
        tagline: {
          sv: 'En personlig "om mig"-sajt i HTML/CSS — ett av de första projekten och där det hela började.',
          en: 'A personal "about me" site in HTML/CSS — one of the first projects, where it all started.',
        },
        stack: ['html', 'css', 'js'],
        primaryLanguage: 'CSS',
        period: 'aug 2025',
      },
    ],
    thesis: {
      sv: '"Hur kan man effektivisera schemaskapandet för gymnasiet?" — examensarbetet bakom Simple Schedules, ett webbaserat schemaverktyg som med constraint-baserad logik (Google OR-Tools CP-SAT, körd i webbläsaren via WebAssembly) genererar ett komplett gymnasieschema på 10–30 sekunder utan dubbelbokningar — istället för veckor av manuellt pusslande. Bygger på en student-first-modell där eleven är den minsta schemaläggningsenheten.',
      en: '"How can timetable creation for upper secondary schools be made more efficient?" — the thesis behind Simple Schedules, a web-based scheduling tool that uses constraint-based logic (Google OR-Tools CP-SAT, run in the browser via WebAssembly) to generate a complete upper-secondary timetable in 10–30 seconds with no double-bookings — instead of weeks of manual puzzling. Built on a student-first model where the individual student is the smallest scheduling unit.',
    },
  },
  {
    id: 'carl',
    fullName: 'Carl Axelson',
    shortName: 'Carl',
    role: { sv: 'fullstack', en: 'fullstack' },
    stack: ['HTML', 'CSS', 'JS', 'TS', 'Java', 'Luau', 'C#', 'C++', 'SQL', 'React', 'Vue', 'Laravel', 'Express'],
    quote: {
      sv: 'Vissa devs skriver ren kod. Jag skriver rena prompts. Ingen funktion lämnad öppen för tolkning. Sex stycken, minimum.',
      en: 'Some devs write clean code. I write clean prompts. No feature left up for interpretation. Six paragraphs, minimum.',
    },
    bio: {
      sv: 'Ska skriva mer här...',
      en: 'Going to write more here...',
    },
    linkedin: 'carl-axelson',
    photo: '/photos/Carl.jpg',
    github: 'CarlAxelson',
    projects: ['roastbattles', 'ai-overwatch', 'aiming-for-disaster', 'ai-guard', 'coffee-webshop'],
    thesis: {
      sv: 'En undersökning som utforskar hur AI-genererade videor kan avslöjas genom synliga artefakter och mjukvaruanalys, och jämför träffsäkerheten hos mänsklig bedömning mot fritt tillgängliga detektionsverktyg.',
      en: 'An investigation that explores how AI-generated videos can be detected through visible artifacts and software analysis, comparing the accuracy of human judgment against freely available detection tools',
    },
  },
  {
    id: 'eliah',
    fullName: 'Eliah Bäckström Dimmed',
    shortName: 'Eliah',
    role: { sv: 'Frontendutveckling', en: 'Frontend development' },
    stack: ['HTML', 'CSS', 'React', 'JS', 'TS', 'AI', 'C#', 'SQL', 'Vue',],
    github: 'eliahdim',
    linkedin: 'eliah-dimmed',
    isAuthor: true,
    photo: '/photos/portrait-07.jpg',
    bio: {
      sv: 'Jag har ett stort intresse för programmering, AI och digitala lösningar, särskilt projekt där teknik kan användas för att automatisera processer eller skapa något kreativt och användbart. Under året har jag arbetat mycket med moderna webbutvecklingsverktyg och AI-baserade lösningar, både i skolan och under min APL-period. \nPå min APL hos ZYNQ Media Group fokuserade jag bland annat på att utveckla AI-verktyg för marknadsföring och innehållsskapande. Där fick jag möjlighet att kombinera programmering med problemlösning, design och affärstänkande. Utöver utveckling är jag också intresserad av musik, digital design och kreativa projekt. Jag gillar att bygga idéer från grunden och utforska hur teknik och kreativitet kan kombineras för att skapa något unikt.',
      en: 'I have a strong interest in programming, AI and digital solutions, especially projects where technology can be used to automate processes or create something creative and useful. During the year, I have worked extensively with modern web development tools and AI-based solutions, both in school and during my APL period. During my APL at ZYNQ Media Group, I focused on developing AI tools for marketing and content creation. There I had the opportunity to combine programming with problem-solving, design and business thinking. In addition to development, I am also interested in music, digital design and creative projects. I like to build ideas from the ground up and explore how technology and creativity can be combined to create something unique.',
    },
    quote: {
      sv: 'If it works, don\'t touch it',
      en: 'If it works, don\'t touch it',
    },
    projects: ['aiming-for-disaster', 'ai-guard', 'hypixel-skyblock-tracker', 'coffee-webshop'],
    personalProjects: [
      {
        name: 'Home-E',
        url: 'https://github.com/Mykyta-G/Home-E',
        tagline: {
          sv: 'Familjehanteringsapp byggd i Vue 3 + Electron under HetchHacks 2025 — från hackathon-prototyp till iOS/Android/Web.',
          en: 'Family-management app built with Vue 3 + Electron at HetchHacks 2025 — from hackathon prototype to iOS/Android/Web.',
        },
        stack: ['vue', 'electron', 'ts'],
        primaryLanguage: 'Vue',
        period: 'nov 2025 — jan 2026',
      },
      {
        name: '1Percent',
        url: 'https://github.com/eliahdim/1Percent',
        tagline: { 
          sv: 'App där du sätter upp dina mål i en trädstruktur och "blir 1% bättre varje dag".',
          en: 'App where you set up your goals in a tree structure and "get 1% better every day".',
        },
        stack: ['react', 'vite', 'js'],
        primaryLanguage: 'JavaScript',
        period: 'feb — mar 2026',
      },
      {
        name: 'Portfolio',
        url: 'https://github.com/eliahdim/portfolio',
        deployUrl: 'https://eliahdim.github.io/portfolio/',
        tagline: {
          sv: 'Min personliga portfolio-sajt byggd i HTML/CSS/JS - kolla gärna på den!',
          en: 'My personal portfolio site built in HTML/CSS/JS - feel free to check it out!',
        },
        stack: ['html', 'css', 'js'],
        primaryLanguage: 'HTML',
        period: 'nov 2025 — maj 2026',
      },
    ],
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
    stack: ['HTML', 'CSS', 'React', 'Figma', 'JS', 'C#'],
    github: 'IsakPetersson',
    linkedin: 'isak-petersson-801a2937a',
    photo: '/photos/IsakP_Portrait.jpg',
    bio: {
      sv: 'Jag har under det senaste året utvecklat ett stort intresse för webbutveckling, framför allt frontend. Under utbildningen har jag arbetat mycket med React, JavaScript och Figma för att bygga moderna och användarvänliga gränssnitt. Jag gillar när design och kod hänger ihop och man får se en idé bli till något som faktiskt fungerar, som vårt projekt AI-Overwatch. På fritiden håller jag mig uppdaterad inom nya tekniker och ramverk, och det som driver mig mest är att lösa problem genom kod och skapa saker folk vill använda.',
      en: 'I am studying TE4 with a focus on technology and have a strong interest in web development, especially frontend. During my studies I have worked extensively with React, JavaScript and Figma to build modern, user-friendly interfaces. I enjoy when design and code come together and an idea becomes something that actually works, like our AI-Overwatch project. In my free time I keep up with new technologies and frameworks, and what motivates me most is solving problems through code and building things people want to use.',
    },
    quote: {
      sv: 'Jag vill bygga saker som ser bra ut och fungerar lika bra.',
      en: 'I want to build things that look good and work just as well.',
    },
    projects: ['ai-overwatch', 'verdenafall', 'hypixel-skyblock-tracker', 'coffee-webshop'],
    thesis: {
      sv: '"Hur frontend desigen påverkar UX"',
      en: '"How frontend design affects UX"',
    },
  },
  {
    id: 'jesper',
    fullName: 'Jesper Ahlström',
    shortName: 'Jesper',
    role: { sv: 'backendutvecklare', en: 'backend developer' },
    stack: ['React', 'TypeScript', 'Python', 'Node.js', 'C#', 'SQL', 'Docker'],
    bio: {
      sv: 'Jag är en backendutvecklare med erfarenhet av flera programmeringsspråk och tekniker. Jag har arbetat med React, TypeScript, Python, Node.js, C# och SQL, och tycker särskilt om att bygga stabila system, API:er och databaser som fungerar bra bakom kulisserna. I mina projekt har jag även använt Docker och PostgreSQL, vilket har gett mig en bättre förståelse för hur applikationer kan utvecklas, köras och hantera data på ett strukturerat sätt.',
      en: 'I am a backend developer with experience in multiple programming languages and technologies. I have worked with React, TypeScript, Python, Node.js, C# and SQL, and particularly enjoy building stable systems, APIs and databases that work well behind the scenes. In my projects I have also used Docker and PostgreSQL, which has given me a better understanding of how applications can be developed, run and handle data in a structured way.',
    },
    quote: {
      sv: 'Det finns en dag imorgon',
      en: 'There is a day tomorrow',
    },
    github: 'KebabMumsare',
    linkedin: 'jesper-ahlstrom',
    isAuthor: true,
    photo: '/photos/portrait-05.jpg',
    projects: ['aiming-for-disaster', 'ai-guard', 'steamdream', 'webbshop'],
  },
  {
    id: 'kevin',
    fullName: 'Kevin Hermansson',
    shortName: 'Kevin',
    role: { sv: 'AI · chatbot', en: 'AI · chatbot' },
    stack: ['HTML', 'CSS', 'Python', 'AI'],
    github: 'KevinHermansson',
    photo: '/photos/portrait-01.jpg',
    projects: ['verdenafall', 'hypixel-skyblock-tracker'],
  },
  {
    id: 'andi',
    fullName: 'Andi Gjomakaj',
    shortName: 'Andi',
    role: { sv: 'spelutveckling', en: 'game dev' },
    stack: ['C#', 'Unity', 'TypeScript', 'JS'],
    github: 'AndiGj',
    linkedin: 'andi-gjomakaj-75b66337b',
    photo: '/photos/portrait-09.jpg',
    bio: {
      sv: 'Jag har ett stort intresse för spelutveckling och backend till hemsidor och program. Under min tid på TE4 har jag jobbat mycket med C# och Unity, där jag gillar att kombinera kreativitet och problemlösning — från spelmekanik och fysik till system som håller ihop ett helt projekt. Vid sidan av spelen har jag också utforskat webb- och backendutveckling med TypeScript och JavaScript, vilket gett mig en bredare förståelse för hur frontend, backend och logik hänger ihop. Jag tycker om att börja med en idé och se den växa fram till något färdigt, oavsett om det är ett spel, ett verktyg eller en hemsida. På fritiden gillar jag att experimentera med egna projekt, testa nya ramverk och hela tiden lära mig något nytt.',
      en: 'I have a strong interest in game development and backend work for websites and applications. During my time at TE4, I have worked a lot with C# and Unity, where I enjoy combining creativity and problem-solving — from game mechanics and physics to the systems that tie a whole project together. Alongside games I have also explored web and backend development with TypeScript and JavaScript, which has given me a broader understanding of how frontend, backend and logic fit together. I like starting with an idea and watching it grow into something finished, whether that is a game, a tool or a website. In my free time I enjoy experimenting with my own projects, trying out new frameworks and constantly learning something new.',
    },
    quote: {
      sv: 'Koden kördes rätt på första försöket? Den ljuger för dig.',
      en: 'Did the code run correctly on the first try? It\'s lying to you.',
    },
    thesis: {
      sv: '"Hur påverkas junior utvecklares lärande av AI-verktyg?"',
      en: '"How does the learning of junior developers get affected by AI tools?"',
    },
    projects: ['back-to-zero', 'ai-guard', 'snacky', 'hypixel-skyblock-tracker']
  },
  {
    id: 'damian',
    fullName: 'Damian Dacic',
    shortName: 'Damian',
    role: { sv: 'webbutveckling', en: 'web dev' },
    stack: ['React', 'Java', 'JS', 'HTML', 'CSS', 'Svelte', 'Vue'],
    linkedin: 'damian-dacic-88934537b',
    github: 'Ghost-With-A-Shoe',
    photo: '/photos/portrait-02.jpg',
    bio: {
      sv: 'Jag gillar att bygga grejer och lära mig nya saker — helst samtidigt. Webbutveckling är där jag trivs bäst, och jag hoppar gärna mellan ramverk som React, Svelte och Vue beroende på vad projektet behöver. På TE4 vid NTI Gymnasiet Helsingborg har jag jobbat med bland annat RoastBattles, klassens API-projekt i React + Vite, och plockat upp lite av allt på vägen — från frontend och styling till lite Java på baksidan. När jag inte kodar är jag oftast på jakt efter nästa sak att testa.',
      en: 'I like to build things and learn new stuff — preferably at the same time. Web development is where I feel most at home, and I happily jump between frameworks like React, Svelte and Vue depending on what the project needs. At TE4 (NTI Gymnasiet Helsingborg) my work has included RoastBattles, the class API project built with React + Vite, and I have picked up a bit of everything along the way — from frontend and styling to some Java on the back. When I am not coding I am usually hunting for the next thing to try.',
    },
    quote: {
      sv: "If it ain't broke don't fix it",
      en: "If it ain't broke don't fix it",
    },
    projects: ['roastbattles', 'ai-overwatch', 'verdenafall', 'webbshop'],
  },
  {
    id: 'finn',
    fullName: 'Finn Skattum',
    shortName: 'Finn',
    role: { sv: 'systemutveckling', en: 'systems' },
    stack: ['React', 'Java', 'JS', 'HTML', 'CSS', 'Figma', 'Vue', 'Node'],
    github: 'Finn-S123',
    linkedin: 'finn-skattum-11387237b',
    bio: {
      sv: 'Jag går TE4 vid NTI Gymnasiet Helsingborg och gillar att ta ett projekt från idé till något som faktiskt fungerar — oavsett om det handlar om gränssnitt i React eller Vue, logik i Java, eller att skissa upp helheten i Figma först. Under utbildningen har jag bland annat varit med och byggt AI-Overwatch, där vi satte ihop ett dashboard för att hålla koll på AI-beteenden. Jag lär mig snabbast genom att göra och hoppar gärna mellan språk och ramverk beroende på vad uppgiften kräver.',
      en: 'I am studying TE4 at NTI Gymnasiet Helsingborg and like taking a project from idea to something that actually works — whether that means interfaces in React or Vue, logic in Java, or sketching the whole thing in Figma first. During the programme I have worked on AI-Overwatch, where we built a dashboard for keeping track of AI behaviour. I learn fastest by doing and happily jump between languages and frameworks depending on what the task needs.',
    },
    quote: {
      sv: 'Jag vill bygga saker som fungerar i praktiken, inte bara ser bra ut i en demo.',
      en: 'I want to build things that work in practice, not just look good in a demo.',
    },
    photo: '/photos/portrait-06.jpg',
    projects: ['back-to-zero', 'ai-overwatch', 'ai-guard', 'steamdream', 'webbshop'],
  },
  {
    id: 'Ibraheem',
    fullName: 'Ibraheem Al-Shabee',
    shortName: 'Ibbe',
    role: { sv: 'frontend', en: 'frontend' },
    stack: ['HTML', 'CSS', 'JS', 'PHP'],
    github: 'Ibbske',
    linkedin: 'ibraheem-al-shabee-07796737a',
    photo: '/photos/portrait-11.jpg',
    bio: {
      sv: 'Jag studerar för närvarande på TE4 med inriktning mot IT och webbutveckling. Jag har ett särskilt intresse för webbdesign och tycker att det är intressant att arbeta med både det visuella och det tekniska i utvecklingsprocessen. Genom mina studier och egna projekt har jag utvecklat kunskaper inom webbutveckling och fortsätter att lära mig nya tekniker och arbetssätt. Jag uppskattar möjligheten att skapa webbplatser som är både funktionella och användarvänliga.',
      en: 'I am currently studying TE4 with a specialization in IT and web development. I have a particular interest in web design and enjoy working with both the visual and technical aspects of the development process. Through my studies and personal projects, I have developed my skills in web development and continue to learn new technologies and methods. I appreciate the opportunity to create websites that are both functional and user-friendly',
    },
    quote: {
      sv: 'Jag vill bygga webbsidor som hade kunnat användas av alla, oavsett teknisk kunskap.',
      en: 'I want to build websites that could be used by anyone, regardless of technical knowledge.',
    },
    projects: ['ai-overwatch', 'Aiming For Disaster', 'steamdream', 'snacky'],
  },
  {
    id: 'isak-c',
    fullName: 'Isak Carlsson',
    shortName: 'Isak C.',
    role: { sv: 'frontend', en: 'frontend' },
    stack: ['HTML', 'CSS', 'React', 'Figma', 'JS', 'WordPress', 'C#'],
    github: 'isakcarlsson25',
    linkedin: 'isak-carlsson-73076737a',
    isAuthor: true,
    photo: '/photos/portrait-08.jpg',
    bio: {
      sv: 'Jag har gått TE4 med inriktning inom teknik och har ett stort intresse för webbutveckling. Under min utbildning och på fritiden har jag arbetat mycket med att utveckla webbapplikationer, där frontend är det område jag tycker är mest intressant. Jag gillar att skapa användarvänliga och moderna gränssnitt och utvecklas ständigt inom nya tekniker och ramverk. På fritiden gillar jag att kolla på fotboll och träna på gym, vilket hjälper mig att hålla både fokus och motivation uppe.',
      en: 'I completed TE4 with a focus on technology and have a strong interest in web development. During my studies and in my free time, I have worked extensively with developing web applications, where frontend development is the area I enjoy the most. I like creating user-friendly and modern interfaces, and I am constantly improving my skills by learning new technologies and frameworks. In my free time, I enjoy watching football and going to the gym, which helps me stay focused and motivated.',
    },
    quote: {
      sv: 'Jag vill skapa saker som gör skillnad och är kul att använda.',
      en: 'I want to create things that make a difference and are fun to use.',
    },
    projects: ['ai-overwatch', 'verdenafall', 'steamdream', 'snacky'],
    thesis: {
      sv: '"Hur påverkas nyexaminerade utvecklare genom AI:s utveckling på arbetsmarknaden?"',
      en: '"How are newly graduated developers affected by the development of AI in the job market?"',
    },
  },
]
