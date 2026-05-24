import { KlassenSection } from '../sections/KlassenSection'
import { ChapterNav } from '../components/ChapterNav'

export function Klassen() {
  return (
    <main className="min-h-screen">
      <KlassenSection />
      <ChapterNav current="/klassen" />
    </main>
  )
}
