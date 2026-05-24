import { TidslinjeSection } from '../sections/TidslinjeSection'
import { ChapterNav } from '../components/ChapterNav'

export function Tidslinje() {
  return (
    <main className="min-h-screen">
      <TidslinjeSection />
      <ChapterNav current="/tidslinje" />
    </main>
  )
}
