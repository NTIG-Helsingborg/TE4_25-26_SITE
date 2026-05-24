import { GalleriSection } from '../sections/GalleriSection'
import { ChapterNav } from '../components/ChapterNav'

export function Galleri() {
  return (
    <main className="min-h-screen">
      <GalleriSection />
      <ChapterNav current="/galleri" />
    </main>
  )
}
