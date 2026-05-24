import { ProjektSection } from '../sections/ProjektSection'
import { ChapterNav } from '../components/ChapterNav'

export function Projekt() {
  return (
    <main className="min-h-screen">
      <ProjektSection />
      <ChapterNav current="/projekt" />
    </main>
  )
}
