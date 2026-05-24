import { AplSection } from '../sections/AplSection'
import { ChapterNav } from '../components/ChapterNav'

export function Apl() {
  return (
    <main className="min-h-screen">
      <AplSection />
      <ChapterNav current="/apl" />
    </main>
  )
}
