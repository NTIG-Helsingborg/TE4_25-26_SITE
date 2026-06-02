import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Nav } from './components/Nav'
import { Footer } from './components/Footer'
import { FilmGrain } from './components/FilmGrain'
import { ChapterScrubber } from './components/ChapterScrubber'
import { Home } from './pages/Home'
import { Klassen } from './pages/Klassen'
import { Projekt } from './pages/Projekt'
import { ProjectCategory } from './pages/ProjectCategory'
import { Apl } from './pages/Apl'
import { Tidslinje } from './pages/Tidslinje'
import { Galleri } from './pages/Galleri'
import { Om } from './pages/Om'
import { StudentProfile } from './pages/StudentProfile'

function App() {
  const location = useLocation()

  // Reset scroll to top on route change, unless navigating to an in-page anchor.
  useEffect(() => {
    if (!location.hash) window.scrollTo(0, 0)
  }, [location.pathname, location.hash])

  return (
    <>
      <div className="grid-underlay" />
      <FilmGrain />

      <Nav />
      {location.pathname === '/' && <ChapterScrubber />}

      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.36, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10"
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/klassen" element={<Klassen />} />
            <Route path="/projekt" element={<Projekt />} />
            <Route path="/projekt/:category" element={<ProjectCategory />} />
            <Route path="/apl" element={<Apl />} />
            <Route path="/tidslinje" element={<Tidslinje />} />
            <Route path="/galleri" element={<Galleri />} />
            <Route path="/om" element={<Om />} />
            <Route path="/elev/:id" element={<StudentProfile />} />
          </Routes>
        </motion.div>
      </AnimatePresence>

      <Footer />
    </>
  )
}

export default App
